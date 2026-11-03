
export const meta = {
  title: 'UE4 — De l’agent infectieux à l’hôte — Annales 2024 — Session 1',
};

// Réponses STRICTEMENT conformes à la grille officielle.
// 73 questions, aucune annulation.
// Les contextes cliniques sont conservés pour permettre
// un tirage aléatoire de questions indépendantes.

const contextes = [
  {
    debut: 1, fin: 4,
    texte: `Cas clinique N°1
Vous recevez dans votre cabinet de gynécologie médicale, une jeune femme de 32 ans, primigeste et sans antécédent particulier. Lors du bilan initial de grossesse au premier trimestre, une sérologie pour la toxoplasmose lui est prescrite. Le biologiste médical vous rend un résultat en faveur d'une séronégativité.`
  },
  {
    debut: 5, fin: 8,
    texte: `Cas clinique N°2
Plusieurs enfants d'une même crèche sont victimes de diarrhées qui durent maintenant depuis presque dix jours. Vous apprenez que deux d'entre eux ont visité de la famille à l'étranger, pendant les vacances scolaires précédentes. Les investigations bactériologiques et virologiques se révèlent être non contributives.`
  },
  {
    debut: 9, fin: 12,
    texte: `Cas clinique N°3
Une patiente de 23 ans consulte pour des démangeaisons sévères et des atteintes cutanées, principalement localisées sur les poignets et les bras. Elle ne présente pas d'autres symptômes.`
  },
  {
    debut: 13, fin: 16,
    texte: `Cas clinique N°4
Un patient de 35 ans séropositif pour le VIH, avec un taux ce lymphocytes T CD4+ inférieur à 53/mm³, se présente à SOS médecins avec une toux persistante et de la fièvre. A l'examen, vous notez des crépitements à la base des poumons.`
  },
  {
    debut: 17, fin: 22,
    texte: `Cas clinique N°5
Madame X, âgée de 70 ans, se présente au cabinet médical pour une éruption cutanée apparue la veille au niveau du dos. Elle rapporte une douleur insomniante à type de constriction, de sensation de brûlure et parfois une hyperesthésie importante rendant les activités quotidiennes difficiles. L'examen clinique retrouve une éruption sur un fond érythémateux, surmonté de vésicules enchâssées sous la peau et groupées en bouquets par endroit, suivant un trajet métamérique. Dans ses antécédents, on note une greffe rénale il y a 10 ans, et un lymphome en cours de chimiothérapie.`
  },
  {
    debut: 23, fin: 28,
    texte: `Cas clinique N°6
Clémence F., jeune femme d'une trentaine d'années, souffre d'une maladie inflammatoire chronique qui l'oblige à un traitement par corticoïdes en continu, avec des périodes au cours desquelles elle double la posologie. Depuis trois jours, elle ressent de la fièvre (objectivée à 39°C en rectal), frissonne, tousse beaucoup et se plaint de douleurs diffuses sur le corps. Elle se présente au service d'accueil des urgences. Vous suspectez une infection respiratoire bactérienne.`
  },
  {
    debut: 29, fin: 33,
    texte: `Cas clinique N°7
Flore P., jeune femme de 25 ans très active sexuellement avec plusieurs partenaires mais des rapports pas toujours protégés, vient consulter pour des leucorrhées abondantes, survenues depuis une semaine. Votre première hypothèse est celle de vaginose bactérienne.`
  },
  {
    debut: 34, fin: 35,
    texte: `Cas clinique N°8
Trente enfants ont déjeuné ensemble vendredi midi. Le samedi soir, 16 d'entre eux présentent un tableau clinique similaire associant douleurs abdominales, fièvre à 39-40°C, diarrhée glairo-sanglante. Vous suspectez une toxi-infection alimentaire collective (TIAC). L'enquête révèle que 15 enfants ont mangé leur entrée (oeufs avec mayonnaise) dont 14 sont malades, 24 ont mangé leur plat (poulet-haricots verts) dont 11 sont malades ; tous les enfants ont mangé leur dessert (mousse au chocolat).`
  },
  {
    debut: 36, fin: 37,
    texte: `Cas clinique N°9
Une femme de 70 ans est adressée aux urgences pour une dyspnée évoluant depuis quatre semaines. Ses principaux antécédents sont une hypertension artérielle (HTA) et un diabète de type 2. L'examen clinique initial montre une pression artérielle à 120/75 mmHg, une température à 38,1°C, un souffle systolique maximal au quatrième espace intercostal gauche irradiant dans l'aisselle, une pâleur cutanéo-muqueuse. Les principales anomalies biologiques retrouvées sont : hémoglobine à 6 g/dL, volume globulaire moyen à 67 fL, protéine C-réactive (CRP) à 50 mg/L.
Deux hémocultures prélevées aux urgences montrent des cocci à Gram positif en chaînettes.`
  }
];

const Q = (id, question, propositions, reponses, corrections) => {
  const contexte = contextes.find(
    c => id >= c.debut && id <= c.fin
  );

  return {
    id,
    type: reponses.length === 1 ? 'QCM' : 'QRM',
    question: contexte
      ? `${contexte.texte}\n\n${question}`
      : question,
    options: propositions.map((text, i) => ({
      text,
      correct: reponses.includes('ABCDE'[i]),
      correction: corrections[i]
    })),
    explanation: `Réponse${reponses.length > 1 ? 's' : ''} officielle${reponses.length > 1 ? 's' : ''} : ${reponses.split('').join(', ')}.`
  };
};

