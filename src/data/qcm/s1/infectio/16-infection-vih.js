export const meta = {
  title: 'Infection par le VIH',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quel constat clinique a contribué à identifier les premiers cas de la maladie liée au VIH au début des années 1980 ?',
    options: [
      { text: 'Une épidémie de grippe saisonnière dans une population âgée', correct: false, correction: 'Non. Les premiers signalements concernaient une pneumocystose chez de jeunes adultes, et non une grippe saisonnière.' },
      { text: 'Des pneumocystoses groupées chez de jeunes adultes auparavant en bonne santé', correct: true, correction: 'Oui. La survenue groupée de cette infection opportuniste révélait un déficit immunitaire inhabituel.' },
      { text: 'Des hépatites aiguës liées à un nouveau virus à ADN', correct: false, correction: 'Non. Le signal initial décrit dans le cours était une infection opportuniste pulmonaire, pas une hépatite.' },
      { text: 'Une résistance généralisée aux antibiotiques chez des bactéries intestinales', correct: false, correction: 'Non. L\'élément marquant était une immunodépression révélée par une pneumocystose.' },
      { text: 'Des cancers cutanés exclusivement chez des enfants immunocompétents', correct: false, correction: 'Non. Ce n\'est pas le tableau ayant alerté les cliniciens dans les premiers cas rapportés.' },
    ],
    explanation: 'La pneumocystose observée en grappes chez des personnes jusque-là en bonne santé a fait suspecter une immunodéficience acquise. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Que suggéraient les observations faites dans différents groupes au début de l\'épidémie ?',
    options: [
      { text: 'Les cas chez les personnes hémophiles faisaient envisager une transmission par le sang', correct: true, correction: 'Oui. Leur exposition aux produits sanguins orientait vers une voie sanguine.' },
      { text: 'Les cas chez les femmes et les enfants étaient compatibles avec une transmission sexuelle et périnatale', correct: true, correction: 'Oui. Ces observations ont élargi l\'hypothèse initiale à plusieurs modes de transmission.' },
      { text: 'La maladie ne pouvait atteindre qu\'un seul groupe social', correct: false, correction: 'Non. Les cas dans différentes populations montraient au contraire qu\'elle pouvait toucher bien au-delà d\'un groupe.' },
      { text: 'L\'apparition d\'infections opportunistes excluait un défaut des défenses immunitaires', correct: false, correction: 'Non. Une pneumocystose chez un sujet auparavant sain faisait justement suspecter une immunodépression.' },
      { text: 'Une transmission exclusivement alimentaire était démontrée', correct: false, correction: 'Non. Les observations évoquaient notamment les voies sanguine, sexuelle et materno-fœtale, pas une voie alimentaire exclusive.' },
    ],
    explanation: 'Les premiers tableaux cliniques et leur répartition ont conduit à rechercher un agent transmissible associé à une immunodéficience. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel événement de 1983 est rappelé dans l\'historique du cours ?',
    options: [
      { text: 'L\'introduction des trithérapies antirétrovirales', correct: false, correction: 'Non. Les associations antirétrovirales efficaces sont arrivées plus tard, au milieu des années 1990.' },
      { text: 'La démonstration que le SIDA est une infection bactérienne', correct: false, correction: 'Non. Le VIH est un virus, et l\'isolement de 1983 allait dans le sens d\'une origine virale.' },
      { text: 'La première mise à disposition d\'un vaccin préventif contre le VIH', correct: false, correction: 'Non. Aucun vaccin préventif contre le VIH n\'a été mis à disposition en 1983.' },
      { text: 'La disparition mondiale des nouvelles infections', correct: false, correction: 'Non. L\'épidémie s\'est poursuivie après 1983.' },
      { text: 'L\'isolement du virus à l\'Institut Pasteur', correct: true, correction: 'Oui. L\'équipe de l\'Institut Pasteur a isolé en 1983 le rétrovirus identifié ensuite comme le VIH.' },
    ],
    explanation: 'Le cours situe l\'isolement du virus à l\'Institut Pasteur en 1983, après les premiers signalements cliniques. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles affirmations historiques sur la prise en charge du VIH concordent avec le cours ?',
    options: [
      { text: 'Le VIH-2 a été identifié avant toute observation de VIH-1', correct: false, correction: 'Non. Les deux types ont été distingués après les premiers travaux sur le virus responsable du SIDA.' },
      { text: 'Les trithérapies ont supprimé tout réservoir viral chez chaque personne traitée', correct: false, correction: 'Non. Elles contrôlent la réplication, mais ne font pas disparaître systématiquement les réservoirs viraux.' },
      { text: 'Les premières observations cliniques datent du début des années 1980', correct: true, correction: 'Oui. Les premiers groupes de cas ont été rapportés au début de cette décennie.' },
      { text: 'Les trithérapies ont changé le pronostic au milieu des années 1990', correct: true, correction: 'Oui. Leur mise en place a nettement réduit la mortalité liée au VIH dans les populations ayant accès aux soins.' },
      { text: 'Aucun traitement n\'existait avant les associations antirétrovirales du milieu des années 1990', correct: false, correction: 'Non. Un premier traitement existait déjà à la fin des années 1980, même si son efficacité était limitée.' },
    ],
    explanation: 'L\'historique oppose les premiers traitements peu efficaces à l\'impact majeur des associations antirétrovirales apparues au milieu des années 1990. (Cours, p. 2–3)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle formulation distingue correctement le VIH du SIDA ?',
    options: [
      { text: 'Le SIDA correspond uniquement à la présence d\'anticorps anti-VIH', correct: false, correction: 'Non. La présence d\'anticorps ne suffit pas à qualifier le stade SIDA.' },
      { text: 'Toute infection par le VIH est immédiatement un SIDA', correct: false, correction: 'Non. Le SIDA correspond à un stade avancé défini par des critères immunologiques ou cliniques.' },
      { text: 'Le VIH est l\'agent infectieux ; le SIDA désigne un stade avancé de l\'infection', correct: true, correction: 'Oui. Une personne peut vivre avec le VIH sans être au stade SIDA.' },
      { text: 'VIH et SIDA sont deux noms de rétrovirus distincts', correct: false, correction: 'Non. Le SIDA est un syndrome, non un second virus.' },
      { text: 'Le VIH est un stade clinique et le SIDA est le virus qui le provoque', correct: false, correction: 'Non. Les deux termes sont inversés dans cette proposition.' },
    ],
    explanation: 'Le VIH est le virus responsable de l\'infection ; le SIDA en est une phase avancée et ne doit pas être confondu avec le simple fait d\'être infecté. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'À propos du stade SIDA chez l\'adulte, quelles propositions sont exactes ?',
    options: [
      { text: 'Une affection définissant le SIDA peut permettre de retenir ce stade', correct: true, correction: 'Oui. Certaines maladies opportunistes sont des critères cliniques définissant le SIDA.' },
      { text: 'Le stade SIDA se définit uniquement par une fièvre durant 24 heures', correct: false, correction: 'Non. La définition repose sur des critères cliniques ou immunologiques précis, pas sur une fièvre isolée.' },
      { text: 'Un taux de lymphocytes T CD4 inférieur à 200/mm³ est un repère d\'immunodépression avancée', correct: true, correction: 'Oui. Ce seuil est classiquement associé à un risque accru de certaines infections opportunistes chez l\'adulte.' },
      { text: 'Une personne vivant avec le VIH est toujours classée au stade SIDA dès le diagnostic', correct: false, correction: 'Non. L\'infection par le VIH et le stade SIDA sont deux notions distinctes.' },
      { text: 'Une sérologie VIH positive suffit toujours à classer le patient au stade SIDA', correct: false, correction: 'Non. La sérologie établit l\'infection, pas automatiquement le stade SIDA.' },
    ],
    explanation: 'Le cours relie le SIDA aux affections opportunistes et à une immunodépression avancée ; le seuil de 200 CD4/mm³ est un repère fréquent, sans résumer à lui seul toutes les situations cliniques. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quelle étape explique l\'appartenance du VIH à la famille des rétrovirus ?',
    options: [
      { text: 'La fabrication d\'une paroi bactérienne', correct: false, correction: 'Non. Le VIH est un virus enveloppé et ne fabrique pas de paroi bactérienne.' },
      { text: 'La conversion de l\'ARN viral en ADN par la transcriptase inverse', correct: true, correction: 'Oui. La rétrotranscription de l\'ARN en ADN est une caractéristique centrale du cycle des rétrovirus.' },
      { text: 'La copie directe de l\'ADN viral en ARN par une ADN polymérase virale', correct: false, correction: 'Non. Le génome du virion est de l\'ARN ; la transcriptase inverse en produit une copie d\'ADN.' },
      { text: 'L\'absence de matériel génétique dans la particule', correct: false, correction: 'Non. La particule virale contient deux copies d\'ARN.' },
      { text: 'La synthèse d\'ADN sans intermédiaire ARN', correct: false, correction: 'Non. L\'ARN viral est le point de départ de la rétrotranscription.' },
    ],
    explanation: 'La transcriptase inverse produit un ADN à partir de l\'ARN génomique du VIH ; cet ADN peut ensuite être intégré. (Cours, p. 3–4)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles caractéristiques décrivent le virion VIH présenté dans le cours ?',
    options: [
      { text: 'Il possède une enveloppe lipidique', correct: true, correction: 'Oui. Une bicouche lipidique externe porte les glycoprotéines virales.' },
      { text: 'Il contient deux copies d\'ARN simple brin', correct: true, correction: 'Oui. Les deux copies du génome ARN sont empaquetées dans la particule.' },
      { text: 'Son enveloppe porte des glycoprotéines utiles à l\'entrée dans la cellule', correct: true, correction: 'Oui. La gp120 et la gp41 interviennent dans l\'attachement et la fusion.' },
      { text: 'Il appartient à la famille des Retroviridae', correct: true, correction: 'Oui. Le VIH est un rétrovirus.' },
      { text: 'Son génome présent dans le virion est un chromosome d\'ADN double brin', correct: false, correction: 'Non. L\'ADN est formé après l\'entrée dans la cellule, par rétrotranscription de l\'ARN viral.' },
    ],
    explanation: 'La structure schématique associe une enveloppe lipidique, des protéines de surface et deux copies d\'ARN dans la capside. (Cours, p. 3–4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle protéine est le constituant majeur de la capside conique du VIH ?',
    options: [
      { text: 'La gp120', correct: false, correction: 'Non. La gp120 est une glycoprotéine de l\'enveloppe impliquée dans la fixation au CD4.' },
      { text: 'La p24', correct: true, correction: 'Oui. La p24 est la protéine majeure de la capside conique.' },
      { text: 'La gp41', correct: false, correction: 'Non. La gp41 est une glycoprotéine transmembranaire de l\'enveloppe, impliquée dans la fusion.' },
      { text: 'La p17', correct: false, correction: 'Non. La p17 constitue la matrice sous l\'enveloppe.' },
      { text: 'La transcriptase inverse', correct: false, correction: 'Non. C\'est une enzyme empaquetée dans la particule, pas la protéine principale de sa capside.' },
    ],
    explanation: 'La capside conique du VIH est constituée principalement de p24, distincte de la matrice p17 et des protéines d\'enveloppe. (Cours, p. 4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles associations entre composant et position ou fonction dans le virion VIH sont correctes ?',
    options: [
      { text: 'gp41 : chromosome de la cellule hôte', correct: false, correction: 'Non. La gp41 est une glycoprotéine transmembranaire de l\'enveloppe virale.' },
      { text: 'p24 : protéine de la capside conique', correct: true, correction: 'Oui. La p24 constitue la capside protégeant le génome viral.' },
      { text: 'gp120 : glycoprotéine exposée à la surface virale', correct: true, correction: 'Oui. La gp120 est la sous-unité externe impliquée notamment dans la liaison au CD4.' },
      { text: 'ARN viral : matériel génétique contenu dans la particule', correct: true, correction: 'Oui. Le virion emporte son génome sous forme d\'ARN.' },
      { text: 'p17 : matrice située sous l\'enveloppe', correct: true, correction: 'Oui. La matrice p17 est immédiatement sous la bicouche lipidique.' },
    ],
    explanation: 'Les éléments structuraux sont répartis de la surface vers l\'intérieur entre enveloppe et gp120/gp41, matrice p17, capside p24 et ARN viral. (Cours, p. 4)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quel gène majeur du VIH code notamment les protéines de structure p17 et p24 ?',
    options: [
      { text: 'env', correct: false, correction: 'Non. env code les glycoprotéines de l\'enveloppe, notamment gp120 et gp41.' },
      { text: 'pol', correct: false, correction: 'Non. pol code les principales enzymes virales de la réplication.' },
      { text: 'CCR5', correct: false, correction: 'Non. CCR5 est un corécepteur cellulaire, pas l\'un des trois gènes majeurs du génome viral.' },
      { text: 'gag', correct: true, correction: 'Oui. Les protéines de matrice p17 et de capside p24 dérivent de gag.' },
      { text: 'CD4', correct: false, correction: 'Non. CD4 est une molécule de la cellule cible, pas un gène structural du VIH.' },
    ],
    explanation: 'Le cours répartit les grandes fonctions entre gag pour des protéines structurales, pol pour les enzymes et env pour les protéines d\'enveloppe. (Cours, p. 4)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles correspondances entre gène viral et produit sont exactes ?',
    options: [
      { text: 'gag — récepteur cellulaire CD4', correct: false, correction: 'Non. CD4 appartient à la cellule hôte ; gag ne code pas ce récepteur.' },
      { text: 'env — gp120 et gp41', correct: true, correction: 'Oui. Les deux sous-unités de l\'enveloppe dérivent du gène env.' },
      { text: 'pol — transcriptase inverse', correct: true, correction: 'Oui. La transcriptase inverse fait partie des enzymes codées par pol.' },
      { text: 'gag — p24 de la capside', correct: true, correction: 'Oui. La p24 est une protéine de structure issue de gag.' },
      { text: 'pol — intégrase', correct: true, correction: 'Oui. L\'intégrase est également une enzyme issue de pol.' },
    ],
    explanation: 'Les gènes majeurs gag, pol et env codent respectivement des protéines structurales, des enzymes virales et les glycoprotéines d\'enveloppe. (Cours, p. 4)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Pourquoi la protéase du VIH est-elle importante pour la production de virions infectieux ?',
    options: [
      { text: 'Elle constitue la bicouche lipidique de l\'enveloppe', correct: false, correction: 'Non. La protéase est une enzyme de clivage ; elle ne forme pas la membrane lipidique.' },
      { text: 'Elle transforme directement l\'ARN viral en ADN', correct: false, correction: 'Non. Cette conversion est réalisée par la transcriptase inverse.' },
      { text: 'Elle assure à elle seule l\'attachement de gp120 au CD4', correct: false, correction: 'Non. L\'attachement initial dépend de gp120, non de la protéase.' },
      { text: 'Elle remplace le récepteur CD4 à la surface des lymphocytes', correct: false, correction: 'Non. CD4 est une molécule cellulaire participant à l\'entrée du virus.' },
      { text: 'Elle découpe des polyprotéines virales pour obtenir des protéines fonctionnelles', correct: true, correction: 'Oui. Ce clivage est une étape de maturation nécessaire à la formation de particules pleinement infectieuses.' },
    ],
    explanation: 'Les précurseurs protéiques doivent être clivés pour devenir fonctionnels ; la protéase intervient donc dans la maturation virale. (Cours, p. 4)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles associations enzyme du VIH — fonction sont correctes ?',
    options: [
      { text: 'p24 — synthèse des lipides de l\'enveloppe', correct: false, correction: 'Non. La p24 est une protéine de capside, pas une enzyme de synthèse lipidique.' },
      { text: 'gp120 — dégradation de l\'ADN cellulaire', correct: false, correction: 'Non. La gp120 est une glycoprotéine d\'attachement, pas une nucléase.' },
      { text: 'Protéase — clivage des précurseurs protéiques viraux', correct: true, correction: 'Oui. Elle permet la maturation de protéines virales fonctionnelles.' },
      { text: 'Transcriptase inverse — production d\'ADN à partir de l\'ARN viral', correct: true, correction: 'Oui. Elle catalyse la rétrotranscription du génome ARN.' },
      { text: 'Intégrase — insertion de l\'ADN viral dans l\'ADN de la cellule hôte', correct: true, correction: 'Oui. Elle intervient dans l\'intégration du génome viral copié en ADN.' },
    ],
    explanation: 'Le cours distingue trois enzymes virales emportées par la particule et ciblées par des antirétroviraux : transcriptase inverse, intégrase et protéase. (Cours, p. 4)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle population cellulaire constitue la principale cible immunitaire du VIH ?',
    options: [
      { text: 'Les érythrocytes matures', correct: false, correction: 'Non. Les globules rouges matures ne sont pas la principale cible immunitaire du VIH.' },
      { text: 'Les cellules musculaires squelettiques', correct: false, correction: 'Non. Elles ne constituent pas la cible immunitaire principale du VIH.' },
      { text: 'Les plaquettes', correct: false, correction: 'Non. Les plaquettes ne sont pas la population cible principale décrite dans le cours.' },
      { text: 'Les hépatocytes', correct: false, correction: 'Non. Le cours insiste sur les cellules exprimant CD4, surtout les lymphocytes T CD4+.' },
      { text: 'Les lymphocytes T CD4+', correct: true, correction: 'Oui. Leur infection et leur perte progressive sont au cœur de l\'immunodéficience liée au VIH.' },
    ],
    explanation: 'Le VIH vise surtout les lymphocytes T CD4+, dont la diminution compromet l\'organisation de la réponse immunitaire. (Cours, p. 3–5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Parmi les cellules suivantes, lesquelles sont citées dans le cours comme cibles possibles du VIH via CD4 ?',
    options: [
      { text: 'Les plaquettes comme principale source de nouveaux virions', correct: false, correction: 'Non. Les plaquettes ne sont pas décrites ici comme cible productive principale du VIH.' },
      { text: 'Les macrophages', correct: true, correction: 'Oui. Les macrophages font partie des autres cellules cibles décrites.' },
      { text: 'Les monocytes', correct: true, correction: 'Oui. Le cours cite les monocytes parmi les cellules portant CD4 que le virus peut infecter.' },
      { text: 'Les lymphocytes T CD4+', correct: true, correction: 'Oui. Ils sont la cible principale explicitement mentionnée.' },
      { text: 'Les globules rouges matures grâce à un CD4 membranaire abondant', correct: false, correction: 'Non. Les érythrocytes matures ne sont pas présentés comme cellules cibles exprimant abondamment CD4.' },
    ],
    explanation: 'Outre les lymphocytes T CD4+, le cours mentionne les monocytes et macrophages dans les cellules cibles et la dissémination virale. (Cours, p. 3–5)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quelle interaction initie classiquement l\'attachement du VIH à une cellule cible CD4+ ?',
    options: [
      { text: 'La liaison de p24 au récepteur CCR5 avant tout contact avec CD4', correct: false, correction: 'Non. La p24 est dans la capside ; l\'entrée débute classiquement par la liaison de gp120 à CD4.' },
      { text: 'La fixation de l\'intégrase à la membrane plasmique', correct: false, correction: 'Non. L\'intégrase agit sur l\'ADN viral après son entrée dans la cellule.' },
      { text: 'L\'insertion immédiate de l\'ARN viral dans le noyau', correct: false, correction: 'Non. L\'entrée membranaire précède les étapes intracellulaires.' },
      { text: 'La liaison de la gp120 virale au récepteur CD4 cellulaire', correct: true, correction: 'Oui. Cette première liaison déclenche les changements de conformation qui permettent l\'étape suivante.' },
      { text: 'La reconnaissance de CD8 par la protéase virale', correct: false, correction: 'Non. Ni CD8 ni la protéase ne constituent ce couple d\'attachement initial.' },
    ],
    explanation: 'Pour l\'entrée décrite, gp120 se lie d\'abord au CD4 de la cellule cible ; le corécepteur intervient ensuite. (Cours, p. 5)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Concernant les corécepteurs d\'entrée du VIH et leur blocage, quelles propositions sont exactes ?',
    options: [
      { text: 'CCR5 peut servir de corécepteur au VIH', correct: true, correction: 'Oui. CCR5 est l\'un des deux principaux corécepteurs présentés.' },
      { text: 'Un virus capable d\'utiliser CXCR4 reste entièrement bloqué par un inhibiteur ne ciblant que CCR5', correct: false, correction: 'Non. Le blocage de CCR5 ne supprime pas la voie d\'entrée via CXCR4.' },
      { text: 'Chaque particule doit simultanément se lier à CCR5 et CXCR4 pour entrer', correct: false, correction: 'Non. Le cours indique CCR5 ou CXCR4, pas l\'obligation d\'utiliser les deux à la fois.' },
      { text: 'CCR5 est une enzyme virale de la capside', correct: false, correction: 'Non. CCR5 est une molécule de la cellule hôte jouant le rôle de corécepteur.' },
      { text: 'CXCR4 peut aussi servir de corécepteur', correct: true, correction: 'Oui. Certains virus utilisent CXCR4 pour entrer dans les cellules cibles.' },
    ],
    explanation: 'Après CD4, l\'enveloppe virale peut interagir avec CCR5 ou CXCR4 ; ce choix conditionne l\'intérêt d\'un antagoniste de CCR5. (Cours, p. 5)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel rôle joue principalement la gp41 durant l\'entrée du VIH ?',
    options: [
      { text: 'Elle constitue l\'ARN génomique viral', correct: false, correction: 'Non. La gp41 est une protéine d\'enveloppe, pas un acide nucléique.' },
      { text: 'Elle code le récepteur CD4 de l\'hôte', correct: false, correction: 'Non. CD4 est une protéine cellulaire, non codée par gp41.' },
      { text: 'Elle remplace la transcriptase inverse', correct: false, correction: 'Non. La gp41 intervient à l\'entrée, alors que la transcriptase inverse convertit l\'ARN en ADN.' },
      { text: 'Elle participe à la fusion de l\'enveloppe virale avec la membrane cellulaire', correct: true, correction: 'Oui. La gp41 transmembranaire subit des réarrangements qui rapprochent puis fusionnent les membranes.' },
      { text: 'Elle forme à elle seule la capside p24', correct: false, correction: 'Non. La capside est principalement constituée de p24.' },
    ],
    explanation: 'La gp120 est surtout impliquée dans la reconnaissance des récepteurs ; la gp41 porte le mécanisme de fusion des deux membranes. (Cours, p. 4–5)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles étapes appartiennent à la séquence d\'attachement et de fusion décrite pour le VIH ?',
    options: [
      { text: 'La liaison initiale de gp120 au CD4 cellulaire', correct: true, correction: 'Oui. Cette interaction amorce le processus d\'entrée.' },
      { text: 'L\'insertion de l\'ADN viral dans le génome cellulaire avant tout contact membranaire', correct: false, correction: 'Non. L\'intégration est une étape intracellulaire ultérieure, après l\'entrée et la rétrotranscription.' },
      { text: 'La fusion des bicouches lipidiques, puis le passage du contenu viral dans la cellule', correct: true, correction: 'Oui. La fusion ouvre une voie de passage au contenu du virion.' },
      { text: 'Le clivage de CD4 en p24 par la gp120', correct: false, correction: 'Non. La gp120 se lie au CD4 ; elle ne le transforme pas en protéine de capside p24.' },
      { text: 'Un changement de conformation de l\'enveloppe exposant le site de liaison au corécepteur', correct: true, correction: 'Oui. La liaison au CD4 rend possible l\'interaction avec CCR5 ou CXCR4.' },
    ],
    explanation: 'L\'entrée commence par CD4, se poursuit par un corécepteur et des réarrangements de l\'enveloppe, puis aboutit à la fusion et à la pénétration du contenu viral. (Cours, p. 5)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Un antirétroviral bloque la transcriptase inverse dès le début de l\'infection d\'une cellule. Quelle conséquence en découle pour ce cycle viral ?',
    options: [
      { text: 'Le provirus de ce cycle est constitué directement par la capside p24', correct: false, correction: 'Non. Un provirus est un ADN viral intégré, et non une protéine de capside.' },
      { text: 'La gp120 ne peut plus se lier au CD4 de la cellule cible', correct: false, correction: 'Non. L\'attachement gp120-CD4 précède l\'action de la transcriptase inverse et n\'est pas sa réaction catalytique.' },
      { text: 'L\'ADN viral nécessaire à l\'intégration n\'est pas produit à partir de l\'ARN entrant', correct: true, correction: 'Oui. Sans rétrotranscription efficace, ce cycle ne fournit pas l\'ADN viral que l\'intégrase pourrait insérer.' },
      { text: 'L\'intégrase insère directement l\'ARN du virion dans le chromosome', correct: false, correction: 'Non. L\'intégrase agit sur l\'ADN viral, qui manque si la rétrotranscription est bloquée.' },
      { text: 'La fusion des membranes est immédiatement empêchée par l\'absence de protéase', correct: false, correction: 'Non. La fusion dépend notamment de gp41 ; le blocage de la transcriptase inverse ne correspond pas à une absence de protéase.' },
    ],
    explanation: 'La transcriptase inverse doit produire l\'ADN viral avant l\'intégration. Son blocage lors d\'un nouveau cycle empêche donc la formation du substrat de l\'intégrase. (Cours, p. 6 ; NIH, https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles étapes appartiennent à la phase précoce qui suit la fusion du VIH avec la cellule ?',
    options: [
      { text: 'L\'acheminement de l\'ADN viral vers le noyau', correct: true, correction: 'Oui. L\'ADN viral doit accéder au noyau pour pouvoir s\'intégrer.' },
      { text: 'La synthèse d\'ADN à partir de l\'ARN viral', correct: true, correction: 'Oui. C\'est la rétrotranscription réalisée par la transcriptase inverse.' },
      { text: 'L\'intégration directe de l\'ARN viral dans un chromosome', correct: false, correction: 'Non. C\'est l\'ADN issu de la rétrotranscription, et non l\'ARN, qui est intégré.' },
      { text: 'Le désassemblage progressif de la capside virale', correct: true, correction: 'Oui. La décapsidation accompagne les étapes précoces ; son calendrier exact peut chevaucher la rétrotranscription.' },
      { text: 'Le bourgeonnement de nouvelles particules avant toute synthèse d\'ADN', correct: false, correction: 'Non. Le bourgeonnement appartient aux étapes tardives du cycle productif.' },
    ],
    explanation: 'Après la fusion viennent la décapsidation et la rétrotranscription, puis le transport vers le noyau. Le schéma du cours simplifie l\'ordre ; la décapsidation peut se prolonger pendant la synthèse d\'ADN. (Cours, p. 5-6 ; NIH, https://www.nih.gov/news-events/nih-research-matters/study-sheds-light-key-steps-hiv-life-cycle)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle enzyme virale insère l\'ADN du VIH dans un chromosome de la cellule infectée ?',
    options: [
      { text: 'La protéase', correct: false, correction: 'Non. Elle clive les précurseurs protéiques lors de la maturation.' },
      { text: 'La neuraminidase', correct: false, correction: 'Non. Cette enzyme n\'est pas responsable de l\'intégration du VIH.' },
      { text: 'L\'intégrase', correct: true, correction: 'Oui. Elle catalyse l\'intégration de l\'ADN viral dans l\'ADN cellulaire.' },
      { text: 'La topoisomérase bactérienne', correct: false, correction: 'Non. Elle n\'est ni l\'enzyme virale décrite ni la cible de cette étape.' },
      { text: 'La transcriptase inverse', correct: false, correction: 'Non. Elle synthétise l\'ADN viral à partir de l\'ARN, sans catalyser son insertion chromosomique.' },
    ],
    explanation: 'L\'intégrase est l\'enzyme du VIH nécessaire à l\'insertion de l\'ADN viral dans le génome de la cellule hôte. (Cours, p. 6 ; NIH, https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'À propos du provirus du VIH, quelles propositions sont exactes ?',
    options: [
      { text: 'Il correspond à une forme ADN du génome viral intégrée à l\'ADN cellulaire', correct: true, correction: 'Oui. L\'intégration transforme l\'ADN viral en provirus chromosomique.' },
      { text: 'Il désigne un virion libre dans le plasma', correct: false, correction: 'Non. Un virion circulant n\'est pas un ADN viral intégré au chromosome.' },
      { text: 'Sa transcription peut contribuer à produire de nouveaux ARN viraux', correct: true, correction: 'Oui. Le provirus sert de matrice à la production d\'ARN par la cellule.' },
      { text: 'Il est éliminé du chromosome par les antirétroviraux dès que la virémie devient indétectable', correct: false, correction: 'Non. Une virémie contrôlée ne signifie pas l\'excision du provirus des cellules infectées.' },
      { text: 'Il peut persister dans une cellule infectée', correct: true, correction: 'Oui. Cette persistance participe au caractère chronique de l\'infection.' },
    ],
    explanation: 'Le terme « provirus » désigne l\'ADN viral intégré. Cette forme peut persister et, lorsqu\'elle est transcrite, contribuer à la production de nouveaux ARN viraux. (Cours, p. 6)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Une fois le VIH intégré au chromosome, quel processus produit les ARN destinés aux étapes suivantes du cycle ?',
    options: [
      { text: 'Le clivage des ARN par l\'intégrase', correct: false, correction: 'Non. L\'intégrase agit sur l\'ADN viral lors de son insertion dans l\'ADN cellulaire.' },
      { text: 'La multiplication autonome du virion hors de toute cellule', correct: false, correction: 'Non. La production d\'ARN viral dépend d\'une cellule infectée.' },
      { text: 'La rétrotranscription d\'une nouvelle capside p24', correct: false, correction: 'Non. La capside est une protéine ; la rétrotranscription précède l\'intégration.' },
      { text: 'L\'assemblage direct de l\'ADN proviral en particule', correct: false, correction: 'Non. Les particules assemblent notamment des ARN viraux et des protéines, pas un chromosome cellulaire.' },
      { text: 'La transcription du provirus par la machinerie cellulaire', correct: true, correction: 'Oui. L\'ADN intégré est transcrit en ARN grâce aux mécanismes de la cellule hôte.' },
    ],
    explanation: 'Après intégration, le provirus est transcrit par la machinerie de la cellule ; les ARN obtenus servent à la synthèse protéique et à l\'encapsidation. (Cours, p. 6 ; NIH, https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant les étapes tardives du cycle du VIH, quelles propositions sont exactes ?',
    options: [
      { text: 'Des protéines virales et des ARN s\'assemblent pour former de nouvelles particules', correct: true, correction: 'Oui. L\'assemblage réunit ces composants avant ou pendant le bourgeonnement.' },
      { text: 'Le virion est produit sans ARN viral ni protéine virale', correct: false, correction: 'Non. Ces constituants sont nécessaires à l\'assemblage d\'une particule virale.' },
      { text: 'La traduction des ARN viraux permet de fabriquer des protéines virales', correct: true, correction: 'Oui. Les ARN issus du provirus fournissent les instructions pour la synthèse protéique.' },
      { text: 'Les nouvelles particules peuvent bourgeonner à la membrane cellulaire', correct: true, correction: 'Oui. Le bourgeonnement est la voie de sortie illustrée dans le cours.' },
      { text: 'La traduction est l\'insertion de l\'ADN viral dans le génome humain', correct: false, correction: 'Non. Cette insertion est l\'intégration ; la traduction fabrique des protéines.' },
    ],
    explanation: 'La transcription du provirus fournit des ARN, la traduction produit les protéines, puis ARN et protéines s\'assemblent en particules qui bourgeonnent. (Cours, p. 6)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'À quel moment une particule de VIH nouvellement assemblée acquiert-elle sa pleine infectiosité ?',
    options: [
      { text: 'Après la maturation des protéines virales autour du bourgeonnement, qui peut se poursuivre après la sortie de la cellule', correct: true, correction: 'Oui. Le clivage des précurseurs par la protéase transforme les particules immatures en virions pleinement infectieux.' },
      { text: 'Dès que les ARN du provirus sont transcrits, sans assemblage de particules', correct: false, correction: 'Non. Des ARN seuls ne constituent pas des virions infectieux ; assemblage et maturation sont nécessaires.' },
      { text: 'Dès l\'intégration de l\'ADN viral, avant toute production de constituants viraux', correct: false, correction: 'Non. L\'intégration établit un provirus ; les nouveaux virions doivent encore être produits et maturés.' },
      { text: 'Dès que la gp120 du virion entrant se fixe au CD4', correct: false, correction: 'Non. Cette fixation concerne l\'entrée d\'un virion dans une cellule, pas la maturation des nouvelles particules.' },
      { text: 'Uniquement après l\'entrée de cette nouvelle particule dans une autre cellule, grâce à l\'intégrase', correct: false, correction: 'Non. L\'intégrase agit après l\'entrée, mais l\'infectiosité du virion exige une maturation préalable.' },
    ],
    explanation: 'L\'assemblage et le bourgeonnement ne suffisent pas à eux seuls : le clivage protéolytique, commencé avant la sortie et poursuivi après, achève la maturation infectieuse. (Cours, p. 6 ; NIH, https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles associations entre une classe d\'antirétroviraux et l\'étape virale visée sont correctes ?',
    options: [
      { text: 'Inhibiteurs de protéase — maturation par clivage des précurseurs', correct: true, correction: 'Oui. Ils gênent la production de protéines fonctionnelles et de virions matures.' },
      { text: 'Inhibiteurs de protéase — reconnaissance initiale de CD4 par gp120', correct: false, correction: 'Non. L\'attachement au CD4 est une étape d\'entrée, distincte de la maturation protéolytique.' },
      { text: 'Inhibiteurs de l\'intégrase — insertion de l\'ADN viral dans l\'ADN cellulaire', correct: true, correction: 'Oui. Ils empêchent l\'intégration chromosomique.' },
      { text: 'Inhibiteurs de la transcriptase inverse — synthèse de l\'ADN viral à partir de l\'ARN', correct: true, correction: 'Oui. Cette classe bloque la rétrotranscription.' },
      { text: 'Inhibiteurs de l\'intégrase — bourgeonnement immédiat de la membrane', correct: false, correction: 'Non. L\'intégrase agit bien plus tôt, lors de l\'insertion de l\'ADN viral.' },
    ],
    explanation: 'Les trois enzymes citées par le cours sont des cibles thérapeutiques correspondant à des étapes différentes : rétrotranscription, intégration et maturation. (Cours, p. 4-6 ; NIH, https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel enchaînement résume correctement le devenir de l\'information génétique du VIH au cours d\'un cycle productif ?',
    options: [
      { text: 'ARN viral → ADN viral intégré → nouveaux ARN viraux et protéines', correct: true, correction: 'Oui. La rétrotranscription, l\'intégration puis la transcription et la traduction conduisent à de nouveaux constituants viraux.' },
      { text: 'Protéines virales → ADN par traduction → ARN par protéase', correct: false, correction: 'Non. La traduction produit des protéines à partir d\'ARN ; la protéase ne produit pas d\'ARN.' },
      { text: 'ARN viral → protéase → chromosome viral autonome', correct: false, correction: 'Non. La protéase clive des protéines ; l\'ADN viral s\'intègre au chromosome cellulaire.' },
      { text: 'ARN viral → ARN cellulaire intégré directement → ADN proviral', correct: false, correction: 'Non. L\'intégration concerne l\'ADN produit à partir de l\'ARN viral, pas un ARN cellulaire.' },
      { text: 'ADN viral entrant → ARN viral par intégrase → capsides', correct: false, correction: 'Non. Le génome entrant est de l\'ARN, et l\'intégrase ne synthétise pas d\'ARN.' },
    ],
    explanation: 'Le flux d\'information combine rétrotranscription de l\'ARN en ADN, intégration du provirus, puis transcription et traduction nécessaires à la production de nouveaux virions. (Cours, p. 6)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Un VIH possède une protéase rendue inactive. Quelles conséquences sont cohérentes avec le cycle décrit ?',
    options: [
      { text: 'Le provirus déjà intégré est automatiquement retiré du chromosome', correct: false, correction: 'Non. L\'inactivation de la protéase n\'excise pas un ADN proviral intégré.' },
      { text: 'Les particules issues du bourgeonnement maturent mal et sont moins infectieuses', correct: true, correction: 'Oui. Sans maturation protéolytique, elles restent largement immatures et peu infectieuses.' },
      { text: 'Les polyprotéines virales sont mal clivées', correct: true, correction: 'Oui. Le clivage des précurseurs est la fonction de la protéase.' },
      { text: 'La rétrotranscription est directement catalysée par la protéase', correct: false, correction: 'Non. Cette étape dépend de la transcriptase inverse.' },
      { text: 'La fusion initiale avec la cellule devient impossible par définition', correct: false, correction: 'Non. La fusion relève des protéines d\'enveloppe et des récepteurs ; l\'inactivation de la protéase concerne surtout la maturation des descendants.' },
    ],
    explanation: 'La protéase conditionne la maturation des virions après assemblage et bourgeonnement ; une inhibition n\'efface pas le provirus ni ne remplace les autres enzymes. (Cours, p. 4 et 6 ; NIH, https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel groupe du VIH-1 est principalement à l\'origine de la pandémie mondiale ?',
    options: [
      { text: 'Le groupe P', correct: false, correction: 'Non. C\'est un groupe exceptionnel du VIH-1.' },
      { text: 'Le groupe N', correct: false, correction: 'Non. Ce groupe du VIH-1 est rare et n\'est pas celui qui a diffusé mondialement.' },
      { text: 'Le groupe O', correct: false, correction: 'Non. Il circule dans certaines régions d\'Afrique, mais n\'est pas le groupe pandémique principal.' },
      { text: 'Le groupe M', correct: true, correction: 'Oui. M signifie « majeur » et rassemble la grande majorité des infections par VIH-1 dans le monde.' },
      { text: 'Le sous-type VIH-2 M', correct: false, correction: 'Non. La désignation « groupe M » concerne le VIH-1, pas un sous-type du VIH-2.' },
    ],
    explanation: 'Le VIH-1 se répartit en groupes, dont M est le groupe majeur responsable de la pandémie. Le pourcentage ponctuel du cours n\'est pas nécessaire pour retenir cette hiérarchie. (Cours, p. 6-7)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles propositions utilisent correctement les niveaux de classification du VIH présentés dans le cours ?',
    options: [
      { text: 'M et O sont deux stades successifs de l\'infection chez une même personne', correct: false, correction: 'Non. Ce sont des lignées virales, pas des stades cliniques.' },
      { text: 'Le groupe O est l\'autre nom du VIH-2', correct: false, correction: 'Non. Le groupe O appartient au VIH-1 ; VIH-2 est un type distinct.' },
      { text: 'M, O, N et P sont des groupes du VIH-1', correct: true, correction: 'Oui. Le cours les situe à l\'intérieur du type VIH-1.' },
      { text: 'B est un sous-type du groupe M du VIH-1', correct: true, correction: 'Oui. Le sous-type B est une subdivision du groupe M.' },
      { text: 'VIH-1 et VIH-2 désignent deux types de VIH', correct: true, correction: 'Oui. Ce sont deux types distincts capables d\'entraîner l\'infection par le VIH.' },
    ],
    explanation: 'Le cours distingue les types VIH-1/VIH-2, les groupes du VIH-1, puis les sous-types du groupe M. (Cours, p. 6-7)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Dans l\'arbre phylogénétique présenté, de quel virus simien le VIH-2 est-il le plus proche ?',
    options: [
      { text: 'Celui du mangabey enfumé (sooty mangabey)', correct: true, correction: 'Oui. Les lignées du VIH-2 dérivent de virus d\'immunodéficience simienne de ce mangabey.' },
      { text: 'Le virus grippal du porc', correct: false, correction: 'Non. La grippe n\'est pas un lentivirus simien ancestral du VIH-2.' },
      { text: 'Celui du chimpanzé associé au groupe M du VIH-1', correct: false, correction: 'Non. Le cours rattache surtout le VIH-1 groupe M aux virus du chimpanzé.' },
      { text: 'Celui du gorille associé au groupe O du VIH-1', correct: false, correction: 'Non. Le rapprochement avec des virus de gorille concerne le VIH-1 groupe O.' },
      { text: 'Un virus d\'immunodéficience du chat', correct: false, correction: 'Non. Il existe d\'autres lentivirus animaux, mais le lien phylogénétique illustré pour VIH-2 est celui des mangabeys.' },
    ],
    explanation: 'L\'arbre du cours place le VIH-2 près des virus simiens de mangabeys enfumés et illustre des passages de barrière d\'espèce distincts. (Cours, p. 7 ; Los Alamos HIV Database, https://www.hiv.lanl.gov/content/sequence/HelpDocs/subtypes-more.html)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quels mécanismes contribuent à la diversité génétique du VIH ?',
    options: [
      { text: 'La recombinaison entre génomes viraux lors d\'une co-infection cellulaire', correct: true, correction: 'Oui. Le cours illustre des virus recombinants issus de lignées différentes.' },
      { text: 'Une stabilité génétique absolue de tous les virions', correct: false, correction: 'Non. Le cours insiste précisément sur la variabilité au fil des réplications.' },
      { text: 'Une correction parfaite de chaque erreur par la transcriptase inverse', correct: false, correction: 'Non. Une telle correction empêcherait au contraire une partie de la diversité observée.' },
      { text: 'Les nombreux cycles de réplication virale', correct: true, correction: 'Oui. Ils multiplient les occasions de générer et de sélectionner des variants.' },
      { text: 'Les erreurs de copie de la transcriptase inverse', correct: true, correction: 'Oui. Sa faible fidélité favorise l\'apparition de mutations.' },
    ],
    explanation: 'Mutations, réplication répétée et recombinaison expliquent la diversité des populations de VIH. (Cours, p. 7 ; NCBI, https://pubmed.ncbi.nlm.nih.gov/21994801/)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Que signifie le terme « quasi-espèce » pour le VIH chez une personne infectée ?',
    options: [
      { text: 'Un mélange obligatoire de VIH-1 et de VIH-2 chez chaque patient', correct: false, correction: 'Non. La variabilité peut apparaître au sein d\'un seul type de VIH.' },
      { text: 'Une population de variants viraux génétiquement proches mais non identiques', correct: true, correction: 'Oui. Des variants apparentés coexistent et évoluent au sein de la même infection.' },
      { text: 'Une seule séquence virale définitivement inchangée', correct: false, correction: 'Non. Le terme souligne au contraire la diversité intrahôte.' },
      { text: 'Une espèce de cellule immunitaire porteuse de CD4', correct: false, correction: 'Non. La quasi-espèce décrit une population virale, pas une cellule.' },
      { text: 'Une forme de virion dépourvue de matériel génétique', correct: false, correction: 'Non. Les variants se distinguent justement par leurs séquences génétiques.' },
    ],
    explanation: 'Le cours emploie « quasi-espèce » pour désigner la diversité de variants apparentés qui peut coexister chez un même hôte. (Cours, p. 7)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'À propos des formes recombinantes circulantes du VIH-1 (CRF), quelles affirmations sont exactes ?',
    options: [
      { text: 'Une cellule infectée par deux variants peut permettre la naissance d\'un recombinant', correct: true, correction: 'Oui. La coexistence de génomes différents fournit les modèles de la recombinaison.' },
      { text: 'La recombinaison rend tous les descendants strictement identiques aux deux parents', correct: false, correction: 'Non. Elle peut créer de nouvelles combinaisons de séquences.' },
      { text: 'Elles combinent du matériel génétique provenant de lignées virales différentes', correct: true, correction: 'Oui. C\'est le principe d\'une forme recombinante.' },
      { text: 'Une CRF résulte nécessairement d\'une unique erreur ponctuelle de copie', correct: false, correction: 'Non. La recombinaison assemble des segments de lignées différentes ; elle ne se réduit pas à une mutation ponctuelle.' },
      { text: 'Certaines formes recombinantes peuvent se transmettre et circuler dans la population', correct: true, correction: 'Oui. C\'est ce qu\'indique le terme « forme recombinante circulante ».' },
    ],
    explanation: 'Le schéma du cours montre, au sein du groupe M, des sous-types et des formes recombinantes comme CRF01_AE. (Cours, p. 7 ; NCBI, https://pubmed.ncbi.nlm.nih.gov/21994801/)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Le cours explique la fréquence historique du sous-type B dans certaines régions hors d\'Afrique par quel mécanisme ?',
    options: [
      { text: 'La disparition complète des autres lignées partout dans le monde', correct: false, correction: 'Non. De nombreuses autres lignées circulent dans le monde.' },
      { text: 'Une efficacité supérieure de la transcriptase inverse uniquement dans les cellules européennes', correct: false, correction: 'Non. Le cours n\'attribue pas cette distribution à une propriété de cellules européennes.' },
      { text: 'Une transformation systématique de tous les autres sous-types en B', correct: false, correction: 'Non. Les sous-types ne convergent pas tous obligatoirement vers B.' },
      { text: 'Un effet fondateur lié à la diffusion initiale d\'une lignée virale', correct: true, correction: 'Oui. Une lignée introduite tôt peut devenir fréquente localement en se propageant.' },
      { text: 'Une absence totale de VIH-1 du groupe M en Afrique', correct: false, correction: 'Non. Le groupe M est présent en Afrique et y possède une grande diversité.' },
    ],
    explanation: 'Le cours utilise le sous-type B pour illustrer un effet fondateur et une diffusion géographique historique ; cette description ne préjuge pas de sa fréquence actuelle dans chaque pays. (Cours, p. 7)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles propositions sur la sensibilité naturelle aux inhibiteurs non nucléosidiques de la transcriptase inverse (INNTI) sont correctes ?',
    options: [
      { text: 'Le VIH-1 du groupe O a une résistance naturelle importante aux INNTI classiques', correct: true, correction: 'Oui. Le cours souligne cette particularité du groupe O, également décrite sur des isolats étudiés.' },
      { text: 'Tous les virus du groupe M sont naturellement résistants à tous les INNTI', correct: false, correction: 'Non. La résistance du groupe M aux INNTI n\'est pas une propriété intrinsèque universelle.' },
      { text: 'Le VIH-2 présente une résistance intrinsèque à cette classe', correct: true, correction: 'Oui. Les recommandations distinguent le VIH-2 du VIH-1 pour ce point thérapeutique.' },
      { text: 'Cette résistance prouve que toutes les autres classes d\'antirétroviraux sont également inactives', correct: false, correction: 'Non. Elle concerne une classe donnée ; les autres classes doivent être évaluées séparément.' },
      { text: 'Identifier le type et certains groupes viraux peut orienter le choix du traitement', correct: true, correction: 'Oui. Une sensibilité naturelle différente modifie l\'interprétation thérapeutique.' },
    ],
    explanation: 'Le cours cite VIH-2 et VIH-1 groupe O comme naturellement résistants aux INNTI, sans que cela implique une résistance à toutes les classes. (Cours, p. 8 ; NIH, https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/special-populations-hiv-2-infection?view=full ; PMID 9343254)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Dans l\'arbre des virus simiens présenté, à quelle lignée le VIH-1 du groupe O est-il le plus étroitement apparenté ?',
    options: [
      { text: 'Au sous-type B du VIH-2', correct: false, correction: 'Non. Le groupe O appartient au VIH-1 et n\'est pas présenté comme une branche du VIH-2.' },
      { text: 'Au virus de la grippe aviaire', correct: false, correction: 'Non. La grippe est sans rapport avec cette branche de l\'arbre phylogénétique.' },
      { text: 'Aux virus des mangabeys les plus proches du VIH-2', correct: false, correction: 'Non. Ces virus simiens sont surtout reliés au VIH-2.' },
      { text: 'Aux virus d\'immunodéficience de gorilles', correct: true, correction: 'Oui. L\'arbre rapproche le VIH-1 groupe O des virus de gorille.' },
      { text: 'Au virus de l\'hépatite B humain', correct: false, correction: 'Non. Le VHB appartient à une autre famille virale.' },
    ],
    explanation: 'L\'arbre phylogénétique du cours rapproche le groupe O du VIH-1 de virus simiens de gorilles, en accord avec les données sur son origine zoonotique. (Cours, p. 7 ; PNAS, https://pmc.ncbi.nlm.nih.gov/articles/PMC4371950/)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles difficultés la diversité génétique du VIH peut-elle créer, d\'après le cours ?',
    options: [
      { text: 'Une performance variable de certains tests moléculaires si leurs amorces correspondent mal au variant', correct: true, correction: 'Oui. Des mutations dans les régions ciblées peuvent réduire l\'efficacité d\'une amplification.' },
      { text: 'Des différences de sensibilité naturelle à certains antirétroviraux selon les lignées', correct: true, correction: 'Oui. VIH-2 et VIH-1 groupe O illustrent cette conséquence pour les INNTI.' },
      { text: 'La disparition immédiate du provirus de toutes les cellules infectées', correct: false, correction: 'Non. La diversité n\'entraîne pas l\'excision automatique de l\'ADN viral intégré.' },
      { text: 'L\'impossibilité absolue d\'identifier tout VIH au laboratoire', correct: false, correction: 'Non. Elle complique certains tests, mais il existe des stratégies diagnostiques adaptées.' },
      { text: 'La difficulté de concevoir une réponse vaccinale couvrant de nombreux variants', correct: true, correction: 'Oui. La diversité des séquences complique la recherche vaccinale.' },
    ],
    explanation: 'Les conséquences décrites sont thérapeutiques, diagnostiques et vaccinales ; elles demandent d\'adapter les méthodes sans conclure qu\'aucun diagnostic n\'est possible. (Cours, p. 8)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Chez une personne dont la charge virale VIH est devenue indétectable sous traitement, pourquoi un arrêt du traitement peut-il être suivi d\'un rebond viral ?',
    options: [
      { text: 'L\'indétectabilité prouve que tous les provirus ont été éliminés.', correct: false, correction: 'Non. Une charge virale plasmatique indétectable ne démontre pas l\'éradication des réservoirs.' },
      { text: 'Les antirétroviraux créent nécessairement une nouvelle infection par le VIH.', correct: false, correction: 'Non. Ils inhibent la réplication ; ils ne créent pas l\'infection qui réapparaît.' },
      { text: 'L\'ADN viral intégré persiste dans des cellules réservoirs et peut permettre la reprise de la réplication.', correct: true, correction: 'Oui. Le traitement contrôle la réplication, mais n\'élimine pas tous les provirus persistants.' },
      { text: 'Le VIH se transforme systématiquement en une bactérie résistante après l\'arrêt.', correct: false, correction: 'Non. Le VIH est un virus ; un rebond correspond à la reprise de sa réplication.' },
      { text: 'L\'arrêt du traitement fait disparaître définitivement les lymphocytes T CD4.', correct: false, correction: 'Non. Une interruption peut compromettre l\'immunité, mais le mécanisme du rebond est la persistance virale.' },
    ],
    explanation: 'La persistance du VIH intégré explique le caractère chronique de l\'infection et la possibilité d\'un rebond après interruption thérapeutique. (Cours, p. 8.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Après une exposition au niveau d\'une muqueuse, quelles étapes de dissémination du VIH sont cohérentes avec le cours ?',
    options: [
      { text: 'Les circulations lymphatique et sanguine peuvent ensuite contribuer à une diffusion vers plusieurs organes.', correct: true, correction: 'Oui. La dissémination ne s\'arrête pas à la muqueuse initiale.' },
      { text: 'La réplication reste obligatoirement confinée à la muqueuse pendant toute la phase chronique.', correct: false, correction: 'Non. Le virus peut atteindre les tissus lymphoïdes et divers organes.' },
      { text: 'Le virus peut infecter des cellules immunitaires au niveau de la muqueuse d\'entrée.', correct: true, correction: 'Oui. L\'infection locale de cellules cibles peut initier la diffusion.' },
      { text: 'Il peut gagner les ganglions drainants après cette phase locale.', correct: true, correction: 'Oui. Les tissus lymphoïdes font partie de la progression décrite dans le cours.' },
      { text: 'L\'absence de symptôme au point d\'entrée empêche toute diffusion systémique.', correct: false, correction: 'Non. La diffusion peut avoir lieu sans manifestation locale reconnaissable.' },
    ],
    explanation: 'Après la porte d\'entrée muqueuse, les cellules infectées et les voies lymphatique et sanguine permettent l\'extension de l\'infection au-delà du site initial. (Cours, p. 8.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle interprétation distingue correctement la charge virale VIH et le taux de lymphocytes T CD4 ?',
    options: [
      { text: 'Une charge virale basse prouve toujours l\'absence de réservoir viral.', correct: false, correction: 'Non. Le VIH peut persister dans des cellules malgré une faible virémie plasmatique.' },
      { text: 'La charge virale compte les CD4, tandis que le taux de CD4 mesure l\'ARN viral.', correct: false, correction: 'Non. Les deux paramètres sont inversés dans cette proposition.' },
      { text: 'La charge virale renseigne sur la réplication circulante ; le taux de CD4 renseigne sur l\'état immunitaire.', correct: true, correction: 'Oui. Ces indicateurs sont complémentaires : activité virale d\'un côté, atteinte immunitaire de l\'autre.' },
      { text: 'Le taux de CD4 permet à lui seul de dater précisément la contamination.', correct: false, correction: 'Non. La baisse des CD4 est variable et ne donne pas une date individuelle exacte.' },
      { text: 'Ces deux mesures sont interchangeables car elles quantifient exactement la même chose.', correct: false, correction: 'Non. Le nombre de CD4 et la quantité d\'ARN viral répondent à des questions différentes.' },
    ],
    explanation: 'Le cours utilise l\'image de la vitesse du train pour la charge virale et de la réserve immunitaire pour les CD4 ; cette image reste une aide, non un calcul prédictif individuel. (Cours, p. 9.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Sans traitement antirétroviral, quelles évolutions peuvent caractériser l\'histoire naturelle du VIH ?',
    options: [
      { text: 'La fin de la primo-infection équivaut habituellement à une guérison spontanée définitive.', correct: false, correction: 'Non. Le VIH persiste et l\'infection devient chronique en l\'absence d\'éradication.' },
      { text: 'Une forte virémie peut survenir durant la primo-infection.', correct: true, correction: 'Oui. La réplication initiale s\'accompagne souvent d\'un pic de charge virale.' },
      { text: 'Toutes les personnes atteignent le stade avancé exactement huit ans après la contamination.', correct: false, correction: 'Non. Les durées du cours sont des repères descriptifs ; la progression varie selon les personnes.' },
      { text: 'La réponse immunitaire initiale peut faire baisser partiellement la virémie après ce pic.', correct: true, correction: 'Oui. Une baisse relative peut suivre le pic sans signifier l\'élimination du virus.' },
      { text: 'Une phase longtemps peu symptomatique peut coexister avec une réplication persistante.', correct: true, correction: 'Oui. « Asymptomatique » ne veut pas dire absence d\'activité virale.' },
    ],
    explanation: 'Après le pic initial, un équilibre relatif peut s\'installer, mais le VIH continue de se répliquer sans traitement et l\'évolution est variable. (Cours, p. 9–10.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Après une exposition récente au VIH, quel tableau clinique est compatible avec une primo-infection ?',
    options: [
      { text: 'Une absence complète de symptômes qui exclut l\'infection.', correct: false, correction: 'Non. Certaines primo-infections sont asymptomatiques.' },
      { text: 'Une pneumocystose obligatoire dès les premiers jours après l\'exposition.', correct: false, correction: 'Non. La pneumocystose évoque surtout une immunodéficience avancée, pas une étape initiale obligatoire.' },
      { text: 'Un syndrome fébrile évoquant une virose, parfois avec éruption et adénopathies, ou même aucun symptôme.', correct: true, correction: 'Oui. La primo-infection peut être peu spécifique ou asymptomatique.' },
      { text: 'Un tableau clinique qui suffit, sans test, à confirmer formellement le VIH.', correct: false, correction: 'Non. Les symptômes ressemblent à ceux d\'autres viroses et ne constituent pas une preuve diagnostique.' },
      { text: 'Une éruption cutanée pathognomonique présente chez toutes les personnes infectées.', correct: false, correction: 'Non. L\'éruption est inconstante et n\'est pas spécifique du VIH.' },
    ],
    explanation: 'Quelques semaines après l\'exposition, la primo-infection peut rappeler un syndrome grippal ou mononucléosique, mais elle peut aussi passer inaperçue. (Cours, p. 9–10.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quels éléments peuvent être observés pendant une primo-infection par le VIH sans en être spécifiques ?',
    options: [
      { text: 'Des adénopathies et une pharyngite.', correct: true, correction: 'Oui. Elles peuvent faire évoquer notamment une virose ou une mononucléose.' },
      { text: 'Une éruption cutanée.', correct: true, correction: 'Oui. Elle peut accompagner la primo-infection, sans être constante ni spécifique.' },
      { text: 'Une signature clinique unique permettant de confirmer le VIH sans examen biologique.', correct: false, correction: 'Non. Aucun des signes cités ne remplace le diagnostic virologique.' },
      { text: 'Une fièvre associée à une fatigue.', correct: true, correction: 'Oui. Ce tableau général est possible, mais commun à de nombreuses infections.' },
      { text: 'Une thrombopénie modérée ou une élévation des transaminases.', correct: true, correction: 'Oui. Le cours mentionne ces anomalies biologiques possibles, non spécifiques.' },
    ],
    explanation: 'Les manifestations cliniques et biologiques de la primo-infection sont variables et non spécifiques ; leur présence oriente, mais ne confirme pas. (Cours, p. 10.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Une personne vivant avec le VIH ne présente aucun symptôme pendant plusieurs années et ne prend pas de traitement. Quelle conclusion est correcte ?',
    options: [
      { text: 'L\'absence de symptôme prouve que le VIH a été éliminé.', correct: false, correction: 'Non. L\'infection persiste malgré l\'absence de plainte clinique.' },
      { text: 'Le virus peut continuer à se répliquer pendant cette phase cliniquement silencieuse.', correct: true, correction: 'Oui. La phase chronique peu symptomatique n\'est pas une latence virologique complète.' },
      { text: 'La charge virale devient définitivement nulle après la réponse immunitaire initiale.', correct: false, correction: 'Non. La virémie peut baisser après le pic sans devenir définitivement nulle.' },
      { text: 'La numération des CD4 reste obligatoirement constante toute la vie.', correct: false, correction: 'Non. En l\'absence de traitement, les CD4 peuvent diminuer progressivement.' },
      { text: 'La personne ne peut transmettre le VIH tant qu\'elle n\'a pas de symptôme.', correct: false, correction: 'Non. Le risque dépend notamment de la virémie et du traitement, pas de la présence de symptômes.' },
    ],
    explanation: 'Dans l\'histoire naturelle non traitée, une longue période sans symptômes apparents peut masquer une réplication continue et une perte progressive des CD4. (Cours, p. 8–10.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Concernant les lymphocytes T CD4 au cours de l\'infection à VIH, quelles propositions sont justes ?',
    options: [
      { text: 'À 201 cellules/mm³, aucune infection opportuniste n\'est possible.', correct: false, correction: 'Non. Les risques évoluent de façon continue et dépendent aussi de l\'affection et du contexte clinique.' },
      { text: 'Leur diminution s\'accompagne d\'un risque croissant de certaines infections opportunistes.', correct: true, correction: 'Oui. Les CD4 contribuent à coordonner les réponses immunitaires.' },
      { text: 'Le nombre de CD4 est une mesure directe du nombre de copies d\'ARN viral dans le plasma.', correct: false, correction: 'Non. L\'ARN plasmatique correspond à la charge virale, distincte de la numération CD4.' },
      { text: 'Un taux inférieur à 200 cellules/mm³ est un repère d\'immunodéficience avancée.', correct: true, correction: 'Oui. Ce seuil est un repère important de stade avancé et de risque infectieux, sans résumer toute la clinique.' },
      { text: 'Certaines affections définissant le sida peuvent conduire à ce classement même si le chiffre de CD4 n\'est pas disponible.', correct: true, correction: 'Oui. La définition du stade avancé ne repose pas uniquement sur une mesure isolée des CD4.' },
    ],
    explanation: 'La baisse des CD4 accompagne la progression immunitaire ; 200/mm³ est un seuil pratique, pas une frontière biologique absolue. (Cours, p. 9–10.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Chez un adulte jusque-là sans diagnostic d\'immunodéficience, quel tableau doit particulièrement faire rechercher une infection par le VIH ?',
    options: [
      { text: 'Une myopie ancienne et stable.', correct: false, correction: 'Non. La myopie n\'a pas de lien avec une immunodéficience due au VIH.' },
      { text: 'Une toxoplasmose cérébrale.', correct: true, correction: 'Oui. Cette infection opportuniste doit faire envisager une immunodéficience, dont le VIH.' },
      { text: 'Une entorse de cheville après un traumatisme.', correct: false, correction: 'Non. Une entorse n\'est pas un indice d\'immunodéficience virale.' },
      { text: 'Une carie dentaire simple sans autre manifestation.', correct: false, correction: 'Non. Ce signe isolé est beaucoup moins évocateur qu\'une infection opportuniste profonde.' },
      { text: 'Un rhume banal isolé de deux jours.', correct: false, correction: 'Non. Un rhume isolé est fréquent dans la population générale et beaucoup moins évocateur.' },
    ],
    explanation: 'Une infection opportuniste comme la toxoplasmose cérébrale est un signal d\'alerte majeur ; elle oriente le bilan mais ne prouve pas, seule, l\'étiologie VIH. (Cours, p. 10.)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles affections citées dans le cours sont particulièrement évocatrices d\'une immunodéficience avancée chez une personne vivant avec le VIH ?',
    options: [
      { text: 'Un banal rhume isolé, toujours spécifique du sida.', correct: false, correction: 'Non. Un rhume isolé n\'est ni spécifique du VIH ni une affection définissant le stade avancé.' },
      { text: 'Une cryptococcose neuroméningée.', correct: true, correction: 'Oui. Cette infection profonde évoque une immunodéficience importante.' },
      { text: 'Une candidose œsophagienne.', correct: true, correction: 'Oui. Cette localisation, distincte d\'une simple candidose buccale, est évocatrice d\'une atteinte immunitaire avancée.' },
      { text: 'Une pneumocystose pulmonaire.', correct: true, correction: 'Oui. C\'est une infection opportuniste classiquement associée à une immunodépression cellulaire.' },
      { text: 'Une gastro-entérite brève, qui prouve à elle seule un taux de CD4 inférieur à 200/mm³.', correct: false, correction: 'Non. Cette manifestation ne permet pas d\'inférer un chiffre de CD4.' },
    ],
    explanation: 'Le cours distingue les symptômes généraux de la primo-infection des infections opportunistes qui alertent sur une immunodéficience plus profonde. (Cours, p. 10.)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Une personne a un rapport sexuel sans préservatif avec un partenaire vivant avec le VIH dont la charge virale n\'est pas durablement supprimée ou est inconnue. Quelle proposition est correcte ?',
    options: [
      { text: 'La transmission n\'existe que si le partenaire vivant avec le VIH présente déjà des symptômes.', correct: false, correction: 'Non. Une personne asymptomatique peut avoir une virémie transmissible.' },
      { text: 'La transmission exige toujours un partage de seringue en plus du rapport sexuel.', correct: false, correction: 'Non. La voie sexuelle est une voie de transmission à elle seule.' },
      { text: 'Le risque est défini uniquement par le nombre de CD4 du partenaire.', correct: false, correction: 'Non. La suppression de la charge virale joue un rôle décisif dans la transmission sexuelle.' },
      { text: 'La transmission est impossible lors des rapports hétérosexuels.', correct: false, correction: 'Non. La transmission par rapport hétérosexuel est bien documentée.' },
      { text: 'Une transmission sexuelle est possible, quel que soit le genre des partenaires.', correct: true, correction: 'Oui. Le risque tient à l\'exposition et à la situation virologique, non à une identité ou orientation en soi.' },
    ],
    explanation: 'Le cours décrit la voie sexuelle comme majeure. Le risque dépend de l\'exposition et du contrôle virologique, sans se déduire de l\'orientation sexuelle ni des symptômes. (Cours, p. 11.)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'En l\'absence de suppression virologique efficace, quels liquides peuvent participer à la transmission du VIH ?',
    options: [
      { text: 'La salive lors d\'un contact social ordinaire.', correct: false, correction: 'Non. La salive seule, lors des contacts courants, n\'est pas une voie de transmission du VIH.' },
      { text: 'Le sang.', correct: true, correction: 'Oui. Une exposition au sang infecté constitue une voie reconnue de transmission.' },
      { text: 'Les sécrétions vaginales.', correct: true, correction: 'Oui. Elles peuvent être impliquées dans une transmission sexuelle.' },
      { text: 'Le lait maternel.', correct: true, correction: 'Oui. L\'allaitement peut être une voie de transmission postnatale.' },
      { text: 'Le sperme.', correct: true, correction: 'Oui. Le sperme peut intervenir dans la transmission sexuelle.' },
    ],
    explanation: 'La simple possibilité de détecter le VIH dans un liquide ne suffit pas à en faire une voie de transmission habituelle ; il faut considérer la quantité de virus et le type d\'exposition. (Cours, p. 11.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Une technique très sensible détecte des traces de VIH dans un prélèvement salivaire. Que peut-on en conclure pour un baiser social ordinaire ?',
    options: [
      { text: 'Cette détection ne démontre pas une transmission du VIH par ce contact.', correct: true, correction: 'Oui. Détecter du matériel viral n\'équivaut pas à démontrer un inoculum infectant par la salive.' },
      { text: 'Une PCR positive dans la salive impose l\'isolement social de la personne.', correct: false, correction: 'Non. Les contacts sociaux ordinaires ne justifient pas une telle mesure.' },
      { text: 'Tout baiser entraîne nécessairement une infection.', correct: false, correction: 'Non. Le VIH ne se transmet pas par les baisers sociaux ordinaires.' },
      { text: 'La PCR indique à elle seule la dose de virus infectieux transmise à l\'autre personne.', correct: false, correction: 'Non. Une détection moléculaire ne mesure pas automatiquement une transmission effective.' },
      { text: 'La salive constitue la voie principale de l\'épidémie mondiale.', correct: false, correction: 'Non. Les voies majeures décrites sont notamment sexuelle, sanguine et périnatale.' },
    ],
    explanation: 'Le cours prend la salive comme exemple de différence entre détection biologique très sensible et transmission réelle. (Cours, p. 11.)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'À quels moments une transmission du VIH de la mère à l\'enfant peut-elle survenir si aucune prévention efficace n\'est mise en place ?',
    options: [
      { text: 'Uniquement lors du premier contact peau à peau après la naissance.', correct: false, correction: 'Non. Le simple contact cutané ordinaire n\'est pas la voie décrite.' },
      { text: 'Pendant la grossesse.', correct: true, correction: 'Oui. Une transmission in utero est possible.' },
      { text: 'Pendant l\'accouchement.', correct: true, correction: 'Oui. L\'enfant peut être exposé au sang et aux sécrétions au moment de la naissance.' },
      { text: 'Après la naissance, par l\'allaitement.', correct: true, correction: 'Oui. Le lait maternel peut transmettre le VIH.' },
      { text: 'Jamais pendant l\'allaitement dès que la mère prend un traitement, même si sa virémie redevient détectable.', correct: false, correction: 'Non. Le traitement réduit fortement le risque, mais une virémie pendant l\'allaitement nécessite une réévaluation ; le risque n\'est pas automatiquement nul.' },
    ],
    explanation: 'La transmission périnatale et postnatale peut se produire avant, pendant ou après l\'accouchement ; un traitement efficace et un suivi adaptés réduisent fortement ce risque. (Cours, p. 11.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Que signifie « indétectable = intransmissible » pour une personne vivant avec le VIH sous traitement efficace et dont la charge virale est durablement supprimée ?',
    options: [
      { text: 'La seule prise d\'une première dose d\'antirétroviral suffit à établir immédiatement cette situation.', correct: false, correction: 'Non. Il faut atteindre et maintenir la suppression virologique sous traitement.' },
      { text: 'Elle est définitivement guérie et peut arrêter tout traitement sans risque de rebond.', correct: false, correction: 'Non. La suppression n\'efface pas les réservoirs ; l\'arrêt peut entraîner un rebond.' },
      { text: 'Le message ne s\'applique qu\'aux rapports entre hommes.', correct: false, correction: 'Non. La prévention par suppression virale concerne la transmission sexuelle quels que soient les partenaires.' },
      { text: 'Elle ne transmet pas le VIH à ses partenaires par voie sexuelle tant que cette suppression est maintenue.', correct: true, correction: 'Oui. Les données actuelles établissent l\'absence de transmission sexuelle lorsque la charge virale reste durablement supprimée sous traitement (moins de 200 copies/mL).' },
      { text: 'Cette règle garantit aussi l\'absence absolue de transmission par allaitement.', correct: false, correction: 'Non. Le message I=I concerne la voie sexuelle ; les recommandations périnatales évaluent séparément l\'allaitement.' },
    ],
    explanation: 'La charge virale, mise en avant par le cours pour le risque de transmission, fonde le message actuel I=I : une suppression durable sous antirétroviraux empêche la transmission sexuelle. (Cours, p. 9 et 11 ; OMS, 2026.)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles mesures ou situations réduisent effectivement le risque de transmission du VIH par les voies décrites dans le cours ?',
    options: [
      { text: 'Utiliser du matériel d\'injection stérile et ne pas partager les seringues.', correct: true, correction: 'Oui. Cela prévient les expositions sanguines liées au partage du matériel.' },
      { text: 'Sécuriser les dons de sang par le dépistage et les procédures transfusionnelles.', correct: true, correction: 'Oui. Ces mesures ont fortement diminué le risque transfusionnel.' },
      { text: 'Éviter toute poignée de main avec une personne vivant avec le VIH.', correct: false, correction: 'Non. Les contacts sociaux ordinaires ne transmettent pas le VIH.' },
      { text: 'Considérer qu\'une charge virale indétectable autorise le partage de matériel d\'injection.', correct: false, correction: 'Non. La règle I=I est établie pour la transmission sexuelle et ne justifie pas le partage de matériel exposant au sang.' },
      { text: 'Utiliser un préservatif lors d\'une exposition sexuelle lorsque la suppression virale n\'est pas établie.', correct: true, correction: 'Oui. Le préservatif est une mesure de prévention de la transmission sexuelle.' },
    ],
    explanation: 'Les mesures préventives ciblent les voies réelles de transmission : rapports sexuels avec virémie non supprimée et exposition au sang. (Cours, p. 11.)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'En épidémiologie, à quoi correspond le nombre de « personnes vivant avec le VIH » dans une population à une date donnée ?',
    options: [
      { text: 'Uniquement au nombre de transmissions survenues le jour de l\'enquête.', correct: false, correction: 'Non. Il ne s\'agit pas des seules nouvelles contaminations du jour.' },
      { text: 'Uniquement au nombre de personnes au stade sida avancé.', correct: false, correction: 'Non. Une personne vivant avec le VIH peut ne pas avoir atteint le stade sida.' },
      { text: 'Au nombre de personnes qui vivent avec l\'infection à cette date, qu\'elles aient été diagnostiquées récemment ou auparavant.', correct: true, correction: 'Oui. C\'est un effectif de personnes vivant avec le VIH, distinct des nouveaux diagnostics annuels.' },
      { text: 'À la proportion de personnes infectées uniquement par voie sexuelle.', correct: false, correction: 'Non. Ce total inclut l\'ensemble des personnes, quelle que soit la voie de transmission.' },
      { text: 'Au nombre de tests VIH positifs répétés chez une même personne.', correct: false, correction: 'Non. Le décompte concerne des personnes, non le nombre de tests.' },
    ],
    explanation: 'Le cours emploie la formulation « personnes vivant avec le VIH » pour décrire la population concernée ; elle ne doit pas être confondue avec les découvertes de séropositivité d\'une année. (Cours, p. 11–12.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles affirmations qualitatives sur l\'épidémiologie mondiale du VIH sont correctes ?',
    options: [
      { text: 'Les proportions et les effectifs publiés restent nécessairement identiques d\'une année à l\'autre.', correct: false, correction: 'Non. Les chiffres épidémiologiques évoluent et doivent toujours être rattachés à une année et à une source.' },
      { text: 'Le VIH concerne aussi bien des femmes que des hommes.', correct: true, correction: 'Oui. L\'épidémie touche plusieurs sexes et genres ; elle ne se limite pas à un seul groupe.' },
      { text: 'Des enfants vivent également avec le VIH.', correct: true, correction: 'Oui. Les infections pédiatriques existent, notamment en lien avec la transmission mère-enfant.' },
      { text: 'L\'Afrique subsaharienne supporte une part particulièrement importante de la charge mondiale.', correct: true, correction: 'Oui. Le cours souligne ce poids régional, confirmé par les données internationales.' },
      { text: 'Le VIH n\'existe plus hors du continent africain.', correct: false, correction: 'Non. L\'épidémie est mondiale, même si sa répartition n\'est pas uniforme.' },
    ],
    explanation: 'Les répartitions décrites dans le cours illustrent une épidémie mondiale et inégalement distribuée ; il vaut mieux retenir ces rapports que figer des estimations datées. (Cours, p. 11.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Une personne née hors de France découvre sa séropositivité après son arrivée en France. Quelle déduction est justifiée par son seul lieu de naissance ?',
    options: [
      { text: 'La contamination a nécessairement eu lieu en France le jour du diagnostic.', correct: false, correction: 'Non. Le diagnostic peut survenir longtemps après l\'acquisition de l\'infection.' },
      { text: 'La personne se trouve nécessairement au stade sida au diagnostic.', correct: false, correction: 'Non. Le stade clinique ne peut être déduit du lieu de naissance.' },
      { text: 'Le mode de transmission est obligatoirement sanguin.', correct: false, correction: 'Non. Le pays de naissance ne définit pas la voie de transmission.' },
      { text: 'Aucune : le lieu de naissance ne permet pas, à lui seul, de situer le moment ou le pays de la contamination.', correct: true, correction: 'Oui. Une contamination peut avoir eu lieu avant ou après l\'arrivée ; des données supplémentaires sont nécessaires.' },
      { text: 'La contamination a nécessairement eu lieu avant l\'arrivée en France.', correct: false, correction: 'Non. Le cours indique qu\'une partie des personnes concernées se contaminent après leur arrivée.' },
    ],
    explanation: 'Le cours rappelle que certaines personnes nées à l\'étranger ont acquis le VIH après leur arrivée en France ; l\'origine géographique ne suffit donc pas à inférer le lieu de contamination. (Cours, p. 12.)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Comment interpréter correctement les données françaises de surveillance du VIH présentées dans le cours ?',
    options: [
      { text: 'Une découverte de séropositivité pendant une année n\'est pas forcément une contamination survenue la même année.', correct: true, correction: 'Oui. Un délai variable peut séparer acquisition du VIH et diagnostic.' },
      { text: 'Les rapports hétérosexuels et les rapports sexuels entre hommes figurent tous deux parmi les modes déclarés dans les nouveaux diagnostics.', correct: true, correction: 'Oui. Le cours décrit ces deux situations dans les découvertes de séropositivité.' },
      { text: 'Le nombre annuel de découvertes de séropositivité est, par définition, exactement l\'incidence des nouvelles contaminations de l\'année.', correct: false, correction: 'Non. Le nombre de diagnostics et le nombre de contaminations nouvelles sont deux indicateurs différents.' },
      { text: 'Les modes déclarés parmi les personnes nouvellement diagnostiquées ne décrivent pas automatiquement toutes les personnes vivant avec le VIH.', correct: true, correction: 'Oui. Le groupe des nouveaux diagnostics et l\'ensemble des personnes vivant avec le VIH ne sont pas le même dénominateur.' },
      { text: 'Les pourcentages de modes de transmission cités dans le cours sont des constantes biologiques valables pour toute année et tout pays.', correct: false, correction: 'Non. Ce sont des estimations descriptives liées à un lieu, une période et une méthode de surveillance.' },
    ],
    explanation: 'Pour lire les chiffres français, il faut distinguer diagnostic, date et lieu de contamination, puis replacer chaque pourcentage dans son contexte temporel. (Cours, p. 12.)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Chez une personne déjà diagnostiquée et dont la charge virale est indétectable sous traitement antirétroviral efficace, quel résultat sérologique reste généralement attendu ?',
    options: [
      { text: 'Une positivité obligatoire de l\'antigène p24 malgré le traitement', correct: false, correction: 'Non. Sous suppression virologique, l\'antigène p24 n\'est généralement pas détecté.' },
      { text: 'Une disparition automatique de tous les anticorps anti-VIH', correct: false, correction: 'Non. Une charge virale indétectable sous traitement n\'implique pas une sérologie devenue négative.' },
      { text: 'Une numération des CD4 obligatoirement égale à zéro', correct: false, correction: 'Non. Le traitement peut permettre une remontée des CD4 ; ce nombre ne définit pas le résultat sérologique.' },
      { text: 'Une culture virale positive comme unique preuve de l\'infection passée', correct: false, correction: 'Non. Le suivi habituel ne repose pas sur la culture du virus, et la sérologie peut rester positive.' },
      { text: 'Des anticorps anti-VIH encore détectables', correct: true, correction: 'Oui. La suppression de l\'ARN plasmatique ne fait généralement pas disparaître les anticorps produits contre le VIH.' },
    ],
    explanation: 'Les anticorps anti-VIH persistent habituellement sous traitement efficace alors que l\'ARN plasmatique et l\'antigène p24 peuvent devenir indétectables ; il existe des situations particulières, notamment après traitement très précoce. (Cours, p. 13)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles associations entre cible et type de méthode diagnostique sont correctes ?',
    options: [
      { text: 'ARN plasmatique du VIH : recherche directe du génome viral', correct: true, correction: 'Oui. Une amplification moléculaire recherche le matériel génétique viral.' },
      { text: 'Antigène p24 : recherche directe d\'une protéine du virus', correct: true, correction: 'Oui. p24 est une protéine de capside virale, pas un anticorps.' },
      { text: 'Nombre de CD4 : identification directe du sous-type VIH-1', correct: false, correction: 'Non. Le nombre de CD4 n\'identifie pas le type viral.' },
      { text: 'Anticorps anti-VIH : marqueur sérologique indirect', correct: true, correction: 'Oui. Ils reflètent la réponse immunitaire contre le virus.' },
      { text: 'Western blot : dosage direct de la charge virale', correct: false, correction: 'Non. L\'immunoblot interprète des réactions d\'anticorps contre des protéines virales.' },
    ],
    explanation: 'Anticorps, antigène p24 et ARN viral ne représentent pas le même niveau de preuve ni la même cible biologique. (Cours, p. 12-14)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Dans la chronologie indicative du cours, quel marqueur sanguin peut être détecté le plus tôt après une contamination par le VIH ?',
    options: [
      { text: 'Une chute obligatoire des CD4 dès le premier jour', correct: false, correction: 'Non. Le compte de CD4 n\'est pas le premier marqueur virologique détectable.' },
      { text: 'L\'ARN viral plasmatique', correct: true, correction: 'Oui. La recherche d\'ARN peut devenir positive avant p24 et avant les anticorps.' },
      { text: 'Une bande complète de Western blot immédiatement après l\'exposition', correct: false, correction: 'Non. Il faut du temps pour produire plusieurs anticorps détectables.' },
      { text: 'Les anticorps anti-VIH-2 chez tout patient', correct: false, correction: 'Non. Ils ne sont pas le premier marqueur d\'une infection par VIH-1.' },
      { text: 'Les anticorps anti-gp120', correct: false, correction: 'Non. Les anticorps apparaissent après le début de la réplication virale.' },
    ],
    explanation: 'Le schéma du cours place l\'ARN viral avant l\'antigène p24 puis les anticorps ; les délais sont indicatifs et varient selon les personnes et les tests. (Cours, p. 13)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Que montre la cinétique des marqueurs pendant les premières semaines d\'une infection par le VIH ?',
    options: [
      { text: 'Un résultat négatif au lendemain du rapport exclut toute contamination', correct: false, correction: 'Non. Un prélèvement aussi précoce tombe dans la fenêtre diagnostique.' },
      { text: 'L\'ARN plasmatique peut précéder la positivité de l\'antigène p24', correct: true, correction: 'Oui. C\'est l\'ordre figuré sur le graphique du cours.' },
      { text: 'Une période très précoce peut précéder la détection des marqueurs', correct: true, correction: 'Oui. Aucun test n\'est immédiatement positif après l\'exposition.' },
      { text: 'Les anticorps apparaissent après le début de la réplication virale', correct: true, correction: 'Oui. Leur production exige une réponse immunitaire.' },
      { text: 'L\'antigène p24 peut diminuer après la primo-infection', correct: true, correction: 'Oui. Le cours le présente surtout comme un marqueur de phase précoce.' },
    ],
    explanation: 'La fenêtre initiale explique pourquoi un résultat négatif très précoce ne clôt pas l\'évaluation après une exposition. (Cours, p. 12-13)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quelles cibles réunit le test de laboratoire VIH de quatrième génération décrit dans le cours ?',
    options: [
      { text: 'Seulement l\'ARN du VIH-1', correct: false, correction: 'Non. L\'ARN est recherché par une méthode moléculaire distincte.' },
      { text: 'Les CD4, la charge virale et l\'antigène p24 dans un même dosage', correct: false, correction: 'Non. Le compte CD4 et la charge virale sont des examens séparés.' },
      { text: 'Seulement les anticorps anti-VIH-1', correct: false, correction: 'Non. Le test de laboratoire inclut aussi les anticorps anti-VIH-2 et l\'antigène p24.' },
      { text: 'Une culture virale et un séquençage complet du VIH', correct: false, correction: 'Non. Ce test est immunologique, pas une culture ou un séquençage.' },
      { text: 'Les anticorps anti-VIH-1 et anti-VIH-2 ainsi que l\'antigène p24', correct: true, correction: 'Oui. Ce test est à la fois mixte pour les anticorps VIH-1/2 et combiné avec p24.' },
    ],
    explanation: 'En laboratoire, le test de quatrième génération associe la recherche des anticorps anti-VIH-1/2 à celle de l\'antigène p24. (Cours, p. 13-14 ; Assurance maladie)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Dans la terminologie du cours, quelles propriétés caractérisent le dépistage VIH de quatrième génération ?',
    options: [
      { text: 'Il est « mixte » car il recherche des anticorps dirigés contre VIH-1 et VIH-2', correct: true, correction: 'Oui. Le terme vise la couverture des deux types viraux.' },
      { text: 'Il est « combiné » car il recherche anticorps et antigène p24', correct: true, correction: 'Oui. Il associe deux catégories de marqueurs.' },
      { text: 'Sa réactivité initiale ne précise pas à elle seule quel marqueur a réagi', correct: true, correction: 'Oui. Une analyse complémentaire est nécessaire pour préciser le profil.' },
      { text: 'Il donne directement la charge virale en copies/mL', correct: false, correction: 'Non. Il n\'effectue pas de quantification de l\'ARN viral.' },
      { text: 'Sa positivité isolée dispense de tout test de confirmation', correct: false, correction: 'Non. Une réaction non spécifique reste possible.' },
    ],
    explanation: 'Le test combine anticorps et p24, couvre VIH-1/2 pour la composante anticorps et sert au dépistage, pas à la confirmation isolée. (Cours, p. 14)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Dans l\'algorithme français de laboratoire présenté, quelle est l\'étape suivant un test de quatrième génération réactif ?',
    options: [
      { text: 'L\'abandon de tout examen si la personne n\'a aucun symptôme', correct: false, correction: 'Non. L\'absence de symptôme n\'annule pas un résultat réactif.' },
      { text: 'L\'annonce immédiate d\'une infection certaine à partir de ce seul test', correct: false, correction: 'Non. Le dépistage peut être faussement positif.' },
      { text: 'Une mesure de CD4 comme unique confirmation virologique', correct: false, correction: 'Non. Les CD4 ne confirment pas directement l\'infection.' },
      { text: 'Une attente systématique de plusieurs années avant de refaire un prélèvement', correct: false, correction: 'Non. La clarification d\'un résultat réactif doit être menée sans un tel délai.' },
      { text: 'Une analyse de confirmation sur le prélèvement initial', correct: true, correction: 'Oui. Le cours utilise un immunoblot/Western blot pour vérifier la réactivité du dépistage.' },
    ],
    explanation: 'En France, une analyse de confirmation complète le dépistage réactif sur le même prélèvement avant toute conclusion définitive. (Cours, p. 14-15 ; HAS)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Comment interpréter un dépistage de laboratoire de quatrième génération négatif après une exposition possible ?',
    options: [
      { text: 'Une exposition très récente peut rendre le résultat provisoirement négatif', correct: true, correction: 'Oui. La fenêtre diagnostique doit être prise en compte.' },
      { text: 'Le délai de six semaines vaut à l\'identique pour tous les autotests d\'anticorps', correct: false, correction: 'Non. Les autotests ont une fenêtre différente, habituellement plus longue.' },
      { text: 'En l\'absence de prophylaxie ou d\'autre situation particulière, un contrôle à six semaines après l\'exposition peut être nécessaire', correct: true, correction: 'Oui. C\'est le repère de fiabilité indiqué pour ce test de laboratoire en France.' },
      { text: 'Un test négatif réalisé le jour même exclut une contamination survenue la veille', correct: false, correction: 'Non. Aucun des marqueurs n\'a forcément eu le temps d\'apparaître.' },
      { text: 'Si une primo-infection est fortement suspectée, une recherche d\'ARN peut être discutée malgré la sérologie négative', correct: true, correction: 'Oui. La méthode moléculaire peut aider lorsque l\'exposition est très récente.' },
    ],
    explanation: 'Un résultat négatif se lit selon le délai depuis la dernière exposition ; en France, le test combiné de laboratoire est rassurant à partir de six semaines en situation standard. (Cours, p. 15 ; Assurance maladie)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quel est le principe du Western blot décrit comme test de confirmation dans le cours ?',
    options: [
      { text: 'Visualiser la fixation d\'anticorps du patient à différentes protéines virales sur une bandelette', correct: true, correction: 'Oui. Les bandes reflètent des anticorps dirigés contre des antigènes connus du VIH.' },
      { text: 'Compter les lymphocytes T CD4+ au microscope', correct: false, correction: 'Non. Il s\'agit d\'un examen immunologique distinct du compte de CD4.' },
      { text: 'Détecter seulement l\'antigène p24 sans réaction d\'anticorps', correct: false, correction: 'Non. Les bandes d\'immunoblot résultent de la reconnaissance d\'antigènes par les anticorps du patient.' },
      { text: 'Mesurer directement le nombre de virions viables dans le plasma', correct: false, correction: 'Non. Le test met en évidence des anticorps, pas une culture virale.' },
      { text: 'Amplifier l\'ARN viral par RT-PCR', correct: false, correction: 'Non. L\'amplification moléculaire est une méthode différente.' },
    ],
    explanation: 'L\'immunoblot complète le dépistage en analysant la reconnaissance de plusieurs protéines virales par les anticorps du sérum. (Cours, p. 14-15)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles précautions sont justifiées lors de l\'interprétation des bandes d\'un immunoblot VIH ?',
    options: [
      { text: 'Un profil partiel peut nécessiter des analyses complémentaires ou un nouveau prélèvement', correct: true, correction: 'Oui. Une séroconversion très récente peut produire un profil incomplet.' },
      { text: 'Une bande isolée ne suffit pas à confirmer l\'infection', correct: true, correction: 'Oui. Le cours ne la traite pas comme un profil confirmatoire.' },
      { text: 'Toute bande unique identifie nécessairement un VIH-2 certain', correct: false, correction: 'Non. Une bande isolée ne détermine pas à elle seule le type de virus.' },
      { text: 'Selon les critères VIH-1 du cours, deux bandes d\'enveloppe et une bande d\'une autre région soutiennent la confirmation', correct: true, correction: 'Oui. Le cours cite deux protéines d\'enveloppe parmi gp120, gp41 et gp160, plus une autre région, par exemple p24.' },
      { text: 'L\'absence de bandes exclut définitivement une exposition qui date de deux jours', correct: false, correction: 'Non. La fenêtre de production des anticorps rend cette conclusion impossible.' },
    ],
    explanation: 'Le résultat de confirmation dépend d\'un profil de bandes et de critères validés ; un résultat incomplet se réévalue avec le contexte et parfois l\'ARN. (Cours, p. 14-15)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Pourquoi le test de confirmation doit-il pouvoir distinguer VIH-1 et VIH-2 ?',
    options: [
      { text: 'Parce que le dépistage de quatrième génération identifie déjà toujours le type exact', correct: false, correction: 'Non. Le résultat initial ne discrimine généralement pas la réactivité VIH-1/VIH-2.' },
      { text: 'Pour identifier correctement le type d\'infection et orienter les examens et la prise en charge', correct: true, correction: 'Oui. Le type viral a des implications pour le suivi et certains choix thérapeutiques.' },
      { text: 'Parce que la numération des CD4 suffit à différencier les deux virus', correct: false, correction: 'Non. Le compte de CD4 ne révèle pas le type viral.' },
      { text: 'Parce que les anticorps anti-VIH-1 ne peuvent jamais réagir avec un antigène VIH-2', correct: false, correction: 'Non. Des réactivités croisées peuvent compliquer l\'interprétation.' },
      { text: 'Parce que le VIH-2 est un sous-type du VIH-1 groupe M', correct: false, correction: 'Non. VIH-1 et VIH-2 sont deux types viraux distincts.' },
    ],
    explanation: 'La confirmation et la différenciation VIH-1/VIH-2 font partie du diagnostic biologique de laboratoire. (Cours, p. 14-15 ; HAS)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Après un dépistage réactif et une confirmation positive dans l\'algorithme du cours, quelles étapes sont correctes ?',
    options: [
      { text: 'Supprimer la confirmation parce que le premier dépistage est très sensible', correct: false, correction: 'Non. Une haute sensibilité ne supprime pas le risque de faux positif.' },
      { text: 'Recueillir un second prélèvement indépendant pour vérifier l\'identité et la concordance des résultats', correct: true, correction: 'Oui. Il réduit notamment le risque d\'une erreur d\'attribution de tube.' },
      { text: 'Contrôler la réactivité sur ce second prélèvement avant de conclure définitivement', correct: true, correction: 'Oui. La confirmation biologique tient compte de deux prélèvements distincts.' },
      { text: 'Utiliser le même tube deux fois et l\'appeler « second prélèvement »', correct: false, correction: 'Non. Le contrôle d\'identité exige un nouveau prélèvement réellement indépendant.' },
      { text: 'Organiser l\'annonce et la prise en charge après établissement du diagnostic', correct: true, correction: 'Oui. Le cours place ces démarches après la vérification.' },
    ],
    explanation: 'La confirmation sur le premier prélèvement est suivie d\'un contrôle sur un second prélèvement afin de sécuriser l\'identification et le résultat. (Cours, p. 15-16 ; Assurance maladie)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Le dépistage combiné est réactif mais l\'immunoblot est négatif chez une personne récemment exposée. Quel examen peut aider à rechercher une primo-infection ?',
    options: [
      { text: 'Une recherche d\'ARN du VIH par amplification moléculaire', correct: true, correction: 'Oui. L\'ARN peut être présent avant la mise en place d\'un profil d\'anticorps confirmé.' },
      { text: 'Une numération de CD4 seule', correct: false, correction: 'Non. Elle n\'établit pas la présence du virus en phase très précoce.' },
      { text: 'Une culture bactérienne de gorge', correct: false, correction: 'Non. Elle ne recherche aucun marqueur du VIH.' },
      { text: 'La lecture répétée du même immunoblot sans autre analyse ni nouveau prélèvement', correct: false, correction: 'Non. Il faut explorer la discordance par des tests adaptés et un suivi.' },
      { text: 'La conclusion immédiate « faux positif » sans tenir compte de l\'exposition', correct: false, correction: 'Non. Une infection très récente peut précéder la réponse en anticorps.' },
    ],
    explanation: 'Une discordance dépistage/immunoblot après exposition récente doit faire envisager la phase aiguë ; l\'ARN viral est un examen direct utile. (Cours, p. 15 ; Assurance maladie)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles interprétations sont possibles devant un dépistage VIH réactif avec confirmation par anticorps négative ou indéterminée ?',
    options: [
      { text: 'Une primo-infection avec anticorps encore insuffisants', correct: true, correction: 'Oui. Le signal initial peut provenir de p24 avant la séroconversion complète.' },
      { text: 'Une infection confirmée certaine dès la seule réactivité initiale', correct: false, correction: 'Non. La discordance exige précisément des analyses complémentaires.' },
      { text: 'Un besoin de rechercher l\'ARN viral ou p24 et de suivre l\'évolution selon le contexte', correct: true, correction: 'Oui. L\'ARN et, si recherché séparément, p24 confirmé par neutralisation aident à départager infection précoce et réactivité non spécifique.' },
      { text: 'Une preuve que le patient n\'a jamais pu être exposé au VIH', correct: false, correction: 'Non. Les résultats de laboratoire ne renseignent pas à eux seuls sur l\'histoire d\'exposition.' },
      { text: 'Une réaction non spécifique du test de dépistage', correct: true, correction: 'Oui. C\'est l\'autre possibilité majeure du cours.' },
    ],
    explanation: 'Devant des tests discordants, on évite une conclusion prématurée et on recherche une infection très récente avec les outils directs appropriés. (Cours, p. 15)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Que mesure une RT-PCR VIH réalisée sur plasma dans le bilan diagnostique ?',
    options: [
      { text: 'La quantité de p24 libre par une réaction immuno-enzymatique', correct: false, correction: 'Non. p24 est un antigène protéique, non le matériel ciblé par cette RT-PCR.' },
      { text: 'Le nombre de lymphocytes T CD4+', correct: false, correction: 'Non. La numération de CD4 est un examen cellulaire distinct.' },
      { text: 'L\'ARN viral circulant', correct: true, correction: 'Oui. C\'est une recherche directe du génome viral dans le plasma.' },
      { text: 'Les anticorps anti-gp41', correct: false, correction: 'Non. Les anticorps sont détectés par des méthodes sérologiques.' },
      { text: 'Le titre d\'anticorps anti-p24 sur Western blot', correct: false, correction: 'Non. La RT-PCR ne lit pas les bandes d\'immunoblot.' },
    ],
    explanation: 'La RT-PCR recherche l\'ARN du VIH, utile notamment lorsque la production d\'anticorps est encore incomplète. (Cours, p. 13 et 15)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'En cas de suspicion forte de primo-infection VIH, quelles propositions sont exactes ?',
    options: [
      { text: 'Le dépistage combiné peut réagir par sa composante antigène p24', correct: true, correction: 'Oui. C\'est l\'intérêt de la quatrième génération dans la phase précoce.' },
      { text: 'Une recherche d\'ARN peut devenir positive avant les tests d\'anticorps', correct: true, correction: 'Oui. La réplication précède la réponse sérologique complète.' },
      { text: 'Un test négatif obtenu dans les premiers jours après l\'exposition ne suffit pas à exclure l\'infection', correct: true, correction: 'Oui. Les marqueurs ont une fenêtre d\'apparition.' },
      { text: 'Un immunoblot négatif très précoce exclut l\'infection même si l\'ARN est détecté', correct: false, correction: 'Non. L\'ARN peut précéder les anticorps.' },
      { text: 'Un résultat virologique positif doit être sécurisé par un prélèvement indépendant', correct: true, correction: 'Oui. Le cours demande un second prélèvement avant de confirmer l\'identité du cas.' },
    ],
    explanation: 'La phase aiguë peut associer forte réplication et anticorps absents ou incomplets ; l\'interprétation doit intégrer le délai et le contrôle indépendant. (Cours, p. 13-15)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quelle situation oblige à adapter le contrôle d\'un test VIH négatif au lieu d\'appliquer automatiquement le repère standard des six semaines après exposition ?',
    options: [
      { text: 'La prise récente d\'une prophylaxie antirétrovirale, notamment un traitement post-exposition (TPE)', correct: true, correction: 'Oui. Sous TPE, les recommandations françaises prévoient un calendrier de suivi propre ; certaines formes de PrEP peuvent aussi compliquer le diagnostic précoce.' },
      { text: 'Une sérologie VIH négative plusieurs années avant l\'exposition considérée', correct: false, correction: 'Non. Elle renseigne sur la situation ancienne et ne modifie pas le calendrier de la nouvelle exposition.' },
      { text: 'Le fait que le test soit réalisé en laboratoire sur du sang veineux', correct: false, correction: 'Non. C\'est précisément le cadre du test de quatrième génération auquel s\'applique le repère standard.' },
      { text: 'Une vaccination ancienne contre l\'hépatite B', correct: false, correction: 'Non. Elle ne modifie pas la fenêtre diagnostique du VIH.' },
      { text: 'L\'absence de symptômes chez une personne sans prophylaxie', correct: false, correction: 'Non. L\'absence de symptômes n\'impose pas à elle seule un autre calendrier, mais ne remplace jamais un test.' },
    ],
    explanation: 'Le repère de six semaines vaut en situation standard. Après un TPE, la HAS prévoit en général un contrôle plus tardif (souvent à dix semaines après l\'exposition selon le contexte) ; la PrEP, surtout injectable, demande aussi une lecture individualisée. (Cours, p. 15 ; HAS, recommandations TPE et PrEP 2024)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles affirmations sur la valeur prédictive positive (VPP) d\'un dépistage VIH sont exactes ?',
    options: [
      { text: 'La VPP du même test reste fixe quelle que soit la population examinée', correct: false, correction: 'Non. La VPP dépend notamment de la prévalence dans la population examinée.' },
      { text: 'À prévalence et spécificité constantes, une meilleure sensibilité augmente la VPP', correct: true, correction: 'Oui. Elle augmente la proportion de personnes infectées correctement détectées parmi les résultats positifs.' },
      { text: 'À sensibilité et spécificité constantes, une prévalence plus élevée augmente la VPP', correct: true, correction: 'Oui. À test égal, un résultat positif correspond plus souvent à une vraie infection dans une population où le VIH est plus fréquent.' },
      { text: 'Une confirmation après un dépistage réactif renforce la fiabilité de la conclusion diagnostique', correct: true, correction: 'Oui. Elle ne modifie pas la VPP du premier test pris isolément, mais augmente la fiabilité de la séquence diagnostique.' },
      { text: 'À prévalence et sensibilité constantes, une meilleure spécificité augmente la VPP', correct: true, correction: 'Oui. Une meilleure spécificité réduit les faux positifs parmi les personnes non infectées.' },
    ],
    explanation: 'La VPP d\'un test est la probabilité d\'infection sachant ce test positif ; elle dépend notamment de la sensibilité, de la spécificité et de la prévalence. La confirmation améliore la fiabilité de l\'algorithme complet. (Cours, p. 16)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Que signifie une spécificité de 99 % pour un test, prise isolément ?',
    options: [
      { text: 'Environ 1 % des personnes non infectées pourraient avoir un résultat faussement positif avec ce test', correct: true, correction: 'Oui. Le dénominateur de la spécificité est l\'ensemble des personnes réellement non infectées.' },
      { text: 'Aucun test de confirmation n\'est utile', correct: false, correction: 'Non. Une spécificité élevée n\'élimine pas tous les faux positifs.' },
      { text: 'Le test manque nécessairement 1 % des personnes infectées', correct: false, correction: 'Non. Cette affirmation concerne la sensibilité, autre caractéristique.' },
      { text: 'Exactement 1 % de toutes les personnes testées seront faussement positives', correct: false, correction: 'Non. La proportion dans l\'ensemble testé dépend aussi de la prévalence et du recrutement.' },
      { text: '99 % des résultats positifs prouvent l\'infection', correct: false, correction: 'Non. Il s\'agit de VPP, qui n\'est pas équivalente à la spécificité.' },
    ],
    explanation: 'La spécificité est la proportion de résultats négatifs parmi les non-infectés. Le cours simplifie le passage de 99 % de spécificité à « 1 % de tous les testés » ; le dénominateur correct est celui des non-infectés. (Cours, p. 16)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Pourquoi le schéma sérologique du cours est-il indiqué pour les adultes et les enfants de plus de 18 mois, plutôt que pour le diagnostic d\'un nourrisson exposé pendant la grossesse ?',
    options: [
      { text: 'Un résultat sérologique positif isolé chez ce nourrisson exige donc une autre interprétation que chez l\'adulte', correct: true, correction: 'Oui. Le statut maternel et les tests virologiques entrent dans l\'évaluation.' },
      { text: 'Avant 18 mois, des tests virologiques recherchant directement le virus sont nécessaires pour établir le diagnostic', correct: true, correction: 'Oui. L\'ARN ou l\'ADN viral évite la confusion avec les anticorps transmis par la mère.' },
      { text: 'Le VIH ne peut biologiquement pas infecter un enfant avant 18 mois', correct: false, correction: 'Non. Une transmission périnatale est possible ; c\'est précisément pourquoi un diagnostic adapté existe.' },
      { text: 'Des anticorps maternels anti-VIH peuvent persister chez le nourrisson', correct: true, correction: 'Oui. Leur présence ne prouve pas à elle seule que l\'enfant est infecté.' },
      { text: 'La numération des CD4 remplace seule tous les tests virologiques chez le nourrisson', correct: false, correction: 'Non. Les CD4 ne prouvent pas l\'infection.' },
    ],
    explanation: 'Le récapitulatif du support limite cet algorithme aux adultes et enfants de plus de 18 mois. Chez le nourrisson exposé, les anticorps maternels peuvent fausser la sérologie et le diagnostic repose sur les tests virologiques. (Cours, p. 16 ; recommandations NIH pédiatriques 2026)'
  },
]
