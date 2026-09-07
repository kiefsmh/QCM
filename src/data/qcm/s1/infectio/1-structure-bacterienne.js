export const structureBacterienneQuestions = [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle proposition définit correctement une bactérie selon le cours ?',
    options: [
      {
        text: 'Un être eucaryote pluricellulaire à noyau vrai',
        correct: false,
        correction: 'Nan chef 😭 Une bactérie c\'est un procaryote UNIcellulaire, pas un être pluricellulaire à noyau : ça, c\'est carrément la définition d\'un eucaryote.'
      },
      {
        text: 'Un être procaryote, unicellulaire, de petite taille et de morphologie variable',
        correct: true,
        correction: 'Voilà le vrai visage de la bactérie 🧠 procaryote, unicellulaire, petite, morphologie variable selon l\'espèce. La définition à connaître par cœur.'
      },
      {
        text: 'Un organisme uniquement visible à l\'œil nu',
        correct: false,
        correction: 'Genre tu la vois à l\'œil nu ta bactérie de 1 à 10 µm 👀 Faut un microscope frérot, pas des yeux de lynx.'
      },
      {
        text: 'Une cellule humaine spécialisée sans paroi',
        correct: false,
        correction: 'Une cellule humaine sans paroi, c\'est... une cellule humaine, pas une bactérie 😭 Grillé direct sur celle-là.'
      },
      {
        text: 'Un parasite obligatoirement intracellulaire',
        correct: false,
        correction: 'Ça c\'est plutôt le délire de certains virus ou parasites, pas la définition générale d\'une bactérie 🙃 Attention à pas tout mélanger.'
      }
    ],
    explanation: 'Retiens la carte d\'identité de la bactérie : procaryote, unicellulaire, petite taille, morphologie variable. Basique mais ça tombe tout le temps.'
  },
  {
    id: 2,
    type: 'QCM',
    question: 'Chez les procaryotes, où se situe principalement l\'ADN ?',
    options: [
      {
        text: 'Dans un noyau entouré d\'une membrane',
        correct: false,
        correction: 'Non non non 🙅 Le noyau membrané, c\'est le kiff des eucaryotes, pas des bactéries. Elles s\'en passent très bien.'
      },
      {
        text: 'Dans le nucléoïde, libre dans le cytoplasme',
        correct: true,
        correction: 'Exact frérot 🧠 Le nucléoïde, zone où traîne l\'ADN bactérien, à l\'air libre dans le cytoplasme, sans membrane pour le protéger.'
      },
      {
        text: 'Dans les mitochondries',
        correct: false,
        correction: 'Les bactéries n\'ont pas de mitochondries, c\'est même l\'inverse historiquement (théorie endosymbiotique) 😭'
      },
      {
        text: 'Dans le réticulum endoplasmique',
        correct: false,
        correction: 'Le réticulum endoplasmique, c\'est un délire d\'eucaryote, les bactéries n\'en ont pas.'
      },
      {
        text: 'Dans l\'appareil de Golgi',
        correct: false,
        correction: 'Golgi ? Connais pas chez les bactéries 💀 Encore une structure d\'eucaryote qui traîne ici par erreur.'
      }
    ],
    explanation: 'Pas de noyau chez les procaryotes : l\'ADN principal traîne libre dans le cytoplasme, au niveau du nucléoïde. Simple mais essentiel.'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel est l\'intérêt majeur des plasmides chez les bactéries ?',
    options: [
      {
        text: 'Ils remplacent totalement le chromosome bactérien',
        correct: false,
        correction: 'Le plasmide c\'est un bonus, pas un remplaçant 😤 Le chromosome bactérien reste bien en place, c\'est lui qui gère l\'essentiel.'
      },
      {
        text: 'Ils sont indispensables à la survie de toutes les bactéries',
        correct: false,
        correction: 'Indispensables ? Pas du tout 🙃 Une bactérie peut très bien vivre sans plasmide, c\'est justement facultatif.'
      },
      {
        text: 'Ils peuvent porter des gènes avantageux, notamment de résistance aux antibiotiques',
        correct: true,
        correction: 'Voilà le vrai pouvoir du plasmide 🧬 Petit bout d\'ADN en plus, facultatif, mais capable de filer un gros avantage type résistance aux antibios. Piège classique en pharmaco.'
      },
      {
        text: 'Ils empêchent toute multiplication bactérienne',
        correct: false,
        correction: 'Alors là carrément l\'inverse 😭 Un plasmide n\'empêche rien, il peut même aider la bactérie à mieux s\'en sortir.'
      },
      {
        text: 'Ils constituent la paroi bactérienne',
        correct: false,
        correction: 'Le plasmide c\'est de l\'ADN, pas une brique de la paroi 🧱 Tu confonds structure génétique et structure pariétale.'
      }
    ],
    explanation: 'Le plasmide est un ADN extrachromosomique facultatif : pas indispensable à la survie, mais capable de filer des super-pouvoirs à la bactérie, comme la résistance aux antibiotiques.'
  },
  {
    id: 4,
    type: 'QCM',
    question: 'Quelle est la taille habituelle d\'une bactérie selon le cours ?',
    options: [
      {
        text: '1 à 10 µm',
        correct: true,
        correction: 'Bien joué 📏 1 à 10 µm, c\'est la taille classique. Petite précision utile : Chlamydiae et mycoplasmes sont encore plus petits, entre 0,3 et 1 µm.'
      },
      {
        text: '10 à 100 mm',
        correct: false,
        correction: 'Alors là t\'as ajouté genre 1000x trop 😭 En millimètres, ta bactérie serait visible à l\'œil nu, absolument pas réaliste.'
      },
      {
        text: '0,001 à 0,01 nm',
        correct: false,
        correction: 'Ça c\'est même plus petit qu\'un virus 🦠 Complètement hors sujet pour une bactérie.'
      },
      {
        text: '1 à 10 cm',
        correct: false,
        correction: 'Le centimètre, c\'est carrément la taille d\'un insecte, pas d\'une bactérie 💀'
      },
      {
        text: 'Toujours exactement 5 µm pour toutes les bactéries sans exception',
        correct: false,
        correction: 'Ha ouai t\'es sûr de toi 😏 Le cours précise justement des exceptions comme Chlamydiae et les mycoplasmes, plus petits. \'Toujours\' et \'sans exception\', ça pue le piège.'
      }
    ],
    explanation: 'Taille bactérienne classique : 1 à 10 µm. Attention aux exceptions type Chlamydiae et mycoplasmes (0,3 à 1 µm), souvent citées pour piéger.'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Comment appelle-t-on les bactéries rondes ou sphériques ?',
    options: [
      {
        text: 'Bacilles',
        correct: false,
        correction: 'Bacille c\'est la forme en bâtonnet, pas la forme ronde 😭 Inversion classique, fais gaffe.'
      },
      {
        text: 'Cocci',
        correct: true,
        correction: 'Exact 🎯 Cocci = forme ronde/sphérique. Le nom le plus simple à retenir de tout le cours, zéro excuse pour se planter dessus.'
      },
      {
        text: 'Spirilles',
        correct: false,
        correction: 'Spirille, c\'est la forme en spirale/hélice, encore une autre catégorie de forme.'
      },
      {
        text: 'Mycoplasmes',
        correct: false,
        correction: 'Mycoplasme, c\'est un type de bactérie sans paroi, pas une forme géométrique 🙃'
      },
      {
        text: 'Vibrions uniquement',
        correct: false,
        correction: 'Vibrion, forme en virgule/incurvée, encore différent des cocci. Et \'uniquement\' en plus, grosse alerte piège.'
      }
    ],
    explanation: 'Cocci = bactéries rondes/sphériques. Bacilles = bâtonnets. Deux formes de base à ne jamais confondre, elles tombent tout le temps.'
  },
  {
    id: 6,
    type: 'QCM',
    question: 'Quelle structure bactérienne est commune à (quasi) toutes les bactéries et constitue une cible importante de nombreux antibiotiques ?',
    options: [
      {
        text: 'La capsule',
        correct: false,
        correction: 'La capsule c\'est facultatif, elle n\'est même pas présente chez toutes les bactéries 😭 Pas le bon candidat pour \'commun à toutes\'.'
      },
      {
        text: 'Le flagelle',
        correct: false,
        correction: 'Flagelle facultatif aussi, il sert à la mobilité, pas de cible antibiotique universelle.'
      },
      {
        text: 'Le peptidoglycane de la paroi',
        correct: true,
        correction: 'Exactement le bon spot 💊 Le peptidoglycane est présent chez quasi toutes les bactéries, et c\'est LA cible historique de nombreux antibiotiques (coucou les bêta-lactamines).'
      },
      {
        text: 'Le pili sexuel',
        correct: false,
        correction: 'Le pilus sexuel sert au transfert de matériel génétique, rien à voir avec une cible antibiotique commune.'
      },
      {
        text: 'Le LPS chez toutes les bactéries',
        correct: false,
        correction: 'Le LPS c\'est réservé aux Gram-, pas \'toutes les bactéries\' 🙅 Encore un mot piège (\'toutes\') à repérer.'
      }
    ],
    explanation: 'Le peptidoglycane est la structure commune de la paroi bactérienne, essentielle et donc une cible majeure des antibiotiques.'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'De quoi est composé le peptidoglycane selon le cours ?',
    options: [
      {
        text: 'Uniquement de lipides',
        correct: false,
        correction: 'Uniquement des lipides ? Non frérot, c\'est un hétéropolymère, pas une flaque de gras 😭'
      },
      {
        text: 'De chaînes de glycane, de chaînes peptidiques latérales et de ponts interpeptidiques',
        correct: true,
        correction: 'Voilà la vraie recette 🧠 Glycane + chaînes peptidiques latérales + ponts interpeptidiques = le peptidoglycane. À retenir par cœur.'
      },
      {
        text: 'Uniquement de protéines terminales appelées adhésines',
        correct: false,
        correction: 'Les adhésines, c\'est plutôt le délire des pili, pas la composition du peptidoglycane.'
      },
      {
        text: 'Uniquement de lipopolysaccharide',
        correct: false,
        correction: 'Le LPS c\'est une autre molécule, propre aux Gram-, rien à voir avec le peptidoglycane lui-même.'
      },
      {
        text: 'De cristal violet et de safranine',
        correct: false,
        correction: 'Cristal violet et safranine, c\'est pour la coloration de Gram, pas pour fabriquer le peptidoglycane 💀 Tu mélanges deux chapitres différents.'
      }
    ],
    explanation: 'Le peptidoglycane est un hétéropolymère : chaînes de glycane, chaînes peptidiques latérales et ponts interpeptidiques. Structure clé à connaître dans le détail.'
  },
  {
    id: 8,
    type: 'QCM',
    question: 'Quelle bactérie possède une paroi riche en peptidoglycane et apparaît violette après coloration de Gram ?',
    options: [
      {
        text: 'Une bactérie Gram +',
        correct: true,
        correction: 'Yes 🟣 Paroi épaisse en peptidoglycane = retient le cristal violet = couleur violette. Carte d\'identité du Gram +.'
      },
      {
        text: 'Une bactérie Gram -',
        correct: false,
        correction: 'Les Gram - finissent roses après la safranine, pas violettes 😭 Inversion piège archi classique.'
      },
      {
        text: 'Une bactérie sans paroi',
        correct: false,
        correction: 'Sans paroi, comment tu colores quoi que ce soit avec la technique de Gram franchement 🙃 Incohérent.'
      },
      {
        text: 'Une bactérie strictement intracellulaire',
        correct: false,
        correction: 'Rien à voir avec le fait d\'être intracellulaire ou pas, c\'est une histoire de paroi, pas de localisation.'
      },
      {
        text: 'Une bactérie uniquement sous forme sporulée',
        correct: false,
        correction: 'La forme sporulée, c\'est un tout autre délire (résistance), pas un critère de coloration de Gram.'
      }
    ],
    explanation: 'Gram + = paroi épaisse en peptidoglycane qui retient le cristal violet → couleur violette. À l\'inverse, les Gram - apparaissent roses.'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle structure caractéristique de la membrane externe des bactéries Gram - peut provoquer fièvre ou choc septique ?',
    options: [
      {
        text: 'L\'acide teichoïque',
        correct: false,
        correction: 'Acide teichoïque, c\'est plutôt le délire des Gram + 😭 Encore une confusion Gram+/Gram- classique.'
      },
      {
        text: 'Le lipopolysaccharide ou LPS',
        correct: true,
        correction: 'Bingo 🔥 Le LPS, planté dans la membrane externe des Gram-, est capable de foutre une belle fièvre voire un choc septique. Le VIP toxique du cours.'
      },
      {
        text: 'La glycogène synthase',
        correct: false,
        correction: 'La glycogène synthase, c\'est une enzyme du métabolisme, complètement hors sujet ici.'
      },
      {
        text: 'L\'adhésine terminale des pili',
        correct: false,
        correction: 'L\'adhésine, c\'est pour l\'attachement aux cellules via les pili, pas pour déclencher fièvre ou choc septique.'
      },
      {
        text: 'Le cristal violet',
        correct: false,
        correction: 'Le cristal violet, c\'est un colorant de labo, pas une molécule bactérienne toxique 💀'
      }
    ],
    explanation: 'Le LPS est présent sur la membrane externe des Gram- : c\'est une endotoxine capable de provoquer fièvre, inflammation, voire choc septique.'
  },
  {
    id: 10,
    type: 'QCM',
    question: 'Quelle partie du LPS est responsable de sa toxicité ?',
    options: [
      {
        text: 'Le lipide A',
        correct: true,
        correction: 'Le vrai coupable 🧠 Le lipide A du LPS est responsable de la toxicité. Retiens-le, il adore tomber en question piège.'
      },
      {
        text: 'L\'antigène O uniquement',
        correct: false,
        correction: 'L\'antigène O sert surtout pour la classification sérologique, pas comme principal responsable de la toxicité.'
      },
      {
        text: 'Le cristal violet',
        correct: false,
        correction: 'Toujours pas, le cristal violet reste un simple colorant de labo 😭'
      },
      {
        text: 'Le peptidoglycane épais',
        correct: false,
        correction: 'Peptidoglycane épais = Gram +, rien à voir avec la toxicité du LPS des Gram-.'
      },
      {
        text: 'La safranine',
        correct: false,
        correction: 'La safranine sert juste à contre-colorer en rose, elle ne rend rien toxique du tout.'
      }
    ],
    explanation: 'Dans le LPS, c\'est le lipide A qui porte la toxicité, alors que l\'antigène O sert surtout à la classification des souches.'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle structure facultative permet à certaines bactéries de résister à la phagocytose ?',
    options: [
      {
        text: 'La capsule',
        correct: true,
        correction: 'Exact 🛡️ La capsule, facultative, aide certaines bactéries à échapper à la phagocytose. Un vrai bouclier anti-immunité.'
      },
      {
        text: 'Le ribosome',
        correct: false,
        correction: 'Le ribosome sert à fabriquer les protéines, pas à échapper aux phagocytes.'
      },
      {
        text: 'Le cytoplasme',
        correct: false,
        correction: 'Le cytoplasme, c\'est le milieu intérieur de la bactérie, pas un bouclier contre le système immunitaire.'
      },
      {
        text: 'Le nucléoïde',
        correct: false,
        correction: 'Le nucléoïde stocke l\'ADN, rien à voir avec la résistance à la phagocytose.'
      },
      {
        text: 'La membrane cytoplasmique, obligatoire chez toutes',
        correct: false,
        correction: 'Certes la membrane cytoplasmique est obligatoire, mais son rôle n\'est pas spécifiquement d\'échapper à la phagocytose comme la capsule.'
      }
    ],
    explanation: 'La capsule est une structure facultative qui aide certaines bactéries à résister à la phagocytose, donc à mieux survivre face au système immunitaire.'
  },
  {
    id: 12,
    type: 'QCM',
    question: 'Quel est le rôle principal des flagelles bactériens ?',
    options: [
      {
        text: 'Permettre la mobilité',
        correct: true,
        correction: 'Simple et efficace 🏊 Le flagelle sert à la mobilité, il permet à la bactérie de se déplacer dans son environnement.'
      },
      {
        text: 'Fabriquer le peptidoglycane',
        correct: false,
        correction: 'Fabriquer le peptidoglycane, c\'est pas son taff, c\'est celui de la machinerie de la paroi.'
      },
      {
        text: 'Former le chromosome bactérien',
        correct: false,
        correction: 'Le chromosome bactérien n\'a rien à voir avec le flagelle, encore une confusion structure/génétique.'
      },
      {
        text: 'Empêcher toute coloration de Gram',
        correct: false,
        correction: 'Le flagelle n\'empêche rien niveau coloration de Gram, ça reste une histoire de paroi.'
      },
      {
        text: 'Constituer le LPS',
        correct: false,
        correction: 'Le LPS appartient à la membrane externe des Gram-, aucun rapport avec le flagelle.'
      }
    ],
    explanation: 'Le flagelle est une structure facultative dédiée à la mobilité bactérienne, ancrée dans la membrane.'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quel terme désigne une bactérie possédant un seul flagelle ?',
    options: [
      {
        text: 'Péritriche',
        correct: false,
        correction: 'Péritriche, c\'est plein de flagelles tout autour de la bactérie, pas un seul.'
      },
      {
        text: 'Lophotriche',
        correct: false,
        correction: 'Lophotriche, c\'est un paquet de flagelles groupés à un pôle, encore trop nombreux pour être \'un seul\'.'
      },
      {
        text: 'Monotriche',
        correct: true,
        correction: 'Mono = un seul 🧠 Monotriche = une bactérie avec un unique flagelle. Logique imparable.'
      },
      {
        text: 'Amphitriche',
        correct: false,
        correction: 'Amphitriche, c\'est un flagelle à CHAQUE extrémité, donc deux au total, pas un seul.'
      },
      {
        text: 'Céphalotriche',
        correct: false,
        correction: 'Sers-toi juste du préfixe mono pour éviter le piège, c\'est pas le bon terme ici.'
      }
    ],
    explanation: 'Monotriche = un seul flagelle. Amphitriche = un flagelle à chaque pôle. Péritriche/lophotriche = flagelles multiples. Bien retenir les préfixes.'
  },
  {
    id: 14,
    type: 'QCM',
    question: 'Comment les bactéries se multiplient-elles principalement ?',
    options: [
      {
        text: 'Par méiose',
        correct: false,
        correction: 'La méiose, c\'est un délire d\'eucaryotes avec recombinaison, pas le mode de multiplication bactérien standard.'
      },
      {
        text: 'Par division binaire non sexuelle',
        correct: true,
        correction: 'Exact 🧫 Division binaire : la bactérie duplique son chromosome puis se scinde en deux bactéries filles identiques. Simple, efficace, non sexuel.'
      },
      {
        text: 'Par bourgeonnement obligatoire',
        correct: false,
        correction: 'Le bourgeonnement n\'est pas le mode de multiplication classique décrit ici pour les bactéries.'
      },
      {
        text: 'Par fécondation entre deux bactéries',
        correct: false,
        correction: 'Pas de fécondation entre bactéries pour se multiplier, la division binaire suffit largement.'
      },
      {
        text: 'Par fusion de deux noyaux',
        correct: false,
        correction: 'Fusion de noyaux ? Les bactéries n\'ont même pas de noyau membrané, donc impossible 😭'
      }
    ],
    explanation: 'Les bactéries se multiplient par division binaire non sexuelle : duplication du chromosome puis séparation en deux cellules filles.'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quel est l\'ordre classique des phases de croissance bactérienne ?',
    options: [
      {
        text: 'Latence → croissance exponentielle → stationnaire → mortalité',
        correct: true,
        correction: 'L\'ordre canonique 📈 Latence, exponentielle, stationnaire, mortalité. À apprendre par cœur, ça tombe tout le temps.'
      },
      {
        text: 'Mortalité → latence → stationnaire → croissance exponentielle',
        correct: false,
        correction: 'Commencer par la mortalité 💀 avant même que la bactérie ait eu le temps de se multiplier, ça n\'a aucun sens chronologique.'
      },
      {
        text: 'Stationnaire → latence → mortalité → croissance exponentielle',
        correct: false,
        correction: 'La stationnaire avant la latence ? Nan, la bactérie doit d\'abord s\'installer avant de stagner.'
      },
      {
        text: 'Croissance exponentielle → latence → mortalité → stationnaire',
        correct: false,
        correction: 'Croissance exponentielle direct sans latence avant ? Il lui faut le temps de s\'adapter d\'abord, patience.'
      },
      {
        text: 'Latence → mortalité → croissance exponentielle → stationnaire',
        correct: false,
        correction: 'Mortalité juste après la latence, sans même passer par la croissance ? Ta bactérie meurt avant d\'avoir vécu 😭'
      }
    ],
    explanation: 'La courbe de croissance suit toujours l\'ordre : latence, croissance exponentielle, phase stationnaire, puis mortalité.'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Concernant les différences entre procaryotes et eucaryotes, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Les procaryotes n\'ont pas de noyau entouré d\'une membrane',
        correct: true,
        correction: 'Oui le frère 🧠 Pas de noyau membrané chez les procaryotes, c\'est même LA différence de base avec les eucaryotes.'
      },
      {
        text: 'Les bactéries possèdent généralement un seul chromosome',
        correct: true,
        correction: 'Exact aussi ✅ En général, un seul chromosome bactérien, souvent circulaire. Simple mais efficace.'
      },
      {
        text: 'Les eucaryotes ont toujours un seul chromosome',
        correct: false,
        correction: 'Nan, les eucaryotes ont souvent plusieurs chromosomes (l\'humain en a 46 par exemple), \'toujours un seul\' c\'est faux.'
      },
      {
        text: 'L\'ADN bactérien est exclusivement mitochondrial',
        correct: false,
        correction: 'Exclusivement mitochondrial ? Les bactéries n\'ont même pas de mitochondries 😭 L\'ADN est dans le cytoplasme/nucléoïde.'
      },
      {
        text: 'Les plasmides sont des organites membranaires',
        correct: false,
        correction: 'Un plasmide c\'est de l\'ADN nu, pas un organite avec une membrane autour, grosse confusion là.'
      }
    ],
    explanation: 'Les procaryotes n\'ont pas de noyau membrané et possèdent généralement un seul chromosome. Les plasmides sont de l\'ADN libre, pas des organites.'
  },
  {
    id: 17,
    type: 'QRM',
    question: 'Parmi ces structures, lesquelles sont classées comme obligatoires chez une bactérie dans le tableau du cours ?',
    options: [
      {
        text: 'Membrane cytoplasmique',
        correct: true,
        correction: 'Obligatoire direct 💪 Pas de bactérie sans membrane cytoplasmique, c\'est la base de la base.'
      },
      {
        text: 'Paroi',
        correct: true,
        correction: 'Pareil pour la paroi ✅ Elle est classée obligatoire dans le tableau du cours.'
      },
      {
        text: 'Capsule',
        correct: false,
        correction: 'La capsule c\'est du bonus, facultatif, toutes les bactéries n\'en ont pas.'
      },
      {
        text: 'Flagelle',
        correct: false,
        correction: 'Le flagelle aussi c\'est facultatif, sert juste à ceux qui veulent bouger.'
      },
      {
        text: 'Pili/fimbriae',
        correct: false,
        correction: 'Pili/fimbriae, encore une structure facultative, pas indispensable à la survie.'
      }
    ],
    explanation: 'Dans le tableau du cours, membrane cytoplasmique et paroi sont classées obligatoires. Capsule, flagelle et pili/fimbriae restent facultatifs.'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'À propos de la membrane cytoplasmique bactérienne, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Elle est située à l\'interface entre le cytoplasme et les structures externes',
        correct: true,
        correction: 'Oui chef 📍 Elle fait bien l\'interface entre l\'intérieur (cytoplasme) et tout ce qui est à l\'extérieur.'
      },
      {
        text: 'Elle contient des protéines de transport',
        correct: true,
        correction: 'Exact, plein de protéines de transport dedans pour faire entrer/sortir ce qu\'il faut.'
      },
      {
        text: 'Elle est composée d\'une double couche de phospholipides',
        correct: true,
        correction: 'Bien vu 🧠 Double couche de phospholipides, la structure membranaire classique.'
      },
      {
        text: 'Elle contient nécessairement du LPS chez toutes les bactéries',
        correct: false,
        correction: 'Le LPS c\'est réservé aux Gram- (membrane externe), pas un composant systématique de la membrane cytoplasmique de toutes les bactéries.'
      },
      {
        text: 'Elle est absente chez les bactéries Gram +',
        correct: false,
        correction: 'Absente chez les Gram+ ?? 😭 Bien au contraire, TOUTES les bactéries ont une membrane cytoplasmique, Gram+ comme Gram-.'
      }
    ],
    explanation: 'La membrane cytoplasmique est une double couche phospholipidique avec des protéines de transport, présente chez toutes les bactéries. Le LPS, lui, reste spécifique à la membrane externe des Gram-.'
  },
  {
    id: 19,
    type: 'QRM',
    question: 'Concernant la paroi des bactéries Gram +, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Le peptidoglycane est très épais',
        correct: true,
        correction: 'Oui le frère 🧱 Paroi épaisse en peptidoglycane, signature des Gram+.'
      },
      {
        text: 'Le peptidoglycane représente environ 50 à 90 % de la paroi',
        correct: true,
        correction: 'Exact, 50 à 90 % de la paroi, un chiffre à retenir pour les QCM chiants sur les pourcentages.'
      },
      {
        text: 'Les acides teichoïques sont immunogènes',
        correct: true,
        correction: 'Vrai aussi ✅ Les acides teichoïques peuvent être reconnus par le système immunitaire, donc immunogènes.'
      },
      {
        text: 'Les acides lipoteichoïques peuvent constituer un facteur de virulence',
        correct: true,
        correction: 'Confirmé, les acides lipoteichoïques peuvent jouer un rôle dans la virulence.'
      },
      {
        text: 'Le LPS est l\'élément central obligatoire de leur membrane externe',
        correct: false,
        correction: 'Aïe frérot, t\'as inversé 😭 Le LPS et la membrane externe, c\'est le monde des Gram-, pas des Gram+.'
      }
    ],
    explanation: 'Les Gram+ ont une paroi épaisse riche en peptidoglycane (50-90%), avec acides teichoïques et lipoteichoïques. Le LPS et la membrane externe restent l\'apanage des Gram-.'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Concernant la paroi des bactéries Gram -, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Le peptidoglycane est plus fin que chez les Gram +',
        correct: true,
        correction: 'Exact, fine couche de peptidoglycane chez les Gram-, à l\'inverse des Gram+.'
      },
      {
        text: 'Elles possèdent une membrane externe',
        correct: true,
        correction: 'Oui, la fameuse membrane externe en plus, spécifique aux Gram-.'
      },
      {
        text: 'Le LPS est présent sur la membrane externe',
        correct: true,
        correction: 'Confirmé, le LPS squatte cette membrane externe.'
      },
      {
        text: 'Le peptidoglycane représente environ 5 à 10 % de la paroi',
        correct: true,
        correction: 'Bon chiffre, 5 à 10 %, à l\'opposé des 50-90% des Gram+. Duo de chiffres à ne pas confondre.'
      },
      {
        text: 'Elles restent violettes après la décoloration à l\'alcool',
        correct: false,
        correction: 'Mais frr réveille-toi 😴 Les Gram- sont justement décolorées par l\'alcool/acétone, puis contre-colorées en rose par la safranine. Elles ne restent PAS violettes.'
      }
    ],
    explanation: 'Les Gram- ont une fine couche de peptidoglycane (5-10%), une membrane externe et du LPS. Décolorées à l\'alcool, elles finissent roses, pas violettes.'
  },
  {
    id: 21,
    type: 'QRM',
    question: 'À propos de la coloration de Gram, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Le cristal violet colore initialement les bactéries',
        correct: true,
        correction: 'Étape 1 validée 🎨 Cristal violet en premier, tout le monde se colore pareil au départ.'
      },
      {
        text: 'L\'iode permet de fixer le cristal violet',
        correct: true,
        correction: 'Étape 2, l\'iode vient fixer/complexer le cristal violet dans la paroi.'
      },
      {
        text: 'L\'alcool/acétone décolore les bactéries pauvres en peptidoglycane',
        correct: true,
        correction: 'Étape 3 exacte, l\'alcool/acétone décolore surtout ceux qui ont peu de peptidoglycane (les Gram-).'
      },
      {
        text: 'La safranine contre-colore en rose les bactéries décolorées',
        correct: true,
        correction: 'Étape 4, la safranine contre-colore en rose ce qui a été décoloré. Nickel.'
      },
      {
        text: 'Les Gram - restent toujours violettes car leur paroi est plus épaisse',
        correct: false,
        correction: 'Ha ouai t\'es sûr de toi 😏 C\'est tout l\'inverse : paroi Gram- plus FINE (pas plus épaisse), donc décolorée puis rose, pas violette.'
      }
    ],
    explanation: 'Cristal violet → iode → alcool/acétone → safranine. Les Gram-, à paroi fine, sont décolorées puis apparaissent roses ; les Gram+ restent violettes.'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quels rôles de la paroi bactérienne sont cités dans le cours ?',
    options: [
      {
        text: 'Elle détermine la forme de la bactérie',
        correct: true,
        correction: 'Oui, la paroi joue un vrai rôle de squelette qui donne sa forme à la bactérie.'
      },
      {
        text: 'Elle permet de résister à la pression osmotique',
        correct: true,
        correction: 'Exact, elle protège aussi contre la pression osmotique, sinon la bactérie exploserait presque.'
      },
      {
        text: 'Elle porte des molécules reconnues par le système immunitaire',
        correct: true,
        correction: 'Vrai, elle porte des antigènes reconnus par le système immunitaire, important en immuno.'
      },
      {
        text: 'Elle remplace le chromosome bactérien',
        correct: false,
        correction: 'Remplacer le chromosome ? Non, la paroi c\'est une structure externe, rien à voir avec le stockage de l\'ADN.'
      },
      {
        text: 'Elle constitue à elle seule une méthode universelle de diagnostic',
        correct: false,
        correction: 'Ça c\'est too much 😭 La paroi aide au diagnostic (via Gram notamment) mais n\'est pas \'la\' méthode universelle à elle seule.'
      }
    ],
    explanation: 'La paroi donne sa forme à la bactérie, résiste à la pression osmotique et porte des antigènes reconnus par le système immunitaire.'
  },
  {
    id: 23,
    type: 'QRM',
    question: 'Concernant la capsule bactérienne, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Elle est facultative',
        correct: true,
        correction: 'Oui, facultative, toutes les bactéries n\'en ont pas besoin pour survivre.'
      },
      {
        text: 'Elle est souvent constituée de chaînes de sucres',
        correct: true,
        correction: 'Exact, souvent polysaccharidique, un vrai manteau de sucre.'
      },
      {
        text: 'Elle aide certaines bactéries à résister à la phagocytose',
        correct: true,
        correction: 'Confirmé, elle peut aider à échapper à la phagocytose, donc facteur de virulence potentiel.'
      },
      {
        text: 'Elle est obligatoire chez toutes les bactéries',
        correct: false,
        correction: 'Obligatoire chez toutes ?? 😭 Non, c\'est tout l\'inverse, c\'est facultatif.'
      },
      {
        text: 'Elle remplace la membrane cytoplasmique',
        correct: false,
        correction: 'Remplacer la membrane cytoplasmique, qui elle est obligatoire ? Grosse confusion entre deux structures différentes.'
      }
    ],
    explanation: 'La capsule est une structure facultative, souvent polysaccharidique, pouvant aider à résister à la phagocytose et donc contribuer à la virulence.'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Parmi les bactéries suivantes, lesquelles sont citées dans le passage sur les capsules ?',
    options: [
      {
        text: 'Haemophilus influenzae',
        correct: true,
        correction: 'Oui, Haemophilus influenzae fait partie des bactéries capsulées classiques citées.'
      },
      {
        text: 'Streptococcus pneumoniae',
        correct: true,
        correction: 'Exact aussi, Streptococcus pneumoniae, le fameux pneumocoque capsulé.'
      },
      {
        text: 'Pseudomonas aeruginosa',
        correct: false,
        correction: 'Pseudomonas aeruginosa est plutôt cité côté flagelles/mobilité dans le cours, pas capsule.'
      },
      {
        text: 'Legionella pneumophila',
        correct: false,
        correction: 'Legionella pneumophila, encore un exemple côté flagelles, pas capsule ici.'
      },
      {
        text: 'Vibrio cholerae',
        correct: false,
        correction: 'Vibrio cholerae aussi rangé du côté flagelles/mobilité, pas dans la liste des capsulées du cours.'
      }
    ],
    explanation: 'Le cours cite notamment Haemophilus influenzae et Streptococcus pneumoniae parmi les bactéries capsulées. Pseudomonas, Legionella et Vibrio cholerae sont plutôt évoqués à propos des flagelles.'
  },
  {
    id: 25,
    type: 'QRM',
    question: 'Concernant les flagelles et les pili, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Les flagelles servent à la mobilité',
        correct: true,
        correction: 'Oui, mobilité, c\'est le job numéro 1 du flagelle.'
      },
      {
        text: 'Les pili/fimbriae sont plus petits et plus nombreux que les flagelles',
        correct: true,
        correction: 'Exact, les pili/fimbriae sont plus petits et beaucoup plus nombreux que les flagelles.'
      },
      {
        text: 'Les pili participent à l\'adhérence aux cellules',
        correct: true,
        correction: 'Confirmé, ils participent notamment à l\'adhérence aux cellules, première étape avant d\'infecter.'
      },
      {
        text: 'Les flagelles sont obligatoires chez toutes les bactéries',
        correct: false,
        correction: 'Obligatoires chez toutes les bactéries ? Non, ils sont facultatifs, seulement chez celles qui bougent.'
      },
      {
        text: 'Les pili sont constitués uniquement de sucres capsulaires',
        correct: false,
        correction: 'Uniquement des sucres capsulaires dans les pili ? Non, ce sont des structures protéiques, pas de la capsule.'
      }
    ],
    explanation: 'Les flagelles assurent la mobilité, tandis que les pili/fimbriae, plus petits et nombreux, participent notamment à l\'adhérence aux cellules.'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'À propos des formes végétative et sporulée, quelles propositions sont exactes ?',
    options: [
      {
        text: 'La forme végétative est la forme de multiplication',
        correct: true,
        correction: 'Oui, la forme végétative c\'est la forme active qui se multiplie.'
      },
      {
        text: 'La forme sporulée est une forme de résistance',
        correct: true,
        correction: 'Exact, la forme sporulée sert à résister (chaleur, dessiccation etc.), pas à se reproduire.'
      },
      {
        text: 'La forme sporulée se multiplie activement',
        correct: false,
        correction: 'Mais frr réveille-toi 😴😴😴😴😴 La forme sporulée résiste, mais elle ne se multiplie pas activement.'
      },
      {
        text: 'La forme sporulée synthétise les toxines pendant l\'infection',
        correct: false,
        correction: 'Les toxines c\'est plutôt le taff de la forme végétative active, pas de la forme sporulée en dormance.'
      },
      {
        text: 'La forme végétative est incapable de produire des toxines',
        correct: false,
        correction: 'Incapable de produire des toxines ? Faux, c\'est justement la forme végétative qui peut en synthétiser.'
      }
    ],
    explanation: 'La forme végétative est active, se multiplie et peut produire des toxines. La forme sporulée est une forme de résistance, sans multiplication ni production de toxines.'
  },
  {
    id: 27,
    type: 'QRM',
    question: 'Concernant l\'observation de la croissance bactérienne au laboratoire, quelles propositions sont exactes ?',
    options: [
      {
        text: 'En milieu liquide, on peut observer un trouble',
        correct: true,
        correction: 'Oui, un milieu liquide qui devient trouble, signe classique de croissance bactérienne.'
      },
      {
        text: 'En milieu solide, on peut observer des colonies',
        correct: true,
        correction: 'Exact, en milieu solide, chaque bactérie donne naissance à une colonie visible.'
      },
      {
        text: 'Un milieu solide donne toujours un trouble homogène sans colonie',
        correct: false,
        correction: 'Un milieu solide \'toujours trouble homogène sans colonie\' 😭 Non, c\'est justement là qu\'on voit des colonies bien distinctes.'
      },
      {
        text: 'La croissance bactérienne ne peut jamais être observée en laboratoire',
        correct: false,
        correction: 'Jamais observable en labo ? Ben si, c\'est carrément la base de la bactériologie clinique.'
      },
      {
        text: 'Les hémocultures sont citées comme exemple de milieu solide',
        correct: false,
        correction: 'Les hémocultures c\'est du milieu LIQUIDE, pas solide, encore une confusion classique.'
      }
    ],
    explanation: 'En milieu liquide, la croissance se voit via un trouble (ex : hémocultures). En milieu solide, elle se voit via des colonies bien individualisées.'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Concernant les besoins nutritifs des bactéries d\'intérêt médical, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Les bactéries prototrophes ont des besoins simples présents dans les tissus humains et liquides biologiques',
        correct: true,
        correction: 'Oui, les prototrophes se contentent de besoins simples, déjà présents dans nos tissus et liquides biologiques.'
      },
      {
        text: 'Elles peuvent nécessiter de l\'eau',
        correct: true,
        correction: 'Exact, l\'eau libre fait partie des besoins nutritifs cités.'
      },
      {
        text: 'Elles utilisent notamment le glucose comme source d\'énergie',
        correct: true,
        correction: 'Confirmé, le glucose est notamment cité comme source d\'énergie utilisée.'
      },
      {
        text: 'Certaines bactéries auxotrophes exigent des facteurs supplémentaires',
        correct: true,
        correction: 'Vrai aussi, les auxotrophes ont besoin en plus de facteurs de croissance spécifiques.'
      },
      {
        text: 'Toutes les bactéries poussent sur exactement le même milieu, quelle que soit la clinique',
        correct: false,
        correction: 'Ha ouai t\'es quelqu\'un 😏 Ça c\'est complètement faux : le choix du milieu dépend justement des besoins de chaque bactérie, d\'où son importance en clinique.'
      }
    ],
    explanation: 'Les prototrophes ont des besoins simples (eau, glucose...), tandis que les auxotrophes nécessitent en plus des facteurs de croissance spécifiques, d\'où l\'intérêt de bien choisir le milieu de culture.'
  },
  {
    id: 29,
    type: 'QRM',
    question: 'Concernant les types respiratoires bactériens, quelles propositions sont exactes ?',
    options: [
      {
        text: 'Pseudomonas est cité comme bactérie aérobie stricte',
        correct: true,
        correction: 'Exact, Pseudomonas est cité comme exemple d\'aérobie stricte, elle kiffe l\'oxygène à fond.'
      },
      {
        text: 'Campylobacter est cité comme bactérie microaérophile',
        correct: true,
        correction: 'Vrai aussi, Campylobacter est le bon exemple de microaérophile, un peu d\'oxygène mais pas trop.'
      },
      {
        text: 'Les entérobactéries sont citées comme aéro-anaérobies facultatives',
        correct: true,
        correction: 'Confirmé, les entérobactéries s\'adaptent aux deux, aéro-anaérobies facultatives.'
      },
      {
        text: 'Les bactéries anaérobies strictes ont besoin d\'une grande quantité d\'oxygène',
        correct: false,
        correction: 'C chaud frérot 😭 Les anaérobies strictes ne SUPPORTENT PAS l\'oxygène, c\'est même l\'inverse d\'un besoin d\'oxygène.'
      },
      {
        text: 'Bacteroides et Clostridium sont cités comme microaérophiles',
        correct: false,
        correction: 'Bacteroides et Clostridium, c\'est plutôt le camp des anaérobies strictes, pas microaérophiles.'
      }
    ],
    explanation: 'Le cours distingue aérobies strictes (Pseudomonas), microaérophiles (Campylobacter), aéro-anaérobies facultatives (entérobactéries) et anaérobies strictes (Bacteroides, Clostridium), qui ne supportent pas l\'oxygène.'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quels facteurs physico-chimiques influencent la croissance bactérienne selon le cours ?',
    options: [
      {
        text: 'L\'oxygène',
        correct: true,
        correction: 'Oui, l\'oxygène influence énormément la croissance selon le type respiratoire de la bactérie.'
      },
      {
        text: 'La température',
        correct: true,
        correction: 'Exact, la température est un facteur clé, chaque bactérie a sa zone de confort thermique.'
      },
      {
        text: 'Le pH',
        correct: true,
        correction: 'Confirmé, le pH influence aussi la croissance bactérienne.'
      },
      {
        text: 'La pression osmotique',
        correct: true,
        correction: 'Vrai, la pression osmotique fait partie des facteurs physico-chimiques cités.'
      },
      {
        text: 'La couleur du tube de prélèvement comme seul facteur déterminant',
        correct: false,
        correction: 'La couleur du tube 💀 Sérieux ? Ça n\'a scientifiquement aucun impact sur la croissance bactérienne, gros piège absurde repéré.'
      }
    ],
    explanation: 'Oxygène, température, pH, pression osmotique et eau libre sont les grands facteurs physico-chimiques qui orientent la croissance bactérienne et donc le choix du milieu de culture.'
  }
];