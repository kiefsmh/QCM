export const meta = {
  title: 'Érythropoïèse, hématies et hémolyse',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quel ordre correspond à la différenciation de la lignée érythrocytaire ?',
    options: [
      { text: 'CSH → BFU-E et CFU-E → érythroblastes → réticulocytes → hématies', correct: true, correction: 'Oui boss 🧠 On passe des cellules souches aux progéniteurs, puis aux précurseurs et aux cellules matures.' },
      { text: 'Réticulocytes → CSH → érythroblastes → hématies', correct: false, correction: 'Faux. Le réticulocyte est un stade tardif, pas le point de départ de la lignée.' },
      { text: 'CSH → hématies → érythroblastes → réticulocytes', correct: false, correction: 'Non. L’hématie est l’aboutissement de la maturation.' },
      { text: 'CSH → CFU-E → hématies nucléées → BFU-E', correct: false, correction: 'Non chef. L’hématie mature n’est pas nucléée et BFU-E précède CFU-E.' },
      { text: 'CSH → érythroblastes → BFU-E et CFU-E → hématies', correct: false, correction: 'Non chef. Les progéniteurs BFU-E et CFU-E précèdent les érythroblastes.' },
    ],
    explanation: 'L’érythropoïèse conduit des cellules souches hématopoïétiques aux progéniteurs BFU-E puis CFU-E, aux érythroblastes, aux réticulocytes et finalement aux hématies. (Cours, p. 2–3)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Concernant les progéniteurs et la maturation des précurseurs érythrocytaires, quelles propositions sont exactes ?',
    options: [
      { text: 'Selon le cours, la multiplication à partir d’un précurseur peut produire 16 réticulocytes', correct: true, correction: 'Exact 🎯 Les précurseurs se multiplient avant la perte du noyau.' },
      { text: 'BFU-E est le premier progéniteur spécifique de la lignée cité dans le cours', correct: true, correction: 'Exact 🧠 BFU-E est suivi de CFU-E dans cette lignée.' },
      { text: 'Les progéniteurs sont reconnus uniquement par une morphologie caractéristique au microscope', correct: false, correction: 'Faux. Le cours souligne leur ressemblance morphologique avec les cellules souches.' },
      { text: 'Le schéma présente l’ordre proérythroblaste → érythroblastes basophiles I puis II → polychromatophile → acidophile', correct: true, correction: 'Oui boss. L’érythroblaste acidophile précède le réticulocyte.' },
      { text: 'Les érythroblastes précèdent les progéniteurs BFU-E et CFU-E', correct: false, correction: 'Non chef. L’ordre est progéniteurs, puis précurseurs.' },
    ],
    explanation: 'Le schéma distingue le proérythroblaste, les érythroblastes basophiles I et II, le polychromatophile puis l’acidophile. Selon le cours, la multiplication d’un précurseur permet de donner 16 réticulocytes. Les progéniteurs peuvent aussi être étudiés par leur formation de colonies en culture. (Cours, p. 2–3)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel événement transforme l’érythroblaste acidophile en réticulocyte ?',
    options: [
      { text: 'La transformation du noyau en un organite acidophile contenant l’hémoglobine', correct: false, correction: 'Non chef. L’hémoglobine s’accumule dans le cytoplasme ; le noyau est expulsé.' },
      { text: 'La division du noyau sans modification du cytoplasme', correct: false, correction: 'Non chef. Ce stade se caractérise par l’expulsion du noyau.' },
      { text: 'La réapparition du marqueur CD34 à la surface', correct: false, correction: 'Non. CD34 est associé aux stades immatures cités, pas à cette transition de maturation.' },
      { text: 'La disparition préalable de tout l’ARN, avec conservation du noyau', correct: false, correction: 'Faux. Le réticulocyte conserve encore de l’ARN, mais perd son noyau.' },
      { text: 'L’expulsion du noyau, avec persistance transitoire d’ARN', correct: true, correction: 'Oui boss 🎯 Le réticulocyte n’a plus de noyau mais possède encore de l’ARN résiduel.' },
    ],
    explanation: 'L’érythroblaste acidophile expulse son noyau et devient un réticulocyte. Celui-ci poursuit sa maturation sans se diviser et perd ensuite son ARN résiduel pour devenir une hématie. (Cours, p. 3)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles transformations accompagnent la maturation érythrocytaire ?',
    options: [
      { text: 'La disparition de l’ARN résiduel accompagne le passage du réticulocyte à l’hématie', correct: true, correction: 'Oui 🎯 Cet ARN permet justement d’identifier les réticulocytes.' },
      { text: 'La taille des cellules diminue progressivement', correct: true, correction: 'Exact 🧠 Les cellules deviennent de plus en plus petites au cours de la différenciation.' },
      { text: 'Le réticulocyte mature sans poursuivre les divisions cellulaires', correct: true, correction: 'Exact. Il a perdu le noyau nécessaire aux divisions.' },
      { text: 'Le noyau acquiert l’hémoglobine et devient progressivement acidophile', correct: false, correction: 'Non chef. L’acidophilie liée à l’hémoglobine est cytoplasmique ; le noyau se condense puis est expulsé.' },
      { text: 'Le cytoplasme perd sa basophilie et devient plus acidophile avec l’accumulation d’hémoglobine', correct: true, correction: 'Oui boss. Le changement de coloration concerne le cytoplasme, pas un noyau devenu acidophile.' },
    ],
    explanation: 'La maturation associe une diminution de taille et une modification de coloration du cytoplasme, liée notamment à l’accumulation d’hémoglobine. Le noyau est expulsé, puis le réticulocyte perd son ARN résiduel. La phrase du support attribuant l’acidophilie au noyau est corrigée ici. (Cours, p. 3)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quel est le principe de l’immunophénotypage décrit dans le cours ?',
    options: [
      { text: 'Mesurer exclusivement la taille des cellules', correct: false, correction: 'Faux. L’immunophénotypage étudie des marqueurs, pas seulement une dimension cellulaire.' },
      { text: 'Colorer uniquement le fer intracellulaire', correct: false, correction: 'Non chef. La mise en évidence du fer repose notamment sur la coloration de Perls.' },
      { text: 'Déduire tous les marqueurs de la cellule uniquement de sa couleur au microscope', correct: false, correction: 'Non chef. Leur identification repose sur la reconnaissance antigène-anticorps.' },
      { text: 'Identifier uniquement les hématies grâce à leur ARN résiduel', correct: false, correction: 'Non. L’ARN résiduel permet de reconnaître les réticulocytes.' },
      { text: 'Utiliser des anticorps pour reconnaître des antigènes, notamment à la surface des cellules', correct: true, correction: 'Oui boss 🧠 Les anticorps repèrent les marqueurs exprimés par la cellule.' },
    ],
    explanation: 'L’immunophénotypage utilise des anticorps pour mettre en évidence des antigènes cellulaires. Les profils de marqueurs peuvent aider à reconnaître les stades immatures et leur différenciation. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Concernant les marqueurs et l’étude de la moelle osseuse, quelles propositions sont exactes ?',
    options: [
      { text: 'CD34 marque les cellules souches citées dans le cours, mais pas les hématies matures', correct: true, correction: 'Exact 🧠 Il ne faut pas attribuer aux cellules matures les marqueurs de leurs stades immatures.' },
      { text: 'Des îlots érythroblastiques peuvent s’organiser autour de macrophages dans la moelle', correct: true, correction: 'Exact. Le cours relie ces macrophages à une réserve de fer utile au développement des cellules.' },
      { text: 'La présence physiologique d’érythroblastes est limitée au sang périphérique', correct: false, correction: 'Faux. Ils sont normalement dans la moelle et absents du sang périphérique.' },
      { text: 'Certains marqueurs sont acquis ou perdus au cours de la différenciation', correct: true, correction: 'Oui boss. Le profil antigénique évolue avec le stade cellulaire.' },
      { text: 'Tous les stades érythrocytaires portent obligatoirement les mêmes marqueurs', correct: false, correction: 'Non chef. Les marqueurs changent au cours de la différenciation.' },
    ],
    explanation: 'Le cours décrit l’évolution des marqueurs de différenciation, l’absence de CD34 sur les cellules matures et l’organisation possible d’îlots érythroblastiques autour de macrophages médullaires. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel examen permet d’étudier les érythroblastes médullaires par ponction, coloration et comptage ?',
    options: [
      { text: 'Le myélogramme', correct: true, correction: 'Oui boss 🎯 Il étudie les cellules obtenues par aspiration de moelle osseuse.' },
      { text: 'La mesure de l’hématocrite seule', correct: false, correction: 'Non chef. L’hématocrite concerne la fraction du sang occupée par les hématies.' },
      { text: 'Le comptage des réticulocytes circulants', correct: false, correction: 'Faux. Il reflète la production érythrocytaire, mais ne correspond pas à une ponction médullaire.' },
      { text: 'Le dosage de ferritine sanguine', correct: false, correction: 'Non chef. Il renseigne sur les réserves en fer, pas directement sur la proportion d’érythroblastes médullaires.' },
      { text: 'Le dosage d’EPO seule', correct: false, correction: 'Non. L’EPO est une hormone régulatrice ; son dosage ne donne pas ce comptage médullaire.' },
    ],
    explanation: 'Le myélogramme repose sur une ponction liquide de moelle osseuse suivie d’une coloration et d’un comptage. Selon le texte du cours, les érythroblastes représentent physiologiquement 15 à 25 % des cellules médullaires ; ils sont normalement absents du sang périphérique. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Concernant le comptage des réticulocytes, quelles propositions sont exactes ?',
    options: [
      { text: 'Le seul nombre de réticulocytes permet d’affirmer une anémie sans connaître l’hémoglobine', correct: false, correction: 'Non chef. L’anémie est définie par une diminution de l’hémoglobine ; les réticulocytes la caractérisent ensuite.' },
      { text: 'Il peut utiliser un colorant fluorescent mettant en évidence l’ARN', correct: true, correction: 'Exact 🧠 L’automate repère l’ARN résiduel des réticulocytes.' },
      { text: 'Un résultat exprimé en pourcentage doit être rapporté au nombre d’hématies pour obtenir la concentration absolue', correct: true, correction: 'Oui 🎯 On ne compare pas directement un pourcentage au seuil exprimé en G/L.' },
      { text: 'La numération des réticulocytes renseigne sur la réponse érythropoïétique', correct: true, correction: 'Exact. Elle aide à caractériser la réponse de la moelle, notamment en présence d’une anémie.' },
      { text: 'Une coloration au bleu de Crésyl peut également être utilisée', correct: true, correction: 'Oui boss. Cette technique est citée dans le cours.' },
    ],
    explanation: 'Les réticulocytes sont reconnus par leur ARN résiduel, avec fluorescence ou bleu de Crésyl. Leur concentration absolue contribue à caractériser une anémie déjà établie sur l’hémoglobine. (Cours, p. 3–4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Chez un patient dont l’anémie est confirmée par une hémoglobine basse, les hématies sont à 3 T/L et les réticulocytes à 10 %. Quelle concentration absolue et quelle catégorie selon le seuil du cours en déduit-on ?',
    options: [
      { text: '0,3 G/L ; anémie arégénérative', correct: false, correction: 'Faux. La valeur 0,3 est en T/L : il faut multiplier par 1 000 pour obtenir des G/L.' },
      { text: '300 G/L ; anémie régénérative', correct: true, correction: 'Oui boss 🎯 0,10 × 3 = 0,3 T/L = 300 G/L, au-dessus de 120 G/L.' },
      { text: '3 000 G/L ; anémie régénérative', correct: false, correction: 'Non. 3 000 G/L correspondent à l’ensemble des hématies, pas aux seuls réticulocytes.' },
      { text: '10 G/L ; anémie arégénérative', correct: false, correction: 'Non chef. Le pourcentage ne peut pas être lu directement comme une concentration en G/L.' },
      { text: '30 G/L ; anémie arégénérative', correct: false, correction: 'Non chef. 10 % de 3 T/L donnent 0,3 T/L, soit 300 G/L.' },
    ],
    explanation: 'La concentration absolue est 3 T/L × 10 % = 0,3 T/L = 300 G/L. Chez ce patient déjà identifié comme anémique, elle dépasse le seuil de 120 G/L retenu dans le cours et définit une anémie régénérative. (Cours, p. 3–4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Pour une anémie déjà confirmée, quelles interprétations de la numération absolue des réticulocytes correspondent au cours ?',
    options: [
      { text: 'Une réponse régénérative oriente vers une cause périphérique avec compensation médullaire', correct: true, correction: 'Exact 🧠 C’est l’orientation décrite par le tableau du support.' },
      { text: 'Une concentration supérieure à 120 G/L correspond à une anémie régénérative selon le seuil du cours', correct: true, correction: 'Exact 🎯 Le cours retient ce seuil pour la réponse régénérative.' },
      { text: 'Une absence de réponse régénérative démontre à elle seule un diagnostic étiologique précis', correct: false, correction: 'Faux. Elle oriente le bilan mais ne suffit pas à identifier une cause unique.' },
      { text: 'Un pourcentage de 10 % signifie toujours 100 G/L, quel que soit le nombre d’hématies', correct: false, correction: 'Non chef. Le résultat absolu dépend de la concentration totale d’hématies.' },
      { text: 'Une concentration inférieure à 120 G/L correspond à une anémie arégénérative selon le seuil du cours', correct: true, correction: 'Oui boss. La réponse médullaire est alors insuffisante dans cette classification.' },
    ],
    explanation: 'Le cours utilise le seuil de 120 G/L pour classer une anémie comme régénérative ou arégénérative. Le résultat oriente vers une cause périphérique compensée ou une réponse médullaire insuffisante, sans établir seul toute l’étiologie. (Cours, p. 3–4)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Chez un adulte anémique, la NFS indique Hb = 9 g/dL, hématocrite = 0,27 L/L et hématies = 3,6 T/L. Quel est le VGM et comment le classer selon les valeurs du cours ?',
    options: [
      { text: '75 fL : microcytose', correct: true, correction: 'Oui boss 🎯 VGM = 0,27 / 3,6 × 1 000 = 75 fL. Il est inférieur à 80 fL.' },
      { text: '133 fL : macrocytose', correct: false, correction: 'Non. Le VGM rapporte l’hématocrite au nombre d’hématies, avec les conversions adaptées, et non l’inverse.' },
      { text: '75 pg : microcytose', correct: false, correction: 'Non chef. Le VGM est un volume exprimé en fL ; le pg est l’unité de la TCMH, une masse d’hémoglobine par cellule.' },
      { text: '750 fL : macrocytose', correct: false, correction: 'Faux. Le résultat est dix fois trop élevé ; le VGM calculé est 75 fL.' },
      { text: '7,5 fL : microcytose', correct: false, correction: 'Non chef. Avec Ht en L/L et GR en T/L, il faut multiplier le rapport par 1 000 : on obtient 75 fL.' },
    ],
    explanation: 'Avec ces unités, VGM = Ht / GR × 1 000 = 75 fL, donc microcytose. La CCMH est Hb / Ht = 9 / 0,27 ≈ 33,3 g/dL, et la TCMH est Hb × 10 / GR = 25 pg par cellule. Le cours donne VGM 80–100 fL, CCMH 32–36 g/dL et TCMH 27–34 pg. Ces trois indices décrivent respectivement volume, concentration et teneur moyenne par hématie. (Cours, p. 4)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quels éléments sont nécessaires ou contribuent à l’érythropoïèse selon le cours ?',
    options: [
      { text: 'Le fer et la vitamine B6 participent à la synthèse de l’hémoglobine', correct: true, correction: 'Exact 🧠 Ils figurent parmi les facteurs exogènes indispensables cités.' },
      { text: 'Le SCF agit sur les cellules souches', correct: true, correction: 'Exact. Son action est plus précoce que celle de l’EPO dans la description du cours.' },
      { text: 'Les vitamines B9 et B12 sont nécessaires à la synthèse de l’ADN', correct: true, correction: 'Oui boss. Elles sont importantes pour les cellules en multiplication.' },
      { text: 'L’interféron gamma, le TNF-alpha et le TGF-bêta sont cités comme des facteurs stimulants de l’érythropoïèse', correct: false, correction: 'Non chef. Ils sont cités parmi les facteurs inhibiteurs.' },
      { text: 'L’EPO stimule la lignée érythrocytaire', correct: true, correction: 'Oui 🎯 C’est un facteur majeur de régulation de l’érythropoïèse.' },
    ],
    explanation: 'Le cours cite le fer et la B6 pour la synthèse d’hémoglobine, la B9 et la B12 pour l’ADN, ainsi que des facteurs de croissance tels que SCF et EPO. Certains médiateurs, dont IFN-gamma, TNF-alpha et TGF-bêta, sont inhibiteurs. (Cours, p. 4)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement la production et la signalisation de l’EPO ?',
    options: [
      { text: 'Elle est produite en réponse à une hyperoxie et bloque la prolifération érythrocytaire', correct: false, correction: 'Non. L’hypoxie stimule sa production et l’EPO favorise l’érythropoïèse.' },
      { text: 'Elle est principalement produite par les macrophages médullaires et se fixe sur la ferroportine', correct: false, correction: 'Non chef. Le cours situe sa production dans les cellules péritubulaires rénales ; la ferroportine exporte le fer.' },
      { text: 'Elle est produite par le foie pour dégrader la ferroportine', correct: false, correction: 'Faux. Cette description correspond à l’hepcidine.' },
      { text: 'Elle est produite par les cellules péritubulaires du rein en réponse à l’hypoxie et agit par un récepteur associé à JAK2', correct: true, correction: 'Oui boss 🎯 Rein, hypoxie et signalisation via JAK2 associée au récepteur : les trois notions clés.' },
      { text: 'Son récepteur possède une activité tyrosine kinase intrinsèque correspondant à JAK2', correct: false, correction: 'Non chef. JAK2 est une kinase associée au récepteur de l’EPO ; elle n’est pas son activité intrinsèque.' },
    ],
    explanation: 'L’hypoxie stimule la production rénale d’EPO par les cellules péritubulaires. L’EPO se fixe sur un récepteur de cytokine associé à JAK2, qui transmet le signal intracellulaire ; le récepteur n’est pas lui-même une tyrosine kinase. (Cours, p. 5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Concernant la régulation par l’EPO, quelles propositions sont exactes ?',
    options: [
      { text: 'Le cours situe son action des BFU-E tardives jusqu’aux érythroblastes basophiles', correct: true, correction: 'Oui boss. Elle agit à des stades déjà engagés dans la lignée érythrocytaire.' },
      { text: 'Son action favorise la prolifération et la différenciation de cellules de la lignée érythrocytaire', correct: true, correction: 'Exact 🧠 C’est l’effet final de sa signalisation décrit dans le cours.' },
      { text: 'Une insuffisance de production d’EPO entraîne obligatoirement une hyperproduction de réticulocytes', correct: false, correction: 'Non chef. Un défaut d’EPO peut au contraire diminuer la stimulation de l’érythropoïèse.' },
      { text: 'Dans une réponse physiologique conservée, une diminution de l’oxygénation peut augmenter la production d’EPO', correct: true, correction: 'Exact. Le signal d’hypoxie stimule sa production.' },
      { text: 'Des cytokines inflammatoires ou certains traitements comme le cisplatine peuvent altérer sa production', correct: true, correction: 'Oui 🎯 Cette altération peut contribuer à un risque d’anémie.' },
    ],
    explanation: 'L’EPO stimule des stades engagés de la lignée érythrocytaire. Sa production réagit à l’hypoxie et peut être altérée par l’inflammation ou des traitements, avec un risque anémique. (Cours, p. 5)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle association décrit correctement les fonctions de la transferrine et de la ferritine ?',
    options: [
      { text: 'Transferrine et ferritine : deux transporteurs membranaires d’export du fer', correct: false, correction: 'Non chef. Il ne faut pas les confondre avec la ferroportine.' },
      { text: 'Transferrine : synthèse d’EPO ; ferritine : export intestinal', correct: false, correction: 'Faux. L’export intestinal est assuré par la ferroportine.' },
      { text: 'Transferrine : stockage ; ferritine : transport sanguin', correct: false, correction: 'Non chef. Les deux fonctions sont inversées.' },
      { text: 'Transferrine : transport sanguin ; ferritine : stockage', correct: true, correction: 'Oui boss 🧠 La transferrine transporte le fer, la ferritine le stocke.' },
      { text: 'Transferrine : réduction de Fe3+ ; ferritine : destruction des hématies', correct: false, correction: 'Non. Ces propositions ne correspondent pas à leurs fonctions.' },
    ],
    explanation: 'La transferrine assure le transport du fer dans le sang et la ferritine son stockage. La ferritine sanguine contribue à l’évaluation des réserves en fer, avec une interprétation adaptée au contexte. (Cours, p. 5–6)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Concernant la répartition et le renouvellement du fer dans l’organisme, quelles propositions correspondent aux ordres de grandeur du cours ?',
    options: [
      { text: 'Environ 1 g correspond au fer de réserve, stocké notamment dans la ferritine', correct: true, correction: 'Exact. Il s’agit d’une quantité de fer stocké, pas d’un gramme de protéine ferritine.' },
      { text: 'Selon le cours, environ 10 % des apports quotidiens sont absorbés', correct: true, correction: 'Oui 🧠 C’est un ordre de grandeur du support, pas une absorption fixe pour chaque aliment et chaque situation.' },
      { text: 'La plus grande part, environ 3 g, correspond au fer fonctionnel', correct: true, correction: 'Oui boss. Il est notamment présent dans l’hémoglobine et la myoglobine.' },
      { text: 'Le corps contient environ 4 à 5 g de fer', correct: true, correction: 'Exact 🎯 C’est la quantité totale donnée dans le support.' },
      { text: 'La majeure partie du fer de l’organisme circule librement dans le plasma', correct: false, correction: 'Non chef. Le fer circulant est une petite fraction liée à des protéines de transport.' },
    ],
    explanation: 'Selon le cours, les 4 à 5 g de fer corporel comprennent environ 3 g de fer fonctionnel et 1 g de réserve ; le fer circulant représente seulement quelques milligrammes. L’absorption est donnée comme environ 10 % des apports quotidiens. (Cours, p. 5)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quel est le principal site intestinal d’absorption du fer dans le cours ?',
    options: [
      { text: 'Le duodénum, avec une participation plus faible du jéjunum', correct: true, correction: 'Oui boss 🎯 Le duodénum est le site majeur indiqué.' },
      { text: 'Le jéjunum uniquement, sans participation du duodénum', correct: false, correction: 'Non chef. Le duodénum est justement le site principal, avec une participation plus faible du jéjunum.' },
      { text: 'Le côlon', correct: false, correction: 'Non chef. L’absorption principale est située bien plus en amont.' },
      { text: 'L’iléon terminal uniquement', correct: false, correction: 'Faux. Le cours cite surtout le duodénum.' },
      { text: 'L’estomac exclusivement', correct: false, correction: 'Non. Le passage vers l’entérocyte a lieu principalement dans le duodénum.' },
    ],
    explanation: 'L’absorption du fer se fait majoritairement dans le duodénum, avec une participation plus faible du jéjunum. (Cours, p. 6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Concernant le passage intestinal du fer, quelles propositions sont exactes ?',
    options: [
      { text: 'La ferroportine permet l’export du fer de l’entérocyte vers le sang', correct: true, correction: 'Exact 🎯 Elle assure le passage de sortie de la cellule intestinale.' },
      { text: 'Le fer non héminique sous forme Fe3+ doit être réduit en Fe2+ avant son transport par DMT1', correct: true, correction: 'Oui boss. La réduction précède le transport : il faut distinguer les deux étapes.' },
      { text: 'La ferritine remplace la ferroportine pour exporter le fer intestinal', correct: false, correction: 'Faux. La ferritine sert au stockage ; l’export est assuré par la ferroportine.' },
      { text: 'DMT1 est un transporteur permettant l’entrée de Fe2+ dans l’entérocyte', correct: true, correction: 'Exact 🧠 DMT1 transporte le fer ferreux ; ce n’est pas une enzyme de réduction.' },
      { text: 'DMT1 est l’enzyme qui réduit directement Fe3+ en Fe2+', correct: false, correction: 'Non chef. C’est une coquille du support : DMT1 est un transporteur, pas la ferriréductase.' },
    ],
    explanation: 'Le Fe3+ non héminique doit être réduit en Fe2+ avant l’entrée par DMT1. DMT1 est un transporteur, contrairement à la formulation erronée du support. La ferroportine permet ensuite l’export du fer vers le sang. (Cours, p. 6)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quelle hormone produite par le foie diminue la disponibilité du fer en agissant sur la ferroportine ?',
    options: [
      { text: 'L’hepcidine', correct: true, correction: 'Oui boss 🧠 L’hepcidine hépatique diminue l’export du fer via la ferroportine.' },
      { text: 'Le SCF', correct: false, correction: 'Faux. Le SCF est un facteur de croissance des cellules souches, pas cette hormone de régulation du fer.' },
      { text: 'L’EPO', correct: false, correction: 'Non chef. L’EPO est produite principalement par le rein et stimule l’érythropoïèse.' },
      { text: 'La ferritine', correct: false, correction: 'Non chef. La ferritine stocke le fer ; elle n’est pas l’hormone hépatique recherchée.' },
      { text: 'La transferrine', correct: false, correction: 'Non. La transferrine est une protéine de transport du fer.' },
    ],
    explanation: 'L’hepcidine est produite par le foie. Elle régule négativement l’export du fer en favorisant l’internalisation et la dégradation de la ferroportine. (Cours, p. 7)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles conséquences sont attendues lorsque l’hepcidine augmente ?',
    options: [
      { text: 'Une diminution de la libération du fer par les macrophages', correct: true, correction: 'Oui boss. Les macrophages possèdent eux aussi de la ferroportine.' },
      { text: 'Une diminution de l’export du fer des entérocytes vers le sang', correct: true, correction: 'Exact 🧠 L’action sur la ferroportine réduit ce passage de sortie.' },
      { text: 'Une réduction de la disponibilité du fer circulant pour les tissus', correct: true, correction: 'Exact. Du fer peut rester séquestré dans les cellules de réserve.' },
      { text: 'Une augmentation systématique de l’export du fer par la ferroportine', correct: false, correction: 'Non chef. L’hepcidine diminue l’activité disponible de cette voie d’export.' },
      { text: 'Une impossibilité absolue d’utiliser tout le fer déjà présent dans l’organisme', correct: false, correction: 'Faux. Il faut parler de restriction de disponibilité et de séquestration, pas d’un arrêt absolu de toute utilisation.' },
    ],
    explanation: 'L’hepcidine réduit l’export du fer intestinal et macrophagique par son action sur la ferroportine. Elle peut donc restreindre la disponibilité du fer sans rendre impossible toute utilisation du fer corporel. (Cours, p. 7)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel ensemble de situations augmente les besoins en fer selon le cours ?',
    options: [
      { text: 'La prise simultanée de thé et de supplémentation en fer', correct: false, correction: 'Faux. Le thé peut réduire l’absorption ; ce n’est pas une situation physiologique de besoins augmentés citée ici.' },
      { text: 'La grossesse, la période du nourrisson et la croissance', correct: true, correction: 'Oui boss 🎯 Ces trois situations sont explicitement citées.' },
      { text: 'Uniquement le vieillissement, sans lien avec la croissance', correct: false, correction: 'Non chef. Le cours insiste sur les périodes de grossesse et de croissance.' },
      { text: 'Une surcharge en fer circulant imposant d’absorber davantage de fer', correct: false, correction: 'Non chef. La surcharge déclenche au contraire des mécanismes limitant sa disponibilité.' },
      { text: 'La disparition de toute production médullaire d’hématies', correct: false, correction: 'Non. Le besoin de fer de la moelle est lié à la production d’hémoglobine.' },
    ],
    explanation: 'Le cours cite la grossesse, la période du nourrisson et la croissance parmi les situations d’augmentation des besoins en fer. (Cours, p. 6)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quels éléments sont cités dans le cours comme pouvant diminuer l’absorption du fer ?',
    options: [
      { text: 'Les phosphoprotéines du jaune d’œuf', correct: true, correction: 'Oui 🎯 Elles sont également citées comme inhibitrices.' },
      { text: 'L’argile et les tétracyclines', correct: true, correction: 'Exact. Ces deux éléments figurent dans la liste du support.' },
      { text: 'Certains pansements digestifs pris en même temps qu’une supplémentation en fer', correct: true, correction: 'Oui boss. Le cours recommande d’éviter cette prise simultanée.' },
      { text: 'Les tannates et phytates, avec notamment le thé cité en exemple', correct: true, correction: 'Exact 🧠 Le cours les classe parmi les inhibiteurs de l’absorption.' },
      { text: 'L’absence de tout inhibiteur alimentaire rend obligatoirement l’absorption du fer égale à 100 %', correct: false, correction: 'Non chef. L’absorption reste régulée et ne concerne qu’une fraction des apports.' },
    ],
    explanation: 'Le cours cite l’argile, certains pansements digestifs, les tannates et phytates, les tétracyclines ainsi que les phosphoprotéines du jaune d’œuf parmi les facteurs réduisant l’absorption du fer. (Cours, p. 7)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle coloration met en évidence le fer sous forme de dépôts bleus ?',
    options: [
      { text: 'L’immunophénotypage CD34', correct: false, correction: 'Faux. CD34 est un marqueur cellulaire, pas une coloration du fer.' },
      { text: 'Le bleu de Crésyl, qui colore spécifiquement tout le fer de la cellule', correct: false, correction: 'Non chef. Le bleu de Crésyl est cité pour l’ARN résiduel des réticulocytes.' },
      { text: 'La seule fluorescence utilisée pour compter les réticulocytes', correct: false, correction: 'Non. Cette fluorescence recherche l’ARN, pas les dépôts de fer.' },
      { text: 'La coloration de Perls', correct: true, correction: 'Oui boss 🎯 Les dépôts de fer mis en évidence par Perls sont bleus, et non verdâtres comme écrit dans le support.' },
      { text: 'Une coloration de l’hémoglobine permettant à elle seule de compter les sidéroblastes en couronne', correct: false, correction: 'Non chef. La recherche des dépôts de fer repose ici sur la coloration de Perls.' },
    ],
    explanation: 'La coloration de Perls révèle les dépôts de fer en bleu. Elle permet notamment d’étudier la répartition du fer dans les érythroblastes, dont les sidéroblastes en couronne. La mention « verdâtre » du support est une erreur. (Cours, p. 7)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant les anémies liées au fer ou à la synthèse de l’hémoglobine, quelles propositions sont exactes ?',
    options: [
      { text: 'Une anémie inflammatoire peut être normocytaire ou devenir microcytaire', correct: true, correction: 'Exact. La microcytose est possible, mais ne doit pas être présentée comme obligatoire à tous les stades.' },
      { text: 'La thalassémie correspond à une anomalie génétique de synthèse de l’hémoglobine', correct: true, correction: 'Oui 🎯 Elle ne se confond pas avec une simple carence des réserves en fer.' },
      { text: 'Toute anémie inflammatoire est obligatoirement microcytaire dès son apparition', correct: false, correction: 'Non chef. Le support simplifie ce point : une présentation normocytaire est aussi possible.' },
      { text: 'Une ferritine basse contribue à identifier une carence martiale', correct: true, correction: 'Exact 🧠 Elle renseigne sur les réserves en fer.' },
      { text: 'L’inflammation peut augmenter l’hepcidine et favoriser une séquestration du fer', correct: true, correction: 'Oui boss. Le fer devient moins disponible malgré sa présence dans l’organisme.' },
    ],
    explanation: 'Le cours distingue la carence martiale, la restriction du fer liée à l’inflammation et la thalassémie. L’inflammation augmente l’hepcidine ; l’anémie associée n’est pas obligatoirement microcytaire. (Cours, p. 7 et 10–11)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement la vitamine B12 ?',
    options: [
      { text: 'Elle correspond au tétrahydrofolate, forme active de la vitamine B9', correct: false, correction: 'Non chef. Le THF appartient au métabolisme des folates, pas à l’identité de la B12.' },
      { text: 'Elle correspond aux cobalamines et contient un atome de cobalt', correct: true, correction: 'Oui boss 🧠 Cobalamines et cobalt : c’est le duo à retenir.' },
      { text: 'Elle correspond au facteur intrinsèque fabriqué par l’estomac', correct: false, correction: 'Faux. Le facteur intrinsèque est une protéine qui intervient dans son absorption, pas la vitamine elle-même.' },
      { text: 'Elle correspond aux folates et contient un atome de fer', correct: false, correction: 'Non chef. Les folates sont la vitamine B9 ; la B12 contient du cobalt.' },
      { text: 'Elle correspond à la transcobalamine II circulante', correct: false, correction: 'Non. La transcobalamine II transporte la B12 vers les tissus ; elle n’est pas la vitamine.' },
    ],
    explanation: 'La vitamine B12 regroupe les cobalamines et comporte un atome de cobalt. Elle doit être distinguée des folates, du facteur intrinsèque et des protéines qui la transportent. (Cours, p. 8 et 14–16)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant les fonctions des vitamines B12 et B9, quelles propositions sont exactes ?',
    options: [
      { text: 'La B12 est un cofacteur de la méthionine synthétase', correct: true, correction: 'Oui boss 🎯 Elle permet notamment la formation de méthionine à partir d’homocystéine.' },
      { text: 'Les folates interviennent dans la synthèse des nucléotides nécessaires à l’ADN', correct: true, correction: 'Exact. Le cours cite notamment leur participation à la synthèse de thymidine.' },
      { text: 'Les vitamines B12 et B9 participent au bon déroulement de la synthèse de l’ADN', correct: true, correction: 'Exact. Leur déficit peut perturber la division et la maturation des cellules sanguines.' },
      { text: 'La B9 est le cofacteur de la méthylmalonyl-CoA mutase permettant la formation mitochondriale de succinyl-CoA', correct: false, correction: 'Non chef. Cette réaction dépend de la B12 ; son attribution à la B9 dans le premier texte est une erreur.' },
      { text: 'La B12 a également un rôle dans le fonctionnement de la myéline', correct: true, correction: 'Oui 🧠 Son intérêt ne se limite pas aux globules rouges.' },
    ],
    explanation: 'B12 et B9 sont nécessaires à une synthèse correcte de l’ADN. La B12 intervient dans la méthionine synthétase et la fonction de la myéline ; la réaction mitochondriale de formation du succinyl-CoA dépend aussi de la B12, pas de la B9. (Cours, p. 8, 11 et 19 ; correction de l’attribution p. 8.)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Pourquoi un régime végétalien strict sans aliments enrichis ni supplémentation expose-t-il à une carence en B12 ?',
    options: [
      { text: 'Parce que la B12 et la B9 ne sont apportées que par la viande', correct: false, correction: 'Non chef. Les folates ont aussi des sources végétales, comme les légumes, les fruits secs et les céréales.' },
      { text: 'Parce que les végétaux détruisent directement le facteur intrinsèque', correct: false, correction: 'Non chef. Le problème décrit est un apport insuffisant en B12, pas une destruction du facteur intrinsèque.' },
      { text: 'Parce que les sources alimentaires naturelles de B12 citées sont d’origine animale', correct: true, correction: 'Oui boss 🎯 Viande, poisson, œufs, foie et produits laitiers sont les sources citées ; l’absence d’apport adapté crée le risque.' },
      { text: 'Parce que toute B12 alimentaire provient normalement de légumes verts', correct: false, correction: 'Faux. Les sources alimentaires naturelles citées sont surtout animales.' },
      { text: 'Parce que les réserves de B12 sont nécessairement épuisées en quelques jours', correct: false, correction: 'Non. Les réserves durent plusieurs années ; la carence d’apport peut donc se manifester tardivement.' },
    ],
    explanation: 'Les sources alimentaires naturelles de B12 décrites sont d’origine animale. Un régime végétalien strict sans apport adapté peut entraîner une carence, dont l’apparition peut être retardée par les réserves. (Cours, p. 8, 11 et 14)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Concernant les apports et les propriétés de la vitamine B9, quelles propositions sont exactes ?',
    options: [
      { text: 'Les légumes verts, fruits secs et céréales font partie des sources citées', correct: true, correction: 'Oui boss 🧠 Les folates peuvent être apportés par des aliments végétaux.' },
      { text: 'Le foie et le jaune d’œuf font également partie des sources citées', correct: true, correction: 'Exact. La B9 a des sources animales et végétales.' },
      { text: 'La B9 est thermolabile et une cuisson importante peut réduire sa teneur dans les aliments', correct: true, correction: 'Oui 🎯 Sa sensibilité à la chaleur compte dans la qualité des apports.' },
      { text: 'La B9 est uniquement apportée par les produits d’origine animale', correct: false, correction: 'Non chef. C’est la B12 que le cours associe aux sources naturelles animales ; la B9 a aussi des sources végétales.' },
      { text: 'La cuisson n’a aucun effet possible sur les folates alimentaires', correct: false, correction: 'Faux. Leur thermolabilité signifie justement qu’ils sont sensibles à la chaleur.' },
    ],
    explanation: 'La vitamine B9 possède des sources végétales et animales. Elle est thermolabile, ce qui peut diminuer les apports lors d’une cuisson importante. (Cours, p. 8, 11, 14 et 45)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quelle comparaison des réserves de B12 et de B9 correspond aux ordres de grandeur du cours ?',
    options: [
      { text: 'B12 et B9 : environ 4 ans chacune', correct: false, correction: 'Faux. Les réserves de folates sont beaucoup plus courtes.' },
      { text: 'B12 : environ 4 mois ; B9 : environ 3 ans', correct: false, correction: 'Non chef. Les réserves sont d’environ 4 ans pour B12 et quelques mois pour B9, pas l’inverse.' },
      { text: 'B12 : environ 3 mois ; B9 : environ 4 ans', correct: false, correction: 'Non chef. Tu as inversé les deux vitamines.' },
      { text: 'B12 et B9 : quelques jours chacune', correct: false, correction: 'Non. Les réserves citées se comptent en années pour B12 et en mois pour B9.' },
      { text: 'B12 : environ 4 ans ; B9 : environ 3 mois, soit 2 à 4 mois', correct: true, correction: 'Oui boss 🎯 Les réserves de B12 durent beaucoup plus longtemps que celles de B9.' },
    ],
    explanation: 'Le cours donne environ 4 ans de réserves pour la B12 et environ 3 mois pour la B9, avec une fourchette de 2 à 4 mois. Ce sont des ordres de grandeur, pas une date d’apparition identique chez tous les patients. (Cours, p. 8, 14, 17 et 45)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Concernant les mécanismes de carence en B12 ou B9, quelles propositions sont exactes ?',
    options: [
      { text: 'La grossesse augmente les besoins en folates', correct: true, correction: 'Oui 🎯 L’augmentation des besoins en B9 est explicitement citée.' },
      { text: 'Un apport alimentaire insuffisant peut provoquer une carence', correct: true, correction: 'Oui boss 🧠 Les réserves peuvent retarder son apparition, mais elles ne remplacent pas indéfiniment les apports.' },
      { text: 'Une anomalie d’absorption peut provoquer une carence même si l’alimentation apporte la vitamine', correct: true, correction: 'Exact. Recevoir la vitamine dans les aliments et l’absorber sont deux étapes différentes.' },
      { text: 'La présence de réserves rend toute carence en B12 impossible', correct: false, correction: 'Non chef. Les réserves sont importantes mais peuvent s’épuiser si le déficit d’apport ou d’absorption persiste.' },
      { text: 'Une carence en B12 prouve toujours un manque d’apport alimentaire, sans possibilité de malabsorption', correct: false, correction: 'Faux. Le cours cite notamment les anomalies du facteur intrinsèque comme cause à rechercher.' },
    ],
    explanation: 'Les carences peuvent résulter d’apports insuffisants, de troubles de l’absorption ou d’une augmentation des besoins. La grossesse augmente notamment les besoins en B9. (Cours, p. 14–18)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quelle succession décrit la voie habituelle d’absorption et de distribution de la vitamine B12 ?',
    options: [
      { text: 'B12 alimentaire → facteur intrinsèque → haptocorrine → absorption jéjunale → tissus', correct: false, correction: 'Non chef. L’haptocorrine intervient avant le facteur intrinsèque ; l’absorption active a lieu dans l’iléon terminal.' },
      { text: 'B12 alimentaire → facteur intrinsèque → absorption duodénale exclusive → haptocorrine obligatoire dans tous les tissus', correct: false, correction: 'Non chef. Le complexe B12–FI est absorbé dans l’iléon distal, et la transcobalamine II est importante pour l’apport tissulaire.' },
      { text: 'B12 alimentaire → transcobalamine II dans l’estomac → absorption colique → facteur intrinsèque plasmatique', correct: false, correction: 'Non. La première liaison décrite est à l’haptocorrine ; le facteur intrinsèque intervient dans la lumière digestive avant l’absorption iléale.' },
      { text: 'B12 alimentaire → haptocorrine → facteur intrinsèque → absorption iléale terminale → transport notamment par transcobalamine II vers les tissus', correct: true, correction: 'Oui boss 🎯 HC, puis FI, puis iléon terminal ; la transcobalamine II permet ensuite la distribution aux cellules utilisatrices.' },
      { text: 'B12 alimentaire → déconjugaison des polyglutamates → absorption jéjunale → THF', correct: false, correction: 'Faux. Tu décris ici des étapes du métabolisme des folates, pas celui de B12.' },
    ],
    explanation: 'La B12 libérée des aliments se lie à l’haptocorrine, puis au facteur intrinsèque. Le complexe B12–FI est absorbé dans l’iléon terminal ; la B12 circule ensuite liée à des protéines, notamment la transcobalamine II pour sa distribution tissulaire. (Cours, p. 15–16)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Concernant le facteur intrinsèque et l’absorption habituelle de B12, quelles propositions sont exactes ?',
    options: [
      { text: 'Le complexe B12–facteur intrinsèque gagne l’iléon distal', correct: true, correction: 'Exact. C’est le site de la voie active habituelle d’absorption.' },
      { text: 'La fixation à un récepteur tel que la cubiline permet l’endocytose du complexe', correct: true, correction: 'Oui 🎯 Le cours décrit la fixation puis l’endocytose et la libération de B12.' },
      { text: 'Le facteur intrinsèque est sécrété par les cellules pariétales du fundus gastrique', correct: true, correction: 'Oui boss 🧠 C’est l’origine gastrique indiquée dans le cours.' },
      { text: 'Le facteur intrinsèque est la protéine qui permet l’absorption habituelle de B9', correct: false, correction: 'Non chef. Le facteur intrinsèque concerne la B12 ; les folates ont une autre voie d’absorption.' },
      { text: 'La voie active liée au facteur intrinsèque absorbe principalement la B12 dans le jéjunum', correct: false, correction: 'Faux. Le site décrit est l’iléon terminal ; le jéjunum concerne surtout les folates.' },
    ],
    explanation: 'Le facteur intrinsèque gastrique permet la voie active habituelle de B12. Le complexe atteint l’iléon distal, se fixe à un récepteur et est endocyté. Cette voie ne doit pas être confondue avec l’absorption jéjunale de B9. (Cours, p. 15–16)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle protéine de transport plasmatique de B12 assure particulièrement son apport aux cellules utilisatrices ?',
    options: [
      { text: 'La transcobalamine II', correct: true, correction: 'Oui boss 🎯 La fraction B12–transcobalamine II est rapidement endocytée par les cellules utilisatrices, même si elle est minoritaire dans le plasma.' },
      { text: 'La cubiline, transporteur soluble majoritaire du plasma', correct: false, correction: 'Non. La cubiline est impliquée comme récepteur dans l’absorption du complexe B12–FI.' },
      { text: 'Le tétrahydrofolate', correct: false, correction: 'Non chef. Le THF est une forme active des folates, pas une protéine de transport de B12.' },
      { text: 'L’haptocorrine, qui transporte exclusivement toute la fraction rapidement disponible aux tissus', correct: false, correction: 'Faux. La fraction liée à la transcobalamine II est celle décrite comme rapidement utilisée par les cellules.' },
      { text: 'Le facteur intrinsèque circulant', correct: false, correction: 'Non chef. Le facteur intrinsèque intervient dans le tube digestif pour l’absorption, pas comme transporteur plasmatique habituel vers les tissus.' },
    ],
    explanation: 'Le cours décrit environ 80 % de B12 plasmatique liée à l’haptocorrine et environ 20 % liée à la transcobalamine II. Cette dernière fraction assure particulièrement la distribution aux tissus. (Cours, p. 15 et 45)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Concernant les médicaments antifolates, quelles propositions sont exactes dans le cadre du cours ?',
    options: [
      { text: 'Un blocage enzymatique peut perturber l’utilisation des folates même si les apports alimentaires sont suffisants', correct: true, correction: 'Oui 🎯 Un apport correct de vitamine ne garantit pas que toutes les réactions enzymatiques qui en dépendent fonctionnent normalement.' },
      { text: 'Leur mécanisme se résume à empêcher toute consommation alimentaire de B9', correct: false, correction: 'Faux. Il s’agit d’une action sur des enzymes et des voies métaboliques, pas simplement sur les aliments consommés.' },
      { text: 'Des médicaments anticancéreux et certains antibiotiques peuvent agir sur ces voies', correct: true, correction: 'Exact. Le cours cite ces deux groupes de médicaments.' },
      { text: 'Ils sont sans effet possible sur la synthèse de l’ADN', correct: false, correction: 'Non chef. Les folates participent à la synthèse des nucléotides ; perturber leur métabolisme peut donc perturber l’ADN.' },
      { text: 'Ils peuvent inhiber des enzymes du métabolisme des folates', correct: true, correction: 'Oui boss 🧠 Le blocage enzymatique peut perturber les réactions dépendantes de B9.' },
    ],
    explanation: 'Les antifolates peuvent bloquer des enzymes du métabolisme des folates et affecter la synthèse des nucléotides. Le cours cite certains anticancéreux et antibiotiques ; la prise en charge dépend du médicament et de son protocole. (Cours, p. 18–19 et 46)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle transformation permet l’absorption des folates alimentaires présents sous forme de polyglutamates ?',
    options: [
      { text: 'Une liaison initiale à l’haptocorrine suivie d’une absorption iléale', correct: false, correction: 'Non. Tu décris des étapes de B12 ; B9 suit notamment une déconjugaison puis une absorption jéjunale.' },
      { text: 'Une déconjugaison permettant d’obtenir des monoglutamates', correct: true, correction: 'Oui boss 🎯 On retire les glutamates supplémentaires : c’est une déconjugaison. Le mot « conjugaison » dans le texte est une erreur.' },
      { text: 'Une conjugaison ajoutant des glutamates pour allonger les polyglutamates', correct: false, correction: 'Non chef. L’absorption nécessite au contraire la conversion en monoglutamates.' },
      { text: 'Une transformation directe en cobalamine', correct: false, correction: 'Non chef. La B9 ne devient pas de la B12 ; les deux vitamines ont des métabolismes distincts.' },
      { text: 'Une liaison obligatoire au facteur intrinsèque gastrique', correct: false, correction: 'Faux. Le facteur intrinsèque intervient dans la voie habituelle de B12, pas dans celle des folates.' },
    ],
    explanation: 'Les folates alimentaires sous forme de polyglutamates doivent être déconjugués en monoglutamates avant leur absorption. Le terme « conjugaison » employé dans le texte est incorrect. (Cours, p. 16, avec correction du terme.)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Concernant l’absorption et les formes de B9, quelles propositions sont exactes ?',
    options: [
      { text: 'Le même complexe vitamine–facteur intrinsèque absorbe B9 et B12 dans le jéjunum', correct: false, correction: 'Non chef. B9 n’utilise pas cette voie ; B12 liée au facteur intrinsèque est absorbée dans l’iléon distal.' },
      { text: 'Le méthyl-THF est une forme circulante des folates', correct: true, correction: 'Exact. Le cours le présente comme une forme circulante de B9.' },
      { text: 'Le tétrahydrofolate participe aux formes métaboliquement actives des folates', correct: true, correction: 'Oui 🎯 Le THF appartient aux formes actives utilisées dans les réactions dépendantes des folates.' },
      { text: 'L’absorption a principalement lieu dans le jéjunum proximal', correct: true, correction: 'Oui boss 🧠 C’est la localisation principale à distinguer de l’iléon terminal pour B12.' },
      { text: 'Les formes monoglutamates permettent l’absorption après déconjugaison des folates alimentaires', correct: true, correction: 'Exact. La réduction de la chaîne de glutamates prépare l’absorption.' },
    ],
    explanation: 'Après déconjugaison, les folates sont principalement absorbés dans le jéjunum proximal. Leurs dérivés comprennent le THF, métaboliquement actif, et le méthyl-THF circulant. (Cours, p. 16 et 45)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quel mécanisme explique la carence en B12 de la maladie de Biermer ?',
    options: [
      { text: 'Une augmentation isolée des besoins en B9 pendant la grossesse', correct: false, correction: 'Faux. La grossesse augmente les besoins en folates mais ne définit pas la maladie de Biermer.' },
      { text: 'Un processus auto-immun gastrique compromettant le facteur intrinsèque et la voie habituelle d’absorption de B12', correct: true, correction: 'Oui boss 🧠 La carence résulte ici d’un problème d’absorption lié au mécanisme auto-immun, pas nécessairement d’un défaut alimentaire.' },
      { text: 'Une destruction alimentaire des folates par la cuisson', correct: false, correction: 'Non chef. Cela concerne les apports de B9, pas le mécanisme de Biermer.' },
      { text: 'Un régime végétalien strict qui constitue à lui seul la définition de Biermer', correct: false, correction: 'Non. Un régime végétalien sans apport adapté peut provoquer une carence d’apport, mais ce n’est pas la maladie auto-immune de Biermer.' },
      { text: 'Une absence de réserves de B12 chez tous les individus dès la naissance', correct: false, correction: 'Non chef. La B12 dispose de réserves importantes ; Biermer altère sa voie habituelle d’absorption.' },
    ],
    explanation: 'La maladie de Biermer est une cause auto-immune de malabsorption de B12, liée à l’atteinte gastrique et au facteur intrinsèque. Elle doit être distinguée des carences d’apport. (Cours, p. 15, 17–18)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Comment un déficit en B12 ou en B9 peut-il perturber la maturation des cellules sanguines ?',
    options: [
      { text: 'Il accélère obligatoirement toutes les mitoses et augmente la production de réticulocytes', correct: false, correction: 'Non chef. Le défaut de synthèse d’ADN gêne les divisions et conduit à une production inefficace.' },
      { text: 'La maturation nucléaire peut être retardée par rapport à la maturation cytoplasmique', correct: true, correction: 'Exact. C’est l’asynchronisme nucléocytoplasmique caractéristique de la mégaloblastose.' },
      { text: 'Il peut rendre la production des cellules sanguines inefficace', correct: true, correction: 'Oui 🧠 La présence de précurseurs ne garantit pas une production efficace de cellules matures.' },
      { text: 'Il ne peut affecter que l’hémoglobine, sans effet sur le noyau des précurseurs', correct: false, correction: 'Faux. Le défaut porte notamment sur l’ADN et la maturation nucléaire des précurseurs.' },
      { text: 'Il peut altérer la synthèse d’ADN et les divisions cellulaires', correct: true, correction: 'Oui boss 🎯 Ces vitamines sont indispensables à une synthèse correcte de l’ADN.' },
    ],
    explanation: 'Le déficit de synthèse d’ADN provoque une maturation nucléaire retardée, un asynchronisme nucléocytoplasmique et une production inefficace des cellules sanguines. (Cours, p. 8 et 11)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle définition distingue correctement un mégaloblaste d’une hématie macrocytaire ?',
    options: [
      { text: 'Le mégaloblaste est un polynucléaire neutrophile hypersegmenté', correct: false, correction: 'Non. L’hypersegmentation des PNN peut accompagner la carence, mais le mégaloblaste est un précurseur érythroïde.' },
      { text: 'Le mégaloblaste est toujours un réticulocyte dont le noyau est conservé', correct: false, correction: 'Faux. Un réticulocyte a déjà perdu son noyau ; le mégaloblaste appartient aux précurseurs nucléés.' },
      { text: 'Le mégaloblaste est un précurseur érythroïde nucléé, augmenté de taille et à maturation nucléocytoplasmique anormale', correct: true, correction: 'Oui boss 🎯 Ne confonds pas le précurseur médullaire mégaloblastique et l’hématie macrocytaire circulante.' },
      { text: 'Le mégaloblaste est une hématie mature sans noyau, simplement plus volumineuse', correct: false, correction: 'Non chef. Cela décrit une hématie macrocytaire ; le mégaloblaste est un précurseur nucléé anormal.' },
      { text: 'Le mégaloblaste est une hématie de petite taille caractéristique d’une carence martiale', correct: false, correction: 'Non chef. La carence martiale donne classiquement une microcytose ; la mégaloblastose est un trouble de maturation des précurseurs.' },
    ],
    explanation: 'Un mégaloblaste est un précurseur érythroïde nucléé anormal, avec asynchronisme nucléocytoplasmique. Une hématie macrocytaire est une cellule circulante mature, sans noyau et de grande taille. Les deux termes ne sont pas synonymes. (Cours, p. 8 et 11 ; clarification de la terminologie.)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles anomalies peuvent accompagner une carence en B12 ou B9 responsable de mégaloblastose ?',
    options: [
      { text: 'Une hypersegmentation des polynucléaires neutrophiles', correct: true, correction: 'Oui 🎯 C’est une anomalie des autres cellules sanguines citée dans le cours.' },
      { text: 'Une anémie arégénérative du fait de la production inefficace', correct: true, correction: 'Exact. Malgré la stimulation de la moelle, les précurseurs ne permettent pas une réponse réticulocytaire efficace.' },
      { text: 'Une atteinte possible d’autres lignées que la lignée érythrocytaire', correct: true, correction: 'Exact. Le défaut de synthèse d’ADN ne se limite pas à la production des globules rouges.' },
      { text: 'Une anémie macrocytaire', correct: true, correction: 'Oui boss 🧠 Les hématies produites peuvent être de grande taille.' },
      { text: 'Une microcytose obligatoire avec forte réticulocytose dans tous les cas', correct: false, correction: 'Non chef. Le tableau attendu ici est macrocytaire avec production inefficace, pas une microcytose systématiquement régénérative.' },
    ],
    explanation: 'La mégaloblastose par carence en B12 ou B9 peut entraîner une anémie macrocytaire arégénérative, une hypersegmentation des PNN et une atteinte d’autres lignées. L’arégénération découle de l’inefficacité de la production médullaire. (Cours, p. 8 et 11 ; conséquence du mécanisme décrit.)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle proposition décrit une hématie mature normale ?',
    options: [
      { text: 'Une cellule qui utilise son noyau pour renouveler continuellement toutes ses enzymes', correct: false, correction: 'Non chef. L’hématie mature ne possède plus de noyau et ne synthétise pas de nouvelles enzymes.' },
      { text: 'Une cellule sphérique dont la rigidité facilite le passage capillaire', correct: false, correction: 'Faux. La forme biconcave et la déformabilité facilitent ce passage.' },
      { text: 'Une cellule nucléée et rigide qui ne transporte pas d’oxygène', correct: false, correction: 'Non chef. L’hématie mature est anucléée et sa déformabilité est essentielle.' },
      { text: 'Une cellule dont la durée de vie normale est de quelques heures', correct: false, correction: 'Non. Le cours donne environ 120 jours.' },
      { text: 'Une cellule anucléée, biconcave et déformable, dont la durée de vie est d’environ 120 jours', correct: true, correction: 'Oui boss 🧠 Ce sont les caractéristiques fondamentales à retenir.' },
    ],
    explanation: 'L’hématie mature est anucléée, biconcave et déformable. Elle transporte l’oxygène grâce à son hémoglobine et vit environ 120 jours dans les conditions physiologiques. (Cours, p. 20 et 45)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles associations entre anomalie érythrocytaire et catégorie morphologique sont correctes ?',
    options: [
      { text: 'Anisocytose : synonyme obligatoire de variation de la forme', correct: false, correction: 'Non chef. La forme relève de la poïkilocytose, la taille de l’anisocytose.' },
      { text: 'Anisochromie : hétérogénéité de coloration des hématies', correct: true, correction: 'Oui. Chromie renvoie ici à la coloration.' },
      { text: 'Anisocytose : variabilité accrue des tailles des hématies', correct: true, correction: 'Exact. Anisocytose concerne les dimensions.' },
      { text: 'Poïkilocytose : diversité anormale des formes des hématies', correct: true, correction: 'Oui boss 🧠 Poïkilocytose concerne la forme.' },
      { text: 'Corps de Howell-Jolly : anomalie de contenu sous forme d’inclusion', correct: true, correction: 'Exact 🎯 Ce n’est pas une simple différence de couleur entre les cellules.' },
    ],
    explanation: 'Le cours distingue anomalies de forme, de taille, de coloration et de contenu. Les corps de Howell-Jolly appartiennent aux inclusions. Ces catégories ne désignent pas à elles seules une cause unique. (Cours, p. 20 et 24–25 ; correction p. 46)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Un frottis montre des hématies de tailles très différentes. Quelle conclusion décrit directement cette observation ?',
    options: [
      { text: 'Une poïkilocytose, même si les formes des hématies sont identiques', correct: false, correction: 'Non. Des tailles différentes ne suffisent pas à définir une diversité de formes.' },
      { text: 'Une anisochromie, car la taille et la coloration sont synonymes', correct: false, correction: 'Non chef. L’anisochromie concerne la coloration.' },
      { text: 'Une anisocytose, sans préjuger à elle seule du volume globulaire moyen', correct: true, correction: 'Oui boss 🧠 On décrit une dispersion des tailles, pas forcément une hausse de leur moyenne.' },
      { text: 'Une macrocytose obligatoirement responsable d’une augmentation du VGM moyen', correct: false, correction: 'Faux. La diversité des tailles ne signifie pas que toutes les cellules sont grandes ni que leur volume moyen est augmenté.' },
      { text: 'Une inclusion intra-érythrocytaire démontrée par la seule différence de diamètre', correct: false, correction: 'Non chef. Taille et contenu sont deux catégories distinctes.' },
    ],
    explanation: 'L’anisocytose est une augmentation de la variabilité des diamètres érythrocytaires. Elle ne doit pas être assimilée automatiquement à une macrocytose ou à une augmentation du VGM. (Cours, p. 24 et 46)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles descriptions des anomalies morphologiques illustrées sont correctes ?',
    options: [
      { text: 'Les elliptocytes ont une forme allongée, ovale ou en cigare', correct: true, correction: 'Oui. L’elliptocytose héréditaire est une association évoquée dans le tableau.' },
      { text: 'Les hématies cibles ont un aspect en cible pouvant orienter vers une hémoglobinopathie', correct: true, correction: 'Exact 🎯 Leur aspect n’est pas celui d’un anneau de Cabot.' },
      { text: 'Les macro-ovalocytes sont des hématies grandes et ovales', correct: true, correction: 'Exact. Le tableau évoque notamment les carences en vitamines B9 ou B12.' },
      { text: 'Les dacryocytes sont des hématies en forme de goutte ou de larme', correct: true, correction: 'Oui boss 💧 Le cours les associe notamment à la myélofibrose.' },
      { text: 'Chacune de ces formes permet toujours d’identifier une maladie unique avec certitude', correct: false, correction: 'Non chef. Les associations du tableau orientent le raisonnement ; elles ne sont pas toutes spécifiques.' },
    ],
    explanation: 'Le tableau illustre hématies cibles, dacryocytes, macro-ovalocytes et elliptocytes. Il propose des associations diagnostiques qui doivent rester des orientations. La mention d’un anneau de Cabot dans la ligne des hématies cibles est une confusion : l’anneau de Cabot est une inclusion. (Cours, p. 21 et 25)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quelle anomalie correspond à des fragments d’hématies produits par une agression mécanique, par exemple lors du passage sur des filaments de fibrine ?',
    options: [
      { text: 'Des corps de Howell-Jolly', correct: false, correction: 'Non. Ce sont des inclusions dans une hématie, pas des fragments de cellule.' },
      { text: 'Des macro-ovalocytes', correct: false, correction: 'Faux. Ils sont grands et ovales, pas définis comme des fragments mécaniques.' },
      { text: 'Des sphérocytes, définis uniquement par une inclusion annulaire', correct: false, correction: 'Non chef. Les sphérocytes sont des hématies sphériques, sans halo central habituel.' },
      { text: 'Des schizocytes', correct: true, correction: 'Oui boss 🧠 Schizocyte = fragment d’hématie. Le terme schizophyte du texte est une coquille.' },
      { text: 'Des stomatocytes', correct: false, correction: 'Non chef. Leur particularité est une zone claire centrale en fente.' },
    ],
    explanation: 'Les schizocytes correspondent à une fragmentation mécanique des hématies. Le cours illustre le rôle possible de la fibrine et évoque également des atteintes valvulaires. Cela ne signifie pas que toute sphérocytose dérive de schizocytes. (Cours, p. 22–23)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles associations entre nom et aspect des hématies sont correctes ?',
    options: [
      { text: 'Drépanocytes : hématies en faucille ou en banane, associées à la drépanocytose', correct: true, correction: 'Oui 🎯 C’est l’association forte à retenir.' },
      { text: 'Schizocytes : hématies normales dont seule la coloration est plus pâle', correct: false, correction: 'Non chef. Les schizocytes sont des fragments d’hématies.' },
      { text: 'Échinocytes : hématies présentant des épines, pouvant apparaître sur un prélèvement vieilli', correct: true, correction: 'Exact. Le cours rappelle la possibilité d’un artefact.' },
      { text: 'Stomatocytes : zone centrale claire prenant la forme d’une fente', correct: true, correction: 'Exact. C’est leur aspect caractéristique dans le tableau.' },
      { text: 'Sphérocytes : cellules rondes sans le halo clair central habituel', correct: true, correction: 'Oui boss 🧠 Le cours les oppose aux hématies biconcaves normales.' },
    ],
    explanation: 'Les images du cours distinguent sphérocytes, stomatocytes, drépanocytes et échinocytes. Une anomalie observée sur le frottis peut parfois être liée aux conditions du prélèvement plutôt qu’à une maladie. (Cours, p. 22–23)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle inclusion observée dans les hématies doit notamment faire rechercher une absence ou un dysfonctionnement de la rate ?',
    options: [
      { text: 'Un schizocyte', correct: false, correction: 'Faux. C’est un fragment d’hématie, pas une inclusion.' },
      { text: 'Un corps de Howell-Jolly', correct: true, correction: 'Oui boss 🧠 Cette petite inclusion ronde peut persister en cas d’asplénie ou d’hyposplénisme.' },
      { text: 'Une hématie cible, qui constitue forcément un corps de Howell-Jolly', correct: false, correction: 'Non chef. Un aspect en cible et une inclusion ronde ne sont pas la même anomalie.' },
      { text: 'Un elliptocyte', correct: false, correction: 'Non. Il s’agit d’une anomalie de forme.' },
      { text: 'Un macro-ovalocyte', correct: false, correction: 'Non chef. Grande taille et forme ovale ne désignent pas cette inclusion.' },
    ],
    explanation: 'Les corps de Howell-Jolly sont des inclusions rondes dont la présence peut orienter vers une splénectomie, une asplénie ou un dysfonctionnement splénique. L’observation doit être interprétée dans son contexte. (Cours, p. 25 et 46)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles propositions concernant les inclusions érythrocytaires sont exactes ?',
    options: [
      { text: 'Les corps de Howell-Jolly relèvent uniquement d’une anisocytose', correct: false, correction: 'Faux. Ils relèvent des anomalies de contenu, pas de taille.' },
      { text: 'La présence de Plasmodium dans des hématies correspond à une infection parasitaire pouvant les détruire', correct: true, correction: 'Oui. Le cours relie cette inclusion au paludisme.' },
      { text: 'Le cours évoque une anomalie de production médullaire ou une carence vitaminique devant des anneaux de Cabot', correct: true, correction: 'Exact. Ce sont des associations proposées, pas une preuve unique de diagnostic.' },
      { text: 'Un anneau de Cabot est une inclusion annulaire dans l’hématie', correct: true, correction: 'Oui boss 🧠 Le tableau le décrit comme un petit anneau, rarement observé.' },
      { text: 'Une hématie cible est obligatoirement une hématie contenant un anneau de Cabot', correct: false, correction: 'Non chef. Cette confusion apparaît dans le texte, mais les deux anomalies sont distinctes.' },
    ],
    explanation: 'Les anneaux de Cabot et les corps de Howell-Jolly sont des inclusions. Plasmodium constitue une inclusion parasitaire intra-érythrocytaire. Ces anomalies de contenu doivent être distinguées des variations de forme, de taille ou de coloration. (Cours, p. 25–26 et 46)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quels sont les trois grands constituants de l’hématie retenus dans le cours pour expliquer ses principales pathologies ?',
    options: [
      { text: 'Le noyau, l’hémoglobine et l’EPO stockée dans la cellule', correct: false, correction: 'Non. Le noyau a disparu et l’EPO n’est pas un constituant stocké définissant l’hématie.' },
      { text: 'Le noyau, les mitochondries et les lysosomes', correct: false, correction: 'Non chef. L’hématie mature est anucléée et dépourvue de mitochondries.' },
      { text: 'La membrane, l’hémoglobine et les enzymes', correct: true, correction: 'Oui boss 🎯 Une anomalie de l’un de ces ensembles peut compromettre la survie de l’hématie.' },
      { text: 'La ferritine plasmatique, la transferrine plasmatique et l’albumine', correct: false, correction: 'Faux. Ce ne sont pas les trois constituants de l’hématie étudiés dans cette partie.' },
      { text: 'La membrane seule, car l’intérieur de l’hématie n’intervient pas dans sa survie', correct: false, correction: 'Non chef. L’hémoglobine et les enzymes ont des fonctions essentielles.' },
    ],
    explanation: 'Le cours organise cette partie autour de la membrane, de l’hémoglobine et des enzymes. Le transport de l’oxygène et la survie cellulaire nécessitent leur bon fonctionnement conjoint. (Cours, p. 26 et 34)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles propositions concernant la membrane et le cytosquelette de l’hématie sont exactes ?',
    options: [
      { text: 'Les protéines membranaires et du cytosquelette fonctionnent de manière interdépendante', correct: true, correction: 'Oui. Leur organisation commune permet de conserver la forme et la souplesse de la cellule.' },
      { text: 'La spectrine est une protéine intracellulaire participant au cytosquelette membranaire', correct: true, correction: 'Oui boss 🧠 Elle n’est pas présentée comme une protéine exposée à la surface extérieure.' },
      { text: 'Une perte de membrane peut favoriser une forme sphérique et une réduction de la déformabilité', correct: true, correction: 'Exact 🎯 La sphérocytose n’impose pas une fragmentation préalable en schizocytes.' },
      { text: 'La spectrine est un antigène exclusivement situé sur la face externe de la membrane', correct: false, correction: 'Non chef. La correction du cours insiste sur sa localisation intracellulaire.' },
      { text: 'L’ankyrine, la bande 3 et la protéine 4.1 figurent parmi les protéines citées', correct: true, correction: 'Exact. Le cours retient leur participation à l’organisation et à la déformabilité de l’hématie.' },
    ],
    explanation: 'La membrane et son cytosquelette contribuent à la déformabilité. Le cours cite spectrine, ankyrine, bande 3 et protéine 4.1. Les défauts d’organisation avec perte membranaire peuvent favoriser une sphérocytose ; tous les sphérocytes ne proviennent pas de schizocytes. (Cours, p. 26–27 et 45)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement la structure d’une molécule d’hémoglobine normale ?',
    options: [
      { text: 'Quatre hèmes sans aucune partie protéique', correct: false, correction: 'Non. La globine constitue la partie protéique de l’hémoglobine.' },
      { text: 'Une seule chaîne de globine portant quatre noyaux cellulaires', correct: false, correction: 'Non chef. L’hémoglobine n’est ni une cellule ni une protéine à une seule chaîne.' },
      { text: 'Quatre chaînes de globine portant au total un seul hème', correct: false, correction: 'Faux. Chaque chaîne porte un hème : quatre chaînes, quatre hèmes.' },
      { text: 'Deux chaînes de globine et deux atomes de fer obligatoirement ferriques Fe³⁺', correct: false, correction: 'Non chef. Il y a quatre chaînes, et le fer ferrique correspond à la méthémoglobine.' },
      { text: 'Quatre chaînes de globine et quatre hèmes contenant chacun un atome de fer ferreux Fe²⁺', correct: true, correction: 'Oui boss 🧠 Le tétramère porte quatre hèmes ; le fer Fe²⁺ permet la fixation de l’oxygène.' },
    ],
    explanation: 'L’hémoglobine associe une globine tétramérique à quatre hèmes, un par chaîne. Chaque hème contient un atome de fer normalement ferreux Fe²⁺ pour permettre la fixation de l’oxygène. (Cours, p. 27–28 et 31)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles associations entre type d’hémoglobine et composition en chaînes sont correctes ?',
    options: [
      { text: 'L’HbF est constituée de deux chaînes bêta et de deux chaînes gamma', correct: false, correction: 'Non chef. Les chaînes alpha sont présentes dans l’HbF normale.' },
      { text: 'HbA₂ : deux chaînes alpha et deux chaînes delta', correct: true, correction: 'Oui 🎯 HbA₂ = α₂δ₂.' },
      { text: 'HbF : deux chaînes alpha et deux chaînes gamma', correct: true, correction: 'Exact. HbF = α₂γ₂.' },
      { text: 'HbA : deux chaînes alpha et deux chaînes bêta', correct: true, correction: 'Oui boss 🧠 HbA = α₂β₂, majoritaire chez l’adulte sain.' },
      { text: 'L’HbF possède une affinité pour l’oxygène plus élevée que l’HbA', correct: true, correction: 'Exact. Le cours relie cette propriété à la captation de l’oxygène pendant la vie fœtale.' },
    ],
    explanation: 'Les compositions à retenir sont HbA α₂β₂, HbF α₂γ₂ et HbA₂ α₂δ₂. L’HbF est plus affine pour l’oxygène que l’HbA. Les pourcentages adultes approximatifs du support ne sont pas nécessaires pour distinguer ces structures. (Cours, p. 27–28 et 46)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quelle évolution des chaînes de globine est décrite après la naissance ?',
    options: [
      { text: 'Les chaînes gamma remplacent progressivement toutes les chaînes bêta', correct: false, correction: 'Faux. Le relais décrit se fait dans le sens gamma vers bêta.' },
      { text: 'Les chaînes delta deviennent les seules chaînes associées aux chaînes alpha', correct: false, correction: 'Non. L’HbA à chaînes bêta devient majoritaire.' },
      { text: 'La composition des hémoglobines reste strictement identique entre la vie fœtale et l’âge adulte', correct: false, correction: 'Non chef. Le cours illustre précisément un changement de production des chaînes.' },
      { text: 'Les chaînes bêta prennent progressivement le relais des chaînes gamma', correct: true, correction: 'Oui boss 🎯 C’est le passage de la prédominance fœtale de l’HbF vers l’HbA.' },
      { text: 'Les chaînes alpha disparaissent complètement chez l’adulte', correct: false, correction: 'Non chef. Les chaînes alpha restent présentes dans les hémoglobines normales étudiées.' },
    ],
    explanation: 'Après la naissance, la production des chaînes gamma diminue tandis que celle des chaînes bêta augmente. Les chaînes alpha restent présentes. Ce changement explique le relais de l’HbF par l’HbA. (Cours, p. 29 et 46)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement thalassémie et drépanocytose ?',
    options: [
      { text: 'La thalassémie et la drépanocytose sont des hémoglobinopathies', correct: true, correction: 'Oui 🎯 Elles concernent toutes deux l’hémoglobine, avec des mécanismes différents.' },
      { text: 'Une thalassémie correspond à un défaut quantitatif de production d’une chaîne de globine', correct: true, correction: 'Oui boss 🧠 Une chaîne est produite en quantité réduite ou absente.' },
      { text: 'La drépanocytose correspond à une anomalie qualitative de la globine', correct: true, correction: 'Exact. La structure de la chaîne bêta est modifiée, avec une hémoglobine anormale.' },
      { text: 'Une thalassémie est définie par une anomalie primitive de la spectrine', correct: false, correction: 'Non chef. La spectrine appartient au cytosquelette membranaire ; la thalassémie concerne la globine.' },
      { text: 'La drépanocytose est une intoxication au plomb bloquant la synthèse de l’hème', correct: false, correction: 'Faux. Tu confonds avec le saturnisme.' },
    ],
    explanation: 'La thalassémie relève d’un défaut quantitatif de synthèse de chaînes de globine ; la drépanocytose d’une anomalie qualitative de la globine. Elles se distinguent des anomalies membranaires et des troubles de synthèse de l’hème. (Cours, p. 22 et 29–30 ; correction p. 46)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel couple enzyme–cofacteur intervient dans la synthèse de l’hème selon le cours ?',
    options: [
      { text: 'G6PD et vitamine B12', correct: false, correction: 'Non chef. La G6PD participe à la production de NADPH, pas au couple enzyme–vitamine décrit pour la synthèse de l’hème.' },
      { text: 'ALA synthétase et vitamine B12', correct: false, correction: 'Non chef. Dans cette étape de synthèse de l’hème, le cofacteur à retenir est la vitamine B6.' },
      { text: 'ALA synthétase et vitamine B6', correct: true, correction: 'Oui boss 🧠 L’ALA synthétase intervient dans la voie de synthèse de l’hème et utilise la vitamine B6.' },
      { text: 'Pyruvate kinase et vitamine B6', correct: false, correction: 'Non. La pyruvate kinase intervient dans la glycolyse ; ce n’est pas l’enzyme de synthèse de l’hème recherchée.' },
      { text: 'ALA synthétase et vitamine B9', correct: false, correction: 'Faux. Les folates interviennent notamment dans la synthèse de l’ADN, pas comme cofacteur de l’ALA synthétase.' },
    ],
    explanation: 'Le cours cite l’ALA synthétase et la vitamine B6 dans la voie de synthèse de l’hème. Le fer est également nécessaire à la formation de l’hème fonctionnel. (Cours, p. 30 et 46)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles propositions concernant les troubles de synthèse de l’hème sont exactes ?',
    options: [
      { text: 'Les porphyries concernent des anomalies de la voie de synthèse de l’hème', correct: true, correction: 'Oui boss 🧠 Le cours les relie à des anomalies enzymatiques de cette voie.' },
      { text: 'Le plomb peut perturber la synthèse de l’hème malgré la présence de fer dans l’organisme', correct: true, correction: 'Oui. Avoir du fer disponible ne suffit pas si son incorporation et la synthèse sont perturbées.' },
      { text: 'Une porphyrie est définie par une mutation qualitative d’une chaîne de globine', correct: false, correction: 'Non chef. La correction du QRM contient ici une erreur : une porphyrie concerne la voie de l’hème, pas une mutation de la globine.' },
      { text: 'Le cours présente le saturnisme comme une cause possible d’anémie microcytaire', correct: true, correction: 'Exact. Il peut donner une présentation évoquant un défaut de synthèse d’hémoglobine.' },
      { text: 'Le saturnisme correspond à une intoxication au plomb', correct: true, correction: 'Exact 🎯 C’est la définition donnée dans le support.' },
    ],
    explanation: 'Le cours distingue anomalies de globine et troubles de synthèse de l’hème. Le saturnisme est lié au plomb ; les porphyries concernent la voie de l’hème. La correction p. 46 validant une atteinte de la globine dans les porphyries contredit cette distinction et doit être rectifiée. (Cours, p. 29–30 et 46)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle voie fournit l’ATP à l’hématie mature, dépourvue de mitochondries ?',
    options: [
      { text: 'La glycolyse intra-érythrocytaire', correct: true, correction: 'Oui boss 🧠 La glycolyse fournit l’énergie nécessaire au maintien de l’intégrité cellulaire.' },
      { text: 'La phosphorylation oxydative mitochondriale', correct: false, correction: 'Non chef. L’hématie mature ne possède pas de mitochondries.' },
      { text: 'Le cycle de Krebs dans des mitochondries conservées par l’hématie', correct: false, correction: 'Non chef. Il n’y a pas de mitochondries dans l’hématie mature.' },
      { text: 'La voie des pentoses phosphates comme source principale d’ATP', correct: false, correction: 'Faux. Cette voie fournit surtout du NADPH pour les défenses antioxydantes ; l’ATP vient de la glycolyse.' },
      { text: 'La synthèse de l’hème comme source principale d’ATP', correct: false, correction: 'Non. Former l’hème et produire l’ATP sont deux fonctions différentes.' },
    ],
    explanation: 'L’hématie mature utilise la glycolyse pour produire son ATP, puisqu’elle ne possède pas de mitochondries. Cette énergie sert notamment aux pompes membranaires. (Cours, p. 30–33 et 46–47)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quels liens entre ATP, hydratation et déformabilité de l’hématie sont décrits dans le cours ?',
    options: [
      { text: 'L’absence d’ATP améliore toujours le maintien des gradients ioniques', correct: false, correction: 'Non chef. Les pompes dépendantes de l’ATP fonctionnent moins bien lorsqu’il manque.' },
      { text: 'Les gradients ioniques influencent les mouvements d’eau et l’hydratation de la cellule', correct: true, correction: 'Exact. L’eau suit les contraintes osmotiques.' },
      { text: 'La quantité d’eau dans l’hématie est totalement indépendante des gradients osmotiques', correct: false, correction: 'Faux. Le cours explique précisément cette dépendance.' },
      { text: 'Une hydratation anormale peut modifier la forme et diminuer la déformabilité', correct: true, correction: 'Oui. Une cellule trop hydratée ou trop déshydratée devient plus fragile.' },
      { text: 'L’ATP est nécessaire au fonctionnement de pompes membranaires maintenant les gradients ioniques', correct: true, correction: 'Oui boss 🧠 L’équilibre ionique nécessite une dépense d’énergie.' },
    ],
    explanation: 'L’ATP soutient les pompes membranaires, les gradients ioniques et l’équilibre hydrique. Leur perturbation peut modifier la forme et la déformabilité de l’hématie, puis raccourcir sa survie. (Cours, p. 31–33)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quelle proposition définit correctement la méthémoglobine ?',
    options: [
      { text: 'Une hémoglobine fœtale α₂γ₂ qui ne contient aucun fer', correct: false, correction: 'Non. HbF et méthémoglobine désignent deux notions différentes.' },
      { text: 'Un défaut de quantité de spectrine dans la membrane', correct: false, correction: 'Non chef. La méthémoglobine concerne l’oxydation du fer de l’hème.' },
      { text: 'Une hémoglobine contenant du fer ferreux Fe²⁺, simplement privée d’oxygène', correct: false, correction: 'Non chef. La désoxygénation ne doit pas être confondue avec l’oxydation du fer en Fe³⁺.' },
      { text: 'Une hémoglobine plus efficace pour fixer l’oxygène du fait de son fer ferrique', correct: false, correction: 'Faux. Le fer Fe³⁺ ne permet pas une fixation normale de l’oxygène.' },
      { text: 'Une hémoglobine contenant du fer oxydé à l’état ferrique Fe³⁺', correct: true, correction: 'Oui boss 🧠 Méthémoglobine = fer ferrique Fe³⁺, à distinguer du fer ferreux Fe²⁺ fonctionnel.' },
    ],
    explanation: 'L’oxydation du fer ferreux Fe²⁺ en fer ferrique Fe³⁺ forme de la méthémoglobine. Cet état compromet le transport de l’oxygène et justifie les systèmes réducteurs de l’hématie. (Cours, p. 31)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles propositions concernant les systèmes réducteurs de l’hématie sont exactes ?',
    options: [
      { text: 'Le NADPH participe à la protection contre le stress oxydatif', correct: true, correction: 'Exact. Il fournit un pouvoir réducteur aux défenses antioxydantes.' },
      { text: 'Le rôle normal de ces systèmes est de transformer tout le fer Fe²⁺ en Fe³⁺', correct: false, correction: 'Non chef. Leur fonction protectrice vise au contraire à limiter l’oxydation.' },
      { text: 'Le NADH participe à la réduction de la méthémoglobine et au retour du fer vers l’état Fe²⁺', correct: true, correction: 'Oui boss 🧠 Il alimente notamment le système réducteur de la méthémoglobine.' },
      { text: 'NADH et NADPH sont des chaînes de globine intégrées au tétramère d’hémoglobine', correct: false, correction: 'Faux. Ce sont des cofacteurs métaboliques, pas des chaînes de globine.' },
      { text: 'Maintenir un environnement réducteur protège l’hémoglobine et d’autres constituants cellulaires', correct: true, correction: 'Oui. Le stress oxydatif peut abîmer plusieurs composants de l’hématie.' },
    ],
    explanation: 'Les systèmes utilisant NADH et NADPH maintiennent un environnement réducteur. Le NADH intervient notamment dans la réduction de la méthémoglobine, tandis que le NADPH contribue aux défenses antioxydantes. (Cours, p. 31–33)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle association décrit correctement la G6PD dans le métabolisme de l’hématie ?',
    options: [
      { text: 'Une enzyme de la voie des pentoses phosphates permettant la production de NADPH', correct: true, correction: 'Oui boss 🧠 Cette voie fournit le pouvoir réducteur nécessaire à la protection antioxydante.' },
      { text: 'Une enzyme dont le déficit est défini principalement par un manque d’ATP identique à celui de la pyruvate kinase', correct: false, correction: 'Non chef. Le déficit en G6PD compromet surtout les défenses contre l’oxydation, contrairement au déficit énergétique en pyruvate kinase.' },
      { text: 'Une enzyme mitochondriale assurant la phosphorylation oxydative', correct: false, correction: 'Non. L’hématie mature est dépourvue de mitochondries.' },
      { text: 'Une protéine membranaire exposée à l’extérieur et remplaçant la spectrine', correct: false, correction: 'Non chef. La G6PD est une enzyme métabolique.' },
      { text: 'Une enzyme de production des chaînes bêta de globine', correct: false, correction: 'Faux. Elle ne synthétise pas ces chaînes protéiques.' },
    ],
    explanation: 'La G6PD participe à la voie des pentoses phosphates, qui produit du NADPH pour les défenses antioxydantes. Il faut distinguer cette voie de la glycolyse proprement dite, source notamment d’ATP et de NADH. (Cours, p. 31–33)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles conséquences des déficits enzymatiques érythrocytaires sont correctes ?',
    options: [
      { text: 'Une hémoglobine capable de transporter l’oxygène peut être présente malgré un déficit enzymatique', correct: true, correction: 'Exact 🎯 Le problème peut porter surtout sur le maintien de l’intégrité de l’hématie.' },
      { text: 'Le déficit en G6PD est défini par un défaut quantitatif de production des chaînes alpha', correct: false, correction: 'Non chef. Cela évoque une thalassémie alpha, pas un déficit enzymatique en G6PD.' },
      { text: 'Ces déficits peuvent conduire à une destruction prématurée des hématies', correct: true, correction: 'Oui. Les mécanismes diffèrent, mais la survie cellulaire peut être raccourcie.' },
      { text: 'Un déficit en G6PD diminue la capacité de résistance au stress oxydatif', correct: true, correction: 'Exact. Les agents oxydants peuvent alors provoquer davantage de dommages.' },
      { text: 'Un déficit en pyruvate kinase diminue la production d’ATP', correct: true, correction: 'Oui boss 🧠 Il compromet le maintien énergétique de la cellule.' },
    ],
    explanation: 'Le déficit en pyruvate kinase affecte surtout la production d’ATP ; le déficit en G6PD, la protection contre le stress oxydatif. Dans les deux cas, l’hématie peut être détruite prématurément malgré une hémoglobine encore fonctionnelle. (Cours, p. 33–34)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quel effet du 2,3-DPG sur l’hémoglobine favorise l’apport d’oxygène aux tissus ?',
    options: [
      { text: 'Une augmentation de l’affinité empêchant toute libération d’oxygène', correct: false, correction: 'Non chef. Le 2,3-DPG diminue l’affinité de l’Hb pour l’oxygène.' },
      { text: 'Une simple augmentation de l’ATP fourni à la pompe membranaire, sans effet sur l’hémoglobine', correct: false, correction: 'Non chef. Le rôle du 2,3-DPG sur l’affinité est distinct du rôle énergétique de l’ATP.' },
      { text: 'Une augmentation de la quantité totale d’hémoglobine, sans modifier son affinité', correct: false, correction: 'Non. Le rôle décrit est une modulation de l’affinité, pas une augmentation de la quantité d’hémoglobine.' },
      { text: 'Une diminution de l’affinité de l’hémoglobine pour l’oxygène, favorisant sa libération', correct: true, correction: 'Oui boss 🧠 Une fixation moins forte facilite le relargage de l’oxygène aux tissus.' },
      { text: 'Une conversion obligatoire de tout le fer Fe²⁺ en Fe³⁺', correct: false, correction: 'Faux. Le mécanisme d’affinité est distinct de la formation de méthémoglobine.' },
    ],
    explanation: 'Le 2,3-DPG module l’affinité de l’hémoglobine pour l’oxygène. Il la diminue, ce qui favorise la libération de l’oxygène au niveau des tissus. Cette modulation complète les fonctions énergétiques et réductrices du métabolisme érythrocytaire. (Cours, p. 33)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles affirmations résument correctement les relations entre les constituants de l’hématie et sa survie ?',
    options: [
      { text: 'Une hémoglobine fonctionnelle garantit à elle seule une durée de vie normale de 120 jours', correct: false, correction: 'Non chef. La membrane et le métabolisme doivent aussi rester fonctionnels.' },
      { text: 'Une anomalie de globine peut affecter la quantité ou les propriétés de l’hémoglobine', correct: true, correction: 'Exact. Les thalassémies et la drépanocytose illustrent ces deux dimensions.' },
      { text: 'Une enzyme déficitaire peut altérer l’équilibre énergétique ou la protection antioxydante', correct: true, correction: 'Oui. Pyruvate kinase et G6PD illustrent des mécanismes différents.' },
      { text: 'Toutes les anomalies morphologiques ont obligatoirement une même cause moléculaire', correct: false, correction: 'Faux. Le cours présente des causes membranaires, enzymatiques, hémoglobiniques et parfois des artefacts.' },
      { text: 'Une anomalie du cytosquelette membranaire peut réduire la déformabilité et raccourcir la survie de l’hématie', correct: true, correction: 'Oui boss 🧠 Une cellule moins souple passe moins facilement dans les petits vaisseaux et les filtres tissulaires.' },
    ],
    explanation: 'Le maintien d’une hématie fonctionnelle dépend de sa membrane, de son hémoglobine et de ses enzymes. Le transport de l’oxygène n’est pas suffisant si la cellule perd sa déformabilité, son équilibre hydrique ou ses défenses antioxydantes. (Cours, p. 26–34)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quelle situation définit une hémolyse pathologique ?',
    options: [
      { text: 'L’élimination normale des hématies vieillissantes après environ 120 jours', correct: false, correction: 'Non chef. Cette élimination correspond à l’hémolyse physiologique.' },
      { text: 'La transformation normale d’un réticulocyte en hématie mature', correct: false, correction: 'Faux. Il s’agit d’une maturation, pas d’une destruction.' },
      { text: 'Une destruction prématurée des globules rouges, raccourcissant leur durée de vie', correct: true, correction: 'Oui boss 🧠 Les hématies sont détruites avant leur durée de vie physiologique, d’environ 120 jours.' },
      { text: 'Toute diminution de l’hémoglobine, quelle qu’en soit la cause', correct: false, correction: 'Non. Une anémie peut résulter d’un défaut de production ou d’un saignement, sans hémolyse.' },
      { text: 'Uniquement une destruction des hématies survenant dans les vaisseaux', correct: false, correction: 'Non chef. Une hémolyse pathologique peut aussi être tissulaire.' },
    ],
    explanation: 'L’hémolyse est la destruction des hématies. Elle est physiologique lors de leur renouvellement normal, et pathologique lorsque leur survie est raccourcie. (Cours, p. 34–37)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Concernant l’élimination physiologique des hématies vieillissantes, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle se produit exclusivement dans le torrent circulatoire', correct: false, correction: 'Non chef. L’hémolyse intravasculaire physiologique est minoritaire.' },
      { text: 'Elle repose majoritairement sur une phagocytose dans les tissus', correct: true, correction: 'Oui boss. La destruction tissulaire est majoritaire dans le cours.' },
      { text: 'La moelle osseuse peut également y participer', correct: true, correction: 'Oui. Le cours la cite, dans une moindre mesure.' },
      { text: 'La rate ne peut éliminer que des hématies ayant exactement 120 jours', correct: false, correction: 'Faux. Elle élimine aussi des hématies anormales ou devenues peu déformables ; 120 jours est une durée moyenne.' },
      { text: 'La rate et le foie participent à cette élimination', correct: true, correction: 'Exact 🧠 Ce sont deux sites importants de destruction des globules rouges.' },
    ],
    explanation: 'Les hématies vieillissantes sont surtout phagocytées dans la rate et le foie, avec une participation médullaire. La rate contribue aussi à éliminer les hématies anormales. (Cours, p. 34–35)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Après la destruction d’une hématie, quel est le devenir de la globine ?',
    options: [
      { text: 'Elle est réutilisée intacte pour toutes les nouvelles hémoglobines, sans dégradation', correct: false, correction: 'Non chef. Le recyclage décrit passe par sa dégradation en acides aminés.' },
      { text: 'Elle constitue la principale fraction transformée en bilirubine', correct: false, correction: 'Faux. La bilirubine provient du catabolisme de l’hème, après récupération du fer.' },
      { text: 'Elle devient directement de la ferritine sans dégradation', correct: false, correction: 'Non chef. La ferritine stocke le fer ; ce n’est pas le devenir direct des chaînes de globine.' },
      { text: 'Elle est dégradée en acides aminés réutilisables', correct: true, correction: 'Oui boss 🎯 La globine est la partie protéique de l’hémoglobine.' },
      { text: 'Elle est transformée en hème par les macrophages pendant le catabolisme', correct: false, correction: 'Non. La globine est catabolisée en acides aminés ; l’hème constitue l’autre fraction de l’hémoglobine initiale.' },
    ],
    explanation: 'Le catabolisme de l’hémoglobine sépare la globine, dégradée en acides aminés, de l’hème, dont le fer est recyclé. (Cours, p. 35–36)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Concernant le devenir des produits du catabolisme de l’hème, quelles propositions sont exactes ?',
    options: [
      { text: 'La fraction de l’hème dépourvue de fer conduit à la bilirubine, qui subit ensuite des transformations avant élimination', correct: true, correction: 'Oui. Le cours décrit la formation de bilirubine, puis sa conjugaison et son élimination après transformation en pigments.' },
      { text: 'Le fer de chaque hématie détruite est obligatoirement perdu dans les selles', correct: false, correction: 'Non chef. Le cours insiste sur sa récupération et son recyclage.' },
      { text: 'Le fer récupéré peut être réutilisé pour fabriquer de nouvelles hématies', correct: true, correction: 'Oui boss 🧠 Le recyclage contribue à fournir le fer nécessaire à l’érythropoïèse.' },
      { text: 'La transferrine assure le transport plasmatique du fer', correct: true, correction: 'Exact. Transport = transferrine.' },
      { text: 'L’haptoglobine est la principale protéine de stockage intracellulaire du fer', correct: false, correction: 'Faux. L’haptoglobine capte l’hémoglobine libre ; la ferritine stocke le fer.' },
    ],
    explanation: 'Le fer de l’hème est récupéré, transporté par la transferrine, stocké sous forme de ferritine ou réutilisé. Le reste de l’hème conduit à la bilirubine, conjuguée puis transformée en pigments éliminés notamment par les voies digestives. (Cours, p. 35–36)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Pourquoi l’haptoglobine plasmatique peut-elle s’effondrer lors d’une hémolyse intravasculaire importante ?',
    options: [
      { text: 'Elle est incorporée intacte dans toutes les nouvelles hématies', correct: false, correction: 'Non chef. Sa diminution est liée à la capture de l’hémoglobine libre et à la prise en charge des complexes formés.' },
      { text: 'Elle est consommée en fixant l’hémoglobine libérée dans le plasma', correct: true, correction: 'Oui boss 🎯 L’hémoglobine libre est captée par l’haptoglobine, ce qui fait diminuer cette dernière.' },
      { text: 'Elle est l’enzyme principale de la glycolyse érythrocytaire', correct: false, correction: 'Faux. C’est une protéine plasmatique de liaison à l’hémoglobine.' },
      { text: 'Elle est consommée en fabriquant les chaînes α de l’hémoglobine', correct: false, correction: 'Non chef. L’haptoglobine ne synthétise pas les chaînes de globine.' },
      { text: 'Elle augmente obligatoirement à mesure que les hématies sont détruites', correct: false, correction: 'Non. Une hémolyse intravasculaire importante peut au contraire la consommer.' },
    ],
    explanation: 'L’haptoglobine lie l’hémoglobine libérée lors de l’hémolyse intravasculaire. Sa consommation explique une diminution, voire un effondrement, de sa concentration plasmatique. (Cours, p. 37–38)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quels signes peuvent être observés au cours d’une anémie hémolytique ?',
    options: [
      { text: 'Une fatigue et une pâleur liées à l’anémie', correct: true, correction: 'Oui boss. La baisse de l’hémoglobine réduit le transport d’oxygène et contribue à la pâleur.' },
      { text: 'Une dyspnée, notamment à l’effort', correct: true, correction: 'Exact. Elle peut accompagner la diminution de l’oxygénation tissulaire.' },
      { text: 'Un ictère lié à l’augmentation de la bilirubine', correct: true, correction: 'Oui 🧠 La destruction des hématies augmente le catabolisme de l’hème.' },
      { text: 'Une splénomégalie, dans certaines situations', correct: true, correction: 'Exact. Une sollicitation accrue de la rate peut s’accompagner d’une augmentation de son volume.' },
      { text: 'Une augmentation obligatoire de l’hémoglobine expliquant la pâleur', correct: false, correction: 'Non chef. La pâleur liée à l’anémie accompagne une diminution de l’hémoglobine, pas une augmentation.' },
    ],
    explanation: 'Les signes d’anémie peuvent s’associer à un ictère et à une splénomégalie. Ces signes orientent le diagnostic, sans être tous obligatoires ni suffisants pour identifier la cause. (Cours, p. 37–38)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'À baisse d’hémoglobine comparable, pourquoi une anémie hémolytique d’installation brutale peut-elle être moins bien tolérée ?',
    options: [
      { text: 'La bilirubine remplace l’hémoglobine pour transporter l’oxygène', correct: false, correction: 'Non. La bilirubine est un produit de catabolisme, pas un substitut de transport de l’oxygène.' },
      { text: 'L’hémolyse supprime tout besoin d’oxygène des tissus', correct: false, correction: 'Non chef. Les besoins tissulaires persistent malgré la diminution du transport d’oxygène.' },
      { text: 'L’organisme dispose de moins de temps pour mettre en place ses mécanismes de compensation', correct: true, correction: 'Oui boss 🧠 La rapidité d’installation compte dans la tolérance d’une anémie.' },
      { text: 'Toutes les anémies hémolytiques s’installent obligatoirement en quelques minutes', correct: false, correction: 'Faux. Une hémolyse peut être aiguë ou chronique ; la question porte sur une installation brutale.' },
      { text: 'Une anémie aiguë augmente automatiquement la capacité de transport de l’oxygène', correct: false, correction: 'Non chef. La baisse de l’hémoglobine réduit cette capacité.' },
    ],
    explanation: 'Le cours explique la mauvaise tolérance possible des formes aiguës par le manque de temps pour s’adapter. Une anémie hémolytique peut également évoluer de façon chronique. (Cours, p. 37)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles anomalies constituent le bilan de lyse évocateur d’hémolyse présenté dans le cours ?',
    options: [
      { text: 'Une diminution de l’haptoglobine, particulièrement en cas d’hémolyse intravasculaire', correct: true, correction: 'Oui 🎯 Elle est consommée en fixant l’hémoglobine libre.' },
      { text: 'Une augmentation de la bilirubine', correct: true, correction: 'Oui boss. Elle reflète notamment l’augmentation du catabolisme de l’hème.' },
      { text: 'Une augmentation obligatoire de l’haptoglobine avec diminution des LDH', correct: false, correction: 'Non chef. C’est l’inverse du profil de lyse décrit.' },
      { text: 'Une augmentation des LDH', correct: true, correction: 'Exact. Les LDH sont libérées lors de la lyse cellulaire.' },
      { text: 'Une ferritine basse constituant à elle seule la preuve d’une hémolyse', correct: false, correction: 'Faux. Une ferritine basse oriente vers une diminution des réserves en fer ; elle ne prouve pas une hémolyse.' },
    ],
    explanation: 'Le bilan de lyse présenté associe bilirubine augmentée, LDH augmentées et haptoglobine diminuée. Ces résultats s’interprètent ensemble et avec le contexte. (Cours, p. 38–39)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Un patient anémique présente une bilirubine et des LDH augmentées, avec une haptoglobine effondrée. Quelle conclusion est la plus juste ?',
    options: [
      { text: 'Ce profil permet de distinguer avec certitude une cause immunologique d’une cause mécanique', correct: false, correction: 'Non chef. Des investigations étiologiques complémentaires sont nécessaires.' },
      { text: 'Ce profil prouve une carence isolée en vitamine B9', correct: false, correction: 'Faux. Il ne permet pas d’affirmer une carence isolée en B9.' },
      { text: 'Les LDH permettent, à elles seules, d’affirmer un déficit en G6PD', correct: false, correction: 'Non chef. Les LDH ne sont spécifiques ni de l’hémolyse ni d’une cause particulière.' },
      { text: 'L’haptoglobine effondrée exclut une destruction intravasculaire', correct: false, correction: 'Non. Sa consommation est particulièrement évocatrice dans ce contexte.' },
      { text: 'Ce profil est compatible avec une hémolyse ; son mécanisme doit encore être recherché', correct: true, correction: 'Oui boss 🧠 Le bilan oriente vers la destruction des hématies, puis il faut chercher sa cause.' },
    ],
    explanation: 'L’association des marqueurs de lyse est compatible avec une hémolyse. Les LDH étant présentes dans de nombreuses cellules, leur augmentation isolée n’est pas spécifique. (Cours, p. 38–41)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles propositions décrivent des causes corpusculaires d’hémolyse citées dans le cours ?',
    options: [
      { text: 'Une anomalie propre au globule rouge', correct: true, correction: 'Oui boss. Corpusculaire signifie que le défaut appartient à l’hématie elle-même.' },
      { text: 'Un anticorps plasmatique dirigé contre des hématies initialement normales', correct: false, correction: 'Non chef. Le facteur agressant est extérieur au globule rouge : mécanisme extra-corpusculaire immunologique.' },
      { text: 'Une anomalie de membrane dans la sphérocytose héréditaire', correct: true, correction: 'Exact. La perte de déformabilité favorise une destruction prématurée.' },
      { text: 'Un déficit enzymatique, par exemple en G6PD ou en pyruvate kinase', correct: true, correction: 'Exact 🧠 Les deux déficits cités peuvent raccourcir la survie des hématies.' },
      { text: 'Une anomalie de l’hémoglobine dans une hémoglobinopathie', correct: true, correction: 'Oui. L’hémoglobine fait partie des constituants pouvant être atteints.' },
    ],
    explanation: 'Les causes corpusculaires citées concernent la membrane, l’hémoglobine ou les enzymes de l’hématie. Les exemples du cours sont généralement congénitaux. (Cours, p. 39)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Chez un patient porteur d’une prothèse valvulaire cardiaque, une anémie hémolytique s’accompagne de schizocytes. Quel mécanisme est principalement évoqué ?',
    options: [
      { text: 'Une absence de facteur intrinsèque gastrique', correct: false, correction: 'Non chef. Elle peut entraîner une carence en B12, mais n’explique pas ce mécanisme de fragmentation.' },
      { text: 'Une destruction mécanique extra-corpusculaire des hématies', correct: true, correction: 'Oui boss 🎯 Les schizocytes sont des fragments d’hématies ; certaines prothèses valvulaires peuvent provoquer une fragmentation mécanique.' },
      { text: 'Une carence martiale démontrée par les schizocytes', correct: false, correction: 'Non. Les schizocytes orientent vers une fragmentation, pas vers une preuve de carence en fer.' },
      { text: 'Une augmentation physiologique de la durée de vie des hématies', correct: false, correction: 'Non chef. L’hémolyse correspond ici à une destruction prématurée.' },
      { text: 'Une anomalie de membrane héréditaire prouvée par la seule présence de la valve', correct: false, correction: 'Faux. La valve représente un facteur mécanique extérieur au globule rouge.' },
    ],
    explanation: 'Les valves cardiaques et les microangiopathies sont des causes mécaniques extra-corpusculaires citées. Les schizocytes orientent vers une fragmentation des hématies. (Cours, p. 22–23 et 40)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Concernant le déficit en G6PD et les facteurs déclenchants d’hémolyse, quelles propositions sont exactes ?',
    options: [
      { text: 'Le déficit concerne une enzyme du globule rouge', correct: true, correction: 'Oui boss. Le terrain est corpusculaire, même si la crise est favorisée par un événement extérieur.' },
      { text: 'Le déficit protège les hématies contre toute oxydation de l’hémoglobine', correct: false, correction: 'Faux. Il rend les hématies plus vulnérables au stress oxydatif.' },
      { text: 'Toute crise favorisée par un médicament exclut une anomalie corpusculaire sous-jacente', correct: false, correction: 'Non chef. Un facteur déclenchant extérieur peut révéler un déficit enzymatique propre à l’hématie.' },
      { text: 'Certains médicaments ou certaines substances oxydantes peuvent favoriser une destruction brutale des hématies', correct: true, correction: 'Oui 🧠 La capacité de protection contre le stress oxydatif est diminuée.' },
      { text: 'Certaines infections peuvent provoquer un stress oxydatif favorisant une crise', correct: true, correction: 'Exact. Le cours cite les infections parmi les facteurs déclenchants possibles.' },
    ],
    explanation: 'Un déficit enzymatique corpusculaire peut être révélé par un facteur extérieur. Dans le déficit en G6PD, certains agents oxydants peuvent déclencher une hémolyse aiguë. (Cours, p. 33 et 39–40)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Dans la classification du cours, à quelle catégorie appartient l’hémolyse liée au paludisme ?',
    options: [
      { text: 'Une cause extra-corpusculaire mécanique liée à une valve', correct: false, correction: 'Non chef. Les valves peuvent fragmenter les hématies ; le mécanisme présenté pour le paludisme est infectieux.' },
      { text: 'Une cause extra-corpusculaire toxique par intoxication au plomb', correct: false, correction: 'Non. L’intoxication au plomb correspond au saturnisme, pas au paludisme.' },
      { text: 'Une cause extra-corpusculaire infectieuse', correct: true, correction: 'Oui boss 🧠 Le parasite constitue une agression infectieuse, même s’il se développe dans les hématies.' },
      { text: 'Une cause corpusculaire enzymatique par déficit en G6PD', correct: false, correction: 'Non chef. Un déficit en G6PD est une autre cause d’hémolyse ; le paludisme est une infection parasitaire.' },
      { text: 'Une cause extra-corpusculaire immunologique par auto-anticorps', correct: false, correction: 'Faux. La catégorie demandée dans le cours est infectieuse, liée à Plasmodium.' },
    ],
    explanation: 'Le paludisme est classé parmi les causes infectieuses extra-corpusculaires. La présence du parasite dans l’hématie ne signifie pas que l’anomalie initiale est génétique et propre au globule rouge. (Cours, p. 26 et 40)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Concernant les indices et la réponse médullaire dans une anémie hémolytique, quelles propositions sont exactes ?',
    options: [
      { text: 'Un VGM normal suffit à prouver une hémolyse', correct: false, correction: 'Non chef. D’autres anémies sont normocytaires ; il faut rechercher les marqueurs de lyse.' },
      { text: 'Elle est généralement normocytaire dans la présentation du cours', correct: true, correction: 'Oui boss. Le VGM aide à orienter, mais il ne détermine pas à lui seul la cause.' },
      { text: 'Une microcytose exclut toutes les causes autres qu’une carence martiale', correct: false, correction: 'Faux. Le cours cite notamment la thalassémie et le saturnisme comme autres causes possibles.' },
      { text: 'Une augmentation du nombre absolu de réticulocytes témoigne d’une réponse médullaire', correct: true, correction: 'Exact 🧠 La moelle tente de compenser la destruction des hématies en augmentant leur production.' },
      { text: 'Le nombre absolu de réticulocytes est utile pour caractériser une anémie comme régénérative', correct: true, correction: 'Oui. Le pourcentage seul peut être trompeur lorsque le nombre d’hématies diminue.' },
    ],
    explanation: 'Le raisonnement associe VGM, réticulocytes, signes cliniques et bilan de lyse. Le profil généralement normocytaire du cours reste une orientation, et non une preuve isolée. (Cours, p. 3–4 et 41)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Un adulte présente une anémie, 3 T/L d’hématies et 6 % de réticulocytes, avec un bilan de lyse positif. Quelle interprétation est correcte avec le seuil de 120 G/L du cours ?',
    options: [
      { text: 'Les réticulocytes sont à 3 000 G/L : toutes les hématies sont des réticulocytes', correct: false, correction: 'Non. Les réticulocytes représentent ici 6 % du nombre total d’hématies.' },
      { text: 'Le calcul démontre à lui seul une origine auto-immune certaine', correct: false, correction: 'Non chef. Une réponse régénérative et un bilan de lyse positif ne précisent pas, à eux seuls, l’étiologie.' },
      { text: 'Les réticulocytes sont à 6 G/L car le pourcentage se lit directement en G/L', correct: false, correction: 'Faux. Il faut multiplier le nombre d’hématies par la fraction de réticulocytes.' },
      { text: 'Les réticulocytes sont à 18 G/L : l’anémie est arégénérative', correct: false, correction: 'Non chef. Il manque un facteur 10 : le résultat est 180 G/L.' },
      { text: 'Les réticulocytes sont à 180 G/L : l’anémie est régénérative, avec une orientation hémolytique', correct: true, correction: 'Oui boss 🎯 3 × 0,06 = 0,18 T/L = 180 G/L. Le bilan de lyse soutient ensuite l’orientation hémolytique.' },
    ],
    explanation: 'Nombre absolu = 3 T/L × 6/100 = 0,18 T/L = 180 G/L, soit 180 000/mm³. Ce résultat dépasse le seuil de 120 G/L du support. L’anémie est régénérative et le bilan de lyse oriente vers une hémolyse. (Cours, p. 3 et 38–41)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles étapes appartiennent au raisonnement devant une anémie potentiellement hémolytique ?',
    options: [
      { text: 'Rechercher des signes comme un ictère et interpréter un bilan de lyse', correct: true, correction: 'Exact. La clinique et la biologie doivent être mises en relation.' },
      { text: 'Caractériser l’anémie à partir des paramètres érythrocytaires et des réticulocytes', correct: true, correction: 'Oui boss 🧠 Les indices et la réponse médullaire sont les premiers éléments d’orientation.' },
      { text: 'Conclure systématiquement à une carence martiale devant toute anémie, sans regarder le VGM ni les réticulocytes', correct: false, correction: 'Non chef. Il faut caractériser l’anémie et confronter les hypothèses aux données.' },
      { text: 'Prendre en compte les récidives, le contexte familial, les infections et les causes immunologiques ou mécaniques', correct: true, correction: 'Exact. L’histoire et le contexte orientent les investigations étiologiques.' },
      { text: 'Rechercher ensuite une cause propre à l’hématie ou un facteur extérieur', correct: true, correction: 'Oui. C’est la distinction corpusculaire / extra-corpusculaire.' },
    ],
    explanation: 'La démarche va de la caractérisation de l’anémie à la recherche d’une hémolyse, puis de sa cause. Aucun indice ni marqueur isolé ne remplace l’interprétation de l’ensemble des données. (Cours, p. 39–41)'
  },
]
