export const meta = {
title: 'HÉMATOPOÏÈSE',
}

export default [
{
id: 1,
type: 'QCM',
question: 'Quel volume sanguin moyen est retenu chez l’être humain dans le cours ?',
options: [
{
text: 'Environ 70 mL/kg',
correct: true,
correction: 'Oui boss 🧠 70 mL/kg, valeur de base à verrouiller.'
},
{
text: 'Environ 7 mL/kg',
correct: false,
correction: 'Non chef 😭 Tu viens de diviser la volémie par dix.'
},
{
text: 'Environ 170 mL/kg',
correct: false,
correction: 'Faux. Le support retient environ 70 mL/kg.'
},
{
text: 'Environ 700 mL/kg',
correct: false,
correction: 'Aïe 💀 Là on aurait quelques problèmes de place.'
},
{
text: 'Le volume sanguin ne dépend jamais du poids',
correct: false,
correction: 'Non. Le cours donne justement une estimation rapportée au poids : 70 mL/kg.'
}
],
explanation: 'Le volume sanguin est estimé à environ 70 mL/kg. Le cours donne également environ 5 à 6 L chez l’homme, 4 à 5 L chez la femme et 0,25 L chez le nouveau-né.'
},
{
id: 2,
type: 'QRM',
question: 'Parmi les fonctions suivantes, lesquelles sont attribuées au sang dans le cours ?',
options: [
{
text: 'Transporter rapidement l’oxygène et les nutriments vers les tissus',
correct: true,
correction: 'Oui boss 🧠 Le sang sert notamment d’autoroute à l’O₂ et aux nutriments.'
},
{
text: 'Participer à l’élimination des déchets de l’organisme',
correct: true,
correction: 'Exact. Le cours lui attribue aussi une fonction de détoxification.'
},
{
text: 'Produire directement toutes les cellules sanguines dans les vaisseaux',
correct: false,
correction: 'Non chef 😭 La production se fait principalement dans la moelle osseuse.'
},
{
text: 'Assurer uniquement le transport de l’oxygène',
correct: false,
correction: 'Faux. Il transporte aussi nutriments, éléments immunitaires et messagers chimiques.'
},
{
text: 'Remplacer la fonction de la moelle osseuse',
correct: false,
correction: 'Non 💀 Le sang transporte les cellules matures ; la moelle assure leur production.'
}
],
explanation: 'Le sang transporte oxygène, nutriments, cellules immunitaires et messagers chimiques, tout en participant à l’élimination des déchets.'
},
{
id: 3,
type: 'QCM',
question: 'Quelle est la plage normale du pH sanguin indiquée dans le cours ?',
options: [
{
text: '6,50 à 7,00',
correct: false,
correction: 'Non chef 😭 C’était justement un piège des QCM du support.'
},
{
text: '7,00 à 7,20',
correct: false,
correction: 'Faux. La plage retenue est plus étroite et plus élevée.'
},
{
text: '7,35 à 7,45',
correct: true,
correction: 'Oui boss 🎯 7,35–7,45. Valeur ultra classique.'
},
{
text: '7,60 à 7,80',
correct: false,
correction: 'Non. Le support retient 7,35 à 7,45.'
},
{
text: '8,00 à 8,50',
correct: false,
correction: 'Mais frr 💀 Non.'
}
],
explanation: 'Le pH sanguin normal est compris entre 7,35 et 7,45.'
},
{
id: 4,
type: 'QRM',
question: 'Concernant la composition globale du sang, quelles propositions sont exactes ?',
options: [
{
text: 'Le plasma représente environ 55 % du sang',
correct: true,
correction: 'Oui boss 🧠 Plasma = environ 55 %.'
},
{
text: 'Les cellules en suspension représentent environ 45 % du sang',
correct: true,
correction: 'Exact. 55 + 45, le compte est bon chef.'
},
{
text: 'Le plasma représente environ 10 % du sang',
correct: false,
correction: 'Non 😭 Le support indique 55 %.'
},
{
text: 'Les cellules représentent environ 90 % du sang',
correct: false,
correction: 'Faux. Elles représentent environ 45 %.'
},
{
text: 'Le sang ne contient pas de phase liquide',
correct: false,
correction: 'Non chef 💀 Le plasma constitue précisément cette phase liquide.'
}
],
explanation: 'Le sang est constitué d’environ 55 % de plasma et 45 % d’éléments cellulaires en suspension.'
},
{
id: 5,
type: 'QCM',
question: 'Quelle différence permet de distinguer correctement le plasma du sérum ?',
options: [
{
text: 'Le plasma conserve notamment le fibrinogène, contrairement au sérum',
correct: true,
correction: 'Oui boss 🧠 Plasma = facteurs de coagulation conservés ; sérum = après coagulation.'
},
{
text: 'Le sérum contient davantage de fibrinogène que le plasma',
correct: false,
correction: 'Non chef 😭 Le fibrinogène est consommé lors de la coagulation.'
},
{
text: 'Le plasma est obtenu uniquement après coagulation complète',
correct: false,
correction: 'Faux. Il est obtenu dans un tube contenant un anticoagulant.'
},
{
text: 'Le sérum est obtenu dans un tube contenant obligatoirement un anticoagulant',
correct: false,
correction: 'Non. Pour obtenir le sérum, on laisse justement coaguler le sang.'
},
{
text: 'Plasma et sérum sont strictement identiques',
correct: false,
correction: 'Non chef 💀 Le fibrinogène vient précisément ruiner cette proposition.'
}
],
explanation: 'Le plasma est obtenu en présence d’un anticoagulant et conserve les facteurs de coagulation. Le sérum est le liquide restant après coagulation, avec consommation notamment du fibrinogène.'
},
{
id: 6,
type: 'QRM',
question: 'Concernant la composition du plasma, quelles propositions sont exactes ?',
options: [
{
text: 'Il contient environ 91,5 % d’eau',
correct: true,
correction: 'Oui boss 💧 91,5 %, détail chiffré de rat mais parfaitement tombable.'
},
{
text: 'Il contient environ 7 % de protéines',
correct: true,
correction: 'Exact 🧠 Le support cite notamment l’albumine.'
},
{
text: 'Il contient environ 45 % de protéines',
correct: false,
correction: 'Non chef. Les protéines représentent environ 7 % du plasma.'
},
{
text: 'Il ne contient aucun électrolyte',
correct: false,
correction: 'Faux. Les autres solutés comprennent notamment des électrolytes.'
},
{
text: 'L’eau ne représente qu’environ 10 % du plasma',
correct: false,
correction: 'Non 😭 Elle représente l’immense majorité : 91,5 %.'
}
],
explanation: 'Le plasma contient environ 91,5 % d’eau, 7 % de protéines et 1,5 % d’autres solutés comme électrolytes, nutriments et vitamines.'
},
{
id: 7,
type: 'QCM',
question: 'Quelle est la durée de vie approximative d’un globule rouge indiquée dans le cours ?',
options: [
{
text: '7 jours',
correct: false,
correction: 'Non chef. 7 jours correspond plutôt aux plaquettes dans le support.'
},
{
text: '10 heures',
correct: false,
correction: 'Faux. 10 heures est la durée sanguine donnée pour les neutrophiles.'
},
{
text: '24 à 48 heures',
correct: false,
correction: 'Non. Ce chiffre est notamment associé aux monocytes dans le sang.'
},
{
text: '120 jours',
correct: true,
correction: 'Oui boss 🎯 GR = environ 120 jours.'
},
{
text: 'Plusieurs années',
correct: false,
correction: 'Non chef. Certains lymphocytes peuvent vivre très longtemps, pas les hématies.'
}
],
explanation: 'Les globules rouges, aussi appelés hématies ou érythrocytes, ont une durée de vie d’environ 120 jours.'
},
{
id: 8,
type: 'QRM',
question: 'Quelles associations cellule-fonction sont exactes ?',
options: [
{
text: 'Globules rouges — transport de l’oxygène',
correct: true,
correction: 'Oui boss 🧠 C’est leur fonction principale retenue ici.'
},
{
text: 'Plaquettes — hémostase primaire',
correct: true,
correction: 'Exact. Premier bouchon au niveau d’une lésion vasculaire.'
},
{
text: 'Globules rouges — défense antibactérienne principale',
correct: false,
correction: 'Non chef 😭 La défense antibactérienne implique notamment les PNN.'
},
{
text: 'Plaquettes — transport principal de l’oxygène',
correct: false,
correction: 'Faux. Le transport de l’O₂ est assuré par les GR.'
},
{
text: 'Leucocytes — synthèse principale de l’hémoglobine circulante',
correct: false,
correction: 'Non 💀 L’hémoglobine concerne la lignée érythrocytaire.'
}
],
explanation: 'Les GR transportent l’oxygène, les leucocytes assurent la défense et les plaquettes participent à l’hémostase primaire.'
},
{
id: 9,
type: 'QCM',
question: 'Quelle durée de vie approximative est donnée pour les plaquettes ?',
options: [
{
text: '10 heures',
correct: false,
correction: 'Non chef. Ça correspond aux PNN dans le sang.'
},
{
text: '24 heures',
correct: false,
correction: 'Non.'
},
{
text: '7 jours',
correct: true,
correction: 'Oui boss 🎯 Plaquettes = environ 7 jours.'
},
{
text: '120 jours',
correct: false,
correction: 'Non. Ça, c’est le GR.'
},
{
text: 'Plusieurs années',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'Le support retient une durée de vie approximative de 7 jours pour les plaquettes.'
},
{
id: 10,
type: 'QRM',
question: 'Parmi les cellules suivantes, lesquelles appartiennent aux leucocytes ?',
options: [
{
text: 'Les polynucléaires neutrophiles',
correct: true,
correction: 'Oui boss 🧠 PNN = une catégorie de leucocytes.'
},
{
text: 'Les monocytes',
correct: true,
correction: 'Exact. Ce sont des cellules mononucléées appartenant aux GB.'
},
{
text: 'Les hématies',
correct: false,
correction: 'Non chef. Hématies = globules rouges.'
},
{
text: 'Les plaquettes',
correct: false,
correction: 'Faux. Elles constituent une autre catégorie d’éléments sanguins.'
},
{
text: 'Les réticulocytes uniquement',
correct: false,
correction: 'Non. Les réticulocytes appartiennent à la lignée érythrocytaire.'
}
],
explanation: 'Les leucocytes regroupent notamment polynucléaires, monocytes et lymphocytes.'
},
{
id: 11,
type: 'QCM',
question: 'Combien de temps environ un polynucléaire neutrophile reste-t-il dans le sang ?',
options: [
{
text: '10 heures',
correct: true,
correction: 'Oui boss 🎯 Environ 10 h dans le sang.'
},
{
text: '10 jours',
correct: false,
correction: 'Non chef 😭 Le passage sanguin est beaucoup plus court.'
},
{
text: '24 jours',
correct: false,
correction: 'Faux.'
},
{
text: '120 jours',
correct: false,
correction: 'Non. Ça correspond aux globules rouges.'
},
{
text: 'Plusieurs années',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le PNN reste environ 10 heures dans le sang avant de pouvoir rejoindre les tissus.'
},
{
id: 12,
type: 'QRM',
question: 'À propos des polynucléaires neutrophiles, quelles propositions sont exactes ?',
options: [
{
text: 'Ils participent à la défense contre les bactéries',
correct: true,
correction: 'Oui boss 🧠 C’est leur rôle principal cité.'
},
{
text: 'Dans les tissus, leur durée de vie est d’environ 24 heures avec un maximum autour de 48 heures',
correct: true,
correction: 'Exact. 24 h typiques, maximum environ 48 h.'
},
{
text: 'Ils restent plusieurs années dans le sang',
correct: false,
correction: 'Non chef 💀 Environ 10 heures seulement.'
},
{
text: 'Ils ont pour rôle principal la défense antiparasitaire',
correct: false,
correction: 'Faux. Ça correspond plutôt aux éosinophiles.'
},
{
text: 'Ils sont dépourvus de granulations cytoplasmiques',
correct: false,
correction: 'Non. Les polynucléaires sont décrits avec des granulations.'
}
],
explanation: 'Les PNN circulent brièvement dans le sang, rejoignent les tissus et jouent un rôle majeur dans la défense antibactérienne.'
},
{
id: 13,
type: 'QCM',
question: 'Quel rôle est particulièrement associé aux polynucléaires éosinophiles ?',
options: [
{
text: 'Défense contre les parasites et réactions immuno-allergiques',
correct: true,
correction: 'Oui boss 🧠 PNE = parasites + immuno-allergie.'
},
{
text: 'Transport de l’oxygène',
correct: false,
correction: 'Non chef. Ça, c’est le job des hématies.'
},
{
text: 'Hémostase primaire',
correct: false,
correction: 'Faux. Plaquettes.'
},
{
text: 'Production des anticorps circulants exclusivement',
correct: false,
correction: 'Non. Le cours associe plutôt l’immunité humorale aux lymphocytes B.'
},
{
text: 'Formation du fibrinogène',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Les éosinophiles interviennent dans la défense antiparasitaire et dans les réactions immuno-allergiques ; leur augmentation peut accompagner une parasitose.'
},
{
id: 14,
type: 'QRM',
question: 'Concernant les monocytes, quelles propositions sont exactes ?',
options: [
{
text: 'Ils restent environ 24 à 48 heures dans le sang',
correct: true,
correction: 'Oui boss 🧠 24–48 h dans le compartiment sanguin.'
},
{
text: 'Après passage dans les tissus, ils peuvent se transformer en macrophages',
correct: true,
correction: 'Exact. Et les macrophages peuvent ensuite vivre plusieurs mois.'
},
{
text: 'Ils ont une durée sanguine habituelle de 120 jours',
correct: false,
correction: 'Non chef. 120 jours, c’est l’hématie.'
},
{
text: 'Ils deviennent des plaquettes dans les tissus',
correct: false,
correction: 'Faux 💀 Rien à voir.'
},
{
text: 'Ils ne participent jamais à la réaction immunitaire',
correct: false,
correction: 'Non. Le cours leur attribue justement un rôle immunitaire.'
}
],
explanation: 'Les monocytes circulent 24 à 48 h puis peuvent gagner les tissus et devenir des macrophages, impliqués dans la destruction d’agents infectieux et de cellules anormales.'
},
{
id: 15,
type: 'QCM',
question: 'Quel type de lymphocyte est principalement associé à la réaction immunitaire humorale dans le cours ?',
options: [
{
text: 'Le lymphocyte B',
correct: true,
correction: 'Oui boss 🧠 B = immunité humorale.'
},
{
text: 'Le lymphocyte T',
correct: false,
correction: 'Non chef. Le support associe surtout les T à l’immunité tissulaire/cellulaire.'
},
{
text: 'Le monocyte',
correct: false,
correction: 'Faux.'
},
{
text: 'Le neutrophile',
correct: false,
correction: 'Non.'
},
{
text: 'La plaquette',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'Le cours associe les lymphocytes B à la réaction immunitaire humorale et les lymphocytes T à l’immunité tissulaire/cellulaire.'
},
{
id: 16,
type: 'QRM',
question: 'Concernant les lymphocytes, quelles propositions sont exactes ?',
options: [
{
text: 'Ils recirculent entre le sang, les tissus et les organes lymphoïdes périphériques',
correct: true,
correction: 'Oui boss 🧠 Les ganglions font notamment partie de leur circuit.'
},
{
text: 'Leur durée de vie peut atteindre plusieurs mois ou plusieurs années',
correct: true,
correction: 'Exact. Sacrée longévité comparée au PNN 😭.'
},
{
text: 'Ils restent obligatoirement moins de 10 heures dans le sang',
correct: false,
correction: 'Non chef. Cette durée est associée aux neutrophiles.'
},
{
text: 'Ils ne passent jamais dans les organes lymphoïdes',
correct: false,
correction: 'Faux.'
},
{
text: 'Ils sont responsables uniquement de l’hémostase primaire',
correct: false,
correction: 'Non 💀 Ça, c’est les plaquettes.'
}
],
explanation: 'Les lymphocytes sont des cellules à longue durée de vie capables de recirculer entre sang, tissus et organes lymphoïdes périphériques.'
},
{
id: 17,
type: 'QCM',
question: 'Quelle définition correspond à l’hématopoïèse ?',
options: [
{
text: 'Le processus de fabrication et de renouvellement de l’ensemble des cellules sanguines',
correct: true,
correction: 'Oui boss 🧠 Définition centrale du cours.'
},
{
text: 'La destruction exclusive des globules rouges',
correct: false,
correction: 'Non chef.'
},
{
text: 'La coagulation du plasma',
correct: false,
correction: 'Faux.'
},
{
text: 'La production exclusive des lymphocytes',
correct: false,
correction: 'Non. Ça correspondrait seulement à une lignée.'
},
{
text: 'Le passage des leucocytes dans les tissus',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'L’hématopoïèse correspond à la fabrication et au renouvellement de toutes les cellules du sang à partir des cellules souches hématopoïétiques.'
},
{
id: 18,
type: 'QRM',
question: 'À propos des cellules souches hématopoïétiques, quelles propositions sont exactes ?',
options: [
{
text: 'Elles sont multipotentes',
correct: true,
correction: 'Oui boss 🧠 Multipotentes, surtout pas totipotentes.'
},
{
text: 'Elles peuvent donner naissance à toutes les lignées sanguines matures',
correct: true,
correction: 'Exact. C’est leur grosse propriété fonctionnelle.'
},
{
text: 'Elles sont totipotentes',
correct: false,
correction: 'Non chef 😭 Piège explicitement signalé dans le cours.'
},
{
text: 'Elles ne peuvent jamais se différencier',
correct: false,
correction: 'Faux.'
},
{
text: 'Elles circulent uniquement comme cellules matures dans le sang',
correct: false,
correction: 'Non. Leur localisation principale étudiée est la moelle osseuse.'
}
],
explanation: 'Les CSH sont indifférenciées, multipotentes et capables de générer toutes les lignées sanguines, sans être totipotentes.'
},
{
id: 19,
type: 'QCM',
question: 'À quel moment le pool de cellules souches hématopoïétiques est-il principalement constitué selon le cours ?',
options: [
{
text: 'Principalement avant la naissance',
correct: true,
correction: 'Oui boss 🧠 Le gros du stock est constitué avant la naissance.'
},
{
text: 'Uniquement après 80 ans',
correct: false,
correction: 'Non chef.'
},
{
text: 'Uniquement à partir de l’adolescence',
correct: false,
correction: 'Faux.'
},
{
text: 'Exclusivement pendant les infections',
correct: false,
correction: 'Non.'
},
{
text: 'Le pool n’est jamais constitué',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'À l’âge adulte, la production de nouvelles CSH est très faible : le pool est principalement constitué avant la naissance puis entretenu.'
},
{
id: 20,
type: 'QRM',
question: 'Concernant la localisation de l’hématopoïèse avant la naissance, quelles propositions sont exactes ?',
options: [
{
text: 'Elle débute dans la région para-aortique pendant les deux premiers mois',
correct: true,
correction: 'Oui boss 🧠 Début para-aortique pendant les deux premiers mois.'
},
{
text: 'Entre le 2e et le 7e mois, elle se déroule principalement dans le foie et la rate',
correct: true,
correction: 'Exact. Chronologie à connaître.'
},
{
text: 'Elle se déroule exclusivement dans les os plats dès la première semaine',
correct: false,
correction: 'Non chef.'
},
{
text: 'Le foie ne participe jamais à l’hématopoïèse fœtale',
correct: false,
correction: 'Faux.'
},
{
text: 'La région para-aortique n’intervient qu’après la naissance',
correct: false,
correction: 'Non 😭 C’est justement une localisation précoce.'
}
],
explanation: 'L’hématopoïèse commence en région para-aortique, puis se déplace surtout vers le foie et la rate entre les 2e et 7e mois.'
},
{
id: 21,
type: 'QCM',
question: 'À partir de quel mois l’hématopoïèse commence-t-elle progressivement dans la moelle osseuse ?',
options: [
{
text: 'À partir du 1er mois',
correct: false,
correction: 'Non chef.'
},
{
text: 'À partir du 2e mois',
correct: false,
correction: 'Faux.'
},
{
text: 'À partir du 5e mois',
correct: true,
correction: 'Oui boss 🎯 À partir du 5e mois.'
},
{
text: 'À partir du 9e mois uniquement',
correct: false,
correction: 'Non.'
},
{
text: 'Uniquement après la naissance',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'À partir du 5e mois, la moelle osseuse commence progressivement à prendre le relais de l’hématopoïèse.'
},
{
id: 22,
type: 'QRM',
question: 'Concernant les modes de division des CSH avant et après la naissance, quelles propositions sont exactes ?',
options: [
{
text: 'Avant la naissance, la division est surtout symétrique : une CSH donne deux CSH',
correct: true,
correction: 'Oui boss 🧠 C’est l’autorenouvellement d’expansion.'
},
{
text: 'Après la naissance, la division est surtout asymétrique : une CSH donne une CSH et un progéniteur',
correct: true,
correction: 'Exact. C’est l’autorenouvellement de maintien.'
},
{
text: 'Avant la naissance, une CSH donne systématiquement deux cellules matures',
correct: false,
correction: 'Non chef.'
},
{
text: 'Après la naissance, toute CSH disparaît à chaque division',
correct: false,
correction: 'Faux.'
},
{
text: 'La division asymétrique sert uniquement à faire deux CSH identiques',
correct: false,
correction: 'Non 😭 Ça décrit plutôt la division symétrique.'
}
],
explanation: 'Avant la naissance, la division symétrique augmente le pool de CSH. Après la naissance, la division asymétrique permet de maintenir le stock tout en produisant un progéniteur.'
},
{
id: 23,
type: 'QCM',
question: 'Avant quel âge l’activité hématopoïétique est-elle décrite comme présente dans tous les os ?',
options: [
{
text: 'Avant 1 an',
correct: false,
correction: 'Non chef.'
},
{
text: 'Avant 5 ans',
correct: true,
correction: 'Oui boss 🎯 Avant 5 ans, tous les os participent.'
},
{
text: 'Avant 15 ans',
correct: false,
correction: 'Faux.'
},
{
text: 'Avant 30 ans',
correct: false,
correction: 'Non.'
},
{
text: 'Elle reste présente dans tous les os toute la vie',
correct: false,
correction: 'Non chef. Après 5 ans, la localisation se restreint.'
}
],
explanation: 'Avant 5 ans, l’activité hématopoïétique est présente dans tous les os. Ensuite, elle se concentre dans certains os courts et plats.'
},
{
id: 24,
type: 'QRM',
question: 'Après l’âge de 5 ans, quels sites sont cités comme sièges d’une activité hématopoïétique ?',
options: [
{
text: 'Le sternum',
correct: true,
correction: 'Oui boss 🧠 Le sternum fait partie des sites actifs.'
},
{
text: 'Les crêtes iliaques',
correct: true,
correction: 'Exact. Site important aussi pour les prélèvements médullaires.'
},
{
text: 'Toutes les phalanges de façon équivalente',
correct: false,
correction: 'Non chef.'
},
{
text: 'Tous les os longs sur toute leur longueur',
correct: false,
correction: 'Faux.'
},
{
text: 'Uniquement la mandibule',
correct: false,
correction: 'Non.'
}
],
explanation: 'Après 5 ans, l’hématopoïèse est surtout retrouvée dans la moelle des os courts et plats : sternum, bassin, vertèbres, crêtes iliaques, côtes et crâne.'
},
{
id: 25,
type: 'QCM',
question: 'Quel ordre de différenciation est correct ?',
options: [
{
text: 'Cellules souches → progéniteurs → précurseurs → cellules matures',
correct: true,
correction: 'Oui boss 🧠 C’est la progression à réciter sans réfléchir.'
},
{
text: 'Cellules matures → précurseurs → progéniteurs → cellules souches',
correct: false,
correction: 'Non chef 😭 T’as remonté l’arbre à l’envers.'
},
{
text: 'Progéniteurs → cellules matures → CSH → précurseurs',
correct: false,
correction: 'Faux.'
},
{
text: 'Précurseurs → CSH → cellules matures → progéniteurs',
correct: false,
correction: 'Non.'
},
{
text: 'Il n’existe aucun ordre de différenciation',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Au cours de l’hématopoïèse, les cellules deviennent progressivement plus différenciées : CSH, progéniteurs, précurseurs puis cellules matures.'
},
{
id: 26,
type: 'QRM',
question: 'Quelles associations entre processus hématopoïétique et cellule finale sont exactes ?',
options: [
{
text: 'Érythropoïèse — globules rouges',
correct: true,
correction: 'Oui boss 🧠 Érythropoïèse = GR.'
},
{
text: 'Mégacaryocytopoïèse — plaquettes',
correct: true,
correction: 'Exact. Nom long, piège facile à rentabiliser.'
},
{
text: 'Lymphopoïèse — monocytes',
correct: false,
correction: 'Non chef 😭 Lymphopoïèse = lymphocytes.'
},
{
text: 'Monocytopoïèse — polynucléaires',
correct: false,
correction: 'Faux. Monocytopoïèse = monocytes.'
},
{
text: 'Granulopoïèse — globules rouges',
correct: false,
correction: 'Non. Granulopoïèse concerne les polynucléaires.'
}
],
explanation: 'Chaque lignée possède son nom : érythropoïèse, granulopoïèse, monocytopoïèse, lymphopoïèse et mégacaryocytopoïèse.'
},
{
id: 27,
type: 'QCM',
question: 'Lequel des éléments suivants appartient au microenvironnement médullaire décrit dans le cours ?',
options: [
{
text: 'Les cellules stromales',
correct: true,
correction: 'Oui boss 🧠 Elles participent à la niche hématopoïétique.'
},
{
text: 'Uniquement les hématies circulantes',
correct: false,
correction: 'Non chef.'
},
{
text: 'Uniquement les plaquettes matures',
correct: false,
correction: 'Faux.'
},
{
text: 'Uniquement le plasma',
correct: false,
correction: 'Non.'
},
{
text: 'Aucune innervation',
correct: false,
correction: 'Non chef 😭 Le système nerveux sympathique est justement cité.'
}
],
explanation: 'Le microenvironnement médullaire comprend notamment matrice, cellules stromales, facteurs de croissance, cytokines et innervation sympathique.'
},
{
id: 28,
type: 'QRM',
question: 'Concernant les besoins nutritionnels de l’hématopoïèse, quelles propositions sont exactes ?',
options: [
{
text: 'Le fer est indispensable à l’érythropoïèse pour la synthèse de l’hémoglobine',
correct: true,
correction: 'Oui boss 🧠 Fer → hémoglobine → érythropoïèse.'
},
{
text: 'La vitamine B6 participe à la synthèse de l’hème',
correct: true,
correction: 'Exact. Petit détail bien méchant à connaître.'
},
{
text: 'La vitamine B6 n’intervient jamais dans la lignée érythrocytaire',
correct: false,
correction: 'Non chef.'
},
{
text: 'Le fer est inutile à l’hématopoïèse',
correct: false,
correction: 'Faux.'
},
{
text: 'L’hème n’entre pas dans la constitution de l’hémoglobine',
correct: false,
correction: 'Non 😭 Le support dit l’inverse.'
}
],
explanation: 'Le fer est nécessaire à la synthèse de l’hémoglobine et la vitamine B6 participe à la synthèse de l’hème.'
},
{
id: 29,
type: 'QCM',
question: 'Quelle fonction commune des vitamines B9 et B12 est particulièrement soulignée dans le cours ?',
options: [
{
text: 'Elles sont indispensables à la synthèse de l’ADN et à la division cellulaire',
correct: true,
correction: 'Oui boss 🧠 Et la prof prévient que ça tombe TOUJOURS en QCM.'
},
{
text: 'Elles sont uniquement nécessaires au transport de l’oxygène',
correct: false,
correction: 'Non chef.'
},
{
text: 'Elles agissent uniquement sur les plaquettes',
correct: false,
correction: 'Faux.'
},
{
text: 'Elles bloquent la division cellulaire',
correct: false,
correction: 'Non.'
},
{
text: 'Elles sont inutiles à l’hématopoïèse',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'Les vitamines B9 et B12 sont indispensables à la synthèse de l’ADN et à la division cellulaire. Elles agissent sur l’ensemble des lignées.'
},
{
id: 30,
type: 'QRM',
question: 'Concernant les vitamines B9 et B12, quelles propositions sont exactes ?',
options: [
{
text: 'Elles participent à la synthèse de l’ADN',
correct: true,
correction: 'Oui boss 🧠 Première notion à connaître.'
},
{
text: 'Elles sont nécessaires à la division cellulaire',
correct: true,
correction: 'Exact.'
},
{
text: 'Elles sont appelées vitamines anti-mégaloblastiques dans le cours',
correct: true,
correction: 'Oui. Formulation de prof typiquement recyclable en QCM.'
},
{
text: 'Elles n’agissent que sur la lignée érythrocytaire',
correct: false,
correction: 'Non chef 💀 Elles agissent sur l’ensemble des lignées.'
},
{
text: 'Elles sont facultatives pour l’hématopoïèse',
correct: false,
correction: 'Faux.'
}
],
explanation: 'B9 et B12 sont indispensables à la synthèse de l’ADN et à la division cellulaire, d’où leur impact sur l’ensemble des lignées hématopoïétiques.'
},
{
id: 31,
type: 'QCM',
question: 'Quelle condition physicochimique est décrite au fond des niches hématopoïétiques ?',
options: [
{
text: 'Une hypoxie autour de 1,5 % d’O₂',
correct: true,
correction: 'Oui boss 🧠 La niche profonde est décrite comme très hypoxique.'
},
{
text: 'Une hyperoxie à 100 % d’O₂',
correct: false,
correction: 'Non chef 😭 C’est précisément l’inverse.'
},
{
text: 'Une absence totale d’oxygène obligatoire',
correct: false,
correction: 'Faux.'
},
{
text: 'Une concentration d’O₂ identique à l’air ambiant',
correct: false,
correction: 'Non.'
},
{
text: 'Une hypercapnie comme unique besoin',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le support décrit une hypoxie au fond des niches hématopoïétiques, autour de 1,5 % d’O₂.'
},
{
id: 32,
type: 'QRM',
question: 'Quelles cellules appartiennent à la lignée myéloïde selon le cours ?',
options: [
{
text: 'Les globules rouges',
correct: true,
correction: 'Oui boss 🧠 Les GR sont issus du progéniteur myéloïde.'
},
{
text: 'Les plaquettes',
correct: true,
correction: 'Exact.'
},
{
text: 'Les monocytes',
correct: true,
correction: 'Oui. Eux aussi sont myéloïdes.'
},
{
text: 'Les lymphocytes uniquement',
correct: false,
correction: 'Non chef. Les lymphocytes correspondent à la lignée lymphoïde.'
},
{
text: 'Uniquement les lymphocytes B',
correct: false,
correction: 'Faux.'
}
],
explanation: 'La lignée myéloïde comprend notamment globules rouges, plaquettes, monocytes et polynucléaires.'
},
{
id: 33,
type: 'QCM',
question: 'Lequel des exemples suivants correspond à une hémopathie lymphoïde citée dans le cours ?',
options: [
{
text: 'Le lymphome',
correct: true,
correction: 'Oui boss 🧠 Le lymphome est donné comme exemple d’hémopathie lymphoïde.'
},
{
text: 'Une thrombocytose isolée',
correct: false,
correction: 'Non chef.'
},
{
text: 'Une microcytose isolée',
correct: false,
correction: 'Faux.'
},
{
text: 'Une fausse polyglobulie par déshydratation',
correct: false,
correction: 'Non.'
},
{
text: 'Une fausse thrombopénie sur EDTA',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Les hémopathies lymphoïdes sont des proliférations malignes de cellules de la lignée lymphoïde ; le cours cite lymphome et leucémie aiguë lymphoïde.'
},
{
id: 34,
type: 'QRM',
question: 'Quelles propriétés caractérisent les cellules souches hématopoïétiques ?',
options: [
{
text: 'Elles peuvent reconstituer à long terme l’hématopoïèse myéloïde et lymphoïde après greffe',
correct: true,
correction: 'Oui boss 🧠 C’est leur propriété fonctionnelle majeure.'
},
{
text: 'Elles sont capables d’auto-renouvellement',
correct: true,
correction: 'Exact.'
},
{
text: 'Elles sont multipotentes',
correct: true,
correction: 'Oui. Elles peuvent alimenter toutes les lignées sanguines.'
},
{
text: 'Elles sont facilement identifiables morphologiquement',
correct: false,
correction: 'Non chef 💀 On ne les reconnaît pas sur la morphologie.'
},
{
text: 'Elles sont totipotentes',
correct: false,
correction: 'Faux. Multipotentes, pas totipotentes.'
}
],
explanation: 'Les CSH s’auto-renouvellent, sont multipotentes et peuvent reconstituer durablement l’ensemble de l’hématopoïèse.'
},
{
id: 35,
type: 'QCM',
question: 'Quel phénotype de surface est associé aux cellules souches hématopoïétiques dans le cours ?',
options: [
{
text: 'CD34+ CD38-',
correct: true,
correction: 'Oui boss 🎯 CSH = CD34+ CD38-.'
},
{
text: 'CD34- CD38+',
correct: false,
correction: 'Non chef.'
},
{
text: 'CD34+ CD38+',
correct: false,
correction: 'Faux. Ça correspond davantage aux progéniteurs dans ce cours.'
},
{
text: 'CD34- CD38- uniquement',
correct: false,
correction: 'Non.'
},
{
text: 'Aucun marqueur de surface',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le phénotype donné pour les CSH est CD34+ CD38-.'
},
{
id: 36,
type: 'QRM',
question: 'Concernant les cellules souches hématopoïétiques, quelles propositions sont exactes ?',
options: [
{
text: 'Environ 90 % sont en quiescence',
correct: true,
correction: 'Oui boss 🧠 Elles ne passent pas leur vie à bourriner le cycle cellulaire.'
},
{
text: 'Elles peuvent être congelées à -196 °C',
correct: true,
correction: 'Exact 🎯 Chiffre à retenir.'
},
{
text: 'Elles peuvent être mobilisées dans le sang grâce à certains traitements',
correct: true,
correction: 'Oui. C’est explicitement cité.'
},
{
text: 'Elles sont toutes en cycle en permanence',
correct: false,
correction: 'Non chef 💀 90 % sont justement en quiescence.'
},
{
text: 'Elles ne peuvent jamais quitter la moelle osseuse',
correct: false,
correction: 'Faux. Elles peuvent être mobilisées dans le sang.'
}
],
explanation: 'Les CSH sont majoritairement quiescentes, peuvent être cryoconservées à -196 °C et mobilisées vers le sang.'
},
{
id: 37,
type: 'QCM',
question: 'Quel phénotype est associé aux progéniteurs hématopoïétiques dans le cours ?',
options: [
{
text: 'CD34+ CD38+ avec des antigènes spécifiques de lignée',
correct: true,
correction: 'Oui boss 🧠 Progéniteur = CD34+ CD38+ avec marqueurs de lignée.'
},
{
text: 'CD34+ CD38- sans aucun autre marqueur',
correct: false,
correction: 'Non chef. Ça correspond davantage aux CSH.'
},
{
text: 'CD34- CD38- uniquement',
correct: false,
correction: 'Faux.'
},
{
text: 'Aucun antigène spécifique de lignée',
correct: false,
correction: 'Non.'
},
{
text: 'Le même phénotype exactement que les hématies matures',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'Les progéniteurs sont CD34+ CD38+ et commencent à exprimer des antigènes spécifiques de lignée.'
},
{
id: 38,
type: 'QRM',
question: 'Concernant les progéniteurs hématopoïétiques, quelles propositions sont exactes ?',
options: [
{
text: 'Leur différenciation est restreinte à une ou deux lignées',
correct: true,
correction: 'Oui boss 🧠 Ils ont déjà perdu la grosse polyvalence des CSH.'
},
{
text: 'Ils ne sont pas identifiables morphologiquement',
correct: true,
correction: 'Exact.'
},
{
text: 'Ils sont capables de former des colonies in vitro',
correct: true,
correction: 'Oui. C’est même une propriété exploitée en culture.'
},
{
text: 'Ils sont encore totalement multipotents',
correct: false,
correction: 'Non chef. Ils ont perdu la multipotence des CSH.'
},
{
text: 'Ils possèdent davantage d’auto-renouvellement que les CSH',
correct: false,
correction: 'Faux. Leur capacité d’auto-renouvellement est diminuée.'
}
],
explanation: 'Les progéniteurs ont une différenciation restreinte, ne sont pas reconnaissables morphologiquement et peuvent former des colonies in vitro.'
},
{
id: 39,
type: 'QCM',
question: 'À partir de quel stade les cellules hématopoïétiques deviennent-elles identifiables morphologiquement ?',
options: [
{
text: 'À partir des cellules souches',
correct: false,
correction: 'Non chef.'
},
{
text: 'À partir des progéniteurs précoces',
correct: false,
correction: 'Faux.'
},
{
text: 'À partir des précurseurs',
correct: true,
correction: 'Oui boss 🧠 Précurseur = début de l’identification morphologique.'
},
{
text: 'Uniquement après leur mort',
correct: false,
correction: 'Non 😭.'
},
{
text: 'Aucun stade n’est identifiable morphologiquement',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Les CSH et progéniteurs ne sont pas identifiables morphologiquement. À partir des précurseurs, la morphologie devient exploitable.'
},
{
id: 40,
type: 'QRM',
question: 'Concernant les précurseurs hématopoïétiques, quelles propositions sont exactes ?',
options: [
{
text: 'Ils sont identifiables morphologiquement',
correct: true,
correction: 'Oui boss 🧠 C’est précisément ce qui les distingue des stades plus immatures.'
},
{
text: 'Ils ont perdu leur capacité d’auto-renouvellement',
correct: true,
correction: 'Exact.'
},
{
text: 'Ils sont engagés vers la production d’un seul type cellulaire',
correct: true,
correction: 'Oui. La différenciation devient très restreinte.'
},
{
text: 'Ils sont moins différenciés que les progéniteurs',
correct: false,
correction: 'Non chef 💀 Ils sont au contraire plus différenciés.'
},
{
text: 'Ils sont multipotents comme les CSH',
correct: false,
correction: 'Faux.'
}
],
explanation: 'Les précurseurs sont morphologiquement reconnaissables, n’ont plus d’auto-renouvellement et sont engagés vers un type cellulaire précis.'
},
{
id: 41,
type: 'QCM',
question: 'Quels sont les deux principaux facteurs de promotion de l’hématopoïèse cités dans le cours ?',
options: [
{
text: 'SCF et Flt3-L',
correct: true,
correction: 'Oui boss 🎯 SCF + Flt3-L.'
},
{
text: 'EPO et TPO',
correct: false,
correction: 'Non chef. Ceux-là sont plutôt des facteurs restreints.'
},
{
text: 'IL-3 et IL-7 uniquement',
correct: false,
correction: 'Faux. Ils sont classés parmi les facteurs multipotents.'
},
{
text: 'G-CSF et M-CSF uniquement',
correct: false,
correction: 'Non.'
},
{
text: 'B9 et B12',
correct: false,
correction: 'Non chef 😭 Ce sont des vitamines.'
}
],
explanation: 'Les facteurs de promotion agissent très précocement ; les deux principaux donnés sont SCF et Flt3-L.'
},
{
id: 42,
type: 'QRM',
question: 'Concernant les facteurs de promotion de l’hématopoïèse, quelles propositions sont exactes ?',
options: [
{
text: 'Ils agissent à un niveau très immature',
correct: true,
correction: 'Oui boss 🧠 On est au niveau CSH/progéniteurs précoces.'
},
{
text: 'Ils peuvent favoriser l’auto-renouvellement et l’avancée dans la différenciation',
correct: true,
correction: 'Exact.'
},
{
text: 'Ils ne dirigent pas vers une lignée cellulaire précise',
correct: true,
correction: 'Oui. C’est justement la différence avec les facteurs restreints.'
},
{
text: 'Ils agissent uniquement sur les plaquettes matures',
correct: false,
correction: 'Non chef.'
},
{
text: 'Ils sont représentés uniquement par l’EPO',
correct: false,
correction: 'Faux.'
}
],
explanation: 'SCF et Flt3-L favorisent les étapes les plus précoces sans imposer une orientation vers une lignée précise.'
},
{
id: 43,
type: 'QCM',
question: 'Quel facteur multipotent favorise l’orientation vers la lignée lymphoïde selon le cours ?',
options: [
{
text: 'IL-7',
correct: true,
correction: 'Oui boss 🧠 IL-7 → lymphoïde.'
},
{
text: 'IL-3',
correct: false,
correction: 'Non chef. IL-3 est associée à la lignée myéloïde.'
},
{
text: 'TPO',
correct: false,
correction: 'Faux. TPO → lignée plaquettaire.'
},
{
text: 'EPO',
correct: false,
correction: 'Non.'
},
{
text: 'M-CSF uniquement',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'L’IL-7 favorise l’orientation lymphoïde, alors que l’IL-3 favorise la lignée myéloïde.'
},
{
id: 44,
type: 'QRM',
question: 'Quelles associations entre facteurs de croissance et orientation cellulaire sont exactes ?',
options: [
{
text: 'IL-7 — lignée lymphoïde',
correct: true,
correction: 'Oui boss 🧠 Association propre.'
},
{
text: 'IL-3 — lignée myéloïde',
correct: true,
correction: 'Exact.'
},
{
text: 'GM-CSF — orientation vers les granuleux',
correct: true,
correction: 'Oui. Le support le précise.'
},
{
text: 'TPO — orientation principale vers les lymphocytes B',
correct: false,
correction: 'Non chef 💀 TPO → lignée plaquettaire.'
},
{
text: 'IL-7 — exclusivement lignée plaquettaire',
correct: false,
correction: 'Faux.'
}
],
explanation: 'IL-7 est liée au lymphoïde, IL-3 au myéloïde et GM-CSF participe à l’orientation granulocytaire.'
},
{
id: 45,
type: 'QCM',
question: 'Quel facteur restreint stimule spécifiquement la lignée plaquettaire dans le cours ?',
options: [
{
text: 'TPO',
correct: true,
correction: 'Oui boss 🧠 TPO → plaquettes.'
},
{
text: 'IL-7',
correct: false,
correction: 'Non chef.'
},
{
text: 'Flt3-L',
correct: false,
correction: 'Faux.'
},
{
text: 'B12',
correct: false,
correction: 'Non.'
},
{
text: 'SCF uniquement',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'La TPO est donnée comme facteur spécifique de la lignée plaquettaire.'
},
{
id: 46,
type: 'QRM',
question: 'Concernant les facteurs restreints ou spécifiques de l’hématopoïèse, quelles propositions sont exactes ?',
options: [
{
text: 'Ils agissent à la fin de la différenciation',
correct: true,
correction: 'Oui boss 🧠 On descend dans l’arbre, on devient beaucoup plus spécifique.'
},
{
text: 'Ils ciblent une lignée cellulaire précise',
correct: true,
correction: 'Exact.'
},
{
text: 'EPO, G-CSF et M-CSF sont cités parmi ces facteurs',
correct: true,
correction: 'Oui. Trio explicitement mentionné.'
},
{
text: 'Ils agissent uniquement sur les CSH sans orientation de lignée',
correct: false,
correction: 'Non chef. Ça ressemble davantage aux facteurs de promotion.'
},
{
text: 'Ils empêchent toute différenciation',
correct: false,
correction: 'Faux.'
}
],
explanation: 'Les facteurs restreints agissent tardivement et permettent de stimuler une lignée spécifique, comme TPO, EPO, G-CSF ou M-CSF.'
},
{
id: 47,
type: 'QCM',
question: 'Quel est le premier examen utilisé pour explorer les cellules sanguines matures ?',
options: [
{
text: 'La NFS ou hémogramme',
correct: true,
correction: 'Oui boss 🧠 Première étape : NFS sur une simple prise de sang.'
},
{
text: 'La biopsie ostéo-médullaire systématique',
correct: false,
correction: 'Non chef. On commence beaucoup moins violent 😭.'
},
{
text: 'La culture de progéniteurs',
correct: false,
correction: 'Faux. Elle explore des stades immatures.'
},
{
text: 'L’immunophénotypage obligatoire chez tout patient',
correct: false,
correction: 'Non.'
},
{
text: 'Le myélogramme systématique',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'La NFS est la première étape de l’exploration de l’hématopoïèse et quantifie les cellules matures circulantes.'
},
{
id: 48,
type: 'QRM',
question: 'Concernant la localisation des différents stades de maturation, quelles propositions sont exactes ?',
options: [
{
text: 'Les cellules souches se trouvent principalement dans la moelle osseuse',
correct: true,
correction: 'Oui boss 🧠 Stade immature = moelle.'
},
{
text: 'Les progéniteurs sont retrouvés dans la moelle osseuse',
correct: true,
correction: 'Exact.'
},
{
text: 'Les cellules matures circulent dans le sang',
correct: true,
correction: 'Oui. C’est justement ce que dose la NFS.'
},
{
text: 'Les précurseurs normaux circulent exclusivement comme cellules matures dans le sang',
correct: false,
correction: 'Non chef. Les précurseurs sont surtout étudiés dans la moelle.'
},
{
text: 'Les CSH sont identifiables morphologiquement sur une simple NFS',
correct: false,
correction: 'Faux.'
}
],
explanation: 'CSH, progéniteurs et précurseurs se situent dans la moelle ; les cellules matures rejoignent le compartiment sanguin.'
},
{
id: 49,
type: 'QCM',
question: 'Quel est le mécanisme anticoagulant de l’EDTA utilisé pour la NFS ?',
options: [
{
text: 'Il chélate le calcium',
correct: true,
correction: 'Oui boss 🧠 EDTA = chélateur du calcium, donc coagulation bloquée.'
},
{
text: 'Il augmente massivement la concentration en calcium',
correct: false,
correction: 'Non chef 😭 C’est précisément l’inverse.'
},
{
text: 'Il lyse systématiquement toutes les plaquettes',
correct: false,
correction: 'Faux.'
},
{
text: 'Il transforme le fibrinogène en fibrine',
correct: false,
correction: 'Non. Ça favoriserait la coagulation.'
},
{
text: 'Il détruit l’hémoglobine',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'L’EDTA contenu dans le tube violet chélate le calcium et empêche ainsi la coagulation du prélèvement.'
},
{
id: 50,
type: 'QRM',
question: 'Concernant le prélèvement destiné à une NFS, quelles propositions sont exactes ?',
options: [
{
text: 'Le prélèvement peut être veineux ou capillaire',
correct: true,
correction: 'Oui boss 🧠 Les deux modes sont cités.'
},
{
text: 'Le tube utilisé est classiquement violet',
correct: true,
correction: 'Exact.'
},
{
text: 'Le tube contient de l’EDTA comme anticoagulant',
correct: true,
correction: 'Oui. Indispensable pour éviter le caillot.'
},
{
text: 'Le sang doit obligatoirement coaguler avant le comptage',
correct: false,
correction: 'Non chef 💀 Sinon notamment les plaquettes deviennent impossibles à compter correctement.'
},
{
text: 'Le prélèvement est toujours réalisé dans un tube sans anticoagulant',
correct: false,
correction: 'Faux.'
}
],
explanation: 'La NFS utilise un prélèvement veineux ou capillaire dans un tube violet contenant de l’EDTA.'
},
{
id: 51,
type: 'QCM',
question: 'Comment réalise-t-on un frottis sanguin selon le cours ?',
options: [
{
text: 'On dépose une goutte de sang sur une lame, on l’étale, on la colore puis on l’observe au microscope',
correct: true,
correction: 'Oui boss 🧠 Simple, propre, efficace.'
},
{
text: 'On centrifuge obligatoirement le sang pendant 24 heures',
correct: false,
correction: 'Non chef.'
},
{
text: 'On congèle le sang à -196 °C avant chaque observation',
correct: false,
correction: 'Faux.'
},
{
text: 'On injecte le prélèvement dans la moelle osseuse',
correct: false,
correction: 'Non 😭.'
},
{
text: 'On observe directement le tube fermé à l’œil nu',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le frottis consiste à étaler une goutte de sang sur lame, la colorer puis l’étudier au microscope.'
},
{
id: 52,
type: 'QRM',
question: 'Concernant la formule leucocytaire, quelles propositions sont exactes ?',
options: [
{
text: 'Les érythroblastes ne font pas partie de la formule leucocytaire',
correct: true,
correction: 'Oui boss 🧠 Piège explicitement signalé.'
},
{
text: 'La somme des pourcentages des différents leucocytes doit atteindre 100 % sans compter les érythroblastes',
correct: true,
correction: 'Exact.'
},
{
text: 'Les leucocytes doivent être interprétés en valeur absolue, notamment en G/L',
correct: true,
correction: 'Oui. Les pourcentages seuls ne suffisent pas.'
},
{
text: 'Les leucocytes s’interprètent exclusivement en pourcentage',
correct: false,
correction: 'Non chef 💀 La prof insiste sur la valeur absolue.'
},
{
text: 'Les érythroblastes doivent toujours être ajoutés au total des leucocytes',
correct: false,
correction: 'Faux.'
}
],
explanation: 'La formule leucocytaire exclut les érythroblastes et doit être interprétée principalement à partir des valeurs absolues.'
},
{
id: 53,
type: 'QCM',
question: 'En impédancemétrie, que représente principalement le nombre d’impulsions enregistrées ?',
options: [
{
text: 'Le nombre de cellules ayant franchi l’orifice',
correct: true,
correction: 'Oui boss 🧠 Nombre d’impulsions = nombre de cellules.'
},
{
text: 'La quantité d’hémoglobine contenue dans chaque cellule',
correct: false,
correction: 'Non chef.'
},
{
text: 'Le pH sanguin',
correct: false,
correction: 'Faux.'
},
{
text: 'La concentration plasmatique de fibrinogène',
correct: false,
correction: 'Non.'
},
{
text: 'Le nombre de chromosomes de chaque cellule',
correct: false,
correction: 'Non chef 😭.'
}
],
explanation: 'En impédancemétrie, chaque passage cellulaire génère une impulsion : leur nombre renseigne sur le nombre de cellules.'
},
{
id: 54,
type: 'QRM',
question: 'Concernant l’impédancemétrie utilisée par l’automate, quelles propositions sont exactes ?',
options: [
{
text: 'La hauteur de l’impulsion est proportionnelle au volume de la cellule',
correct: true,
correction: 'Oui boss 🧠 Plus grosse cellule = plus grosse impulsion.'
},
{
text: 'La taille cellulaire suit globalement l’ordre plaquettes < hématies < leucocytes',
correct: true,
correction: 'Exact. Très pratique pour un premier tri.'
},
{
text: 'La taille permet déjà de distinguer les grandes classes plaquettes, hématies et leucocytes',
correct: true,
correction: 'Oui. Mais pas encore les sous-types leucocytaires.'
},
{
text: 'La hauteur de l’impulsion est indépendante de la taille cellulaire',
correct: false,
correction: 'Non chef 💀 C’est justement son principe.'
},
{
text: 'Les plaquettes sont décrites comme les cellules les plus volumineuses',
correct: false,
correction: 'Faux. Elles sont les plus petites des trois classes.'
}
],
explanation: 'L’impédancemétrie renseigne sur le nombre et la taille des cellules ; elle permet notamment de séparer plaquettes, GR et GB.'
},
{
id: 55,
type: 'QCM',
question: 'Comment l’automate mesure-t-il l’hémoglobine selon le cours ?',
options: [
{
text: 'Après lyse des GR, l’hémoglobine est transformée en pigment stable puis mesurée par spectrophotométrie',
correct: true,
correction: 'Oui boss 🧠 Lyse → pigment stable → absorbance.'
},
{
text: 'En comptant uniquement le nombre de plaquettes',
correct: false,
correction: 'Non chef.'
},
{
text: 'Par une biopsie ostéo-médullaire',
correct: false,
correction: 'Faux.'
},
{
text: 'Par coloration MGG uniquement',
correct: false,
correction: 'Non.'
},
{
text: 'En mesurant le calcium plasmatique',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Les GR sont lysés, l’Hb libérée est convertie en pigment stable et son absorbance est mesurée par spectrophotométrie.'
},
{
id: 56,
type: 'QRM',
question: 'Concernant les paramètres érythrocytaires, quelles propositions sont exactes ?',
options: [
{
text: 'L’hématocrite représente le volume sanguin occupé par les hématies',
correct: true,
correction: 'Oui boss 🧠 Définition de base de l’Hte.'
},
{
text: 'La formule donnée est Hte = GR × VGM',
correct: true,
correction: 'Exact. Formule explicitement à connaître.'
},
{
text: 'La CCMH correspond à Hb / Hte',
correct: true,
correction: 'Oui.'
},
{
text: 'La TCMH correspond à Hb / GR',
correct: true,
correction: 'Exact 🧠 Autre formule à verrouiller.'
},
{
text: 'L’hématocrite correspond au pourcentage de leucocytes du sang',
correct: false,
correction: 'Non chef 💀 Il concerne le volume occupé par les hématies.'
}
],
explanation: 'Les formules essentielles sont Hte = GR × VGM, CCMH = Hb/Hte et TCMH = Hb/GR.'
},
{
id: 57,
type: 'QCM',
question: 'Quelle plage d’hémoglobine de référence est donnée chez l’homme adulte ?',
options: [
{
text: '80–100 g/L',
correct: false,
correction: 'Non chef. Ça correspond plutôt à la plage du VGM mais en fL.'
},
{
text: '120–160 g/L',
correct: false,
correction: 'Non. Cette plage est donnée chez la femme.'
},
{
text: '130–180 g/L',
correct: true,
correction: 'Oui boss 🎯 Homme : 130–180 g/L.'
},
{
text: '140–230 g/L',
correct: false,
correction: 'Non. Cette plage est donnée chez le nouveau-né.'
},
{
text: '250–400 g/L',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le tableau donne une Hb de 130–180 g/L chez l’homme adulte.'
},
{
id: 58,
type: 'QRM',
question: 'Concernant les valeurs d’hémoglobine et leur interprétation, quelles propositions sont exactes ?',
options: [
{
text: 'La valeur de référence chez la femme adulte est de 120 à 160 g/L',
correct: true,
correction: 'Oui boss 🧠 Femme : 120–160 g/L.'
},
{
text: 'La valeur de référence chez le nouveau-né est de 140 à 230 g/L',
correct: true,
correction: 'Exact 🎯 Détail chiffré bien gratuit.'
},
{
text: 'Une valeur inférieure à la norme définit une anémie',
correct: true,
correction: 'Oui.'
},
{
text: 'Une valeur supérieure à la norme correspond à une polyglobulie',
correct: true,
correction: 'Exact.'
},
{
text: 'Les normes sont strictement identiques quel que soit l’âge ou le sexe',
correct: false,
correction: 'Non chef 💀 Le support insiste justement sur les variations selon l’âge et le sexe.'
}
],
explanation: 'L’Hb s’interprète selon l’âge et le sexe. Une valeur basse définit l’anémie et une valeur élevée la polyglobulie.'
},
{
id: 59,
type: 'QCM',
question: 'Quelle est la plage normale du VGM chez l’adulte indiquée dans le cours ?',
options: [
{
text: '27–32 fL',
correct: false,
correction: 'Non chef. 27–32 correspond à la TCMH en pg.'
},
{
text: '32–36 fL',
correct: false,
correction: 'Non.'
},
{
text: '80–100 fL',
correct: true,
correction: 'Oui boss 🎯 VGM adulte = 80–100 fL.'
},
{
text: '120–160 fL',
correct: false,
correction: 'Faux.'
},
{
text: '150–400 fL',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Chez l’adulte, le VGM normal est de 80 à 100 fL ; en dessous on parle de microcytose et au-dessus de macrocytose.'
},
{
id: 60,
type: 'QRM',
question: 'Concernant le VGM et ses artéfacts, quelles propositions sont exactes ?',
options: [
{
text: 'Un VGM inférieur à la norme correspond à une microcytose',
correct: true,
correction: 'Oui boss 🧠 Sous 80 fL chez l’adulte, logique microcytaire.'
},
{
text: 'Un VGM supérieur à la norme correspond à une macrocytose',
correct: true,
correction: 'Exact.'
},
{
text: 'Une hyponatrémie peut exceptionnellement provoquer une fausse microcytose',
correct: true,
correction: 'Oui. Petit piège bien vicieux du tableau.'
},
{
text: 'Les agglutinines froides, l’hyperglycémie ou une hyperleucocytose majeure peuvent provoquer une fausse macrocytose',
correct: true,
correction: 'Exact 🧠 Belle collection d’artéfacts.'
},
{
text: 'Le VGM ne peut jamais être influencé par un artéfact',
correct: false,
correction: 'Non chef 💀 La page entière est là pour te dire le contraire.'
}
],
explanation: 'Le VGM permet de classer microcytose et macrocytose, mais plusieurs artéfacts peuvent le modifier faussement.'
},
{
id: 61,
type: 'QCM',
question: 'Quelle plage normale de CCMH est indiquée dans le cours ?',
options: [
{
text: '12–16 g/dL',
correct: false,
correction: 'Non chef.'
},
{
text: '27–32 g/dL',
correct: false,
correction: 'Faux. Ce chiffre correspond à la TCMH en pg/cellule.'
},
{
text: '32–36 g/dL',
correct: true,
correction: 'Oui boss 🎯 CCMH = 32–36 g/dL.'
},
{
text: '80–100 g/dL',
correct: false,
correction: 'Non.'
},
{
text: '150–400 g/dL',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le tableau retient une CCMH de 32 à 36 g/dL.'
},
{
id: 62,
type: 'QRM',
question: 'Concernant la CCMH, la TCMH et la chromie, quelles propositions sont exactes ?',
options: [
{
text: 'La TCMH normale est donnée autour de 27 à 32 pg par cellule',
correct: true,
correction: 'Oui boss 🧠 TCMH = 27–32 pg/cellule.'
},
{
text: 'Une diminution de la CCMH peut conduire à parler d’hypochromie',
correct: true,
correction: 'Exact.'
},
{
text: 'Une CCMH très élevée est souvent considérée comme artéfactuelle',
correct: true,
correction: 'Oui. La prof insiste : méfiance devant une CCMH trop haute.'
},
{
text: 'Le cours précise qu’on ne parle pas d’hyperchromie physiopathologique vraie',
correct: true,
correction: 'Exact 🧠 Il n’existe pas de situation où le GR se gave réellement d’Hb sans limite.'
},
{
text: 'La TCMH se calcule par Hb / Hte',
correct: false,
correction: 'Non chef 💀 Hb/Hte correspond à la CCMH ; TCMH = Hb/GR.'
}
],
explanation: 'La TCMH renseigne sur la quantité d’Hb par GR, la CCMH sur sa concentration. Leur diminution peut définir une hypochromie.'
},
{
id: 63,
type: 'QCM',
question: 'Quel est le premier réflexe recommandé lorsqu’on analyse la lignée érythrocytaire sur un hémogramme ?',
options: [
{
text: 'Regarder d’abord l’hémoglobine',
correct: true,
correction: 'Oui boss 🧠 Étape 1 : Hb → normale, anémie ou polyglobulie.'
},
{
text: 'Regarder d’abord les basophiles',
correct: false,
correction: 'Non chef.'
},
{
text: 'Faire immédiatement une BOM',
correct: false,
correction: 'Faux 😭 On ne sort pas la carotte médullaire au premier chiffre bizarre.'
},
{
text: 'Regarder uniquement le pourcentage de lymphocytes',
correct: false,
correction: 'Non.'
},
{
text: 'Ignorer l’hémoglobine et regarder seulement les GR',
correct: false,
correction: 'Non chef. Le cours insiste sur la teneur en Hb.'
}
],
explanation: 'Le réflexe est : Hb d’abord, puis VGM pour la taille, puis CCMH/TCMH pour la chromie.'
},
{
id: 64,
type: 'QRM',
question: 'Quelles situations sont citées comme pouvant provoquer une fausse anémie par hémodilution ?',
options: [
{
text: 'La grossesse avec hémodilution physiologique',
correct: true,
correction: 'Oui boss 🧠 Notamment à partir du 3e trimestre.'
},
{
text: 'Les grosses hyperprotidémies',
correct: true,
correction: 'Exact. Elles peuvent entraîner un appel d’eau.'
},
{
text: 'L’insuffisance cardiaque',
correct: true,
correction: 'Oui.'
},
{
text: 'L’hypersplénisme',
correct: true,
correction: 'Exact 🧠 Également cité.'
},
{
text: 'La déshydratation majeure',
correct: false,
correction: 'Non chef 💀 La déshydratation favorise plutôt une fausse polyglobulie par hémoconcentration.'
}
],
explanation: 'L’hémodilution peut diminuer artificiellement la concentration en Hb, notamment pendant la grossesse ou dans certaines situations de surcharge hydrique.'
},
{
id: 65,
type: 'QCM',
question: 'Quelle situation peut provoquer une fausse polyglobulie par hémoconcentration ?',
options: [
{
text: 'Une déshydratation importante',
correct: true,
correction: 'Oui boss 🧠 Moins d’eau, même Hb, concentration artificiellement plus élevée.'
},
{
text: 'Une hémodilution de grossesse',
correct: false,
correction: 'Non chef. Ça peut au contraire simuler une anémie.'
},
{
text: 'Une perfusion abondante pendant le prélèvement',
correct: false,
correction: 'Faux. Ça peut diluer le prélèvement.'
},
{
text: 'Une hyperprotidémie avec appel d’eau',
correct: false,
correction: 'Non.'
},
{
text: 'Une insuffisance cardiaque avec hémodilution',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'La déshydratation ou l’utilisation de diurétiques peuvent concentrer artificiellement l’Hb et simuler une polyglobulie.'
},
{
id: 66,
type: 'QRM',
question: 'Concernant les réticulocytes, quelles propositions sont exactes ?',
options: [
{
text: 'Ils circulent dans le sang malgré leur caractère immature',
correct: true,
correction: 'Oui boss 🧠 C’est justement ce qui permet de les doser sans aller dans la moelle.'
},
{
text: 'Ils reflètent la production érythrocytaire médullaire',
correct: true,
correction: 'Exact.'
},
{
text: 'Ils ne sont pas inclus dans l’hémogramme standard',
correct: true,
correction: 'Oui. Il faut demander NFS + réticulocytes.'
},
{
text: 'Le Bleu de Crésyl peut être utilisé pour les mettre en évidence',
correct: true,
correction: 'Exact 🧠 Bleu de Crésyl = réticulocytes.'
},
{
text: 'La coloration spécifique demandée dans le cours est uniquement la MGG',
correct: false,
correction: 'Non chef 💀 MGG est utilisée pour le frottis leucocytaire ; réticulocytes = Bleu de Crésyl.'
}
],
explanation: 'Les réticulocytes sont des précurseurs circulants des GR. Leur dosage reflète la réponse médullaire et nécessite une demande spécifique.'
},
{
id: 67,
type: 'QCM',
question: 'À partir de quelle valeur de réticulocytes parle-t-on d’anémie régénérative dans le cours ?',
options: [
{
text: 'Au-dessus de 50 G/L',
correct: false,
correction: 'Non chef.'
},
{
text: 'Au-dessus de 80 G/L',
correct: false,
correction: 'Non. C’est proche de la norme haute mais pas du seuil de régénération.'
},
{
text: 'Au-dessus de 100 G/L',
correct: false,
correction: 'Toujours pas.'
},
{
text: 'Au-dessus de 120 G/L',
correct: true,
correction: 'Oui boss 🎯 >120 G/L = anémie régénérative dans ce cours.'
},
{
text: 'Au-dessus de 400 G/L',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'Le seuil retenu est supérieur à 120 G/L, alors que l’ancienne valeur citée était 150 G/L.'
},
{
id: 68,
type: 'QRM',
question: 'Concernant le caractère régénératif ou arégénératif d’une anémie, quelles propositions sont exactes ?',
options: [
{
text: 'Une anémie régénérative traduit une réponse médullaire conservée',
correct: true,
correction: 'Oui boss 🧠 La moelle essaye de compenser.'
},
{
text: 'Une anémie régénérative oriente vers une cause périphérique',
correct: true,
correction: 'Exact.'
},
{
text: 'Un saignement abondant peut être une cause d’anémie régénérative',
correct: true,
correction: 'Oui. Perte périphérique = moelle qui réagit.'
},
{
text: 'Une destruction périphérique des GR peut s’accompagner d’une régénération',
correct: true,
correction: 'Exact 🧠 Exemple des cellules pathologiques qui lysent les GR.'
},
{
text: 'Une anémie arégénérative indique obligatoirement une cause périphérique',
correct: false,
correction: 'Non chef 💀 Arégénérative = orientation centrale/médullaire.'
}
],
explanation: 'Une anémie régénérative traduit une moelle fonctionnelle compensant une perte périphérique. Une anémie arégénérative oriente vers un défaut central.'
},
{
id: 69,
type: 'QCM',
question: 'Quelle plage de référence des plaquettes est donnée chez l’adulte ?',
options: [
{
text: '15–40 G/L',
correct: false,
correction: 'Non chef.'
},
{
text: '50–100 G/L',
correct: false,
correction: 'Faux.'
},
{
text: '150–400 G/L',
correct: true,
correction: 'Oui boss 🎯 Plaquettes = 150–400 G/L.'
},
{
text: '400–1000 G/L obligatoirement',
correct: false,
correction: 'Non.'
},
{
text: '4–10 G/L',
correct: false,
correction: 'Non chef. 4–10 G/L correspond aux leucocytes.'
}
],
explanation: 'Chez l’adulte, la norme plaquettaire du cours est de 150 à 400 G/L.'
},
{
id: 70,
type: 'QRM',
question: 'Concernant les plaquettes et les artéfacts de leur numération, quelles propositions sont exactes ?',
options: [
{
text: 'Une agrégation plaquettaire dans un tube EDTA peut provoquer une fausse thrombopénie',
correct: true,
correction: 'Oui boss 🧠 Le patient va bien, c’est parfois juste le tube qui troll.'
},
{
text: 'En cas de suspicion de fausse thrombopénie sur EDTA, on peut refaire la NFS sur citrate de sodium',
correct: true,
correction: 'Exact. Tube bleu.'
},
{
text: 'Des fragments cellulaires, cryoglobulines ou micro-organismes peuvent être comptés à tort comme des plaquettes',
correct: true,
correction: 'Oui. Ça peut créer une fausse thrombocytose.'
},
{
text: 'Les plaquettes sont comptées notamment par impédancemétrie',
correct: true,
correction: 'Exact 🧠 Même principe de taille et d’impulsions.'
},
{
text: 'La norme plaquettaire adulte varie obligatoirement selon le sexe',
correct: false,
correction: 'Non chef 💀 Le support précise qu’elle est identique chez tous les adultes.'
}
],
explanation: 'Les plaquettes sont mesurées par automate mais l’agrégation ou le comptage erroné de petites particules peut créer des résultats artificiels.'
},
{
id: 71,
type: 'QCM',
question: 'Quelle est la valeur de référence globale des leucocytes donnée dans le cours ?',
options: [
{
text: '0,1–1 G/L',
correct: false,
correction: 'Non chef. C’est la plage des monocytes.'
},
{
text: '1,5–4 G/L',
correct: false,
correction: 'Non. Cette plage correspond aux lymphocytes.'
},
{
text: '4–10 G/L',
correct: true,
correction: 'Oui boss 🎯 Leucocytes totaux = 4–10 G/L.'
},
{
text: '15–40 G/L',
correct: false,
correction: 'Faux.'
},
{
text: '150–400 G/L',
correct: false,
correction: 'Non chef. Plaquettes.'
}
],
explanation: 'La valeur de référence retenue pour les leucocytes totaux est de 4 à 10 G/L.'
},
{
id: 72,
type: 'QRM',
question: 'Quelles valeurs absolues de référence leucocytaires sont exactes selon le tableau du cours ?',
options: [
{
text: 'Polynucléaires neutrophiles : 1,5 à 7 G/L',
correct: true,
correction: 'Oui boss 🧠 PNN = 1,5–7 G/L.'
},
{
text: 'Polynucléaires éosinophiles : 0,05 à 0,5 G/L',
correct: true,
correction: 'Exact.'
},
{
text: 'Polynucléaires basophiles : 0,01 à 0,05 G/L',
correct: true,
correction: 'Oui. Petit chiffre bien fourbe.'
},
{
text: 'Monocytes : 0,1 à 1 G/L',
correct: true,
correction: 'Exact 🧠.'
},
{
text: 'Lymphocytes : 0,1 à 0,5 G/L',
correct: false,
correction: 'Non chef 💀 Les lymphocytes sont donnés à 1,5–4 G/L.'
}
],
explanation: 'Les valeurs absolues à connaître sont notamment PNN 1,5–7, PNE 0,05–0,5, PNB 0,01–0,05, lymphocytes 1,5–4 et monocytes 0,1–1 G/L.'
},
{
id: 73,
type: 'QCM',
question: 'Quelle plage de référence des lymphocytes est donnée dans le cours ?',
options: [
{
text: '0,01–0,05 G/L',
correct: false,
correction: 'Non chef. Ça correspond aux basophiles.'
},
{
text: '0,05–0,5 G/L',
correct: false,
correction: 'Faux. Éosinophiles.'
},
{
text: '0,1–1 G/L',
correct: false,
correction: 'Non. Monocytes.'
},
{
text: '1,5–4 G/L',
correct: true,
correction: 'Oui boss 🎯 Lymphocytes = 1,5–4 G/L.'
},
{
text: '4–10 G/L',
correct: false,
correction: 'Non chef. Leucocytes totaux.'
}
],
explanation: 'Le tableau donne une valeur absolue habituelle des lymphocytes de 1,5 à 4 G/L, avec variation selon l’âge.'
},
{
id: 74,
type: 'QRM',
question: 'Quelles associations entre anomalie et population leucocytaire sont exactes ?',
options: [
{
text: 'Diminution des leucocytes totaux — leucopénie',
correct: true,
correction: 'Oui boss 🧠 ↓ leucocytes = leucopénie.'
},
{
text: 'Augmentation des leucocytes totaux — hyperleucocytose',
correct: true,
correction: 'Exact.'
},
{
text: 'Augmentation des éosinophiles — hyperéosinophilie',
correct: true,
correction: 'Oui.'
},
{
text: 'Augmentation des basophiles — basophilie',
correct: true,
correction: 'Exact 🧠.'
},
{
text: 'Diminution des neutrophiles — polynucléose neutrophile',
correct: false,
correction: 'Non chef 💀 Une diminution correspond à une neutropénie.'
}
],
explanation: 'Le tableau associe notamment leucopénie/hyperleucocytose, neutropénie/polynucléose neutrophile, hyperéosinophilie, basophilie et lymphopénie/hyperlymphocytose.'
},
{
id: 75,
type: 'QCM',
question: 'Quelle coloration est utilisée pour l’étude du frottis sanguin leucocytaire dans le cours ?',
options: [
{
text: 'MGG',
correct: true,
correction: 'Oui boss 🧠 Frottis leucocytaire = MGG.'
},
{
text: 'Bleu de Crésyl uniquement',
correct: false,
correction: 'Non chef. Le Bleu de Crésyl sert aux réticulocytes.'
},
{
text: 'Coloration de Gram uniquement',
correct: false,
correction: 'Faux.'
},
{
text: 'Aucune coloration',
correct: false,
correction: 'Non.'
},
{
text: 'EDTA',
correct: false,
correction: 'Non chef 😭 L’EDTA est un anticoagulant, pas une coloration.'
}
],
explanation: 'Le frottis sanguin utilise la coloration MGG, à distinguer du Bleu de Crésyl utilisé pour les réticulocytes.'
},
{
id: 76,
type: 'QRM',
question: 'Concernant la ponction médullaire et le myélogramme, quelles propositions sont exactes ?',
options: [
{
text: 'La ponction peut être réalisée au niveau du sternum',
correct: true,
correction: 'Oui boss 🧠 Site classique cité.'
},
{
text: 'Les crêtes iliaques postérieures ou antérieures peuvent être utilisées',
correct: true,
correction: 'Exact.'
},
{
text: 'Le prélèvement est réalisé à l’aide d’un trocart',
correct: true,
correction: 'Oui.'
},
{
text: 'On commence par réaliser un frottis pour observer les cellules',
correct: true,
correction: 'Exact 🧠 Puis d’autres tubes peuvent servir à des examens complémentaires.'
},
{
text: 'Le myélogramme permet d’identifier morphologiquement les CSH avec certitude',
correct: false,
correction: 'Non chef 💀 CSH et progéniteurs ne sont pas identifiables morphologiquement.'
}
],
explanation: 'Le myélogramme repose sur une ponction médullaire, notamment sternale ou iliaque, puis une analyse cytologique des cellules, surtout des précurseurs.'
},
{
id: 77,
type: 'QCM',
question: 'Quelle caractéristique distingue particulièrement la biopsie ostéo-médullaire de la ponction médullaire ?',
options: [
{
text: 'Elle prélève une carotte de moelle osseuse et permet d’étudier l’architecture médullaire',
correct: true,
correction: 'Oui boss 🧠 BOM = carotte + histologie + architecture.'
},
{
text: 'Elle est moins invasive que le myélogramme',
correct: false,
correction: 'Non chef. Elle est plus invasive.'
},
{
text: 'Elle ne prélève jamais de tissu',
correct: false,
correction: 'Faux.'
},
{
text: 'Elle est uniquement réalisée sur sang périphérique',
correct: false,
correction: 'Non.'
},
{
text: 'Elle permet d’identifier les CSH uniquement sur leur morphologie',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'La BOM prélève une carotte osseuse, est plus invasive et permet une étude histologique de l’architecture, de la richesse et de la fibrose médullaires.'
},
{
id: 78,
type: 'QRM',
question: 'Concernant la comparaison entre myélogramme et biopsie ostéo-médullaire, quelles propositions sont exactes ?',
options: [
{
text: 'Le myélogramme correspond surtout à une étude cytologique',
correct: true,
correction: 'Oui boss 🧠 Myélogramme = cytologie.'
},
{
text: 'La BOM correspond surtout à une étude histologique',
correct: true,
correction: 'Exact.'
},
{
text: 'Le myélogramme permet généralement d’obtenir des résultats plus rapidement que la BOM',
correct: true,
correction: 'Oui. Le tableau lui donne un avantage net sur le délai.'
},
{
text: 'La BOM est particulièrement utile pour étudier la fibrose et l’architecture médullaire',
correct: true,
correction: 'Exact 🧠 Là, la BOM écrase clairement le myélogramme.'
},
{
text: 'La BOM est décrite comme plus facile et moins invasive que le myélogramme',
correct: false,
correction: 'Non chef 💀 Elle est justement plus invasive.'
}
],
explanation: 'Le myélogramme est une cytologie rapide centrée sur les cellules ; la BOM est une histologie permettant surtout d’étudier richesse, fibrose et architecture.'
},
{
id: 79,
type: 'QCM',
question: 'Quel principe est utilisé lors de l’immunophénotypage ?',
options: [
{
text: 'Marquer des antigènes cellulaires avec des anticorps puis analyser les cellules au cytomètre',
correct: true,
correction: 'Oui boss 🧠 Anticorps + marqueur de surface + laser du cytomètre.'
},
{
text: 'Identifier les CSH uniquement par leur forme au microscope',
correct: false,
correction: 'Non chef. Justement, la morphologie ne suffit pas.'
},
{
text: 'Faire coaguler complètement le prélèvement',
correct: false,
correction: 'Faux.'
},
{
text: 'Mesurer uniquement le VGM des cellules souches',
correct: false,
correction: 'Non.'
},
{
text: 'Colorer les cellules uniquement au Bleu de Crésyl',
correct: false,
correction: 'Non chef.'
}
],
explanation: 'L’immunophénotypage utilise des anticorps dirigés contre des marqueurs de surface, puis une analyse par cytométrie avec excitation laser. Le CD34 est particulièrement cité pour les CSH.'
},
{
id: 80,
type: 'QRM',
question: 'Concernant la culture de progéniteurs hématopoïétiques, quelles propositions sont exactes ?',
options: [
{
text: 'Les progéniteurs sont le stade décrit comme capable de former des colonies in vitro',
correct: true,
correction: 'Oui boss 🧠 C’est la propriété exploitée par cette technique.'
},
{
text: 'Le prélèvement est placé sur un milieu avec les facteurs de croissance nécessaires',
correct: true,
correction: 'Exact.'
},
{
text: 'Pour favoriser des colonies érythropoïétiques, le cours cite l’association d’EPO avec des facteurs multipotents',
correct: true,
correction: 'Oui. EPO pour orienter la lignée érythroïde.'
},
{
text: 'Cette technique peut servir à évaluer la qualité fonctionnelle d’un greffon, notamment en autogreffe',
correct: true,
correction: 'Exact 🧠 On regarde si les colonies poussent correctement.'
},
{
text: 'Cette technique est décrite comme l’examen de routine le plus pratiqué actuellement',
correct: false,
correction: 'Non chef 💀 La prof précise au contraire que ce n’est plus vraiment pratiqué aujourd’hui.'
}
],
explanation: 'La culture de progéniteurs exploite leur capacité à former des colonies sous facteurs de croissance. Elle peut avoir un intérêt fonctionnel en contexte de greffe, même si elle est aujourd’hui peu pratiquée.'
}
]