export default [
  Q(1,
    `Dans votre conduite pratique, qu'implique ce résultat initial ?`,
    [
      `Effectuer des bilans sérologiques mensuels vis-à-vis de la toxoplasmose`,
      `Proposer une interruption médicale de grossesse (IMG)`,
      `Pratiquer de façon systématique une ponction de liquide amniotique`,
      `Initier d'emblée un traitement antiparasitaire spécifique`,
      `Considérer la patiente comme prémunie vis à vis de la toxoplasmose`
    ],
    'A',
    [
      `Vrai. Une femme enceinte séronégative n'est pas immunisée. Elle doit bénéficier d'une surveillance sérologique mensuelle pour dépister une éventuelle séroconversion.`,
      `Faux. Une séronégativité ne constitue pas une indication d'interruption médicale de grossesse.`,
      `Faux. L'amniocentèse est envisagée dans le cadre de l'exploration d'une infection maternelle documentée, pas devant une simple séronégativité.`,
      `Faux. Aucun traitement antiparasitaire n'est indiqué en l'absence d'infection.`,
      `Faux. Une sérologie négative signifie au contraire que la patiente n'est pas immunisée.`
    ]
  ),

  Q(2,
    `Quelle(s) mesure(s) prophylactique(s) vis-à-vis de la toxoplasmose pouvez-vous spécifiquement proposer à votre patiente ?`,
    [
      `Consommer de la viande bien cuite`,
      `Ne pas manger de cresson sauvage`,
      `Eviter les voyages en zones intertropicales`,
      `Se protéger des piqûres de moustiques`,
      `Faire nettoyer la litière du chat par un tiers`
    ],
    'AE',
    [
      `Vrai. La cuisson suffisante de la viande détruit les kystes tissulaires de Toxoplasma gondii.`,
      `Faux selon la grille. Le cresson sauvage est notamment associé au risque de fasciolose. Les végétaux doivent néanmoins être soigneusement lavés pour prévenir la toxoplasmose.`,
      `Faux. La toxoplasmose n'est pas limitée aux régions intertropicales.`,
      `Faux. Toxoplasma gondii n'est pas transmis par les moustiques.`,
      `Vrai. Le chat peut éliminer des oocystes dans ses selles. Faire nettoyer la litière par un tiers limite l'exposition de la femme enceinte.`
    ]
  ),

  Q(3,
    `Lors d'un bilan sanguin ultérieur, le biologiste médical vous annonce l'apparition d'anticorps anti-toxoplasmiques spécifiques chez cette même patiente ; les isotypes IgM puis IgG sont détectés.

Quelle est vote attitude par rapport à ce dernier résultat d'analyse biomédicale ?`,
    [
      `Vous faites rechercher le parasite directement dans les selles de la patiente`,
      `Vous proposer une interruption médicale de grossesse (IMG)`,
      `Vous lui expliquez que l'enfant à naître est forcément contaminé`,
      `Vous instaurez un traitement antiparasitaire qui vise à freiner le passage fœto-placentaire du parasite`,
      `Vous lui signifiez alors de renforcer les mesures préventives`
    ],
    'D',
    [
      `Faux. La recherche de Toxoplasma gondii dans les selles humaines n'est pas adaptée au diagnostic de toxoplasmose maternelle.`,
      `Faux. Une séroconversion maternelle n'impose pas systématiquement une IMG.`,
      `Faux. La transmission materno-fœtale n'est pas systématique après une primo-infection maternelle.`,
      `Vrai. Un traitement antiparasitaire, notamment par spiramycine selon le contexte, vise à limiter la transmission materno-fœtale.`,
      `Faux selon la grille. Les mesures préventives restent importantes, mais la conduite thérapeutique constitue la réponse attendue après confirmation d'une séroconversion.`
    ]
  ),

  Q(4,
    `Si la séroconversion de la mère est belle et bien confirmée, quelle(s) est (sont) le(s) conséquence(s) pour l'enfant à naître ?`,
    [
      `L'enfant contaminé in utero pourra transmettre le parasite à sa propre descendance`,
      `Les formes congénitales sont d'autant plus graves que la transmission materno-fœtale a lieu en fin de grossesse`,
      `La transmission congénitale doit être recherchée par l'investigation du liquide amniotique`,
      `Un bilan sérologique complet devra être réalisé chez le nouveau-né juste après sa naissance`,
      `Des lésions oculaires de toxoplasmose congénitale doivent être recherchées à la naissance`
    ],
    'CDE',
    [
      `Faux. La transmission congénitale de la toxoplasmose ne correspond pas à une transmission héréditaire automatique aux générations suivantes.`,
      `Faux. Les formes congénitales sont généralement d'autant plus sévères que la contamination survient précocement pendant la grossesse.`,
      `Vrai. Une PCR sur liquide amniotique peut permettre de rechercher une infection fœtale, sous réserve du délai approprié après la séroconversion.`,
      `Vrai. Un bilan sérologique néonatal est nécessaire pour rechercher une toxoplasmose congénitale.`,
      `Vrai. La toxoplasmose congénitale peut provoquer une choriorétinite, justifiant une exploration ophtalmologique.`
    ]
  ),

  Q(5,
    `A ce stage des investigations, quel(s) microorganisme(s) pourrait(-aient) être théoriquement impliqué(s) dans les troubles digestifs ?`,
    [
      `L'ascaris (Ascaris lumbricoides)`,
      `Le pou (Pediculus humanus)`,
      `Le sarcopte de la gale (Sarcoptes scabiei)`,
      `Le trypanosome africain (Trypanosoma brucei gambiense)`,
      `Les amibes entéro-pathogènes (Entamoeba sp.)`
    ],
    'AE',
    [
      `Vrai. Ascaris lumbricoides est un helminthe intestinal pouvant provoquer des troubles digestifs.`,
      `Faux. Les poux sont des ectoparasites responsables de pédiculoses.`,
      `Faux. Le sarcopte provoque la gale, une parasitose cutanée.`,
      `Faux. Trypanosoma brucei gambiense est responsable de la trypanosomose africaine et non d'une parasitose intestinale habituelle.`,
      `Vrai. Certaines espèces d'Entamoeba peuvent provoquer des troubles digestifs, notamment des diarrhées.`
    ]
  ),

  Q(6,
    `Quel examen prescrivez-vous en première intention chez chacun des enfants malades afin de confirmer l'étiologie parasitaire ?`,
    [
      `La ponction biopsie hépatique`,
      `La goutte épaisse rapide`,
      `La coloscopie`,
      `L'examen parasitologique des selles standard`,
      `Le frottis sanguin mince`
    ],
    'D',
    [
      `Faux. Une biopsie hépatique n'est pas indiquée devant ce tableau de diarrhée.`,
      `Faux. La goutte épaisse permet notamment la recherche de parasites sanguins comme Plasmodium.`,
      `Faux. La coloscopie est un examen invasif non indiqué en première intention pour ce diagnostic parasitologique.`,
      `Vrai. L'examen parasitologique des selles permet de rechercher les kystes, œufs ou formes végétatives de parasites intestinaux.`,
      `Faux. Le frottis sanguin mince permet de rechercher certains hémoparasites et non les parasites intestinaux dans cette situation.`
    ]
  ),

  Q(7,
    `Chez trois des quatre enfants, vous retrouvez de nombreux kystes de Giardia duodenalis.

Par quel(s) moyen(s) s'opère la transmission des kystes de Giardia duodenalis ?`,
    [
      `La piqûre de moustique`,
      `La consommation de viande de bœuf mal cuite`,
      `Le partage de bonnets et casquettes`,
      `La consommation de crudités mal lavées`,
      `Le portage à la bouche de mains sales`
    ],
    'DE',
    [
      `Faux. Giardia duodenalis n'est pas transmis par un vecteur hématophage.`,
      `Faux. La consommation de viande bovine insuffisamment cuite n'est pas le mode de contamination habituel.`,
      `Faux. Le partage de bonnets favorise notamment certaines ectoparasitoses, pas la giardiose.`,
      `Vrai. Les crudités contaminées peuvent transmettre des kystes par voie féco-orale.`,
      `Vrai. Le manuportage de kystes constitue un mode important de transmission, notamment en collectivité.`
    ]
  ),

  Q(8,
    `A terme, quelle complication chronique pouvez-vous redouter lors d'une infection massive à Giardia duodenalis survenant chez les enfants ?`,
    [
      `L'insuffisance cardiaque`,
      `La pneumonie interstitielle diffuse`,
      `Le retard staturo-pondéral`,
      `Le dérèglement du rythme nycthéméral`,
      `La méningo-encéphalite`
    ],
    'C',
    [
      `Faux. La giardiose n'entraîne pas habituellement d'insuffisance cardiaque.`,
      `Faux. Giardia duodenalis est un parasite intestinal et ne provoque pas de pneumonie interstitielle diffuse.`,
      `Vrai. Une giardiose chronique peut provoquer une malabsorption et une dénutrition responsables d'un retard staturo-pondéral.`,
      `Faux. Ce n'est pas une complication caractéristique de la giardiose.`,
      `Faux. Giardia duodenalis ne provoque pas habituellement de méningo-encéphalite.`
    ]
  ),

  Q(9,
    `A ce stage des investigations, quel(s) microorganisme(s) pourrait(-aient) être responsable(s) de la symptomatologie observée ?`,
    [
      `Un champignon dermatophyte (Trichophyton rubrum)`,
      `La moisissure aspergillaire (Aspergillus fumigatus)`,
      `Le sarcopte de la gale (Sarcoptes scabiei)`,
      `La punaise de lit (Cimex lectularius)`,
      `Le morpion (Phtirius pubis)`
    ],
    'CD',
    [
      `Faux selon la grille. Un dermatophyte peut provoquer des lésions cutanées prurigineuses, mais le tableau décrit oriente surtout vers une ectoparasitose.`,
      `Faux. Aspergillus fumigatus est surtout responsable d'atteintes respiratoires ou invasives chez les patients à risque.`,
      `Vrai. La gale provoque un prurit souvent intense avec des lésions cutanées, notamment aux poignets.`,
      `Vrai. Les piqûres de punaises de lit provoquent des lésions cutanées prurigineuses sur les zones exposées.`,
      `Faux. Le morpion touche principalement les régions pileuses génitales.`
    ]
  ),

  Q(10,
    `La patiente a récemment emménagé dans un nouvel appartement meublé. Elle a d'ailleurs noté la présence de petites taches noires (de 1 mm de diamètre ou moins) et d'insectes vivants sur son matelas.

Afin de confirmer votre hypothèse d'infestation face à ces derniers éléments, quel examen prescrivez vous ?`,
    [
      `Une biopsie cutanée`,
      `Une identification parasitologique des insectes observés sur le matelas`,
      `Un test à la cellophane adhésive (ou Scotch® test)`,
      `Un grattage cutané`,
      `Un examen parasitologique des urines`
    ],
    'B',
    [
      `Faux. Une biopsie cutanée n'est pas nécessaire pour identifier des punaises de lit.`,
      `Vrai. L'identification entomologique des insectes retrouvés dans la literie confirme l'infestation par Cimex lectularius.`,
      `Faux. Le Scotch test est notamment utilisé pour rechercher les œufs d'Enterobius vermicularis.`,
      `Faux. Un grattage cutané est notamment utilisé dans l'exploration de la gale, pas pour identifier des punaises présentes dans l'environnement.`,
      `Faux. Les punaises de lit ne sont pas recherchées dans les urines.`
    ]
  ),

  Q(11,
    `Vous avez confirmé la présence de punaise de lit (Cimex lectularius) sur le matelas de votre patiente. A quel(s) autre(s) endroit(s) de l'appartement pouvez-vous en retrouver ?`,
    [
      `Dans la douche`,
      `Dans l'armoire`,
      `Dans les fissures du parquet`,
      `Dans le réfrigérateur`,
      `Dans le canapé en tissu`
    ],
    'BCE',
    [
      `Faux selon la grille. La douche n'est pas un lieu habituel de refuge des punaises de lit.`,
      `Vrai. Les punaises peuvent se cacher dans les meubles, notamment les armoires.`,
      `Vrai. Les fissures du parquet constituent des refuges possibles.`,
      `Faux. Le réfrigérateur n'est pas un habitat habituel des punaises de lit.`,
      `Vrai. Les coutures et interstices des canapés en tissu peuvent abriter des punaises.`
    ]
  ),

  Q(12,
    `Quelle(s) est(sont) la(les) principale(s) mesure(s) pour éliminer les punaises de lit (Cimex lectularius) dans l'environnement du patient ?`,
    [
      `Une prise en charge environnementale par un professionnel de la lutte antiparasitaire`,
      `Un lavage des draps et de la literie à l'eau chaude`,
      `Un traitement oral par ivermectine de la patiente`,
      `Un traitement de l'air par un climatiseur`,
      `Un changement d'alimentation`
    ],
    'A',
    [
      `Vrai. La lutte contre les punaises nécessite une prise en charge environnementale adaptée, pouvant faire intervenir un professionnel.`,
      `Faux selon la grille. Le lavage à haute température est une mesure utile, mais il est insuffisant à lui seul pour éliminer une infestation de l'ensemble du logement.`,
      `Faux. L'ivermectine n'est pas le traitement de référence des infestations par punaises de lit.`,
      `Faux. Un climatiseur n'élimine pas les punaises de lit.`,
      `Faux. L'alimentation du patient n'influence pas l'élimination de ces ectoparasites.`
    ]
  ),

  Q(13,
    `A ce stade des investigations et devant la présentation clinique, quel(s) microorganisme(s) pourrait(-aient) être impliqué(s) ?`,
    [
      `La bacille de Koch (Mycobacterium tuberculosis)`,
      `Le pneumocoque (Streptococcus pneumoniae)`,
      `Le pneumocyste (Pneumocystis jirovecii)`,
      `L'ankylostome (Ancylostoma duodenale)`,
      `Le cryptocoque (Cryptococcus neoformans)`
    ],
    'ABCE',
    [
      `Vrai. Mycobacterium tuberculosis peut provoquer une infection pulmonaire chez les patients vivant avec le VIH.`,
      `Vrai. Streptococcus pneumoniae est une cause importante de pneumonie bactérienne.`,
      `Vrai. Pneumocystis jirovecii est responsable de pneumonies opportunistes, notamment lors d'une immunodépression cellulaire sévère.`,
      `Faux. Ancylostoma duodenale est un helminthe intestinal responsable notamment de pertes sanguines digestives.`,
      `Vrai. Cryptococcus neoformans peut provoquer une atteinte pulmonaire chez un patient immunodéprimé.`
    ]
  ),

  Q(14,
    `Une imagerie thoracique révèle une pneumonie interstitielle diffuse bilatérale. Vous suspectez une pneumocystose.

Dans la mesure du possible, quel prélèvement prescrivez-vous en première intention afin de pouvoir confirmer l'étiologie fongique suspectée ?`,
    [
      `Une expectoration induite`,
      `Une hémoculture fongique`,
      `Une ponction de liquide cérébrospinal (LCS)`,
      `Un lavage broncho-alvéolaire (LBA)`,
      `Un recueil urinaire`
    ],
    'D',
    [
      `Faux selon la grille. L'expectoration induite peut être contributive, mais le LBA est le prélèvement privilégié dans le cadre de cette question.`,
      `Faux. Une hémoculture fongique n'est pas l'examen de référence pour diagnostiquer une pneumocystose pulmonaire.`,
      `Faux. Une ponction lombaire n'est pas indiquée pour confirmer une pneumocystose pulmonaire isolée.`,
      `Vrai. Le lavage broncho-alvéolaire permet de rechercher directement Pneumocystis jirovecii dans les voies respiratoires profondes.`,
      `Faux. Les urines ne constituent pas un prélèvement approprié pour ce diagnostic.`
    ]
  ),

  Q(15,
    `A partir du prélèvement effectué, comment mettez-vous en évidence la présence du pneumocyste (Pneumocystis jirovecii) ?`,
    [
      `Par détection de l'ADN`,
      `Par détection d'anticorps`,
      `Par détection microscopique`,
      `Par détection d'antigène`,
      `Par culture fongique`
    ],
    'AC',
    [
      `Vrai. La PCR permet de détecter l'ADN de Pneumocystis jirovecii dans les prélèvements respiratoires.`,
      `Faux. La sérologie n'est pas l'outil de référence pour confirmer une pneumocystose active.`,
      `Vrai. La microscopie après coloration spécifique ou immunofluorescence permet de visualiser le microorganisme.`,
      `Faux selon la grille. La détection d'antigènes n'est pas la méthode diagnostique retenue ici.`,
      `Faux. Pneumocystis jirovecii ne se cultive pas en routine sur les milieux fongiques habituels.`
    ]
  ),

  Q(16,
    `Par quel(s) moyen(s) s'opère la transmission humaine du pneumocyste (Pneumocystis jirovecii) ?`,
    [
      `Par voie sanguine`,
      `Par consommation de pissenlit sauvage`,
      `Par contact prolongé peau à peau`,
      `Par consommation de viande de poulet`,
      `Par inhalation`
    ],
    'E',
    [
      `Faux. La transmission sanguine n'est pas la voie habituelle de contamination.`,
      `Faux. Le pneumocyste n'est pas transmis par les végétaux consommés.`,
      `Faux. Le contact cutané direct n'est pas son mode principal de transmission.`,
      `Faux. La viande de poulet n'est pas impliquée dans cette transmission.`,
      `Vrai. Pneumocystis jirovecii se transmet principalement par voie aérienne, par inhalation.`
    ]
  ),

  Q(17,
    `Quelle pathologie évoque cette description clinique ?`,
    [
      `Un syndrome pied-main-bouche`,
      `Une varicelle`,
      `Une dermatophytie (ou dermatophytose) circinée`,
      `Un impétigo bulleux`,
      `Un zona`
    ],
    'E',
    [
      `Faux. Le syndrome pied-main-bouche touche principalement les mains, les pieds et la muqueuse buccale.`,
      `Faux. La varicelle provoque généralement une éruption diffuse avec des lésions d'âges différents.`,
      `Faux. Une dermatophytie circinée entraîne habituellement des lésions érythémato-squameuses annulaires.`,
      `Faux. L'impétigo bulleux est une infection bactérienne cutanée, sans distribution métamérique typique.`,
      `Vrai. L'association de douleurs neuropathiques et de vésicules en bouquet suivant un dermatome évoque un zona.`
    ]
  ),

  Q(18,
    `Dans l'absolu, quel(s) agent(s) infectieux est (sont) responsable(s) d'éruptions vésiculeuses ?`,
    [
      `le virus du zona-varicelle (VZV)`,
      `le virus d'Epstein-Barr (EBV)`,
      `le cytomégalovirus (CMV)`,
      `Le virus herpes simplex 1 (HSV-1)`,
      `Le virus herpes simplex 2 (HSV-2)`
    ],
    'ADE',
    [
      `Vrai. Le VZV provoque la varicelle et le zona, caractérisés par des lésions vésiculeuses.`,
      `Faux. L'EBV provoque notamment la mononucléose infectieuse, sans éruption vésiculeuse caractéristique.`,
      `Faux. Le CMV n'est pas une cause habituelle d'éruption vésiculeuse typique.`,
      `Vrai. HSV-1 provoque notamment des lésions herpétiques vésiculeuses oro-labiales.`,
      `Vrai. HSV-2 est notamment responsable d'herpès génital avec vésicules et ulcérations.`
    ]
  ),

  Q(19,
    `Comment effectuer la confirmation diagnostique de cette infection ?`,
    [
      `En écouvillonnant des lésions vésiculeuses`,
      `En prélevant la salive`,
      `En réalisant une ponction veineuse pour rechercher les anticorps`,
      `En détectant les acides nucléiques par PCR`,
      `En détectant les antigènes par test rapide immunochromatographique`
    ],
    'AD',
    [
      `Vrai. Un écouvillonnage du contenu ou du fond des lésions vésiculeuses permet de rechercher le virus.`,
      `Faux selon la grille. La salive n'est pas le prélèvement de référence pour confirmer ce zona cutané.`,
      `Faux. La sérologie est peu utile au diagnostic d'une réactivation du VZV.`,
      `Vrai. La PCR sur prélèvement lésionnel permet de détecter l'ADN du VZV.`,
      `Faux. Les tests rapides immunochromatographiques antigéniques ne constituent pas la méthode diagnostique attendue.`
    ]
  ),

  Q(20,
    `Dix jours plus tard, sa nouvelle cure de chimiothérapie est annulée, et Madame X est adressée aux urgences par son généraliste devant l'apparition d'une fièvre dans la nuit, avec irritabilité, des céphalées et une photophobie. L'examen clinique révèle une raideur de la nuque et une température à 39°C.

Parmi les examens biologiques réalisés, une ponction lombaire montre les résultats suivant dans le liquide cérébro-spinal (LCS) :
Leucocytes : 150/mm³ comprenant 60% de lymphocytes et 40% de polynucléaires neutrophiles.
Hématies : <10/mm³.
Glycorachie : 2,0 mmol/L.
Protéinorachie : 0,9 g/L.
Examen direct à la coloration de Gram : négatif.
Glycémie : 6,0 mmol/L.

Le diagnostic de méningite infectieuse est retenu.

Quel(s) agent(s) infectieux pourrait(-aient) être responsable(s) de ce tableau clinique ?`,
    [
      `Le virus du zona-varicelle (VZV)`,
      `Le cryptocoque`,
      `L'entérocoque`,
      `Le virus herpès simplex 1 (HSV - 1)`,
      `La levure Candida albicans`
    ],
    'ABD',
    [
      `Vrai. Le VZV peut provoquer une méningite ou une méningo-encéphalite, notamment après un zona.`,
      `Vrai. Cryptococcus neoformans peut provoquer une méningite subaiguë chez les immunodéprimés, avec hypoglycorachie et hyperprotéinorachie.`,
      `Faux selon la grille. L'entérocoque n'est pas une cause habituelle de ce tableau de méningite lymphocytaire.`,
      `Vrai. HSV-1 peut provoquer des infections du système nerveux central, notamment des encéphalites et parfois des méningites.`,
      `Faux selon la grille. Candida albicans peut exceptionnellement provoquer une méningite, mais n'est pas retenu dans ce contexte.`
    ]
  ),

  Q(21,
    `Vous suspectez une infection méningée fongique à Cryptococcus neoformans. L'examen direct à l'encre de Chine réalisé sur le liquide cérébro-spinal est positif.

Qu'observez vous lors de cet examen direct ?`,
    [
      `Des filaments mycéliens`,
      `Des diplocoques à Gram positif`,
      `Des diplocoques à Gram négatif`,
      `Des levures rondes capsulées`,
      `Des hématies en faucille`
    ],
    'D',
    [
      `Faux. Cryptococcus neoformans est une levure et ne se présente pas habituellement sous forme de filaments mycéliens.`,
      `Faux. Des diplocoques à Gram positif évoquent notamment le pneumocoque.`,
      `Faux. Des diplocoques à Gram négatif évoquent notamment le méningocoque.`,
      `Vrai. L'encre de Chine révèle des levures rondes entourées d'un halo clair correspondant à leur capsule polysaccharidique.`,
      `Faux. Les hématies falciformes correspondent à des drépanocytes.`
    ]
  ),

  Q(22,
    `Le diagnostic de cryptococcose neuro-méningée est confirmé. Quelle(s) mesure(s) de prise en charge envisagez-vous ?`,
    [
      `Une prise en charge ambulatoire`,
      `La mise en place d'une antifongithérapie`,
      `L'isolement pendant 2 semaines`,
      `La mise en place d'une antifongithérapie préventive pour l'entourage`,
      `La mise en place d'une vaccination pour l'entourage`
    ],
    'B',
    [
      `Faux. Une cryptococcose neuroméningée nécessite généralement une prise en charge hospitalière spécialisée.`,
      `Vrai. Un traitement antifongique systémique est indispensable, notamment avec une phase d'induction adaptée.`,
      `Faux. La cryptococcose n'est pas habituellement transmise directement d'une personne à l'autre.`,
      `Faux. Une prophylaxie antifongique systématique de l'entourage n'est pas indiquée.`,
      `Faux. Il n'existe pas de vaccination de l'entourage recommandée contre Cryptococcus neoformans.`
    ]
  ),

  Q(23,
    `Quels sont les deux prélèvements pulmonaires les plus contributifs pour aboutir au diagnostic de pneumopathie bactérienne ?`,
    [
      `Une expectoration spontanée`,
      `Une expectoration induite`,
      `Une aspiration endo-trachéale`,
      `Un lavage broncho-alvéolaire (LBA)`,
      `Un brossage bronchique protégé`
    ],
    'DE',
    [
      `Faux selon la grille. Une expectoration spontanée peut être utilisée, mais présente un risque de contamination par la flore oropharyngée.`,
      `Faux selon la grille. L'expectoration induite n'est pas l'un des deux prélèvements les plus spécifiques attendus ici.`,
      `Faux selon la grille. L'aspiration endotrachéale peut être contributive, notamment chez un patient intubé, mais elle est moins protégée contre la contamination.`,
      `Vrai. Le lavage broncho-alvéolaire fournit un prélèvement respiratoire profond utilisable pour une analyse microbiologique.`,
      `Vrai. Le brossage bronchique protégé permet un prélèvement respiratoire distal en limitant la contamination par la flore des voies aériennes supérieures.`
    ]
  ),

  Q(24,
    `La radiographie pulmonaire montre une pneumopathie systématisée atteignant le lobe supérieur gauche.

Devant une pneumonie franche lobaire aiguë, quelle bactérie suspecter en première instance ?`,
    [
      `Chlamydophyla pneumoniae`,
      `Streptococcus pneumoniae (le pneumocoque)`,
      `Mycobacterium tuberculosis (le bacille de Koch)`,
      `Mycoplasma pneumoniae (le mycoplasme)`,
      `Chlamydophyla psittaci`
    ],
    'B',
    [
      `Faux. Chlamydophila pneumoniae provoque plutôt des pneumonies atypiques.`,
      `Vrai. Streptococcus pneumoniae est l'agent bactérien classique d'une pneumonie franche lobaire aiguë.`,
      `Faux. Mycobacterium tuberculosis provoque une tuberculose pulmonaire dont la présentation diffère habituellement d'une pneumonie franche lobaire aiguë.`,
      `Faux. Mycoplasma pneumoniae provoque plus souvent une pneumonie atypique.`,
      `Faux. Chlamydophila psittaci provoque une psittacose, généralement associée à une exposition aviaire.`
    ]
  ),

  Q(25,
    `Sans attendre votre prescription, l'infirmière a prélevé des urines pour la recherche d'antigènes urinaires, qu'elle transmet aussitôt au laboratoire d'analyse biomédicale. Quelle(s) bactérie(s) peut (peuvent) être détectée(s) par ce type de test ?`,
    [
      `Chlamydophyla pneumoniae`,
      `Streptococcus pneumoniae (le pneumocoque)`,
      `Mycobactérium tuberculosis (le bacille de Koch)`,
      `Mycoplasma pneumoniae (le mycoplasme)`,
      `Legionella pneumophila (la légionelle)`
    ],
    'BE',
    [
      `Faux. Le diagnostic de Chlamydophila pneumoniae ne repose pas sur la recherche habituelle d'antigènes urinaires.`,
      `Vrai. Un test antigénique urinaire peut détecter un antigène de Streptococcus pneumoniae.`,
      `Faux. La recherche de Mycobacterium tuberculosis repose notamment sur des examens microbiologiques et moléculaires adaptés.`,
      `Faux. Mycoplasma pneumoniae n'est pas recherché par ce test antigénique urinaire.`,
      `Vrai. La recherche de l'antigène urinaire de Legionella pneumophila, notamment du sérogroupe 1, est une méthode diagnostique courante.`
    ]
  ),

  Q(26,
    `Au final, c'est le diagnostic de pneumopathie à Legionella pneumophila (légionelle) qui est retenu.

Concernant la légionellose, quelles sont les propositions vraies ?`,
    [
      `Elle est transmise via des aérosols`,
      `Elle peut être d'origine zoonotique`,
      `Elle survient plus souvent chez les immunodéprimés`,
      `Elle présente une recrudescence en période hivernale`,
      `Elle est souvent traitée par une aminopénicilline`
    ],
    'AC',
    [
      `Vrai. La contamination par Legionella pneumophila survient principalement par inhalation d'aérosols d'eau contaminée.`,
      `Faux. La légionellose est généralement d'origine environnementale et non zoonotique.`,
      `Vrai. L'immunodépression constitue un facteur de risque de légionellose sévère.`,
      `Faux. Les cas présentent plutôt une saisonnalité estivale ou automnale dans de nombreuses régions.`,
      `Faux. Legionella est une bactérie intracellulaire traitée notamment par macrolides ou fluoroquinolones, et non par aminopénicillines.`
    ]
  ),

  Q(27,
    `Une épidémie nosocomiale de COVID-19 survient dans le service où est hospitalisée Clémence F. Sur les recommandations de l'équipe d'hygiène hospitalière, vous réalisez un dépistage de tous les patienst du service.

Quel(s) prélèvement(s) est (sont) adapté(s) pour recherche du virus SARS-CoV-2 ?`,
    [
      `Un crachat`,
      `Des urines`,
      `Un écouvillonnage nasopharyngé`,
      `Du sérum`,
      `Une aspiration nasopharyngée`
    ],
    'CE',
    [
      `Faux selon la grille. Les crachats peuvent parfois contenir du virus, mais ne sont pas le prélèvement de référence pour ce dépistage.`,
      `Faux. Les urines ne sont pas un prélèvement habituel pour le dépistage respiratoire du SARS-CoV-2.`,
      `Vrai. L'écouvillonnage nasopharyngé permet la recherche de l'ARN viral par amplification moléculaire.`,
      `Faux. Le sérum n'est pas le prélèvement de référence pour diagnostiquer une infection respiratoire aiguë à SARS-CoV-2.`,
      `Vrai. Une aspiration nasopharyngée peut également permettre la recherche du virus.`
    ]
  ),

  Q(28,
    `Son dépistage du SARS-CoV-2 s'avère négatif. Quel(s) moyen(s) de prévention contre cette infection respiratoire lui conseillez-vous ?`,
    [
      `La vaccination contre le SARS-CoV-2`,
      `Le port du masque protecteur`,
      `L'utilisation de seringues à usage unique`,
      `La prise d'une antibioprophylaxie`,
      `La vaccination contre le coronavirus OC43`
    ],
    'AB',
    [
      `Vrai. La vaccination réduit notamment le risque de formes graves de COVID-19.`,
      `Vrai. Le port d'un masque adapté contribue à limiter la transmission respiratoire.`,
      `Faux. L'utilisation de seringues à usage unique prévient des infections transmissibles par voie sanguine et n'est pas une mesure spécifique contre la transmission respiratoire du SARS-CoV-2.`,
      `Faux. Les antibiotiques n'ont pas d'action préventive contre une infection virale à SARS-CoV-2.`,
      `Faux. Il n'existe pas de vaccination recommandée contre le coronavirus OC43 permettant de prévenir le COVID-19.`
    ]
  ),

  Q(29,
    `Concernant la vaginose, quelles sont les propositions vraies ?`,
    [
      `Une infection aiguë à Trichomonas vaginalis`,
      `Une infection aiguë à bactéries pyogènes`,
      `Une infection chronique à levures`,
      `Un remplacement de la flore vaginale normale`,
      `Une prolifération bactérienne anormale`
    ],
    'DE',
    [
      `Faux. Trichomonas vaginalis provoque une trichomonose, une infection sexuellement transmissible.`,
      `Faux. La vaginose n'est pas une infection aiguë classique par des bactéries pyogènes.`,
      `Faux. Une infection à levures comme Candida provoque une candidose vaginale, distincte de la vaginose bactérienne.`,
      `Vrai. La vaginose correspond à une dysbiose avec diminution des lactobacilles protecteurs.`,
      `Vrai. Elle s'accompagne d'une prolifération anormale de bactéries, notamment anaérobies.`
    ]
  ),

  Q(30,
    `L'examen clinique retrouve des douleurs pelviennes à la palpation, des leucorrhées abondantes du col de l'utérus et une fièvre à 38,5°C, vous incitant à évoquer finalement une infection génitale haute.

Que pensez-vous de ce type d'infection ?`,
    [
      `Peut se présenter comme une vulvite`,
      `Peut évoluer en pyosalpinx`,
      `Peut se compliquer d'abcès tubo-ovarien`,
      `Peut être due à Trichomonas vaginalis`,
      `Peut se compliquer de péritonite`
    ],
    'BCE',
    [
      `Faux. Une vulvite correspond à une infection génitale basse.`,
      `Vrai. Une salpingite peut évoluer vers une collection purulente tubaire appelée pyosalpinx.`,
      `Vrai. Une infection génitale haute peut se compliquer d'un abcès tubo-ovarien.`,
      `Faux selon la grille. Trichomonas vaginalis provoque principalement des infections génitales basses.`,
      `Vrai. L'extension de l'infection peut entraîner une péritonite pelvienne.`
    ]
  ),

  Q(31,
    `Le gonocoque (Neisseria gonorrhoeae) constitue un pathogène responsable d'infection génitale haute.

Quelle(s) affirmation(s) est (sont) exacte(s) à propos de cette bactérie ?`,
    [
      `Est strictement humaine`,
      `Est pathogène spécifique`,
      `Est sensible aux macrolides`,
      `Peut être transmise par contact bucco-génital`,
      `Est souvent responsable de bactériémie`
    ],
    'ABD',
    [
      `Vrai. Neisseria gonorrhoeae possède un réservoir exclusivement humain.`,
      `Vrai. Le gonocoque est un pathogène spécifique responsable de la gonococcie.`,
      `Faux selon la grille. Les résistances aux macrolides sont importantes et cette famille ne constitue pas un traitement empirique fiable.`,
      `Vrai. Les contacts sexuels oro-génitaux permettent la transmission du gonocoque.`,
      `Faux. Les infections gonococciques disséminées avec bactériémie sont relativement rares.`
    ]
  ),

  Q(32,
    `Quelle(s) famille(s) d'antibiotiques est (sont) adaptée(s) au traitement d'une infection à gonocoque (Neisseria gonorrhoeae) ?`,
    [
      `Penicilline G`,
      `Aminoglycosides`,
      `Nitrofuranes`,
      `Rifamycine`,
      `Céphalosporines`
    ],
    'E',
    [
      `Faux. La résistance du gonocoque aux pénicillines empêche leur utilisation empirique habituelle.`,
      `Faux selon la grille. Les aminosides ne constituent pas la classe de référence attendue pour le traitement de première intention.`,
      `Faux. Les nitrofuranes sont principalement utilisés dans certaines infections urinaires.`,
      `Faux. Les rifamycines ne constituent pas le traitement de référence des infections gonococciques.`,
      `Vrai. Les céphalosporines de troisième génération, notamment la ceftriaxone, sont utilisées dans le traitement des infections gonococciques.`
    ]
  ),

  Q(33,
    `L'infection génitale haute a été correctement traitée. Plusieurs mois ont passé, et la patiente est maintenant enceinte. Elle s'interroge sur la problématique du portage vaginal du streptocoque du groupe B.

Quelle(s) affirmation(s) est (sont) exacte(s) concernant le streptocoque du groupe B ?`,
    [
      `Est aussi possiblement présente en portage digestif`,
      `Est responsable d'infection néonatale`,
      `Doit être dépistée en début de grossesse`,
      `Est principalement dépistée par écouvillonnage rectal`,
      `Est traitée par tétracyclines en cas de portage vaginal positif`
    ],
    'AB',
    [
      `Vrai. Streptococcus agalactiae peut coloniser les voies digestives et génitales.`,
      `Vrai. Le streptocoque du groupe B peut provoquer des infections néonatales sévères, notamment septicémies et méningites.`,
      `Faux. Le dépistage systématique est habituellement réalisé en fin de grossesse.`,
      `Faux. Le dépistage repose notamment sur un prélèvement vaginal associé selon les protocoles à un prélèvement rectal, et non uniquement sur un écouvillonnage rectal.`,
      `Faux. En cas d'indication, l'antibioprophylaxie per-partum repose principalement sur une bêta-lactamine adaptée.`
    ]
  ),

  Q(34,
    `Concernant le tableau clinique présenté par les enfants, quelles sont les affirmations exactes ?`,
    [
      `Les enfants présentent un syndrome dysentérique`,
      `Escherichia coli pourrait être impliqué`,
      `Une salmonelle non typhi pourrait être impliquée`,
      `Un staphylocoque doré (Staphylococcus aureus) pourrait être impliqué`,
      `Clostridium perfringens pourrait être impliqué`
    ],
    'ABC',
    [
      `Vrai. La diarrhée glairo-sanglante fébrile correspond à un syndrome dysentérique.`,
      `Vrai. Certaines souches pathogènes d'Escherichia coli peuvent provoquer des diarrhées sanglantes.`,
      `Vrai. Les salmonelles non typhiques peuvent provoquer une gastro-entérite fébrile, parfois invasive.`,
      `Faux selon la grille. Une intoxication alimentaire à entérotoxine staphylococcique donne surtout des vomissements précoces, sans syndrome dysentérique typique.`,
      `Faux. Clostridium perfringens provoque généralement des diarrhées aqueuses et des douleurs abdominales, sans dysenterie caractéristique.`
    ]
  ),

  Q(35,
    `Quel est l'aliment le plus probablement en cause ?`,
    [
      `L'entrée (œufs avec mayonnaise)`,
      `Le plat (poulet-haricots verts)`,
      `Le dessert (mousse au chocolat)`,
      `L'eau de boisson`,
      `Les données de l'énoncé ne permettent pas de conclure`
    ],
    'A',
    [
      `Vrai. Parmi les consommateurs de l'entrée, 14 sur 15 sont malades, soit environ 93 %, ce qui oriente fortement vers les œufs avec mayonnaise.`,
      `Faux. Parmi les consommateurs du plat, 11 sur 24 sont malades, soit environ 46 %, une proportion moins évocatrice.`,
      `Faux. Tous les enfants ont consommé le dessert, ce qui ne permet pas de distinguer les malades des non-malades.`,
      `Faux. Aucune donnée particulière ne désigne l'eau comme source principale de contamination.`,
      `Faux. Les taux d'attaque selon les aliments permettent de désigner l'entrée comme suspect principal.`
    ]
  ),

  Q(36,
    `Quel est le diagnostic le plus probable ?`,
    [
      `Endocardite aiguë bactérienne tricuspidienne à staphylocoque`,
      `Endocardite aiguë bactérienne tricuspidienne à entérocoques`,
      `Endocardite subaiguë ou maladie d'Osler à staphylocoque`,
      `Endocardite subaiguë ou maladie d'Osler à Streptococcus gallolyticus`,
      `Aucune des propositions ci-dessus`
    ],
    'D',
    [
      `Faux. Les staphylocoques sont des cocci à Gram positif habituellement disposés en amas, et non en chaînettes.`,
      `Faux. Le tableau évoque une endocardite subaiguë et le souffle décrit oriente vers une atteinte mitrale plutôt que tricuspidienne.`,
      `Faux. Une endocardite staphylococcique est possible, mais les hémocultures orientent plutôt vers un streptocoque.`,
      `Vrai. L'endocardite subaiguë à Streptococcus gallolyticus est compatible avec le tableau et doit faire rechercher une pathologie colique associée.`,
      `Faux. La proposition D correspond au diagnostic attendu.`
    ]
  ),

  Q(37,
    `Quelle est la porte d'entrée la plus probable ?`,
    [
      `Cutanée`,
      `Urinaire`,
      `Digestive`,
      `Ostéoarticulaire`,
      `Génitale`
    ],
    'C',
    [
      `Faux. Une porte d'entrée cutanée est notamment classique pour certaines endocardites à staphylocoque.`,
      `Faux. Une porte d'entrée urinaire est possible pour certaines bactériémies, notamment à entérocoque.`,
      `Vrai. Streptococcus gallolyticus appartient à la flore digestive et son association avec les lésions coliques est bien connue.`,
      `Faux. Une porte d'entrée ostéoarticulaire n'est pas la plus probable ici.`,
      `Faux. Une porte d'entrée génitale n'est pas typiquement associée à Streptococcus gallolyticus.`
    ]
  ),

  Q(38,
    `Parmi les micro-organismes suivants, lequel est habituellement responsable d'atteinte pulmonaire ?`,
    [
      `La filaire onchocerque (Onchocerva volvulus)`,
      `Le pou de corps (Pediculus humanis var. corporis)`,
      `Le ténia du boeuf ou vert solitaire (Taenia saginata)`,
      `La moisissure aspergillaire (Aspergillus fumigatus)`,
      `Un champignon dermatophyte (Trichopyton rubrum)`
    ],
    'D',
    [
      `Faux. Onchocerca volvulus provoque notamment des atteintes cutanées et oculaires.`,
      `Faux. Le pou de corps est un ectoparasite pouvant transmettre certaines infections bactériennes.`,
      `Faux. Taenia saginata est un cestode intestinal.`,
      `Vrai. Aspergillus fumigatus est responsable de diverses aspergilloses pulmonaires.`,
      `Faux. Trichophyton rubrum est principalement responsable de dermatophyties cutanées et unguéales.`
    ]
  ),

  Q(39,
    `Parmi les parasitoses suivantes, laquelle entraîne classiquement une éosinophilie sanguine ?`,
    [
      `L'amoebose`,
      `La giardiose (ou lambliose)`,
      `La trypanosomose africaine (ou maladie du sommeil)`,
      `La filariose`,
      `Le paludisme (ou malaria)`
    ],
    'D',
    [
      `Faux. L'amoebose est une protozoose n'entraînant pas classiquement d'hyperéosinophilie.`,
      `Faux. La giardiose est une protozoose intestinale.`,
      `Faux. La trypanosomose africaine n'est pas une cause classique d'hyperéosinophilie.`,
      `Vrai. Les filarioses sont des helminthiases pouvant provoquer une hyperéosinophilie importante.`,
      `Faux. Le paludisme est une protozoose sanguine sans hyperéosinophilie caractéristique.`
    ]
  ),

  Q(40,
    `Parmi les micro-organismes suivants, quel(s) est (sont) celui (ceux) qui peut(-vent) être responsable(s) d'un syndrome dysentérique chez l'Homme ?`,
    [
      `L'amibe entéro-pathogène (Entamoeba histolytica)`,
      `La shigelle (Shigella sp.)`,
      `L'oxyure (Enterobius vermicularis)`,
      `La campylobacter (Campylobacter jejuni)`,
      `La cryptocoque (Cryptococcus neoformans)`
    ],
    'ABD',
    [
      `Vrai. Entamoeba histolytica peut provoquer une dysenterie amibienne.`,
      `Vrai. Shigella est une cause classique de dysenterie bacillaire.`,
      `Faux. Enterobius vermicularis provoque principalement une oxyurose avec prurit anal.`,
      `Vrai. Campylobacter jejuni peut provoquer une diarrhée inflammatoire parfois sanglante.`,
      `Faux. Cryptococcus neoformans est principalement responsable d'infections pulmonaires et neuroméningées.`
    ]
  ),

  Q(41,
    `A propos de l'anguillulose, quelle(s) mesure(s) prophylactique(s) peut(-vent) être mise(s) en place pour éviter toute contamination ?`,
    [
      `Le port de chaussures fermées`,
      `L'application de répulsif cutané`,
      `La lutte contre les mollusques`,
      `La lutte contre le péril fécal`,
      `La cuisson de la viande de bœuf à cœur`
    ],
    'AD',
    [
      `Vrai. Le port de chaussures protège contre la pénétration transcutanée des larves de Strongyloides stercoralis.`,
      `Faux. Les répulsifs contre les insectes ne préviennent pas efficacement l'anguillulose.`,
      `Faux. Les mollusques ne constituent pas un hôte intermédiaire nécessaire au cycle de Strongyloides stercoralis.`,
      `Vrai. L'amélioration de l'assainissement et la lutte contre le péril fécal limitent la contamination des sols.`,
      `Faux. La contamination ne se fait pas par ingestion de viande bovine insuffisamment cuite.`
    ]
  ),

  Q(42,
    `Concernant le virus des oreillons, quelles sont les propositions vraies ?`,
    [
      `Il se transmet par voie sanguine`,
      `L'infection entraîne une parotidite`,
      `L'infection peut se compliquer par une atteinte glandulaire`,
      `L'infection peut être traitée par l'administration d'antiviraux`,
      `L'infection peut être prévenue par un vaccin vivant atténué`
    ],
    'BCE',
    [
      `Faux. Le virus des oreillons se transmet principalement par voie respiratoire et salivaire.`,
      `Vrai. Les oreillons provoquent classiquement une parotidite.`,
      `Vrai. L'infection peut toucher d'autres glandes, notamment les testicules avec une orchite.`,
      `Faux. Il n'existe pas de traitement antiviral spécifique recommandé en routine contre les oreillons.`,
      `Vrai. Le vaccin ROR contient une composante vivante atténuée contre les oreillons.`
    ]
  ),

  Q(43,
    `Parmi les propositions suivantes, quelle(s) est (sont) celle(s) qui s'applique(nt) au virus de l'hépatite A (VHA) ?`,
    [
      `Il s'agit d'un virus non enveloppé`,
      `La primo infection se caractérise typiquement par un ictère`,
      `Le diagnostic virologique de référence repose sur la mise en évidence des anticorps IgM-anti VHA`,
      `L'infection évolue majoritairement vers une forme chronique`,
      `L'infection peut être prévenue par l'administration d'immunoglobulines polyvalentes`
    ],
    'ABC',
    [
      `Vrai. Le virus de l'hépatite A est un virus à ARN non enveloppé appartenant aux Picornaviridae.`,
      `Vrai selon la grille. Une hépatite A symptomatique peut se manifester par un ictère, notamment chez l'adulte.`,
      `Vrai. La détection des IgM anti-VHA permet de diagnostiquer une infection aiguë.`,
      `Faux. L'hépatite A ne provoque pas d'infection chronique.`,
      `Faux selon la grille. La prévention repose principalement sur la vaccination et les mesures d'hygiène ; les immunoglobulines peuvent toutefois avoir certaines indications post-exposition.`
    ]
  ),

  Q(44,
    `Parmi les virus suivants, quel(s) est (sont) celui (ceux) qui peut (-vent) être transmis par voie transplacentaire ?`,
    [
      `Le virus respiratoire syncitial (VRS)`,
      `Le virus de la rubéole`,
      `Le cytomégalovirus (CMV)`,
      `Le parvovirus B19`,
      `Le virus de la varicelle et du zona (VZV)`
    ],
    'BCDE',
    [
      `Faux. Le VRS se transmet principalement par voie respiratoire et n'est pas un agent classique d'infection transplacentaire.`,
      `Vrai. La rubéole maternelle peut être transmise au fœtus et provoquer un syndrome de rubéole congénitale.`,
      `Vrai. Le CMV peut traverser le placenta et provoquer une infection congénitale.`,
      `Vrai. Le parvovirus B19 peut provoquer une anémie fœtale sévère et un anasarque fœto-placentaire.`,
      `Vrai. Une varicelle maternelle peut entraîner une infection congénitale par transmission transplacentaire.`
    ]
  ),

  Q(45,
    `Concernant le papillomavirus humain (HPV), quelles sont les propositions vraies ?`,
    [
      `Il peut être responsable de lésions cutanéo-muqueuses`,
      `Le virus possède des protéines impliquées dans l'oncogenèse`,
      `Les HPV de type 6 et 11 sont les principaux pourvoyeurs du cancer du col de l'utérus`,
      `La vaccination est recommandée avant l'âge de l'activité sexuelle`,
      `En France, le dépistage des HPV oncogènes génitaux est recommandé en première intention après 30 ans chez les femmes`
    ],
    'ABDE',
    [
      `Vrai. Les HPV peuvent provoquer des verrues cutanées, des condylomes et des lésions muqueuses.`,
      `Vrai. Les protéines virales E6 et E7 participent à l'oncogenèse, notamment par leurs effets sur p53 et pRb.`,
      `Faux. Les HPV 6 et 11 sont surtout responsables de condylomes ; les HPV 16 et 18 sont fortement associés aux cancers du col.`,
      `Vrai. La vaccination est idéalement réalisée avant l'exposition au virus.`,
      `Vrai. Chez les femmes de 30 à 65 ans, le dépistage cervical repose en première intention sur un test HPV à haut risque, selon les recommandations applicables.`
    ]
  ),

  Q(46,
    `Concernant l'infection par le virus de la rougeole, quelles sont les propositions vraies ?`,
    [
      `Elle provoque une éruption vesiculeuse`,
      `Elle commence par une lésion caractéristique à la face interne des joues`,
      `Elle peut se documenter par la présence d'anticorps IgM spécifiques dans le sérum`,
      `Elle peut se compliquer de pneumonie`,
      `Elle est une maladie à déclaration obligatoire (DO)`
    ],
    'BCDE',
    [
      `Faux. La rougeole provoque principalement une éruption maculopapuleuse, et non vésiculeuse.`,
      `Vrai selon la grille. Le signe de Koplik, observé sur la muqueuse jugale, peut précéder l'éruption cutanée.`,
      `Vrai. La présence d'IgM spécifiques peut contribuer au diagnostic de rougeole.`,
      `Vrai. La rougeole peut se compliquer de pneumonie, notamment chez les sujets vulnérables.`,
      `Vrai. La rougeole est une maladie à déclaration obligatoire en France.`
    ]
  ),

  Q(47,
    `Concernant le virus d'Epstein-Barr (EBV), quelles sont les propositions vraies ?`,
    [
      `Il induit une prolifération des lymphocytes B`,
      `Il est responsable de la mononucléose infectieuse`,
      `Son génome est éliminé de l'organisme après guérison clinique`,
      `Les anticorps IgM anti-EBNA (Epstein–Barr nuclear antigen 1) sont présents lors de la primo-infection`,
      `La recherche d'anticorps héterophiles constitue le test de référence pour diagnostiquer une primo-infection`
    ],
    'AB',
    [
      `Vrai. L'EBV infecte notamment les lymphocytes B et peut entraîner leur prolifération.`,
      `Vrai. L'EBV est l'agent responsable de la mononucléose infectieuse classique.`,
      `Faux. L'EBV persiste à l'état latent dans l'organisme après la primo-infection.`,
      `Faux. Les anticorps anti-EBNA apparaissent généralement tardivement et sont surtout de type IgG.`,
      `Faux. Les anticorps hétérophiles peuvent orienter le diagnostic, mais la sérologie spécifique EBV est plus informative.`
    ]
  ),

  Q(48,
    `Concernant le virus de l'hépatite C (VHC), quelles sont les propositions vraies ?`,
    [
      `La transmission par voie sanguine est possible`,
      `Il s'agit d'un virus nu`,
      `La primo infection est généralement asymptomatique`,
      `La réplication virale est authentifiée par la présence d'ARN du virus dans le sang`,
      `L'infection peut être prévenue par un vaccin à ARN messager`
    ],
    'ACD',
    [
      `Vrai. Le VHC se transmet principalement par exposition au sang contaminé.`,
      `Faux. Le VHC est un virus enveloppé.`,
      `Vrai. La primo-infection par le VHC est fréquemment asymptomatique.`,
      `Vrai. La présence d'ARN du VHC dans le sang témoigne d'une infection virémique active.`,
      `Faux. Aucun vaccin préventif contre le VHC n'est disponible en pratique courante.`
    ]
  ),

  Q(49,
    `Chez un sujet au stade d'une infection chronique par le virus de l'hépatite B (VHB), que peut-on détecter dans le sang périphérique ?`,
    [
      `Des anticorps anti-HBs`,
      `Des anticorps IgG anti-HBc`,
      `Des protéines d'enveloppe AgHBs (antigène de surface)`,
      `Des anticorps totaux anti-VHC`,
      `Des anticorps IgM anti-HBc`
    ],
    'BC',
    [
      `Faux selon la grille. Dans une infection chronique habituelle avec AgHBs persistant, les anti-HBs sont généralement absents.`,
      `Vrai. Les IgG anti-HBc témoignent d'un contact naturel avec le VHB et persistent généralement durablement.`,
      `Vrai. La persistance de l'AgHBs pendant plus de six mois définit l'infection chronique par le VHB.`,
      `Faux. Les anti-VHC concernent une infection par le virus de l'hépatite C.`,
      `Faux selon la grille. Les IgM anti-HBc sont surtout associées à une infection aiguë, même si elles peuvent réapparaître lors de certaines réactivations.`
    ]
  ),

  Q(50,
    `Concernant les infections materno-foetales induites par le cytomégalovirus (CMV), quelles sont les propositions vraies ?`,
    [
      `Les nouveaux-nés expriment des symptômes dans un cas sur deux`,
      `Des retards de croissance intra-utérin peuvent être observés`,
      `Il s'agit de la première cause d'infections virales congénitales`,
      `L'infection du nouveau-né peut être diagnostiquée par la présence du virus dans les selles`,
      `L'infection du foetus peut être authentifiée par la présence du génome dans le liquide amniotique`
    ],
    'BCE',
    [
      `Faux. La majorité des nouveau-nés infectés congénitalement par le CMV sont asymptomatiques à la naissance.`,
      `Vrai. Le CMV congénital peut provoquer un retard de croissance intra-utérin.`,
      `Vrai. Le CMV est une cause majeure et classiquement la plus fréquente d'infection virale congénitale.`,
      `Faux. Le diagnostic néonatal repose notamment sur la PCR CMV dans les urines ou la salive, réalisée précocement.`,
      `Vrai. La recherche du génome du CMV par PCR dans le liquide amniotique peut confirmer une infection fœtale.`
    ]
  ),

  Q(51,
    `Concernant l'infection à rotavirus, quelles sont les propositions vraies ?`,
    [
      `Elle est surtout fréquente pendant la période estivale en France métropolitaine`,
      `Elle entraîne des diarrhées non glairo-sanglantes`,
      `Elle est diagnostiquée par la recherche d'antigènes spécifiques dans les selles`,
      `Elle peut être à l'origine d'une déshydratation chez le nourrisson`,
      `Elle peut être prévenue par un vaccin administré oralement`
    ],
    'BCDE',
    [
      `Faux. En France métropolitaine, les épidémies de rotavirus surviennent surtout pendant la saison hivernale.`,
      `Vrai. Le rotavirus provoque généralement une diarrhée aqueuse non sanglante.`,
      `Vrai. Des tests de détection d'antigènes viraux dans les selles permettent le diagnostic.`,
      `Vrai. Les pertes digestives peuvent provoquer une déshydratation importante chez le nourrisson.`,
      `Vrai. Des vaccins vivants atténués administrés par voie orale permettent de prévenir les gastro-entérites sévères à rotavirus.`
    ]
  ),

  Q(52,
    `Concernant les vaccins suivants, lequel(s) est (sont) contre-indiqué(s) en cas de grossesse ?`,
    [
      `Le vaccin contre la grippe`,
      `Le vaccin contre la rougeole`,
      `Le vaccin contre la varicelle`,
      `Le vaccin contre les oreillons`,
      `Le vaccin contre l'hépatite B`
    ],
    'BCD',
    [
      `Faux. Les vaccins antigrippaux inactivés peuvent être administrés et sont recommandés pendant la grossesse.`,
      `Vrai. Le vaccin contre la rougeole est un vaccin vivant atténué, contre-indiqué pendant la grossesse.`,
      `Vrai. Le vaccin contre la varicelle est vivant atténué et contre-indiqué pendant la grossesse.`,
      `Vrai. Le vaccin contre les oreillons est vivant atténué et contre-indiqué pendant la grossesse.`,
      `Faux. Le vaccin contre l'hépatite B est un vaccin recombinant non vivant qui peut être administré pendant la grossesse lorsqu'il est indiqué.`
    ]
  ),

  Q(53,
    `Quelle est la conduite à tenir lorsque le test de dépistage VIH (virus de l'immunodéficience humaine) est positif ?`,
    [
      `Annoncer le diagnostic immédiatement au patient`,
      `Administrer un traitement post exposition durant quatre semaines`,
      `Demander un prélèvement de contrôle rapidement`,
      `Confirmer la positivité de la sérologie par RT-PCR (reverse transcriptase-polymerase chain reaction)`,
      `Confirmer la positivité de la sérologie par western blot`
    ],
    'CE',
    [
      `Faux selon la grille. Un test de dépistage positif doit être confirmé avant de conclure définitivement au diagnostic.`,
      `Faux. Le traitement post-exposition est proposé après une exposition à risque, avant la confirmation d'une infection.`,
      `Vrai. Un nouveau prélèvement permet notamment de sécuriser l'identification du patient et de confirmer le résultat.`,
      `Faux selon la grille. La RT-PCR mesure ou détecte l'ARN viral, mais l'algorithme sérologique de confirmation de cette annale repose sur un test différencié.`,
      `Vrai. Le Western blot est classiquement utilisé comme test de confirmation après un dépistage sérologique VIH positif.`
    ]
  ),

  Q(54,
    `Concernant le traitement des personnes infectées par le VIH, quelles sont les propositions vraies ?`,
    [
      `Il doit être débuté uniquement en cas d'immunodépression avérée`,
      `Il doit être pris en continu toute la vie`,
      `Son efficacité est évaluée par le suivi de la charge virale dans le sang`,
      `Il peut devenir inefficace en cas de résistance`,
      `Il supprime le risque de transmission du virus quel que soit le niveau de charge virale`
    ],
    'BCD',
    [
      `Faux. Le traitement antirétroviral est recommandé indépendamment du taux initial de CD4.`,
      `Vrai. En l'absence de traitement curatif, le traitement antirétroviral doit être poursuivi durablement.`,
      `Vrai. La charge virale plasmatique est un indicateur essentiel de l'efficacité thérapeutique.`,
      `Vrai. Des mutations de résistance peuvent compromettre l'efficacité des antirétroviraux.`,
      `Faux. L'absence de transmission sexuelle repose sur l'obtention et le maintien d'une charge virale indétectable, et non sur la seule prise du traitement.`
    ]
  ),

  Q(55,
    `Comment établit-on le diagnostic biologique de la grippe ?`,
    [
      `A partir d'un prélèvement salivaire`,
      `A partir d'un prélèvement sanguin`,
      `Par recherche d'anticorps IgM spécifiques dans le sérum`,
      `Par technique immunoenzymatique (ELISA) dans le sérum`,
      `Par PCR (polymerase chain reaction) simplex ou multiplex`
    ],
    'E',
    [
      `Faux selon la grille. Le prélèvement salivaire n'est pas le prélèvement de référence retenu pour ce diagnostic.`,
      `Faux. Le diagnostic direct de grippe est réalisé principalement sur un prélèvement respiratoire.`,
      `Faux. La recherche d'IgM spécifiques n'est pas l'examen habituel pour diagnostiquer une grippe aiguë.`,
      `Faux. Un ELISA sérologique n'est pas la méthode de référence pour le diagnostic rapide de grippe.`,
      `Vrai. Une RT-PCR sur prélèvement respiratoire permet de détecter le génome des virus grippaux.`
    ]
  ),

  Q(56,
    `Concernant les vaccins anti-grippaux utilisés en France, quelles sont les propositions vraies ?`,
    [
      `Il s'agit de vaccins à ARN messager`,
      `Ils sont polyvalents contre les grippes A et B`,
      `Il s'agit de vaccins vivants atténués`,
      `Leur composition peut changer d'une année à l'autre`,
      `Ils nécessitent une injection tous les ans à l'automne`
    ],
    'BDE',
    [
      `Faux. Les vaccins antigrippaux couramment utilisés dans le cadre de cette annale ne sont pas des vaccins à ARN messager.`,
      `Vrai. Les vaccins antigrippaux ciblent plusieurs souches appartenant notamment aux virus influenza A et B.`,
      `Faux selon la grille. Les vaccins injectables classiques sont inactivés ; il existe néanmoins des formulations vivantes atténuées intranasales dans certains cadres.`,
      `Vrai. La composition vaccinale est régulièrement adaptée aux souches virales circulantes.`,
      `Vrai selon la grille. Une vaccination annuelle, habituellement avant la saison grippale, est recommandée pour les populations concernées.`
    ]
  ),

  Q(57,
    `La recherche d'antigènes viraux dans les prélèvements cliniques constitue un examen adapté pour diagnostiquer quel(s) type(s) d'infection(s) ?`,
    [
      `Une gastro-entérite virale`,
      `Une méningo-encéphalite virale`,
      `Une infection respiratoire à virus respiratoire syncytial (VRS)`,
      `Une hépatite C chronique`,
      `Une infection herpétique`
    ],
    'AC',
    [
      `Vrai. La détection d'antigènes viraux dans les selles peut être utilisée pour certaines gastro-entérites, notamment à rotavirus.`,
      `Faux. Le diagnostic d'une méningo-encéphalite virale repose principalement sur des techniques moléculaires adaptées au LCS.`,
      `Vrai. Des tests antigéniques respiratoires peuvent être utilisés pour détecter le VRS.`,
      `Faux. Le diagnostic d'infection chronique par le VHC repose notamment sur la sérologie et la recherche d'ARN viral.`,
      `Faux selon la grille. La PCR est privilégiée pour confirmer une infection herpétique active.`
    ]
  ),

  Q(58,
    `Concernant la technique de PCR (polymerase chain reaction) en temps réel, quelles sont les propositions vraies ?`,
    [
      `Elle permet de détecter les virus à ADN`,
      `Sa spécificité repose sur l'enzyme utilisée`,
      `Elle est plus sensible que la culture virale`,
      `Elle permet de quantifier les génomes viraux`,
      `Elle est moins sensible que les tests rapides immunochromatographiques`
    ],
    'ACD',
    [
      `Vrai. La PCR permet la détection de séquences d'ADN viral spécifiques.`,
      `Faux. La spécificité repose principalement sur les amorces et, selon les méthodes, sur la sonde utilisée.`,
      `Vrai. La PCR possède généralement une excellente sensibilité analytique, souvent supérieure aux techniques de culture virale.`,
      `Vrai. La PCR quantitative en temps réel permet d'estimer la quantité d'acides nucléiques présents.`,
      `Faux. Les techniques d'amplification moléculaire sont généralement plus sensibles que les tests antigéniques rapides.`
    ]
  ),

  Q(59,
    `Quelle(s) affirmation(s) est (sont) exacte(s) concernant les exotoxines ?`,
    [
      `Sont produites exclusivement par les bactéries à Gram positif`,
      `Sont des lipopolysaccharides (LPS)`,
      `Sont fortement antigéniques`,
      `Ont une action pyrogène`,
      `Peuvent servir de vaccins après transformation en anatoxines`
    ],
    'CE',
    [
      `Faux. Les exotoxines peuvent être produites par des bactéries à Gram positif et à Gram négatif.`,
      `Faux. Les exotoxines sont généralement des protéines, contrairement au LPS qui constitue une endotoxine.`,
      `Vrai. Les exotoxines protéiques sont souvent fortement immunogènes.`,
      `Faux selon la grille. Certaines exotoxines peuvent être pyrogènes, mais cet effet n'est pas une propriété générale caractéristique de toutes les exotoxines.`,
      `Vrai. Certaines exotoxines inactivées deviennent des anatoxines utilisées en vaccination, notamment contre le tétanos ou la diphtérie.`
    ]
  ),

  Q(60,
    `A propos de la tuberculose, quelles sont les propositions vraies ?`,
    [
      `Des mesures d'hygiène de type précautions complémentaires respiratoires (PCC) AIR sont nécessaires pour prévenir la transmission`,
      `Le risque de transmission est proportionnel à la durée d'exposition`,
      `Le risque de transmission est élevé si le patient présente une caverne à la radiographie pulmonaire`,
      `Un minimum de 15 jours d'isolement respiratoire est préconisé à partir du début du traitement antituberculeux`,
      `Le traitement antituberculeux associe plusieurs molécules antibiotiques`
    ],
    'ABCDE',
    [
      `Vrai. Une tuberculose pulmonaire contagieuse justifie des précautions complémentaires AIR.`,
      `Vrai. Une exposition prolongée augmente le risque de contamination.`,
      `Vrai. Les cavernes pulmonaires sont associées à une forte charge bacillaire et à une contagiosité accrue.`,
      `Vrai selon la grille. Une durée initiale d'isolement d'au moins 15 jours peut être préconisée dans le référentiel enseigné ; la levée de l'isolement dépend aussi du contexte et de l'évolution clinique.`,
      `Vrai. Le traitement d'une tuberculose sensible associe plusieurs antituberculeux pour favoriser l'efficacité et prévenir les résistances.`
    ]
  ),

  Q(61,
    `A propos des mycobactéries tuberculeuses, quelles sont les propositions vraies ?`,
    [
      `La composition de la paroi des mycobactéries est très différente de celle des autres bactéries`,
      `Mycobacterium bovis est responsable de tuberculose uniquement chez les bovidés`,
      `Les mycobactéries tuberculeuses ont besoin de milieux de culture particuliers pour se développer`,
      `Les mycobactéries tuberculeuses sont naturellement sensibles aux antibiotiques classiques`,
      `La coloration de Gram permet de visualiser les mycobactéries`
    ],
    'AC',
    [
      `Vrai. Les mycobactéries possèdent une paroi riche en lipides, notamment en acides mycoliques.`,
      `Faux. Mycobacterium bovis peut également infecter l'être humain et d'autres mammifères.`,
      `Vrai. Leur culture nécessite des milieux spécifiques, tels que Löwenstein-Jensen ou des milieux liquides adaptés.`,
      `Faux. Les mycobactéries possèdent une résistance naturelle à de nombreux antibiotiques habituels.`,
      `Faux selon la grille. La coloration de Gram est peu adaptée à leur identification ; on utilise notamment des colorations pour bacilles acido-alcoolo-résistants.`
    ]
  ),

  Q(62,
    `Quels sont les deux éléments nécessaires et suffisants pour définir une infection parmi les propositions suivantes ?`,
    [
      `Présence du micro-organisme impliqué au sein de la flore locale (cutanée, digestive, ORL...)`,
      `Présence du micro-organisme impliqué au site profond suspect d'infection (habituellement stérile)`,
      `Présence d'un contage infectieux extérieur identifié (entourage, environnement)`,
      `Présence d'une réaction inflammatoire en réponse au micro-organisme`,
      `Présence d'une fièvre objectivée par une prise de température auriculaire`
    ],
    'BD',
    [
      `Faux. La présence d'un microorganisme dans une flore physiologique peut correspondre à une simple colonisation.`,
      `Vrai selon la grille. La mise en évidence du microorganisme au niveau du site profond suspect est un argument important pour une infection.`,
      `Faux. La notion d'un contage identifié n'est ni nécessaire ni suffisante pour définir une infection.`,
      `Vrai. Une réaction inflammatoire de l'hôte en réponse au microorganisme est un élément essentiel de la définition clinique retenue.`,
      `Faux. Une infection peut survenir sans fièvre et une fièvre peut avoir une cause non infectieuse.`
    ]
  ),

  Q(63,
    `Concernant la relation hôte-pathogène dans une infection, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?`,
    [
      `Le pouvoir pathogène d'un micro-organisme définit son potentiel à donner une infection plus ou moins sévère`,
      `La survenue d'une infection dépend de facteurs liés à l'hôte, au pathogène, et à l'environnement`,
      `Les facteurs de risque d'infection liés à l'hôte sont tous modifiables et accessibles à une prévention`,
      `La réponse de l'hôte à une infection fait intervenir en premier lieu la réponse inflammatoire non spécifique`,
      `La réponse inflammatoire innée est toujours identique quel que soit le type de pathogène impliqué`
    ],
    'BD',
    [
      `Faux. Le pouvoir pathogène correspond à la capacité à provoquer une maladie, tandis que la virulence traduit notamment son degré de sévérité.`,
      `Vrai. Une infection résulte d'interactions entre le microorganisme, les caractéristiques de l'hôte et l'environnement.`,
      `Faux. Certains facteurs de risque sont non modifiables, notamment l'âge ou certaines prédispositions génétiques.`,
      `Vrai. L'immunité innée et la réponse inflammatoire non spécifique interviennent précocement lors d'une infection.`,
      `Faux. La réponse inflammatoire dépend notamment du type de pathogène et des mécanismes de reconnaissance immunitaire.`
    ]
  ),

  Q(64,
    `Concernant la fièvre, quelle(s) est (sont) la (les) propositions(s) exacte(s) ?`,
    [
      `La température centrale du corps humain varie au cours du nycthémère de manière physiologique`,
      `La survenue d'une fièvre est spécifique d'une infection`,
      `Une fièvre supérieure à 39,5°C est un signe de gravité`,
      `Le centre de la thermorégulation est situé dans l'hypophyse`,
      `La fièvre correspond à un déplacement du point d'équilibre thermique vers le haut suite à l'action de substances pyrogènes`
    ],
    'AE',
    [
      `Vrai. La température corporelle varie physiologiquement au cours du cycle circadien.`,
      `Faux. La fièvre peut également être provoquée par des maladies inflammatoires, tumorales ou médicamenteuses.`,
      `Faux selon la grille. La hauteur de la fièvre ne permet pas à elle seule de déterminer la gravité d'une infection.`,
      `Faux. Le centre de la thermorégulation est situé principalement dans l'hypothalamus.`,
      `Vrai. Les pyrogènes provoquent une élévation du point de consigne hypothalamique de la température corporelle.`
    ]
  ),

  Q(65,
    `Vous recevez un patient de 69 ans au service d'accueil des urgences qui se présente pour une fièvre à 39°C d'apparition brutale 36h plus tôt et ne cédant pas sous antipyrétiques, avec frissons. Il y a la notion d'une éruption érythémateuse douloureuse localisée au membre inférieur droit. Son état général est altéré depuis le début de la fièvre, mais il n'est pas confus avec un score de Glasgow à 15. Sa pression artérielle est à 95/70 mmHg, son pouls à 105 battements par minute (bpm), sa saturation au doigt est à 95 %, sa fréquence respiratoire est à 26/min.

Dans ce contexte, quelle réponse est exacte concernant ce patient ?`,
    [
      `Le micro-organisme impliqué est probablement d'origine bactérienne`,
      `Le micro-organisme impliqué est probablement d'origine virale`,
      `Le micro-organisme impliqué est probablement d'origine parasitaire`,
      `Le micro-organisme impliqué est probablement d'origine fongique`,
      `Aucun élément ne permet de suspecter un micro organisme à l'origine de cette réponse inflammatoire systémique`
    ],
    'A',
    [
      `Vrai. Le tableau fébrile aigu avec lésion cutanée érythémateuse douloureuse évoque une infection bactérienne de la peau et des tissus mous.`,
      `Faux. Une infection virale est moins évocatrice de ce tableau localisé douloureux avec signes systémiques.`,
      `Faux. Une origine parasitaire n'est pas l'hypothèse principale.`,
      `Faux. Une origine fongique n'est pas l'hypothèse la plus probable en première intention.`,
      `Faux. Les signes cliniques orientent fortement vers une infection bactérienne potentiellement sévère.`
    ]
  ),

  Q(66,
    `Quelles sont les propositions vraies concernant la friction des mains avec les solutés hydro-alcooliques (SHA) ?`,
    [
      `Sont réservées aux épidémies de gastro-entérites aiguës et d'infections respiratoires aiguës`,
      `Ne sont pas efficaces sur les bactéries multi- et hautement résistantes aux antibiotiques (BMR - BHR)`,
      `Offrent une meilleure tolérance sur les mains que les savons`,
      `Leur utilisation intensive peut contribuer à une alcoolémie élevée`,
      `Permettent de diminuer les infections associées aux soins`
    ],
    'CE',
    [
      `Faux. Les frictions hydroalcooliques sont recommandées en routine dans les soins, et non uniquement en période épidémique.`,
      `Faux. Les SHA sont généralement actifs sur les bactéries, y compris multirésistantes, lorsque les conditions d'utilisation sont respectées.`,
      `Vrai. Les SHA correctement formulées sont souvent mieux tolérées que des lavages répétés au savon.`,
      `Faux. L'utilisation cutanée normale des SHA ne provoque pas d'alcoolémie élevée.`,
      `Vrai. L'hygiène des mains réduit la transmission croisée des microorganismes et les infections associées aux soins.`
    ]
  ),

  Q(67,
    `Quelles sont les propositions vraies concernant le port de gants en service de soins ?`,
    [
      `Est systématique si contact avec la peau lésée ou une muqueuse d'un patient`,
      `Remplace l'hygiène des mains par friction avec les produits hydro alcooliques (PHA)`,
      `Est indiqué en cas de lésions cutanées des mains du soignant`,
      `Est indiqué en cas de geste à risque d'accident exposition au sang (AES)`,
      `Est indiqué si risque de contact avec les liquides biologiques`
    ],
    'ACDE',
    [
      `Vrai. Les gants sont indiqués lorsqu'un soin implique un contact avec une muqueuse ou une peau lésée.`,
      `Faux. Le port de gants ne remplace pas l'hygiène des mains avant et après leur utilisation.`,
      `Vrai. Des lésions cutanées des mains du soignant peuvent justifier une protection adaptée.`,
      `Vrai. Les gestes exposant au sang nécessitent des mesures de protection appropriées, notamment des gants.`,
      `Vrai. Les gants sont indiqués lorsqu'il existe un risque de contact avec du sang ou des liquides biologiques.`
    ]
  ),

  Q(68,
    `Dans quelles situations suivantes, prescrivez vous les précautions complémentaires CONTACT (PCC) ?`,
    [
      `Gastro-entérite virale à rotavirus`,
      `Colonisation cutanée à staphylocoque doré (Staphylococcus aureus) sensible à la méticilline (SASM)`,
      `Coqueluche`,
      `Diarrhée à Clostridium difficile`,
      `Colonisation digestive à Escherichia coli producteur de bêta lactamase à spectre étendu (BLSE)`
    ],
    'ADE',
    [
      `Vrai. Une gastro-entérite à rotavirus nécessite des précautions adaptées à la transmission par contact.`,
      `Faux. Un portage de Staphylococcus aureus sensible à la méticilline ne justifie pas systématiquement de précautions complémentaires CONTACT.`,
      `Faux. La coqueluche relève principalement de précautions complémentaires GOUTTELETTES.`,
      `Vrai. Une infection à Clostridioides difficile nécessite des précautions CONTACT spécifiques, avec attention aux spores.`,
      `Vrai selon la grille. Une colonisation digestive à entérobactérie productrice de BLSE peut justifier des précautions CONTACT selon les protocoles et le contexte de soins.`
    ]
  ),

  Q(69,
    `Parmi les bactéries suivantes, quelles sont celles qui nécessitent une prescription médicale de précautions complémentaires CONTACT (PCC) pour les patients porteurs ?`,
    [
      `Staphylococcus aureus (staphylocoque doré) résistant à la méticilline (SARM)`,
      `Klebsiella pneumoniae (klebsielle) productrice de bêtalactamase à spectre étendu (BLSE)`,
      `Enterococcus faecalis (entérocoque) résistant à l'ampicilline (ERA)`,
      `Staphylococcus epidermidis (staphylocoque blanc) résistant à la méticilline (SERM)`,
      `Enterobacter cloacae producteur de céphalosporinase chez un enfant de moins d'un mois (HCASE)`
    ],
    'ABE',
    [
      `Vrai. Le SARM peut justifier des précautions complémentaires CONTACT pour limiter la transmission croisée.`,
      `Vrai selon la grille. Les entérobactéries productrices de BLSE sont concernées par des mesures de maîtrise de transmission adaptées.`,
      `Faux. La seule résistance d'Enterococcus faecalis à l'ampicilline ne constitue pas l'indication caractéristique retenue ici.`,
      `Faux. La résistance à la méticilline de Staphylococcus epidermidis ne justifie pas systématiquement les mêmes mesures que le SARM.`,
      `Vrai selon la grille. Chez le nouveau-né, certains portages de bactéries résistantes justifient des mesures renforcées de prévention des transmissions croisées.`
    ]
  ),

  Q(70,
    `Quelles sont les bactéries les plus fréquentes au cours de l'ostéomyélite de l'enfant ?`,
    [
      `Escherichia coli (colibacille)`,
      `Kingella kingae`,
      `Staphylococcus aureus (staphylocoque doré)`,
      `Staphylococcus epidermidis (staphylocoque blanc)`,
      `Streptococcus agalactiae (streptocoque du groupe B)`
    ],
    'BC',
    [
      `Faux selon la grille. Escherichia coli peut provoquer des infections ostéoarticulaires dans certains contextes, notamment néonataux, mais n'est pas l'une des principales causes retenues chez l'enfant.`,
      `Vrai. Kingella kingae est une cause importante d'infections ostéoarticulaires chez le jeune enfant.`,
      `Vrai. Staphylococcus aureus constitue une des principales causes d'ostéomyélite aiguë chez l'enfant.`,
      `Faux. Staphylococcus epidermidis est davantage associé à certaines infections sur matériel.`,
      `Faux selon la grille. Streptococcus agalactiae concerne surtout certaines infections néonatales, sans être l'une des deux étiologies principales attendues.`
    ]
  ),

  Q(71,
    `Concernant la pasteurellose, quelles sont les affirmations exactes ?`,
    [
      `Le principal signe clinique est une dermo-hypodermite très douloureuse au point d'entrée`,
      `Le principal signe clinique est une volumineuse adénopathie dans le territoire de drainage`,
      `Des localisations secondaires peuvent survenir en cas de bactériémie`,
      `L'amoxicilline est le traitement de première intention`,
      `Les aminosides constituent le traitement de seconde intention`
    ],
    'ACD',
    [
      `Vrai. Une pasteurellose après morsure ou griffure animale provoque souvent une inflammation locale rapide et douloureuse.`,
      `Faux. Une volumineuse adénopathie régionale évoque davantage une maladie des griffes du chat à Bartonella henselae.`,
      `Vrai. Une bactériémie à Pasteurella peut entraîner des infections secondaires, notamment chez les sujets fragiles.`,
      `Vrai. L'amoxicilline est active sur Pasteurella multocida ; l'amoxicilline-acide clavulanique est souvent utilisée pour les morsures animales polymicrobiennes.`,
      `Faux. Les aminosides ne constituent pas le traitement habituel de seconde intention d'une pasteurellose.`
    ]
  ),

  Q(72,
    `Lequel(s) des antibiotiques suivants est (sont) actif(s) sur la synthèse des protéines ?`,
    [
      `Rifampicine (rifamycine)`,
      `Erythromycine (macrolide)`,
      `Gentamicine (aminoglycoside)`,
      `Tétracycline (cycline)`,
      `Vancomycine (glycopeptide)`
    ],
    'BCD',
    [
      `Faux. La rifampicine inhibe l'ARN polymérase bactérienne et donc la transcription.`,
      `Vrai. L'érythromycine inhibe la synthèse protéique en agissant sur la sous-unité 50S du ribosome.`,
      `Vrai. La gentamicine agit sur la sous-unité 30S du ribosome et perturbe la traduction.`,
      `Vrai. Les tétracyclines inhibent la fixation des aminoacyl-ARNt au niveau de la sous-unité 30S.`,
      `Faux. La vancomycine inhibe la synthèse de la paroi bactérienne.`
    ]
  ),

  Q(73,
    `Quel(s) est (sont) le (les) principal(-aux) mécanisme(s) de résistance aux béta-lactamines de Escherichia coli ?`,
    [
      `Production de céphalosporinase`,
      `Production de Pénicillinase`,
      `Résistance à l'imipénème par mutation de la porine D2`,
      `Résistance à la méticilline par acquisition de la PLP2a (protéine liant les pénicillines)`,
      `Sensibilité diminuée aux béta-lactamines par recombinaison homologue des PLP`
    ],
    'AB',
    [
      `Vrai. La production de céphalosporinases peut contribuer à la résistance d'Escherichia coli aux bêta-lactamines.`,
      `Vrai. Les pénicillinases hydrolysent certaines pénicillines et constituent un mécanisme fréquent de résistance.`,
      `Faux. La résistance par mutation de la porine OprD est principalement décrite chez Pseudomonas aeruginosa.`,
      `Faux. L'acquisition de PLP2a par mecA est le mécanisme caractéristique de résistance à la méticilline chez les staphylocoques.`,
      `Faux selon la grille. La recombinaison homologue des PLP n'est pas le mécanisme principal de résistance retenu chez Escherichia coli.`
    ]
  )
];
