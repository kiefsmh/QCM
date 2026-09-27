export const meta = {
  title: 'Parasitoses à transmission vectorielle',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle définition correspond au paludisme présenté dans le cours ?',
    options: [
      { text: 'Une infection bactérienne digestive acquise par ingestion d’aliments souillés', correct: false, correction: 'Non chef. Le paludisme est une infection parasitaire à transmission vectorielle.' },
      { text: 'Une helminthose due à un ver adulte vivant dans l’intestin', correct: false, correction: 'Faux. L’agent est un protozoaire, pas un ver intestinal.' },
      { text: 'Une infection virale définie par la seule présence d’une fièvre', correct: false, correction: 'Non. Une fièvre ne définit ni l’agent ni le diagnostic de paludisme.' },
      { text: 'Une infection exclusivement cutanée sans phase sanguine', correct: false, correction: 'Non chef. Une partie importante du cycle se déroule dans les hématies.' },
      { text: 'Une protozoose sanguine due à Plasmodium, transmise habituellement par un moustique', correct: true, correction: 'Oui boss 🧠 Plasmodium est un parasite unicellulaire, et le moustique joue le rôle de vecteur.' },
    ],
    explanation: 'Le paludisme est une protozoose sanguine causée par des parasites du genre Plasmodium. Le cours le présente comme une infection humaine à transmission vectorielle par piqûre de moustique. (Cours, p. 2–3)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles propositions générales concernant le paludisme sont exactes ?',
    options: [
      { text: 'Le moustique est le vecteur, tandis que Plasmodium est le parasite', correct: true, correction: 'Exact. Il faut distinguer celui qui transmet de l’agent transmis.' },
      { text: 'Toutes les fièvres tropicales sont nécessairement causées par Plasmodium', correct: false, correction: 'Non chef. La fièvre est un signe d’alerte, mais elle n’est pas spécifique du paludisme.' },
      { text: 'Plusieurs espèces de Plasmodium peuvent infecter l’être humain', correct: true, correction: 'Oui boss 🧠 Le nom du genre ne désigne pas une seule espèce.' },
      { text: 'Le paludisme est surtout rencontré dans des régions tropicales ou subtropicales', correct: true, correction: 'Exact 🎯 C’est la répartition générale présentée.' },
      { text: 'Une partie importante du cycle parasitaire se déroule dans les globules rouges', correct: true, correction: 'Oui. Le cours insiste sur cette localisation intra-érythrocytaire.' },
    ],
    explanation: 'Le cours distingue le parasite Plasmodium, dont plusieurs espèces infectent l’Homme, de son vecteur. Les régions tropicales et subtropicales sont les zones principalement concernées, avec un cycle comportant une phase érythrocytaire. (Cours, p. 2–3)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Un homme vivant en France revient d’un mois en zone rurale au Cameroun. Il présente une fièvre à 40 °C, une asthénie et des troubles digestifs. Quelle démarche correspond au cas du cours ?',
    options: [
      { text: 'Considérer la fièvre comme une preuve suffisante de paludisme', correct: false, correction: 'Non chef. Elle motive la recherche urgente, mais ne confirme pas à elle seule le diagnostic.' },
      { text: 'Affirmer l’espèce parasitaire sur la seule température du patient', correct: false, correction: 'Non. L’identification de l’espèce repose sur les examens parasitologiques.' },
      { text: 'Attendre plusieurs semaines puisque le patient est revenu en France', correct: false, correction: 'Faux. Une infection acquise pendant le voyage peut se révéler au retour et nécessiter un diagnostic urgent.' },
      { text: 'Conclure à une gastro-entérite et exclure le paludisme parce que les symptômes sont digestifs', correct: false, correction: 'Non chef. Des symptômes digestifs peuvent accompagner le paludisme.' },
      { text: 'Évoquer rapidement un accès palustre et rechercher le parasite dans le sang', correct: true, correction: 'Oui boss 🧠 Le séjour en zone de transmission et la fièvre imposent de penser au paludisme sans attendre.' },
    ],
    explanation: 'Le cas introductif fait évoquer un accès palustre devant une fièvre et des manifestations générales ou digestives après un séjour au Cameroun. La confirmation repose sur une recherche sanguine urgente. (Cours, p. 2 et 4 ; synthèse p. 8)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quels symptômes compatibles avec un paludisme sont cités dans le cours ?',
    options: [
      { text: 'Des nausées, vomissements ou une diarrhée', correct: true, correction: 'Oui. Une présentation digestive ne permet donc pas d’écarter le diagnostic.' },
      { text: 'Des symptômes dont chacun identifie avec certitude l’espèce de Plasmodium', correct: false, correction: 'Non chef. Ces signes ne permettent pas à eux seuls l’identification parasitaire.' },
      { text: 'Une asthénie et un tableau pseudo-grippal', correct: true, correction: 'Oui boss 🧠 Les manifestations générales peuvent évoquer un syndrome grippal.' },
      { text: 'Des céphalées, douleurs musculaires ou articulaires', correct: true, correction: 'Exact. Le support les présente parmi les symptômes non spécifiques.' },
      { text: 'Une fièvre souvent importante', correct: true, correction: 'Exact 🎯 C’est un signe d’alerte central, surtout au retour d’une zone de transmission.' },
    ],
    explanation: 'Le cours cite fièvre, asthénie, syndrome grippal, céphalées, douleurs musculaires ou articulaires et troubles digestifs. Ces manifestations sont compatibles avec le paludisme mais ne lui sont pas spécifiques. (Cours, p. 2–3)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quel enchaînement du cycle chez l’Homme est décrit après l’inoculation du parasite par le moustique ?',
    options: [
      { text: 'Une phase hépatique puis une multiplication dans les globules rouges', correct: true, correction: 'Oui boss 🧠 Le parasite gagne d’abord le foie, puis commence sa phase érythrocytaire.' },
      { text: 'Une multiplication exclusivement dans les globules blancs, sans passage hépatique', correct: false, correction: 'Non chef. Le cours décrit le foie puis les hématies.' },
      { text: 'Une multiplication dans les hématies suivie obligatoirement d’une phase hépatique initiale', correct: false, correction: 'Non. Tu inverses l’ordre de la phase hépatique initiale et de la phase érythrocytaire.' },
      { text: 'Une phase intestinale avec production de vers adultes', correct: false, correction: 'Faux. Il s’agit d’un protozoaire avec une phase sanguine, pas d’une helminthose intestinale.' },
      { text: 'Une simple circulation passive sans multiplication du parasite', correct: false, correction: 'Non chef. Le cours décrit une multiplication importante, notamment dans les globules rouges.' },
    ],
    explanation: 'Après l’inoculation, les formes parasitaires gagnent le foie. La phase hépatique précède le cycle de multiplication dans les hématies présenté dans le cours. (Cours, p. 3 et 7)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quels éléments relient la phase érythrocytaire aux manifestations cliniques dans le cours ?',
    options: [
      { text: 'Les parasites se multiplient dans des globules rouges', correct: true, correction: 'Oui boss 🧠 C’est une étape importante du cycle sanguin.' },
      { text: 'Les hématies parasitées peuvent être détruites au cours de ce cycle', correct: true, correction: 'Exact. Le cours décrit leur éclatement après la multiplication parasitaire.' },
      { text: 'La production de médiateurs pyrogènes contribue à la fièvre', correct: true, correction: 'Exact 🎯 Pyrogène signifie ici capable de favoriser la fièvre.' },
      { text: 'La fièvre démontre que le parasite est une bactérie', correct: false, correction: 'Non chef. Une infection par un protozoaire peut aussi provoquer une réponse fébrile.' },
      { text: 'Des produits parasitaires libérés peuvent déclencher une réponse inflammatoire', correct: true, correction: 'Oui. Cette réponse participe aux manifestations de l’accès palustre.' },
    ],
    explanation: 'La multiplication érythrocytaire et la destruction d’hématies parasitées libèrent des produits stimulant une réponse inflammatoire et des médiateurs pyrogènes. Ce mécanisme contribue à la fièvre. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Dans le cas clinique, l’analyse sanguine retrouve des trophozoïtes. Que désigne ce terme ?',
    options: [
      { text: 'Un globule blanc produisant des anticorps', correct: false, correction: 'Non chef. Le terme désigne un stade parasitaire, pas une cellule immunitaire.' },
      { text: 'Un anticorps spécifique mesuré par sérologie', correct: false, correction: 'Non chef. Le trophozoïte est le parasite lui-même, pas un marqueur indirect.' },
      { text: 'Le moustique responsable de la transmission', correct: false, correction: 'Faux. Le moustique est le vecteur ; le trophozoïte est une forme de Plasmodium.' },
      { text: 'Un stade de développement de Plasmodium présent dans un globule rouge', correct: true, correction: 'Oui boss 🧠 C’est la définition donnée dans la suite du cas.' },
      { text: 'Un parasite adulte segmenté présent dans l’intestin', correct: false, correction: 'Non. Le cours parle ici d’un protozoaire observé dans une hématie.' },
    ],
    explanation: 'Le cours définit le trophozoïte comme un stade de développement de Plasmodium lorsqu’il se trouve dans un globule rouge. Son observation appartient au diagnostic direct. (Cours, p. 5)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles propositions concernant la répartition du paludisme sont exactes ?',
    options: [
      { text: 'Le Cameroun est un pays particulièrement concerné dans le cas présenté', correct: true, correction: 'Oui. Cette destination participe au raisonnement clinique.' },
      { text: 'Le paludisme existe aussi dans d’autres régions tropicales ou subtropicales', correct: true, correction: 'Exact. Il n’est pas limité au continent africain.' },
      { text: 'L’Afrique subsaharienne représente une zone majeure de transmission', correct: true, correction: 'Oui boss 🧠 Le cours insiste sur le poids important de cette région.' },
      { text: 'En France métropolitaine, les cas présentés sont principalement des cas importés', correct: true, correction: 'Exact 🎯 L’infection est alors acquise pendant un séjour dans une zone de transmission.' },
      { text: 'Tout paludisme est nécessairement acquis en Afrique', correct: false, correction: 'Non chef. La prédominance africaine ne signifie pas une présence exclusive en Afrique.' },
    ],
    explanation: 'Le cours présente une prédominance en Afrique subsaharienne et des cas principalement importés en France métropolitaine. La répartition n’est toutefois pas exclusivement africaine. Les chiffres d’incidence historiques du support ne sont pas utilisés ici. (Cours, p. 2–3 et 5)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Que signifie le terme paludisme d’importation dans la présentation du cours ?',
    options: [
      { text: 'Une infection acquise pendant un séjour en zone de transmission puis diagnostiquée au retour', correct: true, correction: 'Oui boss 🎯 Le cas de retour du Cameroun illustre cette situation.' },
      { text: 'Une maladie due à une viande importée contenant des larves', correct: false, correction: 'Faux. Le paludisme décrit est une parasitose vectorielle, pas cette contamination alimentaire.' },
      { text: 'Une infection définie uniquement par la nationalité du patient', correct: false, correction: 'Non chef. Le lieu d’acquisition et les expositions comptent, pas la seule nationalité.' },
      { text: 'Une infection obligatoirement transmise par un moustique en France métropolitaine', correct: false, correction: 'Non chef. Le terme importation désigne ici une infection acquise lors d’un séjour ailleurs.' },
      { text: 'Une fièvre qui n’a plus besoin d’examen dès que le voyageur est rentré', correct: false, correction: 'Non. Le retour ne supprime pas une infection acquise pendant le voyage.' },
    ],
    explanation: 'Le cours appelle cas importés les infections contractées lors d’un séjour dans une zone où le paludisme circule. Cette notion explique l’importance de l’interrogatoire sur les voyages. (Cours, p. 2–3)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles affirmations concernant la fièvre et la suspicion de paludisme sont exactes ?',
    options: [
      { text: 'L’absence de fièvre lors de l’examen autorise toujours à annuler toute recherche parasitaire', correct: false, correction: 'Faux. La formulation absolue du support ne doit pas conduire à écarter une suspicion pertinente.' },
      { text: 'La fièvre est fréquente mais n’est pas spécifique du paludisme', correct: true, correction: 'Exact. D’autres maladies peuvent provoquer une fièvre comparable.' },
      { text: 'Une fièvre à 40 °C suffit à confirmer l’espèce Plasmodium falciparum', correct: false, correction: 'Non chef. Le diagnostic et l’identification de l’espèce nécessitent des examens.' },
      { text: 'Une température normale au moment du prélèvement n’exclut pas à elle seule un paludisme', correct: true, correction: 'Oui. Il faut tenir compte de l’histoire clinique et ne pas attendre obligatoirement une poussée fébrile pour rechercher le parasite.' },
      { text: 'Une fièvre au retour d’une zone de transmission doit faire évoquer rapidement un paludisme', correct: true, correction: 'Oui boss 🧠 C’est le message d’alerte du cas et de la synthèse.' },
    ],
    explanation: 'La fièvre est un signe d’alerte majeur au retour d’une zone de transmission, mais elle ne constitue pas une preuve spécifique. Une absence de fièvre lors d’une mesure ne permet pas, à elle seule, d’exclure l’infection. (Cours, p. 3 et 8 ; formulation absolue du support rectifiée)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quel examen permet de confirmer directement l’hypothèse de paludisme dans le cas du cours ?',
    options: [
      { text: 'Une coproculture recherchant uniquement des bactéries digestives', correct: false, correction: 'Non chef. Le diagnostic présenté recherche Plasmodium dans le sang.' },
      { text: 'La recherche de formes parasitaires dans un prélèvement sanguin', correct: true, correction: 'Oui boss 🔬 Le parasite peut être mis en évidence dans les hématies du sang périphérique.' },
      { text: 'La mesure de la température seule', correct: false, correction: 'Non chef. La fièvre oriente la démarche, mais ne démontre pas le parasite.' },
      { text: 'Une numération sanguine sans recherche parasitaire, suffisante à identifier l’espèce', correct: false, correction: 'Non. Une numération ne remplace pas l’identification directe du parasite.' },
      { text: 'Un examen cytobactériologique des urines', correct: false, correction: 'Faux. Il n’est pas l’examen confirmant le paludisme dans ce contexte.' },
    ],
    explanation: 'Le diagnostic de certitude présenté repose sur la mise en évidence de formes parasitaires intra-érythrocytaires dans un prélèvement sanguin. La recherche doit être réalisée en urgence. (Cours, p. 4 et 8)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quels objectifs le cours attribue-t-il à l’examen parasitologique du sang ?',
    options: [
      { text: 'Identifier l’espèce ou les espèces présentes', correct: true, correction: 'Oui. Plusieurs espèces peuvent infecter l’Homme.' },
      { text: 'Identifier les stades parasitaires observés', correct: true, correction: 'Exact. Le cours cite cette caractérisation parmi les objectifs.' },
      { text: 'Quantifier les parasites, notamment par l’évaluation de la parasitémie', correct: true, correction: 'Exact 🎯 Le diagnostic ne se limite pas à une réponse positive ou négative.' },
      { text: 'Remplacer l’interrogatoire sur les voyages par une mesure de fièvre isolée', correct: false, correction: 'Non chef. L’examen biologique et l’histoire du patient se complètent.' },
      { text: 'Détecter la présence de parasites', correct: true, correction: 'Oui boss 🧠 C’est la première question : le parasite est-il présent ?' },
    ],
    explanation: 'Les objectifs explicitement cités sont la détection, l’identification des stades et des espèces et la quantification des parasites. Le contexte clinique et de voyage reste nécessaire à l’interprétation. (Cours, p. 4)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Lorsqu’elle est exprimée en pourcentage d’hématies infectées, que représente une parasitémie de 6 % ?',
    options: [
      { text: 'Une preuve que 6 % des habitants du Cameroun présentent actuellement un accès palustre', correct: false, correction: 'Non. Le résultat concerne ce patient, pas la prévalence dans une population.' },
      { text: 'La proportion de globules blancs ayant produit des anticorps', correct: false, correction: 'Non chef. Le pourcentage concerne les hématies parasitées, pas les cellules productrices d’anticorps.' },
      { text: 'Environ six hématies infectées pour cent hématies examinées', correct: true, correction: 'Oui boss 🧠 C’est le sens de ce pourcentage lorsqu’il est calculé sur les globules rouges.' },
      { text: 'Une concentration obligatoirement égale à six parasites par microlitre de sang', correct: false, correction: 'Faux. Un pourcentage d’hématies infectées et un nombre de parasites par microlitre sont deux modes de quantification différents.' },
      { text: 'La proportion d’anticorps spécifiques parmi toutes les protéines du sérum', correct: false, correction: 'Non chef. Ce n’est pas une mesure sérologique.' },
    ],
    explanation: 'La parasitémie quantifie la présence de parasites dans le sang. Lorsqu’elle est exprimée comme proportion d’hématies infectées, 6 % correspond à environ six hématies infectées sur cent. Le cours utilise ce résultat dans son cas clinique. (Cours, p. 4–5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles propositions distinguent les apports du frottis sanguin et de la goutte épaisse ?',
    options: [
      { text: 'La goutte épaisse apporte une sensibilité élevée pour détecter des parasites peu nombreux', correct: true, correction: 'Oui. C’est l’intérêt mis en avant pour l’approche sensible.' },
      { text: 'Le frottis permet une observation directe des formes parasitaires', correct: true, correction: 'Oui boss 🔬 Il contribue à la confirmation microscopique de l’infection.' },
      { text: 'Un frottis et une goutte épaisse sont des dosages d’anticorps identiques', correct: false, correction: 'Faux. Ce sont des examens parasitologiques microscopiques, pas une sérologie.' },
      { text: 'Le frottis est utile pour identifier l’espèce et évaluer la parasitémie', correct: true, correction: 'Exact. Il permet d’examiner les parasites dans leur contexte érythrocytaire.' },
      { text: 'La goutte épaisse ne peut être positive que lorsque presque toutes les hématies sont parasitées', correct: false, correction: 'Non chef. Son intérêt est justement la détection à faible parasitémie.' },
    ],
    explanation: 'Le cours associe le frottis à l’identification directe et la goutte épaisse à une recherche sensible. Les examens se complètent : détection, identification de l’espèce et estimation de la parasitémie. (Cours, p. 4)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Un voyageur présente une forte suspicion clinique de paludisme, mais son test de diagnostic rapide est négatif. Quelle conclusion est correcte ?',
    options: [
      { text: 'La recherche doit être complétée par les examens parasitologiques adaptés sans abandonner la suspicion sur ce seul résultat', correct: true, correction: 'Oui boss 🧠 Le TDR est un complément ; la microscopie et le contexte clinique restent essentiels.' },
      { text: 'Le résultat exclut définitivement tout paludisme, quelle que soit la situation', correct: false, correction: 'Non chef. Un TDR négatif ne suffit pas à lui seul à écarter l’infection.' },
      { text: 'Le test négatif permet de calculer automatiquement une parasitémie de 0 %', correct: false, correction: 'Faux. Le TDR ne mesure pas le pourcentage d’hématies parasitées.' },
      { text: 'Le TDR négatif démontre une infection exclusivement hépatique', correct: false, correction: 'Non. Ce résultat n’identifie pas à lui seul la localisation ou le stade du parasite.' },
      { text: 'La seule alternative est de doser des anticorps pour identifier immédiatement l’espèce et la parasitémie', correct: false, correction: 'Non chef. La sérologie ne remplace pas les examens sanguins directs de l’accès aigu.' },
    ],
    explanation: 'Le support cite les TDR parmi les techniques diagnostiques. Leur résultat doit être intégré à une démarche adaptée : un résultat négatif isolé ne suffit pas à exclure un paludisme suspecté. (Cours, p. 4 et 8 ; limite du TDR précisée)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles affirmations correspondent à la logique des approches diagnostiques présentées ?',
    options: [
      { text: 'Une approche sensible consiste uniquement à interroger le patient sur ses douleurs', correct: false, correction: 'Faux. Il s’agit ici d’une propriété des examens biologiques de détection.' },
      { text: 'Détecter la présence d’une infection et préciser l’espèce sont des objectifs distincts', correct: true, correction: 'Exact. Un résultat de détection ne fournit pas automatiquement toute la caractérisation.' },
      { text: 'Une approche sensible vise à détecter le parasite même lorsque sa densité sanguine est faible', correct: true, correction: 'Oui boss 🧠 C’est le sens de la sensibilité mis en avant dans le support.' },
      { text: 'Le cours cite aussi des méthodes moléculaires parmi les techniques de recherche', correct: true, correction: 'Oui. Il mentionne notamment PCR et LAMP dans le schéma.' },
      { text: 'Toute technique sensible donne forcément à elle seule une espèce précise et un pourcentage d’hématies parasitées', correct: false, correction: 'Non chef. Les informations apportées diffèrent selon la technique.' },
    ],
    explanation: 'Le support distingue une recherche sensible à faible parasitémie d’une identification directe détaillée. Les méthodes diagnostiques peuvent se compléter, car détection, identification de l’espèce et quantification ne sont pas des informations identiques. (Cours, p. 4)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quelle espèce est identifiée chez le patient revenu du Cameroun dans la suite du cas clinique ?',
    options: [
      { text: 'Plasmodium vivax', correct: false, correction: 'Non chef. Cette espèce existe, mais ce n’est pas celle identifiée dans le cas.' },
      { text: 'Plasmodium falciparum', correct: true, correction: 'Oui boss 🎯 Le sang met en évidence de nombreux trophozoïtes de cette espèce.' },
      { text: 'Plasmodium ovale', correct: false, correction: 'Non chef. Ce n’est pas le résultat décrit pour ce patient.' },
      { text: 'Plasmodium knowlesi', correct: false, correction: 'Non. Le cas du support ne rapporte pas cette espèce.' },
      { text: 'Plasmodium malariae', correct: false, correction: 'Faux. L’espèce rapportée est P. falciparum.' },
    ],
    explanation: 'La suite du cas montre des trophozoïtes de Plasmodium falciparum avec une parasitémie de 6 %. L’espèce est identifiée par l’analyse sanguine, et non par la seule destination ou les symptômes. (Cours, p. 5)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles propositions concernant les espèces et la gravité du paludisme sont correctes ?',
    options: [
      { text: 'Toute espèce autre que P. falciparum est incapable de provoquer une forme grave', correct: false, correction: 'Non chef. Cette affirmation absolue du support est incorrecte : d’autres espèces peuvent aussi donner des formes graves.' },
      { text: 'L’identification de l’espèce fait partie des objectifs du diagnostic', correct: true, correction: 'Oui. Elle complète la simple détection du parasite.' },
      { text: 'Plasmodium falciparum est l’espèce majeure à connaître pour les formes graves', correct: true, correction: 'Oui boss 🧠 Le cours lui accorde une place centrale dans les formes graves et mortelles.' },
      { text: 'Une fièvre et un séjour au Cameroun suffisent à identifier l’espèce sans examen', correct: false, correction: 'Faux. Ils motivent la recherche, mais l’identification reste biologique.' },
      { text: 'Plusieurs espèces de Plasmodium peuvent infecter l’Homme', correct: true, correction: 'Exact. Le genre comporte plusieurs agents du paludisme humain.' },
    ],
    explanation: 'P. falciparum est principalement associé aux formes graves, mais n’en a pas l’exclusivité. La formule du support attribuant toute gravité et toute mortalité à cette seule espèce est rectifiée. L’identification parasitaire reste un objectif du prélèvement. (Cours, p. 2 et 4–5 ; correction p. 18 rectifiée)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Dans le cas du cours, la parasitémie atteint 6 % et le patient se dégrade jusqu’au coma. Quelle interprétation est correcte ?',
    options: [
      { text: 'Une parasitémie faible démontrant l’absence de gravité', correct: false, correction: 'Non chef. Le support qualifie ce résultat d’élevé et décrit une dégradation majeure.' },
      { text: 'Une parasitémie élevée dans ce cas, associée à une évolution clinique grave', correct: true, correction: 'Oui boss 🧠 L’évaluation repose ici sur le résultat parasitologique et la dégradation clinique.' },
      { text: 'Un résultat sérologique indiquant uniquement une infection ancienne', correct: false, correction: 'Non. Le pourcentage mesure une infection sanguine actuelle, pas des anticorps anciens.' },
      { text: 'Une preuve que tous les patients à 6 % ont nécessairement le même tableau clinique', correct: false, correction: 'Faux. Le chiffre et l’évolution doivent être interprétés dans le contexte du patient.' },
      { text: 'Un seuil universel unique en dessous duquel toute forme grave est impossible', correct: false, correction: 'Non chef. On ne peut pas transformer ce résultat du cas en règle universelle de gravité.' },
    ],
    explanation: 'Le cours présente 6 % comme une parasitémie élevée chez ce patient, qui évolue vers un coma. Ce résultat ne doit pas devenir un seuil unique excluant toute gravité en dessous : le contexte clinique reste essentiel. (Cours, p. 5 et 18)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles affirmations résument correctement la démarche devant une suspicion de paludisme ?',
    options: [
      { text: 'La caractérisation de l’espèce et de la parasitémie complète la détection', correct: true, correction: 'Oui. Le cours distingue ces différents objectifs du prélèvement.' },
      { text: 'La confirmation repose sur une recherche urgente du parasite dans le sang', correct: true, correction: 'Exact. La simple compatibilité des symptômes ne suffit pas.' },
      { text: 'Un symptôme isolé ou un TDR négatif suffisent toujours à exclure le paludisme', correct: false, correction: 'Non chef. Le diagnostic se construit à partir du contexte et d’examens adaptés, avec prise en compte de leurs limites.' },
      { text: 'Les formes érythrocytaires font partie d’un cycle qui comporte aussi une phase hépatique initiale', correct: true, correction: 'Exact 🎯 La présence dans les hématies ne signifie pas que tout le cycle humain se limite au sang.' },
      { text: 'L’histoire d’un séjour en zone de transmission participe au raisonnement clinique', correct: true, correction: 'Oui boss 🧠 Le retour de voyage est un élément majeur du cas introductif.' },
    ],
    explanation: 'Le raisonnement associe exposition, présentation clinique, recherche sanguine urgente, identification de l’espèce et quantification. Le parasite possède une phase hépatique puis une phase érythrocytaire ; aucun signe clinique isolé ne remplace les examens. (Cours, p. 2–5 et 7–8)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel phénomène contribue à la séquestration des hématies parasitées par Plasmodium falciparum ?',
    options: [
      { text: 'L’adhérence des hématies parasitées aux cellules endothéliales', correct: true, correction: 'Oui boss 🧠 Des molécules d’adhérence à leur surface permettent leur fixation à l’endothélium.' },
      { text: 'La migration obligatoire des hématies parasitées dans la lumière intestinale', correct: false, correction: 'Non. La séquestration décrite se situe dans la microcirculation.' },
      { text: 'La disparition de toutes les interactions entre hématies et paroi vasculaire', correct: false, correction: 'Faux. La cytoadhérence augmente justement ces interactions.' },
      { text: 'La fixation des parasites exclusivement à la surface des plaquettes', correct: false, correction: 'Non chef. Le mécanisme présenté concerne les hématies parasitées et l’endothélium.' },
      { text: 'Une multiplication de Leishmania dans les hématies', correct: false, correction: 'Non chef. Le cas concerne P. falciparum ; Leishmania cible notamment les macrophages.' },
    ],
    explanation: 'P. falciparum modifie la surface de l’hématie parasitée et favorise son adhérence à l’endothélium. Cette cytoadhérence participe à la séquestration microvasculaire. (Cours, p. 5–6)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement la séquestration au cours du paludisme à P. falciparum ?',
    options: [
      { text: 'Les hématies parasitées peuvent adhérer à l’endothélium des petits vaisseaux', correct: true, correction: 'Oui boss. C’est le phénomène de cytoadhérence présenté.' },
      { text: 'Des molécules d’adhérence sont exprimées à la surface des hématies parasitées', correct: true, correction: 'Exact 🧠 Leur surface est modifiée par l’infection.' },
      { text: 'Une hypoxie tissulaire traduit une amélioration de l’apport d’oxygène', correct: false, correction: 'Faux. L’hypoxie traduit au contraire un apport insuffisant aux besoins du tissu.' },
      { text: 'La séquestration peut perturber la perfusion des tissus', correct: true, correction: 'Exact. L’accumulation microvasculaire contribue à la souffrance tissulaire.' },
      { text: 'Le phénomène est limité aux gros vaisseaux à très haut débit', correct: false, correction: 'Non chef. Le cours insiste sur les petits vaisseaux et les capillaires.' },
    ],
    explanation: 'La cytoadhérence favorise la séquestration dans les petits vaisseaux, notamment cérébraux. Elle contribue aux perturbations de perfusion et à l’hypoxie. (Cours, p. 5–6)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle conséquence peut résulter d’une diminution de la perfusion en aval d’un territoire de séquestration palustre ?',
    options: [
      { text: 'Une hypoxie tissulaire liée à un apport d’oxygène insuffisant', correct: true, correction: 'Oui boss 🎯 C’est la conséquence en aval mise en avant dans le cours.' },
      { text: 'Une amélioration automatique de l’apport d’oxygène aux tissus', correct: false, correction: 'Non chef. Une diminution de perfusion peut compromettre cet apport.' },
      { text: 'Une augmentation nécessaire du débit dans les capillaires obstrués', correct: false, correction: 'Non chef. L’accumulation décrite tend à perturber la circulation plutôt qu’à assurer une meilleure perfusion.' },
      { text: 'Une disparition immédiate de toutes les hématies parasitées', correct: false, correction: 'Faux. Une perturbation du débit ne constitue pas un traitement antiparasitaire.' },
      { text: 'Une garantie d’absence de souffrance des organes', correct: false, correction: 'Non. Le défaut d’oxygénation peut justement contribuer à la souffrance tissulaire.' },
    ],
    explanation: 'L’altération de la microcirculation peut diminuer l’oxygénation des tissus en aval et contribuer à leur souffrance. C’est le sens de l’hypoxie décrite dans le support. (Cours, p. 6)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles propositions concernant les localisations et les conséquences de la séquestration palustre sont exactes ?',
    options: [
      { text: 'La souffrance tissulaire peut être liée à une mauvaise perfusion', correct: true, correction: 'Oui 🎯 Le défaut d’oxygénation constitue une conséquence possible.' },
      { text: 'Les capillaires cérébraux sont une localisation évoquée dans le neuropaludisme', correct: true, correction: 'Oui boss 🧠 Le cerveau est particulièrement important dans le cas présenté.' },
      { text: 'Les petits vaisseaux d’autres organes peuvent également être concernés', correct: true, correction: 'Exact. Le cours évoque les vaisseaux profonds, notamment du foie et de la rate.' },
      { text: 'Le phénomène ne peut concerner que les gros vaisseaux à haut débit', correct: false, correction: 'Non chef. Les petits vaisseaux et capillaires sont au centre de l’explication.' },
      { text: 'Une localisation cérébrale signifie que le reste de l’organisme ne peut jamais être atteint', correct: false, correction: 'Faux. La gravité du paludisme peut comporter des atteintes de plusieurs organes.' },
    ],
    explanation: 'La séquestration peut concerner la microcirculation cérébrale et d’autres territoires. Les perturbations de perfusion et la souffrance tissulaire participent à la gravité ; le schéma de la ronéo simplifie des mécanismes multiples. (Cours, p. 5–6)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Dans le cas du cours, la survenue d’un coma après confirmation d’un paludisme à P. falciparum doit être interprétée comme :',
    options: [
      { text: 'Une preuve que la parasitémie de 6 % est rassurante', correct: false, correction: 'Faux. La parasitémie est élevée dans ce cas et le coma est un signe de gravité.' },
      { text: 'Un signe de gravité justifiant une prise en charge urgente en réanimation', correct: true, correction: 'Oui boss 🎯 Le coma traduit une dégradation majeure dans ce contexte.' },
      { text: 'Une manifestation banale permettant de différer le traitement', correct: false, correction: 'Non chef. La dégradation neurologique impose une prise en charge urgente.' },
      { text: 'Un critère indiquant l’efficacité complète d’une simple moustiquaire', correct: false, correction: 'Non chef. La moustiquaire prévient des piqûres ; elle ne traite pas un accès déjà déclaré.' },
      { text: 'Une preuve d’infection par Leishmania plutôt que par Plasmodium', correct: false, correction: 'Non. Le parasite sanguin a été identifié comme P. falciparum.' },
    ],
    explanation: 'Le patient présente une parasitémie élevée puis un coma. Cette dégradation clinique conduit au transfert en réanimation pour un paludisme grave. (Cours, p. 5–7)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement la mortalité palustre et l’interprétation des données du cours ?',
    options: [
      { text: 'Les chiffres de mortalité imprimés dans la ronéo restent identiques chaque année par définition', correct: false, correction: 'Faux. Ils varient avec la période, les méthodes de surveillance et la situation épidémiologique.' },
      { text: 'Un paludisme contracté en voyage devient nécessairement bénin dès le retour en France', correct: false, correction: 'Non chef. Un accès d’importation peut être grave et nécessite une prise en charge urgente.' },
      { text: 'Les nombres annuels de cas et de décès sont des estimations liées à une période', correct: true, correction: 'Exact. Il faut distinguer les valeurs historiques du support d’une constante biologique.' },
      { text: 'L’Afrique subsaharienne supporte une part majeure du fardeau palustre mondial', correct: true, correction: 'Oui boss. C’est la région sur laquelle insiste le cours.' },
      { text: 'Des accès graves peuvent aussi entraîner des décès parmi les cas importés en France', correct: true, correction: 'Exact 🧠 Le risque vital ne s’arrête pas au retour d’une zone d’endémie.' },
    ],
    explanation: 'Le cours décrit une mortalité mondiale importante, particulièrement en Afrique subsaharienne, et des décès parmi les cas importés en France. Les nombres du support doivent être rattachés à leur période et ne sont pas des estimations actualisées dans ce quiz. (Cours, p. 3 et 6–8)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quel traitement de première intention du paludisme grave est nommé dans le cours ?',
    options: [
      { text: 'L’artredate par voie intraveineuse', correct: false, correction: 'Non chef. Le nom correct est artésunate ; « artredate » est le piège du QCM du support.' },
      { text: 'Une moustiquaire comme traitement antiparasitaire unique', correct: false, correction: 'Non. La moustiquaire est un moyen de prévention.' },
      { text: 'L’artésunate par voie intraveineuse', correct: true, correction: 'Oui boss 🎯 Le cours insiste sur cette molécule pour les formes graves.' },
      { text: 'Un répulsif cutané seul', correct: false, correction: 'Faux. Un répulsif protège des piqûres, sans traiter l’accès.' },
      { text: 'La spiramycine orale', correct: false, correction: 'Non chef. Ce n’est pas le médicament présenté pour le paludisme grave.' },
    ],
    explanation: 'L’artésunate intraveineux est présenté comme traitement de première intention du paludisme grave, avec une action rapide. Le cours ne détaille pas les doses ni la suite du protocole. (Cours, p. 7 et 18)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'À propos de l’artésunate présenté dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Il s’agit d’un dérivé de l’artémisinine', correct: true, correction: 'Exact 🧠 C’est la famille indiquée dans le support.' },
      { text: 'Il est présenté par voie intraveineuse pour le paludisme grave', correct: true, correction: 'Oui boss. Il faut rattacher la voie et le contexte à l’indication étudiée.' },
      { text: 'Il constitue un spray répulsif contre le moustique', correct: false, correction: 'Non chef. Il traite l’infection ; ce n’est pas une protection cutanée contre les piqûres.' },
      { text: 'Sa rapidité d’action antiparasitaire est mise en avant', correct: true, correction: 'Exact. Le cours illustre une diminution rapide de la charge parasitaire.' },
      { text: 'Il est présenté comme chimioprophylaxie systématique identique pour tous les voyageurs', correct: false, correction: 'Faux. Le cours distingue le traitement d’une forme grave et la prévention individuelle adaptée.' },
    ],
    explanation: 'L’artésunate est un dérivé de l’artémisinine, utilisé ici par voie IV dans le paludisme grave. L’action antiparasitaire rapide ne doit pas être confondue avec une action répulsive ou une prophylaxie de voyage. (Cours, p. 7–8)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Comment comprendre l’expression imagée « nettoyer les vaisseaux » utilisée à propos du traitement ?',
    options: [
      { text: 'Une amélioration permet de supprimer toute évaluation clinique ultérieure', correct: false, correction: 'Non chef. La réponse au traitement et les défaillances doivent être suivies dans une prise en charge adaptée.' },
      { text: 'L’artésunate épaissit la paroi des capillaires pour bloquer l’infection', correct: false, correction: 'Non. Le support décrit une action antiparasitaire rapide, pas cet épaississement.' },
      { text: 'Le traitement agit uniquement sur la fièvre, sans action sur Plasmodium', correct: false, correction: 'Faux. L’artésunate a une action antiparasitaire, pas seulement une action symptomatique.' },
      { text: 'Le médicament lave mécaniquement les vaisseaux comme un rinçage', correct: false, correction: 'Non chef. C’est une image, pas un mécanisme de lavage vasculaire.' },
      { text: 'Le traitement vise une diminution rapide de la charge parasitaire', correct: true, correction: 'Oui boss 🧠 La clairance parasitaire illustrée traduit une action contre Plasmodium.' },
    ],
    explanation: 'La figure du cours illustre la clairance parasitaire rapide sous traitement. « Nettoyer les vaisseaux » est une formulation pédagogique qui ne décrit pas un lavage mécanique. (Cours, p. 7)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quels moyens cités dans le cours participent à la protection contre les piqûres responsables du paludisme ?',
    options: [
      { text: 'Les nuits sous moustiquaire', correct: true, correction: 'Exact. La protection nocturne correspond à l’activité habituelle du vecteur.' },
      { text: 'Le port de vêtements couvrants', correct: true, correction: 'Oui 🎯 Ils diminuent les zones de peau exposées.' },
      { text: 'La cuisson de la viande comme mesure spécifique contre les piqûres', correct: false, correction: 'Non chef. Cela concerne d’autres risques alimentaires, pas la voie vectorielle du paludisme.' },
      { text: 'L’évitement de l’eau du robinet comme protection directe contre Plasmodium', correct: false, correction: 'Faux. La voie vectorielle étudiée n’est pas une contamination par l’eau bue.' },
      { text: 'L’utilisation de répulsifs', correct: true, correction: 'Oui boss 🧠 Ils réduisent le contact avec les moustiques.' },
    ],
    explanation: 'La prévention antipiqûres repose notamment sur répulsifs, moustiquaires et vêtements couvrants. Les précautions alimentaires n’agissent pas sur cette voie de transmission. (Cours, p. 8 et 19)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel vecteur assure habituellement la transmission du paludisme étudiée dans le cours ?',
    options: [
      { text: 'Le moustique Anopheles mâle', correct: false, correction: 'Non chef. La transmission habituelle est assurée par une femelle Anopheles infectée.' },
      { text: 'La mouche tsé-tsé', correct: false, correction: 'Faux. Elle est associée à la trypanosomose africaine.' },
      { text: 'La punaise vectrice de la maladie de Chagas', correct: false, correction: 'Non. Elle appartient à une autre chaîne de transmission.' },
      { text: 'Le phlébotome', correct: false, correction: 'Non chef. Le phlébotome transmet les leishmanioses.' },
      { text: 'La femelle moustique du genre Anopheles', correct: true, correction: 'Oui boss 🎯 C’est le vecteur du paludisme.' },
    ],
    explanation: 'Le paludisme est habituellement transmis par la piqûre d’une femelle Anopheles infectée. Le parasite et l’insecte vecteur doivent être distingués. (Cours, p. 7–8)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles associations décrivent correctement les acteurs de la transmission vectorielle du paludisme ?',
    options: [
      { text: 'Population humaine exposée : hôte susceptible de recevoir le parasite', correct: true, correction: 'Exact. Le vecteur et les hôtes participent à la chaîne décrite.' },
      { text: 'Plasmodium : agent parasitaire', correct: true, correction: 'Exact 🧠 C’est le parasite responsable de l’infection.' },
      { text: 'Moustiquaire : agent infectieux du paludisme', correct: false, correction: 'Non chef. Elle constitue une protection physique.' },
      { text: 'Plasmodium : nom scientifique du moustique', correct: false, correction: 'Faux. Le moustique et le protozoaire portent des noms différents.' },
      { text: 'Moustique Anopheles infecté : vecteur', correct: true, correction: 'Oui boss. L’insecte assure le passage du parasite à l’humain.' },
    ],
    explanation: 'Le cours distingue parasite, vecteur et population exposée. Cette description concerne la chaîne vectorielle habituelle ; elle ne signifie pas que toute transmission de paludisme exige un moustique. (Cours, p. 7–8 ; précision du cadre)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Pourquoi les nuits sous moustiquaire sont-elles particulièrement pertinentes pour prévenir le paludisme ?',
    options: [
      { text: 'Parce que les Anopheles vecteurs piquent principalement pendant la nuit', correct: true, correction: 'Oui boss 🎯 La protection cible une période importante d’exposition.' },
      { text: 'Parce que Plasmodium ne peut se multiplier que pendant le sommeil de l’hôte', correct: false, correction: 'Non chef. L’activité nocturne du vecteur ne limite pas la multiplication parasitaire au sommeil.' },
      { text: 'Parce qu’elles rendent une chimioprophylaxie indiquée automatiquement inutile', correct: false, correction: 'Non chef. Les protections antipiqûres et la chimioprophylaxie se complètent selon la situation.' },
      { text: 'Parce qu’elles empêchent toute transmission alimentaire des leishmanioses', correct: false, correction: 'Non. Leur rôle dans ce cas est la protection contre le vecteur.' },
      { text: 'Parce qu’elles détruisent les parasites déjà présents dans les hématies', correct: false, correction: 'Faux. Elles empêchent des piqûres ; elles ne traitent pas l’infection.' },
    ],
    explanation: 'Le cours souligne l’activité principalement nocturne des femelles Anopheles et l’intérêt des moustiquaires. Une protection physique ne remplace pas automatiquement les autres mesures adaptées. (Cours, p. 8)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quelles propositions concernant la prémunition palustre sont exactes ?',
    options: [
      { text: 'Elle peut se développer après des expositions répétées et prolongées en zone d’endémie', correct: true, correction: 'Oui boss 🧠 Le cours la rattache à une exposition durable au parasite.' },
      { text: 'Elle correspond à une protection partielle et fragile', correct: true, correction: 'Exact. Ce n’est pas une immunité stérilisante ou une garantie absolue.' },
      { text: 'Elle peut s’atténuer après une longue période hors zone d’endémie', correct: true, correction: 'Exact. Une ancienne exposition ne garantit pas la protection lors d’un nouveau voyage.' },
      { text: 'Elle empêche définitivement toute infection après un unique accès de paludisme', correct: false, correction: 'Non chef. La prémunition dépend d’expositions répétées et reste incomplète.' },
      { text: 'Elle peut diminuer le risque de manifestations graves sans empêcher tout portage parasitaire', correct: true, correction: 'Oui 🎯 Infection et manifestations graves ne sont pas équivalentes.' },
    ],
    explanation: 'La prémunition est une protection partielle acquise au cours d’expositions répétées. Elle reste fragile, n’exclut pas le portage et peut diminuer lorsque l’exposition cesse. (Cours, p. 2 et 8 ; précision sur sa persistance)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'L’homme du cas clinique vit en France depuis 15 ans après avoir vécu en Afrique. Que faut-il retenir pour son nouveau séjour au Cameroun ?',
    options: [
      { text: 'La protection antipiqûres est réservée aux personnes nées en Europe', correct: false, correction: 'Faux. Tout voyageur exposé doit bénéficier d’une prévention adaptée.' },
      { text: 'Son origine garantit une immunité définitive contre les formes graves', correct: false, correction: 'Non chef. L’origine géographique ne constitue pas une garantie de protection.' },
      { text: 'Vivre en France rend impossible toute infection contractée pendant un voyage', correct: false, correction: 'Non. Les cas d’importation sont précisément acquis lors de séjours en zone de transmission.' },
      { text: 'Une crise de paludisme antérieure remplace les conseils de prévention', correct: false, correction: 'Non chef. Un antécédent ne garantit pas l’absence de réinfection.' },
      { text: 'Une ancienne prémunition ne doit pas être présumée encore protectrice après cette longue période', correct: true, correction: 'Oui boss 🧠 La protection partielle peut diminuer hors zone d’endémie.' },
    ],
    explanation: 'Le cas illustre le risque d’un voyageur anciennement exposé. Une longue résidence hors zone d’endémie ne permet pas de compter sur une prémunition durable ; la prévention reste nécessaire. (Cours, p. 2 et 8 ; précision sur la prémunition)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Un voyageur a pris une chimioprophylaxie mais présente une fièvre au retour d’une zone d’endémie. Quelles propositions sont exactes ?',
    options: [
      { text: 'Un paludisme reste une hypothèse à rechercher rapidement', correct: true, correction: 'Oui boss 🧠 Aucune prévention ne permet de négliger ce contexte clinique.' },
      { text: 'La prise d’un médicament préventif prouve que toute fièvre est digestive', correct: false, correction: 'Non chef. Ce raisonnement ne permet pas d’écarter une infection palustre.' },
      { text: 'Les mesures antipiqûres restent complémentaires de la chimioprophylaxie', correct: true, correction: 'Oui 🎯 Le cours présente leur association dans la prophylaxie individuelle.' },
      { text: 'Le traitement préventif ne rend pas inutile la recherche sanguine du parasite', correct: true, correction: 'Exact. Le diagnostic répond à la question d’une infection actuelle.' },
      { text: 'Une moustiquaire utilisée une nuit garantit l’absence de toute exposition pendant le séjour', correct: false, correction: 'Faux. Une protection ponctuelle ne supprime pas tous les contacts possibles avec le vecteur.' },
    ],
    explanation: 'La prophylaxie individuelle combine protection antipiqûres et chimioprophylaxie lorsqu’elle est indiquée. Une fièvre au retour d’une zone de transmission reste un signal d’alerte nécessitant une recherche urgente. (Cours, p. 8)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle proposition illustre correctement la spécificité d’un vecteur pour certains agents infectieux ?',
    options: [
      { text: 'La présence de VIH chez une personne rend son sang capable d’infecter le prochain sujet piqué par un moustique', correct: false, correction: 'Non. Une piqûre de moustique n’est pas une voie de transmission du VIH.' },
      { text: 'Un moustique peut transmettre tout agent qu’il rencontre dans le sang, y compris le VIH', correct: false, correction: 'Non chef. La transmission biologique exige une compatibilité entre l’agent et le vecteur ; le VIH n’est pas transmis par les moustiques.' },
      { text: 'Le phlébotome et l’Anopheles sont interchangeables pour toutes les parasitoses du cours', correct: false, correction: 'Non chef. Le phlébotome est associé aux leishmanioses, l’Anopheles au paludisme.' },
      { text: 'Un Anopheles peut transmettre Plasmodium, tandis qu’un moustique ne transmet pas le VIH', correct: true, correction: 'Oui boss 🧠 Le fait de piquer ne suffit pas à faire d’un insecte le vecteur de tous les microbes sanguins.' },
      { text: 'Tout contact entre un parasite et un insecte garantit leur adaptation réciproque', correct: false, correction: 'Faux. Le cours insiste sur une adaptation spécifique aux hôtes.' },
    ],
    explanation: 'Le cours souligne l’adaptation du parasite à ses hôtes et rappelle l’absence de transmission du VIH par une piqûre de moustique. Les couples agent-vecteur ne sont pas interchangeables. (Cours, p. 9–10 et 19)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles propositions concernant la chimioprophylaxie individuelle du paludisme sont conformes au cours ?',
    options: [
      { text: 'Elle correspond à une prévention médicamenteuse', correct: true, correction: 'Exact 🧠 Le terme est distingué de la barrière physique contre les moustiques.' },
      { text: 'Son indication et son choix doivent être adaptés au voyageur et au séjour', correct: true, correction: 'Oui boss. Le cours précise qu’elle doit être individualisée.' },
      { text: 'Une molécule unique est obligatoirement donnée à tous les voyageurs, quelle que soit la destination', correct: false, correction: 'Non chef. Une prévention adaptée ne se résume pas à un schéma universel.' },
      { text: 'Elle peut être associée à des répulsifs, une moustiquaire et des vêtements couvrants', correct: true, correction: 'Exact. Les mesures sont complémentaires.' },
      { text: 'Elle constitue le traitement suffisant d’un coma palustre déjà installé', correct: false, correction: 'Faux. Prévenir une infection et traiter un paludisme grave sont des démarches différentes.' },
    ],
    explanation: 'La chimioprophylaxie est une prévention médicamenteuse individualisée, associée aux protections contre les moustiques lorsqu’elle est indiquée. Les schémas et doses ne sont pas détaillés dans le cours. (Cours, p. 8)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle lecture de la durée d’incubation « 7 jours à 2 mois » donnée oralement dans le cours est la plus juste ?',
    options: [
      { text: 'Elle constitue un repère présenté dans le cours, sans borner absolument toutes les infections palustres', correct: true, correction: 'Oui boss 🧠 Le délai dépend notamment de l’espèce et du contexte.' },
      { text: 'Elle correspond à la durée nécessaire pour obtenir tout résultat de frottis sanguin', correct: false, correction: 'Non. L’incubation sépare la contamination des premiers symptômes ; le diagnostic doit être rapide.' },
      { text: 'Elle impose d’attendre deux mois avant de rechercher le parasite chez un patient fébrile', correct: false, correction: 'Faux. Une suspicion se recherche en urgence sans attendre la fin d’un délai théorique.' },
      { text: 'Elle signifie qu’un symptôme survenant plus tard exclut toujours tout paludisme', correct: false, correction: 'Non chef. Des présentations plus tardives existent ; ce repère du support n’est pas une limite universelle.' },
      { text: 'Elle désigne l’intervalle entre les premiers symptômes et la confirmation biologique', correct: false, correction: 'Non chef. L’incubation commence à la contamination et se termine à l’apparition des premiers symptômes.' },
    ],
    explanation: 'L’incubation est le temps entre la contamination et les premiers symptômes. Le repère de 7 jours à 2 mois rapporté dans la ronéo ne doit pas exclure des présentations plus tardives ni retarder le diagnostic. (Cours, p. 9 ; précision du délai)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles propositions associent correctement les étapes de prise en charge du paludisme étudiées ?',
    options: [
      { text: 'Suspicion : rechercher rapidement le parasite devant une fièvre après un séjour exposant', correct: true, correction: 'Exact. La notion de voyage oriente la démarche urgente.' },
      { text: 'Prévention : limiter les piqûres et proposer une chimioprophylaxie adaptée lorsqu’elle est indiquée', correct: true, correction: 'Oui boss 🧠 Ces mesures agissent avant la survenue de l’accès.' },
      { text: 'Gravité : tenir compte des signes cliniques, dont la dégradation neurologique, et de la parasitémie', correct: true, correction: 'Oui 🎯 Un chiffre ou un symptôme isolé ne résume pas tout le dossier.' },
      { text: 'Traitement d’une forme grave : artésunate intraveineux dans une prise en charge hospitalière adaptée', correct: true, correction: 'Exact. C’est le traitement nommé dans le cours.' },
      { text: 'Confirmation : considérer une fièvre isolée comme une identification certaine de P. falciparum', correct: false, correction: 'Non chef. La fièvre est un signal d’alerte, pas une preuve de l’espèce parasitaire.' },
    ],
    explanation: 'La démarche distingue prévention, suspicion urgente, confirmation parasitologique, évaluation de la gravité et traitement. Le contexte de voyage et la clinique orientent, mais ne remplacent pas l’identification biologique. (Cours, p. 2–8)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Une femme séjournant régulièrement en Algérie présente fièvre, fatigue, splénomégalie, anémie et syndrome inflammatoire. Quelle interprétation correspond au cas introductif du cours ?',
    options: [
      { text: 'Le tableau prouve une leishmaniose tégumentaire localisée', correct: false, correction: 'Non chef. L’association d’organomégalie et de cytopénie oriente ici vers une atteinte viscérale.' },
      { text: 'Une leishmaniose est exclue en l’absence d’ulcération cutanée', correct: false, correction: 'Non chef. Une forme viscérale peut toucher les organes profonds sans ulcération cutanée au premier plan.' },
      { text: 'Une leishmaniose viscérale doit être envisagée parmi les hypothèses', correct: true, correction: 'Oui boss 🧠 Fièvre, splénomégalie, anémie et exposition géographique font envisager cette forme, sans suffire à l’affirmer.' },
      { text: 'La seule NFS permet de prouver la présence de Leishmania', correct: false, correction: 'Faux. La NFS décrit les anomalies sanguines ; la confirmation nécessite de mettre en évidence le parasite ou son ADN.' },
      { text: 'La fièvre suffit à éliminer une hémopathie', correct: false, correction: 'Non. Une hémopathie fait justement partie des diagnostics différentiels présentés.' },
    ],
    explanation: 'Le cas introductif fait envisager une leishmaniose viscérale et une hémopathie devant fièvre, altération de l’état général, splénomégalie et anémie. La confirmation ne repose pas sur ces seuls signes. (Cours, p. 10 et 13)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Concernant le raisonnement devant le cas de la patiente ayant séjourné en Algérie, quelles propositions sont exactes ?',
    options: [
      { text: 'Une hémopathie, notamment une leucémie, fait partie des hypothèses du cours', correct: true, correction: 'Oui boss 🎯 La splénomégalie et les anomalies sanguines ne sont pas spécifiques d’une parasitose.' },
      { text: 'La fièvre et l’anémie prouvent à elles seules une infection par Leishmania', correct: false, correction: 'Non chef. Elles orientent mais peuvent avoir d’autres causes.' },
      { text: 'Une recherche du parasite ou de son ADN peut permettre de confirmer la leishmaniose', correct: true, correction: 'Oui 🧠 Le diagnostic de certitude nécessite une mise en évidence spécifique.' },
      { text: 'Les lieux de vie et de séjour sont utiles pour apprécier l’exposition', correct: true, correction: 'Exact. L’histoire géographique complète les données cliniques et biologiques.' },
      { text: 'Une origine méditerranéenne permet d’écarter les leishmanioses', correct: false, correction: 'Faux. Le cours rappelle leur présence dans le bassin méditerranéen, dont l’Europe du Sud.' },
    ],
    explanation: 'La démarche associe le contexte d’exposition, les signes cliniques, les anomalies biologiques et la recherche d’un diagnostic spécifique. Une hémopathie reste un diagnostic différentiel. (Cours, p. 10–11 et 13)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle est la nature de l’agent responsable des leishmanioses ?',
    options: [
      { text: 'Le phlébotome lui-même, qui se multiplie dans les macrophages', correct: false, correction: 'Non chef. Le phlébotome est l’insecte vecteur ; le parasite qu’il transmet est Leishmania.' },
      { text: 'Un protozoaire unicellulaire du genre Leishmania', correct: true, correction: 'Oui boss 🎯 Les leishmanioses sont des protozooses.' },
      { text: 'Une bactérie intracellulaire du genre Leishmania', correct: false, correction: 'Non chef. Leishmania est un protozoaire, pas une bactérie.' },
      { text: 'Un ver hématophage transmis par un chien', correct: false, correction: 'Non. L’agent est unicellulaire ; le chien peut être un réservoir mais n’est pas le vecteur.' },
      { text: 'Un virus infectant principalement les plaquettes', correct: false, correction: 'Faux. Le cours décrit un parasite unicellulaire du système monocyte-macrophage.' },
    ],
    explanation: 'Les leishmanioses sont causées par des protozoaires du genre Leishmania. Il faut distinguer le parasite de l’insecte qui le transmet et des éventuels réservoirs animaux. (Cours, p. 10–13)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Concernant la localisation cellulaire de Leishmania chez l’Homme, quelles propositions sont exactes ?',
    options: [
      { text: 'Le système monocyte-macrophage est impliqué', correct: true, correction: 'Exact. C’est le système cellulaire cité dans le récapitulatif.' },
      { text: 'Le parasite peut vivre à l’intérieur des macrophages', correct: true, correction: 'Oui boss 🧠 Le cours décrit une multiplication intracellulaire dans ces cellules.' },
      { text: 'Le parasite se développe uniquement dans les globules rouges', correct: false, correction: 'Faux. La localisation enseignée pour Leishmania concerne le système monocyte-macrophage.' },
      { text: 'Cette localisation est compatible avec une atteinte d’organes profonds comme la rate et le foie', correct: true, correction: 'Oui 🎯 La forme viscérale concerne notamment ces organes.' },
      { text: 'La phagocytose du parasite garantit toujours son élimination immédiate', correct: false, correction: 'Non chef. Le parasite peut survivre et se multiplier à l’intérieur des macrophages.' },
    ],
    explanation: 'Leishmania est un parasite intracellulaire du système monocyte-macrophage. Dans les formes viscérales, il peut se multiplier et atteindre notamment la rate et le foie. (Cours, p. 10, 12–13)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quels organes sont principalement associés à l’organomégalie de la leishmaniose viscérale dans le cours ?',
    options: [
      { text: 'Exclusivement les poumons et les reins', correct: false, correction: 'Non. Ce ne sont pas les organes principalement cités dans ce tableau.' },
      { text: 'La rate, le foie et les ganglions', correct: true, correction: 'Oui boss 🎯 C’est l’association d’organes donnée dans le tableau clinique de la forme viscérale.' },
      { text: 'Seulement les ganglions, avec impossibilité d’atteinte hépatique ou splénique', correct: false, correction: 'Non chef. L’hépatomégalie et la splénomégalie sont au contraire des manifestations importantes.' },
      { text: 'Uniquement les intestins et l’œsophage', correct: false, correction: 'Faux. Le cours met surtout en avant la rate, le foie et les ganglions pour la leishmaniose viscérale.' },
      { text: 'Uniquement la peau et les muqueuses', correct: false, correction: 'Non chef. Cela correspond aux localisations tégumentaires, pas aux organes profonds de la forme viscérale.' },
    ],
    explanation: 'La forme viscérale associe notamment une organomégalie touchant la rate, le foie et les ganglions. La splénomégalie est illustrée dans le cours. (Cours, p. 10–12 et 14)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Concernant les anomalies de la NFS possibles dans la leishmaniose viscérale, quelles propositions sont exactes ?',
    options: [
      { text: 'Une anémie peut être observée', correct: true, correction: 'Oui boss 🧠 L’atteinte de la lignée rouge est explicitement citée.' },
      { text: 'Les plaquettes peuvent également diminuer', correct: true, correction: 'Exact. Le cours décrit une atteinte possible des plaquettes.' },
      { text: 'Toute anomalie sanguine suffit à affirmer une leishmaniose', correct: false, correction: 'Faux. Les cytopénies sont des éléments d’orientation, pas une preuve spécifique du parasite.' },
      { text: 'Les globules blancs peuvent être concernés', correct: true, correction: 'Oui 🎯 Les anomalies ne se limitent pas obligatoirement aux globules rouges.' },
      { text: 'Une cytopénie signifie une augmentation du nombre de cellules sanguines', correct: false, correction: 'Non chef. Une cytopénie est une diminution d’une ou de plusieurs populations de cellules sanguines.' },
    ],
    explanation: 'La leishmaniose viscérale peut entraîner des cytopénies concernant plusieurs lignées, notamment anémie, diminution des plaquettes et des globules blancs. La NFS ne suffit pas à confirmer l’étiologie. (Cours, p. 10)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement l’évolution possible d’une leishmaniose viscérale non traitée ?',
    options: [
      { text: 'Elle entraîne uniquement une ulcération locale sans retentissement général', correct: false, correction: 'Faux. Elle peut associer fièvre, organomégalie, cytopénies et altération de l’état général.' },
      { text: 'Elle est toujours bénigne car le parasite reste à la surface de la peau', correct: false, correction: 'Non chef. La forme viscérale touche des organes profonds et peut être grave.' },
      { text: 'Elle peut dégrader progressivement l’état général et être fatale en l’absence de traitement', correct: true, correction: 'Oui boss 🎯 Le pronostic potentiellement fatal justifie la prise en charge, sans généraliser cette gravité à toutes les formes cutanées.' },
      { text: 'Elle confère obligatoirement une immunité définitive avant de disparaître', correct: false, correction: 'Non. On ne peut pas promettre une guérison ni une protection définitive contre toute nouvelle infection.' },
      { text: 'Elle ne peut devenir grave que si une lésion muqueuse est présente', correct: false, correction: 'Non chef. Une forme viscérale peut être grave indépendamment d’une atteinte muqueuse.' },
    ],
    explanation: 'La leishmaniose viscérale peut s’accompagner d’une dégradation progressive de l’état général et devenir fatale sans traitement. Le récapitulatif du cours distingue ce pronostic de celui des différentes formes cutanées. (Cours, p. 11–13)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quels éléments appartiennent au tableau de leishmaniose viscérale présenté dans le cours ?',
    options: [
      { text: 'Une altération progressive de l’état général', correct: true, correction: 'Oui 🎯 Elle est décrite dans les formes évoluant de façon chronique.' },
      { text: 'Une splénomégalie ou une hépatomégalie', correct: true, correction: 'Exact. Le gonflement de la rate et du foie est un élément important du tableau.' },
      { text: 'Une ulcération cutanée isolée comme seule manifestation obligatoire', correct: false, correction: 'Non chef. Une ulcération oriente plutôt vers une forme tégumentaire ; elle ne résume pas la forme viscérale.' },
      { text: 'Des marqueurs biologiques d’inflammation', correct: true, correction: 'Exact. Le syndrome inflammatoire peut être visible au bilan sanguin.' },
      { text: 'Une fièvre', correct: true, correction: 'Oui boss 🧠 Elle fait partie du syndrome inflammatoire clinique décrit.' },
    ],
    explanation: 'La forme viscérale peut associer fièvre, inflammation biologique, organomégalie, cytopénies et altération de l’état général. (Cours, p. 10–12 et 14)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quel vecteur transmet les leishmanioses décrites dans le cours ?',
    options: [
      { text: 'Une tique', correct: false, correction: 'Non chef. Le vecteur présenté ici est le phlébotome.' },
      { text: 'Le chien, par son contact cutané direct avec l’Homme', correct: false, correction: 'Non chef. Le chien peut être un réservoir ; le vecteur de la transmission enseignée est un insecte.' },
      { text: 'La mouche tsé-tsé', correct: false, correction: 'Non. Elle est associée à la trypanosomose africaine, pas aux leishmanioses.' },
      { text: 'Le phlébotome', correct: true, correction: 'Oui boss 🎯 Ce petit insecte transmet Leishmania lors d’une piqûre.' },
      { text: 'Le moustique Anopheles', correct: false, correction: 'Faux. Anopheles est associé au paludisme ; les leishmanioses sont transmises par le phlébotome.' },
    ],
    explanation: 'Les leishmanioses sont transmises par le phlébotome. Le chien peut jouer un rôle de réservoir dans certains cycles, mais ne doit pas être confondu avec l’insecte vecteur. (Cours, p. 11–13)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Concernant le rôle du chien et du phlébotome, quelles propositions sont exactes ?',
    options: [
      { text: 'Le phlébotome assure la transmission vectorielle lors de piqûres', correct: true, correction: 'Oui boss 🧠 C’est lui qui fait le lien vectoriel entre les hôtes.' },
      { text: 'Caresser un chien est la voie habituelle de contamination enseignée', correct: false, correction: 'Faux. Le cours décrit une transmission par piqûre de phlébotome, pas par simple contact avec le chien.' },
      { text: 'Le chien peut constituer un réservoir dans certaines leishmanioses', correct: true, correction: 'Exact. Le cours précise que ce rôle dépend du cycle concerné.' },
      { text: 'Le chien et le phlébotome jouent exactement le même rôle', correct: false, correction: 'Non chef. Réservoir et vecteur sont deux fonctions différentes.' },
      { text: 'Un chien infecté peut être symptomatique ou asymptomatique', correct: true, correction: 'Oui 🎯 L’absence de symptômes visibles ne supprime pas nécessairement son rôle de réservoir.' },
    ],
    explanation: 'Dans certains cycles, le chien est un réservoir pouvant être symptomatique ou non. Le phlébotome est le vecteur qui transmet le parasite lors de la piqûre. (Cours, p. 11–13)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quelle procédure correspond au prélèvement médullaire décrit pour rechercher une leishmaniose viscérale ?',
    options: [
      { text: 'Une prise de sang qui prélève directement la moelle sans ponction osseuse', correct: false, correction: 'Non chef. Le sang périphérique et la moelle sont deux prélèvements différents, même si tous deux peuvent être utiles selon le dossier.' },
      { text: 'Un prélèvement d’urines destiné à un ECBU', correct: false, correction: 'Faux. L’ECBU ne correspond pas au prélèvement médullaire présenté.' },
      { text: 'Un prélèvement du liquide amniotique par amniocentèse', correct: false, correction: 'Non chef. Le prélèvement décrit ici concerne la moelle osseuse, pas le liquide amniotique.' },
      { text: 'Une biopsie de l’ulcération cutanée, identique par définition à une ponction médullaire', correct: false, correction: 'Non. Une biopsie cutanée peut être adaptée à une forme tégumentaire, mais ce n’est pas un prélèvement de moelle.' },
      { text: 'Une ponction sternale ou iliaque prélevant de la moelle osseuse', correct: true, correction: 'Oui boss 🔬 Le cours décrit un prélèvement médullaire au niveau de ces os pour rechercher le parasite.' },
    ],
    explanation: 'Le cours présente la ponction sternale ou iliaque pour obtenir un prélèvement de moelle et rechercher directement Leishmania dans une forme viscérale. Le choix du prélèvement dépend de la forme clinique : la moelle n’est pas le seul prélèvement possible pour toutes les leishmanioses. (Cours, p. 11 et 13)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Concernant les formes viscérales et tégumentaires, quelles propositions sont exactes ?',
    options: [
      { text: 'Elles peuvent avoir le même mode de transmission vectorielle', correct: true, correction: 'Oui boss 🧠 Le cours leur attribue la transmission par le phlébotome.' },
      { text: 'Leurs manifestations cliniques sont nécessairement identiques', correct: false, correction: 'Non chef. Les organes atteints et les tableaux cliniques diffèrent.' },
      { text: 'Une transmission par le même vecteur impose la même gravité chez tous les patients', correct: false, correction: 'Faux. Le vecteur ne suffit pas à déterminer la forme clinique ni le pronostic.' },
      { text: 'Les formes tégumentaires concernent la peau ou les muqueuses', correct: true, correction: 'Oui 🎯 Ce sont leurs localisations principales décrites.' },
      { text: 'Les formes viscérales touchent notamment des organes profonds', correct: true, correction: 'Exact. La rate, le foie et les ganglions sont cités.' },
    ],
    explanation: 'Les formes viscérales et tégumentaires partagent une transmission par phlébotome, mais se distinguent par leurs localisations, leurs manifestations et leur pronostic. (Cours, p. 11, 13–14)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quelle répartition géographique des leishmanioses correspond au récapitulatif du cours ?',
    options: [
      { text: 'Uniquement l’Europe du Nord et l’Amérique du Nord', correct: false, correction: 'Faux. Ce n’est pas la répartition endémique donnée dans le cours.' },
      { text: 'Uniquement l’Afrique subsaharienne', correct: false, correction: 'Non chef. Les leishmanioses sont présentes sur plusieurs continents, y compris dans le sud de l’Europe.' },
      { text: 'Afrique, Amérique centrale et du Sud, Asie et Europe du Sud', correct: true, correction: 'Oui boss 🎯 Le récapitulatif décrit une présence endémique sur quatre continents.' },
      { text: 'Uniquement les pays où circule le paludisme, avec une répartition exactement identique', correct: false, correction: 'Non chef. Partager une transmission vectorielle ne signifie pas avoir la même carte géographique.' },
      { text: 'Uniquement les régions tropicales, avec exclusion de tout territoire méditerranéen', correct: false, correction: 'Non. Le bassin méditerranéen et le sud de la France sont concernés.' },
    ],
    explanation: 'Le cours décrit des leishmanioses endémiques en Afrique, en Amérique centrale et du Sud, en Asie et en Europe du Sud. Leur répartition ne se limite pas à un continent. (Cours, p. 11–13)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Une patiente choisit une destination méditerranéenne pour ses prochaines vacances. Quelles propositions sont exactes concernant les leishmanioses ?',
    options: [
      { text: 'Un risque autochtone peut exister dans certains territoires méditerranéens', correct: true, correction: 'Oui boss 🧠 Le cours souligne que changer de destination ne supprime pas forcément toute exposition.' },
      { text: 'Toute leishmaniose diagnostiquée en France est nécessairement importée d’Afrique', correct: false, correction: 'Non chef. Une transmission autochtone est possible dans le sud de la France.' },
      { text: 'La protection contre les piqûres reste pertinente en zone exposée', correct: true, correction: 'Oui 🎯 La prévention doit tenir compte du lieu et du risque vectoriel.' },
      { text: 'Une précédente infection garantit une protection définitive lors de tous les voyages futurs', correct: false, correction: 'Faux. On ne doit pas promettre une immunité universelle et définitive après un épisode.' },
      { text: 'Le sud de la France peut être concerné', correct: true, correction: 'Exact. La présence locale du phlébotome et de cycles parasitaires est citée.' },
    ],
    explanation: 'Le cours décrit un risque autochtone dans le bassin méditerranéen, notamment dans le sud de la France. La prévention reste adaptée à l’exposition, sans garantie d’immunité définitive après une infection. (Cours, p. 11–13 ; précision sur l’immunité.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Sur quoi repose le diagnostic de certitude d’une leishmaniose dans le récapitulatif du cours ?',
    options: [
      { text: 'Un syndrome inflammatoire non spécifique, quelle qu’en soit la cause', correct: false, correction: 'Non chef. L’inflammation est un signe d’orientation, pas une identification de Leishmania.' },
      { text: 'La présence d’un chien dans l’entourage, sans examen complémentaire', correct: false, correction: 'Non. Un contexte de réservoir possible ne prouve pas l’infection humaine.' },
      { text: 'La seule présence d’une splénomégalie', correct: false, correction: 'Non chef. Une grosse rate peut avoir d’autres causes, notamment une hémopathie.' },
      { text: 'La seule association d’une fièvre et d’un voyage en zone endémique', correct: false, correction: 'Faux. Elle fait envisager le diagnostic mais ne le confirme pas.' },
      { text: 'La mise en évidence du parasite ou de son ADN sur un prélèvement adapté', correct: true, correction: 'Oui boss 🎯 La confirmation nécessite un élément spécifique du parasite.' },
    ],
    explanation: 'Le diagnostic de certitude repose sur la mise en évidence de Leishmania ou de son ADN à partir d’un prélèvement choisi selon la forme clinique. (Cours, p. 11 et 13)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quels prélèvements et principes diagnostiques sont cités pour les leishmanioses ?',
    options: [
      { text: 'Le sang ou une biopsie peuvent être utilisés selon la forme clinique', correct: true, correction: 'Exact. Le choix du prélèvement dépend de la présentation de la maladie.' },
      { text: 'Une ponction médullaire est obligatoirement le seul examen valable pour toutes les formes cutanées', correct: false, correction: 'Non chef. Le prélèvement doit être adapté à la forme ; le cours cite aussi les biopsies.' },
      { text: 'Une NFS suffit à identifier directement l’espèce de Leishmania', correct: false, correction: 'Faux. La NFS met en évidence les anomalies sanguines, pas l’identité du parasite.' },
      { text: 'Un prélèvement de moelle peut être utilisé pour la recherche du parasite', correct: true, correction: 'Oui boss 🧠 Le cours présente notamment la recherche médullaire dans une forme viscérale.' },
      { text: 'La recherche peut porter sur le parasite lui-même ou sur son ADN', correct: true, correction: 'Oui 🎯 Les deux approches sont citées dans le récapitulatif.' },
    ],
    explanation: 'Le cours cite la moelle, le sang et les biopsies comme prélèvements possibles selon la forme clinique, pour une recherche du parasite ou de son ADN. (Cours, p. 11 et 13)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Que signifie le caractère opportuniste possible des leishmanioses ?',
    options: [
      { text: 'Elles sont provoquées par le VIH lui-même, sans parasite', correct: false, correction: 'Faux. Leishmania reste l’agent responsable ; le VIH peut favoriser sa survenue ou son expression.' },
      { text: 'Elles nécessitent une transmission directe par contact avec un patient greffé', correct: false, correction: 'Non. Le terrain immunitaire et la voie de transmission sont deux notions distinctes.' },
      { text: 'Une immunodépression, notamment une infection par le VIH ou un contexte de greffe, peut favoriser des formes graves', correct: true, correction: 'Oui boss 🧠 Le cours cite ces terrains et la possibilité de formes disséminées.' },
      { text: 'Elles ne concernent jamais les personnes immunodéprimées', correct: false, correction: 'Non chef. C’est précisément une situation dans laquelle le risque et la gravité peuvent augmenter.' },
      { text: 'Toute infection prouve une immunodépression majeure', correct: false, correction: 'Non chef. Une infection peut aussi survenir chez un sujet non immunodéprimé ; opportuniste ne signifie pas exclusive de ce terrain.' },
    ],
    explanation: 'Les leishmanioses peuvent être opportunistes, notamment lors d’une co-infection VIH ou dans un contexte de greffe. L’immunodépression peut favoriser des formes disséminées. (Cours, p. 12–13)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Concernant le terrain immunitaire et les leishmanioses, quelles propositions sont exactes ?',
    options: [
      { text: 'Des formes disséminées peuvent être observées', correct: true, correction: 'Oui 🧠 Elles sont mentionnées dans le récapitulatif.' },
      { text: 'Un épisode ancien permet d’abandonner définitivement toute prévention', correct: false, correction: 'Faux. On ne peut pas déduire une protection certaine contre toutes les expositions ultérieures.' },
      { text: 'La multiplication du parasite dans les macrophages signifie que tous les mécanismes immunitaires l’éliminent immédiatement', correct: false, correction: 'Non chef. La survie intracellulaire du parasite montre que sa phagocytose ne suffit pas toujours à l’éliminer.' },
      { text: 'Le contexte de greffe est également cité parmi les terrains favorisant certaines formes', correct: true, correction: 'Exact. L’immunodépression peut modifier l’expression clinique de l’infection.' },
      { text: 'Une co-infection par le VIH peut augmenter la vulnérabilité au parasite', correct: true, correction: 'Oui boss 🎯 Le cours présente la leishmaniose comme une infection opportuniste possible dans ce contexte.' },
    ],
    explanation: 'Le terrain immunitaire influence le risque et la présentation des leishmanioses. Le cours cite le VIH, les greffes et les formes disséminées, sans permettre de promettre une immunité définitive. (Cours, p. 12–13)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quelles localisations définissent les leishmanioses tégumentaires présentées dans le cours ?',
    options: [
      { text: 'Seulement le sang circulant, sans atteinte tissulaire', correct: false, correction: 'Non. Le cours illustre notamment des lésions cutanées et muqueuses.' },
      { text: 'La peau et les muqueuses', correct: true, correction: 'Oui boss 🎯 Le cours distingue des formes cutanées et cutanéo-muqueuses.' },
      { text: 'Exclusivement les ganglions profonds', correct: false, correction: 'Non chef. Ce n’est pas la définition de la localisation tégumentaire.' },
      { text: 'Uniquement la moelle osseuse, sans lésion visible', correct: false, correction: 'Faux. Les formes tégumentaires concernent la peau ou les muqueuses.' },
      { text: 'Uniquement la rate et le foie', correct: false, correction: 'Non chef. Ces organes sont surtout associés à la forme viscérale.' },
    ],
    explanation: 'Les leishmanioses tégumentaires atteignent la peau ou les muqueuses. Le cours présente des formes cutanées localisées, diffuses et cutanéo-muqueuses. (Cours, p. 13–14)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Concernant la diversité des leishmanioses tégumentaires, quelles propositions sont exactes ?',
    options: [
      { text: 'Des formes cutanées diffuses sont également décrites', correct: true, correction: 'Exact. La présentation n’est pas toujours une lésion cutanée unique.' },
      { text: 'Toutes les formes ont obligatoirement la même extension et la même gravité', correct: false, correction: 'Non chef. L’expression clinique varie notamment selon la forme et l’espèce parasitaire.' },
      { text: 'Des formes cutanées localisées existent', correct: true, correction: 'Oui boss 🧠 Une atteinte peut rester localisée à la peau.' },
      { text: 'Des formes cutanéo-muqueuses existent', correct: true, correction: 'Oui 🎯 Les muqueuses peuvent être concernées.' },
      { text: 'Des ulcérations peuvent faire partie du tableau', correct: true, correction: 'Exact. Elles sont indiquées dans le tableau récapitulatif et illustrées dans le cours.' },
    ],
    explanation: 'Le cours décrit des formes cutanées localisées, diffuses et cutanéo-muqueuses, pouvant comporter des ulcérations. Leur expression clinique est variable. (Cours, p. 13–14)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle comparaison entre leishmaniose viscérale et leishmaniose tégumentaire est correcte ?',
    options: [
      { text: 'Viscérale : uniquement ulcération cutanée ; tégumentaire : uniquement splénomégalie et anémie', correct: false, correction: 'Non chef. Tu as inversé les principales manifestations des deux formes.' },
      { text: 'Tégumentaire : aucune lésion tissulaire possible ; viscérale : atteinte exclusivement cutanée', correct: false, correction: 'Non chef. Les formes tégumentaires peuvent provoquer des lésions, et la forme viscérale touche les organes profonds.' },
      { text: 'Viscérale et tégumentaire : mêmes symptômes et même gravité dans tous les cas', correct: false, correction: 'Faux. Le cours souligne leurs différences de présentation et l’éventail des pronostics.' },
      { text: 'Viscérale : organomégalie, fièvre et cytopénies possibles ; tégumentaire : lésions cutanées ou muqueuses, notamment ulcérations', correct: true, correction: 'Oui boss 🎯 Le tableau clinique dépend des tissus principalement atteints.' },
      { text: 'Viscérale : transmission par le chien ; tégumentaire : transmission par le phlébotome', correct: false, correction: 'Non. Les deux formes partagent une transmission vectorielle par phlébotome ; le chien peut être un réservoir.' },
    ],
    explanation: 'La forme viscérale se caractérise notamment par organomégalie, fièvre et cytopénies. Les formes tégumentaires concernent la peau ou les muqueuses et peuvent provoquer des ulcérations. (Cours, p. 10–14)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Concernant le pronostic des différentes leishmanioses, quelles propositions sont exactes ?',
    options: [
      { text: 'La forme viscérale peut être potentiellement fatale', correct: true, correction: 'Exact. Le risque est particulièrement important en l’absence de prise en charge.' },
      { text: 'Certaines formes cutanées peuvent être spontanément résolutives en quelques mois', correct: true, correction: 'Oui boss 🧠 Cette possibilité figure dans le récapitulatif du cours.' },
      { text: 'Toute leishmaniose détruit obligatoirement et irréversiblement tous les tissus atteints', correct: false, correction: 'Non chef. Certaines lésions peuvent être sévères, mais l’évolution n’est pas identique pour toutes les formes ; certaines cutanées guérissent spontanément.' },
      { text: 'Une guérison cutanée garantit l’absence de toute réinfection future', correct: false, correction: 'Faux. Une amélioration clinique ne permet pas de promettre une immunité définitive et universelle.' },
      { text: 'L’expression clinique et le pronostic varient notamment selon l’espèce et la forme', correct: true, correction: 'Oui 🎯 Le récapitulatif décrit un large éventail, pas une maladie uniforme.' },
    ],
    explanation: 'Le cours oppose notamment des leishmanioses cutanées parfois spontanément résolutives à des formes viscérales potentiellement fatales. Les affirmations générales de destruction irréversible ou d’immunité définitive ne doivent pas être appliquées à toutes les formes. (Cours, p. 12–13)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quel est le principe principal de prévention individuelle des leishmanioses vectorielles ?',
    options: [
      { text: 'Éviter seulement de toucher les chiens, sans protection contre les insectes', correct: false, correction: 'Non chef. Le simple contact avec le chien n’est pas la voie enseignée ; la piqûre du phlébotome est le point central.' },
      { text: 'Se fier uniquement à une infection ancienne pour être protégé définitivement', correct: false, correction: 'Non. Une protection immunitaire définitive contre toute nouvelle exposition ne doit pas être promise.' },
      { text: 'Cuire systématiquement la viande pour empêcher la transmission par phlébotome', correct: false, correction: 'Faux. La cuisson ne protège pas contre la piqûre de l’insecte vecteur.' },
      { text: 'Réduire l’exposition aux piqûres de phlébotomes', correct: true, correction: 'Oui boss 🎯 La prévention vise le contact avec le vecteur, au moyen de protections adaptées.' },
      { text: 'Considérer toute destination européenne comme dépourvue de risque', correct: false, correction: 'Non chef. Des leishmanioses autochtones existent notamment dans le sud de l’Europe.' },
    ],
    explanation: 'La prévention individuelle repose principalement sur la diminution des piqûres de phlébotomes dans les zones exposées. Elle reste pertinente dans certains territoires méditerranéens. (Cours, p. 11–13)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Concernant la protection individuelle contre les phlébotomes, quelles propositions sont exactes ?',
    options: [
      { text: 'Une moustiquaire adaptée peut contribuer à réduire les piqûres', correct: true, correction: 'Oui boss 🧠 Le cours cite les moustiquaires parmi les moyens de protection.' },
      { text: 'Ces mesures réduisent le risque sans garantir une protection de 100 %', correct: true, correction: 'Oui 🎯 Protection utile ne signifie pas disparition absolue de tout risque.' },
      { text: 'L’euthanasie des chiens est la seule mesure individuelle à conseiller au voyageur', correct: false, correction: 'Non chef. Cette affirmation ne constitue pas une recommandation de prévention individuelle ; la protection contre les piqûres est centrale.' },
      { text: 'Une moustiquaire dispense automatiquement de toute autre mesure, quels que soient les conditions et l’exposition', correct: false, correction: 'Faux. L’efficacité dépend des conditions d’utilisation et les protections peuvent se compléter.' },
      { text: 'Des vêtements protecteurs et des répulsifs adaptés peuvent compléter la protection', correct: true, correction: 'Exact. Plusieurs moyens de réduction du contact avec le vecteur peuvent être associés.' },
    ],
    explanation: 'Les protections contre les piqûres comprennent moustiquaire adaptée, vêtements protecteurs et répulsifs, sans garantie absolue. Le contrôle des réservoirs ne doit pas être présenté comme l’unique prévention individuelle du voyageur. (Cours, p. 13 ; clarification des mesures de prévention.)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quelle association entre parasitose et vecteur correspond à la maladie du sommeil ?',
    options: [
      { text: 'Loaose — moustique anophèle', correct: false, correction: 'Faux. Le cours associe la loaose au taon.' },
      { text: 'Leishmaniose viscérale — mouche tsé-tsé', correct: false, correction: 'Non. Les leishmanioses sont transmises par le phlébotome.' },
      { text: 'Onchocercose — punaise', correct: false, correction: 'Non chef. L’onchocercose est associée à une mouche piqueuse dans le cours.' },
      { text: 'Trypanosomose africaine — mouche tsé-tsé', correct: true, correction: 'Oui boss 🧠 La maladie du sommeil est la trypanosomose africaine, transmise par la mouche tsé-tsé.' },
      { text: 'Trypanosomose américaine — phlébotome', correct: false, correction: 'Non chef. La trypanosomose américaine est la maladie de Chagas, associée à une punaise vectrice.' },
    ],
    explanation: 'La trypanosomose africaine, ou maladie du sommeil, est transmise par la mouche tsé-tsé. Le nom Trypanosoma brucei apparaît dans une note complémentaire du support. (Cours, p. 14)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles manifestations ou conséquences de la trypanosomose africaine sont décrites dans le cours ?',
    options: [
      { text: 'Des troubles neuropsychiatriques, avec hallucinations, délires ou cauchemars nocturnes', correct: true, correction: 'Oui boss. Ce sont les manifestations spectaculaires citées.' },
      { text: 'Une fatigue importante et une somnolence pendant la journée', correct: true, correction: 'Exact 🧠 Le cours décrit une perturbation marquée du rythme veille-sommeil.' },
      { text: 'Une stagnation de la lymphe constituant le mécanisme du trouble du sommeil', correct: false, correction: 'Faux. La stagnation lymphatique est décrite pour les filarioses lymphatiques.' },
      { text: 'Une évolution potentiellement mortelle en l’absence de traitement', correct: true, correction: 'Exact. Le cours insiste sur la gravité de la maladie non traitée.' },
      { text: 'Une atteinte exclusivement cutanée sans manifestations neurologiques possibles', correct: false, correction: 'Non chef. Les manifestations neuropsychiatriques occupent une place majeure dans la description.' },
    ],
    explanation: 'Le cours associe la maladie du sommeil à une somnolence diurne et à des troubles neuropsychiatriques nocturnes. La maladie peut évoluer vers le décès sans traitement. (Cours, p. 14)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quelle description correspond à la maladie de Chagas dans le cours ?',
    options: [
      { text: 'Une trypanosomose africaine dominée par les troubles du rythme veille-sommeil', correct: false, correction: 'Non chef. C’est la maladie du sommeil, distincte de Chagas.' },
      { text: 'Une leishmaniose cutanée limitée aux ulcérations de la peau', correct: false, correction: 'Non. Il faut distinguer Chagas des leishmanioses.' },
      { text: 'Une trypanosomose américaine pouvant atteindre le cœur, les intestins et l’œsophage', correct: true, correction: 'Oui boss 🎯 Ce sont les organes principalement cités dans le support.' },
      { text: 'Une filariose lymphatique transmise par un moustique', correct: false, correction: 'Faux. Chagas est une trypanosomose américaine.' },
      { text: 'Une loaose définie par un ver visible dans l’œil', correct: false, correction: 'Non chef. Le ver oculaire ou sous-cutané est décrit dans la loaose.' },
    ],
    explanation: 'La maladie de Chagas est la trypanosomose américaine, surtout décrite en Amérique du Sud dans le cours. Elle peut entraîner des atteintes cardiaques et digestives, notamment intestinales et œsophagiennes. (Cours, p. 14)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Concernant la transmission vectorielle de la maladie de Chagas, quelles propositions sont exactes ?',
    options: [
      { text: 'La maladie est surtout associée à l’Amérique latine, avec l’Amérique du Sud citée dans le cours', correct: true, correction: 'Exact. Cette géographie permet de la distinguer de la trypanosomose africaine.' },
      { text: 'Le mécanisme habituel est une inoculation du parasite par la salive du triatome pendant la piqûre', correct: false, correction: 'Non chef. La transmission vectorielle de Chagas se fait par les déjections infectées, pas par une inoculation salivaire.' },
      { text: 'Le vecteur évoqué dans le cours est une punaise', correct: true, correction: 'Exact 🧠 La punaise vectrice est un triatome.' },
      { text: 'La mouche tsé-tsé est le vecteur de Chagas décrit dans le support', correct: false, correction: 'Faux. La mouche tsé-tsé transmet la trypanosomose africaine.' },
      { text: 'La contamination peut se faire lorsque des déjections infectées du vecteur atteignent le site de piqûre ou une muqueuse', correct: true, correction: 'Oui boss. C’est la précision essentielle : les parasites sont présents dans les déjections du vecteur.' },
    ],
    explanation: 'La punaise vectrice de Chagas transmet le parasite par ses déjections infectées, qui peuvent contaminer le site de piqûre ou une muqueuse. La phrase du support « causée par la piqûre » doit être précisée : il ne s’agit pas d’une inoculation salivaire. (Cours, p. 14)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quelle association correspond à la loaose décrite dans le cours ?',
    options: [
      { text: 'Phlébotome — protozoaires dans les macrophages', correct: false, correction: 'Faux. Cette association concerne les leishmanioses.' },
      { text: 'Mouche tsé-tsé — éléphantiasis par stagnation lymphatique', correct: false, correction: 'Non chef. L’éléphantiasis décrit est associé aux filarioses lymphatiques transmises par les moustiques.' },
      { text: 'Taon — ver pouvant être retrouvé dans l’œil ou sous la peau', correct: true, correction: 'Oui boss 🧠 Le cours présente la loaose comme une filariose cutanéo-sanguine transmise par le taon.' },
      { text: 'Punaise — dilatation de l’œsophage et atteinte cardiaque', correct: false, correction: 'Non. Cette description évoque Chagas.' },
      { text: 'Moustique — parasites exclusivement dans les hématies', correct: false, correction: 'Non chef. Cette cible cellulaire rappelle le paludisme, pas la loaose.' },
    ],
    explanation: 'La loaose est une filariose cutanéo-sanguine transmise par le taon. Le cours décrit un parasite sous forme de ver, pouvant être visible dans l’œil ou présent sous la peau. (Cours, p. 14)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles propositions concernant la loaose et les filarioses sont exactes ?',
    options: [
      { text: 'Toutes les parasitoses à transmission vectorielle sont nécessairement des protozooses', correct: false, correction: 'Non chef. Les filarioses constituent justement des exemples de parasitoses dues à des vers.' },
      { text: 'La présence d’un ver dans l’œil ou sous la peau est décrite dans la loaose', correct: true, correction: 'Oui boss. Ce sont les localisations évoquées dans le support.' },
      { text: 'Les filarioses présentées n’ont pas toutes le même vecteur', correct: true, correction: 'Exact. Le cours distingue notamment le taon, les moustiques et une mouche piqueuse.' },
      { text: 'Le parasite de la loaose est un ver, et non un protozoaire unicellulaire', correct: true, correction: 'Exact 🧠 Les filarioses sont des helminthoses.' },
      { text: 'Le taon est présenté comme le réservoir canin de la loaose', correct: false, correction: 'Faux. Le taon est le vecteur ; un vecteur ne doit pas être confondu avec un réservoir.' },
    ],
    explanation: 'La loaose appartient aux filarioses, causées par des vers. La transmission vectorielle n’implique donc pas que tous les parasites concernés soient des protozoaires, ni qu’ils aient tous le même vecteur. (Cours, p. 14–15)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel mécanisme explique l’éléphantiasis décrit dans les filarioses lymphatiques du cours ?',
    options: [
      { text: 'Une dilatation isolée de l’œsophage sans atteinte lymphatique', correct: false, correction: 'Non. L’atteinte œsophagienne est citée dans Chagas.' },
      { text: 'Une multiplication de protozoaires dans les macrophages de la rate et du foie', correct: false, correction: 'Non chef. Ce mécanisme correspond aux leishmanioses ; l’éléphantiasis décrit ici est lié à une perturbation lymphatique par des filaires.' },
      { text: 'La destruction des hématies parasitées avec libération de médiateurs pyrogènes', correct: false, correction: 'Non chef. Ce mécanisme est décrit dans le paludisme.' },
      { text: 'Une stagnation de la lymphe entraînant un gonflement important d’un membre', correct: true, correction: 'Oui boss 🎯 C’est le mécanisme et la manifestation retenus dans le support.' },
      { text: 'Une ulcération cutanée limitée au point de piqûre du phlébotome', correct: false, correction: 'Faux. Une ulcération n’explique pas l’œdème lymphatique massif décrit.' },
    ],
    explanation: 'Les filarioses lymphatiques peuvent perturber la circulation de la lymphe et entraîner un gonflement massif appelé éléphantiasis. Le support cite en complément Wuchereria bancrofti et Brugia malayi. (Cours, p. 14–15)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles propositions décrivent les filarioses lymphatico-sanguines présentées dans le cours ?',
    options: [
      { text: 'Elles peuvent entraîner un éléphantiasis', correct: true, correction: 'Exact 🎯 Il correspond à un gonflement très important d’un membre.' },
      { text: 'Elles sont dues au même protozoaire que le paludisme', correct: false, correction: 'Non chef. Les filaires sont des vers ; Plasmodium est un protozoaire.' },
      { text: 'Elles sont transmises par des moustiques', correct: true, correction: 'Exact 🧠 C’est le vecteur retenu dans le support.' },
      { text: 'Elles peuvent perturber la circulation lymphatique', correct: true, correction: 'Oui boss. Le cours décrit une stagnation de la lymphe.' },
      { text: 'Elles se définissent par une somnolence diurne et des délires nocturnes', correct: false, correction: 'Faux. Ce tableau est décrit pour la trypanosomose africaine.' },
    ],
    explanation: 'Le cours associe les filarioses lymphatico-sanguines à une transmission par moustique, à une stagnation lymphatique et à la possibilité d’éléphantiasis. (Cours, p. 14–15)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement l’onchocercose présentée dans le cours ?',
    options: [
      { text: 'Une trypanosomose américaine à atteinte œsophagienne', correct: false, correction: 'Non chef. Cette description correspond à Chagas.' },
      { text: 'Une filariose transmise par une mouche piqueuse pouvant entraîner une atteinte oculaire et une cécité', correct: true, correction: 'Oui boss 🧠 L’atteinte inflammatoire des yeux peut être sévère, mais la cécité n’est pas obligatoire chez chaque patient.' },
      { text: 'Une protozoose transmise par le phlébotome avec parasitisme des macrophages', correct: false, correction: 'Faux. Il s’agit d’une leishmaniose, pas d’une onchocercose.' },
      { text: 'Une filariose définie par l’éléphantiasis et transmise par un moustique', correct: false, correction: 'Non. Cette association est celle des filarioses lymphatiques décrites.' },
      { text: 'Une maladie du sommeil transmise par la mouche tsé-tsé', correct: false, correction: 'Non chef. La maladie du sommeil est une trypanosomose africaine.' },
    ],
    explanation: 'L’onchocercose est une filariose transmise par une mouche piqueuse. L’inflammation oculaire peut conduire à une cécité, sans que cette complication soit systématique chez tous les patients. (Cours, p. 15)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement loaose et onchocercose dans le cours ?',
    options: [
      { text: 'Dans l’onchocercose, une réaction inflammatoire oculaire peut altérer la vision', correct: true, correction: 'Oui boss. Le cours souligne le risque d’atteinte oculaire.' },
      { text: 'Toute personne atteinte d’onchocercose devient obligatoirement aveugle', correct: false, correction: 'Non chef. La cécité est une complication possible, pas une issue inévitable de chaque infection.' },
      { text: 'Ces deux maladies appartiennent aux filarioses', correct: true, correction: 'Exact. Elles sont dues à des vers, même si leurs manifestations et leurs vecteurs diffèrent.' },
      { text: 'Toute atteinte oculaire parasitaire permet de diagnostiquer une loaose sans autre évaluation', correct: false, correction: 'Faux. Plusieurs parasitoses peuvent toucher l’œil ; le contexte et les examens restent nécessaires.' },
      { text: 'Dans la loaose, un ver peut être retrouvé dans l’œil ou sous la peau', correct: true, correction: 'Exact 🧠 C’est la description donnée pour cette filariose cutanéo-sanguine.' },
    ],
    explanation: 'Le cours décrit un ver oculaire ou sous-cutané dans la loaose et une atteinte inflammatoire des yeux dans l’onchocercose. Une localisation oculaire seule ne suffit pas à confondre ces deux filarioses. (Cours, p. 14–15)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quelle association distingue correctement les principales cellules parasitées dans le paludisme et les leishmanioses ?',
    options: [
      { text: 'Paludisme et leishmanioses : uniquement les plaquettes', correct: false, correction: 'Faux. Les plaquettes ne sont pas les cibles parasitées décrites.' },
      { text: 'Paludisme et leishmanioses : uniquement les cellules lymphatiques responsables de l’éléphantiasis', correct: false, correction: 'Non. Ce mécanisme rappelle les filarioses lymphatiques et ne décrit pas ces deux protozooses.' },
      { text: 'Paludisme : hématies ; leishmanioses : vers libres dans l’œil', correct: false, correction: 'Non chef. Les leishmanies sont des protozoaires intracellulaires, pas des vers oculaires.' },
      { text: 'Paludisme : macrophages ; leishmanioses : hématies', correct: false, correction: 'Non chef. Les deux cibles sont inversées.' },
      { text: 'Paludisme : hématies ; leishmanioses : cellules du système monocyte-macrophage', correct: true, correction: 'Oui boss 🎯 Le cours situe Plasmodium dans les globules rouges et Leishmania dans les macrophages.' },
    ],
    explanation: 'Une phase importante du cycle de Plasmodium se déroule dans les hématies. Les leishmanies parasitent les cellules du système monocyte-macrophage. Cette distinction aide à comprendre les manifestations et les prélèvements diagnostiques. (Cours, p. 3 et 10–12)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles associations entre parasitose et vecteur sont correctes ?',
    options: [
      { text: 'Loaose — taon', correct: true, correction: 'Oui 🎯 Le taon est le vecteur cité pour cette filariose.' },
      { text: 'Leishmaniose — punaise vectrice de Chagas', correct: false, correction: 'Non chef. La punaise évoquée dans cette partie concerne Chagas ; les leishmanioses sont transmises par le phlébotome.' },
      { text: 'Leishmaniose — phlébotome', correct: true, correction: 'Oui boss. Le phlébotome transmet les leishmanies.' },
      { text: 'Paludisme — moustique anophèle femelle', correct: true, correction: 'Exact 🧠 C’est le vecteur du paludisme présenté dans le cours.' },
      { text: 'Trypanosomose africaine — mouche tsé-tsé', correct: true, correction: 'Exact. Cette association correspond à la maladie du sommeil.' },
    ],
    explanation: 'Les vecteurs diffèrent selon les parasitoses : anophèle pour le paludisme, phlébotome pour les leishmanioses, mouche tsé-tsé pour la trypanosomose africaine et taon pour la loaose. (Cours, p. 8, 11–12 et 14)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Dans certaines leishmanioses décrites dans le cours, quelle distinction entre vecteur et réservoir est correcte ?',
    options: [
      { text: 'Le phlébotome est le vecteur et le chien peut être un réservoir', correct: true, correction: 'Oui boss 🧠 Le réservoir héberge le parasite ; le vecteur permet sa transmission.' },
      { text: 'Tout chien est nécessairement infecté et constitue un réservoir de toutes les leishmanioses', correct: false, correction: 'Non chef. Le cours parle du rôle du chien dans certaines leishmanioses, pas de tous les chiens ni de toutes les formes.' },
      { text: 'Le phlébotome n’intervient pas si un réservoir animal est présent', correct: false, correction: 'Non. La présence d’un réservoir animal ne remplace pas le vecteur dans cette transmission.' },
      { text: 'Le chien est le vecteur piqueur et le phlébotome est le réservoir canin', correct: false, correction: 'Non chef. Les rôles sont inversés : le phlébotome est l’insecte vecteur.' },
      { text: 'Le chien et le phlébotome sont tous deux uniquement les parasites responsables', correct: false, correction: 'Faux. Le parasite appartient au genre Leishmania ; chien et phlébotome ont d’autres rôles.' },
    ],
    explanation: 'Le cours décrit le phlébotome comme vecteur des leishmanioses et le chien comme réservoir possible dans certaines formes. Un réservoir et un vecteur ne remplissent pas le même rôle dans la chaîne de transmission. (Cours, p. 11–12)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles associations entre parasitose et manifestations principales correspondent au cours ?',
    options: [
      { text: 'Onchocercose — atteinte oculaire avec risque de cécité', correct: true, correction: 'Oui 🧠 Il s’agit d’une complication possible de l’inflammation oculaire.' },
      { text: 'Trypanosomose africaine — troubles neuropsychiatriques et du rythme veille-sommeil', correct: true, correction: 'Oui boss. Ils expliquent le nom de maladie du sommeil.' },
      { text: 'Filarioses lymphatiques — stagnation lymphatique et éléphantiasis possible', correct: true, correction: 'Exact. La perturbation de la lymphe peut entraîner un gonflement massif.' },
      { text: 'Leishmaniose viscérale — parasitisme des hématies à l’origine des accès palustres', correct: false, correction: 'Non chef. Les hématies parasitées et les accès palustres concernent le paludisme.' },
      { text: 'Chagas — atteintes cardiaques, intestinales ou œsophagiennes', correct: true, correction: 'Exact 🎯 Ces organes sont principalement cités pour la trypanosomose américaine.' },
    ],
    explanation: 'Les comparaisons du cours opposent notamment les atteintes cardiodigestives de Chagas, les troubles neuropsychiatriques de la trypanosomose africaine, les atteintes lymphatiques et les complications oculaires des filarioses. (Cours, p. 3, 14–15)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'À quelle parasitose correspond le mieux l’association « transmission par moustique, stagnation de la lymphe, gonflement très important d’un membre » dans le cours ?',
    options: [
      { text: 'La leishmaniose viscérale', correct: false, correction: 'Non chef. Elle est transmise par le phlébotome et touche notamment la rate, le foie et les ganglions.' },
      { text: 'Le paludisme', correct: false, correction: 'Non chef. Il est aussi transmis par un moustique, mais l’éléphantiasis lymphatique n’est pas son mécanisme caractéristique.' },
      { text: 'La trypanosomose africaine', correct: false, correction: 'Faux. Son vecteur est la mouche tsé-tsé et le cours insiste sur ses manifestations neuropsychiatriques.' },
      { text: 'Une filariose lymphatique', correct: true, correction: 'Oui boss 🎯 L’association décrit le mécanisme de l’éléphantiasis dans les filarioses lymphatiques.' },
      { text: 'La maladie de Chagas', correct: false, correction: 'Non. Le cours l’associe à une punaise et à des atteintes cardiaques et digestives.' },
    ],
    explanation: 'Le vecteur seul ne suffit pas à distinguer toutes les parasitoses : le paludisme et les filarioses lymphatiques impliquent des moustiques. L’association avec une stagnation de la lymphe et un éléphantiasis oriente ici vers une filariose lymphatique. (Cours, p. 2–3 et 14–15)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles propositions résument correctement les distinctions importantes entre les parasitoses vectorielles du cours ?',
    options: [
      { text: 'Le vecteur, le réservoir éventuel et le parasite sont des acteurs distincts de la transmission', correct: true, correction: 'Oui boss. L’exemple phlébotome–chien–Leishmania permet de les distinguer.' },
      { text: 'Des parasitoses ayant un vecteur de même catégorie peuvent provoquer des atteintes différentes', correct: true, correction: 'Exact. Un moustique peut être impliqué dans le paludisme ou une filariose lymphatique, avec des mécanismes distincts.' },
      { text: 'La cécité décrite dans l’onchocercose est un risque de complication, et non une conséquence obligatoire de chaque infection', correct: true, correction: 'Oui 🎯 Il faut conserver cette nuance dans l’interprétation clinique.' },
      { text: 'Toutes les infections transmises par un insecte reposent sur une inoculation salivaire du parasite pendant la piqûre', correct: false, correction: 'Non chef. Chagas est un contre-exemple : la contamination vectorielle se fait par les déjections infectées de la punaise.' },
      { text: 'Plasmodium et Leishmania sont des protozoaires, tandis que les filaires sont des vers', correct: true, correction: 'Exact 🧠 Transmission vectorielle ne signifie pas même nature du parasite.' },
    ],
    explanation: 'Le cours réunit des protozooses et des helminthoses aux vecteurs et aux cibles différents. Les rôles du vecteur, du réservoir et du parasite doivent rester distincts ; le mécanisme de transmission de Chagas et la cécité non systématique de l’onchocercose nécessitent les précisions apportées ici. (Cours, p. 2–3, 10–12 et 14–15)'
  },
]
