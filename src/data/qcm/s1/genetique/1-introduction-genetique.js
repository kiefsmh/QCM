// Source du cours : 
export const introductionGenetiqueQuestions = [
{
id: 2,
type: "QCM",
question: "Concernant le génome humain, quelle proposition est exacte ?",
options: [
{
text: "Le génome humain représente environ 3,2 Mb",
correct: false,
correction: "Aïe frérot 😭 T’as perdu trois zéros en route. Le génome humain fait environ 3,2 Gb, soit 3,2 milliards de nucléotides."
},
{
text: "Environ 1 à 2 % du génome humain est codant pour des protéines",
correct: true,
correction: "Oui chef 🧠 Seulement 1 à 2 % du génome code pour des protéines. Tout ce bazar pour si peu de séquences codantes, magnifique."
},
{
text: "Environ 80 % du génome humain est codant pour des protéines",
correct: false,
correction: "Non 💀 80 % du génome est transcrit, pas codant. Le codant, c’est seulement 1 à 2 %."
},
{
text: "La majorité du génome humain n’est ni transcrite ni codante",
correct: false,
correction: "Non chef. Le cours précise qu’environ 80 % du génome est quand même transcrit, même si seulement 1 à 2 % code des protéines."
},
{
text: "1 Gb correspond à un million de nucléotides",
correct: false,
correction: "Non frérot 😭 1 Gb = 1 milliard de nucléotides. Un million, c’est 1 Mb."
}
],
explanation: "Le génome humain contient environ 3,2 milliards de nucléotides. Seuls 1 à 2 % sont codants pour des protéines, alors qu’environ 80 % du génome est transcrit."
},
{
id: 3,
type: "QCM",
question: "À propos des anomalies chromosomiques de nombre, quelle proposition est exacte ?",
options: [
{
text: "La formule chromosomique reste obligatoirement à 46 chromosomes",
correct: false,
correction: "Non chef 😭 Ça correspond plutôt aux anomalies de structure. Dans une anomalie de nombre, un ou plusieurs chromosomes sont perdus ou gagnés."
},
{
text: "Elles correspondent uniquement à des substitutions de nucléotides",
correct: false,
correction: "Non 💀 Là tu zoomes beaucoup trop : les substitutions sont des variations nucléotidiques."
},
{
text: "Un ou plusieurs chromosomes peuvent être perdus ou gagnés",
correct: true,
correction: "Oui 🧠 C’est exactement le principe : la formule chromosomique n’est plus équilibrée."
},
{
text: "Elles correspondent uniquement aux inversions chromosomiques",
correct: false,
correction: "Non chef. Une inversion modifie la structure d’un chromosome sans nécessairement modifier leur nombre."
},
{
text: "Elles sont toujours invisibles au caryotype",
correct: false,
correction: "Non frérot 😭 Le caryotype sert justement notamment à dénombrer les chromosomes et repérer des anomalies chromosomiques."
}
],
explanation: "Les anomalies chromosomiques de nombre correspondent à un gain ou à une perte d’un ou plusieurs chromosomes, contrairement aux anomalies de structure où le nombre total peut rester à 46."
},
{
id: 4,
type: "QCM",
question: "Quelle est approximativement la résolution du caryotype indiquée dans le cours ?",
options: [
{
text: "5 à 10 nucléotides",
correct: false,
correction: "Mais frr 😭 Là tu demandes au caryotype de voir quasiment une mutation ponctuelle. Il n’a absolument pas cette résolution."
},
{
text: "500 à 1000 nucléotides",
correct: false,
correction: "Non chef. Toujours beaucoup trop fin pour un caryotype."
},
{
text: "5 à 10 kb",
correct: false,
correction: "Non 💀 On est encore mille fois trop petit."
},
{
text: "5 à 10 Mb",
correct: true,
correction: "Oui chef 🧠 La résolution du caryotype est de l’ordre de 5 à 10 Mb, soit environ la taille d’une bande chromosomique."
},
{
text: "500 à 1000 Mb",
correct: false,
correction: "Non frérot 😭 Là ton caryotype verrait à peine un chromosome entier."
}
],
explanation: "Le caryotype est une technique relativement peu résolutive : sa résolution est de l’ordre de 5 à 10 Mb, correspondant approximativement à la taille d’une bande chromosomique."
},
{
id: 5,
type: "QCM",
question: "Parmi les chromosomes suivants, lequel est réellement le plus petit selon le cours ?",
options: [
{
text: "Le chromosome 1",
correct: false,
correction: "Non chef 😭 Le chromosome 1 est au contraire le plus grand, avec environ 250 millions de nucléotides."
},
{
text: "Le chromosome 10",
correct: false,
correction: "Non. Le cours précise seulement que le chromosome 10 est plus petit que le 11."
},
{
text: "Le chromosome 19",
correct: false,
correction: "Non frérot. Il est bien plus petit que le 20, mais ce n’est toujours pas le plus petit."
},
{
text: "Le chromosome 21",
correct: true,
correction: "Oui chef 🧠 Piège relou classique : le plus petit chromosome n’est pas le 22 mais le 21."
},
{
text: "Le chromosome 22",
correct: false,
correction: "Aïe 😭 C’est précisément l’erreur historique à retenir : le chromosome 21 est en réalité plus petit que le 22."
}
],
explanation: "Même si les chromosomes ont historiquement été classés par taille, quelques erreurs persistent dans la numérotation : notamment, le chromosome 21 est plus petit que le chromosome 22."
},
{
id: 6,
type: "QCM",
question: "Quelle définition correspond au locus d’un gène ?",
options: [
{
text: "La totalité du matériel génétique d’un individu",
correct: false,
correction: "Non chef 😭 Ça, c’est le génome."
},
{
text: "L’unité d’information génétique",
correct: false,
correction: "Presque, mais non 🧠 Ça correspond au gène lui-même."
},
{
text: "La position d’un gène sur un chromosome, définie par une coordonnée génomique",
correct: true,
correction: "Oui chef 🎯 Locus = l’adresse du gène sur le chromosome. En gros, son GPS génomique."
},
{
text: "L’ensemble des caractères observés chez un individu",
correct: false,
correction: "Non frérot. Ça, c’est le phénotype."
},
{
text: "Une version pathologique obligatoire d’un gène",
correct: false,
correction: "Non 😭 Ça se rapproche d’un allèle mutant ou morbide, pas du locus."
}
],
explanation: "Le locus correspond à la position précise d’un gène sur un chromosome, déterminée par une coordonnée génomique."
},
{
id: 7,
type: "QCM",
question: "Quelle proposition définit correctement le génotype ?",
options: [
{
text: "Il correspond exclusivement aux symptômes visibles d’un individu",
correct: false,
correction: "Non frérot 😭 Ça, c’est le phénotype."
},
{
text: "Il correspond à la constitution génétique de la cellule ou de l’individu, notamment à la configuration des allèles à un locus donné",
correct: true,
correction: "Oui chef 🧠 Le génotype, c’est la configuration génétique. Le phénotype, c’est ce que ça donne concrètement chez l’individu."
},
{
text: "Il correspond uniquement aux anomalies génétiques pathogènes",
correct: false,
correction: "Non. Un génotype ne désigne pas uniquement les mutations pathologiques."
},
{
text: "Il correspond à la position d’un gène sur un chromosome",
correct: false,
correction: "Non chef 😭 Ça, c’est le locus. Faut arrêter de mélanger tout le vocabulaire maintenant."
},
{
text: "Il correspond uniquement aux caractères observables dus à l’environnement",
correct: false,
correction: "Non 💀 Le cours définit bien le génotype comme la constitution génétique."
}
],
explanation: "Le génotype est la constitution génétique de l’individu ou de la cellule, notamment la configuration des allèles à un locus donné. Le phénotype correspond aux caractères observés."
},
{
id: 8,
type: "QCM",
question: "Quelle situation correspond à un hétérozygote composite ?",
options: [
{
text: "Deux allèles sauvages identiques",
correct: false,
correction: "Non frérot 😭 Ça, c’est un homozygote sauvage."
},
{
text: "Deux mutations identiques sur les deux chromosomes",
correct: false,
correction: "Non chef. Là tu décris plutôt un homozygote mutant."
},
{
text: "Un allèle sauvage et un allèle mutant",
correct: false,
correction: "Non 🧠 Ça correspond à un hétérozygote simple."
},
{
text: "Deux allèles mutants différents dans le même gène, portés en trans",
correct: true,
correction: "Oui chef 🔥 Deux mutations différentes du même gène, chacune sur un allèle différent : ça, c’est l’hétérozygotie composite."
},
{
text: "Deux mutations différentes portées obligatoirement en cis sur le même allèle",
correct: false,
correction: "Non frérot 😭 En composite, elles sont en trans. En cis = les deux mutations sont sur le même allèle."
}
],
explanation: "Un hétérozygote composite porte deux mutations différentes dans le même gène, en trans. La mucoviscidose est donnée dans le cours comme exemple possible de cette situation."
},
{
id: 9,
type: "QCM",
question: "Quelle définition correspond à un individu hémizygote ?",
options: [
{
text: "Il possède deux allèles identiques à un locus donné",
correct: false,
correction: "Non chef 😭 Ça, c’est un homozygote."
},
{
text: "Il possède deux allèles différents à un locus donné",
correct: false,
correction: "Non frérot. Ça correspond à un hétérozygote."
},
{
text: "Il possède un seul allèle à un locus donné",
correct: true,
correction: "Oui chef 🧠 Hémizygote = un seul allèle. Le grand classique, c’est un gène porté par le chromosome X chez un garçon."
},
{
text: "Il possède nécessairement trois copies d’un gène",
correct: false,
correction: "Non 💀 On vient littéralement de dire un seul allèle, pas trois."
},
{
text: "Il ne possède aucun chromosome sexuel",
correct: false,
correction: "Non chef 😭 L’hémizygotie n’a absolument pas cette définition."
}
],
explanation: "Un individu hémizygote ne possède qu’un seul allèle à un locus donné. Le cours cite notamment le chromosome X chez le garçon et certaines hémizygoties fonctionnelles."
},
{
id: 10,
type: "QCM",
question: "Si le phénotype d’un individu AB est intermédiaire entre les phénotypes AA et BB, comment les allèles A et B sont-ils qualifiés ?",
options: [
{
text: "Dominants tous les deux",
correct: false,
correction: "Non chef. La dominance implique que l’hétérozygote ressemble à l’un des homozygotes."
},
{
text: "Récessifs tous les deux",
correct: false,
correction: "Non frérot 😭 Ça ne décrit pas la situation intermédiaire."
},
{
text: "Semi-dominants",
correct: true,
correction: "Oui chef 🌹 Rouge + blanc = rose dans l’exemple du cours. Phénotype intermédiaire = semi-dominance."
},
{
text: "Co-dominants",
correct: false,
correction: "Non 🧠 En co-dominance, les deux phénotypes coexistent simultanément, ils ne fusionnent pas en un intermédiaire."
},
{
text: "Hémizygotes",
correct: false,
correction: "Non frérot 💀 Là tu mélanges un mode d’expression allélique avec un nombre d’allèles."
}
],
explanation: "Lorsque l’hétérozygote AB présente un phénotype intermédiaire entre AA et BB, les allèles sont dits semi-dominants. En co-dominance, les deux phénotypes coexistent."
},
{
id: 11,
type: "QCM",
question: "Quelle définition correspond à la pénétrance d’une anomalie génétique ?",
options: [
{
text: "Le degré de sévérité de la maladie chez un individu",
correct: false,
correction: "Non chef 😭 Ça correspond plutôt à l’expressivité."
},
{
text: "Le pourcentage d’individus malades porteurs de l’anomalie parmi l’ensemble des individus porteurs de cette anomalie",
correct: true,
correction: "Oui chef 🧠 C’est exactement la formule du cours. Porteurs malades / tous les porteurs × 100."
},
{
text: "Le nombre de mutations différentes présentes dans un gène",
correct: false,
correction: "Non frérot. Rien à voir avec la pénétrance."
},
{
text: "Le nombre de chromosomes présents dans une cellule",
correct: false,
correction: "Non 💀 Là on est revenu au caryotype sans prévenir."
},
{
text: "La proportion d’individus non porteurs qui développent la maladie",
correct: false,
correction: "Non chef. La pénétrance se calcule parmi les individus porteurs du génotype morbide."
}
],
explanation: "La pénétrance correspond au pourcentage d’individus malades parmi les individus porteurs de l’anomalie génétique. À 100 %, elle est complète ; en dessous de 100 %, elle est incomplète."
},
{
id: 12,
type: "QCM",
question: "Quelle proposition décrit correctement l’expressivité variable ?",
options: [
{
text: "Aucun porteur de l’anomalie ne présente de symptôme",
correct: false,
correction: "Non frérot 😭 Là la maladie ne s’exprime juste pas."
},
{
text: "Tous les individus porteurs présentent exactement les mêmes symptômes avec la même sévérité",
correct: false,
correction: "Non chef. C’est précisément l’inverse de l’expressivité variable."
},
{
text: "La maladie s’exprime chez les individus porteurs, mais avec un degré de sévérité ou des signes variables",
correct: true,
correction: "Oui chef 🧠 Même anomalie, mais pas forcément le même tableau clinique ni la même sévérité."
},
{
text: "Elle correspond obligatoirement à une pénétrance incomplète",
correct: false,
correction: "Non 💀 Le cours donne même l’ostéogenèse imparfaite comme exemple d’expressivité variable avec pénétrance complète."
},
{
text: "Elle signifie que l’anomalie génétique est absente chez certains individus malades",
correct: false,
correction: "Non chef 😭 Ça n’a rien à voir avec la définition."
}
],
explanation: "L’expressivité variable signifie que l’anomalie génétique s’exprime avec des manifestations ou une sévérité différentes selon les individus. Elle peut coexister avec une pénétrance complète ou incomplète."
},
{
id: 13,
type: "QCM",
question: "Quel est le premier geste à réaliser lors d’une consultation de génétique médicale selon le cours ?",
options: [
{
text: "Prescrire immédiatement un séquençage du génome entier",
correct: false,
correction: "Non frérot 😭 On ne balance pas directement 3,2 milliards de bases dans la machine avant même de parler au patient."
},
{
text: "Établir un arbre généalogique",
correct: true,
correction: "Oui chef 🌳 Premier réflexe : construire l’arbre généalogique pour étudier la transmission de la maladie dans la famille."
},
{
text: "Réaliser systématiquement un caryotype chez tous les apparentés",
correct: false,
correction: "Non chef. Les analyses viennent après la formulation d’hypothèses à partir notamment de l’histoire familiale."
},
{
text: "Prescrire obligatoirement un diagnostic préimplantatoire",
correct: false,
correction: "Non 💀 Le diagnostic préimplantatoire peut faire partie du conseil génétique dans certaines situations, ce n’est pas le premier geste universel."
},
{
text: "Commencer immédiatement un traitement génétique",
correct: false,
correction: "Non frérot 😭 Le cours précise justement que les possibilités thérapeutiques restent limitées pour de nombreuses anomalies constitutionnelles."
}
],
explanation: "La première étape d’une consultation génétique est l’établissement d’un arbre généalogique afin d’étudier le mode de transmission et d’orienter ensuite les analyses génétiques."
},
{
id: 14,
type: "QCM",
question: "Quelle activité de génétique biologique s’intéresse principalement aux anomalies à l’échelle du chromosome ?",
options: [
{
text: "La génétique moléculaire",
correct: false,
correction: "Non chef 😭 La génétique moléculaire zoome plutôt sur la séquence de l’ADN et les anomalies à l’échelle des gènes."
},
{
text: "La cytogénétique",
correct: true,
correction: "Oui chef 🧠 Cytogénétique = anomalies chromosomiques, avec notamment des pratiques de culture cellulaire."
},
{
text: "L’oncologie médicale uniquement",
correct: false,
correction: "Non frérot. L’oncogénétique est évoquée dans le cours, mais ce n’est pas la définition de la cytogénétique."
},
{
text: "La fœtopathologie exclusivement",
correct: false,
correction: "Non chef. La fœtopathologie est citée comme une FST possible."
},
{
text: "La bio-informatique médicale exclusivement",
correct: false,
correction: "Non 💀 La bio-informatique médicale est aussi citée parmi les FST, pas comme le champ étudiant directement les anomalies chromosomiques."
}
],
explanation: "La cytogénétique étudie les anomalies à l’échelle du chromosome. La génétique moléculaire s’intéresse davantage aux anomalies de séquence à l’échelle des gènes."
},
{
id: 15,
type: "QCM",
question: "À quel moment est réalisé le dépistage néonatal par test de Guthrie selon le cours ?",
options: [
{
text: "Immédiatement pendant l’accouchement",
correct: false,
correction: "Non chef 😭 Le bébé a quand même deux minutes pour arriver avant qu’on commence les QCM."
},
{
text: "Vers J2-J3 de vie",
correct: true,
correction: "Oui chef 👶🩸 Le dépistage est réalisé vers le deuxième ou troisième jour de vie."
},
{
text: "Vers l’âge de 6 mois",
correct: false,
correction: "Non frérot. Beaucoup trop tard par rapport au dépistage néonatal décrit."
},
{
text: "Uniquement à l’adolescence",
correct: false,
correction: "Non 💀 Le mot néonatal avait pourtant donné un indice assez massif."
},
{
text: "Uniquement si des symptômes apparaissent",
correct: false,
correction: "Non chef. Le principe est justement de dépister précocement certaines maladies graves mais traitables avant leurs conséquences."
}
],
explanation: "Le test de Guthrie est réalisé vers J2-J3 de vie. Le traitement précoce de certaines maladies dépistées peut considérablement améliorer leur pronostic."
},
{
id: 16,
type: "QRM",
question: "À propos du génome humain, quelles propositions sont exactes ?",
options: [
{
text: "Sa taille est d’environ 3,2 Gb",
correct: true,
correction: "Oui chef 🧠 3,2 Gb = environ 3,2 milliards de nucléotides."
},
{
text: "Environ 80 % du génome est transcrit",
correct: true,
correction: "Exact 🧬 Et pourtant seulement 1 à 2 % code des protéines. Beaucoup de transcription pour peu de protéines, quel rendement 😭."
},
{
text: "Environ 80 % du génome est codant pour des protéines",
correct: false,
correction: "Non frérot 😭 80 % est transcrit. Le codant ne représente que 1 à 2 %."
},
{
text: "Seulement 1 à 2 % du génome est transcrit",
correct: false,
correction: "Non chef. 1 à 2 %, c’est la partie codante pour les protéines."
},
{
text: "Le génome humain mesure environ 3,2 Mb",
correct: false,
correction: "Non 💀 3,2 Gb, pas Mb. Trois ordres de grandeur dans la tronche."
}
],
explanation: "Le génome humain mesure environ 3,2 Gb. Environ 80 % est transcrit mais seulement 1 à 2 % est codant pour des protéines."
},
{
id: 17,
type: "QRM",
question: "À propos des anomalies chromosomiques, quelles propositions sont exactes ?",
options: [
{
text: "Une anomalie chromosomique de nombre peut correspondre à la perte ou au gain d’un chromosome",
correct: true,
correction: "Oui chef 🧠 Gain ou perte de chromosome = anomalie de nombre."
},
{
text: "Lors d’une anomalie chromosomique de structure, la formule chromosomique peut rester à 46 chromosomes",
correct: true,
correction: "Oui 👌 La structure change, mais le nombre total de chromosomes peut rester normal."
},
{
text: "Une microduplication correspond à une petite perte de matériel chromosomique",
correct: false,
correction: "Non frérot 😭 Microduplication = petit gain. Microdélétion = petite perte."
},
{
text: "Une translocation est classée parmi les anomalies nucléotidiques ponctuelles",
correct: false,
correction: "Non chef 💀 Une translocation est une anomalie chromosomique de structure."
},
{
text: "Toutes les variations chromosomiques de structure sont forcément pathogènes",
correct: false,
correction: "Non. Le cours précise que les nombreuses variations structurales observées ne sont pas forcément pathogènes."
}
],
explanation: "Les anomalies chromosomiques peuvent être de nombre, avec gain ou perte de chromosomes, ou de structure, avec par exemple translocation, inversion, microdélétion ou microduplication."
},
{
id: 18,
type: "QRM",
question: "Concernant les notions d’homozygotie et d’hétérozygotie, quelles propositions sont exactes ?",
options: [
{
text: "Un individu homozygote possède deux allèles identiques à un locus donné",
correct: true,
correction: "Oui chef 🧠 Homozygote = même allèle des deux côtés."
},
{
text: "Un hétérozygote simple possède un allèle sauvage et un allèle mutant",
correct: true,
correction: "Exact 👌 Un sauvage + un mutant = hétérozygote simple."
},
{
text: "Un hétérozygote composite possède nécessairement ses deux mutations en cis",
correct: false,
correction: "Non frérot 😭 Dans l’hétérozygotie composite décrite, les deux mutations sont en trans, donc sur des allèles différents."
},
{
text: "Un homozygote mutant possède obligatoirement deux mutations différentes",
correct: false,
correction: "Non chef. L’homozygote mutant possède une mutation identique sur les deux chromosomes."
},
{
text: "Un individu hétérozygote possède deux allèles identiques",
correct: false,
correction: "Non 💀 Deux allèles différents = hétérozygote. Deux identiques = homozygote."
}
],
explanation: "L’homozygote possède deux allèles identiques. L’hétérozygote possède deux allèles différents ; il peut être simple ou composite selon la nature des allèles."
},
{
id: 19,
type: "QRM",
question: "À propos des maladies génétiques, quelles propositions sont exactes selon le cours ?",
options: [
{
text: "Une maladie génétique n’est pas forcément héréditaire",
correct: true,
correction: "Oui chef 🧠 Les mutations de novo sont l’exemple parfait : génétique, mais pas forcément héritée d’un parent."
},
{
text: "Une maladie génétique n’est pas forcément congénitale",
correct: true,
correction: "Exact 👌 Certaines maladies génétiques apparaissent plus tardivement, notamment certaines maladies neurodégénératives."
},
{
text: "Toute malformation congénitale est nécessairement causée par une anomalie génétique",
correct: false,
correction: "Non frérot 😭 Des facteurs environnementaux, des médicaments ou une infection materno-fœtale peuvent aussi être responsables."
},
{
text: "Une mutation de novo est toujours héritée de la mère",
correct: false,
correction: "Non chef 💀 De novo signifie justement qu’elle apparaît lors d’un nouvel événement et n’était pas héritée comme telle."
},
{
text: "Les trois quarts des maladies génétiques débutent après l’âge de 2 ans",
correct: false,
correction: "Non 😭 C’est l’inverse : les trois quarts apparaissent avant l’âge de 2 ans."
}
],
explanation: "Génétique ne signifie ni systématiquement héréditaire ni systématiquement congénital. Certaines mutations apparaissent de novo et certaines maladies ne se manifestent que tardivement."
},
{
id: 20,
type: "QRM",
question: "Concernant les maladies monogéniques et multifactorielles, quelles propositions sont exactes ?",
options: [
{
text: "Les maladies monogéniques correspondent à des anomalies situées à l’échelle des gènes",
correct: true,
correction: "Oui chef 🧠 Monogénique = anomalie intra-génique, on est à l’échelle du gène."
},
{
text: "Les maladies multifactorielles associent des facteurs génétiques et environnementaux",
correct: true,
correction: "Exact 👌 C’est le principe même des maladies multifactorielles comme le diabète ou l’obésité dans le cours."
},
{
text: "La trisomie 21 est une maladie multifactorielle",
correct: false,
correction: "Non frérot 😭 La trisomie 21 est classée parmi les maladies chromosomiques."
},
{
text: "Une maladie multifactorielle dépend uniquement d’un seul facteur génétique",
correct: false,
correction: "Non chef. Le cours parle d’une addition de plusieurs facteurs de susceptibilité génétique, en plus de l’environnement."
},
{
text: "Une maladie monogénique correspond obligatoirement à une anomalie du nombre de chromosomes",
correct: false,
correction: "Non 💀 Une anomalie du nombre de chromosomes relève des maladies chromosomiques."
}
],
explanation: "Les maladies monogéniques sont liées à des anomalies touchant un gène. Les maladies multifactorielles résultent de l’association de facteurs génétiques de susceptibilité et de facteurs environnementaux."
},
{
id: 21,
type: "QRM",
question: "Concernant le classement des chromosomes humains sur le caryotype, quelles propositions sont exactes ?",
options: [
{
text: "Le chromosome 10 est en réalité plus petit que le chromosome 11",
correct: true,
correction: "Oui chef 🧠 Première petite anomalie historique du classement : 10 < 11 en taille réelle."
},
{
text: "Le chromosome 19 est en réalité plus petit que le chromosome 20",
correct: true,
correction: "Exact 👌 Deuxième inversion à retenir : le 19 est plus petit que le 20."
},
{
text: "Le chromosome 21 est plus petit que le chromosome 22",
correct: true,
correction: "Oui chef 💀 Et pourtant il s’appelle 21. L’Histoire a décidé de nous compliquer les QCM."
},
{
text: "Le chromosome 1 est le plus petit chromosome humain",
correct: false,
correction: "Non frérot 😭 Le chromosome 1 est au contraire le plus grand, environ 250 millions de nucléotides."
},
{
text: "Les chromosomes X et Y sont classés au début du caryotype",
correct: false,
correction: "Non chef. Les chromosomes sexuels X et Y sont classés à la fin."
}
],
explanation: "Le classement historique comporte plusieurs exceptions : le chromosome 10 est plus petit que le 11, le 19 plus petit que le 20, et le 21 plus petit que le 22."
},
{
id: 22,
type: "QRM",
question: "Quelles situations peuvent correspondre à une hémizygotie selon le cours ?",
options: [
{
text: "Un gène porté par le chromosome X chez un garçon",
correct: true,
correction: "Oui chef 🧠 Le garçon n’a qu’un seul chromosome X : c’est l’exemple classique."
},
{
text: "Un allèle muté sur un autosome avec délétion de la région correspondante sur l’autre chromosome",
correct: true,
correction: "Exact 👌 Là, il ne reste fonctionnellement qu’un seul allèle sur cette région."
},
{
text: "Un mécanisme d’empreinte parentale éteignant l’expression de l’allèle opposé",
correct: true,
correction: "Oui chef 🧬 Le cours parle alors d’hémizygotie fonctionnelle."
},
{
text: "Deux allèles identiques sur un autosome",
correct: false,
correction: "Non frérot 😭 Ça, c’est juste de l’homozygotie."
},
{
text: "Deux allèles mutants différents en trans",
correct: false,
correction: "Non chef. Là tu décris une hétérozygotie composite."
}
],
explanation: "L’hémizygotie correspond à la présence d’un seul allèle à un locus. Elle peut être réelle, comme pour le chromosome X chez le garçon, ou fonctionnelle en cas de délétion ou d’empreinte parentale."
},
{
id: 23,
type: "QRM",
question: "À propos des symboles utilisés dans les arbres généalogiques, quelles propositions sont exactes ?",
options: [
{
text: "Les hommes sont représentés par des carrés",
correct: true,
correction: "Oui chef ⬛ Carré = homme. Celui-là faut vraiment qu’il soit gratuit."
},
{
text: "Les femmes sont représentées par des cercles",
correct: true,
correction: "Exact ⚪ Cercle = femme."
},
{
text: "Le proposidus est indiqué par une flèche noire",
correct: true,
correction: "Oui chef ➡️ Le proposidus est le premier patient étudié, celui à partir duquel débute l’analyse génétique."
},
{
text: "La consanguinité est représentée par une seule barre horizontale",
correct: false,
correction: "Non frérot 😭 La consanguinité est représentée par une double barre horizontale."
},
{
text: "Une femme conductrice d’une maladie récessive liée à l’X est représentée par un carré noir",
correct: false,
correction: "Non chef 💀 Le cours décrit un cercle avec un point noir au centre."
}
],
explanation: "Dans un arbre généalogique, les hommes sont des carrés, les femmes des cercles et le proposidus est désigné par une flèche. La consanguinité utilise une double barre horizontale."
},
{
id: 24,
type: "QRM",
question: "Concernant les données chiffrées sur les maladies génétiques, quelles propositions sont exactes ?",
options: [
{
text: "Plus de 7000 phénotypes génétiques sont actuellement connus dans la base de référence citée dans le cours",
correct: true,
correction: "Oui chef 🧠 Le cours indique plus de 7000 phénotypes connus."
},
{
text: "Presque 5000 gènes sont impliqués dans des maladies génétiques",
correct: true,
correction: "Exact 👌 Et il y a donc plus de phénotypes que de gènes, car un même gène peut être associé à plusieurs phénotypes."
},
{
text: "Environ 3 millions de personnes sont touchées par une maladie rare en France",
correct: true,
correction: "Oui chef 🇫🇷 Les maladies sont individuellement rares mais collectivement fréquentes."
},
{
text: "La définition européenne d’une maladie rare correspond à une maladie touchant plus d’une personne sur 2000",
correct: false,
correction: "Non frérot 😭 C’est moins d’une personne sur 2000."
},
{
text: "Le nombre de gènes impliqués dans les maladies génétiques est supérieur au nombre de phénotypes connus",
correct: false,
correction: "Non chef. C’est l’inverse : plus de 7000 phénotypes pour presque 5000 gènes."
}
],
explanation: "Le cours indique plus de 7000 phénotypes connus pour presque 5000 gènes impliqués. Les maladies rares touchent individuellement moins d’une personne sur 2000 mais concernent collectivement environ 3 millions de personnes en France."
},
{
id: 25,
type: "QRM",
question: "À propos de la spécialité de génétique médicale, quelles propositions sont exactes ?",
options: [
{
text: "La spécialité de génétique médicale a été créée en 1994",
correct: true,
correction: "Oui chef 📅 1994, date donnée dans le cours."
},
{
text: "Elle comprend une composante de génétique clinique et une composante de génétique biologique",
correct: true,
correction: "Exact 🧠 C’est une spécialité mixte avec des passerelles entre clinique et laboratoire."
},
{
text: "Le DES de génétique médicale dure 4 ans après l’externat",
correct: true,
correction: "Oui chef 🎓 Quatre ans avec phase socle, approfondissement puis consolidation en docteur junior."
},
{
text: "L’activité biologique ne peut s’exercer que dans les hôpitaux publics",
correct: false,
correction: "Non frérot 😭 Le cours précise qu’elle peut aussi s’exercer dans des laboratoires privés."
},
{
text: "La génétique clinique s’exerce principalement dans des laboratoires privés",
correct: false,
correction: "Non chef. La génétique clinique s’exerce surtout à l’hôpital."
}
],
explanation: "Créée en 1994, la spécialité de génétique médicale comporte une composante clinique et une composante biologique. Le DES dure quatre ans après l’externat."
},
{
id: 26,
type: "QRM",
question: "Parmi les anomalies suivantes, lesquelles sont des anomalies chromosomiques de structure citées dans le cours ?",
options: [
{
text: "Une translocation",
correct: true,
correction: "Oui chef 🧠 Déplacement de matériel d’un chromosome à un autre : anomalie de structure."
},
{
text: "Une inversion",
correct: true,
correction: "Exact 🔄 Une inversion au sein d’un chromosome modifie sa structure."
},
{
text: "Une microdélétion",
correct: true,
correction: "Oui chef ✂️ Petite perte de matériel chromosomique."
},
{
text: "Une microduplication",
correct: true,
correction: "Exact 🧬 Petit gain de matériel chromosomique."
},
{
text: "Une polyploïdie",
correct: false,
correction: "Non frérot 😭 La polyploïdie est citée parmi les anomalies chromosomiques de nombre, pas de structure."
}
],
explanation: "Les anomalies chromosomiques de structure comprennent notamment translocations, inversions, microdélétions et microduplications. Le nombre total de chromosomes peut rester à 46."
},
{
id: 27,
type: "QRM",
question: "Quelles caractéristiques générales des maladies génétiques sont citées dans le cours ?",
options: [
{
text: "Elles sont très nombreuses",
correct: true,
correction: "Oui chef 🧠 Il existe plusieurs milliers de phénotypes génétiques différents."
},
{
text: "Elles sont individuellement rares",
correct: true,
correction: "Exact 👌 Une maladie rare touche moins d’une personne sur 2000 selon la définition européenne citée."
},
{
text: "Elles sont collectivement fréquentes",
correct: true,
correction: "Oui chef. Individuellement rares, mais mises toutes ensemble ça fait du monde : environ 3 millions de personnes en France."
},
{
text: "Elles sont extrêmement hétérogènes sur le plan clinique et/ou génétique",
correct: true,
correction: "Exact 🧬 Même grande catégorie, mais des présentations et mécanismes très variés."
},
{
text: "Elles sont toujours bénignes",
correct: false,
correction: "Non frérot 😭 Le cours précise au contraire qu’elles sont souvent sévères."
}
],
explanation: "Les maladies génétiques sont nombreuses, individuellement rares mais collectivement fréquentes, et très hétérogènes sur les plans clinique et génétique."
},
{
id: 28,
type: "QRM",
question: "Concernant le dépistage néonatal décrit dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Il est réalisé vers J2-J3 de vie",
correct: true,
correction: "Oui chef 👶 Le timing à retenir : deuxième ou troisième jour de vie."
},
{
text: "Le programme national comporte actuellement 16 maladies accessibles au dépistage",
correct: true,
correction: "Exact 🧠 Le cours indique actuellement 16 maladies dépistables."
},
{
text: "Le test de Guthrie utilise une goutte de sang prélevée au talon et déposée sur un papier buvard",
correct: true,
correction: "Oui chef 🩸 Petit coup au talon, goutte sur papier buvard, et c’est parti pour les analyses."
},
{
text: "Le résultat est annoncé dans un délai d’environ 3 semaines",
correct: true,
correction: "Exact ⏱️ Le cours donne un délai d’environ trois semaines."
},
{
text: "Le prélèvement ne peut permettre que des tests génétiques et jamais de tests biochimiques",
correct: false,
correction: "Non frérot 😭 Le cours précise que l’échantillon peut servir à des tests génétiques mais aussi biochimiques."
}
],
explanation: "Le dépistage néonatal est réalisé vers J2-J3 grâce au test de Guthrie. Une goutte de sang du talon est déposée sur papier buvard et peut servir à différentes analyses. Le programme compte 16 maladies dans le cours."
},
{
id: 29,
type: "QRM",
question: "Quels rôles de l’arbre généalogique et du conseil génétique sont décrits dans le cours ?",
options: [
{
text: "Étudier la transmission héréditaire de la maladie au sein de la famille",
correct: true,
correction: "Oui chef 🌳 Le pedigree sert d’abord à comprendre comment la maladie circule dans la famille."
},
{
text: "Aider à formuler des hypothèses sur le mode de transmission",
correct: true,
correction: "Exact 🧠 La forme de l’arbre peut orienter vers un mode de transmission donné."
},
{
text: "Orienter la prescription d’analyses génétiques pour identifier le mécanisme moléculaire ou chromosomique",
correct: true,
correction: "Oui chef 🧬 Une fois les hypothèses posées, on peut choisir les analyses de laboratoire adaptées."
},
{
text: "Informer le patient et sa famille sur le risque de transmission, le pronostic et certaines possibilités de diagnostic prénatal ou préimplantatoire",
correct: true,
correction: "Exact 👌 C’est tout le cœur du conseil génétique : expliquer les risques et les options."
},
{
text: "Garantir qu’une anomalie génétique constitutionnelle dispose toujours d’un traitement curatif",
correct: false,
correction: "Non frérot 😭 Le cours dit justement que les possibilités thérapeutiques restent encore limitées pour les anomalies constitutionnelles."
}
],
explanation: "L’arbre généalogique aide à déterminer le mode de transmission et à orienter les analyses. Le conseil génétique informe ensuite sur les risques familiaux, le pronostic et les options diagnostiques ou reproductives."
},
{
id: 30,
type: "QRM",
question: "Concernant l’organisation territoriale française des maladies rares et l’accès au séquençage, quelles propositions sont exactes ?",
options: [
{
text: "Le premier Plan National Maladies Rares a été mis en place en 2005",
correct: true,
correction: "Oui chef 🇫🇷 Le premier PNMR date de 2005, et la France est décrite comme pionnière dans ce domaine."
},
{
text: "Le PNMR1 a permis la labellisation des centres de référence et des centres de compétences",
correct: true,
correction: "Exact 🧠 PNMR1 = structuration des CRCM et CCMR."
},
{
text: "Le PNMR2 a conduit à la création et à la labellisation des filières de santé maladies rares",
correct: true,
correction: "Oui chef 👌 Et le cours indique actuellement 23 filières de santé maladies rares."
},
{
text: "Seqoia à Paris et Auragen à Lyon sont les deux plateformes françaises citées pour le séquençage du génome entier",
correct: true,
correction: "Exact 🧬 Paris avec Seqoia, Lyon avec Auragen : les deux plateformes se partagent le territoire."
},
{
text: "Tous les CHU français réalisent eux-mêmes le séquençage du génome entier",
correct: false,
correction: "Non frérot 😭 Justement, le coût est trop élevé pour que tous les CHU disposent de cette capacité, d’où les plateformes nationales."
}
],
explanation: "La France a organisé la prise en charge des maladies rares à travers plusieurs PNMR. Le PNMR1 structure les centres, le PNMR2 les filières, et l’accès au séquençage du génome entier repose notamment sur les plateformes Seqoia et Auragen."
}
];
