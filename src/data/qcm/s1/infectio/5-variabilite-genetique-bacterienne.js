export const meta = {
title: "Variabilité génétique bactérienne",
}

export default [
{
id: 1,
type: "QCM",
question: "Concernant l'organisation générale du génome bactérien rappelée dans le cours, quelle proposition est exacte ?",
options: [
{
text: "Les bactéries comportent généralement un chromosome constitué d'une double hélice d'ADN",
correct: true,
correction: "Oui boss 🧠 C'est le rappel de base du cours : généralement un chromosome bactérien constitué d'ADN double brin."
},
{
text: "Toutes les bactéries possèdent obligatoirement plusieurs chromosomes",
correct: false,
correction: "Non chef 😭 Le cours indique qu'elles possèdent généralement un chromosome, pas plusieurs obligatoirement."
},
{
text: "Le chromosome bactérien est constitué d'ARN 16S",
correct: false,
correction: "Aïe 💀 L'ARN 16S sert notamment à la classification phylogénétique, il ne constitue pas le chromosome."
},
{
text: "Les deux brins d'ADN bactérien sont identiques et non complémentaires",
correct: false,
correction: "Non chef. Ils sont complémentaires, détail basique mais facile à retourner en QCM."
},
{
text: "La réplication bactérienne produit normalement deux molécules d'ADN totalement différentes",
correct: false,
correction: "Faux 😭 La machinerie de réplication vise au contraire à obtenir deux ADN identiques."
}
],
explanation: "Le chromosome bactérien est généralement constitué d'une double hélice d'ADN à brins complémentaires. Lors de la division, sa réplication permet normalement la formation de deux molécules d'ADN identiques destinées aux cellules filles."
},
{
id: 2,
type: "QRM",
question: "À propos de la réplication de l'ADN bactérien telle qu'elle est présentée dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Les deux brins d'ADN se séparent au moment de la division",
correct: true,
correction: "Oui boss 🧠 Les brins sont séparés pour permettre leur réplication."
},
{
text: "Des systèmes participent au maintien de l'ADN écarté et à la réparation des erreurs",
correct: true,
correction: "Exact. La réplication, ce n'est pas juste un copier-coller sauvage 😭 Il y a toute une machinerie."
},
{
text: "La réplication bactérienne introduit volontairement 30 % de différences dans chaque cellule fille",
correct: false,
correction: "Non chef 💀 Les 30 % concernent la variabilité intersouche évoquée plus loin, pas le mécanisme normal de réplication."
},
{
text: "La réplication de l'ADN ne comporte aucun système de réparation",
correct: false,
correction: "Faux. Le cours mentionne explicitement la réparation des erreurs."
},
{
text: "Une seule cellule fille reçoit l'ADN répliqué",
correct: false,
correction: "Non 😭 Les deux cellules filles doivent recevoir leur matériel génétique."
}
],
explanation: "La réplication implique séparation des brins, maintien de leur écartement, synthèse des nouveaux brins et systèmes de réparation afin d'obtenir deux ADN normalement identiques."
},
{
id: 3,
type: "QCM",
question: "Quel scientifique est associé dans le cours à l'utilisation des ARN ribosomaux 16S pour classer les bactéries ?",
options: [
{
text: "Carl Woese",
correct: true,
correction: "Oui boss 🧠 Carl Woese = ARN 16S et phylogénie bactérienne."
},
{
text: "Frederick Griffith",
correct: false,
correction: "Non chef. Griffith, c'est l'expérience de transformation avec les pneumocoques."
},
{
text: "Lederberg",
correct: false,
correction: "Non. Lederberg apparaît notamment dans les expériences de conjugaison et de transduction."
},
{
text: "Robert Koch",
correct: false,
correction: "Non chef 😭 Koch est affiché dans un autre contexte, notamment autour de la tuberculose."
},
{
text: "Lawrence G. Wayne",
correct: false,
correction: "Faux. Wayne est associé dans le cours à une définition génomique des espèces bactériennes."
}
],
explanation: "Carl Woese a utilisé les séquences d'ARN ribosomal 16S, relativement conservées, pour regrouper les bactéries selon leurs ressemblances et établir des relations phylogénétiques."
},
{
id: 4,
type: "QRM",
question: "Concernant l'approche de Carl Woese décrite dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Il s'est intéressé en particulier aux ARN ribosomaux 16S",
correct: true,
correction: "Oui boss 🧠 ARN 16S, à verrouiller."
},
{
text: "Il cherchait à classer les bactéries selon leur proximité génétique plutôt que selon les maladies qu'elles provoquent",
correct: true,
correction: "Exact. On passe d'une classification centrée sur le phénotype ou la maladie à une logique phylogénétique."
},
{
text: "Il classait uniquement les bactéries selon leur sensibilité aux antibiotiques",
correct: false,
correction: "Non chef 💀 Ce n'est pas le critère décrit."
},
{
text: "Il comparait exclusivement des protéines de membrane",
correct: false,
correction: "Faux. Le cours parle d'ARN 16S."
},
{
text: "Plus les ARN étaient différents, plus leur attachement était considéré comme élevé",
correct: false,
correction: "Non 😭 L'attachement était censé être proportionnel à l'homologie, donc à la ressemblance."
}
],
explanation: "Woese compare les ARN 16S de différentes bactéries ; leur homologie permet de construire des arbres de parenté, base de la phylogénie bactérienne."
},
{
id: 5,
type: "QCM",
question: "Quel type de représentation est obtenu après séquençage, alignement et assemblage du génome bactérien dans l'exemple du cours ?",
options: [
{
text: "Une carte génomique circulaire",
correct: true,
correction: "Oui boss 🎯 Le résultat est représenté sous forme de carte génomique circulaire."
},
{
text: "Un caryotype métaphasique humain",
correct: false,
correction: "Non chef 😭 Mauvais chapitre, mauvaise espèce."
},
{
text: "Une radiographie bactérienne",
correct: false,
correction: "Faux 💀 Ça n'a rien à voir avec le séquençage."
},
{
text: "Un électrocardiogramme du pneumocoque",
correct: false,
correction: "Mais frr 😭 Non."
},
{
text: "Une carte composée uniquement d'ARN 16S",
correct: false,
correction: "Non. Ici on parle du génome complet."
}
],
explanation: "Le génome bactérien est fragmenté, séquencé, aligné puis assemblé. Il peut ensuite être représenté sous forme de carte génomique circulaire montrant la succession des bases."
},
{
id: 6,
type: "QRM",
question: "Dans l'exemple comparant plusieurs souches de pneumocoque, quelles propositions sont exactes ?",
options: [
{
text: "Onze souches de pneumocoque sont représentées, dont une souche de référence",
correct: true,
correction: "Oui boss 🧠 Onze souches, dont une de référence : détail de rat classique."
},
{
text: "Certaines régions génomiques diffèrent entre les souches d'une même espèce",
correct: true,
correction: "Exact. C'est justement la démonstration de la variabilité intersouche."
},
{
text: "Toutes les souches d'une même espèce ont un chromosome strictement identique",
correct: false,
correction: "Non chef 💀 Tout le cours existe justement pour expliquer que ce n'est pas le cas."
},
{
text: "Le logiciel ne peut reconnaître aucune séquence identique à la référence",
correct: false,
correction: "Faux. Il identifie au contraire les séquences strictement identiques."
},
{
text: "Les différences observées prouvent que les bactéries comparées appartiennent forcément à des espèces différentes",
correct: false,
correction: "Non. La variabilité existe précisément au sein d'une même espèce."
}
],
explanation: "L'exemple des onze pneumocoques montre qu'une même espèce possède un socle génomique commun mais également des régions variables d'une souche à l'autre."
},
{
id: 7,
type: "QCM",
question: "Selon le modèle attribué à Lawrence G. Wayne dans le cours, quelle proportion approximative du génome est commune entre les bactéries d'une même espèce ?",
options: [
{
text: "10 %",
correct: false,
correction: "Non chef. Beaucoup plus."
},
{
text: "30 %",
correct: false,
correction: "Non. Les 30 % correspondent ici à la variabilité intersouche déduite."
},
{
text: "50 %",
correct: false,
correction: "Faux."
},
{
text: "Environ 70 %",
correct: true,
correction: "Oui boss 🎯 Environ 70 % en commun dans ce modèle."
},
{
text: "100 %",
correct: false,
correction: "Non chef 💀 Sinon le chapitre sur la variabilité ferait trois lignes."
}
],
explanation: "Le modèle présenté attribue environ 70 % de génome commun aux bactéries d'une même espèce, laissant environ 30 % de variabilité intersouche."
},
{
id: 8,
type: "QRM",
question: "Concernant la notion de CORE génomique, quelles propositions sont exactes ?",
options: [
{
text: "Il correspond à la partie conservée du génome au sein d'une espèce",
correct: true,
correction: "Oui boss 🧠 CORE = cœur conservé du génome."
},
{
text: "Il est indispensable à la viabilité de la bactérie",
correct: true,
correction: "Exact. Il contient les fonctions cellulaires basales et vitales."
},
{
text: "Il représente uniquement les gènes de résistance acquis récemment",
correct: false,
correction: "Non chef 😭 Ça correspond plutôt au genre de choses qu'on peut retrouver dans le génome accessoire."
},
{
text: "Il est totalement différent d'une souche à l'autre",
correct: false,
correction: "Faux. Par définition il est justement conservé."
},
{
text: "Il n'a aucun rôle dans l'identité biologique de l'espèce",
correct: false,
correction: "Non. Le cours dit qu'il caractérise cette identité."
}
],
explanation: "Le CORE représente le génome conservé, indispensable aux fonctions essentielles et participant à l'identité biologique de l'espèce."
},
{
id: 9,
type: "QCM",
question: "Que désigne l'expression « housekeeping genes » dans le cours ?",
options: [
{
text: "Des gènes constitutifs codant des protéines nécessaires aux fonctions cellulaires basales et vitales",
correct: true,
correction: "Oui boss 🧠 Les housekeeping genes font tourner la baraque au quotidien."
},
{
text: "Uniquement des gènes de résistance aux antibiotiques",
correct: false,
correction: "Non chef. Ceux-là peuvent appartenir au génome accessoire."
},
{
text: "Des gènes présents uniquement chez les bactériophages",
correct: false,
correction: "Faux."
},
{
text: "Des gènes sans aucune fonction cellulaire",
correct: false,
correction: "Non 😭 Leur intérêt est justement d'assurer des fonctions essentielles."
},
{
text: "Uniquement des séquences non codantes variables",
correct: false,
correction: "Faux. Ils codent des protéines indispensables aux fonctions de base."
}
],
explanation: "Les housekeeping genes appartiennent au CORE et codent des protéines impliquées dans les fonctions cellulaires fondamentales nécessaires à la survie."
},
{
id: 10,
type: "QRM",
question: "À propos du CORE et du génome accessoire, quelles propositions sont exactes ?",
options: [
{
text: "Le CORE représente environ 70 à 80 % du génome bactérien selon la synthèse du cours",
correct: true,
correction: "Oui boss 🎯 70–80 % pour le CORE dans cette partie."
},
{
text: "Le génome accessoire est hautement variable au sein d'une même espèce",
correct: true,
correction: "Exact. C'est lui qui fait beaucoup du tuning génétique entre souches."
},
{
text: "Le génome accessoire est indispensable à toutes les fonctions vitales de base",
correct: false,
correction: "Non chef. Il est décrit comme non essentiel à la survie."
},
{
text: "Le CORE est acquis uniquement par transfert horizontal",
correct: false,
correction: "Faux. Le CORE correspond au socle conservé."
},
{
text: "Le génome accessoire est strictement identique chez toutes les souches",
correct: false,
correction: "Non 😭 C'est exactement l'inverse."
}
],
explanation: "Le CORE constitue environ 70–80 % du génome et contient les fonctions essentielles. Le génome accessoire représente la fraction variable, non indispensable mais potentiellement avantageuse."
},
{
id: 11,
type: "QCM",
question: "Quel avantage potentiel l'acquisition de génome accessoire peut-elle procurer à une bactérie ?",
options: [
{
text: "Un avantage sélectif dans son environnement",
correct: true,
correction: "Oui boss 🧠 Le génome accessoire peut offrir un petit DLC adaptatif très rentable."
},
{
text: "Une impossibilité définitive de se reproduire",
correct: false,
correction: "Non chef 😭 Ce serait un DLC plutôt nul."
},
{
text: "Une disparition obligatoire du CORE",
correct: false,
correction: "Faux."
},
{
text: "Une perte systématique de toute virulence",
correct: false,
correction: "Non. Il peut au contraire faire acquérir des caractères de virulence."
},
{
text: "Une suppression complète des mutations",
correct: false,
correction: "Faux. Les mécanismes de variabilité continuent."
}
],
explanation: "Le génome accessoire peut conférer des caractères nouveaux améliorant l'adaptation, la virulence ou la résistance dans certaines conditions."
},
{
id: 12,
type: "QRM",
question: "À propos des flux génétiques verticaux et horizontaux, quelles propositions sont exactes ?",
options: [
{
text: "Le flux vertical correspond à des modifications du chromosome transmises au cours des divisions",
correct: true,
correction: "Oui boss 🧠 Vertical = dans la lignée bactérienne."
},
{
text: "Le flux horizontal correspond à l'acquisition d'ADN provenant d'une autre bactérie contemporaine",
correct: true,
correction: "Exact. Horizontal = échange latéral entre bactéries."
},
{
text: "Le flux horizontal correspond uniquement aux erreurs de réplication",
correct: false,
correction: "Non chef. Ça relève plutôt des mutations et donc du flux vertical."
},
{
text: "Le flux vertical nécessite obligatoirement un bactériophage",
correct: false,
correction: "Faux. Le phage intervient dans la transduction horizontale."
},
{
text: "Aucun de ces flux n'est transmis à la descendance",
correct: false,
correction: "Non. Une fois intégrées, les modifications peuvent être transmises aux descendants."
}
],
explanation: "Le flux vertical correspond notamment aux mutations apparaissant dans une lignée, tandis que le flux horizontal correspond à l'acquisition d'ADN venant d'autres bactéries."
},
{
id: 13,
type: "QCM",
question: "Quel temps de division est donné dans le cours pour Escherichia coli ?",
options: [
{
text: "Environ 20 secondes",
correct: false,
correction: "Non chef 😭 Pas besoin de lui donner le turbo non plus."
},
{
text: "Environ 20 minutes",
correct: true,
correction: "Oui boss ⏱️ Environ 20 minutes."
},
{
text: "Environ 2 heures",
correct: false,
correction: "Non."
},
{
text: "Environ 24 heures",
correct: false,
correction: "Faux."
},
{
text: "Environ une semaine",
correct: false,
correction: "Mais frr 💀 Non."
}
],
explanation: "Le cours donne l'exemple d'Escherichia coli, capable de se diviser environ toutes les 20 minutes, illustrant la rapidité de l'évolution bactérienne."
},
{
id: 14,
type: "QRM",
question: "Quelles conséquences générales de la plasticité génomique bactérienne sont décrites ?",
options: [
{
text: "Une capacité d'adaptation à des milieux très variés",
correct: true,
correction: "Oui boss 🌍 C'est un avantage évolutif majeur."
},
{
text: "La colonisation possible de milieux extrêmes comme les mers hypersalées ou les geysers chauds",
correct: true,
correction: "Exact. Le cours insiste sur l'incroyable amplitude écologique du monde bactérien."
},
{
text: "Une incapacité à survivre au froid polaire",
correct: false,
correction: "Non chef 😭 Le froid polaire est justement cité parmi les milieux colonisés."
},
{
text: "Une homogénéité génétique parfaite de toutes les souches",
correct: false,
correction: "Faux. On parle précisément d'une forte diversité."
},
{
text: "Une disparition progressive des mécanismes de transfert génétique",
correct: false,
correction: "Non. Ils sont décrits comme rapides et permanents."
}
],
explanation: "La variabilité génétique offre aux bactéries une plasticité exceptionnelle, permettant leur adaptation à des environnements très divers voire extrêmes."
},
{
id: 15,
type: "QCM",
question: "Comment le cours définit-il une mutation bactérienne ?",
options: [
{
text: "Une altération de l'ADN ayant échappé aux systèmes de réparation",
correct: true,
correction: "Oui boss 🧠 Une erreur qui a réussi à passer le service après-vente cellulaire."
},
{
text: "Un échange obligatoire de plasmide entre deux bactéries",
correct: false,
correction: "Non chef. Ça correspond à la conjugaison."
},
{
text: "Une infection par un bactériophage",
correct: false,
correction: "Faux. Ça peut intervenir dans la transduction."
},
{
text: "Une incorporation d'ADN libre provenant d'une bactérie morte",
correct: false,
correction: "Non. Ça décrit la transformation."
},
{
text: "Un mécanisme nécessairement provoqué par l'homme",
correct: false,
correction: "Faux. Les mutations sont avant tout naturelles et constantes."
}
],
explanation: "Une mutation résulte d'une altération de l'ADN, par exemple une erreur de réplication, qui n'a pas été corrigée par les systèmes de réparation."
},
{
id: 16,
type: "QRM",
question: "Concernant les conséquences possibles des mutations bactériennes, quelles propositions sont exactes ?",
options: [
{
text: "Beaucoup de mutations restent sans incidence phénotypique",
correct: true,
correction: "Oui boss. La majorité ne transforme pas instantanément la bactérie en boss final."
},
{
text: "Une mutation peut créer un nouveau caractère phénotypique si elle modifie la structure ou la fonction d'une protéine",
correct: true,
correction: "Exact 🧠 Là, la modification devient biologiquement visible."
},
{
text: "Toutes les mutations sont létales",
correct: false,
correction: "Non chef 💀 Beaucoup sont silencieuses ou neutres."
},
{
text: "Une mutation ne peut jamais modifier une protéine",
correct: false,
correction: "Faux. C'est justement une conséquence possible."
},
{
text: "Une mutation silencieuse entraîne obligatoirement un nouveau phénotype",
correct: false,
correction: "Non. Par définition ici, elle reste sans incidence observable."
}
],
explanation: "Les mutations sont souvent silencieuses ou neutres, mais certaines peuvent modifier une protéine et faire apparaître un nouveau caractère phénotypique."
},
{
id: 17,
type: "QCM",
question: "Quelle conséquence est attribuée dans le cours à la délétion d'un seul nucléotide ?",
options: [
{
text: "Un décalage du cadre de lecture avec modification majeure de la séquence protéique",
correct: true,
correction: "Oui boss 🧠 Un seul nucléotide en moins et tout le cadre de lecture part en freestyle."
},
{
text: "Aucune modification de la séquence en acides aminés",
correct: false,
correction: "Non chef. Le cours insiste justement sur l'effet majeur."
},
{
text: "Une duplication obligatoire de tout le chromosome",
correct: false,
correction: "Faux."
},
{
text: "La création systématique d'un plasmide F",
correct: false,
correction: "Non 😭 Rien à voir avec la conjugaison."
},
{
text: "Une augmentation du nombre total de nucléotides",
correct: false,
correction: "Non. Ça correspondrait plutôt à une insertion."
}
],
explanation: "La délétion d'un nucléotide provoque un décalage du cadre de lecture et peut modifier profondément la séquence protéique ; le cours indique que la mort bactérienne est alors la conséquence la plus probable."
},
{
id: 18,
type: "QRM",
question: "Quelles affirmations concernant les trois types de mutations décrits dans le cours sont exactes ?",
options: [
{
text: "Une insertion ajoute un ou plusieurs nucléotides",
correct: true,
correction: "Oui boss 🧠 Insertion = tu ajoutes des lettres."
},
{
text: "Une substitution remplace un nucléotide par un autre sans modifier le nombre total de nucléotides",
correct: true,
correction: "Exact. Changement de lettre, longueur conservée."
},
{
text: "Une délétion ajoute systématiquement plusieurs nucléotides",
correct: false,
correction: "Non chef 😭 Délétion = tu retires."
},
{
text: "Une substitution double obligatoirement la taille du génome",
correct: false,
correction: "Faux 💀 Elle ne modifie pas le nombre total de nucléotides."
},
{
text: "Une insertion réduit nécessairement la longueur de l'ADN",
correct: false,
correction: "Non. Elle l'augmente."
}
],
explanation: "Insertion = ajout de nucléotides ; délétion = perte ; substitution = remplacement sans changement du nombre total de bases."
},
{
id: 19,
type: "QCM",
question: "Quel type de mutation est présenté comme le plus fréquent dans la grande majorité des cas ?",
options: [
{
text: "La substitution d'un nucléotide",
correct: true,
correction: "Oui boss 🎯 La substitution domine largement dans le cours."
},
{
text: "La délétion d'un chromosome entier",
correct: false,
correction: "Non chef."
},
{
text: "L'insertion d'un génome de phage complet à chaque division",
correct: false,
correction: "Faux 😭."
},
{
text: "La perte simultanée de tous les plasmides",
correct: false,
correction: "Non."
},
{
text: "La fusion de deux bactéries",
correct: false,
correction: "Non chef 💀 Ça n'est même pas un type de mutation décrit."
}
],
explanation: "La majorité des mutations évoquées sont des substitutions nucléotidiques, dont beaucoup ont un effet silencieux ou limité."
},
{
id: 20,
type: "QRM",
question: "Comment une substitution peut-elle rester sans conséquence fonctionnelle importante selon le cours ?",
options: [
{
text: "Le nouveau codon peut coder le même acide aminé",
correct: true,
correction: "Oui boss 🧠 Même acide aminé = mutation silencieuse."
},
{
text: "L'acide aminé peut changer mais sans altérer la fonction de la protéine, notamment loin du site actif",
correct: true,
correction: "Exact. Toutes les substitutions d'acides aminés ne détruisent pas la protéine."
},
{
text: "Toute substitution détruit obligatoirement le site actif",
correct: false,
correction: "Non chef 😭 Beaucoup sont parfaitement tolérées."
},
{
text: "Une substitution entraîne toujours un décalage du cadre de lecture",
correct: false,
correction: "Faux. Le frameshift est surtout associé ici aux insertions/délétions non multiples adaptées, notamment à la délétion d'un nucléotide."
},
{
text: "Une substitution est toujours létale",
correct: false,
correction: "Non 💀 Très loin de là."
}
],
explanation: "Une substitution peut être silencieuse si le codon code le même acide aminé, ou fonctionnellement neutre si le changement protéique n'altère pas une région importante."
},
{
id: 21,
type: "QCM",
question: "Concernant l'origine des mutations bactériennes, quelle proposition est correcte ?",
options: [
{
text: "Elles peuvent survenir spontanément même en l'absence de perturbation extérieure",
correct: true,
correction: "Oui boss 🧠 Elles sont naturelles et constantes, pas besoin d'un laboratoire maléfique."
},
{
text: "Elles n'existent qu'après exposition à un antibiotique",
correct: false,
correction: "Non chef 💀 Le cours démonte précisément cette idée."
},
{
text: "Elles sont toutes provoquées artificiellement par les chercheurs",
correct: false,
correction: "Faux."
},
{
text: "Elles nécessitent toujours un bactériophage",
correct: false,
correction: "Non. Ça, c'est autre chose."
},
{
text: "Elles disparaissent complètement en absence de stress",
correct: false,
correction: "Non chef. Elles peuvent apparaître spontanément en permanence."
}
],
explanation: "Les mutations peuvent être spontanées ou induites par des agents mutagènes chimiques ou physiques, mais elles constituent avant tout un phénomène naturel et constant."
},
{
id: 22,
type: "QRM",
question: "À propos des agents mutagènes, quelles propositions sont exactes selon le support ?",
options: [
{
text: "Des agents chimiques peuvent induire des mutations",
correct: true,
correction: "Oui boss 🧪 Le cours cite notamment des mutagènes chimiques."
},
{
text: "Des agents physiques peuvent induire des mutations",
correct: true,
correction: "Exact. Les UV et radiations ionisantes apparaissent notamment dans le support."
},
{
text: "Les mutations bactériennes sont impossibles sans mutagène externe",
correct: false,
correction: "Non chef. Elles existent aussi spontanément."
},
{
text: "Les mutagènes empêchent toute variabilité génétique",
correct: false,
correction: "Faux 💀 Ils peuvent justement augmenter la fréquence des mutations."
},
{
text: "Les antibiotiques sont nécessaires pour créer chaque mutation de résistance",
correct: false,
correction: "Non. L'antibiotique sélectionne des mutants préexistants, il ne crée pas nécessairement la résistance."
}
],
explanation: "Des facteurs chimiques ou physiques peuvent augmenter la fréquence des mutations, mais les mutations spontanées existent naturellement sans exposition extérieure."
},
{
id: 23,
type: "QCM",
question: "Quelle idée fondamentale le cours défend-il concernant l'apparition des résistances aux antibiotiques ?",
options: [
{
text: "L'antibiotique crée directement la mutation de résistance dont la bactérie a besoin",
correct: false,
correction: "Non chef 😭 C'est précisément le piège conceptuel que la prof démonte."
},
{
text: "Des bactéries résistantes peuvent préexister naturellement avant même l'utilisation de l'antibiotique",
correct: true,
correction: "Oui boss 🧠 La résistance peut être là avant que l'antibiotique entre en scène."
},
{
text: "La résistance ne peut apparaître qu'après plusieurs années de traitement",
correct: false,
correction: "Faux."
},
{
text: "Toutes les bactéries deviennent résistantes simultanément au premier contact",
correct: false,
correction: "Non 💀 L'antibiotique sélectionne les rares résistantes déjà présentes."
},
{
text: "Une bactérie sensible se transforme volontairement en bactérie résistante",
correct: false,
correction: "Non chef. Pas de stratégie consciente ici 😭."
}
],
explanation: "Des mutants résistants préexistent spontanément. L'antibiotique exerce une pression de sélection en éliminant les bactéries sensibles et en laissant proliférer les résistantes."
},
{
id: 24,
type: "QRM",
question: "Quels effets l'introduction d'un antibiotique peut-elle avoir sur une population bactérienne comportant déjà quelques mutants résistants ?",
options: [
{
text: "Éliminer une grande partie des bactéries sensibles",
correct: true,
correction: "Oui boss. Les sensibles prennent cher."
},
{
text: "Favoriser la prolifération relative des souches résistantes en supprimant leur concurrence",
correct: true,
correction: "Exact 🧠 C'est le cœur de la pression de sélection."
},
{
text: "Transformer obligatoirement chaque bactérie sensible en bactérie résistante",
correct: false,
correction: "Non chef 💀 Sélection ≠ transformation magique."
},
{
text: "Supprimer toutes les mutations préexistantes",
correct: false,
correction: "Faux."
},
{
text: "Empêcher définitivement toute multiplication bactérienne résistante",
correct: false,
correction: "Non. Les clones résistants peuvent justement proliférer."
}
],
explanation: "L'antibiotique ne crée pas nécessairement la résistance : il sélectionne les mutants résistants présents dans la population en éliminant leurs concurrents sensibles."
},
{
id: 25,
type: "QCM",
question: "Dans l'exemple de tuberculose pulmonaire, quelle charge bactérienne est donnée par gramme de crachat ?",
options: [
{
text: "10³ bacilles",
correct: false,
correction: "Non chef. Beaucoup plus."
},
{
text: "10⁵ bacilles",
correct: false,
correction: "Non."
},
{
text: "10⁷ bacilles",
correct: false,
correction: "Non, ça correspond à une fréquence de résistance donnée dans l'exemple."
},
{
text: "10⁹ bacilles",
correct: true,
correction: "Oui boss 🎯 10⁹ bacilles de Koch par gramme de crachat."
},
{
text: "10¹² bacilles",
correct: false,
correction: "Non. 10¹² correspond à la fréquence conjuguée de double résistance dans l'exemple."
}
],
explanation: "Le cours part d'un inoculum massif d'environ 10⁹ bacilles de Koch par gramme de crachat chez un patient atteint de tuberculose pulmonaire."
},
{
id: 26,
type: "QRM",
question: "Dans l'exemple de monothérapie antituberculeuse, quelles propositions sont exactes ?",
options: [
{
text: "Une fréquence naturelle de résistance de 1 sur 10⁷ est donnée pour un des antibiotiques de l'exemple",
correct: true,
correction: "Oui boss 🧠 1/10⁷, détail de rat parfaitement QCM-compatible."
},
{
text: "La monothérapie peut sélectionner le clone mutant résistant qui survit puis prolifère",
correct: true,
correction: "Exact. C'est justement pourquoi la monothérapie est dangereuse dans ce contexte."
},
{
text: "La monothérapie élimine forcément 100 % des bacilles",
correct: false,
correction: "Non chef 💀 Les mutants résistants peuvent survivre."
},
{
text: "La résistance n'existe qu'après plusieurs mois de traitement",
correct: false,
correction: "Faux. Des mutants préexistent."
},
{
text: "La monothérapie supprime toute pression de sélection",
correct: false,
correction: "Non. Elle en exerce justement une forte."
}
],
explanation: "Avec une population initiale massive, même une fréquence de résistance très faible suffit à laisser survivre certains mutants sous monothérapie."
},
{
id: 27,
type: "QCM",
question: "Quelle fréquence de résistance à l'éthambutol est donnée dans l'exemple du cours ?",
options: [
{
text: "1 sur 10²",
correct: false,
correction: "Non chef."
},
{
text: "1 sur 10⁵",
correct: true,
correction: "Oui boss 🎯 Éthambutol : 1/10⁵ dans l'exemple."
},
{
text: "1 sur 10⁷",
correct: false,
correction: "Non. Cette fréquence est associée à l'autre résistance de l'exemple."
},
{
text: "1 sur 10⁹",
correct: false,
correction: "Faux."
},
{
text: "1 sur 10¹²",
correct: false,
correction: "Non. Ça correspond à la fréquence combinée de double résistance."
}
],
explanation: "L'exemple donne une fréquence de résistance à l'éthambutol de 1/10⁵."
},
{
id: 28,
type: "QRM",
question: "Concernant l'association de deux antibiotiques dans l'exemple de tuberculose, quelles propositions sont exactes ?",
options: [
{
text: "Les fréquences de résistance indépendantes peuvent se multiplier pour estimer la fréquence d'une double résistance",
correct: true,
correction: "Oui boss 🧠 10⁷ × 10⁵ = 10¹², maths de bactério."
},
{
text: "La fréquence conjuguée de double résistance donnée est d'environ 1 sur 10¹²",
correct: true,
correction: "Exact 🎯 C'est le chiffre à connaître."
},
{
text: "La bithérapie rend mathématiquement impossible toute résistance future",
correct: false,
correction: "Non chef. Sur un inoculum massif ou un temps long, des mutants multiples peuvent encore émerger."
},
{
text: "Deux antibiotiques augmentent la fréquence de double résistance à 1 sur 10²",
correct: false,
correction: "Faux 💀 C'est exactement l'inverse."
},
{
text: "L'éthambutol possède dans l'exemple une fréquence de résistance de 1 sur 10¹² à lui seul",
correct: false,
correction: "Non. L'éthambutol est donné à 1 sur 10⁵."
}
],
explanation: "En combinant deux antibiotiques dont les fréquences de résistance sont 1/10⁷ et 1/10⁵, la fréquence théorique d'une double résistance devient 1/10¹²."
},
{
id: 29,
type: "QCM",
question: "Quelle stratégie antituberculeuse actuelle est explicitement indiquée dans le cours pour limiter l'émergence de résistances ?",
options: [
{
text: "Une monothérapie courte",
correct: false,
correction: "Non chef 😭 C'est justement la recette pour sélectionner les résistants."
},
{
text: "Une multithérapie combinant trois à quatre antituberculeux",
correct: true,
correction: "Oui boss 🧠 Trois à quatre antituberculeux."
},
{
text: "L'absence totale de traitement antibiotique",
correct: false,
correction: "Faux."
},
{
text: "Une bithérapie uniquement chez tous les patients",
correct: false,
correction: "Non. Le cours retient une multithérapie de trois à quatre molécules."
},
{
text: "Un traitement uniquement local",
correct: false,
correction: "Non chef."
}
],
explanation: "La stratégie clinique décrite repose sur une multithérapie de trois à quatre antituberculeux afin de réduire drastiquement la probabilité d'émergence de mutants résistants."
},
{
id: 30,
type: "QRM",
question: "Concernant l'objectif de l'antibiothérapie et le rôle de l'immunité dans l'exemple de tuberculose, quelles propositions sont exactes ?",
options: [
{
text: "Les antibiotiques doivent réduire fortement la charge bactérienne",
correct: true,
correction: "Oui boss 🧠 On fait descendre la population sous un seuil gérable."
},
{
text: "Le système immunitaire prend ensuite le relais pour éliminer les derniers bacilles persistants",
correct: true,
correction: "Exact. Le traitement et l'immunité jouent en équipe."
},
{
text: "Chez l'immunodéprimé, ce relais immunitaire peut être insuffisant",
correct: true,
correction: "Oui. D'où une prise en charge plus délicate et parfois plus longue."
},
{
text: "La multithérapie n'a aucune utilité chez les patients immunodéprimés",
correct: false,
correction: "Non chef 💀 C'est justement chez eux qu'il faut être particulièrement rigoureux."
},
{
text: "L'objectif est toujours une stérilisation absolue obtenue uniquement par les médicaments, sans intervention immunitaire",
correct: false,
correction: "Faux. Le cours précise que l'immunité participe au nettoyage final."
}
],
explanation: "L'antibiothérapie réduit la charge bactérienne, puis l'immunité élimine les bacilles restants. Cette coopération est moins efficace chez l'immunodéprimé."
},
{
id: 31,
type: "QCM",
question: "Quels chercheurs sont associés à l'expérience de conjugaison bactérienne présentée dans le cours ?",
options: [
{
text: "Lederberg et Tatum",
correct: true,
correction: "Oui boss 🧠 Conjugaison = Lederberg et Tatum."
},
{
text: "Zinder et Lederberg",
correct: false,
correction: "Non chef. Ce duo est associé à la transduction."
},
{
text: "Griffith et Woese",
correct: false,
correction: "Faux."
},
{
text: "Wayne et Tatum",
correct: false,
correction: "Non."
},
{
text: "Koch et Griffith",
correct: false,
correction: "Non chef 😭 Mélange de CV scientifique."
}
],
explanation: "L'expérience de conjugaison décrite est attribuée à Lederberg et Tatum."
},
{
id: 32,
type: "QRM",
question: "Dans l'expérience de Lederberg et Tatum, quelles propositions sont exactes ?",
options: [
{
text: "Les deux souches utilisées appartiennent à la même espèce bactérienne, ici Salmonella",
correct: true,
correction: "Oui boss 🧠 Même espèce dans l'expérience."
},
{
text: "La souche du tube A peut métaboliser la thréonine, la leucine et la thymidine",
correct: true,
correction: "Exact. Trois capacités pour A."
},
{
text: "La souche du tube B peut métaboliser la méthionine et la biotine",
correct: true,
correction: "Oui. Deux capacités pour B."
},
{
text: "Après mélange, aucune nouvelle capacité métabolique n'apparaît",
correct: false,
correction: "Non chef. Une nouvelle souche capable de métaboliser les cinq apparaît."
},
{
text: "L'expérience démontre uniquement une mutation spontanée sans échange génétique",
correct: false,
correction: "Faux. Elle met en évidence un échange génétique."
}
],
explanation: "Le mélange des deux souches complémentaires permet l'apparition de bactéries capables de métaboliser les cinq composés, démontrant un échange génétique."
},
{
id: 33,
type: "QCM",
question: "Quel élément permet le contact direct entre les bactéries lors de la conjugaison ?",
options: [
{
text: "Un pilus",
correct: true,
correction: "Oui boss 🧠 Le pilus sert de pont ou canal de communication."
},
{
text: "Un bactériophage",
correct: false,
correction: "Non chef. Le phage est l'intermédiaire de la transduction."
},
{
text: "Un globule rouge",
correct: false,
correction: "Faux 😭."
},
{
text: "Une spore fongique",
correct: false,
correction: "Non."
},
{
text: "Une molécule d'ARN 16S libre",
correct: false,
correction: "Non chef."
}
],
explanation: "La conjugaison nécessite un contact direct grâce à un pilus formé par la bactérie donneuse."
},
{
id: 34,
type: "QRM",
question: "Concernant le facteur F dans la conjugaison bactérienne, quelles propositions sont exactes ?",
options: [
{
text: "Le facteur F signifie « fertile »",
correct: true,
correction: "Oui boss 🧠 F = fertile."
},
{
text: "Il est localisé sur un plasmide dans le mécanisme décrit",
correct: true,
correction: "Exact. Le plasmide porte le facteur nécessaire à la conjugaison."
},
{
text: "Il participe notamment à la synthèse du pilus sexuel",
correct: true,
correction: "Oui. Sans lui, pas de pont romantique bactérien 😭."
},
{
text: "Il est obligatoirement porté par la bactérie receveuse",
correct: false,
correction: "Non chef. Il est porté par la donneuse."
},
{
text: "Il détruit le plasmide avant son transfert",
correct: false,
correction: "Faux. Le plasmide est au contraire répliqué puis transféré."
}
],
explanation: "La donneuse possède un plasmide portant le facteur F, qui permet notamment la synthèse du pilus nécessaire au contact avec la receveuse."
},
{
id: 35,
type: "QCM",
question: "Lors de la conjugaison décrite, quelle cellule synthétise le pilus ?",
options: [
{
text: "La bactérie donneuse",
correct: true,
correction: "Oui boss 🎯 Donneuse = pilus."
},
{
text: "La bactérie receveuse",
correct: false,
correction: "Non chef 😭 Piège classique du QCM du cours."
},
{
text: "Le bactériophage",
correct: false,
correction: "Faux."
},
{
text: "Une cellule humaine",
correct: false,
correction: "Non."
},
{
text: "Les deux bactéries simultanément de façon obligatoire",
correct: false,
correction: "Non chef. Le cours attribue la synthèse à la donneuse."
}
],
explanation: "Le pilus est synthétisé par la bactérie donneuse porteuse du facteur F."
},
{
id: 36,
type: "QRM",
question: "Quelles étapes appartiennent au mécanisme de conjugaison décrit dans le cours ?",
options: [
{
text: "Contact entre une bactérie donneuse et une bactérie receveuse",
correct: true,
correction: "Oui boss 🧠 Contact direct obligatoire."
},
{
text: "Réplication du plasmide",
correct: true,
correction: "Exact. On copie avant de transférer."
},
{
text: "Passage d'une copie plasmidique vers la bactérie receveuse",
correct: true,
correction: "Oui. Voilà le transfert génétique."
},
{
text: "Absence complète de contact entre les bactéries",
correct: false,
correction: "Non chef 💀 Ça correspond plutôt aux mécanismes sans contact comme transduction ou transformation."
},
{
text: "Destruction obligatoire de la bactérie donneuse",
correct: false,
correction: "Faux."
}
],
explanation: "La conjugaison repose sur un contact direct via pilus, la réplication du plasmide et son transfert vers la receveuse."
},
{
id: 37,
type: "QCM",
question: "Quelle contrainte est donnée dans le cours pour la conjugaison bactérienne ?",
options: [
{
text: "Les bactéries doivent être de la même espèce et vivre dans des régions proches",
correct: true,
correction: "Oui boss 🧠 C'est la règle donnée explicitement dans ce support."
},
{
text: "Les bactéries doivent appartenir à deux règnes différents",
correct: false,
correction: "Non chef."
},
{
text: "Elles doivent être séparées par un filtre imperméable aux bactéries",
correct: false,
correction: "Faux. Ça correspond à l'expérience de transduction."
},
{
text: "Elles doivent se trouver à plusieurs kilomètres l'une de l'autre",
correct: false,
correction: "Non 😭 Il faut au contraire une proximité."
},
{
text: "Elles doivent obligatoirement être dans l'océan",
correct: false,
correction: "Non chef. Les milieux liquides sont surtout évoqués pour la transduction."
}
],
explanation: "Dans le cours, la conjugaison nécessite des bactéries de la même espèce vivant suffisamment proches pour établir un contact direct."
},
{
id: 38,
type: "QRM",
question: "Quels sites de l'organisme sont cités comme exemples de milieux où la conjugaison peut avoir lieu entre bactéries proches ?",
options: [
{
text: "Le système digestif",
correct: true,
correction: "Oui boss. Notre flore digestive est une vraie plateforme d'échanges génétiques."
},
{
text: "Le revêtement cutané",
correct: true,
correction: "Exact."
},
{
text: "La flore humaine au sens large est décrite comme un lieu d'échanges génétiques",
correct: true,
correction: "Oui 🧠 Le cours y revient à plusieurs reprises."
},
{
text: "Uniquement le tissu cérébral stérile",
correct: false,
correction: "Non chef 😭 Pas l'exemple donné."
},
{
text: "Uniquement les cultures de laboratoire",
correct: false,
correction: "Faux. Le phénomène est naturel."
}
],
explanation: "Le système digestif, le revêtement cutané et plus largement les flores bactériennes constituent des milieux riches en contacts favorisant les échanges génétiques."
},
{
id: 39,
type: "QCM",
question: "Quels chercheurs sont associés à l'expérience historique de transduction présentée dans le cours ?",
options: [
{
text: "Zinder et Lederberg",
correct: true,
correction: "Oui boss 🧠 Transduction = Zinder + Lederberg."
},
{
text: "Lederberg et Tatum",
correct: false,
correction: "Non chef. Ce duo correspond à la conjugaison."
},
{
text: "Griffith et Woese",
correct: false,
correction: "Faux."
},
{
text: "Wayne et Koch",
correct: false,
correction: "Non."
},
{
text: "Tatum et Griffith",
correct: false,
correction: "Non chef 😭 Mélange pas les expériences."
}
],
explanation: "La transduction est illustrée par l'expérience de Zinder et Lederberg."
},
{
id: 40,
type: "QRM",
question: "Dans l'expérience de Zinder et Lederberg avec un tube en U, quelles propositions sont exactes ?",
options: [
{
text: "Deux souches bactériennes sont séparées par un filtre",
correct: true,
correction: "Oui boss 🧠 Le fameux tube en U."
},
{
text: "Le filtre laisse passer le liquide mais pas les bactéries",
correct: true,
correction: "Exact. Donc pas de contact direct possible."
},
{
text: "Des bactéries acquièrent malgré tout un nouveau caractère génétique",
correct: true,
correction: "Oui. Quelque chose de plus petit que les bactéries a donc traversé."
},
{
text: "Le filtre permet aux bactéries entières de se mélanger librement",
correct: false,
correction: "Non chef 💀 Ça ruinerait toute l'expérience."
},
{
text: "L'expérience prouve que le pilus est nécessaire",
correct: false,
correction: "Faux. Elle montre justement un transfert sans contact direct."
}
],
explanation: "Le filtre bloque les bactéries mais pas le liquide. L'apparition d'un transfert malgré l'absence de contact a conduit à suspecter un vecteur plus petit, ensuite identifié comme le phage."
},
{
id: 41,
type: "QCM",
question: "Quel vecteur assure le transfert d'ADN lors de la transduction ?",
options: [
{
text: "Un bactériophage",
correct: true,
correction: "Oui boss 🧠 Transduction = phage."
},
{
text: "Un pilus sexuel",
correct: false,
correction: "Non chef. Pilus = conjugaison."
},
{
text: "Un plasmide libre absorbé directement",
correct: false,
correction: "Non. Ce n'est pas le mécanisme décrit."
},
{
text: "Une spore de champignon",
correct: false,
correction: "Faux 😭."
},
{
text: "Un globule blanc",
correct: false,
correction: "Non."
}
],
explanation: "La transduction correspond au transfert d'ADN bactérien d'une bactérie à une autre par l'intermédiaire d'un bactériophage."
},
{
id: 42,
type: "QRM",
question: "Concernant la transduction bactérienne, quelles propositions sont exactes ?",
options: [
{
text: "Elle ne nécessite pas de contact direct entre donneuse et receveuse",
correct: true,
correction: "Oui boss 🧠 C'est un mécanisme indirect."
},
{
text: "Elle implique une bactérie donneuse, une bactérie receveuse et un phage",
correct: true,
correction: "Exact. Trio complet."
},
{
text: "Le phage peut transporter accidentellement de l'ADN bactérien",
correct: true,
correction: "Oui. C'est le cœur du transfert."
},
{
text: "Elle est obligatoirement assurée par un pilus F",
correct: false,
correction: "Non chef 💀 Ça, c'est la conjugaison."
},
{
text: "Elle exige la fusion physique permanente des deux bactéries",
correct: false,
correction: "Faux."
}
],
explanation: "La transduction est un transfert horizontal sans contact direct, utilisant un bactériophage comme vecteur d'ADN bactérien."
},
{
id: 43,
type: "QCM",
question: "Quel cycle du phage correspond à l'intégration de son ADN dans le génome bactérien selon le cours ?",
options: [
{
text: "Le cycle lysogénique",
correct: true,
correction: "Oui boss 🧠 Lysogénique = intégration tranquille dans le génome."
},
{
text: "Le cycle lytique",
correct: false,
correction: "Non chef. Le lytique correspond ici à la production de nouveaux phages."
},
{
text: "La conjugaison",
correct: false,
correction: "Faux."
},
{
text: "La transformation",
correct: false,
correction: "Non."
},
{
text: "La scissiparité",
correct: false,
correction: "Non chef 😭 C'est la division bactérienne."
}
],
explanation: "Dans le cycle lysogénique, l'ADN du phage peut s'intégrer au génome bactérien et modifier les caractéristiques de l'hôte."
},
{
id: 44,
type: "QRM",
question: "Quelles situations de stress sont citées comme pouvant favoriser le passage au cycle lytique ?",
options: [
{
text: "La présence d'antibiotiques",
correct: true,
correction: "Oui boss. Les antibiotiques peuvent constituer un stress."
},
{
text: "Un manque de nutriments",
correct: true,
correction: "Exact 🧠 La disette bactérienne peut déclencher le bazar."
},
{
text: "Une absence totale de toute contrainte est le seul déclencheur possible",
correct: false,
correction: "Non chef 😭 Le cours parle justement de stress."
},
{
text: "La présence obligatoire d'un pilus sexuel",
correct: false,
correction: "Faux. Aucun rapport avec le passage lytique."
},
{
text: "La présence de thymidine est nécessaire dans tous les cas",
correct: false,
correction: "Non."
}
],
explanation: "Des stress comme l'exposition aux antibiotiques ou le manque de nutriments peuvent favoriser l'entrée dans un cycle lytique."
},
{
id: 45,
type: "QCM",
question: "Lors d'une transduction, quel type d'ADN peut être empaqueté par erreur dans la capside d'un nouveau phage ?",
options: [
{
text: "Un fragment d'ADN bactérien",
correct: true,
correction: "Oui boss 🧠 Attention au piège du QCM du cours : c'est de l'ADN bactérien."
},
{
text: "Uniquement de l'ADN humain",
correct: false,
correction: "Non chef 😭."
},
{
text: "Un fragment de membrane bactérienne",
correct: false,
correction: "Faux."
},
{
text: "Un pilus entier",
correct: false,
correction: "Non."
},
{
text: "Une protéine ribosomale uniquement",
correct: false,
correction: "Non chef."
}
],
explanation: "Au cours de l'assemblage des phages, un fragment d'ADN de la bactérie donneuse peut être empaqueté par erreur puis injecté à une nouvelle bactérie."
},
{
id: 46,
type: "QRM",
question: "Quels nouveaux caractères peuvent être conférés à une bactérie receveuse après transduction selon le cours ?",
options: [
{
text: "Une résistance aux antibiotiques",
correct: true,
correction: "Oui boss 🧠 Classique et cliniquement bien relou."
},
{
text: "Des facteurs de virulence",
correct: true,
correction: "Exact."
},
{
text: "De nouvelles capacités métaboliques",
correct: true,
correction: "Oui. Le transfert peut changer le métabolisme."
},
{
text: "Une perte obligatoire de tout son génome initial",
correct: false,
correction: "Non chef 💀 Elle ajoute un fragment, elle ne formate pas le disque dur entier."
},
{
text: "Une impossibilité définitive de se diviser",
correct: false,
correction: "Faux."
}
],
explanation: "L'ADN transféré par phage peut apporter résistance, virulence ou nouvelles fonctions métaboliques à la bactérie réceptrice."
},
{
id: 47,
type: "QCM",
question: "Dans quel type de milieu le cours indique-t-il que la transduction est particulièrement favorisée pour la dissémination des gènes ?",
options: [
{
text: "Les milieux liquides comme les océans et les mers",
correct: true,
correction: "Oui boss 🌊 Le liquide facilite la large dissémination des phages et des gènes."
},
{
text: "Uniquement l'air sec",
correct: false,
correction: "Non chef. C'est même un des pièges du QCM fourni."
},
{
text: "Uniquement la peau humaine",
correct: false,
correction: "Non."
},
{
text: "Uniquement les milieux totalement stériles",
correct: false,
correction: "Faux."
},
{
text: "Exclusivement le noyau des cellules humaines",
correct: false,
correction: "Non chef 😭."
}
],
explanation: "La transduction est particulièrement décrite dans les milieux liquides comme les océans et les mers, favorisant la dissémination génétique."
},
{
id: 48,
type: "QRM",
question: "À propos de l'impact écologique et épidémiologique de la transduction, quelles propositions sont exactes ?",
options: [
{
text: "Elle peut favoriser une large dissémination de gènes",
correct: true,
correction: "Oui boss 🧠 Les phages font voyager l'information génétique."
},
{
text: "Elle peut contribuer à l'émergence de nouvelles souches très virulentes",
correct: true,
correction: "Exact."
},
{
text: "Le cours évoque notamment des régions où les contacts humains-animaux sont étroits",
correct: true,
correction: "Oui. C'est présenté comme un contexte pouvant favoriser certaines émergences."
},
{
text: "Elle ne peut jamais modifier la virulence d'une souche",
correct: false,
correction: "Non chef 💀 La virulence fait explicitement partie des caractères transférables."
},
{
text: "Elle est confinée aux laboratoires expérimentaux",
correct: false,
correction: "Faux. C'est un mécanisme naturel."
}
],
explanation: "En transportant des gènes sur de larges distances, les phages participent à la circulation de caractères nouveaux et potentiellement à l'émergence de souches virulentes."
},
{
id: 49,
type: "QCM",
question: "En quelle année l'expérience de transformation de Griffith présentée dans le cours a-t-elle été réalisée ?",
options: [
{
text: "1898",
correct: false,
correction: "Non chef."
},
{
text: "1918",
correct: false,
correction: "Non."
},
{
text: "1928",
correct: true,
correction: "Oui boss 🎯 Griffith, 1928."
},
{
text: "1978",
correct: false,
correction: "Faux."
},
{
text: "2008",
correct: false,
correction: "Non chef 😭."
}
],
explanation: "L'expérience historique de Griffith sur le pneumocoque est datée de 1928 dans le cours."
},
{
id: 50,
type: "QRM",
question: "Dans l'expérience de Griffith, quelles affirmations sont exactes ?",
options: [
{
text: "La souche capsulée de pneumocoque est virulente",
correct: true,
correction: "Oui boss 🧠 Capsule = caractère virulent dans l'expérience."
},
{
text: "La souche non capsulée est décrite comme non virulente",
correct: true,
correction: "Exact."
},
{
text: "L'injection de bactéries capsulées vivantes entraîne la mort des souris",
correct: true,
correction: "Oui. Elles sont virulentes."
},
{
text: "La souche non capsulée provoque toujours des infections graves spontanément",
correct: false,
correction: "Non chef. Elle est décrite comme présente naturellement et non virulente."
},
{
text: "Les bactéries capsulées chauffées restent aussi virulentes qu'avant",
correct: false,
correction: "Faux. Après chauffage, les souris restent vivantes."
}
],
explanation: "Griffith compare des pneumocoques capsulés virulents à des non capsulés non virulents et montre qu'un caractère peut être transféré depuis les bactéries mortes."
},
{
id: 51,
type: "QCM",
question: "Que se passe-t-il lorsque Griffith injecte aux souris des bactéries capsulées préalablement chauffées ?",
options: [
{
text: "Les souris restent vivantes",
correct: true,
correction: "Oui boss 🧠 Le chauffage tue les bactéries capsulées et elles ne provoquent plus directement la mort."
},
{
text: "Les souris meurent immédiatement",
correct: false,
correction: "Non chef."
},
{
text: "Les souris développent obligatoirement une résistance aux antibiotiques",
correct: false,
correction: "Faux."
},
{
text: "Les souris deviennent porteuses d'un plasmide F",
correct: false,
correction: "Non 😭 Aucun rapport."
},
{
text: "Les bactéries se transforment en bactériophages",
correct: false,
correction: "Non chef 💀."
}
],
explanation: "Les pneumocoques capsulés chauffés sont morts et n'entraînent plus la mort des souris lorsqu'ils sont injectés seuls."
},
{
id: 52,
type: "QRM",
question: "Que montre l'association de bactéries capsulées mortes et de bactéries non capsulées vivantes dans l'expérience de Griffith ?",
options: [
{
text: "Les souris peuvent mourir",
correct: true,
correction: "Oui boss. C'est le retournement de situation qui fait toute l'expérience."
},
{
text: "Des pneumocoques capsulés peuvent être retrouvés ensuite",
correct: true,
correction: "Exact 🧠 Les non capsulés ont acquis le caractère."
},
{
text: "Un matériel génétique provenant des bactéries mortes peut transmettre le caractère virulent",
correct: true,
correction: "Oui. C'est la conclusion clé."
},
{
text: "La présence d'un pilus F est indispensable à ce phénomène",
correct: false,
correction: "Non chef. C'est une transformation, sans contact."
},
{
text: "Le phénomène nécessite un bactériophage",
correct: false,
correction: "Faux. Ça serait la transduction."
}
],
explanation: "L'ADN libéré par les bactéries capsulées mortes peut être acquis par les bactéries non capsulées vivantes, leur transmettant le caractère virulent."
},
{
id: 53,
type: "QCM",
question: "Comment est qualifiée une bactérie capable de prélever et d'intégrer de l'ADN libre présent dans son environnement ?",
options: [
{
text: "Compétente",
correct: true,
correction: "Oui boss 🧠 Compétente = capable d'importer l'ADN libre."
},
{
text: "Lysogène",
correct: false,
correction: "Non chef. Ce terme renvoie au cycle phagique."
},
{
text: "Fertile uniquement",
correct: false,
correction: "Faux. F pour fertile concerne la conjugaison."
},
{
text: "Totorésistante",
correct: false,
correction: "Non 😭 Ça veut dire résistante à tous les antibiotiques disponibles."
},
{
text: "Capsulée obligatoirement",
correct: false,
correction: "Non chef."
}
],
explanation: "La transformation nécessite un état de compétence permettant à la bactérie de capter de l'ADN libre dans son environnement."
},
{
id: 54,
type: "QRM",
question: "Concernant la transformation bactérienne, quelles propositions sont exactes ?",
options: [
{
text: "Elle s'effectue sans contact direct entre bactéries",
correct: true,
correction: "Oui boss 🧠 Pas besoin de se toucher."
},
{
text: "La mort d'une bactérie peut libérer du matériel génétique dans le milieu",
correct: true,
correction: "Exact."
},
{
text: "Une bactérie compétente peut intégrer certains fragments d'ADN libre",
correct: true,
correction: "Oui. C'est le mécanisme central."
},
{
text: "Elle nécessite obligatoirement un phage vecteur",
correct: false,
correction: "Non chef 💀 Phage = transduction."
},
{
text: "Elle nécessite obligatoirement un pilus sexuel",
correct: false,
correction: "Faux. Pilus = conjugaison."
}
],
explanation: "La transformation est un transfert horizontal sans contact : une bactérie compétente capte de l'ADN libéré dans le milieu par d'autres bactéries, notamment après leur mort."
},
{
id: 55,
type: "QCM",
question: "Quel effet le stress peut-il avoir sur la transformation bactérienne selon le cours ?",
options: [
{
text: "Il peut encourager les bactéries à devenir compétentes",
correct: true,
correction: "Oui boss 🧠 Stress = les bactéries ouvrent davantage le mode acquisition d'ADN."
},
{
text: "Il rend systématiquement toutes les bactéries incompétentes",
correct: false,
correction: "Non chef. Le QCM du cours te tend exactement ce piège."
},
{
text: "Il empêche toute acquisition génétique",
correct: false,
correction: "Faux."
},
{
text: "Il bloque définitivement la variabilité bactérienne",
correct: false,
correction: "Non."
},
{
text: "Il transforme les bactéries en virus",
correct: false,
correction: "Mais frr 😭."
}
],
explanation: "Le stress peut favoriser l'état de compétence et donc l'acquisition d'ADN libre afin d'augmenter les possibilités d'adaptation."
},
{
id: 56,
type: "QRM",
question: "À propos de la transformation bactérienne dans la flore, quelles propositions sont exactes ?",
options: [
{
text: "Elle peut se produire de façon continue",
correct: true,
correction: "Oui boss 🧠 Ce n'est pas un événement exceptionnel."
},
{
text: "Elle est particulièrement décrite au sein de notre flore",
correct: true,
correction: "Exact."
},
{
text: "Les échanges d'ADN peuvent maintenir une forte diversité génétique",
correct: true,
correction: "Oui. Ça entretient le bazar génétique permanent."
},
{
text: "Elle peut permettre l'acquisition de résistances aux antibiotiques",
correct: true,
correction: "Exact 🧠 Un fragment d'ADN peut apporter un caractère de résistance."
},
{
text: "Elle exige un contact physique direct entre donneuse et receveuse",
correct: false,
correction: "Non chef 💀 Transformation = sans contact."
}
],
explanation: "Dans les flores bactériennes, la transformation peut fonctionner en continu et contribuer fortement au maintien de la diversité et à l'acquisition de caractères comme l'antibiorésistance."
},
{
id: 57,
type: "QCM",
question: "Parmi les mécanismes suivants, lequel nécessite explicitement un contact direct entre deux bactéries ?",
options: [
{
text: "La conjugaison",
correct: true,
correction: "Oui boss 🧠 Conjugaison = contact direct via pilus."
},
{
text: "La transduction",
correct: false,
correction: "Non chef. Le phage fait l'intermédiaire."
},
{
text: "La transformation",
correct: false,
correction: "Faux. L'ADN est libre dans le milieu."
},
{
text: "La mutation spontanée",
correct: false,
correction: "Non."
},
{
text: "La réplication de l'ADN",
correct: false,
correction: "Non chef."
}
],
explanation: "Parmi les trois transferts horizontaux détaillés, seule la conjugaison nécessite un contact direct entre une donneuse et une receveuse."
},
{
id: 58,
type: "QRM",
question: "Quelles associations mécanisme–support de transfert sont exactes ?",
options: [
{
text: "Conjugaison — pilus",
correct: true,
correction: "Oui boss 🧠 Le pont bactérien."
},
{
text: "Transduction — bactériophage",
correct: true,
correction: "Exact."
},
{
text: "Transformation — ADN libre dans le milieu",
correct: true,
correction: "Oui."
},
{
text: "Mutation — altération de l'ADN ayant échappé aux réparations",
correct: true,
correction: "Exact 🧠 Mutation = flux vertical dans le cadre du cours."
},
{
text: "Transformation — pilus sexuel obligatoire",
correct: false,
correction: "Non chef 💀 Tu viens de recoller la conjugaison sur la transformation."
}
],
explanation: "Chaque mécanisme possède sa signature : pilus pour la conjugaison, phage pour la transduction, ADN libre pour la transformation et modification intrinsèque du génome pour la mutation."
},
{
id: 59,
type: "QCM",
question: "Quel mécanisme horizontal nécessite la mort de la bactérie donneuse dans le modèle présenté ?",
options: [
{
text: "La transformation",
correct: true,
correction: "Oui boss 🧠 La donneuse meurt, relargue son ADN, une compétente récupère les morceaux."
},
{
text: "La conjugaison",
correct: false,
correction: "Non chef. La donneuse reste vivante et transfère son plasmide."
},
{
text: "La transduction",
correct: false,
correction: "Non. Le mécanisme implique surtout un phage."
},
{
text: "La réplication",
correct: false,
correction: "Faux."
},
{
text: "La substitution",
correct: false,
correction: "Non chef."
}
],
explanation: "Dans la transformation, la bactérie donneuse morte libère son ADN dans le milieu ; une bactérie compétente peut alors en intégrer des fragments."
},
{
id: 60,
type: "QRM",
question: "Quelles caractéristiques permettent de différencier correctement conjugaison, transduction et transformation ?",
options: [
{
text: "La conjugaison implique un contact direct",
correct: true,
correction: "Oui boss."
},
{
text: "La transduction utilise un phage comme intermédiaire",
correct: true,
correction: "Exact."
},
{
text: "La transformation implique l'absorption d'ADN libre",
correct: true,
correction: "Oui."
},
{
text: "La transformation nécessite une bactérie receveuse compétente",
correct: true,
correction: "Exact 🧠 Compétence indispensable."
},
{
text: "Les trois mécanismes nécessitent obligatoirement un pilus",
correct: false,
correction: "Non chef 💀 Seule la conjugaison du cours utilise ce système."
}
],
explanation: "Conjugaison = contact + pilus ; transduction = phage ; transformation = ADN libre + compétence bactérienne."
},
{
id: 61,
type: "QCM",
question: "Quel terme le cours utilise-t-il pour désigner des bactéries insensibles à la totalité des antibiotiques disponibles ?",
options: [
{
text: "Totorésistantes",
correct: true,
correction: "Oui boss 💀 Totorésistantes = résistantes à tout l'arsenal disponible."
},
{
text: "Compétentes",
correct: false,
correction: "Non chef. Compétence = aptitude à capter de l'ADN."
},
{
text: "Lysogéniques",
correct: false,
correction: "Faux."
},
{
text: "Auxotrophes",
correct: false,
correction: "Non."
},
{
text: "Housekeeping",
correct: false,
correction: "Non chef 😭."
}
],
explanation: "Le terme employé dans le cours est « totorésistantes » pour les bactéries insensibles à tous les antibiotiques disponibles."
},
{
id: 62,
type: "QRM",
question: "Quelles conséquences de la variabilité génétique bactérienne sont explicitement citées ?",
options: [
{
text: "L'apparition de souches de virulence différente",
correct: true,
correction: "Oui boss 🧠 La virulence peut évoluer."
},
{
text: "L'émergence de résistances aux antibiotiques",
correct: true,
correction: "Exact."
},
{
text: "Une adaptation à l'homme",
correct: true,
correction: "Oui. C'est un des trois grands blocs du schéma."
},
{
text: "La formation de nouveaux clones",
correct: true,
correction: "Exact 🧠 Acquisition génétique puis émergence de nouveaux clones."
},
{
text: "La disparition obligatoire de toute diversité entre souches",
correct: false,
correction: "Non chef 💀 C'est précisément l'inverse."
}
],
explanation: "La variabilité génétique produit de nouveaux clones pouvant être plus virulents, plus résistants et mieux adaptés à l'hôte humain."
},
{
id: 63,
type: "QCM",
question: "Quel facteur anthropique est particulièrement incriminé dans le cours dans la diffusion de résistances bactériennes ?",
options: [
{
text: "L'usage excessif des antibiotiques, notamment dans le secteur agricole",
correct: true,
correction: "Oui boss 🧠 Le cours insiste fort sur l'élevage."
},
{
text: "L'utilisation de vitamines chez l'homme",
correct: false,
correction: "Non chef."
},
{
text: "La vaccination systématique",
correct: false,
correction: "Faux."
},
{
text: "La consommation d'eau potable",
correct: false,
correction: "Non."
},
{
text: "La réduction de l'usage antibiotique",
correct: false,
correction: "Non chef 😭 Ça, c'est au contraire la mesure proposée pour limiter le problème."
}
],
explanation: "Le support met particulièrement en cause l'utilisation excessive et inappropriée des antibiotiques, notamment dans l'élevage."
},
{
id: 64,
type: "QRM",
question: "Pourquoi les bactéries multirésistantes ou totorésistantes sont-elles particulièrement problématiques selon le cours ?",
options: [
{
text: "Elles peuvent conduire à une impasse thérapeutique",
correct: true,
correction: "Oui boss 💀 Plus de molécule efficace = clinique pas drôle."
},
{
text: "La situation est particulièrement préoccupante chez les immunodéprimés",
correct: true,
correction: "Exact. Leur immunité ne peut pas prendre aussi efficacement le relais."
},
{
text: "Elles peuvent être sélectionnées par un usage inapproprié des antibiotiques",
correct: true,
correction: "Oui 🧠 La pression de sélection entretient le problème."
},
{
text: "La diffusion de gènes de résistance peut être facilitée par les transferts génétiques",
correct: true,
correction: "Exact. C'est tout le sujet du chapitre."
},
{
text: "Elles sont systématiquement moins adaptées que les bactéries sensibles",
correct: false,
correction: "Non chef. Le cours ne dit pas ça ; certaines souches peuvent très bien se diffuser."
}
],
explanation: "Les résistances peuvent s'accumuler et se diffuser jusqu'à créer des situations où aucun antibiotique disponible n'est efficace, particulièrement graves chez les patients fragiles."
},
{
id: 65,
type: "QCM",
question: "Quelle mesure de santé publique est mise en avant pour limiter la résistance bactérienne ?",
options: [
{
text: "Réduire l'usage inapproprié des antibiotiques",
correct: true,
correction: "Oui boss 🧠 Moins de pression de sélection inutile."
},
{
text: "Prescrire systématiquement des antibiotiques à tous les élevages",
correct: false,
correction: "Non chef 💀 C'est précisément ce que le cours critique."
},
{
text: "Utiliser uniquement des monothérapies",
correct: false,
correction: "Faux."
},
{
text: "Supprimer toutes les flores bactériennes humaines",
correct: false,
correction: "Non 😭 Heureusement."
},
{
text: "Augmenter volontairement les doses environnementales d'antibiotiques",
correct: false,
correction: "Non chef."
}
],
explanation: "La réduction de l'usage inapproprié des antibiotiques, notamment dans l'élevage, est présentée comme une mesure essentielle."
},
{
id: 66,
type: "QRM",
question: "À propos de l'exemple historique de chirurgie cité dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Il concerne une école de médecine chirurgicale en France au XIXe siècle",
correct: true,
correction: "Oui boss 🧠 Exemple historique français."
},
{
text: "La mortalité post-chirurgicale citée était d'environ 80 à 90 %",
correct: true,
correction: "Exact 💀 Un chiffre assez violent donc facile à retenir."
},
{
text: "La découverte des antibiotiques a fortement diminué cette mortalité",
correct: true,
correction: "Oui."
},
{
text: "Le cours attribue cette diminution à une bonne couverture antibiotique postopératoire",
correct: true,
correction: "Exact 🧠 C'est la formulation du support."
},
{
text: "La mortalité post-chirurgicale était déjà inférieure à 1 % avant les antibiotiques",
correct: false,
correction: "Non chef 😭 Le cours donne justement 80–90 %."
}
],
explanation: "Le cours utilise cet exemple pour rappeler l'impact majeur des antibiotiques sur la mortalité infectieuse postopératoire, tout en soulignant aujourd'hui le risque lié à leur surutilisation."
},
{
id: 67,
type: "QCM",
question: "Quel système bactérien est présenté par l'enseignante comme une sorte de réponse au stress déclenchant des réactions en chaîne ?",
options: [
{
text: "Le système SOS",
correct: true,
correction: "Oui boss 🧠 SOS, le nom est suffisamment cadeau pour une fois."
},
{
text: "Le système ABO",
correct: false,
correction: "Non chef 😭 On n'est pas en hémato."
},
{
text: "Le facteur Rhésus",
correct: false,
correction: "Faux."
},
{
text: "Le cycle de Krebs humain",
correct: false,
correction: "Non."
},
{
text: "Le système HLA",
correct: false,
correction: "Non chef 💀."
}
],
explanation: "Le système SOS bactérien est présenté comme une réponse au stress capable d'activer diverses réactions adaptatives."
},
{
id: 68,
type: "QRM",
question: "Concernant la réponse bactérienne au stress décrite par la professeure, quelles propositions sont exactes ?",
options: [
{
text: "Un niveau minimal de stress peut suffire à déclencher des mécanismes",
correct: true,
correction: "Oui boss 🧠 Pas besoin d'apocalypse bactérienne."
},
{
text: "Le système SOS participe à la détection des situations de stress",
correct: true,
correction: "Exact."
},
{
text: "Les systèmes d'acquisition d'ADN peuvent être activés",
correct: true,
correction: "Oui. Ça colle notamment avec la compétence."
},
{
text: "Les systèmes de relargage d'ADN peuvent être activés simultanément",
correct: true,
correction: "Exact 🧠 Les deux directions peuvent fonctionner en même temps."
},
{
text: "Le stress bloque systématiquement tous les échanges génétiques",
correct: false,
correction: "Non chef 💀 C'est exactement l'inverse dans l'explication donnée."
}
],
explanation: "La réponse SOS au stress peut activer simultanément des mécanismes d'acquisition et de relargage d'ADN, participant à la dynamique génétique bactérienne."
},
{
id: 69,
type: "QCM",
question: "Que montrent les études parisiennes citées concernant un voyage dans une région où circulent des germes résistants ?",
options: [
{
text: "On peut temporairement retrouver ces germes résistants dans notre flore",
correct: true,
correction: "Oui boss 🧠 Tu voyages, tu peux ramener un petit souvenir microbiologique."
},
{
text: "Ces germes deviennent toujours définitivement dominants",
correct: false,
correction: "Non chef. Le cours dit qu'ils peuvent disparaître après quelques semaines."
},
{
text: "Aucune modification de flore n'est possible lors d'un voyage",
correct: false,
correction: "Faux."
},
{
text: "Ces bactéries détruisent obligatoirement toute la flore résidente",
correct: false,
correction: "Non."
},
{
text: "Le voyageur développe nécessairement une infection grave",
correct: false,
correction: "Non chef 😭 Colonisation ≠ infection."
}
],
explanation: "Voyager dans une zone où circulent des bactéries résistantes peut entraîner leur acquisition transitoire dans la flore, sans forcément provoquer de maladie."
},
{
id: 70,
type: "QRM",
question: "Pourquoi les germes résistants acquis au cours d'un voyage peuvent-ils disparaître après quelques semaines selon le cours ?",
options: [
{
text: "La flore propre du patient peut les éliminer naturellement",
correct: true,
correction: "Oui boss 🧠 La flore locale défend son territoire."
},
{
text: "Il existe une compétition entre populations bactériennes",
correct: true,
correction: "Exact."
},
{
text: "La colonisation par une souche résistante n'est pas forcément permanente",
correct: true,
correction: "Oui. C'est précisément ce que montre l'exemple."
},
{
text: "La présence d'une souche résistante implique toujours un traitement antibiotique pour la faire disparaître",
correct: false,
correction: "Non chef 💀 Dans cet exemple, la flore l'élimine naturellement."
},
{
text: "Toute bactérie résistante meurt obligatoirement en moins de 24 heures",
correct: false,
correction: "Faux."
}
],
explanation: "Les bactéries résistantes acquises lors d'un voyage peuvent être progressivement éliminées par la compétition avec la flore résidente."
},
{
id: 71,
type: "QCM",
question: "Dans l'exemple d'une hospitalisation à l'étranger, quel facteur modifie la flore et favorise l'acquisition de bactéries résistantes ?",
options: [
{
text: "La consommation d'antibiotiques",
correct: true,
correction: "Oui boss 🧠 Antibiotiques = pression de sélection + perturbation de la flore."
},
{
text: "La prise de vitamines",
correct: false,
correction: "Non chef."
},
{
text: "Le repos au lit",
correct: false,
correction: "Faux."
},
{
text: "La consommation d'eau uniquement",
correct: false,
correction: "Non."
},
{
text: "L'absence totale de bactéries dans l'environnement hospitalier",
correct: false,
correction: "Non chef 😭."
}
],
explanation: "Dans cet exemple, l'antibiothérapie modifie la flore du patient et favorise l'acquisition de bactéries résistantes."
},
{
id: 72,
type: "QRM",
question: "Concernant le suivi de patients hospitalisés à l'étranger décrit dans le cours, quelles propositions sont exactes ?",
options: [
{
text: "Des bactéries résistantes peuvent être acquises dans la flore",
correct: true,
correction: "Oui boss 🧠 C'est le point de départ de l'exemple."
},
{
text: "De nouvelles souches résistantes peuvent émerger au cours des mois suivants",
correct: true,
correction: "Exact."
},
{
text: "Des plasmides conjugatifs peuvent se propager dans la flore",
correct: true,
correction: "Oui. Voilà le lien direct avec la conjugaison."
},
{
text: "Cette colonisation peut rester sans conséquence clinique immédiate pour le patient",
correct: true,
correction: "Exact 🧠 Porteur ne veut pas dire malade."
},
{
text: "La présence de plasmides conjugatifs empêche toute diffusion de résistance",
correct: false,
correction: "Non chef 💀 Ils peuvent justement favoriser cette diffusion."
}
],
explanation: "Après exposition hospitalière et antibiotique, des résistances peuvent se diffuser silencieusement dans la flore via des plasmides conjugatifs."
},
{
id: 73,
type: "QCM",
question: "Dans quelle situation le cours indique-t-il qu'un isolement technique peut devenir nécessaire chez un patient colonisé par des souches résistantes ?",
options: [
{
text: "Lors d'une réanimation",
correct: true,
correction: "Oui boss 🧠 En réa, éviter la dissémination de souches pandémiques devient critique."
},
{
text: "Lors d'une promenade en extérieur",
correct: false,
correction: "Non chef 😭."
},
{
text: "Lors d'un simple repas à domicile",
correct: false,
correction: "Faux."
},
{
text: "Chez toute personne ayant voyagé, sans autre contexte",
correct: false,
correction: "Non. Le cours cible notamment la situation de réanimation."
},
{
text: "Uniquement après une vaccination",
correct: false,
correction: "Non chef."
}
],
explanation: "L'isolement technique peut être nécessaire en réanimation afin d'empêcher la transmission de souches résistantes potentiellement pandémiques."
},
{
id: 74,
type: "QRM",
question: "Parmi les propositions suivantes, lesquelles décrivent correctement la logique de sélection antibiotique enseignée dans le cours ?",
options: [
{
text: "Les mutants résistants peuvent exister avant l'exposition à l'antibiotique",
correct: true,
correction: "Oui boss 🧠 Concept fondamental."
},
{
text: "L'antibiotique exerce une pression de sélection",
correct: true,
correction: "Exact."
},
{
text: "Les bactéries sensibles sont éliminées plus facilement que les résistantes",
correct: true,
correction: "Oui."
},
{
text: "La diminution de la concurrence peut favoriser l'expansion du clone résistant",
correct: true,
correction: "Exact 🧠 Le terrain se libère pour le mutant."
},
{
text: "L'antibiotique fabrique intentionnellement chez chaque bactérie la mutation parfaitement adaptée",
correct: false,
correction: "Non chef 💀 C'est justement l'idée fausse que le cours veut démonter."
}
],
explanation: "L'antibiotique agit comme un filtre écologique : il élimine les sensibles et sélectionne les résistantes préexistantes."
},
{
id: 75,
type: "QCM",
question: "Quelle opposition résume le mieux la différence entre flux vertical et flux horizontal dans ce cours ?",
options: [
{
text: "Vertical : modification transmise dans une lignée ; horizontal : acquisition d'ADN provenant d'une autre bactérie",
correct: true,
correction: "Oui boss 🧠 Là t'as le chapitre en une phrase."
},
{
text: "Vertical : phage ; horizontal : uniquement mutation",
correct: false,
correction: "Non chef. C'est inversé et incomplet."
},
{
text: "Vertical : uniquement plasmide ; horizontal : uniquement réplication",
correct: false,
correction: "Faux."
},
{
text: "Les deux termes désignent exactement le même mécanisme",
correct: false,
correction: "Non."
},
{
text: "Le flux horizontal n'est jamais transmis aux descendants",
correct: false,
correction: "Non chef. Une fois l'ADN acquis, il peut être transmis lors des divisions."
}
],
explanation: "Le flux vertical concerne les modifications du génome au sein d'une lignée, tandis que le flux horizontal correspond à l'acquisition latérale d'ADN venant d'autres bactéries."
},
{
id: 76,
type: "QRM",
question: "Quelles propositions relient correctement un mécanisme à son expérience historique dans le cours ?",
options: [
{
text: "Conjugaison — Lederberg et Tatum",
correct: true,
correction: "Oui boss 🧠 Duo numéro 1."
},
{
text: "Transduction — Zinder et Lederberg",
correct: true,
correction: "Exact."
},
{
text: "Transformation — Griffith en 1928",
correct: true,
correction: "Oui."
},
{
text: "Classification par ARN 16S — Carl Woese",
correct: true,
correction: "Exact 🧠 Les quatre associations sont propres."
},
{
text: "Transformation — Lederberg et Tatum",
correct: false,
correction: "Non chef 💀 Ceux-là, c'est la conjugaison."
}
],
explanation: "Les grandes associations historiques sont : Woese–ARN 16S, Lederberg/Tatum–conjugaison, Zinder/Lederberg–transduction et Griffith–transformation."
},
{
id: 77,
type: "QCM",
question: "Parmi les mécanismes horizontaux étudiés, lequel repose sur l'intégration d'ADN libre provenant du milieu extérieur par une bactérie compétente ?",
options: [
{
text: "La transformation",
correct: true,
correction: "Oui boss 🧠 ADN libre + compétence = transformation."
},
{
text: "La conjugaison",
correct: false,
correction: "Non chef. Contact + pilus + plasmide."
},
{
text: "La transduction",
correct: false,
correction: "Faux. Phage."
},
{
text: "La substitution",
correct: false,
correction: "Non."
},
{
text: "La scissiparité",
correct: false,
correction: "Non chef 😭."
}
],
explanation: "La transformation correspond à l'acquisition d'ADN libre par une bactérie en état de compétence."
},
{
id: 78,
type: "QRM",
question: "Quels éléments participent selon le cours à la rapidité et à l'ampleur de la variabilité génétique bactérienne ?",
options: [
{
text: "Une multiplication bactérienne très rapide",
correct: true,
correction: "Oui boss 🧠 Plus de générations = plus d'occasions d'accumuler des différences."
},
{
text: "Des mutations spontanées permanentes",
correct: true,
correction: "Exact."
},
{
text: "Des transferts horizontaux par conjugaison, transduction et transformation",
correct: true,
correction: "Oui."
},
{
text: "La sélection exercée par l'environnement, notamment les antibiotiques",
correct: true,
correction: "Exact 🧠 Variabilité + sélection = adaptation accélérée."
},
{
text: "Une absence totale d'échanges génétiques entre bactéries",
correct: false,
correction: "Non chef 💀 Tout le chapitre dit l'inverse."
}
],
explanation: "Multiplication rapide, mutations, transferts horizontaux et pressions de sélection se combinent pour produire une évolution bactérienne particulièrement dynamique."
},
{
id: 79,
type: "QCM",
question: "Quelle affirmation résume le mieux la relation entre variabilité génétique et évolution bactérienne décrite dans le cours ?",
options: [
{
text: "La variabilité constitue un avantage évolutif majeur permettant aux bactéries de s'adapter rapidement à leur environnement",
correct: true,
correction: "Oui boss 🧠 C'est littéralement la morale du cours."
},
{
text: "La variabilité empêche toute adaptation bactérienne",
correct: false,
correction: "Non chef 😭 Exactement l'inverse."
},
{
text: "La variabilité ne concerne que les bactéries cultivées en laboratoire",
correct: false,
correction: "Faux."
},
{
text: "La variabilité génétique ne modifie jamais la virulence",
correct: false,
correction: "Non. Elle peut justement faire émerger de nouveaux caractères de virulence."
},
{
text: "La variabilité bactérienne dépend exclusivement de l'homme",
correct: false,
correction: "Non chef. Les mutations et transferts sont des phénomènes naturels."
}
],
explanation: "La plasticité génétique bactérienne permet une adaptation extrêmement rapide aux stress et aux milieux, ce qui explique en partie leur succès évolutif."
},
{
id: 80,
type: "QRM",
question: "À propos de la variabilité génétique bactérienne, quelles propositions de synthèse sont exactes ?",
options: [
{
text: "Le génome bactérien associe un CORE conservé et une fraction accessoire variable",
correct: true,
correction: "Oui boss 🧠 Base structurelle du chapitre."
},
{
text: "Les mutations participent au flux vertical de variabilité",
correct: true,
correction: "Exact."
},
{
text: "Conjugaison, transduction et transformation constituent des mécanismes de transfert horizontal",
correct: true,
correction: "Oui. Le trio à savoir réciter dans le sommeil."
},
{
text: "Cette variabilité peut favoriser virulence, antibiorésistance et adaptation",
correct: true,
correction: "Exact 🧠 Les trois grosses conséquences du cours."
},
{
text: "L'utilisation massive d'antibiotiques élimine définitivement le risque de sélection de bactéries résistantes",
correct: false,
correction: "Non chef 💀 C'est précisément l'inverse : une utilisation excessive augmente la pression de sélection et favorise la diffusion des résistances."
}
],
explanation: "Le génome bactérien est dynamique : mutations et transferts horizontaux alimentent en permanence la diversité, laquelle peut conférer des avantages adaptatifs mais aussi favoriser l'émergence de souches virulentes et résistantes."
}
]
