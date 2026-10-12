export const meta = {
  title: 'Hémostase primaire',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quel est le principe général de l’hémostase physiologique ?',
    options: [
      { text: 'Arrêter une perte sanguine tout en limitant la formation excessive de thrombus.', correct: true, correction: 'Oui. L’hémostase équilibre les mécanismes prohémostatiques et antithrombotiques.' },
      { text: 'Transformer immédiatement toutes les protéines plasmatiques en fibrine.', correct: false, correction: 'Non. La formation de fibrine doit rester localisée et contrôlée.' },
      { text: 'Former des caillots permanents dans tous les vaisseaux.', correct: false, correction: 'Non. Une thrombose diffuse gênerait la circulation et n’est pas l’objectif de l’hémostase.' },
      { text: 'Empêcher totalement l’activation des plaquettes, même après une lésion.', correct: false, correction: 'Non. Les plaquettes doivent pouvoir s’activer au site d’une brèche.' },
      { text: 'Dissoudre le sang circulant pour prévenir les saignements.', correct: false, correction: 'Non. La fibrinolyse dissout le caillot devenu inutile, pas le sang circulant.' },
    ],
    explanation: 'L’hémostase protège de l’hémorragie sans provoquer d’obstruction vasculaire excessive : c’est une balance dynamique. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'À propos des trois grands processus de l’hémostase, quelles propositions sont exactes ?',
    options: [
      { text: 'La fibrinolyse participe à l’élimination du caillot après réparation de la brèche.', correct: true, correction: 'Oui. Elle intervient secondairement pour restaurer la perméabilité du vaisseau.' },
      { text: 'La coagulation ne débute qu’une fois l’hémostase primaire totalement terminée.', correct: false, correction: 'Non. Ces mécanismes se chevauchent largement dans le temps.' },
      { text: 'La coagulation produit une trame de fibrine qui consolide ce thrombus.', correct: true, correction: 'Oui. La fibrine renforce le clou plaquettaire initialement fragile.' },
      { text: 'La fibrinolyse correspond à la fabrication des plaquettes par la moelle.', correct: false, correction: 'Non. La production plaquettaire relève de la mégacaryocytopoïèse.' },
      { text: 'L’hémostase primaire forme un thrombus plaquettaire initial.', correct: true, correction: 'Oui. Les plaquettes constituent le premier bouchon au niveau de la brèche.' },
    ],
    explanation: 'Le découpage en étapes aide à apprendre, mais hémostase primaire et coagulation se déroulent en grande partie en parallèle. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Une brèche vasculaire vient de se former. Que fournit en premier l’hémostase primaire ?',
    options: [
      { text: 'Une cicatrice endothéliale définitive.', correct: false, correction: 'Non. La réparation tissulaire se poursuit en parallèle et demande davantage de temps.' },
      { text: 'Un réseau insoluble de fibrine déjà pleinement stabilisé.', correct: false, correction: 'Non. La production de fibrine correspond à la coagulation plasmatique.' },
      { text: 'Une augmentation généralisée du calibre des vaisseaux.', correct: false, correction: 'Non. La réponse vasculaire initiale décrite est au contraire une vasoconstriction locale.' },
      { text: 'La disparition immédiate du caillot par fibrinolyse.', correct: false, correction: 'Non. La fibrinolyse intervient après la constitution du caillot, lorsqu’il n’est plus nécessaire.' },
      { text: 'Un bouchon constitué surtout de plaquettes, encore fragile.', correct: true, correction: 'Oui. Le thrombus plaquettaire initial doit être consolidé par la fibrine.' },
    ],
    explanation: 'Le clou plaquettaire est la réponse rapide de l’hémostase primaire ; seul, il est insuffisamment solide. (Cours, p. 2 et 8)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quels mécanismes caractérisent un endothélium vasculaire intact ?',
    options: [
      { text: 'Il libère des médiateurs, dont le monoxyde d’azote, qui freinent l’activation plaquettaire.', correct: true, correction: 'Oui. Le NO est cité parmi les inhibiteurs solubles de l’activation plaquettaire.' },
      { text: 'Il expose normalement le collagène sous-endothélial au sang circulant.', correct: false, correction: 'Non. La monocouche endothéliale intacte sépare le sang du collagène sous-jacent.' },
      { text: 'Il présente des glycosaminoglycanes à activité anticoagulante.', correct: true, correction: 'Oui. Les héparanes sulfates endothéliaux participent à la protection antithrombotique.' },
      { text: 'Il déclenche spontanément l’adhésion plaquettaire sur toute sa surface.', correct: false, correction: 'Non. L’endothélium sain est thromborésistant.' },
      { text: 'Il favorise la fibrinolyse de petits débuts de caillots.', correct: true, correction: 'Oui. L’endothélium sain contribue à éliminer les formations thrombotiques inappropriées.' },
    ],
    explanation: 'La surface endothéliale intacte s’oppose à l’activation des plaquettes et à la coagulation, tout en soutenant la fibrinolyse. (Cours, p. 3)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle modification rend la paroi d’un vaisseau lésé favorable à la formation d’un clou plaquettaire ?',
    options: [
      { text: 'La transformation du monoxyde d’azote en fibrinogène.', correct: false, correction: 'Non. Le NO inhibe l’activation plaquettaire ; il ne devient pas du fibrinogène.' },
      { text: 'La destruction complète du collagène sous-endothélial.', correct: false, correction: 'Non. Le collagène exposé participe à l’adhésion plaquettaire.' },
      { text: 'La mise à nu du sous-endothélium, riche notamment en collagène et en VWF.', correct: true, correction: 'Oui. Le contact du sang avec cette couche thrombogène permet l’arrêt des plaquettes.' },
      { text: 'La conversion de l’endothélium sain en moelle osseuse.', correct: false, correction: 'Non. La lésion expose des composants sous-endothéliaux sans modifier ainsi la nature du tissu.' },
      { text: 'La disparition de tous les récepteurs de la surface plaquettaire.', correct: false, correction: 'Non. L’adhésion exige au contraire des récepteurs plaquettaires fonctionnels.' },
    ],
    explanation: 'La barrière endothéliale rompue laisse le sang rencontrer des composants sous-endothéliaux prohémostatiques. (Cours, p. 4)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Au site d’une lésion vasculaire, que contient ou permet le sous-endothélium exposé ?',
    options: [
      { text: 'Une surface toujours aussi thromborésistante que l’endothélium intact.', correct: false, correction: 'Non. Le sous-endothélium exposé est au contraire thrombogène.' },
      { text: 'Du collagène pouvant interagir avec les plaquettes.', correct: true, correction: 'Oui. Le collagène contribue à retenir les plaquettes au niveau de la brèche.' },
      { text: 'Du facteur de Willebrand participant à l’accrochage plaquettaire.', correct: true, correction: 'Oui. Le VWF sous-endothélial fournit un point d’ancrage aux plaquettes.' },
      { text: 'Du facteur tissulaire impliqué dans la coagulation.', correct: true, correction: 'Oui. Ce composant participe à l’initiation de la cascade de coagulation.' },
      { text: 'Une couche formée uniquement de globules rouges.', correct: false, correction: 'Non. Il s’agit de matrice extracellulaire et de protéines de la paroi vasculaire.' },
    ],
    explanation: 'Le sous-endothélium exposé lie la lésion aux premières réactions plaquettaires et à la coagulation. (Cours, p. 4)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Dans quelle lignée se forment les plaquettes circulantes ?',
    options: [
      { text: 'Les lymphocytes B après activation antigénique.', correct: false, correction: 'Non. L’activation lymphocytaire n’est pas l’origine des plaquettes.' },
      { text: 'La lignée médullaire mégacaryocytaire.', correct: true, correction: 'Oui. Les mégacaryocytes de la moelle libèrent des fragments cytoplasmiques devenant plaquettes.' },
      { text: 'La lignée érythrocytaire mature, après perte de l’hémoglobine.', correct: false, correction: 'Non. Les érythrocytes ne donnent pas naissance aux plaquettes.' },
      { text: 'Le fibrinogène plasmatique après polymérisation.', correct: false, correction: 'Non. Le fibrinogène est une protéine, pas un précurseur cellulaire plaquettaire.' },
      { text: 'Les cellules endothéliales, après détachement de leur noyau.', correct: false, correction: 'Non. L’endothélium produit notamment du VWF, pas les plaquettes circulantes.' },
    ],
    explanation: 'La différenciation médullaire mène au mégacaryocyte, qui émet les fragments anucléés que sont les plaquettes. (Cours, p. 4-5)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'À propos de la mégacaryocytopoïèse, quelles affirmations sont justes ?',
    options: [
      { text: 'Un mégacaryocyte mature peut libérer de nombreuses plaquettes.', correct: true, correction: 'Oui. La fragmentation de ses prolongements fournit un grand nombre de plaquettes.' },
      { text: 'La maturation mégacaryocytaire comporte des cycles de réplication de l’ADN sans division cellulaire complète.', correct: true, correction: 'Oui. L’endomitose rend le mégacaryocyte volumineux et polyploïde.' },
      { text: 'Elle est stimulée notamment par la thrombopoïétine.', correct: true, correction: 'Oui. La TPO est un régulateur majeur de la production plaquettaire.' },
      { text: 'Les plaquettes naissent par division binaire d’autres plaquettes circulantes.', correct: false, correction: 'Non. Elles proviennent de mégacaryocytes médullaires, non de plaquettes préexistantes.' },
      { text: 'Les plaquettes conservent chacune le noyau entier du mégacaryocyte.', correct: false, correction: 'Non. Elles sont anucléées.' },
    ],
    explanation: 'La production plaquettaire associe maturation d’un mégacaryocyte sous l’effet de la TPO et libération de fragments anucléés. (Cours, p. 4-5)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle caractéristique distingue normalement une plaquette d’un mégacaryocyte ?',
    options: [
      { text: 'La plaquette possède plusieurs noyaux fonctionnels.', correct: false, correction: 'Non. Les plaquettes sont anucléées.' },
      { text: 'La plaquette est synthétisée par polymérisation de la fibrine.', correct: false, correction: 'Non. Elle est produite par fragmentation mégacaryocytaire.' },
      { text: 'La plaquette est plus grande que le mégacaryocyte.', correct: false, correction: 'Non. Le mégacaryocyte est une très grande cellule médullaire.' },
      { text: 'La plaquette est un petit fragment cellulaire dépourvu de noyau.', correct: true, correction: 'Oui. Elle dérive d’un mégacaryocyte géant mais ne contient pas son noyau.' },
      { text: 'La plaquette ne possède pas de membrane plasmique.', correct: false, correction: 'Non. Sa membrane porte notamment des récepteurs glycoprotéiques.' },
    ],
    explanation: 'Un très grand mégacaryocyte de la moelle libère de petites plaquettes anucléées dans la circulation. (Cours, p. 5-6)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Concernant les plaquettes au repos, quelles données sont rapportées dans le cours ?',
    options: [
      { text: 'Elles ont une forme globalement discoïde.', correct: true, correction: 'Oui. C’est leur morphologie de repos décrite dans le cours.' },
      { text: 'Leur durée de vie est de l’ordre d’une semaine.', correct: true, correction: 'Oui. Le cours retient environ sept jours.' },
      { text: 'Leurs phospholipides négatifs sont principalement exposés sur le feuillet externe au repos.', correct: false, correction: 'Non. Le cours place ces phospholipides sur le feuillet interne au repos.' },
      { text: 'Leur numération usuelle est de l’ordre de 150 à 400 G/L.', correct: true, correction: 'Oui. Il s’agit de la plage donnée pour les plaquettes circulantes.' },
      { text: 'Elles sont dépourvues de noyau.', correct: true, correction: 'Oui. Ce sont des fragments anucléés du mégacaryocyte.' },
    ],
    explanation: 'Le cours associe à la plaquette de repos une petite taille, une forme discoïde, l’absence de noyau et une asymétrie membranaire. (Cours, p. 6)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Au repos, où sont surtout localisés les phospholipides membranaires négativement chargés des plaquettes ?',
    options: [
      { text: 'Sur le feuillet interne de leur membrane plasmique.', correct: true, correction: 'Oui. L’asymétrie de la bicouche garde initialement ces charges vers l’intérieur.' },
      { text: 'À l’extérieur de la membrane, comme lors de l’activation.', correct: false, correction: 'Non. L’exposition externe survient après réarrangement membranaire lié à l’activation.' },
      { text: 'Exclusivement dans le plasma, loin des plaquettes.', correct: false, correction: 'Non. Il s’agit de phospholipides de leur membrane.' },
      { text: 'Dans les granules denses, sans lien avec la membrane.', correct: false, correction: 'Non. La question porte sur la répartition des phospholipides de la bicouche membranaire.' },
      { text: 'Uniquement dans leur noyau.', correct: false, correction: 'Non. Les plaquettes sont anucléées.' },
    ],
    explanation: 'Cette asymétrie au repos est modifiée lors de l’activation, ce qui rend la surface plaquettaire procoagulante. (Cours, p. 6 et 10)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Parmi les structures suivantes, lesquelles sont des complexes glycoprotéiques de surface plaquettaire mentionnés dans le cours ?',
    options: [
      { text: 'GPIb-IX-V.', correct: true, correction: 'Oui. Ce complexe récepteur participe à l’interaction plaquette–VWF.' },
      { text: 'Facteur VIII.', correct: false, correction: 'Non. Le facteur VIII est une protéine de coagulation transportée par le VWF, pas un complexe membranaire plaquettaire.' },
      { text: 'GPIIb-IIIa.', correct: true, correction: 'Oui. Ce complexe est impliqué dans l’agrégation via le fibrinogène.' },
      { text: 'Thrombopoïétine.', correct: false, correction: 'Non. La TPO régule la production plaquettaire ; ce n’est pas le nom d’un récepteur de surface cité ici.' },
      { text: 'GPIa-IIa.', correct: true, correction: 'Oui. Ce récepteur plaquettaire intervient dans l’interaction avec le collagène.' },
    ],
    explanation: 'La membrane plaquettaire porte plusieurs complexes GP qui assurent des interactions distinctes au fil de l’hémostase primaire. (Cours, p. 6 et 10)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quel ensemble de molécules correspond surtout au contenu des granules alpha plaquettaires dans ce cours ?',
    options: [
      { text: 'Hémoglobine, transferrine et bilirubine.', correct: false, correction: 'Non. Ces molécules ne définissent pas les granules alpha plaquettaires.' },
      { text: 'Collagène et facteur tissulaire comme uniques constituants.', correct: false, correction: 'Non. Le collagène et le facteur tissulaire sont présentés dans le sous-endothélium.' },
      { text: 'VWF, fibrinogène et facteur V.', correct: true, correction: 'Oui. Ces protéines sont citées parmi les contenus des granules alpha.' },
      { text: 'ADN nucléaire et histones du mégacaryocyte.', correct: false, correction: 'Non. La plaquette ne conserve pas le noyau du mégacaryocyte.' },
      { text: 'ADP, ATP et sérotonine uniquement.', correct: false, correction: 'Non. Ces petites molécules caractérisent surtout les granules denses.' },
    ],
    explanation: 'Les granules alpha stockent notamment des protéines d’adhésion et de coagulation, dont le VWF et le fibrinogène. (Cours, p. 7)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quels médiateurs figurent dans les granules denses plaquettaires selon le cours ?',
    options: [
      { text: 'Facteur V comme contenu caractéristique principal.', correct: false, correction: 'Non. Le facteur V figure parmi les protéines des granules alpha.' },
      { text: 'ATP.', correct: true, correction: 'Oui. L’ATP est également cité dans les granules denses.' },
      { text: 'Sérotonine.', correct: true, correction: 'Oui. La sérotonine fait partie des petites molécules des granules denses.' },
      { text: 'ADP.', correct: true, correction: 'Oui. L’ADP est un agoniste plaquettaire contenu dans les granules denses.' },
      { text: 'Calcium.', correct: true, correction: 'Oui. Le calcium y est stocké et joue un rôle important dans l’hémostase.' },
    ],
    explanation: 'À distinguer des granules alpha riches en protéines, les granules denses renferment notamment nucléotides, calcium et sérotonine. (Cours, p. 7)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle fonction du facteur de Willebrand est centrale lors de l’adhésion plaquettaire ?',
    options: [
      { text: 'Remplacer le noyau absent de la plaquette.', correct: false, correction: 'Non. Le VWF est une protéine multimérique, sans fonction nucléaire.' },
      { text: 'Servir de point d’ancrage entre une plaquette et la zone vasculaire lésée.', correct: true, correction: 'Oui. Le VWF exposé au niveau de la brèche permet l’accrochage des plaquettes.' },
      { text: 'Inhiber systématiquement la liaison des plaquettes au collagène.', correct: false, correction: 'Non. Le VWF facilite la capture plaquettaire au site de lésion.' },
      { text: 'Détruire directement le clou plaquettaire naissant.', correct: false, correction: 'Non. Cela irait à l’encontre de son rôle d’adhésion.' },
      { text: 'Assurer à lui seul toute la conversion du fibrinogène en fibrine.', correct: false, correction: 'Non. Cette conversion relève de la cascade de coagulation, notamment de la thrombine.' },
    ],
    explanation: 'Le VWF relie les plaquettes au sous-endothélium exposé, notamment lorsque les contraintes de cisaillement rendent l’adhésion difficile. (Cours, p. 4 et 7)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'À propos de la synthèse et de la présence du facteur de Willebrand, quelles propositions sont exactes ?',
    options: [
      { text: 'Il est produit exclusivement par les globules rouges matures.', correct: false, correction: 'Non. Les érythrocytes matures n’en sont pas la source décrite.' },
      { text: 'Il est produit majoritairement par les cellules endothéliales.', correct: true, correction: 'Oui. L’endothélium est la principale source décrite du VWF.' },
      { text: 'C’est une petite molécule monomérique dépourvue de rôle dans l’hémostase.', correct: false, correction: 'Non. Le VWF est une grande protéine multimérique essentielle à l’adhésion et au transport du FVIII.' },
      { text: 'Les mégacaryocytes contribuent aussi à sa production.', correct: true, correction: 'Oui. Une partie du VWF provient de la lignée mégacaryocytaire.' },
      { text: 'On le trouve notamment dans le plasma et au niveau sous-endothélial.', correct: true, correction: 'Oui. Le VWF existe dans ces deux compartiments impliqués dans l’hémostase.' },
    ],
    explanation: 'Le VWF est une protéine multimérique issue surtout de l’endothélium, disponible pour la capture plaquettaire au site lésé. (Cours, p. 4 et 7)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quel facteur de coagulation est transporté et protégé dans la circulation par le facteur de Willebrand ?',
    options: [
      { text: 'Le fibrinogène, identifié comme facteur I.', correct: false, correction: 'Non. Le VWF peut participer à l’agrégation, mais son rôle de transport protecteur concerne le FVIII.' },
      { text: 'Le facteur IX.', correct: false, correction: 'Non. Le facteur IX est concerné par l’hémophilie B, mais n’est pas le facteur protégé par le VWF.' },
      { text: 'Le facteur XIII.', correct: false, correction: 'Non. Le FVIII est le facteur explicitement associé au VWF.' },
      { text: 'Le facteur VIII.', correct: true, correction: 'Oui. Le VWF stabilise le FVIII, ce qui relie son déficit à une anomalie possible de coagulation.' },
      { text: 'Le facteur II, sous forme de prothrombine uniquement.', correct: false, correction: 'Non. Ce n’est pas le facteur associé au transport protecteur par le VWF dans ce cours.' },
    ],
    explanation: 'La protection du facteur VIII explique pourquoi un déficit sévère en VWF peut toucher aussi la coagulation. (Cours, p. 7)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quels rôles du fibrinogène sont décrits dans ce cours ?',
    options: [
      { text: 'Il intervient donc à la fois dans l’hémostase primaire et la coagulation.', correct: true, correction: 'Oui. Il relie l’agrégation plaquettaire à la consolidation fibrineuse du caillot.' },
      { text: 'Il dissout le thrombus lors de la fibrinolyse.', correct: false, correction: 'Non. Il est un substrat de formation du caillot, pas l’agent qui le dissout.' },
      { text: 'Il sert de précurseur à la fibrine qui renforce le caillot.', correct: true, correction: 'Oui. La coagulation transforme le fibrinogène soluble en fibrine insoluble.' },
      { text: 'Il forme des ponts entre plaquettes pendant l’agrégation.', correct: true, correction: 'Oui. Ses domaines distaux participent aux liaisons entre plaquettes.' },
      { text: 'Il constitue le noyau de toutes les plaquettes.', correct: false, correction: 'Non. Les plaquettes sont dépourvues de noyau.' },
    ],
    explanation: 'Le fibrinogène a un double intérêt : pontage des plaquettes et substrat de la fibrine produite par la coagulation. (Cours, p. 8)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel changement transforme le fibrinogène circulant en un réseau consolidant le caillot ?',
    options: [
      { text: 'Sa transformation en monoxyde d’azote endothélial.', correct: false, correction: 'Non. Le NO est un médiateur antithrombotique distinct du fibrinogène.' },
      { text: 'Sa disparition complète avant toute agrégation plaquettaire.', correct: false, correction: 'Non. Le fibrinogène est justement nécessaire au pontage des plaquettes.' },
      { text: 'Sa fragmentation en plaquettes anucléées.', correct: false, correction: 'Non. Les plaquettes naissent de la fragmentation de mégacaryocytes.' },
      { text: 'Sa conversion en fibrine insoluble au cours de la coagulation.', correct: true, correction: 'Oui. La fibrine constitue la trame qui renforce le thrombus plaquettaire.' },
      { text: 'Sa liaison irréversible au facteur VIII pour produire du VWF.', correct: false, correction: 'Non. Le VWF est une autre protéine et protège le FVIII.' },
    ],
    explanation: 'Dans la coagulation, le fibrinogène soluble fournit la fibrine insoluble qui solidifie le clou plaquettaire. (Cours, p. 2 et 8)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Dès l’apparition d’une brèche, quels événements sont attendus dans l’hémostase primaire ?',
    options: [
      { text: 'Une activation des plaquettes adhérentes.', correct: true, correction: 'Oui. L’activation précède la formation efficace du clou.' },
      { text: 'Une absence obligatoire de coagulation pendant toute cette séquence.', correct: false, correction: 'Non. Hémostase primaire et coagulation se chevauchent in vivo.' },
      { text: 'Une adhésion des plaquettes au sous-endothélium exposé.', correct: true, correction: 'Oui. Les plaquettes s’accrochent aux composants devenus accessibles.' },
      { text: 'Une vasoconstriction locale réduisant la perte sanguine.', correct: true, correction: 'Oui. La diminution du calibre freine le débit au site lésé.' },
      { text: 'Une agrégation plaquettaire formant le thrombus initial.', correct: true, correction: 'Oui. Les plaquettes se relient pour recouvrir la brèche.' },
    ],
    explanation: 'Le schéma pédagogique est : vasoconstriction, adhésion, activation, agrégation ; les processus réels se chevauchent. (Cours, p. 2 et 8)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel est l\'effet immédiat attendu de la vasoconstriction réflexe après une brèche vasculaire ?',
    options: [
      { text: 'Elle réduit localement le débit sanguin et limite la perte de sang.', correct: true, correction: 'Oui. Le rétrécissement du vaisseau diminue le flux au niveau de la lésion.' },
      { text: 'Elle dissout le clou plaquettaire déjà formé.', correct: false, correction: 'Non. La dissolution du caillot relève de la fibrinolyse, plus tardive.' },
      { text: 'Elle rend l\'endothélium intact thrombogène sur tout le vaisseau.', correct: false, correction: 'Non. L\'endothélium intact reste normalement thromborésistant.' },
      { text: 'Elle transforme directement le fibrinogène en fibrine.', correct: false, correction: 'Non. Cette transformation appartient à la coagulation et ne résulte pas de la seule vasoconstriction.' },
      { text: 'Elle bloque le contact des plaquettes avec le sous-endothélium.', correct: false, correction: 'Non. Le ralentissement local du flux favorise au contraire leur rencontre avec la lésion.' },
    ],
    explanation: 'La vasoconstriction est la première réaction vasculaire : elle limite le saignement et facilite la rencontre des plaquettes avec la brèche. (Cours, p. 8)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Après une brèche vasculaire, le flux ralentit localement. Quelles conséquences favorisent l\'arrêt des plaquettes au site lésé ?',
    options: [
      { text: 'La baisse de débit dispense les plaquettes de toute interaction d\'adhésion.', correct: false, correction: 'Non. Le contact avec la lésion doit être stabilisé par des interactions plaquette–paroi.' },
      { text: 'Les plaquettes peuvent alors rencontrer le VWF et le collagène devenus accessibles.', correct: true, correction: 'Oui. Ces composants sous-endothéliaux fournissent des points d\'accrochage après rupture de l\'endothélium.' },
      { text: 'La margination rapproche les plaquettes du sous-endothélium exposé.', correct: true, correction: 'Oui. La vasoconstriction favorise cette mise en contact au voisinage de la lésion.' },
      { text: 'Le ralentissement masque immédiatement le collagène sous-endothélial.', correct: false, correction: 'Non. La brèche expose le sous-endothélium ; le ralentissement ne referme pas la lésion.' },
      { text: 'Le passage plus lent accroît les occasions de contact avec la paroi lésée.', correct: true, correction: 'Oui. Le cours relie le ralentissement local à une probabilité accrue de rencontre entre plaquettes et brèche.' },
    ],
    explanation: 'La vasoconstriction limite l\'écoulement et favorise la margination ; les plaquettes rencontrent plus facilement le VWF et le collagène exposés, puis doivent y adhérer. (Cours, p. 4 et 8–9)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle interaction assure la capture initiale d\'une plaquette sur une zone sous-endothéliale exposée ?',
    options: [
      { text: 'GPIb-IX-V plaquettaire et thromboxane A2.', correct: false, correction: 'Non. Le ligand d\'ancrage de GPIb-IX-V est le VWF, et non le TXA2.' },
      { text: 'GPIIb/IIIa plaquettaire et facteur tissulaire.', correct: false, correction: 'Non. GPIIb/IIIa activé lie surtout le fibrinogène lors de l\'agrégation.' },
      { text: 'GPIIb/IIIa plaquettaire et collagène.', correct: false, correction: 'Non. Le collagène interagit notamment avec GPIa/IIa dans ce cours.' },
      { text: 'GPIa/IIa plaquettaire et fibrine.', correct: false, correction: 'Non. GPIa/IIa est un récepteur du collagène.' },
      { text: 'GPIb-IX-V plaquettaire et facteur de Willebrand.', correct: true, correction: 'Oui. Le VWF sous-endothélial est reconnu par le complexe GPIb-IX-V.' },
    ],
    explanation: 'La liaison GPIb-IX-V–VWF permet une première capture, parfois encore réversible sous le flux sanguin. (Cours, p. 9 ; https://www.ncbi.nlm.nih.gov/books/NBK534253/)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Le VWF retient brièvement des plaquettes sur une brèche, mais elles roulent et se détachent. Quelles interprétations sont compatibles avec ce constat ?',
    options: [
      { text: 'Le premier contact entre GPIb-IX-V et VWF peut être réversible.', correct: true, correction: 'Oui. Le cours décrit ce contact initial comme labile, avec un possible mouvement de roulement.' },
      { text: 'Le roulement prouve que la liaison GPIb-IX-V–VWF est irréversible.', correct: false, correction: 'Non. C\'est précisément le caractère réversible du premier accrochage qui permet ce roulement.' },
      { text: 'La capture initiale et la stabilisation sont deux composantes distinctes de l\'adhésion.', correct: true, correction: 'Oui. Une plaquette peut d\'abord être captée, puis se détacher si elle n\'établit pas des contacts plus solides.' },
      { text: 'Une interaction insuffisante entre GPIa/IIa et le collagène peut gêner la fixation stable.', correct: true, correction: 'Oui. Ce second contact contribue à stabiliser les plaquettes sur le sous-endothélium.' },
      { text: 'Le défaut de fixation s\'explique obligatoirement par une fibrinolyse trop rapide.', correct: false, correction: 'Non. Le phénomène décrit concerne l\'adhésion initiale, avant que la fibrinolyse du caillot n\'entre en jeu.' },
    ],
    explanation: 'Le couple GPIb-IX-V–VWF assure une capture souvent labile ; les contacts avec le collagène, notamment via GPIa/IIa, contribuent ensuite à l\'arrêt stable de la plaquette. (Cours, p. 9 ; https://www.ncbi.nlm.nih.gov/books/NBK53456/)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quel changement morphologique accompagne l\'activation d\'une plaquette au site lésé ?',
    options: [
      { text: 'Elle prend une forme discoïde à partir d\'une forme bourgeonnante de repos.', correct: false, correction: 'Non. Le sens du changement est inverse : disque au repos, pseudopodes après activation.' },
      { text: 'Elle perd son noyau au moment de l\'activation.', correct: false, correction: 'Non. La plaquette est déjà anucléée à l\'état circulant.' },
      { text: 'Une plaquette discoïde émet des pseudopodes et peut s\'étaler sur la lésion.', correct: true, correction: 'Oui. Le réarrangement de son cytosquelette augmente ses contacts avec l\'environnement.' },
      { text: 'Elle devient un érythrocyte afin de traverser le thrombus.', correct: false, correction: 'Non. Une plaquette ne se différencie pas en globule rouge.' },
      { text: 'Elle se fragmente obligatoirement en nouvelles plaquettes.', correct: false, correction: 'Non. L\'activation décrite ici modifie sa forme et ses fonctions, sans production de nouvelles plaquettes.' },
    ],
    explanation: 'L\'activation réorganise le cytosquelette : les plaquettes passent d\'une forme discoïde à une forme avec pseudopodes favorable à l\'étalement. (Cours, p. 9)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quels événements cellulaires font partie de l\'activation plaquettaire décrite dans le cours ?',
    options: [
      { text: 'La concentration intracellulaire de calcium chute pour ouvrir GPIIb/IIIa.', correct: false, correction: 'Non. L\'activation est associée à une élévation du calcium intracellulaire.' },
      { text: 'GPIIb/IIIa adopte une conformation permettant de lier le fibrinogène.', correct: true, correction: 'Oui. Le récepteur s\'active pour rendre possible l\'agrégation ultérieure.' },
      { text: 'Une hausse du calcium intracellulaire favorise la sécrétion des granules.', correct: true, correction: 'Oui. Le signal calcique déclenche rapidement leur libération.' },
      { text: 'Les granules sont détruits dans le noyau avant toute sécrétion.', correct: false, correction: 'Non. Les plaquettes sont anucléées et leurs granules exocytent leur contenu.' },
      { text: 'Les granules sont acheminés vers la membrane et libèrent leur contenu après fusion.', correct: true, correction: 'Oui. Le cours mentionne notamment l\'intervention des microtubules dans ce déplacement.' },
    ],
    explanation: 'L\'activation combine signaux intracellulaires, exocytose des granules et ouverture fonctionnelle de GPIIb/IIIa. (Cours, p. 9)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quel rôle le cours attribue-t-il à l\'ADP libéré par une plaquette activée ?',
    options: [
      { text: 'Il est le ligand de GPIa/IIa pour l\'adhésion au collagène.', correct: false, correction: 'Non. GPIa/IIa reconnaît le collagène, non l\'ADP.' },
      { text: 'Il assure à lui seul la conversion du fibrinogène en fibrine.', correct: false, correction: 'Non. Cette conversion relève de la cascade de coagulation, notamment de la thrombine.' },
      { text: 'Il renforce et entretient l\'activation plaquettaire.', correct: true, correction: 'Oui. L\'ADP agit comme agoniste des plaquettes voisines et amplifie leur réponse.' },
      { text: 'Il dissout le clou plaquettaire lorsque la paroi est réparée.', correct: false, correction: 'Non. La dissolution du caillot correspond à la fibrinolyse.' },
      { text: 'Il empêche toute nouvelle plaquette de rejoindre la brèche.', correct: false, correction: 'Non. Son effet est activateur et favorise l\'amplification de la réponse plaquettaire.' },
    ],
    explanation: 'L\'ADP sécrété est un agoniste qui contribue au maintien et à l\'amplification de l\'activation plaquettaire. (Cours, p. 9)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Parmi les effets des molécules libérées au site lésé par des plaquettes activées, lesquels sont correctement associés ?',
    options: [
      { text: 'Sérotonine : participation au maintien de la vasoconstriction.', correct: true, correction: 'Oui. Le cours lui attribue cet effet local.' },
      { text: 'ADP : amplification de l\'activation plaquettaire.', correct: true, correction: 'Oui. L\'ADP est présenté comme un agoniste plaquettaire.' },
      { text: 'Fibrinogène : possibilité de former des ponts entre plaquettes.', correct: true, correction: 'Oui. Il devient un ligand de GPIIb/IIIa activé lors de l\'agrégation.' },
      { text: 'Calcium : inhibition complète de la coagulation plasmatique.', correct: false, correction: 'Non. Le calcium participe au contraire aux réactions de coagulation.' },
      { text: 'Facteur de Willebrand : enrichissement local en molécule d\'adhésion.', correct: true, correction: 'Oui. Le VWF libéré contribue à l\'environnement hémostatique de la brèche.' },
    ],
    explanation: 'La sécrétion granulaire apporte des médiateurs de recrutement et des protéines utiles au clou plaquettaire ; le calcium soutient aussi la coagulation. (Cours, p. 7 et 9)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel effet local principal le cours attribue-t-il au thromboxane A2 (TXA2) synthétisé par les plaquettes ?',
    options: [
      { text: 'Il contribue à maintenir une activation plaquettaire durable.', correct: true, correction: 'Oui. Le TXA2 participe à la boucle d\'amplification de l\'activation.' },
      { text: 'Il protège le facteur VIII de sa dégradation plasmatique.', correct: false, correction: 'Non. C\'est une fonction du facteur de Willebrand.' },
      { text: 'Il remplace le collagène dans le sous-endothélium.', correct: false, correction: 'Non. Il s\'agit d\'un médiateur synthétisé par la plaquette, non d\'un constituant matriciel.' },
      { text: 'Il transforme les plaquettes en mégacaryocytes.', correct: false, correction: 'Non. Les mégacaryocytes sont les cellules médullaires dont dérivent les plaquettes.' },
      { text: 'Il assure la fibrinolyse précoce du clou plaquettaire.', correct: false, correction: 'Non. Son effet décrit est pro-activateur, à l\'opposé d\'une dissolution du caillot.' },
    ],
    explanation: 'Le TXA2 est produit après activation et participe à entretenir le recrutement et l\'activation des plaquettes. (Cours, p. 10)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'À propos de la synthèse du thromboxane A2 plaquettaire, quelles propositions sont exactes ?',
    options: [
      { text: 'La phospholipase A2 libère l\'acide arachidonique.', correct: true, correction: 'Oui. Elle fournit le substrat de l\'étape suivante.' },
      { text: 'La cyclo-oxygénase intervient avant la TXA2 synthétase.', correct: true, correction: 'Oui. Elle conduit aux endoperoxydes, précurseurs du TXA2.' },
      { text: 'Les phospholipides membranaires fournissent le précurseur de la voie.', correct: true, correction: 'Oui. La synthèse débute à partir de lipides de la membrane plaquettaire.' },
      { text: 'Le TXA2 préexistant est transformé en acide arachidonique par la cyclo-oxygénase.', correct: false, correction: 'Non. Le sens de la voie est phospholipides, acide arachidonique, endoperoxydes puis TXA2.' },
      { text: 'La TXA2 synthétase intervient dans la dernière étape indiquée par le cours.', correct: true, correction: 'Oui. Elle convertit les endoperoxydes en TXA2.' },
    ],
    explanation: 'La succession à retenir est phospholipides → acide arachidonique → endoperoxydes → TXA2, avec phospholipase A2, cyclo-oxygénase puis TXA2 synthétase. (Cours, p. 10)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel changement membranaire rend une plaquette activée propice aux réactions de coagulation ?',
    options: [
      { text: 'La disparition de tous les phospholipides de sa membrane.', correct: false, correction: 'Non. La bicouche persiste ; c\'est la répartition de certains phospholipides qui change.' },
      { text: 'L\'internalisation irréversible de tous les récepteurs GPIIb/IIIa.', correct: false, correction: 'Non. GPIIb/IIIa est activé en surface pour permettre l\'agrégation.' },
      { text: 'Le remplacement de sa membrane par une couche d\'endothélium intact.', correct: false, correction: 'Non. Aucune telle transformation n\'est décrite ; la membrane plaquettaire change d\'asymétrie.' },
      { text: 'La capture du collagène par son noyau.', correct: false, correction: 'Non. Les plaquettes sont anucléées et le collagène est reconnu par des récepteurs membranaires.' },
      { text: 'L\'exposition de phospholipides négatifs sur la face externe de sa membrane.', correct: true, correction: 'Oui. Le réarrangement membranaire crée une surface procoagulante.' },
    ],
    explanation: 'Le « flip-flop » expose des phospholipides anioniques, notamment la phosphatidylsérine, et offre une surface d\'assemblage aux complexes de coagulation. (Cours, p. 6 et 10 ; https://ashpublications.org/blood/article/114/3/663/131359/Two-distinct-pathways-regulate-platelet)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement l\'asymétrie membranaire plaquettaire et son changement lors de l\'activation ?',
    options: [
      { text: 'La surface exposée favorise la concentration locale de facteurs de coagulation.', correct: true, correction: 'Oui. Les complexes de coagulation se rassemblent sur cette membrane procoagulante.' },
      { text: 'Au repos, les phospholipides à charge négative sont surtout orientés vers le feuillet interne.', correct: true, correction: 'Oui. Le cours souligne cette asymétrie de la membrane au repos.' },
      { text: 'Le réarrangement des phospholipides expose des charges négatives à l\'extérieur.', correct: true, correction: 'Oui. C\'est l\'effet décrit du « flip-flop » lors de l\'activation.' },
      { text: 'La plaquette activée devient incapable de participer à la coagulation.', correct: false, correction: 'Non. L\'exposition des charges négatives crée précisément une surface procoagulante.' },
      { text: 'Le phénomène est dû à l\'apparition d\'un noyau plaquettaire.', correct: false, correction: 'Non. La plaquette demeure anucléée ; le changement concerne sa membrane.' },
    ],
    explanation: 'L\'activation inverse partiellement l\'asymétrie des phospholipides : la surface externe devient plus négative et soutient la coagulation plasmatique. (Cours, p. 6 et 10)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quel mécanisme réalise principalement les ponts entre plaquettes pendant l\'agrégation présentée dans le cours ?',
    options: [
      { text: 'Le facteur tissulaire relie directement les pseudopodes de deux plaquettes.', correct: false, correction: 'Non. Le facteur tissulaire intervient dans la coagulation, pas comme pont principal de l\'agrégation.' },
      { text: 'La sérotonine polymérise en fibrine entre les plaquettes.', correct: false, correction: 'Non. La sérotonine participe au maintien de la vasoconstriction, pas à la polymérisation de fibrine.' },
      { text: 'Le fibrinogène se lie aux complexes GPIIb/IIIa activés de plaquettes voisines.', correct: true, correction: 'Oui. Cette liaison construit les ponts du clou plaquettaire.' },
      { text: 'Le collagène lie deux récepteurs GPIb-IX-V de plaquettes voisines.', correct: false, correction: 'Non. GPIb-IX-V reconnaît le VWF et sert surtout à la capture sur la lésion.' },
      { text: 'L\'ADP forme une liaison structurale rigide entre leurs membranes.', correct: false, correction: 'Non. L\'ADP est un agoniste, pas le pont physique principal de l\'agrégat.' },
    ],
    explanation: 'L\'activation rend GPIIb/IIIa apte à lier le fibrinogène, qui connecte les plaquettes voisines et forme le clou plaquettaire. (Cours, p. 9–10)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'À propos du fibrinogène au cours de l\'hémostase, quelles propositions sont exactes ?',
    options: [
      { text: 'Il sert également de substrat à la formation de fibrine pendant la coagulation.', correct: true, correction: 'Oui. La coagulation le convertit en fibrine qui consolide le caillot.' },
      { text: 'Il se lie au récepteur plaquettaire GPIIb/IIIa rendu fonctionnel par l\'activation.', correct: true, correction: 'Oui. Cette interaction constitue le mécanisme principal d\'agrégation décrit.' },
      { text: 'Ses domaines distaux participent aux ponts entre plaquettes lors de l\'agrégation.', correct: true, correction: 'Oui. Le cours attribue cette fonction aux domaines D du fibrinogène.' },
      { text: 'Il ne joue aucun rôle dans l\'hémostase primaire.', correct: false, correction: 'Non. Il est indispensable aux ponts entre plaquettes dans l\'agrégation classique.' },
      { text: 'Il est le ligand spécifique de GPIa/IIa lors de l\'adhésion au collagène.', correct: false, correction: 'Non. GPIa/IIa reconnaît le collagène ; le fibrinogène est surtout lié à GPIIb/IIIa.' },
    ],
    explanation: 'Le fibrinogène intervient dans deux temps complémentaires : ponts entre plaquettes dans l\'hémostase primaire, puis formation de fibrine dans la coagulation. (Cours, p. 8 et 10)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Une plaquette adhère au VWF et au collagène, mais son GPIIb/IIIa ne peut pas lier le fibrinogène. Quelle étape est principalement compromise ?',
    options: [
      { text: 'La reconnaissance du collagène par GPIa/IIa.', correct: false, correction: 'Non. L\'énoncé indique aussi que cette étape d\'adhésion est préservée.' },
      { text: 'La production médullaire des mégacaryocytes.', correct: false, correction: 'Non. Le défaut décrit concerne un récepteur de plaquettes déjà circulantes.' },
      { text: 'La vasoconstriction réflexe du vaisseau lésé.', correct: false, correction: 'Non. Cette réaction vasculaire ne dépend pas directement du pont GPIIb/IIIa–fibrinogène.' },
      { text: 'La première capture par le couple GPIb-IX-V–VWF.', correct: false, correction: 'Non. L\'énoncé précise que cette adhésion initiale fonctionne.' },
      { text: 'L\'agrégation entre plaquettes.', correct: true, correction: 'Oui. Sans liaison GPIIb/IIIa–fibrinogène, les ponts interplaquettaires se forment mal.' },
    ],
    explanation: 'Le défaut de liaison au fibrinogène de GPIIb/IIIa altère principalement les ponts entre plaquettes et donc l\'agrégation. (Cours, p. 9–10)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Concernant l\'origine des troubles de l\'hémostase primaire, quelles propositions sont exactes ?',
    options: [
      { text: 'Une cause congénitale peut se manifester précocement.', correct: true, correction: 'Oui. Le cours décrit une présentation parfois dès l\'enfance ou la naissance.' },
      { text: 'Une anomalie congénitale exige toujours que les deux parents soient symptomatiques.', correct: false, correction: 'Non. L\'histoire familiale peut varier selon le mode de transmission et la pénétrance.' },
      { text: 'Les antécédents familiaux peuvent orienter vers une cause congénitale.', correct: true, correction: 'Oui. Ils constituent un indice clinique, sans être obligatoires dans tous les cas.' },
      { text: 'Les causes acquises sont globalement plus fréquentes que les causes congénitales.', correct: true, correction: 'Oui. C\'est la répartition générale indiquée dans le cours.' },
      { text: 'Une anomalie acquise ne peut apparaître que chez le nouveau-né.', correct: false, correction: 'Non. Le cours la situe plutôt chez l\'adulte et dans un contexte évocateur.' },
    ],
    explanation: 'L\'âge d\'apparition et les antécédents familiaux aident à orienter, mais ne suffisent jamais à établir seuls une origine congénitale ou acquise. (Cours, p. 11)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle association distingue correctement deux grandes catégories d\'anomalies plaquettaires ?',
    options: [
      { text: 'Thrombopénie : excès de fibrinogène ; thrombopathie : absence de VWF.', correct: false, correction: 'Non. Ces catégories décrivent d\'abord des anomalies de plaquettes, non ces protéines plasmatiques.' },
      { text: 'Thrombopénie : excès de plaquettes ; thrombopathie : déficit isolé du facteur VIII.', correct: false, correction: 'Non. Une thrombopénie correspond à une diminution du nombre de plaquettes.' },
      { text: 'Thrombopénie et thrombopathie sont nécessairement exclusives l\'une de l\'autre.', correct: false, correction: 'Non. Un déficit quantitatif et un défaut fonctionnel peuvent coexister.' },
      { text: 'Thrombopénie : fonction plaquettaire anormale avec nombre normal ; thrombopathie : nombre trop bas.', correct: false, correction: 'Non. Cette proposition inverse les définitions.' },
      { text: 'Thrombopénie : déficit quantitatif ; thrombopathie : défaut fonctionnel des plaquettes.', correct: true, correction: 'Oui. Le nombre est en cause dans la thrombopénie, la qualité fonctionnelle dans la thrombopathie.' },
    ],
    explanation: 'La distinction porte sur le nombre de plaquettes versus leur fonction ; les deux types d\'anomalies peuvent coexister. (Cours, p. 11)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles causes ou conséquences d\'un défaut d\'hémostase primaire sont correctement décrites ?',
    options: [
      { text: 'La maladie de Willebrand peut aussi correspondre à un VWF qualitativement anormal.', correct: true, correction: 'Oui. Une protéine présente mais dysfonctionnelle peut être en cause.' },
      { text: 'L\'afibrinogénémie prive à la fois l\'agrégation et la coagulation d\'un acteur utile.', correct: true, correction: 'Oui. Le fibrinogène fait les ponts plaquettaires et est le précurseur de la fibrine.' },
      { text: 'La maladie de Willebrand peut correspondre à un déficit quantitatif en VWF.', correct: true, correction: 'Oui. La quantité de VWF peut être insuffisante.' },
      { text: 'Une thrombopénie exclut la présence simultanée d\'une thrombopathie.', correct: false, correction: 'Non. Nombre et fonction plaquettaires peuvent être altérés ensemble.' },
      { text: 'Une anomalie du VWF ne peut toucher que la coagulation, jamais l\'adhésion plaquettaire.', correct: false, correction: 'Non. Le VWF est central dans la capture des plaquettes à la brèche.' },
    ],
    explanation: 'Les troubles peuvent affecter les plaquettes, le VWF ou le fibrinogène ; VWF et fibrinogène participent aussi à la coagulation. (Cours, p. 7–8 et 11–12)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel ensemble de symptômes évoque le plus classiquement un trouble de l\'hémostase primaire ?',
    options: [
      { text: 'Hémorragie musculaire profonde comme unique signe caractéristique.', correct: false, correction: 'Non. Un saignement profond n\'est pas la présentation typique d\'un défaut isolé d\'hémostase primaire.' },
      { text: 'Thrombose veineuse profonde comme seul signe d\'appel.', correct: false, correction: 'Non. Le chapitre concerne surtout un risque hémorragique par défaut de clou plaquettaire.' },
      { text: 'Hémarthroses profondes isolées comme manifestation habituelle.', correct: false, correction: 'Non. Les saignements articulaires orientent plutôt vers un défaut de coagulation.' },
      { text: 'Absence de tout saignement muqueux mais douleur osseuse isolée.', correct: false, correction: 'Non. La douleur osseuse isolée n\'est pas la sémiologie hémorragique décrite.' },
      { text: 'Épistaxis, gingivorragies et ecchymoses cutanées.', correct: true, correction: 'Oui. Ce sont des saignements cutanéo-muqueux typiques de ce groupe de troubles.' },
    ],
    explanation: 'Une anomalie de l\'hémostase primaire se manifeste surtout par des saignements visibles de la peau et des muqueuses. (Cours, p. 12)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'À propos de la sémiologie des troubles de l\'hémostase primaire, quelles propositions sont exactes ?',
    options: [
      { text: 'Une intervention chirurgicale ou un accouchement peut révéler un trouble jusque-là peu visible.', correct: true, correction: 'Oui. Ces situations mettent l\'hémostase à l\'épreuve et peuvent rendre le défaut manifeste.' },
      { text: 'Des ménorragies peuvent révéler une tendance hémorragique.', correct: true, correction: 'Oui. Les saignements menstruels abondants font partie des manifestations muqueuses possibles.' },
      { text: 'Une forme très sévère de maladie de Willebrand peut s\'accompagner de saignements profonds.', correct: true, correction: 'Oui. La chute associée du facteur VIII peut ajouter un défaut de coagulation.' },
      { text: 'L\'absence d\'antécédents familiaux élimine formellement tout trouble de l\'hémostase primaire.', correct: false, correction: 'Non. Les troubles acquis sont fréquents, et une histoire familiale négative n\'exclut pas non plus tout trouble congénital.' },
      { text: 'Des ecchymoses ou un purpura pétéchial peuvent être des signes d\'appel.', correct: true, correction: 'Oui. Les saignements cutanés sont fréquents, particulièrement en cas de thrombopénie pour les pétéchies.' },
    ],
    explanation: 'Le profil habituel est cutanéo-muqueux, parfois révélé par une épreuve hémostatique ; les saignements profonds restent atypiques sauf, notamment, certaines formes très sévères de maladie de Willebrand. (Cours, p. 11–12)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Une NFS retrouve 126 G/L de plaquettes chez un adulte. Comment qualifier ce résultat selon les repères du cours ?',
    options: [
      { text: 'Une thrombopénie légère', correct: true, correction: 'Oui. Le nombre est inférieur à 150 G/L et compris entre 100 et 150 G/L.' },
      { text: 'Une thrombocytose', correct: false, correction: 'Non. Une thrombocytose correspond à une augmentation, pas à une baisse des plaquettes.' },
      { text: 'Une thrombopénie sévère', correct: false, correction: 'Non. Le terme sévère est réservé dans ce tableau à des valeurs nettement plus basses, sous 50 G/L.' },
      { text: 'Une numération plaquettaire normale', correct: false, correction: 'Non. Le cours situe la plage usuelle autour de 150 à 400 G/L.' },
      { text: 'Une preuve de thrombopathie', correct: false, correction: 'Non. La numération mesure une quantité ; elle ne démontre pas un défaut de fonction.' },
    ],
    explanation: 'Le seuil de 150 G/L définit ici la thrombopénie ; 126 G/L correspond à la classe légère du tableau. La signification clinique dépend ensuite du contexte. (Cours, p. 18)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles affirmations sont prudentes pour interpréter une baisse de plaquettes ?',
    options: [
      { text: 'Une intervention peut modifier l\'appréciation du risque entre 50 et 100 G/L', correct: true, correction: 'Oui. Le type de geste et le contexte hémorragique comptent, même si le risque au repos peut rester limité.' },
      { text: 'Une valeur inférieure à 150 G/L est une thrombopénie dans le cours', correct: true, correction: 'Oui. Il s\'agit du seuil de définition utilisé par le support.' },
      { text: 'Le chiffre plaquettaire suffit toujours à prédire à lui seul un saignement', correct: false, correction: 'Non. La fonction plaquettaire, la cause de la baisse et le geste envisagé interviennent aussi.' },
      { text: 'Une valeur inférieure à 20 G/L augmente la préoccupation pour un saignement spontané', correct: true, correction: 'Oui. Le tableau signale ce risque, notamment muqueux, à des chiffres très bas.' },
      { text: 'Tout patient à 120 G/L aura nécessairement une hémorragie spontanée', correct: false, correction: 'Non. Une thrombopénie légère ne permet pas une telle prédiction.' },
    ],
    explanation: 'Les tranches du cours sont des repères pédagogiques, pas des seuils universels de pronostic. La British Society for Haematology rappelle que le chiffre seul ne prédit pas le risque d\'un geste. (Cours, p. 18 ; https://doi.org/10.1111/bjh.19360)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Une numération très basse sur tube EDTA contraste avec l\'absence de saignement ; le laboratoire observe des amas de plaquettes. Quelle interprétation envisager d\'abord ?',
    options: [
      { text: 'Une aplasie médullaire prouvée', correct: false, correction: 'Non. Des amas dans le tube orientent d\'abord vers un artefact ; ils ne prouvent pas une insuffisance de la moelle.' },
      { text: 'Une thrombocytose masquée qui doit être traitée sans contrôle', correct: false, correction: 'Non. Le résultat demande une vérification, pas une déduction thérapeutique immédiate.' },
      { text: 'Une pseudothrombopénie liée à des agrégats in vitro', correct: true, correction: 'Oui. Les amas peuvent ne pas être comptés comme des plaquettes isolées par l\'automate.' },
      { text: 'Une destruction plaquettaire obligatoire dans la circulation', correct: false, correction: 'Non. L\'agrégation peut survenir dans le prélèvement après la prise de sang.' },
      { text: 'Une maladie de Willebrand certaine', correct: false, correction: 'Non. La maladie de Willebrand ne se diagnostique pas sur des amas plaquettaires sous EDTA.' },
    ],
    explanation: 'Un résultat discordant avec des amas sur le frottis évoque une pseudothrombopénie à l\'EDTA ; un nouveau prélèvement dans un autre anticoagulant, souvent le citrate, peut clarifier la numération. (Cours, p. 18)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels éléments aident à vérifier une thrombopénie possiblement artificielle sous EDTA ?',
    options: [
      { text: 'Recompter sur un prélèvement citraté si l\'agrégation sous EDTA est suspectée', correct: true, correction: 'Oui. Le changement d\'anticoagulant peut éviter l\'artefact, avec les corrections de laboratoire nécessaires.' },
      { text: 'Diagnostiquer une CIVD dès qu\'un automate annonce moins de 150 G/L', correct: false, correction: 'Non. Une CIVD requiert un faisceau clinique et biologique ; le chiffre seul n\'y suffit pas.' },
      { text: 'Examiner le frottis pour rechercher des amas plaquettaires', correct: true, correction: 'Oui. La visualisation d\'agrégats explique une possible sous-estimation automatique.' },
      { text: 'Conclure que les amas prouvent un déficit de production médullaire', correct: false, correction: 'Non. Ils suggèrent plutôt un problème de mesure du prélèvement.' },
      { text: 'Confronter le résultat à l\'histoire clinique et aux anciens bilans', correct: true, correction: 'Oui. Une chute isolée inattendue doit faire rechercher une erreur préanalytique.' },
    ],
    explanation: 'Le contrôle du frottis et, si besoin, une nouvelle numération sur citrate évitent de confondre artefact préanalytique et vraie thrombopénie. (Cours, p. 18)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Chez une personne ayant une splénomégalie et une thrombopénie, quel mécanisme périphérique le cours illustre-t-il ?',
    options: [
      { text: 'L\'arrêt obligatoire de toute production plaquettaire médullaire', correct: false, correction: 'Non. La séquestration est un mécanisme de répartition, non une preuve d\'aplasie.' },
      { text: 'La séquestration d\'une part des plaquettes dans la rate', correct: true, correction: 'Oui. Une rate augmentée de volume peut retenir davantage de plaquettes hors du sang circulant.' },
      { text: 'Un défaut de mesure propre à tous les tubes citratés', correct: false, correction: 'Non. La splénomégalie est une cause biologique possible, indépendante de cet artefact préanalytique.' },
      { text: 'Une augmentation automatique de la fonction des plaquettes', correct: false, correction: 'Non. Le mécanisme décrit concerne leur distribution, pas leur activité intrinsèque.' },
      { text: 'Une dilution du sang par le facteur VIII', correct: false, correction: 'Non. Le facteur VIII n\'explique pas cette répartition plaquettaire.' },
    ],
    explanation: 'La splénomégalie peut entraîner une séquestration plaquettaire : la baisse circulante est périphérique et relève d\'un problème de répartition. (Cours, p. 19)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles situations figurent parmi les mécanismes périphériques de thrombopénie présentés ?',
    options: [
      { text: 'Une aplasie médullaire', correct: false, correction: 'Non. Elle relève d\'une diminution centrale de la production.' },
      { text: 'La séquestration splénique', correct: true, correction: 'Oui. Elle diminue la fraction de plaquettes circulantes.' },
      { text: 'La consommation plaquettaire lors d\'une CIVD', correct: true, correction: 'Oui. La coagulation disséminée mobilise les plaquettes dans des thrombi.' },
      { text: 'Un envahissement de la moelle par des métastases', correct: false, correction: 'Non. L\'atteinte de la moelle est une cause centrale.' },
      { text: 'Une destruction à médiation immunitaire', correct: true, correction: 'Oui. Des anticorps peuvent raccourcir la survie plaquettaire.' },
    ],
    explanation: 'Les causes périphériques regroupent ici répartition anormale, consommation et destruction ; l\'aplasie et l\'envahissement sont des causes centrales. (Cours, p. 18–19)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle anomalie associée renforcerait l\'hypothèse d\'une atteinte centrale de la moelle devant une thrombopénie ?',
    options: [
      { text: 'Une numération normale sur citrate après amas sous EDTA', correct: false, correction: 'Non. Elle soutiendrait plutôt une pseudothrombopénie.' },
      { text: 'Une splénomégalie isolée sans autre anomalie de la NFS', correct: false, correction: 'Non. La séquestration splénique est classée comme mécanisme périphérique.' },
      { text: 'Une baisse concomitante d\'autres lignées sanguines à la NFS', correct: true, correction: 'Oui. Une atteinte médullaire globale peut réduire aussi globules rouges ou leucocytes.' },
      { text: 'Une consommation plaquettaire lors d\'une coagulation intravasculaire', correct: false, correction: 'Non. Ce mécanisme agit surtout en périphérie.' },
      { text: 'Une prise médicamenteuse avec anticorps anti-plaquettes', correct: false, correction: 'Non. Le mécanisme cité dans le cours est une destruction périphérique.' },
    ],
    explanation: 'Une atteinte centrale comme l\'aplasie ou l\'envahissement médullaire peut perturber plusieurs lignées sanguines, ce qui oriente l\'interprétation de la NFS. (Cours, p. 19)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement la thrombopénie de consommation dans une CIVD ?',
    options: [
      { text: 'La formation diffuse de thrombi peut consommer les plaquettes', correct: true, correction: 'Oui. Elles sont mobilisées dans la coagulation pathologique.' },
      { text: 'L\'hyperfibrinolyse peut contribuer au risque hémorragique', correct: true, correction: 'Oui. Le support mentionne ce facteur aggravant.' },
      { text: 'Une CIVD se conclut à partir d\'une numération plaquettaire isolée', correct: false, correction: 'Non. Le diagnostic exige une évaluation clinique et biologique plus large.' },
      { text: 'La CIVD signifie toujours une fabrication excessive de plaquettes normales', correct: false, correction: 'Non. Le mécanisme présenté est leur consommation, pas une surproduction protectrice.' },
      { text: 'Thrombose et saignement peuvent coexister', correct: true, correction: 'Oui. La consommation des éléments de l\'hémostase rend possible ce paradoxe clinique.' },
    ],
    explanation: 'La CIVD active la coagulation de façon diffuse, consomme des plaquettes et peut associer manifestations thrombotiques et hémorragiques. (Cours, p. 19)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Pourquoi le temps de saignement par incision n\'est-il plus un test courant de l\'hémostase primaire ?',
    options: [
      { text: 'Il est invasif, peu reproductible et ses performances diagnostiques sont insuffisantes', correct: true, correction: 'Oui. Ces limites expliquent l\'abandon de son usage courant.' },
      { text: 'Il est parfaitement indépendant de la technique de l\'opérateur', correct: false, correction: 'Non. La variabilité du geste est l\'une de ses faiblesses.' },
      { text: 'Il explore uniquement la concentration de fibrinogène', correct: false, correction: 'Non. La durée dépend de nombreux paramètres vasculaires et plaquettaires.' },
      { text: 'Il mesure spécifiquement et quantitativement le taux de VWF', correct: false, correction: 'Non. Il chronomètre un saignement cutané, sans doser le facteur de Willebrand.' },
      { text: 'Il ne nécessite aucun geste sur la peau', correct: false, correction: 'Non. Le protocole historique impose justement une incision standardisée.' },
    ],
    explanation: 'Le temps de saignement historique reposait sur une incision et manquait de reproductibilité, sensibilité et spécificité ; il ne doit pas être assimilé à un dosage moderne du VWF. (Cours, p. 19)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quels éléments appartiennent au protocole historique du temps de saignement décrit par le cours ?',
    options: [
      { text: 'Un dosage immunologique de VWF:Ag', correct: false, correction: 'Non. Il s\'agit d\'une analyse plasmatique distincte du temps de saignement.' },
      { text: 'Un recueil régulier des gouttes avec un papier buvard', correct: true, correction: 'Oui. Le support décrit un prélèvement répété environ toutes les 30 secondes.' },
      { text: 'Une incision cutanée standardisée sur l\'avant-bras', correct: true, correction: 'Oui. Elle créait la lésion dont on suivait l\'arrêt du saignement.' },
      { text: 'Une agrégométrie sur plasma riche en plaquettes', correct: false, correction: 'Non. Cette méthode instrumentale est un autre test de fonction plaquettaire.' },
      { text: 'La mesure du délai jusqu\'à l\'arrêt du saignement', correct: true, correction: 'Oui. C\'était la grandeur principale chronométrée.' },
    ],
    explanation: 'Le temps de saignement est un ancien test clinique au lit du malade, fondé sur une incision et un chronométrage. Son abandon tient à ses limites méthodologiques. (Cours, p. 19)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Que mesure directement un appareil PFA dans le principe présenté ?',
    options: [
      { text: 'Le temps de dissolution d\'un caillot de fibrine', correct: false, correction: 'Non. Il s\'agit ici de fermeture plaquettaire, pas de fibrinolyse.' },
      { text: 'La concentration exacte de VWF en grammes par litre', correct: false, correction: 'Non. Le temps d\'occlusion est une mesure globale ; un dosage spécifique est nécessaire pour quantifier le VWF.' },
      { text: 'La production hépatique de facteur VII', correct: false, correction: 'Non. Le système explore surtout le processus de fermeture plaquettaire sous flux.' },
      { text: 'Le temps nécessaire pour obturer une ouverture dans une membrane activatrice', correct: true, correction: 'Oui. Il chronomètre la fermeture d\'une petite ouverture sous écoulement de sang.' },
      { text: 'Le nombre total de mégacaryocytes médullaires', correct: false, correction: 'Non. Le test se réalise sur un prélèvement de sang, pas sur la moelle.' },
    ],
    explanation: 'Le PFA fait passer le sang par une ouverture recouverte de collagène et d\'un agoniste ; il mesure le temps de fermeture par un bouchon plaquettaire. (Cours, p. 19)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'À propos du temps d\'occlusion PFA, quelles propositions sont justes ?',
    options: [
      { text: 'Un temps normal exclut formellement toute maladie de Willebrand', correct: false, correction: 'Non. Sa sensibilité est variable, notamment pour les formes légères.' },
      { text: 'Une fermeture prolongée peut se voir dans certaines maladies de Willebrand', correct: true, correction: 'Oui. Une anomalie du VWF peut entraver la formation du bouchon.' },
      { text: 'Le résultat dépend aussi des plaquettes et peut être perturbé par la numération ou l\'hématocrite', correct: true, correction: 'Oui. Le temps d\'occlusion n\'est pas spécifique du VWF.' },
      { text: 'Le PFA identifie à lui seul le sous-type génétique exact de maladie de Willebrand', correct: false, correction: 'Non. Il faut des examens spécifiques pour établir le type et la cause.' },
      { text: 'La membrane du test comporte du collagène et un agoniste comme l\'ADP ou l\'adrénaline', correct: true, correction: 'Oui. Ces composants favorisent l\'adhésion et l\'activation des plaquettes.' },
    ],
    explanation: 'Le PFA est un test global de fermeture sous flux, utile comme indice mais insuffisant pour exclure ou confirmer à lui seul une maladie de Willebrand. (Cours, p. 19–20 ; NHLBI, rapport VWD)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Une suspicion clinique de maladie de Willebrand persiste malgré un PFA normal. Quelle démarche de laboratoire est la plus adaptée ?',
    options: [
      { text: 'Répéter indéfiniment l\'ancien temps de saignement sans dosage plasmatique', correct: false, correction: 'Non. Ce test ancien ne remplace pas les mesures ciblées.' },
      { text: 'Demander des examens spécifiques du VWF et du facteur VIII selon le contexte', correct: true, correction: 'Oui. L\'antigène VWF, son activité plaquetto-dépendante et le FVIII explorent directement la suspicion.' },
      { text: 'Conclure que le VWF est absent et que le facteur VIII est toujours nul', correct: false, correction: 'Non. Ces paramètres n\'ont pas été mesurés par le PFA.' },
      { text: 'Diagnostiquer automatiquement une thrombopathie congénitale', correct: false, correction: 'Non. Le PFA normal n\'établit pas cette autre étiologie.' },
      { text: 'Écarter définitivement la maladie sur le seul résultat du PFA', correct: false, correction: 'Non. Un résultat normal ne possède pas une valeur d\'exclusion absolue.' },
    ],
    explanation: 'Les recommandations ASH/ISTH/NHF/WFH définissent le bilan spécifique par VWF:Ag, activité plaquetto-dépendante du VWF et activité du facteur VIII ; la clinique guide le choix et l\'interprétation. (Cours, p. 19–20 ; ASH/ISTH/NHF/WFH, 2021)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles conséquences ou caractéristiques peuvent être liées à une maladie de Willebrand ?',
    options: [
      { text: 'Un défaut qualitatif du VWF', correct: true, correction: 'Oui. D\'autres formes touchent sa fonction plutôt que seulement sa quantité.' },
      { text: 'Une absence obligatoire de toutes les plaquettes', correct: false, correction: 'Non. La maladie touche d\'abord le VWF ; la numération plaquettaire peut être normale.' },
      { text: 'Un saignement cutanéo-muqueux', correct: true, correction: 'Oui. Le défaut d\'adhésion plaquettaire se manifeste volontiers à ces sites.' },
      { text: 'Une baisse du facteur VIII dans certaines formes', correct: true, correction: 'Oui. Le VWF stabilise le FVIII en circulation ; son défaut peut réduire le FVIII.' },
      { text: 'Un déficit quantitatif du VWF', correct: true, correction: 'Oui. Certaines formes comportent une diminution de la quantité de protéine.' },
    ],
    explanation: 'La maladie de Willebrand peut associer atteinte de l\'hémostase primaire et, selon la forme et la sévérité, diminution du FVIII, ce qui touche la coagulation. (Cours, p. 20 ; ASH/ISTH/NHF/WFH, 2021)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel rôle du VWF explique qu\'un TCA puisse être allongé dans certaines maladies de Willebrand ?',
    options: [
      { text: 'Il inhibe sélectivement la production médullaire de facteur VIII', correct: false, correction: 'Non. Le problème est la stabilité plasmatique du FVIII, pas une inhibition de sa synthèse médullaire.' },
      { text: 'Il détruit toujours les plaquettes circulantes', correct: false, correction: 'Non. Son rôle normal est surtout l\'adhésion plaquettaire et le transport du FVIII.' },
      { text: 'Il remplace le fibrinogène dans tous les ponts d\'agrégation', correct: false, correction: 'Non. Le fibrinogène a une fonction propre dans l\'agrégation.' },
      { text: 'Il protège le facteur VIII en circulation', correct: true, correction: 'Oui. Un manque de VWF peut réduire le FVIII et prolonger le TCA lorsque la baisse est suffisante.' },
      { text: 'Il transforme directement la prothrombine en thrombine', correct: false, correction: 'Non. Cette réaction relève de la cascade de coagulation et non de l\'action directe du VWF.' },
    ],
    explanation: 'Le VWF transporte et stabilise le facteur VIII. Le TCA n\'est cependant pas obligatoirement allongé dans toutes les formes de maladie de Willebrand. (Cours, p. 20)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'À propos de la mesure historique de l\'activité cofacteur de la ristocétine (VWF:RCo), quelles affirmations sont exactes ?',
    options: [
      { text: 'Elle utilise le plasma du patient comme source de VWF', correct: true, correction: 'Oui. C\'est l\'activité du VWF plasmatique étudié qui influence l\'agglutination.' },
      { text: 'Le test est strictement identique à une simple numération plaquettaire sur NFS', correct: false, correction: 'Non. La NFS compte les plaquettes, sans mesurer l\'activité VWF:RCo.' },
      { text: 'L\'agglutination est observée avec des plaquettes réactives et peut être mesurée sur plusieurs dilutions', correct: true, correction: 'Oui. Les dilutions permettent une estimation quantitative de l\'activité.' },
      { text: 'La ristocétine favorise l\'interaction entre VWF et GPIb plaquettaire', correct: true, correction: 'Oui. Cette interaction est au cœur de l\'ancien test d\'activité.' },
      { text: 'La ristocétine mesure directement la fonction du facteur IX', correct: false, correction: 'Non. L\'essai interroge l\'interaction VWF–GPIb, pas le facteur IX.' },
    ],
    explanation: 'Le VWF:RCo est un ancien essai d\'activité plaquetto-dépendante du VWF. Les recommandations modernes privilégient souvent des méthodes GPIb sans ristocétine lorsque disponibles. (Cours, p. 20 ; ASH/ISTH/NHF/WFH, 2021)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quel profil rend une thrombopathie héréditaire plus évocatrice qu\'une thrombopathie acquise ?',
    options: [
      { text: 'Une anomalie uniquement pendant une circulation extracorporelle', correct: false, correction: 'Non. Le contexte de circuit artificiel oriente vers une perturbation acquise.' },
      { text: 'Une thrombocytémie essentielle d\'apparition adulte', correct: false, correction: 'Non. Cette hémopathie est un exemple de cause acquise de fonction plaquettaire altérée.' },
      { text: 'Un trouble apparu avec une insuffisance rénale récente', correct: false, correction: 'Non. L\'urémie peut provoquer une dysfonction plaquettaire acquise.' },
      { text: 'Un début après l\'introduction récente d\'un antiagrégant', correct: false, correction: 'Non. La chronologie évoque une cause médicamenteuse acquise.' },
      { text: 'Des saignements depuis l\'enfance associés à une histoire familiale', correct: true, correction: 'Oui. La précocité et la récurrence familiale suggèrent un trouble constitutionnel.' },
    ],
    explanation: 'L\'âge de début, la famille et les expositions récentes orientent le diagnostic ; le cours souligne que les thrombopathies acquises sont beaucoup plus fréquentes. (Cours, p. 20)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Une patiente présente des saignements muqueux. Le VWF:Ag est conservé, mais l\'activité plaquetto-dépendante du VWF est diminuée de façon répétée. Quelles interprétations sont justes ?',
    options: [
      { text: 'Une numération plaquettaire normale établit à elle seule le sous-type exact', correct: false, correction: 'Non. La NFS ne caractérise pas la fonction du VWF et ne définit pas son sous-type.' },
      { text: 'Un VWF:Ag conservé élimine toute maladie de Willebrand', correct: false, correction: 'Non. Une maladie qualitative peut conserver une quantité de VWF tout en réduisant sa fonction.' },
      { text: 'Un défaut qualitatif du VWF est à envisager', correct: true, correction: 'Oui. Une activité disproportionnellement basse par rapport à la quantité peut évoquer une anomalie fonctionnelle.' },
      { text: 'Le bilan doit être interprété avec l\'histoire hémorragique et, au besoin, des examens spécialisés', correct: true, correction: 'Oui. La discordance oriente mais ne suffit pas à elle seule au sous-typage complet.' },
      { text: 'Le dosage du facteur VIII peut compléter le bilan', correct: true, correction: 'Oui. Le VWF stabilise le facteur VIII ; leur exploration conjointe aide à interpréter le profil.' },
    ],
    explanation: 'Une discordance entre quantité et activité du VWF oriente vers un défaut qualitatif, à confirmer dans un bilan spécialisé incluant le facteur VIII et le contexte clinique. (Cours, p. 20 ; https://ashpublications.org/bloodadvances/article/5/1/280/474888/ASH-ISTH-NHF-WFH-2021-guidelines-on-the-diagnosis)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Dans une agrégométrie par transmission lumineuse, que traduit l\'éclaircissement du plasma riche en plaquettes après un agoniste ?',
    options: [
      { text: 'Une preuve que toutes les voies plaquettaires sont normales', correct: false, correction: 'Non. La réponse doit être étudiée avec plusieurs agonistes et replacée dans le contexte.' },
      { text: 'Une augmentation de la transmission lumineuse liée à l\'agrégation des plaquettes', correct: true, correction: 'Oui. Les amas de plaquettes laissent passer davantage de lumière à travers l\'échantillon.' },
      { text: 'Une disparition obligatoire du VWF plasmatique', correct: false, correction: 'Non. L\'éclaircissement renseigne sur l\'agrégation, pas sur une consommation systématique du VWF.' },
      { text: 'Une augmentation de l\'opacité du plasma', correct: false, correction: 'Non. Le plasma devient au contraire plus transparent si les plaquettes s\'agrègent.' },
      { text: 'Une hausse du nombre de mégacaryocytes du patient', correct: false, correction: 'Non. L\'essai se déroule in vitro sur un prélèvement de plasma riche en plaquettes.' },
    ],
    explanation: 'L\'agrégométrie mesure l\'augmentation de lumière transmise lorsque les plaquettes du plasma riche en plaquettes forment des agrégats après stimulation. (Cours, p. 21 ; ISTH SSC, 2013)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles étapes ou précautions appartiennent à l\'exploration par agrégométrie optique ?',
    options: [
      { text: 'Interpréter le tracé sans connaître la numération ni les traitements du patient', correct: false, correction: 'Non. Ces informations influencent la faisabilité et la lecture du test.' },
      { text: 'Suivre la transmission lumineuse au cours du temps', correct: true, correction: 'Oui. La courbe de lumière reflète la réponse d\'agrégation.' },
      { text: 'Préparer un plasma riche en plaquettes', correct: true, correction: 'Oui. Le PRP constitue l\'échantillon étudié dans la méthode classique.' },
      { text: 'Comparer les réponses à différents agonistes, tels l\'ADP ou l\'acide arachidonique', correct: true, correction: 'Oui. Des agonistes distincts explorent plusieurs voies d\'activation.' },
      { text: 'Conclure qu\'une courbe faible prouve toujours une anomalie héréditaire', correct: false, correction: 'Non. Des médicaments, maladies acquises et conditions préanalytiques peuvent modifier la réponse.' },
    ],
    explanation: 'L\'agrégométrie compare des tracés obtenus sur PRP après plusieurs agonistes ; leur interprétation requiert la clinique, les médicaments et les conditions de prélèvement. (Cours, p. 20–21 ; ISTH SSC, 2013)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quel complexe plaquettaire est déficient dans la forme classique de la maladie de Bernard-Soulier ?',
    options: [
      { text: 'COX-1', correct: false, correction: 'Non. Cette enzyme participe à la synthèse du thromboxane A2 et est inhibée par l\'aspirine.' },
      { text: 'GPIIb/IIIa', correct: false, correction: 'Non. Son déficit caractérise plutôt la thrombasthénie de Glanzmann.' },
      { text: 'P2Y12', correct: false, correction: 'Non. Il s\'agit d\'un récepteur de l\'ADP, notamment ciblé par plusieurs antiagrégants.' },
      { text: 'GPIb-IX-V', correct: true, correction: 'Oui. Ce complexe permet l\'interaction des plaquettes avec le facteur von Willebrand au site lésé.' },
      { text: 'Le récepteur hépatique du fibrinogène', correct: false, correction: 'Non. Le défaut concerne un complexe de la membrane plaquettaire, pas un récepteur hépatique.' },
    ],
    explanation: 'Le tableau du cours rattache Bernard-Soulier au complexe GPIb-IX-V, indispensable à l\'adhésion plaquettaire dépendante du VWF. (Cours, p. 21)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quels éléments orientent vers une maladie de Bernard-Soulier classique ?',
    options: [
      { text: 'Une numération et une taille plaquettaires nécessairement normales', correct: false, correction: 'Non. Ce profil évoque plutôt la forme classique de Glanzmann que Bernard-Soulier.' },
      { text: 'Un défaut primaire de la liaison GPIIb/IIIa–fibrinogène', correct: false, correction: 'Non. Ce mécanisme est celui de Glanzmann ; Bernard-Soulier touche GPIb-IX-V.' },
      { text: 'Une transmission souvent autosomique récessive', correct: true, correction: 'Oui. C\'est le mode de transmission de la forme classique présenté dans le tableau.' },
      { text: 'Des plaquettes géantes sur le frottis', correct: true, correction: 'Oui. Leur taille augmentée est un indice morphologique caractéristique.' },
      { text: 'Une thrombopénie associée à un défaut d\'adhésion', correct: true, correction: 'Oui. Le nombre peut être abaissé et l\'accrochage au VWF est perturbé.' },
    ],
    explanation: 'Bernard-Soulier associe classiquement une macrothrombocytopénie à une atteinte de l\'adhésion médiée par GPIb-IX-V. (Cours, p. 21)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Dans la thrombasthénie de Glanzmann, quelle étape de l\'hémostase primaire est directement perturbée ?',
    options: [
      { text: 'La dégradation finale de la fibrine par la plasmine', correct: false, correction: 'Non. Cela relève de la fibrinolyse, non du mécanisme de Glanzmann.' },
      { text: 'La synthèse hépatique du facteur von Willebrand', correct: false, correction: 'Non. Le VWF n\'est pas produit principalement par le foie et son déficit n\'explique pas Glanzmann.' },
      { text: 'La vasoconstriction réflexe du vaisseau lésé', correct: false, correction: 'Non. Le défaut principal porte sur le récepteur plaquettaire d\'agrégation.' },
      { text: 'L\'agrégation des plaquettes par des ponts de fibrinogène', correct: true, correction: 'Oui. Le complexe GPIIb/IIIa déficient ne peut plus assurer efficacement ces ponts.' },
      { text: 'La production de thrombine par le facteur tissulaire', correct: false, correction: 'Non. La coagulation peut être intacte malgré l\'agrégation plaquettaire défectueuse.' },
    ],
    explanation: 'Dans Glanzmann, GPIIb/IIIa (intégrine αIIbβ3) est quantitativement ou qualitativement déficient : le fibrinogène ne relie plus correctement les plaquettes. (Cours, p. 21)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles caractéristiques correspondent à la thrombasthénie de Glanzmann classique ?',
    options: [
      { text: 'Une numération et une morphologie plaquettaires souvent normales', correct: true, correction: 'Oui. La fonction peut être sévèrement anormale malgré une NFS peu évocatrice.' },
      { text: 'Un défaut du complexe GPIIb/IIIa', correct: true, correction: 'Oui. Il s\'agit du récepteur plaquettaire majeur du fibrinogène.' },
      { text: 'Une transmission habituellement autosomique récessive', correct: true, correction: 'Oui. C\'est le mode de transmission indiqué pour la forme classique.' },
      { text: 'Une disparition obligatoire du facteur von Willebrand plasmatique', correct: false, correction: 'Non. Le déficit principal concerne GPIIb/IIIa, pas la quantité de VWF.' },
      { text: 'Une agrégation plaquettaire fortement altérée', correct: true, correction: 'Oui. Les ponts interplaquettaires de fibrinogène ne se forment plus normalement.' },
    ],
    explanation: 'Le tableau distingue Glanzmann, défaut d\'agrégation avec plaquettes habituellement normales, de Bernard-Soulier, défaut d\'adhésion avec plaquettes géantes. (Cours, p. 21)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Un enfant présente des épistaxis répétées, une thrombopénie et des plaquettes géantes. Quel diagnostic du tableau est le plus évocateur ?',
    options: [
      { text: 'Effet isolé d\'un anti-P2Y12', correct: false, correction: 'Non. Un traitement anti-P2Y12 altère la fonction, sans expliquer habituellement cette macrothrombocytopénie.' },
      { text: 'Thrombasthénie de Glanzmann classique', correct: false, correction: 'Non. La taille et la numération des plaquettes y sont habituellement conservées.' },
      { text: 'Déficit isolé en facteur XIII', correct: false, correction: 'Non. Il n\'est pas responsable du profil plaquettaire décrit.' },
      { text: 'Déficit isolé en facteur VIII', correct: false, correction: 'Non. Il n\'explique pas typiquement les plaquettes géantes et la thrombopénie.' },
      { text: 'Maladie de Bernard-Soulier', correct: true, correction: 'Oui. L\'association de saignements cutanéomuqueux et de macrothrombocytopénie correspond au profil décrit.' },
    ],
    explanation: 'Le frottis et la numération peuvent orienter vers Bernard-Soulier, même si la confirmation exige une exploration spécialisée. (Cours, p. 21)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Une agrégométrie utilise de la ristocétine et d\'autres agonistes. Quelles interprétations sont justes pour les formes classiques de Bernard-Soulier et de Glanzmann ?',
    options: [
      { text: 'Une réponse normale à la ristocétine exclut Glanzmann', correct: false, correction: 'Non. La voie VWF–GPIb est généralement préservée dans Glanzmann.' },
      { text: 'Une réponse diminuée à la ristocétine oriente vers Bernard-Soulier', correct: true, correction: 'Oui. La ristocétine explore l\'interaction entre le VWF et GPIb, défaillante dans Bernard-Soulier.' },
      { text: 'Une réponse à la ristocétine peut être conservée dans Glanzmann', correct: true, correction: 'Oui. Cette agglutination dépend de VWF–GPIb, et non des ponts de fibrinogène via GPIIb/IIIa.' },
      { text: 'Une absence d\'agrégation aux agonistes comme l\'ADP oriente vers Glanzmann', correct: true, correction: 'Oui. L\'agrégation finale exige le complexe GPIIb/IIIa fonctionnel.' },
      { text: 'Une réponse absente à la ristocétine prouve à elle seule une maladie de Bernard-Soulier', correct: false, correction: 'Non. Un défaut du VWF peut également perturber ce test ; le contexte et les examens complémentaires comptent.' },
    ],
    explanation: 'Le contraste entre la réponse à la ristocétine et celle aux agonistes d\'agrégation aide à localiser le défaut de récepteur. La ristocétine seule ne suffit pas au diagnostic. (Cours, p. 20–21 ; déduction à partir des récepteurs décrits)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Une patiente présente des ecchymoses après l\'introduction d\'un médicament antiagrégant, alors que sa numération plaquettaire est normale. Quelle interprétation est la plus adaptée ?',
    options: [
      { text: 'Une thrombopathie acquise reste possible malgré un nombre normal de plaquettes', correct: true, correction: 'Oui. Le médicament peut altérer la fonction plaquettaire sans réduire la numération.' },
      { text: 'Il faut conclure à une maladie de Bernard-Soulier', correct: false, correction: 'Non. Celle-ci est héréditaire et s\'accompagne souvent de plaquettes géantes et d\'une thrombopénie.' },
      { text: 'Le médicament ne peut agir que sur la coagulation plasmatique', correct: false, correction: 'Non. Les antiagrégants ciblent directement des voies d\'activation ou d\'agrégation plaquettaire.' },
      { text: 'Une numération normale exclut tout trouble de l\'hémostase primaire', correct: false, correction: 'Non. Un défaut qualitatif peut survenir avec une NFS normale.' },
      { text: 'Le tableau prouve une afibrinogénémie congénitale', correct: false, correction: 'Non. Ni le médicament ni la NFS ne permettent cette conclusion.' },
    ],
    explanation: 'Les médicaments constituent une cause fréquente de thrombopathie acquise ; il faut distinguer quantité et qualité des plaquettes. (Cours, p. 21 et 26)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'En dehors des antiagrégants prescrits comme tels, quels produits sont cités parmi les causes médicamenteuses possibles de thrombopathie acquise ?',
    options: [
      { text: 'Tout supplément de fer oral', correct: false, correction: 'Non. Une supplémentation martiale n\'est pas un exemple de cause médicamenteuse de thrombopathie dans ce cours.' },
      { text: 'Certains antibiotiques', correct: true, correction: 'Oui. Le cours les cite parmi les médicaments pouvant altérer la fonction plaquettaire.' },
      { text: 'Certains antidépresseurs', correct: true, correction: 'Oui. Ils figurent également parmi les exemples de médicaments en cause.' },
      { text: 'Tout médicament à base de facteur VIII', correct: false, correction: 'Non. Un concentré de facteur VIII traite un déficit de coagulation et n\'est pas une cause-type de thrombopathie acquise.' },
      { text: 'Certains produits de phytothérapie', correct: true, correction: 'Oui. Une origine végétale n\'exclut pas un effet sur la fonction plaquettaire.' },
    ],
    explanation: 'L\'interrogatoire doit couvrir aussi les traitements non présentés comme antiagrégants, ainsi que les produits de phytothérapie. (Cours, p. 20)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Pourquoi une thrombocytémie essentielle peut-elle s\'accompagner de saignements malgré un nombre élevé de plaquettes ?',
    options: [
      { text: 'Parce que le VWF n\'est jamais synthétisé en présence de plaquettes nombreuses', correct: false, correction: 'Non. Cette relation absolue est fausse.' },
      { text: 'Parce que le P2Y12 est toujours absent dans cette maladie', correct: false, correction: 'Non. Le défaut fonctionnel n\'est pas défini par l\'absence constante de ce récepteur.' },
      { text: 'Parce que certaines plaquettes produites peuvent être fonctionnellement anormales', correct: true, correction: 'Oui. Le nombre ne renseigne pas à lui seul sur l\'efficacité de l\'hémostase primaire.' },
      { text: 'Parce qu\'une thrombocytémie est toujours une thrombopénie masquée', correct: false, correction: 'Non. Le nombre de plaquettes est au contraire élevé.' },
      { text: 'Parce que toute plaquette supplémentaire détruit automatiquement le fibrinogène', correct: false, correction: 'Non. Ce n\'est pas le mécanisme décrit.' },
    ],
    explanation: 'L\'exemple de thrombocytémie essentielle rappelle qu\'une anomalie quantitative et une anomalie qualitative peuvent coexister. (Cours, p. 27)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'À propos de l\'aspirine et de la voie du thromboxane A2, quelles propositions sont exactes ?',
    options: [
      { text: 'L\'inhibition de la COX-1 plaquettaire par l\'aspirine est irréversible', correct: true, correction: 'Oui. L\'acétylation de l\'enzyme est durable pour la plaquette concernée.' },
      { text: 'L\'ibuprofène exerce sur COX-1 la même inhibition irréversible que l\'aspirine', correct: false, correction: 'Non. L\'inhibition par l\'ibuprofène est réversible ; sa durée dépend du contexte.' },
      { text: 'L\'aspirine diminue la synthèse plaquettaire de TXA2', correct: true, correction: 'Oui. La COX-1 inhibée ne fournit plus normalement les précurseurs du TXA2.' },
      { text: 'L\'aspirine bloque directement le site de liaison du VWF sur GPIb', correct: false, correction: 'Non. Elle agit sur la voie du TXA2, non sur le récepteur d\'adhésion GPIb.' },
      { text: 'Son effet sur une plaquette exposée persiste jusqu\'au renouvellement de celle-ci', correct: true, correction: 'Oui. Les plaquettes anucléées ne remplacent pas efficacement la COX-1 inhibée.' },
    ],
    explanation: 'La réduction durable de TXA2 par l\'aspirine résulte d\'une inhibition irréversible de COX-1 dans les plaquettes exposées. (Cours, p. 22)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Pourquoi l\'effet antiagrégant d\'une prise isolée d\'ibuprofène s\'estompe-t-il généralement plus vite que celui de l\'aspirine ?',
    options: [
      { text: 'L\'ibuprofène détruit définitivement les plaquettes qui l\'ont absorbé', correct: false, correction: 'Non. Il ne détruit pas les plaquettes ; son inhibition de COX-1 est réversible.' },
      { text: 'L\'ibuprofène bloque irréversiblement P2Y12', correct: false, correction: 'Non. Il agit surtout sur les cyclo-oxygénases, sans inhibition irréversible de P2Y12.' },
      { text: 'L\'aspirine renouvelle immédiatement la COX-1 des plaquettes', correct: false, correction: 'Non. Au contraire, les plaquettes exposées récupèrent peu cette activité avant leur renouvellement.' },
      { text: 'L\'ibuprofène inhibe la COX-1 de façon réversible', correct: true, correction: 'Oui. Son effet décroît lorsque le médicament n\'occupe plus l\'enzyme, alors que l\'aspirine l\'inhibe irréversiblement.' },
      { text: 'L\'aspirine agit uniquement tant qu\'elle circule dans le plasma', correct: false, correction: 'Non. Son effet plaquettaire persiste après sa disparition plasmatique grâce à l\'inhibition irréversible de COX-1.' },
    ],
    explanation: 'Le caractère réversible ou irréversible de la liaison à COX-1 explique la différence de persistance entre ibuprofène et aspirine. (Cours, p. 22)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quels couples médicament–cible sont correctement associés ?',
    options: [
      { text: 'Aspirine — récepteur P2Y12', correct: false, correction: 'Non. L\'aspirine inhibe la COX-1 plaquettaire, pas P2Y12.' },
      { text: 'Cangrélor — récepteur P2Y12', correct: true, correction: 'Oui. C\'est un antagoniste intraveineux à effet rapidement réversible.' },
      { text: 'Ticagrélor — récepteur P2Y12', correct: true, correction: 'Oui. Il agit directement et de façon réversible sur cette voie.' },
      { text: 'Prasugrel — récepteur P2Y12', correct: true, correction: 'Oui. Il appartient aux thiénopyridines anti-P2Y12.' },
      { text: 'Clopidogrel — récepteur P2Y12', correct: true, correction: 'Oui. Son métabolite actif inhibe la voie de l\'ADP.' },
    ],
    explanation: 'Le cours distingue la voie du TXA2 ciblée par l\'aspirine de la voie ADP–P2Y12 ciblée par plusieurs autres antiagrégants. (Cours, p. 22)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Lequel de ces antiagrégants est une thiénopyridine nécessitant une activation métabolique pour inhiber irréversiblement P2Y12 ?',
    options: [
      { text: 'Ticagrélor', correct: false, correction: 'Non. Il est un antagoniste direct et réversible de P2Y12, non une thiénopyridine pro-médicament.' },
      { text: 'Clopidogrel', correct: true, correction: 'Oui. Son métabolite actif se lie durablement au récepteur P2Y12 plaquettaire.' },
      { text: 'Cangrélor', correct: false, correction: 'Non. Il agit directement et brièvement par voie intraveineuse.' },
      { text: 'Aspirine', correct: false, correction: 'Non. Elle cible principalement la COX-1 plaquettaire dans son action antiagrégante.' },
      { text: 'Tirofiban', correct: false, correction: 'Non. Il antagonise GPIIb/IIIa, qui intervient dans l\'agrégation finale.' },
    ],
    explanation: 'Le clopidogrel, comme le prasugrel, est une thiénopyridine dont un métabolite actif inhibe irréversiblement P2Y12. (Cours, p. 22)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles différences entre thiénopyridines et ticagrélor sont justes ?',
    options: [
      { text: 'Le ticagrélor se fixe réversiblement à P2Y12', correct: true, correction: 'Oui. Son interaction avec ce récepteur n\'est pas irréversible.' },
      { text: 'Le ticagrélor inhibe irréversiblement COX-1', correct: false, correction: 'Non. Il cible P2Y12 et son action sur ce récepteur est réversible.' },
      { text: 'Le prasugrel inhibe irréversiblement P2Y12 après activation', correct: true, correction: 'Oui. Il appartient aux thiénopyridines.' },
      { text: 'Le clopidogrel nécessite une activation métabolique', correct: true, correction: 'Oui. C\'est son métabolite actif qui exerce l\'effet anti-P2Y12.' },
      { text: 'Le clopidogrel agit principalement en bloquant GPIb-IX-V', correct: false, correction: 'Non. Son mécanisme porte sur la voie de l\'ADP via P2Y12.' },
    ],
    explanation: 'La distinction utile est thiénopyridines métabolisées avec inhibition irréversible, contre ticagrélor direct et réversible. (Cours, p. 22)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quel anti-P2Y12 du cours est administré par voie intraveineuse avec un effet rapidement réversible après l\'arrêt de la perfusion ?',
    options: [
      { text: 'Abciximab', correct: false, correction: 'Non. Il agit sur GPIIb/IIIa et non sur la voie ADP–P2Y12.' },
      { text: 'Cangrélor', correct: true, correction: 'Oui. Il agit directement sur P2Y12 et la fonction plaquettaire revient rapidement après arrêt.' },
      { text: 'Aspirine', correct: false, correction: 'Non. Elle inhibe COX-1 et non P2Y12.' },
      { text: 'Prasugrel', correct: false, correction: 'Non. Il est une thiénopyridine orale à inhibition irréversible.' },
      { text: 'Clopidogrel', correct: false, correction: 'Non. Il est administré par voie orale et son action sur les plaquettes exposées est irréversible.' },
    ],
    explanation: 'Le cangrélor est le P2Y12 intraveineux de courte action présenté dans le cours ; la récupération fonctionnelle après l\'arrêt est rapide. (Cours, p. 22)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'À propos des antagonistes du complexe GPIIb/IIIa, quelles propositions sont correctes ?',
    options: [
      { text: 'Le tirofiban est un peptide synthétique', correct: false, correction: 'Non. Le tirofiban est un antagoniste non peptidique selon l\'EMA ; la mention « peptide » dans le support est erronée.' },
      { text: 'L\'abciximab est un fragment d\'anticorps qui bloque GPIIb/IIIa', correct: true, correction: 'Oui. Il empêche l\'étape finale de l\'agrégation médiée par ce récepteur.' },
      { text: 'Leur cible est distincte de P2Y12', correct: true, correction: 'Oui. Ils agissent en aval de plusieurs voies d\'activation.' },
      { text: 'Ils restaurent le récepteur GPIb-IX-V dans Bernard-Soulier', correct: false, correction: 'Non. Ils inhibent l\'agrégation et ne corrigent pas le défaut d\'adhésion congénital.' },
      { text: 'Le tirofiban empêche la liaison du fibrinogène à GPIIb/IIIa', correct: true, correction: 'Oui. Il antagonise ce récepteur et limite les ponts entre plaquettes.' },
    ],
    explanation: 'Abciximab et tirofiban bloquent GPIIb/IIIa, voie finale de l\'agrégation. Le tirofiban est une petite molécule non peptidique. (Cours, p. 22 ; EMA, Aggrastat : https://www.ema.europa.eu/en/medicines/human/referrals/aggrastat)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Pourquoi le blocage de GPIIb/IIIa perturbe-t-il fortement l\'agrégation plaquettaire ?',
    options: [
      { text: 'Il remplace le collagène du sous-endothélium', correct: false, correction: 'Non. Le collagène est un support d\'adhésion, non remplacé par cet antagonisme.' },
      { text: 'Il empêche les ponts de fibrinogène reliant les plaquettes activées', correct: true, correction: 'Oui. GPIIb/IIIa est un récepteur final majeur de l\'agrégation.' },
      { text: 'Il détruit directement toutes les plaquettes circulantes', correct: false, correction: 'Non. Un antagoniste de récepteur n\'agit pas par disparition obligatoire des plaquettes.' },
      { text: 'Il empêche uniquement la synthèse hépatique du facteur VIII', correct: false, correction: 'Non. Le mécanisme visé est plaquettaire et concerne la liaison du fibrinogène.' },
      { text: 'Il transforme le VWF en fibrine insoluble', correct: false, correction: 'Non. Cette transformation n\'est pas le rôle de GPIIb/IIIa.' },
    ],
    explanation: 'GPIIb/IIIa est activé au terme de plusieurs voies de stimulation et permet la liaison du fibrinogène entre plaquettes. (Cours, p. 21–22)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement l\'association d\'une inhibition de la voie TXA2 et d\'une inhibition de P2Y12 ?',
    options: [
      { text: 'Elle peut accroître le risque de saignement', correct: true, correction: 'Oui. Une inhibition plus forte de la fonction plaquettaire expose à ce risque.' },
      { text: 'Elle agit en augmentant l\'adhésion GPIb–VWF', correct: false, correction: 'Non. Les traitements diminuent l\'activation/agrégation ; ils ne renforcent pas l\'adhésion.' },
      { text: 'Elle cible deux voies distinctes d\'amplification de l\'activation plaquettaire', correct: true, correction: 'Oui. Le TXA2 et l\'ADP renforcent tous deux l\'activation des plaquettes.' },
      { text: 'Elle peut être utilisée dans certaines situations de risque thrombotique élevé', correct: true, correction: 'Oui. Le cours évoque une combinaison selon le contexte cardiovasculaire.' },
      { text: 'Elle est nécessaire chez toute personne sans évaluation du contexte', correct: false, correction: 'Non. L\'indication dépend d\'une situation clinique précise et de la balance bénéfice–risque.' },
    ],
    explanation: 'Le cours présente la double inhibition TXA2–ADP comme une stratégie dans certains contextes thrombotiques, à confronter au risque hémorragique. (Cours, p. 21–22)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'En agrégométrie optique, le plasma riche en plaquettes reste opaque malgré l\'ajout d\'ADP, d\'adrénaline et d\'acide arachidonique. Quelle interprétation est la plus adaptée ?',
    options: [
      { text: 'Un défaut sévère d\'agrégation plaquettaire est possible, comme dans Glanzmann', correct: true, correction: 'Oui. Sans agrégation, les plaquettes restent en suspension et la transmission lumineuse augmente peu.' },
      { text: 'Ce résultat prouve une thrombopénie centrale isolée', correct: false, correction: 'Non. L\'agrégométrie recherche ici un défaut fonctionnel ; elle ne démontre pas l\'origine d\'une thrombopénie.' },
      { text: 'L\'agrégation est normale puisque le plasma riche en plaquettes reste trouble', correct: false, correction: 'Non. Lors d\'une agrégation normale, les plaquettes s\'assemblent et le milieu s\'éclaircit.' },
      { text: 'Ce résultat démontre une augmentation de la synthèse hépatique du fibrinogène', correct: false, correction: 'Non. Le test mesure la transmission lumineuse liée à l\'agrégation, pas la synthèse du fibrinogène.' },
      { text: 'La seule conclusion est une absence de facteur von Willebrand plasmatique', correct: false, correction: 'Non. L\'opacité persistante avec ces agonistes n\'identifie pas à elle seule un déficit en VWF.' },
    ],
    explanation: 'Dans une thrombopathie sévère, l\'absence d\'agrégation laisse le PRP opaque. La confirmation et le diagnostic précis nécessitent l\'interprétation du profil complet. (Cours, p. 21)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles associations entre une molécule plaquettaire et son rôle ou ligand sont exactes ?',
    options: [
      { text: 'COX-1 — récepteur direct du facteur von Willebrand', correct: false, correction: 'Non. COX-1 est une enzyme de la voie du thromboxane, non un récepteur du VWF.' },
      { text: 'GPIa/IIa — interaction avec le collagène', correct: true, correction: 'Oui. Elle contribue à stabiliser l\'adhésion plaquettaire.' },
      { text: 'GPIb-IX-V — interaction avec le facteur von Willebrand', correct: true, correction: 'Oui. Cette liaison permet un premier ancrage sur le sous-endothélium exposé.' },
      { text: 'P2Y12 — réponse à l\'ADP', correct: true, correction: 'Oui. Ce récepteur participe à l\'amplification de l\'activation.' },
      { text: 'GPIIb/IIIa — liaison du fibrinogène', correct: true, correction: 'Oui. Ce ligand forme des ponts lors de l\'agrégation.' },
    ],
    explanation: 'Le schéma du cours relie successivement les récepteurs d\'adhésion, les signaux d\'activation et GPIIb/IIIa pour l\'agrégation. (Cours, p. 9–10 et 21–22)'
  },
]
