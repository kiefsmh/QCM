export const meta = {
title: 'Introduction à la génétique',
}

// Source du cours : 

export default [
{
id: 1,
type: 'QCM',
question: "Concernant l’organisation de l’UE de génétique médicale en DFGSM3, quelle proposition est exacte ?",
options: [
{
text: "L’UE comporte 20 heures de CM, vaut 4 ECTS et possède un coefficient 1",
correct: true,
correction: "Oui boss 🧠 20 h de CM, 4 ECTS, coeff 1 : le petit package administratif du cours."
},
{
text: "L’UE comporte 13 heures de CM en DFGSM3",
correct: false,
correction: "Non chef 😭 Les 13 heures concernent les étudiants de L2 maïeutique."
},
{
text: "L’examen terminal dure 2 heures",
correct: false,
correction: "Non frérot ⏱️ L’examen terminal écrit dure 1 heure."
},
{
text: "La session de rattrapage est obligatoirement orale",
correct: false,
correction: "Non chef. Le rattrapage est également un examen écrit sous forme de QRM pendant 1 heure."
},
{
text: "L’UE est évaluée exclusivement par des questions rédactionnelles longues",
correct: false,
correction: "Non 😭 Le cours indique un examen terminal écrit sous forme de QRM."
}
],
explanation: "En DFGSM3, l’UE comprend 20 heures de CM, 4 ECTS et un coefficient 1. L’examen terminal et le rattrapage sont des épreuves écrites de QRM d’une durée d’une heure."
},
{
id: 2,
type: 'QCM',
question: "Quelle valeur correspond à la taille du génome humain haploïde donnée dans le cours ?",
options: [
{
text: "Environ 3,2 millions de nucléotides",
correct: false,
correction: "Non chef 😭 Là t’as perdu trois ordres de grandeur en chemin."
},
{
text: "Environ 3,2 milliards de nucléotides",
correct: true,
correction: "Oui boss 🧠 Le cours donne 3,2 milliards de nucléotides pour un ADN humain haploïde."
},
{
text: "Environ 32 milliards de nucléotides",
correct: false,
correction: "Non frérot. Tu viens de rajouter un zéro gratuit."
},
{
text: "Environ 320 000 nucléotides",
correct: false,
correction: "Non chef 💀 Beaucoup, beaucoup trop petit."
},
{
text: "Environ 3,2 milliers de nucléotides",
correct: false,
correction: "Non 😭 À ce stade ton génome tient sur un ticket de caisse."
}
],
explanation: "Le génome humain haploïde contient environ 3,2 milliards de nucléotides, soit un ordre de grandeur de 3,2 Gb."
},
{
id: 3,
type: 'QCM',
question: "Quelle proportion du génome humain correspond approximativement à des séquences codantes pour des protéines ?",
options: [
{
text: "1 à 2 %",
correct: true,
correction: "Oui boss 🧠 Seulement 1 à 2 % du génome est codant pour des protéines."
},
{
text: "10 à 15 %",
correct: false,
correction: "Non chef 😭 C’est déjà beaucoup trop."
},
{
text: "Environ 50 %",
correct: false,
correction: "Non frérot 💀 Le génome codant est vraiment une toute petite fraction."
},
{
text: "Environ 80 %",
correct: false,
correction: "Non chef. Environ 80 % est transcrit en ARN, mais pas forcément codant."
},
{
text: "Environ 98 %",
correct: false,
correction: "Non 😭 C’est pratiquement l’inverse de ce qu’il faut retenir."
}
],
explanation: "Seulement 1 à 2 % des séquences nucléotidiques codent pour des protéines. En revanche, environ 80 % du génome est transcrit en ARN."
},
{
id: 4,
type: 'QCM',
question: "À propos des variations du génome humain, quelle proposition est exacte ?",
options: [
{
text: "Toute variation génétique entraîne obligatoirement un phénotype pathologique",
correct: false,
correction: "Non chef 😭 Variation ne veut pas dire maladie. C’est justement un point sur lequel le cours insiste."
},
{
text: "Un polymorphisme est une variation du génome qui n’entraîne pas forcément un phénotype pathologique",
correct: true,
correction: "Oui boss 🧠 Une variation peut parfaitement participer à la diversité humaine sans rendre malade."
},
{
text: "Le génome humain est identique chez tous les individus",
correct: false,
correction: "Non frérot 💀 Sa variabilité est justement à l’origine d’une partie de la diversité de l’espèce humaine."
},
{
text: "Les variations génétiques ne peuvent exister qu’à l’échelle des chromosomes",
correct: false,
correction: "Non chef. Elles peuvent être grossières au niveau chromosomique ou beaucoup plus fines au niveau de la séquence d’ADN."
},
{
text: "Les variations de quelques nucléotides sont toujours visibles au microscope optique",
correct: false,
correction: "Non 😭 Le microscope optique sert aux anomalies beaucoup plus grandes."
}
],
explanation: "Le génome humain est variable. Une variation n’est pas nécessairement pathogène et peut être observée à différentes échelles, du chromosome au nucléotide."
},
{
id: 5,
type: 'QCM',
question: "Parmi les anomalies chromosomiques suivantes, laquelle correspond à un Structural Variant équilibré selon le cours ?",
options: [
{
text: "Une délétion",
correct: false,
correction: "Non chef 😭 Une délétion entraîne une perte de matériel chromosomique, donc elle est déséquilibrée."
},
{
text: "Une duplication",
correct: false,
correction: "Non frérot. Une duplication ajoute du matériel, donc déséquilibrée."
},
{
text: "Une translocation sans perte ni gain de matériel",
correct: true,
correction: "Oui boss 🧠 Un déplacement sans perte ni gain correspond à un SV équilibré."
},
{
text: "Une microdélétion",
correct: false,
correction: "Non chef 💀 Perte de matériel = déséquilibré."
},
{
text: "Une microduplication",
correct: false,
correction: "Non. Gain de matériel = déséquilibré."
}
],
explanation: "Les SV équilibrés correspondent à des déplacements de matériel sans perte ni gain, comme les translocations ou inversions. Les délétions et duplications sont déséquilibrées."
},
{
id: 6,
type: 'QCM',
question: "Combien de variations ponctuelles ou SNV sont retrouvées approximativement par individu selon le cours ?",
options: [
{
text: "Entre 3 et 4 milliers",
correct: false,
correction: "Non chef 😭 Là t’es beaucoup trop bas."
},
{
text: "Entre 30 000 et 40 000",
correct: false,
correction: "Non frérot. Toujours pas assez."
},
{
text: "Entre 300 000 et 400 000",
correct: false,
correction: "Non chef. Encore un zéro à trouver."
},
{
text: "Entre 3 et 4 millions",
correct: true,
correction: "Oui boss 🧬 On porte chacun environ 3 à 4 millions de variations ponctuelles ou SNV."
},
{
text: "Plus de 300 millions",
correct: false,
correction: "Non 💀 Là tu transformes toute ta séquence en festival de variants."
}
],
explanation: "Le cours indique environ 3 à 4 millions de variations ponctuelles ou SNV par individu."
},
{
id: 7,
type: 'QCM',
question: "Quelle est approximativement la résolution du caryotype indiquée dans le cours ?",
options: [
{
text: "5 à 10 paires de bases",
correct: false,
correction: "Non chef 😭 Le caryotype est très loin d’avoir une résolution nucléotidique."
},
{
text: "5 à 10 kb",
correct: false,
correction: "Non frérot. Toujours beaucoup trop petit."
},
{
text: "5 à 10 Mb",
correct: true,
correction: "Oui boss 🧠 La résolution du caryotype est de l’ordre d’une bande chromosomique, soit environ 5 à 10 Mb."
},
{
text: "50 à 100 pb",
correct: false,
correction: "Non chef 💀 On n’est pas sur du séquençage."
},
{
text: "500 à 1000 Gb",
correct: false,
correction: "Non 😭 Là ton examen voit à peine la planète entière."
}
],
explanation: "Le caryotype permet d’observer des anomalies chromosomiques de grande taille. Sa résolution est de l’ordre de 5 à 10 Mb."
},
{
id: 8,
type: 'QCM',
question: "Concernant la taille réelle des autosomes humains, quelle proposition est exacte ?",
options: [
{
text: "Le chromosome 22 est plus petit que le chromosome 21",
correct: false,
correction: "Non chef 😭 C’est précisément l’un des pièges historiques : le chromosome 21 est plus petit."
},
{
text: "Le chromosome 21 est le plus petit autosome, autour de 47 Mb",
correct: true,
correction: "Oui boss 🧠 Le chromosome 21 est donné comme le plus petit autosome, autour de 47 Mb."
},
{
text: "Le chromosome 1 est plus petit que le chromosome 21",
correct: false,
correction: "Non frérot 💀 Le chromosome 1 est au contraire le plus grand, autour de 250 Mb."
},
{
text: "Le chromosome 10 est réellement plus grand que le chromosome 11",
correct: false,
correction: "Non chef. Le séquençage a montré que le chromosome 10 est en réalité plus petit que le 11."
},
{
text: "Le chromosome 19 est réellement plus grand que le chromosome 20",
correct: false,
correction: "Non 😭 Même piège : le 19 est en réalité plus petit que le 20."
}
],
explanation: "Le classement historique par taille comporte quelques exceptions. Le chromosome 21 est notamment plus petit que le 22 et mesure environ 47 Mb."
},
{
id: 9,
type: 'QCM',
question: "Quelle définition correspond au locus ?",
options: [
{
text: "Une version particulière d’un gène",
correct: false,
correction: "Non chef 😭 Ça, c’est un allèle."
},
{
text: "La position connue d’un gène sur un chromosome",
correct: true,
correction: "Oui boss 🎯 Locus = l’adresse du gène sur le chromosome."
},
{
text: "L’ensemble des caractères observés chez un individu",
correct: false,
correction: "Non frérot. Ça correspond au phénotype."
},
{
text: "La constitution génétique complète d’un individu uniquement",
correct: false,
correction: "Non chef. Ça se rapproche du génotype, pas du locus."
},
{
text: "Un chromosome sexuel",
correct: false,
correction: "Non 💀 Les chromosomes sexuels sont les gonosomes."
}
],
explanation: "Le locus correspond à la position d’un gène sur un chromosome. Les allèles représentent différentes versions de la séquence d’ADN à ce locus."
},
{
id: 10,
type: 'QCM',
question: "Quelle situation correspond à un hétérozygote composite ?",
options: [
{
text: "Deux allèles strictement identiques",
correct: false,
correction: "Non chef 😭 Deux allèles identiques = homozygote."
},
{
text: "Un allèle normal et un allèle muté",
correct: false,
correction: "Non frérot. Ça correspond à un hétérozygote simple."
},
{
text: "Deux allèles différents et anormaux au même locus",
correct: true,
correction: "Oui boss 🧠 Hétérozygote composite = deux allèles mutés différents."
},
{
text: "Un seul allèle présent au locus",
correct: false,
correction: "Non chef. Un seul allèle = hémizygote."
},
{
text: "Deux allèles sauvages identiques obligatoirement",
correct: false,
correction: "Non 💀 Ça décrit plutôt un homozygote sain."
}
],
explanation: "Un hétérozygote composite possède deux allèles anormaux différents. Le cours cite notamment la mucoviscidose comme exemple."
},
{
id: 11,
type: 'QCM',
question: "Quelle situation correspond à une hémizygotie ?",
options: [
{
text: "La présence de deux allèles différents à un locus",
correct: false,
correction: "Non chef 😭 Ça, c’est une hétérozygotie."
},
{
text: "La présence de deux allèles strictement identiques",
correct: false,
correction: "Non frérot. Ça, c’est l’homozygotie."
},
{
text: "La présence d’un seul allèle à un locus donné",
correct: true,
correction: "Oui boss 🧠 Hémizygote = un seul allèle disponible au locus."
},
{
text: "La présence obligatoire de trois copies d’un gène",
correct: false,
correction: "Non chef 💀 C’est littéralement l’inverse de la définition."
},
{
text: "La présence de deux chromosomes X chez un garçon",
correct: false,
correction: "Non. Le cours cite justement le chromosome X du garçon comme situation classique d’hémizygotie."
}
],
explanation: "L’hémizygotie correspond à la présence d’un seul allèle à un locus. Le chromosome X chez le garçon en est un exemple classique."
},
{
id: 12,
type: 'QCM',
question: "Si le phénotype d’un individu AB est intermédiaire entre les phénotypes AA et BB, comment sont qualifiés les allèles A et B ?",
options: [
{
text: "Dominants",
correct: false,
correction: "Non chef. En dominance, l’hétérozygote ressemble à l’un des homozygotes."
},
{
text: "Récessifs",
correct: false,
correction: "Non frérot 😭 Ce n’est pas ce que décrit un phénotype intermédiaire."
},
{
text: "Semi-dominants",
correct: true,
correction: "Oui boss 🌸 Phénotype intermédiaire = semi-dominance."
},
{
text: "Codominants",
correct: false,
correction: "Non chef. En codominance, les deux phénotypes s’expriment en même temps."
},
{
text: "Hémizygotes",
correct: false,
correction: "Non 💀 Là tu mélanges statut allélique et relation de dominance."
}
],
explanation: "La semi-dominance produit un phénotype intermédiaire chez l’hétérozygote. En codominance, les deux caractères associés aux homozygotes sont exprimés simultanément."
},
{
id: 13,
type: 'QCM',
question: "Quelle définition correspond à la pénétrance d’un génotype morbide ?",
options: [
{
text: "La sévérité des symptômes chez un individu atteint",
correct: false,
correction: "Non chef 😭 Ça correspond davantage à l’expressivité."
},
{
text: "La proportion d’individus malades parmi les individus porteurs du même génotype morbide",
correct: true,
correction: "Oui boss 🧠 Porteurs malades divisés par tous les porteurs, exprimé en pourcentage."
},
{
text: "Le nombre total de mutations portées par un patient",
correct: false,
correction: "Non frérot. Aucun rapport avec la pénétrance."
},
{
text: "La fréquence d’un chromosome dans la population",
correct: false,
correction: "Non chef 💀 On a complètement quitté le sujet."
},
{
text: "La proportion de patients porteurs d’une anomalie parmi les individus non porteurs",
correct: false,
correction: "Non. La pénétrance se calcule bien parmi les porteurs du génotype concerné."
}
],
explanation: "La pénétrance exprime la proportion de personnes malades parmi les personnes porteuses du même génotype morbide. Elle est complète à 100 % et incomplète en dessous."
},
{
id: 14,
type: 'QCM',
question: "Quelle proposition décrit correctement l’expressivité variable ?",
options: [
{
text: "Tous les porteurs d’un allèle morbide présentent obligatoirement exactement les mêmes signes",
correct: false,
correction: "Non chef 😭 C’est justement l’inverse de l’expressivité variable."
},
{
text: "Un même allèle morbide peut se manifester par des signes différents selon les individus",
correct: true,
correction: "Oui boss 🧠 Même anomalie, mais tableau clinique différent d’une personne à l’autre."
},
{
text: "Elle signifie qu’aucun porteur du génotype ne développe la maladie",
correct: false,
correction: "Non frérot. Là tu parles plutôt d’absence de pénétrance."
},
{
text: "Elle correspond uniquement à une variation du nombre de chromosomes",
correct: false,
correction: "Non chef 💀 Rien à voir avec la définition."
},
{
text: "Elle est obligatoirement liée à l’âge",
correct: false,
correction: "Non. L’âge est surtout cité comme facteur pouvant modifier la pénétrance."
}
],
explanation: "L’expressivité variable signifie qu’une même anomalie peut provoquer des manifestations différentes selon les individus. Le cours cite notamment l’ostéogenèse imparfaite."
},
{
id: 15,
type: 'QCM',
question: "Quelle proposition concernant la génétique médicale est exacte ?",
options: [
{
text: "Il s’agit d’une spécialité uniquement biologique",
correct: false,
correction: "Non chef 😭 La génétique médicale est une spécialité clinico-biologique."
},
{
text: "Elle a été créée comme spécialité médicale en 1994",
correct: true,
correction: "Oui boss 📅 Le cours indique 1994 pour la création de la spécialité."
},
{
text: "La cytogénétique étudie uniquement les protéines plasmatiques",
correct: false,
correction: "Non frérot. La cytogénétique étudie les anomalies à l’échelle des chromosomes."
},
{
text: "La génétique moléculaire étudie exclusivement l’architecture des chromosomes au microscope",
correct: false,
correction: "Non chef. Elle travaille à l’échelle des gènes."
},
{
text: "La génétique médicale ne s’intéresse pas à la transmission familiale des maladies",
correct: false,
correction: "Non 💀 C’est justement un de ses grands objectifs."
}
],
explanation: "La génétique médicale est une spécialité clinico-biologique créée en 1994. Elle associe activité clinique et laboratoire, notamment cytogénétique et génétique moléculaire."
},
{
id: 16,
type: 'QRM',
question: "Concernant l’organisation générale du génome humain, quelles propositions sont exactes ?",
options: [
{
text: "Les nucléotides sont compactés dans les chromosomes grâce notamment aux histones",
correct: true,
correction: "Oui boss 🧠 ADN + histones = nucléosomes, puis organisation chromosomique."
},
{
text: "Environ 80 % des séquences nucléotidiques sont transcrites en ARN",
correct: true,
correction: "Exact chef 🧬 Transcrit ne veut pas dire codant : voilà le piège."
},
{
text: "Environ 80 % du génome code directement pour des protéines",
correct: false,
correction: "Non frérot 😭 Seulement 1 à 2 % est codant pour les protéines."
},
{
text: "Le génome non codant n’est jamais transcrit",
correct: false,
correction: "Non chef. Environ 78 % de l’ADN est justement décrit comme transcrit en ARN non codant."
},
{
text: "Une variation génétique entraîne forcément une maladie",
correct: false,
correction: "Non 💀 Variation et pathogénicité, ce n’est absolument pas synonyme."
}
],
explanation: "L’ADN humain est compacté grâce aux histones. Une grande partie du génome est transcrite en ARN, mais seulement 1 à 2 % est codante pour les protéines."
},
{
id: 17,
type: 'QRM',
question: "Concernant les Structural Variants, quelles propositions sont exactes ?",
options: [
{
text: "Une inversion peut être un SV équilibré",
correct: true,
correction: "Oui boss 🔄 Pas de perte ni de gain obligatoire : l’inversion peut être équilibrée."
},
{
text: "Une duplication est un SV déséquilibré",
correct: true,
correction: "Exact chef 🧠 Duplication = gain de matériel chromosomique."
},
{
text: "Une délétion est toujours classée parmi les SV équilibrés",
correct: false,
correction: "Non frérot 😭 Délétion = perte de matériel, donc déséquilibré."
},
{
text: "Une translocation implique obligatoirement une perte de matériel chromosomique",
correct: false,
correction: "Non chef. Une translocation peut être équilibrée."
},
{
text: "Il existe moins de dix variations structurales par individu",
correct: false,
correction: "Non 💀 Le cours parle de plus de 1000 SV par individu."
}
],
explanation: "Les SV équilibrés comprennent notamment translocations et inversions sans perte ni gain. Les délétions et duplications entraînent respectivement perte ou gain de matériel."
},
{
id: 18,
type: 'QRM',
question: "Concernant le génotype, le phénotype et les allèles, quelles propositions sont exactes ?",
options: [
{
text: "Le génotype correspond notamment à la configuration des allèles à un locus donné",
correct: true,
correction: "Oui boss 🧠 Le génotype décrit la constitution génétique de l’individu ou de la cellule."
},
{
text: "Le phénotype correspond aux caractères observés chez l’individu",
correct: true,
correction: "Exact chef 👀 Le phénotype, c’est ce qui s’exprime et qu’on peut observer."
},
{
text: "Un allèle sauvage contient obligatoirement une variation pathologique",
correct: false,
correction: "Non frérot 😭 L’allèle sauvage est justement décrit comme normal, sans variation pathologique."
},
{
text: "Un allèle morbide est obligatoirement dépourvu de toute variation",
correct: false,
correction: "Non chef 💀 C’est exactement l’inverse : il contient une variation pathologique responsable de la maladie."
},
{
text: "Deux allèles correspondent nécessairement à deux gènes différents",
correct: false,
correction: "Non. Les allèles sont différentes versions de la séquence d’un même locus."
}
],
explanation: "Le génotype décrit la constitution génétique et la configuration allélique. Le phénotype correspond au résultat observable. Les allèles sont différentes versions d’une séquence à un même locus."
},
{
id: 19,
type: 'QRM',
question: "Concernant la dominance, la pénétrance et l’expressivité, quelles propositions sont exactes ?",
options: [
{
text: "Une pénétrance complète correspond à 100 % des porteurs du génotype morbide malades",
correct: true,
correction: "Oui boss 🧠 100 % des porteurs expriment la maladie."
},
{
text: "La pénétrance peut varier avec l’âge",
correct: true,
correction: "Exact chef ⏳ Huntington et BRCA1/BRCA2 sont utilisés dans le cours pour illustrer ce phénomène."
},
{
text: "Une pénétrance incomplète signifie que tous les porteurs sont symptomatiques",
correct: false,
correction: "Non frérot 😭 C’est justement parce que certains porteurs restent asymptomatiques qu’elle est incomplète."
},
{
text: "La codominance produit toujours un phénotype intermédiaire",
correct: false,
correction: "Non chef. Le phénotype intermédiaire correspond à la semi-dominance."
},
{
text: "L’expressivité variable signifie nécessairement qu’une partie des porteurs n’est jamais malade",
correct: false,
correction: "Non 💀 Ça concerne la nature ou la sévérité des signes chez les personnes exprimant la maladie."
}
],
explanation: "La pénétrance répond à la question « la maladie s’exprime-t-elle ? », tandis que l’expressivité décrit comment elle s’exprime. La pénétrance peut notamment varier avec l’âge."
},
{
id: 20,
type: 'QRM',
question: "Concernant la génétique médicale en tant que discipline, quelles propositions sont exactes ?",
options: [
{
text: "Elle étudie notamment la transmission héréditaire des maladies au sein des familles",
correct: true,
correction: "Oui boss 🌳 L’étude familiale fait partie du cœur de la discipline."
},
{
text: "Elle cherche à identifier les mécanismes moléculaires ou chromosomiques responsables des maladies",
correct: true,
correction: "Exact chef 🧬 On cherche la cause à l’échelle du gène ou du chromosome."
},
{
text: "Le conseil génétique exclut toute information sur le pronostic",
correct: false,
correction: "Non frérot 😭 Le conseil génétique inclut justement risques, pronostic et traitement."
},
{
text: "La cytogénétique correspond à l’étude des anomalies à l’échelle des gènes",
correct: false,
correction: "Non chef. Cytogénétique = chromosomes ; génétique moléculaire = gènes."
},
{
text: "La spécialité est exclusivement exercée en dehors de l’hôpital",
correct: false,
correction: "Non 💀 Le cours précise qu’elle est majoritairement hospitalière."
}
],
explanation: "La génétique médicale étudie les transmissions familiales, identifie les mécanismes en cause et assure le conseil génétique. C’est une discipline clinico-biologique majoritairement hospitalière."
},
{
id: 21,
type: 'QRM',
question: "À propos des maladies génétiques, quelles propositions sont exactes ?",
options: [
{
text: "Elles sont individuellement rares",
correct: true,
correction: "Oui boss 🧠 La définition européenne d’une maladie rare est moins d’une personne sur 2000."
},
{
text: "Elles sont collectivement fréquentes",
correct: true,
correction: "Exact chef 🇫🇷 Le cours évoque environ 3 millions de personnes concernées en France."
},
{
text: "Elles sont extrêmement hétérogènes sur les plans clinique et/ou génétique",
correct: true,
correction: "Oui boss 🧬 Même grande catégorie, mais énormément de mécanismes et de tableaux différents."
},
{
text: "Elles apparaissent habituellement uniquement après 60 ans",
correct: false,
correction: "Non frérot 😭 Elles se manifestent souvent à la naissance ou pendant l’enfance, même si l’âge de début est variable."
},
{
text: "Elles sont toujours bénignes",
correct: false,
correction: "Non chef. Le cours précise qu’elles sont souvent sévères."
}
],
explanation: "Les maladies génétiques sont nombreuses, individuellement rares mais collectivement fréquentes, très hétérogènes et souvent sévères."
},
{
id: 22,
type: 'QRM',
question: "Concernant le dépistage néonatal présenté dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Le prélèvement est réalisé vers J2-J3 de vie",
correct: true,
correction: "Oui boss 👶 J2-J3, timing à retenir pour le test de Guthrie."
},
{
text: "Le sang peut être prélevé au niveau de la main ou du talon puis déposé sur un papier buvard",
correct: true,
correction: "Exact chef 🩸 Petite quantité de sang sur papier buvard."
},
{
text: "Le dépistage concerne les maladies pour lesquelles un traitement est disponible",
correct: true,
correction: "Oui boss 🧠 Le cours insiste : le dépistage néonatal concerne les maladies traitables."
},
{
text: "Le dépistage est réservé uniquement aux nouveau-nés ayant déjà des symptômes",
correct: false,
correction: "Non frérot 😭 Il est proposé systématiquement aux nouveau-nés."
},
{
text: "Le test de Guthrie est réalisé uniquement à l’âge de 6 mois",
correct: false,
correction: "Non chef 💀 Là t’as raté le mot « néonatal » de quelques mois."
}
],
explanation: "Le dépistage néonatal repose sur un prélèvement vers J2-J3, déposé sur papier buvard. Il vise des maladies traitables afin de permettre une prise en charge précoce."
},
{
id: 23,
type: 'QRM',
question: "Concernant les maladies chromosomiques, quelles propositions sont exactes ?",
options: [
{
text: "Elles peuvent résulter d’anomalies de nombre comme les aneuploïdies ou les polyploïdies",
correct: true,
correction: "Oui boss 🧠 Gain ou perte de chromosomes, voire modification globale du nombre de jeux chromosomiques."
},
{
text: "Elles peuvent résulter d’anomalies de structure comme les inversions, translocations, délétions ou duplications",
correct: true,
correction: "Exact chef 🧬 Les anomalies de structure font bien partie des maladies chromosomiques."
},
{
text: "Les anomalies supérieures à environ 5-10 Mb peuvent être visibles en microscopie optique",
correct: true,
correction: "Oui boss 🔬 C’est l’ordre de grandeur de résolution du caryotype."
},
{
text: "Toute anomalie chromosomique mesure moins d’une paire de bases",
correct: false,
correction: "Non frérot 😭 Une anomalie chromosomique, c’est justement du lourd en taille."
},
{
text: "Les microremaniements sont les anomalies les plus facilement visibles au caryotype",
correct: false,
correction: "Non chef. Ils sont trop petits pour être observés par microscopie optique."
}
],
explanation: "Les maladies chromosomiques peuvent être liées à des anomalies de nombre ou de structure. Le caryotype détecte surtout celles dépassant environ 5 à 10 Mb."
},
{
id: 24,
type: 'QRM',
question: "Concernant les maladies monogéniques mendéliennes, quelles propositions sont exactes ?",
options: [
{
text: "Une maladie autosomique dominante peut s’exprimer à l’état hétérozygote",
correct: true,
correction: "Oui boss 🧠 Un seul allèle muté suffit dans le modèle autosomique dominant."
},
{
text: "Avec un parent atteint d’une maladie autosomique dominante, le cours retient un risque de 50 % pour les enfants",
correct: true,
correction: "Exact chef 🎯 Le fameux 1 chance sur 2."
},
{
text: "Avec deux parents hétérozygotes pour une maladie autosomique récessive, le risque d’enfant malade est de 25 %",
correct: true,
correction: "Oui boss 🧬 25 % malade, 50 % conducteur, 25 % homozygote sain."
},
{
text: "Dans une maladie autosomique récessive, un seul allèle muté suffit toujours pour être malade",
correct: false,
correction: "Non frérot 😭 Il faut que les deux allèles soient mutés."
},
{
text: "Les maladies récessives liées à l’X ne concernent jamais les garçons",
correct: false,
correction: "Non chef 💀 C’est justement chez le garçon hémizygote que l’allèle muté peut s’exprimer."
}
],
explanation: "Autosomique dominante : maladie possible à l’état hétérozygote. Autosomique récessive : deux allèles mutés nécessaires. Récessive liée à l’X : l’hémizygotie masculine joue un rôle majeur."
},
{
id: 25,
type: 'QRM',
question: "Concernant les maladies multifactorielles et la notion de maladie génétique, quelles propositions sont exactes ?",
options: [
{
text: "Les maladies multifactorielles associent plusieurs facteurs génétiques et des facteurs environnementaux",
correct: true,
correction: "Oui boss 🧠 C’est exactement la définition donnée dans le cours."
},
{
text: "Une maladie génétique n’est pas forcément héréditaire",
correct: true,
correction: "Exact chef 🧬 Une mutation de novo peut provoquer une maladie sans avoir été héritée."
},
{
text: "L’âge de début d’une maladie génétique peut aller de la période fœtale jusqu’à un âge avancé",
correct: true,
correction: "Oui boss ⏳ Le cours insiste sur cette très grande variabilité."
},
{
text: "Toutes les maladies multifactorielles sont purement environnementales",
correct: false,
correction: "Non frérot 😭 Justement, elles combinent environnement et susceptibilité génétique."
},
{
text: "Une maladie génétique est obligatoirement transmissible à la descendance",
correct: false,
correction: "Non chef. Génétique ne veut pas dire systématiquement héréditaire ni transmissible."
}
],
explanation: "Les maladies multifactorielles résultent d’une combinaison de susceptibilités génétiques et de facteurs environnementaux. Par ailleurs, une maladie génétique n’est pas nécessairement héréditaire."
},
{
id: 26,
type: 'QRM',
question: "Concernant les variations génétiques décrites dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Il existe plus de 1000 variations structurales par individu",
correct: true,
correction: "Oui boss 🧠 Le cours donne plus de 1000 SV par individu."
},
{
text: "Les variations structurales peuvent mesurer environ 500 à 1,3 million de paires de bases",
correct: true,
correction: "Exact chef 📏 C’est l’ordre de grandeur indiqué pour les SV."
},
{
text: "Il existe environ 3 à 4 millions de variations ponctuelles par individu",
correct: true,
correction: "Oui boss 🧬 Les SNV sont beaucoup plus nombreuses."
},
{
text: "Le chromosome 1 mesure environ 250 millions de nucléotides",
correct: true,
correction: "Exact chef 🧠 Cette valeur est utilisée pour donner un ordre de grandeur par rapport aux SV."
},
{
text: "Les SNV correspondent uniquement à des anomalies toujours visibles au microscope optique",
correct: false,
correction: "Non frérot 😭 C’est tout l’inverse : elles sont à l’échelle de la séquence d’ADN."
}
],
explanation: "Le génome humain comporte de nombreuses variations : plus de 1000 SV et environ 3 à 4 millions de SNV par individu. Leur taille explique les techniques nécessaires pour les détecter."
},
{
id: 27,
type: 'QRM',
question: "Concernant l’homozygotie, l’hétérozygotie et l’hémizygotie, quelles propositions sont exactes ?",
options: [
{
text: "Un homozygote possède deux allèles strictement identiques à un locus donné",
correct: true,
correction: "Oui boss 🧠 Deux fois le même allèle = homozygote."
},
{
text: "Un hétérozygote simple possède un allèle normal et un allèle muté",
correct: true,
correction: "Exact chef 👌 Un sauvage + un muté."
},
{
text: "Un hétérozygote composite possède deux allèles anormaux différents",
correct: true,
correction: "Oui boss 🧬 Deux mutations différentes sur les deux allèles."
},
{
text: "Un mécanisme d’empreinte parentale peut conduire à une hémizygotie fonctionnelle",
correct: true,
correction: "Exact chef 🧠 Si un seul des deux allèles est exprimé, l’autre peut être fonctionnellement absent."
},
{
text: "Un hémizygote possède obligatoirement deux allèles identiques",
correct: false,
correction: "Non frérot 😭 Hémizygote = un seul allèle au locus considéré."
}
],
explanation: "Homozygote = deux allèles identiques ; hétérozygote = deux allèles différents ; hémizygote = un seul allèle fonctionnel ou présent au locus."
},
{
id: 28,
type: 'QRM',
question: "Concernant l’organisation territoriale française des maladies rares, quelles propositions sont exactes ?",
options: [
{
text: "Le premier Plan National Maladies Rares a débuté en 2005",
correct: true,
correction: "Oui boss 🇫🇷 Le PNMR1 couvre la période 2005-2008."
},
{
text: "Le PNMR1 a permis la labellisation des centres de référence et de compétences",
correct: true,
correction: "Exact chef 🧠 C’est l’un des grands apports du premier plan."
},
{
text: "Le PNMR2 a permis la création et la labellisation des filières de santé maladies rares",
correct: true,
correction: "Oui boss 👌 Le PNMR2 structure notamment ces filières."
},
{
text: "Il existe 23 filières de Santé Maladies Rares en France selon le cours",
correct: true,
correction: "Exact chef 🎯 23 filières, valeur explicitement donnée."
},
{
text: "Les filières de santé regroupent uniquement les laboratoires privés",
correct: false,
correction: "Non frérot 😭 Elles rassemblent centres, associations, sociétés savantes, équipes de recherche, laboratoires et autres acteurs."
}
],
explanation: "Les PNMR ont structuré progressivement la prise en charge des maladies rares. Les filières de santé maladies rares facilitent la collaboration entre les nombreux acteurs du parcours de soins."
},
{
id: 29,
type: 'QRM',
question: "Concernant le Plan France Médecine Génomique et les plateformes de séquençage décrites dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Le Plan France Médecine Génomique 2025 a été mis en place en 2015",
correct: true,
correction: "Oui boss 🧬 Le cours date sa mise en place de 2015."
},
{
text: "Il vise notamment à favoriser un accès équitable à la médecine génomique",
correct: true,
correction: "Exact chef 🧠 L’objectif est justement d’éviter que l’accès dépende du CHU où tu tombes."
},
{
text: "SeQOIA est la plateforme parisienne couvrant principalement la moitié nord de la France",
correct: true,
correction: "Oui boss 🗺️ SeQOIA = Paris = moitié nord."
},
{
text: "Auragen est basée à Lyon et couvre principalement la moitié sud de la France",
correct: true,
correction: "Exact chef 🧬 Auragen = Lyon = moitié sud."
},
{
text: "Tous les CHU français réalisent eux-mêmes l’intégralité du séquençage du génome entier",
correct: false,
correction: "Non frérot 😭 Le coût et les infrastructures nécessaires expliquent justement l’existence de plateformes nationales."
}
],
explanation: "Le Plan France Médecine Génomique 2025 vise un accès équitable au séquençage. Deux plateformes principales sont décrites : SeQOIA à Paris pour le nord et Auragen à Lyon pour le sud."
},
{
id: 30,
type: 'QRM',
question: "Concernant la prise en charge génomique et les maladies rares présentées en fin de cours, quelles propositions sont exactes ?",
options: [
{
text: "Les patients peuvent être examinés dans leur CHU avant prescription éventuelle d’analyses génomiques",
correct: true,
correction: "Oui boss 🧠 Le parcours commence localement avec l’équipe clinique."
},
{
text: "Les échantillons peuvent être envoyés sur les plateformes génomiques pour le séquençage",
correct: true,
correction: "Exact chef 🧬 Les plateformes assurent l’infrastructure lourde nécessaire au séquençage."
},
{
text: "Les données séquencées peuvent ensuite être interprétées localement dans les CHU par les biologistes",
correct: true,
correction: "Oui boss 💻 Séquençage centralisé ne veut pas dire que toute l’interprétation quitte le CHU."
},
{
text: "Chez les patients atteints de maladies rares, le rendement diagnostique du séquençage du génome est donné à 31,2 %",
correct: true,
correction: "Exact chef 🎯 31,2 %, chiffre bien précis donc évidemment parfait pour venir voler un point."
},
{
text: "Le séquençage du génome permet d’obtenir un diagnostic chez 100 % des patients atteints de maladie rare",
correct: false,
correction: "Non frérot 😭 Si le rendement est de 31,2 %, on est quand même très loin des 100 %."
}
],
explanation: "Le parcours associe évaluation clinique locale, séquençage sur des plateformes spécialisées et interprétation par les équipes biologiques. Le rendement diagnostique indiqué pour les maladies rares est de 31,2 %."
}
]
