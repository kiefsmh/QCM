
export const meta = {
  title: 'UE — De l’agent infectieux à l’hôte — Annales 2025 — Session 1',
};

// Réponses STRICTEMENT conformes à la grille officielle.
// 73 questions — aucune annulation.
// Session du 8 janvier 2025 — Sujet A.

const contextes = [
  {
    debut: 1, fin: 4,
    texte: `CAS CLINIQUE N°1
Plusieurs enfants d'une même crèche sont victimes de diarrhées qui durent maintenant depuis presque deux semaines. Il n'y a pas de signes généraux associés. Vous apprenez que deux d'entre eux ont visité de la famille à l'étranger, pendant les vacances précédentes. Les investigations bactériologiques et virologiques se révèlent non contributives.`
  },
  {
    debut: 5, fin: 7,
    texte: `CAS CLINIQUE N°2
M.A. consulte son médecin traitant pour fièvre à 39°C depuis trois jours, céphalées et asthénie. Au cours de l'interrogatoire, le médecin apprend que M.A. est revenu, il y a quatre jours, d'un voyage en Guinée-Conakry en Afrique de l'Ouest.`
  },
  {
    debut: 8, fin: 10,
    texte: `CAS CLINIQUE N°3
M.G. (66 ans), est hospitalisé dans le service de réanimation suite à une intervention chirurgicale digestive. Il présente une confusion, des frissons, accompagnés d'une fièvre objectivée à 39°C.`
  },
  {
    debut: 11, fin: 13,
    texte: `CAS CLINIQUE N°4
Un interne consulte, une semaine et demi après le retour d'un semestre en Guyane française, où il a participé, à la fin, à de nombreuses missions en forêt amazonienne. Il présente une fièvre et des douleurs abdominales intenses.`
  },
  {
    debut: 14, fin: 16,
    texte: `CAS CLINIQUE N°5
Mme T, retraitée de 75 ans, souffre d'une polyarthrite rhumatoïde, qu'elle traite par intermittence par de la "cortisone" dit-elle, avec des périodes au cours desquelles elle "augmente la dose". Depuis une quinzaine de jours, elle se sent fébrile (température objectivée à 38,7°C en prise rectale), émet une toux qu'elle décrit comme sèche et irritative, et se plaint de "douleurs dans le corps".
Vous suspectez une infection respiratoire bactérienne.`
  },
  {
    debut: 20, fin: 23,
    texte: `CAS CLINIQUE N°6
Nathalie P., femme de 45 ans, vient consulter pour des leucorrhées apparues depuis une semaine, associées à un léger prurit.
L'examen clinique retrouve des douleurs abondantes, ne provenant pas du col de l'utérus à priori. Votre première hypothèse est celle d'une infection génitale basse.`
  },
  {
    debut: 24, fin: 27,
    texte: `CAS CLINIQUE N°7
Vous recevez une femme de 72 ans pour une douleur fébrile de la jambe droite, évoluant depuis 24 heures. Ses principaux antécédents sont un diabète de type 2 non insulino-requérant et une hypertension artérielle.

L'examen clinique montre :
- T = 39,3°C, PA = 140/70 mmHg, FC = 100 battements/min
- Placard oedémateux rouge, chaud, induré, douloureux, bien limité de la jambe droite
- Aspect érosif et macéré des deux derniers espaces interdigitaux plantaires des deux pieds
- Adénopathie inguinale droite sensible.`
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
    `A ce stade des investigations, quel(s) microorganisme(s) pourrait(aient) être théoriquement impliqué(s) dans les troubles digestifs ?`,
    [
      `Les amibes (Entamoeba sp.)`,
      `Le trypanosome africain (Trypanosoma brucei gambiense)`,
      `Le pou (Pediculus humanis)`,
      `Le sarcopte de la gale (Sarcoptes scabiei)`,
      `L'ascaris (Ascaris lumbricoides)`
    ],
    'AE',
    [
      `Vrai. Certaines amibes intestinales, notamment Entamoeba histolytica, peuvent provoquer des diarrhées prolongées.`,
      `Faux. Trypanosoma brucei gambiense provoque la maladie du sommeil, et non une parasitose digestive habituelle.`,
      `Faux. Le pou est un ectoparasite responsable de pédiculose.`,
      `Faux. Le sarcopte provoque la gale, une parasitose cutanée prurigineuse.`,
      `Vrai. Ascaris lumbricoides est un helminthe intestinal pouvant occasionner des troubles digestifs.`
    ]
  ),

  Q(2,
    `Quel examen prescrivez-vous en première intention chez chacun des enfants malades afin de confirmer l'étiologie parasitaire ?`,
    [
      `La ponction-biopsie hépatique (PBH)`,
      `L'examen parasitologique des selles (EPS) standard`,
      `Le frottis sanguin mince`,
      `La goutte épaisse rapide`,
      `La coloscopie`
    ],
    'B',
    [
      `Faux. Une biopsie hépatique n'est pas indiquée en première intention devant des diarrhées prolongées.`,
      `Vrai. L'examen parasitologique des selles recherche les formes parasitaires intestinales, notamment les kystes et les œufs.`,
      `Faux. Le frottis sanguin mince sert notamment à l'identification des hémoparasites.`,
      `Faux. La goutte épaisse recherche principalement les parasites sanguins, notamment Plasmodium.`,
      `Faux. La coloscopie est invasive et n'est pas l'examen parasitologique initial.`
    ]
  ),

  Q(3,
    `Chez 3 des 4 enfants, vous retrouvez finalement de nombreux kystes de Giardia duadenalis.

Par quel(s) moyen(s) s'opère(nt) habituellement la transmission des kystes de Giardia duodenalis ?`,
    [
      `Le portage à la bouche de mains sales`,
      `La consommation de viande de boeuf mal cuite`,
      `La consommation de crudités mal lavées`,
      `La piqûre de moustique`,
      `Le portage de bonnets et casquettes`
    ],
    'AC',
    [
      `Vrai. Giardia duodenalis se transmet par voie féco-orale, notamment par manuportage de kystes.`,
      `Faux. La consommation de viande bovine mal cuite n'est pas le mode de transmission habituel.`,
      `Vrai. Des crudités contaminées et insuffisamment lavées peuvent transmettre les kystes.`,
      `Faux. Giardia n'est pas transmis par les moustiques.`,
      `Faux. Les bonnets et casquettes ne constituent pas une voie de transmission habituelle de Giardia.`
    ]
  ),

  Q(4,
    `A terme, quelle complication pouvez-vous redouter lors d'une infection massive et chronique à Giardia duodenalis survenant chez ces enfants ?`,
    [
      `La méningo-encéphalite`,
      `La pneumonie interstitielle diffuse`,
      `L'insuffisance cardiaque`,
      `Le dérèglement du rythme nycthéméral (inversion du cycle jour/nuit)`,
      `Une malabsorption digestive avec perte de poids`
    ],
    'E',
    [
      `Faux. Giardia duodenalis est un parasite intestinal sans atteinte neuroméningée habituelle.`,
      `Faux. La giardiose ne provoque pas de pneumonie interstitielle diffuse.`,
      `Faux. L'insuffisance cardiaque n'est pas une complication caractéristique de cette parasitose.`,
      `Faux. Un dérèglement du rythme nycthéméral n'est pas une complication classique.`,
      `Vrai. Une giardiose chronique peut provoquer une malabsorption, une perte pondérale et un retard de croissance.`
    ]
  ),

  Q(5,
    `En première intention, quelle infection devez-vous évoquer ?`,
    [
      `L'amoebose`,
      `Le paludisme (ou accès palustre ou malaria)`,
      `L'oxyurose`,
      `La pneumocystose`,
      `La schistosomose (ou bilharziose)`
    ],
    'B',
    [
      `Faux. L'amoebose évoque surtout des manifestations intestinales ou hépatiques.`,
      `Vrai. Toute fièvre au retour d'une zone d'endémie palustre doit faire rechercher un paludisme en urgence.`,
      `Faux. L'oxyurose provoque principalement un prurit anal.`,
      `Faux. La pneumocystose concerne surtout les personnes immunodéprimées avec manifestations respiratoires.`,
      `Faux. La schistosomose n'est pas l'hypothèse prioritaire devant cette fièvre au retour de Guinée.`
    ]
  ),

  Q(6,
    `Quel(s) examen(s) pouvez-vous prescrire en première intention afin de confirmer une suspicion de paludisme (ou accès palustre ou malaria) ?`,
    [
      `Le fond d'oeil`,
      `La biopsie cutanée`,
      `L'examen parasitologique des urines`,
      `L'examen parasitologique des selles (EPS)`,
      `Le frottis sanguin mince`
    ],
    'E',
    [
      `Faux. Le fond d'œil ne constitue pas un examen diagnostique initial du paludisme.`,
      `Faux. Une biopsie cutanée ne permet pas le diagnostic habituel de paludisme.`,
      `Faux. Plasmodium n'est pas recherché dans les urines en première intention.`,
      `Faux. L'examen parasitologique des selles explore les parasitoses intestinales.`,
      `Vrai. Le frottis sanguin mince permet de visualiser les parasites intraérythrocytaires et d'identifier l'espèce de Plasmodium.`
    ]
  ),

  Q(7,
    `Quelle(s) mesure(s) prophylactique(s) pouvez-vous dispenser afin de prévenir spécifiquement le risque de paludisme (ou accès palustre ou malaria) lors d'un voyage ultérieur en zone d'endémie ?`,
    [
      `Favoriser la consommation d'eau en bouteille`,
      `Congeler la viande de boeuf avant de la consommer`,
      `Porter des vêtements couvrants`,
      `Dormir sous une moustiquaire imprégnée d'insecticides/insectifuges`,
      `Se désinfecter régulièrement les mains avec du gel hydro-alcoolique`
    ],
    'CD',
    [
      `Faux. L'eau en bouteille prévient certaines infections digestives, mais pas le paludisme.`,
      `Faux. Plasmodium n'est pas transmis par la consommation de viande bovine.`,
      `Vrai. Les vêtements couvrants diminuent l'exposition aux piqûres d'Anopheles.`,
      `Vrai. Une moustiquaire imprégnée protège contre les piqûres des moustiques vecteurs du paludisme.`,
      `Faux. La friction hydroalcoolique ne prévient pas la transmission vectorielle du paludisme.`
    ]
  ),

  Q(8,
    `Devant ce tableau clinique, vous suspectez une origine infectieuse. Vu le contexte, quel(s) microorganisme(s) pourrait(aient) être théoriquement impliqué(s) ?`,
    [
      `Les schistosomes ou bilharzies (Schistosoma spp)`,
      `La punaise de lit (Cimex lectularius)`,
      `Le colibacille (Escherichia coli)`,
      `Un champignon dermatophyte (Trichophyton rubrum)`,
      `La levure (Candida albicans)`
    ],
    'CE',
    [
      `Faux. La schistosomose n'évoque pas une infection postopératoire aiguë après chirurgie digestive.`,
      `Faux. Les punaises de lit sont des ectoparasites responsables de lésions cutanées.`,
      `Vrai. Escherichia coli, bactérie du microbiote digestif, peut provoquer une infection postopératoire avec bactériémie.`,
      `Faux. Trichophyton rubrum provoque des dermatophyties superficielles.`,
      `Vrai. Candida albicans peut provoquer une infection invasive après chirurgie digestive, notamment chez un patient de réanimation.`
    ]
  ),

  Q(9,
    `A ce stade des investigations et pour étayer votre hypothèse infectieuse, quel prélèvement demandez-vous rapidement ?`,
    [
      `La réalisation d'hémocultures`,
      `La réalisation d'une ponction lombaire (PL)`,
      `La réalisation d'un lavage broncho-alvéolaire (LBA)`,
      `La réalisation d'une biopsie digestive`,
      `La réalisation d'une coproculture bactérienne`
    ],
    'A',
    [
      `Vrai. Les hémocultures recherchent une bactériémie ou une fongémie devant un syndrome infectieux systémique.`,
      `Faux. Une ponction lombaire n'est pas indiquée sans suspicion d'infection du système nerveux central.`,
      `Faux. Le LBA est destiné principalement à l'exploration microbiologique des infections pulmonaires.`,
      `Faux. Une biopsie digestive n'est pas l'examen initial devant ce tableau fébrile postopératoire.`,
      `Faux. La coproculture explore certaines infections intestinales, sans constituer le prélèvement prioritaire ici.`
    ]
  ),

  Q(10,
    `Finalement, une fongémie est objectivée par le prélèvement réalisé à l'étape précédente. Quelle(s) prise(s) en charge proposez-vous ?`,
    [
      `L'isolement du patient en chambre simple`,
      `La mise en place d'un traitement antifongique immédiat`,
      `La recherche de localisations secondaires`,
      `L'ablation de la rate`,
      `Une déclaration obligatoire (DO) à l'Agence Régionale de Santé (ARS)`
    ],
    'BC',
    [
      `Faux. Une candidémie ne nécessite pas d'isolement spécifique pour transmission interhumaine.`,
      `Vrai. Une fongémie documentée impose l'instauration rapide d'un antifongique systémique adapté.`,
      `Vrai. Des localisations secondaires, notamment oculaires ou endocardiques selon le contexte, doivent être recherchées.`,
      `Faux. Une splénectomie n'est pas une mesure de prise en charge standard d'une candidémie.`,
      `Faux. Une candidémie ne constitue pas systématiquement une maladie à déclaration obligatoire.`
    ]
  ),

  Q(11,
    `Quel(s) diagnostic(s) parasitaire(s) pouvez-vous évoquer en relation avec ce contexte épidémiologique et clinique ?`,
    [
      `Le paludisme (ou accès palustre ou malaria)`,
      `L'amoebose tissulaire`,
      `L'échinococcose kystique (ou hydatidose)`,
      `La leishmaniose viscérale`,
      `La schistosomose (ou bilharziose) urinaire`
    ],
    'ABD',
    [
      `Vrai. La Guyane est une région où une exposition au paludisme peut survenir, notamment en forêt.`,
      `Vrai. L'amoebose hépatique peut provoquer une fièvre et des douleurs abdominales intenses.`,
      `Faux selon la grille. L'hydatidose hépatique n'est pas l'hypothèse épidémiologique principale dans ce contexte.`,
      `Vrai selon la grille. Une leishmaniose viscérale peut être évoquée parmi les parasitoses fébriles, même si son contexte épidémiologique mérite d'être précisé.`,
      `Faux. La schistosomose urinaire n'est pas une hypothèse habituelle devant ce tableau en Guyane.`
    ]
  ),

  Q(12,
    `Une échographie abdominale réalisée en urgence révèle plusieurs collections liquidiennes hépatiques.

Indépendamment des éléments relatifs au patient énumérés précédemment, quel(s) diagnostic(s) parasitaire(s) pourrait(ent) généralement être rattachés(s) à cette présentation échographique, quel qu'en soit le contexte ?`,
    [
      `Le paludisme (ou accès palustre ou malaria)`,
      `L'amoebose tissulaire`,
      `L'échinococcose kystique (ou hydatidose)`,
      `La leishmaniose viscérale`,
      `La schistosomose (ou bilharziose) urinaire`
    ],
    'BC',
    [
      `Faux. Le paludisme n'entraîne pas habituellement des collections liquidiennes hépatiques.`,
      `Vrai. L'amoebose tissulaire peut provoquer des abcès hépatiques visibles en échographie.`,
      `Vrai. L'échinococcose kystique entraîne des lésions kystiques hépatiques.`,
      `Faux. La leishmaniose viscérale provoque surtout une atteinte du système réticuloendothélial, notamment hépatosplénique.`,
      `Faux. La schistosomose urinaire concerne principalement l'appareil urinaire.`
    ]
  ),

  Q(13,
    `Pour répondre à l'hypothèse diagnostique d'une éventuelle amoebose tissulaire, quel(s) examen(s) biologique(s) devez-vous prescrire à ce malade ?`,
    [
      `L'examen parasitologique des urines`,
      `Les sérologies antiparasitaires`,
      `Le Scotch® test anal (ou test à la cellophane adhésive)`,
      `La recherche de paludisme dans le sang`,
      `La recherche de microfilaires cutanées`
    ],
    'B',
    [
      `Faux. La recherche parasitologique urinaire n'est pas adaptée à l'amoebose hépatique.`,
      `Vrai. La sérologie spécifique d'Entamoeba histolytica est particulièrement utile dans le diagnostic d'amoebose tissulaire.`,
      `Faux. Le Scotch test anal sert principalement au diagnostic d'oxyurose.`,
      `Faux selon la grille. La recherche de paludisme peut être indiquée devant une fièvre au retour de Guyane, mais ne confirme pas une amoebose tissulaire.`,
      `Faux. La recherche de microfilaires cutanées concerne certaines filarioses.`
    ]
  ),

  Q(14,
    `La radiographie pulmonaire montre une pneumopathie bilatérale évoquant une pneumopathie atypique. Quelle(s) bactérie(s) peut on suspecter devant ce tableau ?`,
    [
      `Chlamydophila pneumoniae`,
      `Le pneumocoque (Streptococcus pneumoniae)`,
      `La bacille de Koch (Mycobacteirum tuberculosis)`,
      `Le mycoplasme pulmonaire (Mycoplasma pneumoniae)`,
      `Chlamydophila psittaci`
    ],
    'ADE',
    [
      `Vrai. Chlamydophila pneumoniae peut provoquer une pneumonie atypique.`,
      `Faux selon la grille. Le pneumocoque provoque classiquement une pneumonie bactérienne typique, souvent lobaire.`,
      `Faux selon la grille. La tuberculose pulmonaire est une infection spécifique, non retenue parmi les causes classiques de pneumopathie atypique de cette question.`,
      `Vrai. Mycoplasma pneumoniae est une cause classique de pneumonie atypique.`,
      `Vrai. Chlamydophila psittaci peut provoquer une pneumonie atypique dans le cadre d'une psittacose.`
    ]
  ),

  Q(15,
    `Sans attente votre prescription, l'infirmière a prélevé un bilan sanguin, des hémocultures et des urines pour la recherche d'antigènes urinaires, qu'elle transmet aussitôt au laboratoire.

En principe, quelle(s) bactérie(s) peut(vent) être détectée(s) par la recherche d'antigénurie ?`,
    [
      `Chlamydophila pneumoniae`,
      `Le pneumocoque (Streptococcus pneumoniae)`,
      `Le bacille de Koch (Mycobacterium tuberculosis)`,
      `Le mycoplasme pulmonaire (Mycoplasma pneumoniae)`,
      `La légionelle (Legionella pneumophila)`
    ],
    'BE',
    [
      `Faux. Chlamydophila pneumoniae n'est pas recherchée habituellement par antigénurie.`,
      `Vrai. Il existe un test urinaire recherchant un antigène de Streptococcus pneumoniae.`,
      `Faux. Le diagnostic de tuberculose repose notamment sur des examens microbiologiques spécifiques.`,
      `Faux. L'antigénurie n'est pas utilisée en routine pour Mycoplasma pneumoniae.`,
      `Vrai. Le test antigénique urinaire de Legionella pneumophila est un examen diagnostique courant, principalement pour le sérogroupe 1.`
    ]
  ),

  Q(16,
    `Au final, c'est le diagnostic de pneumopathie à Legionella pneumophila (ou légionellose) qui est retenu. Concernant cette infection, quelles sont les réponses vraies ?`,
    [
      `Elle est de transmission inter-humaine`,
      `Elle peut être liée à une transmission zoonotique`,
      `Elle survient plus souvent chez les immunodéprimés`,
      `Elle présente une incidence recrudescente en période estivale`,
      `Elle est classiquement traitée par une céphalosporine`
    ],
    'CD',
    [
      `Faux. La légionellose est principalement acquise par inhalation d'aérosols d'eau contaminée, non par transmission interhumaine habituelle.`,
      `Faux. La légionellose est une infection d'origine environnementale, non une zoonose classique.`,
      `Vrai. L'immunodépression augmente le risque de légionellose.`,
      `Vrai. Une augmentation saisonnière des cas est observée notamment pendant l'été et le début de l'automne.`,
      `Faux. Le traitement repose notamment sur les macrolides ou les fluoroquinolones, et non sur les céphalosporines.`
    ]
  ),

  Q(17,
    `Mme T, 66ans, doit garder ses petits enfants pendant les prochaines vacances de Noël. Elle rapporte que, en hiver, "ils sont tout le temps enrhumés" et elle aimerait bien "échapper à leurs microbes". Que lui proposez-vous ?`,
    [
      `De la vacciner contre le coronavirus SARS-Cov-2`,
      `De la vacciner contre le virus respiratoire syncitial (VRS)`,
      `De la vacciner contre la grippe`,
      `Le port du masque de protection`,
      `La prise d'antibiotiques en prévention`
    ],
    'ABCD',
    [
      `Vrai. La vaccination contre le SARS-CoV-2 contribue à prévenir les formes graves de COVID-19.`,
      `Vrai selon la grille de 2025. La vaccination contre le VRS peut être proposée chez certaines personnes âgées selon les recommandations applicables.`,
      `Vrai. La vaccination antigrippale est recommandée chez les personnes de 65 ans et plus.`,
      `Vrai. Le port du masque diminue le risque de transmission des infections respiratoires.`,
      `Faux. Une antibioprophylaxie n'est pas indiquée pour prévenir les infections respiratoires virales courantes.`
    ]
  ),

  Q(18,
    `Si jamais vous souhaitez rechercher une infection respiratoire virale et réaliser un prélèvement à Mme T., quel prélèvement réalisez-vous ?`,
    [
      `Une expectoration induite`,
      `Un recueil des urines`,
      `Un écouvillonnage nasopharyngé`,
      `Une ponction veineuse`,
      `Un recueil des selles`
    ],
    'C',
    [
      `Faux. L'expectoration induite n'est pas le prélèvement de première intention pour rechercher les virus respiratoires courants.`,
      `Faux. Les urines ne sont pas le prélèvement adapté.`,
      `Vrai. L'écouvillonnage nasopharyngé permet la recherche de nombreux virus respiratoires par PCR.`,
      `Faux. Une ponction veineuse n'est pas le prélèvement de référence pour leur diagnostic direct.`,
      `Faux. L'examen des selles ne permet pas le diagnostic habituel de grippe ou de VRS.`
    ]
  ),

  Q(19,
    `Le prélèvement effectué est positif au virus Influenza. A propos du virus Influenza, quelles sont les réponses vraies ?`,
    [
      `Il s'agit d'un virus nu`,
      `Son génome est constitué de plusieurs segments distincts`,
      `Il est responsable d'épidémies saisonnières`,
      `La neuraminidase est la cible des antiviraux utilisés dans le traitement de la grippe`,
      `Le vaccin antigrippal injectable est un vaccin vivant atténué`
    ],
    'BCD',
    [
      `Faux. Les virus influenza sont des virus enveloppés.`,
      `Vrai. Leur génome est un ARN segmenté, avec huit segments pour les influenza A et B.`,
      `Vrai. Les virus influenza provoquent des épidémies saisonnières.`,
      `Vrai. Des antiviraux comme l'oseltamivir inhibent la neuraminidase virale.`,
      `Faux. Les vaccins antigrippaux injectables classiques sont inactivés.`
    ]
  ),

  Q(20,
    `Quel(s) micro-organisme(s) peut(vent) être responsable(s) de cette infection ?`,
    [
      `Le trichomonas (Trichomonas vaginalis)`,
      `La levure (Candida albicans)`,
      `Le gonocoque (Neisseria gonorrhoeae)`,
      `Chlamydia trachomatis`,
      `Le streptocoque du groupe B (Streptococcus agalactiae)`
    ],
    'ABE',
    [
      `Vrai. Trichomonas vaginalis peut provoquer une vulvovaginite avec leucorrhées.`,
      `Vrai. Candida albicans est une cause fréquente de vulvovaginite prurigineuse.`,
      `Faux selon la grille. Neisseria gonorrhoeae provoque surtout une cervicite dans ce cadre, plutôt qu'une vulvovaginite isolée.`,
      `Faux selon la grille. Chlamydia trachomatis provoque principalement une cervicite ou une infection génitale haute.`,
      `Vrai selon la grille. Streptococcus agalactiae peut être associé à certaines infections génitales basses, même s'il existe fréquemment à l'état de portage.`
    ]
  ),

  Q(21,
    `En interrogeant la patiente, vous apprenez qu'elle a eu un rapport sexuel non protégé avec un partenaire occasionnel. Parmi les étiologies d'infection génitale basse que vous envisagiez précédemment, laquelle paraît alors la plus probable ?`,
    [
      `Le trichomonas (Trichomonas vaginalis)`,
      `La levure (Candida albicans)`,
      `Le gonocoque (Neisseria gonorrhoeae)`,
      `Chlamydia trachomatis`,
      `Le streptocoque du groupe B (Streptococcus agalactiae)`
    ],
    'A',
    [
      `Vrai. Trichomonas vaginalis est un protozoaire responsable d'une infection sexuellement transmissible pouvant provoquer des leucorrhées et un prurit.`,
      `Faux. Candida albicans peut provoquer une vulvovaginite, mais n'est pas principalement transmis sexuellement.`,
      `Faux selon la grille. Le gonocoque peut être transmis sexuellement, mais le tableau clinique retenu oriente vers Trichomonas.`,
      `Faux selon la grille. Chlamydia trachomatis est une IST, mais provoque surtout une cervicite parfois asymptomatique.`,
      `Faux. Le streptocoque B est surtout un germe de portage digestif et vaginal.`
    ]
  ),

  Q(22,
    `Concernant le pathogène suspecté, quelle(s) est (sont) la (les) réponse(s) exacte(s) ?`,
    [
      `C'est une bactérie commensale de la flore vaginale`,
      `C'est une bactérie pathogène spécifique`,
      `C'est un virus`,
      `C'est un parasite`,
      `Il peut être pris en charge par un traitement spécifique`
    ],
    'DE',
    [
      `Faux. Trichomonas vaginalis n'est pas une bactérie commensale.`,
      `Faux. Trichomonas vaginalis est un protozoaire et non une bactérie.`,
      `Faux. Il ne s'agit pas d'un virus.`,
      `Vrai. Trichomonas vaginalis est un parasite protozoaire flagellé.`,
      `Vrai. La trichomonose est traitée notamment par des nitro-imidazolés, comme le métronidazole.`
    ]
  ),

  Q(23,
    `L'infection génitale basse a été correctement traitée. Plusieurs mois ont passé, et la patiente est maintenant enceinte. Elle s'interroge sur la problématique du portage vaginal du streptocoque du groupe B.

Concernant le streptocoque du groupe B (Streptococcus agalactiae), quelles sont les propositions exactes ?`,
    [
      `Il est aussi présent en portage digestif`,
      `Il est exclusivement responsable d'infection néonatale tardive`,
      `Il doit être dépisté en fin de grossesse`,
      `Il est principalement dépisté par écouvillonnage rectal`,
      `Il est traité par tétracyclines en cas de portage vaginal positif`
    ],
    'AC',
    [
      `Vrai. Streptococcus agalactiae peut coloniser le tube digestif et les voies génitales.`,
      `Faux. Il est responsable d'infections néonatales précoces et tardives.`,
      `Vrai. Le dépistage du portage vaginal du streptocoque B est réalisé en fin de grossesse.`,
      `Faux. Le dépistage ne repose pas uniquement sur un écouvillonnage rectal ; le prélèvement vaginal est essentiel.`,
      `Faux. Une antibioprophylaxie per-partum adaptée repose principalement sur une bêta-lactamine.`
    ]
  ),

  Q(24,
    `Quel diagnostic suspectez-vous ?`,
    [
      `Thrombose veineuse profonde (TVP)`,
      `Dermohypodermite bactérienne non nécrosante`,
      `Ecthyma`,
      `Syndrome de Stevens-Johnson`,
      `Fasciite nécrosante`
    ],
    'B',
    [
      `Faux. Une TVP peut provoquer une jambe douloureuse et œdématiée, mais le placard inflammatoire bien limité avec fièvre évoque davantage un érysipèle.`,
      `Vrai. La présentation est caractéristique d'une dermohypodermite bactérienne non nécrosante, ou érysipèle.`,
      `Faux. L'ecthyma provoque des lésions ulcérées profondes.`,
      `Faux. Le syndrome de Stevens-Johnson est une toxidermie grave avec atteinte cutanéo-muqueuse étendue.`,
      `Faux. Aucun signe caractéristique de nécrose profonde n'est décrit dans l'énoncé.`
    ]
  ),

  Q(25,
    `Quel est le microorganisme le plus probablement impliqué ?`,
    [
      `Le staphylocoque doré (Staphylococcus aureus)`,
      `Le staphylocoque à coagulase négative`,
      `Le streptocoque du groupe B (Streptococcus agalactiae)`,
      `Le streptocoque du groupe A (Streptococcus pyogenes)`,
      `Aucun des microorganismes ci-dessus`
    ],
    'D',
    [
      `Faux. Staphylococcus aureus provoque notamment des infections cutanées purulentes, mais n'est pas l'étiologie classique principale de l'érysipèle.`,
      `Faux. Les staphylocoques à coagulase négative sont surtout des bactéries commensales et des pathogènes opportunistes.`,
      `Faux selon la grille. Le streptocoque B peut parfois provoquer des infections cutanées, mais n'est pas l'agent le plus classique.`,
      `Vrai. Streptococcus pyogenes est un agent majeur des dermohypodermites bactériennes non nécrosantes.`,
      `Faux. La proposition D correspond à l'agent attendu.`
    ]
  ),

  Q(26,
    `Quel est l'antibiotique de première intention à administrer en l'absence de quelconque allergie médicamenteuse connue ?`,
    [
      `L'amoxicilline (pénicilline A)`,
      `L'association amoxicilline-acide clavulanique (pénicilline A + inhibiteur de pénicillinase)`,
      `La clindamycine (lincosamide)`,
      `La méticilline (pénicilline M)`,
      `La pristinamycine (syngergistine)`
    ],
    'A',
    [
      `Vrai. L'amoxicilline constitue le traitement antibiotique de première intention d'une dermohypodermite bactérienne non nécrosante typique.`,
      `Faux. L'ajout d'acide clavulanique n'est pas nécessaire dans cette situation streptococcique habituelle.`,
      `Faux. La clindamycine peut avoir des indications particulières, mais n'est pas le premier choix ici.`,
      `Faux. La méticilline vise surtout les staphylocoques sensibles.`,
      `Faux. La pristinamycine constitue une option dans certaines situations, notamment selon les allergies.`
    ]
  ),

  Q(27,
    `Quelle porte d'entrée suspectez-vous ?`,
    [
      `Porte d'entrée aérienne`,
      `Porte d'entrée cutanée`,
      `Porte d'entrée digestive`,
      `Porte d'entrée génitale`,
      `Transmission par voie hématogène`
    ],
    'B',
    [
      `Faux. Une transmission respiratoire n'explique pas habituellement cet érysipèle.`,
      `Vrai. L'intertrigo interorteils macéré constitue une porte d'entrée cutanée classique.`,
      `Faux. Une porte d'entrée digestive n'est pas l'hypothèse retenue.`,
      `Faux. Une porte d'entrée génitale n'est pas suggérée.`,
      `Faux. L'infection est probablement liée à une inoculation locale à travers une lésion cutanée.`
    ]
  ),

  Q(28,
    `Vous recevez une patiente dans votre cabinet médical pour un bilan sérologique de début de grossesse. Le laboratoire de parasitologie vous adresse les résultats suivants :

Diagnostic, dépistage de la toxoplasmose (bilan sérologique)
Nombre de semaines d'aménorrhées : 12
Prélèvement : sérum

Dosage des IgG : 0 UI/mL (seuil de positivité ≥ 8 UI/mL)
Dosage des IgM : 0,02 (seuil de positivité ≥ 0,65)

En prenant en compte les valeurs seuils affichées après les résultats de chaque analyse, quelle(s) est (sont) la (les) conclusion(s) de votre interprétation du bilan biologique ci-dessus ?`,
    [
      `La patiente est séronégative pour la toxoplasmose`,
      `La patiente présente des titres sérologiques élevés pour la toxoplasmose`,
      `La patiente n'a jamais été en contact avec l'agent de la toxoplasmose`,
      `La patiente présente un bilan sérologique en faveur d'une réaction croisée avec un autre agent infectieux`,
      `La patiente présente un bilan sérologique en faveur d'une contamination toxoplasmique ancienne`
    ],
    'AC',
    [
      `Vrai. Les concentrations d'IgG et d'IgM sont inférieures aux seuils de positivité.`,
      `Faux. Les deux marqueurs sérologiques sont négatifs.`,
      `Vrai selon la grille. La séronégativité est interprétée ici comme l'absence de contact antérieur détectable avec Toxoplasma gondii.`,
      `Faux. Aucun résultat sérologique positif ne suggère une réaction croisée.`,
      `Faux. Une contamination ancienne entraîne habituellement la présence d'IgG spécifiques.`
    ]
  ),

  Q(29,
    `Par quel moyen s'opère la transmission du schistomose (ou bilharzie) hépato-digestif (Schistosoma mansoni) ?`,
    [
      `Par piqûre de moustique`,
      `Par consommation de cresson sauvage`,
      `Par transmission transcutanée`,
      `Par transmission interhumaine aéroportée`,
      `Par contact cutané étroit et prolongé`
    ],
    'C',
    [
      `Faux. Les schistosomes ne sont pas transmis par des moustiques.`,
      `Faux. Le cresson sauvage est notamment associé à la fasciolose.`,
      `Vrai. Les cercaires pénètrent activement la peau lors d'un contact avec de l'eau douce contaminée.`,
      `Faux. La schistosomose ne se transmet pas par voie respiratoire.`,
      `Faux. Le contact peau à peau n'est pas le mode habituel de transmission.`
    ]
  ),

  Q(30,
    `Parmi les micro-organismes suivants, lequel(s) est (sont) classiquement responsable(s) d'infection à manifestations cutanées ou muqueuses ?`,
    [
      `Le staphylocoque doré (Staphylococcus aureus)`,
      `Le pneumocoque (Streptococcus pneumoniae)`,
      `Le tréponème pâle (Treponema pallidum)`,
      `Le virus Herpes (HSV)`,
      `Le sarcopte de la gale (Sarcoptes scabiei)`
    ],
    'ACDE',
    [
      `Vrai. Staphylococcus aureus peut provoquer des infections cutanées purulentes et des infections des tissus mous.`,
      `Faux selon la grille. Le pneumocoque est principalement responsable d'infections respiratoires ou invasives.`,
      `Vrai. Treponema pallidum provoque notamment des lésions cutanéo-muqueuses de syphilis.`,
      `Vrai. HSV provoque des lésions vésiculeuses des muqueuses et de la peau.`,
      `Vrai. Sarcoptes scabiei est responsable de la gale, parasitose cutanée prurigineuse.`
    ]
  ),

  Q(31,
    `Quelle(s) infection(s) peut(vent) classiquement entrainer une éosinophilie sanguine ?`,
    [
      `La toxoplasmose`,
      `La pédiculose`,
      `La schistosomose (ou bilharziose)`,
      `L'anguillulose (ou strongyloïdose)`,
      `La candidémie (ou fongémie à levures du genre Candida)`
    ],
    'CD',
    [
      `Faux. La toxoplasmose est une protozoose sans hyperéosinophilie caractéristique.`,
      `Faux. La pédiculose n'est pas une cause classique d'hyperéosinophilie sanguine.`,
      `Vrai. La schistosomose est une helminthiase pouvant provoquer une hyperéosinophilie.`,
      `Vrai. L'anguillulose est une helminthiase fréquemment associée à une hyperéosinophilie.`,
      `Faux. Une candidémie ne provoque pas habituellement d'hyperéosinophilie.`
    ]
  ),

  Q(32,
    `Quel(s) micro-organisme(s) pathogène(s) peut(vent) être mis en évidence par l'analyse d'un fluide de lavage broncho-alvéolaire (LBA) ?`,
    [
      `Le pneumocyste (Pneumocystis jirovecii)`,
      `La moisissure aspergillaire (Aspergillus fumigatus)`,
      `Le champignon dermatophyte (Microsporum canis)`,
      `Le pneumocoque (Streptococcus pneumoniae)`,
      `Le cryptocoque (Cryptococcus neoformans)`
    ],
    'ABDE',
    [
      `Vrai. Pneumocystis jirovecii peut être détecté dans le LBA par PCR ou microscopie.`,
      `Vrai. Aspergillus fumigatus peut être recherché dans les prélèvements respiratoires profonds.`,
      `Faux. Microsporum canis provoque principalement des dermatophyties.`,
      `Vrai. Streptococcus pneumoniae peut être identifié sur un prélèvement respiratoire profond.`,
      `Vrai. Cryptococcus neoformans peut être retrouvé dans les prélèvements pulmonaires.`
    ]
  ),

  Q(33,
    `Quel micro-organisme est responsable de syndrome de larva migrans cutanée ou larbish ?`,
    [
      `Le ténia ou ver solitaire (Taenia sp.)`,
      `L'anguillule ou strongle (Strongyloides stercoralis)`,
      `Le toxoplasme (Toxoplasma gondii)`,
      `L'ankylostome du chien (Ancylostoma sp.)`,
      `Le champignon dermatophyte (Trichophyton rubrum)`
    ],
    'D',
    [
      `Faux. Taenia est un cestode intestinal.`,
      `Faux. Strongyloides stercoralis provoque l'anguillulose et peut entraîner une larva currens, distincte de la larva migrans cutanée classique.`,
      `Faux. Toxoplasma gondii ne provoque pas de larva migrans cutanée.`,
      `Vrai. Les larves d'ankylostomes animaux peuvent pénétrer superficiellement la peau et provoquer une larva migrans cutanée.`,
      `Faux. Trichophyton rubrum provoque une infection dermatophytique.`
    ]
  ),

  Q(34,
    `Quelle(s) parasitose(s) peut(vent) être acquise(s) en France métropolitaine ?`,
    [
      `L'ankylostomose à Necator americanus`,
      `La fasciolose (ou distomatose ou maladie à grande douve du foie) à Fasciola hepatica`,
      `La gale (ou scabiose) à Sarcoptes scabiei`,
      `La leishmaniose viscérale à Leishmania infantum`,
      `La toxoplasmose à Toxoplasma gondii`
    ],
    'BCDE',
    [
      `Faux selon la grille. Necator americanus est principalement rencontré dans les zones tropicales et subtropicales.`,
      `Vrai. Fasciola hepatica est présente en France et peut être transmise par certaines plantes aquatiques contaminées.`,
      `Vrai. La gale peut être contractée en France métropolitaine.`,
      `Vrai. Leishmania infantum est présente dans certaines régions méditerranéennes françaises.`,
      `Vrai. La toxoplasmose peut être acquise en France métropolitaine.`
    ]
  ),

  Q(35,
    `Concernant l'agent infectieux responsable de la tuberculose, quelle(s) est (sont) la (les) réponse(s) exacte(s) ?`,
    [
      `L'agent impliqué est très majoritairement le bacille de Koch (Mycobacterium tuberculosis)`,
      `L'agent responsable est un bacille acido-alcoolo-résistant (B.A.A.R.)`,
      `L'agent impliqué est colorable par la coloration de Gram standard`,
      `Le délai moyen de positivité des cultures est de 8 à 10 jours en milieu liquide`,
      `L'agent responsable se transmet par voie aérienne respiratoire`
    ],
    'ABDE',
    [
      `Vrai. Mycobacterium tuberculosis est le principal agent de la tuberculose humaine.`,
      `Vrai. Les mycobactéries sont des bacilles acido-alcoolo-résistants en raison de leur paroi riche en lipides.`,
      `Faux. La coloration de Gram standard est peu adaptée à la visualisation des mycobactéries.`,
      `Vrai selon la grille. Les cultures liquides permettent de raccourcir les délais de détection des mycobactéries.`,
      `Vrai. La tuberculose pulmonaire contagieuse se transmet par voie aérienne.`
    ]
  ),

  Q(36,
    `Quels sont les micro-organismes vis à vis desquels la désinfection des mains par friction avec un produit hydroalcoolique (PHA) est habituellement efficace ?`,
    [
      `Le sarcopte de la gale ou scabiose (Sarcoptes scabiei)`,
      `Le virus de la grippe`,
      `Les staphylocoques (Staphylococcus sp.)`,
      `Clostridioides difficile`,
      `Le virus de l'hépatite C (VHC)`
    ],
    'BCE',
    [
      `Faux. La friction hydroalcoolique n'est pas efficace pour éliminer le sarcopte de la gale.`,
      `Vrai. Les solutions hydroalcooliques sont efficaces contre les virus grippaux enveloppés.`,
      `Vrai. Elles sont efficaces contre les staphylocoques.`,
      `Faux. Les spores de Clostridioides difficile résistent aux produits hydroalcooliques usuels.`,
      `Vrai. Le VHC est un virus enveloppé sensible aux produits hydroalcooliques.`
    ]
  ),

  Q(37,
    `Quelles sont les propositions vraies concernant les frictions des mains avec les produits hydroalcooliques (PHA) ?`,
    [
      `Elles sont réservées aux épidémies de gastro-entérites aiguës (GEA)`,
      `Elles sont efficaces sur les bactéries multi et hautement résistantes aux antibiotiques (BMR-BHR)`,
      `Elles offrent une meilleure tolérance cutanée sur les mains que les savons`,
      `Leur utilisation intensive peut contribuer à une alcoolémie élevée`,
      `Elles permettent de diminuer les infections associées aux soins (IAS)`
    ],
    'BCE',
    [
      `Faux. La friction hydroalcoolique est une mesure de routine d'hygiène des mains dans les soins.`,
      `Vrai. La résistance aux antibiotiques ne signifie pas une résistance aux produits hydroalcooliques.`,
      `Vrai. Une formulation adaptée est généralement mieux tolérée que des lavages répétés au savon.`,
      `Faux. L'utilisation cutanée normale ne provoque pas d'alcoolémie élevée.`,
      `Vrai. L'hygiène des mains contribue à diminuer les infections associées aux soins.`
    ]
  ),

  Q(38,
    `Quelles sont les propositions vraies concernant le port de gants en service de soin ?`,
    [
      `Il est systématique en cas de contact avec la peau lésée ou une muqueuse de patient`,
      `Il remplace l'hygiène des mains par friction avec les produits hydroalcooliques (PHA)`,
      `Il est indiqué en cas de lésions cutanées des mains du soignant`,
      `Il est indiqué si geste à risque d'accident exposition au sang (AES)`,
      `Il est indiqué si risque de contact avec les liquides biologiques`
    ],
    'ACDE',
    [
      `Vrai. Les contacts avec une muqueuse ou une peau lésée nécessitent des gants adaptés.`,
      `Faux. Le port de gants ne dispense jamais de l'hygiène des mains.`,
      `Vrai. Des lésions cutanées des mains du soignant peuvent justifier une protection adaptée.`,
      `Vrai. Les gestes exposant au sang nécessitent des mesures de protection, dont le port de gants.`,
      `Vrai. Les gants sont indiqués en cas de risque de contact avec des liquides biologiques.`
    ]
  ),

  Q(39,
    `Quelles sont les propositions vraies concernant les précautions complémentaires contact (PCC) ?`,
    [
      `Leur prescription médicale est obligatoire`,
      `L'information du patient est obligatoire et à tracer dans le dossier patient informatisé (DPI)`,
      `Elles sont indiquées si infection à staphylocoque doré (Staphylococcus aureus) sensible à la méticilline (SASM)`,
      `Elles sont indiquées en cas de diarrhée infectieuse`,
      `L'hygiène des mains par produit hydro-alcoolique (PHA) est à renforcer`
    ],
    'ABDE',
    [
      `Vrai selon la grille. La mise en place des PCC s'inscrit dans une procédure de prescription et de traçabilité.`,
      `Vrai. Le patient doit être informé des précautions mises en place et cette information doit être tracée.`,
      `Faux. Une infection à SASM ne nécessite pas systématiquement de précautions complémentaires contact.`,
      `Vrai selon la grille. Les diarrhées infectieuses peuvent justifier des PCC afin de limiter la transmission.`,
      `Vrai selon la grille. L'hygiène des mains doit être renforcée, avec des modalités adaptées à l'agent infectieux, notamment en cas de spores.`
    ]
  ),

  Q(40,
    `Concernant le virus de l'hépatite A (VHA) quelles sont les réponses exactes ?`,
    [
      `C'est un virus fragile`,
      `Il est responsable de l'hépatite chronique`,
      `C'est un virus enveloppé`,
      `Il peut causer des hépatites fulminantes`,
      `Il peut être prévenu par la vaccination`
    ],
    'DE',
    [
      `Faux. Le VHA est un virus non enveloppé relativement résistant dans l'environnement.`,
      `Faux. Le VHA ne provoque pas d'infection chronique.`,
      `Faux. Le VHA est un virus à ARN non enveloppé.`,
      `Vrai. Une hépatite A peut exceptionnellement évoluer vers une hépatite fulminante.`,
      `Vrai. Il existe un vaccin efficace contre l'hépatite A.`
    ]
  ),

  Q(41,
    `Concernant le virus de l'hépatite E (VHE), quelles sont les réponses exactes ?`,
    [
      `Il peut être transmis par consommation de viande de porc`,
      `Il peut être responsable d'hépatite chronique`,
      `Il est transmissible par voie sexuelle`,
      `Il fait l'objet d'une déclaration obligatoire (DO) en cas d'infection aiguë`,
      `L'infection d'immunoglobulines spécifiques est recommandé suite à un contage`
    ],
    'AB',
    [
      `Vrai. Le VHE peut être transmis par consommation de viande de porc contaminée insuffisamment cuite.`,
      `Vrai. Une infection chronique par le VHE peut survenir chez les patients immunodéprimés.`,
      `Faux. La transmission sexuelle n'est pas une voie habituelle de contamination.`,
      `Faux. L'hépatite E aiguë ne relève pas de la déclaration obligatoire générale indiquée ici.`,
      `Faux. Il n'existe pas de recommandation habituelle d'administration d'immunoglobulines spécifiques après exposition au VHE.`
    ]
  ),

  Q(42,
    `Comment réalise-t-on le diagnostic de certitude d'une encéphalite herpétique à virus Herpes simplex 1 (HSV-1) ?`,
    [
      `Par technique de PCR (polymerase chain reaction) dans le liquide cérébro-spinal (LCS)`,
      `Par recherche des antigènes viraux dans le liquide cérébro-spinal (LCS)`,
      `Par recherche des anticorps anti-HSV-1 dans le sang`,
      `Sur la seule base d'arguments cliniques`,
      `Par recherche des anticorps anti-HSV-1 dans le liquide cérébro-spinal (LCS)`
    ],
    'A',
    [
      `Vrai. La PCR HSV sur LCS constitue l'examen diagnostique de référence de l'encéphalite herpétique.`,
      `Faux. La recherche antigénique dans le LCS n'est pas la méthode de référence.`,
      `Faux. La sérologie sanguine ne permet pas de confirmer une encéphalite herpétique active.`,
      `Faux. Les arguments cliniques seuls sont insuffisants pour confirmer l'étiologie.`,
      `Faux selon la grille. La recherche d'anticorps intrathécaux n'est pas l'examen initial de référence.`
    ]
  ),

  Q(43,
    `Concernant la prise en charge thérapeutique d'une suspicion clinique forte d'encéphalite herpétique à virus herpes simplex ? (HSV-1), quelle(s) est (sont) la (les) réponse(s) exacte(s) ?`,
    [
      `C'est une urgence vitale`,
      `Le traitement doit être débuté en priorité avant même la confirmation par le laboratoire de l'étiologie infectieuse`,
      `La thérapie comprend l'administration de zidovudine (AZT) par voie intraveineuse (IV)`,
      `Le traitement précoce permet de réduire les risques de séquelles neurologiques`,
      `La thérapie doit comprendre d'emblée une antibiothérapie large spectre`
    ],
    'ABD',
    [
      `Vrai. L'encéphalite herpétique est une urgence diagnostique et thérapeutique.`,
      `Vrai. L'aciclovir intraveineux doit être débuté rapidement sans attendre les résultats de PCR.`,
      `Faux. La zidovudine est un antirétroviral utilisé contre le VIH, et non contre HSV.`,
      `Vrai. Un traitement antiviral précoce diminue la mortalité et le risque de séquelles neurologiques.`,
      `Faux selon la grille. Une antibiothérapie peut être nécessaire selon les diagnostics différentiels, mais n'est pas systématique pour une encéphalite herpétique confirmée.`
    ]
  ),

  Q(44,
    `Quelle(s) est (sont) la (les) proposition(s) vraie(s) à propos des méthodes de diagnostic en virologie ?`,
    [
      `La technique PCR (polymerase chain reaction) recherchant le génome du virus de l'hépatite B (VHB) est une méthode de diagnostic direct`,
      `La recherche de l'anticorps anti-bc est une méthode de diagnostic direct`,
      `La RT-PCR (reverse transcriptase - polymerase chain reaction) à la recherche du génome viral est une technique sensible`,
      `L'immunoprécipitation par Western blot (WB) permet de détecter des antigènes viraux du virus de l'immunodéficience humaine (VIH)`,
      `La recherche d'anticorps d'isotype IgG spécifiques permet de déterminer le statut immunitaire vis-à-vis d'un virus`
    ],
    'ACE',
    [
      `Vrai. La détection du génome viral par PCR constitue un diagnostic direct.`,
      `Faux. La recherche d'anticorps anti-HBc est un diagnostic indirect sérologique.`,
      `Vrai. La RT-PCR est une méthode très sensible de détection des génomes viraux à ARN.`,
      `Faux selon la grille. Le Western blot sérologique détecte généralement les anticorps dirigés contre des protéines virales.`,
      `Vrai. La présence d'IgG spécifiques peut renseigner sur un contact antérieur ou une immunisation.`
    ]
  ),

  Q(45,
    `Concernant les infections virales suivantes, laquelle (lesquelles) peut(vent) être prévenue(s) par une vaccination ?`,
    [
      `L'infection par le virus de la rougeole`,
      `L'infection par le virus de l'immunodéficience humaine (VIH)`,
      `L'infection par le rotavirus`,
      `L'infection par le virus de l'hépatite C (VHC)`,
      `L'infection par certains papillomavirus humains (HPV)`
    ],
    'ACE',
    [
      `Vrai. Le vaccin ROR permet de prévenir la rougeole.`,
      `Faux. Il n'existe pas de vaccin préventif contre le VIH disponible en pratique courante.`,
      `Vrai. La vaccination orale contre le rotavirus prévient notamment les gastro-entérites sévères.`,
      `Faux. Aucun vaccin préventif contre le VHC n'est disponible en pratique courante.`,
      `Vrai. Les vaccins HPV préviennent les infections dues à plusieurs génotypes de papillomavirus.`
    ]
  ),

  Q(46,
    `Concernant le virus des oreillons, quelles sont les réponses exactes ?`,
    [
      `Il se transmet par voie respiratoire`,
      `L'infection peut se compliquer par une parotidite bilatérale`,
      `L'infection peut se compliquer par une atteinte testiculaire`,
      `L'infection peut être prévenue par un vaccin protéique sous-unitaire`,
      `Une hypercalcémie peut être associée à l'infection`
    ],
    'ABC',
    [
      `Vrai. Le virus des oreillons se transmet notamment par les sécrétions respiratoires.`,
      `Vrai. La parotidite, parfois bilatérale, est une manifestation caractéristique des oreillons.`,
      `Vrai. Les oreillons peuvent se compliquer d'une orchite, notamment après la puberté.`,
      `Faux. Le vaccin contre les oreillons est un vaccin vivant atténué.`,
      `Faux. L'hypercalcémie n'est pas une manifestation caractéristique des oreillons.`
    ]
  ),

  Q(47,
    `Concernant les Papillomavirus humains (HPV), quelles sont les réponses exactes ?`,
    [
      `Ils infectent les cellules germinales de la couche basale des épithéliums malpigiens`,
      `Certains HPV ont un tropisme pour le système nerveux central`,
      `Les HPV de type 6 et 11 sont responsables de la majorité des cancers du col de l'utérus`,
      `Le dépistage primaire des HPV à haut risque est préconisé en France à partir de 30 ans`,
      `Le frottis cervico-utérin pour recherche des HPV à haut risque est réalisé avec une cytobrosse`
    ],
    'ADE',
    [
      `Vrai selon la grille. Les HPV infectent les cellules basales des épithéliums malpighiens, notamment les cellules prolifératives.`,
      `Faux. Les HPV ont principalement un tropisme cutané et muqueux.`,
      `Faux. Les HPV 6 et 11 sont surtout responsables de condylomes ; les HPV 16 et 18 sont particulièrement oncogènes.`,
      `Vrai. Le dépistage primaire par test HPV à haut risque est recommandé chez les femmes à partir de 30 ans.`,
      `Vrai. Le prélèvement cervico-utérin peut être réalisé avec une cytobrosse adaptée.`
    ]
  ),

  Q(48,
    `Concernant l'infection par le virus de la rougeole, quelles sont les réponses exactes ?`,
    [
      `Un énanthème sur la face interne des joues peut être observé`,
      `Les lésions cutanées sont vésiculeuses`,
      `Des complications neurologiques tardives sont possibles`,
      `Le diagnostic virologique repose sur la recherche du virus dans la peau`,
      `Une déclaration obligatoire (DO) doit être établie en cas de diagnostic de primo-infection`
    ],
    'ACE',
    [
      `Vrai. Le signe de Koplik correspond à un énanthème caractéristique de la muqueuse jugale.`,
      `Faux. La rougeole provoque une éruption maculopapuleuse et non vésiculeuse.`,
      `Vrai. Une panencéphalite sclérosante subaiguë peut survenir plusieurs années après l'infection.`,
      `Faux. Le diagnostic repose notamment sur la PCR respiratoire ou la sérologie.`,
      `Vrai. La rougeole est une maladie à déclaration obligatoire en France.`
    ]
  ),

  Q(49,
    `Concernant le virus d'Epstein Barr (EBV), quelles sont les réponses exactes ?`,
    [
      `Il fait partie de la famille des Hepadnaviridae`,
      `Les cellules cibles du virus sont les polynucléaires neutrophiles (PNN)`,
      `Il est responsable d'un syndrome mononucléosique`,
      `Les anticorps de nature IgM anti-VCA (antigène de la capside virale) sont classiquement présents lors de la primo-infection`,
      `Les anticorps anti-EBNA (Epstein-Barr virus nuclear antigen 1) sont détectables à la phase de convalescence`
    ],
    'CDE',
    [
      `Faux. L'EBV appartient à la famille des Herpesviridae.`,
      `Faux. L'EBV infecte principalement les lymphocytes B et certaines cellules épithéliales.`,
      `Vrai. La primo-infection peut provoquer une mononucléose infectieuse.`,
      `Vrai. Les IgM anti-VCA sont caractéristiques de la phase aiguë de primo-infection.`,
      `Vrai. Les anticorps anti-EBNA apparaissent secondairement et persistent durablement.`
    ]
  ),

  Q(50,
    `Six mois après vaccination contre le virus de l'hépatite B (VHB) chez un sujet qui n'a jamais été en contact avec le virus, que s'attend-on à détecter dans son sérum ?`,
    [
      `L'antigène HBe`,
      `Des protéines d'enveloppe du virus de l'hépatite B (AgHBs)`,
      `Des anticorps anti-HBs`,
      `Des anticorps anti-HBc`,
      `Des fragments de génomes du VHB`
    ],
    'C',
    [
      `Faux. L'AgHBe est un marqueur associé à certaines phases d'infection virale active.`,
      `Faux. L'AgHBs ne doit pas persister six mois après une vaccination chez une personne non infectée.`,
      `Vrai. Le vaccin contre le VHB induit la production d'anticorps anti-HBs protecteurs.`,
      `Faux. Les anticorps anti-HBc témoignent d'un contact naturel avec le virus, pas de la vaccination seule.`,
      `Faux. La vaccination ne provoque pas de virémie VHB.`
    ]
  ),

  Q(51,
    `Concernant les gastro-entérites virales, quelles sont les réponses exactes ?`,
    [
      `Elles sont liées à des virus à transmission oro-fécale`,
      `Elles sont d'incubation longue`,
      `Elles sont très fréquentes en période hivernale en France`,
      `Elles provoquent des diarrhées aqueuses glairo-sanglantes`,
      `Elles doivent être traitées par des antiviraux`
    ],
    'AC',
    [
      `Vrai. De nombreux virus de gastro-entérite sont transmis par voie féco-orale.`,
      `Faux. Leur incubation est généralement courte.`,
      `Vrai. Les gastro-entérites virales présentent une forte saisonnalité hivernale en France.`,
      `Faux. Elles provoquent typiquement des diarrhées aqueuses non sanglantes.`,
      `Faux. Le traitement repose principalement sur la réhydratation et la prise en charge symptomatique.`
    ]
  ),

  Q(52,
    `Parmi le(s) virus suivant(s), quel(s) est (sont) celui (ceux) responsable(s) de malformation foetale lorsqu'une primo-infection a lieu pendant la grossesse ?`,
    [
      `Le virus de la varicelle et du zona (VZV)`,
      `Le virus d'Epstein-Barr (EBV)`,
      `Le cytomégalovirus (CMV)`,
      `Le virus de la rubéole`,
      `Le virus de l'immunodéficience humaine (VIH)`
    ],
    'ACD',
    [
      `Vrai. Une varicelle maternelle peut provoquer un syndrome de varicelle congénitale avec malformations.`,
      `Faux. L'EBV n'est pas une cause classique de malformations congénitales.`,
      `Vrai. Le CMV congénital peut provoquer des anomalies cérébrales, auditives et d'autres atteintes.`,
      `Vrai. La rubéole congénitale peut entraîner des malformations cardiaques, oculaires et auditives.`,
      `Faux. Le VIH peut se transmettre de la mère à l'enfant, mais n'est pas un virus tératogène classique.`
    ]
  ),

  Q(53,
    `Lors du bilan de début de grossesse de Mme XV, le test de dépistage du virus de l'immunodéficience humaine (VIH) est positif avec un ratio à 2,3 pour un seuil à 1,0 (technique ELISA automatisée).

Quelle est la conduite à tenir dans l'immédiat suite à ce résultat ?`,
    [
      `Il faut demander au médecin généraliste de procéder rapidement à l'annonce de la séropositivité`,
      `Un traitement antiviral est à commencer sans délai`,
      `Un Western-Blot devra être réalisé pour la confirmation sérologique`,
      `Un second prélèvement doit être analysé par le laboratoire pour vérification`,
      `Des anomalies foetales doivent être recherchées à l'échographie`
    ],
    'CD',
    [
      `Faux. Un dépistage positif doit être confirmé avant l'annonce d'un diagnostic définitif.`,
      `Faux selon la grille. Un traitement doit être instauré rapidement après confirmation, mais le résultat isolé d'ELISA nécessite une vérification.`,
      `Vrai. Une technique de confirmation sérologique est nécessaire après un dépistage réactif.`,
      `Vrai. Un deuxième prélèvement permet notamment de vérifier l'identité biologique et le résultat.`,
      `Faux. Le VIH ne provoque pas habituellement un syndrome malformatif fœtal caractéristique.`
    ]
  ),

  Q(54,
    `Quelles sont les différentes classes de médicaments dans le traitement de l'infection par le virus de l'immunodéficience humaine (VIH) ?`,
    [
      `Les inhibiteurs nucléosidiques de la transcriptase inverse`,
      `Les activateurs de décapsidation`,
      `Les interférons de type alpha`,
      `Les inhibiteurs de protéase`,
      `Les inhibiteurs d'intégrase`
    ],
    'ADE',
    [
      `Vrai. Les inhibiteurs nucléosidiques de la transcriptase inverse font partie des antirétroviraux.`,
      `Faux. Les médicaments ciblant la capside du VIH sont notamment des inhibiteurs de ses fonctions, pas des activateurs de décapsidation.`,
      `Faux. Les interférons alpha ne constituent pas une classe de référence du traitement antirétroviral.`,
      `Vrai. Les inhibiteurs de protéase empêchent la maturation correcte des particules virales.`,
      `Vrai. Les inhibiteurs d'intégrase empêchent l'intégration de l'ADN viral dans le génome cellulaire.`
    ]
  ),

  Q(55,
    `Concernant la charge virale du virus de l'immunodéficience humaine (VIH), quelles sont les réponses exactes ?`,
    [
      `C'est un test de quantification de l'ARN viral`,
      `C'est un marqueur d'évaluation de la réplication virale`,
      `C'est le test de première intention utilisé dans le dépistage`,
      `Elle est mesurée au cours du suivi pendant le traitement anti-VIH`,
      `Elle est mesurée par une technique d'amplification génique par RT-PCR (reverse transcriptase - polymerase chain reaction)`
    ],
    'ABDE',
    [
      `Vrai. La charge virale plasmatique mesure la quantité d'ARN du VIH.`,
      `Vrai. Elle constitue un marqueur de la réplication virale.`,
      `Faux. Le dépistage initial repose habituellement sur un test immunologique combiné.`,
      `Vrai. Le suivi de la charge virale permet d'évaluer la réponse au traitement antirétroviral.`,
      `Vrai. La RT-PCR quantitative constitue une technique de mesure de l'ARN viral.`
    ]
  ),

  Q(56,
    `Pour quelle(s) infection(s), la recherche des anticorps spécifiques d'isotype IgM constitue-t-elle un élément clef du diagnostic biologique ?`,
    [
      `Une primo-infection par le virus de la rubéole`,
      `Une primo-infection par le virus de l'hépatite C (VHC)`,
      `Une infection génitale par l'Herpes Simplex Virus de type 1 (HSV-1)`,
      `Une primo-infection par le cytomégalovirus (CMV)`,
      `Une infection en cours par le coronavirus SARS-Cov-2`
    ],
    'AD',
    [
      `Vrai. Les IgM anti-rubéole peuvent contribuer au diagnostic d'une primo-infection récente.`,
      `Faux. Le diagnostic d'infection aiguë par le VHC repose notamment sur la recherche de l'ARN viral.`,
      `Faux. Le diagnostic d'herpès génital repose principalement sur une PCR lésionnelle.`,
      `Vrai. Les IgM anti-CMV participent à l'exploration d'une primo-infection, avec notamment l'avidité des IgG.`,
      `Faux. Le diagnostic d'une infection active par SARS-CoV-2 repose principalement sur la détection directe du virus.`
    ]
  ),

  Q(57,
    `Parmi les bactéries suivantes, lesquelles sont des bacilles à Gram négatif ?`,
    [
      `La bartonelle des griffes du chat (Bartonella henselae)`,
      `Francisella tularensis`,
      `Haemophilus influenzae`,
      `Kingela kingae`,
      `La pasteurelle (Pasteurella multocida)`
    ],
    'ABCDE',
    [
      `Vrai. Bartonella henselae est un petit bacille à Gram négatif.`,
      `Vrai. Francisella tularensis est un coccobacille à Gram négatif.`,
      `Vrai. Haemophilus influenzae est un petit coccobacille à Gram négatif.`,
      `Vrai selon la grille. Kingella kingae est un coccobacille à Gram négatif, appartenant aux Neisseriaceae.`,
      `Vrai. Pasteurella multocida est un petit coccobacille à Gram négatif.`
    ]
  ),

  Q(58,
    `Parmi les propositions suivantes, quelles sont celles qui correspondent à des caractéristiques propres à l'agent pyocyanique (Pseudomonas aeruginosa) ?`,
    [
      `Bacille à Gram négatif`,
      `Espèce de culture facile sur milieu ordinaire`,
      `Espèce naturellement résistante à l'amoxicilline`,
      `Espèce productrice d'oxydase`,
      `Espèce fréquemment responsable d'infection urinaire communautaire`
    ],
    'ABCD',
    [
      `Vrai. Pseudomonas aeruginosa est un bacille à Gram négatif.`,
      `Vrai. Il pousse sur de nombreux milieux de culture ordinaires.`,
      `Vrai. Pseudomonas aeruginosa est naturellement résistant à l'amoxicilline.`,
      `Vrai. Il possède une activité oxydase positive.`,
      `Faux. Il est surtout associé aux infections liées aux soins ou à des terrains particuliers.`
    ]
  ),

  Q(59,
    `Parmi les propositions suivantes concernant le colibacille Escherichia coli, la(les)quelle(s) est (sont) exacte(s) ?`,
    [
      `Elle fait partie de la famille des entérobactéries`,
      `Elle peut être responsable de syndrome hémolytique et urémique (SHU)`,
      `Elle est naturellement sensible à l'amoxicilline`,
      `Elle peut être résistante aux céphalosporines de la 3ème génération par production d'une béta-lactamase à spectre étendu (BLSE)`,
      `Elle a un réservoir exclusivement humain`
    ],
    'ABCD',
    [
      `Vrai. Escherichia coli appartient à la famille des Enterobacteriaceae.`,
      `Vrai. Certaines souches productrices de shigatoxines peuvent provoquer un syndrome hémolytique et urémique.`,
      `Vrai selon la grille. Les souches sauvages d'E. coli sont classiquement sensibles à l'amoxicilline, mais les résistances acquises sont fréquentes.`,
      `Vrai. La production d'une BLSE peut entraîner une résistance aux céphalosporines de troisième génération.`,
      `Faux. E. coli est présent chez l'être humain mais également chez de nombreux animaux.`
    ]
  ),

  Q(60,
    `M. S.D. est hospitalisé depuis cinq jours pour un état de mal épileptique. Il présente une fièvre à 38,7°C. L'examen clinique est sans particularité à l'exception d'un cordon induré, inflammatoire et douloureux d'une veine superficielle du bras droit, correspondant au trajet vasculaire d'un cathéter périphérique. La bandelette urinaire est négative, deux paires d'hémocultures sont prélevées. Le lendemain, le laboratoire de microbiologie appelle dans le service pour signaler que trois flacons sur les quatre prélevés sont positifs à cocci à Gram positif en amas. Le patient est toujours fébrile et aucune antibiothérapie n'a été débutée.

Quel(s) est (sont) le(les) diagnostic(s) le(s) plus probable(s) ?`,
    [
      `Bactériémie à entérocoque (Enterococcus sp.)`,
      `Bactériémie à Listeria`,
      `Bactériémie à pneumocoque (Streptococcus pneumoniae)`,
      `Bactériémie à staphylocoque (Staphylococcus sp.)`,
      `Bactériémie à streptocoque (Streptococcus sp.)`
    ],
    'D',
    [
      `Faux. Les entérocoques sont des cocci à Gram positif habituellement disposés en chaînettes.`,
      `Faux. Listeria monocytogenes est un bacille à Gram positif.`,
      `Faux. Le pneumocoque se présente habituellement comme un diplocoque à Gram positif.`,
      `Vrai. Des cocci à Gram positif en amas évoquent un staphylocoque, avec une possible infection associée au cathéter.`,
      `Faux. Les streptocoques se disposent habituellement en chaînettes ou en paires.`
    ]
  ),

  Q(61,
    `Parmi la(les) proposition(s) suivante(s), quelle(s) est (sont) celle(s) exacte(s) sur la définition de l'antibiogramme ?`,
    [
      `C'est un examen de laboratoire de routine quotidien ou courant`,
      `Il définit des catégories cliniques telles que "sensible à posologie standard" et "sensible à forte posologie"`,
      `Il permet de préciser la CMB (concentration minimale bactéricide)`,
      `Il permet de calculer ou déduire la CMI (concentration minimale inhibitrice)`,
      `Il peut aussi préciser des diamètres d'inhibition (méthode des disques ou méthode de diffusion)`
    ],
    'ABDE',
    [
      `Vrai. L'antibiogramme est un examen couramment réalisé en microbiologie.`,
      `Vrai. Il permet de classer les bactéries selon des catégories cliniques de sensibilité aux antibiotiques.`,
      `Faux. La détermination de la CMB n'est pas un objectif habituel de l'antibiogramme standard.`,
      `Vrai. Des méthodes adaptées permettent de déterminer ou d'estimer la CMI.`,
      `Vrai. La diffusion en gélose mesure les diamètres d'inhibition autour des disques d'antibiotiques.`
    ]
  ),

  Q(62,
    `Parmi les antibiotiques suivants, lequel est bactéricide ?`,
    [
      `Erythromycine (macrolide)`,
      `Doxycycline (tétracycline)`,
      `Clindamycine (lincosamide)`,
      `Sulfaméthoxazole (sulfamide)`,
      `Oxacilline (ß-lactamine)`
    ],
    'E',
    [
      `Faux. L'érythromycine est généralement bactériostatique.`,
      `Faux. La doxycycline est généralement bactériostatique.`,
      `Faux. La clindamycine est généralement bactériostatique.`,
      `Faux. Le sulfaméthoxazole isolé est généralement bactériostatique.`,
      `Vrai. L'oxacilline est une bêta-lactamine bactéricide qui inhibe la synthèse de la paroi.`
    ]
  ),

  Q(63,
    `Laquelle des familles d'antibiotiques suivantes est active sur la paroi bactérienne ?`,
    [
      `ß-lactamines`,
      `Aminoglycosides (ou aminosides)`,
      `Tétracyclines (ou cyclines)`,
      `Macrolides`,
      `Sulfamides`
    ],
    'A',
    [
      `Vrai. Les bêta-lactamines inhibent la synthèse du peptidoglycane de la paroi bactérienne.`,
      `Faux. Les aminosides agissent sur la sous-unité 30S du ribosome.`,
      `Faux. Les tétracyclines inhibent la synthèse protéique.`,
      `Faux. Les macrolides agissent principalement sur la sous-unité 50S du ribosome.`,
      `Faux. Les sulfamides inhibent une étape de la synthèse des folates bactériens.`
    ]
  ),

  Q(64,
    `Parmi les propositions suivantes, laquelle ne constitue pas un mécanisme de résistance aux antibiotiques ?`,
    [
      `Absence de pénétration (imperméabilité)`,
      `Evolution vers une forme de sphéroplaste (ou forme L) insensible aux ß-lactamines`,
      `Excrétion accrue (efflux)`,
      `Inactivation enzymatique (détoxification)`,
      `Modification de la cible (affinité augmentée)`
    ],
    'B',
    [
      `Faux dans le cadre de la question. L'imperméabilité est un mécanisme classique de résistance.`,
      `Vrai selon la grille : c'est la proposition non retenue comme mécanisme classique de résistance aux antibiotiques.`,
      `Faux. Les pompes d'efflux peuvent diminuer la concentration intracellulaire d'antibiotiques.`,
      `Faux. L'inactivation enzymatique, notamment par les bêta-lactamases, est un mécanisme majeur de résistance.`,
      `Faux selon la grille. Les modifications de cible sont des mécanismes de résistance, bien que la formulation « affinité augmentée » soit imprécise.`
    ]
  ),

  Q(65,
    `Parmi les propositions suivantes, la(lesquelle(s) constitue(nt) un mécanisme de résistance du staphylocoque doré (Staphylococcus aureus) ?`,
    [
      `Diminution de perméabilité (par modification des porines)`,
      `Excrétion des antibiotiques par des pompes (efflux)`,
      `Modification de la cible (acquisition de la PLP2A)`,
      `Production de béta-lactamase à spectre étendu (BLSE)`,
      `Production de pénicillinase`
    ],
    'CE',
    [
      `Faux. La modification des porines est surtout un mécanisme de résistance décrit chez des bactéries à Gram négatif.`,
      `Faux selon la grille. L'efflux peut exister chez S. aureus, mais n'est pas retenu parmi les mécanismes attendus dans cette question.`,
      `Vrai. L'acquisition de PLP2a confère une résistance à la méticilline chez le SARM.`,
      `Faux. La production de BLSE est principalement observée chez certaines bactéries à Gram négatif.`,
      `Vrai. La production de pénicillinase est un mécanisme fréquent de résistance de S. aureus à la pénicilline.`
    ]
  ),

  Q(66,
    `Parmi les propositions suivantes, laquelle(lesquelles) est (sont) vraie(s) ?`,
    [
      `La présence de cellules inflammatoires dans le liquide cérébro-spinal (LCS) est toujours liée à une infection`,
      `La présence de staphylocoque doré (Staphylococcus aureus) résistant à la méticilline (SARM) dans un écouvillon nasal évoque habituellement une colonisation`,
      `Une culture positive à colibacille (Escherichia coli) dans un examen cytobactériologique des urines (ECBU) prouve une infection`,
      `Une situation d'infection est toujours associée à la mise en évidence d'un pathogène en culture`,
      `La mise en évidence dans un tissu du bacille de Koch (Mycobacterium tuberculosis) est toujours associée à une infection`
    ],
    'BE',
    [
      `Faux. Une réaction inflammatoire du LCS peut avoir une cause non infectieuse.`,
      `Vrai. La présence de SARM dans les fosses nasales correspond souvent à un portage asymptomatique.`,
      `Faux. Une bactériurie peut correspondre à une colonisation sans infection symptomatique.`,
      `Faux. Certaines infections sont diagnostiquées malgré des cultures négatives ou par des méthodes moléculaires.`,
      `Vrai selon la grille. Mycobacterium tuberculosis est un pathogène spécifique et sa présence dans un tissu est hautement évocatrice d'infection.`
    ]
  ),

  Q(67,
    `A propos de la lutte contre une infection à bactérienne pyogène, quelle(s) réponse(s) est (sont) vraie(s) ?`,
    [
      `La réaction inflammatoire est déclenchée par la reconnaissance d'un motif bactérien par les cytokines circulantes`,
      `La réponse physiologique anti-bactérienne de première ligne fait intervenir majoritairement les lymphocytes B`,
      `La réaction inflammatoire déclenchée par ces infections conduit à la formation de pus`,
      `Une antibiothérapie est toujours indispensable pour contrôler ce type d'infection`,
      `Les antibiotiques vont être principalement actifs pendant la phase de réplication des bactéries`
    ],
    'BCE',
    [
      `Faux. Les motifs microbiens sont notamment reconnus par des récepteurs de l'immunité innée, qui entraînent ensuite la production de cytokines.`,
      `Vrai selon la grille officielle. La réponse B est cochée, même si la première ligne de défense antibactérienne implique principalement l'immunité innée et les polynucléaires neutrophiles.`,
      `Vrai. Les infections à bactéries pyogènes peuvent entraîner une accumulation de neutrophiles et la formation de pus.`,
      `Faux. Certaines infections localisées peuvent être contrôlées par drainage ou par les défenses immunitaires sans antibiothérapie systématique.`,
      `Vrai. De nombreux antibiotiques, notamment les bêta-lactamines, sont plus actifs sur les bactéries en multiplication.`
    ]
  ),

  Q(68,
    `Concernant la relation hôte-pathogène, quelle(s) proposition(s) est (sont) vraie(s) ?`,
    [
      `Bacteroides fragilis (bacille Gram négatif du microbiote digestif) détient une relation symbiotique avec l'hôte`,
      `Le virus de l'immunodéficience humaine (VIH) doit être considéré comme un pathogène opportuniste si retrouvé dans le sang`,
      `Le staphylocoque doré (Staphylococcus aureus) peut être considéré comme un pathogène occasionnel si retrouvé à la surface d'une plaie`,
      `La levure candidosique (Candida albicans) est un pathogène obligatoire si retrouvé dans la bouche`,
      `Le bacille de Koch (Mycobacteirum tuberculosis) est un commensal des voies respiratoires`
    ],
    'AC',
    [
      `Vrai. Bacteroides fragilis peut appartenir au microbiote digestif et entretenir une relation de commensalisme avec l'hôte.`,
      `Faux. Le VIH est un pathogène spécifique et non un microorganisme opportuniste classique.`,
      `Vrai. Staphylococcus aureus peut coloniser une surface sans provoquer systématiquement une infection.`,
      `Faux. Candida albicans peut être présent comme commensal dans la cavité buccale.`,
      `Faux. Mycobacterium tuberculosis n'appartient pas au microbiote normal des voies respiratoires.`
    ]
  ),

  Q(69,
    `Concernant la réponse immunitaire humorale contre les pathogènes, quelle(s) proposition(s) est (sont) vraie(s) ?`,
    [
      `La réponse humorale est effective en quelques heures après la primo-infection`,
      `Les principaux effecteurs de l'immunité humorale sont les lymphocytes T`,
      `Les anticorps sont des immunoglobulines spécifiques produites par les plasmocytes activés`,
      `Chez l'Homme, il n'existe que deux isotypes d'anticorps`,
      `La fixation du complexe anticorps-antigène entraine l'activation du système du complément`
    ],
    'CE',
    [
      `Faux. La réponse humorale primaire spécifique nécessite généralement plusieurs jours.`,
      `Faux. Les effecteurs principaux de l'immunité humorale sont les lymphocytes B et les anticorps produits par les plasmocytes.`,
      `Vrai. Les plasmocytes sécrètent des immunoglobulines spécifiques.`,
      `Faux. Il existe cinq classes principales d'immunoglobulines : IgG, IgM, IgA, IgE et IgD.`,
      `Vrai selon la grille. Certains complexes antigène-anticorps activent la voie classique du complément, notamment ceux impliquant IgM ou certaines IgG.`
    ]
  ),

  Q(70,
    `Concernant la génération de fièvre au cours des processus infectieux, quelle(s) proposition(s) est (sont) vraie(s) ?`,
    [
      `Toute fièvre indique un processus infectieux en cours`,
      `Une fièvre > 39,5°C est un signe de gravité`,
      `Le centre de la thermorégulation se situe dans l'hypothalamus antérieur`,
      `La fièvre est entrainée par la production de substances pyrogènes`,
      `L'activation des réponses de thermolyse (sudation, vasodilatation cutanée...) conduit à la fièvre`
    ],
    'CD',
    [
      `Faux. Une fièvre peut être d'origine infectieuse ou non infectieuse.`,
      `Faux. La température isolée ne permet pas de déterminer la gravité d'une infection.`,
      `Vrai. Les structures hypothalamiques, notamment préoptiques antérieures, participent à la thermorégulation.`,
      `Vrai. Les pyrogènes augmentent le point de consigne thermique hypothalamique.`,
      `Faux. La sudation et la vasodilatation favorisent la perte de chaleur, notamment lors de la défervescence.`
    ]
  ),

  Q(71,
    `Quels marqueurs biologiques sont associés au syndrome inflammatoire ?`,
    [
      `L'hyperlymphocytose`,
      `L'augmentation de la protéine C-réactive (CRP)`,
      `L'augmentation de l'albumine`,
      `La diminution de la procalcitonine (PCT)`,
      `L'installation de l'anémie microcytaire`
    ],
    'BE',
    [
      `Faux. L'hyperlymphocytose n'est pas un marqueur général caractéristique du syndrome inflammatoire.`,
      `Vrai. La CRP est une protéine de phase aiguë augmentant lors de nombreux processus inflammatoires.`,
      `Faux. L'albumine est une protéine négative de phase aiguë, dont la concentration peut diminuer.`,
      `Faux. La procalcitonine peut augmenter lors de certaines infections bactériennes systémiques.`,
      `Vrai selon la grille. Une inflammation prolongée peut provoquer une anémie inflammatoire, parfois microcytaire.`
    ]
  ),

  Q(72,
    `La syphilis rentre dans le cadre des maladies dites nouvelles, dont l'histoire enregistre plusieurs exemples. Pour répondre à cette définition, que doivent identifier les soignants et les scientifiques ?`,
    [
      `Une maladie qui présente des caractéristiques épidémiologiques connues mais marginales`,
      `Une maladie impossible à trouver dans le répertoire des maladies`,
      `Une maladie contractée à l'étranger`,
      `Une maladie connue et irrépréhensible du point de vue moral`,
      `Une maladie étrange présentant des caractéristiques inconnues`
    ],
    'BCE',
    [
      `Faux selon la grille. La simple marginalité épidémiologique ne suffit pas à définir une maladie historiquement nouvelle.`,
      `Vrai selon la grille. Une maladie nouvelle peut ne pas correspondre aux catégories nosologiques déjà établies.`,
      `Vrai selon la grille. L'origine étrangère ou supposée étrangère fait partie des représentations historiques de certaines maladies nouvelles, dont la syphilis.`,
      `Faux. Le caractère moralement irrépréhensible ne constitue pas un critère de nouveauté d'une maladie.`,
      `Vrai. L'identification de manifestations inhabituelles ou inconnues participe à la reconnaissance d'une nouvelle maladie.`
    ]
  ),

  Q(73,
    `Du point de vue historique, la syphilis reçoit son nom en 1530 par le médecin Jérôme Fracastor. Qu'"apporte cette dénomination ?`,
    [
      `Elle permet de dépasser la stigmatisation de l'autre`,
      `La syphilis est immédiatement acceptée par la communauté scientifique et les sociétés`,
      `La syphilis est l'acronyme d'une série de concepts signifiant la pathologie`,
      `Cette dénomination est proposée par son auteur comme alternative à Morbus Gallicus`,
      `La syphilis est identifiée avec un des symptômes que la maladie exprime à la surface du corps du patient`
    ],
    'AD',
    [
      `Vrai. Le nom syphilis permet de s'éloigner des dénominations accusant directement un peuple ou une nation.`,
      `Faux. L'adoption d'une nouvelle dénomination ne signifie pas une acceptation scientifique et sociale immédiate.`,
      `Faux. Le terme syphilis provient du nom d'un personnage du poème de Fracastor, pas d'un acronyme.`,
      `Vrai. Fracastor propose une dénomination alternative à Morbus Gallicus, ou mal français.`,
      `Faux. Le mot syphilis ne désigne pas directement une manifestation clinique cutanée.`
    ]
  )
];
