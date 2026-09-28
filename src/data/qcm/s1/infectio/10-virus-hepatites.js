export const meta = {
  title: 'Virus des hépatites',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle définition de l’hépatite est la plus correcte ?',
    options: [
      { text: 'Un ictère qui prouve à lui seul une infection virale', correct: false, correction: 'Faux. L’ictère est un signe clinique ; il ne suffit pas à identifier la cause.' },
      { text: 'Une maladie définie uniquement par la présence d’IgG antivirales dans le sang', correct: false, correction: 'Non. Des IgG peuvent refléter une réponse immune antérieure sans inflammation hépatique active.' },
      { text: 'Une maladie dont l’origine est toujours infectieuse', correct: false, correction: 'Non chef. Le cours cite notamment des origines toxiques, médicamenteuses, auto-immunes et métaboliques.' },
      { text: 'Une infection obligatoirement causée par le virus de l’hépatite A', correct: false, correction: 'Non chef. Plusieurs virus peuvent provoquer une hépatite, et il existe aussi des causes non virales.' },
      { text: 'Une inflammation du foie, pouvant s’accompagner de lésions des hépatocytes et de cytolyse', correct: true, correction: 'Oui boss 🧠 La cytolyse peut accompagner l’hépatite, mais elle ne remplace pas sa définition comme inflammation hépatique.' },
    ],
    explanation: 'Une hépatite est une inflammation du foie. Le support insiste sur les lésions hépatocytaires et la cytolyse, ainsi que sur la diversité des causes, virales ou non virales. (Cours, p. 1 ; définition précisée)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles propositions générales sur les hépatites sont exactes ?',
    options: [
      { text: 'Toute augmentation des transaminases prouve une infection par le VHA', correct: false, correction: 'Non chef. La cytolyse renseigne sur une lésion hépatique, sans identifier à elle seule son origine.' },
      { text: 'EBV, CMV ou HSV peuvent aussi être associés à une hépatite', correct: true, correction: 'Exact. Le cours les cite en plus des principaux virus hépatotropes.' },
      { text: 'Les différents virus responsables d’hépatites n’appartiennent pas tous à la même famille', correct: true, correction: 'Oui boss. Le terme hépatite désigne une atteinte d’organe, pas une famille virale unique.' },
      { text: 'Le foie participe à la synthèse de facteurs de coagulation', correct: true, correction: 'Oui. Cette fonction explique l’intérêt des marqueurs de coagulation dans l’évaluation d’une atteinte hépatique sévère.' },
      { text: 'Une hépatite peut avoir une cause médicamenteuse ou toxique', correct: true, correction: 'Exact 🧠 Le cours cite ces causes parmi celles des lésions hépatiques.' },
    ],
    explanation: 'Le cours présente des causes multiples d’hépatite, plusieurs familles virales et le rôle du foie dans la coagulation. L’identification de la cause nécessite de dépasser le seul constat de cytolyse. (Cours, p. 1 et 3–4)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel mécanisme décrit la voie principale de transmission du VHA ?',
    options: [
      { text: 'L’ingestion du virus après contamination fécale de mains, d’eau ou d’aliments', correct: true, correction: 'Oui boss 🎯 Les selles d’une personne infectée peuvent contaminer les mains, l’eau ou les aliments qui transmettent ensuite le virus.' },
      { text: 'Une transmission exclusivement zoonotique à partir de viande de porc', correct: false, correction: 'Non. Le réservoir du VHA présenté est humain ; tu confonds avec une situation de transmission du VHE.' },
      { text: 'Une transmission respiratoire par aérosols', correct: false, correction: 'Non chef. La voie principale du VHA est digestive et féco-orale, pas respiratoire.' },
      { text: 'Une transmission qui exige un ictère visible chez la personne source', correct: false, correction: 'Non chef. Le virus peut être excrété et transmis avant l’apparition de l’ictère.' },
      { text: 'Une transmission exclusivement par piqûre de moustique', correct: false, correction: 'Faux. Aucun vecteur de ce type n’intervient dans le mécanisme présenté.' },
    ],
    explanation: 'La transmission principale du VHA est féco-orale, directement par des mains contaminées ou indirectement par de l’eau et des aliments contaminés. La présence d’un ictère n’est pas nécessaire à la contagiosité. (Cours, p. 2 et 4)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles propositions concernant le VHA et ses situations de transmission sont exactes ?',
    options: [
      { text: 'Un bon traitement des eaux usées rend toute contamination alimentaire impossible', correct: false, correction: 'Faux. Il réduit un risque majeur, mais n’exclut pas les autres contaminations, notamment manuportées.' },
      { text: 'Une hygiène insuffisante des mains lors de la préparation d’aliments peut faciliter la transmission', correct: true, correction: 'Exact. La contamination manuportée est un mécanisme important du cours.' },
      { text: 'Des coquillages provenant d’une eau contaminée peuvent participer à une transmission indirecte', correct: true, correction: 'Oui boss. Les coquillages peuvent concentrer le virus présent dans leur milieu.' },
      { text: 'Le réservoir principal décrit est humain', correct: true, correction: 'Exact 🧠 Le virus est excrété dans les selles des personnes infectées.' },
      { text: 'Un contact social ordinaire suffit toujours à transmettre le VHA, sans exposition féco-orale', correct: false, correction: 'Non chef. Il faut un mécanisme de contamination ; partager simplement une pièce ne suffit pas à expliquer cette transmission.' },
    ],
    explanation: 'Le réservoir humain, les selles, les mains et les aliments ou l’eau contaminés structurent la transmission du VHA. L’assainissement réduit le risque sans rendre impossible toute infection. (Cours, p. 2 et 5)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Une personne présente des signes d’hépatite après une exposition alimentaire unique connue. Quel délai est compatible avec le repère d’incubation du VHA donné dans le cours, sans suffire à confirmer le diagnostic ?',
    options: [
      { text: 'Trente jours', correct: true, correction: 'Oui boss 🎯 Trente jours est dans le repère de 15–45 jours du support ; cela rend l’exposition compatible, sans prouver la cause.' },
      { text: 'Six mois', correct: false, correction: 'Non chef. Ce délai après une exposition unique est très au-delà de l’incubation habituelle ; il ne faut pas le confondre avec une convalescence prolongée.' },
      { text: 'Un jour', correct: false, correction: 'Faux. Une manifestation dès le lendemain ne correspond pas à l’incubation présentée.' },
      { text: 'Trois heures', correct: false, correction: 'Non chef. Ce délai est bien trop court pour l’incubation du VHA liée à cette exposition.' },
      { text: 'Trois jours', correct: false, correction: 'Non. Le cours met précisément en garde contre l’attribution au VHA de troubles survenus trois jours après le repas concerné.' },
    ],
    explanation: 'L’incubation du VHA est de plusieurs semaines. Le support utilise le repère de 15–45 jours ; un délai de 30 jours est donc compatible. Le délai ne remplace pas les examens nécessaires au diagnostic. (Cours, p. 3 et 9–10)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles manifestations ou évolutions sont compatibles avec une hépatite A ?',
    options: [
      { text: 'Un ictère avec urines foncées et selles décolorées', correct: true, correction: 'Oui boss. Ces signes peuvent accompagner la phase ictérique.' },
      { text: 'Une phase initiale d’asthénie et de symptômes pseudo-grippaux', correct: true, correction: 'Exact 🧠 Le cours décrit une phase pré-ictérique parfois peu spécifique.' },
      { text: 'La présence de l’un de ces signes suffit à distinguer certainement le VHA de tout autre virus d’hépatite', correct: false, correction: 'Non chef. Les manifestations se recoupent ; l’identification virale repose aussi sur la biologie.' },
      { text: 'Une infection sans ictère, notamment chez un jeune enfant', correct: true, correction: 'Oui. Le VHA peut être asymptomatique ou peu symptomatique ; l’ictère n’est pas obligatoire.' },
      { text: 'Une fatigue pouvant persister pendant la convalescence', correct: true, correction: 'Exact. La disparition de l’infection aiguë ne signifie pas une récupération immédiate de tous les symptômes.' },
    ],
    explanation: 'L’hépatite A peut comporter une phase pseudo-grippale, un ictère et une convalescence prolongée. Certaines infections, en particulier chez l’enfant, sont peu symptomatiques ou asymptomatiques ; le VHA ne doit pas être opposé au VHE sur ce seul critère. (Cours, p. 3 et 6 ; absence d’ictère possible précisée)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Un adulte non récemment vacciné présente un ictère et une cytolyse après une exposition compatible avec le VHA. Quel marqueur sérologique est recherché en priorité pour étayer une hépatite A aiguë ?',
    options: [
      { text: 'La bilirubine, qui est un anticorps spécifique du VHA', correct: false, correction: 'Non. La bilirubine est liée à l’ictère ; ce n’est pas un anticorps dirigé contre le virus.' },
      { text: 'Le facteur V, qui identifie directement le VHA', correct: false, correction: 'Faux. Le facteur V renseigne sur la fonction hépatique de synthèse et la gravité, pas sur l’identité du virus.' },
      { text: 'Les IgM anti-VHA', correct: true, correction: 'Oui boss 🧠 C’est le marqueur sérologique principal du cours pour une infection aiguë ou récente, à interpréter avec le contexte.' },
      { text: 'Les ALAT, qui sont spécifiques d’une infection par le VHA', correct: false, correction: 'Non chef. Les ALAT traduisent la cytolyse, mais plusieurs causes peuvent les augmenter.' },
      { text: 'Les IgG anti-VHA isolées, sans recherche d’IgM', correct: false, correction: 'Non chef. Les IgG isolées peuvent refléter une immunité antérieure et ne suffisent pas à établir une infection aiguë.' },
    ],
    explanation: 'Les IgM anti-VHA sont le marqueur sérologique principal de l’hépatite A aiguë dans le cours. Elles s’interprètent avec les signes, l’exposition et la cytolyse. L’ARN du VHA peut aussi être détecté dans certaines situations : les IgM ne sont pas l’unique outil diagnostique possible. (Cours, p. 3–5 et 11 ; exclusivité du marqueur nuancée)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles interprétations du schéma sérologique et de l’évolution du VHA sont exactes ?',
    options: [
      { text: 'L’excrétion du virus peut précéder l’ictère', correct: true, correction: 'Oui boss. Le schéma montre pourquoi une personne peut être contagieuse avant que l’ictère révèle la maladie.' },
      { text: 'Des IgG anti-VHA positives prouvent à elles seules une réplication virale active', correct: false, correction: 'Non chef. Un anticorps n’est pas une mesure directe de présence ou de réplication du virus.' },
      { text: 'Une convalescence longue ou une rechute clinique ne signifie pas automatiquement une infection chronique par le VHA', correct: true, correction: 'Oui. Il faut distinguer la durée des manifestations d’une réplication virale chronique.' },
      { text: 'Le VHA ne provoque pas une infection chronique', correct: true, correction: 'Exact. C’est une différence importante avec la chronicité possible du VHE chez certains immunodéprimés.' },
      { text: 'Des IgG anti-VHA positives avec IgM négatives sont compatibles avec une infection ancienne ou une vaccination', correct: true, correction: 'Exact 🧠 Ce profil est associé à une immunité antérieure, sans prouver une infection aiguë actuelle.' },
    ],
    explanation: 'Le schéma présente l’excrétion virale précoce, les IgM puis la persistance d’IgG. Le VHA ne devient pas chronique, mais des symptômes prolongés ou des rechutes sont possibles ; un ictère prolongé ne doit pas être utilisé comme exclusion absolue. (Cours, p. 4–5 ; durée clinique et chronicité distinguées)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Dans une hépatite aiguë, que suggère une baisse importante du TP et du facteur V ?',
    options: [
      { text: 'Une immunité protectrice acquise contre le VHA', correct: false, correction: 'Non chef. Ces paramètres ne mesurent pas les anticorps protecteurs.' },
      { text: 'Une confirmation spécifique de la présence du VHE', correct: false, correction: 'Faux. La coagulation ne permet pas d’identifier à elle seule le virus responsable.' },
      { text: 'Une altération de la fonction de synthèse hépatique, constituant un élément de gravité', correct: true, correction: 'Oui boss 🎯 Le foie synthétise des facteurs de coagulation ; leur diminution peut signaler une insuffisance hépatique sévère.' },
      { text: 'Une absence de risque parce que les ALAT peuvent diminuer', correct: false, correction: 'Non. La gravité ne se juge pas uniquement au niveau des transaminases ; la fonction de synthèse compte aussi.' },
      { text: 'Une indication de greffe certaine déduite automatiquement de ces deux seules valeurs', correct: false, correction: 'Non chef. Ce sont des marqueurs importants, mais les décisions reposent sur une évaluation clinique et biologique complète.' },
    ],
    explanation: 'Le TP et le facteur V contribuent à apprécier la fonction de synthèse hépatique et la gravité. La cytolyse et l’identification étiologique sont des informations distinctes ; aucun paramètre isolé ne résume toute l’évaluation. (Cours, p. 1 et 4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles mesures contribuent à la prévention de la transmission du VHA ?',
    options: [
      { text: 'Des précautions sanitaires concernant les aliments et les coquillages', correct: true, correction: 'Exact. La transmission alimentaire fait partie des risques à prévenir.' },
      { text: 'L’hygiène des mains, notamment après les toilettes et avant de préparer des aliments', correct: true, correction: 'Oui. Elle limite la contamination manuportée mise en avant dans le cours.' },
      { text: 'L’accès à une eau potable et un assainissement adapté', correct: true, correction: 'Exact. Ces mesures réduisent la contamination féco-orale de l’environnement.' },
      { text: 'La vaccination contre l’hépatite A', correct: true, correction: 'Oui boss 🧠 Un vaccin efficace existe et induit une réponse immune protectrice.' },
      { text: 'La congélation, qui garantit à elle seule l’élimination du VHA de tout aliment', correct: false, correction: 'Non chef. Le virus résiste bien ; la congélation ne constitue pas une garantie d’inactivation.' },
    ],
    explanation: 'La prévention associe vaccination, eau sûre, assainissement et hygiène alimentaire et des mains. La résistance du VHA empêche de considérer la congélation comme une garantie d’absence de virus. (Cours, p. 2 et 4–5)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle description de l’enveloppe du VHE évite de généraliser à tous les milieux le tableau simplifié du cours ?',
    options: [
      { text: 'Le VHE est toujours un virus enveloppé, y compris dans les selles', correct: false, correction: 'Non chef. Les particules excrétées dans les selles sont non enveloppées.' },
      { text: 'La présence d’une enveloppe est déterminée uniquement par l’existence d’un ictère', correct: false, correction: 'Faux. Le caractère symptomatique ne définit pas l’enveloppe des particules virales.' },
      { text: 'La forme quasi-enveloppée transforme le génome ARN du VHE en ADN', correct: false, correction: 'Non chef. Une membrane autour de la particule ne change pas la nature de son génome.' },
      { text: 'Le VHE est non enveloppé dans les selles et peut circuler sous une forme quasi-enveloppée dans le sang', correct: true, correction: 'Oui boss 🧠 Il faut préciser le milieu : la description sans enveloppe convient aux particules fécales, mais ne résume pas toutes les formes.' },
      { text: 'Le VHE ne peut jamais être associé à une membrane lipidique', correct: false, correction: 'Non. Une forme quasi-enveloppée circule notamment dans le sang.' },
    ],
    explanation: 'La mention non enveloppé du support concerne notamment les particules excrétées dans les selles. Le VHE existe aussi sous forme quasi-enveloppée dans le sang ; son enveloppe apparente dépend donc du contexte de la particule. (Cours, p. 5 et 8 ; structure virale précisée)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles voies de transmission du VHE sont possibles ?',
    options: [
      { text: 'Une transmission verticale de la mère à l’enfant', correct: true, correction: 'Oui. Le cours cite aussi cette possibilité.' },
      { text: 'Une transmission zoonotique alimentaire, notamment à partir de produits porcins insuffisamment cuits', correct: true, correction: 'Oui boss. Le porc est un réservoir important de la transmission zoonotique présentée.' },
      { text: 'Une transmission à tous les proches est obligatoire dès qu’une personne est infectée après un repas', correct: false, correction: 'Non chef. Une infection alimentaire n’impose pas une contamination secondaire de chaque proche ; plusieurs cas après un repas peuvent partager la même source.' },
      { text: 'Une transmission sanguine, notamment post-transfusionnelle', correct: true, correction: 'Exact. Le VHE n’est pas limité à une contamination digestive.' },
      { text: 'Une transmission féco-orale par de l’eau ou des aliments contaminés', correct: true, correction: 'Exact 🧠 Cette voie peut notamment participer à des épidémies liées à l’eau.' },
    ],
    explanation: 'Le cours décrit des voies féco-orale, zoonotique alimentaire, sanguine et verticale pour le VHE. Des cas regroupés après un repas peuvent relever d’une source alimentaire commune, sans prouver une transmission de personne à personne. (Cours, p. 5–6 et 10–11)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Dans le modèle du cours, quelle association décrit les grandes épidémies de VHE liées à une eau contaminée dans des régions où l’assainissement est insuffisant ?',
    options: [
      { text: 'Une transmission verticale obligatoire pour chaque cas de l’épidémie', correct: false, correction: 'Faux. La transmission verticale est possible, mais elle n’explique pas les contaminations par l’eau décrites.' },
      { text: 'Génotypes 1 et 2, avec une transmission principalement féco-orale', correct: true, correction: 'Oui boss 🎯 Le support associe ces génotypes aux épidémies liées à l’eau ou aux aliments contaminés.' },
      { text: 'Génotypes 1 et 2, avec une transmission exclusivement transfusionnelle', correct: false, correction: 'Non chef. La voie mise en avant dans ce contexte est féco-orale ; une épidémie hydrique n’est pas expliquée par une exclusivité transfusionnelle.' },
      { text: 'Un mécanisme démontrant que toute hépatite E nécessite la consommation de viande de porc', correct: false, correction: 'Non chef. La voie zoonotique alimentaire ne résume pas toutes les situations de transmission du VHE.' },
      { text: 'Une contamination par de l’eau excluant par définition une origine fécale', correct: false, correction: 'Non. La pollution fécale de l’eau est précisément un mécanisme de transmission.' },
    ],
    explanation: 'Le cours associe les génotypes 1 et 2 à une transmission féco-orale, notamment lors d’épidémies liées à une eau contaminée. La transmission zoonotique rencontrée dans d’autres contextes doit être distinguée de ce modèle hydrique. (Cours, p. 5–6)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles manifestations sont compatibles avec une hépatite E ?',
    options: [
      { text: 'Des troubles neurologiques avec cytolyse prouvent à eux seuls une infection par le VHE', correct: false, correction: 'Non chef. Cette association doit faire envisager le VHE, mais elle n’établit pas sa présence sans investigation adaptée.' },
      { text: 'Des atteintes neurologiques, telles qu’un syndrome de Guillain-Barré ou une myélite', correct: true, correction: 'Exact. Le cours cite ces manifestations extrahépatiques.' },
      { text: 'Une forme aiguë sévère, parfois fulminante', correct: true, correction: 'Oui boss. Une évolution favorable fréquente ne supprime pas la possibilité d’une insuffisance hépatique aiguë.' },
      { text: 'Une infection asymptomatique ou une hépatite avec ictère', correct: true, correction: 'Exact 🧠 Le VHE peut produire les deux présentations ; l’absence d’ictère n’exclut pas l’infection.' },
      { text: 'Des manifestations rénales ou hématologiques, comme une glomérulonéphrite ou une thrombopénie', correct: true, correction: 'Oui. Le retentissement ne se limite pas au foie.' },
    ],
    explanation: 'Le VHE peut être asymptomatique, provoquer une hépatite ictérique ou sévère et s’accompagner d’atteintes extrahépatiques. Une cytolyse associée à des manifestations neurologiques constitue un contexte évocateur, sans certitude étiologique à lui seul. (Cours, p. 6–7)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Chez une personne greffée sous immunosuppresseurs, l’ARN du VHE reste détectable sur plusieurs prélèvements pendant plusieurs mois. Quelle interprétation est correcte ?',
    options: [
      { text: 'Une infection persistante pouvant évoluer vers une hépatite E chronique est possible sur ce terrain', correct: true, correction: 'Oui boss 🧠 L’immunodépression, notamment après une greffe, peut empêcher l’élimination du virus.' },
      { text: 'Le profil démontre une hépatite A chronique', correct: false, correction: 'Non. Le marqueur recherché est celui du VHE, et le VHA ne provoque pas d’infection chronique.' },
      { text: 'La présence persistante d’ARN prouve seulement une vaccination ancienne', correct: false, correction: 'Faux. L’ARN est un marqueur direct du virus ; ce n’est pas un anticorps de mémoire vaccinale.' },
      { text: 'Une persistance du VHE est impossible, car toutes les hépatites E sont uniquement aiguës', correct: false, correction: 'Non chef. Le tableau simplifié aiguë ne doit pas masquer la chronicité possible chez l’immunodéprimé.' },
      { text: 'La présence d’IgG suffit à annuler l’interprétation d’une PCR positive', correct: false, correction: 'Non chef. Des anticorps et une persistance virale peuvent coexister ; les IgG ne font pas disparaître un résultat direct positif.' },
    ],
    explanation: 'Une infection chronique par le VHE est possible chez certains patients immunodéprimés, en particulier les receveurs de greffe. La détection persistante de l’ARN documente la persistance virale et ne doit pas être confondue avec une simple mémoire sérologique. (Cours, p. 7–8 et 11)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles affirmations sur les examens diagnostiques du VHE sont exactes ?',
    options: [
      { text: 'En cas de suspicion persistante, une recherche dans les selles peut apporter une information malgré une PCR sanguine négative', correct: true, correction: 'Oui. Les fenêtres de détection peuvent différer selon le prélèvement et le moment de l’infection.' },
      { text: 'L’ARN peut être recherché dans le sang ou les selles', correct: true, correction: 'Exact. Les deux types de prélèvements sont présentés dans le cours.' },
      { text: 'La recherche d’ARN du VHE par PCR est une approche directe', correct: true, correction: 'Oui boss. Elle recherche un constituant du virus, pas un anticorps du patient.' },
      { text: 'Les IgM anti-VHE ont une spécificité parfaite, quel que soit le test ou le contexte', correct: false, correction: 'Non chef. Des faux positifs sont possibles ; les performances dépendent du test et de son interprétation.' },
      { text: 'La recherche d’IgM anti-VHE est une approche indirecte, utile dans le contexte d’une infection aiguë', correct: true, correction: 'Exact 🧠 Elle détecte une réponse immunitaire et s’interprète avec le contexte clinique.' },
    ],
    explanation: 'Le diagnostic indirect repose sur les anticorps et le diagnostic direct sur l’ARN viral. La nature du prélèvement, le délai et les limites des tests interviennent dans l’interprétation ; une PCR sanguine négative n’est pas une exclusion universelle. (Cours, p. 7–8 et 10–11)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Une personne a des IgG anti-VHE positives, sans autre marqueur virologique fourni. Quelle conclusion est justifiée par ce seul résultat ?',
    options: [
      { text: 'Elle présente nécessairement une hépatite E aiguë actuelle', correct: false, correction: 'Non chef. Les IgG seules ne suffisent pas à dater une infection aiguë ni à en montrer l’activité.' },
      { text: 'Elle a nécessairement une infection chronique par le VHE', correct: false, correction: 'Non. La chronicité repose sur la persistance virale, pas sur la seule présence d’IgG.' },
      { text: 'Elle ne pourra plus jamais rencontrer une infection par le VHE, quel que soit son terrain', correct: false, correction: 'Non chef. On ne déduit pas une protection absolue et universelle du seul résultat IgG positif.' },
      { text: 'Une réponse immune anti-VHE est détectée, sans preuve suffisante d’infection virale active', correct: true, correction: 'Oui boss 🎯 Les IgG peuvent notamment persister après une exposition antérieure ; il faut d’autres éléments pour conclure sur une infection actuelle.' },
      { text: 'Elle excrète obligatoirement du VHE infectieux dans ses selles', correct: false, correction: 'Faux. Un anticorps ne mesure pas directement l’excrétion du virus.' },
    ],
    explanation: 'Les IgG anti-VHE témoignent d’une réponse immune et peuvent persister. Elles ne prouvent pas à elles seules une hépatite aiguë, une infection chronique ou une excrétion virale active. Le schéma distingue anticorps, ARN et manifestations cliniques. (Cours, p. 7–8)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quels terrains ou risques particuliers sont décrits pour le VHE ?',
    options: [
      { text: 'Une hépatopathie préexistante peut aggraver le retentissement d’une hépatite E', correct: true, correction: 'Exact. Le foie déjà atteint peut être davantage fragilisé par l’infection.' },
      { text: 'L’absence d’immunodépression garantit qu’une hépatite E ne peut jamais être sévère', correct: false, correction: 'Faux. Les formes aiguës sévères et les autres terrains à risque ne sont pas limités aux immunodéprimés.' },
      { text: 'L’immunodépression peut favoriser une persistance virale', correct: true, correction: 'Oui boss. C’est le terrain important de la chronicité présenté dans le support.' },
      { text: 'Toute infection par le VHE pendant une grossesse entraîne obligatoirement une issue fatale', correct: false, correction: 'Non chef. Un risque accru n’est pas une certitude ; il dépend notamment du contexte et du virus en cause.' },
      { text: 'Certaines infections pendant la grossesse peuvent être particulièrement sévères pour la mère et le fœtus', correct: true, correction: 'Exact 🧠 Le cours décrit un risque maternel et périnatal, notamment dans les contextes d’épidémies et aux deuxième et troisième trimestres.' },
    ],
    explanation: 'Le cours attire l’attention sur la grossesse, l’immunodépression et les hépatopathies préexistantes. Ces terrains modifient les risques sans permettre une prédiction absolue pour chaque personne ; la sévérité gravidique dépend aussi du contexte viral et épidémiologique. (Cours, p. 6–7)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quelle lecture du passage sur le traitement de l’hépatite E chronique corrige la contradiction du support ?',
    options: [
      { text: 'La ribavirine peut être utilisée dans certaines infections chroniques par le VHE, et des rechutes justifient un suivi virologique', correct: true, correction: 'Oui boss 🧠 Le cours cite lui-même ce traitement et les rechutes ; la phrase aucun antiviral est donc trop absolue.' },
      { text: 'La disparition de l’ictère suffit toujours à démontrer l’élimination du VHE chronique', correct: false, correction: 'Non chef. Les symptômes ne remplacent pas la recherche d’une persistance virale par les examens adaptés.' },
      { text: 'Toute hépatite E aiguë doit recevoir automatiquement de la ribavirine', correct: false, correction: 'Non. Une utilisation possible dans certaines infections chroniques n’impose pas un traitement systématique de toute infection aiguë.' },
      { text: 'La ribavirine est un anticorps utilisé uniquement pour diagnostiquer le VHE', correct: false, correction: 'Non chef. La ribavirine est un médicament antiviral, pas un test sérologique.' },
      { text: 'Aucun médicament antiviral ne peut être utilisé dans aucune situation d’infection par le VHE', correct: false, correction: 'Faux. La ribavirine peut être utilisée dans certaines infections chroniques, sous prise en charge spécialisée.' },
    ],
    explanation: 'La ribavirine peut être employée dans certaines infections chroniques par le VHE, notamment chez des patients immunodéprimés. L’existence de rechutes justifie une surveillance virologique. (Cours, p. 7–8 ; contradiction thérapeutique corrigée)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles comparaisons entre VHA et VHE sont exactes ?',
    options: [
      { text: 'L’aspect de l’ictère suffit toujours à distinguer une hépatite A d’une hépatite E', correct: false, correction: 'Non chef. Les manifestations se recoupent et l’ictère peut manquer ; les marqueurs spécifiques sont nécessaires.' },
      { text: 'Les deux virus peuvent être transmis par une voie féco-orale', correct: true, correction: 'Exact 🧠 Cette voie existe pour les deux, même si leurs réservoirs et les contextes de transmission diffèrent.' },
      { text: 'Des IgG positives ne constituent pas, pour l’un ou l’autre, une preuve suffisante de réplication virale actuelle', correct: true, correction: 'Oui 🎯 Il faut distinguer la mémoire immune des marqueurs directs du virus.' },
      { text: 'Un vaccin contre le VHA est disponible et un vaccin contre le VHE existe également', correct: true, correction: 'Exact. La disponibilité et l’utilisation du vaccin contre le VHE ne sont pas identiques selon les pays ; existence ne signifie pas accessibilité partout.' },
      { text: 'Le VHA ne devient pas chronique, tandis que le VHE peut persister chez certains immunodéprimés', correct: true, correction: 'Oui boss. Le tableau aiguë pour les deux doit être nuancé par cette différence.' },
    ],
    explanation: 'VHA et VHE partagent une transmission féco-orale possible, mais diffèrent notamment par leurs réservoirs et la chronicité du VHE chez l’immunodéprimé. Les anticorps doivent être distingués de la persistance virale. Un vaccin contre le VHE existe, ce qui corrige toute affirmation d’inexistence absolue. (Cours, p. 2 et 5–8 ; comparaison et vaccination VHE précisées)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle description de la particule du virus de l’hépatite C est correcte ?',
    options: [
      { text: 'Un virus nu à ADN double brin', correct: false, correction: 'Non chef, le VHC possède une enveloppe et son génome est constitué d’ARN, pas d’ADN.' },
      { text: 'Un virus enveloppé dont le génome est constitué de plusieurs segments d’ADN', correct: false, correction: 'Non chef, le génome du VHC est un ARN non segmenté, pas un ensemble de segments d’ADN.' },
      { text: 'Un virus enveloppé à ARN simple brin', correct: true, correction: 'Oui boss 🧠 Le VHC possède une enveloppe lipidique et un génome constitué d’une chaîne d’ARN.' },
      { text: 'Un virus enveloppé à ADN circulaire partiellement double brin', correct: false, correction: 'Non chef, cette description génomique correspond au VHB. Le VHC possède un génome à ARN.' },
      { text: 'Un virus nu à ARN simple brin', correct: false, correction: 'Non chef, la nature ARN est correcte, mais le VHC est enveloppé.' },
    ],
    explanation: 'Le VHC est un virus enveloppé dont le génome est un ARN simple brin. (Cours, p. 15)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Concernant l’enveloppe et les lipo-viro-particules du VHC, quelles propositions sont exactes ?',
    options: [
      { text: 'Le VHC peut circuler dans le sang associé à des lipoprotéines', correct: true, correction: 'Oui boss 🎯 Cette association avec des composants lipidiques participe à la formation des lipo-viro-particules décrites dans le cours.' },
      { text: 'Le VHC est considéré comme sans risque dès que le sang contaminé a séché', correct: false, correction: 'Non chef, la présence d’une enveloppe ne garantit pas une inactivation immédiate. Le support rappelle le risque lié au matériel souillé par du sang séché.' },
      { text: 'L’association à des lipoprotéines signifie que le VHC ne possède pas d’enveloppe', correct: false, correction: 'Non chef, le VHC reste un virus enveloppé. L’association à des lipoprotéines ne remplace pas cette caractéristique structurale.' },
      { text: 'Les interactions du VHC avec le métabolisme lipidique peuvent être associées à une stéatose hépatique', correct: true, correction: 'Oui boss, le cours relie cette association lipidique à des perturbations du métabolisme et à une possible stéatose.' },
      { text: 'Des solvants ou détergents peuvent altérer son enveloppe lipidique', correct: true, correction: 'Oui boss 🧠 L’enveloppe contribue à la sensibilité du virus à certains agents qui altèrent les lipides.' },
    ],
    explanation: 'Les lipo-viro-particules associent le VHC à des composants lipidiques. L’enveloppe est sensible à certains agents, mais le matériel souillé par le sang peut conserver un risque infectieux. (Cours, p. 15)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle situation illustre le mode principal de transmission du VHC ?',
    options: [
      { text: 'Être exposé à la toux d’une personne infectée', correct: false, correction: 'Non chef, le VHC n’est pas transmis comme un virus respiratoire par la toux.' },
      { text: 'Boire de l’eau contaminée par des matières fécales', correct: false, correction: 'Non chef, la voie oro-fécale caractérise surtout les hépatites A et certaines infections à VHE, pas le mode principal du VHC.' },
      { text: 'Partager du matériel d’injection contaminé par du sang infecté', correct: true, correction: 'Oui boss 🧠 Le VHC est principalement transmis par exposition au sang infecté, notamment lors du partage de matériel d’injection.' },
      { text: 'Subir la piqûre d’un moustique ayant piqué une personne infectée', correct: false, correction: 'Non chef, le VHC n’est pas une infection transmise par les moustiques ; le risque décrit est lié à l’exposition au sang.' },
      { text: 'Partager un repas avec une personne ayant une hépatite C', correct: false, correction: 'Non chef, le partage d’un repas et les contacts sociaux ordinaires ne constituent pas la voie de transmission du VHC.' },
    ],
    explanation: 'La transmission du VHC est principalement sanguine. Le partage de matériel d’injection contaminé représente une situation à risque. (Cours, p. 14 et 17–18)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant les autres situations de transmission du VHC, quelles propositions sont exactes ?',
    options: [
      { text: 'La transmission intrafamiliale est habituellement due au partage de nourriture', correct: false, correction: 'Non chef, les contacts ordinaires ne transmettent pas le VHC. Le partage d’objets susceptibles d’être souillés par le sang représente une autre situation.' },
      { text: 'Le tatouage ou le piercing peuvent exposer au VHC si le matériel permet un contact avec du sang contaminé', correct: true, correction: 'Oui boss, le risque dépend de l’exposition au sang et de la sécurité du matériel utilisé.' },
      { text: 'Une transmission peut survenir lors d’un acte médical utilisant du matériel contaminé insuffisamment traité', correct: true, correction: 'Oui boss 🎯 Des défauts de stérilisation ou de maîtrise de l’exposition au sang peuvent permettre une transmission associée aux soins.' },
      { text: 'Une transmission de la mère à l’enfant est possible pendant la grossesse ou autour de l’accouchement', correct: true, correction: 'Oui boss 🧠 La transmission périnatale est possible ; il ne faut pas la limiter obligatoirement au seul passage dans la filière génitale.' },
      { text: 'Une transmission sexuelle est impossible dans toutes les situations', correct: false, correction: 'Non chef, elle est possible, notamment dans certains contextes d’exposition au sang. Le support est trop catégorique en l’excluant.' },
    ],
    explanation: 'Des transmissions associées aux soins, à certains contacts sexuels exposant au sang et à la période périnatale sont possibles. Les exclusions absolues de la transmission sexuelle et pendant la grossesse doivent être corrigées. (Cours, p. 17–18)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle affirmation est correcte concernant la prévention d’une nouvelle infection par le VHC ?',
    options: [
      { text: 'La vaccination contre le VHB protège également contre le VHC', correct: false, correction: 'Non chef, le vaccin anti-VHB est dirigé contre le VHB. Il ne remplace pas la prévention de l’infection par le VHC.' },
      { text: 'La prévention du VHC repose principalement sur la désinfection de l’eau potable', correct: false, correction: 'Non chef, le VHC se transmet principalement par le sang. La sécurité de l’eau concerne surtout les infections à transmission oro-fécale.' },
      { text: 'Il n’existe pas de vaccin disponible contre le VHC ; la prévention repose notamment sur la réduction des expositions au sang contaminé', correct: true, correction: 'Oui boss 🧠 La prévention repose sur la sécurité du matériel et des pratiques exposant au sang, car aucun vaccin contre le VHC n’est actuellement disponible.' },
      { text: 'Une première guérison procure toujours une protection définitive contre le VHC', correct: false, correction: 'Non chef, une personne guérie peut être réinfectée. La persistance d’anticorps ne garantit pas une immunité protectrice.' },
      { text: 'Les anticorps anti-VHC positifs suffisent à garantir l’absence de risque lors du partage de matériel d’injection', correct: false, correction: 'Non chef, les anticorps anti-VHC ne sont pas une garantie de protection. Le matériel contaminé peut entraîner une nouvelle infection.' },
    ],
    explanation: 'L’absence de vaccin disponible et d’immunité protectrice certaine après guérison donne une place importante à la réduction des expositions au sang contaminé. (Cours, p. 17–19 ; précision OMS.)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quelles mesures contribuent à prévenir la transmission sanguine du VHC ?',
    options: [
      { text: 'Utiliser du matériel d’injection stérile et éviter son partage', correct: true, correction: 'Oui boss 🎯 Cela réduit l’exposition au sang potentiellement contaminé lors des injections.' },
      { text: 'Contrôler les dons de sang pour limiter le risque transfusionnel', correct: true, correction: 'Oui boss, le dépistage des dons, notamment par recherche de l’ARN, a fortement réduit le risque lié aux transfusions.' },
      { text: 'Considérer toute aiguille souillée comme sûre après un simple séchage', correct: false, correction: 'Non chef, le séchage ne constitue pas une procédure de sécurisation du matériel souillé par le sang.' },
      { text: 'Respecter les procédures d’hygiène, de désinfection et de stérilisation adaptées aux dispositifs médicaux', correct: true, correction: 'Oui boss 🧠 Ces procédures limitent les transmissions associées aux soins, notamment lors d’actes exposant au sang.' },
      { text: 'Se fier à l’absence d’ictère pour identifier le matériel utilisé par une personne non infectée', correct: false, correction: 'Non chef, l’infection peut être silencieuse. L’absence d’ictère ne garantit ni l’absence de VHC ni la sécurité du matériel.' },
    ],
    explanation: 'La sécurité du matériel, les précautions associées aux soins et le contrôle des dons de sang constituent des moyens de prévention de la transmission sanguine. (Cours, p. 14–15 et 17–18)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quelle présentation clinique est compatible avec une infection par le VHC ?',
    options: [
      { text: 'Une infection exclue dès lors que la personne ne ressent aucune fatigue', correct: false, correction: 'Non chef, une personne infectée peut ne présenter ni fatigue ni autre symptôme spécifique.' },
      { text: 'Une infection silencieuse, sans ictère, découverte grâce au dépistage', correct: true, correction: 'Oui boss 🧠 Le VHC peut évoluer sans symptômes évocateurs. L’absence d’ictère ne permet pas de l’écarter.' },
      { text: 'Une infection qui provoque toujours immédiatement une cirrhose décompensée', correct: false, correction: 'Non chef, la cirrhose est une complication possible d’une évolution chronique, pas une manifestation immédiate obligatoire.' },
      { text: 'Une infection nécessairement ictérique dès les premiers jours', correct: false, correction: 'Non chef, l’ictère n’est pas constant et l’infection peut rester asymptomatique.' },
      { text: 'Une infection obligatoirement reconnaissable sur les seuls symptômes', correct: false, correction: 'Non chef, les signes peuvent être absents ou peu spécifiques ; le diagnostic nécessite des examens virologiques.' },
    ],
    explanation: 'L’infection par le VHC est fréquemment peu symptomatique ou silencieuse. L’absence d’ictère ne remplace pas le dépistage. (Cours, p. 19)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Concernant l’évolution spontanée d’une infection par le VHC, quelles propositions sont exactes ?',
    options: [
      { text: 'Une élimination spontanée empêche définitivement toute nouvelle infection par le VHC', correct: false, correction: 'Non chef, la guérison d’un épisode ne protège pas de manière fiable contre une réinfection lors d’une nouvelle exposition.' },
      { text: 'La majorité des infections évolue nécessairement vers une guérison spontanée', correct: false, correction: 'Non chef, l’évolution vers la chronicité est la plus fréquente dans les ordres de grandeur présentés.' },
      { text: 'L’apparition d’un ictère permet à elle seule de prédire avec certitude une guérison spontanée', correct: false, correction: 'Non chef, les facteurs associés à l’élimination ne donnent pas une prédiction individuelle certaine. La guérison s’évalue par les marqueurs virologiques.' },
      { text: 'Le cours retient environ 70 % d’évolution vers une infection chronique', correct: true, correction: 'Oui boss 🧠 C’est l’ordre de grandeur donné, complémentaire des quelque 30 % d’élimination spontanée.' },
      { text: 'Une élimination spontanée du virus est possible sans traitement', correct: true, correction: 'Oui boss 🎯 Une partie des personnes infectées élimine spontanément le VHC ; le cours retient un ordre de grandeur de 30 %.' },
    ],
    explanation: 'Le support donne les ordres de grandeur de 30 % d’élimination spontanée et de 70 % d’évolution chronique ; ils ne constituent pas des prédictions individuelles. (Cours, p. 15 et 19)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel critère définit la chronicité de l’infection par le VHC dans le cours ?',
    options: [
      { text: 'Un ictère encore visible après un mois', correct: false, correction: 'Non chef, l’ictère n’est pas constant et sa durée ne constitue pas le critère virologique de chronicité.' },
      { text: 'Une seule mesure élevée des transaminases', correct: false, correction: 'Non chef, une cytolyse isolée ne prouve ni son origine VHC ni la durée de l’infection.' },
      { text: 'La découverte d’une cirrhose, indispensable pour parler de VHC chronique', correct: false, correction: 'Non chef, une infection peut être chronique avant toute cirrhose. Celle-ci est une complication possible.' },
      { text: 'La persistance de l’ARN du VHC dans le sang au-delà de six mois', correct: true, correction: 'Oui boss 🧠 La persistance de l’ARN au-delà de six mois est le critère présenté pour distinguer l’infection chronique.' },
      { text: 'La présence d’anticorps anti-VHC pendant plus de six semaines', correct: false, correction: 'Non chef, les anticorps peuvent persister longtemps après une guérison. Ils ne suffisent pas à définir une infection chronique active.' },
    ],
    explanation: 'La chronicité se définit par la persistance virologique, et non par la seule persistance des anticorps ou des symptômes. (Cours, p. 20)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les complications hépatiques possibles d’un VHC chronique ?',
    options: [
      { text: 'Ce sont les molécules de transaminases circulantes qui provoquent elles-mêmes la cirrhose', correct: false, correction: 'Non chef, les transaminases sont des marqueurs de cytolyse. La fibrose résulte de l’atteinte et de la réponse tissulaires, pas de l’action de ces marqueurs sanguins.' },
      { text: 'Un carcinome hépatocellulaire est une complication possible à long terme', correct: true, correction: 'Oui boss 🧠 Le cancer du foie fait partie des complications possibles, notamment en présence d’une cirrhose.' },
      { text: 'Une cirrhose peut évoluer vers une décompensation hépatique', correct: true, correction: 'Oui boss, le support présente également la cirrhose décompensée parmi les conséquences possibles.' },
      { text: 'L’inflammation chronique peut contribuer à une fibrose puis à une cirrhose', correct: true, correction: 'Oui boss 🎯 La persistance de l’atteinte hépatique peut entraîner une accumulation de fibrose et une cirrhose.' },
      { text: 'Tout patient non traité développe obligatoirement un cancer après exactement trente ans', correct: false, correction: 'Non chef, le risque de complication est réel, mais ni le cancer ni son délai ne sont obligatoires. L’évolution varie selon les personnes.' },
    ],
    explanation: 'Fibrose, cirrhose, décompensation et cancer sont des complications possibles. Le parcours et les délais du schéma ne sont pas obligatoires pour chaque personne. (Cours, p. 15–16 et 20)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel marqueur virologique du VHC est habituellement détectable le plus précocement après la contamination ?',
    options: [
      { text: 'Les anticorps anti-VHC, toujours présents avant l’ARN', correct: false, correction: 'Non chef, les anticorps apparaissent plus tard et peuvent être absents pendant la fenêtre sérologique.' },
      { text: 'Les anticorps anti-HBs', correct: false, correction: 'Non chef, les anti-HBs concernent le VHB, pas le diagnostic du VHC.' },
      { text: 'L’ARN du VHC recherché par une technique d’amplification', correct: true, correction: 'Oui boss 🧠 L’ARN peut être détectable avant les anticorps. Le délai varie : il ne faut pas transformer un ordre de grandeur en date obligatoire.' },
      { text: 'La fibrose mesurée par élastométrie', correct: false, correction: 'Non chef, l’élastométrie évalue l’état du foie. Elle ne détecte pas directement le virus au début de l’infection.' },
      { text: 'L’ictère, qui constitue une preuve virologique précoce', correct: false, correction: 'Non chef, l’ictère est un signe clinique non constant et non spécifique ; ce n’est pas un marqueur virologique.' },
    ],
    explanation: 'L’ARN précède habituellement les anticorps anti-VHC. Les délais de détection sont variables et expliquent la fenêtre sérologique. (Cours, p. 19)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Concernant les anticorps anti-VHC et l’ARN viral, quelles propositions sont exactes ?',
    options: [
      { text: 'La disparition des anticorps est nécessaire pour pouvoir parler de guérison virologique', correct: false, correction: 'Non chef, la guérison s’évalue par l’ARN viral. La sérologie peut rester positive malgré l’élimination du virus.' },
      { text: 'La détection de l’ARN du VHC témoigne d’une infection actuelle', correct: true, correction: 'Oui boss 🧠 La recherche moléculaire met directement en évidence le génome viral dans le prélèvement.' },
      { text: 'La présence d’anticorps anti-VHC ne garantit pas une protection contre une réinfection', correct: true, correction: 'Oui boss, ces anticorps ne doivent pas être interprétés comme une immunisation protectrice certaine.' },
      { text: 'Une sérologie anti-VHC positive suffit toujours à prouver une infection actuellement active', correct: false, correction: 'Non chef, elle peut correspondre à une infection actuelle, à un contact ancien résolu ou à une fausse réactivité. L’ARN aide à rechercher l’infection actuelle.' },
      { text: 'Des anticorps anti-VHC peuvent persister après l’élimination du virus', correct: true, correction: 'Oui boss 🎯 La sérologie peut rester positive pendant de nombreuses années, même après une guérison.' },
    ],
    explanation: 'La sérologie indique une réactivité immunologique et ne suffit pas à établir une infection actuelle. L’ARN sert à documenter la présence du virus ; les anticorps peuvent persister après guérison. (Cours, p. 19–21)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Une personne a été exposée récemment à du sang potentiellement infecté par le VHC. Sa première sérologie anti-VHC est négative. Quelle interprétation est correcte ?',
    options: [
      { text: 'La recherche d’ARN est inutile tant que les transaminases restent normales', correct: false, correction: 'Non chef, les transaminases ne remplacent pas la recherche du virus et peuvent être normales malgré une infection.' },
      { text: 'Il faut attendre obligatoirement l’apparition d’un ictère pour rechercher l’ARN', correct: false, correction: 'Non chef, le VHC peut rester silencieux. L’exposition récente peut justifier une recherche virologique sans attendre un ictère.' },
      { text: 'Le résultat exclut définitivement une infection liée à cette exposition', correct: false, correction: 'Non chef, les anticorps peuvent ne pas être encore détectables si le prélèvement est précoce.' },
      { text: 'Une recherche d’ARN et un suivi adapté au délai d’exposition peuvent être nécessaires', correct: true, correction: 'Oui boss 🧠 Une fenêtre sérologique est possible. La recherche d’ARN peut détecter le virus plus tôt, et l’interprétation dépend du moment du prélèvement.' },
      { text: 'La sérologie négative signifie que la personne est protégée contre le VHC', correct: false, correction: 'Non chef, l’absence d’anticorps n’est pas un marqueur d’immunisation protectrice.' },
    ],
    explanation: 'Une sérologie négative après une exposition récente peut correspondre à une fenêtre sérologique. La recherche d’ARN et le suivi s’interprètent selon le contexte et le délai. (Cours, p. 18–19)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Une sérologie anti-VHC est réactive, mais l’ARN du VHC n’est pas détecté dans le prélèvement. Quelles propositions sont exactes ?',
    options: [
      { text: 'Une fausse réactivité du test d’anticorps est également une explication possible', correct: true, correction: 'Oui boss, ce profil ne démontre pas à lui seul qu’une infection passée a nécessairement eu lieu.' },
      { text: 'Une infection ancienne résolue peut expliquer ce profil', correct: true, correction: 'Oui boss 🧠 Les anticorps peuvent persister après une élimination spontanée ou après un traitement efficace.' },
      { text: 'La recherche d’ARN peut être répétée si le contexte fait suspecter une exposition récente', correct: true, correction: 'Oui boss, un résultat isolé ne dispense pas de tenir compte du délai, des expositions et d’éventuelles limites du prélèvement.' },
      { text: 'Il n’y a pas de virémie détectée sur ce prélèvement', correct: true, correction: 'Oui boss 🎯 C’est ce qu’indique directement la recherche d’ARN négative. L’interprétation globale dépend ensuite du contexte.' },
      { text: 'Ce résultat prouve une guérison ancienne et interdit tout contrôle, même en cas d’exposition récente', correct: false, correction: 'Non chef, une guérison n’est pas la seule explication possible. Une exposition récente ou une suspicion clinique peut justifier une nouvelle recherche d’ARN.' },
    ],
    explanation: 'Un profil anti-VHC réactif avec ARN non détecté correspond le plus souvent à l’absence d’infection actuelle, mais ne prouve pas systématiquement une guérison passée. Une infection résolue, une fausse réactivité et le contexte d’exposition doivent être considérés. (Cours, p. 19–21 ; précision CDC.)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Un TROD anti-VHC est positif. Quelle démarche permet de rechercher une infection actuellement active ?',
    options: [
      { text: 'Conclure à une hépatite C active sur le seul TROD', correct: false, correction: 'Non chef, ce TROD recherche des anticorps. Leur présence ne suffit pas à démontrer une infection actuelle.' },
      { text: 'Compléter le dépistage par une démarche de laboratoire comprenant la recherche d’ARN du VHC', correct: true, correction: 'Oui boss 🧠 Le résultat doit conduire à une confirmation adaptée et à une recherche d’ARN pour documenter une infection actuelle.' },
      { text: 'Réaliser seulement une élastométrie, qui détecte directement l’ARN du VHC', correct: false, correction: 'Non chef, l’élastométrie renseigne sur l’état du foie, pas sur la présence directe du génome viral.' },
      { text: 'Mesurer uniquement la bilirubine sans rechercher le virus', correct: false, correction: 'Non chef, la bilirubine ne permet pas de distinguer un contact ancien d’une infection actuelle par le VHC.' },
      { text: 'Évaluer le taux d’anticorps pour en déduire directement la charge virale', correct: false, correction: 'Non chef, le taux d’anticorps n’est pas une mesure de la quantité d’ARN viral.' },
    ],
    explanation: 'Les TROD anti-VHC élargissent l’accès au dépistage. Après un résultat positif, la recherche d’ARN permet de rechercher une infection actuelle ; elle n’est pas réservée aux seules expositions récentes. (Cours, p. 19–20 et 31)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Concernant l’évaluation du foie lors d’une infection par le VHC, quelles propositions sont exactes ?',
    options: [
      { text: 'Des transaminases normales excluent une infection chronique par le VHC', correct: false, correction: 'Non chef, elles peuvent être normales ou fluctuantes malgré une infection. Elles ne suffisent pas à écarter le VHC.' },
      { text: 'Un FibroScan mesure directement le nombre de copies d’ARN du VHC', correct: false, correction: 'Non chef, il mesure notamment la rigidité du foie. La charge virale est évaluée par une méthode virologique quantitative.' },
      { text: 'Les transaminases sont des marqueurs de cytolyse, distincts de la recherche d’ARN viral', correct: true, correction: 'Oui boss 🎯 Elles renseignent sur une atteinte cellulaire hépatique, tandis que la recherche d’ARN documente la présence du virus.' },
      { text: 'L’élastométrie et certains marqueurs sanguins contribuent à l’évaluation non invasive de la fibrose', correct: true, correction: 'Oui boss 🧠 Le cours décrit ces méthodes comme alternatives ou compléments à la biopsie pour évaluer l’état du foie.' },
      { text: 'Le titre des anticorps anti-VHC mesure directement le degré de fibrose', correct: false, correction: 'Non chef, la sérologie ne constitue pas une mesure de la fibrose hépatique.' },
    ],
    explanation: 'L’évaluation de l’atteinte hépatique et le diagnostic virologique sont complémentaires. Des transaminases normales ne suffisent pas à exclure l’infection, et l’élastométrie n’est pas une mesure de charge virale. (Cours, p. 19–20)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quel résultat correspond au critère usuel de réponse virologique soutenue à douze semaines après un traitement du VHC ?',
    options: [
      { text: 'Une seule PCR négative le premier jour du traitement', correct: false, correction: 'Non chef, le critère porte sur la réponse maintenue après la fin du traitement, pas sur un résultat isolé au début.' },
      { text: 'Un ARN indétectable douze semaines après le début du traitement, quelle que soit sa date d’arrêt', correct: false, correction: 'Non chef, le repère est douze semaines après la fin du traitement, et non après son début.' },
      { text: 'La disparition de tous les anticorps anti-VHC pendant le traitement', correct: false, correction: 'Non chef, les anticorps peuvent persister après guérison. Ils ne constituent pas le critère de RVS12.' },
      { text: 'Une baisse des transaminases sans vérification de l’ARN', correct: false, correction: 'Non chef, l’amélioration biochimique ne remplace pas la vérification de la réponse virologique.' },
      { text: 'Un ARN du VHC restant indétectable douze semaines après la fin du traitement', correct: true, correction: 'Oui boss 🧠 La RVS12 s’évalue après l’arrêt du traitement. Ce résultat correspond à une guérison virologique.' },
    ],
    explanation: 'La réponse virologique soutenue à douze semaines est documentée par l’absence d’ARN détectable douze semaines après l’arrêt du traitement. (Cours, p. 20–21)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Après une guérison virologique du VHC, quelles propositions sont exactes ?',
    options: [
      { text: 'La positivité des anticorps suffit à diagnostiquer une réinfection', correct: false, correction: 'Non chef, les anticorps pouvant rester positifs, la recherche d’ARN est nécessaire pour documenter une nouvelle infection actuelle.' },
      { text: 'La guérison garantit l’effacement immédiat de toute cirrhose préexistante', correct: false, correction: 'Non chef, éliminer le virus ne fait pas disparaître immédiatement toutes les lésions déjà constituées ; l’état hépatique reste à prendre en compte.' },
      { text: 'Chez une personne déjà séropositive, l’ARN est le marqueur pertinent pour rechercher une récidive ou une réinfection', correct: true, correction: 'Oui boss, une nouvelle sérologie positive ne distingue pas l’ancien épisode du nouveau. L’ARN documente la présence actuelle du virus.' },
      { text: 'Une nouvelle exposition peut entraîner une réinfection', correct: true, correction: 'Oui boss 🧠 La guérison ne constitue pas une immunisation fiable contre un nouvel épisode.' },
      { text: 'Les anticorps anti-VHC peuvent rester positifs', correct: true, correction: 'Oui boss 🎯 Une sérologie persistante ne prouve pas l’échec du traitement ; il faut distinguer anticorps et ARN viral.' },
    ],
    explanation: 'La guérison virologique peut laisser une sérologie positive et des lésions hépatiques préexistantes. Elle n’empêche pas une réinfection ; la recherche d’ARN est utilisée pour documenter une reprise de l’infection. (Cours, p. 19–21 ; précision AASLD-IDSA.)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel est le principe des antiviraux à action directe utilisés contre le VHC ?',
    options: [
      { text: 'Inhiber des protéines virales nécessaires au cycle du VHC et obtenir une guérison virologique', correct: true, correction: 'Oui boss 🧠 Ces antiviraux ciblent directement des fonctions nécessaires au cycle du virus. L’objectif est d’obtenir une élimination durable de l’ARN viral.' },
      { text: 'Éliminer les anticorps anti-VHC pour empêcher toute réplication', correct: false, correction: 'Non chef, les anticorps ne sont pas le réservoir du génome viral. La cible du traitement est le cycle du virus.' },
      { text: 'Abaisser uniquement les transaminases sans agir sur le cycle viral', correct: false, correction: 'Non chef, l’objectif est d’inhiber le virus et d’obtenir une élimination de l’ARN, pas seulement de modifier un marqueur biochimique.' },
      { text: 'Remplacer le traitement antiviral par une vaccination curative contre le VHC', correct: false, correction: 'Non chef, ces traitements sont des antiviraux. Il n’existe actuellement pas de vaccin disponible contre le VHC.' },
      { text: 'Administrer des antibiotiques qui ciblent la paroi du VHC', correct: false, correction: 'Non chef, le VHC est un virus, sans paroi bactérienne. Les molécules décrites sont des antiviraux.' },
    ],
    explanation: 'Les combinaisons d’antiviraux à action directe agissent sur le cycle du VHC et visent une guérison virologique. (Cours, p. 20–21)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'À propos de la diversité du VHC et des traitements antiviraux, quelles propositions sont exactes ?',
    options: [
      { text: 'Une combinaison dite pangénotypique peut agir contre les différents génotypes du VHC', correct: true, correction: 'Oui boss 🧠 C’est le sens du terme pangénotypique. Le choix et l’efficacité d’un traitement restent à interpréter selon le contexte.' },
      { text: 'La disponibilité de traitements efficaces rend inutile la prévention d’une nouvelle exposition', correct: false, correction: 'Non chef, la réinfection reste possible. Le traitement et la prévention des expositions sont complémentaires.' },
      { text: 'Une barrière génétique élevée signifie qu’un antiviral empêche directement toute mutation du génome', correct: false, correction: 'Non chef, ce terme concerne l’émergence de la résistance. Il ne signifie pas que le traitement bloque tous les événements de mutation.' },
      { text: 'Un huitième génotype du VHC a été décrit ; limiter le compte aux génotypes 1 à 7 est une donnée ancienne', correct: true, correction: 'Oui boss 🎯 La description du génotype 8 a élargi la classification. Le chiffre donné dans le support nécessite cette actualisation.' },
      { text: 'Une barrière génétique élevée rend plus difficile l’acquisition d’une résistance virale', correct: true, correction: 'Oui boss, elle décrit la difficulté pour le virus d’acquérir les changements lui permettant de résister, et non un effet du médicament supprimant les mutations.' },
    ],
    explanation: 'La classification a été élargie à huit génotypes. Des combinaisons pangénotypiques sont disponibles ; une barrière génétique élevée concerne la difficulté d’émergence de la résistance. (Cours, p. 19–21 ; actualisation du compte des génotypes.)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle description de la particule infectieuse du virus de l’hépatite B est correcte ?',
    options: [
      { text: 'Un virus enveloppé contenant uniquement un ARN génomique', correct: false, correction: 'Faux. L’enveloppe est correcte, mais le génome de la particule infectieuse est un ADN.' },
      { text: 'Un virus enveloppé contenant un ADN circulaire partiellement bicaténaire', correct: true, correction: 'Oui boss 🧠 Le génome est un ADN, et il n’est pas entièrement double brin dans la particule virale.' },
      { text: 'Un virus à ADN linéaire entièrement bicaténaire sans enveloppe', correct: false, correction: 'Non chef. Le support décrit un ADN circulaire partiellement double brin, dans un virus enveloppé.' },
      { text: 'Un virus non enveloppé contenant un ARN simple brin', correct: false, correction: 'Non chef. Le VHB possède une enveloppe et un génome à ADN.' },
      { text: 'Un virus à ADN circulaire dépourvu de protéines d’enveloppe HBs', correct: false, correction: 'Non. Les protéines HBs font justement partie de l’enveloppe du VHB.' },
    ],
    explanation: 'La particule infectieuse du VHB associe une enveloppe portant des protéines HBs et un génome à ADN circulaire partiellement bicaténaire. (Cours, p. 21–22)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Concernant la persistance hépatique du VHB après une infection naturelle, quelles propositions sont exactes ?',
    options: [
      { text: 'La disparition de l’Ag HBs garantit l’élimination de tout ADN du VHB dans chaque hépatocyte', correct: false, correction: 'Non chef. Des formes persistantes, notamment l’ADN circulaire fermé appelé cccDNA, peuvent subsister.' },
      { text: 'La présence ancienne de VHB impose une réactivation chez toute personne recevant une chimiothérapie', correct: false, correction: 'Faux. Le risque dépend de la situation virologique et du traitement immunosuppresseur ; une réactivation n’est pas automatique.' },
      { text: 'Une infection ancienne doit être prise en compte dans l’évaluation du risque avant un traitement immunosuppresseur', correct: true, correction: 'Oui. La prise en charge dépend du contexte ; il faut évaluer le risque plutôt que considérer le passé infectieux comme sans conséquence.' },
      { text: 'Du matériel viral peut persister dans le foie après une évolution clinique favorable', correct: true, correction: 'Oui boss. Une infection résolue sur le plan sérologique ne signifie pas une disparition certaine de toute forme d’ADN viral.' },
      { text: 'Une immunosuppression, notamment certaines chimiothérapies, peut favoriser une réactivation', correct: true, correction: 'Exact 🧠 Le cours utilise cette situation pour montrer l’importance clinique de la persistance.' },
    ],
    explanation: 'Le cours décrit une persistance hépatique de l’ADN viral et un risque de réactivation sous immunosuppression. La précision cccDNA explique pourquoi une résolution sérologique n’équivaut pas nécessairement à une éradication. (Cours, p. 21, 28)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle interprétation des billes et des bâtonnets riches en Ag HBs observés dans le sang est correcte ?',
    options: [
      { text: 'Leur présence démontre qu’il n’existe aucune particule infectieuse dans le même prélèvement', correct: false, correction: 'Non chef. Particules sous-virales et virions complets peuvent coexister ; leur abondance ne prouve pas l’absence de virus infectieux.' },
      { text: 'Ce sont des capsides contenant uniquement l’antigène HBc, sans protéines HBs', correct: false, correction: 'Non. Les structures décrites sont riches en protéines d’enveloppe HBs.' },
      { text: 'Ce sont tous des virions complets contenant un génome infectieux', correct: false, correction: 'Non chef. Le VHB produit aussi des particules sous-virales dépourvues de génome infectieux.' },
      { text: 'Ce sont des particules d’enveloppe non infectieuses, distinctes des particules virales complètes', correct: true, correction: 'Oui boss 🎯 Le cours insiste sur la grande quantité de particules contenant HBs produites en excès.' },
      { text: 'Ce sont des anticorps anti-HBs sécrétés par le virus', correct: false, correction: 'Faux. HBs est un antigène viral ; les anticorps sont produits par l’organisme infecté ou vacciné.' },
    ],
    explanation: 'Le VHB produit un excès de particules sous-virales sphériques ou filamenteuses portant HBs. Elles doivent être distinguées des particules complètes contenant le génome viral. (Cours, p. 22)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles propositions concernant la transmission du VHB sont exactes ?',
    options: [
      { text: 'Dans les situations présentées, les personnes infectées constituent la source de transmission à d’autres personnes', correct: true, correction: 'Oui. Les porteurs peuvent transmettre le virus ; le cours décrit une transmission interhumaine.' },
      { text: 'Une transmission mère-enfant peut survenir, notamment au moment de l’accouchement', correct: true, correction: 'Exact. La prévention périnatale répond à ce risque.' },
      { text: 'Un contact avec du sang infecté, notamment via du matériel d’injection partagé, peut transmettre le VHB', correct: true, correction: 'Exact 🧠 La prévention des expositions sanguines est essentielle.' },
      { text: 'Le principal mode décrit est l’ingestion d’aliments contaminés par des selles', correct: false, correction: 'Non chef. Tu transposes la voie oro-fécale d’autres hépatites au VHB ; ici les voies importantes sont sanguine, sexuelle et périnatale.' },
      { text: 'Le VHB peut être transmis lors de rapports sexuels', correct: true, correction: 'Oui boss. La transmission sexuelle est l’un des modes importants décrits.' },
    ],
    explanation: 'Le VHB se transmet notamment par le sang, les contacts sexuels et de la mère à l’enfant. Le cours ne permet pas d’attribuer un pourcentage unique de transmission à toute exposition. (Cours, p. 23–24, 30, 32)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Comment varie le risque de chronicisation du VHB selon l’âge au moment de l’infection ?',
    options: [
      { text: 'Il est maximal chez l’adulte et presque nul chez le nouveau-né', correct: false, correction: 'Non chef. C’est l’inverse : les infections très précoces ont un risque de chronicisation beaucoup plus important.' },
      { text: 'Il est identique à tous les âges dès lors que le virus possède une enveloppe', correct: false, correction: 'Faux. La présence d’une enveloppe ne rend pas l’évolution clinique indépendante de l’âge.' },
      { text: 'Une contamination à la naissance aboutit obligatoirement à une cirrhose avant 25 ans', correct: false, correction: 'Non. Le cours décrit un risque de complications précoces, pas une échéance obligatoire pour chaque patient.' },
      { text: 'L’absence de symptômes à la naissance empêche toute chronicisation', correct: false, correction: 'Non chef. Une infection peut rester peu symptomatique et néanmoins persister.' },
      { text: 'Il est nettement plus élevé après une contamination périnatale que lors d’une primo-infection à l’âge adulte', correct: true, correction: 'Oui boss 🧠 Le cours donne environ 90 % chez le nouveau-né infecté, ce qui explique l’importance de la prévention précoce.' },
    ],
    explanation: 'Le risque de chronicisation est très élevé lors d’une infection périnatale et beaucoup plus faible après une infection acquise à l’âge adulte. Les pourcentages du support sont des repères liés à l’âge, pas une probabilité uniforme pour toutes les infections. (Cours, p. 24–25, 32)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles propositions concernant l’évolution clinique de l’infection par le VHB sont exactes ?',
    options: [
      { text: 'Une infection chronique peut entraîner des complications hépatiques à long terme', correct: true, correction: 'Oui boss. Le cours cite notamment cirrhose et hépatocarcinome.' },
      { text: 'L’infection initiale peut être asymptomatique et l’ictère n’est pas systématique', correct: true, correction: 'Exact 🎯 Une absence d’ictère ne suffit pas à exclure une infection.' },
      { text: 'Une seule détection d’Ag HBs prouve que l’infection dure depuis plus de six mois', correct: false, correction: 'Non chef. Un résultat ponctuel ne renseigne pas à lui seul sur cette durée.' },
      { text: 'Toutes les infections chroniques évoluent obligatoirement vers un cancer du foie', correct: false, correction: 'Faux. Le risque est augmenté, mais l’évolution n’est pas identique chez tous les patients.' },
      { text: 'La persistance de l’Ag HBs pendant au moins six mois est un critère classique de chronicité', correct: true, correction: 'Exact 🧠 La durée est un élément important pour distinguer une infection chronique.' },
    ],
    explanation: 'Le VHB peut donner une infection silencieuse, puis éventuellement une infection chronique et des complications. La chronicité repose notamment sur la persistance de l’Ag HBs au cours du temps. (Cours, p. 24–26, 30, 32)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle affirmation concernant le risque d’hépatocarcinome au cours d’une infection chronique par le VHB est correcte ?',
    options: [
      { text: 'Le VHB n’a pas de potentiel oncogène propre et son ADN ne peut jamais s’intégrer au génome cellulaire', correct: false, correction: 'Faux. Le support décrit un potentiel oncogène et une intégration possible de l’ADN viral.' },
      { text: 'Le cancer ne peut apparaître qu’après une cirrhose histologiquement prouvée', correct: false, correction: 'Non chef. Le VHB peut être associé à un cancer sans passage obligatoire par une cirrhose.' },
      { text: 'La suppression de la réplication sous traitement garantit immédiatement un risque de cancer nul', correct: false, correction: 'Non chef. Les traitements réduisent le risque, mais ne garantissent pas sa disparition complète.' },
      { text: 'Un hépatocarcinome peut survenir sans cirrhose préalable', correct: true, correction: 'Oui boss 🧠 C’est un point important du cours : l’absence de cirrhose n’annule pas à elle seule le risque de cancer lié au VHB.' },
      { text: 'Le cancer apparaît nécessairement dès la première année après toute infection', correct: false, correction: 'Non. Les complications dépendent de l’histoire de l’infection ; il n’existe pas une échéance aussi systématique.' },
    ],
    explanation: 'Le VHB est oncogène et l’hépatocarcinome peut survenir sans cirrhose. La prévention et le contrôle virologique réduisent le risque, sans permettre d’affirmer qu’il devient nul dans toutes les situations. (Cours, p. 22, 25, 27, 32)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles associations entre marqueur biologique et signification sont exactes ?',
    options: [
      { text: 'Les anticorps anti-HBs et anti-HBc sont produits par le virus lui-même', correct: false, correction: 'Non chef. Les antigènes appartiennent au virus ; les anticorps sont produits par les cellules de la réponse immunitaire de l’hôte.' },
      { text: 'Les anti-HBc totaux regroupent notamment les anticorps de classes IgM et IgG dirigés contre HBc', correct: true, correction: 'Exact 🧠 Les IgM sont une partie des anti-HBc totaux, pas un marqueur sans rapport avec eux.' },
      { text: 'L’ADN du VHB mesuré par PCR est un anticorps dirigé contre la capside', correct: false, correction: 'Faux. La PCR recherche le génome viral ; les anti-HBc sont des anticorps recherchés par une méthode sérologique.' },
      { text: 'L’Ag HBs est une protéine de surface du VHB et peut être détecté pendant une infection aiguë ou chronique', correct: true, correction: 'Oui boss. Il n’est pas réservé à la seule phase aiguë.' },
      { text: 'Les anti-HBc totaux témoignent habituellement d’une infection naturelle passée ou présente', correct: true, correction: 'Exact. La vaccination HBs seule ne les induit pas ; leur positivité ne date toutefois pas à elle seule l’infection.' },
    ],
    explanation: 'Il faut distinguer antigènes viraux, anticorps produits par l’hôte et ADN viral. HBs est un antigène de surface ; les anti-HBc constituent un marqueur d’infection naturelle et les anti-HBc totaux incluent plusieurs classes d’anticorps. (Cours, p. 25–28)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Dans un contexte de symptômes récents et d’exposition récente, quel profil est classiquement compatible avec une hépatite B aiguë ?',
    options: [
      { text: 'Ag HBs persistant depuis plusieurs années, anti-HBc totaux positifs et IgM négatives', correct: false, correction: 'Non. La durée documentée oriente vers une infection chronique, pas une primo-infection aiguë récente.' },
      { text: 'Anti-HBs seuls positifs, sans Ag HBs ni anti-HBc, prouvant une réplication virale aiguë', correct: false, correction: 'Non chef. Les anti-HBs seuls ne prouvent pas une réplication ; il faut les replacer notamment dans le contexte vaccinal.' },
      { text: 'Ag HBs négatif, anti-HBc totaux négatifs et anti-HBs positifs après vaccination documentée', correct: false, correction: 'Non chef. Ce profil évoque plutôt une réponse vaccinale.' },
      { text: 'Ag HBs négatif, anti-HBc totaux positifs et anti-HBs positifs chez un sujet ayant une infection ancienne résolue', correct: false, correction: 'Faux. C’est le profil classique d’une infection naturelle résolue.' },
      { text: 'Ag HBs positif, anti-HBc totaux positifs, IgM anti-HBc positives, anti-HBs négatifs', correct: true, correction: 'Oui boss 🎯 C’est le profil classique dans ce contexte. Une poussée d’infection chronique peut aussi comporter des IgM, d’où l’importance de l’histoire clinique.' },
    ],
    explanation: 'Le profil Ag HBs+, anti-HBc totaux+, IgM anti-HBc+, anti-HBs− évoque classiquement une infection aiguë. Les IgM peuvent aussi être retrouvées lors d’une poussée chronique : l’interprétation nécessite le contexte et les résultats antérieurs. (Cours, p. 25–26 ; limite d’interprétation précisée)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles précautions sont nécessaires pour interpréter les IgM anti-HBc ?',
    options: [
      { text: 'Leur positivité soutient une infection récente dans un contexte de primo-infection', correct: true, correction: 'Exact 🧠 C’est leur utilisation classique, à confronter à l’histoire clinique.' },
      { text: 'Une IgM négative, isolément, ne permet pas de démontrer que l’Ag HBs persiste depuis au moins six mois', correct: true, correction: 'Exact. Un marqueur négatif ne remplace pas la documentation de la durée du portage.' },
      { text: 'Une IgM positive exclut toujours une infection chronique antérieure', correct: false, correction: 'Non chef. Les poussées chroniques sont justement une exception importante.' },
      { text: 'Elles peuvent également être positives lors de certaines exacerbations ou réactivations d’infections chroniques', correct: true, correction: 'Oui boss. Une IgM positive n’est donc pas une preuve absolue de première infection.' },
      { text: 'Le dosage des IgM anti-HBc mesure directement la quantité d’ADN viral circulant', correct: false, correction: 'Faux. Les IgM sont des anticorps ; la charge virale est mesurée par PCR quantitative de l’ADN du VHB.' },
    ],
    explanation: 'Le résumé du support « IgM positive = aiguë ; IgM négative = chronique » est trop absolu. Les IgM sont un argument à intégrer à la durée de l’infection et au contexte, notamment aux poussées chroniques. (Cours, p. 26 ; interprétation rectifiée)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Un patient conserve un Ag HBs positif sur des prélèvements espacés de sept mois ; ses anti-HBc totaux sont positifs, ses IgM anti-HBc et ses anti-HBs sont négatifs. Quelle interprétation est la plus adaptée ?',
    options: [
      { text: 'Une maladie dont la gravité hépatique est entièrement déterminée par ce seul profil sérologique', correct: false, correction: 'Non chef. La chronicité est établie, mais l’activité virologique et l’état du foie nécessitent une évaluation complémentaire.' },
      { text: 'Une réponse vaccinale habituelle', correct: false, correction: 'Non chef. Une vaccination seule n’explique pas la persistance de l’Ag HBs et des anti-HBc totaux.' },
      { text: 'Une infection résolue avec absence de tout antigène viral', correct: false, correction: 'Faux. L’Ag HBs reste détectable ; ce n’est pas le profil classique de résolution.' },
      { text: 'Une absence d’infection parce que les IgM sont négatives', correct: false, correction: 'Non. L’absence d’IgM n’annule pas l’Ag HBs persistant.' },
      { text: 'Une infection chronique par le VHB', correct: true, correction: 'Oui boss 🧠 La persistance documentée de l’Ag HBs au-delà de six mois établit la chronicité dans ce profil.' },
    ],
    explanation: 'La persistance de l’Ag HBs pendant au moins six mois constitue le critère temporel de chronicité. Ce profil ne suffit pas à déterminer l’activité de l’infection ni la gravité des lésions hépatiques. (Cours, p. 26–27)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Chez un patient avec Ag HBs négatif, anti-HBc totaux positifs et anti-HBs positifs, quelles propositions sont exactes dans l’interprétation habituelle du profil ?',
    options: [
      { text: 'Les anti-HBc permettent de distinguer ce profil d’une vaccination seule', correct: true, correction: 'Exact. Le vaccin HBs n’induit pas les anti-HBc.' },
      { text: 'Le passé infectieux reste pertinent si un traitement immunosuppresseur est envisagé', correct: true, correction: 'Exact 🧠 Une réactivation reste possible dans certaines situations malgré la résolution sérologique.' },
      { text: 'Les anti-HBc positifs sont une conséquence normale de la vaccination recombinante HBs seule', correct: false, correction: 'Faux. Ils reflètent habituellement une infection naturelle, pas la vaccination HBs seule.' },
      { text: 'Le profil prouve l’éradication de toute forme d’ADN du VHB dans le foie', correct: false, correction: 'Non chef. Des formes persistantes peuvent subsister ; la sérologie ne démontre pas une éradication complète.' },
      { text: 'Le profil est compatible avec une infection naturelle ancienne résolue', correct: true, correction: 'Oui boss 🎯 C’est le profil classique du tableau récapitulatif.' },
    ],
    explanation: 'Le tableau associe Ag HBs−, anti-HBc+ et anti-HBs+ à une infection ancienne résolue. Cette résolution ne doit pas être confondue avec une élimination certaine du réservoir viral hépatique. (Cours, p. 21, 26, 28–29)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Chez une personne ayant terminé une vaccination VHB documentée, sans immunoglobulines récemment administrées, quel profil correspond classiquement à une réponse vaccinale ?',
    options: [
      { text: 'Ag HBs négatif, anti-HBc totaux positifs et anti-HBs positifs', correct: false, correction: 'Faux. Ce profil évoque classiquement une infection naturelle ancienne résolue.' },
      { text: 'Anti-HBc IgM seuls positifs comme anticorps produits par le vaccin HBs', correct: false, correction: 'Non. La vaccination HBs ne produit pas d’anti-HBc.' },
      { text: 'ADN du VHB détectable comme preuve attendue de la réplication du vaccin', correct: false, correction: 'Non chef. Le vaccin recombinant n’est pas un virus vivant capable de se répliquer.' },
      { text: 'Ag HBs positif depuis plusieurs mois et anti-HBc totaux positifs', correct: false, correction: 'Non chef. Ce profil fait rechercher une infection et n’est pas expliqué par une simple réponse vaccinale.' },
      { text: 'Ag HBs négatif, anti-HBc totaux négatifs et anti-HBs positifs', correct: true, correction: 'Oui boss 🧠 C’est le profil vaccinal classique : anticorps contre HBs, sans marqueur de contact avec la capside.' },
    ],
    explanation: 'La vaccination HBs induit des anti-HBs et non des anti-HBc. Dans le contexte précisé, le profil Ag HBs−, anti-HBc−, anti-HBs+ correspond classiquement à une réponse vaccinale. (Cours, p. 22, 28–29)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles propositions concernant le vaccin VHB et la réponse vaccinale sont exactes ?',
    options: [
      { text: 'Le vaccin décrit est recombinant et repose sur l’antigène de surface HBs', correct: true, correction: 'Oui boss 🎯 Il présente l’antigène au système immunitaire sans inoculer un VHB complet infectieux.' },
      { text: 'Des anti-HBs devenus indétectables prouvent toujours la disparition de toute mémoire chez un ancien répondeur', correct: false, correction: 'Faux. Les titres peuvent diminuer avec le temps tandis qu’une mémoire immunitaire persiste ; il faut distinguer ce cas d’une absence de réponse initiale.' },
      { text: 'La vaccination seule n’induit pas les anti-HBc', correct: true, correction: 'Oui. Le vaccin de surface ne contient pas la capside permettant cette réponse anti-HBc.' },
      { text: 'La réponse attendue comprend des anticorps anti-HBs', correct: true, correction: 'Exact. C’est le marqueur utilisé pour documenter une réponse lorsqu’un contrôle est indiqué.' },
      { text: 'La réalisation d’une vaccination garantit une réponse identique et protectrice chez tous les sujets', correct: false, correction: 'Non chef. Le support rappelle l’existence de personnes qui ne répondent pas suffisamment au vaccin.' },
    ],
    explanation: 'La vaccination recombinante HBs vise une réponse anti-HBs. Une vaccination administrée et une réponse documentée sont deux informations distinctes ; la diminution ultérieure des anticorps ne démontre pas à elle seule la perte de toute mémoire. (Cours, p. 22, 24, 26, 28–29 ; réponse précisée)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Un bilan retrouve des anti-HBc totaux positifs, mais un Ag HBs et des anti-HBs négatifs. Quelle conclusion est la plus rigoureuse ?',
    options: [
      { text: 'Les anti-HBc isolés mesurent directement une charge virale élevée', correct: false, correction: 'Non chef. Un anticorps ne quantifie pas l’ADN viral.' },
      { text: 'L’Ag HBs négatif exclut toute possibilité de persistance virale', correct: false, correction: 'Non. Une infection occulte ou d’autres situations peuvent présenter un Ag HBs négatif ; l’ADN peut aider selon le contexte.' },
      { text: 'Il s’agit d’anti-HBc isolés, dont l’interprétation nécessite le contexte et parfois des examens complémentaires', correct: true, correction: 'Oui boss 🧠 Cela peut notamment correspondre à une infection ancienne avec anti-HBs diminués, une fenêtre, une infection occulte ou un faux positif.' },
      { text: 'Ce profil prouve une vaccination réussie', correct: false, correction: 'Non chef. La vaccination HBs seule n’induit pas les anti-HBc.' },
      { text: 'Ce profil prouve une hépatite B aiguë dans tous les cas', correct: false, correction: 'Faux. Des anti-HBc isolés ont plusieurs interprétations possibles ; il faut notamment préciser les IgM et le contexte.' },
    ],
    explanation: 'Le profil anti-HBc isolés n’a pas une signification unique. La distinction entre infection ancienne, fenêtre de résolution, infection occulte et faux positif dépend notamment de l’histoire, des IgM et de l’ADN viral si indiqué. (Cours, p. 25–29 ; limites des profils simplifiés précisées)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Concernant la fenêtre sérologique de résolution d’une hépatite B aiguë, quelles propositions sont exactes ?',
    options: [
      { text: 'L’Ag HBs peut avoir disparu alors que les anti-HBs ne sont pas encore détectables', correct: true, correction: 'Exact 🧠 Les deux marqueurs ne se relaient pas nécessairement sans intervalle détectable.' },
      { text: 'Cette fenêtre est le profil habituel d’un vaccin induisant des anti-HBc', correct: false, correction: 'Non chef. Le vaccin HBs ne produit pas d’anti-HBc ; ici il s’agit d’une évolution d’infection naturelle.' },
      { text: 'Un résultat Ag HBs négatif et anti-HBs négatif ne suffit donc pas à exclure toute infection récente', correct: true, correction: 'Exact. Les autres marqueurs et le contexte doivent être intégrés.' },
      { text: 'Des IgM anti-HBc peuvent rester détectables pendant cet intervalle', correct: true, correction: 'Oui boss. Elles peuvent fournir un argument en faveur d’une infection aiguë en cours de résolution.' },
      { text: 'L’existence de cette fenêtre signifie que tous les anti-HBc isolés correspondent obligatoirement à une infection aiguë', correct: false, correction: 'Faux. C’est une possibilité parmi plusieurs, pas la seule interprétation des anti-HBc isolés.' },
    ],
    explanation: 'La résolution peut comporter un intervalle entre la disparition de l’Ag HBs et la détection des anti-HBs. Le schéma simplifié de relais antigène–anticorps doit être interprété avec les anti-HBc, notamment les IgM, et le contexte. (Cours, p. 25–26, 29 ; fenêtre précisée)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Un premier prélèvement présente un Ag HBs positif et des anti-HBc totaux négatifs. Quelle attitude d’interprétation est correcte ?',
    options: [
      { text: 'Affirmer qu’aucune infection naturelle n’est possible puisque les anti-HBc sont négatifs', correct: false, correction: 'Non. L’Ag HBs peut précéder l’apparition des anti-HBc en début d’infection.' },
      { text: 'Diagnostiquer une réponse vaccinale protectrice complète sur la seule positivité de l’Ag HBs', correct: false, correction: 'Non chef. L’Ag HBs n’est pas l’anticorps protecteur anti-HBs ; une positivité transitoire postvaccinale n’est pas une preuve de réponse complète.' },
      { text: 'Conclure obligatoirement à une erreur de laboratoire et ignorer le résultat', correct: false, correction: 'Non chef. Le profil mérite une vérification, mais il peut aussi s’observer très tôt dans l’infection ou transitoirement après vaccination.' },
      { text: 'Confirmer et replacer les résultats dans le contexte, notamment une exposition ou une vaccination récente', correct: true, correction: 'Oui boss 🧠 Le contrôle, les autres marqueurs dont l’ADN si indiqué et le suivi permettent d’interpréter le profil.' },
      { text: 'Affirmer immédiatement une infection chronique de plusieurs années', correct: false, correction: 'Faux. Ce premier résultat ne documente pas la durée de l’infection.' },
    ],
    explanation: 'Le support présente ce profil comme une erreur nécessaire, ce qui est trop absolu. Il peut être associé à une infection très précoce, une antigénémie transitoire après vaccination ou un résultat faussement positif ; une vérification contextualisée est nécessaire. (Cours, p. 26–27 ; interprétation rectifiée)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Concernant l’Ag HBe, les anti-HBe et la réplication du VHB, quelles propositions sont exactes ?',
    options: [
      { text: 'L’ADN du VHB aide à évaluer la réplication, quel que soit le statut de l’Ag HBe', correct: true, correction: 'Exact. C’est l’intérêt de la mesure directe de la charge virale.' },
      { text: 'Les anti-HBe sont systématiquement administrés comme traitement lorsque l’Ag HBe disparaît', correct: false, correction: 'Non chef. Les anti-HBe sont des anticorps produits par l’hôte ; le texte du support ne doit pas être compris comme une prescription d’anticorps anti-HBe.' },
      { text: 'Une infection chronique Ag HBe négative peut néanmoins être réplicative et active', correct: true, correction: 'Exact 🧠 L’absence de cet antigène ne signifie pas l’absence de réplication ou de maladie.' },
      { text: 'La positivité de l’Ag HBe est classiquement associée à une réplication importante et à une infectiosité élevée', correct: true, correction: 'Oui boss. C’est un marqueur utile, mais il ne remplace pas la quantification de l’ADN.' },
      { text: 'Un Ag HBe négatif suffit à déclarer le virus non transmissible et sans conséquence hépatique', correct: false, correction: 'Faux. Ni la transmissibilité ni l’activité hépatique ne se déduisent de ce seul résultat.' },
    ],
    explanation: 'L’Ag HBe et les anti-HBe apportent des informations complémentaires, mais une infection Ag HBe négative peut rester active. La quantification de l’ADN et l’évaluation hépatique sont nécessaires à l’interprétation. (Cours, p. 25–28 ; limites précisées)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quel examen mesure directement la charge virale du VHB circulant ?',
    options: [
      { text: 'Une PCR quantitative de l’ADN du VHB', correct: true, correction: 'Oui boss 🎯 Elle quantifie l’ADN viral et sert notamment au bilan initial et au suivi du traitement.' },
      { text: 'L’élastométrie hépatique', correct: false, correction: 'Non. Elle contribue à évaluer la fibrose, pas la quantité d’ADN viral circulant.' },
      { text: 'L’échographie hépatique seule', correct: false, correction: 'Non chef. Elle étudie le foie et peut contribuer à sa surveillance ; elle ne mesure pas la charge virale.' },
      { text: 'La recherche qualitative des anti-HBc totaux', correct: false, correction: 'Faux. Elle témoigne habituellement d’une infection passée ou présente sans quantifier la réplication.' },
      { text: 'Le dosage des anti-HBs', correct: false, correction: 'Non chef. Les anti-HBs sont des anticorps ; leur titre n’est pas une charge virale.' },
    ],
    explanation: 'La PCR quantitative mesure l’ADN du VHB dans le prélèvement et reflète l’intensité de la réplication. Les marqueurs immunologiques et les examens du foie apportent des informations différentes. (Cours, p. 26–28, 31–32)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles propositions rappellent correctement les limites d’une interprétation fondée sur un marqueur isolé ?',
    options: [
      { text: 'Des anti-HBc totaux positifs ne distinguent pas à eux seuls une infection ancienne résolue d’une infection actuelle', correct: true, correction: 'Exact. Leur interprétation se fait avec HBs, anti-HBs, les IgM et, selon la situation, l’ADN.' },
      { text: 'Des anti-HBs négatifs ne permettent pas à eux seuls d’affirmer que la personne n’est pas infectée', correct: true, correction: 'Oui boss. Une infection aiguë ou chronique peut comporter des anti-HBs négatifs.' },
      { text: 'Une coexistence Ag HBs positif et anti-HBs positifs suffit à conclure à une vaccination seule', correct: false, correction: 'Non chef. La positivité de l’Ag HBs nécessite une interprétation propre ; les anti-HBs n’effacent pas ce résultat.' },
      { text: 'Une charge virale indétectable dans le sang démontre l’absence de tout réservoir viral hépatique', correct: false, correction: 'Faux. Le compartiment sanguin et les formes d’ADN persistantes dans le foie ne sont pas équivalents.' },
      { text: 'Des anti-HBs positifs ne garantissent pas, dans toute situation, que l’Ag HBs soit négatif', correct: true, correction: 'Exact 🧠 Une coexistence Ag HBs/anti-HBs est possible ; il faut réellement lire les autres résultats.' },
    ],
    explanation: 'Les profils usuels sont utiles, mais les marqueurs doivent être interprétés ensemble. Des profils moins habituels, notamment la coexistence Ag HBs/anti-HBs, existent ; une PCR sanguine négative ne prouve pas l’éradication hépatique. (Cours, p. 21, 25–29 ; limites précisées)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Après confirmation d’une infection chronique par le VHB, quelle approche correspond au cours ?',
    options: [
      { text: 'Évaluer la réplication et l’état du foie, puis décider de l’indication du traitement et organiser la surveillance', correct: true, correction: 'Oui boss 🧠 L’orientation spécialisée permet une prise en charge adaptée à la situation.' },
      { text: 'Déduire le degré de fibrose uniquement du titre d’anti-HBc', correct: false, correction: 'Non chef. La fibrose nécessite une évaluation hépatique, pas l’interprétation isolée d’un anticorps de contact.' },
      { text: 'Vacciner le patient comme seul moyen de supprimer une infection déjà installée', correct: false, correction: 'Non. La vaccination est préventive et ne remplace pas la prise en charge d’une infection chronique.' },
      { text: 'Traiter obligatoirement tous les patients sur le seul critère d’un Ag HBs positif', correct: false, correction: 'Non chef. L’indication dépend d’une évaluation ; la positivité seule n’est pas un ordre automatique de traitement pour tous.' },
      { text: 'Renoncer à toute surveillance si l’Ag HBe est négatif', correct: false, correction: 'Faux. Une infection Ag HBe négative peut rester active et la surveillance ne repose pas sur ce seul marqueur.' },
    ],
    explanation: 'Le cours précise que l’hépatologue décide de la nécessité du traitement et évalue l’état du foie et l’entourage. Les marqueurs virologiques et hépatiques déterminent ensemble la prise en charge. (Cours, p. 27–28, 31–32)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Concernant les objectifs et le suivi des traitements antiviraux du VHB cités dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Une PCR indétectable rend inutile toute évaluation ultérieure du foie chez chaque patient', correct: false, correction: 'Non chef. L’évaluation et la surveillance restent adaptées à l’histoire et au risque hépatique.' },
      { text: 'La PCR quantitative est utilisée pour suivre l’efficacité virologique', correct: true, correction: 'Exact. Le suivi de l’ADN permet d’observer la réponse et de repérer une éventuelle remontée.' },
      { text: 'La baisse de la charge virale ne démontre pas une élimination complète du cccDNA hépatique', correct: true, correction: 'Oui 🧠 Le réservoir persistant explique la distinction entre suppression virologique et éradication.' },
      { text: 'Ils visent notamment à supprimer ou réduire fortement la réplication virale', correct: true, correction: 'Exact 🎯 La baisse de l’ADN circulant constitue un objectif majeur.' },
      { text: 'Ils peuvent réduire le risque de complications hépatiques', correct: true, correction: 'Oui boss. Le contrôle de la réplication contribue à prévenir la progression, sans garantir un risque résiduel nul.' },
    ],
    explanation: 'Les traitements cités, notamment ténofovir et entécavir, contrôlent efficacement la réplication mais ne garantissent pas l’éradication du réservoir hépatique. Le suivi combine virologie et évaluation du foie. (Cours, p. 27–28)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Sous traitement antiviral, une charge virale VHB jusque-là supprimée remonte. Quelle interprétation est la plus adaptée ?',
    options: [
      { text: 'Il suffit de mesurer les anti-HBs pour remplacer le contrôle de l’ADN', correct: false, correction: 'Non chef. Les anti-HBs ne quantifient pas la réplication ; l’ADN doit être suivi.' },
      { text: 'Cette remontée constitue un signal d’échappement virologique à confirmer et à analyser, notamment sur les plans de l’observance et de la résistance', correct: true, correction: 'Oui boss 🧠 Le cours évoque des mutations de résistance ; une remontée ne doit pas être attribuée automatiquement à une mutation sans investigation.' },
      { text: 'Les traitements récents ont une forte barrière à la résistance, donc aucune remontée ne peut jamais survenir', correct: false, correction: 'Faux. Une résistance plus rare ne signifie pas que tout problème virologique soit impossible.' },
      { text: 'Cette remontée prouve automatiquement une mutation de résistance, sans autre cause possible', correct: false, correction: 'Non chef. La prise du traitement et d’autres éléments doivent aussi être vérifiés.' },
      { text: 'La remontée de l’ADN prouve que les anti-HBc ont disparu', correct: false, correction: 'Non. Charge virale et persistance des anticorps de contact ne décrivent pas le même phénomène.' },
    ],
    explanation: 'Une remontée de charge virale sous traitement appelle une vérification et une analyse. Le support décrit les résistances, plus fréquentes avec certaines anciennes molécules ; il ne faut pas en faire l’unique explication possible. (Cours, p. 27–28 ; causes précisées)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles mesures participent à la prévention du VHB dans les situations décrites par le cours ?',
    options: [
      { text: 'La prévention des expositions au sang et l’absence de partage de matériel d’injection', correct: true, correction: 'Exact 🧠 Ces mesures répondent à la transmission sanguine.' },
      { text: 'La vaccination rend inutile toute mesure de prévention des expositions chez l’ensemble des professionnels de santé', correct: false, correction: 'Non chef. Le support souligne qu’une réponse vaccinale suffisante n’est pas garantie chez chaque sujet ; la prévention des expositions reste nécessaire.' },
      { text: 'Le contrôle virologique des dons de sang', correct: true, correction: 'Oui. Il contribue à la sécurité transfusionnelle décrite dans le cours.' },
      { text: 'La vaccination des nourrissons et des personnes exposées lorsqu’elle est indiquée', correct: true, correction: 'Oui boss 🎯 Elle vise à éviter l’infection et ses conséquences futures.' },
      { text: 'Le dépistage de l’Ag HBs pendant la grossesse afin d’organiser la prévention mère-enfant', correct: true, correction: 'Exact. Identifier une infection maternelle permet d’adapter la prévention du nouveau-né.' },
    ],
    explanation: 'La prévention associe vaccination, dépistage maternel, sécurité des dons et réduction des expositions. (Cours, p. 23–24, 29, 31–32)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Parmi les virus A, E, C et B comparés dans le tableau du cours, lequel possède un génome ADN ?',
    options: [
      { text: 'Le VHC', correct: false, correction: 'Faux, le VHC est un virus enveloppé à ARN. Enveloppe ne signifie pas nécessairement ADN.' },
      { text: 'Le VHB', correct: true, correction: 'Oui boss 🧠 Le VHB possède un ADN circulaire partiellement double brin dans la particule virale.' },
      { text: 'Les quatre possèdent un génome ADN', correct: false, correction: 'Non chef, cette proposition confond des virus appartenant à des familles différentes. Seul B est à ADN dans ce groupe.' },
      { text: 'Le VHE', correct: false, correction: 'Non chef, le VHE possède un génome ARN, comme le VHA dans la comparaison du support.' },
      { text: 'Le VHA', correct: false, correction: 'Non chef, le VHA est un virus à ARN. Sa résistance extérieure ne renseigne pas à elle seule sur la nature du génome.' },
    ],
    explanation: 'Le tableau oppose le génome ARN des VHA, VHE et VHC au génome ADN du VHB. L’enveloppe et la nature du génome sont deux caractères distincts. (Cours, p. 8, 15, 21)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles comparaisons concernant l’évolution des hépatites A, E, C et B sont exactes ?',
    options: [
      { text: 'Le VHA n’établit pas d’infection chronique', correct: true, correction: 'Oui boss 🎯 C’est une distinction majeure du cours. Une convalescence prolongée ne signifie pas une infection chronique par le VHA.' },
      { text: 'Tous ces virus entraînent nécessairement une cirrhose chez toute personne infectée', correct: false, correction: 'Non chef, les évolutions sont différentes. Une complication possible n’est pas un destin obligatoire pour chaque patient.' },
      { text: 'Une infection par le VHC peut devenir chronique après une phase aiguë peu symptomatique', correct: true, correction: 'Oui boss, l’absence d’ictère ne protège pas contre la persistance du VHC.' },
      { text: 'Une infection par le VHE peut devenir chronique chez un patient immunodéprimé', correct: true, correction: 'Exact, notamment après une greffe et sous immunosuppresseurs. Le tableau « A/E aiguës » est une simplification pour E.' },
      { text: 'Le risque de chronicisation du VHB dépend notamment de l’âge à l’infection', correct: true, correction: 'Exact 🧠 Il est beaucoup plus élevé après une infection périnatale qu’après une infection chez un adulte immunocompétent.' },
    ],
    explanation: 'Les catégories aiguë et chronique doivent être appliquées à l’infection et à son contexte. Le VHA ne devient pas chronique ; le VHE peut persister chez l’immunodéprimé, et B/C peuvent donner des infections chroniques. (Cours, p. 4–8, 15–16, 24–25)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Une personne présente des troubles digestifs 48 heures après un repas de coquillages. Quelle conclusion respecte la discussion du cours sur l’incubation du VHA ?',
    options: [
      { text: 'Tout repas de coquillages provoque nécessairement une hépatite A', correct: false, correction: 'Non chef, il faut une contamination et un délai compatible. Le simple aliment consommé ne constitue pas un diagnostic.' },
      { text: 'L’absence d’incubation est caractéristique du VHA', correct: false, correction: 'Faux, le VHA possède une incubation de plusieurs semaines avant les manifestations.' },
      { text: 'Le VHA acquis lors de ce repas est confirmé par le délai de 48 heures', correct: false, correction: 'Non chef, le délai va au contraire contre cette attribution. Il ne confirme aucune étiologie à lui seul.' },
      { text: 'Ce délai prouve que la personne n’a jamais été exposée auparavant au VHA', correct: false, correction: 'Non, il permet seulement de discuter le lien avec ce repas. Il n’exclut pas une exposition distincte plus ancienne.' },
      { text: 'Ce délai est trop court pour attribuer les symptômes à une hépatite A nouvellement acquise lors de ce repas', correct: true, correction: 'Oui boss 🧠 Le cours donne une incubation de plusieurs semaines. Il faut distinguer ce repas d’une éventuelle exposition plus ancienne.' },
    ],
    explanation: 'Le cours oppose des symptômes à quelques jours d’un repas à une incubation compatible de plusieurs semaines. Le délai ne doit pas être utilisé pour exclure une exposition antérieure indépendante. (Cours, p. 3, 9–10)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles associations entre méthode biologique et cible recherchée sont exactes ?',
    options: [
      { text: 'PCR VHE : recherche d’ARN viral dans le sang ou les selles', correct: true, correction: 'Oui boss, cette méthode est un diagnostic direct, particulièrement utile quand la sérologie est difficile à interpréter.' },
      { text: 'Sérologie anti-VHA : recherche de la réponse anticorps de l’hôte', correct: true, correction: 'Exact 🧠 Une sérologie est un diagnostic indirect. Le type d’anticorps recherché, IgM ou IgG, change l’interprétation.' },
      { text: 'PCR VHC : recherche ou quantification d’ARN viral', correct: true, correction: 'Exact, la recherche du génome complète la sérologie pour identifier une infection actuelle.' },
      { text: 'Dosage des ALAT : mesure spécifique de la quantité d’ARN viral', correct: false, correction: 'Non chef, les ALAT sont des enzymes reflétant la cytolyse. Elles ne quantifient pas le génome d’un virus et n’identifient pas seules sa nature.' },
      { text: 'PCR VHB : recherche ou quantification d’ADN viral', correct: true, correction: 'Oui boss 🎯 Le VHB est un virus ADN ; sa quantification permet d’évaluer la réplication.' },
    ],
    explanation: 'Les méthodes directes recherchent le virus ou ses constituants ; les méthodes indirectes recherchent les anticorps. La cytolyse renseigne sur l’atteinte hépatique, sans constituer une charge virale. (Cours, p. 3–4, 7, 19–20, 27–28)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Chez un patient présentant un ictère et une cytolyse, la recherche d’IgM anti-VHA est positive. Quelle interprétation est la plus compatible avec le cours ?',
    options: [
      { text: 'Une hépatite fulminante automatiquement démontrée par les IgM', correct: false, correction: 'Non chef, les IgM ne mesurent pas la gravité. Celle-ci s’évalue notamment par la fonction hépatique et la clinique.' },
      { text: 'Une infection aiguë par le VHC confirmée par ces anticorps', correct: false, correction: 'Faux, ces anticorps sont dirigés contre le VHA. Ils ne constituent pas un marqueur du VHC.' },
      { text: 'Une hépatite A chronique établie par les IgM', correct: false, correction: 'Non chef, le VHA ne donne pas d’infection chronique. Les IgM sont surtout un marqueur d’infection récente.' },
      { text: 'Une hépatite A aiguë dans ce contexte clinique et biologique compatible', correct: true, correction: 'Oui boss 🧠 L’association de symptômes compatibles, de cytolyse et d’IgM anti-VHA soutient une hépatite A aiguë.' },
      { text: 'Une vaccination ancienne certaine, sans possibilité d’infection aiguë', correct: false, correction: 'Non, la vaccination ancienne se discute surtout avec les IgG. Ici, le contexte et les IgM orientent vers l’infection aiguë.' },
    ],
    explanation: 'Le support souligne l’association IgM anti-VHA, ictère et cytolyse pour le diagnostic de l’hépatite A aiguë. La positivité des IgM n’évalue pas à elle seule la sévérité de l’atteinte. (Cours, p. 3–5, 9–11)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Pourquoi faut-il préciser le virus et le type d’anticorps avant d’interpréter une sérologie d’hépatite ?',
    options: [
      { text: 'Les anticorps anti-VHC peuvent persister après guérison sans empêcher une réinfection', correct: true, correction: 'Exact 🧠 Une trace sérologique n’est pas toujours une protection efficace contre une nouvelle infection.' },
      { text: 'Tout anticorps positif prouve une réplication active du virus correspondant', correct: false, correction: 'Non chef, les anticorps peuvent persister après une infection résolue ou après vaccination. La recherche du génome ou d’antigènes complète l’interprétation selon le virus.' },
      { text: 'Les anti-HBc témoignent d’un contact naturel avec le VHB, et ne sont pas induits par son vaccin habituel', correct: true, correction: 'Oui boss, le vaccin utilise l’antigène de surface HBs ; les anticorps contre la capside ont une autre signification.' },
      { text: 'Les IgG anti-VHA peuvent témoigner d’une immunité après infection ou vaccination', correct: true, correction: 'Oui boss, elles ne permettent pas de distinguer à elles seules ces deux origines de l’immunité.' },
      { text: 'Des anti-HBs seuls positifs peuvent correspondre à une réponse vaccinale contre le VHB', correct: true, correction: 'Exact, il faut conserver les résultats des autres marqueurs pour interpréter ce profil.' },
    ],
    explanation: 'La signification des anticorps dépend de leur cible et du contexte : protection pour certains, trace d’exposition pour d’autres, sans preuve automatique d’infection active. (Cours, p. 4–5, 19, 25–29)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Lors d’un dépistage sans exposition récente connue, les anticorps anti-VHC sont réactifs mais l’ARN du VHC n’est pas détecté. Quelle conclusion est la plus prudente ?',
    options: [
      { text: 'Une guérison ancienne est la seule explication possible dans tous les cas', correct: false, correction: 'Non, une fausse réactivité est aussi possible. Une exposition récente, si elle existe, change également la stratégie de contrôle.' },
      { text: 'Il n’y a pas de virémie détectée ; une infection ancienne résolue ou une réactivité sérologique faussement positive peuvent expliquer ce profil', correct: true, correction: 'Oui boss 🧠 L’ARN non détecté ne soutient pas une infection actuelle dans ce contexte. La sérologie seule ne permet pas de choisir avec certitude entre les explications possibles.' },
      { text: 'Les anticorps suffisent à prouver une hépatite C chronique active', correct: false, correction: 'Non chef, une infection actuelle nécessite notamment la détection du génome. Des anticorps peuvent persister sans virémie.' },
      { text: 'La personne est définitivement protégée contre toute réinfection par le VHC', correct: false, correction: 'Faux, les anticorps anti-VHC ne confèrent pas une protection garantissant l’absence de réinfection.' },
      { text: 'Ce profil démontre un réservoir latent de VHC sous forme de cccDNA', correct: false, correction: 'Non chef, le cccDNA est une notion liée au VHB. Le VHC est un virus ARN, sans ce réservoir ADN.' },
    ],
    explanation: 'Le cours distingue la persistance des anticorps et la détection de l’ARN. Le profil sérologie réactive/ARN non détecté ne suffit pas à prouver une infection active ni une protection. (Cours, p. 19–21 ; limites d’interprétation précisées)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Deux semaines après une exposition au sang, un patient a des anticorps anti-VHC négatifs, un ARN VHC détectable et des ALAT encore normales. Quelles propositions sont exactes ?',
    options: [
      { text: 'Des ALAT normales suffisent à exclure toute infection par le VHC', correct: false, correction: 'Non, les enzymes hépatiques peuvent être normales à certains moments. Elles ne remplacent pas la recherche du génome.' },
      { text: 'Ces seuls résultats ne démontrent pas une persistance virale supérieure à six mois', correct: true, correction: 'Oui boss, la chronicité est une notion temporelle. Une infection détectée récemment ne peut pas être classée chronique sur ce seul prélèvement.' },
      { text: 'Une infection récente avant l’apparition d’anticorps détectables est compatible avec ces résultats', correct: true, correction: 'Oui boss 🎯 L’ARN peut devenir détectable avant la séroconversion : c’est la fenêtre sérologique décrite dans le cours.' },
      { text: 'Le résultat d’ARN positif constitue un argument de présence actuelle du virus', correct: true, correction: 'Exact 🧠 Il doit être interprété et confirmé selon le contexte, mais ne disparaît pas du raisonnement parce que les anticorps sont négatifs.' },
      { text: 'La sérologie négative suffit à annuler le résultat d’ARN positif', correct: false, correction: 'Non chef, les deux résultats peuvent coexister au début de l’infection. Le diagnostic direct apporte une information différente.' },
    ],
    explanation: 'Après une exposition récente, une sérologie négative n’exclut pas le VHC : le génome peut être détecté avant les anticorps. Un prélèvement isolé ne documente pas la durée d’infection. (Cours, p. 18–20 ; rôle des ALAT précisé)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Dans une hépatite aiguë avec cytolyse, quelle donnée du cours attire particulièrement l’attention sur une altération sévère de la fonction de synthèse hépatique ?',
    options: [
      { text: 'Une chute du TP et du facteur V', correct: true, correction: 'Oui boss 🧠 Le foie synthétise des facteurs de coagulation. Leur diminution importante traduit une altération fonctionnelle et impose une évaluation de la gravité.' },
      { text: 'Une PCR qualitative positive qui prouve à elle seule la nécessité d’une greffe', correct: false, correction: 'Non chef, une PCR détecte le génome. L’indication d’une greffe repose sur une évaluation clinique et biologique spécialisée, pas sur ce seul résultat.' },
      { text: 'La positivité d’un anticorps anti-VHC, quel que soit l’ARN', correct: false, correction: 'Non, la sérologie renseigne sur une exposition possible au VHC. Elle ne remplace pas l’évaluation fonctionnelle hépatique.' },
      { text: 'La présence d’IgG anti-VHA isolées', correct: false, correction: 'Non chef, ces IgG renseignent sur une immunité ou un contact ancien. Elles ne mesurent pas la fonction de synthèse du foie.' },
      { text: 'La seule appartenance du virus à une famille de virus ARN', correct: false, correction: 'Faux, la nature du génome n’est pas une mesure de gravité chez ce patient.' },
    ],
    explanation: 'Les transaminases évaluent la cytolyse ; le TP et le facteur V contribuent à l’évaluation de la fonction hépatique et de la gravité. Le support insiste sur leur chute dans les formes sévères. (Cours, p. 1, 3–4)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Un adulte a un Ag HBs confirmé positif sur deux prélèvements espacés de huit mois, des anti-HBc totaux positifs, des IgM anti-HBc négatives et un ADN VHB détectable. Quelles conclusions sont exactes ?',
    options: [
      { text: 'Ce profil ne permet pas d’affirmer à lui seul la présence d’un cancer du foie', correct: true, correction: 'Exact 🧠 Un risque de complication n’est pas un diagnostic tumoral. Il faut une évaluation adaptée du foie et du contexte.' },
      { text: 'La persistance de l’Ag HBs au-delà de six mois est compatible avec une infection chronique', correct: true, correction: 'Oui boss 🎯 Ici, la durée est réellement documentée par les deux prélèvements, contrairement à une interprétation fondée uniquement sur l’absence d’IgM.' },
      { text: 'Les IgM négatives prouvent que la personne n’a jamais rencontré le VHB', correct: false, correction: 'Non chef, les anti-HBc totaux et l’Ag HBs montrent ici le contraire. Les IgM n’ont pas la même signification que les anticorps totaux.' },
      { text: 'L’ADN VHB détectable apporte une information directe sur la réplication virale', correct: true, correction: 'Oui boss, sa quantification est utile pour l’évaluation et le suivi, avec les autres données hépatiques.' },
      { text: 'Les anti-HBc positifs indiquent un contact naturel avec le VHB', correct: true, correction: 'Exact, le vaccin habituel ne produit pas ces anticorps contre la capside.' },
    ],
    explanation: 'La chronicité B est documentée par la persistance de l’Ag HBs au-delà de six mois. Les autres marqueurs caractérisent le contact et la réplication ; ils ne suffisent pas à diagnostiquer une cirrhose ou un cancer. (Cours, p. 25–28)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Un dépistage montre un Ag HBs positif et des anti-HBc négatifs sur un seul prélèvement. Quelle attitude d’interprétation est la plus juste ?',
    options: [
      { text: 'Utiliser les anticorps anti-VHC pour confirmer la positivité de l’Ag HBs', correct: false, correction: 'Non chef, ces marqueurs concernent deux virus différents. Les examens complémentaires doivent répondre à la question posée sur le VHB.' },
      { text: 'Affirmer que cette association est biologiquement impossible', correct: false, correction: 'Non chef, le support est trop absolu sur ce point. Les marqueurs n’apparaissent pas tous simultanément et le contexte vaccinal peut intervenir.' },
      { text: 'Confirmer et contextualiser ce profil, notamment avec la chronologie, une éventuelle vaccination récente et les examens complémentaires', correct: true, correction: 'Oui boss 🧠 Ce profil ne signifie pas obligatoirement une erreur. Il peut notamment s’observer au tout début d’une infection ou transitoirement après vaccination ; un faux positif reste aussi possible.' },
      { text: 'Conclure à une immunité naturelle ancienne certaine sans vérifier l’Ag HBs', correct: false, correction: 'Faux, une immunité naturelle ancienne classique comporte notamment des anti-HBc. Le résultat doit être vérifié et expliqué.' },
      { text: 'Déclarer immédiatement une hépatite B chronique sans regarder la durée', correct: false, correction: 'Non, la chronicité ne peut pas être établie à partir de cette seule association sur un prélèvement.' },
    ],
    explanation: 'Le contrôle d’un Ag HBs positif et l’étude des autres marqueurs sont nécessaires. L’association HBs positif/HBc négatif ne doit pas être classée impossible : début d’infection, positivité postvaccinale transitoire et faux positif sont à discuter. (Cours, p. 26–28 ; affirmation du support rectifiée)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Chez un receveur de greffe sous immunosuppresseurs, un ARN VHE reste détectable lors du suivi. Quelles propositions respectent le cours et ses nuances ?',
    options: [
      { text: 'Le terrain immunodéprimé rend possible une infection persistante ou chronique par le VHE', correct: true, correction: 'Oui boss 🧠 La présentation du VHE comme exclusivement aigu dans le tableau récapitulatif ne couvre pas ce terrain particulier.' },
      { text: 'L’absence d’ictère exclut nécessairement la persistance du VHE', correct: false, correction: 'Non chef, l’infection peut être peu symptomatique ou asymptomatique. Les signes cliniques ne remplacent pas la détection du génome.' },
      { text: 'Le suivi peut comporter une recherche du virus dans le sang et dans les selles', correct: true, correction: 'Exact, le support souligne l’intérêt de ces deux compartiments, notamment parce que l’excrétion fécale peut durer plus longtemps.' },
      { text: 'La ribavirine peut être utilisée dans certaines infections chroniques sous prise en charge spécialisée', correct: true, correction: 'Oui boss, c’est une option présentée dans le cours. Elle a une activité antivirale : « aucun antiviral » est donc une formulation à corriger.' },
      { text: 'Le simple maintien d’anticorps IgG suffit à prouver que le virus se réplique encore', correct: false, correction: 'Non, il faut distinguer anticorps persistants et présence du génome. Les IgG ne sont pas une mesure directe de la réplication.' },
    ],
    explanation: 'L’immunosuppression est un contexte majeur de persistance du VHE. Le diagnostic et le suivi reposent notamment sur l’ARN ; la ribavirine est une option dans certaines infections chroniques, avec surveillance spécialisée. (Cours, p. 7–8, 10–11)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Un patient immunodéprimé présente une cytolyse, des IgM anti-VHE négatives et un ARN VHE détecté par PCR. Quelle conclusion est correcte ?',
    options: [
      { text: 'Ce résultat correspond forcément à une réponse au vaccin contre le VHB', correct: false, correction: 'Faux, une vaccination contre B n’explique pas la présence d’ARN du VHE. Les virus et les méthodes sont différents.' },
      { text: 'Une infection par le VHE reste compatible avec ce diagnostic direct malgré une sérologie négative', correct: true, correction: 'Oui boss 🎯 Une réponse anticorps insuffisante ou retardée peut rendre la sérologie moins contributive. La détection d’ARN apporte une information directe.' },
      { text: 'L’ARN détecté prouve à lui seul une infection chronique sans information temporelle', correct: false, correction: 'Non, le génome détecté documente une infection présente ; la chronicité nécessite aussi l’évolution et la persistance dans le temps.' },
      { text: 'La négativité des IgM rend toute PCR positive nécessairement fausse', correct: false, correction: 'Non chef, les deux méthodes ne recherchent pas la même chose. Une réponse sérologique faible est possible chez un immunodéprimé.' },
      { text: 'Le VHE doit être exclu parce qu’une hépatite E est toujours ictérique', correct: false, correction: 'Non chef, le cours précise justement que l’infection peut être asymptomatique ou sans ictère franc.' },
    ],
    explanation: 'Chez un immunodéprimé, la recherche directe de l’ARN VHE est particulièrement utile lorsque la sérologie n’apporte pas de réponse claire. Une PCR positive isolée ne renseigne pas à elle seule sur la durée d’infection. (Cours, p. 6–7 ; limites sérologiques précisées)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles distinctions faut-il conserver entre le suivi thérapeutique du VHC et celui du VHB ?',
    options: [
      { text: 'La persistance d’anticorps anti-VHC après ce résultat prouve automatiquement un échec du traitement', correct: false, correction: 'Non chef, les anticorps peuvent persister longtemps après la guérison. Le suivi de la réponse virologique utilise l’ARN.' },
      { text: 'Pour le VHC, un ARN non détecté par une méthode sensible au moins douze semaines après le traitement documente une réponse virologique soutenue', correct: true, correction: 'Oui boss 🧠 C’est le critère de guérison virologique présenté. Un contrôle seulement pendant le traitement ne répond pas à la même question.' },
      { text: 'Pour le VHB, une baisse importante de l’ADN sanguin n’assure pas l’élimination du réservoir intra-hépatique', correct: true, correction: 'Exact, suppression de réplication et élimination du cccDNA sont différentes. Le réservoir explique notamment le risque de réactivation.' },
      { text: 'Une cirrhose préexistante peut justifier un suivi du risque de cancer même après guérison virologique du VHC', correct: true, correction: 'Oui boss, traiter le virus réduit le risque sans effacer instantanément toutes les lésions ni annuler toute surveillance liée à une cirrhose.' },
      { text: 'Une guérison virologique du VHC empêche définitivement toute nouvelle infection', correct: false, correction: 'Non, une réinfection reste possible après une nouvelle exposition. La prévention reste utile après guérison.' },
    ],
    explanation: 'Le VHC peut être éradiqué avec réponse virologique soutenue, tandis que les traitements habituels du VHB suppriment surtout la réplication sans garantir l’élimination du cccDNA. Prévention et suivi hépatique restent adaptés au contexte. (Cours, p. 16, 20–21, 27–28 ; suivi après guérison précisé)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Devant une cytolyse récente, seules les IgG anti-VHA sont positives, avec IgM anti-VHA négatives. Quelle conclusion peut-on tirer de cette sérologie isolée ?',
    options: [
      { text: 'Elle démontre une vaccination contre le VHB', correct: false, correction: 'Non, il s’agit d’anticorps anti-VHA. Une réponse vaccinale B est étudiée avec les anti-HBs et les autres marqueurs du VHB.' },
      { text: 'Elle prouve une hépatite A aiguë comme cause de la cytolyse', correct: false, correction: 'Non chef, les IgG seules ne sont pas le marqueur de référence de l’hépatite A aiguë. La présence d’anticorps doit être interprétée selon leur classe.' },
      { text: 'Elle prouve une hépatite A chronique', correct: false, correction: 'Faux, le VHA ne donne pas d’infection chronique. La persistance d’IgG est une réponse immunitaire, pas une réplication persistante.' },
      { text: 'Elle exclut toute autre cause virale, toxique ou auto-immune de cytolyse', correct: false, correction: 'Non chef, un marqueur d’immunité anti-VHA ne permet pas d’écarter les autres causes d’atteinte hépatique.' },
      { text: 'Elle est compatible avec une immunité après infection ancienne ou vaccination, et ne suffit pas à attribuer la cytolyse actuelle au VHA', correct: true, correction: 'Oui boss 🎯 Une immunité antérieure peut être indépendante de la cause de la cytolyse actuelle. Il faut confronter les résultats au contexte.' },
    ],
    explanation: 'Les IgG anti-VHA isolées évoquent une immunité ancienne ou vaccinale. La cause d’une cytolyse doit être recherchée avec le contexte et les marqueurs adaptés, sans l’attribuer à toute sérologie positive. (Cours, p. 1, 3–5)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles mesures résument correctement la prévention des hépatites virales abordées dans le cours ?',
    options: [
      { text: 'L’existence d’un vaccin courant contre le VHC rend toute précaution après guérison inutile', correct: false, correction: 'Non chef, il n’existe pas de vaccin disponible contre le VHC. Une guérison n’empêche pas une nouvelle contamination.' },
      { text: 'Le dépistage du VHB pendant la grossesse permet d’organiser la prévention pour le nouveau-né', correct: true, correction: 'Exact 🧠 Détecter une mère porteuse permet d’adapter les mesures préventives à la naissance.' },
      { text: 'La vaccination contre A ou B, selon les indications, complète les autres mesures préventives', correct: true, correction: 'Exact 🎯 Elle ne remplace pas toutes les précautions d’hygiène ni l’évaluation d’une exposition.' },
      { text: 'Éviter le partage de matériel exposant au sang contribue à prévenir B et C', correct: true, correction: 'Oui boss, cela inclut notamment les aiguilles et d’autres objets pouvant être souillés par du sang.' },
      { text: 'L’hygiène des mains et la sécurité de l’eau et des aliments contribuent à prévenir les transmissions oro-fécales', correct: true, correction: 'Oui boss, ces mesures concernent notamment A et les contextes de transmission oro-fécale de E.' },
    ],
    explanation: 'La prévention combine mesures adaptées au mode de transmission, vaccination lorsqu’elle existe et dépistage ciblé sur les situations importantes, notamment la grossesse pour B. (Cours, p. 2, 5–6, 17–19, 23–24, 28–29)'
  },
]
