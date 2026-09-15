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
},
{
id: 31,
type: 'QCM',
question: 'Une fois un diagnostic génétique posé, quel est notamment son intérêt selon le cours ?',
options: [
{
text: 'Permettre de définir un conseil génétique concernant notamment la transmission familiale et la prise en charge',
correct: true,
correction: 'Oui boss 🧠 Le diagnostic ne sert pas juste à coller une étiquette : il permet aussi d’informer sur la transmission et la prise en charge.'
},
{
text: 'Garantir qu’un traitement curatif est disponible',
correct: false,
correction: 'Non chef 😭 Le cours rappelle justement qu’il existe peu de traitements des maladies génétiques.'
},
{
text: 'Prouver que la maladie a nécessairement été héritée d’un parent',
correct: false,
correction: 'Non frérot 💀 Génétique ≠ forcément héréditaire. Les mutations de novo existent.'
},
{
text: 'Éliminer tout risque pour les autres membres de la famille',
correct: false,
correction: 'Non chef. Le conseil génétique sert justement à évaluer ces risques, pas à les faire disparaître par magie.'
},
{
text: 'Remplacer l’ensemble du suivi clinique du patient',
correct: false,
correction: 'Non 😭 Le diagnostic génétique s’intègre dans la prise en charge, il ne remplace pas tout le reste.'
}
],
explanation: 'Le diagnostic génétique permet notamment d’établir un conseil génétique portant sur la transmission de la maladie dans la famille et sur sa prise en charge.'
},
{
id: 32,
type: 'QCM',
question: 'Parmi les enseignements suivants, lequel fait partie des prérequis de PASS à revoir avant l’UE ?',
options: [
{
text: 'La génétique des populations',
correct: true,
correction: 'Oui boss 🧠 Elle figure bien dans la liste des prérequis avec l’hérédité mendélienne, les chromosomes et les variations.'
},
{
text: 'La chirurgie cardiaque congénitale',
correct: false,
correction: 'Non chef 😭 Pas dans la liste des prérequis de cette UE.'
},
{
text: 'La pharmacologie des antifongiques',
correct: false,
correction: 'Non frérot. Mauvais module, mauvais univers.'
},
{
text: 'L’anatomie détaillée du médiastin',
correct: false,
correction: 'Non chef. Le cours demande de revoir de la génétique, pas tout le programme de PASS au hasard.'
},
{
text: 'La sémiologie neurologique de l’adulte',
correct: false,
correction: 'Non 💀 Rien à voir avec les prérequis listés.'
}
],
explanation: 'Les prérequis comprennent notamment introduction à la génétique, notions de gène et de variation, hérédité mendélienne, chromosomes et anomalies chromosomiques ainsi que génétique des populations.'
},
{
id: 33,
type: 'QCM',
question: 'Pour laquelle de ces maladies le mécanisme de mutation est-il explicitement indiqué comme étant à connaître ?',
options: [
{
text: 'La dystrophie musculaire de Duchenne',
correct: true,
correction: 'Oui boss 🧬 Duchenne fait partie des trois maladies dont le mécanisme de mutation est explicitement à connaître.'
},
{
text: 'La grippe',
correct: false,
correction: 'Non chef 😭 Déjà, la grippe est utilisée plus loin comme exemple de maladie environnementale.'
},
{
text: 'Une fracture traumatique',
correct: false,
correction: 'Non frérot 💀 On ne va pas chercher le variant responsable de ta chute dans l’escalier.'
},
{
text: 'Le livedo physiologique',
correct: false,
correction: 'Non chef. Rien à voir avec les mécanismes mutationnels demandés.'
},
{
text: 'La légionellose',
correct: false,
correction: 'Non. On est en génétique humaine, pas en bactério.'
}
],
explanation: 'Le cours demande de connaître les mécanismes de mutation pour la dystrophie musculaire de Duchenne, la mucoviscidose et le syndrome de l’X fragile.'
},
{
id: 34,
type: 'QCM',
question: 'Quelle relation entre ADN et chromosome est donnée dans le cours ?',
options: [
{
text: 'Une molécule d’ADN est compactée dans un chromosome',
correct: true,
correction: 'Oui boss 🧠 Une molécule d’ADN compactée correspond à un chromosome dans le schéma simplifié du cours.'
},
{
text: 'Un chromosome ne contient jamais d’ADN',
correct: false,
correction: 'Non chef 😭 Là on vient de faire disparaître le matériel génétique.'
},
{
text: 'Une molécule d’ADN correspond obligatoirement à 23 chromosomes',
correct: false,
correction: 'Non frérot. Tu viens de multiplier le conditionnement sans raison.'
},
{
text: 'L’ADN est compacté uniquement grâce aux phospholipides',
correct: false,
correction: 'Non chef. Le cours insiste sur le rôle des histones.'
},
{
text: 'La compaction de l’ADN produit directement des ribosomes',
correct: false,
correction: 'Non 💀 Ça produit une organisation chromatinienne, pas une usine à protéines.'
}
],
explanation: 'L’ADN humain est compacté dans les chromosomes grâce notamment aux histones.'
},
{
id: 35,
type: 'QCM',
question: 'Comment appelle-t-on les complexes résultant de l’association de l’ADN avec les histones selon le cours ?',
options: [
{
text: 'Les nucléosomes',
correct: true,
correction: 'Oui boss 🧠 ADN enroulé autour des histones = nucléosomes.'
},
{
text: 'Les centrosomes',
correct: false,
correction: 'Non chef 😭 Le mot ressemble vaguement mais ça n’a rien à voir.'
},
{
text: 'Les plasmides',
correct: false,
correction: 'Non frérot. Tu viens de passer chez les bactéries.'
},
{
text: 'Les lysosomes',
correct: false,
correction: 'Non chef. Organite différent, fonction différente.'
},
{
text: 'Les autosomes',
correct: false,
correction: 'Non 💀 Les autosomes sont les chromosomes non sexuels.'
}
],
explanation: 'Les histones permettent la compaction de l’ADN. Les complexes ADN-histones formés sont appelés nucléosomes.'
},
{
id: 36,
type: 'QCM',
question: 'À combien de paires de bases correspond 1 mégabase selon les unités données dans le cours ?',
options: [
{
text: '10³ paires de bases',
correct: false,
correction: 'Non chef 😭 10³ pb = 1 kb.'
},
{
text: '10⁶ paires de bases',
correct: true,
correction: 'Oui boss 🧠 1 Mb = 10⁶ pb. Le genre de conversion gratuite qui vient te voler un point.'
},
{
text: '10⁹ paires de bases',
correct: false,
correction: 'Non frérot. 10⁹ pb = 1 Gb.'
},
{
text: '10² paires de bases',
correct: false,
correction: 'Non chef. Beaucoup trop petit.'
},
{
text: '10¹² paires de bases',
correct: false,
correction: 'Non 💀 On a quitté les unités du tableau.'
}
],
explanation: 'Les unités données sont : 10³ pb = 1 kb, 10⁶ pb = 1 Mb et 10⁹ pb = 1 Gb.'
},
{
id: 37,
type: 'QCM',
question: 'Comment le cours distingue-t-il schématiquement les deux grandes échelles d’étude des variations génétiques ?',
options: [
{
text: 'Les grandes variations peuvent être visibles à l’échelle chromosomique, tandis que les variations fines s’étudient à l’échelle de la séquence d’ADN',
correct: true,
correction: 'Oui boss 🧠 Gros remaniement = chromosome ; petit détail nucléotidique = ADN.'
},
{
text: 'Toutes les variations sont obligatoirement visibles au microscope optique',
correct: false,
correction: 'Non chef 😭 Les petites variations nucléotidiques ne le sont évidemment pas.'
},
{
text: 'Les variations chromosomiques sont toujours plus petites que les variations nucléotidiques',
correct: false,
correction: 'Non frérot 💀 Tu viens d’inverser l’échelle.'
},
{
text: 'Les variations de quelques nucléotides sont étudiées uniquement par caryotype',
correct: false,
correction: 'Non chef. Le caryotype est beaucoup trop peu résolutif pour ça.'
},
{
text: 'La taille d’une variation n’influence jamais la technique utilisée',
correct: false,
correction: 'Non. C’est justement l’idée centrale de cette partie du cours.'
}
],
explanation: 'La prof organise les anomalies selon leur taille : anomalies grossières à l’échelle chromosomique et anomalies fines à l’échelle de l’ADN.'
},
{
id: 38,
type: 'QCM',
question: 'Quel ordre de grandeur de taille est donné pour les variations structurales ou SV ?',
options: [
{
text: 'Environ 500 à 1,3 million de paires de bases',
correct: true,
correction: 'Oui boss 📏 C’est la plage de taille indiquée pour les SV dans le cours.'
},
{
text: 'Environ 1 à 2 paires de bases uniquement',
correct: false,
correction: 'Non chef 😭 Ça serait plutôt l’échelle d’une petite variation nucléotidique.'
},
{
text: 'Toujours plus de 250 millions de paires de bases',
correct: false,
correction: 'Non frérot. Le chromosome 1 lui-même est donné autour de 250 millions de nucléotides.'
},
{
text: 'Toujours exactement 47 Mb',
correct: false,
correction: 'Non chef. 47 Mb correspond à l’ordre de grandeur du chromosome 21.'
},
{
text: 'Moins de 10 nucléotides dans tous les cas',
correct: false,
correction: 'Non 💀 Beaucoup trop petit pour la définition présentée ici.'
}
],
explanation: 'Le cours donne plus de 1000 SV par individu, d’une taille approximative allant de 500 à 1,3 million de paires de bases.'
},
{
id: 39,
type: 'QCM',
question: 'Pourquoi le terme « Single Nucleotide Variant » est-il décrit comme un peu trompeur ?',
options: [
{
text: 'Parce que le terme SNV peut également regrouper des anomalies portant sur plusieurs nucléotides',
correct: true,
correction: 'Oui boss 🧠 “Single” mais parfois plusieurs nucléotides… le naming a décidé de vivre sa vie.'
},
{
text: 'Parce qu’un SNV désigne obligatoirement un chromosome entier',
correct: false,
correction: 'Non chef 😭 On est précisément à l’échelle beaucoup plus fine de l’ADN.'
},
{
text: 'Parce qu’un SNV correspond toujours à une anomalie chromosomique de nombre',
correct: false,
correction: 'Non frérot. Monosomie et trisomie, ce n’est pas du SNV.'
},
{
text: 'Parce qu’un SNV est toujours visible au microscope',
correct: false,
correction: 'Non chef 💀 Beaucoup trop petit.'
},
{
text: 'Parce qu’aucun SNV n’existe dans le génome humain',
correct: false,
correction: 'Non. Le cours en donne 3 à 4 millions par individu.'
}
],
explanation: 'Bien que SNV signifie Single Nucleotide Variant, le cours précise que cette catégorie peut également inclure des anomalies de plusieurs nucléotides.'
},
{
id: 40,
type: 'QCM',
question: 'Quelle inversion historique de taille réelle entre chromosomes est explicitement mentionnée ?',
options: [
{
text: 'Le chromosome 19 est en réalité plus petit que le chromosome 20',
correct: true,
correction: 'Oui boss 🧠 Le classement historique n’est pas parfaitement fidèle aux tailles réelles : 19 < 20.'
},
{
text: 'Le chromosome 1 est plus petit que le chromosome 2',
correct: false,
correction: 'Non chef 😭 Le chromosome 1 reste le plus grand autosome dans le cours.'
},
{
text: 'Le chromosome 22 est plus petit que le chromosome 21',
correct: false,
correction: 'Non frérot. C’est justement le chromosome 21 qui est plus petit.'
},
{
text: 'Le chromosome 11 est plus petit que le chromosome 10',
correct: false,
correction: 'Non chef. Le cours indique au contraire que le 10 est réellement plus petit que le 11.'
},
{
text: 'Tous les chromosomes sont en réalité de taille identique',
correct: false,
correction: 'Non 💀 On va laisser cette proposition mourir tranquillement.'
}
],
explanation: 'Le séquençage a montré plusieurs exceptions à l’ordre historique : chromosome 10 plus petit que 11, 19 plus petit que 20 et 21 plus petit que 22.'
},
{
id: 41,
type: 'QCM',
question: 'Que désigne le terme « gonosomes » ?',
options: [
{
text: 'Les chromosomes sexuels X et Y',
correct: true,
correction: 'Oui boss 🧠 Gonosomes = chromosomes sexuels.'
},
{
text: 'Les chromosomes 1 à 22',
correct: false,
correction: 'Non chef 😭 Ceux-là sont les autosomes.'
},
{
text: 'Les différentes versions d’un même gène',
correct: false,
correction: 'Non frérot. Ça, ce sont les allèles.'
},
{
text: 'Les régions non codantes du génome',
correct: false,
correction: 'Non chef. Rien à voir avec les gonosomes.'
},
{
text: 'Les nucléosomes situés dans les gonades',
correct: false,
correction: 'Non 💀 Joli piège linguistique mais absolument pas.'
}
],
explanation: 'Les autosomes correspondent aux chromosomes 1 à 22 et les gonosomes aux chromosomes sexuels X et Y.'
},
{
id: 42,
type: 'QCM',
question: 'Quelle définition du gène est donnée dans le cours ?',
options: [
{
text: 'Une unité d’information génétique correspondant à une portion d’ADN située à une position connue sur un chromosome',
correct: true,
correction: 'Oui boss 🧠 Un gène = petit segment d’ADN porteur d’information et localisé sur un chromosome.'
},
{
text: 'Une paire complète de chromosomes homologues',
correct: false,
correction: 'Non chef 😭 Beaucoup trop grand.'
},
{
text: 'Uniquement une protéine circulante',
correct: false,
correction: 'Non frérot. Le gène est une séquence d’ADN.'
},
{
text: 'Une anomalie pathologique obligatoire',
correct: false,
correction: 'Non chef. Un gène n’est pas une maladie.'
},
{
text: 'Une variation de nombre chromosomique',
correct: false,
correction: 'Non 💀 Ça correspondrait plutôt à une anomalie chromosomique.'
}
],
explanation: 'Le gène est une unité d’information génétique, définie ici comme une portion d’ADN située à une position connue sur un chromosome.'
},
{
id: 43,
type: 'QCM',
question: 'Quelle proposition décrit correctement un allèle sauvage ?',
options: [
{
text: 'Un allèle normal sans variation pathologique',
correct: true,
correction: 'Oui boss 🧠 Sauvage = version normale sans variation pathologique.'
},
{
text: 'Un allèle contenant nécessairement une mutation responsable de maladie',
correct: false,
correction: 'Non chef 😭 Ça correspond à l’allèle morbide.'
},
{
text: 'Un chromosome entier dépourvu de gènes',
correct: false,
correction: 'Non frérot. Un allèle est une version d’une séquence à un locus.'
},
{
text: 'Un allèle présent uniquement chez les animaux sauvages',
correct: false,
correction: 'Non chef 💀 Le terme ne parle absolument pas de safari.'
},
{
text: 'Une séquence obligatoirement récessive',
correct: false,
correction: 'Non. Sauvage ne signifie pas récessif.'
}
],
explanation: 'L’allèle sauvage est l’allèle normal sans variation pathologique, contrairement à l’allèle morbide qui contient une variation responsable d’une maladie.'
},
{
id: 44,
type: 'QCM',
question: 'Quelle situation définit un hétérozygote simple ?',
options: [
{
text: 'Un allèle normal et un allèle muté à un même locus',
correct: true,
correction: 'Oui boss 🧠 Un sauvage + un muté = hétérozygote simple.'
},
{
text: 'Deux allèles anormaux différents',
correct: false,
correction: 'Non chef 😭 Ça correspond à l’hétérozygote composite.'
},
{
text: 'Deux allèles strictement identiques',
correct: false,
correction: 'Non frérot. Ça, c’est homozygote.'
},
{
text: 'Un seul allèle présent',
correct: false,
correction: 'Non chef. Ça correspond à l’hémizygotie.'
},
{
text: 'Trois allèles différents au même locus',
correct: false,
correction: 'Non 💀 Pas la définition du cours.'
}
],
explanation: 'Un hétérozygote simple possède un allèle normal et un allèle muté. Un hétérozygote composite possède deux allèles anormaux différents.'
},
{
id: 45,
type: 'QCM',
question: 'Laquelle des situations suivantes peut conduire à une hémizygotie sur un autosome selon le cours ?',
options: [
{
text: 'Une perte de matériel chromosomique sur le chromosome homologue',
correct: true,
correction: 'Oui boss 🧠 S’il manque la copie correspondante sur l’homologue, il ne reste qu’un allèle au locus.'
},
{
text: 'La présence de deux allèles strictement identiques',
correct: false,
correction: 'Non chef 😭 Ça correspond à une homozygotie.'
},
{
text: 'La présence de deux mutations différentes',
correct: false,
correction: 'Non frérot. Ça évoque l’hétérozygotie composite.'
},
{
text: 'La présence de quatre copies normales d’un gène',
correct: false,
correction: 'Non chef 💀 L’hémizygotie, c’est justement une seule copie fonctionnelle ou présente.'
},
{
text: 'Une semi-dominance',
correct: false,
correction: 'Non. Semi-dominance décrit une relation entre allèles, pas leur nombre.'
}
],
explanation: 'L’hémizygotie peut résulter du chromosome X chez le garçon, d’une perte de matériel sur un autosome ou d’une hémizygotie fonctionnelle liée à l’empreinte parentale.'
},
{
id: 46,
type: 'QCM',
question: 'Comment qualifie-t-on deux allèles lorsque l’hétérozygote AB exprime simultanément les phénotypes observés chez AA et BB ?',
options: [
{
text: 'Codominants',
correct: true,
correction: 'Oui boss 🧠 Les deux phénotypes s’expriment en même temps = codominance.'
},
{
text: 'Semi-dominants',
correct: false,
correction: 'Non chef 😭 Semi-dominance = phénotype intermédiaire.'
},
{
text: 'Récessifs tous les deux',
correct: false,
correction: 'Non frérot. Ce n’est pas la définition.'
},
{
text: 'Hémizygotes',
correct: false,
correction: 'Non chef. Rien à voir avec la relation de dominance.'
},
{
text: 'Homozygotes',
correct: false,
correction: 'Non 💀 On parle justement d’un individu AB.'
}
],
explanation: 'La codominance correspond à l’expression simultanée chez l’hétérozygote des caractéristiques associées à chacun des deux homozygotes.'
},
{
id: 47,
type: 'QCM',
question: 'Quels facteurs peuvent modifier la pénétrance d’un génotype morbide selon le cours ?',
options: [
{
text: 'L’âge, le sexe et l’environnement',
correct: true,
correction: 'Oui boss 🧠 La pénétrance n’est pas toujours figée : âge, sexe et environnement peuvent la modifier.'
},
{
text: 'Uniquement la couleur des yeux',
correct: false,
correction: 'Non chef 😭 Beaucoup trop spécifique et pas donné.'
},
{
text: 'Uniquement le nombre de chromosomes',
correct: false,
correction: 'Non frérot. Le cours cite plusieurs facteurs non chromosomiques.'
},
{
text: 'Uniquement la taille du patient',
correct: false,
correction: 'Non chef. Ce n’est pas le facteur décrit.'
},
{
text: 'Aucun facteur, la pénétrance est toujours constante',
correct: false,
correction: 'Non 💀 Huntington et BRCA viennent littéralement démonter cette proposition.'
}
],
explanation: 'La pénétrance peut varier notamment avec l’âge, le sexe et l’environnement.'
},
{
id: 48,
type: 'QCM',
question: 'Dans l’exemple de la chorée de Huntington, à quel âge la pénétrance est-elle décrite comme devenant complète ?',
options: [
{
text: 'À la naissance',
correct: false,
correction: 'Non chef 😭 Le cours précise justement qu’aucun individu n’est malade pendant l’enfance dans cet exemple.'
},
{
text: 'Vers 10 ans',
correct: false,
correction: 'Non frérot. Beaucoup trop tôt.'
},
{
text: 'Vers 20 ans',
correct: false,
correction: 'Non chef. Toujours trop tôt par rapport au support.'
},
{
text: 'Vers 70 à 80 ans',
correct: true,
correction: 'Oui boss 🧠 La pénétrance augmente avec l’âge pour devenir complète vers 70-80 ans dans l’exemple.'
},
{
text: 'Jamais',
correct: false,
correction: 'Non. Le cours parle bien d’une pénétrance complète à un âge avancé.'
}
],
explanation: 'Pour la chorée de Huntington, le cours illustre une pénétrance dépendante de l’âge, faible pendant l’enfance puis complète vers 70 à 80 ans.'
},
{
id: 49,
type: 'QCM',
question: 'Quel autre exemple de pénétrance augmentant avec l’âge est donné dans le cours ?',
options: [
{
text: 'Le cancer du sein associé à une mutation BRCA1/BRCA2',
correct: true,
correction: 'Oui boss 🧠 Deuxième exemple après Huntington : le risque d’expression augmente avec l’âge chez les porteurs BRCA1/BRCA2.'
},
{
text: 'Une fracture du poignet',
correct: false,
correction: 'Non chef 😭 Le schéma multifactoriel t’a fait déraper.'
},
{
text: 'Une grippe saisonnière',
correct: false,
correction: 'Non frérot. Aucun rapport avec la pénétrance d’un génotype morbide ici.'
},
{
text: 'Une dermatophytose',
correct: false,
correction: 'Non chef 💀 Mauvais cours.'
},
{
text: 'Une scoliose posturale isolée',
correct: false,
correction: 'Non. Ce n’est pas l’exemple du support.'
}
],
explanation: 'Le cours cite la chorée de Huntington et les mutations BRCA1/BRCA2 comme exemples de pénétrance dépendante de l’âge.'
},
{
id: 50,
type: 'QCM',
question: 'Quel mécanisme peut contribuer à l’expressivité variable d’une maladie selon le cours ?',
options: [
{
text: 'Des mutations différentes d’un même gène pouvant entraîner des effets différents sur la protéine',
correct: true,
correction: 'Oui boss 🧠 Pas la même mutation = pas forcément la même conséquence protéique = pas forcément le même phénotype.'
},
{
text: 'L’obligation pour tous les patients de produire exactement la même quantité de protéine',
correct: false,
correction: 'Non chef 😭 C’est justement l’inverse du concept expliqué.'
},
{
text: 'L’absence de toute variation dans le gène',
correct: false,
correction: 'Non frérot. On parle d’un allèle morbide et de mutations différentes.'
},
{
text: 'Une variation limitée uniquement au nombre de chromosomes',
correct: false,
correction: 'Non chef. L’exemple donné concerne des mutations dans un même gène.'
},
{
text: 'L’impossibilité pour une mutation d’interférer avec la protéine sauvage',
correct: false,
correction: 'Non 💀 Le cours cite justement cette possibilité.'
}
],
explanation: 'Des mutations différentes d’un même gène peuvent provoquer absence de protéine, surexpression ou interférence avec la protéine sauvage, expliquant des phénotypes variables.'
},
{
id: 51,
type: 'QCM',
question: 'Quels territoires peuvent être atteints différemment dans l’ostéogenèse imparfaite, exemple d’expressivité variable du cours ?',
options: [
{
text: 'La peau, l’audition et le squelette',
correct: true,
correction: 'Oui boss 🧠 Le cours cite précisément ces trois territoires pour illustrer la variabilité.'
},
{
text: 'Uniquement le foie',
correct: false,
correction: 'Non chef 😭 Pas l’exemple donné.'
},
{
text: 'Uniquement les reins',
correct: false,
correction: 'Non frérot. Toujours pas.'
},
{
text: 'Uniquement le cœur',
correct: false,
correction: 'Non chef. Le support insiste sur plusieurs manifestations différentes.'
},
{
text: 'Uniquement les cheveux',
correct: false,
correction: 'Non 💀 Tu réduis sévèrement l’exemple.'
}
],
explanation: 'L’ostéogenèse imparfaite est utilisée pour montrer qu’une même maladie peut présenter des manifestations variables touchant notamment peau, audition et squelette.'
},
{
id: 52,
type: 'QCM',
question: 'Que comprend le conseil génétique dans la définition donnée de la génétique médicale ?',
options: [
{
text: 'La communication d’informations sur les risques, le pronostic et le traitement de la maladie',
correct: true,
correction: 'Oui boss 🧠 Risques + pronostic + traitement : le conseil génétique ne se limite pas à calculer un pourcentage.'
},
{
text: 'Uniquement la prescription d’un caryotype',
correct: false,
correction: 'Non chef 😭 Beaucoup trop réducteur.'
},
{
text: 'Uniquement l’annonce du nom de la maladie',
correct: false,
correction: 'Non frérot. Le conseil va bien au-delà du diagnostic.'
},
{
text: 'Uniquement une information destinée au médecin et jamais à la famille',
correct: false,
correction: 'Non chef. Les patients et leurs familles sont explicitement concernés.'
},
{
text: 'La garantie d’une guérison',
correct: false,
correction: 'Non 💀 Le cours rappelle même qu’il existe peu de traitements.'
}
],
explanation: 'Le conseil génétique consiste à communiquer aux patients et à leurs familles des informations relatives aux risques, au pronostic et au traitement.'
},
{
id: 53,
type: 'QCM',
question: 'À quel rythme les progrès technologiques sont-ils décrits comme particulièrement rapides dans la spécialité ?',
options: [
{
text: 'Tous les 5 à 10 ans',
correct: true,
correction: 'Oui boss ⚡ Le cours souligne des évolutions technologiques majeures sur des périodes de 5 à 10 ans.'
},
{
text: 'Tous les 100 ans',
correct: false,
correction: 'Non chef 😭 La génétique bouge légèrement plus vite que ça.'
},
{
text: 'Tous les 30 à 50 ans uniquement',
correct: false,
correction: 'Non frérot. Le support donne une période bien plus courte.'
},
{
text: 'Exactement tous les 6 mois',
correct: false,
correction: 'Non chef. Ce chiffre n’est pas celui du cours.'
},
{
text: 'Aucun progrès technologique notable n’est décrit',
correct: false,
correction: 'Non 💀 La spécialité est justement présentée comme très dynamique technologiquement.'
}
],
explanation: 'La génétique médicale est fortement liée à la recherche et le cours souligne que les progrès technologiques peuvent être très importants tous les 5 à 10 ans.'
},
{
id: 54,
type: 'QCM',
question: 'Quelle proportion des maladies rares est présentée comme étant d’origine génétique ?',
options: [
{
text: 'Environ 10 %',
correct: false,
correction: 'Non chef 😭 Beaucoup trop bas.'
},
{
text: 'Environ 25 %',
correct: false,
correction: 'Non frérot. Toujours trop bas.'
},
{
text: 'Environ 50 %',
correct: false,
correction: 'Non chef. Pas encore.'
},
{
text: 'Environ 80 %',
correct: true,
correction: 'Oui boss 🧠 “80 % des maladies rares sont des maladies génétiques” : phrase à retenir.'
},
{
text: '100 %',
correct: false,
correction: 'Non. Toutes les maladies rares ne sont pas génétiques.'
}
],
explanation: 'Le cours indique qu’environ 80 % des maladies rares sont des maladies génétiques.'
},
{
id: 55,
type: 'QCM',
question: 'Pourquoi le nombre de phénotypes potentiellement associés à une cause moléculaire dépasse-t-il le nombre de gènes impliqués dans les maladies génétiques ?',
options: [
{
text: 'Parce qu’un même gène peut être responsable de plusieurs maladies différentes',
correct: true,
correction: 'Oui boss 🧠 Un gène peut faire plusieurs dégâts différents selon le contexte ou la variation.'
},
{
text: 'Parce que chaque maladie nécessite obligatoirement dix gènes différents',
correct: false,
correction: 'Non chef 😭 Ce n’est absolument pas la règle donnée.'
},
{
text: 'Parce que les gènes ne participent jamais aux maladies génétiques',
correct: false,
correction: 'Non frérot 💀 Ça commence mal pour une UE de génétique.'
},
{
text: 'Parce qu’un phénotype correspond toujours à un chromosome entier',
correct: false,
correction: 'Non chef. Mauvaise définition.'
},
{
text: 'Parce que les données OMIM ne comprennent aucun gène',
correct: false,
correction: 'Non. Le cours donne justement un nombre de gènes répertoriés.'
}
],
explanation: 'Le support donne 7 748 phénotypes potentiellement associés à une cause moléculaire pour 5 085 gènes impliqués et explique qu’un même gène peut donner plusieurs maladies.'
},
{
id: 56,
type: 'QRM',
question: 'Concernant les éléments explicitement indiqués comme importants à connaître dans cette UE, quelles propositions sont exactes ?',
options: [
{
text: 'Les signes cliniques du syndrome de l’X fragile font partie des exceptions à connaître',
correct: true,
correction: 'Oui boss 🧠 X fragile fait partie des maladies dont les signes cliniques sont explicitement à retenir.'
},
{
text: 'Les mécanismes de mutation de la mucoviscidose font partie des éléments à connaître',
correct: true,
correction: 'Exact chef 🧬 Mucoviscidose, Duchenne et X fragile : trio mutationnel annoncé.'
},
{
text: 'Tous les signes cliniques de toutes les maladies génétiques doivent être appris exhaustivement',
correct: false,
correction: 'Non frérot 😭 La prof dit justement l’inverse avec quelques exceptions.'
},
{
text: 'Le mécanisme mutationnel de la grippe doit être appris',
correct: false,
correction: 'Non chef 💀 Mauvais sujet.'
},
{
text: 'Les dysgonosomies sont explicitement exclues du programme',
correct: false,
correction: 'Non. Elles font partie des exceptions dont les signes sont à connaître.'
}
],
explanation: 'Le cours précise que certains signes cliniques sont à connaître, notamment pour mucoviscidose, X fragile, trisomies 13/18/21 et dysgonosomies, et que certains mécanismes mutationnels doivent être maîtrisés.'
},
{
id: 57,
type: 'QRM',
question: 'Concernant l’organisation fonctionnelle du génome humain, quelles propositions sont exactes ?',
options: [
{
text: 'Les histones participent à la compaction de l’ADN',
correct: true,
correction: 'Oui boss 🧠 Elles permettent l’organisation de l’ADN en nucléosomes.'
},
{
text: 'Environ 78 % de l’ADN est décrit comme transcrit en ARN non codant',
correct: true,
correction: 'Exact chef 🧬 Énorme partie transcrite, mais pas traduite en protéines.'
},
{
text: 'Les technologies omiques sont utilisées pour essayer de comprendre le rôle du génome non codant',
correct: true,
correction: 'Oui boss 🔬 C’est précisément la remarque ajoutée dans le cours.'
},
{
text: 'Le génome non codant correspond uniquement à de l’ADN jamais transcrit',
correct: false,
correction: 'Non frérot 😭 Une grande partie est justement transcrite en ARN non codant.'
},
{
text: 'Toutes les séquences transcrites codent obligatoirement une protéine',
correct: false,
correction: 'Non chef. C’est le piège fondamental de cette partie.'
}
],
explanation: 'Une grande partie du génome est transcrite sans coder des protéines. Le rôle de ce génome non codant est notamment étudié grâce aux technologies omiques.'
},
{
id: 58,
type: 'QRM',
question: 'Concernant le caryotype et la taille des chromosomes, quelles propositions sont exactes ?',
options: [
{
text: 'Les autosomes sont historiquement classés du plus grand au plus petit',
correct: true,
correction: 'Oui boss 🧠 C’est la logique historique du caryotype.'
},
{
text: 'Les gonosomes sont mis à part des autosomes',
correct: true,
correction: 'Exact chef 👌 X et Y ont leur petit coin à eux.'
},
{
text: 'Le chromosome 1 est donné autour de 250 Mb',
correct: true,
correction: 'Oui boss 📏 C’est le plus grand autosome dans le support.'
},
{
text: 'Le chromosome 21 est donné autour de 47 Mb',
correct: true,
correction: 'Exact chef 🧠 Et il est réellement plus petit que le 22.'
},
{
text: 'Le classement historique reflète parfaitement la taille réelle de tous les chromosomes',
correct: false,
correction: 'Non frérot 😭 Les paires 10/11, 19/20 et 21/22 viennent ruiner cette idée.'
}
],
explanation: 'Le caryotype classe historiquement les autosomes par taille, mais le séquençage a montré plusieurs exceptions à cet ordre apparent.'
},
{
id: 59,
type: 'QRM',
question: 'Concernant les variations structurales chromosomiques, quelles propositions sont exactes ?',
options: [
{
text: 'Une translocation peut être équilibrée',
correct: true,
correction: 'Oui boss 🔄 Déplacement sans perte ni gain dans le modèle simplifié du cours.'
},
{
text: 'Une délétion entraîne une perte de matériel chromosomique',
correct: true,
correction: 'Exact chef 🧠 Et elle est donc classée comme déséquilibrée.'
},
{
text: 'Une duplication est nécessairement équilibrée',
correct: false,
correction: 'Non frérot 😭 Duplication = gain de matériel = déséquilibré.'
},
{
text: 'Une inversion implique obligatoirement une perte de matériel',
correct: false,
correction: 'Non chef. Elle est rangée parmi les SV équilibrés dans le cours.'
},
{
text: 'Tous les SV correspondent à des anomalies de nombre des chromosomes',
correct: false,
correction: 'Non 💀 Les SV sont des anomalies de structure.'
}
],
explanation: 'Les SV équilibrés comprennent notamment translocations et inversions ; délétions et duplications sont déséquilibrées car elles modifient la quantité de matériel.'
},
{
id: 60,
type: 'QRM',
question: 'Concernant les allèles et les statuts génotypiques, quelles propositions sont exactes ?',
options: [
{
text: 'Les allèles correspondent à différentes versions de la séquence d’ADN à un locus donné',
correct: true,
correction: 'Oui boss 🧠 Même adresse génétique, versions différentes.'
},
{
text: 'Deux allèles peuvent différer par une variation de séquence',
correct: true,
correction: 'Exact chef 🧬 C’est précisément ce qui les distingue.'
},
{
text: 'Un hétérozygote possède deux allèles différents à un locus donné',
correct: true,
correction: 'Oui boss. Définition de base mais faut pas la rater.'
},
{
text: 'Un homozygote possède obligatoirement deux allèles différents',
correct: false,
correction: 'Non frérot 😭 Homozygote = deux allèles identiques.'
},
{
text: 'Un allèle morbide est nécessairement un allèle sauvage',
correct: false,
correction: 'Non chef 💀 Les deux définitions sont opposées.'
}
],
explanation: 'Les allèles sont différentes versions d’une même séquence à un locus. Leur combinaison permet de définir homozygotie ou hétérozygotie.'
},
{
id: 61,
type: 'QRM',
question: 'Concernant les situations d’hémizygotie décrites dans le cours, quelles propositions sont exactes ?',
options: [
{
text: 'Le chromosome X chez le garçon constitue un exemple d’hémizygotie',
correct: true,
correction: 'Oui boss 🧠 Pour certains loci de l’X, le garçon ne possède qu’un seul allèle.'
},
{
text: 'Une perte de matériel chromosomique sur un autosome peut entraîner une hémizygotie',
correct: true,
correction: 'Exact chef. Une copie saute, il n’en reste plus qu’une.'
},
{
text: 'L’empreinte parentale peut entraîner une hémizygotie fonctionnelle',
correct: true,
correction: 'Oui boss 🧬 Si un seul allèle est exprimé, l’autre peut être fonctionnellement silencieux.'
},
{
text: 'L’hémizygotie signifie qu’un seul allèle est disponible ou fonctionnel au locus considéré',
correct: true,
correction: 'Exact chef 🧠 Voilà l’idée générale derrière les différents exemples.'
},
{
text: 'L’hémizygotie correspond obligatoirement à deux allèles strictement identiques',
correct: false,
correction: 'Non frérot 😭 Ça, c’est l’homozygotie.'
}
],
explanation: 'Le cours décrit plusieurs situations d’hémizygotie : chromosome X masculin, perte autosomique et expression monoallélique liée à l’empreinte parentale.'
},
{
id: 62,
type: 'QRM',
question: 'Concernant dominance et récessivité dans l’exemple des fleurs du cours, quelles propositions sont exactes ?',
options: [
{
text: 'Si AA et AB ont le même phénotype, l’allèle A est dominant sur B',
correct: true,
correction: 'Oui boss 🌹 AA = AB, donc A écrase l’expression phénotypique de B.'
},
{
text: 'Dans cette situation, l’allèle B est dit récessif',
correct: true,
correction: 'Exact chef 🧠 C’est le complément logique de la dominance de A.'
},
{
text: 'Un phénotype intermédiaire définit une codominance',
correct: false,
correction: 'Non frérot 😭 Intermédiaire = semi-dominance.'
},
{
text: 'La codominance signifie qu’aucun des deux phénotypes n’est exprimé',
correct: false,
correction: 'Non chef. Les deux s’expriment.'
},
{
text: 'Dominance et récessivité indiquent le nombre de chromosomes du patient',
correct: false,
correction: 'Non 💀 Aucun rapport avec la ploïdie.'
}
],
explanation: 'Un allèle est dominant si l’hétérozygote présente le même phénotype que l’homozygote correspondant ; l’autre allèle est alors récessif.'
},
{
id: 63,
type: 'QRM',
question: 'Concernant la pénétrance, quelles propositions sont exactes ?',
options: [
{
text: 'Une pénétrance incomplète signifie que certains porteurs du génotype morbide restent asymptomatiques',
correct: true,
correction: 'Oui boss 🧠 Porteur ne veut donc pas forcément dire malade.'
},
{
text: 'La pénétrance s’exprime en pourcentage',
correct: true,
correction: 'Exact chef 📊 C’est une proportion parmi les porteurs du génotype.'
},
{
text: 'Une pénétrance complète correspond à 100 %',
correct: true,
correction: 'Oui boss. Là tous les porteurs sont malades.'
},
{
text: 'La pénétrance décrit exclusivement la sévérité des symptômes',
correct: false,
correction: 'Non frérot 😭 Ça se rapproche plutôt de l’expressivité.'
},
{
text: 'Une pénétrance de 50 % signifie que tous les porteurs présentent exactement la moitié des symptômes',
correct: false,
correction: 'Non chef 💀 Ça veut dire qu’environ la moitié des porteurs expriment le phénotype.'
}
],
explanation: 'La pénétrance correspond à la proportion de porteurs d’un génotype morbide qui présentent effectivement la maladie.'
},
{
id: 64,
type: 'QRM',
question: 'Concernant l’expressivité variable, quelles propositions sont exactes ?',
options: [
{
text: 'Elle correspond à des manifestations différentes d’un même allèle morbide selon les individus',
correct: true,
correction: 'Oui boss 🧠 Même anomalie, tableaux cliniques différents.'
},
{
text: 'Des mutations différentes du même gène peuvent contribuer à cette variabilité',
correct: true,
correction: 'Exact chef 🧬 La conséquence protéique n’est pas forcément la même.'
},
{
text: 'Une mutation peut entraîner une absence complète de protéine',
correct: true,
correction: 'Oui boss. C’est l’un des mécanismes cités.'
},
{
text: 'Une mutation peut interférer avec la protéine sauvage',
correct: true,
correction: 'Exact chef 🧠 Autre mécanisme explicitement donné.'
},
{
text: 'L’expressivité variable signifie obligatoirement qu’une partie des porteurs est asymptomatique',
correct: false,
correction: 'Non frérot 😭 Ça, c’est la pénétrance incomplète.'
}
],
explanation: 'L’expressivité décrit la diversité des manifestations cliniques chez des individus porteurs d’une même anomalie morbide.'
},
{
id: 65,
type: 'QRM',
question: 'Concernant l’exercice de la génétique médicale, quelles propositions sont exactes ?',
options: [
{
text: 'La spécialité comporte une activité clinique en consultation',
correct: true,
correction: 'Oui boss 👨‍⚕️ Génétique médicale = pas juste des tubes et des machines.'
},
{
text: 'Elle comporte également une activité en laboratoire de diagnostic',
correct: true,
correction: 'Exact chef 🧬 C’est pour ça qu’elle est dite clinico-biologique.'
},
{
text: 'Elle est décrite comme exclusivement libérale',
correct: false,
correction: 'Non frérot 😭 Le cours précise qu’elle est majoritairement hospitalière.'
},
{
text: 'Aucun service médical n’a besoin de génétique selon le cours',
correct: false,
correction: 'Non chef. La prof dit justement que tous les services en ont besoin.'
},
{
text: 'La génétique médicale n’a aucun lien avec la recherche',
correct: false,
correction: 'Non 💀 Elle est au contraire très liée aux équipes de recherche.'
}
],
explanation: 'La génétique médicale est une spécialité clinico-biologique, transversalement utile aux différents services et fortement liée à la recherche.'
},
{
id: 66,
type: 'QRM',
question: 'Concernant les maladies génétiques dans leur ensemble, quelles propositions sont exactes ?',
options: [
{
text: 'Elles sont extrêmement hétérogènes sur le plan clinique et/ou génétique',
correct: true,
correction: 'Oui boss 🧠 Sous le même mot “génétique”, les tableaux peuvent être radicalement différents.'
},
{
text: 'Elles sont souvent sévères',
correct: true,
correction: 'Exact chef. C’est l’une des caractéristiques générales données.'
},
{
text: 'Elles se manifestent souvent à la naissance ou pendant l’enfance',
correct: true,
correction: 'Oui boss 👶 Même si leur âge de début peut en réalité être très variable.'
},
{
text: 'Elles concernent uniquement des familles ayant déjà plusieurs malades',
correct: false,
correction: 'Non frérot 😭 Une mutation de novo peut surgir dans n’importe quelle famille.'
},
{
text: 'Elles ont toutes exactement le même pronostic',
correct: false,
correction: 'Non chef 💀 Le cours dit l’inverse : conséquences très variables.'
}
],
explanation: 'Les maladies génétiques sont nombreuses, hétérogènes, souvent sévères et fréquemment révélées tôt, tout en pouvant concerner n’importe quelle famille.'
},
{
id: 67,
type: 'QRM',
question: 'Concernant le dépistage néonatal présenté dans le cours, quelles propositions sont exactes ?',
options: [
{
text: 'Il est proposé à tous les nouveau-nés',
correct: true,
correction: 'Oui boss 👶 Ce n’est pas réservé aux enfants déjà symptomatiques.'
},
{
text: 'Le prélèvement peut être réalisé au niveau du talon',
correct: true,
correction: 'Exact chef 🩸 Talon ou main dans le support.'
},
{
text: 'Le prélèvement est réalisé vers J2-J3 de vie',
correct: true,
correction: 'Oui boss ⏱️ Timing précis à connaître.'
},
{
text: 'Deux maladies ont été ajoutées au programme en 2025 grâce au développement de traitements',
correct: true,
correction: 'Exact chef 🧠 Le lien traitement-dépistage est clairement souligné.'
},
{
text: 'Le programme vise en priorité les maladies pour lesquelles aucun traitement n’existe',
correct: false,
correction: 'Non frérot 😭 Le cours insiste : le dépistage concerne les maladies traitables.'
}
],
explanation: 'Le dépistage néonatal est systématique, réalisé précocement sur papier buvard et concerne les maladies pour lesquelles une prise en charge thérapeutique est disponible.'
},
{
id: 68,
type: 'QRM',
question: 'Pourquoi une maladie génétique n’est-elle pas nécessairement héréditaire ?',
options: [
{
text: 'Une mutation peut apparaître de novo avant la fécondation ou avant la naissance',
correct: true,
correction: 'Oui boss 🧬 Nouvelle mutation = maladie génétique sans antécédent familial.'
},
{
text: 'Dans une maladie récessive, des parents porteurs sains peuvent avoir un enfant homozygote malade',
correct: true,
correction: 'Exact chef 🧠 Les parents peuvent être indemnes tout en transmettant chacun un allèle muté.'
},
{
text: 'Toute maladie génétique est obligatoirement transmise par un parent malade',
correct: false,
correction: 'Non frérot 😭 C’est précisément ce que cette partie du cours démonte.'
},
{
text: 'Le terme génétique signifie exactement la même chose que transmissible',
correct: false,
correction: 'Non chef. Génétique ≠ héréditaire.'
},
{
text: 'Une mutation de novo est forcément présente depuis plusieurs générations',
correct: false,
correction: 'Non 💀 “De novo” voudrait sinon légèrement perdre son sens.'
}
],
explanation: 'Une maladie peut être génétique sans avoir été héritée, notamment en cas de mutation de novo ou de transmission récessive par des parents porteurs sains.'
},
{
id: 69,
type: 'QRM',
question: 'Quelles sont les trois grandes catégories de maladies génétiques décrites dans le cours ?',
options: [
{
text: 'Les maladies chromosomiques',
correct: true,
correction: 'Oui boss 🧠 Première grande catégorie.'
},
{
text: 'Les maladies monogéniques',
correct: true,
correction: 'Exact chef 🧬 Anomalies au niveau d’un gène.'
},
{
text: 'Les maladies multifactorielles ou polygéniques',
correct: true,
correction: 'Oui boss. Plusieurs facteurs génétiques associés à l’environnement.'
},
{
text: 'Les maladies exclusivement infectieuses',
correct: false,
correction: 'Non frérot 😭 Pas une catégorie de maladies génétiques du cours.'
},
{
text: 'Les maladies exclusivement traumatiques',
correct: false,
correction: 'Non chef. Une fracture sert même d’exemple de pathologie environnementale.'
}
],
explanation: 'Le cours répartit les maladies génétiques en maladies chromosomiques, monogéniques et multifactorielles ou polygéniques.'
},
{
id: 70,
type: 'QRM',
question: 'Concernant les anomalies chromosomiques, quelles propositions sont exactes ?',
options: [
{
text: 'Les aneuploïdies sont des anomalies de nombre',
correct: true,
correction: 'Oui boss 🧠 Perte ou gain d’un ou plusieurs chromosomes.'
},
{
text: 'Les polyploïdies sont des anomalies de nombre',
correct: true,
correction: 'Exact chef. Elles appartiennent à la même grande catégorie.'
},
{
text: 'Les insertions font partie des anomalies de structure citées',
correct: true,
correction: 'Oui boss 🧬 Elles figurent bien dans la liste avec inversions, translocations, délétions et duplications.'
},
{
text: 'Une anomalie chromosomique peut être équilibrée ou déséquilibrée',
correct: true,
correction: 'Exact chef 🧠 Autre axe de classification donné.'
},
{
text: 'Toutes les anomalies chromosomiques sont nécessairement visibles au microscope optique',
correct: false,
correction: 'Non frérot 😭 Les microremaniements trop petits échappent au caryotype.'
}
],
explanation: 'Les anomalies chromosomiques peuvent toucher le nombre ou la structure et être équilibrées ou déséquilibrées. Leur visibilité dépend notamment de leur taille.'
},
{
id: 71,
type: 'QRM',
question: 'Concernant les microremaniements chromosomiques et les CNV, quelles propositions sont exactes ?',
options: [
{
text: 'Les microremaniements chromosomiques sont trop petits pour être visibles au microscope optique',
correct: true,
correction: 'Oui boss 🔬 Sous la résolution du caryotype, ils passent sous le radar.'
},
{
text: 'Les CNV correspondent à des variations déséquilibrées du nombre de copies',
correct: true,
correction: 'Exact chef 🧠 Gain ou perte de copies = déséquilibre.'
},
{
text: 'Les microdélétions ne sont jamais des CNV',
correct: false,
correction: 'Non frérot 😭 Elles en font justement partie.'
},
{
text: 'Les microduplications sont toujours des anomalies équilibrées',
correct: false,
correction: 'Non chef. Gain de copie = déséquilibré.'
},
{
text: 'Le caryotype est toujours suffisamment résolutif pour les CNV',
correct: false,
correction: 'Non 💀 Le cours explique précisément qu’il faut des techniques plus résolutives.'
}
],
explanation: 'Les CNV sont des anomalies déséquilibrées trop petites pour le caryotype classique et comprennent notamment microdélétions et microduplications.'
},
{
id: 72,
type: 'QRM',
question: 'Concernant les maladies monogéniques, quelles propositions sont exactes ?',
options: [
{
text: 'Elles sont dues à des anomalies au niveau des gènes et des nucléotides',
correct: true,
correction: 'Oui boss 🧬 On descend ici à l’échelle moléculaire.'
},
{
text: 'Les transmissions autosomiques dominantes et récessives sont classées parmi les modes mendéliens',
correct: true,
correction: 'Exact chef 🧠 Les classiques.'
},
{
text: 'Les maladies liées au chromosome X peuvent également relever de l’hérédité mendélienne',
correct: true,
correction: 'Oui boss. Elles figurent dans la catégorie du cours.'
},
{
text: 'Les maladies mitochondriales de transmission maternelle sont classées comme autosomiques dominantes',
correct: false,
correction: 'Non frérot 😭 Elles sont rangées parmi les mécanismes non mendéliens.'
},
{
text: 'Toute maladie monogénique est obligatoirement chromosomique',
correct: false,
correction: 'Non chef. Le cours distingue justement maladies monogéniques et chromosomiques.'
}
],
explanation: 'Les maladies monogéniques résultent d’anomalies géniques et peuvent suivre des modes mendéliens ou non mendéliens.'
},
{
id: 73,
type: 'QRM',
question: 'Concernant les hérédités mendéliennes présentées dans le cours, quelles propositions sont exactes ?',
options: [
{
text: 'Une maladie autosomique dominante peut s’exprimer chez un individu hétérozygote',
correct: true,
correction: 'Oui boss 🧠 Un seul allèle muté peut suffire.'
},
{
text: 'Dans une maladie autosomique récessive, les hétérozygotes sont appelés conducteurs de l’anomalie',
correct: true,
correction: 'Exact chef 🧬 Ils portent l’allèle muté sans être malades dans le modèle présenté.'
},
{
text: 'Deux parents hétérozygotes pour une maladie autosomique récessive ont 50 % de risque d’avoir un enfant conducteur',
correct: true,
correction: 'Oui boss 🎯 50 % conducteur, 25 % malade, 25 % homozygote sain.'
},
{
text: 'Dans une maladie récessive liée à l’X, le garçon peut exprimer la maladie car il est hémizygote',
correct: true,
correction: 'Exact chef 🧠 Un seul X muté suffit dans le modèle décrit.'
},
{
text: 'Deux parents hétérozygotes pour une maladie autosomique récessive ont 100 % de risque d’enfant malade',
correct: false,
correction: 'Non frérot 😭 Le risque donné est de 25 %.'
}
],
explanation: 'Le cours rappelle les schémas classiques autosomique dominant, autosomique récessif et récessif lié à l’X, avec leurs principaux risques de transmission.'
},
{
id: 74,
type: 'QRM',
question: 'Parmi les mécanismes suivants, lesquels sont classés parmi les maladies monogéniques non mendéliennes ?',
options: [
{
text: 'La transmission mitochondriale maternelle',
correct: true,
correction: 'Oui boss 🧠 C’est explicitement cité dans la catégorie non mendélienne.'
},
{
text: 'Les mutations dynamiques',
correct: true,
correction: 'Exact chef 🧬 Autre mécanisme non mendélien du support.'
},
{
text: 'La transmission autosomique dominante classique',
correct: false,
correction: 'Non frérot 😭 Ça, c’est du Mendel pur jus.'
},
{
text: 'La transmission autosomique récessive classique',
correct: false,
correction: 'Non chef. Mendélienne également.'
},
{
text: 'Toutes les anomalies de nombre chromosomique',
correct: false,
correction: 'Non 💀 Ce sont des maladies chromosomiques, pas monogéniques.'
}
],
explanation: 'Les maladies monogéniques non mendéliennes comprennent notamment maladies mitochondriales de transmission maternelle, empreinte parentale et mutations dynamiques.'
},
{
id: 75,
type: 'QRM',
question: 'Concernant les maladies multifactorielles, quelles propositions sont exactes ?',
options: [
{
text: 'Elles résultent de plusieurs facteurs génétiques de susceptibilité',
correct: true,
correction: 'Oui boss 🧠 Poly = plusieurs facteurs génétiques.'
},
{
text: 'Des facteurs environnementaux participent également à leur apparition',
correct: true,
correction: 'Exact chef 🌍 Génétique + environnement.'
},
{
text: 'Le schéma du cours repose sur l’idée qu’une combinaison de facteurs peut franchir un seuil et entraîner la maladie',
correct: true,
correction: 'Oui boss 🎯 Tant que le seuil n’est pas dépassé, pas forcément de pathologie.'
},
{
text: 'Elles sont causées par un seul facteur génétique sans influence environnementale',
correct: false,
correction: 'Non frérot 😭 Ce serait tout sauf multifactoriel.'
},
{
text: 'La grippe est utilisée comme exemple de maladie purement polygénique',
correct: false,
correction: 'Non chef. Elle sert d’exemple de maladie purement environnementale dans le schéma.'
}
],
explanation: 'Les maladies multifactorielles résultent de l’addition de plusieurs facteurs génétiques de susceptibilité et de facteurs environnementaux, avec une logique de seuil.'
},
{
id: 76,
type: 'QRM',
question: 'Concernant les Plans Nationaux Maladies Rares, quelles propositions sont exactes ?',
options: [
{
text: 'Le PNMR1 couvre la période 2005-2008',
correct: true,
correction: 'Oui boss 📅 Premier plan, 2005-2008.'
},
{
text: 'Le PNMR2 couvre la période 2011-2016',
correct: true,
correction: 'Exact chef 🧠 Et il est associé à la création des filières de santé maladies rares.'
},
{
text: 'Le PNMR3 couvre la période 2018-2022',
correct: true,
correction: 'Oui boss. Son objectif cité est notamment d’améliorer diagnostic et traitements.'
},
{
text: 'Le PNMR4 couvre la période 2025-2030',
correct: true,
correction: 'Exact chef 🇪🇺 Avec notamment amélioration de la prise en charge et coopération européenne.'
},
{
text: 'Le premier PNMR a débuté en 1994',
correct: false,
correction: 'Non frérot 😭 1994 correspond à la création de la spécialité de génétique médicale.'
}
],
explanation: 'Quatre PNMR sont décrits depuis 2005, chacun avec des objectifs et périodes spécifiques.'
},
{
id: 77,
type: 'QRM',
question: 'Concernant l’organisation française des centres et filières maladies rares, quelles propositions sont exactes ?',
options: [
{
text: 'Le territoire comprend environ 500 centres de référence, avec centres coordinateurs et constitutifs',
correct: true,
correction: 'Oui boss 🧠 C’est l’ordre de grandeur donné dans le cours.'
},
{
text: 'Les filières de santé maladies rares regroupent notamment centres, associations, équipes de recherche et laboratoires diagnostiques',
correct: true,
correction: 'Exact chef 🤝 L’idée est de faire travailler tout le monde ensemble.'
},
{
text: 'Les filières regroupent uniquement les associations de patients',
correct: false,
correction: 'Non frérot 😭 Elles rassemblent beaucoup plus d’acteurs.'
},
{
text: 'Il n’existe aucun maillage territorial en France',
correct: false,
correction: 'Non chef. Le maillage territorial est justement souligné.'
},
{
text: 'Les centres de compétences ne participent pas à la prise en charge de proximité',
correct: false,
correction: 'Non 💀 C’est précisément l’un de leurs rôles dans l’organisation présentée.'
}
],
explanation: 'La prise en charge repose sur un maillage de centres de référence et de compétences, complété par les filières de santé maladies rares qui coordonnent de nombreux acteurs.'
},
{
id: 78,
type: 'QRM',
question: 'Concernant le Plan France Médecine Génomique 2025, quelles propositions sont exactes ?',
options: [
{
text: 'Il a été mis en place en 2015',
correct: true,
correction: 'Oui boss 📅 Mise en place en 2015.'
},
{
text: 'Il vise notamment un accès équitable à la médecine génomique',
correct: true,
correction: 'Exact chef 🧠 L’objectif est que l’accès ne dépende pas des moyens techniques de chaque CHU.'
},
{
text: 'Le montant indiqué dans le cours est de 239 millions d’euros',
correct: true,
correction: 'Oui boss 💸 239 M€, le petit chiffre administratif bien sale.'
},
{
text: 'Il repose sur l’idée que chaque CHU possède nécessairement son propre séquenceur génomique complet',
correct: false,
correction: 'Non frérot 😭 Justement, les infrastructures sont trop lourdes et coûteuses pour ça.'
},
{
text: 'Le stockage et la bioinformatique sont décrits comme négligeables dans le coût',
correct: false,
correction: 'Non chef. Ils font partie des raisons justifiant les plateformes dédiées.'
}
],
explanation: 'Le Plan France Médecine Génomique 2025 vise à mutualiser des infrastructures coûteuses de séquençage, bioinformatique et stockage afin d’assurer un accès équitable.'
},
{
id: 79,
type: 'QRM',
question: 'Concernant l’organisation pratique du séquençage génomique décrite dans le cours, quelles propositions sont exactes ?',
options: [
{
text: 'Les patients sont initialement vus dans le CHU de leur ville',
correct: true,
correction: 'Oui boss 🏥 Le parcours commence localement.'
},
{
text: 'Les cliniciens peuvent prescrire une analyse génomique après examen du patient',
correct: true,
correction: 'Exact chef 🧠 Ce n’est pas un séquençage lancé au hasard.'
},
{
text: 'Les échantillons sanguins peuvent être envoyés vers les plateformes génomiques',
correct: true,
correction: 'Oui boss 🧬 Les plateformes réalisent la partie technique lourde.'
},
{
text: 'Les données séquencées peuvent ensuite être interprétées localement dans les CHU par les biologistes',
correct: true,
correction: 'Exact chef 💻 Centraliser le séquençage ne signifie pas centraliser toute l’interprétation.'
},
{
text: 'Tous les patients doivent obligatoirement se déplacer physiquement à Paris pour être séquencés',
correct: false,
correction: 'Non frérot 😭 Le sang voyage, pas nécessairement le patient.'
}
],
explanation: 'Le parcours combine évaluation clinique locale, séquençage sur une plateforme nationale et interprétation biologique pouvant être réalisée dans le CHU du patient.'
},
{
id: 80,
type: 'QRM',
question: 'Concernant quelques chiffres précis d’organisation et de génomique donnés en fin de cours, quelles propositions sont exactes ?',
options: [
{
text: 'Il existe 23 filières de Santé Maladies Rares en France',
correct: true,
correction: 'Oui boss 🎯 23 filières, valeur explicitement donnée dans le cours.'
},
{
text: 'Le rendement diagnostique du séquençage du génome chez les patients atteints de maladies rares est indiqué à 31,2 %',
correct: true,
correction: 'Exact chef 🧠 31,2 %, le chiffre avec virgule qu’on adore ressortir pour martyriser une promo entière.'
},
{
text: 'Le rendement diagnostique indiqué est de 100 %',
correct: false,
correction: 'Non frérot 😭 Si seulement. On est à 31,2 % dans le support.'
},
{
text: 'Il existe seulement 2 filières maladies rares en France',
correct: false,
correction: 'Non chef. Il y en a 23 selon le cours.'
},
{
text: 'Le séquençage permet d’obtenir un diagnostic chez tous les patients atteints d’une maladie rare',
correct: false,
correction: 'Non 💀 Le rendement de 31,2 % vient justement démonter cette proposition.'
}
],
explanation: 'Parmi les chiffres de fin de cours à retenir figurent 23 filières de Santé Maladies Rares et un rendement diagnostique du séquençage du génome de 31,2 % chez les patients atteints de maladies rares.'
}
]