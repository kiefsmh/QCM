// Source du cours : 
export const hematopoieseQuestions = [
{
id: 1,
type: 'QCM',
question: 'À propos des caractéristiques générales du sang, quelle proposition est exacte ?',
options: [
{
text: 'Le volume sanguin est d’environ 70 mL/kg',
correct: true,
correction: 'Oui chef 🩸 Le cours donne environ 70 mL de sang par kg de poids corporel.'
},
{
text: 'Le pH sanguin physiologique est compris entre 6,35 et 6,45',
correct: false,
correction: 'Non frérot 😭 Là ton patient commence à avoir de vrais problèmes. Le pH sanguin est compris entre 7,35 et 7,45.'
},
{
text: 'Le plasma représente environ 45 % du volume sanguin',
correct: false,
correction: 'Aïe 🧠 T’as inversé : le plasma représente environ 55 %, les cellules en suspension environ 45 %.'
},
{
text: 'Les cellules sanguines représentent environ 70 % du volume sanguin',
correct: false,
correction: 'Non chef 💀 Elles représentent environ 45 % du volume sanguin.'
},
{
text: 'Le plasma est composé à environ 55 % d’eau',
correct: false,
correction: 'Non 😭 Le plasma représente 55 % du sang, mais lui-même contient environ 91,5 % d’eau.'
}
],
explanation: 'Le sang représente environ 70 mL/kg et possède un pH compris entre 7,35 et 7,45. Il est constitué d’environ 55 % de plasma et 45 % de cellules en suspension.'
},
{
id: 2,
type: 'QCM',
question: 'Concernant les tubes de prélèvement sanguin décrits dans le cours, quelle proposition est exacte ?',
options: [
{
text: 'Le tube à bouchon jaune contient un anticoagulant et permet d’obtenir du plasma',
correct: false,
correction: 'Non chef 😭 Le bouchon jaune correspond ici à un tube sec, donc sans anticoagulant.'
},
{
text: 'Après centrifugation d’un tube sec, on obtient du sérum au-dessus du caillot',
correct: true,
correction: 'Oui chef 🧠 Tube sec → coagulation → caillot au fond et sérum au-dessus.'
},
{
text: 'Le sérum contient davantage de fibrinogène que le plasma',
correct: false,
correction: 'Non frérot 💀 Le fibrinogène et les facteurs de coagulation ont été consommés lors de la coagulation, donc ils ne sont plus présents dans le sérum.'
},
{
text: 'Le tube à bouchon violet ne contient aucun anticoagulant',
correct: false,
correction: 'Non 😭 Le tube violet contient justement un anticoagulant.'
},
{
text: 'Un tube contenant un anticoagulant permet d’obtenir du sérum',
correct: false,
correction: 'Non chef. Avec anticoagulant, on obtient du plasma au-dessus des cellules sanguines.'
}
],
explanation: 'Un tube sec sans anticoagulant donne après centrifugation un caillot et du sérum dépourvu de fibrinogène et de facteurs de coagulation consommés. Un tube avec anticoagulant permet d’obtenir du plasma.'
},
{
id: 3,
type: 'QCM',
question: 'Quelle association entre une cellule sanguine, sa durée de vie et sa fonction est exacte ?',
options: [
{
text: 'Globule rouge — environ 120 jours — transport de l’oxygène',
correct: true,
correction: 'Oui chef ❤️ 120 jours et transport de l’O₂ : c’est le CDI classique de l’hématie.'
},
{
text: 'Plaquette — environ 120 jours — défense antibactérienne',
correct: false,
correction: 'Non frérot 😭 La plaquette vit environ 7 jours et intervient dans l’hémostase.'
},
{
text: 'Globule blanc — exactement 7 jours — hémostase',
correct: false,
correction: 'Non 💀 Les leucocytes participent à la défense de l’organisme et leur durée de vie va de moins d’un jour à plusieurs années.'
},
{
text: 'Globule rouge — environ 7 jours — hémostase',
correct: false,
correction: 'Aïe 😭 T’as donné le CV de la plaquette au globule rouge.'
},
{
text: 'Plaquette — plusieurs années — transport de l’oxygène',
correct: false,
correction: 'Non chef 💀 Plaquettes = environ 7 jours et hémostase. Le transport de l’oxygène, c’est les hématies.'
}
],
explanation: 'Les globules rouges vivent environ 120 jours et transportent l’oxygène. Les plaquettes vivent environ 7 jours et interviennent dans l’hémostase, tandis que la durée de vie des leucocytes est très variable.'
},
{
id: 4,
type: 'QCM',
question: 'À propos des polynucléaires neutrophiles, quelle proposition est exacte ?',
options: [
{
text: 'Ils assurent principalement la défense contre les parasites',
correct: false,
correction: 'Non chef 😭 Ça, c’est plutôt le domaine des éosinophiles.'
},
{
text: 'Ils restent plusieurs mois dans le sang',
correct: false,
correction: 'Non frérot. Leur durée dans le sang est d’environ 10 heures.'
},
{
text: 'Ils participent principalement à la défense contre les bactéries',
correct: true,
correction: 'Oui chef 🦠 PNN = défense antibactérienne, c’est une association à automatiser.'
},
{
text: 'Ils se transforment systématiquement en macrophages dans les tissus',
correct: false,
correction: 'Non 😭 Ça, c’est le devenir des monocytes après leur passage tissulaire.'
},
{
text: 'Ce sont des cellules anucléées',
correct: false,
correction: 'Non chef 💀 Les polynucléaires possèdent bien un noyau polylobé.'
}
],
explanation: 'Les polynucléaires neutrophiles circulent environ 10 h dans le sang, passent ensuite dans les tissus pour environ 24 h et jouent un rôle majeur dans la défense antibactérienne.'
},
{
id: 5,
type: 'QCM',
question: 'À propos des cellules souches hématopoïétiques, quelle proposition est exacte ?',
options: [
{
text: 'Elles sont totipotentes',
correct: false,
correction: 'Non frérot 😭 Gros piège du cours : les CSH sont multipotentes, pas totipotentes.'
},
{
text: 'Elles peuvent donner l’ensemble des cellules sanguines matures',
correct: true,
correction: 'Oui chef 🧠 C’est justement leur multipotence : elles peuvent reconstituer les lignées myéloïde et lymphoïde.'
},
{
text: 'Elles se trouvent principalement dans le sang périphérique à l’état physiologique',
correct: false,
correction: 'Non chef. Leur localisation principale est la moelle osseuse, même si elles peuvent être mobilisées dans le sang.'
},
{
text: 'Elles sont facilement identifiables au microscope par leur morphologie',
correct: false,
correction: 'Non 😭 Les CSH ne sont pas identifiables morphologiquement.'
},
{
text: 'Elles ne peuvent pas s’auto-renouveler',
correct: false,
correction: 'Non chef 💀 L’auto-renouvellement est justement une de leurs propriétés fondamentales.'
}
],
explanation: 'Les CSH sont des cellules multipotentes capables d’auto-renouvellement et de différenciation vers toutes les cellules sanguines matures. Elles ne sont pas totipotentes.'
},
{
id: 6,
type: 'QCM',
question: 'À quel stade de l’hématopoïèse apparaît la première différence morphologique identifiable au microscope ?',
options: [
{
text: 'Au stade de cellule souche hématopoïétique',
correct: false,
correction: 'Non chef 😭 Les CSH ne sont pas reconnaissables morphologiquement.'
},
{
text: 'Au stade de progéniteur',
correct: false,
correction: 'Non frérot. Le progéniteur reste morphologiquement indiscernable de la CSH.'
},
{
text: 'Au stade de précurseur',
correct: true,
correction: 'Oui chef 🔬 Les précurseurs sont les premières cellules de la lignée qu’on peut reconnaître morphologiquement.'
},
{
text: 'Uniquement lorsque la cellule est mature dans le sang périphérique',
correct: false,
correction: 'Non 😭 On peut déjà distinguer morphologiquement les précurseurs dans la moelle.'
},
{
text: 'Uniquement après une culture de 14 jours',
correct: false,
correction: 'Non chef 💀 La culture concerne notamment l’étude des progéniteurs, pas l’apparition de la première différenciation morphologique.'
}
],
explanation: 'La CSH et le progéniteur sont morphologiquement indiscernables. Les précurseurs constituent les premières cellules reconnaissables au microscope.'
},
{
id: 7,
type: 'QCM',
question: 'Concernant la localisation de l’hématopoïèse au cours du développement, quelle proposition est exacte ?',
options: [
{
text: 'Elle débute directement dans la moelle osseuse dès la fécondation',
correct: false,
correction: 'Non chef 😭 L’hématopoïèse change plusieurs fois de territoire au cours du développement.'
},
{
text: 'Entre le 2e et le 7e mois, elle se déroule principalement dans le foie et la rate',
correct: true,
correction: 'Oui chef 🧠 Entre M2 et M7 : foie + rate. À partir du 5e mois, la moelle osseuse commence progressivement à prendre le relais.'
},
{
text: 'Avant la naissance, elle se déroule exclusivement dans le sternum',
correct: false,
correction: 'Non frérot 💀 Le sternum arrive bien plus tard dans l’histoire.'
},
{
text: 'La moelle osseuse commence à assurer l’hématopoïèse uniquement après la naissance',
correct: false,
correction: 'Non 😭 Elle commence progressivement dès le 5e mois de vie fœtale.'
},
{
text: 'La région para-aortique devient le site principal après le 7e mois',
correct: false,
correction: 'Non chef. La région para-aortique intervient surtout pendant les deux premiers mois.'
}
],
explanation: 'L’hématopoïèse débute dans la région para-aortique pendant les deux premiers mois, puis siège surtout dans le foie et la rate entre le 2e et le 7e mois. La moelle osseuse commence à participer à partir du 5e mois.'
},
{
id: 8,
type: 'QCM',
question: 'Que produit une division asymétrique d’une cellule souche hématopoïétique après la naissance ?',
options: [
{
text: 'Deux cellules souches hématopoïétiques identiques',
correct: false,
correction: 'Non chef 😭 Ça correspond à la division symétrique et à l’autorenouvellement d’expansion.'
},
{
text: 'Deux progéniteurs sans cellule souche',
correct: false,
correction: 'Non frérot. La CSH garde justement une copie d’elle-même.'
},
{
text: 'Une cellule souche hématopoïétique et un progéniteur',
correct: true,
correction: 'Oui chef 🧠 1 CSH → 1 CSH + 1 progéniteur : autorenouvellement de maintien.'
},
{
text: 'Un précurseur et une cellule mature',
correct: false,
correction: 'Non 💀 Tu viens de sauter plusieurs étages de la différenciation.'
},
{
text: 'Deux cellules matures identiques',
correct: false,
correction: 'Non chef. Une CSH ne fait pas directement deux cellules matures.'
}
],
explanation: 'Après la naissance, la division asymétrique permet l’autorenouvellement de maintien : une CSH donne une nouvelle CSH et un progéniteur.'
},
{
id: 9,
type: 'QCM',
question: 'Quel élément est spécifiquement indispensable à l’érythropoïèse pour la synthèse de l’hémoglobine selon le cours ?',
options: [
{
text: 'Le fer',
correct: true,
correction: 'Oui chef 🩸 Le fer est indispensable à l’érythropoïèse et à la synthèse de l’hémoglobine.'
},
{
text: 'La vitamine B12 uniquement',
correct: false,
correction: 'Non frérot. B12 et B9 interviennent dans la synthèse de l’ADN et la division cellulaire de toutes les lignées.'
},
{
text: 'L’IL-7',
correct: false,
correction: 'Non 😭 L’IL-7 est un facteur multipotent agissant au niveau des progéniteurs.'
},
{
text: 'Le SCF uniquement pour la synthèse de l’hémoglobine',
correct: false,
correction: 'Non chef. Le SCF est un facteur de promotion agissant très en amont dans l’hématopoïèse.'
},
{
text: 'Le fibrinogène',
correct: false,
correction: 'Non frérot 💀 Le fibrinogène appartient au système de coagulation, pas à la synthèse de l’hémoglobine.'
}
],
explanation: 'Le fer est indispensable à l’érythropoïèse et à la synthèse de l’hémoglobine. La vitamine B6 intervient dans la synthèse de l’hème, tandis que B9 et B12 participent à la synthèse de l’ADN.'
},
{
id: 10,
type: 'QCM',
question: 'Quel phénotype immunologique caractérise les cellules souches hématopoïétiques dans le cours ?',
options: [
{
text: 'CD34- CD38+',
correct: false,
correction: 'Non chef 😭 T’as retourné les deux marqueurs.'
},
{
text: 'CD34+ CD38-',
correct: true,
correction: 'Oui chef 🧠 CSH = CD34+ CD38-. Le progéniteur devient notamment CD34+ CD38+.'
},
{
text: 'CD34- CD38- uniquement',
correct: false,
correction: 'Non frérot. Le CD34 est justement un marqueur associé à l’immaturité.'
},
{
text: 'CD45- CD34-',
correct: false,
correction: 'Non chef 💀 Le CD45 est présenté comme un marqueur des cellules hématopoïétiques.'
},
{
text: 'CD38+ sans expression de CD34',
correct: false,
correction: 'Non. Le phénotype retenu pour les CSH est CD34+ CD38-.'
}
],
explanation: 'Les CSH sont caractérisées dans le cours par un phénotype CD34+ CD38-. Elles sont également quiescentes pour environ 90 % d’entre elles et non identifiables morphologiquement.'
},
{
id: 11,
type: 'QCM',
question: 'Quels facteurs de régulation sont classés comme facteurs de promotion de l’hématopoïèse ?',
options: [
{
text: 'IL-3 et IL-7',
correct: false,
correction: 'Non chef 😭 IL-3 et IL-7 sont les facteurs multipotents du cours.'
},
{
text: 'SCF et Flt3-L',
correct: true,
correction: 'Oui chef 🧠 SCF + Flt3-L = facteurs de promotion, agissant à un stade très immature.'
},
{
text: 'Fer et vitamine B6',
correct: false,
correction: 'Non frérot. Ce sont des besoins nutritionnels de l’hématopoïèse, pas des facteurs de promotion.'
},
{
text: 'B9 et B12',
correct: false,
correction: 'Non 😭 Ce sont des vitamines nécessaires notamment à la synthèse de l’ADN.'
},
{
text: 'EDTA et citrate',
correct: false,
correction: 'Non chef 💀 Ça, ce sont des anticoagulants utilisés pour les prélèvements.'
}
],
explanation: 'Les facteurs de promotion sont le SCF et le Flt3-L. Ils agissent très en amont, sur les CSH et les progéniteurs précoces.'
},
{
id: 12,
type: 'QCM',
question: 'Quel examen permet principalement d’explorer les cellules sanguines matures ?',
options: [
{
text: 'La NFS',
correct: true,
correction: 'Oui chef 🩸 Pour les cellules matures circulantes, on commence par la NFS.'
},
{
text: 'La biopsie ostéo-médullaire uniquement',
correct: false,
correction: 'Non frérot. La BOM explore la moelle et son architecture, pas directement les cellules matures du sang périphérique.'
},
{
text: 'La culture de progéniteurs uniquement',
correct: false,
correction: 'Non chef. La culture concerne les progéniteurs hématopoïétiques.'
},
{
text: 'L’immunophénotypage exclusivement',
correct: false,
correction: 'Non 😭 L’immunophénotypage peut notamment explorer CSH et progéniteurs, mais ce n’est pas l’examen de base des cellules matures.'
},
{
text: 'Le myélogramme exclusivement',
correct: false,
correction: 'Non chef. Le myélogramme étudie surtout les précurseurs médullaires.'
}
],
explanation: 'La NFS explore les cellules matures du sang périphérique. Le myélogramme et la BOM permettent l’étude de la moelle, tandis que les CSH et progéniteurs peuvent être étudiés par culture ou immunophénotypage.'
},
{
id: 13,
type: 'QCM',
question: 'Quelle définition de l’hématocrite est correcte ?',
options: [
{
text: 'La quantité totale d’hémoglobine présente dans un globule rouge',
correct: false,
correction: 'Non chef 😭 Ça se rapproche plutôt de la TCMH.'
},
{
text: 'Le pourcentage du volume sanguin occupé par les globules rouges',
correct: true,
correction: 'Oui chef 🧠 Hématocrite = pourcentage de volume occupé par les GR dans le tube.'
},
{
text: 'Le nombre absolu de leucocytes par litre',
correct: false,
correction: 'Non frérot. Ça, c’est une donnée de la numération leucocytaire.'
},
{
text: 'Le volume moyen occupé par une plaquette',
correct: false,
correction: 'Non 💀 Le VGM concerne les globules rouges.'
},
{
text: 'Le pourcentage de fibrinogène dans le plasma',
correct: false,
correction: 'Non chef 😭 Aucun rapport avec l’hématocrite.'
}
],
explanation: 'L’hématocrite est le pourcentage du volume sanguin occupé par les globules rouges. Il ne doit pas être confondu avec la concentration d’hémoglobine.'
},
{
id: 14,
type: 'QCM',
question: 'Chez un patient présentant une nouvelle anémie non microcytaire, un taux de réticulocytes inférieur à 120 G/L oriente vers quoi selon le cours ?',
options: [
{
text: 'Une anémie régénérative d’origine périphérique',
correct: false,
correction: 'Non chef 😭 Ça, c’est lorsque les réticulocytes sont supérieurs à 120 G/L.'
},
{
text: 'Une anémie arégénérative d’origine centrale',
correct: true,
correction: 'Oui chef 🧠 <120 G/L = arégénérative = origine centrale. C’est un seuil très rentable à retenir.'
},
{
text: 'Une polyglobulie',
correct: false,
correction: 'Non frérot 💀 On parle ici d’une anémie et de sa régénération.'
},
{
text: 'Une thrombocytose',
correct: false,
correction: 'Non chef. Les réticulocytes appartiennent à la lignée érythrocytaire, pas plaquettaire.'
},
{
text: 'Une leucocytose physiologique',
correct: false,
correction: 'Non 😭 Aucun lien avec les leucocytes.'
}
],
explanation: 'Les réticulocytes nécessitent une prescription spécifique. Un taux >120 G/L oriente vers une anémie régénérative d’origine périphérique ; un taux <120 G/L vers une anémie arégénérative d’origine centrale.'
},
{
id: 15,
type: 'QCM',
question: 'Quelle proposition décrit correctement la biopsie ostéo-médullaire ?',
options: [
{
text: 'Elle récupère uniquement quelques millilitres de moelle liquide au niveau du sternum',
correct: false,
correction: 'Non chef 😭 Ça décrit plutôt la ponction médullaire.'
},
{
text: 'Elle consiste à prélever une carotte osseuse au niveau des épines iliaques',
correct: true,
correction: 'Oui chef 🦴 La BOM prélève une carotte osseuse et ne se réalise que dans les épines iliaques selon le cours.'
},
{
text: 'Elle est moins invasive que le myélogramme',
correct: false,
correction: 'Non frérot. La BOM est décrite comme plus invasive et plus chronophage.'
},
{
text: 'Elle ne permet pas d’étudier la fibrose médullaire',
correct: false,
correction: 'Non 💀 Au contraire, c’est l’un de ses gros intérêts.'
},
{
text: 'Elle permet directement d’identifier morphologiquement les cellules souches hématopoïétiques',
correct: false,
correction: 'Non chef. Ni le myélogramme ni la BOM ne permettent d’observer directement les cellules souches.'
}
],
explanation: 'La BOM est une technique invasive consistant à prélever une carotte osseuse au niveau des épines iliaques. Elle permet notamment d’étudier la richesse, la fibrose et l’architecture de la moelle.'
},
{
id: 16,
type: 'QRM',
question: 'À propos de la composition du sang, quelles propositions sont exactes ?',
options: [
{
text: 'Le plasma représente environ 55 % du volume sanguin',
correct: true,
correction: 'Oui chef 🩸 Le plasma représente environ 55 % du volume total.'
},
{
text: 'Les cellules en suspension représentent environ 45 % du volume sanguin',
correct: true,
correction: 'Exact 🧠 Le reste, environ 45 %, correspond aux éléments cellulaires en suspension.'
},
{
text: 'Le plasma contient environ 45 % de protéines',
correct: false,
correction: 'Non frérot 😭 Les protéines représentent environ 7 % du plasma.'
},
{
text: 'Les leucocytes constituent la majorité du volume plasmatique',
correct: false,
correction: 'Non chef 💀 Les leucocytes font partie des cellules en suspension, pas du plasma.'
},
{
text: 'Les hématies et les plaquettes sont des leucocytes',
correct: false,
correction: 'Non 😭 Les leucocytes correspondent aux globules blancs. Hématies et plaquettes sont deux autres catégories.'
}
],
explanation: 'Le sang comprend environ 55 % de plasma et 45 % d’éléments cellulaires. Le plasma est constitué majoritairement d’eau, avec environ 7 % de protéines.'
},
{
id: 17,
type: 'QRM',
question: 'Concernant les différents leucocytes, quelles propositions sont exactes ?',
options: [
{
text: 'Les polynucléaires neutrophiles participent à la défense contre les bactéries',
correct: true,
correction: 'Oui chef 🦠 PNN = défense antibactérienne.'
},
{
text: 'Les polynucléaires éosinophiles participent à la défense contre les parasites et aux réactions immuno-allergiques',
correct: true,
correction: 'Oui 🪱 Les éosinophiles aiment beaucoup les parasites et les histoires allergiques.'
},
{
text: 'Les polynucléaires basophiles assurent principalement le transport de l’oxygène',
correct: false,
correction: 'Non frérot 😭 Le transport de l’O₂, c’est les hématies. Les basophiles participent aux réactions immuno-allergiques.'
},
{
text: 'Les monocytes restent toute leur vie dans le sang',
correct: false,
correction: 'Non chef. Ils circulent environ 24 h puis passent dans les tissus où ils deviennent des macrophages.'
},
{
text: 'Les lymphocytes ont une durée de vie obligatoirement inférieure à 24 heures',
correct: false,
correction: 'Non 💀 Ils peuvent vivre plusieurs mois voire plusieurs années.'
}
],
explanation: 'Les neutrophiles assurent surtout la défense antibactérienne, tandis que les éosinophiles participent à la défense antiparasitaire et aux réactions immuno-allergiques.'
},
{
id: 18,
type: 'QRM',
question: 'Concernant la localisation et le renouvellement de l’hématopoïèse, quelles propositions sont exactes ?',
options: [
{
text: 'Avant la naissance, la division symétrique des CSH permet un autorenouvellement d’expansion',
correct: true,
correction: 'Oui chef 🧠 1 CSH → 2 CSH : on augmente le stock, donc expansion.'
},
{
text: 'Après la naissance, la division asymétrique permet un autorenouvellement de maintien',
correct: true,
correction: 'Exact 👌 1 CSH → 1 CSH + 1 progéniteur : on conserve le pool tout en produisant.'
},
{
text: 'Après 5 ans, l’hématopoïèse reste active dans tous les os',
correct: false,
correction: 'Non frérot 😭 Après 5 ans, elle est surtout retrouvée dans la moelle des os courts et plats.'
},
{
text: 'Avant la naissance, une division symétrique produit une CSH et un progéniteur',
correct: false,
correction: 'Non chef. Ça correspond à la division asymétrique.'
},
{
text: 'La moelle osseuse ne participe jamais à l’hématopoïèse avant la naissance',
correct: false,
correction: 'Non 💀 Elle commence progressivement à participer à partir du 5e mois.'
}
],
explanation: 'La division symétrique assure l’expansion du pool de CSH avant la naissance, tandis que la division asymétrique assure son maintien après la naissance.'
},
{
id: 19,
type: 'QRM',
question: 'Concernant les besoins nutritionnels de l’hématopoïèse, quelles propositions sont exactes ?',
options: [
{
text: 'Le fer est indispensable à l’érythropoïèse pour la synthèse de l’hémoglobine',
correct: true,
correction: 'Oui chef 🩸 Sans fer, la synthèse de l’hémoglobine commence sérieusement à tirer la gueule.'
},
{
text: 'La vitamine B6 intervient dans la synthèse de l’hème',
correct: true,
correction: 'Exact 🧠 B6 = synthèse de l’hème.'
},
{
text: 'Les vitamines B9 et B12 n’agissent que sur la lignée plaquettaire',
correct: false,
correction: 'Non frérot 😭 Elles sont nécessaires à la synthèse de l’ADN et à la division cellulaire, donc agissent sur l’ensemble des lignées.'
},
{
text: 'Le fer est uniquement nécessaire à la lymphopoïèse',
correct: false,
correction: 'Non chef 💀 Le cours le rattache spécifiquement à l’érythropoïèse et à l’hémoglobine.'
},
{
text: 'La vitamine B6 est décrite comme inutile à l’hématopoïèse',
correct: false,
correction: 'Non 😭 Elle intervient justement dans la synthèse de l’hème.'
}
],
explanation: 'Le fer est indispensable à la synthèse de l’hémoglobine, la vitamine B6 à la synthèse de l’hème, et les vitamines B9 et B12 à la synthèse de l’ADN et à la division cellulaire.'
},
{
id: 20,
type: 'QRM',
question: 'À propos des progéniteurs et précurseurs hématopoïétiques, quelles propositions sont exactes ?',
options: [
{
text: 'Les progéniteurs peuvent former des colonies in vitro',
correct: true,
correction: 'Oui chef 🧫 C’est justement une propriété utilisée pour leur exploration.'
},
{
text: 'Les précurseurs sont les premières cellules identifiables morphologiquement',
correct: true,
correction: 'Exact 🔬 À partir du précurseur, enfin le microscope commence à voir qui est qui.'
},
{
text: 'Les progéniteurs ont une capacité d’auto-renouvellement supérieure à celle des CSH',
correct: false,
correction: 'Non frérot 😭 Leur capacité d’auto-renouvellement diminue justement par rapport aux CSH.'
},
{
text: 'Les précurseurs conservent une forte capacité d’auto-renouvellement',
correct: false,
correction: 'Non chef. Le cours dit qu’ils perdent la capacité d’auto-renouvellement.'
},
{
text: 'Les progéniteurs sont facilement identifiables par leur morphologie',
correct: false,
correction: 'Non 💀 Comme les CSH, ils ne sont pas identifiables morphologiquement.'
}
],
explanation: 'Les progéniteurs possèdent une différenciation plus restreinte, peuvent former des colonies in vitro et ont un auto-renouvellement diminué. Les précurseurs sont les premières cellules reconnaissables morphologiquement.'
},
{
id: 21,
type: 'QRM',
question: 'Quelles propriétés sont attribuées aux cellules souches hématopoïétiques dans le cours ?',
options: [
{
text: 'Elles sont capables d’auto-renouvellement',
correct: true,
correction: 'Oui chef ♻️ C’est une propriété fondamentale des CSH.'
},
{
text: 'Elles sont multipotentes',
correct: true,
correction: 'Exact 🧠 Elles peuvent donner les différentes lignées sanguines.'
},
{
text: 'Environ 90 % d’entre elles sont quiescentes',
correct: true,
correction: 'Oui chef 😴 90 % en quiescence : elles ne passent clairement pas leurs journées à se diviser.'
},
{
text: 'Elles sont facilement identifiables morphologiquement sur un frottis',
correct: false,
correction: 'Non frérot 😭 Elles ne sont pas identifiables morphologiquement.'
},
{
text: 'Elles sont incapables d’être mobilisées dans le sang périphérique',
correct: false,
correction: 'Non chef. Le cours précise qu’elles peuvent être mobilisées dans le sang.'
}
],
explanation: 'Les CSH sont multipotentes, auto-renouvelables, majoritairement quiescentes et capables de reconstituer l’hématopoïèse à long terme. Elles ne sont pas reconnaissables morphologiquement.'
},
{
id: 22,
type: 'QRM',
question: 'À propos de la régulation de l’hématopoïèse, quelles propositions sont exactes ?',
options: [
{
text: 'Le SCF est un facteur de promotion',
correct: true,
correction: 'Oui chef 🧠 SCF fait partie des deux facteurs de promotion retenus.'
},
{
text: 'Flt3-L est un facteur de promotion',
correct: true,
correction: 'Exact 👌 SCF + Flt3-L, le duo qui agit très en amont.'
},
{
text: 'L’IL-3 et l’IL-7 sont décrites comme facteurs multipotents',
correct: true,
correction: 'Oui chef 🧬 Elles agissent au niveau des progéniteurs.'
},
{
text: 'Les facteurs restreints agissent exclusivement sur les CSH les plus immatures',
correct: false,
correction: 'Non frérot 😭 Ils agissent plutôt à la fin de la différenciation sur une lignée spécifique.'
},
{
text: 'Le SCF est un facteur spécifique de la seule lignée érythrocytaire',
correct: false,
correction: 'Non chef 💀 Le SCF agit très en amont et n’est pas restreint à l’érythropoïèse.'
}
],
explanation: 'SCF et Flt3-L sont des facteurs de promotion. IL-3 et IL-7 sont des facteurs multipotents. Les facteurs restreints agissent plus tardivement sur une lignée spécifique.'
},
{
id: 23,
type: 'QRM',
question: 'Concernant les principes de fonctionnement de l’hémogramme automatisé, quelles propositions sont exactes ?',
options: [
{
text: 'Le comptage cellulaire peut reposer sur l’impédancemétrie',
correct: true,
correction: 'Oui chef ⚡ Le passage de chaque cellule dans un petit orifice provoque une impulsion électrique mesurable.'
},
{
text: 'La hauteur de l’impulsion électrique est proportionnelle au volume de la cellule',
correct: true,
correction: 'Exact 🧠 Plus la cellule est grosse, plus l’impulsion mesurée est importante.'
},
{
text: 'La mesure de l’hémoglobine utilise notamment la photométrie après lyse des globules rouges',
correct: true,
correction: 'Oui chef 🔬 On lyse les GR, l’Hb colore le milieu et l’absorbance est proportionnelle à sa concentration.'
},
{
text: 'Les automates ne peuvent analyser qu’une dizaine de cellules par prélèvement',
correct: false,
correction: 'Non frérot 😭 Ils analysent plusieurs milliers de cellules.'
},
{
text: 'La NFS ne permet pas de déterminer le nombre de plaquettes',
correct: false,
correction: 'Non chef 💀 La numération porte notamment sur GR, GB et plaquettes.'
}
],
explanation: 'L’hémogramme automatisé utilise notamment l’impédancemétrie pour compter et estimer le volume des cellules. L’hémoglobine est mesurée par photométrie après lyse des globules rouges.'
},
{
id: 24,
type: 'QRM',
question: 'Concernant les pièges d’interprétation de l’hémogramme, quelles propositions sont exactes ?',
options: [
{
text: 'La grossesse peut provoquer une fausse anémie par hémodilution',
correct: true,
correction: 'Oui chef 🤰 La volémie augmente, donc l’hémodilution peut donner une impression d’anémie.'
},
{
text: 'Une déshydratation peut provoquer une fausse polyglobulie par hémoconcentration',
correct: true,
correction: 'Exact 💧 Moins de plasma, concentration apparente des cellules : fausse polyglobulie.'
},
{
text: 'Des agglutinines froides peuvent provoquer une fausse macrocytose',
correct: true,
correction: 'Oui chef 🥶 Les agglutinines froides sont un piège classique du VGM.'
},
{
text: 'Une hyponatrémie provoque typiquement une fausse macrocytose',
correct: false,
correction: 'Non frérot 😭 Le cours cite l’hyponatrémie parmi les causes exceptionnelles de fausse microcytose.'
},
{
text: 'Une CCMH supérieure à 36 g/dL traduit obligatoirement une hyperchromie vraie',
correct: false,
correction: 'Non chef 💀 Une CCMH >36 est décrite comme artéfactuelle, par exemple avec agglutinines froides ou plasma lactescent.'
}
],
explanation: 'Plusieurs situations peuvent fausser l’hémogramme : hémodilution, hémoconcentration, agglutinines froides, hyperglycémie ou encore certaines anomalies du prélèvement.'
},
{
id: 25,
type: 'QRM',
question: 'À propos du frottis sanguin, quelles propositions sont exactes ?',
options: [
{
text: 'Les globules rouges normaux sont des discocytes d’environ 7,5 µm de diamètre',
correct: true,
correction: 'Oui chef 🔬 Un GR normal est un discocyte d’environ 7,5 µm.'
},
{
text: 'Le frottis permet de rechercher des anomalies morphologiques des leucocytes',
correct: true,
correction: 'Exact 🧠 Granulation, segmentation nucléaire, cellules anormales : le microscope vient vérifier le boulot de la machine.'
},
{
text: 'En cas de thrombopénie, le frottis peut rechercher des agrégats plaquettaires',
correct: true,
correction: 'Oui chef 🩸 Avant de paniquer devant une thrombopénie, on vérifie notamment qu’EDTA n’a pas fabriqué des agrégats.'
},
{
text: 'Une érythroblastémie correspond à la présence physiologique massive de globules rouges matures',
correct: false,
correction: 'Non frérot 😭 L’érythroblastémie correspond à la présence anormale dans le sang de précurseurs érythroblastiques.'
},
{
text: 'Les plaquettes mesurent normalement entre 10 et 20 µm',
correct: false,
correction: 'Non chef 💀 10-20 µm correspond plutôt à la taille des leucocytes. Les plaquettes font environ 2 à 4 µm.'
}
],
explanation: 'Le frottis sanguin permet une étude morphologique des GR, leucocytes et plaquettes. Il peut notamment révéler des anomalies cellulaires ou des agrégats plaquettaires responsables de faux résultats.'
},
{
id: 26,
type: 'QRM',
question: 'Concernant les valeurs normales de l’hémogramme présentées dans le cours, quelles propositions sont exactes ?',
options: [
{
text: 'Les plaquettes sont normalement comprises entre 150 et 400 G/L',
correct: true,
correction: 'Oui chef 🩸 <150 G/L = thrombopénie, >400 G/L = thrombocytose.'
},
{
text: 'Les leucocytes sont normalement compris entre 4 et 10 G/L',
correct: true,
correction: 'Exact 🧠 4-10 G/L, valeur à connaître.'
},
{
text: 'Les polynucléaires neutrophiles sont normalement compris entre 1,5 et 7 G/L',
correct: true,
correction: 'Oui chef 🦠 PNN : 1,5 à 7 G/L.'
},
{
text: 'Les lymphocytes sont normalement compris entre 1,5 et 4 G/L',
correct: true,
correction: 'Exact 👌 Lymphocytes : 1,5 à 4 G/L.'
},
{
text: 'Les plaquettes sont normalement comprises entre 15 et 40 G/L',
correct: false,
correction: 'Non frérot 😭 T’as supprimé un zéro à chaque borne. C’est 150 à 400 G/L.'
}
],
explanation: 'Les valeurs données sont notamment : plaquettes 150-400 G/L, leucocytes 4-10 G/L, PNN 1,5-7 G/L et lymphocytes 1,5-4 G/L.'
},
{
id: 27,
type: 'QRM',
question: 'Concernant le myélogramme, quelles propositions sont exactes ?',
options: [
{
text: 'Il peut être réalisé à partir d’une ponction sternale',
correct: true,
correction: 'Oui chef 🦴 Le sternum est l’un des deux grands sites de ponction médullaire.'
},
{
text: 'Il peut être réalisé à partir d’une ponction au niveau de l’épine iliaque',
correct: true,
correction: 'Exact 👌 L’épine iliaque est l’autre site cité.'
},
{
text: 'La moelle prélevée est étalée sur lame et colorée en MGG',
correct: true,
correction: 'Oui chef 🔬 Frottis médullaire + coloration MGG + microscope.'
},
{
text: 'La présence de mégacaryocytes confirme que l’échantillon contient bien de la moelle osseuse',
correct: true,
correction: 'Exact 🧠 Ils sont trop gros pour circuler normalement dans le sang, donc en voir est un bon signe que t’as vraiment aspiré de la moelle.'
},
{
text: 'Le myélogramme permet toujours d’observer directement les cellules souches hématopoïétiques',
correct: false,
correction: 'Non frérot 😭 Les CSH ne sont pas identifiables morphologiquement sur le myélogramme.'
}
],
explanation: 'Le myélogramme repose sur une ponction médullaire sternale ou iliaque, avec réalisation de frottis colorés au MGG. Il permet notamment d’étudier la richesse, les différentes lignées, les mégacaryocytes et d’éventuelles cellules malignes.'
},
{
id: 28,
type: 'QRM',
question: 'À propos de la biopsie ostéo-médullaire, quelles propositions sont exactes ?',
options: [
{
text: 'Elle est plus invasive que le myélogramme',
correct: true,
correction: 'Oui chef 🦴 La BOM est plus invasive et plus chronophage.'
},
{
text: 'Elle permet une bonne évaluation de la richesse médullaire',
correct: true,
correction: 'Exact 🧠 C’est même un de ses gros avantages.'
},
{
text: 'Elle permet d’étudier la fibrose médullaire',
correct: true,
correction: 'Oui chef 🔬 Suspicion de fibrose ? La BOM devient très intéressante.'
},
{
text: 'Elle permet d’étudier l’architecture globale de la moelle osseuse',
correct: true,
correction: 'Exact 👌 Là où le myélogramme donne surtout des cellules, la BOM montre l’architecture.'
},
{
text: 'Elle se réalise préférentiellement au niveau du sternum',
correct: false,
correction: 'Non frérot 😭 Contrairement à la ponction médullaire, la BOM se réalise uniquement dans les épines iliaques selon le cours.'
}
],
explanation: 'La BOM est plus invasive mais fournit une meilleure étude de la richesse, de la fibrose et de l’architecture médullaire. Elle est réalisée au niveau des épines iliaques.'
},
{
id: 29,
type: 'QRM',
question: 'Concernant l’immunophénotypage par cytométrie en flux, quelles propositions sont exactes ?',
options: [
{
text: 'Il peut analyser des milliers de cellules par seconde',
correct: true,
correction: 'Oui chef ⚡ La cytométrie en flux ne traîne clairement pas : des milliers de cellules analysées chaque seconde.'
},
{
text: 'Il peut étudier la taille et la granularité des cellules',
correct: true,
correction: 'Exact 🧠 Ces caractéristiques participent au classement des populations cellulaires.'
},
{
text: 'Des anticorps couplés à des composés fluorescents peuvent détecter des antigènes cellulaires',
correct: true,
correction: 'Oui chef 🌈 Anticorps fluorescent + antigène = marquage détectable par l’appareil.'
},
{
text: 'L’intensité de fluorescence est proportionnelle à l’intensité du marquage antigénique',
correct: true,
correction: 'Exact 👌 Plus ça fluoresce, plus le marquage antigénique est important.'
},
{
text: 'Le CD34 est présenté comme un marqueur spécifique des cellules sanguines totalement matures',
correct: false,
correction: 'Non frérot 😭 Le CD34 est au contraire présenté comme un marqueur d’immaturité.'
}
],
explanation: 'La cytométrie en flux analyse rapidement les caractéristiques individuelles des cellules, notamment taille, granularité et antigènes détectés par fluorescence. Le CD45 marque les cellules hématopoïétiques et le CD34 l’immaturité.'
},
{
id: 30,
type: 'QRM',
question: 'À propos de la culture des progéniteurs et de son utilisation dans les autogreffes, quelles propositions sont exactes ?',
options: [
{
text: 'Les progéniteurs peuvent être cultivés à 37 °C en présence de facteurs de croissance hématopoïétiques',
correct: true,
correction: 'Oui chef 🧫 On leur prépare le petit spa à 37 °C avec facteurs de croissance.'
},
{
text: 'L’apparition des colonies nécessite environ 7 à 14 jours',
correct: true,
correction: 'Exact ⏱️ Pas 24 heures, pas demain matin : il faut environ une à deux semaines.'
},
{
text: 'La morphologie des colonies peut aider à identifier le type de progéniteur initial',
correct: true,
correction: 'Oui chef 🔬 La forme des colonies donne des informations sur le progéniteur qui les a produites.'
},
{
text: 'Lors d’une autogreffe, les propres cellules souches du patient peuvent être réinjectées après chimiothérapie intensive pour relancer l’hématopoïèse',
correct: true,
correction: 'Exact 🧠 On congèle le greffon, chimiothérapie intensive, puis réinjection des cellules souches pour relancer plus vite l’hématopoïèse.'
},
{
text: 'Lors d’une autogreffe, le principe est de réinjecter uniquement des cellules sanguines matures provenant d’un donneur',
correct: false,
correction: 'Non frérot 😭 Auto-greffe = propres cellules du patient, et on cherche justement des cellules hématopoïétiques immatures.'
}
],
explanation: 'Les progéniteurs peuvent former des colonies après 7 à 14 jours de culture à 37 °C avec facteurs de croissance. Ces cultures servent notamment à évaluer les greffons utilisés lors des autogreffes de cellules souches hématopoïétiques.'
}
];
