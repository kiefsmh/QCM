export const meta = {
  title: 'Parasitoses alimentaires - oxyurose, ascaridiose, téniasis, giardiose et coccidioses digestives',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Deux enfants deviennent irritables et présentent un prurit périanal surtout le soir avant de s’endormir. Quelle parasitose évoque en priorité ce tableau du cours ?',
    options: [
      { text: 'Une toxoplasmose', correct: false, correction: 'Faux. Ce tableau ne correspond pas aux manifestations typiques de la toxoplasmose.' },
      { text: 'Une oxyurose', correct: true, correction: 'Oui boss 🧠 Le prurit anal du soir et de la nuit chez l’enfant est très évocateur.' },
      { text: 'Une ascaridiose', correct: false, correction: 'Non chef. L’ascaridiose peut provoquer des troubles digestifs, mais le prurit périanal vespéral oriente ici vers l’oxyurose.' },
      { text: 'Une trichinellose', correct: false, correction: 'Non chef. Le tableau décrit évoque la ponte périanale des oxyures.' },
      { text: 'Une giardiose', correct: false, correction: 'Non. Des troubles digestifs seuls peuvent faire évoquer une giardiose, mais ce prurit anal vespéral est le signe clé de l’oxyurose.' },
    ],
    explanation: 'Dans le cas clinique du cours, l’irritabilité associée à un prurit périanal particulièrement vespéral fait évoquer une oxyurose. Des épisodes diarrhéiques sont également rapportés. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement l’oxyurose ?',
    options: [
      { text: 'Sa transmission est interhumaine, par voie orale, directe ou indirecte', correct: true, correction: 'Exact. Les œufs peuvent être transmis directement ou par l’environnement contaminé.' },
      { text: 'Elle est habituellement acquise par piqûre d’un insecte', correct: false, correction: 'Faux. La voie de contamination décrite est orale.' },
      { text: 'C’est une helminthose digestive', correct: true, correction: 'Exact 🧠 Elle est due à un ver parasite du tube digestif.' },
      { text: 'C’est une parasitose cosmopolite', correct: true, correction: 'Oui boss. Elle n’est pas limitée aux régions tropicales.' },
      { text: 'Elle exige obligatoirement un hôte animal entre deux infections humaines', correct: false, correction: 'Non chef. Le cours décrit une transmission interhumaine.' },
    ],
    explanation: 'L’oxyurose est une helminthose digestive cosmopolite à transmission interhumaine orale, directe ou indirecte. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel parasite est responsable de l’oxyurose et quelle taille approximative lui attribue le cours ?',
    options: [
      { text: 'Enterobius vermicularis, environ 10 à 25 cm', correct: false, correction: 'Faux. Le nom est correct pour l’oxyure, mais cette taille est celle de l’ascaris dans le cours.' },
      { text: 'Enterobius vermicularis, environ 1 cm', correct: true, correction: 'Oui boss 🎯 Enterobius vermicularis est l’oxyure ; le cours retient environ 1 cm.' },
      { text: 'Ascaris lumbricoides, environ 10 à 25 cm', correct: false, correction: 'Non. Cette association décrit l’ascaris, pas le parasite de l’oxyurose.' },
      { text: 'Ascaris lumbricoides, environ 1 cm', correct: false, correction: 'Non chef. Ascaris est responsable de l’ascaridiose et sa taille donnée est bien supérieure.' },
      { text: 'Taenia saginata, environ 1 cm', correct: false, correction: 'Non chef. Taenia saginata n’est pas l’agent de l’oxyurose.' },
    ],
    explanation: 'Le parasite responsable de l’oxyurose est Enterobius vermicularis. Selon le cours, il mesure environ 1 cm et peut être visible macroscopiquement. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles conditions sont recommandées dans le cours pour réaliser le scotch-test anal ?',
    options: [
      { text: 'Le réaliser avant la toilette ou la douche', correct: true, correction: 'Exact. La toilette pourrait éliminer les éléments à rechercher.' },
      { text: 'Le réaliser avant la défécation', correct: true, correction: 'Oui. C’est une condition explicitement indiquée dans le cours.' },
      { text: 'Le réaliser le matin', correct: true, correction: 'Oui boss 🧠 Le prélèvement matinal recherche les œufs déposés pendant la nuit.' },
      { text: 'Appliquer l’adhésif sur la région périanale', correct: true, correction: 'Exact 🎯 Il faut prélever là où les femelles déposent les œufs.' },
      { text: 'Nettoyer soigneusement la marge anale immédiatement avant le prélèvement', correct: false, correction: 'Non chef. Ce nettoyage risque justement de retirer les œufs et de diminuer les chances de les retrouver.' },
    ],
    explanation: 'Le scotch-test anal est effectué le matin sur la région périanale, avant la toilette et avant la défécation, afin de favoriser la récupération des œufs. (Cours, p. 2–3)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quel examen de choix permet de confirmer l’oxyurose dans le cas présenté ?',
    options: [
      { text: 'Une sérologie sanguine', correct: false, correction: 'Non chef. La sérologie n’est pas l’examen privilégié dans ce cas.' },
      { text: 'Un scanner abdomino-pelvien', correct: false, correction: 'Faux. Le scanner ne remplace pas la recherche des œufs sur la marge anale.' },
      { text: 'Une endoscopie digestive systématique', correct: false, correction: 'Non chef. Des vers peuvent être vus en endoscopie, mais l’examen de choix du cours est le scotch-test.' },
      { text: 'Une radiographie avec lavement baryté', correct: false, correction: 'Non. Cet examen n’est pas adapté à la confirmation recherchée.' },
      { text: 'Le scotch-test anal avec observation microscopique de l’adhésif', correct: true, correction: 'Oui boss 🎯 L’adhésif récupère les œufs, puis on les recherche au microscope.' },
    ],
    explanation: 'Le diagnostic repose sur le test à la cellophane adhésive : après application périanale, l’adhésif est observé au microscope pour rechercher des œufs et parfois des femelles. (Cours, p. 2–4)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Concernant la ponte des oxyures et le prurit anal, quelles propositions sont exactes ?',
    options: [
      { text: 'Le prurit typique doit obligatoirement être maximal après la toilette matinale', correct: false, correction: 'Faux. Le cours retient surtout un prurit du soir et de la nuit.' },
      { text: 'Les œufs déposés sur la marge anale peuvent être récupérés par un adhésif', correct: true, correction: 'Exact. C’est le principe du scotch-test.' },
      { text: 'Les femelles pondent principalement dans les voies biliaires', correct: false, correction: 'Non chef. Dans l’oxyurose décrite, la ponte est périanale.' },
      { text: 'La migration des femelles est à l’origine du prurit anal vespéral et nocturne', correct: true, correction: 'Oui boss. Le moment des démangeaisons est un indice diagnostique utile.' },
      { text: 'Les femelles viennent pondre dans la région périanale', correct: true, correction: 'Exact 🧠 Cette localisation explique le site du prélèvement.' },
    ],
    explanation: 'Les femelles oxyures migrent vers la marge anale et y pondent. Cette migration explique le prurit anal vespéral ou nocturne et l’intérêt du scotch-test. (Cours, p. 2 et 4)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel traitement antiparasitaire de l’oxyurose est présenté dans le cours ?',
    options: [
      { text: 'Le flubendazole, en prise unique puis renouvelé 2 à 3 semaines plus tard', correct: true, correction: 'Oui boss 🎯 C’est le schéma indiqué dans ce support.' },
      { text: 'Une évacuation endoscopique systématique de tous les vers', correct: false, correction: 'Non chef. L’endoscopie n’est pas le traitement de routine présenté.' },
      { text: 'Une antibiothérapie seule', correct: false, correction: 'Non. L’oxyurose est due à un helminte et nécessite un traitement antiparasitaire adapté.' },
      { text: 'Le flubendazole en traitement quotidien continu pendant 3 semaines', correct: false, correction: 'Faux. Le cours décrit deux prises espacées, pas cette administration quotidienne.' },
      { text: 'Le flubendazole en prise unique sans renouvellement ni mesures préventives', correct: false, correction: 'Non chef. Le cours prévoit une seconde prise et des mesures de prévention.' },
    ],
    explanation: 'Selon le cours, le traitement est une cuillère-mesure ou un comprimé de flubendazole en prise unique, puis la même prise est renouvelée 2 à 3 semaines plus tard. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Pourquoi le traitement de l’oxyurose est-il renouvelé 2 à 3 semaines plus tard selon le cours ?',
    options: [
      { text: 'Le cycle est décrit comme simple et rapide, d’environ 2 à 3 semaines', correct: true, correction: 'Oui boss. C’est la durée retenue dans le support.' },
      { text: 'La seconde prise vise à interrompre le cycle d’auto-infection', correct: true, correction: 'Exact 🎯 C’est la justification donnée par le cours.' },
      { text: 'La seconde prise sert uniquement à traiter une infection bactérienne associée', correct: false, correction: 'Faux. Elle reste antiparasitaire et concerne le cycle de l’oxyurose.' },
      { text: 'Le renouvellement tient compte du cycle parasitaire', correct: true, correction: 'Exact 🧠 Le calendrier de la seconde prise est adapté au cycle de l’oxyure.' },
      { text: 'La première prise ne doit jamais être accompagnée de mesures d’hygiène', correct: false, correction: 'Non chef. Les mesures préventives complètent le traitement antiparasitaire.' },
    ],
    explanation: 'Selon le cours, le cycle de l’oxyure dure environ 2 à 3 semaines. Le renouvellement du traitement à ce délai contribue à rompre le cycle d’auto-infection. (Cours, p. 3)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Dans la prévention de l’oxyurose, quel est l’objectif de couper les ongles très courts ?',
    options: [
      { text: 'Faire disparaître directement tous les vers adultes intestinaux', correct: false, correction: 'Faux. La coupe des ongles ne remplace pas l’antiparasitaire.' },
      { text: 'Remplacer la seconde prise du traitement antiparasitaire', correct: false, correction: 'Non chef. Le cours associe le renouvellement du traitement et les mesures préventives.' },
      { text: 'Éviter que les œufs ne se logent sous les ongles et limiter leur dissémination', correct: true, correction: 'Oui boss 🧠 Moins d’œufs sous les ongles, c’est moins de possibilités de recontamination.' },
      { text: 'Empêcher la maturation des larves dans le poumon', correct: false, correction: 'Non chef. Cette mesure agit sur les œufs présents sur les mains, pas sur une migration pulmonaire.' },
      { text: 'Rendre les œufs visibles à l’œil nu', correct: false, correction: 'Non. Les œufs sont recherchés au microscope ; la coupe des ongles est une mesure préventive.' },
    ],
    explanation: 'Le cours recommande de couper les ongles très courts pour éviter que les œufs ne se logent dessous. Cette mesure réduit leur dissémination et le risque de recontamination. (Cours, p. 3)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles mesures préventives de l’oxyurose sont recommandées dans le cours ?',
    options: [
      { text: 'Nettoyer les chambres, notamment à l’aspirateur', correct: true, correction: 'Exact 🎯 Le but est de diminuer la quantité d’œufs autour de l’enfant.' },
      { text: 'Faire porter un pyjama une pièce pour limiter le grattage nocturne', correct: true, correction: 'Oui boss 🧠 Le cours propose cette mesure pour réduire le grattage pendant le sommeil.' },
      { text: 'Laver aussi les doudous concernés', correct: true, correction: 'Oui. Les objets proches de l’enfant peuvent participer à la contamination de son environnement.' },
      { text: 'Se limiter au traitement de l’enfant sans agir sur son environnement', correct: false, correction: 'Non chef. Le cours insiste sur les mesures préventives qui accompagnent le traitement individuel.' },
      { text: 'Laver les draps et les pyjamas à température élevée', correct: true, correction: 'Exact. La literie et les vêtements font partie de l’environnement à traiter.' },
    ],
    explanation: 'Les mesures citées comprennent le pyjama une pièce, le lavage à température élevée des draps, vêtements et doudous, ainsi que le nettoyage des chambres. Leur objectif est de diminuer la contamination de l’environnement immédiat. (Cours, p. 4)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle attitude complète correctement le traitement individuel d’une oxyurose selon le cours ?',
    options: [
      { text: 'Attendre une aggravation avant toute mesure préventive', correct: false, correction: 'Non chef. Les mesures préventives accompagnent la prise en charge.' },
      { text: 'Faire uniquement une endoscopie de contrôle', correct: false, correction: 'Faux. Ce n’est pas l’approche de prévention décrite.' },
      { text: 'Considérer que la collectivité ne joue aucun rôle dans la transmission', correct: false, correction: 'Non. La vie en collectivité favorise précisément l’oxyurose.' },
      { text: 'Abandonner le traitement antiparasitaire parce que la maladie est souvent bénigne', correct: false, correction: 'Non chef. Le caractère habituellement bénin ne dispense pas de la prise en charge décrite.' },
      { text: 'Associer des mesures prophylactiques collectives visant à réduire les œufs dans l’environnement', correct: true, correction: 'Oui boss 🎯 Le traitement individuel doit aller avec une prévention collective.' },
    ],
    explanation: 'L’oxyurose est habituellement bénigne, fréquente chez l’enfant et favorisée par la vie en collectivité. Le cours souligne que le traitement individuel doit être accompagné de mesures prophylactiques collectives. (Cours, p. 4)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles propositions résument correctement la démarche devant une oxyurose suspectée ?',
    options: [
      { text: 'Le scotch-test recherche notamment des œufs sur la marge anale', correct: true, correction: 'Oui boss. Il peut aussi récupérer des adultes.' },
      { text: 'Un prélèvement réalisé après la toilette est celui recommandé pour maximiser la détection des œufs', correct: false, correction: 'Non chef. Le test doit être effectué avant la toilette.' },
      { text: 'Les mesures d’hygiène ont pour objectif de réduire les possibilités d’auto-infection et de transmission', correct: true, correction: 'Exact. Elles diminuent la quantité d’œufs sur l’enfant et dans son environnement.' },
      { text: 'Un prurit anal vespéral ou nocturne constitue un signe évocateur', correct: true, correction: 'Exact 🧠 Le moment du prurit aide à orienter le diagnostic.' },
      { text: 'L’oxyurose est exceptionnelle chez les enfants vivant en collectivité', correct: false, correction: 'Faux. Elle est fréquente chez l’enfant et favorisée par la collectivité.' },
    ],
    explanation: 'Le tableau clinique oriente vers l’oxyurose ; le scotch-test matinal avant toilette confirme la présence d’œufs. Le traitement et la prophylaxie visent aussi à prévenir les recontaminations. (Cours, p. 2–4)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle description correspond à Ascaris lumbricoides selon le cours ?',
    options: [
      { text: 'Un protozoaire unicellulaire de l’intestin', correct: false, correction: 'Faux. Ascaris est un helminte, pas un protozoaire.' },
      { text: 'Un ver plat mesurant environ 10 à 25 cm', correct: false, correction: 'Non chef. Un nématode est un ver rond, pas un ver plat.' },
      { text: 'Un nématode, grand ver rond mesurant environ 10 à 25 cm', correct: true, correction: 'Oui boss 🧠 Ascaris est un ver rond ; la taille donnée dans le support est de 10 à 25 cm.' },
      { text: 'Un ver dont l’adulte vit normalement uniquement dans les tissus', correct: false, correction: 'Non chef. La migration tissulaire concerne les larves ; les adultes vivent dans le tube digestif.' },
      { text: 'Un oxyure mesurant environ 1 cm', correct: false, correction: 'Non. Cette description correspond à Enterobius vermicularis.' },
    ],
    explanation: 'Ascaris lumbricoides est un grand nématode blanc. Selon le cours, il mesure environ 10 à 25 cm ; l’adulte est localisé dans le tube digestif. (Cours, p. 4–6)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Concernant le diagnostic et la répartition de l’ascaridiose dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'La transmission exige la piqûre d’un insecte vecteur', correct: false, correction: 'Faux. La contamination est orale, après un passage des œufs dans l’environnement.' },
      { text: 'La recherche d’œufs dans les selles permet son diagnostic à la phase de ponte', correct: true, correction: 'Oui boss. Le cas clinique est diagnostiqué par l’examen parasitologique des selles.' },
      { text: 'Elle est surtout rencontrée en zones tropicales et subtropicales', correct: true, correction: 'Exact 🎯 C’est la répartition principalement retenue dans le support.' },
      { text: 'Les œufs décrits sont ronds à ovalaires, avec une enveloppe externe mamelonnée', correct: true, correction: 'Exact 🧠 Cette morphologie est décrite dans le cas d’ascaridiose.' },
      { text: 'Le scotch-test périanal est l’examen privilégié de l’ascaridiose dans le cas clinique', correct: false, correction: 'Non chef. Le scotch-test est l’examen de choix de l’oxyurose ; ici, les œufs sont retrouvés dans les selles.' },
    ],
    explanation: 'Le cours présente une ascaridiose chez un enfant né en Haïti, avec des œufs identifiés dans les selles. Les œufs décrits sont ronds à ovalaires, jaune-brun à l’intérieur, avec une enveloppe externe mamelonnée. (Cours, p. 4)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Pourquoi la transmission de l’ascaridiose est-elle qualifiée d’interhumaine orale indirecte ?',
    options: [
      { text: 'Parce que les larves sont directement injectées par un insecte', correct: false, correction: 'Non chef. La voie de contamination décrite est l’ingestion d’œufs.' },
      { text: 'Parce qu’un passage par un mammifère intermédiaire est toujours nécessaire', correct: false, correction: 'Non chef. Le passage obligatoire décrit concerne l’environnement, pas un hôte animal intermédiaire.' },
      { text: 'Parce que les œufs doivent mûrir dans l’environnement avant de devenir infectieux', correct: true, correction: 'Oui boss 🎯 Les œufs fraîchement émis ne sont pas directement infectieux.' },
      { text: 'Parce que les œufs sont immédiatement infectieux lors de leur émission et n’ont pas besoin de l’environnement', correct: false, correction: 'Faux. C’est justement le passage environnemental qui est indispensable.' },
      { text: 'Parce que la contamination survient uniquement par pénétration cutanée', correct: false, correction: 'Non. Le cours décrit une contamination orale, souvent par l’alimentation.' },
    ],
    explanation: 'Les œufs d’Ascaris ne sont pas directement infectieux lors de leur émission. Leur maturation dans l’environnement est obligatoire avant leur ingestion par un nouvel hôte. (Cours, p. 4–5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles étapes appartiennent au cycle d’Ascaris décrit dans le cours ?',
    options: [
      { text: 'L’ingestion d’œufs infectieux provenant de l’environnement', correct: true, correction: 'Oui boss 🧠 La contamination passe souvent par l’alimentation.' },
      { text: 'Une phase adulte intestinale, avec reproduction et ponte', correct: true, correction: 'Exact 🎯 L’adulte vit et pond dans le tube digestif.' },
      { text: 'Une ponte normale dans les tissus par les larves migrantes', correct: false, correction: 'Non chef. Le cours distingue les larves dans les tissus des adultes qui pondent dans le tube digestif.' },
      { text: 'L’éclosion des œufs dans le tube digestif avec libération de larves', correct: true, correction: 'Exact. Ces larves entament ensuite une migration.' },
      { text: 'Une phase de migration larvaire tissulaire', correct: true, correction: 'Oui. Les larves ne restent pas immédiatement installées dans l’intestin.' },
    ],
    explanation: 'Après ingestion, les œufs libèrent des larves qui migrent dans les tissus. La phase d’état correspond aux adultes dans le tube digestif, où ils se reproduisent et pondent. (Cours, p. 5–6)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'À quelle phase du cycle d’Ascaris l’éosinophilie est-elle particulièrement associée dans le cours ?',
    options: [
      { text: 'Exclusivement à une co-infection bactérienne', correct: false, correction: 'Non chef. La réaction décrite est liée aux larves du parasite.' },
      { text: 'Uniquement à la ponte des adultes dans l’intestin', correct: false, correction: 'Faux. Le cours relie surtout la réaction toxico-allergique à la migration larvaire dans les tissus.' },
      { text: 'À la maturation des œufs dans l’environnement, avant toute contamination humaine', correct: false, correction: 'Non chef. Une éosinophilie chez l’hôte traduit une réaction de son organisme.' },
      { text: 'À la migration larvaire tissulaire et à sa réaction toxico-allergique', correct: true, correction: 'Oui boss 🧠 La traversée des tissus par les larves stimule cette réponse immunitaire.' },
      { text: 'À chaque ascaridiose, avec une élévation obligatoire pendant toute sa durée', correct: false, correction: 'Non. Il ne faut pas transformer l’association à la migration larvaire en règle permanente pour toute infection.' },
    ],
    explanation: 'L’éosinophilie est particulièrement liée à l’action toxico-allergique de la migration larvaire tissulaire. Elle ne doit pas être présentée comme constamment présente dans toutes les phases de l’ascaridiose. (Cours, p. 5–6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Concernant la réaction toxico-allergique pendant la migration larvaire d’Ascaris, quelles propositions sont exactes ?',
    options: [
      { text: 'La cuticule des larves contient des protéines allergisantes', correct: true, correction: 'Exact 🧠 Le cours relie ces protéines à la mobilisation du système immunitaire.' },
      { text: 'Cette augmentation impose que les adultes pondent leurs œufs dans les tissus', correct: false, correction: 'Non chef. Les larves migrent dans les tissus ; la ponte normale des adultes se fait dans le tube digestif.' },
      { text: 'Selon le cours, les éosinophiles peuvent augmenter jusqu’à 10 à 20 fois la normale pendant cette réaction', correct: true, correction: 'Exact 🎯 Ce chiffre est celui rapporté dans le support et reste une possibilité, pas une obligation.' },
      { text: 'Une augmentation des polynucléaires éosinophiles peut être mesurée sur la NFS', correct: true, correction: 'Oui boss. C’est la perturbation biologique proposée dans le Wooclap.' },
      { text: 'L’éosinophilie désigne une augmentation des lymphocytes', correct: false, correction: 'Faux. Elle désigne une augmentation des polynucléaires éosinophiles.' },
    ],
    explanation: 'Les protéines de la cuticule larvaire participent à une réaction toxico-allergique pendant la migration tissulaire. Selon le cours, l’élévation des éosinophiles peut atteindre 10 à 20 fois la normale. (Cours, p. 6)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel trajet correspond à la migration larvaire d’Ascaris représentée dans le schéma du cours ?',
    options: [
      { text: 'La phase adulte normale correspond à une ponte sur la marge anale', correct: false, correction: 'Non chef. La ponte périanale concerne l’oxyure ; les adultes d’Ascaris pondent dans l’intestin.' },
      { text: 'Les larves restent toujours intestinales alors que les adultes migrent obligatoirement dans les tissus pour mûrir', correct: false, correction: 'Non. Cette proposition inverse les deux phases physiologiques.' },
      { text: 'Les larves pondent dans les tissus et les adultes vivent uniquement dans le sang', correct: false, correction: 'Non chef. Les larves ne pondent pas et les adultes vivent normalement dans le tube digestif.' },
      { text: 'Les larves passent notamment par le foie puis les poumons avant le retour vers l’intestin', correct: true, correction: 'Oui boss 🎯 Le schéma illustre ce circuit avant la phase adulte intestinale.' },
      { text: 'Les larves et les adultes vivent exclusivement dans l’environnement', correct: false, correction: 'Faux. Le parasite accomplit ces deux phases chez son hôte.' },
    ],
    explanation: 'Le schéma représente une migration des larves depuis l’intestin vers le foie puis les poumons, avant un retour vers l’intestin. Les adultes intestinaux assurent ensuite la reproduction et la ponte. (Cours, p. 5–6)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles propositions concernant les complications de l’ascaridiose sont exactes ?',
    options: [
      { text: 'Les adultes peuvent présenter une migration erratique', correct: true, correction: 'Oui. La mobilité des vers explique un autre groupe de complications.' },
      { text: 'Ces pelotes peuvent provoquer une occlusion intestinale', correct: true, correction: 'Exact 🎯 Elles peuvent empêcher la progression du contenu intestinal.' },
      { text: 'Des vers peuvent se regrouper en pelotes dans le tube digestif', correct: true, correction: 'Oui boss 🧠 Leur grande taille et leur accumulation peuvent gêner le transit.' },
      { text: 'Le caractère intestinal du parasite garantit que l’ascaridiose reste toujours bénigne', correct: false, correction: 'Non chef. Une occlusion ou une migration erratique peut rendre la maladie grave.' },
      { text: 'L’occlusion décrite est provoquée par la ponte des oxyures sur la marge anale', correct: false, correction: 'Faux. Il s’agit ici de pelotes d’ascaris adultes dans le tube digestif.' },
    ],
    explanation: 'Les complications décrites découlent notamment de la grande taille des adultes et de leur mobilité : formation de pelotes obstructives et migrations erratiques. (Cours, p. 6–7)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Que désigne la migration erratique d’Ascaris dans le cours ?',
    options: [
      { text: 'La maturation des œufs dans l’environnement', correct: false, correction: 'Non chef. Cette maturation est nécessaire à la contamination, mais ce n’est pas une migration de l’adulte.' },
      { text: 'L’éclosion normale des œufs dans le tube digestif', correct: false, correction: 'Faux. L’éclosion libère les larves et ne définit pas la migration erratique.' },
      { text: 'La ponte périanale habituelle des femelles oxyures', correct: false, correction: 'Non. Il s’agit d’un événement de l’oxyurose, pas d’une migration erratique d’Ascaris.' },
      { text: 'Le déplacement de vers adultes vers des localisations inhabituelles, comme les voies biliaires', correct: true, correction: 'Oui boss 🧠 Les adultes quittent alors leur localisation intestinale habituelle.' },
      { text: 'La migration larvaire tissulaire obligatoire du cycle, sans anomalie de localisation de l’adulte', correct: false, correction: 'Non chef. La migration larvaire physiologique doit être distinguée du déplacement erratique des adultes.' },
    ],
    explanation: 'La migration erratique concerne des vers adultes se déplaçant vers des localisations inhabituelles. Elle se distingue de la migration larvaire tissulaire normale du cycle. (Cours, p. 6–7)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles localisations ou voies de sortie d’Ascaris sont citées dans le cours lors de migrations erratiques ?',
    options: [
      { text: 'Un habitat normal permanent des adultes dans les veines', correct: false, correction: 'Non chef. Les adultes vivent normalement dans le tube digestif ; un habitat veineux n’est pas la situation décrite.' },
      { text: 'Les voies biliaires', correct: true, correction: 'Exact 🧠 Les canaux biliaires figurent parmi les localisations citées.' },
      { text: 'Les voies pancréatiques', correct: true, correction: 'Oui boss. Le cours cite la région pancréatique parmi les destinations possibles des vers.' },
      { text: 'Une sortie par la bouche ou le nez en cas de très forte charge parasitaire', correct: true, correction: 'Oui 🎯 Ce phénomène spectaculaire est décrit dans le cours.' },
      { text: 'L’appendice', correct: true, correction: 'Exact. Il est également mentionné dans le support.' },
    ],
    explanation: 'Le cours cite le pancréas, l’appendice et les canaux biliaires parmi les localisations de migration erratique. Une sortie orale ou nasale peut survenir en cas de très forte charge parasitaire. (Cours, p. 6–7)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Chez un enfant né en Haïti présentant des troubles digestifs chroniques, l’examen des selles retrouve des œufs ronds à ovalaires, à contenu jaune-brun et à enveloppe externe mamelonnée. Quel diagnostic est retenu dans le cas du cours ?',
    options: [
      { text: 'Une giardiose', correct: false, correction: 'Faux. Le cas décrit des œufs d’helminte identifiés comme des œufs d’ascaris, pas des kystes de Giardia.' },
      { text: 'Une oxyurose confirmée par scotch-test', correct: false, correction: 'Non chef. Le prélèvement et la morphologie décrits sont ceux du cas d’ascaridiose.' },
      { text: 'Une ascaridiose', correct: true, correction: 'Oui boss 🎯 Le diagnostic du cas repose sur l’identification d’œufs d’ascaris dans les selles.' },
      { text: 'Une trichinellose', correct: false, correction: 'Non chef. Ce diagnostic ne correspond pas aux œufs et au cas présentés.' },
      { text: 'Une toxoplasmose', correct: false, correction: 'Non. La recherche d’œufs d’ascaris dans les selles n’établit pas une toxoplasmose.' },
    ],
    explanation: 'Le cas clinique d’ascaridiose associe un contexte d’origine tropicale, des troubles digestifs chroniques et un examen parasitologique des selles positif pour des œufs d’ascaris. (Cours, p. 4)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles propositions comparent correctement l’oxyurose et l’ascaridiose dans le cours ?',
    options: [
      { text: 'L’ascaridiose nécessite un passage des œufs dans l’environnement avant qu’ils deviennent infectieux', correct: true, correction: 'Oui boss. La contamination est donc orale indirecte.' },
      { text: 'Le cours cite le flubendazole comme exemple de médicament permettant de traiter l’ascaridiose', correct: true, correction: 'Exact. La correction du QCM indique que l’ascaridiose peut être traitée par un antiparasitaire comme le flubendazole.' },
      { text: 'L’oxyurose nécessite aussi des mesures prophylactiques collectives', correct: true, correction: 'Oui 🎯 Elles complètent le traitement individuel et réduisent les recontaminations.' },
      { text: 'L’oxyurose peut être transmise par voie orale de manière directe ou indirecte', correct: true, correction: 'Exact 🧠 C’est la définition de la transmission interhumaine donnée pour l’oxyurose.' },
      { text: 'Toute oxyurose et toute ascaridiose entraînent obligatoirement une éosinophilie permanente', correct: false, correction: 'Non chef. Le cours relie surtout l’éosinophilie à la migration larvaire tissulaire d’Ascaris ; ce n’est pas une règle permanente pour ces deux parasitoses.' },
    ],
    explanation: 'Les deux parasitoses ont une transmission orale, mais l’ascaridiose exige la maturation environnementale des œufs. Le cours associe la prévention collective à l’oxyurose et cite un traitement médicamenteux possible de l’ascaridiose. (Cours, p. 2, 4–5 et 9)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle classification correspond au ténia responsable d’un téniasis ?',
    options: [
      { text: 'Un protozoaire unicellulaire', correct: false, correction: 'Faux. Le ténia est un ver ; le téniasis est donc une helminthose.' },
      { text: 'Un nématode, c’est-à-dire un ver rond', correct: false, correction: 'Non chef. Le ténia est un ver plat, pas un ver rond.' },
      { text: 'Un ver plat appartenant aux cestodes', correct: true, correction: 'Oui boss 🧠 Cestode = ver plat ; c’est la classification donnée dans le cours.' },
      { text: 'Un parasite dont la forme adulte reste limitée à quelques millimètres', correct: false, correction: 'Non chef. Un ténia adulte peut au contraire atteindre plusieurs mètres.' },
      { text: 'Un trématode non segmenté', correct: false, correction: 'Non. Le ténia appartient aux cestodes et possède une succession de segments.' },
    ],
    explanation: 'Le téniasis est une helminthose. Le ténia est un ver plat appartenant aux cestodes, dont la forme adulte peut atteindre plusieurs mètres. (Cours, p. 13 et 31 PDF.)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant la morphologie générale du ténia, quelles propositions sont exactes ?',
    options: [
      { text: 'Le ver adulte peut atteindre plusieurs mètres de longueur', correct: true, correction: 'Oui 🧠 Le cours décrit parfois plus de 5 à 10 mètres.' },
      { text: 'Le scolex est la partie antérieure permettant la fixation au tube digestif', correct: true, correction: 'Oui boss 🎯 Le scolex sert à fixer le parasite.' },
      { text: 'Le scolex correspond à un anneau détaché éliminé avec les selles', correct: false, correction: 'Faux. Le scolex est la partie antérieure fixée ; ce sont notamment les anneaux anciens qui se détachent.' },
      { text: 'Tous les anneaux ont exactement le même stade de développement', correct: false, correction: 'Non chef. Les anneaux sont progressivement plus matures à mesure qu’ils s’éloignent du scolex.' },
      { text: 'Le corps comporte une succession de segments appelés proglottis', correct: true, correction: 'Exact. Les proglottis sont les anneaux du ténia.' },
    ],
    explanation: 'Le ténia possède un scolex antérieur assurant sa fixation et une succession de proglottis à des stades de maturation différents. Sa longueur peut atteindre plusieurs mètres. (Cours, p. 13–14 et 31 PDF.)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Où se trouvent les proglottis les plus jeunes d’un ténia ?',
    options: [
      { text: 'Dans les muscles du bovin, autour du ver adulte', correct: false, correction: 'Non chef. Le bovin héberge les larves de T. saginata ; le ver adulte segmenté est dans l’intestin humain.' },
      { text: 'Près du scolex', correct: true, correction: 'Oui boss 🎯 Les nouveaux anneaux sont produits près du scolex puis deviennent plus matures en s’en éloignant.' },
      { text: 'Uniquement parmi les anneaux déjà éliminés dans les selles', correct: false, correction: 'Faux. Les anneaux éliminés sont notamment les plus anciens, pas ceux qui viennent d’être produits.' },
      { text: 'À une position aléatoire sans lien avec leur maturation', correct: false, correction: 'Non. Le cours décrit un gradient de maturation à partir du scolex.' },
      { text: 'À l’extrémité la plus éloignée du scolex', correct: false, correction: 'Non chef. Cette extrémité correspond aux anneaux les plus anciens.' },
    ],
    explanation: 'Les anneaux les plus jeunes sont proches du scolex. Ils deviennent progressivement plus matures en s’en éloignant ; les plus anciens sont à l’extrémité du ver. (Cours, p. 13 et 15 PDF.)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Concernant l’élimination des proglottis et la poursuite du cycle du ténia, quelles propositions sont exactes ?',
    options: [
      { text: 'Des anneaux peuvent être éliminés dans le milieu extérieur, notamment avec les selles', correct: true, correction: 'Exact. Cela permet la dissémination des œufs dans l’environnement.' },
      { text: 'Les anneaux anciens peuvent se détacher du ver', correct: true, correction: 'Oui boss 🧠 Leur détachement fait partie de la poursuite du cycle.' },
      { text: 'Les anneaux éliminés sont dépourvus d’œufs et n’ont aucun rôle dans la transmission', correct: false, correction: 'Non chef. Ces anneaux contiennent des œufs et participent à la contamination de l’environnement.' },
      { text: 'Un anneau récupéré peut être adressé au laboratoire de parasitologie pour identification', correct: true, correction: 'Exact. Le professeur cite cette possibilité pour identifier le parasite.' },
      { text: 'La présence d’anneaux mobiles peut faire suspecter un téniasis', correct: true, correction: 'Oui 🎯 Le cours décrit des éléments blanchâtres, aplatis et mobiles comme un indice diagnostique.' },
    ],
    explanation: 'Les proglottis anciens peuvent se détacher et être éliminés. Ils contiennent des œufs qui poursuivent le cycle ; leur observation et leur identification peuvent contribuer au diagnostic. (Cours, p. 14–16 PDF.)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel aliment constitue la source classique d’un téniasis à Taenia saginata dans le cours ?',
    options: [
      { text: 'De la viande de bœuf crue ou insuffisamment cuite contenant des larves', correct: true, correction: 'Oui boss 🎯 Bœuf parasité + larves survivantes à la préparation = contamination possible.' },
      { text: 'De la viande de porc crue contenant les larves de T. saginata', correct: false, correction: 'Faux. Le porc est l’hôte intermédiaire habituel de T. solium ; T. saginata est le ténia du bœuf.' },
      { text: 'De la viande bovine contenant des larves entièrement détruites par une cuisson à cœur', correct: false, correction: 'Non chef. Pour entraîner la contamination, les larves doivent survivre ; une cuisson à cœur permet de les détruire.' },
      { text: 'Des crudités contaminées par des œufs de T. solium', correct: false, correction: 'Non. L’ingestion d’œufs de T. solium peut entraîner une cysticercose ; elle ne correspond pas au téniasis à T. saginata demandé ici.' },
      { text: 'Du poisson cru contenant les larves de T. saginata', correct: false, correction: 'Non chef. Le cycle classique de T. saginata implique le bovin, pas le poisson.' },
    ],
    explanation: 'La contamination par T. saginata se fait classiquement par consommation de viande bovine contenant des larves, crue ou insuffisamment cuite. (Cours, p. 15 et 31 PDF.)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Dans le cycle classique de Taenia saginata, quelles associations entre hôte, forme et localisation sont exactes ?',
    options: [
      { text: 'Le bovin est l’hôte intermédiaire', correct: true, correction: 'Exact. Il héberge les formes larvaires après ingestion des œufs.' },
      { text: 'Les larves se trouvent notamment dans les muscles du bovin', correct: true, correction: 'Oui 🎯 Cela explique la contamination humaine par la viande bovine.' },
      { text: 'L’Homme héberge le ver adulte dans son intestin', correct: true, correction: 'Oui boss 🧠 L’Homme est l’hôte de la forme adulte digestive.' },
      { text: 'Le porc est l’hôte intermédiaire habituel de T. saginata', correct: false, correction: 'Faux. T. saginata implique le bovin ; le porc intervient dans le cycle habituel de T. solium.' },
      { text: 'Le bovin héberge habituellement le ver adulte dans son intestin', correct: false, correction: 'Non chef. Tu inverses les hôtes : la forme adulte décrite est dans l’intestin humain.' },
    ],
    explanation: 'T. saginata alterne entre l’Homme, qui héberge l’adulte intestinal, et le bovin, hôte intermédiaire des larves notamment musculaires. (Cours, p. 15–16 et 31 PDF.)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel enchaînement résume correctement le cycle classique de Taenia saginata ?',
    options: [
      { text: 'Porc → larves musculaires → viande porcine contaminée → Homme → bovin', correct: false, correction: 'Non chef. La viande porcine correspond au cycle habituel de T. solium, pas à celui de T. saginata.' },
      { text: 'Bovin porteur de l’adulte → œufs dans les selles bovines → Homme → larves dans les muscles humains', correct: false, correction: 'Faux. Le bovin n’est pas l’hôte habituel de l’adulte ; l’Homme héberge l’adulte intestinal dans ce cycle.' },
      { text: 'Homme porteur de l’adulte → contact direct → autre Homme porteur de l’adulte, sans animal intermédiaire', correct: false, correction: 'Non. Le cycle de T. saginata décrit est indirect et comporte un bovin intermédiaire.' },
      { text: 'Homme porteur de l’adulte → œufs dans l’environnement → bovin → larves musculaires → viande bovine contaminée → Homme', correct: true, correction: 'Oui boss 🎯 Les œufs infectent le bovin ; les larves de sa viande infectent ensuite l’Homme.' },
      { text: 'Homme porteur de l’adulte → larves dans l’herbe → bovin porteur de l’adulte → œufs dans la viande → Homme', correct: false, correction: 'Non chef. Ce sont les œufs qui contaminent les pâturages et les larves qui se développent dans le bovin.' },
    ],
    explanation: 'Le cycle résumé dans le cours relie les œufs éliminés par l’Homme, leur ingestion par le bovin, le développement des larves musculaires puis leur ingestion par l’Homme avec la viande. (Cours, p. 15–16 PDF.)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Concernant la contamination du bovin par Taenia saginata, quelles propositions sont exactes ?',
    options: [
      { text: 'Le bovin se contamine en ingérant des œufs, notamment en broutant', correct: true, correction: 'Exact. La forme ingérée par le bovin est l’œuf.' },
      { text: 'Les formes larvaires peuvent ensuite atteindre les muscles du bovin', correct: true, correction: 'Oui 🎯 Le bovin devient l’hôte intermédiaire des larves musculaires.' },
      { text: 'Le bovin se contamine classiquement en avalant de la viande humaine contenant des larves', correct: false, correction: 'Non chef. Le cycle enseigné repose sur l’ingestion d’œufs présents dans l’environnement.' },
      { text: 'Les œufs éliminés par l’Homme peuvent contaminer les pâturages', correct: true, correction: 'Oui boss 🧠 L’environnement fait le lien entre le porteur humain et le bovin.' },
      { text: 'L’ingestion des œufs transforme le bovin en hôte de l’adulte intestinal', correct: false, correction: 'Faux. Dans ce cycle, l’adulte intestinal se développe chez l’Homme, après ingestion des larves.' },
    ],
    explanation: 'Le bovin ingère des œufs présents dans les pâturages contaminés. Ceux-ci donnent des formes larvaires qui atteignent notamment les muscles. (Cours, p. 15–16 PDF.)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle forme de Taenia saginata ingérée avec une viande bovine contaminée est à l’origine du téniasis humain ?',
    options: [
      { text: 'Un proglottis mature contenant des œufs', correct: false, correction: 'Faux. Les proglottis disséminent les œufs dans l’environnement ; la contamination humaine décrite passe par les larves du bovin.' },
      { text: 'Un œuf de T. solium', correct: false, correction: 'Non chef. Son ingestion peut entraîner une cysticercose, pas le téniasis à T. saginata décrit ici.' },
      { text: 'Une larve détruite par une cuisson complète', correct: false, correction: 'Non. La contamination suppose la survie des larves présentes dans la viande.' },
      { text: 'Un œuf de T. saginata, qui constitue aussi le stade ingéré par le bovin', correct: false, correction: 'Non chef. Le bovin ingère les œufs ; l’Homme se contamine classiquement en ingérant les larves de la viande bovine.' },
      { text: 'Une forme larvaire survivant dans la viande crue ou insuffisamment cuite', correct: true, correction: 'Oui boss 🎯 La larve arrive dans le tube digestif humain et se développe en ténia adulte.' },
    ],
    explanation: 'L’Homme se contamine en ingérant les formes larvaires présentes dans la viande bovine. Elles se développent ensuite en adultes dans l’intestin. (Cours, p. 15–16 PDF.)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Concernant la préparation de la viande et la prévention de T. saginata, quelles propositions sont exactes ?',
    options: [
      { text: 'Toute durée de congélation, même très brève, a nécessairement la même efficacité', correct: false, correction: 'Faux. La congélation doit être appropriée ; on ne peut pas en déduire que toutes les conditions se valent.' },
      { text: 'Une viande simplement saisie en surface garantit l’élimination des larves présentes au centre', correct: false, correction: 'Non chef. Le cours insiste sur la cuisson à cœur, pas uniquement sur la surface.' },
      { text: 'Une préparation correcte de la viande diminue fortement le risque de transmission', correct: true, correction: 'Oui 🎯 Le risque dépend de la survie des formes larvaires dans la viande.' },
      { text: 'Une cuisson à cœur permet de détruire les larves', correct: true, correction: 'Oui boss 🧠 La destruction des larves réduit le risque lié à la consommation de viande.' },
      { text: 'Une congélation appropriée peut détruire ou inactiver les larves', correct: true, correction: 'Exact. Le support cite cette possibilité sans fournir de protocole précis.' },
    ],
    explanation: 'Le cours décrit la cuisson à cœur et une congélation appropriée comme moyens de destruction ou d’inactivation des larves. Il ne donne pas de durée ni de température à retenir. (Cours, p. 16 PDF.)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle description clinique correspond le mieux au téniasis habituel selon le cours ?',
    options: [
      { text: 'Une atteinte cérébrale due au ver adulte intestinal dans tous les cas', correct: false, correction: 'Non chef. Le téniasis est digestif ; la neurocysticercose correspond à des larves de T. solium dans le système nerveux.' },
      { text: 'Une infection souvent asymptomatique ou peu symptomatique malgré la taille du parasite', correct: true, correction: 'Oui boss 🧠 Le caractère spectaculaire du ver ne préjuge pas d’une maladie sévère chez son hôte.' },
      { text: 'Une maladie obligatoirement accompagnée d’une anémie sévère', correct: false, correction: 'Faux. Le cours ne décrit pas d’anémie sévère systématique ; le cas introductif n’a pas d’anémie.' },
      { text: 'Une maladie toujours immédiatement très symptomatique', correct: false, correction: 'Non chef. Le portage peut rester longtemps discret ou asymptomatique.' },
      { text: 'Une infection dont la seule manifestation possible est une appendicite', correct: false, correction: 'Non. L’appendicite est une complication exceptionnelle, parmi d’autres manifestations possibles.' },
    ],
    explanation: 'Le téniasis peut être longtemps silencieux ou peu symptomatique. Le parasite est relativement adapté à son hôte et ne provoque pas systématiquement de lésions importantes. (Cours, p. 16–17 et 31 PDF.)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles manifestations peuvent accompagner un téniasis selon le cours ?',
    options: [
      { text: 'Des douleurs abdominales', correct: true, correction: 'Oui boss 🎯 Elles font partie des troubles digestifs possibles.' },
      { text: 'Une fatigue ou une perte de poids', correct: true, correction: 'Oui 🧠 Elles peuvent accompagner le portage, même si l’infection reste souvent discrète.' },
      { text: 'Des modifications de l’appétit', correct: true, correction: 'Exact. Le cours mentionne des troubles de l’appétit chez certaines personnes.' },
      { text: 'Une anémie sévère systématique, nécessaire au diagnostic', correct: false, correction: 'Non chef. Une anémie sévère n’est pas systématique et son absence n’exclut pas un téniasis.' },
      { text: 'Des diarrhées ou une constipation', correct: true, correction: 'Exact. Les deux sont citées ; aucun n’est obligatoire.' },
    ],
    explanation: 'Les manifestations possibles comprennent douleurs abdominales, diarrhées, constipation, fatigue, perte de poids et troubles de l’appétit. Le téniasis reste souvent asymptomatique ou peu symptomatique. (Cours, p. 13, 17 et 31 PDF.)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Que dit le cours de la durée de persistance possible d’un ténia dans le tube digestif humain ?',
    options: [
      { text: 'Le ver disparaît obligatoirement après la première élimination d’un anneau', correct: false, correction: 'Faux. Le détachement d’anneaux fait partie du fonctionnement du ver ; il ne signifie pas sa disparition.' },
      { text: 'Le ver peut persister plusieurs années, le cours citant 8, 10, voire 15 ans', correct: true, correction: 'Oui boss 🎯 Une infection peu symptomatique peut durer très longtemps.' },
      { text: 'Le ver ne survit dans l’intestin que pendant quelques jours avant de migrer obligatoirement au cerveau', correct: false, correction: 'Non chef. Cela confond le téniasis intestinal avec la neurocysticercose larvaire de T. solium.' },
      { text: 'Le ver disparaît obligatoirement en moins de 24 heures', correct: false, correction: 'Non chef. Il peut persister pendant des années.' },
      { text: 'Le ver ne peut persister que si une anémie sévère est présente', correct: false, correction: 'Non. Le cours décrit une longue persistance possible même avec un portage discret.' },
    ],
    explanation: 'Le cours rapporte une persistance possible du ténia pendant 8, 10, voire 15 ans dans le tube digestif, parfois sans symptômes majeurs. (Cours, p. 17 et 31 PDF.)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant les complications digestives et les limites du tableau clinique du téniasis, quelles propositions sont exactes ?',
    options: [
      { text: 'L’appendicite est une conséquence obligatoire de tout portage', correct: false, correction: 'Non chef. Le cours insiste sur le caractère exceptionnel de cette complication.' },
      { text: 'L’absence de symptômes majeurs n’exclut pas le portage du ténia', correct: true, correction: 'Oui 🎯 Le téniasis peut être silencieux pendant une longue période.' },
      { text: 'Une obstruction ou une irritation appendiculaire par un anneau peut être associée à une appendicite', correct: true, correction: 'Exact. Il s’agit d’une complication possible mais rare.' },
      { text: 'Un proglottis peut exceptionnellement être retrouvé au niveau de l’appendice', correct: true, correction: 'Oui boss 🧠 Le professeur présente ce type de situation lors d’une appendicectomie.' },
      { text: 'Un bilan biologique normal suffit à exclure un téniasis', correct: false, correction: 'Faux. Dans le cas introductif, le bilan de base est globalement normal alors que l’examen parasitologique est positif.' },
    ],
    explanation: 'Une appendicite liée à un proglottis est une situation exceptionnelle. L’absence de symptômes majeurs ou un bilan biologique de base normal n’excluent pas le portage. (Cours, p. 13, 16–17 et 31 PDF.)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle association décrit le cycle habituel de Taenia solium ?',
    options: [
      { text: 'Homme : ver adulte dans le cerveau ; porc : ver adulte dans l’intestin', correct: false, correction: 'Non chef. Une atteinte cérébrale correspond à des formes larvaires chez l’Homme, pas à un ténia adulte.' },
      { text: 'Porc : adulte intestinal ; Homme : œufs dans les muscles', correct: false, correction: 'Faux. Le porc héberge les larves et l’Homme l’adulte intestinal dans le cycle habituel.' },
      { text: 'Bovin : larves musculaires ; Homme : adulte intestinal', correct: false, correction: 'Non chef. Cette association décrit le cycle classique de T. saginata.' },
      { text: 'Porc : formes larvaires ; Homme : ver adulte intestinal', correct: true, correction: 'Oui boss 🎯 T. solium est le ténia du porc ; le porc est son hôte intermédiaire habituel.' },
      { text: 'Poisson : formes larvaires ; Homme : ver adulte intestinal', correct: false, correction: 'Non. Le cycle habituel de T. solium implique le porc, pas le poisson.' },
    ],
    explanation: 'Dans son cycle habituel, T. solium comporte un stade larvaire chez le porc et un stade adulte intestinal chez l’Homme. (Cours, p. 17–18 et 31 PDF.)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Concernant la cysticercose humaine liée à Taenia solium, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle correspond à des formes larvaires dans les tissus humains', correct: true, correction: 'Exact. Cysticercose = localisation tissulaire de larves de T. solium.' },
      { text: 'Elle correspond simplement au ver adulte dans l’intestin humain', correct: false, correction: 'Non chef. L’adulte intestinal correspond au téniasis, pas à la cysticercose.' },
      { text: 'Elle est la conséquence classique de l’ingestion de larves de T. saginata dans le bœuf', correct: false, correction: 'Faux. Le bœuf parasité peut transmettre un téniasis à T. saginata ; la cysticercose humaine décrite concerne les œufs de T. solium.' },
      { text: 'L’Homme devient un hôte intermédiaire accidentel', correct: true, correction: 'Oui boss 🧠 Il prend la place habituellement occupée par le porc pour le développement larvaire.' },
      { text: 'Elle peut survenir après ingestion d’œufs de T. solium', correct: true, correction: 'Oui 🎯 Le stade ingéré est essentiel : les œufs peuvent donner une cysticercose.' },
    ],
    explanation: 'La cysticercose correspond aux larves de T. solium dans les tissus humains. Elle résulte de l’ingestion d’œufs ; l’Homme devient alors un hôte intermédiaire accidentel. (Cours, p. 18 et 31 PDF.)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle situation peut entraîner directement une cysticercose humaine dans le cycle de T. solium ?',
    options: [
      { text: 'La seule présence de troubles de l’appétit chez un porteur de ténia', correct: false, correction: 'Non chef. Un symptôme digestif ne constitue ni une voie de contamination ni la preuve d’une cysticercose.' },
      { text: 'La maturation obligatoire de tout adulte de T. solium en larves cérébrales', correct: false, correction: 'Non. Le téniasis et la cysticercose correspondent à des formes et des modalités de contamination différentes.' },
      { text: 'L’ingestion d’œufs de T. solium', correct: true, correction: 'Oui boss 🎯 Les œufs peuvent donner des larves dans les tissus de l’Homme, devenu hôte intermédiaire accidentel.' },
      { text: 'L’ingestion de larves de T. saginata dans du bœuf cru', correct: false, correction: 'Faux. Elle est à l’origine d’un téniasis à T. saginata, pas de la cysticercose humaine décrite.' },
      { text: 'L’ingestion de larves de T. solium présentes dans du porc insuffisamment cuit', correct: false, correction: 'Non chef. Cette ingestion donne le téniasis intestinal à T. solium ; la cysticercose résulte de l’ingestion d’œufs.' },
    ],
    explanation: 'Il faut distinguer l’ingestion de larves de T. solium avec la viande porcine, donnant un téniasis, de l’ingestion d’œufs, pouvant entraîner une cysticercose. (Cours, p. 17–18 et 31 PDF.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles associations entre contamination et forme de parasitose sont exactes ?',
    options: [
      { text: 'Œufs de T. saginata ingérés par le bovin → adulte intestinal bovin', correct: false, correction: 'Faux. Les œufs donnent les formes larvaires chez le bovin, notamment dans les muscles.' },
      { text: 'Œufs de T. solium ingérés par l’Homme → possibilité de cysticercose', correct: true, correction: 'Oui 🎯 L’Homme peut alors héberger les formes larvaires dans ses tissus.' },
      { text: 'Larves de T. solium dans la viande porcine → cysticercose cérébrale obligatoire', correct: false, correction: 'Non chef. Tu confonds les larves ingérées pour le téniasis avec les œufs ingérés pour la cysticercose.' },
      { text: 'Larves de T. saginata dans du bœuf cru ou insuffisamment cuit → téniasis intestinal', correct: true, correction: 'Oui boss 🧠 La larve ingérée se développe en adulte intestinal chez l’Homme.' },
      { text: 'Larves de T. solium dans du porc cru ou insuffisamment cuit → téniasis intestinal', correct: true, correction: 'Exact. Dans le cycle habituel du ténia du porc, l’Homme héberge l’adulte.' },
    ],
    explanation: 'Le stade infectant et l’espèce sont déterminants : les larves présentes dans la viande donnent un téniasis humain ; les œufs de T. solium peuvent entraîner une cysticercose chez l’Homme. (Cours, p. 15–18 et 31 PDF.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Que désigne la neurocysticercose ?',
    options: [
      { text: 'La présence d’œufs de T. saginata dans les selles humaines', correct: false, correction: 'Non. Les œufs éliminés dans les selles participent au cycle ; ils ne définissent pas une atteinte neurologique.' },
      { text: 'Une fatigue liée au prélèvement de nutriments par T. saginata', correct: false, correction: 'Faux. La neurocysticercose correspond à une localisation larvaire dans le système nerveux.' },
      { text: 'Une appendicite due à un proglottis de ténia', correct: false, correction: 'Non chef. Il s’agit d’une complication digestive distincte.' },
      { text: 'Le passage obligatoire d’un ténia adulte de l’intestin au cerveau', correct: false, correction: 'Non chef. Il s’agit de formes larvaires, pas de la migration obligatoire de l’adulte intestinal.' },
      { text: 'Une atteinte du système nerveux par les formes larvaires de T. solium', correct: true, correction: 'Oui boss 🎯 Le cours décrit notamment des larves dans le parenchyme cérébral.' },
    ],
    explanation: 'La neurocysticercose est une localisation de larves de T. solium dans le système nerveux. Le cours décrit notamment leur installation dans le parenchyme cérébral. (Cours, p. 18 et 31 PDF.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles manifestations peuvent être liées à une neurocysticercose selon le cours ?',
    options: [
      { text: 'Des pertes de connaissance', correct: true, correction: 'Exact. Elles font partie des manifestations neurologiques citées.' },
      { text: 'Une absence garantie de manifestations dès lors que les larves ne sont plus dans l’intestin', correct: false, correction: 'Non chef. Des larves situées dans le cerveau peuvent justement provoquer des manifestations importantes.' },
      { text: 'Des crises d’épilepsie', correct: true, correction: 'Oui boss 🧠 Les lésions provoquées par les larves peuvent se manifester par des crises.' },
      { text: 'Des atteintes des fonctions cognitives dans certaines formes sévères', correct: true, correction: 'Exact. Le cours mentionne ces conséquences dans certaines situations sévères.' },
      { text: 'Des troubles neurologiques variables selon le nombre et la localisation des larves', correct: true, correction: 'Oui 🎯 La topographie et l’importance des lésions influencent le tableau.' },
    ],
    explanation: 'La neurocysticercose peut entraîner épilepsie, pertes de connaissance, troubles neurologiques et atteintes cognitives dans certaines formes sévères. Les conséquences dépendent notamment du nombre et de la localisation des larves. (Cours, p. 18 PDF.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement le contexte géographique de la neurocysticercose pour un patient vu en France métropolitaine ?',
    options: [
      { text: 'Elle est impossible si le patient consulte en France', correct: false, correction: 'Non chef. Le lieu de consultation ne résume pas les lieux de vie et d’exposition du patient.' },
      { text: 'Elle est une conséquence systématique de toute consommation de bœuf cru en France', correct: false, correction: 'Faux. La cysticercose concerne l’ingestion d’œufs de T. solium, pas les larves de T. saginata dans le bœuf.' },
      { text: 'Les voyages et les lieux de vie n’apportent aucune information utile', correct: false, correction: 'Non. Le cours insiste sur l’intérêt de connaître ces expositions géographiques.' },
      { text: 'Elle est rare en France métropolitaine, mais un séjour ou une vie dans une région où T. solium circule peut orienter l’interrogatoire', correct: true, correction: 'Oui boss 🎯 Voyages, migrations et séjours prolongés peuvent aider à comprendre une exposition antérieure.' },
      { text: 'Elle est obligatoirement présente chez toute personne venant d’une région tropicale', correct: false, correction: 'Non chef. Un contexte d’exposition oriente le raisonnement ; il ne suffit pas à affirmer l’infection.' },
    ],
    explanation: 'La neurocysticercose est rare en France métropolitaine mais peut concerner des personnes ayant vécu ou séjourné dans des régions où T. solium est plus fréquent. (Cours, p. 18 PDF.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Concernant la répartition et les hôtes des ténias décrits dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Le seul fait de vivre en Europe exclut définitivement tout téniasis', correct: false, correction: 'Faux. Le cours indique une présence dans les pays occidentaux, dont la France.' },
      { text: 'Le téniasis peut être rencontré dans les pays occidentaux, y compris en France', correct: true, correction: 'Oui boss 🧠 Les ténias ne sont pas limités aux régions tropicales.' },
      { text: 'T. solium est plus fréquent dans certaines régions d’Asie, d’Amérique latine et d’Afrique', correct: true, correction: 'Exact. Le cours cite ces régions, sans en faire une répartition exclusive.' },
      { text: 'Toutes les espèces de ténia peuvent utiliser indifféremment le bovin, le porc ou le poisson', correct: false, correction: 'Non chef. Chaque espèce possède une adaptation à ses hôtes et un cycle spécifique.' },
      { text: 'Les habitudes alimentaires peuvent influencer la fréquence de T. saginata', correct: true, correction: 'Oui 🎯 La consommation de viande bovine crue ou insuffisamment cuite intervient dans l’exposition.' },
    ],
    explanation: 'Le téniasis est rencontré dans le monde, y compris en France. T. solium est plus fréquent dans certaines régions d’Asie, d’Amérique latine et d’Afrique ; les espèces possèdent des cycles spécifiques et les habitudes alimentaires modifient les expositions. (Cours, p. 14–15 et 18–19 PDF.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Pourquoi ne peut-on pas remplacer librement le bovin par n’importe quel autre animal dans le cycle de T. saginata ?',
    options: [
      { text: 'Parce que le parasite est adapté aux caractéristiques et aux conditions de développement propres à ses hôtes', correct: true, correction: 'Oui boss 🧠 Cette spécificité résulte d’une adaptation évolutive, notamment à la physiologie et à l’immunité de l’hôte.' },
      { text: 'Parce qu’un parasite ne peut se développer que chez l’animal consommé le plus fréquemment', correct: false, correction: 'Non. Les habitudes alimentaires influencent l’exposition humaine, mais ne déterminent pas seules la compatibilité biologique avec l’hôte.' },
      { text: 'Parce que le parasite n’a de forme larvaire chez aucun animal', correct: false, correction: 'Non chef. T. saginata possède justement un stade larvaire chez le bovin ; la question est celle de la compatibilité avec l’hôte.' },
      { text: 'Parce que les hôtes sont choisis uniquement selon leur taille', correct: false, correction: 'Faux. Le cours met en avant l’adaptation physiologique, digestive et immunitaire.' },
      { text: 'Parce que tous les ténias ont exactement les mêmes hôtes', correct: false, correction: 'Non chef. Les espèces possèdent au contraire des cycles et des adaptations spécifiques.' },
    ],
    explanation: 'Les cycles parasitaires résultent d’adaptations évolutives aux caractéristiques physiologiques, digestives, immunitaires et aux conditions de développement des hôtes. Les hôtes ne sont donc pas librement interchangeables. (Cours, p. 18–19 PDF.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Concernant les traitements antiparasitaires systématiques ou de masse chez l’Homme, quelles propositions sont exactes selon le cours ?',
    options: [
      { text: 'Le coût, les effets indésirables et le risque de sélection de résistances doivent entrer dans l’évaluation', correct: true, correction: 'Exact. Le cours les cite dans la balance bénéfice/risque.' },
      { text: 'Les pratiques antiparasitaires d’un élevage peuvent être transposées à tous les humains sans évaluation', correct: false, correction: 'Faux. Le cours insiste sur une stratégie adaptée au contexte et au rapport bénéfice/risque.' },
      { text: 'Des campagnes de traitement de masse peuvent être mises en place dans des régions où les parasitoses sont très fréquentes', correct: true, correction: 'Oui 🧠 Le bénéfice peut être différent lorsqu’une proportion importante de la population est exposée ou infectée.' },
      { text: 'La stratégie doit tenir compte de la fréquence des parasitoses dans la population concernée', correct: true, correction: 'Oui boss 🎯 Le contexte épidémiologique influence le bénéfice attendu d’un traitement de masse.' },
      { text: 'Une faible fréquence de parasitisme justifie automatiquement le traitement régulier de toute la population', correct: false, correction: 'Non chef. Dans une population peu touchée, un traitement systématique n’est pas forcément pertinent.' },
    ],
    explanation: 'Le traitement systématique dépend du contexte, du nombre de personnes infectées, du coût, des effets indésirables et du risque de résistance. Le cours distingue les régions peu touchées des situations où des traitements de masse peuvent être pertinents. (Cours, p. 19 PDF.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Dans une école, plusieurs enfants de 4 à 5 ans présentent des diarrhées mousseuses sans fièvre. Les recherches bactériennes et virales dans les selles sont négatives, mais l’examen parasitologique montre des éléments compatibles avec des kystes de Giardia. Quel diagnostic est le plus probable ?',
    options: [
      { text: 'Une infection virale confirmée par la présence de kystes', correct: false, correction: 'Non. Les kystes décrits appartiennent au parasite, pas à un virus.' },
      { text: 'Une giardiose', correct: true, correction: 'Oui boss 🧠 L’examen parasitologique oriente ici vers Giardia, malgré les recherches bactériennes et virales négatives.' },
      { text: 'Une infection bactérienne démontrée par les examens négatifs', correct: false, correction: 'Non chef. Des recherches bactériennes négatives ne démontrent pas une infection bactérienne.' },
      { text: 'Un téniasis, puisque tout parasite intestinal est un ver', correct: false, correction: 'Faux. Giardia est un protozoaire unicellulaire, pas un ténia.' },
      { text: 'Une diarrhée forcément non infectieuse du fait de l’absence de fièvre', correct: false, correction: 'Non chef. Une giardiose peut se présenter sans fièvre, comme dans ce cas.' },
    ],
    explanation: 'Le cas introductif associe des diarrhées mousseuses afébriles chez des enfants, des recherches bactériennes et virales négatives et des kystes compatibles avec Giardia à l’examen parasitologique des selles. (Cours, p. 20)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles caractéristiques de la giardiose sont présentées dans le cours ?',
    options: [
      { text: 'Elle est exclusivement tropicale et absente de France métropolitaine', correct: false, correction: 'Non chef. Cosmopolite signifie justement qu’elle n’est pas limitée aux régions tropicales.' },
      { text: 'Elle possède des réservoirs humains et animaux', correct: true, correction: 'Oui. C’est l’une des raisons de son caractère zoonotique dans la présentation du cours.' },
      { text: 'C’est une parasitose cosmopolite', correct: true, correction: 'Exact. Le cours précise qu’elle peut être rencontrée sous toutes les latitudes.' },
      { text: 'C’est une infection digestive due à un protozoaire unicellulaire', correct: true, correction: 'Oui boss 🧠 Giardia est un parasite unicellulaire qui vit dans le tube digestif.' },
      { text: 'Sa transmission relève d’un mécanisme féco-oral', correct: true, correction: 'Exact 🎯 Des formes éliminées dans les selles sont ensuite réingérées.' },
    ],
    explanation: 'La giardiose, ou lambliose, est une protozoose digestive unicellulaire, cosmopolite et zoonotique, à transmission féco-orale directe ou indirecte. (Cours, p. 20–22)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quelle description morphologique correspond aux formes végétatives de Giardia dans le cours ?',
    options: [
      { text: 'Une structure immobile correspondant à la forme de résistance extérieure', correct: false, correction: 'Non chef. Tu décris le rôle du kyste, alors que la question porte sur le trophozoïte.' },
      { text: 'Une forme évoquant un cerf-volant ou une poire aplatie', correct: true, correction: 'Oui boss 🎯 C’est l’aspect caractéristique décrit pour les trophozoïtes.' },
      { text: 'Une forme sphérique dont l’aspect est identique de face et de profil', correct: false, correction: 'Non. Le cours décrit une forme aplatie et un aspect différent selon l’orientation.' },
      { text: 'Un ver plat constitué d’anneaux successifs', correct: false, correction: 'Non chef. Cette description évoque un cestode, pas Giardia.' },
      { text: 'Un œuf d’helminthe muni d’une coque épaisse', correct: false, correction: 'Faux. Une forme végétative de Giardia n’est pas un œuf de ver.' },
    ],
    explanation: 'Les formes végétatives de Giardia ont une morphologie évoquant un cerf-volant ou une poire aplatie. Leur aspect varie selon l’orientation : caractéristique de face, plus fin de profil. (Cours, p. 20)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement trophozoïtes et kystes de Giardia ?',
    options: [
      { text: 'Les trophozoïtes constituent les principales formes résistantes du milieu extérieur', correct: false, correction: 'Non chef. Tu inverses les rôles : la résistance extérieure est associée aux kystes.' },
      { text: 'Les trophozoïtes sont les formes végétatives mobiles', correct: true, correction: 'Oui boss 🧠 Trophozoïte = forme végétative mobile dans ce cours.' },
      { text: 'Les kystes jouent un rôle important dans la transmission', correct: true, correction: 'Exact 🎯 C’est la forme à retenir pour le passage par l’environnement.' },
      { text: 'Les formes végétatives vivent dans le tube digestif', correct: true, correction: 'Exact. Elles peuvent notamment adhérer à la muqueuse digestive.' },
      { text: 'Les kystes sont des formes immobiles de résistance', correct: true, correction: 'Oui. Leur résistance permet la survie dans le milieu extérieur.' },
    ],
    explanation: 'Le cours distingue les trophozoïtes mobiles vivant dans le tube digestif et les kystes immobiles, résistants dans le milieu extérieur et importants pour la transmission. (Cours, p. 20 et 32)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quelle forme de Giardia explique principalement sa persistance dans une eau souillée et sa transmission à une nouvelle personne ?',
    options: [
      { text: 'Le kyste, forme de résistance du parasite', correct: true, correction: 'Oui boss 🧠 Sa résistance dans le milieu extérieur permet sa réingestion.' },
      { text: 'Le trophozoïte, présenté comme la principale forme résistante extérieure', correct: false, correction: 'Non. Dans ce cycle, c’est le kyste qui assure la résistance dans l’environnement.' },
      { text: 'Une larve enkystée de ver', correct: false, correction: 'Faux. Un kyste de Giardia n’est pas une larve d’helminthe.' },
      { text: 'Un anneau gravide', correct: false, correction: 'Non chef. Giardia ne produit pas d’anneaux de ténia.' },
      { text: 'Un œuf de Giardia contenant un embryon de ver', correct: false, correction: 'Non chef. Cette description correspond à un autre type de parasite.' },
    ],
    explanation: 'Les kystes résistent dans le milieu extérieur, notamment lorsque l’environnement ou l’eau sont contaminés. Leur ingestion permet la contamination d’un nouvel hôte. (Cours, p. 20 et 32)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quels réservoirs ou supports de contamination de Giardia sont cités dans le cours ?',
    options: [
      { text: 'Uniquement la viande contenant une larve musculaire', correct: false, correction: 'Non chef. Ce n’est pas le cycle de Giardia décrit ici.' },
      { text: 'Les aliments ou les mains contaminés puis portés à la bouche', correct: true, correction: 'Exact 🎯 Les crudités et les mains sales font partie des exemples donnés.' },
      { text: 'L’environnement, notamment des rivières ou des lacs contaminés', correct: true, correction: 'Oui. L’eau souillée peut participer à la transmission.' },
      { text: 'Les personnes contaminées', correct: true, correction: 'Oui boss 🧠 Le réservoir humain participe au cycle féco-oral.' },
      { text: 'Les animaux domestiques et sauvages', correct: true, correction: 'Exact. Le réservoir n’est pas uniquement humain.' },
    ],
    explanation: 'Le cours décrit des réservoirs humains, animaux et environnementaux. La contamination peut passer par une eau souillée, des aliments contaminés ou des mains contaminées portées à la bouche. (Cours, p. 20–21 et 32)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Chez un enfant présentant une diarrhée, les recherches bactériennes et virales dans les selles sont négatives. Quelle conclusion est correcte à partir du cas introductif ?',
    options: [
      { text: 'Un examen parasitologique est inutile en l’absence de fièvre', correct: false, correction: 'Non. Le cas du cours présente justement une giardiose sans fièvre.' },
      { text: 'La présence de plusieurs cas dans une école exclut une transmission féco-orale', correct: false, correction: 'Non chef. La transmission féco-orale peut justement intervenir en collectivité.' },
      { text: 'Une giardiose reste possible et peut être recherchée par l’examen parasitologique des selles', correct: true, correction: 'Oui boss 🧠 Le bilan parasitologique explore une autre catégorie d’agents infectieux.' },
      { text: 'La diarrhée est nécessairement liée à une maladie inflammatoire non infectieuse', correct: false, correction: 'Faux. Ce bilan ne suffit pas à imposer une cause non infectieuse.' },
      { text: 'Ces résultats excluent toutes les infections digestives', correct: false, correction: 'Non chef. Ils n’excluent pas une cause parasitaire.' },
    ],
    explanation: 'Dans le cas présenté, les examens bactériologiques et virologiques sont négatifs, tandis que l’examen parasitologique des selles met en évidence des éléments compatibles avec des kystes de Giardia. (Cours, p. 20)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles propositions décrivent l’action irritative de Giardia sur la muqueuse digestive ?',
    options: [
      { text: 'Les formes végétatives peuvent provoquer une irritation de la muqueuse', correct: true, correction: 'Exact. Le cours parle de tractions et d’un phénomène de succion.' },
      { text: 'Cette action peut contribuer à des douleurs abdominales, des ballonnements ou des spasmes', correct: true, correction: 'Oui 🎯 Ce sont les manifestations associées à l’irritation dans le support.' },
      { text: 'L’adhésion des trophozoïtes garantit une absence de symptômes digestifs', correct: false, correction: 'Faux. Elle peut au contraire participer aux symptômes.' },
      { text: 'Les trophozoïtes peuvent adhérer aux cellules digestives', correct: true, correction: 'Oui boss 🧠 Leur adhésion à la muqueuse est au cœur du mécanisme décrit.' },
      { text: 'L’action irritative nécessite des larves installées dans le cerveau', correct: false, correction: 'Non chef. Ici, les formes végétatives agissent à la surface de la muqueuse digestive.' },
    ],
    explanation: 'Les trophozoïtes adhèrent à la muqueuse digestive et peuvent exercer une action irritative. Le cours lui associe des douleurs abdominales, une irritation digestive, des ballonnements et des spasmes intestinaux. (Cours, p. 21 et 32)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Une charge importante de Giardia recouvre la muqueuse et gêne l’absorption des nutriments. Quel mécanisme du cours est principalement illustré ?',
    options: [
      { text: 'Une irritation isolée sans conséquence sur l’absorption', correct: false, correction: 'Non chef. La perturbation de l’absorption définit précisément la composante spoliatrice du scénario.' },
      { text: 'Une amélioration de l’absorption intestinale', correct: false, correction: 'Non chef. Le passage des nutriments à travers la muqueuse est ici perturbé.' },
      { text: 'Une invasion cérébrale par des larves', correct: false, correction: 'Faux. Cela ne correspond pas au mécanisme digestif de Giardia.' },
      { text: 'Une action mécanique d’un ver adulte fixé par son scolex', correct: false, correction: 'Non. Giardia est un protozoaire : le mécanisme décrit n’est pas celui d’un ténia.' },
      { text: 'L’action spoliatrice', correct: true, correction: 'Oui boss 🧠 La perturbation de l’absorption contribue aux carences et à l’amaigrissement.' },
    ],
    explanation: 'Le cours appelle action spoliatrice la perturbation de l’absorption liée à une forte présence de parasites à la surface de la muqueuse. Cette malabsorption peut entraîner des carences et un amaigrissement. (Cours, p. 21 et 32)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles conséquences cliniques de la giardiose sont décrites dans le cours ?',
    options: [
      { text: 'Des diarrhées mousseuses sans fièvre dans le cas des enfants', correct: true, correction: 'Oui boss 🎯 C’est la présentation du cas introductif.' },
      { text: 'Des douleurs abdominales et des ballonnements', correct: true, correction: 'Exact. Ils peuvent être liés à l’action irritative.' },
      { text: 'Une absorption toujours normale même en cas de forte charge parasitaire', correct: false, correction: 'Faux. Une charge importante peut gêner l’absorption des nutriments.' },
      { text: 'Des carences et un amaigrissement lorsque l’absorption est perturbée', correct: true, correction: 'Oui. Le cours les relie à l’action spoliatrice.' },
      { text: 'Une fièvre élevée obligatoire pour retenir le diagnostic', correct: false, correction: 'Non chef. Les enfants du cas sont justement afébriles.' },
    ],
    explanation: 'Le support décrit des diarrhées mousseuses afébriles dans le cas introductif et des manifestations irritatives ou de malabsorption : douleurs, ballonnements, spasmes, carences et amaigrissement. (Cours, p. 20–21)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quel résultat contribue au diagnostic de giardiose dans le cas clinique du cours ?',
    options: [
      { text: 'Des éléments transparents d’environ 15 µm compatibles avec des kystes de Giardia à l’examen parasitologique des selles', correct: true, correction: 'Oui boss 🧠 C’est l’observation donnée dans le cas, sans faire de cette taille une règle absolue pour tous les kystes.' },
      { text: 'Une coproculture négative suffisant à elle seule à identifier Giardia', correct: false, correction: 'Non chef. C’est l’examen parasitologique qui apporte l’élément spécifique ici.' },
      { text: 'Une recherche virale positive indispensable', correct: false, correction: 'Faux. Le cas décrit des recherches virales négatives.' },
      { text: 'Une imagerie cérébrale montrant des larves', correct: false, correction: 'Non. Le diagnostic présenté repose sur les selles, pas sur une atteinte cérébrale.' },
      { text: 'La présence d’anneaux de ténia éliminés spontanément', correct: false, correction: 'Non chef. Ce résultat orienterait vers un téniasis.' },
    ],
    explanation: 'Dans ce cas, l’examen parasitologique des selles met en évidence des éléments transparents d’environ 15 µm compatibles avec des kystes de Giardia. Cette mesure appartient à la description du cas, et non à une dimension universelle obligatoire. (Cours, p. 20)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles propositions concernant la prise en charge de la giardiose reprennent le cours ?',
    options: [
      { text: 'Le traitement antiparasitaire présenté est le métronidazole', correct: true, correction: 'Oui boss 🎯 C’est le médicament cité dans cette partie.' },
      { text: 'Le cours recommande exclusivement un traitement symptomatique sans antiparasitaire', correct: false, correction: 'Non chef. Le traitement antiparasitaire fait partie de la prise en charge présentée.' },
      { text: 'Le traitement décrit est donné pendant plusieurs jours', correct: true, correction: 'Oui. Le support ne fixe pas ici un nombre précis de jours.' },
      { text: 'Le support mentionne des présentations en comprimés ou en sirop', correct: true, correction: 'Exact. Les deux formes sont décrites.' },
      { text: 'Les mesures d’hygiène participent à la prise en charge pour limiter la transmission', correct: true, correction: 'Exact 🧠 Traiter et réduire la contamination vont ensemble dans le cours.' },
    ],
    explanation: 'Le cours présente le métronidazole, en comprimés ou en sirop, pendant plusieurs jours, associé aux mesures d’hygiène. Le support ne donne pas ici de durée chiffrée précise. (Cours, p. 22 et 32)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quel contrôle à distance est proposé après le traitement de la giardiose dans le cours ?',
    options: [
      { text: 'Une recherche virologique des selles à distance pour vérifier l’élimination de Giardia', correct: false, correction: 'Faux. Giardia est un parasite, pas un virus.' },
      { text: 'Une coproculture seule remplaçant tout examen parasitologique', correct: false, correction: 'Non. Le parasite est recherché par un examen parasitologique des selles.' },
      { text: 'Un examen parasitologique des selles, pouvant être réalisé deux à quatre semaines après la fin du traitement', correct: true, correction: 'Oui boss 🧠 Le support propose ce contrôle à distance, sans le présenter comme une obligation universelle.' },
      { text: 'Un examen des selles dès la première prise, suffisant pour conclure à la guérison', correct: false, correction: 'Non chef. Le contrôle proposé est réalisé à distance de la fin du traitement.' },
      { text: 'Une sérologie bactérienne remplaçant l’examen parasitologique des selles', correct: false, correction: 'Non chef. Le contrôle mentionné recherche le parasite dans les selles.' },
    ],
    explanation: 'Le cours indique qu’un contrôle de l’examen parasitologique des selles peut être réalisé à distance, notamment deux à quatre semaines après la fin du traitement. (Cours, p. 22)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles mesures de prévention de la giardiose sont citées dans le cours ?',
    options: [
      { text: 'Se fier à l’aspect clair d’une eau de rivière pour garantir l’absence de Giardia', correct: false, correction: 'Non chef. Le cours mentionne que les rivières et les lacs peuvent être contaminés.' },
      { text: 'Se laver les mains après être allé aux toilettes', correct: true, correction: 'Exact. C’est une mesure clé contre le péril féco-oral.' },
      { text: 'Consommer une eau en bouteille ou une eau du réseau dont la conformité est garantie', correct: true, correction: 'Oui. Le cours recommande une eau sûre et d’éviter l’eau souillée.' },
      { text: 'Nettoyer correctement les sanitaires en collectivité avec des produits adaptés', correct: true, correction: 'Exact 🎯 Le nettoyage des sanitaires participe à la réduction de la contamination.' },
      { text: 'Se laver les mains avant de manger', correct: true, correction: 'Oui boss 🧠 Cela limite la réingestion de formes parasitaires par les mains.' },
    ],
    explanation: 'La prévention vise à interrompre le cycle féco-oral : lavage des mains, consommation d’une eau sûre et nettoyage des sanitaires, notamment en collectivité. (Cours, p. 21–22)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Pourquoi le cours recommande-t-il de se laver les mains après avoir caressé un chien ou un chat, avant de les porter à la bouche ?',
    options: [
      { text: 'Parce que les trophozoïtes sont transmis uniquement par morsure', correct: false, correction: 'Non chef. Le mécanisme décrit est la contamination des mains puis leur passage à la bouche.' },
      { text: 'Parce que les kystes infectent obligatoirement par pénétration à travers une peau intacte', correct: false, correction: 'Non chef. La porte d’entrée présentée ici est orale.' },
      { text: 'Parce que les animaux constituent l’unique réservoir de Giardia', correct: false, correction: 'Non. Les réservoirs humains et environnementaux comptent aussi.' },
      { text: 'Parce que l’animal peut porter des kystes de Giardia sur son pelage', correct: true, correction: 'Oui boss 🧠 Des mains contaminées après le contact peuvent ensuite participer à la transmission féco-orale.' },
      { text: 'Parce que tout contact cutané entraîne automatiquement une giardiose', correct: false, correction: 'Faux. Le cours explique un risque de réingestion de formes parasitaires, pas une infection automatique au toucher.' },
    ],
    explanation: 'Les animaux doivent être pris en compte dans la prévention : le support mentionne la présence possible de kystes sur le pelage et recommande le lavage des mains avant de les porter à la bouche. (Cours, p. 22)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles affirmations résument correctement le cycle et la transmission de Giardia ?',
    options: [
      { text: 'La transmission peut être directe entre individus ou indirecte par des supports contaminés', correct: true, correction: 'Oui. Le cours décrit les deux possibilités.' },
      { text: 'La diversité des réservoirs contribue à rendre le contrôle de la maladie difficile', correct: true, correction: 'Exact 🎯 Humains, animaux et environnement multiplient les possibilités de contamination.' },
      { text: 'Des formes parasitaires éliminées dans les selles peuvent contaminer l’environnement', correct: true, correction: 'Oui boss 🧠 C’est le point de départ du péril féco-oral décrit.' },
      { text: 'Une nouvelle personne peut se contaminer en réingérant des kystes', correct: true, correction: 'Exact. L’ingestion permet de poursuivre le cycle.' },
      { text: 'La contamination nécessite obligatoirement une viande crue contenant des larves', correct: false, correction: 'Non chef. Tu mélanges avec des helminthiases alimentaires : Giardia peut se transmettre par l’eau, les aliments ou les mains contaminés.' },
    ],
    explanation: 'Les formes éliminées dans les selles peuvent contaminer l’eau, les aliments ou les mains, puis être réingérées. Le cours décrit une transmission directe ou indirecte et souligne la multiplicité des réservoirs. (Cours, p. 20–22 et 32)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quelle définition correspond aux coccidioses digestives présentées dans le cours ?',
    options: [
      { text: 'Des helminthoses dues à des vers adultes segmentés', correct: false, correction: 'Non chef. Cette description correspond aux cestodes, pas aux coccidies unicellulaires.' },
      { text: 'Des infections nécessairement limitées aux personnes ayant voyagé en zone tropicale', correct: false, correction: 'Faux. Le cours précise qu’elles existent également en France.' },
      { text: 'Des maladies digestives toujours indépendantes du statut immunitaire', correct: false, correction: 'Non chef. Le statut immunitaire influence justement leur évolution et leur sévérité.' },
      { text: 'Des infections bactériennes identifiées par une coproculture standard', correct: false, correction: 'Non. Les agents sont parasitaires et nécessitent une recherche adaptée.' },
      { text: 'Des infections digestives provoquées par des parasites unicellulaires, pouvant avoir une expression opportuniste', correct: true, correction: 'Oui boss 🧠 Ce sont des protozooses digestives, particulièrement préoccupantes en cas d’immunodépression.' },
    ],
    explanation: 'Les coccidioses digestives sont des protozooses pouvant se manifester de façon opportuniste. Elles ne sont ni des helminthoses ni des infections exclusivement tropicales. (Cours, p. 23–24)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quels genres font partie des trois coccidies digestives citées dans le cours ?',
    options: [
      { text: 'Cyclospora', correct: true, correction: 'Oui boss. Il est cité parmi les genres plus rarement rencontrés.' },
      { text: 'Cryptosporidium', correct: true, correction: 'Exact 🧠 C’est le genre le plus fréquent parmi les trois présentés.' },
      { text: 'Enterobius', correct: false, correction: 'Faux. Enterobius est un nématode responsable de l’oxyurose.' },
      { text: 'Giardia', correct: false, correction: 'Non chef. Giardia est aussi un protozoaire digestif, mais ce n’est pas une coccidie de cette liste.' },
      { text: 'Cystoisospora', correct: true, correction: 'Exact. C’est le troisième genre présenté.' },
    ],
    explanation: 'Le cours présente Cryptosporidium, Cyclospora et Cystoisospora. Tous les protozoaires digestifs ne sont pas des coccidies. (Cours, p. 24)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Parmi les trois genres de coccidies présentés, lequel est décrit comme largement le plus fréquemment rencontré ?',
    options: [
      { text: 'Cryptosporidium', correct: true, correction: 'Oui boss 🎯 C’est le genre auquel le cours accorde la plus grande importance pratique.' },
      { text: 'Giardia', correct: false, correction: 'Non. Giardia n’appartient pas aux trois genres de coccidies comparés.' },
      { text: 'Les trois genres sont présentés avec une fréquence strictement identique', correct: false, correction: 'Non chef. Le cours indique au contraire une nette prédominance de Cryptosporidium.' },
      { text: 'Cyclospora', correct: false, correction: 'Non chef. Le support le présente comme beaucoup plus rarement rencontré.' },
      { text: 'Cystoisospora', correct: false, correction: 'Faux. Il est également présenté comme plus rare que Cryptosporidium.' },
    ],
    explanation: 'Dans la comparaison du support, Cryptosporidium prédomine nettement sur Cyclospora et Cystoisospora. Cette question reprend le classement du cours. (Cours, p. 24)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles situations d’immunodépression favorisant les coccidioses sont explicitement citées ?',
    options: [
      { text: 'La prise de traitements immunosuppresseurs', correct: true, correction: 'Oui. Ces traitements peuvent diminuer les défenses contre les parasites.' },
      { text: 'Une immunité normale garantit une forme opportuniste sévère', correct: false, correction: 'Non chef. C’est l’immunodépression, et non une immunité normale, qui favorise les formes persistantes et sévères décrites.' },
      { text: 'Une corticothérapie dans le cadre d’une maladie inflammatoire', correct: true, correction: 'Exact 🎯 Cette situation est explicitement citée.' },
      { text: 'Une greffe d’organe avec traitement immunosuppresseur', correct: true, correction: 'Exact. Le contexte de transplantation figure dans les exemples.' },
      { text: 'Une infection par le VIH avec altération de l’immunité', correct: true, correction: 'Oui boss 🧠 C’est le contexte du cas clinique introductif.' },
    ],
    explanation: 'Le VIH, les greffes et les traitements immunosuppresseurs, dont certains corticoïdes, sont les contextes cités. La profondeur de l’immunodépression influence la gravité. (Cours, p. 23–24)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quelle évolution le cours décrit-il généralement pour une cryptosporidiose digestive chez un sujet immunocompétent ?',
    options: [
      { text: 'Une infection pouvant être contrôlée spontanément, avec disparition des troubles en quelques semaines', correct: true, correction: 'Oui boss 🧠 Le système immunitaire peut contrôler la multiplication parasitaire. Le support cite généralement deux à trois semaines.' },
      { text: 'Une guérison impossible sans transplantation', correct: false, correction: 'Non. Le cours décrit au contraire une évolution souvent spontanément favorable.' },
      { text: 'Une infection obligatoirement chronique pendant plusieurs années', correct: false, correction: 'Non chef. La chronicité est surtout mise en avant dans les formes liées à une immunodépression importante.' },
      { text: 'La même évolution sévère chez tous les sujets, quel que soit leur statut immunitaire', correct: false, correction: 'Non chef. Le statut immunitaire est un déterminant majeur de l’évolution.' },
      { text: 'Une absence obligatoire de toute diarrhée', correct: false, correction: 'Faux. Des diarrhées ou des troubles digestifs peuvent survenir.' },
    ],
    explanation: 'Le cours décrit généralement une évolution limitée chez l’immunocompétent, avec contrôle spontané en deux à trois semaines. Il s’agit d’une évolution habituelle et non d’une garantie pour chaque patient. (Cours, p. 24–25)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles conséquences d’une coccidiose digestive sévère sont décrites chez un patient fortement immunodéprimé ?',
    options: [
      { text: 'Des diarrhées majeures et persistantes', correct: true, correction: 'Oui boss 🧠 L’infection peut devenir chronique tant que l’immunodépression persiste.' },
      { text: 'Une absorption des nutriments nécessairement augmentée', correct: false, correction: 'Non chef. Le cours décrit une malabsorption, pas une amélioration de l’absorption.' },
      { text: 'Un amaigrissement important', correct: true, correction: 'Exact 🎯 L’absorption insuffisante des nutriments peut contribuer à une perte de poids majeure.' },
      { text: 'Une déshydratation', correct: true, correction: 'Exact. Les pertes digestives importantes peuvent entraîner une déshydratation.' },
      { text: 'Des crampes abdominales et une malabsorption', correct: true, correction: 'Oui. Ces conséquences sont présentées dans le support.' },
    ],
    explanation: 'Les formes sévères peuvent associer diarrhée persistante, déshydratation, douleurs ou crampes, malabsorption et amaigrissement. Le déficit immunitaire favorise leur persistance. (Cours, p. 24–25)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Dans le cas clinique d’un patient VIH positif présentant une diarrhée persistante, pourquoi faut-il également rechercher un parasite dans les selles ?',
    options: [
      { text: 'La mise en évidence du VIH ne suffit pas à identifier l’agent responsable de la diarrhée', correct: true, correction: 'Oui boss 🧠 Le VIH explique le contexte d’immunodépression ; la cause digestive doit être recherchée séparément.' },
      { text: 'Un taux de CD4 abaissé prouve à lui seul une infection par Cyclospora', correct: false, correction: 'Faux. Il renseigne sur l’immunité, pas sur l’identité de la coccidie.' },
      { text: 'Une sérologie VIH positive identifie automatiquement Cryptosporidium', correct: false, correction: 'Non chef. Cette sérologie ne recherche pas le parasite.' },
      { text: 'Toute diarrhée chez un patient VIH positif est obligatoirement non infectieuse', correct: false, correction: 'Non. Le cours demande justement de rechercher des infections opportunistes.' },
      { text: 'Les coccidies sont nécessairement visibles sur une formule sanguine standard', correct: false, correction: 'Non chef. Le diagnostic digestif repose sur une recherche parasitologique adaptée.' },
    ],
    explanation: 'Le statut VIH et les CD4 permettent d’apprécier le contexte immunitaire. Ils ne remplacent pas la recherche de la cause de la diarrhée, notamment dans les selles. (Cours, p. 23 et 25)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles propositions concernant le diagnostic des coccidioses digestives sont exactes ?',
    options: [
      { text: 'Une PCR peut être utilisée', correct: true, correction: 'Exact. Le support mentionne les méthodes moléculaires.' },
      { text: 'Une observation microscopique avec des colorations spéciales peut être utile', correct: true, correction: 'Oui. Ces techniques facilitent la mise en évidence de petits éléments parasitaires.' },
      { text: 'Une coproculture bactérienne négative exclut nécessairement toute coccidiose', correct: false, correction: 'Non chef. Une recherche bactérienne ne remplace pas la recherche parasitaire.' },
      { text: 'Il repose notamment sur une recherche parasitologique dans les selles', correct: true, correction: 'Oui boss 🧠 C’est le prélèvement et l’approche diagnostique présentés.' },
      { text: 'Le scotch-test anal constitue l’examen de choix pour ces diarrhées opportunistes', correct: false, correction: 'Faux. Le scotch-test est l’examen de choix de l’oxyurose, pas celui présenté pour les coccidies.' },
    ],
    explanation: 'Le diagnostic fait appel à l’examen parasitologique des selles, avec des techniques moléculaires ou microscopiques adaptées. La petite taille des parasites peut rendre leur identification difficile. (Cours, p. 25)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quel est l’intérêt d’une coloration spéciale de type Ziehl-Neelsen pour rechercher des coccidies dans les selles ?',
    options: [
      { text: 'Mesurer directement le nombre de lymphocytes CD4', correct: false, correction: 'Non chef. Les CD4 sont évalués par une autre analyse.' },
      { text: 'Faciliter la visualisation des éléments parasitaires au microscope', correct: true, correction: 'Oui boss 🔬 Le but est de mieux mettre en évidence des parasites petits et difficiles à observer.' },
      { text: 'Démontrer que les coccidies sont des bactéries', correct: false, correction: 'Faux. L’utilisation d’une technique de coloration proche ne change pas la nature du parasite.' },
      { text: 'Identifier les vers adultes par leur longueur macroscopique', correct: false, correction: 'Non chef. Les coccidies sont unicellulaires et microscopiques.' },
      { text: 'Remplacer le traitement antiparasitaire par un geste thérapeutique', correct: false, correction: 'Non. La coloration est un outil diagnostique, pas un traitement.' },
    ],
    explanation: 'Le cours cite une coloration de type Ziehl-Neelsen pour améliorer la détection microscopique. En parasitologie, des techniques acido-résistantes modifiées sont utilisées pour les oocystes ; cela ne signifie pas que les parasites sont des mycobactéries. (Cours, p. 25)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quels principes de prise en charge de la cryptosporidiose sont illustrés dans cette partie du cours ?',
    options: [
      { text: 'Un traitement symptomatique peut viser les diarrhées ou les spasmes digestifs', correct: true, correction: 'Oui boss. Ces objectifs symptomatiques sont explicitement cités.' },
      { text: 'Chez l’immunodéprimé atteint de cryptosporidiose, les traitements antiparasitaires peuvent avoir une efficacité limitée', correct: true, correction: 'Exact. Une baisse de charge parasitaire ne garantit pas une éradication complète.' },
      { text: 'Chez l’immunocompétent, le contrôle spontané par l’immunité peut limiter le besoin de traitement spécifique dans la description du cours', correct: true, correction: 'Exact 🧠 Le support décrit une intervention souvent limitée dans cette situation, notamment pour la cryptosporidiose.' },
      { text: 'Tous les antiparasitaires garantissent une éradication immédiate, même en cas d’immunodépression profonde', correct: false, correction: 'Non chef. Le cours souligne précisément la difficulté thérapeutique dans ce contexte.' },
      { text: 'Le traitement symptomatique suffit à restaurer les défenses immunitaires', correct: false, correction: 'Faux. Soulager les troubles digestifs et corriger l’immunodépression sont deux objectifs différents.' },
    ],
    explanation: 'Le cours distingue soulagement symptomatique, traitement antiparasitaire et restauration immunitaire. L’évolution et l’efficacité de la prise en charge dépendent du contexte ; les trois genres n’impliquent pas une conduite thérapeutique universelle. (Cours, p. 25–26)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quel objectif est particulièrement important dans la prise en charge d’une cryptosporidiose persistante chez un patient fortement immunodéprimé ?',
    options: [
      { text: 'Renforcer systématiquement toute immunosuppression, quel que soit le contexte', correct: false, correction: 'Non chef. Cela peut aggraver le déficit immunitaire ; toute adaptation dépend d’une évaluation médicale.' },
      { text: 'Remplacer la prise en charge du VIH par une simple mesure d’hygiène alimentaire', correct: false, correction: 'Non. Le cours associe le contrôle du VIH à une amélioration de l’immunité.' },
      { text: 'Considérer la disparition des douleurs comme une preuve suffisante d’éradication', correct: false, correction: 'Faux. L’amélioration symptomatique ne démontre pas à elle seule l’élimination du parasite.' },
      { text: 'Ignorer le statut immunitaire dès qu’un antiparasitaire a été prescrit', correct: false, correction: 'Non chef. Le statut immunitaire reste central dans les formes persistantes.' },
      { text: 'Restaurer autant que possible les défenses immunitaires en traitant la cause de l’immunodépression', correct: true, correction: 'Oui boss 🧠 Le support insiste sur l’importance du retour d’une immunité efficace pour contrôler le parasite.' },
    ],
    explanation: 'La restauration immunitaire est un objectif majeur : contrôle de l’infection VIH et, dans certains contextes de greffe, adaptation médicalement évaluée de l’immunosuppression. Une simple réduction de charge parasitaire n’équivaut pas toujours à une éradication. (Cours, p. 26)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quels éléments peuvent participer au péril féco-oral décrit pour les coccidioses digestives ?',
    options: [
      { text: 'Une eau contaminée par des éléments parasitaires', correct: true, correction: 'Oui boss 🧠 L’eau peut transporter les formes éliminées dans l’environnement.' },
      { text: 'Une transmission obligatoire par piqûre de moustique', correct: false, correction: 'Faux. Les coccidioses étudiées se transmettent par ingestion, pas par un moustique.' },
      { text: 'La simple présence d’un parasite adulte de plusieurs mètres dans la viande bovine', correct: false, correction: 'Non chef. Cette description mélange les coccidies avec le cycle du ténia ; la viande bovine transmet des larves de T. saginata, pas un adulte de coccidie.' },
      { text: 'Des mains contaminées manipulant des aliments', correct: true, correction: 'Exact. C’est une voie de transfert vers la bouche ou l’alimentation.' },
      { text: 'Des crudités, fruits ou légumes contaminés', correct: true, correction: 'Oui. Le support insiste sur leur nettoyage et leur manipulation.' },
    ],
    explanation: 'Le péril féco-oral implique l’ingestion de formes parasitaires pouvant contaminer l’eau, les mains ou les aliments. Les modalités précises de maturation et de transmission diffèrent selon le genre de coccidie. (Cours, p. 26–27)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Selon les mesures de prévention du cours, quelle conduite réduit le risque parasitaire lié à une eau dont la qualité n’est pas garantie ?',
    options: [
      { text: 'La conserver au réfrigérateur pour garantir l’élimination des parasites', correct: false, correction: 'Faux. Le froid ordinaire ne garantit pas une eau microbiologiquement sûre.' },
      { text: 'Se fier uniquement à son aspect transparent', correct: false, correction: 'Non chef. Une eau claire peut contenir des parasites microscopiques.' },
      { text: 'Ajouter des glaçons issus de cette même eau pour la sécuriser', correct: false, correction: 'Non. Cela n’élimine pas la contamination initiale.' },
      { text: 'Faire bouillir l’eau avant de la consommer', correct: true, correction: 'Oui boss 🎯 Cette mesure fait partie des recommandations du support.' },
      { text: 'Supposer qu’une eau de rivière est toujours sûre parce qu’elle est naturelle', correct: false, correction: 'Non chef. Le cours cite justement l’eau de rivière parmi les sources possibles de contamination.' },
    ],
    explanation: 'Le cours conseille de faire bouillir une eau de qualité incertaine et, lorsque cela est nécessaire, de recourir à une eau en bouteille. L’aspect de l’eau ne permet pas de garantir son innocuité. (Cours, p. 27)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles mesures de prévention du péril féco-oral sont proposées dans le cours ?',
    options: [
      { text: 'Cuire les aliments', correct: true, correction: 'Exact. La préparation des aliments participe à la réduction du risque.' },
      { text: 'Éplucher les aliments lorsque cela est possible', correct: true, correction: 'Oui. C’est une mesure citée pour diminuer la contamination extérieure.' },
      { text: 'Se laver les mains', correct: true, correction: 'Oui boss 🧠 Il faut limiter le transfert de formes parasitaires vers la bouche et les aliments.' },
      { text: 'Utiliser une eau sûre pour la boisson et la préparation alimentaire', correct: true, correction: 'Exact 🎯 Une eau contaminée peut entretenir le cycle malgré les autres mesures.' },
      { text: 'Laver les aliments avec une eau contaminée suffit à les sécuriser', correct: false, correction: 'Non chef. L’eau utilisée peut elle-même apporter des formes parasitaires.' },
    ],
    explanation: 'La prévention combine hygiène des mains, préparation des aliments et eau sûre. Elle vise à empêcher l’ingestion de formes parasitaires provenant du milieu extérieur. (Cours, p. 26–27)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Parmi les parasitoses de ce cours, laquelle possède une phase de migration larvaire tissulaire particulièrement associée à une hyperéosinophilie ?',
    options: [
      { text: 'La cryptosporidiose digestive', correct: false, correction: 'Non. Il s’agit d’une coccidiose unicellulaire, sans la phase larvaire de l’ascaris.' },
      { text: 'L’oxyurose dans sa présentation digestive habituelle', correct: false, correction: 'Non chef. Le cours associe surtout l’oxyurose au prurit anal et au scotch-test.' },
      { text: 'Le téniasis intestinal à T. saginata', correct: false, correction: 'Non chef. Le cycle décrit chez l’Homme correspond au ver adulte intestinal ; les larves sont chez le bovin.' },
      { text: 'La giardiose', correct: false, correction: 'Faux. Giardia est un protozoaire digestif, pas un ver à migration larvaire tissulaire.' },
      { text: 'L’ascaridiose', correct: true, correction: 'Oui boss 🧠 Les larves migrent dans les tissus avant la phase adulte intestinale.' },
    ],
    explanation: 'Dans le cours, l’hyperéosinophilie est particulièrement liée à la migration tissulaire des larves d’ascaris. Il ne faut pas l’attribuer automatiquement à toute parasitose digestive. (Cours, p. 5–6, 16 et 20–25)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles associations de synthèse entre parasite, mécanisme et diagnostic sont correctes ?',
    options: [
      { text: 'Cryptosporidiose : gravité et persistance favorisées par une immunodépression importante', correct: true, correction: 'Oui. Le statut immunitaire est central dans la partie consacrée aux coccidioses.' },
      { text: 'Téniasis à T. saginata : acquisition habituelle par ingestion d’œufs sur des crudités chez l’Homme', correct: false, correction: 'Non chef. Dans ce cycle, l’Homme ingère les larves présentes dans la viande bovine ; les œufs contaminent le bovin.' },
      { text: 'Ascaridiose : nématode acquis par ingestion d’œufs immédiatement infectants à leur émission', correct: false, correction: 'Faux. Les œufs d’ascaris doivent maturer dans l’environnement avant de devenir infectants.' },
      { text: 'Oxyurose : prurit anal vespéral ou nocturne et diagnostic par scotch-test anal', correct: true, correction: 'Oui boss 🎯 Le test recherche les œufs présents sur la marge anale.' },
      { text: 'Giardiose : protozoaire pouvant perturber l’absorption digestive et provoquer un amaigrissement', correct: true, correction: 'Exact 🧠 Les trophozoïtes peuvent exercer des effets irritatifs et perturber l’absorption.' },
    ],
    explanation: 'Les formes contaminantes, la localisation parasitaire, les examens diagnostiques et le statut immunitaire permettent de distinguer les parasitoses étudiées. La voie orale ne signifie pas que tous les parasites partagent le même cycle. (Cours, p. 2–6, 15–16 et 20–27)'
  },
]
