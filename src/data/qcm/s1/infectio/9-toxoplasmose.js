export const meta = {
  title: 'Toxoplasmose',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle définition décrit correctement l’agent responsable de la toxoplasmose ?',
    options: [
      { text: 'Un protozoaire eucaryote unicellulaire appelé Toxoplasma gondii', correct: true, correction: 'Oui boss 🧠 La toxoplasmose est une protozoose, donc une infection par un protozoaire.' },
      { text: 'Une bactérie responsable d’une infection uniquement intestinale', correct: false, correction: 'Faux. Il s’agit d’un parasite eucaryote, pas d’une bactérie.' },
      { text: 'Un champignon filamenteux transmis exclusivement par inhalation', correct: false, correction: 'Non chef. La nature de l’agent et les voies alimentaires présentées ne correspondent pas.' },
      { text: 'Un virus appelé Toxoplasma gondii', correct: false, correction: 'Non chef. Le toxoplasme n’est pas un virus.' },
      { text: 'Un ver segmenté dont l’adulte mesure plusieurs mètres', correct: false, correction: 'Non. Cette description évoque un cestode, pas le toxoplasme unicellulaire.' },
    ],
    explanation: 'La toxoplasmose est une infection parasitaire due à Toxoplasma gondii, protozoaire eucaryote unicellulaire. Les mentions de virus ou de bactérie dans certaines propositions ou formulations du support sont incorrectes. (Cours, p. 2 et 10–11)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles généralités correspondent à la présentation de la toxoplasmose dans le cours ?',
    options: [
      { text: 'Elle doit être connue en médecine générale', correct: true, correction: 'Exact. Le professeur insiste sur sa place dans cette pratique.' },
      { text: 'Elle peut être acquise par ingestion d’une source contaminée', correct: true, correction: 'Exact 🎯 Le cours présente notamment la viande crue et les aliments souillés.' },
      { text: 'C’est une infection parasitaire', correct: true, correction: 'Oui boss 🧠 Elle appartient aux protozooses.' },
      { text: 'Elle représente un sujet important en gynécologie-obstétrique', correct: true, correction: 'Oui. La prévention de l’infection pendant la grossesse occupe une place majeure.' },
      { text: 'Elle est absente d’Europe et concerne uniquement les voyageurs tropicaux', correct: false, correction: 'Non chef. Le support souligne au contraire sa présence en Europe.' },
    ],
    explanation: 'Le cours présente une infection parasitaire fréquente, importante en médecine générale et en gynécologie-obstétrique. Les voies de contamination alimentaires participent à la prévention à connaître. (Cours, p. 2 et 5 ; correction p. 11)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Que signifie le caractère opportuniste de Toxoplasma gondii dans le cours ?',
    options: [
      { text: 'Une immunité normale rend toute contamination orale impossible', correct: false, correction: 'Non chef. Une personne immunocompétente peut acquérir l’infection.' },
      { text: 'Une baisse des défenses immunitaires peut favoriser une expression plus importante de l’infection', correct: true, correction: 'Oui boss 🧠 Opportuniste décrit le rôle du déficit immunitaire, pas une exclusivité d’infection.' },
      { text: 'Le parasite ne peut infecter que des personnes immunodéprimées', correct: false, correction: 'Non chef. L’infection existe aussi chez les personnes immunocompétentes.' },
      { text: 'Toute infection entraîne immédiatement une maladie grave, quelle que soit l’immunité', correct: false, correction: 'Faux. Le contexte immunitaire influence l’expression de l’infection.' },
      { text: 'La présence d’un chat suffit à provoquer une immunodépression', correct: false, correction: 'Non. Tu mélanges une source possible de contamination et l’état immunitaire du patient.' },
    ],
    explanation: 'Le cours décrit un comportement opportuniste lorsque les défenses immunitaires diminuent. Cela ne signifie pas que Toxoplasma gondii infecte exclusivement les sujets immunodéprimés. (Cours, p. 2 et 9–10)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles propositions concernant la présentation chez l’immunocompétent correspondent à la correction des QCM du cours ?',
    options: [
      { text: 'Une infection chez l’immunocompétent impose toujours une forme grave', correct: false, correction: 'Faux. Le cours décrit justement une majorité d’infections sans symptômes.' },
      { text: 'Des céphalées et des adénopathies cervicales peuvent être observées', correct: true, correction: 'Oui. Ce sont les autres manifestations présentées.' },
      { text: 'L’absence de symptômes démontre que la personne n’a jamais été infectée', correct: false, correction: 'Non chef. Une infection peut rester asymptomatique.' },
      { text: 'L’infection est asymptomatique dans environ 80 % des cas selon le chiffre du support', correct: true, correction: 'Oui boss 🎯 Le chiffre du cours concerne l’absence de symptômes, pas une maladie symptomatique chez 80 % des personnes.' },
      { text: 'Une asthénie peut faire partie des manifestations', correct: true, correction: 'Exact. La fatigue est citée dans la correction.' },
    ],
    explanation: 'La correction donne environ 80 % d’infections asymptomatiques chez l’immunocompétent. Lorsqu’elles sont présentes, les manifestations citées comprennent asthénie, céphalées et adénopathies cervicales. (Cours, p. 9–10)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Une personne consomme une viande crue contenant le parasite. Quel mécanisme de contamination est principalement illustré ?',
    options: [
      { text: 'Une transmission par simple proximité avec une autre personne infectée', correct: false, correction: 'Non. Le scénario met en jeu un aliment contenant le parasite.' },
      { text: 'Une intoxication sans intervention d’un agent infectieux', correct: false, correction: 'Non chef. Ici, il s’agit d’une infection parasitaire.' },
      { text: 'Une contamination alimentaire par ingestion de kystes tissulaires', correct: true, correction: 'Oui boss 🧠 La viande peut contenir des kystes du toxoplasme dans les tissus.' },
      { text: 'Une transmission par inhalation obligatoire de spores', correct: false, correction: 'Non chef. La voie décrite est digestive après ingestion.' },
      { text: 'Une contamination par un ver adulte segmenté présent dans cette viande', correct: false, correction: 'Faux. Toxoplasma gondii est un protozoaire, pas un ver adulte.' },
    ],
    explanation: 'Le cours montre des kystes dans des fibres musculaires et cite les viandes crues contenant le parasite parmi les sources de contamination orale. (Cours, p. 3 et 5)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement les sources alimentaires de toxoplasme ?',
    options: [
      { text: 'La forme excrétée dans les selles du chat est l’oocyste, distinct du kyste tissulaire', correct: true, correction: 'Oui. Les deux formes ne doivent pas être confondues.' },
      { text: 'Des aliments peuvent être souillés par des déjections de chat', correct: true, correction: 'Exact. C’est une seconde source mise en avant dans le cours.' },
      { text: 'Les chats excrètent normalement des morceaux de muscle contenant des kystes tissulaires', correct: false, correction: 'Faux. Les selles peuvent contenir des oocystes ; les kystes tissulaires sont notamment présents dans la viande.' },
      { text: 'La contamination alimentaire exige toujours que la personne possède elle-même un chat', correct: false, correction: 'Non chef. La viande ou l’environnement peuvent constituer la source, même sans chat au domicile.' },
      { text: 'Une viande contaminée peut contenir des kystes tissulaires', correct: true, correction: 'Oui boss 🧠 Le parasite peut être présent dans les tissus de l’animal.' },
    ],
    explanation: 'Le support distingue viande contenant le parasite et aliments souillés par des déjections de chat. Il faut préciser les formes concernées : kystes tissulaires dans la viande et oocystes dans les déjections félines. (Cours, p. 3 et 5)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Une femme enceinte séronégative explique qu’elle n’a pas de chat et qu’elle peut donc consommer de la viande crue sans précaution. Quelle réponse est correcte ?',
    options: [
      { text: 'Seule la présence d’un chat dans la cuisine rend la viande contaminante', correct: false, correction: 'Faux. Le parasite peut être contenu dans les tissus de l’animal consommé.' },
      { text: 'L’absence de chat prouve une immunité contre Toxoplasma gondii', correct: false, correction: 'Non chef. Posséder ou non un chat ne permet pas de conclure à une immunité.' },
      { text: 'Les précautions alimentaires restent utiles, notamment la cuisson de la viande', correct: true, correction: 'Oui boss 🧠 La prévention ne se limite pas au contact avec les déjections de chat.' },
      { text: 'La viande crue ne peut transmettre que des bactéries, jamais un protozoaire', correct: false, correction: 'Non. Le cours cite explicitement la viande crue pour la toxoplasmose.' },
      { text: 'L’absence de chat élimine toutes les sources de toxoplasme', correct: false, correction: 'Non chef. Les kystes présents dans une viande contaminée constituent une autre source.' },
    ],
    explanation: 'La viande contenant le parasite et les aliments souillés par des déjections félines sont deux sources différentes. L’absence de chat au domicile ne dispense pas des précautions alimentaires. (Cours, p. 3 et 5)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles situations peuvent illustrer une contamination orale indirecte liée à l’environnement ?',
    options: [
      { text: 'Porter à la bouche des mains souillées après un contact avec une terre contaminée', correct: true, correction: 'Exact. Cela explique l’intérêt des gants et du lavage des mains.' },
      { text: 'Manger des légumes de jardin contaminés sans les laver', correct: true, correction: 'Oui. Le jardin peut être souillé par des déjections félines.' },
      { text: 'Regarder un chat à distance sans ingestion de matière contaminée', correct: false, correction: 'Faux. Le risque décrit implique une contamination puis une ingestion, pas la seule présence visuelle d’un chat.' },
      { text: 'Consommer des aliments souillés par des déjections de chat', correct: true, correction: 'Oui boss 🧠 L’aliment sert de support à l’ingestion du parasite.' },
      { text: 'Partager une pièce avec une personne ayant une ancienne infection toxoplasmique', correct: false, correction: 'Non chef. La simple proximité n’est pas une voie habituelle de transmission de la toxoplasmose.' },
    ],
    explanation: 'Les aliments et les mains peuvent véhiculer des formes parasitaires provenant d’un environnement souillé. Le cours relie ce risque aux déjections félines, au jardinage et aux mesures d’hygiène. (Cours, p. 5 et 11)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Pourquoi le port de gants est-il conseillé lors du jardinage pour prévenir la toxoplasmose ?',
    options: [
      { text: 'Parce que le toxoplasme est toujours transmis par inhalation du pollen', correct: false, correction: 'Non chef. Le risque présenté est lié à une terre potentiellement souillée par des déjections de chat.' },
      { text: 'Pour limiter la souillure des mains par une terre pouvant contenir des formes parasitaires', correct: true, correction: 'Oui boss 🧠 Les gants réduisent le contact avec la terre contaminée et donc le transfert vers la bouche ou les aliments.' },
      { text: 'Parce que les gants remplacent toutes les précautions alimentaires', correct: false, correction: 'Faux. Ils ne protègent pas contre une viande crue contenant des kystes.' },
      { text: 'Pour empêcher une bactérie appelée Toxoplasma gondii de se multiplier dans le sang', correct: false, correction: 'Non. Toxoplasma gondii est un protozoaire, et les gants sont une mesure de prévention de l’exposition.' },
      { text: 'Parce que toute terre contient nécessairement des toxoplasmes infectants', correct: false, correction: 'Non chef. On prévient un risque de contamination, pas une présence universelle démontrée.' },
    ],
    explanation: 'Les jardins peuvent être souillés par des selles de chat. Le port de gants limite le contact des mains avec cette terre, ce qui réduit le risque de transfert oral de formes parasitaires. (Cours, p. 5 et 11)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Une femme enceinte séronégative jardine puis prépare un repas. Quelles mesures sont cohérentes avec la prévention présentée ?',
    options: [
      { text: 'Garder les mêmes gants souillés pour manipuler directement tous les aliments', correct: false, correction: 'Non chef. Cela peut transporter la contamination de la terre vers la préparation alimentaire.' },
      { text: 'Porter des gants pour travailler la terre', correct: true, correction: 'Oui boss 🧤 Le jardinage constitue une situation d’exposition à une terre potentiellement souillée.' },
      { text: 'Considérer le lavage des mains comme inutile dès lors que des gants ont été portés', correct: false, correction: 'Faux. Les mesures se complètent ; les gants ne suppriment pas l’intérêt de l’hygiène des mains.' },
      { text: 'Se laver les mains après le jardinage et avant la préparation du repas', correct: true, correction: 'Exact. Cela limite le transfert de contamination vers les aliments ou la bouche.' },
      { text: 'Laver les aliments susceptibles d’avoir été souillés', correct: true, correction: 'Oui. Le risque alimentaire et celui lié au jardin se rejoignent dans cette situation.' },
    ],
    explanation: 'Le cours associe prévention de l’exposition pendant le jardinage, lavage régulier des mains et précautions alimentaires. Ces mesures visent à empêcher l’ingestion de formes parasitaires. (Cours, p. 5 et 11)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Une personne apprend qu’un collègue a eu une toxoplasmose et pense qu’une simple conversation pourrait la contaminer. Quelle proposition est correcte ?',
    options: [
      { text: 'Toute personne infectée élimine normalement des oocystes comme un chat', correct: false, correction: 'Non. Il ne faut pas attribuer à l’Homme l’excrétion féline d’oocystes.' },
      { text: 'Le parasite est un virus respiratoire transmis par les paroles', correct: false, correction: 'Non chef. Toxoplasma gondii est un protozoaire, pas un virus respiratoire.' },
      { text: 'La toxoplasmose se transmet habituellement par la seule proximité entre deux personnes', correct: false, correction: 'Non chef. Ce n’est pas une infection habituellement transmise par simple proximité.' },
      { text: 'La conversation n’est pas une voie ordinaire de transmission ; les sources alimentaires restent centrales', correct: true, correction: 'Oui boss 🧠 Il faut distinguer une ingestion contaminante d’un simple contact social.' },
      { text: 'Toute ancienne infection impose d’isoler la personne de ses collègues', correct: false, correction: 'Faux. Le contact social ordinaire ne constitue pas cette voie de transmission.' },
    ],
    explanation: 'La phrase générale du support évoquant une transmission par l’Homme ne doit pas être comprise comme une contagion interhumaine ordinaire par conversation ou simple contact. Les sources alimentaires présentées sont la viande parasitée et les aliments souillés. (Cours, p. 2 et 5)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles propositions concernant les personnes visées par les mesures préventives sont exactes dans le cours ?',
    options: [
      { text: 'Les femmes enceintes séronégatives font partie des personnes pour lesquelles la prophylaxie est soulignée', correct: true, correction: 'Oui boss 🧠 La prévention vise notamment à éviter une contamination pendant la grossesse.' },
      { text: 'Les mesures préventives citées sont uniquement destinées aux personnes déjà symptomatiques', correct: false, correction: 'Faux. La prévention cherche justement à réduire le risque avant les manifestations.' },
      { text: 'Les sujets immunodéprimés sont également cités', correct: true, correction: 'Exact. Leur vulnérabilité aux manifestations de l’infection justifie cette vigilance.' },
      { text: 'Les personnes immunocompétentes ne peuvent jamais être infectées et n’ont donc aucune source alimentaire à connaître', correct: false, correction: 'Non chef. Opportuniste ne signifie pas infection réservée aux immunodéprimés.' },
      { text: 'Les mesures d’hygiène cherchent à réduire l’exposition au parasite', correct: true, correction: 'Oui. Elles agissent avant l’infection, en limitant la contamination.' },
    ],
    explanation: 'Le cours souligne les mesures prophylactiques chez les femmes enceintes séronégatives et les personnes immunodéprimées. Les mesures d’hygiène et alimentaires visent à limiter les possibilités de contamination. (Cours, p. 5 et 9)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle mesure présentée agit directement sur le risque lié à une viande contenant des kystes de toxoplasme ?',
    options: [
      { text: 'Éviter l’adoption d’un chaton, ce qui rend toute viande crue sûre', correct: false, correction: 'Non. Les précautions relatives au chat ne remplacent pas celles relatives à la viande.' },
      { text: 'Porter des gants pour manger la viande crue', correct: false, correction: 'Faux. Les gants ne retirent pas les kystes contenus dans l’aliment ingéré.' },
      { text: 'Éviter le jardinage tout en consommant cette viande crue', correct: false, correction: 'Non chef. Cela ne traite pas la source de contamination présente dans la viande.' },
      { text: 'Se laver les mains puis ingérer cette même viande crue sans autre précaution', correct: false, correction: 'Non chef. Le lavage des mains ne supprime pas le parasite déjà contenu dans les tissus de la viande.' },
      { text: 'Faire cuire la viande', correct: true, correction: 'Oui boss 🎯 La cuisson est la mesure alimentaire explicitement citée.' },
    ],
    explanation: 'Le cours recommande la cuisson de la viande pour réduire le risque de contamination alimentaire par le toxoplasme présent dans les tissus. Cette mesure est complémentaire de l’hygiène des mains et des précautions environnementales. (Cours, p. 3 et 5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles mesures participent à la réduction du risque de contamination alimentaire ou environnementale ?',
    options: [
      { text: 'Porter des gants pendant le jardinage', correct: true, correction: 'Exact 🎯 La terre peut être souillée par des déjections félines.' },
      { text: 'Se laver régulièrement les mains', correct: true, correction: 'Exact. Le cours en fait une mesure générale de prévention.' },
      { text: 'Laver les aliments pouvant avoir été souillés', correct: true, correction: 'Oui. Cela complète la prévention de la contamination alimentaire liée à l’environnement.' },
      { text: 'Ne protéger que la viande et négliger complètement les végétaux ou les mains', correct: false, correction: 'Non chef. Le cours décrit plusieurs sources de contamination orale, pas une seule.' },
      { text: 'Cuire la viande', correct: true, correction: 'Oui boss 🧠 On agit sur la source pouvant contenir des kystes tissulaires.' },
    ],
    explanation: 'La prévention associe précautions alimentaires, lavage des mains et protection pendant le jardinage. Elle vise plusieurs sources de contamination et ne se limite pas à la viande. (Cours, p. 5 et 11)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Une femme enceinte séronégative possède déjà un chat. Quelle conclusion préventive est la plus adaptée à la logique du cours ?',
    options: [
      { text: 'Abandonner tout chat dès qu’une grossesse est déclarée', correct: false, correction: 'Faux. Le cours évoque la prudence avec les chatons et l’hygiène, pas un abandon systématique.' },
      { text: 'Identifier les risques liés aux déjections et renforcer les précautions d’hygiène, sans imposer l’abandon du chat', correct: true, correction: 'Oui boss 🧠 Le risque se raisonne à partir des sources de contamination et des mesures de protection.' },
      { text: 'Faire euthanasier systématiquement le chat pour supprimer toutes les sources de toxoplasme', correct: false, correction: 'Non chef. Ce n’est pas une mesure proposée et cela n’éliminerait pas les autres sources, notamment alimentaires.' },
      { text: 'Posséder un chat dispense de la cuisson de la viande', correct: false, correction: 'Non chef. Le risque alimentaire reste distinct de celui lié aux déjections.' },
      { text: 'Le simple fait de voir son chat prouve une infection maternelle', correct: false, correction: 'Non. Une exposition possible ne constitue pas une preuve d’infection.' },
    ],
    explanation: 'Le support recommande notamment d’éviter l’adoption d’un chaton et de respecter les mesures d’hygiène. Cela ne doit pas être transformé en recommandation d’abandon ou d’euthanasie systématique d’un chat déjà présent. (Cours, p. 5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles propositions concernant les précautions autour d’une litière sont cohérentes avec la transmission décrite ?',
    options: [
      { text: 'Le lavage des mains et une protection adaptée lors de la manipulation réduisent le transfert de contamination', correct: true, correction: 'Oui. Ce sont des applications des précautions d’hygiène décrites dans le cours.' },
      { text: 'Les déjections félines constituent une source possible de formes parasitaires', correct: true, correction: 'Oui boss 🧠 C’est ce qui justifie les précautions lors de leur manipulation.' },
      { text: 'La litière est la seule source possible, donc les aliments n’ont aucun rôle', correct: false, correction: 'Faux. Le cours cite aussi les viandes crues et les aliments souillés.' },
      { text: 'Éviter de porter à la bouche des mains souillées limite une possibilité de contamination', correct: true, correction: 'Exact. La voie orale reste le mécanisme à prévenir.' },
      { text: 'L’existence d’un risque lié à la litière signifie que toute caresse entraîne automatiquement une infection', correct: false, correction: 'Non chef. Il faut distinguer la présence d’un animal, la souillure par des déjections et l’ingestion contaminante.' },
    ],
    explanation: 'La litière représente une situation de contact possible avec les déjections félines. La logique des mesures du cours consiste à limiter leur transfert vers les mains, les aliments et la bouche. (Cours, p. 5 et 11)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Une personne mange des crudités souillées par une terre contaminée par des déjections de chat. Quel mécanisme décrit cette exposition ?',
    options: [
      { text: 'Une transmission ordinaire d’un consommateur à l’autre par une simple conversation', correct: false, correction: 'Non chef. Le scénario décrit l’ingestion d’un support contaminé.' },
      { text: 'Une transmission obligatoirement respiratoire', correct: false, correction: 'Non chef. Les formes parasitaires sont ici ingérées avec les aliments.' },
      { text: 'Une contamination impossible puisque les crudités ne contiennent pas de muscle', correct: false, correction: 'Faux. Les kystes tissulaires de la viande ne sont pas la seule source : les déjections peuvent souiller les aliments.' },
      { text: 'Une preuve que le consommateur a été directement mordu par un chat', correct: false, correction: 'Non. Une morsure n’est pas nécessaire au mécanisme présenté.' },
      { text: 'Une contamination orale indirecte par un aliment souillé', correct: true, correction: 'Oui boss 🧠 Le passage par l’environnement puis l’aliment explique le caractère indirect.' },
    ],
    explanation: 'Les aliments souillés par des déjections de chat constituent une source orale indirecte. Les végétaux peuvent être concernés par une contamination environnementale même s’ils ne contiennent pas de kystes musculaires. (Cours, p. 5 et 11)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles affirmations expliquent pourquoi plusieurs mesures préventives doivent être associées ?',
    options: [
      { text: 'Le lavage des mains peut réduire le transfert de contamination vers les aliments', correct: true, correction: 'Oui. L’hygiène des mains relie les différentes situations d’exposition.' },
      { text: 'Une surveillance médicale remplace automatiquement toutes les mesures destinées à éviter la contamination', correct: false, correction: 'Faux. Surveiller une éventuelle infection et prévenir l’exposition sont deux fonctions complémentaires.' },
      { text: 'Cuire la viande ne supprime pas le risque de transfert par des mains souillées après jardinage', correct: true, correction: 'Oui boss 🧠 Chaque mesure agit sur une possibilité de contamination particulière.' },
      { text: 'Les gants de jardinage ne rendent pas sûre une viande contaminée consommée crue', correct: true, correction: 'Exact. Protection environnementale et précaution alimentaire se complètent.' },
      { text: 'L’absence de chat au domicile permet de négliger toute précaution alimentaire', correct: false, correction: 'Non chef. Une viande contaminée ou un aliment souillé reste une source possible.' },
    ],
    explanation: 'Les mesures préventives ciblent des sources distinctes : viande parasitée, environnement souillé et transfert par les mains ou les aliments. Les associer correspond à la logique de prévention du cours. (Cours, p. 5 et 9)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quelle distinction de vocabulaire est correcte ?',
    options: [
      { text: 'Toxoplasmose signifie exclusivement présence d’oocystes dans les selles humaines', correct: false, correction: 'Non. L’infection humaine ne se définit pas par une excrétion féline d’oocystes.' },
      { text: 'Protozoose est le nom d’une forme de globule blanc', correct: false, correction: 'Non chef. C’est une catégorie d’infection parasitaire.' },
      { text: 'Toxoplasma gondii est le nom d’un ver, et protozoose signifie infection bactérienne', correct: false, correction: 'Faux. Protozoose signifie infection provoquée par un protozoaire.' },
      { text: 'Toxoplasmose désigne le virus et Toxoplasma gondii désigne sa toxine', correct: false, correction: 'Non chef. L’agent est un protozoaire, pas un virus produisant cette toxine.' },
      { text: 'Toxoplasma gondii est le parasite ; la toxoplasmose est l’infection qu’il provoque', correct: true, correction: 'Oui boss 🎯 Il faut distinguer le nom de l’agent et celui de l’infection.' },
    ],
    explanation: 'Toxoplasma gondii est le nom du protozoaire responsable ; toxoplasmose est le nom de l’infection. La ronéo emploie parfois ces mots de manière imprécise, mais la nature parasitaire eucaryote de l’agent est à retenir. (Cours, p. 2 et 10)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles affirmations résument correctement les généralités, les sources de contamination et la prévention ?',
    options: [
      { text: 'Le chiffre approximatif d’un Français sur cinq signifie qu’une personne sur cinq présente actuellement une maladie symptomatique active', correct: false, correction: 'Non chef. La formule du support ne doit pas être transformée en fréquence de maladie active ; le cours rappelle d’ailleurs la possibilité d’infections asymptomatiques.' },
      { text: 'La viande crue parasitée et les aliments souillés sont deux sources présentées', correct: true, correction: 'Exact. Il ne faut pas réduire la contamination à la seule présence d’un chat.' },
      { text: 'La cuisson de la viande et l’hygiène des mains participent à la prévention', correct: true, correction: 'Oui. Ce sont deux mesures explicitement soulignées.' },
      { text: 'Les gants lors du jardinage répondent au risque lié à un environnement souillé', correct: true, correction: 'Exact 🎯 La prévention découle des mécanismes de contamination.' },
      { text: 'Toxoplasma gondii est un protozoaire et peut infecter une personne immunocompétente', correct: true, correction: 'Oui boss 🧠 L’opportunisme ne signifie pas une infection réservée aux immunodéprimés.' },
    ],
    explanation: 'La prévention découle des sources orales décrites : viande contenant le parasite et aliments ou mains souillés par l’environnement. Les chiffres approximatifs de fréquence du support ne décrivent pas une proportion de maladies symptomatiques actives. (Cours, p. 2 et 5 ; correction p. 10–11)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle recherche correspond au diagnostic indirect de la toxoplasmose présenté dans le cours ?',
    options: [
      { text: 'La recherche de l’ADN de Toxoplasma gondii par PCR', correct: false, correction: 'Non chef. La recherche de l’ADN du parasite est une méthode directe.' },
      { text: 'La recherche d’anticorps spécifiques de Toxoplasma gondii dans le sérum', correct: true, correction: 'Oui boss 🧠 On détecte la réponse immunitaire au parasite : c’est indirect.' },
      { text: 'La visualisation du parasite dans un prélèvement tissulaire', correct: false, correction: 'Faux. Voir le parasite constitue une recherche directe.' },
      { text: 'Une échographie fœtale à la recherche de signes d’atteinte', correct: false, correction: 'Non chef. L’échographie étudie des signes anatomiques ; elle ne correspond pas à la recherche sérologique d’anticorps décrite ici.' },
      { text: 'La seule mesure du nombre de globules blancs', correct: false, correction: 'Non. Une numération des leucocytes ne recherche pas des anticorps spécifiques du toxoplasme.' },
    ],
    explanation: 'La sérologie recherche les anticorps spécifiques du toxoplasme dans le sérum. Elle constitue un diagnostic indirect, contrairement à la recherche du parasite ou de son ADN. (Cours, p. 3 et 7)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Concernant les anticorps recherchés dans la sérologie toxoplasmique, quelles propositions sont exactes ?',
    options: [
      { text: 'La PCR du liquide amniotique est une méthode de dosage des anticorps', correct: false, correction: 'Faux. Elle recherche l’ADN de Toxoplasma gondii.' },
      { text: 'Ils sont des marqueurs indirects de la réponse au parasite', correct: true, correction: 'Oui boss. Leur détection ne revient pas à voir le toxoplasme lui-même.' },
      { text: 'Ils sont produits par des plasmocytes issus de la différenciation de lymphocytes B', correct: true, correction: 'Exact 🧠 Plasmocytes et lymphocytes B, pas lymphocytes T.' },
      { text: 'Les IgG spécifiques sont directement fabriquées par les lymphocytes T', correct: false, correction: 'Non chef. Les anticorps sont sécrétés par les plasmocytes issus des lymphocytes B.' },
      { text: 'Les classes habituellement recherchées dans le cours sont les IgG et les IgM', correct: true, correction: 'Exact. Ce sont les deux catégories utilisées dans le cas clinique.' },
    ],
    explanation: 'Les plasmocytes, issus des lymphocytes B, produisent les anticorps. Le cours utilise la recherche des IgG et des IgM anti-toxoplasmiques comme marqueurs indirects. (Cours, p. 3 et 11)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle interprétation générale convient à la présence d’IgG spécifiques du toxoplasme chez une personne immunocompétente ?',
    options: [
      { text: 'Elle identifie directement le parasite dans le sang', correct: false, correction: 'Non. On identifie des anticorps, pas le parasite lui-même.' },
      { text: 'Elle démontre obligatoirement une réactivation actuellement symptomatique', correct: false, correction: 'Non chef. Des IgG peuvent être liées à une infection ancienne sans prouver les manifestations actuelles.' },
      { text: 'Elle prouve une infection fœtale chez toute femme enceinte', correct: false, correction: 'Non chef. Une sérologie maternelle positive ne suffit pas à prouver une infection du fœtus.' },
      { text: 'Elle témoigne d’une réponse immunitaire au parasite, sans dater à elle seule l’infection', correct: true, correction: 'Oui boss 🧠 Les IgG s’inscrivent dans la mémoire immunitaire ; leur présence isolée ne donne pas une date précise.' },
      { text: 'Elle date précisément l’infection au jour du prélèvement', correct: false, correction: 'Faux. Les IgG peuvent persister après l’infection.' },
    ],
    explanation: 'Les IgG sont associées à la mémoire de la réponse immunitaire contre le toxoplasme. Leur présence doit être interprétée avec les autres résultats et le contexte ; elle ne date pas seule l’infection et ne prouve pas une atteinte fœtale. (Cours, p. 3 et 7)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles propositions concernant les IgM anti-toxoplasmiques sont exactes ?',
    options: [
      { text: 'Elles peuvent apparaître précocement lors d’une primo-infection', correct: true, correction: 'Exact 🧠 Le cours les présente parmi les premiers anticorps de la réponse.' },
      { text: 'Elles disparaissent toujours immédiatement dès l’amélioration clinique', correct: false, correction: 'Non chef. La disparition des symptômes n’impose pas une disparition immédiate des IgM.' },
      { text: 'Toute IgM positive chez la mère démontre le passage du parasite au fœtus', correct: false, correction: 'Faux. Une réponse immunitaire maternelle n’est pas une preuve d’infection fœtale.' },
      { text: 'Une positivité isolée fait suspecter une infection récente mais nécessite une confirmation', correct: true, correction: 'Oui boss. C’est une suspicion, pas une datation certaine.' },
      { text: 'Leur persistance ou un résultat faussement positif peut compliquer l’interprétation', correct: true, correction: 'Exact. C’est pourquoi une IgM positive ne suffit pas, seule, à affirmer la date de contamination.' },
    ],
    explanation: 'Les IgM peuvent évoquer une infection récente, mais une positivité isolée doit être confirmée et interprétée avec les autres résultats. Elles peuvent persister ou être faussement positives ; la simplification « IgM = infection récente certaine » doit être évitée. (Cours, p. 3, 5–6 et 11)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'À 12 SA, la patiente du cours a des IgG à 0 et des IgM à 0. Quelle conclusion est justifiée par ce prélèvement ?',
    options: [
      { text: 'Une réaction croisée est démontrée', correct: false, correction: 'Non chef. Aucun élément de ce bilan n’établit une réaction croisée.' },
      { text: 'Une infection fœtale est prouvée', correct: false, correction: 'Faux. Ce résultat ne démontre aucune transmission au fœtus.' },
      { text: 'La sérologie est négative, sans anticorps détectables par cette technique à cette date', correct: true, correction: 'Oui boss 🎯 C’est la conclusion mesurée : absence d’anticorps détectables au moment du bilan.' },
      { text: 'Une primo-infection maternelle est prouvée', correct: false, correction: 'Non chef. Aucun des deux anticorps recherchés n’est détecté.' },
      { text: 'La patiente restera nécessairement séronégative jusqu’à l’accouchement', correct: false, correction: 'Non. Une contamination ultérieure reste possible et justifie le suivi.' },
    ],
    explanation: 'Les deux résultats nuls correspondent à une sérologie négative dans le bilan présenté. Ils n’établissent ni une primo-infection maternelle ni une toxoplasmose congénitale. (Cours, p. 2–3)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'À propos du bilan initial IgG = 0 et IgM = 0 de la patiente enceinte, quelles propositions sont exactes ?',
    options: [
      { text: 'Il n’existe pas d’anticorps anti-toxoplasmiques détectables dans ce prélèvement', correct: true, correction: 'Exact 🧠 On décrit ici le résultat de la recherche effectuée.' },
      { text: 'Ce résultat permet d’affirmer que la patiente n’a jamais rencontré le parasite, sans aucune réserve', correct: false, correction: 'Non chef. Une sérologie négative ne permet pas une affirmation absolue, notamment en cas de prélèvement très précoce.' },
      { text: 'Ce bilan ne fournit pas de preuve d’infection fœtale', correct: true, correction: 'Exact. Les résultats maternels ne prouvent pas une infection de l’enfant.' },
      { text: 'La séronégativité justifie la surveillance sérologique proposée pendant la grossesse', correct: true, correction: 'Oui boss. Le cours prévoit un contrôle mensuel chez les femmes enceintes séronégatives.' },
      { text: 'La séronégativité rend inutile toute prévention d’une contamination ultérieure', correct: false, correction: 'Faux. Elle motive au contraire les mesures de prévention présentées dans le cours.' },
    ],
    explanation: 'Le bilan initial ne met pas en évidence d’anticorps et ne prouve pas une infection du fœtus. Le cours associe la séronégativité maternelle à une surveillance mensuelle et à des mesures préventives. (Cours, p. 2–5)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quelle réserve faut-il conserver devant une sérologie toxoplasmique IgG négatives et IgM négatives réalisée très tôt après une exposition possible ?',
    options: [
      { text: 'La négativité permet d’arrêter toute surveillance sérologique pendant la grossesse', correct: false, correction: 'Non chef. Le cours prévoit au contraire un suivi mensuel chez la femme enceinte séronégative.' },
      { text: 'Le résultat démontre que tout examen ultérieur sera négatif', correct: false, correction: 'Non. Des anticorps peuvent apparaître sur un prélèvement ultérieur.' },
      { text: 'Le résultat prouve une réactivation ancienne', correct: false, correction: 'Faux. Il n’établit ni une infection ancienne ni une réactivation.' },
      { text: 'Le résultat date forcément l’exposition de plus de quatre mois', correct: false, correction: 'Non chef. Une sérologie négative ne fournit pas cette datation.' },
      { text: 'L’absence d’anticorps détectables n’exclut pas une infection encore dans la fenêtre sérologique très précoce', correct: true, correction: 'Oui boss 🧠 Le système immunitaire peut ne pas encore avoir produit des anticorps détectables.' },
    ],
    explanation: 'Une sérologie négative signifie qu’aucun anticorps n’est détecté à la date du prélèvement. Elle ne permet pas d’exclure absolument une infection trop récente pour être détectée par la sérologie. La formulation absolue du support est corrigée ici. (Cours, p. 2–4)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Comment utiliser les seuils IgG ≥ 8 et IgM ≥ 0,65 indiqués dans le bilan du cas clinique ?',
    options: [
      { text: 'Ils sont obligatoirement identiques pour toutes les méthodes de sérologie toxoplasmique', correct: false, correction: 'Non chef. Ce sont les seuils du bilan présenté, pas des constantes universelles.' },
      { text: 'Avec ces seuils, une valeur d’IgG à 0 est négative', correct: true, correction: 'Exact. Elle est inférieure au seuil de positivité indiqué.' },
      { text: 'Dépasser le seuil d’IgM permet à lui seul de calculer l’âge exact de l’infection en jours', correct: false, correction: 'Faux. Le seuil définit une positivité analytique, pas une date de contamination.' },
      { text: 'Avec ces seuils, une valeur d’IgM à 2,1 est positive', correct: true, correction: 'Oui boss 🎯 2,1 est supérieur à 0,65.' },
      { text: 'Ils servent à interpréter les résultats de la technique utilisée pour ce bilan', correct: true, correction: 'Exact 🧠 Ils doivent être rattachés au laboratoire et à la méthode du cas.' },
    ],
    explanation: 'Les seuils de positivité appartiennent à la technique du cas clinique. IgM = 2,1 est positive et IgG = 0 négative selon ces seuils ; cette lecture ne suffit pas à dater précisément une infection. (Cours, p. 2 et 5)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Au sixième mois de grossesse, la patiente initialement séronégative présente IgG = 0 et IgM = 2,1, avec un seuil d’IgM à 0,65. Quelle interprétation est la plus adaptée ?',
    options: [
      { text: 'Une infection maternelle ancienne datant de plus de quatre mois est démontrée', correct: false, correction: 'Faux. Ce profil ne démontre pas cette ancienneté.' },
      { text: 'La mère est négative pour les deux classes d’anticorps', correct: false, correction: 'Non. Les IgM sont positives avec le seuil indiqué.' },
      { text: 'Une réactivation maternelle est prouvée', correct: false, correction: 'Non chef. Une positivité isolée des IgM n’établit pas une réactivation.' },
      { text: 'Une infection maternelle récente est suspectée et doit être confirmée', correct: true, correction: 'Oui boss 🧠 C’est la suspicion retenue dans le cas, avec confirmation nécessaire avant toute conclusion définitive.' },
      { text: 'Une contamination fœtale est certaine', correct: false, correction: 'Non chef. Le résultat concerne les anticorps de la mère et ne prouve pas une infection du fœtus.' },
    ],
    explanation: 'L’apparition d’IgM positives chez cette patiente fait suspecter une infection maternelle récente. Les IgM isolées ne constituent cependant ni une preuve de datation ni une preuve d’infection congénitale. (Cours, p. 5–6)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles conclusions sont justifiées devant le profil maternel IgG = 0 et IgM = 2,1 du cas clinique ?',
    options: [
      { text: 'Les IgM sont positives selon le seuil de ce bilan', correct: true, correction: 'Exact 🎯 La valeur 2,1 dépasse le seuil 0,65.' },
      { text: 'La présence d’IgM permet d’affirmer une toxoplasmose congénitale sans autre examen', correct: false, correction: 'Faux. Il faut distinguer la suspicion maternelle du diagnostic fœtal.' },
      { text: 'Le taux d’IgM démontre que l’infection date exactement de deux semaines', correct: false, correction: 'Non chef. Une concentration d’IgM ne fournit pas ce calendrier précis.' },
      { text: 'L’absence d’IgG sur ce prélèvement ne constitue pas une preuve d’infection du fœtus', correct: true, correction: 'Exact. Ce résultat doit rester interprété comme un résultat maternel.' },
      { text: 'Un contrôle et une confirmation sérologique sont nécessaires pour préciser l’interprétation', correct: true, correction: 'Oui boss. Une IgM isolée ne suffit pas pour affirmer tous les éléments du diagnostic.' },
    ],
    explanation: 'Le profil montre une positivité des IgM selon la technique du cas. Il motive une confirmation et un suivi, sans établir seul la date exacte d’infection ni une contamination fœtale. (Cours, p. 5–7)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Après des prélèvements initialement négatifs pour les IgG, quelle évolution sérologique soutient une séroconversion maternelle ?',
    options: [
      { text: 'La comparaison de deux valeurs d’IgG négatives provenant de méthodes différentes', correct: false, correction: 'Non chef. Deux résultats négatifs ne montrent pas une apparition d’IgG positives.' },
      { text: 'La seule augmentation du nombre total de leucocytes', correct: false, correction: 'Faux. Ce n’est pas une mesure des anticorps spécifiques.' },
      { text: 'L’apparition d’IgG anti-toxoplasmiques confirmées sur un prélèvement ultérieur', correct: true, correction: 'Oui boss 🎯 Le passage d’IgG négatives à positives documente une séroconversion.' },
      { text: 'La persistance d’IgG et d’IgM toutes deux négatives', correct: false, correction: 'Non chef. Les anticorps restent non détectables ; ce n’est pas une séroconversion documentée.' },
      { text: 'Une échographie fœtale normale isolée', correct: false, correction: 'Non. L’échographie ne documente pas l’apparition d’anticorps maternels.' },
    ],
    explanation: 'Dans la suite du cas, des IgG apparaissent quelques semaines après le profil IgM positives et IgG négatives. Leur apparition confirmée chez une patiente initialement négative documente une séroconversion maternelle. (Cours, p. 5–7)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelques semaines après le profil IgM positives et IgG négatives, des IgG anti-toxoplasmiques apparaissent et sont confirmées chez la patiente. Quelles propositions sont exactes ?',
    options: [
      { text: 'Cette évolution renforce l’interprétation d’une primo-infection maternelle pendant le suivi', correct: true, correction: 'Oui boss. La succession des prélèvements est plus informative qu’un résultat isolé.' },
      { text: 'L’évolution documente une séroconversion maternelle', correct: true, correction: 'Exact 🧠 La patiente passe d’IgG non détectables à des IgG positives.' },
      { text: 'L’apparition des IgG rend impossible toute transmission materno-fœtale', correct: false, correction: 'Faux. Le diagnostic fœtal et le suivi restent à envisager dans le contexte du cas.' },
      { text: 'L’apparition des IgG prouve à elle seule une infection fœtale', correct: false, correction: 'Non chef. C’est une séroconversion de la mère, pas une preuve directe d’infection du fœtus.' },
      { text: 'Un diagnostic anténatal spécialisé peut être proposé pour évaluer la situation fœtale', correct: true, correction: 'Exact. Le cours prévoit une orientation spécialisée après séroconversion pendant la grossesse.' },
    ],
    explanation: 'L’apparition confirmée d’IgG chez la patiente initialement négative documente une séroconversion maternelle. L’infection fœtale doit être évaluée séparément ; le cours propose une prise en charge spécialisée. (Cours, p. 7 et 9)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle distinction est essentielle après confirmation d’une séroconversion toxoplasmique maternelle ?',
    options: [
      { text: 'La mère et le fœtus ont obligatoirement le même profil d’anticorps produit par chacun', correct: false, correction: 'Non. Les profils ne permettent pas d’attribuer automatiquement la même infection aux deux.' },
      { text: 'Une infection maternelle est documentée, mais une infection fœtale n’est pas prouvée par cette seule sérologie', correct: true, correction: 'Oui boss 🧠 Il faut distinguer la mère de l’enfant dans l’interprétation des examens.' },
      { text: 'Une séroconversion maternelle exclut toute infection chez la mère', correct: false, correction: 'Faux. Elle documente au contraire l’apparition de sa réponse immunitaire spécifique.' },
      { text: 'Une séroconversion maternelle équivaut à une malformation fœtale prouvée', correct: false, correction: 'Non chef. Infection maternelle, infection fœtale et atteinte clinique sont des conclusions différentes.' },
      { text: 'La présence d’IgG maternelles rend inutile toute évaluation fœtale', correct: false, correction: 'Non chef. Le cours propose justement une démarche anténatale après la séroconversion.' },
    ],
    explanation: 'La séroconversion établit une évolution sérologique maternelle. Le diagnostic d’infection fœtale requiert une évaluation distincte, pouvant inclure une recherche d’ADN parasitaire dans le liquide amniotique. (Cours, p. 7 et 11)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Pourquoi l’interprétation sérologique repose-t-elle sur le contexte et l’évolution des résultats ?',
    options: [
      { text: 'Une IgM positive isolée peut nécessiter une confirmation', correct: true, correction: 'Oui boss. Il faut notamment tenir compte des faux positifs possibles.' },
      { text: 'La persistance des IgM peut empêcher une datation simple à partir de leur seule positivité', correct: true, correction: 'Exact. IgM positive ne signifie pas systématiquement contamination de quelques jours.' },
      { text: 'Un résultat négatif peut avoir été obtenu avant l’apparition d’anticorps détectables', correct: true, correction: 'Exact 🧠 Le moment du prélèvement compte.' },
      { text: 'Tous les profils IgG positives et IgM positives prouvent une infection datant de moins d’une semaine', correct: false, correction: 'Non chef. Le profil isolé ne permet pas cette datation précise et universelle.' },
      { text: 'L’apparition confirmée des IgG chez une patiente auparavant négative est une information importante', correct: true, correction: 'Oui 🎯 Elle permet de documenter une séroconversion.' },
    ],
    explanation: 'Les résultats doivent être lus avec le contexte et les prélèvements précédents. La négativité très précoce, les IgM persistantes ou faussement positives et l’apparition confirmée des IgG empêchent les interprétations trop automatiques. (Cours, p. 2–7 et 11)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Que recherche une PCR spécifique de Toxoplasma gondii dans le liquide amniotique ?',
    options: [
      { text: 'La date exacte de contamination à partir du taux d’IgM', correct: false, correction: 'Non chef. La PCR cherche l’ADN parasitaire ; elle ne transforme pas un taux d’IgM en date.' },
      { text: 'Les IgM maternelles', correct: false, correction: 'Faux. La PCR n’est pas un dosage d’anticorps.' },
      { text: 'L’ADN du parasite', correct: true, correction: 'Oui boss 🎯 C’est une recherche directe du matériel génétique du toxoplasme.' },
      { text: 'Le nombre total de plasmocytes maternels', correct: false, correction: 'Non. Ce nombre n’est pas la cible d’une PCR spécifique du parasite.' },
      { text: 'Les IgG maternelles', correct: false, correction: 'Non chef. Les IgG sont des anticorps et ne sont pas la cible de cette PCR.' },
    ],
    explanation: 'Le cours propose la recherche de l’ADN de Toxoplasma gondii par PCR dans le liquide amniotique pour évaluer une infection in utero. Cette méthode relève du diagnostic direct. (Cours, p. 7 et 11)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles propositions concernant le diagnostic direct de toxoplasmose sont exactes ?',
    options: [
      { text: 'Il est par définition exclusivement réalisable chez un patient immunodéprimé', correct: false, correction: 'Non chef. C’est une formulation trop restrictive du support : le diagnostic anténatal par PCR en est un contre-exemple.' },
      { text: 'Il consiste uniquement à mesurer les IgG et IgM dans le sérum', correct: false, correction: 'Faux. La recherche d’anticorps est un diagnostic indirect.' },
      { text: 'Il peut rechercher le parasite dans un prélèvement adapté', correct: true, correction: 'Exact 🧠 La mise en évidence du parasite lui-même est une méthode directe.' },
      { text: 'La PCR sur liquide amniotique est un exemple de diagnostic direct en contexte anténatal', correct: true, correction: 'Exact. Cette possibilité montre qu’il n’est pas réservé aux seuls patients immunodéprimés.' },
      { text: 'Il peut rechercher l’ADN parasitaire par PCR', correct: true, correction: 'Oui boss. On détecte alors un constituant du parasite.' },
    ],
    explanation: 'Le diagnostic direct recherche le parasite ou son ADN dans des prélèvements adaptés. Le cours l’évoque chez l’immunodéprimé, mais présente aussi la PCR anténatale sur liquide amniotique. (Cours, p. 4 et 7)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Chez un patient immunodéprimé, quelle situation doit faire envisager une toxoplasmose selon le cours ?',
    options: [
      { text: 'Uniquement une symptomatologie digestive sans aucune autre localisation possible', correct: false, correction: 'Non chef. Le cours insiste notamment sur les atteintes cérébrales et oculaires possibles.' },
      { text: 'Des céphalées persistantes, avec ou sans fièvre', correct: true, correction: 'Oui boss 🧠 C’est un contexte d’alerte explicitement cité chez l’immunodéprimé.' },
      { text: 'L’absence d’IgM, qui prouve une réactivation symptomatique', correct: false, correction: 'Faux. L’absence d’IgM ne démontre pas à elle seule une réactivation.' },
      { text: 'Une sérologie positive prouvant automatiquement une amélioration de l’état général', correct: false, correction: 'Non. Une sérologie positive n’établit pas cette amélioration.' },
      { text: 'Uniquement la découverte fortuite d’IgG anciennes, sans tenir compte des symptômes', correct: false, correction: 'Non chef. Des IgG anciennes ne suffisent pas à diagnostiquer une maladie actuelle.' },
    ],
    explanation: 'Le cours recommande d’envisager la toxoplasmose chez un patient immunodéprimé présentant des céphalées persistantes, même sans fièvre. La démarche diagnostique doit tenir compte du contexte clinique. (Cours, p. 6 et 9)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant l’interprétation des examens chez un patient immunodéprimé suspect de réactivation toxoplasmique, quelles propositions sont exactes ?',
    options: [
      { text: 'La sérologie est peu contributive pour établir à elle seule une réactivation', correct: true, correction: 'Oui boss. Le contexte clinique et les recherches adaptées restent déterminants.' },
      { text: 'Une recherche directe peut chercher le parasite ou son ADN', correct: true, correction: 'Exact. Elle apporte une information différente de la seule présence d’anticorps.' },
      { text: 'Des IgG liées à une infection ancienne ne prouvent pas que les symptômes actuels sont dus au toxoplasme', correct: true, correction: 'Exact 🧠 Il faut distinguer la trace d’un contact antérieur du diagnostic de l’épisode actuel.' },
      { text: 'Les symptômes et les prélèvements disponibles guident la démarche diagnostique', correct: true, correction: 'Oui 🎯 Le cours souligne notamment les atteintes cérébrales ou oculaires possibles.' },
      { text: 'Des IgG positives prouvent toujours une réactivation cérébrale actuellement symptomatique', correct: false, correction: 'Non chef. Une positivité ancienne ne suffit pas à établir cette localisation et cette activité.' },
    ],
    explanation: 'Chez l’immunodéprimé, des anticorps d’une infection ancienne ne suffisent pas à diagnostiquer une réactivation. La sérologie est peu contributive pour l’épisode actuel ; la recherche directe et le contexte clinique doivent être pris en compte. (Cours, p. 3–4, 6 et 9)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel suivi sérologique est présenté dans le cours pour une femme enceinte séronégative à la toxoplasmose ?',
    options: [
      { text: 'Une PCR sanguine mensuelle remplaçant systématiquement toutes les sérologies', correct: false, correction: 'Non. Le suivi présenté repose sur la sérologie maternelle ; la PCR ne dose pas les anticorps.' },
      { text: 'La suppression du suivi dès qu’une exposition possible est signalée', correct: false, correction: 'Non chef. Une exposition possible appelle une évaluation, pas l’arrêt de la surveillance.' },
      { text: 'Une sérologie uniquement en cas de fièvre importante', correct: false, correction: 'Faux. Une infection peut être asymptomatique et le suivi n’attend pas obligatoirement une fièvre.' },
      { text: 'Une seule sérologie initiale, sans contrôle pendant la grossesse', correct: false, correction: 'Non chef. Le cours prévoit une surveillance chez la femme enceinte séronégative.' },
      { text: 'Un contrôle sérologique mensuel pendant la grossesse', correct: true, correction: 'Oui boss 🎯 C’est la fréquence retenue dans le cours pour les femmes enceintes séronégatives.' },
    ],
    explanation: 'Le cours présente un bilan initial puis une surveillance sérologique mensuelle chez les femmes enceintes séronégatives. Elle vise à repérer une séroconversion, y compris en l’absence de symptômes. (Cours, p. 5, 9 et 11)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles associations entre résultat et interprétation sont correctes dans la démarche diagnostique du cours ?',
    options: [
      { text: 'IgM positives isolées : suspicion à confirmer, sans datation certaine', correct: true, correction: 'Oui boss. Une positivité isolée demande une interprétation prudente.' },
      { text: 'Apparition confirmée d’IgG chez une patiente auparavant négative : séroconversion maternelle', correct: true, correction: 'Exact 🎯 La succession des résultats documente cette évolution.' },
      { text: 'Recherche d’ADN parasitaire par PCR : diagnostic direct', correct: true, correction: 'Oui. La cible est le matériel génétique du parasite.' },
      { text: 'Sérologie maternelle positive : preuve automatique d’une toxoplasmose congénitale', correct: false, correction: 'Non chef. Le statut maternel et l’infection du fœtus doivent être distingués.' },
      { text: 'IgG et IgM non détectables : sérologie négative à la date du prélèvement', correct: true, correction: 'Exact 🧠 Cette conclusion ne doit pas être transformée en exclusion absolue d’une infection très précoce.' },
    ],
    explanation: 'La lecture des sérologies doit intégrer les prélèvements successifs et leurs limites. La séroconversion maternelle et le diagnostic fœtal sont distincts ; la PCR recherche directement l’ADN du parasite. (Cours, p. 2–7 et 11)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Selon le cours, quelle proportion des infections toxoplasmiques est asymptomatique chez l’immunocompétent ?',
    options: [
      { text: 'Environ 80 %', correct: true, correction: 'Oui boss 🎯 La majorité des infections reste silencieuse chez l’immunocompétent.' },
      { text: 'Toutes, sans exception', correct: false, correction: 'Faux. Une partie des patients présente notamment adénopathies, asthénie ou fébricule.' },
      { text: 'Environ 20 %', correct: false, correction: 'Non chef. Les 20 % correspondent aux infections avec manifestations cliniques dans le cours.' },
      { text: 'Aucune, car une infection provoque toujours de la fièvre', correct: false, correction: 'Non. Une infection peut être asymptomatique et ne provoque pas obligatoirement de fièvre.' },
      { text: 'Environ 80 % uniquement chez les immunodéprimés', correct: false, correction: 'Non chef. Le chiffre donné concerne les immunocompétents ; l’immunodépression expose à des formes graves.' },
    ],
    explanation: 'Le cours décrit environ 80 % d’infections asymptomatiques chez l’immunocompétent, contre environ 20 % présentant des manifestations. Ce chiffre ne doit pas être transposé aux immunodéprimés. (Cours, p. 6 et 10)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Concernant les manifestations de toxoplasmose chez l’immunocompétent, quelles propositions sont exactes ?',
    options: [
      { text: 'Des adénopathies, notamment cervicales', correct: true, correction: 'Oui boss 🧠 L’augmentation du volume des ganglions fait partie du tableau décrit.' },
      { text: 'Une atteinte cérébrale grave obligatoire chez tous les patients', correct: false, correction: 'Non chef. Les formes graves concernent surtout des contextes particuliers, notamment l’immunodépression.' },
      { text: 'Une absence possible de manifestations chez la majorité des patients', correct: true, correction: 'Exact. Environ 80 % des infections sont asymptomatiques selon le cours.' },
      { text: 'Une asthénie transitoire', correct: true, correction: 'Exact. Une fatigue peut accompagner l’infection.' },
      { text: 'Une fébricule ou des céphalées', correct: true, correction: 'Oui 🎯 Le cours les cite parmi les manifestations possibles.' },
    ],
    explanation: 'Les manifestations possibles comprennent adénopathies cervicales, asthénie, fébricule et céphalées. La majorité des infections chez l’immunocompétent demeure asymptomatique. (Cours, p. 6 et 10)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle formulation décrit correctement l’évolution habituelle des manifestations chez l’immunocompétent selon le cours ?',
    options: [
      { text: 'Une absence d’amélioration possible sans infection fœtale associée', correct: false, correction: 'Non. L’évolution d’une infection chez l’immunocompétent ne dépend pas de l’existence d’une grossesse.' },
      { text: 'Une disparition obligatoire de tous les symptômes exactement au quatorzième jour', correct: false, correction: 'Non chef. Un délai généralement observé ne doit pas devenir une règle absolue.' },
      { text: 'Une aggravation neurologique systématique après deux semaines', correct: false, correction: 'Faux. Le cours décrit plutôt une régression des manifestations et une amélioration de l’état général.' },
      { text: 'Une amélioration généralement décrite en environ deux semaines, sans garantie d’un délai identique chez tous', correct: true, correction: 'Oui boss 🎯 Le cours donne une évolution habituelle, pas une échéance universelle de guérison.' },
      { text: 'La persistance de symptômes prouve à elle seule une immunodépression', correct: false, correction: 'Non chef. La durée des symptômes ne suffit pas à définir l’état immunitaire d’un patient.' },
    ],
    explanation: 'Le cours décrit généralement une régression des manifestations et une amélioration en environ deux semaines. Cette indication ne constitue pas une garantie individuelle ni un critère diagnostique isolé. (Cours, p. 6 et 10)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Concernant la toxoplasmose chez l’immunodéprimé, quelles propositions sont exactes ?',
    options: [
      { text: 'Le décès est obligatoire dès que l’infection est diagnostiquée', correct: false, correction: 'Non chef. Le pronostic peut être grave, mais l’issue n’est pas obligatoirement fatale ; la prise en charge compte.' },
      { text: 'Des atteintes cérébrales ou oculaires peuvent survenir', correct: true, correction: 'Exact. Le cerveau et l’œil sont des localisations importantes citées dans le cours.' },
      { text: 'Le déficit des défenses immunitaires expose à des formes plus graves', correct: true, correction: 'Oui boss 🧠 Le contexte immunitaire change fortement le risque clinique.' },
      { text: 'D’autres organes peuvent également être atteints', correct: true, correction: 'Oui 🎯 La maladie ne se limite pas obligatoirement à une seule localisation.' },
      { text: 'Les symptômes restent nécessairement aussi discrets que chez l’immunocompétent', correct: false, correction: 'Faux. Une immunodépression expose notamment à des manifestations neurologiques ou disséminées sévères.' },
    ],
    explanation: 'L’immunodépression expose à une toxoplasmose grave, notamment cérébrale, oculaire ou disséminée. Le risque vital justifie une prise en charge adaptée sans considérer le décès comme obligatoire. (Cours, p. 6 et 9)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quel tableau doit notamment faire envisager une toxoplasmose chez un patient immunodéprimé ?',
    options: [
      { text: 'Une absence de fièvre qui exclut nécessairement toute toxoplasmose', correct: false, correction: 'Non. L’absence de fièvre ne suffit pas à éliminer cette hypothèse.' },
      { text: 'Uniquement des adénopathies cervicales sans aucun autre signe possible', correct: false, correction: 'Faux. Le tableau peut être beaucoup plus sévère et comporter une atteinte cérébrale.' },
      { text: 'Des céphalées persistantes uniquement si une forte fièvre est obligatoirement présente', correct: false, correction: 'Non chef. Le cours précise que les céphalées peuvent survenir avec ou sans fièvre.' },
      { text: 'Des céphalées persistantes, avec ou sans fièvre, éventuellement accompagnées d’autres signes neurologiques', correct: true, correction: 'Oui boss 🎯 Le contexte immunodéprimé doit faire garder cette hypothèse en tête.' },
      { text: 'Des céphalées qui prouvent à elles seules le diagnostic sans investigation', correct: false, correction: 'Non chef. Elles orientent la démarche, mais ne sont pas spécifiques de la toxoplasmose.' },
    ],
    explanation: 'Le cours recommande d’envisager une toxoplasmose devant des céphalées persistantes chez l’immunodéprimé, avec ou sans fièvre et avec des signes associés variables. Le tableau clinique oriente sans suffire à confirmer le diagnostic. (Cours, p. 9)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles relations entre le terme de la grossesse et la toxoplasmose congénitale sont exactes ?',
    options: [
      { text: 'Le risque de transmission materno-fœtale augmente avec le terme', correct: true, correction: 'Oui boss 🧠 La transmission devient globalement plus fréquente lorsque la grossesse avance.' },
      { text: 'La gravité des conséquences diminue globalement lorsque l’infection survient plus tard', correct: true, correction: 'Exact. Le risque de transmission et la gravité ne suivent pas la même évolution.' },
      { text: 'Une transmission précoce, moins fréquente, peut avoir des conséquences particulièrement sévères', correct: true, correction: 'Oui 🎯 Moins fréquent ne signifie pas impossible, et les atteintes précoces peuvent être graves.' },
      { text: 'Une infection tardive ne peut jamais avoir de conséquence clinique', correct: false, correction: 'Faux. La diminution globale de gravité ne supprime pas tout risque.' },
      { text: 'Une infection survenue au début de la grossesse ne peut jamais atteindre le fœtus', correct: false, correction: 'Non chef. La transmission est moins fréquente au début, mais son risque n’est pas nul.' },
    ],
    explanation: 'Le risque de transmission augmente avec l’âge gestationnel, tandis que la gravité potentielle des atteintes diminue globalement. Les transmissions précoces restent possibles et les infections tardives ne sont pas toujours sans conséquence. (Cours, p. 6 et 10–11)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Comment interpréter une infection toxoplasmique maternelle survenue tôt dans la grossesse ?',
    options: [
      { text: 'Le risque de transmission et la gravité potentielle sont tous deux maximaux uniquement en fin de grossesse', correct: false, correction: 'Non. La transmission augmente avec le terme, mais la gravité diminue globalement.' },
      { text: 'La barrière placentaire rend toute transmission définitivement impossible', correct: false, correction: 'Faux. Le risque précoce est plus faible, pas inexistant.' },
      { text: 'Le fœtus est nécessairement infecté et les lésions sont toujours bénignes', correct: false, correction: 'Non chef. La transmission n’est pas automatique et les conséquences peuvent être sévères si elle survient.' },
      { text: 'L’absence de symptômes maternels suffit à garantir l’absence de risque fœtal', correct: false, correction: 'Non chef. Une infection maternelle peut être asymptomatique sans exclure une transmission au fœtus.' },
      { text: 'La transmission est moins fréquente qu’en fin de grossesse, mais une infection fœtale précoce peut être grave', correct: true, correction: 'Oui boss 🎯 Il faut distinguer probabilité de transmission et gravité lorsque le fœtus est infecté.' },
    ],
    explanation: 'Une infection maternelle précoce n’entraîne pas systématiquement une infection fœtale. Lorsque la transmission survient tôt, les conséquences potentielles sont généralement plus sévères. (Cours, p. 6 et 11)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles manifestations néonatales sont illustrées dans le cours parmi les conséquences possibles d’une toxoplasmose congénitale ?',
    options: [
      { text: 'Une hépatosplénomégalie', correct: true, correction: 'Oui 🎯 L’augmentation du volume du foie et de la rate fait partie des manifestations présentées.' },
      { text: 'Un érythème', correct: true, correction: 'Exact. Une manifestation cutanée est également illustrée.' },
      { text: 'Une hydrocéphalie', correct: true, correction: 'Exact. Elle est explicitement illustrée sur la page du cours.' },
      { text: 'Des calcifications intracrâniennes et une dilatation ventriculaire', correct: true, correction: 'Oui boss 🧠 L’imagerie illustrée montre ces anomalies cérébrales possibles.' },
      { text: 'La présence obligatoire de toutes ces manifestations chez chaque enfant infecté', correct: false, correction: 'Non chef. Ce sont des manifestations possibles, pas un tableau complet obligatoire.' },
    ],
    explanation: 'Les illustrations du cours présentent calcifications et dilatation ventriculaire, hydrocéphalie, érythème et hépatosplénomégalie. Leur présence et leur association sont variables. (Cours, p. 7, illustrations.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Une séroconversion toxoplasmique maternelle est mise en évidence pendant la grossesse. Quelle conclusion est correcte ?',
    options: [
      { text: 'Elle indique une infection maternelle et justifie d’évaluer le risque et la présence d’une infection fœtale', correct: true, correction: 'Oui boss 🎯 Mère infectée et fœtus infecté sont deux situations à distinguer.' },
      { text: 'Elle prouve que le fœtus n’est pas infecté tant que la mère reste asymptomatique', correct: false, correction: 'Faux. Les manifestations maternelles ne suffisent pas à prédire la transmission.' },
      { text: 'Elle ne peut concerner qu’une infection ancienne sans enjeu pour la grossesse', correct: false, correction: 'Non. Une séroconversion correspond à l’apparition d’anticorps après un bilan antérieur négatif et nécessite une démarche adaptée.' },
      { text: 'Elle prouve à elle seule que le fœtus est infecté', correct: false, correction: 'Non chef. Elle établit une infection maternelle ; la transmission fœtale doit être recherchée séparément.' },
      { text: 'Elle justifie automatiquement une interruption de grossesse', correct: false, correction: 'Non chef. Elle conduit à des investigations et à une prise en charge spécialisée, pas à une décision automatique.' },
    ],
    explanation: 'Une séroconversion maternelle ne prouve pas à elle seule une transmission au fœtus. Le cours distingue l’infection maternelle de l’infection fœtale et prévoit une évaluation anténatale spécialisée. (Cours, p. 7–9 et 11)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quels examens ou éléments de surveillance sont présentés pour l’évaluation anténatale après une infection maternelle ?',
    options: [
      { text: 'Une recherche de trisomie comme test spécifique de toxoplasmose fœtale', correct: false, correction: 'Non chef. Une anomalie chromosomique et une infection parasitaire sont des diagnostics différents.' },
      { text: 'Des échographies fœtales répétées', correct: true, correction: 'Oui boss 🧠 Elles permettent une surveillance plus rapprochée des anomalies éventuelles.' },
      { text: 'Une prise en charge dans un centre spécialisé pour la démarche anténatale', correct: true, correction: 'Oui 🎯 Le cours prévoit cette orientation après une séroconversion pendant la grossesse.' },
      { text: 'Une échographie unique normale permettant de clore définitivement le bilan', correct: false, correction: 'Faux. Une échographie normale n’exclut pas à elle seule l’infection fœtale ni toutes les manifestations ultérieures.' },
      { text: 'Un prélèvement de liquide amniotique pour rechercher l’ADN parasitaire par PCR', correct: true, correction: 'Exact. La PCR sur liquide amniotique participe au diagnostic d’infection fœtale.' },
    ],
    explanation: 'La démarche anténatale comprend des échographies répétées et, selon l’évaluation spécialisée, une recherche d’ADN de T. gondii par PCR dans le liquide amniotique. (Cours, p. 7 et 9–11)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Que signifie une PCR positive pour Toxoplasma gondii dans le liquide amniotique, dans le cadre d’un diagnostic anténatal adapté ?',
    options: [
      { text: 'Elle prouve que toutes les atteintes fœtales seront nécessairement graves', correct: false, correction: 'Faux. Confirmer l’infection ne détermine pas à lui seul la gravité de ses conséquences.' },
      { text: 'Elle impose automatiquement une interruption de grossesse', correct: false, correction: 'Non chef. Les décisions dépendent d’une évaluation spécialisée, pas du seul résultat positif.' },
      { text: 'Elle apporte une preuve d’infection fœtale', correct: true, correction: 'Oui boss 🎯 La mise en évidence d’ADN parasitaire dans le liquide amniotique permet d’affirmer la transmission dans ce contexte.' },
      { text: 'Elle remplace toute évaluation clinique ou échographique ultérieure', correct: false, correction: 'Non. Le diagnostic d’infection doit être complété par l’évaluation des conséquences et le suivi.' },
      { text: 'Elle indique uniquement que la mère possède des IgG anciennes', correct: false, correction: 'Non chef. Une PCR recherche de l’ADN parasitaire ; ce n’est pas un dosage d’anticorps maternels.' },
    ],
    explanation: 'La PCR sur liquide amniotique recherche l’ADN de T. gondii. Une positivité dans une démarche adaptée affirme l’infection fœtale, sans préjuger à elle seule de sa gravité. (Cours, p. 7 et 10–11)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Concernant les limites du bilan anténatal, quelles propositions sont exactes ?',
    options: [
      { text: 'Une PCR négative sur liquide amniotique n’exclut pas absolument toute infection fœtale', correct: true, correction: 'Oui boss 🧠 Un résultat négatif doit être interprété avec les conditions du prélèvement et l’ensemble du dossier.' },
      { text: 'Une PCR négative autorise toujours à conclure que l’enfant n’aura besoin d’aucune évaluation', correct: false, correction: 'Non chef. Le suivi dépend de la situation complète, notamment du risque identifié pendant la grossesse.' },
      { text: 'Une échographie fœtale normale n’exclut pas à elle seule une toxoplasmose congénitale', correct: true, correction: 'Exact. Absence d’anomalie visible et absence d’infection ne sont pas synonymes.' },
      { text: 'Une échographie normale annule une PCR positive', correct: false, correction: 'Faux. Une infection peut être confirmée sans anomalie échographique visible au moment de l’examen.' },
      { text: 'Le diagnostic et le suivi combinent les données maternelles, les examens fœtaux et le bilan néonatal', correct: true, correction: 'Oui 🎯 Les étapes sont complémentaires ; un seul résultat ne résume pas toute la situation.' },
    ],
    explanation: 'Les examens anténataux évaluent des aspects différents : infection et conséquences visibles. Un résultat négatif ou une échographie normale ne constituent pas une exclusion absolue ; le bilan néonatal et le suivi restent adaptés au dossier. (Cours, p. 7–9 ; précision des limites diagnostiques.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quel est l’objectif principal des échographies fœtales répétées dans le suivi présenté ?',
    options: [
      { text: 'Rechercher et surveiller d’éventuelles anomalies fœtales au cours du temps', correct: true, correction: 'Oui boss 🎯 La répétition des examens permet d’évaluer l’évolution et les conséquences éventuelles.' },
      { text: 'Remplacer la recherche d’ADN parasitaire dans le liquide amniotique', correct: false, correction: 'Faux. L’échographie et la PCR fournissent des informations différentes.' },
      { text: 'Certifier définitivement l’absence d’infection dès la première image normale', correct: false, correction: 'Non. Une image normale ne prouve pas l’absence du parasite.' },
      { text: 'Déterminer automatiquement l’indication d’une interruption de grossesse à partir de toute variation anatomique', correct: false, correction: 'Non chef. Une anomalie doit être caractérisée et replacée dans une évaluation spécialisée.' },
      { text: 'Mesurer directement la quantité d’IgM produite par le fœtus', correct: false, correction: 'Non chef. Les anticorps sont étudiés par des examens biologiques, pas mesurés par l’échographie.' },
    ],
    explanation: 'Le suivi échographique recherche les conséquences fœtales éventuelles et leur évolution. Il complète la recherche d’infection sans la remplacer. (Cours, p. 7)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Une anomalie fœtale est observée après une infection toxoplasmique maternelle. Quelles propositions sont exactes ?',
    options: [
      { text: 'Une décision éventuelle relève d’une évaluation et d’une discussion spécialisées', correct: true, correction: 'Oui 🎯 La prise en charge doit être individualisée selon le dossier.' },
      { text: 'La discussion doit intégrer les données infectieuses et l’ensemble du bilan fœtal', correct: true, correction: 'Exact. L’image seule ne résume pas toute la situation.' },
      { text: 'Une infection fœtale confirmée dispense de toute recherche de conséquences cliniques', correct: false, correction: 'Faux. Il faut justement distinguer l’existence de l’infection de la gravité de ses manifestations.' },
      { text: 'La moindre anomalie entraîne obligatoirement une interruption de grossesse', correct: false, correction: 'Non chef. Le support évoque une possibilité de discussion, pas une décision automatique devant toute anomalie.' },
      { text: 'L’anomalie doit être caractérisée et sa gravité évaluée', correct: true, correction: 'Oui boss 🧠 Toute anomalie n’a pas la même signification ni le même pronostic.' },
    ],
    explanation: 'Une anomalie après infection maternelle nécessite une évaluation spécialisée de son origine, de sa gravité et du contexte. Le cours évoque une discussion possible d’interruption de grossesse ; aucune décision automatique ne doit être déduite d’une anomalie isolée. (Cours, p. 7 et 9 ; clarification de la formulation.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel est le principe du Western blot comparatif dans le bilan néonatal de toxoplasmose ?',
    options: [
      { text: 'Comparer les anomalies cérébrales de la mère et de l’enfant', correct: false, correction: 'Faux. Il s’agit d’un examen immunologique, pas d’un examen d’imagerie.' },
      { text: 'Prouver qu’aucun anticorps maternel ne peut être présent chez le nouveau-né', correct: false, correction: 'Non chef. Les IgG maternelles peuvent passer le placenta et être retrouvées chez l’enfant.' },
      { text: 'Comparer les profils d’anticorps de la mère et de l’enfant pour rechercher une synthèse propre à l’enfant', correct: true, correction: 'Oui boss 🎯 Les bandes permettent d’évaluer si l’enfant produit des anticorps différents de ceux de la mère.' },
      { text: 'Comparer uniquement la quantité de parasite dans les selles maternelles et infantiles', correct: false, correction: 'Non chef. Le test décrit compare des profils d’anticorps, pas la quantité de parasite dans les selles.' },
      { text: 'Déterminer exclusivement la présence de toxoplasme dans le liquide amniotique', correct: false, correction: 'Non. La recherche d’ADN dans le liquide amniotique correspond à la PCR anténatale.' },
    ],
    explanation: 'Le Western blot comparatif étudie les profils d’anticorps maternels et infantiles. Il aide à distinguer les anticorps transmis passivement d’une synthèse propre à l’enfant. (Cours, p. 7–8)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Comment interpréter des bandes d’anticorps spécifiques présentes chez l’enfant et absentes chez sa mère au Western blot comparatif ?',
    options: [
      { text: 'Elles permettent à elles seules de mesurer la gravité des lésions cérébrales', correct: false, correction: 'Faux. Une réponse immunologique ne mesure pas directement les conséquences anatomiques ou fonctionnelles.' },
      { text: 'Elles suggèrent une synthèse d’anticorps propre à l’enfant', correct: true, correction: 'Oui boss 🧠 Le profil ne se résume alors pas à la transmission passive des anticorps maternels.' },
      { text: 'Elles doivent être interprétées avec les autres données biologiques et cliniques', correct: true, correction: 'Oui 🎯 Le résultat comparatif participe à un bilan global.' },
      { text: 'Elles prouvent que les IgM maternelles ont traversé normalement le placenta', correct: false, correction: 'Non chef. Les IgM ne traversent pas normalement le placenta ; les IgG maternelles peuvent le faire.' },
      { text: 'Elles constituent un argument en faveur d’une infection congénitale dans le contexte adapté', correct: true, correction: 'Exact. La production d’anticorps propres indique une réponse de l’enfant au parasite.' },
    ],
    explanation: 'Des bandes propres à l’enfant suggèrent une synthèse d’anticorps infantile et soutiennent le diagnostic de toxoplasmose congénitale. L’interprétation reste associée aux autres examens du dossier. (Cours, p. 7–8)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'À la naissance, les profils d’IgG de la mère et de l’enfant sont identiques au Western blot comparatif. Quelle interprétation est la plus juste ?',
    options: [
      { text: 'Ce résultat exclut définitivement toute infection congénitale', correct: false, correction: 'Non chef. Une absence de bandes propres à cet instant ne suffit pas à exclure une synthèse plus tardive ni l’infection.' },
      { text: 'Ce résultat dispense de considérer l’histoire de la grossesse', correct: false, correction: 'Non chef. L’interprétation dépend du risque anténatal et des autres examens.' },
      { text: 'Ce résultat prouve que les IgM maternelles sont les seuls anticorps transmis', correct: false, correction: 'Non. Ce sont les IgG qui traversent normalement le placenta, pas les IgM.' },
      { text: 'Ce résultat prouve une maladie neurologique sévère chez l’enfant', correct: false, correction: 'Faux. Le profil d’anticorps ne démontre pas la présence ni la gravité d’une atteinte neurologique.' },
      { text: 'Ce résultat est compatible avec des IgG maternelles transmises passivement, sans exclure à lui seul l’infection', correct: true, correction: 'Oui boss 🎯 Profils identiques peuvent refléter les IgG maternelles ; le suivi reste nécessaire selon le dossier.' },
    ],
    explanation: 'Des profils d’IgG identiques sont compatibles avec une transmission passive des IgG maternelles. Ils ne permettent pas à eux seuls d’exclure une infection congénitale, notamment lorsque les anticorps propres à l’enfant ne sont pas encore détectables. (Cours, p. 7–8 ; précision de la limite d’interprétation.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Concernant les anticorps maternels et infantiles, quelles propositions sont exactes ?',
    options: [
      { text: 'Le suivi permet de rechercher une production infantile qui peut devenir détectable plus tard', correct: true, correction: 'Exact. Le cours justifie les contrôles par la possibilité d’une synthèse tardive.' },
      { text: 'Toutes les IgG détectées à la naissance proviennent nécessairement d’une synthèse propre à l’enfant', correct: false, correction: 'Non chef. Une partie peut provenir de la mère ; c’est précisément l’intérêt de la comparaison et du suivi.' },
      { text: 'Une IgG positive isolée chez le nouveau-né ne suffit pas toujours à affirmer l’infection congénitale', correct: true, correction: 'Oui 🎯 Elle peut correspondre à des anticorps maternels transmis passivement.' },
      { text: 'Les IgG maternelles peuvent traverser le placenta', correct: true, correction: 'Oui boss 🧠 Leur présence chez le nouveau-né ne signifie donc pas toujours une production infantile.' },
      { text: 'Les IgM maternelles ne traversent normalement pas le placenta', correct: true, correction: 'Exact. Il faut distinguer leur comportement de celui des IgG.' },
    ],
    explanation: 'Le passage placentaire des IgG peut expliquer leur présence chez le nouveau-né. Les IgM ne traversent normalement pas le placenta. La comparaison des profils et leur évolution aident à identifier une synthèse infantile. (Cours, p. 7–8 ; distinction des classes d’anticorps.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Pourquoi un bilan comparatif initial sans anticorps propres détectables chez l’enfant ne clôt-il pas nécessairement le suivi ?',
    options: [
      { text: 'Parce que la mère doit obligatoirement devenir séronégative avant qu’on puisse examiner l’enfant', correct: false, correction: 'Non. Le suivi de l’enfant ne dépend pas d’une disparition préalable des IgG maternelles chez la mère.' },
      { text: 'Parce que toute sérologie négative prouve une forme congénitale sévère', correct: false, correction: 'Faux. Un résultat négatif ne prouve pas la gravité ; il doit être interprété dans son contexte.' },
      { text: 'Parce que l’enfant ne peut produire d’anticorps qu’à partir de l’adolescence', correct: false, correction: 'Non chef. Une réponse infantile peut apparaître bien plus tôt ; l’adolescence concerne la durée possible du suivi clinique.' },
      { text: 'Parce que la synthèse d’anticorps propres peut devenir détectable plus tard', correct: true, correction: 'Oui boss 🎯 Un premier résultat négatif ne résume pas l’évolution immunologique de toute la première année.' },
      { text: 'Parce que les IgM maternelles commencent normalement à traverser le placenta après la naissance', correct: false, correction: 'Non chef. Le passage placentaire concerne les IgG et cesse avec la fin des échanges placentaires.' },
    ],
    explanation: 'Le cours prévoit une surveillance sérologique pendant la première année car les anticorps propres à l’enfant peuvent apparaître tardivement. Le bilan de naissance n’est donc pas toujours suffisant. (Cours, p. 7–9)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quel suivi est présenté pendant la première année pour un nouveau-né potentiellement infecté ?',
    options: [
      { text: 'Un suivi biologique avec des contrôles sérologiques', correct: true, correction: 'Oui boss 🧠 L’évolution des anticorps aide à préciser la situation de l’enfant.' },
      { text: 'Une surveillance uniquement maternelle sans aucun examen de l’enfant', correct: false, correction: 'Faux. Le suivi décrit concerne directement les nouveau-nés potentiellement infectés.' },
      { text: 'Une évaluation cérébrale et oculaire adaptée au risque', correct: true, correction: 'Oui 🎯 Le cours cite les échographies transfontanellaires et le fond d’œil.' },
      { text: 'Un suivi clinique complémentaire', correct: true, correction: 'Exact. Les résultats biologiques et l’état clinique sont étudiés ensemble.' },
      { text: 'L’arrêt systématique de tout contrôle après une seule sérologie de naissance rassurante', correct: false, correction: 'Non chef. Une synthèse tardive d’anticorps et des manifestations à surveiller justifient le suivi.' },
    ],
    explanation: 'Le cours prévoit un suivi biologique et clinique pendant la première année des nouveau-nés potentiellement infectés, comprenant une surveillance sérologique, cérébrale et oculaire. (Cours, p. 7–9)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Selon le cours, jusqu’à quelle période le suivi doit-il être poursuivi si la toxoplasmose congénitale est confirmée ?',
    options: [
      { text: 'Jusqu’à la sortie de maternité uniquement', correct: false, correction: 'Non chef. La surveillance dépasse largement les premiers jours de vie.' },
      { text: 'Jusqu’à l’adolescence', correct: true, correction: 'Oui boss 🎯 Le cours distingue le suivi de première année du suivi prolongé lorsqu’une infection congénitale est confirmée.' },
      { text: 'Aucun suivi après confirmation, puisque le diagnostic est déjà connu', correct: false, correction: 'Non chef. Connaître le diagnostic rend au contraire nécessaire la surveillance des conséquences éventuelles.' },
      { text: 'Seulement jusqu’à la disparition des symptômes maternels', correct: false, correction: 'Non. L’évolution maternelle ne fixe pas la durée de suivi d’une infection congénitale confirmée.' },
      { text: 'Jusqu’à la première échographie cérébrale normale, quel que soit le reste du bilan', correct: false, correction: 'Faux. Un résultat normal isolé ne remplace pas la surveillance prolongée de l’enfant infecté.' },
    ],
    explanation: 'Le cours prévoit un suivi biologique et clinique pendant la première année et précise qu’en cas de toxoplasmose congénitale confirmée, la surveillance se poursuit jusqu’à l’adolescence. (Cours, p. 9)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles associations entre examen et objectif sont exactes dans le suivi néonatal présenté ?',
    options: [
      { text: 'Échographie cérébrale transfontanellaire : recherche d’anomalies cérébrales comme une dilatation ventriculaire', correct: true, correction: 'Oui boss 🧠 Elle permet d’observer des anomalies intracrâniennes chez le nourrisson.' },
      { text: 'Fond d’œil : surveillance de la rétine', correct: true, correction: 'Exact. Le cours le cite pour l’évaluation oculaire.' },
      { text: 'Fond d’œil : mesure directe de la quantité d’ADN parasitaire dans le liquide amniotique', correct: false, correction: 'Non chef. Cette recherche d’ADN correspond à une PCR, pas à l’examen de la rétine.' },
      { text: 'Sérologie comparative : recherche d’une synthèse d’anticorps propre à l’enfant', correct: true, correction: 'Oui 🎯 Elle complète l’évaluation clinique et l’imagerie.' },
      { text: 'Échographie transfontanellaire : preuve à elle seule de la transmission passive des IgG', correct: false, correction: 'Faux. Une image cérébrale n’identifie pas l’origine des anticorps circulants.' },
    ],
    explanation: 'Le suivi associe des examens complémentaires : échographie transfontanellaire pour les anomalies cérébrales, fond d’œil pour la rétine et sérologie comparative pour la réponse immunologique infantile. (Cours, p. 7–8)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Pourquoi un fond d’œil est-il proposé dans le suivi d’un enfant potentiellement infecté ?',
    options: [
      { text: 'Pour conclure qu’une rétine normale exclut toute infection congénitale', correct: false, correction: 'Non chef. Un examen oculaire normal ne permet pas à lui seul d’exclure l’infection.' },
      { text: 'Pour confirmer directement une hydrocéphalie', correct: false, correction: 'Faux. Le suivi cérébral repose notamment sur l’imagerie transfontanellaire décrite.' },
      { text: 'Pour remplacer tous les contrôles sérologiques', correct: false, correction: 'Non. L’évaluation oculaire et la sérologie apportent des informations différentes.' },
      { text: 'Pour surveiller l’état de la rétine et rechercher une atteinte oculaire', correct: true, correction: 'Oui boss 🎯 Les conséquences oculaires font partie des cibles du suivi.' },
      { text: 'Pour déterminer si les IgG maternelles ont disparu du sérum', correct: false, correction: 'Non chef. Les anticorps sont évalués par des examens biologiques.' },
    ],
    explanation: 'Le fond d’œil est présenté pour surveiller la rétine dans le suivi néonatal. Il complète les examens biologiques et cérébraux sans permettre, à lui seul, d’exclure une infection. (Cours, p. 8)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles propositions résument correctement la démarche devant un risque de toxoplasmose congénitale ?',
    options: [
      { text: 'Distinguer la preuve d’infection maternelle de la preuve d’infection fœtale', correct: true, correction: 'Oui boss 🧠 La séroconversion maternelle ne signifie pas automatiquement une transmission.' },
      { text: 'Prévoir un suivi adapté, car un bilan initial rassurant ne suffit pas toujours à clore le dossier', correct: true, correction: 'Exact. Le cours prévoit des contrôles biologiques et cliniques, puis un suivi prolongé si l’infection est confirmée.' },
      { text: 'Éliminer définitivement l’infection dès que la mère est asymptomatique et que l’échographie est normale', correct: false, correction: 'Non chef. Ces éléments rassurants ne constituent pas une exclusion absolue de transmission ou d’infection congénitale.' },
      { text: 'Associer recherche d’infection et évaluation des conséquences cliniques', correct: true, correction: 'Exact. Présence du parasite et gravité des lésions répondent à deux questions différentes.' },
      { text: 'Interpréter les examens néonataux en tenant compte du passage des IgG maternelles', correct: true, correction: 'Oui 🎯 Une IgG présente chez l’enfant peut avoir été transmise passivement.' },
    ],
    explanation: 'La démarche combine données maternelles, examens anténataux, bilan néonatal et suivi. L’interprétation distingue infection, gravité et origine des anticorps, sans conclure à partir d’un seul résultat rassurant. (Cours, p. 6–9 et 11)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel médicament est cité dans le cours lors d’une séroconversion maternelle sans preuve d’infection fœtale ?',
    options: [
      { text: 'La spiramycine', correct: true, correction: 'Oui boss 🎯 Le support la cite dans cette situation, avec une prise en charge spécialisée.' },
      { text: 'Une corticothérapie isolée remplaçant l’antiparasitaire', correct: false, correction: 'Non. Ce traitement n’est pas celui présenté dans le support.' },
      { text: 'Un antiviral spécifique de Toxoplasma gondii', correct: false, correction: 'Non chef. Toxoplasma gondii est un protozoaire, pas un virus.' },
      { text: 'La pyriméthamine seule, dans tous les cas', correct: false, correction: 'Non chef. Le cours distingue la spiramycine de l’association proposée lorsque l’infection fœtale est documentée.' },
      { text: 'La sulfadoxine seule', correct: false, correction: 'Faux. Ce n’est pas le schéma cité pour une séroconversion sans preuve d’infection fœtale.' },
    ],
    explanation: 'Le cours cite la spiramycine lors d’une séroconversion maternelle sans preuve d’infection fœtale. L’objectif est de réduire le risque de transmission, avec orientation vers un centre spécialisé. (Cours, p. 8–9 et 11)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles propositions décrivent la prise en charge d’une séroconversion toxoplasmique pendant la grossesse dans le cours ?',
    options: [
      { text: 'L’absence de symptômes maternels rend toute évaluation fœtale inutile', correct: false, correction: 'Faux. Une infection maternelle peut être asymptomatique et exposer le fœtus.' },
      { text: 'Une recherche d’infection fœtale peut être proposée', correct: true, correction: 'Oui. La PCR du liquide amniotique recherche directement l’ADN du parasite.' },
      { text: 'Elle justifie une orientation vers un centre spécialisé', correct: true, correction: 'Oui boss 🧠 Le centre organise notamment le diagnostic anténatal.' },
      { text: 'La spiramycine peut être utilisée dans le schéma présenté, en l’absence de preuve d’infection fœtale', correct: true, correction: 'Exact. C’est la distinction thérapeutique enseignée.' },
      { text: 'Le traitement maternel prouve à lui seul que le fœtus était infecté', correct: false, correction: 'Non chef. La décision de traiter la mère et la démonstration d’une infection fœtale sont deux notions distinctes.' },
    ],
    explanation: 'La prise en charge associe traitement dans le cadre spécialisé, recherche d’une éventuelle transmission et surveillance fœtale. Une séroconversion maternelle ne prouve pas la contamination du fœtus. (Cours, p. 7–9)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quelle association est expressément citée par la ronéo lorsque la transmission in utero est prouvée ?',
    options: [
      { text: 'Spiramycine et antiviral', correct: false, correction: 'Non chef. Ce n’est pas l’association décrite pour l’infection fœtale.' },
      { text: 'Pyriméthamine seule', correct: false, correction: 'Non. Le support cite une association avec un sulfamide, et non cette molécule seule.' },
      { text: 'Sulfadoxine seule', correct: false, correction: 'Non chef. Le partenaire antiparasitaire cité est la pyriméthamine.' },
      { text: 'Sulfadoxine et pyriméthamine', correct: true, correction: 'Oui boss 🎯 Ce sont les deux molécules nommées dans le support.' },
      { text: 'Spiramycine seule dans toutes les situations', correct: false, correction: 'Faux. Le cours distingue ce schéma de celui proposé après preuve d’infection fœtale.' },
    ],
    explanation: 'Le support nomme sulfadoxine + pyriméthamine en cas d’infection fœtale documentée. Des protocoles utilisent d’autres sulfamides, notamment la sulfadiazine ; les schémas réels et leur surveillance relèvent de l’équipe spécialisée. (Cours, p. 8 et 10–11)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quels objectifs et suites du traitement sont décrits dans le cours ?',
    options: [
      { text: 'Garantir qu’aucune atteinte ne pourra jamais apparaître chez l’enfant', correct: false, correction: 'Faux. Le traitement ne permet pas de supprimer la nécessité d’un suivi.' },
      { text: 'Remplacer tout suivi échographique et néonatal par la seule prise d’un médicament', correct: false, correction: 'Non chef. Le traitement et la surveillance sont complémentaires.' },
      { text: 'Réduire le risque de transmission dans la situation maternelle sans infection fœtale démontrée', correct: true, correction: 'Oui boss. C’est l’objectif attribué à la spiramycine.' },
      { text: 'Poursuivre la prise en charge après la naissance en cas de toxoplasmose congénitale', correct: true, correction: 'Oui 🧠 Le cours décrit une poursuite du traitement et du suivi.' },
      { text: 'Agir sur le parasite lorsque l’infection fœtale est documentée', correct: true, correction: 'Exact. Le schéma thérapeutique tient compte de la transmission in utero.' },
    ],
    explanation: 'Les objectifs dépendent du statut fœtal : prévention de la transmission ou traitement de l’infection documentée. La prise en charge d’une toxoplasmose congénitale se poursuit après la naissance. (Cours, p. 8–9)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Comment faut-il comprendre l’objectif de la spiramycine dans le schéma du cours ?',
    options: [
      { text: 'Réduire le risque de transmission materno-fœtale par une action anti-infectieuse', correct: true, correction: 'Oui boss 🧠 Il s’agit d’un objectif thérapeutique, pas d’une transformation mécanique du placenta.' },
      { text: 'Produire des IgG maternelles artificielles détectées par la sérologie', correct: false, correction: 'Faux. Les IgG sont produites par les plasmocytes ; le médicament n’est pas un anticorps.' },
      { text: 'Épaissir physiquement le placenta afin de le rendre imperméable', correct: false, correction: 'Non chef. « Renforcer la barrière » est une formulation simplifiée, pas un épaississement anatomique.' },
      { text: 'Remplacer la PCR du liquide amniotique pour démontrer une infection fœtale', correct: false, correction: 'Non. Un traitement n’est pas un test diagnostique.' },
      { text: 'Permettre l’arrêt définitif de toute surveillance de l’enfant', correct: false, correction: 'Non chef. Le suivi dépend du contexte maternel et du bilan de l’enfant.' },
    ],
    explanation: 'La spiramycine est présentée pour réduire la transmission. L’expression « renforce la barrière placentaire » ne signifie pas que le médicament épaissit le placenta ni qu’il garantit une protection complète. (Cours, p. 8–9 et 11)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles propositions concernant traitement et surveillance sont exactes dans le support ?',
    options: [
      { text: 'Les traitements décrits dispensent de rechercher des atteintes rétiniennes', correct: false, correction: 'Non chef. Le fond d’œil fait partie du suivi clinique cité.' },
      { text: 'Un enfant atteint de toxoplasmose congénitale nécessite une surveillance même après la naissance', correct: true, correction: 'Oui. La surveillance clinique et biologique reste nécessaire.' },
      { text: 'Le schéma maternel sans preuve d’infection fœtale est distingué du schéma d’infection fœtale documentée', correct: true, correction: 'Oui boss 🎯 Le statut du fœtus guide la distinction présentée.' },
      { text: 'La spiramycine est présentée comme poursuivie jusqu’à l’accouchement dans la situation décrite', correct: true, correction: 'Exact. C’est la durée indiquée dans cette partie du cours.' },
      { text: 'Toute séropositivité maternelle ancienne impose automatiquement le même traitement qu’une séroconversion pendant la grossesse', correct: false, correction: 'Faux. Il faut distinguer infection ancienne, infection récente et éventuelle atteinte fœtale.' },
    ],
    explanation: 'La ronéo oppose la séroconversion sans preuve d’infection fœtale à l’infection fœtale documentée. Les traitements cités s’inscrivent dans un suivi spécialisé qui ne s’arrête pas automatiquement à l’accouchement. (Cours, p. 8–9)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'À 12 SA, une femme enceinte a des IgG et IgM anti-toxoplasme négatives et aucun antécédent documenté d’immunité. Quelle stratégie correspond au cours français ?',
    options: [
      { text: 'Arrêter le suivi puisque le bilan actuel est négatif', correct: false, correction: 'Non chef. Ce statut justifie précisément une surveillance au cours de la grossesse.' },
      { text: 'Considérer qu’une absence d’anticorps signifie une protection acquise', correct: false, correction: 'Non chef. La séronégativité n’est pas une preuve de protection.' },
      { text: 'Remplacer le suivi par une seule sérologie lors de la grossesse suivante', correct: false, correction: 'Non. Le suivi décrit concerne la grossesse en cours.' },
      { text: 'Affirmer une toxoplasmose congénitale et traiter le fœtus sans autre examen', correct: false, correction: 'Faux. Aucun de ces résultats ne démontre une infection fœtale.' },
      { text: 'Proposer une surveillance sérologique mensuelle et des mesures de prévention', correct: true, correction: 'Oui boss 🎯 La patiente est séronégative dans le bilan et reste exposée à une contamination.' },
    ],
    explanation: 'Le bilan négatif conduit au suivi mensuel des femmes non immunisées et aux mesures de prévention. Il décrit l’absence d’anticorps détectables au moment du prélèvement. (Cours, p. 2–5 et 11)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles mesures appartiennent aux différentes étapes de prévention, diagnostic et suivi du cours ?',
    options: [
      { text: 'La PCR du liquide amniotique recherche l’ADN du parasite pour évaluer une transmission fœtale', correct: true, correction: 'Oui 🧠 C’est une approche directe, distincte de la sérologie.' },
      { text: 'Ces quatre démarches sont interchangeables et apportent exactement la même information', correct: false, correction: 'Non chef. Elles répondent à des questions différentes : prévenir, détecter l’infection maternelle, rechercher une transmission et surveiller ses conséquences.' },
      { text: 'Le fond d’œil participe à la recherche d’atteintes oculaires chez l’enfant', correct: true, correction: 'Exact. Il complète les explorations neurologiques et biologiques.' },
      { text: 'La cuisson de la viande participe à prévenir la contamination maternelle', correct: true, correction: 'Oui boss. Elle réduit une voie de contamination orale.' },
      { text: 'La sérologie maternelle suit l’apparition d’anticorps spécifiques', correct: true, correction: 'Exact. Elle constitue un diagnostic indirect.' },
    ],
    explanation: 'Chaque démarche répond à une étape différente. Une mesure de prévention n’est pas un diagnostic et une sérologie maternelle ne remplace pas un bilan fœtal ou néonatal. (Cours, p. 5 et 7–9)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Une séroconversion maternelle est suivie d’une PCR positive à Toxoplasma gondii dans le liquide amniotique. Quelle interprétation guide le schéma thérapeutique présenté ?',
    options: [
      { text: 'La PCR positive mesure uniquement les IgG maternelles traversant le placenta', correct: false, correction: 'Non chef. La PCR recherche l’ADN du parasite, pas les anticorps.' },
      { text: 'La PCR prouve nécessairement une malformation fœtale sévère', correct: false, correction: 'Non. Infection et gravité des lésions sont deux questions distinctes.' },
      { text: 'Une infection fœtale est documentée, justifiant le schéma spécialisé dirigé contre le parasite chez le fœtus', correct: true, correction: 'Oui boss 🧠 Le résultat direct apporte une information différente de la sérologie maternelle.' },
      { text: 'La PCR suffit à dater exactement la contamination maternelle', correct: false, correction: 'Faux. La détection d’ADN dans le liquide amniotique ne fixe pas à elle seule la date de l’infection maternelle.' },
      { text: 'Un bilan maternel positif empêche d’interpréter toute PCR amniotique', correct: false, correction: 'Non chef. Le prélèvement amniotique sert justement à évaluer la transmission.' },
    ],
    explanation: 'La PCR amniotique positive documente une infection fœtale dans ce contexte. La surveillance morphologique et la prise en charge spécialisée restent nécessaires pour apprécier les conséquences. (Cours, p. 7–8 et 11)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles affirmations évitent de confondre risque, infection et gravité ?',
    options: [
      { text: 'Une infection fœtale documentée ne signifie pas que toutes les atteintes illustrées seront présentes', correct: true, correction: 'Oui 🧠 Le tableau clinique peut varier.' },
      { text: 'Une exposition à de la viande contaminée n’est pas à elle seule une preuve biologique d’infection', correct: true, correction: 'Oui boss. Elle représente une circonstance de risque.' },
      { text: 'Une transmission plus fréquente en fin de grossesse implique des lésions toujours plus graves', correct: false, correction: 'Faux. Le cours décrit globalement une relation inverse entre transmission et gravité.' },
      { text: 'Une infection maternelle ne démontre pas automatiquement une infection fœtale', correct: true, correction: 'Exact. La transmission doit être recherchée séparément.' },
      { text: 'Un risque de transmission plus faible en début de grossesse signifie un risque strictement nul', correct: false, correction: 'Non chef. Faible ne veut pas dire absent.' },
    ],
    explanation: 'Le raisonnement distingue exposition, infection maternelle, infection fœtale et conséquences cliniques. L’évolution des risques avec le terme ne permet pas d’affirmer une absence complète de risque. (Cours, p. 5–7 et 11)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Une femme enceinte fait une séroconversion sans syndrome pseudo-grippal. Quelle conclusion est correcte ?',
    options: [
      { text: 'La séroconversion nécessite une prise en charge et une évaluation de la transmission malgré l’absence de symptômes', correct: true, correction: 'Oui boss 🎯 La clinique maternelle rassurante ne remplace pas le bilan fœtal.' },
      { text: 'La grossesse doit toujours être interrompue immédiatement', correct: false, correction: 'Non. La prise en charge repose sur une évaluation spécialisée, pas sur une décision automatique.' },
      { text: 'Le fœtus est nécessairement infecté puisque la mère ne présente aucun symptôme', correct: false, correction: 'Non chef. Ni présence ni absence de symptômes ne suffisent à prouver la transmission.' },
      { text: 'L’absence de symptômes suffit à exclure toute transmission fœtale', correct: false, correction: 'Non chef. La toxoplasmose est souvent asymptomatique chez l’immunocompétent.' },
      { text: 'Le bilan doit être ignoré car seuls les symptômes permettent un diagnostic', correct: false, correction: 'Faux. La sérologie permet de détecter une infection sans symptômes.' },
    ],
    explanation: 'Une infection maternelle asymptomatique peut exposer le fœtus. La séroconversion justifie la prise en charge décrite dans le cours indépendamment d’un syndrome pseudo-grippal. (Cours, p. 6–9)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Pourquoi le suivi d’un enfant potentiellement infecté reste-t-il nécessaire après un premier examen rassurant ?',
    options: [
      { text: 'Le suivi clinique complète le bilan biologique', correct: true, correction: 'Exact. Les explorations cérébrales et le fond d’œil n’ont pas la même cible que la sérologie.' },
      { text: 'Des anticorps propres à l’enfant peuvent apparaître tardivement', correct: true, correction: 'Oui boss. C’est une justification donnée pour répéter la surveillance biologique.' },
      { text: 'Les IgG détectées chez l’enfant sont obligatoirement synthétisées par lui', correct: false, correction: 'Non chef. Elles peuvent provenir de la mère par transfert transplacentaire ; il faut interpréter leur évolution et les profils comparatifs.' },
      { text: 'L’absence d’IgM au premier prélèvement exclut définitivement une infection congénitale', correct: false, correction: 'Faux. Un premier bilan négatif ne permet pas toujours cette conclusion.' },
      { text: 'Des résultats identiques entre mère et enfant lors d’un seul immunoblot ne suffisent pas à interrompre tout suivi', correct: true, correction: 'Oui 🧠 Un profil compatible avec des IgG maternelles doit être interprété avec les contrôles ultérieurs.' },
    ],
    explanation: 'La ronéo prévoit une surveillance biologique et clinique au cours de la première année. Le diagnostic néonatal peut nécessiter des contrôles : un résultat initial rassurant ne remplace pas l’évaluation dans le temps. (Cours, p. 7–9)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Un patient immunodéprimé présente des céphalées persistantes, sans fièvre, et des IgG anti-toxoplasme déjà connues. Quelle conclusion est la plus juste ?',
    options: [
      { text: 'La toxoplasmose ne peut concerner que les ganglions cervicaux chez ce patient', correct: false, correction: 'Non chef. Des atteintes cérébrales, oculaires ou disséminées peuvent survenir.' },
      { text: 'La toxoplasmose doit être envisagée et évaluée dans ce contexte, sans conclure sur les seules IgG', correct: true, correction: 'Oui boss 🧠 Le contexte clinique et immunitaire guide des investigations adaptées.' },
      { text: 'L’absence de fièvre exclut la toxoplasmose', correct: false, correction: 'Non chef. Le cours demande de l’envisager avec ou sans fièvre.' },
      { text: 'La présence d’IgG empêche toute réactivation parasitaire', correct: false, correction: 'Non. Une immunodépression peut permettre la réactivation d’une infection latente.' },
      { text: 'Les IgG anciennes prouvent que les céphalées sont toxoplasmiques', correct: false, correction: 'Faux. Un contact antérieur ne suffit pas à identifier la cause des symptômes actuels.' },
    ],
    explanation: 'Chez l’immunodéprimé, des céphalées persistantes justifient d’envisager la toxoplasmose même sans fièvre. Une sérologie témoignant d’un contact passé ne prouve pas à elle seule l’origine des symptômes. (Cours, p. 4, 6 et 9)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles situations justifient une attention particulière dans le parcours décrit ?',
    options: [
      { text: 'Une toxoplasmose congénitale confirmée, même si l’enfant va bien au premier examen', correct: true, correction: 'Exact. Le cours prévoit un suivi prolongé en cas de confirmation.' },
      { text: 'Un nouveau-né dont la mère a fait une séroconversion pendant la grossesse', correct: true, correction: 'Oui 🧠 Il nécessite un bilan et un suivi adaptés au risque de contamination.' },
      { text: 'Des céphalées persistantes chez un immunodéprimé', correct: true, correction: 'Exact. Le cours rappelle que la fièvre peut être absente.' },
      { text: 'Un simple contact social avec une personne séropositive constitue toujours une contamination certaine', correct: false, correction: 'Non chef. La séropositivité ne signifie pas une transmission par les interactions sociales ordinaires.' },
      { text: 'Une séroconversion chez une femme enceinte', correct: true, correction: 'Oui boss. Elle justifie une prise en charge spécialisée et l’évaluation du risque fœtal.' },
    ],
    explanation: 'La grossesse, l’immunodépression et la suspicion d’infection congénitale sont les contextes centraux du cours. La surveillance dépend du contexte et des résultats, pas du seul aspect clinique initial. (Cours, p. 5–9)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Une future mère séronégative reçoit des conseils de prévention. Quel message synthétise correctement leur utilité ?',
    options: [
      { text: 'Ils réduisent les occasions de contamination sans remplacer la surveillance prévue', correct: true, correction: 'Oui boss 🎯 Cuisson, hygiène et gants diminuent les expositions ; ils ne prouvent pas l’absence d’infection.' },
      { text: 'Ils traitent une infection fœtale déjà démontrée par PCR', correct: false, correction: 'Non. Réduire les expositions n’est pas traiter une infection établie.' },
      { text: 'Ils rendent les contrôles sérologiques mensuels inutiles', correct: false, correction: 'Non chef. Prévention et dépistage sont complémentaires.' },
      { text: 'Ils garantissent un risque de transmission exactement nul', correct: false, correction: 'Non chef. Une réduction du risque n’est pas une garantie absolue.' },
      { text: 'Ils suffisent à rendre les IgG positives en quelques jours', correct: false, correction: 'Faux. Une mesure d’hygiène n’induit pas de séroconversion.' },
    ],
    explanation: 'Les mesures de prévention réduisent les expositions orales. Elles s’associent à la surveillance mensuelle chez la femme non immunisée, sans remplacer les démarches diagnostiques en cas de suspicion. (Cours, p. 5 et 8–9)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles affirmations résument correctement la logique du cours ?',
    options: [
      { text: 'La toxoplasmose est une infection parasitaire pouvant être silencieuse chez l’immunocompétent', correct: true, correction: 'Oui boss 🧠 L’absence de symptômes ne suffit donc pas à exclure un contact.' },
      { text: 'L’immunodépression et l’infection congénitale constituent des contextes de gravité particulière', correct: true, correction: 'Oui. Ces populations sont au centre des complications décrites.' },
      { text: 'Une IgM positive isolée permet de déterminer la date exacte d’infection et la gravité de l’atteinte fœtale', correct: false, correction: 'Non chef. Ce résultat doit être confirmé et interprété avec les autres données ; il ne prouve ni date exacte ni infection fœtale.' },
      { text: 'Le traitement et le suivi sont adaptés au contexte et au statut d’infection', correct: true, correction: 'Exact 🎯 Prévention, diagnostic et surveillance restent complémentaires.' },
      { text: 'La sérologie maternelle et la PCR amniotique renseignent sur des étapes différentes', correct: true, correction: 'Exact. Infection maternelle et transmission fœtale doivent être distinguées.' },
    ],
    explanation: 'Le cours articule prévention, diagnostic de l’infection maternelle, recherche d’une transmission, traitement et surveillance. Il faut distinguer les résultats biologiques des conséquences cliniques et éviter les conclusions absolues sur un test isolé. (Cours, p. 2–9)'
  },
]
