export const meta = {
  title: 'Leucocytes',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle description du noyau d’un polynucléaire neutrophile mature est correcte ?',
    options: [
      { text: 'Il possède habituellement un noyau rond à chromatine fine et plusieurs nucléoles visibles', correct: false, correction: 'Non. Ce profil évoque un précurseur immature, pas le PNN mature.' },
      { text: 'Il possède un seul noyau polylobé, dont les lobes restent reliés par de fins ponts de chromatine', correct: true, correction: 'Oui boss 🧠 Il s’agit d’une segmentation d’un noyau unique, pas de plusieurs noyaux séparés.' },
      { text: 'Il possède plusieurs noyaux indépendants, un par lobe', correct: false, correction: 'Non chef. Le nom peut tromper : les lobes appartiennent à un seul noyau.' },
      { text: 'Ses lobes proviennent d’une fragmentation physique du noyau en organites autonomes', correct: false, correction: 'Non chef. La lobulation ne rompt pas le noyau en plusieurs noyaux autonomes.' },
      { text: 'Il a expulsé son noyau lors de la maturation', correct: false, correction: 'Faux. Le PNN conserve un noyau ; tu confonds avec une autre lignée sanguine.' },
    ],
    explanation: 'Les granulocytes dits polynucléaires possèdent un seul noyau lobulé. Chez le PNN mature, le cours décrit habituellement deux à cinq lobes, reliés par de fins ponts de chromatine. La formulation fragmentation du noyau dans une correction doit être comprise comme une lobulation, sans séparation physique en plusieurs noyaux. (Cours, p. 2–3 et 32)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les grandes catégories de leucocytes du cours ?',
    options: [
      { text: 'Les monocytes et les lymphocytes appartiennent aux cellules mononucléées', correct: true, correction: 'Oui boss. Le cours les oppose ici aux granulocytes à noyau lobulé.' },
      { text: 'Les neutrophiles, éosinophiles et basophiles appartiennent aux polynucléaires', correct: true, correction: 'Exact 🧠 Ce sont les trois catégories de granulocytes présentées.' },
      { text: 'Les neutrophiles sont normalement les plus nombreux des trois types de polynucléaires sanguins', correct: true, correction: 'Exact. Le cours insiste sur leur prédominance quantitative habituelle.' },
      { text: 'Les lymphocytes sont les précurseurs immédiats des neutrophiles matures', correct: false, correction: 'Non chef. La lignée neutrophile passe par des précurseurs myéloïdes, pas par le lymphocyte mature.' },
      { text: 'Le classement polynucléaire signifie que chaque cellule contient plusieurs noyaux indépendants', correct: false, correction: 'Faux. Un seul noyau est lobulé ; le nom historique ne décrit pas plusieurs noyaux séparés.' },
    ],
    explanation: 'Le cours distingue trois types de polynucléaires — neutrophiles, éosinophiles et basophiles — et deux catégories mononucléées — monocytes et lymphocytes. Les PNN sont habituellement les plus nombreux des granulocytes sanguins. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel enchaînement respecte le modèle de différenciation neutrophile présenté dans le cours, depuis les progéniteurs jusqu’aux précurseurs ?',
    options: [
      { text: 'Myéloblaste → CFU-G → CFU-GM → CFU-GEMM', correct: false, correction: 'Non. Le myéloblaste est un précurseur situé après ces progéniteurs dans le modèle.' },
      { text: 'CFU-GEMM → CFU-GM → CFU-G → myéloblaste', correct: true, correction: 'Oui boss 🎯 Le potentiel devient progressivement plus restreint avant l’apparition des précurseurs reconnaissables.' },
      { text: 'CFU-GM → lymphocyte → myélocyte → neutrophile', correct: false, correction: 'Non chef. Le lymphocyte n’est pas un stade intermédiaire de la granulopoïèse neutrophile.' },
      { text: 'CFU-G → CFU-GM → CFU-GEMM → myéloblaste', correct: false, correction: 'Non chef. Tu inverses la restriction progressive des possibilités de différenciation.' },
      { text: 'CFU-GEMM → CFU-G → CFU-GM → myéloblaste', correct: false, correction: 'Faux. Dans le schéma du cours, CFU-GM précède le progéniteur spécialisé CFU-G.' },
    ],
    explanation: 'Le modèle du cours ordonne CFU-GEMM, CFU-GM puis CFU-G avant le myéloblaste. CFU-GEMM est un progéniteur multilignée ; CFU-GM conserve un potentiel granulocytaire et monocytaire, tandis que CFU-G est plus spécialisé. (Cours, p. 2 et 31)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Concernant les progéniteurs CFU de la granulopoïèse, quelles propositions sont exactes ?',
    options: [
      { text: 'CFU-G est plus restreint vers la lignée granulocytaire neutrophile dans le schéma du cours', correct: true, correction: 'Oui. Il se situe après CFU-GM et avant les précurseurs de la lignée.' },
      { text: 'CFU-GM conserve un potentiel granulocytaire et monocytaire', correct: true, correction: 'Exact. GM renvoie à la composante granulo-monocytaire du progéniteur.' },
      { text: 'CFU-GM est totipotent et peut former tous les tissus de l’organisme', correct: false, correction: 'Non chef. C’est un progéniteur hématopoïétique déjà engagé, avec des possibilités restreintes.' },
      { text: 'CFU-GM et CFU-GEMM désignent exactement le même potentiel multilignée', correct: false, correction: 'Faux. CFU-GEMM possède des possibilités plus larges ; CFU-GM conserve les composantes granulocytaire et monocytaire.' },
      { text: 'CFU signifie colony-forming unit, en référence à la capacité de former une colonie en culture', correct: true, correction: 'Oui boss 🧠 Forming, pas formule : l’appellation vient du résultat d’un essai de culture.' },
    ],
    explanation: 'CFU désigne une unité capable de former une colonie. La succession des CFU traduit une restriction du potentiel de différenciation. La correction de classement de la seconde partie distingue bien le progéniteur multilignée CFU-GEMM du progéniteur granulo-monocytaire CFU-GM. (Cours, p. 2 et 31 ; terminologie rectifiée)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quel est le premier précurseur de la lignée granulocytaire reconnaissable morphologiquement au microscope dans le cours ?',
    options: [
      { text: 'La CFU-GM', correct: false, correction: 'Faux. Les progéniteurs CFU sont notamment étudiés par culture et par leurs marqueurs.' },
      { text: 'Le métamyélocyte', correct: false, correction: 'Non chef. Ce stade est plus tardif et appartient déjà au compartiment de maturation sans division.' },
      { text: 'La CFU-GEMM', correct: false, correction: 'Non chef. Ce progéniteur n’est pas identifié par la seule morphologie comme le premier précurseur visible de la lignée.' },
      { text: 'Le myéloblaste', correct: true, correction: 'Oui boss 🎯 C’est le premier stade précurseur morphologiquement identifiable dans la séquence présentée.' },
      { text: 'Le myélocyte', correct: false, correction: 'Non. Le myélocyte est reconnaissable, mais il vient après le myéloblaste et le promyélocyte.' },
    ],
    explanation: 'Le myéloblaste est le premier précurseur identifiable par sa morphologie dans la lignée décrite. Les progéniteurs qui le précèdent sont notamment caractérisés par leurs marqueurs et leur comportement en culture. (Cours, p. 2–3 et 32)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles affirmations concernant l’étude des progéniteurs et les marqueurs de différenciation sont exactes ?',
    options: [
      { text: 'Une coloration morphologique ordinaire donne nécessairement la même information qu’un profil de marqueurs en cytométrie', correct: false, correction: 'Faux. Morphologie, immunophénotype et culture sont des approches complémentaires, pas des résultats interchangeables.' },
      { text: 'La cytométrie en flux peut étudier des marqueurs exprimés par des populations de progéniteurs', correct: true, correction: 'Exact 🧠 Elle permet de caractériser des populations que la morphologie seule ne suffit pas à distinguer.' },
      { text: 'CD13 et CD33 prouvent à eux seuls qu’une cellule est obligatoirement un progéniteur très immature', correct: false, correction: 'Non chef. Ces marqueurs myéloïdes peuvent persister au cours de la maturation ; ils ne constituent pas des étiquettes rigides d’immaturité.' },
      { text: 'La culture et l’observation des colonies renseignent sur le potentiel de différenciation', correct: true, correction: 'Oui boss. La culture évalue un comportement fonctionnel, différent d’une simple observation de forme cellulaire.' },
      { text: 'La MPO est un marqueur intracytoplasmique, qui n’est pas réservé aux seuls neutrophiles matures', correct: true, correction: 'Exact. La myéloperoxydase est présente dès des stades précoces de différenciation myéloïde ; sa présence seule ne prouve pas une maturité terminale.' },
    ],
    explanation: 'Les CFU sont étudiés par culture et par cytométrie. Les marqueurs doivent être interprétés comme un profil : CD13 ou CD33 ne sont pas exclusivement associés à l’immaturité, et la MPO intracytoplasmique apparaît avant le stade mature. (Cours, p. 2–3 ; interprétation des marqueurs précisée)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'À partir de quel stade les divisions cessent-elles dans la séquence de granulopoïèse neutrophile présentée ?',
    options: [
      { text: 'Après une dernière mitose de chaque métamyélocyte donnant directement deux PNN', correct: false, correction: 'Non chef. Cette dernière mitose est précisément le piège : le métamyélocyte ne se divise plus.' },
      { text: 'Dès CFU-GEMM, avant tous les précurseurs', correct: false, correction: 'Non chef. Des divisions ont encore lieu dans les stades précoces et le compartiment mitotique.' },
      { text: 'Dès le myéloblaste', correct: false, correction: 'Faux. Le myéloblaste appartient au compartiment prolifératif.' },
      { text: 'Au stade de métamyélocyte', correct: true, correction: 'Oui boss 🧠 Le métamyélocyte ne se divise plus ; il poursuit sa maturation.' },
      { text: 'Seulement après l’entrée du PNN mature dans le sang', correct: false, correction: 'Non. L’arrêt des divisions survient plus tôt dans la moelle, au stade métamyélocyte.' },
    ],
    explanation: 'Myéloblastes, promyélocytes et myélocytes constituent le compartiment prolifératif. À partir du métamyélocyte, la maturation se poursuit sans division, avec notamment une évolution de la forme nucléaire. (Cours, p. 2–3, 5 et 32)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quels éléments correspondent à la morphologie immature du myéloblaste décrite dans le cours ?',
    options: [
      { text: 'Un noyau habituellement segmenté en trois à quatre lobes', correct: false, correction: 'Non chef. Ce profil nucléaire correspond au PNN mature, pas au myéloblaste.' },
      { text: 'Une chromatine fine', correct: true, correction: 'Oui boss. La condensation marquée de la chromatine accompagne les stades plus matures.' },
      { text: 'Un noyau rond ou ovalaire', correct: true, correction: 'Exact 🧠 Le noyau n’a pas encore l’aspect segmenté du neutrophile mature.' },
      { text: 'Une abondance de granulations secondaires spécifiques', correct: false, correction: 'Faux. Le myéloblaste possède peu ou pas de granulations visibles ; les secondaires spécifiques apparaissent au stade myélocyte.' },
      { text: 'Des nucléoles visibles et un cytoplasme basophile', correct: true, correction: 'Exact. Ce sont des éléments d’immaturité mentionnés dans le support.' },
    ],
    explanation: 'Le myéloblaste possède un noyau rond ou ovalaire à chromatine fine, avec des nucléoles et un cytoplasme basophile. Ces traits doivent être distingués de la condensation et de la segmentation nucléaire des cellules matures. (Cours, p. 3)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quel stade est caractérisé par une synthèse importante de granulations primaires azurophiles dans la granulopoïèse neutrophile ?',
    options: [
      { text: 'La CFU-GEMM, identifiable au microscope par de nombreuses granulations azurophiles', correct: false, correction: 'Non chef. Le progéniteur CFU-GEMM n’est pas le stade morphologique granuleux caractéristique demandé.' },
      { text: 'Le myélocyte, qui ne produit encore aucune granulation spécifique', correct: false, correction: 'Non chef. Le myélocyte marque au contraire l’apparition des granulations secondaires spécifiques.' },
      { text: 'Le métamyélocyte, premier stade de synthèse de toutes les granulations', correct: false, correction: 'Faux. Les granulations primaires et secondaires sont déjà produites avant ce stade.' },
      { text: 'Le promyélocyte', correct: true, correction: 'Oui boss 🎯 Le promyélocyte est le stade caractéristique des granulations primaires azurophiles.' },
      { text: 'Le PNN mature, seul stade possédant des granulations primaires', correct: false, correction: 'Non. Le PNN conserve des granulations formées pendant la maturation ; leur production commence bien avant lui.' },
    ],
    explanation: 'Les granulations primaires azurophiles sont caractéristiques du promyélocyte, puis les granulations secondaires apparaissent au stade myélocyte. L’association promyélocyte–granulations secondaires donnée dans certaines lignes du support est une inversion à corriger. (Cours, p. 3–4 et 32 ; ordre des granulations rectifié)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles propositions sur l’apparition des granulations au cours de la maturation sont exactes ?',
    options: [
      { text: 'Toutes les granulations présentes dans un PNN mature sont synthétisées seulement après son passage dans le sang', correct: false, correction: 'Non chef. Une grande partie de leur production se déroule pendant la maturation médullaire.' },
      { text: 'Les granulations secondaires spécifiques apparaissent au stade myélocyte', correct: true, correction: 'Oui boss. Il faut distinguer ce stade du promyélocyte et de ses granulations primaires.' },
      { text: 'Les granulations tertiaires sont produites à des stades plus tardifs, notamment lors de la maturation métamyélocytaire', correct: true, correction: 'Exact. Leur apparition tardive ne signifie pas que toutes les granulations commencent à ce stade.' },
      { text: 'Les granulations primaires azurophiles caractérisent le stade promyélocyte', correct: true, correction: 'Exact 🧠 C’est le premier grand ensemble de granulations de la maturation.' },
      { text: 'L’apparition de granulations tertiaires impose la reprise des divisions du métamyélocyte', correct: false, correction: 'Faux. La maturation cytoplasmique peut se poursuivre sans division cellulaire.' },
    ],
    explanation: 'La formation des granulations est successive : primaires au stade promyélocyte, secondaires au stade myélocyte, puis tertiaires à des stades plus tardifs. Le PNN mature contient des granulations produites pendant cette maturation. (Cours, p. 3–4 et 32 ; ordre des granulations rectifié)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle évolution générale accompagne la maturation neutrophile, des précurseurs immatures vers le PNN ?',
    options: [
      { text: 'Le cytoplasme devient globalement plus basophile jusqu’au PNN mature', correct: false, correction: 'Faux. La basophilie diminue globalement, avec un cytoplasme plus rosé aux stades matures.' },
      { text: 'La chromatine se condense et le cytoplasme devient globalement moins basophile', correct: true, correction: 'Oui boss 🧠 C’est l’évolution à retenir ; la ligne du support affirmant une basophilie croissante est contradictoire.' },
      { text: 'La cellule devient progressivement un progéniteur à potentiel de différenciation plus large', correct: false, correction: 'Non chef. La différenciation s’accompagne d’une spécialisation, pas d’un retour au potentiel multilignée.' },
      { text: 'La chromatine devient de plus en plus fine et les nucléoles de plus en plus visibles', correct: false, correction: 'Non chef. La maturation s’accompagne d’une condensation de la chromatine et d’une disparition des nucléoles visibles.' },
      { text: 'La cellule perd son noyau avant de passer dans le sang', correct: false, correction: 'Non. Le PNN mature conserve son noyau, devenu lobulé.' },
    ],
    explanation: 'La maturation comporte globalement une réduction de taille, une condensation de la chromatine et une diminution de la basophilie cytoplasmique. La mention cytoplasme devient basophile de la page 4 doit être rectifiée, en cohérence avec les descriptions de la page 3. (Cours, p. 3–4 ; évolution cytoplasmique rectifiée)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles cellules appartiennent au compartiment mitotique de la granulopoïèse neutrophile présenté dans le cours ?',
    options: [
      { text: 'Les métamyélocytes', correct: false, correction: 'Non chef. Ils poursuivent leur maturation sans se diviser.' },
      { text: 'Les myéloblastes', correct: true, correction: 'Oui boss 🧠 Ils sont parmi les précurseurs capables de proliférer.' },
      { text: 'Les myélocytes', correct: true, correction: 'Oui. Ils sont les derniers stades prolifératifs de la séquence simplifiée du cours.' },
      { text: 'Les PNN matures du sang circulant', correct: false, correction: 'Faux. Ils ne sont pas un compartiment de production par mitoses dans le sang.' },
      { text: 'Les promyélocytes', correct: true, correction: 'Exact. Des divisions participent à l’amplification de ce contingent précurseur.' },
    ],
    explanation: 'Le compartiment mitotique médullaire comprend les myéloblastes, promyélocytes et myélocytes. Le métamyélocyte marque le passage aux stades postmitotiques de maturation. (Cours, p. 3 et 5)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Dans la succession de maturation, un précurseur situé après le myélocyte a un noyau nettement indenté et ne se divise plus. Quel stade est décrit ?',
    options: [
      { text: 'Le métamyélocyte', correct: true, correction: 'Oui boss 🎯 Après le myélocyte, le noyau s’indente et les divisions sont arrêtées ; la segmentation terminale se poursuit ensuite.' },
      { text: 'Le promyélocyte', correct: false, correction: 'Non. Il précède le myélocyte et appartient encore au compartiment prolifératif.' },
      { text: 'La CFU-GM', correct: false, correction: 'Non chef. Ce progéniteur précède les précurseurs morphologiquement identifiables.' },
      { text: 'Un PNN mature qui reprend une mitose', correct: false, correction: 'Non chef. Le scénario décrit un stade intermédiaire postmitotique, pas une reprise de division par le PNN.' },
      { text: 'Le myéloblaste', correct: false, correction: 'Faux. Le myéloblaste est plus précoce, avec un noyau plutôt rond ou ovalaire et une capacité proliférative.' },
    ],
    explanation: 'Le métamyélocyte est un précurseur postmitotique à noyau indenté. Il ne doit pas être confondu avec un PNN déjà segmenté en plusieurs lobes ; la maturation nucléaire se poursuit vers les formes plus matures. (Cours, p. 3 et 31–32 ; description nucléaire précisée)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles associations entre facteur de croissance et granulopoïèse sont correctes ?',
    options: [
      { text: 'IL-5 : facteur exclusivement responsable de la production des neutrophiles', correct: false, correction: 'Non chef. Dans les associations du cours, IL-5 est liée aux éosinophiles, tandis que G-CSF concerne les neutrophiles.' },
      { text: 'G-CSF : signal empêchant toute maturation neutrophile', correct: false, correction: 'Faux. Son effet présenté est une stimulation de la granulopoïèse, pas un blocage.' },
      { text: 'GM-CSF : action sur des progéniteurs granulo-monocytaires', correct: true, correction: 'Oui boss. Son nom et le schéma du cours renvoient aux composantes granulocytaire et monocytaire.' },
      { text: 'IL-5 : participation à la granulopoïèse éosinophile', correct: true, correction: 'Exact. C’est l’association citée pour la lignée éosinophile.' },
      { text: 'G-CSF : stimulation de la granulopoïèse neutrophile', correct: true, correction: 'Exact 🧠 Le G-CSF est associé à la production et à la maturation de la lignée neutrophile.' },
    ],
    explanation: 'Les associations principales présentées sont G-CSF pour la lignée neutrophile, GM-CSF pour le compartiment granulo-monocytaire et IL-5 pour la lignée éosinophile. Ces associations ne signifient pas que la régulation se résume à un facteur unique par cellule. (Cours, p. 4)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quels usages du G-CSF sont décrits dans le cours ?',
    options: [
      { text: 'Forcer les PNN matures sanguins à se multiplier par mitose', correct: false, correction: 'Non. La stimulation concerne la production médullaire ; les PNN matures ne deviennent pas un compartiment mitotique sanguin.' },
      { text: 'Stimuler la granulopoïèse sans possibilité de mobiliser des cellules souches hématopoïétiques', correct: false, correction: 'Non chef. La stimulation de la granulopoïèse est correcte, mais le cours décrit aussi la mobilisation de CSH vers le sang.' },
      { text: 'Mobiliser uniquement des neutrophiles matures pour constituer une greffe de CSH', correct: false, correction: 'Faux. Des neutrophiles matures ne remplacent pas les cellules souches hématopoïétiques recherchées pour cette collecte.' },
      { text: 'Stimuler la granulopoïèse et mobiliser des cellules souches hématopoïétiques vers le sang pour leur collecte', correct: true, correction: 'Oui boss 🎯 Le cours cite notamment la stimulation après certaines chimiothérapies et la collecte de cellules mobilisées dans le sang.' },
      { text: 'Obtenir une mobilisation de CSH qui reste limitée à la moelle, sans passage vers le sang', correct: false, correction: 'Non chef. La mobilisation décrite vise précisément le passage des CSH vers le sang périphérique pour leur collecte.' },
    ],
    explanation: 'Le G-CSF peut stimuler la granulopoïèse et être utilisé pour mobiliser des cellules souches hématopoïétiques vers le sang, où elles peuvent être collectées. Le support décrit deux objectifs biologiques ; il ne faut pas en déduire un schéma d’administration ou une prescription universelle. (Cours, p. 4)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles propositions concernant les compartiments médullaires sont exactes ?',
    options: [
      { text: 'Des stades postmitotiques et des PNN matures participent au compartiment de maturation et de réserve', correct: true, correction: 'Oui boss. La moelle contient aussi des cellules qui ne se divisent plus et peuvent ensuite être libérées.' },
      { text: 'Le compartiment de réserve est défini par une division permanente de tous les métamyélocytes', correct: false, correction: 'Faux. Les métamyélocytes sont postmitotiques ; réserve et prolifération sont des notions distinctes.' },
      { text: 'Un compartiment prolifératif amplifie le nombre de précurseurs', correct: true, correction: 'Exact 🧠 Les divisions des stades précoces permettent d’augmenter le contingent cellulaire.' },
      { text: 'La réserve médullaire permet de mobiliser des neutrophiles selon les besoins', correct: true, correction: 'Exact. Le cours présente la moelle comme une réserve importante avant le passage dans le sang et les tissus.' },
      { text: 'La totalité de la réserve neutrophile de l’organisme est mesurée directement par une prise de sang', correct: false, correction: 'Non chef. Le prélèvement sanguin ne mesure pas le stock médullaire.' },
    ],
    explanation: 'La moelle associe un compartiment mitotique de production et un compartiment de maturation et de réserve. Cette réserve est importante par rapport au contingent sanguin et peut être mobilisée selon les besoins. (Cours, p. 5)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quels repères de délai d’observation des colonies sont associés aux CFU-G et CFU-GM dans le modèle de culture du cours ?',
    options: [
      { text: 'CFU-GM : 14–21 jours, ce qui prouve que tous les métamyélocytes se divisent durant trois semaines', correct: false, correction: 'Non chef. Le délai d’un essai de culture ne supprime pas l’arrêt des divisions au stade métamyélocyte.' },
      { text: 'CFU-G et CFU-GM : toujours quelques minutes', correct: false, correction: 'Faux. Une colonie apparaît après une période de culture permettant divisions et différenciation.' },
      { text: 'CFU-G : 7–10 jours ; CFU-GM : 14–21 jours', correct: true, correction: 'Oui boss 🎯 Ce sont les deux repères donnés ici, à comprendre dans le cadre du modèle de culture présenté.' },
      { text: 'CFU-G : 14–21 jours ; CFU-GM : 7–10 jours', correct: false, correction: 'Non chef. Tu inverses les délais indiqués dans le support.' },
      { text: 'CFU-G : 7–10 jours, ce qui est nécessairement la durée de vie d’un PNN sanguin', correct: false, correction: 'Non. Un délai d’observation d’une colonie n’est pas la durée de vie d’une cellule mature dans le sang.' },
    ],
    explanation: 'Le support donne 7–10 jours pour les colonies CFU-G et 14–21 jours pour CFU-GM. Il s’agit de repères du modèle de culture, variables selon les conditions expérimentales, à distinguer du temps de maturation et de la durée de vie des PNN. (Cours, p. 2)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Concernant les pools sanguins de neutrophiles, quelles propositions sont exactes ?',
    options: [
      { text: 'Les repères du cours sont environ 45 % dans le pool circulant et 55 % dans le pool marginé', correct: true, correction: 'Oui boss. Ce sont des proportions approximatives du modèle, pas une répartition fixe pour chaque prélèvement.' },
      { text: 'La NFS compte directement toute la réserve médullaire et tous les neutrophiles des tissus', correct: false, correction: 'Non chef. Le prélèvement sanguin ne recense pas l’ensemble des compartiments de l’organisme.' },
      { text: 'Le cours distingue un pool circulant et un pool marginé', correct: true, correction: 'Exact 🧠 Ce sont deux compartiments de distribution intravasculaire.' },
      { text: 'Le pool marginé désigne uniquement des cellules encore en division dans la moelle', correct: false, correction: 'Faux. Il s’agit ici d’un pool sanguin intravasculaire, distinct du compartiment prolifératif médullaire.' },
      { text: 'Les cellules du pool marginé sont associées à l’endothélium plutôt qu’entraînées librement dans le prélèvement', correct: true, correction: 'Exact. La NFS reflète principalement le contingent circulant disponible dans l’échantillon.' },
    ],
    explanation: 'Le modèle du cours décrit deux pools sanguins en équilibre dynamique : circulant, environ 45 %, et marginé, environ 55 %. Le prélèvement compte les cellules circulantes de l’échantillon, sans mesurer toute la réserve neutrophile. (Cours, p. 5 et 32)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Dans un exemple physiologique, le nombre de PNN mesuré augmente rapidement après un effort intense. Quel mécanisme décrit dans le cours peut contribuer à cette variation immédiate ?',
    options: [
      { text: 'La démargination, avec passage de cellules du pool marginé vers le pool circulant', correct: true, correction: 'Oui boss 🧠 L’effort et les signaux associés peuvent redistribuer des cellules déjà présentes vers le contingent mesuré.' },
      { text: 'Une erreur obligatoire du laboratoire, puisque les pools ne peuvent jamais varier', correct: false, correction: 'Non chef. Le cours explique justement que les conditions de prélèvement peuvent modifier la répartition des pools.' },
      { text: 'La transformation immédiate des lymphocytes matures en neutrophiles', correct: false, correction: 'Faux. Les lymphocytes ne sont pas un réservoir de précurseurs immédiats de PNN.' },
      { text: 'La division de tous les PNN matures dans la circulation', correct: false, correction: 'Non chef. Les PNN matures sanguins ne se multiplient pas par mitose.' },
      { text: 'Une nouvelle granulopoïèse complète, du myéloblaste au PNN, achevée en quelques secondes', correct: false, correction: 'Non. Une maturation complète prend du temps ; elle n’explique pas à elle seule une variation aussi rapide.' },
    ],
    explanation: 'L’effort intense, l’adrénaline et le stress peuvent favoriser la démargination. Une augmentation du contingent circulant peut donc résulter d’une redistribution rapide, sans exiger une nouvelle production complète de neutrophiles. (Cours, p. 5)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles distinctions permettent d’interpréter correctement les étapes et les compartiments de la granulopoïèse ?',
    options: [
      { text: 'Le repère de 5–7 jours du myéloblaste au PNN concerne la maturation dans le modèle du cours', correct: true, correction: 'Oui boss 🧠 Ce repère décrit une progression de précurseur à cellule mature, pas une durée de vie garantie dans le sang.' },
      { text: 'Une libération depuis la réserve médullaire et une démargination sanguine sont deux mécanismes distincts', correct: true, correction: 'Oui. L’un fait passer des cellules de la moelle au sang ; l’autre redistribue des cellules entre pools sanguins.' },
      { text: 'Les conditions précédant une prise de sang peuvent modifier le contingent circulant mesuré', correct: true, correction: 'Exact. L’effort ou le stress peuvent notamment changer la répartition des neutrophiles.' },
      { text: 'La maturation peut se poursuivre après l’arrêt des divisions', correct: true, correction: 'Exact. Le métamyélocyte évolue vers les formes plus matures sans reprendre de mitose.' },
      { text: 'Toute hausse rapide de PNN mesurés démontre une augmentation immédiate du nombre de mitoses médullaires', correct: false, correction: 'Non chef. Une redistribution ou une mobilisation de cellules déjà présentes peut contribuer à la hausse.' },
    ],
    explanation: 'Les délais de maturation, les divisions, la réserve médullaire et les pools sanguins décrivent des phénomènes différents. Leur distinction explique pourquoi une numération peut varier rapidement sans que toute la chaîne de production soit recommencée. (Cours, p. 4–5 et 32)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Lors du recrutement d’un PNN vers un foyer infectieux, quelles molécules participent surtout à son contact initial et à son roulement sur l’endothélium ?',
    options: [
      { text: 'Les sélectines, qui permettent des interactions initiales relativement faibles', correct: true, correction: 'Oui boss 🧠 Les interactions impliquant les sélectines permettent au PNN de ralentir et de rouler sur l’endothélium.' },
      { text: 'Les intégrines activées, responsables à elles seules du roulement initial', correct: false, correction: 'Non chef, les intégrines activées participent surtout à l’adhésion ferme qui permet d’arrêter le roulement.' },
      { text: 'Les gélatinases contenues dans les granulations tertiaires', correct: false, correction: 'Non chef, les gélatinases participent notamment à la migration tissulaire, sans être les molécules d’adhésion initiale.' },
      { text: 'La myéloperoxydase libérée dans la lumière vasculaire', correct: false, correction: 'Non chef, la MPO est une enzyme des granulations primaires impliquée dans l’activité microbicide, pas une molécule de roulement.' },
      { text: 'Les molécules d’opsonisation fixées sur la bactérie', correct: false, correction: 'Non chef, les opsonines facilitent la reconnaissance du microbe par le phagocyte ; elles n’expliquent pas son roulement vasculaire.' },
    ],
    explanation: 'Le recrutement comporte des interactions initiales impliquant les sélectines, puis une adhésion plus ferme faisant intervenir les intégrines. (Cours, p. 6 et 15)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Concernant l’adhésion ferme du PNN à l’endothélium, quelles propositions sont exactes ?',
    options: [
      { text: 'L’adhésion ferme rend impossible toute sortie du PNN vers les tissus', correct: false, correction: 'Non chef, l’arrêt du roulement précède justement la traversée de l’endothélium puis la migration tissulaire.' },
      { text: 'L’adhésion ferme dépend uniquement de nouvelles intégrines synthétisées, sans activation de celles déjà présentes', correct: false, correction: 'Non chef, les signaux inflammatoires peuvent activer les intégrines présentes et augmenter leur capacité de liaison. La synthèse de nouvelles molécules n’est pas la seule explication.' },
      { text: 'LFA-1 est une intégrine portée par le PNN', correct: true, correction: 'Oui boss 🎯 LFA-1 est une intégrine leucocytaire qui participe à l’adhésion du PNN.' },
      { text: 'L’interaction entre LFA-1 et ICAM contribue à arrêter le roulement', correct: true, correction: 'Oui boss 🧠 Cette interaction favorise une adhésion plus forte que les contacts initiaux associés au roulement.' },
      { text: 'ICAM est une intégrine du PNN qui se fixe à LFA-1 sur l’endothélium', correct: false, correction: 'Non chef, les positions sont inversées : LFA-1 est sur le leucocyte et ICAM est notamment un ligand endothélial. ICAM n’est pas une intégrine.' },
    ],
    explanation: 'LFA-1 est une intégrine leucocytaire et ICAM un ligand endothélial. Leur interaction participe à l’adhésion ferme ; le support classe à tort ICAM parmi les intégrines. (Cours, p. 6 et 15)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quel événement correspond à la diapédèse du PNN décrite dans le cours ?',
    options: [
      { text: 'La production d’anions superoxydes dans le phagosome', correct: false, correction: 'Non chef, il s’agit d’une étape de l’explosion oxydative, distincte du passage à travers l’endothélium.' },
      { text: 'La transformation du PNN en macrophage après son entrée dans le tissu', correct: false, correction: 'Non chef, la diapédèse est un déplacement. La différenciation en macrophage concerne notamment les monocytes, pas les PNN.' },
      { text: 'Le passage du PNN entre des cellules endothéliales pour rejoindre les tissus', correct: true, correction: 'Oui boss 🧠 La diapédèse permet au PNN de quitter le compartiment vasculaire et de gagner le tissu.' },
      { text: 'L’enveloppement d’une bactérie par des pseudopodes', correct: false, correction: 'Non chef, cet enveloppement correspond à la phagocytose du microorganisme.' },
      { text: 'La libération du contenu des granulations dans le phagosome', correct: false, correction: 'Non chef, ce déversement est une dégranulation. Il ne définit pas la sortie du vaisseau.' },
    ],
    explanation: 'Dans le mécanisme présenté, l’adhésion est suivie du passage entre les cellules endothéliales, puis d’une migration guidée par les signaux chimiotactiques. (Cours, p. 6 et 33)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'À propos de l’opsonisation et de la phagocytose par les PNN, quelles propositions sont exactes ?',
    options: [
      { text: 'Des composants du complément fixés au microbe peuvent faciliter sa reconnaissance par le PNN', correct: true, correction: 'Oui boss 🎯 Le complément peut servir d’opsonine : il facilite la fixation du phagocyte sur le microorganisme.' },
      { text: 'Le phagosome est une vacuole intracellulaire contenant le microbe internalisé', correct: true, correction: 'Oui boss, le microbe englouti est enfermé dans cette vacuole, où se mettent en place les mécanismes microbicides.' },
      { text: 'L’opsonisation correspond à la digestion du microbe après son entrée dans le phagosome', correct: false, correction: 'Non chef, l’opsonisation est le marquage facilitant sa reconnaissance. La digestion intervient ensuite, à l’intérieur du phagocyte.' },
      { text: 'Le PNN peut entourer le microbe par des expansions cytoplasmiques', correct: true, correction: 'Oui boss 🧠 Les pseudopodes entourent le microbe et permettent son internalisation.' },
      { text: 'Des IgG fixées au microbe peuvent également faciliter sa reconnaissance par un phagocyte', correct: true, correction: 'Oui boss, certaines immunoglobulines, notamment les IgG, peuvent jouer un rôle d’opsonines. Le PNN utilise ce marquage sans fabriquer ces anticorps.' },
    ],
    explanation: 'L’opsonisation facilite la fixation du microbe au phagocyte. Son enveloppement par des pseudopodes conduit à la formation d’un phagosome. (Cours, p. 6–7 et 33)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Après la phagocytose d’une bactérie par un PNN, quelle étape permet d’apporter au compartiment contenant le microbe des molécules contenues dans les granulations ?',
    options: [
      { text: 'L’activation des intégrines à la membrane du PNN', correct: false, correction: 'Non chef, l’activation des intégrines intervient dans l’adhésion. Elle n’apporte pas directement le contenu granuleux au phagosome.' },
      { text: 'La sortie obligatoire de la bactérie vers le milieu extracellulaire', correct: false, correction: 'Non chef, les mécanismes décrits permettent justement de détruire le microbe internalisé dans un compartiment intracellulaire.' },
      { text: 'L’association de la bactérie à des opsonines dans le milieu extracellulaire', correct: false, correction: 'Non chef, l’opsonisation facilite la reconnaissance du microbe avant son internalisation. Elle ne remplace pas la fusion apportant le contenu granuleux.' },
      { text: 'L’activation de la NADPH oxydase à la membrane du compartiment phagocytaire', correct: false, correction: 'Non chef, cette activation permet le burst oxydatif. Elle est distincte de la fusion qui apporte le contenu des granulations au phagosome.' },
      { text: 'La fusion du phagosome avec des compartiments granuleux ou lysosomaux', correct: true, correction: 'Oui boss 🧠 La fusion apporte au compartiment phagocytaire des enzymes et d’autres composants antimicrobiens ; le cours parle de phagolysosome.' },
    ],
    explanation: 'La fusion avec les compartiments contenant les molécules microbicides complète les mécanismes de destruction du microorganisme phagocyté. (Cours, p. 6–7)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant l’explosion oxydative du PNN, quelles propositions sont exactes ?',
    options: [
      { text: 'La MPO utilise le peroxyde d’hydrogène et les ions chlorure pour former notamment de l’acide hypochloreux', correct: true, correction: 'Oui boss, la MPO utilise H₂O₂ et Cl⁻ pour produire HOCl. Elle ne réalise ni l’étape NADPH oxydase ni l’étape SOD.' },
      { text: 'Les espèces réactives produites sont incapables de léser les tissus de l’hôte', correct: false, correction: 'Non chef, leur activité antimicrobienne peut s’accompagner de lésions des tissus environnants.' },
      { text: 'La MPO transforme directement l’oxygène en anion superoxyde', correct: false, correction: 'Non chef, la production d’anion superoxyde à partir de l’oxygène est assurée par la NADPH oxydase.' },
      { text: 'La NADPH oxydase activée permet la formation d’anion superoxyde à partir de l’oxygène', correct: true, correction: 'Oui boss 🎯 C’est l’étape initiale de la chaîne de production des espèces réactives présentée dans le cours.' },
      { text: 'La superoxyde dismutase peut convertir l’anion superoxyde en peroxyde d’hydrogène', correct: true, correction: 'Oui boss 🧠 La SOD participe à la formation de H₂O₂ à partir du superoxyde.' },
    ],
    explanation: 'Les rôles de la NADPH oxydase, de la SOD et de la MPO doivent être distingués. La MPO catalyse notamment la formation de HOCl à partir de H₂O₂ et de chlorure. (Cours, p. 7 et 15)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quel déficit est à l’origine de la granulomatose septique chronique citée dans le cours ?',
    options: [
      { text: 'Une absence d’IL-5 empêchant toute production de neutrophiles', correct: false, correction: 'Non chef, l’IL-5 est surtout associée ici aux éosinophiles. Le défaut décrit concerne le burst des phagocytes.' },
      { text: 'Un déficit isolé en myéloperoxydase, synonyme de granulomatose septique chronique', correct: false, correction: 'Non chef, déficit en MPO et granulomatose septique chronique sont distincts. Cette dernière concerne la NADPH oxydase.' },
      { text: 'Un défaut du complexe NADPH oxydase des phagocytes', correct: true, correction: 'Oui boss 🧠 Ce défaut altère la production des espèces réactives de l’oxygène et la destruction de certains microorganismes.' },
      { text: 'Un défaut isolé d’adhésion des leucocytes lié à LFA-1', correct: false, correction: 'Non chef, l’adhésion et l’explosion oxydative sont des mécanismes distincts. La granulomatose septique chronique concerne la NADPH oxydase.' },
      { text: 'Une absence de granules d’histamine dans les basophiles', correct: false, correction: 'Non chef, cela ne définit pas cette maladie. Le mécanisme en cause est un défaut de NADPH oxydase.' },
    ],
    explanation: 'La granulomatose septique chronique résulte d’un défaut de fonctionnement ou d’assemblage de la NADPH oxydase phagocytaire, avec un risque infectieux accru. (Cours, p. 7)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'À propos des granulations et de la dégranulation des PNN, quelles propositions sont exactes ?',
    options: [
      { text: 'Les granulations tertiaires contiennent des gélatinases participant à la migration tissulaire', correct: true, correction: 'Oui boss, ces enzymes contribuent au franchissement de la matrice tissulaire.' },
      { text: 'Le contenu des granulations peut être libéré dans le phagosome et, selon le contexte, à l’extérieur de la cellule', correct: true, correction: 'Oui boss, le cours décrit l’apport dans le phagosome et rappelle aussi une libération extracellulaire participant notamment à la migration.' },
      { text: 'La dégranulation et la formation de NETs désignent exactement le même mécanisme', correct: false, correction: 'Non chef, la dégranulation libère un contenu granuleux ; les NETs sont des structures extracellulaires constituées notamment de chromatine et de protéines.' },
      { text: 'Les granulations secondaires contiennent notamment de la lactoferrine', correct: true, correction: 'Oui boss 🧠 La lactoferrine fait partie des composants des granulations secondaires décrits dans le cours.' },
      { text: 'Les granulations primaires, dites azurophiles, contiennent notamment de la MPO', correct: true, correction: 'Oui boss 🎯 La MPO est un composant caractéristique des granulations primaires.' },
    ],
    explanation: 'Les différentes granulations apportent des molécules antimicrobiennes et des enzymes impliquées dans la migration. La dégranulation peut être intracellulaire ou extracellulaire. (Cours, p. 7, 15 et 33)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quelle fonction relève des plasmocytes plutôt que des mécanismes effecteurs propres du PNN présentés dans ce cours ?',
    options: [
      { text: 'La synthèse et la sécrétion d’anticorps', correct: true, correction: 'Oui boss 🧠 Les plasmocytes, issus des lymphocytes B, produisent les anticorps. Le PNN peut utiliser l’opsonisation sans fabriquer ces anticorps.' },
      { text: 'La production d’espèces réactives de l’oxygène lors d’un burst', correct: false, correction: 'Non chef, le burst oxydatif fait partie des mécanismes microbicides des PNN.' },
      { text: 'La libération du contenu des granulations', correct: false, correction: 'Non chef, la dégranulation est bien une fonction effectrice des PNN.' },
      { text: 'La migration vers un foyer infectieux par chimiotactisme', correct: false, correction: 'Non chef, les PNN répondent aux signaux chimiotactiques et migrent vers le foyer inflammatoire.' },
      { text: 'La phagocytose d’un microorganisme', correct: false, correction: 'Non chef, les PNN sont bien des phagocytes capables d’internaliser des microorganismes.' },
    ],
    explanation: 'Les PNN assurent notamment migration, phagocytose, burst oxydatif et dégranulation. La production d’anticorps est une fonction des plasmocytes. (Cours, p. 6–8 et 33)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Concernant les NETs produits par les neutrophiles, quelles propositions sont exactes ?',
    options: [
      { text: 'Le pus d’une infection est constitué exclusivement de NETs, sans cellules ni débris', correct: false, correction: 'Non chef, le pus contient notamment des neutrophiles, des débris cellulaires et d’autres éléments ; il ne se réduit pas aux NETs.' },
      { text: 'Ils comportent un réseau extracellulaire de chromatine associé à des protéines microbicides', correct: true, correction: 'Oui boss 🎯 Les NETs associent notamment de l’ADN et des protéines, dont des composants issus des granulations.' },
      { text: 'Ils peuvent piéger des microorganismes dans un filet extracellulaire', correct: true, correction: 'Oui boss 🧠 Le réseau peut immobiliser des microorganismes et les exposer aux composants antimicrobiens qui y sont associés.' },
      { text: 'Leur libération impose dans tous les cas la lyse et la mort immédiate du PNN', correct: false, correction: 'Non chef, plusieurs mécanismes de libération existent ; une lyse du neutrophile n’est pas obligatoire dans chaque situation.' },
      { text: 'Ils sont confinés à l’intérieur du phagosome après l’internalisation du microbe', correct: false, correction: 'Non chef, les NETs sont extracellulaires. Ils doivent être distingués du compartiment intracellulaire formé lors de la phagocytose.' },
    ],
    explanation: 'Les NETs sont des structures extracellulaires de chromatine associées à des composants antimicrobiens. Leur formation ne suppose pas toujours une lyse du neutrophile et ne suffit pas à définir la composition du pus. (Cours, p. 8)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Sur un frottis sanguin, quelle description des granulations est caractéristique d’un polynucléaire éosinophile ?',
    options: [
      { text: 'De grosses granulations violettes très foncées à noirâtres', correct: false, correction: 'Non chef, ces granulations orientent vers un basophile plutôt que vers un éosinophile.' },
      { text: 'Un cytoplasme presque absent sans granulations spécifiques, autour d’un noyau rond', correct: false, correction: 'Non chef, cela évoque plutôt un petit lymphocyte que les grosses granulations caractéristiques du PNE.' },
      { text: 'De nombreuses petites granulations marron-violettes', correct: false, correction: 'Non chef, cette description correspond davantage aux granulations du neutrophile dans le cours.' },
      { text: 'Un cytoplasme gris-violacé à fines granulations et vacuoles, avec un noyau réniforme', correct: false, correction: 'Non chef, cet ensemble de caractères évoque un monocyte.' },
      { text: 'De grosses granulations nombreuses, rose-orangé', correct: true, correction: 'Oui boss 🧠 Les granulations volumineuses et orangées sont un repère morphologique des PNE.' },
    ],
    explanation: 'Le cours distingue les petites granulations du PNN, les grosses granulations rose-orangé du PNE et les granulations foncées du PNB. (Cours, p. 6 et 34)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Concernant les éosinophiles, quelles propositions sont exactes ?',
    options: [
      { text: 'Leur participation aux réactions allergiques exclut toute fonction antiparasitaire', correct: false, correction: 'Non chef, ces deux fonctions peuvent être assurées par la même population cellulaire.' },
      { text: 'Le chimiotactisme contribue à leur recrutement dans les tissus', correct: true, correction: 'Oui boss, ils peuvent migrer en réponse à des substances chimiques attirantes et participer aux réactions locales.' },
      { text: 'Ils sont spécialisés dans la production d’anticorps circulants', correct: false, correction: 'Non chef, la production d’anticorps est assurée par les plasmocytes, pas par les PNE.' },
      { text: 'Ils participent à la défense contre certains parasites', correct: true, correction: 'Oui boss 🎯 La défense antiparasitaire fait partie des fonctions des PNE ; cela ne signifie pas qu’ils interviennent contre tous les parasites de la même manière.' },
      { text: 'L’IL-5 favorise notamment leur production et leur activation', correct: true, correction: 'Oui boss 🧠 Le cours associe l’IL-5 à la production, à la maturation et à l’activation des éosinophiles.' },
    ],
    explanation: 'Les PNE participent notamment à certaines défenses antiparasitaires et aux réactions allergiques. Leur production et leur activation sont favorisées par l’IL-5, et leur migration est chimiotactique. (Cours, p. 6, 8 et 15)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle affirmation décrit correctement la relation entre basophiles sanguins et mastocytes tissulaires ?',
    options: [
      { text: 'Leurs fonctions communes démontrent qu’un basophile mature est le précurseur immédiat du mastocyte', correct: false, correction: 'Non chef, partager certains médiateurs et fonctions ne démontre pas une succession basophile puis mastocyte : ce sont des populations distinctes.' },
      { text: 'Tout basophile devient un mastocyte dès qu’il quitte le sang', correct: false, correction: 'Non chef, cette formulation du support est erronée : basophiles et mastocytes sont des populations distinctes, malgré des fonctions communes.' },
      { text: 'Ce sont des populations distinctes qui partagent notamment des fonctions dans les réactions allergiques', correct: true, correction: 'Oui boss 🧠 La proximité de certaines fonctions ne signifie pas que le basophile sanguin est le précurseur du mastocyte tissulaire.' },
      { text: 'Le mastocyte est le nom donné au PNE arrivé dans les tissus', correct: false, correction: 'Non chef, un éosinophile ne prend pas le nom de mastocyte après sa migration.' },
      { text: 'Basophiles et mastocytes appartiennent à une population dépourvue de toute implication allergique', correct: false, correction: 'Non chef, ces populations participent justement aux réactions d’hypersensibilité et peuvent libérer des médiateurs inflammatoires.' },
    ],
    explanation: 'Basophiles et mastocytes sont des populations distinctes. La transformation systématique des basophiles en mastocytes indiquée dans le support doit être corrigée. (Cours, p. 8 et 34)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'À propos des basophiles, quelles propositions sont exactes ?',
    options: [
      { text: 'L’activation peut entraîner la libération des substances contenues dans leurs granulations', correct: true, correction: 'Oui boss, la dégranulation libère notamment l’histamine et participe à la réponse inflammatoire.' },
      { text: 'Leur fonction principale décrite est de produire les opsonines du complément pour les PNN', correct: false, correction: 'Non chef, le cours les associe surtout aux réactions allergiques et inflammatoires ; leur rôle n’est pas de fournir le complément aux PNN.' },
      { text: 'Leurs granulations contiennent notamment de l’histamine', correct: true, correction: 'Oui boss 🎯 L’histamine est un médiateur important libéré lors de l’activation des basophiles.' },
      { text: 'Leurs granulations caractéristiques sont rose-orangé, comme celles des PNE', correct: false, correction: 'Non chef, les granulations basophiles sont violettes très foncées à noirâtres ; les granulations orangées caractérisent les PNE.' },
      { text: 'Ils participent aux réactions d’hypersensibilité et à l’inflammation', correct: true, correction: 'Oui boss 🧠 Leurs médiateurs contribuent notamment aux manifestations des réactions allergiques.' },
    ],
    explanation: 'Les PNB possèdent des granulations foncées contenant notamment de l’histamine ; leur activation participe aux réactions d’hypersensibilité et à l’inflammation. (Cours, p. 6, 8, 15 et 34)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle succession correspond à la maturation monocytaire présentée dans le cours ?',
    options: [
      { text: 'Promonocyte → monoblaste → monocyte', correct: false, correction: 'Non chef, le monoblaste précède le promonocyte dans la maturation.' },
      { text: 'Monoblaste → promonocyte → monocyte', correct: true, correction: 'Oui boss 🧠 C’est l’ordre des trois stades de maturation décrits dans le cours.' },
      { text: 'Monoblaste → monocyte → promonocyte', correct: false, correction: 'Non chef, le promonocyte est un stade intermédiaire avant le monocyte mature circulant.' },
      { text: 'Monoblaste → monocyte → basophile', correct: false, correction: 'Non chef, le basophile appartient à une autre lignée ; il n’est pas le stade final de la maturation monocytaire.' },
      { text: 'Myéloblaste → promyélocyte → monocyte', correct: false, correction: 'Non chef, cette proposition mélange les précurseurs granulocytaires avec la lignée monocytaire.' },
    ],
    explanation: 'La monocytopoïèse suit la succession monoblaste, promonocyte puis monocyte. (Cours, p. 9, 14 et 16)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quels caractères peuvent orienter vers un monocyte mature sur un frottis sanguin ?',
    options: [
      { text: 'Un noyau réniforme, sans véritable segmentation en plusieurs lobes', correct: true, correction: 'Oui boss 🎯 Le noyau peut être irrégulier ou en forme de rein, mais n’a pas la segmentation typique du PNN.' },
      { text: 'Un noyau régulièrement divisé en nombreux lobes séparés, associé à des granulations neutrophiles', correct: false, correction: 'Non chef, cette description oriente davantage vers un polynucléaire neutrophile.' },
      { text: 'De grosses granulations orange occupant presque tout le cytoplasme', correct: false, correction: 'Non chef, ces granulations évoquent plutôt un éosinophile.' },
      { text: 'Un cytoplasme gris-violacé, parfois décrit comme un ciel d’orage', correct: true, correction: 'Oui boss 🧠 Cet aspect cytoplasmique fait partie des repères morphologiques du monocyte.' },
      { text: 'La présence possible de fines granulations et de vacuoles cytoplasmiques', correct: true, correction: 'Oui boss, le cours décrit une fine poussière de granulations et parfois des vacuoles.' },
    ],
    explanation: 'Le monocyte mature possède un noyau non segmenté souvent réniforme et un cytoplasme gris-violacé pouvant contenir de fines granulations et des vacuoles. (Cours, p. 10 et 33)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle association entre un facteur de différenciation et un marqueur de lignée monocytaire est correcte dans le cadre du cours ?',
    options: [
      { text: 'M-CSF pour l’orientation monocytaire et CD14 comme marqueur membranaire utilisé en cytométrie', correct: true, correction: 'Oui boss 🧠 Le M-CSF favorise la différenciation monocytaire et CD14 aide à caractériser cette lignée par cytométrie en flux.' },
      { text: 'IL-5 et CD14 : orientation spécifique vers les PNN', correct: false, correction: 'Non chef, l’IL-5 est associée aux éosinophiles ; CD14 est un marqueur utilisé pour la lignée monocytaire.' },
      { text: 'M-CSF et MPO : facteur et marqueur définissant exclusivement les basophiles', correct: false, correction: 'Non chef, le M-CSF favorise la lignée monocytaire ; la MPO n’est pas un marqueur exclusif des basophiles.' },
      { text: 'M-CSF et CD14 : orientation spécifique vers les lymphocytes B', correct: false, correction: 'Non chef, ces éléments sont ici associés à la lignée monocytaire, pas à la lignée B.' },
      { text: 'IL-5 et LFA-1 : couple spécifique de maturation monocytaire', correct: false, correction: 'Non chef, l’IL-5 est surtout liée aux PNE et LFA-1 intervient dans l’adhésion des leucocytes.' },
    ],
    explanation: 'Le cours associe le M-CSF à l’orientation de la CFU-GM vers la lignée monocytaire et décrit CD14 parmi les marqueurs membranaires de cette lignée. (Cours, p. 9–10 et 16)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant le devenir des monocytes et l’origine des macrophages, quelles propositions sont exactes ?',
    options: [
      { text: 'Tout monocyte mature se transforme en mastocyte après sa diapédèse', correct: false, correction: 'Non chef, les mastocytes appartiennent à une population distincte. La différenciation macrophagique est l’un des devenirs possibles des monocytes.' },
      { text: 'La durée de vie de cellules macrophagiques tissulaires peut être beaucoup plus longue que le passage sanguin des monocytes', correct: true, correction: 'Oui boss 🧠 Certaines persistent longtemps dans les tissus. Les durées varient selon la population et le contexte.' },
      { text: 'Le cours décrit un passage sanguin des monocytes de l’ordre de 1 à 3 jours', correct: true, correction: 'Oui boss, c’est l’ordre de grandeur fourni dans le support ; il ne faut pas en faire une durée identique et obligatoire pour chaque cellule.' },
      { text: 'Des monocytes peuvent quitter le sang et se différencier en macrophages dans les tissus', correct: true, correction: 'Oui boss 🎯 C’est l’un des devenirs tissulaires des monocytes décrit dans le cours.' },
      { text: 'Tous les macrophages tissulaires proviennent obligatoirement de monocytes circulants adultes', correct: false, correction: 'Non chef, de nombreuses populations résidentes ont une origine prénatale et peuvent se maintenir localement. Le schéma monocyte puis macrophage n’est pas universel.' },
    ],
    explanation: 'Les monocytes peuvent donner des macrophages tissulaires, mais cette voie ne représente pas l’origine obligatoire de toutes les populations résidentes. Les durées présentées sont des ordres de grandeur. (Cours, p. 10, 16 et 34)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle fonction des macrophages contribue directement à la coopération avec les lymphocytes et à la réponse immunitaire adaptative ?',
    options: [
      { text: 'La libération d’histamine par les basophiles', correct: false, correction: 'Non chef, ce mécanisme participe à l’inflammation et aux réactions allergiques, mais n’est pas la fonction de présentation antigénique du macrophage.' },
      { text: 'La présentation de l’antigène aux lymphocytes', correct: true, correction: 'Oui boss 🧠 La présentation antigénique permet aux macrophages de participer à l’activation de la réponse adaptative.' },
      { text: 'La sécrétion d’anticorps par tous les macrophages activés', correct: false, correction: 'Non chef, les anticorps sont sécrétés par les plasmocytes. Le macrophage peut présenter l’antigène et libérer des cytokines.' },
      { text: 'Le roulement sur l’endothélium par des interactions impliquant les sélectines', correct: false, correction: 'Non chef, le roulement est une étape de recrutement vasculaire. Il ne correspond pas à la présentation de l’antigène aux lymphocytes.' },
      { text: 'La seule digestion des débris cellulaires, sans présentation antigénique ni interaction avec les lymphocytes', correct: false, correction: 'Non chef, l’élimination de débris est une fonction phagocytaire. La coopération adaptative décrite repose notamment sur la présentation de l’antigène.' },
    ],
    explanation: 'Les macrophages sont des phagocytes de l’immunité innée qui participent aussi à la réponse adaptative par la présentation d’antigènes et la coopération avec les lymphocytes. (Cours, p. 10 et 34)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'À propos des fonctions des macrophages, quelles propositions sont exactes ?',
    options: [
      { text: 'Ils peuvent participer à certaines réponses antitumorales', correct: true, correction: 'Oui boss, le cours décrit cette capacité parmi leurs fonctions possibles, sans qu’elle soit automatique pour tous les macrophages.' },
      { text: 'Leur présence dans une tumeur garantit une action antitumorale efficace', correct: false, correction: 'Non chef, une activité antitumorale est possible, mais le rôle des macrophages dépend du contexte. Leur présence ne garantit pas l’élimination de la tumeur.' },
      { text: 'Ils peuvent libérer des cytokines et des facteurs de croissance', correct: true, correction: 'Oui boss 🧠 Ces médiateurs interviennent notamment dans l’inflammation et dans la réparation tissulaire.' },
      { text: 'Ils peuvent éliminer des particules étrangères, des cellules altérées et des débris cellulaires', correct: true, correction: 'Oui boss 🎯 Leur activité phagocytaire contribue à la défense innée et au nettoyage des tissus.' },
      { text: 'Leurs fonctions se limitent à la production d’anticorps, sans phagocytose', correct: false, correction: 'Non chef, les macrophages sont des phagocytes et produisent différents médiateurs. Les anticorps sont sécrétés par les plasmocytes.' },
    ],
    explanation: 'Les macrophages assurent des fonctions de phagocytose, de présentation antigénique et de sécrétion de médiateurs. Leur effet antitumoral est une possibilité dépendant du contexte. (Cours, p. 10 et 34)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement l’origine des principales populations lymphocytaires dans le schéma du cours ?',
    options: [
      { text: 'Les lymphocytes T proviennent de cellules souches exclusivement thymiques, sans origine médullaire', correct: false, correction: 'Non chef. Le thymus est le lieu de maturation T, mais les précurseurs ont une origine hématopoïétique médullaire.' },
      { text: 'Les cellules NK appartiennent à la lignée granulocytaire parce qu’elles peuvent contenir des granulations', correct: false, correction: 'Faux. Des granulations n’en font pas des granulocytes : les NK appartiennent à la lignée lymphoïde.' },
      { text: 'Les plasmocytes constituent une lignée indépendante sans lien avec les lymphocytes B', correct: false, correction: 'Non. Les plasmocytes sont issus de la différenciation des lymphocytes B.' },
      { text: 'Elles dérivent des cellules souches hématopoïétiques médullaires, avec une voie lymphoïde pouvant donner des lymphocytes B, T et NK', correct: true, correction: 'Oui boss 🧠 La moelle fournit les précurseurs ; la maturation T se poursuit ensuite dans le thymus.' },
      { text: 'Le progéniteur lymphoïde commun ne peut donner que des lymphocytes B', correct: false, correction: 'Non chef. Le schéma le relie aussi aux voies T et NK.' },
    ],
    explanation: 'Le modèle présenté part des cellules souches hématopoïétiques de la moelle et distingue une voie lymphoïde donnant les principales populations B, T et NK. Les plasmocytes appartiennent à la lignée B. (Cours, p. 11, 18–19)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles associations entre organes lymphoïdes et fonctions sont exactes ?',
    options: [
      { text: 'La maturation dans un organe primaire ne nécessite pas une activation par un antigène étranger, mais peut comporter une reconnaissance d’antigènes du soi', correct: true, correction: 'Oui 🧠 C’est cette distinction qui permet de comprendre la tolérance centrale sans dire qu’aucun antigène n’est rencontré.' },
      { text: 'La moelle osseuse et le thymus sont des organes lymphoïdes primaires', correct: true, correction: 'Exact 🎯 Ils participent à la production et à la maturation des lymphocytes.' },
      { text: 'Les ganglions, la rate et les formations lymphoïdes des muqueuses sont des organes ou tissus lymphoïdes secondaires', correct: true, correction: 'Oui boss. Ils favorisent notamment les rencontres conduisant à une réponse immunitaire spécifique.' },
      { text: 'Le GALT est associé au tube digestif et le BALT aux voies respiratoires', correct: true, correction: 'Exact. Gut pour le digestif, Bronchus pour le respiratoire.' },
      { text: 'Le thymus est classé parmi les organes secondaires parce qu’il sélectionne les lymphocytes T', correct: false, correction: 'Non chef. La sélection thymique fait partie de leur maturation dans un organe primaire.' },
    ],
    explanation: 'La distinction primaire/secondaire oppose surtout maturation et organisation de la réponse adaptative à un antigène étranger. Elle n’exclut pas la reconnaissance du soi dans les organes primaires. (Cours, p. 11, 19–20, 22–24)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle comparaison entre la rate et les ganglions lymphatiques est correcte ?',
    options: [
      { text: 'Un ganglion reçoit uniquement des lymphocytes et ne peut pas recevoir d’antigènes issus des tissus', correct: false, correction: 'Non chef. Le drainage lymphatique facilite justement la rencontre entre les antigènes et les lymphocytes.' },
      { text: 'La rate élimine les hématies âgées mais ne participe pas à l’immunité', correct: false, correction: 'Non. Ses fonctions phagocytaires et immunitaires coexistent.' },
      { text: 'La rate est un organe primaire, tandis que les ganglions sont secondaires', correct: false, correction: 'Faux. Chez l’enfant et l’adulte, la rate et les ganglions sont classés parmi les organes secondaires.' },
      { text: 'La rate participe à la surveillance immunitaire du sang et à l’élimination des hématies âgées ; les ganglions filtrent la lymphe d’un territoire', correct: true, correction: 'Oui boss 🎯 Cette association résume leurs fonctions décrites dans le cours.' },
      { text: 'La rate surveille principalement les antigènes drainés par la lymphe, alors que les ganglions filtrent directement le sang', correct: false, correction: 'Non chef. Tu as inversé les compartiments : la rate surveille le sang, les ganglions reçoivent la lymphe.' },
    ],
    explanation: 'La rate, située dans l’hypochondre gauche, est richement vascularisée et participe à la surveillance du sang ainsi qu’à la phagocytose des hématies altérées. Les ganglions drainent et filtrent la lymphe. (Cours, p. 12, 20)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Concernant la circulation lymphocytaire et les structures lymphoïdes, quelles propositions sont exactes ?',
    options: [
      { text: 'Après leur première entrée dans un ganglion, les lymphocytes ne peuvent plus rejoindre le sang', correct: false, correction: 'Non chef. La recirculation est précisément un mécanisme de surveillance répétée de l’organisme.' },
      { text: 'Le drainage lymphatique permet un retour vers la circulation veineuse au voisinage des veines sous-clavières', correct: true, correction: 'Exact 🧠 C’est le retour lymphatique vers le sang décrit sur le schéma.' },
      { text: 'Des structures lymphoïdes tertiaires peuvent se former dans certains tissus au cours d’une inflammation chronique', correct: true, correction: 'Oui. Le cours distingue ce compartiment des organes primaires et secondaires habituels.' },
      { text: 'Une adénopathie peut accompagner une infection ou une pathologie tumorale', correct: true, correction: 'Exact. Un ganglion augmenté de volume n’est pas une preuve spécifique d’infection.' },
      { text: 'Les lymphocytes peuvent recirculer entre le sang, les organes lymphoïdes et la lymphe', correct: true, correction: 'Oui boss. Ils ne restent pas enfermés dans leur organe de production.' },
    ],
    explanation: 'La recirculation augmente les possibilités de rencontre avec un antigène. Les adénopathies ont plusieurs causes possibles et les structures tertiaires peuvent apparaître dans un contexte inflammatoire chronique. (Cours, p. 11–12, 20–21)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quelle formulation distingue correctement les cellules NK des lymphocytes B et T conventionnels ?',
    options: [
      { text: 'Les NK sont les cellules responsables de la sécrétion d’immunoglobulines après commutation de classe', correct: false, correction: 'Non chef. Cette fonction relève de la lignée B et de ses plasmocytes.' },
      { text: 'Toutes les cellules lymphoïdes appartiennent exclusivement à l’immunité adaptative', correct: false, correction: 'Non. Les NK sont justement une population lymphoïde relevant principalement de l’immunité innée.' },
      { text: 'Les NK sont des lymphocytes B qui ont perdu leur capacité à devenir des plasmocytes', correct: false, correction: 'Non chef. La voie NK est distincte de la voie B.' },
      { text: 'Les NK sont des lymphocytes de l’immunité innée et ne possèdent pas un BCR ou un TCR généré par les réarrangements propres aux lymphocytes B ou T', correct: true, correction: 'Oui boss 🧠 L’appartenance à la lignée lymphoïde ne signifie pas que toutes ses cellules utilisent les récepteurs de l’immunité adaptative.' },
      { text: 'Les NK doivent réarranger un TCR pour reconnaître leurs cibles', correct: false, correction: 'Faux. Leur reconnaissance repose sur d’autres récepteurs, et non sur un TCR réarrangé.' },
    ],
    explanation: 'Le cours distingue les populations B, T et NK. Il faut corriger la généralisation de l’immunité spécifique à toutes les cellules lymphoïdes : les NK relèvent de l’immunité innée et n’utilisent pas de BCR/TCR réarrangé. (Cours, p. 11, 18 ; distinction précisée)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles propositions concernant les premières étapes de la lymphopoïèse B sont exactes ?',
    options: [
      { text: 'Le réarrangement VDJ de la chaîne lourde des immunoglobulines est associé au stade Pro B', correct: true, correction: 'Oui boss. Il contribue à construire la diversité des régions variables de la chaîne lourde.' },
      { text: 'Le BCR associe une immunoglobuline membranaire à des éléments de signalisation tels que CD79', correct: true, correction: 'Exact. Reconnaître l’antigène et transmettre le signal sont deux fonctions complémentaires de ce complexe.' },
      { text: 'La commutation de classe est l’événement qui fait passer du stade Pré-Pro B au stade Pro B', correct: false, correction: 'Non chef. La commutation appartient à la réponse B en périphérie, après activation ; elle ne définit pas ce passage précoce.' },
      { text: 'L’ordre présenté est Pré-Pro B → Pro B → Pré B → B immature → B mature naïf', correct: true, correction: 'Exact 🎯 Le stade Pro B précède le stade Pré B.' },
      { text: 'Les lymphocytes B deviennent normalement des plasmocytes avant de construire un récepteur antigénique', correct: false, correction: 'Faux. La construction du récepteur précède la différenciation plasmocytaire après activation.' },
    ],
    explanation: 'La lymphopoïèse B construit d’abord un récepteur par des réarrangements génétiques, puis contrôle notamment la réactivité au soi. La différenciation en plasmocyte correspond à une étape ultérieure de la réponse B. (Cours, p. 21–22, 39)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle description de la partie immunoglobuline du pré-BCR est correcte ?',
    options: [
      { text: 'Une chaîne lourde μ associée à une chaîne légère conventionnelle définitivement réarrangée', correct: false, correction: 'Non chef. Cela confond le pré-BCR avec le récepteur contenant ensuite une vraie chaîne légère κ ou λ.' },
      { text: 'Une chaîne lourde μ associée à une chaîne légère de substitution, constituée notamment de VpreB et λ5', correct: true, correction: 'Oui boss 🧠 C’est la précision manquante dans le texte du support : la chaîne légère du pré-BCR est substitutive.' },
      { text: 'Une chaîne lourde IgG construite par commutation de classe dans la moelle', correct: false, correction: 'Faux. Le pré-BCR utilise μ ; la commutation de classe ne constitue pas cette étape précoce.' },
      { text: 'Une chaîne du TCR associée à CD4', correct: false, correction: 'Non chef. Le pré-BCR appartient à la lignée B ; le TCR et CD4 concernent la lignée T.' },
      { text: 'Deux chaînes légères conventionnelles sans chaîne lourde', correct: false, correction: 'Non. Une chaîne lourde μ fonctionnelle est une composante essentielle du pré-BCR.' },
    ],
    explanation: 'Le pré-BCR contrôle notamment l’obtention d’une chaîne lourde fonctionnelle. Il associe μ et une chaîne légère de substitution ; les réarrangements de la chaîne légère conventionnelle permettent ensuite la formation d’un véritable BCR, notamment une IgM membranaire au stade B immature. (Cours, p. 21–22 ; composition rectifiée)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Concernant le lymphocyte B immature et sa tolérance centrale, quelles propositions sont exactes ?',
    options: [
      { text: 'La construction d’une chaîne légère conventionnelle implique un réarrangement VJ', correct: true, correction: 'Exact 🧠 Pour la chaîne légère, il n’y a pas le segment D du réarrangement de la chaîne lourde.' },
      { text: 'Une réactivité importante à un antigène du soi peut entraîner une apoptose ou une modification du récepteur', correct: true, correction: 'Exact. Le remaniement du récepteur et l’élimination sont des mécanismes de tolérance centrale.' },
      { text: 'La tolérance centrale ne peut pas exister dans la moelle puisque tous les antigènes y sont absents', correct: false, correction: 'Non chef. Des antigènes du soi y sont reconnus ; l’expression « indépendante de l’antigène » ne signifie pas leur absence.' },
      { text: 'Le lymphocyte B immature peut exprimer une IgM membranaire formant un BCR', correct: true, correction: 'Oui boss. Le récepteur contient alors une chaîne lourde et une chaîne légère conventionnelle.' },
      { text: 'La tolérance centrale vise à limiter l’arrivée de lymphocytes fortement autoréactifs en périphérie', correct: true, correction: 'Oui. Elle contrôle la réactivité au soi avant la réponse à un antigène étranger.' },
    ],
    explanation: 'L’expression du BCR au stade immature permet un contrôle de sa réactivité au soi. Un nouveau réarrangement, notamment de la chaîne légère, peut modifier un récepteur autoréactif ; l’apoptose contribue également à la tolérance centrale. (Cours, p. 21–22 ; mécanismes précisés)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Que signifie le terme « lymphocyte B mature naïf » dans ce cours ?',
    options: [
      { text: 'Un lymphocyte B dépourvu de BCR, qui doit attendre son antigène pour en construire un', correct: false, correction: 'Non chef. Le récepteur est déjà construit avant la réponse à l’antigène étranger.' },
      { text: 'Un lymphocyte B qui ne pourra jamais produire de cellule mémoire', correct: false, correction: 'Non. Après activation, sa descendance peut comprendre des cellules mémoire.' },
      { text: 'Un lymphocyte B n’ayant jamais été exposé à aucune molécule du soi pendant sa maturation', correct: false, correction: 'Non chef. La tolérance centrale implique précisément des interactions avec le soi.' },
      { text: 'Un lymphocyte B ayant déjà subi une différenciation plasmocytaire et une commutation vers IgG', correct: false, correction: 'Faux. Ce sont des événements possibles de la réponse après activation, pas la définition du lymphocyte naïf.' },
      { text: 'Un lymphocyte B immunocompétent qui n’a pas encore été activé par son antigène spécifique dans une réponse adaptative', correct: true, correction: 'Oui boss 🎯 Mature décrit ses capacités ; naïf décrit l’absence de réponse préalable à son antigène spécifique.' },
    ],
    explanation: 'Le lymphocyte B mature naïf dispose d’un récepteur et peut participer à une réponse adaptative. Le caractère naïf n’exclut pas les contrôles de réactivité au soi rencontrés pendant son développement. (Cours, p. 19, 22)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quels événements peuvent participer à la réponse B après activation dans les organes lymphoïdes secondaires ?',
    options: [
      { text: 'Une commutation qui remplace systématiquement les régions variables par une nouvelle séquence VDJ', correct: false, correction: 'Non chef. Tu mélanges commutation de classe et construction du récepteur ; la commutation porte sur la région constante lourde.' },
      { text: 'Une différenciation en plasmocytes sécréteurs d’anticorps', correct: true, correction: 'Oui boss. Le plasmocyte est une cellule effectrice de la lignée B.' },
      { text: 'La formation de lymphocytes B mémoire', correct: true, correction: 'Exact. Elle permet de conserver une population capable de participer à une réponse ultérieure.' },
      { text: 'Des hypermutations somatiques des régions variables pouvant contribuer à une maturation d’affinité', correct: true, correction: 'Exact 🧠 Les modifications touchent les régions variables et sont suivies d’une sélection des cellules.' },
      { text: 'Une commutation de classe modifiant la région constante de la chaîne lourde, sans reconstruire à elle seule la spécificité de la région variable', correct: true, correction: 'Oui. Changer de classe change notamment les fonctions de l’anticorps ; ce n’est pas un nouveau VDJ définissant une autre cible.' },
    ],
    explanation: 'La réponse B périphérique peut conduire aux plasmocytes et aux cellules mémoire. L’hypermutation concerne les régions variables, tandis que la commutation modifie la classe d’immunoglobuline par changement de région constante lourde. Une tolérance périphérique complète les contrôles centraux. (Cours, p. 22, 37, 39)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quel enchaînement des corécepteurs décrit le développement thymique conventionnel des lymphocytes T αβ présenté dans le cours ?',
    options: [
      { text: 'CD4− CD8− → CD4+ CD8− → CD4+ CD8+ comme stade final exporté', correct: false, correction: 'Faux. Les cellules exportées de la voie conventionnelle décrite sont principalement simples positives.' },
      { text: 'CD4+ CD8+ → CD4− CD8− → CD4+ CD8− ou CD4− CD8+', correct: false, correction: 'Non chef. Le stade double négatif précède le stade double positif dans cet enchaînement.' },
      { text: 'CD4− CD8− → CD4+ CD8+ → CD4+ CD8− ou CD4− CD8+', correct: true, correction: 'Oui boss 🎯 Double négatif, puis double positif, puis simple positif.' },
      { text: 'CD4+ CD8− → CD4− CD8+ pour tous les thymocytes', correct: false, correction: 'Non. Les voies CD4 et CD8 représentent deux devenirs, pas une transformation obligatoire de CD4 en CD8.' },
      { text: 'CD4− CD8− pendant toute la maturation, sans acquisition possible de corécepteur', correct: false, correction: 'Non chef. Les acquisitions successives de CD4/CD8 servent précisément à distinguer les étapes présentées.' },
    ],
    explanation: 'Le développement thymique conventionnel αβ passe par des stades double négatif, double positif et simple positif. Cette séquence ne doit pas être généralisée à toutes les autres populations T. (Cours, p. 23–24)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles propositions concernant les stades thymiques et CD3 sont exactes ?',
    options: [
      { text: 'Le terme double négatif désigne l’absence de CD4 et de CD8', correct: true, correction: 'Exact 🧠 Il ne définit pas à lui seul le statut de tous les autres marqueurs.' },
      { text: 'Des thymocytes double positifs en cours de sélection peuvent exprimer du CD3 à leur surface', correct: true, correction: 'Exact. Le CD3 associé au TCR peut déjà être présent en surface ; l’affirmation « toujours uniquement intracytoplasmique » du support est trop absolue.' },
      { text: 'Le thymocyte simple positif conventionnel exprime soit CD4, soit CD8', correct: true, correction: 'Oui. Il garde un seul de ces deux corécepteurs dans le modèle décrit.' },
      { text: 'Le thymocyte double positif exprime à la fois CD4 et CD8', correct: true, correction: 'Oui boss. C’est la définition de ce stade.' },
      { text: 'Tous les thymocytes double négatifs sont nécessairement dépourvus de CD3 de surface, quelle que soit leur voie de développement', correct: false, correction: 'Non chef. « Double négatif » porte sur CD4/CD8 ; le schéma simplifié du tout début de la voie αβ ne définit pas toutes les populations thymiques.' },
    ],
    explanation: 'Les qualificatifs double négatif, double positif et simple positif se rapportent à CD4/CD8. Le schéma du support simplifie CD3 : son expression de surface peut commencer avant le stade simple positif. (Cours, p. 23–24 ; expression de CD3 rectifiée)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quel est le principe de la sélection positive thymique ?',
    options: [
      { text: 'Activer une réponse contre un virus présent dans le thymus pour construire le premier TCR', correct: false, correction: 'Faux. La sélection est un processus de maturation portant sur des interactions avec le soi, pas une infection nécessaire.' },
      { text: 'Conserver les thymocytes capables d’interagir suffisamment avec un complexe peptide du soi–CMH du soi pour recevoir un signal de survie', correct: true, correction: 'Oui boss 🧠 Elle sélectionne des récepteurs capables de fonctionner dans le contexte du CMH de l’individu.' },
      { text: 'Remplacer le TCR de chaque thymocyte par un BCR fonctionnel', correct: false, correction: 'Non chef. La sélection T contrôle le TCR ; elle ne convertit pas la cellule en lymphocyte B.' },
      { text: 'Conserver en priorité les thymocytes dont le TCR reconnaît très fortement les protéines du soi', correct: false, correction: 'Non chef. Une forte autoréactivité expose à une sélection négative, pas à une conservation préférentielle.' },
      { text: 'Faire survivre les thymocytes qui ne reconnaissent aucun complexe peptide–CMH', correct: false, correction: 'Non. L’absence de signal approprié conduit à l’échec de sélection et à la mort par négligence.' },
    ],
    explanation: 'La sélection positive conserve les thymocytes dont le TCR interagit de façon appropriée avec des complexes peptide du soi–CMH du soi. Une interaction insuffisante ne fournit pas le signal nécessaire à leur survie. (Cours, p. 23–24 ; principe précisé)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les sélections thymiques ?',
    options: [
      { text: 'La sélection positive favorise la survie de thymocytes capables de reconnaître le CMH du soi dans un complexe peptide–CMH', correct: true, correction: 'Oui boss. Elle établit la capacité de reconnaissance dans le contexte du CMH de l’individu.' },
      { text: 'Une absence de reconnaissance utile lors de la sélection positive peut conduire à la mort du thymocyte', correct: true, correction: 'Exact. Une interaction nulle n’est pas une interaction faible suffisante pour survivre.' },
      { text: 'La sélection négative contribue à éliminer des thymocytes fortement réactifs à des complexes contenant des peptides du soi', correct: true, correction: 'Exact 🧠 C’est un mécanisme de tolérance centrale.' },
      { text: 'Les antigènes testés doivent obligatoirement provenir d’un agent infectieux', correct: false, correction: 'Non chef. Les sélections thymiques s’appuient sur la présentation du soi.' },
      { text: 'Une reconnaissance de plus en plus forte du soi améliore toujours la probabilité de survie', correct: false, correction: 'Faux. Au-delà d’une réactivité excessive, la sélection négative intervient ; la relation n’est pas « plus fort = mieux ».' },
    ],
    explanation: 'La sélection positive assure une reconnaissance utile du CMH du soi ; la sélection négative limite une autoréactivité excessive. Le modèle du cours doit être lu en distinguant une interaction suffisante pour survivre d’une interaction absente ou trop forte. (Cours, p. 23–24)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quelle association entre corécepteurs T et classes de CMH est correcte dans la voie conventionnelle décrite ?',
    options: [
      { text: 'La classe du CMH ne participe pas à l’orientation vers CD4 ou CD8', correct: false, correction: 'Non chef. Cette orientation est liée à la reconnaissance du complexe peptide–CMH lors de la sélection.' },
      { text: 'CD8 avec CMH de classe II ; CD4 avec CMH de classe I', correct: false, correction: 'Non chef. Les deux associations sont inversées.' },
      { text: 'CD8 avec CMH de classe I ; CD4 avec CMH de classe II', correct: true, correction: 'Oui boss 🎯 Le moyen mnémotechnique du cours donne 8×1 et 4×2.' },
      { text: 'CD4 et CD8 avec CMH de classe I uniquement', correct: false, correction: 'Non. L’association CD4–CMH II est essentielle dans le modèle décrit.' },
      { text: 'CD4 et CD8 avec CMH de classe II uniquement', correct: false, correction: 'Faux. Les lymphocytes CD8 conventionnels sont associés au CMH de classe I.' },
    ],
    explanation: 'Le cours associe CD8 au CMH I et CD4 au CMH II. La sélection thymique contribue à faire correspondre le corécepteur retenu au contexte de reconnaissance du TCR. (Cours, p. 23–25, 39)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles fonctions lymphocytaires T sont décrites dans le cours ?',
    options: [
      { text: 'Les lymphocytes T CD4 peuvent contribuer à l’activation de macrophages ou de polynucléaires', correct: true, correction: 'Oui. Le cours cite plusieurs fonctions de coordination de la réponse immune.' },
      { text: 'Les lymphocytes T CD4 sécrètent les immunoglobulines après leur transformation en plasmocytes', correct: false, correction: 'Non chef. Les plasmocytes sont issus de lymphocytes B ; les T CD4 peuvent les aider.' },
      { text: 'Les lymphocytes T CD8 reconnaissent des peptides présentés par le CMH de classe I', correct: true, correction: 'Exact 🎯 C’est leur contexte de reconnaissance conventionnel.' },
      { text: 'Les lymphocytes T CD8 peuvent exercer une cytotoxicité directe contre une cellule infectée', correct: true, correction: 'Oui boss. Ils peuvent déclencher la mort de la cellule cible.' },
      { text: 'Les lymphocytes T CD4 peuvent apporter une aide à la différenciation B et à la production d’anticorps', correct: true, correction: 'Exact. Aider la lignée B ne signifie pas devenir eux-mêmes des plasmocytes.' },
    ],
    explanation: 'Les CD8 sont notamment des effecteurs cytotoxiques. Les CD4 reconnaissent un peptide dans le contexte du CMH II et peuvent soutenir plusieurs composantes de la réponse immunitaire, dont la réponse B. (Cours, p. 24–25)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Comment interpréter les proportions lymphocytaires sanguines données dans le cours ?',
    options: [
      { text: 'Les proportions B/T/NK permettent à elles seules de distinguer ces cellules sur un frottis', correct: false, correction: 'Non chef. Une proportion ne remplace pas l’étude des marqueurs ; B et T sont difficiles à distinguer par leur seule morphologie.' },
      { text: 'B ≈ 70 %, T ≈ 20 %, NK ≈ 10 %, valeurs obligatoirement fixes chez tout adulte', correct: false, correction: 'Non chef. B et T sont inversés, et ces proportions ne sont pas obligatoirement fixes.' },
      { text: 'B ≈ 20 %, T ≈ 70 %, NK ≈ 10 %, avec environ deux tiers de CD4 parmi les T : ce sont des repères indicatifs', correct: true, correction: 'Oui boss 🧠 Ce sont les ordres de grandeur enseignés, pas des constantes identiques chez chaque personne.' },
      { text: 'Les plasmocytes constituent normalement la principale population lymphocytaire du sang', correct: false, correction: 'Non. Les plasmocytes sont normalement absents ou exceptionnellement observés dans le sang, pas dominants.' },
      { text: 'Les deux tiers de CD4 concernent l’ensemble des leucocytes, et non les lymphocytes T', correct: false, correction: 'Faux. Il faut conserver le bon dénominateur : le repère porte sur les T.' },
    ],
    explanation: 'Le cours donne des repères B/T/NK de 20/70/10 et CD4/CD8 de deux tiers/un tiers parmi les T. Ils doivent être présentés comme approximatifs et ne permettent pas une identification individuelle sur la seule cytologie. (Cours, p. 25)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles précautions sont nécessaires pour décrire les populations lympho-plasmocytaires sanguines ?',
    options: [
      { text: 'Un grand lymphocyte est nécessairement un lymphocyte B tumoral', correct: false, correction: 'Non chef. Des lymphocytes plus grands peuvent être activés ; taille, lignée et malignité ne sont pas équivalentes.' },
      { text: 'Les références adultes s’appliquent sans adaptation à tout âge', correct: false, correction: 'Faux. Le cours souligne précisément la variation liée à l’âge.' },
      { text: 'Les valeurs de référence lymphocytaires varient avec l’âge et sont généralement plus élevées chez le jeune enfant', correct: true, correction: 'Oui boss. Un repère adulte ne se transpose pas automatiquement à un enfant.' },
      { text: 'Les plasmocytes ne constituent pas une population habituelle abondante du sang normal', correct: true, correction: 'Exact. Le schéma du cours indique zéro dans le sang ; la mention « moins de 5 % » ne doit pas devenir une norme sanguine universelle.' },
      { text: 'La morphologie seule ne permet pas de distinguer clairement un lymphocyte B d’un lymphocyte T', correct: true, correction: 'Exact 🧠 Les marqueurs étudiés par immunophénotypage apportent une distinction plus fiable.' },
    ],
    explanation: 'L’interprétation tient compte de l’âge et du contexte. La cytologie décrit la cellule mais ne sépare pas de façon fiable les populations B et T ; les plasmocytes sont normalement quasiment absents du sang. (Cours, p. 25–26)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quelle description correspond à un petit lymphocyte sanguin normal sur les images du cours ?',
    options: [
      { text: 'Une grande cellule à noyau excentré et à zone claire périnucléaire caractéristique', correct: false, correction: 'Non chef. Cette association évoque plutôt la morphologie plasmocytaire présentée.' },
      { text: 'Une cellule à noyau plurilobé et à nombreuses granulations fines, avec un cytoplasme largement majoritaire', correct: false, correction: 'Faux. Cette description se rapproche d’un polynucléaire, pas du petit lymphocyte illustré.' },
      { text: 'Une cellule au cytoplasme intensément basophile et abondant, définissant nécessairement tous les petits lymphocytes normaux', correct: false, correction: 'Non chef. Un cytoplasme très basophile et plus développé fait plutôt discuter une activation ; ce n’est pas la description de tous les petits lymphocytes.' },
      { text: 'Une cellule à chromatine fine et à plusieurs nucléoles bien visibles définissant un lymphoblaste', correct: false, correction: 'Non. Le petit lymphocyte mature a une chromatine plus condensée ; les caractères proposés sont immatures.' },
      { text: 'Une cellule légèrement plus grande qu’une hématie, au noyau rond à chromatine condensée et au cytoplasme peu abondant', correct: true, correction: 'Oui boss 🎯 Le noyau occupe l’essentiel de la cellule : le rapport nucléo-cytoplasmique est élevé.' },
    ],
    explanation: 'Les images montrent un petit lymphocyte légèrement plus grand qu’une hématie, à noyau rond prédominant et cytoplasme réduit. Les granulations ne sont pas obligatoires ; certains grands lymphocytes peuvent en présenter. (Cours, p. 26, 37, 39)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Concernant les lymphocytes hyperbasophiles, quelles propositions sont exactes ?',
    options: [
      { text: 'Un lymphocyte hyperbasophile est par définition un plasmocyte tumoral', correct: false, correction: 'Faux. Il peut s’agir d’un lymphocyte activé ; il ne faut pas confondre basophilie, différenciation plasmocytaire et malignité.' },
      { text: 'Une proportion supérieure à 10 % suffit à prouver une mononucléose à EBV, indépendamment du contexte', correct: false, correction: 'Non chef. Le cours parle d’orientation ; la morphologie et cette proportion ne prouvent pas à elles seules l’étiologie.' },
      { text: 'Ils peuvent avoir un cytoplasme intensément bleu et parfois des nucléoles visibles', correct: true, correction: 'Exact 🧠 Ce sont les caractères décrits et illustrés dans le support.' },
      { text: 'La mononucléose infectieuse fait partie des situations dans lesquelles on peut les observer', correct: true, correction: 'Exact. Elle est un exemple important du cours, mais l’aspect n’est pas exclusivement lié à EBV.' },
      { text: 'Ils peuvent correspondre à des lymphocytes réactifs lors d’une infection virale', correct: true, correction: 'Oui boss. Leur activation peut expliquer cet aspect sans impliquer une prolifération tumorale.' },
    ],
    explanation: 'Les lymphocytes hyperbasophiles sont notamment observés dans des réponses virales. La mononucléose peut être évoquée dans le contexte approprié ; aucun aspect morphologique ni seuil isolé ne constitue une preuve spécifique d’infection à EBV. (Cours, p. 26, 37, 39)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle association morphologique et fonctionnelle correspond au plasmocyte ?',
    options: [
      { text: 'Noyau souvent excentré, cytoplasme basophile avec zone claire périnucléaire, et fonction de sécrétion d’anticorps', correct: true, correction: 'Oui boss 🧠 La zone claire correspond à la région de l’appareil de Golgi, dans une cellule spécialisée dans la sécrétion.' },
      { text: 'Noyau central occupant presque toute la cellule, cytoplasme très réduit et absence de lien avec la lignée B', correct: false, correction: 'Non chef. Le plasmocyte appartient à la lignée B et le petit lymphocyte n’a pas sa morphologie typique.' },
      { text: 'Cellule issue d’un lymphocyte T CD8 et spécialisée dans la cytotoxicité directe', correct: false, correction: 'Non. La différenciation plasmocytaire est B ; la cytotoxicité CD8 est une autre fonction.' },
      { text: 'Noyau plurilobé et fonction principale de phagocytose des bactéries', correct: false, correction: 'Faux. Ce n’est pas la description du plasmocyte ; sa fonction centrale est la sécrétion d’immunoglobulines.' },
      { text: 'Zone claire périnucléaire prouvant à elle seule un myélome multiple', correct: false, correction: 'Non chef. Elle aide à reconnaître une différenciation plasmocytaire ; elle ne prouve pas que la cellule est tumorale.' },
    ],
    explanation: 'Le plasmocyte est un dérivé B sécréteur d’anticorps. Le cours décrit un noyau excentré et une zone cytoplasmique claire périnucléaire ; la reconnaissance de cette morphologie ne suffit pas à diagnostiquer un myélome. (Cours, p. 22, 26–27)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles associations entre pathologie et population cellulaire sont celles présentées dans le cours ?',
    options: [
      { text: 'Leucémie lymphoïde chronique : prolifération de lymphocytes d’aspect mature', correct: true, correction: 'Oui boss. La morphologie contraste avec celle des lymphoblastes décrits.' },
      { text: 'Myélome multiple ou maladie de Kahler : prolifération plasmocytaire', correct: true, correction: 'Exact. Cette affection appartient aux néoplasies plasmocytaires.' },
      { text: 'Tout lymphocyte mature observé au frottis est nécessairement tumoral', correct: false, correction: 'Non chef. Mature désigne un état de différenciation, pas une preuve de malignité.' },
      { text: 'Leucémie aiguë lymphoblastique : prolifération de précurseurs lymphoïdes immatures', correct: true, correction: 'Exact 🎯 Le terme lymphoblastique renvoie aux cellules immatures.' },
      { text: 'Maladie de Waldenström : prolifération lymphoplasmocytaire', correct: true, correction: 'Oui. C’est l’association enseignée ; le diagnostic nécessite d’autres critères que l’aspect d’une cellule.' },
    ],
    explanation: 'Le cours relie les tableaux à des populations immatures, matures, lymphoplasmocytaires ou plasmocytaires. Ces associations orientent la compréhension des maladies, mais la morphologie seule ne confirme pas un diagnostic. (Cours, p. 26–27)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle comparaison morphologique entre lymphoblastes et lymphocytes de LLC correspond au support ?',
    options: [
      { text: 'Lymphoblastes : cellules plutôt grandes, chromatine fine et nucléoles possibles ; LLC : petits lymphocytes à chromatine condensée en mottes', correct: true, correction: 'Oui boss 🧠 Ce sont les deux portraits opposés dans le cours, tout en gardant une confirmation par des examens complémentaires.' },
      { text: 'Lymphoblastes et lymphocytes de LLC sont distingués par un noyau obligatoirement plurilobé dans la LLC', correct: false, correction: 'Faux. Le noyau des lymphocytes de LLC décrits est condensé, pas défini par une plurilobulation de polynucléaire.' },
      { text: 'La présence d’un seul nucléole permet de diagnostiquer une LAL sans autre donnée', correct: false, correction: 'Non chef. Un caractère morphologique isolé ne suffit pas à confirmer une leucémie aiguë lymphoblastique.' },
      { text: 'Un cytoplasme basophile suffit à classer une cellule comme lymphoblaste tumoral', correct: false, correction: 'Non. Des cellules réactives et des plasmocytes peuvent aussi être basophiles ; l’ensemble des caractères doit être étudié.' },
      { text: 'Lymphoblastes : noyau très condensé sans caractère d’immaturité ; LLC : chromatine toujours fine avec nombreux nucléoles', correct: false, correction: 'Non chef. Les caractéristiques proposées sont inversées par rapport aux descriptions du support.' },
    ],
    explanation: 'Le support oppose chromatine fine et nucléoles des cellules immatures à la chromatine très condensée des petits lymphocytes de LLC. La morphologie constitue une orientation et ne remplace pas la caractérisation diagnostique. (Cours, p. 26–27)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Concernant la tolérance périphérique des lymphocytes B, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle peut limiter des réponses de lymphocytes B matures dirigées contre des antigènes du soi', correct: true, correction: 'Oui boss. Son objectif reste de prévenir des réactions dommageables contre le soi.' },
      { text: 'Elle complète les contrôles de tolérance centrale réalisés pendant le développement B', correct: true, correction: 'Exact 🧠 Le contrôle médullaire n’est pas le seul niveau de protection contre l’autoréactivité.' },
      { text: 'Elle est inutile puisque la tolérance centrale garantit l’élimination de tous les lymphocytes potentiellement autoréactifs', correct: false, correction: 'Faux. Le cours présente justement un contrôle périphérique complémentaire ; le contrôle central n’est pas une garantie absolue.' },
      { text: 'Elle concerne des lymphocytes ayant rejoint les compartiments périphériques', correct: true, correction: 'Exact. C’est ce qui la distingue du contrôle central du lymphocyte B immature.' },
      { text: 'Elle remplace le réarrangement VDJ de la chaîne lourde au stade Pro B', correct: false, correction: 'Non chef. Construire le récepteur et contrôler son autoréactivité sont des processus différents.' },
    ],
    explanation: 'La tolérance périphérique constitue un contrôle complémentaire de l’autoréactivité après la maturation centrale. Elle ne doit être confondue ni avec les réarrangements initiaux du récepteur ni avec les processus de différenciation plasmocytaire. (Cours, p. 22, 39)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Que décrit la formule leucocytaire d’un hémogramme ?',
    options: [
      { text: 'Uniquement le nombre total de leucocytes, sans distinction des populations', correct: false, correction: 'Faux. Le nombre total sert au calcul, mais la formule répartit les différents types de leucocytes.' },
      { text: 'Uniquement la concentration sanguine en hémoglobine', correct: false, correction: 'Non chef. L’hémoglobine est un autre paramètre de l’hémogramme, pas la formule des globules blancs.' },
      { text: 'Uniquement la proportion des plaquettes parmi les cellules sanguines', correct: false, correction: 'Non chef. Les plaquettes ne sont pas les populations classées par la formule leucocytaire.' },
      { text: 'La répartition des différentes populations de leucocytes, à interpréter notamment en nombres absolus', correct: true, correction: 'Oui boss 🧠 Elle distingue notamment PNN, PNE, PNB, lymphocytes et monocytes.' },
      { text: 'Le nombre de chromosomes contenus dans chaque lymphocyte', correct: false, correction: 'Non. La formule compte des populations sanguines ; elle n’est pas une analyse du caryotype.' },
    ],
    explanation: 'L’hémogramme quantifie plusieurs paramètres, dont l’hémoglobine, les hématies, les plaquettes et les leucocytes. La formule leucocytaire décrit la répartition des populations de globules blancs. (Cours, p. 27–29)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles propositions sur les méthodes d’étude de la formule leucocytaire sont exactes ?',
    options: [
      { text: 'Un automate ne peut jamais produire d’alerte devant des cellules potentiellement pathologiques', correct: false, correction: 'Non chef. Des alertes sont possibles ; elles ne remplacent pas la caractérisation morphologique des anomalies.' },
      { text: 'Les techniques automatisées et l’observation morphologique peuvent être complémentaires', correct: true, correction: 'Oui 🎯 Le comptage et la caractérisation morphologique ne répondent pas exactement aux mêmes besoins.' },
      { text: 'Un analyseur de lames peut proposer une préclassification à partir d’images', correct: true, correction: 'Exact. Le biologiste peut contrôler ou corriger les classifications proposées.' },
      { text: 'Un automate peut différencier les principales populations leucocytaires', correct: true, correction: 'Exact 🧠 Le cours cite les cinq populations habituelles.' },
      { text: 'L’examen du frottis peut préciser la morphologie de cellules anormales', correct: true, correction: 'Oui boss. Il complète les résultats et les éventuelles alertes de l’automate.' },
    ],
    explanation: 'L’automate établit une numération et une formule, tandis que le frottis et l’analyse d’images contribuent à la caractérisation morphologique. La formulation du support disant que l’automate ne repère aucune anomalie doit être précisée : il peut générer des alertes. (Cours, p. 28 et 36–38 ; capacités de l’automate précisées)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Chez un adulte, les leucocytes totaux sont à 8 G/L et les PNN représentent 60 % de la formule. Quel est le nombre absolu de PNN ?',
    options: [
      { text: '4,8 G/L', correct: true, correction: 'Oui boss 🎯 8 × 0,60 = 4,8 G/L.' },
      { text: '0,60 G/L', correct: false, correction: 'Non chef. 0,60 est la fraction de PNN ; il faut la multiplier par les 8 G/L de leucocytes.' },
      { text: '6 G/L', correct: false, correction: 'Faux. Convertir 60 % directement en 6 G/L ignore la numération totale.' },
      { text: '8 G/L', correct: false, correction: 'Non. Cela compterait tous les leucocytes comme des PNN, alors qu’ils représentent 60 %.' },
      { text: '48 G/L', correct: false, correction: 'Non chef. Le pourcentage doit être converti en fraction : 60 % = 0,60, pas 6.' },
    ],
    explanation: 'Le nombre absolu d’une population est la numération leucocytaire totale multipliée par sa proportion : 8 × 60/100 = 4,8 G/L. Cette valeur est dans le repère adulte de PNN 1,5–7 G/L donné par le cours. (Cours, p. 29–30 ; application du calcul)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Trois adultes ont chacun 40 % de PNN et 60 % de lymphocytes. Leurs leucocytes totaux sont respectivement de 3, 6 et 15 G/L. Quelles conclusions sont correctes selon les repères du cours ?',
    options: [
      { text: 'Les trois ont nécessairement une hyperlymphocytose absolue parce que les lymphocytes dépassent 50 %', correct: false, correction: 'Faux. Le pourcentage seul ne suffit pas ; les valeurs absolues sont 1,8, 3,6 et 9 G/L.' },
      { text: 'Leurs pourcentages identiques imposent une même anomalie leucocytaire', correct: false, correction: 'Non chef. Les numérations absolues diffèrent parce que les nombres totaux sont différents.' },
      { text: 'Le premier a 1,2 G/L de PNN, soit une neutropénie', correct: true, correction: 'Exact 🧠 3 × 0,40 = 1,2, en dessous du repère de 1,5 G/L.' },
      { text: 'Le deuxième a 3,6 G/L de lymphocytes, dans le repère adulte indiqué', correct: true, correction: 'Oui boss. 6 × 0,60 = 3,6 G/L, entre 1 et 4.' },
      { text: 'Le troisième a 9 G/L de lymphocytes, soit une hyperlymphocytose', correct: true, correction: 'Exact 🎯 15 × 0,60 = 9 G/L, au-dessus de 4.' },
    ],
    explanation: 'Cet exemple du cours montre que la même répartition en pourcentage peut correspondre à des situations différentes. Les PNN sont à 1,2, 2,4 et 6 G/L ; les lymphocytes à 1,8, 3,6 et 9 G/L. (Cours, p. 29–30)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Dans le cas de la femme de 20 ans présentant une angine sévère, les leucocytes sont à 3,2 G/L et les PNN à 5 %. Quel est le nombre absolu de PNN ?',
    options: [
      { text: '1,6 G/L', correct: false, correction: 'Faux. Cette valeur correspondrait à 50 % des leucocytes, pas 5 %.' },
      { text: '0,016 G/L', correct: false, correction: 'Non chef. 5 % = 0,05 ; 3,2 × 0,05 vaut 0,16 et non 0,016.' },
      { text: '2,752 G/L', correct: false, correction: 'Non. Cette valeur correspond aux lymphocytes, qui représentent 86 % dans le cas.' },
      { text: '5 G/L', correct: false, correction: 'Non chef. Tu confonds le pourcentage donné et le nombre absolu recherché.' },
      { text: '0,16 G/L', correct: true, correction: 'Oui boss 🎯 Le calcul est 3,2 × 5/100 = 0,16 G/L.' },
    ],
    explanation: 'Les PNN sont à 0,16 G/L, soit 160/µL. Il s’agit d’une neutropénie très profonde, appelée agranulocytose dans le corrigé du cas, avec un risque infectieux élevé. (Cours, p. 34–35)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Chez la femme de 20 ans présentant une angine sévère, Hb = 128 g/L, plaquettes = 350 G/L, leucocytes = 3,2 G/L, PNN = 5 % et lymphocytes = 86 %. Quelles interprétations sont exactes selon le cours ?',
    options: [
      { text: 'Les lymphocytes sont à 2,752 G/L malgré leur proportion de 86 %', correct: true, correction: 'Exact 🎯 3,2 × 0,86 = 2,752 G/L, dans le repère adulte indiqué.' },
      { text: 'Les PNN sont à 0,16 G/L et représentent l’anomalie majeure du cas', correct: true, correction: 'Oui boss. La neutropénie est très profonde.' },
      { text: 'Le nombre total de leucocytes est inférieur au repère adulte 4–10 G/L', correct: true, correction: 'Exact 🧠 3,2 G/L correspond à une leucopénie selon ce repère.' },
      { text: 'L’hémoglobine et les plaquettes sont considérées normales dans le corrigé de cette patiente', correct: true, correction: 'Oui. Le support localise ici l’anomalie sur la lignée leucocytaire.' },
      { text: 'Une proportion lymphocytaire de 86 % démontre une hyperlymphocytose absolue', correct: false, correction: 'Non chef. Le calcul montre justement une numération absolue lymphocytaire normale.' },
    ],
    explanation: 'Dans le cas, la leucopénie s’accompagne surtout d’une neutropénie très profonde. La prédominance relative des lymphocytes ne correspond pas à une hyperlymphocytose absolue. Le corrigé considère l’hémoglobine et les plaquettes normales. (Cours, p. 34–35)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Chez une femme de 20 ans présentant une angine sévère, GB = 3,2 G/L et PNN = 5 %, soit 0,16 G/L. Quelle conclusion peut-on tirer sur la cause de cette neutropénie profonde à partir de la seule NFS ?',
    options: [
      { text: 'L’angine ne peut pas être liée au risque infectieux puisqu’il reste des leucocytes', correct: false, correction: 'Non chef. Le nombre total ne remplace pas la numération des PNN, qui est très abaissée.' },
      { text: 'La neutropénie est identifiée, mais son étiologie nécessite le contexte clinique et d’autres éléments', correct: true, correction: 'Oui boss 🧠 Le résultat quantitatif ne suffit pas à établir la cause.' },
      { text: 'L’infection est obligatoirement la cause initiale de la neutropénie', correct: false, correction: 'Faux. Le support rappelle qu’une neutropénie peut aussi favoriser une infection.' },
      { text: 'Une leucémie lymphoïde chronique est certaine parce que les lymphocytes sont à 86 %', correct: false, correction: 'Non. Les lymphocytes absolus ne sont pas augmentés, et un pourcentage n’établit pas ce diagnostic.' },
      { text: 'Une origine médicamenteuse est prouvée par le nombre de PNN', correct: false, correction: 'Non chef. C’est une cause possible évoquée par le cours, mais la NFS ne démontre pas à elle seule cette origine.' },
    ],
    explanation: 'Le cas identifie une neutropénie profonde. L’origine médicamenteuse est possible, comme d’autres causes, mais elle n’est pas prouvée par ce seul hémogramme. Le lien entre neutropénie et infection ne peut pas être réduit à une causalité unique certaine. (Cours, p. 35)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quels repères de numération chez l’adulte sont explicitement donnés dans le tableau du cours ?',
    options: [
      { text: 'La borne basse normale des lymphocytes est identique dans toutes les sources', correct: false, correction: 'Non chef. Le tableau signale explicitement une variation entre 1 et 1,5 G/L selon le référentiel.' },
      { text: 'PNN : 1,5–7 G/L', correct: true, correction: 'Exact. L’interprétation quantitative des PNN s’appuie sur ce repère dans les exercices.' },
      { text: 'Leucocytes totaux : 4–10 G/L', correct: true, correction: 'Oui boss 🧠 C’est le repère total indiqué.' },
      { text: 'PNE : 0,05–0,5 G/L', correct: true, correction: 'Oui. Au-dessus de la borne du tableau, on parle d’hyperéosinophilie.' },
      { text: 'Monocytes : 0,1–1 G/L', correct: true, correction: 'Exact 🎯 C’est le repère monocytaire retenu dans le support.' },
    ],
    explanation: 'Ces valeurs sont les repères du tableau du cours pour l’adulte. Elles ne remplacent pas les intervalles du laboratoire adaptés au contexte ; la borne inférieure des lymphocytes est présentée comme variable. (Cours, p. 29 et 38)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Dans le cas de l’homme de 65 ans, les leucocytes sont à 30 G/L et les PNN à 9 %. Quelle est la numération absolue des PNN ?',
    options: [
      { text: '27 G/L, donc une polynucléose neutrophile majeure', correct: false, correction: 'Non chef. 9 % = 0,09, et non 0,9.' },
      { text: '0,09 G/L, donc une neutropénie profonde', correct: false, correction: 'Non chef. 0,09 est la fraction, pas le nombre absolu ; il faut multiplier par 30.' },
      { text: '9 G/L, donc une polynucléose neutrophile', correct: false, correction: 'Non. On ne transforme pas directement 9 % en 9 G/L.' },
      { text: '0,27 G/L, donc une neutropénie sévère', correct: false, correction: 'Faux. 30 × 0,09 vaut 2,7, pas 0,27.' },
      { text: '2,7 G/L, dans le repère adulte du cours', correct: true, correction: 'Oui boss 🎯 Le faible pourcentage n’impose pas une neutropénie quand le total est élevé.' },
    ],
    explanation: 'Le calcul donne 30 × 9/100 = 2,7 G/L de PNN. Cette valeur est dans le repère 1,5–7 G/L du cours malgré une proportion relative faible. (Cours, p. 35)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Chez un homme de 65 ans asymptomatique, GB = 30 G/L, PNN = 9 %, PNE = 1 %, PNB = 0 %, lymphocytes = 88 % et monocytes = 2 %. Quelles interprétations sont correctes ?',
    options: [
      { text: 'Les monocytes sont à 0,6 G/L, dans le repère du tableau', correct: true, correction: 'Exact. 30 × 0,02 = 0,6 G/L.' },
      { text: 'Les PNN sont nécessairement en neutropénie parce qu’ils représentent seulement 9 %', correct: false, correction: 'Non chef. Leur nombre absolu est de 2,7 G/L, dans le repère adulte indiqué.' },
      { text: 'Les lymphocytes sont à 26,4 G/L et présentent une hyperlymphocytose majeure', correct: true, correction: 'Oui boss 🎯 30 × 0,88 = 26,4 G/L.' },
      { text: 'Il existe une hyperleucocytose totale', correct: true, correction: 'Exact 🧠 30 G/L est au-dessus du repère de 10 G/L.' },
      { text: 'Les PNE sont à 0,3 G/L, dans le repère du tableau', correct: true, correction: 'Oui. 30 × 0,01 = 0,3 G/L.' },
    ],
    explanation: 'L’anomalie majeure est l’hyperlymphocytose absolue à 26,4 G/L, associée à une hyperleucocytose totale. Les PNN, PNE et monocytes calculés sont dans les repères du tableau ; il ne faut pas conclure sur leurs seuls pourcentages. (Cours, p. 29 et 35)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Chez un homme de 65 ans asymptomatique, GB = 30 G/L et lymphocytes = 88 %, soit 26,4 G/L. Quelle orientation est compatible avec cette hyperlymphocytose majeure, sans affirmer un diagnostic sur la seule NFS ?',
    options: [
      { text: 'Un myélome est démontré parce que tout lymphocyte est un plasmocyte', correct: false, correction: 'Non chef. Les lymphocytes et les plasmocytes doivent être distingués ; cette NFS ne suffit pas à diagnostiquer un myélome.' },
      { text: 'Une absence totale de pathologie est prouvée par l’absence de symptôme', correct: false, correction: 'Faux. Une anomalie sanguine peut être découverte chez une personne asymptomatique.' },
      { text: 'Une agranulocytose est prouvée par le pourcentage de 9 % de PNN', correct: false, correction: 'Non. Les PNN absolus sont à 2,7 G/L, pas en agranulocytose.' },
      { text: 'Une LLC est certaine sur le seul chiffre de 88 % de lymphocytes', correct: false, correction: 'Non chef. Une proportion, même élevée, ne démontre ni la clonalité ni le phénotype de la population.' },
      { text: 'Un syndrome lymphoprolifératif, notamment une LLC, est une hypothèse à caractériser', correct: true, correction: 'Oui boss 🧠 C’est l’orientation du corrigé ; une caractérisation, notamment immunophénotypique, reste nécessaire.' },
    ],
    explanation: 'Le cours évoque une LLC ou un autre syndrome lymphoprolifératif devant cette hyperlymphocytose. Il s’agit d’une orientation : la numération doit être complétée par l’étude de la population, notamment sa morphologie et son immunophénotype. (Cours, p. 26–28 et 35 ; limite diagnostique précisée)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Chez un adulte, GB = 10 G/L et PNE = 12 %. Quelles interprétations sont exactes selon les repères du cours ?',
    options: [
      { text: 'Il existe une hyperéosinophilie selon le tableau', correct: true, correction: 'Oui boss. Le nombre absolu dépasse la borne de 0,5 G/L donnée dans le cours.' },
      { text: 'Un diagnostic certain de parasitose à partir de cette seule valeur', correct: false, correction: 'Non chef. L’hyperéosinophilie peut avoir plusieurs causes ; ce calcul ne démontre pas son origine.' },
      { text: 'Les PNE sont à 1,2 G/L', correct: true, correction: 'Exact 🧠 10 × 0,12 = 1,2 G/L.' },
      { text: '12 G/L de PNE, parce que le pourcentage devient directement une concentration', correct: false, correction: 'Faux. Il faut appliquer le pourcentage au nombre total.' },
      { text: 'La numération des PNN ne peut pas être calculée sans leur propre proportion', correct: true, correction: 'Oui 🎯 Le pourcentage de PNE ne donne pas, à lui seul, celui des PNN.' },
    ],
    explanation: 'Le nombre absolu de PNE vaut 10 × 12/100 = 1,2 G/L. Il dépasse le repère adulte du tableau. L’anomalie quantitative ne suffit pas à identifier une cause précise. (Cours, p. 8 et 29 ; application du calcul)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Chez un adulte, GB = 2 G/L et monocytes = 12 %. Quelle conclusion est correcte selon le tableau du cours ?',
    options: [
      { text: 'Les monocytes sont à 2,4 G/L, ce qui prouve une hypermonocytose', correct: false, correction: 'Faux. Tu as utilisé 1,2 au lieu de 0,12 pour 12 %.' },
      { text: 'Le nombre total de leucocytes est normal parce que les monocytes dépassent 10 %', correct: false, correction: 'Non. Le total à 2 G/L est inférieur au repère adulte de 4 G/L.' },
      { text: 'Les monocytes sont à 0,24 G/L, sans hypermonocytose absolue selon ce repère', correct: true, correction: 'Oui boss 🎯 2 × 0,12 = 0,24 G/L, entre 0,1 et 1.' },
      { text: 'Les monocytes sont à 12 G/L, ce qui prouve une hypermonocytose', correct: false, correction: 'Non chef. Le nombre de 12 désigne un pourcentage, pas des G/L.' },
      { text: 'Une proportion de 12 % suffit toujours à diagnostiquer une hypermonocytose absolue', correct: false, correction: 'Non chef. Avec un total faible, le nombre absolu peut rester dans le repère.' },
    ],
    explanation: 'Les monocytes valent 0,24 G/L, dans le repère du tableau, malgré leur proportion relative de 12 %. Le patient a néanmoins une leucopénie totale à 2 G/L, dont l’interprétation nécessite la formule complète et le contexte. (Cours, p. 29–30 ; application du calcul)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles précautions permettent d’éviter une mauvaise interprétation de la formule leucocytaire ?',
    options: [
      { text: 'Appliquer exactement les mêmes bornes aux lymphocytes de tous les âges', correct: false, correction: 'Non chef. La numération lymphocytaire physiologique varie avec l’âge.' },
      { text: 'Tenir compte de l’âge, car les repères lymphocytaires de l’enfant diffèrent de ceux de l’adulte', correct: true, correction: 'Exact 🧠 Une valeur pédiatrique ne se classe pas automatiquement avec le repère adulte.' },
      { text: 'Utiliser les intervalles du référentiel ou du laboratoire adapté au contexte', correct: true, correction: 'Oui 🎯 Le support signale déjà que certaines bornes diffèrent selon les sources.' },
      { text: 'Ne pas déduire une pathologie du seul terme inversion de formule', correct: true, correction: 'Exact. Une prédominance relative des lymphocytes peut correspondre à des nombres absolus normaux.' },
      { text: 'Calculer les nombres absolus avant de conclure à une hausse ou une baisse d’une population', correct: true, correction: 'Oui boss. C’est le point central des exercices.' },
    ],
    explanation: 'L’interprétation repose sur les nombres absolus, les repères adaptés à l’âge et le contexte. Le terme inversion de formule ne remplace pas cette analyse ; les intervalles ne sont pas universels pour toutes les populations. (Cours, p. 25 et 29–30)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'À combien de PNN par microlitre correspond une numération de 0,16 G/L ?',
    options: [
      { text: '160 000 PNN/µL', correct: false, correction: 'Non. Cela correspondrait à 160 G/L.' },
      { text: '16 PNN/µL', correct: false, correction: 'Non chef. Il manque un facteur dix dans cette conversion.' },
      { text: '0,16 PNN/µL', correct: false, correction: 'Non chef. Les unités changent : un giga par litre n’est pas une cellule par microlitre.' },
      { text: '1 600 PNN/µL', correct: false, correction: 'Faux. Cela correspond à 1,6 G/L et non à 0,16.' },
      { text: '160 PNN/µL', correct: true, correction: 'Oui boss 🎯 1 G/L = 1 000 cellules/µL ; 0,16 G/L = 160/µL.' },
    ],
    explanation: 'G signifie 10⁹. Un litre contient 10⁶ microlitres, donc 1 G/L vaut 10³ cellules/µL. Le cas à 0,16 G/L correspond ainsi à 160 PNN/µL. (Cours, p. 29 et 35 ; conversion d’unités)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles étapes résument correctement l’analyse d’un hémogramme dans les exercices de ce cours ?',
    options: [
      { text: 'Associer la numération totale de leucocytes à la formule pour obtenir les nombres absolus', correct: true, correction: 'Oui boss. La formule ne s’interprète pas isolément du total.' },
      { text: 'Considérer toute NFS chez une personne asymptomatique comme nécessairement normale', correct: false, correction: 'Non chef. Le deuxième cas montre une hyperlymphocytose majeure découverte sans signe clinique particulier.' },
      { text: 'Comparer les nombres absolus à des repères adaptés au patient', correct: true, correction: 'Exact. L’âge et le référentiel utilisé interviennent.' },
      { text: 'Examiner les différentes lignées, dont l’hémoglobine, les plaquettes et les leucocytes', correct: true, correction: 'Exact 🧠 Le corrigé propose cette lecture structurée.' },
      { text: 'Distinguer anomalie quantitative, orientation diagnostique et diagnostic confirmé', correct: true, correction: 'Oui 🎯 Une hyperlymphocytose peut orienter sans prouver à elle seule une LLC.' },
    ],
    explanation: 'Les exercices combinent lecture des lignées, calcul des nombres absolus et interprétation dans le contexte. Une anomalie numérique constitue un point de départ, sans remplacer la caractérisation nécessaire d’une maladie. (Cours, p. 27–30 et 34–35)'
  },
]
