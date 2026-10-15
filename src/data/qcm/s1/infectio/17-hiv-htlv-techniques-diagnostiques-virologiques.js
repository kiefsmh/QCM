export const meta = {
  title: 'HIV-HTLV et techniques diagnostiques virologiques',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Dans quelle situation le dépistage du VIH est-il systématique avant le geste ?',
    options: [
      { text: 'À toute personne admise en hospitalisation', correct: false, correction: 'Non. L\'hospitalisation à elle seule n\'impose pas un dépistage systématique.' },
      { text: 'À chaque consultation de médecine générale', correct: false, correction: 'Non. Le dépistage peut être proposé, mais n\'est pas imposé à toute consultation.' },
      { text: 'À toute personne présentant une rhinite saisonnière', correct: false, correction: 'Non. Une rhinite isolée n\'est pas une indication de dépistage systématique.' },
      { text: 'Lors d\'un don d\'organe', correct: true, correction: 'Oui. Le dépistage des donneurs d\'organes est systématique.' },
      { text: 'Avant chaque prescription d\'un antibiotique', correct: false, correction: 'Non. Une antibiothérapie ne déclenche pas à elle seule un dépistage obligatoire.' },
    ],
    explanation: 'Le cours cite les dons de sang, de sperme, de lait et d\'organes parmi les situations où le dépistage des donneurs est systématique. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Dans quelles situations le cours invite-t-il à proposer ou envisager un dépistage du VIH ?',
    options: [
      { text: 'En imposant le prélèvement à une femme enceinte qui le refuse', correct: false, correction: 'Non. Le dépistage doit être proposé et expliqué, pas imposé dans ce contexte.' },
      { text: 'Devant un tableau clinique évoquant une primo-infection', correct: true, correction: 'Oui. Une infection récente possible justifie une démarche diagnostique adaptée au délai.' },
      { text: 'Devant une pneumocystose ou une tuberculose pouvant révéler une immunodépression', correct: true, correction: 'Oui. Ces pathologies peuvent conduire à rechercher une infection par le VIH.' },
      { text: 'Au début d\'une grossesse', correct: true, correction: 'Oui. Une sérologie VIH est proposée dans le suivi prénatal.' },
      { text: 'Lorsqu\'une autre infection sexuellement transmissible est recherchée ou diagnostiquée', correct: true, correction: 'Oui. Une démarche de dépistage des IST doit aussi faire envisager le VIH.' },
    ],
    explanation: 'Le dépistage est proposé pendant la grossesse et indiqué devant une suspicion de primo-infection ou certaines pathologies évocatrices; le consentement reste nécessaire. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel choix est le plus adapté si une primo-infection VIH très récente est suspectée ?',
    options: [
      { text: 'Utiliser un test combiné de laboratoire et discuter une recherche d\'ARN VIH selon la date d\'exposition', correct: true, correction: 'Oui. Le test combiné recherche aussi p24; l\'ARN peut aider si l\'exposition est très récente.' },
      { text: 'Déduire l\'absence d\'infection de l\'absence de signes cliniques', correct: false, correction: 'Non. Une infection récente peut être paucisymptomatique ou asymptomatique.' },
      { text: 'Réaliser uniquement un Western blot d\'emblée', correct: false, correction: 'Non. L\'immunoblot recherche des anticorps et peut être négatif au tout début.' },
      { text: 'S\'en tenir à un autotest VIH négatif', correct: false, correction: 'Non. Un autotest peut être négatif pendant la période précoce.' },
      { text: 'Attendre que des anticorps soient forcément détectables sur un TROD', correct: false, correction: 'Non. Leur apparition demande du temps et varie selon la situation.' },
    ],
    explanation: 'Les tests rapides recherchant les anticorps peuvent manquer une primo-infection; le laboratoire et, si nécessaire, la recherche d\'ARN VIH répondent mieux à cette question. (Cours, p. 2-3)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Concernant un TROD VIH usuel recherchant les anticorps, quelles affirmations sont exactes ?',
    options: [
      { text: 'Il détecte systématiquement l\'ARN du VIH', correct: false, correction: 'Non. Un TROD anticorps n\'est pas une PCR.' },
      { text: 'Il exige systématiquement un prélèvement veineux en laboratoire', correct: false, correction: 'Non. Un TROD peut être pratiqué hors laboratoire, notamment sur une goutte de sang capillaire.' },
      { text: 'Pour un TROD anticorps négatif, le délai de référence après la dernière exposition est de trois mois', correct: true, correction: 'Oui. C\'est le délai de référence indiqué pour rassurer après un TROD négatif.' },
      { text: 'Un résultat négatif se juge selon le délai depuis la dernière exposition', correct: true, correction: 'Oui. Avant la fin de la fenêtre diagnostique, un résultat négatif n\'exclut pas l\'infection.' },
      { text: 'Un résultat positif constitue à lui seul un diagnostic définitivement confirmé', correct: false, correction: 'Non. Un résultat réactif doit être vérifié par un test de laboratoire.' },
    ],
    explanation: 'Le TROD anticorps offre un accès rapide au dépistage, mais son interprétation dépend de la fenêtre de trois mois et tout résultat réactif exige un contrôle de laboratoire. (Cours, p. 2)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Après quel délai depuis la dernière exposition un test VIH combiné de quatrième génération négatif en laboratoire est-il généralement considéré fiable dans la situation standard ?',
    options: [
      { text: 'Après 72 heures', correct: false, correction: 'Non. Trois jours restent dans la fenêtre diagnostique.' },
      { text: 'Après six semaines', correct: true, correction: 'Oui. C\'est le délai de référence pour un résultat négatif de laboratoire dans la situation standard.' },
      { text: 'À n\'importe quel délai si les symptômes ont disparu', correct: false, correction: 'Non. La disparition des symptômes ne modifie pas la fenêtre biologique.' },
      { text: 'Seulement après six mois', correct: false, correction: 'Non. Le test combiné de laboratoire permet habituellement une conclusion plus précoce.' },
      { text: 'Dès le lendemain', correct: false, correction: 'Non. Les marqueurs ne sont généralement pas encore détectables.' },
    ],
    explanation: 'Le cours oppose la fenêtre plus longue des tests rapides à celle du test combiné de laboratoire; dans la situation standard, six semaines après la dernière exposition permettent de conclure sur un résultat négatif. (Cours, p. 2)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Après un TROD VIH réactif, quelles étapes peuvent participer à la confirmation diagnostique en France ?',
    options: [
      { text: 'Effectuer une analyse de confirmation si le dépistage de laboratoire est réactif', correct: true, correction: 'Oui. La confirmation recherche notamment la spécificité des anticorps anti-VIH.' },
      { text: 'Réaliser un test immunoenzymatique combiné en laboratoire', correct: true, correction: 'Oui. Un TROD réactif doit être vérifié par la séquence de laboratoire.' },
      { text: 'Déclarer le test négatif si la personne ne présente aucun symptôme', correct: false, correction: 'Non. L\'absence de symptômes ne suffit pas à écarter un résultat réactif.' },
      { text: 'Vérifier la positivité sur un second prélèvement distinct', correct: true, correction: 'Oui. Cela sécurise l\'identification du patient et la conclusion diagnostique.' },
      { text: 'Conclure uniquement sur la bande du TROD, sans autre examen', correct: false, correction: 'Non. Le TROD est un test d\'orientation diagnostique.' },
    ],
    explanation: 'Un TROD réactif appelle une vérification en laboratoire, puis la confirmation selon l\'algorithme français, avec contrôle sur un second prélèvement si l\'infection est confirmée. (Cours, p. 2)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quels marqueurs recherche un test combiné VIH de quatrième génération en laboratoire ?',
    options: [
      { text: 'Uniquement les IgM anti-VIH', correct: false, correction: 'Non. Le test combiné ne se limite pas aux IgM.' },
      { text: 'L\'antigène p24 et les anticorps anti-VIH-1/VIH-2', correct: true, correction: 'Oui. Le caractère combiné associe la recherche d\'antigène p24 et d\'anticorps.' },
      { text: 'Les lymphocytes CD4 et CD8', correct: false, correction: 'Non. Ces cellules sont mesurées par d\'autres examens.' },
      { text: 'L\'ARN viral et l\'ADN proviral', correct: false, correction: 'Non. La détection des acides nucléiques relève de la biologie moléculaire.' },
      { text: 'La résistance aux inhibiteurs de l\'intégrase', correct: false, correction: 'Non. La résistance s\'étudie par analyse génotypique adaptée.' },
    ],
    explanation: 'Le test combiné associe l\'antigène viral p24 aux anticorps anti-VIH, ce qui aide à détecter certaines infections avant l\'apparition complète des anticorps. (Cours, p. 2)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Concernant l\'antigène p24 au début d\'une infection VIH, quelles propositions sont exactes ?',
    options: [
      { text: 'Un immunoblot anticorps est nécessairement positif avant que p24 soit détectable', correct: false, correction: 'Non. p24 peut précéder la réponse anticorps détectable.' },
      { text: 'Il s\'agit d\'une protéine virale, non d\'un anticorps du patient', correct: true, correction: 'Oui. p24 est un antigène du VIH.' },
      { text: 'Il correspond à l\'ARN VIH intégré dans les cellules', correct: false, correction: 'Non. p24 est une protéine; le génome intégré est de l\'ADN proviral.' },
      { text: 'Sa négativité exclut toujours une infection très récente', correct: false, correction: 'Non. Un test trop précoce peut être négatif; la recherche d\'ARN peut alors être utile.' },
      { text: 'Sa détection peut précéder celle des anticorps anti-VIH', correct: true, correction: 'Oui. Elle peut contribuer au diagnostic de primo-infection.' },
    ],
    explanation: 'L\'antigène p24 est un marqueur viral précoce inclus dans le test combiné; son interprétation dépend de la cinétique des marqueurs et du contexte. (Cours, p. 2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Un test combiné réactif suivi d\'un immunoblot anticorps négatif chez une personne récemment exposée conduit d\'abord à envisager quoi ?',
    options: [
      { text: 'Une absence de toute nécessité de contrôle', correct: false, correction: 'Non. La discordance impose au contraire une analyse complémentaire.' },
      { text: 'La preuve que l\'exposition était imaginaire', correct: false, correction: 'Non. La discordance ne permet pas d\'écarter l\'exposition.' },
      { text: 'Un SIDA évolué certain', correct: false, correction: 'Non. Ce profil n\'établit ni le stade clinique ni un SIDA.' },
      { text: 'Une primo-infection possible avec antigène p24 ou ARN détectable avant les anticorps', correct: true, correction: 'Oui. La discordance peut correspondre à une infection très précoce à explorer.' },
      { text: 'Une résistance immédiate à tous les antirétroviraux', correct: false, correction: 'Non. La résistance n\'est pas déduite de ces deux tests diagnostiques.' },
    ],
    explanation: 'Le test combiné peut réagir sur p24 avant qu\'un immunoblot d\'anticorps soit positif; une recherche d\'ARN VIH et un suivi permettent d\'élucider la discordance. (Cours, p. 2)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'En cas de suspicion de primo-infection avec sérologie initiale négative ou discordante, quelles démarches sont pertinentes ?',
    options: [
      { text: 'Déduire à coup sûr la présence d\'une infection d\'un seul résultat discordant', correct: false, correction: 'Non. La discordance doit être explorée avant de conclure.' },
      { text: 'Recontrôler les marqueurs si le contexte clinique reste évocateur', correct: true, correction: 'Oui. Une évolution sérologique peut clarifier un résultat initial trop précoce.' },
      { text: 'Tenir compte du délai depuis l\'exposition pour interpréter le test', correct: true, correction: 'Oui. Les fenêtres de détection dépendent du marqueur recherché.' },
      { text: 'Conclure qu\'un TROD négatif dans la première semaine exclut l\'infection', correct: false, correction: 'Non. Un TROD si précoce peut manquer l\'infection.' },
      { text: 'Rechercher l\'ARN VIH dans le sang si l\'exposition est très récente', correct: true, correction: 'Oui. La recherche moléculaire peut détecter le virus avant la réponse anticorps.' },
    ],
    explanation: 'La cinétique ARN-p24-anticorps guide le choix du test et la répétition éventuelle des examens lors d\'une suspicion de primo-infection. (Cours, p. 2-3)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Pourquoi une sérologie anti-VIH positive chez un nouveau-né exposé ne suffit-elle pas à prouver qu\'il est infecté ?',
    options: [
      { text: 'Parce que les immunoglobulines maternelles détruisent toujours tout VIH transmis', correct: false, correction: 'Non. Elles ne garantissent pas l\'absence d\'infection.' },
      { text: 'Parce que les anticorps maternels transférés pendant la grossesse peuvent être détectés chez lui', correct: true, correction: 'Oui. Une sérologie positive peut refléter le transfert passif d\'anticorps.' },
      { text: 'Parce que le VIH ne peut jamais infecter un nouveau-né', correct: false, correction: 'Non. Une transmission périnatale reste possible.' },
      { text: 'Parce que les nourrissons n\'ont jamais de sang circulant', correct: false, correction: 'Non. Cette proposition n\'a aucun fondement biologique.' },
      { text: 'Parce que l\'ARN viral maternel persiste normalement un an chez l\'enfant', correct: false, correction: 'Non. Ce sont les anticorps maternels, pas l\'ARN maternel, qui peuvent persister.' },
    ],
    explanation: 'Le polycopié attribue à tort la persistance à l\'ARN maternel : la difficulté sérologique vient des anticorps maternels transférés. Le diagnostic du nourrisson exposé utilise la recherche directe du VIH. (Cours, p. 3)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Pour établir le statut VIH d\'un nourrisson exposé pendant la grossesse, quelles propositions sont exactes ?',
    options: [
      { text: 'Une recherche virologique d\'ARN VIH peut être utilisée', correct: true, correction: 'Oui. Elle recherche directement le matériel viral chez l\'enfant.' },
      { text: 'Une sérologie positive à la naissance prouve toujours une infection de l\'enfant', correct: false, correction: 'Non. Les anticorps maternels peuvent être présents chez un enfant non infecté.' },
      { text: 'Une recherche d\'ADN VIH cellulaire peut aussi être utilisée selon le contexte', correct: true, correction: 'Oui. L\'ADN proviral peut constituer une autre cible moléculaire.' },
      { text: 'Une PCR négative à la naissance écarte définitivement toute transmission pendant l\'accouchement', correct: false, correction: 'Non. Une infection acquise pendant l\'accouchement peut ne pas être décelable à la naissance.' },
      { text: 'Plusieurs contrôles programmés sont nécessaires pour interpréter l\'évolution', correct: true, correction: 'Oui. Un résultat isolé, surtout très précoce, ne suffit généralement pas à conclure.' },
    ],
    explanation: 'Chez le nourrisson exposé, les tests virologiques ARN ou ADN sont utilisés à plusieurs moments; les anticorps maternels rendent la sérologie précoce insuffisante. (Cours, p. 3)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle différence principale existe entre une PCR qualitative et une mesure de charge virale VIH ?',
    options: [
      { text: 'La première recherche la présence d\'une cible virale; la seconde estime sa quantité', correct: true, correction: 'Oui. Présence et quantification répondent à deux questions différentes.' },
      { text: 'La seconde démontre directement la résistance à tous les traitements', correct: false, correction: 'Non. La charge virale quantifie l\'ARN; une analyse génétique distincte étudie la résistance.' },
      { text: 'La première mesure les CD4; la seconde détecte les anticorps', correct: false, correction: 'Non. Ni l\'une ni l\'autre ne mesure ces deux paramètres.' },
      { text: 'La première détecte seulement p24; la seconde seulement les IgG', correct: false, correction: 'Non. p24 et les IgG sont recherchés par d\'autres méthodes.' },
      { text: 'La première ne peut jamais être employée chez un nourrisson', correct: false, correction: 'Non. La recherche qualitative du génome viral y est utile.' },
    ],
    explanation: 'La biologie moléculaire peut répondre à une question diagnostique qualitative ou à une question quantitative de suivi de la réplication virale. (Cours, p. 3)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'À quoi sert la quantification de l\'ARN VIH plasmatique dans la prise en charge ?',
    options: [
      { text: 'À identifier directement toutes les mutations de résistance', correct: false, correction: 'Non. Le génotypage de résistance est un autre examen.' },
      { text: 'À compter directement les lymphocytes CD4', correct: false, correction: 'Non. Les CD4 sont mesurés par une analyse immunologique distincte.' },
      { text: 'À apprécier le niveau de réplication virale à un moment donné', correct: true, correction: 'Oui. La charge virale quantifie l\'ARN plasmatique.' },
      { text: 'À contribuer à l\'évaluation du risque de transmission dans son contexte', correct: true, correction: 'Oui. Le niveau et la durée de suppression comptent, notamment pour la voie sexuelle.' },
      { text: 'À suivre la réponse à un traitement antirétroviral', correct: true, correction: 'Oui. La baisse puis le contrôle de l\'ARN constituent un objectif majeur du suivi.' },
    ],
    explanation: 'La charge virale quantifie l\'ARN VIH et sert surtout à surveiller l\'efficacité du traitement; elle éclaire aussi la réplication et, selon le contexte, la transmission. (Cours, p. 3)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Que signifie exactement « charge virale indétectable » dans un compte rendu biologique ?',
    options: [
      { text: 'Le patient ne possède plus d\'anticorps anti-VIH', correct: false, correction: 'Non. Les anticorps peuvent persister malgré le contrôle virologique.' },
      { text: 'La quantité mesurée se situe sous le seuil de détection de la technique utilisée', correct: true, correction: 'Oui. Ce seuil dépend de l\'essai de laboratoire.' },
      { text: 'Le laboratoire a obligatoirement utilisé un seuil de 50 copies/mL', correct: false, correction: 'Non. Les limites techniques peuvent être inférieures à ce repère clinique.' },
      { text: 'Le virus a été éliminé de tous les tissus', correct: false, correction: 'Non. L\'indétectabilité plasmatique ne démontre pas l\'éradication des réservoirs.' },
      { text: 'La quantité est exactement égale à zéro copie dans l\'organisme', correct: false, correction: 'Non. Un résultat sous le seuil analytique n\'est pas la preuve d\'une quantité nulle.' },
    ],
    explanation: '« Indétectable » dépend de la limite de détection de la méthode; le repère de 50 copies/mL utilisé pour le suivi ne signifie pas que tous les tests ont cette même limite. (Cours, p. 3)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Concernant le suivi de la charge virale sous traitement, quelles propositions sont exactes ?',
    options: [
      { text: 'La dynamique des mesures successives aide à juger la réponse', correct: true, correction: 'Oui. Une évolution confirmée est plus informative qu\'une valeur isolée.' },
      { text: 'La limite de détection propre au laboratoire doit être prise en compte', correct: true, correction: 'Oui. Les techniques n\'ont pas toutes la même limite analytique.' },
      { text: 'Une charge virale indétectable autorise automatiquement l\'arrêt du traitement', correct: false, correction: 'Non. L\'arrêt exposerait à une reprise de réplication.' },
      { text: 'Une valeur unique juste au-dessus de 50 copies/mL suffit toujours à prouver un échec définitif', correct: false, correction: 'Non. Elle doit être recontrôlée et interprétée dans son contexte.' },
      { text: 'Une suppression sous 50 copies/mL à six mois constitue un objectif de suivi présenté dans le cours', correct: true, correction: 'Oui. C\'est le repère thérapeutique enseigné.' },
    ],
    explanation: 'Le cours donne un objectif de contrôle sous 50 copies/mL à six mois, mais les recommandations distinguent un signal isolé d\'un échec confirmé sur deux prélèvements. (Cours, p. 3)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Dans quelles conditions la formule « indétectable = intransmissible » est-elle établie pour le VIH ?',
    options: [
      { text: 'Même après l\'arrêt durable de tous les antirétroviraux', correct: false, correction: 'Non. La suppression peut disparaître après l\'arrêt du traitement.' },
      { text: 'Seulement si les anticorps anti-VIH deviennent négatifs', correct: false, correction: 'Non. Le statut sérologique n\'est pas le critère de cette règle.' },
      { text: 'Pour tous les virus transmis par le sang', correct: false, correction: 'Non. L\'affirmation porte spécifiquement sur le VIH et sa transmission sexuelle.' },
      { text: 'Pour toutes les voies de transmission dès la première dose de traitement', correct: false, correction: 'Non. Il faut une suppression durable et cette règle concerne la voie sexuelle.' },
      { text: 'Pour la transmission sexuelle lorsque la suppression virale est durable sous traitement efficace', correct: true, correction: 'Oui. C\'est la portée démontrée de cette règle de prévention.' },
    ],
    explanation: 'Une charge virale durablement supprimée sous traitement empêche la transmission sexuelle du VIH; le cours formule trop largement « aucun risque de transmission » sans préciser la voie. (Cours, p. 3)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Une charge virale redevenue détectable après un contrôle antérieur conduit à examiner quels éléments ?',
    options: [
      { text: 'L\'observance et la tolérance du traitement', correct: true, correction: 'Oui. Une prise irrégulière ou un traitement mal toléré peut expliquer un rebond.' },
      { text: 'Un arrêt immédiat et définitif de tous les traitements dans tous les cas', correct: false, correction: 'Non. La conduite dépend de l\'évaluation clinique et virologique.' },
      { text: 'Une possible résistance virale si la réplication se confirme', correct: true, correction: 'Oui. Elle peut être étudiée selon le niveau de charge virale et le contexte.' },
      { text: 'Les interactions médicamenteuses ou un problème d\'absorption', correct: true, correction: 'Oui. Ces facteurs peuvent réduire l\'exposition effective aux antirétroviraux.' },
      { text: 'Une mesure de contrôle pour distinguer un blip isolé d\'un rebond confirmé', correct: true, correction: 'Oui. La répétition de l\'ARN VIH est essentielle avant de conclure.' },
    ],
    explanation: 'La reprise détectable de la réplication appelle un contrôle et une recherche des causes : observance, tolérance, interactions et éventuellement résistance; un blip isolé ne prouve pas un échec. (Cours, p. 3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Sur quel principe repose principalement un test génotypique de résistance du VIH ?',
    options: [
      { text: 'L\'observation directe des virions au microscope optique', correct: false, correction: 'Non. Les virus sont trop petits et cette méthode ne lit pas leur séquence.' },
      { text: 'La mesure de la température corporelle du patient', correct: false, correction: 'Non. La fièvre n\'identifie pas une mutation de résistance.' },
      { text: 'La détection isolée des IgM anti-VIH', correct: false, correction: 'Non. Les anticorps ne donnent pas le profil génotypique viral.' },
      { text: 'Le séquençage de régions du génome viral pour rechercher des mutations associées à une moindre sensibilité', correct: true, correction: 'Oui. Les mutations sont ensuite interprétées à l\'aide d\'algorithmes validés.' },
      { text: 'Le dénombrement des lymphocytes CD4 sans analyse virale', correct: false, correction: 'Non. Les CD4 évaluent l\'immunité, pas les mutations du virus.' },
    ],
    explanation: 'Le cours décrit l\'amplification et le séquençage de gènes viraux pertinents, puis l\'interprétation des mutations pour guider le choix thérapeutique. (Cours, p. 3)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'À propos de la recherche de résistance du VIH, quelles propositions sont justes ?',
    options: [
      { text: 'Une charge virale très faible peut rendre le génotypage plasmatique techniquement difficile', correct: true, correction: 'Oui. L\'amplification de l\'ARN viral peut échouer si la quantité est trop basse.' },
      { text: 'Toute mutation observée confère nécessairement une résistance à toutes les classes d\'antirétroviraux', correct: false, correction: 'Non. L\'effet dépend de la mutation, du médicament et de l\'ensemble du profil viral.' },
      { text: 'Un génotypage initial peut renseigner sur une résistance transmise avant le choix du traitement', correct: true, correction: 'Oui. Le profil de base contribue au choix des antirétroviraux.' },
      { text: 'Un test génotypique remplace totalement la prise en compte de l\'observance', correct: false, correction: 'Non. L\'observance et le contexte clinique restent essentiels à l\'interprétation.' },
      { text: 'Une suspicion d\'échec virologique confirmé peut justifier une nouvelle analyse', correct: true, correction: 'Oui. Le profil de résistance peut guider l\'adaptation du traitement.' },
    ],
    explanation: 'Le génotypage peut être utile avant traitement et lors d\'un échec confirmé; son interprétation dépend des mutations et des traitements, et sa faisabilité baisse avec une virémie très faible. (Cours, p. 3)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Comment un inhibiteur nucléosidique ou nucléotidique de la transcriptase inverse (INTI) freine-t-il la réplication du VIH ?',
    options: [
      { text: 'Il insère l\'ADN viral dans le génome cellulaire', correct: false, correction: 'Non. Cette étape est catalysée par l\'intégrase.' },
      { text: 'Il empêche la fixation de la gp120 sur le CD4', correct: false, correction: 'Non. La liaison gp120-CD4 est une étape d\'entrée, distincte de la rétrotranscription.' },
      { text: 'Il détruit sélectivement les anticorps anti-VIH', correct: false, correction: 'Non. Les anticorps ne sont pas la cible des INTI.' },
      { text: 'Il clive les polyprotéines virales après le bourgeonnement', correct: false, correction: 'Non. Le clivage des polyprotéines dépend de la protéase virale.' },
      { text: 'Il mime un constituant de l\'ADN et interrompt l\'élongation de l\'ADN viral', correct: true, correction: 'Oui. L\'analogue est utilisé par la transcriptase inverse et empêche la poursuite normale de la chaîne d\'ADN.' },
    ],
    explanation: 'Les INTI sont des analogues des nucléosides ou nucléotides utilisés lors de la rétrotranscription ; ils bloquent l\'élongation de l\'ADN viral. (Cours, p. 4-5)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'À propos des INTI et des inhibiteurs non nucléosidiques de la transcriptase inverse (INNTI), quelles propositions sont exactes ?',
    options: [
      { text: 'Les deux classes visent la transcriptase inverse du VIH', correct: true, correction: 'Oui. Elles inhibent la même enzyme par des mécanismes différents.' },
      { text: 'Les INTI perturbent la synthèse de l\'ADN viral à partir de l\'ARN', correct: true, correction: 'Oui. Ils gênent la rétrotranscription, notamment en bloquant l\'élongation.' },
      { text: 'Les INNTI se fixent près du site catalytique et modifient la conformation de l\'enzyme', correct: true, correction: 'Oui. Le cours décrit un blocage par changement de conformation.' },
      { text: 'Les INNTI sont incorporés comme faux nucléotides dans l\'ADN viral', correct: false, correction: 'Non. Ce principe décrit les INTI ; les INNTI se fixent à l\'enzyme.' },
      { text: 'Ces deux classes empêchent directement l\'intégrase d\'insérer l\'ADN viral', correct: false, correction: 'Non. Elles inhibent la transcriptase inverse, et non directement l\'intégrase.' },
    ],
    explanation: 'INTI et INNTI partagent une cible enzymatique mais diffèrent par leur mode d\'inhibition. (Cours, p. 4-5)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Dans le cours, à quelle classe antirétrovirale appartient le ténofovir ?',
    options: [
      { text: 'Aux inhibiteurs de l\'intégrase', correct: false, correction: 'Non. Ils bloquent l\'intégration de l\'ADN viral.' },
      { text: 'Aux inhibiteurs non nucléosidiques de la transcriptase inverse', correct: false, correction: 'Non. Le ténofovir est un analogue nucléotidique, classé parmi les INTI.' },
      { text: 'Aux inhibiteurs nucléosidiques ou nucléotidiques de la transcriptase inverse', correct: true, correction: 'Oui. Le ténofovir est cité comme exemple majeur de cette classe.' },
      { text: 'Aux inhibiteurs de l\'attachement gp120-CD4', correct: false, correction: 'Non. Son action ne porte pas sur la liaison gp120-CD4.' },
      { text: 'Aux inhibiteurs de la protéase', correct: false, correction: 'Non. Les inhibiteurs de la protéase ciblent le clivage des polyprotéines virales.' },
    ],
    explanation: 'Le ténofovir est l\'exemple d\'INTI explicitement mis en avant par l\'enseignant. (Cours, p. 5)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles associations entre une cible du VIH et une classe d\'antirétroviraux sont cohérentes ?',
    options: [
      { text: 'Protéase - inhibiteurs de la protéase', correct: true, correction: 'Oui. Ils bloquent le clivage nécessaire à la maturation virale.' },
      { text: 'Étape d\'entrée - inhibiteurs d\'entrée', correct: true, correction: 'Oui. Cette classe agit avant les étapes intracellulaires de réplication.' },
      { text: 'Transcriptase inverse - INTI', correct: true, correction: 'Oui. Les INTI interfèrent avec la synthèse d\'ADN viral.' },
      { text: 'Anticorps anti-VIH - INTI', correct: false, correction: 'Non. Les anticorps de l\'hôte ne constituent pas la cible des INTI.' },
      { text: 'Intégrase - inhibiteurs d\'intégrase', correct: true, correction: 'Oui. Cette classe empêche l\'insertion de l\'ADN viral dans le génome cellulaire.' },
    ],
    explanation: 'Le cours présente plusieurs cibles distinctes du cycle viral, permettant des associations thérapeutiques. (Cours, p. 4-6)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle étape du cycle viral est directement perturbée par un inhibiteur de la protéase du VIH ?',
    options: [
      { text: 'La liaison initiale de la gp120 au récepteur CD4', correct: false, correction: 'Non. Cette liaison précède la maturation des nouveaux virions.' },
      { text: 'La transcription du génome cellulaire en ARN messager', correct: false, correction: 'Non. Ce n\'est pas la réaction catalysée par la protéase virale.' },
      { text: 'Le clivage des précurseurs protéiques nécessaire à la maturation des particules', correct: true, correction: 'Oui. La protéase coupe les polyprotéines virales pour produire des protéines fonctionnelles.' },
      { text: 'La formation des anticorps anti-VIH', correct: false, correction: 'Non. Il s\'agit d\'une réponse de l\'hôte, pas de la cible de la protéase virale.' },
      { text: 'L\'intégration de l\'ADN viral dans un chromosome', correct: false, correction: 'Non. C\'est la fonction de l\'intégrase.' },
    ],
    explanation: 'L\'inhibition de la protéase perturbe la maturation des particules virales en empêchant le clivage de précurseurs protéiques. (Cours, p. 5)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'À propos des inhibiteurs de la protéase (IP) dans la prise en charge du VIH, quelles propositions sont justes ?',
    options: [
      { text: 'Ils constituent systématiquement une monothérapie recommandée', correct: false, correction: 'Non. Une monothérapie par IP n\'est pas le principe de traitement initial décrit ici.' },
      { text: 'Ils bloquent directement la rétrotranscription comme les INTI', correct: false, correction: 'Non. Leur cible est la protéase, et non la transcriptase inverse.' },
      { text: 'Leur profil d\'effets indésirables peut inclure des troubles métaboliques', correct: true, correction: 'Oui. Le cours évoque en particulier des effets sur le métabolisme lipidique.' },
      { text: 'Ils peuvent conserver un intérêt dans certaines situations de résistance', correct: true, correction: 'Oui. Le choix dépend du profil de résistance et d\'une évaluation spécialisée.' },
      { text: 'Ils ne peuvent jamais être utilisés dans un traitement actuel', correct: false, correction: 'Non. Ils gardent une place dans certaines situations, notamment selon la résistance et les autres contraintes thérapeutiques.' },
    ],
    explanation: 'Les IP ne sont pas la seule option thérapeutique, mais restent utiles dans certaines situations ; leur tolérance compte dans le choix. (Cours, p. 5 ; HAS, https://www.has-sante.fr/jcms/p_3545694/fr/initiation-d-un-premier-traitement-antiretroviral-chez-l-adulte-vivant-avec-le-vih)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Que bloque directement un inhibiteur de l\'intégrase du VIH ?',
    options: [
      { text: 'L\'insertion de l\'ADN viral dans l\'ADN de la cellule', correct: true, correction: 'Oui. L\'intégrase catalyse cette insertion.' },
      { text: 'L\'entrée du VIH par liaison au CD4', correct: false, correction: 'Non. Les inhibiteurs d\'intégrase interviennent après l\'entrée et la rétrotranscription.' },
      { text: 'La production d\'anticorps anti-VIH par les lymphocytes B', correct: false, correction: 'Non. La réponse anticorps n\'est pas sa cible.' },
      { text: 'La synthèse de l\'ARN viral par la transcriptase inverse', correct: false, correction: 'Non. La transcriptase inverse transforme l\'ARN viral en ADN.' },
      { text: 'Le clivage des polyprotéines par la protéase', correct: false, correction: 'Non. C\'est la cible des inhibiteurs de la protéase.' },
    ],
    explanation: 'L\'intégration de l\'ADN viral dans le génome cellulaire est une cible antirétrovirale distincte de la rétrotranscription. (Cours, p. 5-6)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Pourquoi associe-t-on habituellement plusieurs antirétroviraux chez une personne vivant avec le VIH ?',
    options: [
      { text: 'Pour obtenir une suppression virologique durable sous une bonne observance', correct: true, correction: 'Oui. Le contrôle prolongé de la charge virale est l\'objectif du traitement.' },
      { text: 'Parce qu\'elle supprime d\'emblée le risque de toute infection sexuellement transmissible', correct: false, correction: 'Non. Les antirétroviraux ciblent le VIH ; ils ne préviennent pas toutes les autres IST.' },
      { text: 'Pour agir sur plusieurs étapes ou cibles de la réplication virale', correct: true, correction: 'Oui. L\'association permet un blocage plus robuste de la réplication.' },
      { text: 'Pour limiter la sélection de variants résistants', correct: true, correction: 'Oui. La multiplication de cibles actives diminue le risque qu\'un variant échappe à tout le traitement.' },
      { text: 'Parce qu\'une association de médicaments efface toujours le provirus déjà intégré', correct: false, correction: 'Non. Le traitement contrôle la réplication mais n\'éradique pas systématiquement les réservoirs viraux.' },
    ],
    explanation: 'L\'association de molécules actives, souvent contre différentes cibles, favorise le contrôle virologique et limite l\'émergence de résistance. (Cours, p. 4 et 6)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel principe guide aujourd\'hui le début d\'un traitement antirétroviral chez une personne dont l\'infection VIH est diagnostiquée ?',
    options: [
      { text: 'Utiliser toujours un seul antirétroviral pour tester la tolérance', correct: false, correction: 'Non. Le traitement initial repose sur une association adaptée.' },
      { text: 'Attendre les premiers symptômes du sida', correct: false, correction: 'Non. L\'objectif est précisément de prévenir cette progression.' },
      { text: 'Commencer rapidement un traitement adapté après le diagnostic', correct: true, correction: 'Oui. L\'initiation rapide améliore la santé et réduit la transmission.' },
      { text: 'Attendre obligatoirement que les CD4 deviennent inférieurs à 200/µL', correct: false, correction: 'Non. Le traitement est recommandé indépendamment du taux initial de CD4.' },
      { text: 'Différer tout traitement jusqu\'à un génotypage de résistance complet dans tous les cas', correct: false, correction: 'Non. Le bilan est utile, mais le résultat ne doit pas toujours retarder l\'initiation.' },
    ],
    explanation: 'Le traitement est proposé rapidement à toute personne diagnostiquée, avec un choix adapté à sa situation. (Cours, p. 6 ; HAS, https://www.has-sante.fr/jcms/p_3545694/fr/initiation-d-un-premier-traitement-antiretroviral-chez-l-adulte-vivant-avec-le-vih)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quels énoncés décrivent correctement le choix actuel d\'un traitement initial contre le VIH-1 ?',
    options: [
      { text: 'La résistance, les comorbidités et la tolérance influencent le choix', correct: true, correction: 'Oui. La sélection du traitement est individualisée.' },
      { text: 'Une bithérapie sélectionnée peut être une option pour certains patients', correct: true, correction: 'Oui. Des associations d\'un INTI et d\'un inhibiteur d\'intégrase sont recommandées sous conditions.' },
      { text: 'Deux INTI associés à un inhibiteur d\'intégrase constituent un schéma fréquent', correct: true, correction: 'Oui. C\'est un schéma préférentiel dans de nombreuses situations.' },
      { text: 'Tout traitement initial du VIH-1 doit contenir exactement trois substances', correct: false, correction: 'Non. Les recommandations admettent des bithérapies adaptées à certaines situations.' },
      { text: 'Un inhibiteur de protéase est obligatoire dans tout traitement initial', correct: false, correction: 'Non. Les schémas préférentiels n\'en comportent pas nécessairement.' },
    ],
    explanation: 'La trithérapie 2 INTI + inhibiteur d\'intégrase est fréquente, mais le choix contemporain n\'est pas limité à trois molécules dans tous les cas. (Cours, p. 6 ; HAS, https://www.has-sante.fr/jcms/p_3545694/fr/initiation-d-un-premier-traitement-antiretroviral-chez-l-adulte-vivant-avec-le-vih)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Dans une prescription contre le VIH, que signifie la prise d\'un seul comprimé par jour ?',
    options: [
      { text: 'Elle décrit une forme simplifiée qui peut contenir plusieurs antirétroviraux', correct: true, correction: 'Oui. Le nombre de comprimés ne reflète pas nécessairement le nombre de molécules.' },
      { text: 'Elle indique nécessairement une monothérapie', correct: false, correction: 'Non. Un comprimé peut associer plusieurs principes actifs.' },
      { text: 'Elle permet d\'interrompre librement le traitement dès la première indétectabilité', correct: false, correction: 'Non. Une interruption non encadrée expose à une reprise de la réplication virale.' },
      { text: 'Elle dispense de contrôler la charge virale', correct: false, correction: 'Non. Le suivi virologique reste nécessaire quel que soit le nombre de comprimés.' },
      { text: 'Elle signifie que toutes les molécules ont la même cible', correct: false, correction: 'Non. Une association fixe peut réunir des molécules de classes différentes.' },
    ],
    explanation: 'Un comprimé unique peut contenir plusieurs antirétroviraux et simplifier la prise, sans transformer l\'association en monothérapie. (Cours, p. 4 et 6 ; HAS, https://www.has-sante.fr/jcms/p_3545694/fr/initiation-d-un-premier-traitement-antiretroviral-chez-l-adulte-vivant-avec-le-vih)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quels éléments font partie du suivi d\'une personne recevant un traitement antirétroviral ?',
    options: [
      { text: 'L\'évaluation de la tolérance des médicaments', correct: true, correction: 'Oui. Les effets indésirables peuvent conduire à une adaptation du schéma.' },
      { text: 'La mesure répétée de la charge virale', correct: true, correction: 'Oui. Elle permet d\'apprécier l\'efficacité du traitement.' },
      { text: 'L\'utilisation exclusive du taux de CD4, sans mesure virologique', correct: false, correction: 'Non. La charge virale est centrale pour mesurer la réponse virologique.' },
      { text: 'Une discussion sur les difficultés de prise et l\'observance', correct: true, correction: 'Oui. Ces facteurs influencent le contrôle viral et se discutent sans jugement.' },
      { text: 'L\'abandon des consultations dès qu\'une première mesure devient indétectable', correct: false, correction: 'Non. Le suivi doit se poursuivre après l\'obtention du contrôle.' },
    ],
    explanation: 'Le cours insiste sur l\'efficacité, la tolérance et les situations d\'échec ; le suivi de la charge virale est rapproché au début. (Cours, p. 3 et 6)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle option thérapeutique peut remplacer des prises orales quotidiennes chez certaines personnes vivant avec un VIH-1 déjà contrôlé ?',
    options: [
      { text: 'Un antibiotique mensuel à la place des antirétroviraux', correct: false, correction: 'Non. Un antibiotique ne remplace pas le traitement antiviral du VIH.' },
      { text: 'Une injection unique de vaccin curatif', correct: false, correction: 'Non. Il n\'existe pas de vaccin curatif utilisé à cette fin.' },
      { text: 'Une association injectable d\'antirétroviraux à action prolongée, après évaluation de l\'éligibilité', correct: true, correction: 'Oui. Certaines personnes contrôlées peuvent recevoir un relais injectable selon des critères précis.' },
      { text: 'L\'arrêt définitif de tous les antirétroviraux', correct: false, correction: 'Non. Une suppression virologique ne signifie pas la guérison ; un traitement doit être maintenu.' },
      { text: 'Une perfusion permanente de zidovudine pour tous les patients', correct: false, correction: 'Non. Ce n\'est pas une modalité générale de relais du traitement VIH.' },
    ],
    explanation: 'Des associations injectables à longue durée d\'action existent pour certaines personnes déjà virologiquement contrôlées ; elles nécessitent un choix individualisé. (Cours, p. 4 ; HAS, https://www.has-sante.fr/jcms/p_3412898/fr/vocabria-cabotegravir-vih)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quelles mesures participent à une prévention combinée du VIH et des expositions à risque ?',
    options: [
      { text: 'Appliquer les procédures de prévention et de prise en charge des accidents d\'exposition au sang', correct: true, correction: 'Oui. Elles protègent notamment les personnes exposées dans le cadre des soins.' },
      { text: 'Proposer un dépistage adapté aux situations d\'exposition', correct: true, correction: 'Oui. Le dépistage permet de diagnostiquer puis de traiter plus tôt.' },
      { text: 'Mettre à disposition du matériel d\'injection stérile', correct: true, correction: 'Oui. Cela réduit les transmissions liées au partage de matériel.' },
      { text: 'Promouvoir l\'utilisation du préservatif', correct: true, correction: 'Oui. Le préservatif contribue aussi à prévenir d\'autres IST.' },
      { text: 'Cesser toute prévention dès qu\'une seule personne traitée a une charge virale basse', correct: false, correction: 'Non. Les outils de prévention restent complémentaires et s\'adaptent à chaque situation.' },
    ],
    explanation: 'Le cours associe dépistage, préservatifs, réduction des risques liés à l\'injection et prévention des accidents d\'exposition au sang. (Cours, p. 6)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Après une exposition sexuelle ou sanguine pouvant transmettre le VIH, quelle conduite correspond au traitement post-exposition (TPE) ?',
    options: [
      { text: 'Prendre uniquement un antibiotique pendant trois jours', correct: false, correction: 'Non. Le TPE VIH repose, si indiqué, sur des antirétroviraux.' },
      { text: 'Commencer une PrEP à la demande après l\'exposition à la place d\'une évaluation du TPE', correct: false, correction: 'Non. PrEP et TPE répondent à des situations temporelles différentes.' },
      { text: 'Consulter au plus vite pour évaluer l\'indication d\'un TPE, idéalement dans les heures qui suivent', correct: true, correction: 'Oui. En France, la consultation est urgente, idéalement avant 4 h et sans dépasser 48 h.' },
      { text: 'Attendre six semaines pour savoir si des symptômes surviennent', correct: false, correction: 'Non. Cela ferait perdre la possibilité d\'un traitement précoce.' },
      { text: 'Attendre un résultat positif chez la personne exposée avant toute consultation', correct: false, correction: 'Non. Le TPE doit être évalué rapidement, avant qu\'une infection ne soit établie.' },
    ],
    explanation: 'Le TPE est une mesure d\'urgence après une exposition possible ; il faut consulter sans attendre. (Cours, p. 6 ; Assurance maladie, https://www.ameli.fr/assure/sante/themes/vih/prevention)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Concernant le TPE contre le VIH, quelles propositions sont exactes ?',
    options: [
      { text: 'Il garantit à 100 % l\'absence d\'infection, même s\'il est commencé très tard', correct: false, correction: 'Non. Son efficacité n\'est pas absolue et dépend notamment de la rapidité de mise en route.' },
      { text: 'Lorsqu\'il est prescrit, il repose sur une association d\'antirétroviraux pendant 30 jours', correct: true, correction: 'Oui. Les recommandations françaises de la HAS proposent une trithérapie pendant 30 jours.' },
      { text: 'Son indication dépend de l\'exposition et des informations sur la personne source lorsqu\'elles sont disponibles', correct: true, correction: 'Oui. Le risque est évalué individuellement.' },
      { text: 'Il doit être différé jusqu\'à la fin de tous les examens biologiques', correct: false, correction: 'Non. Les examens ne doivent pas retarder la décision urgente.' },
      { text: 'Une réévaluation rapide peut préciser si le traitement doit être poursuivi', correct: true, correction: 'Oui. Le traitement est parfois débuté immédiatement puis réévalué à partir d\'informations complémentaires.' },
    ],
    explanation: 'Un TPE indiqué est mis en route rapidement, selon une évaluation du risque, puis réévalué ; il ne garantit pas une protection absolue. (Cours, p. 6 ; HAS, https://www.has-sante.fr/jcms/p_3536535/fr/traitement-preventif-post-exposition-au-vih)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'À qui s\'adresse la prophylaxie pré-exposition (PrEP) contre le VIH ?',
    options: [
      { text: 'À une personne qui a déjà eu un test positif confirmé pour éliminer le virus', correct: false, correction: 'Non. La PrEP ne traite pas une infection diagnostiquée.' },
      { text: 'À une personne qui veut traiter une infection sexuellement transmissible bactérienne', correct: false, correction: 'Non. La PrEP est ciblée sur le VIH et ne traite pas les IST bactériennes.' },
      { text: 'Exclusivement aux nouveau-nés exposés pendant l\'accouchement', correct: false, correction: 'Non. Il s\'agit d\'une autre stratégie de prophylaxie postnatale.' },
      { text: 'Aux personnes non infectées exposées à un risque d\'acquisition du VIH', correct: true, correction: 'Oui. La PrEP vise à réduire le risque avant une exposition potentielle.' },
      { text: 'À toute personne déjà infectée par le VIH pour traiter l\'infection active', correct: false, correction: 'Non. Une personne vivant avec le VIH relève d\'un traitement antirétroviral curatif, pas de la PrEP.' },
    ],
    explanation: 'La PrEP est une prévention proposée avant une exposition potentielle à des personnes dont l\'absence d\'infection VIH a été vérifiée. (Cours, p. 6 ; HAS, https://www.has-sante.fr/jcms/p_3536524/fr/traitement-preventif-pre-exposition-de-l-infection-par-le-vih)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles affirmations concernant la PrEP du VIH sont justes ?',
    options: [
      { text: 'Elle prévient aussi toutes les autres IST avec la même efficacité que le VIH', correct: false, correction: 'Non. La PrEP ne remplace pas le dépistage ou les autres moyens de prévention des IST.' },
      { text: 'Un schéma oral discontinu n\'est adapté qu\'à certaines situations et suit un calendrier précis', correct: true, correction: 'Oui. Il ne convient pas à toutes les personnes ou à tous les types d\'exposition.' },
      { text: 'Une infection VIH existante ou suspectée doit être écartée avant de la prescrire', correct: true, correction: 'Oui. La PrEP ne doit pas masquer ou traiter insuffisamment une infection déjà présente.' },
      { text: 'Un schéma oral continu peut être proposé', correct: true, correction: 'Oui. La prise quotidienne est une modalité de PrEP orale.' },
      { text: 'Elle est toujours commencée seulement après une exposition ponctuelle, comme le TPE', correct: false, correction: 'Non. Son principe est la prévention avant exposition ; une exposition récente relève d\'une évaluation du TPE.' },
    ],
    explanation: 'La PrEP nécessite une évaluation initiale et un suivi ; ses modalités continue ou discontinue dépendent de la situation. (Cours, p. 6 ; HAS, https://www.has-sante.fr/jcms/p_3536524/fr/traitement-preventif-pre-exposition-de-l-infection-par-le-vih)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Pendant une grossesse chez une personne vivant avec le VIH, quel paramètre aide notamment à adapter les mesures autour de l\'accouchement ?',
    options: [
      { text: 'Uniquement la sérologie IgG maternelle contre le CMV', correct: false, correction: 'Non. Elle ne remplace pas l\'évaluation virologique du VIH.' },
      { text: 'La morphologie des particules virales observée systématiquement en microscopie électronique', correct: false, correction: 'Non. La microscopie électronique n\'est pas l\'outil courant pour adapter cette prévention.' },
      { text: 'Le groupe sanguin ABO du nouveau-né à lui seul', correct: false, correction: 'Non. Ce groupe sanguin ne mesure pas la réplication du VIH maternel.' },
      { text: 'Le nombre de comprimés contenus dans la boîte de traitement', correct: false, correction: 'Non. La forme du conditionnement ne détermine pas le risque de transmission périnatale.' },
      { text: 'La charge virale VIH maternelle à l\'approche de l\'accouchement', correct: true, correction: 'Oui. Le niveau de réplication maternelle contribue au choix des mesures obstétricales et néonatales.' },
    ],
    explanation: 'La charge virale maternelle, particulièrement près de l\'accouchement, contribue à adapter les mesures de prévention périnatale ; ni la césarienne ni l\'AZT intrapartum ne sont automatiques pour toutes. (Cours, p. 7)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles mesures contribuent à prévenir la transmission du VIH de la mère à l\'enfant ?',
    options: [
      { text: 'Administrer systématiquement une perfusion d\'AZT pendant tout accouchement', correct: false, correction: 'Non. La zidovudine intrapartum n\'est indiquée que dans certaines situations définies par le risque.' },
      { text: 'Proposer un dépistage du VIH pendant la grossesse', correct: true, correction: 'Oui. Le diagnostic permet d\'organiser précocement la prise en charge.' },
      { text: 'Programmer une césarienne pour toute femme vivant avec le VIH, même sous suppression durable', correct: false, correction: 'Non. Le mode d\'accouchement dépend notamment de la charge virale vers la fin de la grossesse.' },
      { text: 'Obtenir un contrôle virologique maternel par un traitement adapté', correct: true, correction: 'Oui. La suppression virale maternelle est la mesure essentielle de prévention.' },
      { text: 'Adapter la prophylaxie antirétrovirale du nouveau-né au niveau de risque', correct: true, correction: 'Oui. Les schémas postnataux varient selon la situation maternelle et néonatale.' },
    ],
    explanation: 'La prévention associe dépistage, traitement maternel et mesures périnatales adaptées au risque ; la césarienne et l\'AZT intrapartum ne sont pas systématiques. (Cours, p. 7 ; HAS, https://www.has-sante.fr/jcms/p_3518878/fr/grossesse-et-vih-desir-d-enfant-soins-de-la-femme-enceinte-et-prevention-de-la-transmission-mere-enfant)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Que recherche un diagnostic virologique direct, par opposition à une sérologie d\'anticorps ?',
    options: [
      { text: 'Exclusivement une augmentation des leucocytes sanguins.', correct: false, correction: 'Non. La numération cellulaire n\'identifie pas directement le virus.' },
      { text: 'Uniquement les anticorps produits par le patient.', correct: false, correction: 'Non. Cette recherche relève d\'un diagnostic indirect sérologique.' },
      { text: 'Une réaction cutanée retardée à un antigène viral.', correct: false, correction: 'Non. Elle explore une réponse de l\'hôte, pas une présence virale directe.' },
      { text: 'Seulement l\'historique des vaccinations du patient.', correct: false, correction: 'Non. L\'interrogatoire ne met pas directement en évidence le virus.' },
      { text: 'Le virus, un de ses constituants ou son génome dans un prélèvement.', correct: true, correction: 'Oui. Il peut s\'agir de particules virales, d\'antigènes ou d\'acides nucléiques viraux.' },
    ],
    explanation: 'Le diagnostic direct met en évidence l\'agent infectieux ou l\'un de ses composants, contrairement à la recherche d\'anticorps de l\'hôte. (Cours, p. 7.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Parmi les méthodes suivantes, lesquelles peuvent participer à un diagnostic virologique direct ?',
    options: [
      { text: 'La détection d\'un antigène viral.', correct: true, correction: 'Oui. L\'antigène est un constituant du virus recherché dans le prélèvement.' },
      { text: 'L\'interrogatoire sur les symptômes, sans analyse de prélèvement.', correct: false, correction: 'Non. Il oriente le diagnostic sans démontrer directement le virus.' },
      { text: 'La détection d\'ARN ou d\'ADN viral.', correct: true, correction: 'Oui. Le génome viral peut être recherché par une méthode moléculaire.' },
      { text: 'La mesure isolée d\'IgG spécifiques produites par le patient.', correct: false, correction: 'Non. Les IgG renseignent sur la réponse immunitaire et relèvent du diagnostic indirect.' },
      { text: 'L\'isolement du virus en culture cellulaire.', correct: true, correction: 'Oui. La croissance virale en culture peut mettre l\'agent en évidence.' },
    ],
    explanation: 'Observation, culture, antigènes et acides nucléiques sont des voies de diagnostic direct ; la sérologie des anticorps est indirecte. (Cours, p. 7.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Pourquoi utilise-t-on la microscopie électronique pour visualiser la morphologie des particules virales ?',
    options: [
      { text: 'Elle amplifie automatiquement l\'ARN viral avant observation.', correct: false, correction: 'Non. L\'amplification des acides nucléiques relève d\'une autre méthode, telle que la PCR.' },
      { text: 'Elle transforme les anticorps du patient en virus visibles.', correct: false, correction: 'Non. Elle image des structures présentes dans l\'échantillon ; elle ne crée pas de virus.' },
      { text: 'Elle permet systématiquement d\'identifier l\'espèce virale à elle seule.', correct: false, correction: 'Non. La morphologie peut orienter, mais l\'identification précise demande souvent d\'autres méthodes.' },
      { text: 'Elle donne une résolution permettant d\'observer des particules généralement trop petites pour être distinguées au microscope optique courant.', correct: true, correction: 'Oui. L\'emploi d\'électrons permet d\'atteindre une résolution supérieure à celle de la microscopie optique courante.' },
      { text: 'Tous les virus mesurent plusieurs millimètres.', correct: false, correction: 'Non. Les particules virales sont microscopiques, le plus souvent nanométriques.' },
    ],
    explanation: 'La microscopie électronique permet de voir l\'ultrastructure virale, au-delà de la résolution de la microscopie optique usuelle. (Cours, p. 7.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles affirmations décrivent correctement la place de la microscopie électronique en virologie ?',
    options: [
      { text: 'Elle peut fournir des informations sur la forme et l\'organisation de particules virales.', correct: true, correction: 'Oui. L\'examen morphologique est l\'un de ses intérêts.' },
      { text: 'La seule forme observée suffit toujours à déterminer précisément l\'espèce virale.', correct: false, correction: 'Non. Des agents différents peuvent avoir des morphologies voisines.' },
      { text: 'L\'observation d\'une particule informe à elle seule sur la réponse sérologique du patient.', correct: false, correction: 'Non. L\'observation directe ne mesure pas les anticorps de l\'hôte.' },
      { text: 'Elle peut contribuer à l\'étude d\'un agent viral nouvellement observé.', correct: true, correction: 'Oui. La visualisation peut aider à caractériser son aspect.' },
      { text: 'Elle est systématiquement le test de première intention pour toute infection virale courante.', correct: false, correction: 'Non. Les méthodes ciblées, notamment moléculaires, sont généralement plus adaptées au diagnostic de routine.' },
    ],
    explanation: 'La microscopie électronique étudie la morphologie et peut contribuer à l\'exploration d\'un nouvel agent, sans remplacer à elle seule les tests spécifiques. (Cours, p. 7–8.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quel est le principe de la culture virale sur cellules décrit dans le cours ?',
    options: [
      { text: 'Mettre un prélèvement en contact avec des cellules susceptibles d\'être infectées, puis rechercher la multiplication virale ou ses effets.', correct: true, correction: 'Oui. Le virus utilise des cellules vivantes pour se multiplier ; on surveille ensuite la culture.' },
      { text: 'Faire pousser le virus sur un milieu inerte dépourvu de toute cellule.', correct: false, correction: 'Non. Les virus ont besoin de cellules hôtes pour leur réplication.' },
      { text: 'Amplifier directement le génome par cycles thermiques dans un tube.', correct: false, correction: 'Non. Cela correspond à la PCR, pas à la culture cellulaire.' },
      { text: 'Ajouter des anticorps du patient à une bandelette sans utiliser de cellules.', correct: false, correction: 'Non. Cela décrit une autre famille de tests, et non la culture virale.' },
      { text: 'Observer uniquement les bactéries qui poussent dans le prélèvement.', correct: false, correction: 'Non. La culture virale vise l\'infection de cellules par un virus.' },
    ],
    explanation: 'La culture virale repose sur des cellules hôtes vivantes, mises au contact du prélèvement puis surveillées. (Cours, p. 8.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles précautions ou conditions sont pertinentes pour une culture virale ?',
    options: [
      { text: 'Ouvrir les cultures en dehors de toute protection parce que les virus cultivés ne sont jamais infectieux.', correct: false, correction: 'Non. Le risque biologique impose des précautions adaptées.' },
      { text: 'Fournir aux cellules un milieu compatible avec leur survie et leur croissance.', correct: true, correction: 'Oui. Sans cellules viables, la culture virale ne peut être interprétée correctement.' },
      { text: 'Employer un dispositif de confinement biologique adapté à l\'agent manipulé.', correct: true, correction: 'Oui. La culture peut augmenter la quantité de virus infectieux et expose les opérateurs.' },
      { text: 'Limiter les contaminations bactériennes et fongiques du milieu.', correct: true, correction: 'Oui. La stérilité et des milieux adaptés préservent la culture cellulaire.' },
      { text: 'Remplacer les cellules par de l\'eau stérile et obtenir le même résultat.', correct: false, correction: 'Non. L\'eau ne permet pas la multiplication d\'un virus dépendant de cellules hôtes.' },
    ],
    explanation: 'La culture requiert cellules viables, maîtrise de la contamination et protection biologique appropriée. (Cours, p. 8.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle proposition caractérise les cellules primaires utilisées en culture ?',
    options: [
      { text: 'Elles proviennent directement d\'un tissu et leur durée de maintien ou de multiplication est limitée.', correct: true, correction: 'Oui. C\'est la distinction décrite par le cours par rapport aux lignées continues.' },
      { text: 'Elles se multiplient indéfiniment sans changement de conditions de culture.', correct: false, correction: 'Non. Cette caractéristique relève des lignées continues, pas des cellules primaires.' },
      { text: 'Elles sont des virus isolés à partir d\'un prélèvement humain.', correct: false, correction: 'Non. Ce sont des cellules de l\'hôte, non des particules virales.' },
      { text: 'Elles sont obligatoirement les seules cellules permettant toute culture virale.', correct: false, correction: 'Non. D\'autres catégories de cellules sont utilisées selon le virus.' },
      { text: 'Elles sont synthétisées sans tissu source par une réaction de PCR.', correct: false, correction: 'Non. La PCR amplifie des acides nucléiques ; elle ne produit pas de cellules primaires.' },
    ],
    explanation: 'Les cellules primaires sont prélevées sur un tissu et ont une durée de culture limitée. (Cours, p. 9.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles descriptions des supports cellulaires de culture sont cohérentes avec le cours ?',
    options: [
      { text: 'Les cellules MRC-5 sont issues de fibroblastes pulmonaires embryonnaires humains.', correct: true, correction: 'Oui. Le cours les cite comme exemple de support pour certains virus.' },
      { text: 'Une lignée continue garantit à elle seule la croissance de tous les virus humains.', correct: false, correction: 'Non. La permissivité cellulaire varie d\'un virus à l\'autre.' },
      { text: 'Le choix du type cellulaire dépend notamment du virus que l\'on cherche à cultiver.', correct: true, correction: 'Oui. Tous les virus ne se multiplient pas dans les mêmes cellules.' },
      { text: 'Les cellules primaires se multiplient toujours indéfiniment et sont donc les plus faciles à conserver.', correct: false, correction: 'Non. Leur maintien est limité, contrairement aux lignées continues.' },
      { text: 'Les lignées continues peuvent être entretenues longtemps grâce à leur capacité de prolifération durable.', correct: true, correction: 'Oui. Elles se distinguent des cultures primaires par cette capacité.' },
    ],
    explanation: 'Le cours distingue cultures primaires, cellules embryonnaires comme MRC-5 et lignées continues ; le support doit être adapté au virus. (Cours, p. 9.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'À quoi correspond l\'effet cytopathogène observé après inoculation d\'une culture cellulaire ?',
    options: [
      { text: 'À des modifications de la morphologie ou du comportement des cellules liées à l\'infection virale.', correct: true, correction: 'Oui. Des changements cellulaires peuvent apparaître quand le virus se réplique.' },
      { text: 'À un changement de couleur qui démontre toujours l\'identité précise du virus.', correct: false, correction: 'Non. L\'effet ne détermine pas à lui seul l\'espèce virale.' },
      { text: 'À la destruction obligatoire de toutes les cellules, quel que soit le virus.', correct: false, correction: 'Non. Les effets sont variables et peuvent inclure fusion ou inclusions sans destruction complète immédiate.' },
      { text: 'À la quantité d\'anticorps circulant exclusivement dans le sang du patient.', correct: false, correction: 'Non. L\'effet cytopathogène est observé sur les cellules cultivées.' },
      { text: 'À l\'amplification artificielle d\'une séquence d\'ADN par polymérase.', correct: false, correction: 'Non. Il s\'agit de l\'effet sur les cellules, pas du principe de la PCR.' },
    ],
    explanation: 'L\'effet cytopathogène regroupe les altérations cellulaires provoquées par certains virus en culture. (Cours, p. 9.)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quels phénomènes peuvent constituer un effet cytopathogène viral ?',
    options: [
      { text: 'La présence d\'IgG dans le sérum sans observation cellulaire.', correct: false, correction: 'Non. C\'est un résultat sérologique indirect, pas un effet sur la culture.' },
      { text: 'La destruction ou le décollement de cellules cultivées.', correct: true, correction: 'Oui. Certains virus entraînent une lyse ou une altération marquée des cellules.' },
      { text: 'La fusion de plusieurs cellules en une cellule multinucléée.', correct: true, correction: 'Oui. La formation de syncytia est un type d\'effet cytopathogène.' },
      { text: 'L\'absence de toute modification visible suffit à exclure tous les virus.', correct: false, correction: 'Non. Un virus peut ne pas donner d\'effet cytopathogène apparent dans les conditions utilisées.' },
      { text: 'L\'apparition d\'inclusions dans les cellules.', correct: true, correction: 'Oui. Des inclusions nucléaires ou cytoplasmiques peuvent être observées selon le virus.' },
    ],
    explanation: 'Les effets observables incluent lyse, fusion et inclusions, sans être présents pour tous les virus. (Cours, p. 9.)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quel aspect cellulaire est classiquement associé à une infection par le cytomégalovirus (CMV) ?',
    options: [
      { text: 'Une multiplication du virus seulement dans les globules rouges dépourvus de noyau.', correct: false, correction: 'Non. Ce n\'est pas le support cellulaire caractéristique du CMV.' },
      { text: 'Une absence obligatoire de toute modification de la cellule.', correct: false, correction: 'Non. Le CMV peut induire un effet cytopathogène caractéristique.' },
      { text: 'Des inclusions exclusivement extracellulaires dans le milieu de culture.', correct: false, correction: 'Non. Les inclusions typiques sont intracellulaires.' },
      { text: 'Des cellules augmentées de volume avec des inclusions virales intracellulaires.', correct: true, correction: 'Oui. Les inclusions dites « en œil de hibou » sont typiquement intranucléaires ; de petites inclusions cytoplasmiques peuvent aussi exister.' },
      { text: 'Une fusion des noyaux qui identifie avec certitude le CMV sans autre test.', correct: false, correction: 'Non. L\'identification virologique requiert une méthode spécifique ; la morphologie seule ne suffit pas.' },
    ],
    explanation: 'Le CMV peut donner des cellules volumineuses avec des inclusions intracellulaires. Les grandes inclusions intranucléaires sont classiques ; des inclusions cytoplasmiques existent aussi. (Cours, p. 9.)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Comment interpréter un effet cytopathogène observé en culture ?',
    options: [
      { text: 'Il renseigne directement sur le titre d\'anticorps IgG sérique.', correct: false, correction: 'Non. L\'effet concerne la cellule cultivée et non les anticorps du patient.' },
      { text: 'Une identification précise peut nécessiter un test complémentaire, par exemple immunofluorescence ou PCR.', correct: true, correction: 'Oui. L\'effet n\'est pas à lui seul une preuve spécifique de l\'espèce virale.' },
      { text: 'Il peut orienter vers une famille ou un type de virus selon son aspect.', correct: true, correction: 'Oui. L\'observation a historiquement aidé à orienter l\'identification.' },
      { text: 'Son absence exclut formellement toute infection virale chez le patient.', correct: false, correction: 'Non. La culture peut être non permissive ou l\'effet absent ou trop tardif.' },
      { text: 'Il est pathognomonique de la même espèce virale dans toutes les cultures.', correct: false, correction: 'Non. Des effets similaires peuvent être produits par plusieurs virus et varient avec le contexte.' },
    ],
    explanation: 'La morphologie de l\'effet cytopathogène est une orientation, à confirmer par une méthode spécifique. (Cours, p. 9–10.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Pourquoi la culture virale est-elle peu utilisée comme examen de première ligne en diagnostic courant ?',
    options: [
      { text: 'Elle est toujours moins sûre qu\'une simple observation clinique sans prélèvement.', correct: false, correction: 'Non. Les questions de sécurité ne rendent pas l\'observation clinique diagnostiquement équivalente.' },
      { text: 'Elle fournit systématiquement une réponse en quelques secondes.', correct: false, correction: 'Non. La croissance et la mise en évidence du virus prennent du temps.' },
      { text: 'Elle est impossible en tout laboratoire spécialisé.', correct: false, correction: 'Non. Elle conserve des usages importants en virologie spécialisée.' },
      { text: 'Elle ne nécessite jamais de cellules vivantes.', correct: false, correction: 'Non. La culture virale dépend précisément de cellules hôtes viables.' },
      { text: 'Elle exige des installations et des compétences spécialisées et peut nécessiter un délai prolongé.', correct: true, correction: 'Oui. Le cours souligne ses contraintes de sécurité, de technique et de temps.' },
    ],
    explanation: 'La culture garde une valeur spécialisée, mais ses besoins techniques et son délai limitent l\'usage courant. (Cours, p. 9–10.)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Dans quels objectifs une culture virale spécialisée peut-elle garder un intérêt ?',
    options: [
      { text: 'Étudier expérimentalement l\'effet d\'un antiviral sur la réplication virale.', correct: true, correction: 'Oui. Elle peut servir à évaluer une activité antivirale.' },
      { text: 'Caractériser une nouvelle souche virale.', correct: true, correction: 'Oui. La culture fournit du virus pour des analyses complémentaires.' },
      { text: 'Déduire sans autre expérience le risque individuel exact de transmission sexuelle.', correct: false, correction: 'Non. L\'isolement ne permet pas une telle prédiction individuelle.' },
      { text: 'Isoler et étudier un agent viral nouvellement identifié.', correct: true, correction: 'Oui. L\'isolement permet une caractérisation approfondie.' },
      { text: 'Remplacer obligatoirement la PCR pour chaque prélèvement clinique courant.', correct: false, correction: 'Non. La culture est moins adaptée à de nombreux besoins diagnostiques de routine.' },
    ],
    explanation: 'En laboratoire spécialisé, la culture contribue à l\'isolement, à la caractérisation et à l\'étude expérimentale des virus. (Cours, p. 9–10.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel est le principe de l\'immunofluorescence appliquée à l\'identification d\'un virus en culture ?',
    options: [
      { text: 'Les cellules deviennent fluorescentes sans réactif grâce à la seule présence d\'un virus.', correct: false, correction: 'Non. Le marquage nécessite un anticorps ou système révélateur adapté.' },
      { text: 'Un anticorps fluorescent reconnaît un antigène viral présent dans les cellules infectées.', correct: true, correction: 'Oui. La fluorescence localise la liaison spécifique de l\'anticorps au virus.' },
      { text: 'La fluorescence mesure exclusivement la quantité d\'IgG du patient.', correct: false, correction: 'Non. Ici, les anticorps réactifs servent à révéler des antigènes viraux dans les cellules.' },
      { text: 'L\'immunofluorescence ne peut jamais distinguer deux virus ayant un effet cytopathogène voisin.', correct: false, correction: 'Non. Des anticorps spécifiques peuvent aider à les différencier.' },
      { text: 'Une sonde nucléotidique radioactive se fixe à l\'ARN et constitue l\'unique technique possible.', correct: false, correction: 'Non. Cette description relève de l\'hybridation, non du principe de l\'immunofluorescence.' },
    ],
    explanation: 'Après culture, un anticorps fluorescent dirigé contre un antigène viral peut aider à identifier l\'agent en cause. (Cours, p. 10.)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Dans l\'ELISA de capture d\'un antigène viral présenté dans le cours, quelles étapes sont attendues ?',
    options: [
      { text: 'On recherche uniquement les anticorps fabriqués par le patient dans ce montage de détection antigénique.', correct: false, correction: 'Non. La cible décrite ici est un antigène viral.' },
      { text: 'Un second anticorps permet de révéler l\'antigène capturé.', correct: true, correction: 'Oui. Le signal résulte d\'une seconde reconnaissance de l\'antigène.' },
      { text: 'Un anticorps de capture spécifique est fixé au fond du puits.', correct: true, correction: 'Oui. Il retient l\'antigène cible éventuellement présent dans le prélèvement.' },
      { text: 'L\'antigène viral du prélèvement peut se lier à cet anticorps de capture.', correct: true, correction: 'Oui. C\'est la première reconnaissance spécifique du montage.' },
      { text: 'Le signal apparaît indépendamment de toute liaison antigène–anticorps.', correct: false, correction: 'Non. Le principe du test est fondé sur cette liaison spécifique.' },
    ],
    explanation: 'L\'ELISA antigénique décrit repose sur une capture puis une révélation de l\'antigène par des anticorps spécifiques. (Cours, p. 10.)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Dans un ELISA antigénique avec révélation colorimétrique, quel est le rôle de l\'enzyme liée au système de détection ?',
    options: [
      { text: 'Détruire tous les anticorps de capture avant la lecture.', correct: false, correction: 'Non. Ils doivent rester capables de retenir la cible.' },
      { text: 'Transformer un substrat en produit coloré mesurable si l\'antigène a été reconnu.', correct: true, correction: 'Oui. L\'activité enzymatique produit un signal lié à la réaction immunologique.' },
      { text: 'Produire une bande contrôle par migration capillaire.', correct: false, correction: 'Non. La bande contrôle appartient aux tests immunochromatographiques, pas à l\'ELISA en puits.' },
      { text: 'Répliquer le génome viral dans le puits.', correct: false, correction: 'Non. L\'enzyme de révélation ne remplace pas la machinerie de réplication virale.' },
      { text: 'Garantir une infection active quelle que soit la nature du prélèvement et du test.', correct: false, correction: 'Non. La signification clinique dépend de la cible, du prélèvement et du contexte.' },
    ],
    explanation: 'Une enzyme de révélation, par exemple la phosphatase alcaline, agit sur son substrat et génère un signal coloré. (Cours, p. 10.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles étapes appartiennent au principe d\'un test immunochromatographique antigénique sur bandelette ?',
    options: [
      { text: 'Un anticorps immobilisé à la bande test capture le complexe et rend une bande visible.', correct: true, correction: 'Oui. La zone test révèle la présence de l\'antigène ciblé.' },
      { text: 'La bandelette impose une culture virale de plusieurs jours avant toute lecture.', correct: false, correction: 'Non. Le test rapide détecte directement un antigène sans culture préalable obligatoire.' },
      { text: 'Le liquide déposé migre par capillarité sur la bandelette.', correct: true, correction: 'Oui. La migration amène les complexes vers les zones de lecture.' },
      { text: 'L\'antigène éventuel est reconnu par des anticorps liés à des particules détectables.', correct: true, correction: 'Oui. Cette liaison forme un complexe mobile si la cible est présente.' },
      { text: 'La migration se produit exclusivement grâce à des cycles thermiques de PCR.', correct: false, correction: 'Non. Elle repose sur la capillarité, non sur une amplification thermique.' },
    ],
    explanation: 'Le test rapide combine liaison antigène–anticorps, migration capillaire et capture à la zone test. (Cours, p. 10.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Sur une bandelette antigénique, quelle conclusion tirer si la bande contrôle n\'apparaît pas ?',
    options: [
      { text: 'Le patient est nécessairement indemne d\'infection.', correct: false, correction: 'Non. L\'absence de contrôle empêche d\'interpréter un résultat négatif.' },
      { text: 'Le test doit être lu comme une quantification précise de charge virale.', correct: false, correction: 'Non. Une bandelette antigénique est généralement qualitative et, sans contrôle, invalide.' },
      { text: 'Le patient est nécessairement infecté par le virus cible.', correct: false, correction: 'Non. L\'absence de contrôle empêche aussi de valider une bande test apparente.' },
      { text: 'Le résultat est invalide ou non interprétable, même si la bande test semble visible.', correct: true, correction: 'Oui. Sans contrôle, la migration et le fonctionnement du dispositif ne sont pas vérifiés.' },
      { text: 'La bande contrôle est inutile à la validité de l\'essai.', correct: false, correction: 'Non. Elle fait partie des critères de validité du test.' },
    ],
    explanation: 'La bande contrôle vérifie le bon déroulement du test ; son absence invalide la lecture. (Cours, p. 10.)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles propositions sont justes concernant les tests antigéniques rapides et l\'immunofluorescence directe ?',
    options: [
      { text: 'La bande contrôle absente prouve un résultat négatif valide.', correct: false, correction: 'Non. Elle rend le test non interprétable.' },
      { text: 'Un résultat antigénique rapide négatif peut nécessiter une méthode plus sensible si la suspicion clinique reste forte.', correct: true, correction: 'Oui. Les performances dépendent du test, du prélèvement et du contexte clinique.' },
      { text: 'L\'immunofluorescence peut rechercher des antigènes viraux directement dans des cellules du prélèvement.', correct: true, correction: 'Oui. Des anticorps fluorescents peuvent marquer les cellules infectées.' },
      { text: 'Un test antigénique rapide peut être utile pour certains virus respiratoires ou digestifs selon le test disponible.', correct: true, correction: 'Oui. Le cours cite notamment le VRS et des virus responsables de gastro-entérites.' },
      { text: 'Tous les tests antigéniques rapides ont toujours une sensibilité identique à toute PCR.', correct: false, correction: 'Non. Leur sensibilité varie et est souvent inférieure à celle d\'une amplification moléculaire.' },
    ],
    explanation: 'Ces méthodes peuvent être utiles selon le virus et la situation, mais leur performance et l\'interprétation d\'un négatif exigent le contexte clinique. (Cours, p. 10–11.)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quel principe distingue l\'hybridation moléculaire de la PCR dans le cours ?',
    options: [
      { text: 'Une ADN polymérase double la cible à chaque cycle', correct: false, correction: 'Non. C\'est le principe de l\'amplification par PCR, absent de l\'hybridation simple.' },
      { text: 'Elle détecte uniquement les IgM du patient', correct: false, correction: 'Non. La cible est le génome viral, et non les immunoglobulines.' },
      { text: 'La sonde produit directement des anticorps anti-virus', correct: false, correction: 'Non. Une sonde nucléotidique détecte une séquence d\'acide nucléique, pas une réponse immunitaire.' },
      { text: 'La méthode ne peut fonctionner qu\'après culture du virus pendant plusieurs semaines', correct: false, correction: 'Non. Le cours décrit notamment l\'hybridation in situ sur des tissus.' },
      { text: 'Une sonde complémentaire reconnaît une séquence virale sans amplifier cette séquence', correct: true, correction: 'Oui. La sonde s\'apparie à sa cible ; l\'hybridation décrite ne multiplie pas le génome recherché.' },
    ],
    explanation: 'L\'hybridation met en évidence une séquence cible grâce à une sonde complémentaire, sans étape d\'amplification comparable à la PCR. (Cours, p. 11)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Dans quelles situations et avec quelles limites l\'hybridation in situ sur tissu peut-elle être utile ?',
    options: [
      { text: 'Le cours cite la recherche de certains HPV ou du virus Epstein-Barr dans des tissus comme exemples.', correct: true, correction: 'Oui. Ce sont des applications citées en anatomopathologie.' },
      { text: 'Elle est toujours plus sensible qu\'une PCR adaptée parce qu\'elle n\'amplifie rien.', correct: false, correction: 'Non. L\'absence d\'amplification tend au contraire à limiter la sensibilité.' },
      { text: 'Sans amplification préalable de la cible, il faut une quantité suffisante de génome pour obtenir un signal détectable.', correct: true, correction: 'Oui. Cette exigence contribue à une sensibilité souvent inférieure à celle d\'une PCR adaptée.' },
      { text: 'Elle peut localiser une séquence virale directement dans les cellules d\'une coupe tissulaire.', correct: true, correction: 'Oui. La conservation de l\'architecture du tissu est un intérêt de l\'approche in situ.' },
      { text: 'Elle exige que les anticorps du patient se lient à la sonde nucléotidique.', correct: false, correction: 'Non. La sonde s\'apparie à une séquence d\'acide nucléique complémentaire.' },
    ],
    explanation: 'L\'hybridation in situ peut montrer où se situe un génome viral dans un tissu, notamment dans certaines recherches HPV ou EBV, sous réserve d\'une cible assez abondante. (Cours, p. 11)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Pourquoi la PCR est-elle particulièrement utile lorsque la quantité de génome viral du prélèvement est faible ?',
    options: [
      { text: 'Elle détecte uniquement les anticorps sans rechercher le virus', correct: false, correction: 'Non. La PCR vise un acide nucléique viral.' },
      { text: 'Elle transforme tous les virus en cellules cultivables', correct: false, correction: 'Non. La PCR est une méthode moléculaire qui ne cultive pas de virus.' },
      { text: 'Elle amplifie une séquence cible et rend détectable un faible nombre initial de copies', correct: true, correction: 'Oui. La répétition des cycles multiplie la cible sélectionnée par les amorces.' },
      { text: 'Elle rend tout résultat positif indépendant du risque de contamination', correct: false, correction: 'Non. Une méthode très sensible nécessite des contrôles contre les contaminations.' },
      { text: 'Elle supprime les besoins de spécificité des amorces', correct: false, correction: 'Non. Les amorces doivent être adaptées à la séquence recherchée.' },
    ],
    explanation: 'L\'amplification des acides nucléiques explique la forte sensibilité de la PCR pour rechercher une cible virale peu abondante. (Cours, p. 11-12)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Avant une PCR virologique, quelles précautions ou étapes sont pertinentes dans le schéma du cours ?',
    options: [
      { text: 'Extraire ou préparer les acides nucléiques à partir du prélèvement', correct: true, correction: 'Oui. Le cours décrit une extraction, souvent automatisée, avant l\'amplification.' },
      { text: 'Ajouter des anticorps du patient pour remplacer systématiquement la polymérase', correct: false, correction: 'Non. La polymérase reste l\'enzyme qui synthétise l\'ADN amplifié.' },
      { text: 'Choisir un protocole et des amorces adaptés à la cible recherchée', correct: true, correction: 'Oui. La spécificité de l\'amplification dépend de la séquence visée.' },
      { text: 'Réduire la présence de substances susceptibles d\'inhiber la réaction', correct: true, correction: 'Oui. Des lavages ou une préparation appropriée limitent les inhibiteurs.' },
      { text: 'Interpréter tout résultat sans tenir compte des contrôles de qualité', correct: false, correction: 'Non. Les contrôles aident à détecter inhibition ou contamination.' },
    ],
    explanation: 'La préparation du prélèvement et le choix de la cible conditionnent la qualité d\'une PCR ; un échantillon mal préparé peut contenir des inhibiteurs. (Cours, p. 11-12)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel est le rôle des deux amorces dans la PCR présentée ?',
    options: [
      { text: 'Remplacer la dénaturation thermique des brins d\'ADN', correct: false, correction: 'Non. Les amorces agissent après la séparation des brins, pendant l\'hybridation.' },
      { text: 'Mesurer directement l\'infectiosité des particules virales', correct: false, correction: 'Non. La présence d\'une séquence amplifiable ne mesure pas à elle seule l\'infectiosité.' },
      { text: 'Délimiter et initier l\'amplification de la séquence d\'ADN ciblée', correct: true, correction: 'Oui. Chaque amorce s\'apparie à une région flanquante et permet l\'élongation par la polymérase.' },
      { text: 'Détruire toutes les molécules de CMH dans le prélèvement', correct: false, correction: 'Non. Leur fonction est l\'appariement à la cible nucléique.' },
      { text: 'Se lier aux IgG du patient pour créer une bande colorée', correct: false, correction: 'Non. Cela ne décrit pas des amorces nucléotidiques de PCR.' },
    ],
    explanation: 'Les amorces fournissent les points de départ spécifiques à partir desquels l\'ADN polymérase recopie la région cible. (Cours, p. 12)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles associations entre étape et fonction d\'un cycle de PCR sont correctes ?',
    options: [
      { text: 'Hybridation des amorces : appariement aux séquences complémentaires', correct: true, correction: 'Oui. La baisse de température permet leur fixation sur la cible.' },
      { text: 'Dénaturation : séparation des deux brins d\'ADN', correct: true, correction: 'Oui. L\'élévation de température dissocie les brins.' },
      { text: 'Élongation : synthèse d\'ADN à partir des amorces par une polymérase', correct: true, correction: 'Oui. L\'enzyme allonge les nouveaux brins.' },
      { text: 'Élongation : destruction systématique de tout produit précédemment amplifié', correct: false, correction: 'Non. La quantité d\'amplicons augmente au fil des cycles avant le plateau.' },
      { text: 'Dénaturation : sécrétion d\'anticorps par les plasmocytes', correct: false, correction: 'Non. La réaction se déroule sur des acides nucléiques dans un thermocycleur.' },
    ],
    explanation: 'Un cycle classique de PCR alterne dénaturation, appariement des amorces et élongation ; sa répétition permet l\'amplification. (Cours, p. 12)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Dans le modèle idéal présenté pour la PCR, à partir d\'une copie d\'ADN cible, combien de copies obtient-on après trois cycles si la quantité double exactement à chaque cycle ?',
    options: [
      { text: 'Huit copies.', correct: true, correction: 'Oui. Une copie initiale devient 2, puis 4, puis 8 copies après trois doublements idéaux.' },
      { text: 'Trois copies.', correct: false, correction: 'Non. Trois est le nombre de cycles, pas le résultat de trois doublements.' },
      { text: 'Neuf copies.', correct: false, correction: 'Non. Le modèle de doublement donne une puissance de deux, ici 2³ = 8.' },
      { text: 'Six copies.', correct: false, correction: 'Non. L\'augmentation idéale est multiplicative : 1 × 2³ = 8.' },
      { text: 'Quatre copies.', correct: false, correction: 'Non. Quatre copies correspondent à deux doublements à partir d\'une copie.' },
    ],
    explanation: 'Le doublement idéal à chaque cycle conduit à 1 × 2³ = 8 copies après trois cycles ; la PCR réelle peut s\'écarter de ce rendement théorique. (Cours, p. 12)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Pour rechercher par amplification un virus à ARN et interpréter la PCR, quelles propositions sont correctes ?',
    options: [
      { text: 'Un résultat moléculaire positif témoigne de matériel génétique détecté, à interpréter selon le contexte', correct: true, correction: 'Oui. Il ne prouve pas à lui seul que le virus est encore infectieux.' },
      { text: 'Une PCR positive démontre nécessairement la présence d\'IgG protectrices', correct: false, correction: 'Non. La PCR n\'est pas une mesure des anticorps ni de l\'immunité protectrice.' },
      { text: 'Une étape de transcription inverse peut convertir l\'ARN cible en ADN complémentaire', correct: true, correction: 'Oui. La RT-PCR ajoute cette étape avant l\'amplification d\'une cible ARN.' },
      { text: 'L\'amplification recherche une séquence génétique spécifique de la cible', correct: true, correction: 'Oui. Amorces et éventuellement sonde sont choisies selon le génome recherché.' },
      { text: 'La transcriptase inverse est inutile dans tous les protocoles visant un virus à ARN', correct: false, correction: 'Non. Une amplification PCR de l\'ARN viral recourt normalement à une conversion ARN→ADN.' },
    ],
    explanation: 'Pour rechercher une cible virale à ARN par PCR, une étape de transcription inverse produit l\'ADN complémentaire à amplifier ; un résultat positif signale du génome détecté, pas forcément des virions infectieux. (Cours, p. 4 et 11-12)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Qu\'apporte la PCR en temps réel par rapport à une lecture uniquement en fin de réaction sur gel ?',
    options: [
      { text: 'La suppression de toute nécessité de cible moléculaire spécifique', correct: false, correction: 'Non. Les amorces et les sondes restent spécifiques de la séquence recherchée.' },
      { text: 'La transformation des IgM en IgG au cours de l\'analyse', correct: false, correction: 'Non. Elle ne modifie pas la réponse immunitaire du patient.' },
      { text: 'La visualisation directe des virions au microscope électronique', correct: false, correction: 'Non. Une PCR détecte un acide nucléique, pas la morphologie virale.' },
      { text: 'La preuve que chaque copie détectée correspond à un virus encore infectieux', correct: false, correction: 'Non. Le signal renseigne sur une cible amplifiable, pas sur sa capacité infectieuse.' },
      { text: 'Le suivi de l\'apparition d\'un signal fluorescent pendant les cycles d\'amplification', correct: true, correction: 'Oui. Le signal peut être suivi au fil des cycles, avant la fin complète de la réaction.' },
    ],
    explanation: 'La PCR en temps réel suit l\'amplification par fluorescence pendant les cycles et peut servir à une détection qualitative ou à une quantification calibrée. (Cours, p. 12)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Dans le système de PCR en temps réel à sonde hydrolysée présenté, quelles propositions sont exactes ?',
    options: [
      { text: 'À technique et cible comparables, une fluorescence plus tardive signifie nécessairement davantage de cible initiale.', correct: false, correction: 'Non. Elle évoque généralement moins de cible initiale, sans permettre seule une quantification universelle.' },
      { text: 'Toutes les méthodes de PCR en temps réel utilisent obligatoirement une sonde hydrolysée.', correct: false, correction: 'Non. Il existe aussi d\'autres systèmes de détection en temps réel.' },
      { text: 'La sonde est toujours un anticorps sécrété par le patient.', correct: false, correction: 'Non. Il s\'agit ici d\'une sonde d\'acide nucléique marquée, et non d\'une immunoglobuline.' },
      { text: 'La dégradation de la sonde lors de l\'élongation peut augmenter la fluorescence mesurée.', correct: true, correction: 'Oui. C\'est le mécanisme de révélation décrit dans le cours pour ce type de sonde.' },
      { text: 'Une sonde nucléotidique marquée participe à la détection de la séquence cible amplifiée.', correct: true, correction: 'Oui. Elle reconnaît une séquence de l\'amplicon et porte des marqueurs de fluorescence.' },
    ],
    explanation: 'Dans l\'exemple de sonde hydrolysée du cours, une sonde nucléotidique marquée s\'apparie à la cible et sa dégradation durant l\'élongation libère un signal fluorescent. (Cours, p. 12)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Pourquoi la quantité de produit de PCR cesse-t-elle d\'augmenter exponentiellement après de nombreux cycles ?',
    options: [
      { text: 'Chaque amplicon se transforme automatiquement en anticorps', correct: false, correction: 'Non. Les produits restent des acides nucléiques.' },
      { text: 'La polymérase devient toujours un virion complet', correct: false, correction: 'Non. La polymérase est une enzyme de synthèse, non une particule virale.' },
      { text: 'La fluorescence disparaît obligatoirement avant toute détection', correct: false, correction: 'Non. Le plateau survient après l\'apparition du signal de nombreuses réactions.' },
      { text: 'La cible initiale n\'avait en réalité jamais été amplifiée', correct: false, correction: 'Non. Le plateau suit précisément une phase d\'amplification.' },
      { text: 'La réaction peut atteindre un plateau, notamment lorsque des réactifs deviennent limitants', correct: true, correction: 'Oui. La multiplication théorique par deux ne se poursuit pas sans limite.' },
    ],
    explanation: 'L\'efficacité de la réaction diminue au plateau ; les consommables et conditions du mélange ne permettent pas une croissance exponentielle illimitée. (Cours, p. 12)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Dans l\'utilisation de la PCR en temps réel décrite, quelles finalités sont possibles ?',
    options: [
      { text: 'Un suivi de charge virale chez un patient traité, selon le virus', correct: true, correction: 'Oui. Le cours cite notamment VIH et hépatites pour le suivi.' },
      { text: 'Une détermination automatique du nombre exact de virions infectieux à partir de tout Ct', correct: false, correction: 'Non. Le Ct dépend de l\'essai et détecte un génome, pas une infectiosité mesurée directement.' },
      { text: 'Une recherche qualitative : cible virale détectée ou non détectée selon la méthode', correct: true, correction: 'Oui. C\'est un usage diagnostique direct.' },
      { text: 'Une quantification avec étalonnage de la quantité de génome viral', correct: true, correction: 'Oui. Une gamme adaptée relie le signal à une concentration ou un nombre de copies.' },
      { text: 'Une mesure directe de la spécificité des IgM sériques sans réactif supplémentaire', correct: false, correction: 'Non. Les IgM relèvent d\'une méthode immunologique, pas de la PCR de génome viral.' },
    ],
    explanation: 'La même famille de techniques moléculaires peut répondre à une question qualitative ou, avec calibration, quantitative. (Cours, p. 12-13)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'À méthode, cible et conditions comparables, que suggère un Ct plus bas dans une PCR en temps réel ?',
    options: [
      { text: 'Une mesure identique et directement comparable à tous les Ct obtenus par n\'importe quel autre laboratoire', correct: false, correction: 'Non. Les valeurs dépendent des méthodes, cibles et prélèvements.' },
      { text: 'Une immunité protectrice certaine de la personne testée', correct: false, correction: 'Non. Le Ct ne mesure pas la protection immunitaire.' },
      { text: 'Une quantité initiale plus élevée de cible nucléique dans le prélèvement analysé', correct: true, correction: 'Oui. Le seuil de fluorescence est franchi après moins de cycles.' },
      { text: 'Une preuve absolue d\'infectiosité du virus dans l\'échantillon', correct: false, correction: 'Non. Détecter un génome ne démontre pas à lui seul la présence de virions infectieux.' },
      { text: 'Une quantité initiale forcément plus faible de cible', correct: false, correction: 'Non. C\'est l\'association inverse dans le cadre comparable indiqué.' },
    ],
    explanation: 'Le Ct est le cycle où le signal dépasse un seuil ; sa relation inverse avec la quantité initiale n\'est exploitable que dans un contexte analytique comparable. (Cours, p. 13)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Comment interpréter les unités et l\'étalonnage évoqués pour la charge virale ?',
    options: [
      { text: 'Une gamme d\'étalonnage peut relier le signal à des concentrations connues', correct: true, correction: 'Oui. Elle permet une estimation quantitative avec un protocole adapté.' },
      { text: 'Une courbe d\'étalonnage transforme directement un anticorps en génome viral', correct: false, correction: 'Non. Elle sert à relier le signal moléculaire à la quantité de cible.' },
      { text: '10³ copies correspondent à 1 000 copies, soit 3 logs décimaux', correct: true, correction: 'Oui. log10(1 000) = 3.' },
      { text: '10⁶ copies correspondent à un million de copies, soit 6 logs décimaux', correct: true, correction: 'Oui. log10(1 000 000) = 6.' },
      { text: '3 logs correspondent à 3 copies dans toutes les unités possibles', correct: false, correction: 'Non. En logarithme décimal, 3 logs valent 10³ dans l\'unité considérée.' },
    ],
    explanation: 'La quantification emploie des références connues et souvent une échelle logarithmique décimale ; l\'unité du résultat doit être conservée. (Cours, p. 13)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Pourquoi le cours cite-t-il le virus BK dans le suivi moléculaire d\'un patient greffé du rein ?',
    options: [
      { text: 'Un résultat positif prouve à lui seul un rejet immunologique du greffon.', correct: false, correction: 'Non. Une détection virale n\'établit pas automatiquement un rejet immunologique.' },
      { text: 'Sa réactivation peut être associée à des complications du greffon, ce qui justifie une surveillance adaptée de la charge virale.', correct: true, correction: 'Oui. Le cours présente BK comme un exemple de virus suivi chez les transplantés rénaux.' },
      { text: 'Le virus BK ne possède aucun génome détectable par amplification.', correct: false, correction: 'Non. Son ADN peut être recherché et quantifié par des techniques moléculaires.' },
      { text: 'La PCR BK mesure les anticorps IgM sériques plutôt que le génome viral.', correct: false, correction: 'Non. La PCR cible un acide nucléique viral ; les IgM relèvent de la sérologie.' },
      { text: 'Un Ct isolé indique directement et avec certitude le nombre de virions infectieux dans le rein.', correct: false, correction: 'Non. Le Ct dépend de l\'essai et renseigne sur une cible nucléique, non sur une infectiosité mesurée directement.' },
    ],
    explanation: 'Chez le transplanté rénal, la réactivation du virus BK peut menacer le greffon ; sa surveillance moléculaire illustre l\'intérêt de la quantification virale. (Cours, p. 13)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Devant un syndrome respiratoire très récent, quelles raisons peuvent rendre une sérologie seule peu adaptée au diagnostic initial ?',
    options: [
      { text: 'Les IgG apparaissent obligatoirement avant toute multiplication virale', correct: false, correction: 'Non. La réponse anticorps prend du temps.' },
      { text: 'Un test direct adapté au virus et au prélèvement peut renseigner plus tôt', correct: true, correction: 'Oui. Une méthode antigénique ou moléculaire appropriée peut détecter le virus durant la phase aiguë.' },
      { text: 'Tous les virus respiratoires sont impossibles à détecter directement', correct: false, correction: 'Non. Le cours cite précisément des méthodes directes pour des infections aiguës.' },
      { text: 'Les symptômes peuvent précéder l\'apparition d\'anticorps détectables', correct: true, correction: 'Oui. La fenêtre de séroconversion peut dépasser le délai d\'apparition des signes.' },
      { text: 'Une sérologie négative très précoce n\'exclut pas nécessairement l\'infection en cause', correct: true, correction: 'Oui. Le moment du prélèvement doit être intégré à l\'interprétation.' },
    ],
    explanation: 'Pour une infection à incubation courte, la cinétique des anticorps peut être trop lente pour l\'épisode symptomatique initial ; on choisit une méthode directe adaptée. (Cours, p. 13 et 15)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Dans un ELISA destiné à détecter les anticorps du patient, quel élément est fixé au fond du puits au départ dans le schéma décrit ?',
    options: [
      { text: 'Une lignée de cellules vivantes servant à isoler le virus', correct: false, correction: 'Non. Cela relèverait de la culture virale.' },
      { text: 'Un film radiographique montrant la forme des particules virales', correct: false, correction: 'Non. Le puits contient un réactif immunologique.' },
      { text: 'Un anticorps anti-antigène viral pour mesurer systématiquement les IgG du patient', correct: false, correction: 'Non. Une plaque tapissée d\'anticorps correspond plutôt à un ELISA de capture d\'antigène dans le schéma du cours.' },
      { text: 'Un antigène viral reconnu par les anticorps recherchés', correct: true, correction: 'Oui. Les anticorps éventuellement présents dans le sérum du patient peuvent s\'y fixer.' },
      { text: 'La totalité du génome du patient à amplifier par PCR', correct: false, correction: 'Non. L\'ELISA décrit une liaison antigène–anticorps, sans amplification génomique.' },
    ],
    explanation: 'Pour rechercher des anticorps par l\'ELISA présenté, l\'antigène est immobilisé, puis le sérum et un réactif de révélation sont ajoutés. (Cours, p. 14)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Concernant IgM et IgG en sérologie virale, quelles propositions sont justes avec les nuances nécessaires ?',
    options: [
      { text: 'Toute IgM positive prouve sans exception une infection aiguë en cours', correct: false, correction: 'Non. Persistance, réactions croisées ou faux positifs sont possibles.' },
      { text: 'La cinétique des anticorps et la date du prélèvement comptent dans l\'interprétation', correct: true, correction: 'Oui. Un prélèvement trop précoce peut être séronégatif.' },
      { text: 'Toute IgG positive signifie une protection absolue contre toute réinfection', correct: false, correction: 'Non. La présence d\'IgG n\'établit pas universellement une immunité protectrice.' },
      { text: 'Les IgG témoignent souvent d\'un contact antérieur ou d\'une réponse vaccinale selon le virus et l\'antigène testé', correct: true, correction: 'Oui. Leur signification exacte dépend de l\'agent et de la stratégie vaccinale.' },
      { text: 'Les IgM apparaissent souvent précocement et peuvent orienter vers une infection récente', correct: true, correction: 'Oui, mais leur interprétation dépend du virus, du test et du contexte clinique.' },
    ],
    explanation: 'IgM et IgG ont une utilité différente, mais aucun isotype isolé ne remplace l\'analyse de la cinétique, de la spécificité du test et du contexte. (Cours, p. 14)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Pourquoi un immunoblot recherchant plusieurs réactivités peut-il aider à confirmer une sérologie initiale réactive ?',
    options: [
      { text: 'Il prouve l\'infection dès qu\'une seule bande quelconque apparaît', correct: false, correction: 'Non. L\'interprétation suit des critères de profil propres à l\'infection et au test.' },
      { text: 'Il examine les anticorps dirigés contre plusieurs protéines virales et peut accroître la spécificité de la confirmation', correct: true, correction: 'Oui. Un profil concordant est plus informatif qu\'une seule réaction isolée.' },
      { text: 'Il transforme une sérologie négative précoce en preuve d\'absence définitive d\'infection', correct: false, correction: 'Non. Une fenêtre sérologique reste possible avant la production d\'anticorps.' },
      { text: 'Il remplace toujours tout prélèvement de contrôle quel que soit l\'agent', correct: false, correction: 'Non. Les algorithmes de confirmation dépendent de l\'infection et de la situation.' },
      { text: 'Il quantifie directement le nombre de virions infectieux par millilitre', correct: false, correction: 'Non. L\'immunoblot examine des réactions d\'anticorps, pas une culture quantitative.' },
    ],
    explanation: 'L\'immunoblot apporte un profil de réactivité contre plusieurs antigènes, mais une bande isolée ne suffit pas à établir un diagnostic. (Cours, p. 14)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quels choix de méthode et de prélèvement suivent le raisonnement diagnostique présenté en conclusion ?',
    options: [
      { text: 'Adapter le prélèvement au site et au virus suspectés, par exemple LCR pour une suspicion d\'atteinte neurologique', correct: true, correction: 'Oui. Un bon test sur le mauvais prélèvement peut manquer l\'infection.' },
      { text: 'Tenir compte du délai depuis l\'exposition ou le début des symptômes', correct: true, correction: 'Oui. La cinétique des marqueurs guide le choix entre test direct et sérologie.' },
      { text: 'Pour une infection aiguë à symptômes précoces, privilégier une recherche directe pertinente plutôt qu\'une sérologie seule trop précoce', correct: true, correction: 'Oui. Les anticorps peuvent ne pas encore être détectables.' },
      { text: 'Utiliser systématiquement une sérologie IgG sur sang pour toute méningo-encéphalite aiguë, quel que soit l\'agent', correct: false, correction: 'Non. Le cours illustre l\'intérêt d\'une recherche directe sur LCR selon l\'agent suspecté.' },
      { text: 'Déclarer tous les tests interchangeables dès lors qu\'ils portent le nom de « virologie »', correct: false, correction: 'Non. Chaque méthode cible un objet biologique et possède une fenêtre diagnostique propres.' },
    ],
    explanation: 'Le choix du test dépend de l\'agent, du site de l\'infection, du prélèvement, de l\'histoire naturelle et du moment où le marqueur recherché devient détectable. (Cours, p. 12-15)'
  },
]
