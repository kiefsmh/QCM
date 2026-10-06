export const meta = {
  title: 'Parasitoses à transmission transcutanée',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Que signifie une transmission transcutanée dans ce cours ?',
    options: [
      { text: 'Une larve infestante franchit la peau lors d\'un contact avec un milieu contaminé', correct: true, correction: 'Oui. La porte d\'entrée est cutanée, souvent après contact avec eau ou sol contaminé.' },
      { text: 'La contamination nécessite dans tous les cas une plaie profonde', correct: false, correction: 'Non. Des larves peuvent pénétrer une peau intacte ou micro-lésée.' },
      { text: 'Le parasite est obligatoirement injecté par un moustique', correct: false, correction: 'Non. La piqûre vectorielle correspond à un autre mode de transmission.' },
      { text: 'Le parasite reste toujours sur les vêtements sans atteindre la peau', correct: false, correction: 'Non. Une pénétration cutanée est au contraire le mécanisme central.' },
      { text: 'Seuls les aliments crus permettent l\'infection', correct: false, correction: 'Non. L\'ingestion n\'est pas la voie étudiée ici.' },
    ],
    explanation: 'Les quatre parasitoses centrales du cours sont acquises par contact cutané avec de l\'eau ou un sol porteur de formes infestantes. (Cours, p. 2–3, 7, 10, 12)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles parasitoses du cours peuvent s\'acquérir par pénétration cutanée ?',
    options: [
      { text: 'L\'ankylostomose', correct: true, correction: 'Oui. Les larves infestantes du sol traversent notamment la peau des pieds.' },
      { text: 'La larva migrans cutanée', correct: true, correction: 'Oui. Des larves d\'ankylostomes animaux pénètrent la peau en contact avec le sol ou le sable.' },
      { text: 'La toxoplasmose comme voie habituelle', correct: false, correction: 'Non. Elle relève surtout d\'une transmission digestive ou materno-fœtale, pas de cette voie.' },
      { text: 'La schistosomose', correct: true, correction: 'Oui. Les cercaires quittant un mollusque pénètrent la peau en eau douce.' },
      { text: 'L\'anguillulose', correct: true, correction: 'Oui. Les larves infestantes de Strongyloides pénètrent la peau.' },
    ],
    explanation: 'La question introductive distingue ces quatre infections de la toxoplasmose et du paludisme, qui suivent d\'autres voies. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Pourquoi la gale est-elle distinguée des quatre helminthoses transcutanées du cours ?',
    options: [
      { text: 'Sarcoptes scabiei est un ectoparasite qui reste dans les couches superficielles de la peau', correct: true, correction: 'Oui. Il creuse la couche cornée sans cycle de migration viscérale comparable aux helminthes étudiés.' },
      { text: 'L\'agent de la gale est une bactérie hématophage', correct: false, correction: 'Non. Sarcoptes est un acarien parasite.' },
      { text: 'La gale est due à Schistosoma haematobium', correct: false, correction: 'Non. Cet agent provoque une schistosomose urogénitale.' },
      { text: 'La gale produit normalement des œufs d\'ankylostome dans les selles', correct: false, correction: 'Non. Elle ne suit pas le cycle intestinal des ankylostomes.' },
      { text: 'La gale s\'acquiert uniquement par baignade en eau douce', correct: false, correction: 'Non. Ce contexte oriente plutôt vers une schistosomose.' },
    ],
    explanation: 'Le cours mentionne la gale comme ectoparasitose, distincte de la pénétration puis migration interne des helminthes présentés. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles associations entre milieu d\'exposition et parasitose sont cohérentes ?',
    options: [
      { text: 'Marche pieds nus sur sol souillé — ankylostomose', correct: true, correction: 'Oui. Les larves filariformes du sol peuvent traverser la peau.' },
      { text: 'Contact de la peau avec du sable souillé par des chiens — larva migrans cutanée', correct: true, correction: 'Oui. Les larves d\'ankylostomes animaux y deviennent infestantes.' },
      { text: 'Baignade en eau douce contaminée — schistosomose', correct: true, correction: 'Oui. Les cercaires infectantes sont libérées dans l\'eau par des mollusques.' },
      { text: 'Piqûre de moustique — transmission habituelle de Strongyloides stercoralis', correct: false, correction: 'Non. Strongyloides pénètre surtout la peau depuis un sol contaminé.' },
      { text: 'Ingestion de viande mal cuite — voie obligatoire de Schistosoma mansoni', correct: false, correction: 'Non. Le schistosome est acquis par contact avec une eau infestée.' },
    ],
    explanation: 'Le milieu d\'exposition aide à distinguer eau douce, sol et sable ; la voie vectorielle n\'explique pas ces quatre cas. (Cours, p. 2–4, 8, 10, 13)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Un patient venu d\'une zone d\'endémie a une hématurie, une hydronéphrose et des œufs parasitaires dans les urines. Quel agent du cours est le plus évocateur ?',
    options: [
      { text: 'Strongyloides stercoralis', correct: false, correction: 'Non. Le diagnostic parasitologique usuel recherche des larves, surtout dans les selles.' },
      { text: 'Une larva migrans cutanée', correct: false, correction: 'Non. Elle produit des trajets cutanés sans excrétion d\'œufs urinaires chez l\'humain.' },
      { text: 'Schistosoma haematobium', correct: true, correction: 'Oui. La forme urogénitale élimine des œufs dans les urines et peut léser les voies urinaires.' },
      { text: 'Ancylostoma duodenale', correct: false, correction: 'Non. Il cause surtout une atteinte intestinale avec pertes de sang.' },
      { text: 'Schistosoma mansoni', correct: false, correction: 'Non. Sa forme habituelle est intestinale, avec recherche d\'œufs dans les selles.' },
    ],
    explanation: 'Le cas introductif associe calcification urétérale, hydronéphrose et œufs urinaires à une schistosomose urogénitale. (Cours, p. 2–5)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles associations entre espèce de schistosome et prélèvement sont justes dans les formes habituelles du cours ?',
    options: [
      { text: 'S. haematobium — ECBU bactérien seul comme preuve parasitologique', correct: false, correction: 'Non. Il faut une recherche parasitologique adaptée, et non seulement une culture bactérienne.' },
      { text: 'S. mansoni — examen des cheveux comme méthode de référence', correct: false, correction: 'Non. Les cheveux ne sont pas le siège de l\'excrétion des œufs.' },
      { text: 'S. mansoni — examen des selles', correct: true, correction: 'Oui. Les œufs issus de la localisation intestinale sont recherchés dans les selles.' },
      { text: 'Le choix du prélèvement dépend de la localisation suspectée', correct: true, correction: 'Oui. Les signes urinaires ou digestifs orientent la recherche d\'œufs.' },
      { text: 'S. haematobium — examen des urines', correct: true, correction: 'Oui. Les œufs sont classiquement éliminés par la voie urinaire.' },
    ],
    explanation: 'Le raisonnement relie espèce, organe atteint et recherche d\'œufs ; le prélèvement choisi n\'est pas interchangeable. (Cours, p. 4–6 ; CDC, DPDx Schistosomiasis)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'À quel groupe appartiennent les schistosomes adultes ?',
    options: [
      { text: 'Aux trématodes, vers plats vivant dans le système vasculaire', correct: true, correction: 'Oui. Ce sont des douves sanguines, dont les œufs provoquent une grande partie des lésions.' },
      { text: 'Aux protozoaires transmis par Anopheles', correct: false, correction: 'Non. Cela concerne le paludisme, pas la schistosomose.' },
      { text: 'Aux acariens de la couche cornée', correct: false, correction: 'Non. Cette description concerne la gale.' },
      { text: 'Aux nématodes hématophages de l\'intestin', correct: false, correction: 'Non. Cette description évoque les ankylostomes.' },
      { text: 'Aux bactéries sporulantes', correct: false, correction: 'Non. Les schistosomes sont des helminthes, non des bactéries.' },
    ],
    explanation: 'Schistosomose et bilharziose désignent l\'infection due à des trématodes sanguins du genre Schistosoma. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles affirmations comparent correctement les deux espèces mises en avant ?',
    options: [
      { text: 'Les deux espèces sont des trématodes hématophages', correct: true, correction: 'Oui. Elles appartiennent au même genre de vers plats sanguins.' },
      { text: 'Une infection par l\'une ou l\'autre espèce peut rester peu symptomatique', correct: true, correction: 'Oui. La schistosomose peut être découverte fortuitement malgré une atteinte évolutive.' },
      { text: 'S. mansoni est surtout associé à une atteinte intestinale', correct: true, correction: 'Oui. Les adultes résident dans des vaisseaux liés au territoire digestif.' },
      { text: 'S. mansoni cause toujours une hématurie sans aucune atteinte digestive', correct: false, correction: 'Non. L\'atteinte digestive est au contraire sa présentation principale.' },
      { text: 'S. haematobium est surtout associé à une atteinte urogénitale', correct: true, correction: 'Oui. Les œufs atteignent notamment les voies urinaires.' },
    ],
    explanation: 'Le cours se limite surtout à S. mansoni et S. haematobium et oppose leur tropisme intestinal ou urogénital. (Cours, p. 3–5)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle forme de Schistosoma pénètre la peau humaine dans une eau douce infestée ?',
    options: [
      { text: 'Le miracidium comme forme infestante directe pour l\'humain', correct: false, correction: 'Non. Le miracidium infecte le mollusque intermédiaire.' },
      { text: 'La larve rhabditoïde d\'ankylostome', correct: false, correction: 'Non. Elle appartient à un autre cycle et n\'est pas la forme infectante pour l\'humain.' },
      { text: 'La cercaire libérée par un mollusque', correct: true, correction: 'Oui. La cercaire à queue bifide est la forme infestante pour l\'humain.' },
      { text: 'Le ver adulte présent dans le foie', correct: false, correction: 'Non. Le ver adulte vit dans l\'hôte définitif et ne traverse pas la peau du baigneur.' },
      { text: 'L\'œuf fraîchement éliminé dans l\'urine', correct: false, correction: 'Non. L\'œuf doit éclore et passer par le mollusque avant la production de cercaires.' },
    ],
    explanation: 'Après le passage par le mollusque, les cercaires gagnent l\'eau et pénètrent la peau lors du contact. (Cours, p. 3–4 ; CDC, DPDx Schistosomiasis)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles étapes appartiennent au cycle naturel d\'une schistosomose ?',
    options: [
      { text: 'Un crustacé remplace obligatoirement le mollusque', correct: false, correction: 'Non. La mention « crustacé » dans une ligne du support est une coquille ; il s\'agit d\'un mollusque.' },
      { text: 'Les œufs quittent l\'humain par les selles ou les urines selon l\'espèce', correct: true, correction: 'Oui. Ils doivent rejoindre l\'eau pour poursuivre le cycle.' },
      { text: 'Un moustique transmet les œufs par injection sanguine', correct: false, correction: 'Non. Aucun moustique n\'est nécessaire à ce cycle.' },
      { text: 'Le miracidium issu de l\'œuf infecte un mollusque d\'eau douce', correct: true, correction: 'Oui. Le mollusque est l\'hôte intermédiaire spécifique.' },
      { text: 'Des cercaires quittent le mollusque et peuvent pénétrer la peau humaine', correct: true, correction: 'Oui. Cette étape explique la contamination transcutanée.' },
    ],
    explanation: 'La séquence est œuf, miracidium, mollusque, cercaire puis hôte humain ; l\'hôte intermédiaire est un mollusque. (Cours, p. 3–4, 6 ; CDC, DPDx Schistosomiasis)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quel hôte intermédiaire est indispensable au cycle classique de Schistosoma ?',
    options: [
      { text: 'Un moustique Anopheles', correct: false, correction: 'Non. Anopheles transmet le paludisme, pas la schistosomose.' },
      { text: 'Une tique Ixodes', correct: false, correction: 'Non. Elle intervient dans d\'autres infections vectorielles.' },
      { text: 'Un chien domestique', correct: false, correction: 'Non. Le chien est plutôt cité comme hôte d\'ankylostomes responsables de larva migrans.' },
      { text: 'Un crustacé marin', correct: false, correction: 'Non. Le cours l\'écrit une fois par erreur ; le schéma et son résumé indiquent un mollusque.' },
      { text: 'Un mollusque aquatique', correct: true, correction: 'Oui. Le développement larvaire et la production de cercaires ont lieu chez cet hôte.' },
    ],
    explanation: 'Les œufs éclosent dans l\'eau, puis les miracidia infectent un mollusque qui libère les cercaires infestantes. (Cours, p. 3–4, 6 ; CDC, DPDx Schistosomiasis)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Après pénétration cutanée, quelles étapes du parasite sont correctement décrites ?',
    options: [
      { text: 'La cercaire perd sa queue et devient un schistosomule', correct: true, correction: 'Oui. Le changement de forme suit la traversée de la peau.' },
      { text: 'Un flagelle moteur persiste sur tout ver adulte', correct: false, correction: 'Non. La cercaire possède une queue bifide, perdue après pénétration ; ce n\'est pas un flagelle d\'adulte.' },
      { text: 'L\'œuf urinaire devient directement un ver adulte dans la peau', correct: false, correction: 'Non. Le cycle aquatique et le mollusque précèdent l\'infection humaine.' },
      { text: 'Le schistosomule migre ensuite dans l\'organisme avant la localisation des adultes', correct: true, correction: 'Oui. La maturation et la migration précèdent la reproduction vasculaire.' },
      { text: 'Le parasite adulte reste définitivement dans l\'épiderme', correct: false, correction: 'Non. Les adultes siègent dans le système vasculaire.' },
    ],
    explanation: 'Le support nomme le schistosomule après perte de la queue ; le CDC décrit une queue bifide plutôt qu\'un « flagelle ». (Cours, p. 4 ; CDC, DPDx Schistosomiasis)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Un œuf retrouvé dans les selles possède un éperon latéral marqué. Quelle espèce du cours évoque-t-il ?',
    options: [
      { text: 'Schistosoma mansoni', correct: true, correction: 'Oui. Son œuf typique porte un éperon latéral et s\'élimine surtout dans les selles.' },
      { text: 'Schistosoma haematobium', correct: false, correction: 'Non. Son œuf typique porte un éperon terminal et est recherché dans l\'urine.' },
      { text: 'Necator americanus', correct: false, correction: 'Non. L\'œuf d\'ankylostome n\'a pas cet éperon caractéristique.' },
      { text: 'Strongyloides stercoralis', correct: false, correction: 'Non. Dans les selles, on recherche surtout des larves de Strongyloides.' },
      { text: 'Sarcoptes scabiei', correct: false, correction: 'Non. L\'agent de la gale n\'est pas un schistosome intestinal.' },
    ],
    explanation: 'La morphologie de l\'éperon aide à identifier S. mansoni : latéral, contrairement à l\'éperon terminal de S. haematobium. (Cours, p. 6 ; CDC, DPDx Schistosomiasis)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles associations entre œuf et schistosome sont correctes ?',
    options: [
      { text: 'S. mansoni — éperon latéral', correct: true, correction: 'Oui. C\'est le repère morphologique majeur de son œuf.' },
      { text: 'Les œufs des deux espèces sont des larves mobiles sans coque', correct: false, correction: 'Non. Il s\'agit d\'œufs dotés d\'une coque et d\'un éperon.' },
      { text: 'S. haematobium — éperon terminal', correct: true, correction: 'Oui. Cet éperon est visible sur l\'œuf urinaire typique.' },
      { text: 'S. haematobium — recherche urinaire habituelle', correct: true, correction: 'Oui. Le tropisme urogénital guide le prélèvement.' },
      { text: 'S. mansoni — absence absolue d\'œufs dans tout excréta', correct: false, correction: 'Non. Ses œufs sont habituellement retrouvés dans les selles.' },
    ],
    explanation: 'La page de microscopie associe l\'éperon latéral à S. mansoni et le terminal à S. haematobium. (Cours, p. 6)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quel signe peut apparaître immédiatement après une contamination par cercaires sans être constant ?',
    options: [
      { text: 'Une anémie ferriprive chronique dès la première minute', correct: false, correction: 'Non. Cette évolution concerne surtout les pertes sanguines prolongées des ankylostomes.' },
      { text: 'Une hématurie obligatoire avant toute maturation parasitaire', correct: false, correction: 'Non. Les œufs et les lésions urinaires apparaissent plus tard.' },
      { text: 'Un érythème prurigineux au point de contact', correct: true, correction: 'Oui. La phase cutanée initiale peut donner une dermatite de pénétration.' },
      { text: 'Une méningite bactérienne systématique', correct: false, correction: 'Non. Ce n\'est pas un signe de contamination schistosomienne habituelle.' },
      { text: 'Une hypertension portale immédiatement constituée', correct: false, correction: 'Non. C\'est une complication tardive de certaines formes intestinales.' },
    ],
    explanation: 'Le cours place un érythème prurigineux facultatif au début de la contamination. (Cours, p. 4)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelques semaines après une baignade en eau douce infestée, quelles données peuvent évoquer une phase de migration schistosomienne ?',
    options: [
      { text: 'Une hyperéosinophilie sanguine', correct: true, correction: 'Oui. La migration tissulaire d\'helminthes peut l\'accompagner.' },
      { text: 'Une fièvre avec manifestations allergiques', correct: true, correction: 'Oui. Le cours décrit ce tableau d\'invasion.' },
      { text: 'Une hépatosplénomégalie possible', correct: true, correction: 'Oui. Elle figure parmi les manifestations de cette phase.' },
      { text: 'Des œufs forcément abondants dans les excrétas dès le premier jour', correct: false, correction: 'Non. L\'excrétion d\'œufs attend la maturation des adultes.' },
      { text: 'Une sérologie nécessairement positive quelques heures après l\'exposition', correct: false, correction: 'Non. Un délai de séroconversion est nécessaire.' },
    ],
    explanation: 'La phase de migration précède la phase d\'état ; elle peut associer fièvre, éosinophilie et signes allergiques. (Cours, p. 4–5 ; CDC, Schistosomiasis Testing)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Qu\'est-ce qui caractérise surtout la phase d\'état d\'une schistosomose ?',
    options: [
      { text: 'Une transmission obligatoire par moustique', correct: false, correction: 'Non. La contamination est liée à l\'eau douce infestée.' },
      { text: 'Une absence définitive d\'œufs dans tous les prélèvements', correct: false, correction: 'Non. Les œufs sont justement recherchés à cette phase.' },
      { text: 'Une atteinte strictement cutanée sans possible retentissement d\'organe', correct: false, correction: 'Non. Les atteintes uro-génitales ou hépato-digestives sont au cœur de la maladie.' },
      { text: 'La mort instantanée de tous les parasites après pénétration de la peau', correct: false, correction: 'Non. Les schistosomes peuvent persister et devenir adultes.' },
      { text: 'Des adultes vasculaires pondent des œufs à l\'origine d\'atteintes viscérales et d\'une excrétion', correct: true, correction: 'Oui. Les symptômes digestifs ou urinaires dépendent de la localisation et des œufs.' },
    ],
    explanation: 'La reproduction des adultes et la rétention d\'œufs marquent la phase d\'état et expliquent de nombreuses lésions. (Cours, p. 5–6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles complications tardives sont correctement associées aux schistosomoses ?',
    options: [
      { text: 'S. haematobium — obstruction urétérale et hydronéphrose', correct: true, correction: 'Oui. La fibrose uro-génitale peut retentir sur le rein.' },
      { text: 'Toutes les schistosomoses — anémie par crochets duodénaux comme mécanisme unique', correct: false, correction: 'Non. Les crochets duodénaux évoquent les ankylostomes.' },
      { text: 'S. mansoni — atteinte hépatosplénique et hypertension portale', correct: true, correction: 'Oui. Les œufs peuvent provoquer une fibrose périportale.' },
      { text: 'S. haematobium — risque accru de cancer vésical', correct: true, correction: 'Oui. L\'inflammation chronique de la vessie est une complication reconnue.' },
      { text: 'S. mansoni — localisation exclusivement dans la couche cornée', correct: false, correction: 'Non. Ce ver a une localisation vasculaire liée à l\'intestin.' },
    ],
    explanation: 'Le cours oppose le retentissement rénal de la forme urogénitale et l\'atteinte hépatosplénique des formes intestinales ; l\'OMS précise le risque vésical tardif. (Cours, p. 5–6 ; OMS, Schistosomiasis)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Pour une suspicion de S. haematobium en phase d\'état, quel examen cible directement l\'élimination des œufs ?',
    options: [
      { text: 'Une radiographie pulmonaire comme preuve parasitologique unique', correct: false, correction: 'Non. L\'imagerie peut évaluer un retentissement, mais ne visualise pas les œufs urinaires.' },
      { text: 'Un frottis sanguin à la recherche d\'adultes circulants', correct: false, correction: 'Non. Les adultes ne se diagnostiquent pas par un simple frottis sanguin.' },
      { text: 'L\'examen parasitologique des urines avec recherche d\'œufs', correct: true, correction: 'Oui. L\'élimination urinaire est caractéristique de cette espèce.' },
      { text: 'Un prélèvement de cheveux', correct: false, correction: 'Non. Il ne répond pas à cette suspicion.' },
      { text: 'Une culture bactérienne d\'urine seule', correct: false, correction: 'Non. Une culture bactérienne ne met pas en évidence les œufs du parasite.' },
    ],
    explanation: 'La recherche d\'œufs dans les urines est l\'examen parasitologique direct privilégié pour la forme urogénitale. (Cours, p. 2, 5–6)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles précautions améliorent l\'interprétation des examens devant une schistosomose suspectée ?',
    options: [
      { text: 'Choisir selles ou urines selon l\'espèce et les symptômes suspectés', correct: true, correction: 'Oui. Le tropisme parasitaire guide le prélèvement.' },
      { text: 'Ne pas exclure l\'infection sur une sérologie faite trop tôt', correct: true, correction: 'Oui. Les anticorps peuvent n\'apparaître qu\'après plusieurs semaines.' },
      { text: 'Considérer qu\'une hématurie isolée prouve toujours S. haematobium', correct: false, correction: 'Non. Elle oriente mais ne remplace pas le diagnostic parasitologique ni le bilan différentiel.' },
      { text: 'Tenir compte d\'une excrétion d\'œufs parfois faible ou intermittente', correct: true, correction: 'Oui. Des prélèvements répétés peuvent augmenter la sensibilité.' },
      { text: 'Imposer une biopsie invasive à toute personne avec suspicion clinique', correct: false, correction: 'Non. Une biopsie n\'est pas l\'examen systématique de première intention.' },
    ],
    explanation: 'Le diagnostic direct repose sur les œufs des excrétas ; la sérologie dépend du délai et ne distingue pas toujours infection passée et active. (Cours, p. 5–6 ; CDC, Schistosomiasis Testing)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Chez un voyageur récemment exposé à une eau douce infestée, que signifie une sérologie schistosomienne négative très précoce ?',
    options: [
      { text: 'Elle ne suffit pas à exclure l\'infection avant la séroconversion', correct: true, correction: 'Oui. La production d\'anticorps spécifiques nécessite plusieurs semaines.' },
      { text: 'Elle rend obligatoire une biopsie vésicale immédiate', correct: false, correction: 'Non. Le diagnostic se raisonne selon les signes et le délai, sans biopsie systématique.' },
      { text: 'Elle exclut avec certitude toute contamination', correct: false, correction: 'Non. Un prélèvement trop précoce peut être faussement rassurant.' },
      { text: 'Elle prouve que des œufs sont déjà excrétés', correct: false, correction: 'Non. La sérologie et l\'excrétion d\'œufs sont deux phénomènes distincts.' },
      { text: 'Elle prouve une infection par ankylostome', correct: false, correction: 'Non. Un résultat négatif ne désigne pas un autre parasite.' },
    ],
    explanation: 'Le cours cite la sérologie en phase d\'invasion ; les tests d\'anticorps deviennent plus fiables après un délai de maturation et de réponse immune. (Cours, p. 5–6 ; CDC, Schistosomiasis Testing)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quels outils peuvent contribuer au diagnostic ou au bilan d\'une schistosomose selon le contexte ?',
    options: [
      { text: 'Sérologie interprétée avec l\'exposition et le délai', correct: true, correction: 'Oui. Elle peut aider, mais ne prouve pas toujours une infection active.' },
      { text: 'Imagerie hépatique ou urinaire pour rechercher un retentissement', correct: true, correction: 'Oui. Elle explore les complications d\'organe.' },
      { text: 'Biopsie rectale ou vésicale choisie dans certains cas difficiles', correct: true, correction: 'Oui. Elle n\'est pas nécessaire à tous les patients.' },
      { text: 'Examen des selles suffisant pour toute hématurie à S. haematobium', correct: false, correction: 'Non. La voie urinaire doit être explorée en priorité.' },
      { text: 'Recherche d\'œufs dans les selles ou les urines', correct: true, correction: 'Oui. Le prélèvement dépend de l\'espèce suspectée.' },
    ],
    explanation: 'Le cours sépare mise en évidence du parasite et évaluation des atteintes viscérales. (Cours, p. 5–7)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quel antiparasitaire est cité comme traitement de référence des schistosomoses ?',
    options: [
      { text: 'Le praziquantel', correct: true, correction: 'Oui. Il est actif contre les principales espèces de Schistosoma.' },
      { text: 'Une chimiothérapie anticancéreuse systématique', correct: false, correction: 'Non. Elle ne traite pas l\'infection parasitaire elle-même.' },
      { text: 'La gentamicine', correct: false, correction: 'Non. Cet antibiotique n\'est pas dirigé contre les trématodes.' },
      { text: 'L\'azithromycine', correct: false, correction: 'Non. Cet antibiotique n\'est pas le traitement des schistosomes.' },
      { text: 'Le métronidazole', correct: false, correction: 'Non. Il ne remplace pas le praziquantel pour cette helminthose.' },
    ],
    explanation: 'Le traitement individuel indiqué dans le support est le praziquantel, également recommandé par le CDC. (Cours, p. 6 ; CDC, Schistosomiasis Clinical Care)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles mesures participent à la prévention de la schistosomose ?',
    options: [
      { text: 'Éviter le contact avec une eau douce potentiellement infestée', correct: true, correction: 'Oui. La peau est exposée aux cercaires même sans ingestion d\'eau.' },
      { text: 'Traiter les personnes infectées et contrôler la transmission autour des foyers', correct: true, correction: 'Oui. Moins d\'œufs atteignent l\'eau si les porteurs sont pris en charge.' },
      { text: 'Compter sur de simples chaussures pour rendre sûre une baignade entière', correct: false, correction: 'Non. Le reste de la peau peut entrer en contact avec les cercaires.' },
      { text: 'Améliorer l\'assainissement pour limiter l\'arrivée d\'œufs dans l\'eau', correct: true, correction: 'Oui. La gestion des excrétas interrompt une étape du cycle.' },
      { text: 'Éliminer les moustiques Anopheles comme seule mesure nécessaire', correct: false, correction: 'Non. Le cycle des schistosomes implique des mollusques et l\'eau, non un moustique.' },
    ],
    explanation: 'La prévention associe protection contre l\'eau infestée, traitement des porteurs, assainissement et contrôle des mollusques dans des programmes adaptés. (Cours, p. 6–7 ; OMS, Schistosomiasis)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Pourquoi une schistosomose peut-elle être découverte fortuitement lors d\'une imagerie ?',
    options: [
      { text: 'La schistosomose n\'atteint jamais les viscères', correct: false, correction: 'Non. Les atteintes viscérales sont précisément recherchées.' },
      { text: 'Un examen radiologique remplace toujours la recherche d\'œufs', correct: false, correction: 'Non. Il complète le diagnostic parasitologique.' },
      { text: 'Le parasite est obligatoirement visible à l\'œil nu sur tout cliché', correct: false, correction: 'Non. L\'imagerie montre surtout un retentissement d\'organe, pas les vers eux-mêmes.' },
      { text: 'Une infection chronique peut rester peu symptomatique tout en causant des lésions visibles', correct: true, correction: 'Oui. Le cours insiste sur les formes asymptomatiques et les découvertes incidentes.' },
      { text: 'Tous les patients ont une hématurie très douloureuse dès le premier jour', correct: false, correction: 'Non. Les manifestations peuvent être discrètes ou tardives.' },
    ],
    explanation: 'La phase chronique peut être silencieuse ; l\'imagerie sert à reconnaître une atteinte hépatique, vésicale ou urétérale. (Cours, p. 5–7)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Devant une hématurie chronique après baignades en zone d\'endémie, quelles démarches sont adaptées ?',
    options: [
      { text: 'Évaluer le retentissement urologique si le tableau le justifie', correct: true, correction: 'Oui. Une obstruction, une fibrose ou d\'autres lésions peuvent exister.' },
      { text: 'Conclure à S. mansoni uniquement parce que les selles sont négatives', correct: false, correction: 'Non. Une selle négative ne démontre pas cette espèce et n\'explore pas la voie urinaire.' },
      { text: 'Demander une recherche parasitologique d\'œufs dans les urines', correct: true, correction: 'Oui. S. haematobium est la piste principale dans ce tableau.' },
      { text: 'Rechercher une exposition à l\'eau douce et le pays de séjour', correct: true, correction: 'Oui. L\'épidémiologie modifie la probabilité de schistosomose.' },
      { text: 'Oublier toute autre cause d\'hématurie', correct: false, correction: 'Non. Une hématurie conserve un diagnostic différentiel.' },
    ],
    explanation: 'Le cas du support illustre la combinaison exposition, hématurie, imagerie urinaire et œufs dans les urines. (Cours, p. 2, 5–6)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Pourquoi le traitement d\'un voyageur tout juste exposé à des cercaires peut-il demander d\'attendre un délai adapté ?',
    options: [
      { text: 'Il faut attendre obligatoirement plusieurs années pour toute infection', correct: false, correction: 'Non. Le délai recommandé se compte en semaines selon le contexte.' },
      { text: 'Le praziquantel agit surtout sur les vers adultes, après maturation', correct: true, correction: 'Oui. Son efficacité est moindre sur les formes très immatures.' },
      { text: 'Le praziquantel est un vaccin qui exige trois rappels', correct: false, correction: 'Non. C\'est un antiparasitaire, non un vaccin.' },
      { text: 'La maturation transforme le schistosome en bactérie', correct: false, correction: 'Non. Le parasite reste un helminthe durant tout son cycle.' },
      { text: 'Les cercaires vivent uniquement dans les selles dès le premier jour', correct: false, correction: 'Non. Elles traversent la peau puis migrent avant la maturité.' },
    ],
    explanation: 'Le CDC précise que le praziquantel cible surtout les vers adultes et que le traitement d\'un voyageur se situe habituellement au moins 6 à 8 semaines après la dernière exposition. (Cours, p. 6 ; CDC, Schistosomiasis Clinical Care)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement les œufs de schistosome d\'autres observations du cours ?',
    options: [
      { text: 'Un éperon latéral oriente vers S. mansoni', correct: true, correction: 'Oui. La morphologie concorde avec une élimination habituelle dans les selles.' },
      { text: 'Une larve de Strongyloides dans les selles est un œuf de Schistosoma', correct: false, correction: 'Non. Larve et œuf sont des formes parasitaires différentes.' },
      { text: 'La présence d\'un éperon rend inutile la prise en compte du prélèvement', correct: false, correction: 'Non. Espèce, prélèvement et contexte doivent être confrontés.' },
      { text: 'Un éperon terminal oriente vers S. haematobium', correct: true, correction: 'Oui. La morphologie concorde avec une élimination habituelle dans les urines.' },
      { text: 'Tout œuf d\'ankylostome présente nécessairement un éperon terminal', correct: false, correction: 'Non. Les œufs d\'ankylostome du cours ne portent pas cet éperon.' },
    ],
    explanation: 'Les photos du support comparent les éperons latéral et terminal ; l\'examen microscopique ne s\'interprète pas isolément. (Cours, p. 6–8)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Une recherche d\'œufs est négative quatre jours après une baignade infestante. Quelle explication est la plus juste ?',
    options: [
      { text: 'Un examen parasitologique des selles confirme immédiatement l\'infection à S. haematobium', correct: false, correction: 'Non. Cette espèce est habituellement recherchée dans les urines, après maturation.' },
      { text: 'Les œufs sont toujours excrétés dans les cheveux d\'abord', correct: false, correction: 'Non. Ils sont éliminés par les voies urinaires ou digestives selon l\'espèce.' },
      { text: 'La présence d\'un mollusque n\'est jamais nécessaire', correct: false, correction: 'Non. Le cycle aquatique implique un mollusque intermédiaire.' },
      { text: 'La schistosomose est alors biologiquement impossible', correct: false, correction: 'Non. Un examen trop précoce ne l\'exclut pas.' },
      { text: 'Les adultes n\'ont pas encore mûri ni commencé à pondre', correct: true, correction: 'Oui. La phase précoce précède l\'élimination des œufs.' },
    ],
    explanation: 'L\'absence d\'œufs juste après l\'exposition est attendue : le parasite doit traverser la phase de migration et devenir adulte. (Cours, p. 4–5 ; CDC, Schistosomiasis Testing)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles associations résument correctement les deux schistosomoses principales du cours ?',
    options: [
      { text: 'S. haematobium — forme urogénitale avec possible hématurie', correct: true, correction: 'Oui. L\'hématurie est un signe cardinal.' },
      { text: 'Les deux — contamination par pénétration cutanée de cercaires aquatiques', correct: true, correction: 'Oui. La différence porte surtout sur la localisation ultérieure.' },
      { text: 'S. haematobium — excrétion exclusivement salivaire des œufs', correct: false, correction: 'Non. Les œufs sont recherchés notamment dans les urines.' },
      { text: 'S. mansoni — transmission principale par morsure de chien', correct: false, correction: 'Non. Le contact avec l\'eau douce infestée est la voie pertinente.' },
      { text: 'S. mansoni — forme intestinale avec possible hypertension portale tardive', correct: true, correction: 'Oui. L\'atteinte hépato-splénique est une complication majeure.' },
    ],
    explanation: 'Même porte d\'entrée, mais tropismes viscéraux et prélèvements distincts. (Cours, p. 3–6)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'À quel groupe appartiennent Ancylostoma duodenale et Necator americanus ?',
    options: [
      { text: 'Aux nématodes intestinaux hématophages', correct: true, correction: 'Oui. Ce sont des vers ronds dont les adultes se fixent à la paroi du grêle.' },
      { text: 'Aux bactéries anaérobies', correct: false, correction: 'Non. Il ne s\'agit pas de bactéries.' },
      { text: 'Aux trématodes vasculaires', correct: false, correction: 'Non. Les schistosomes appartiennent à ce groupe.' },
      { text: 'Aux acariens cutanés', correct: false, correction: 'Non. Sarcoptes est un acarien, pas un ankylostome.' },
      { text: 'Aux protozoaires sanguins', correct: false, correction: 'Non. Les ankylostomes sont des helminthes pluricellulaires.' },
    ],
    explanation: 'Le cours présente l\'ankylostomose comme une nématodose intestinale à pénétration cutanée. (Cours, p. 7)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles espèces sont les deux ankylostomes humains classiquement étudiés dans le support ?',
    options: [
      { text: 'Ancylostoma duodenale', correct: true, correction: 'Oui. Il fait partie des deux espèces classiques du cours.' },
      { text: 'Necator americanus', correct: true, correction: 'Oui. Il constitue l\'autre espèce classique du cours.' },
      { text: 'Sarcoptes scabiei', correct: false, correction: 'Non. C\'est l\'acarien de la gale.' },
      { text: 'Schistosoma mansoni', correct: false, correction: 'Non. C\'est un trématode responsable d\'une schistosomose intestinale.' },
      { text: 'Strongyloides stercoralis', correct: false, correction: 'Non. C\'est l\'agent de l\'anguillulose, pas un ankylostome.' },
    ],
    explanation: 'Le support cite A. duodenale et N. americanus comme espèces classiques ; le CDC signale aussi A. ceylanicum comme espèce émergente dans certaines régions. (Cours, p. 7 ; CDC, DPDx Hookworm)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle forme de l\'ankylostome présente dans le sol infecte classiquement l\'humain par la peau ?',
    options: [
      { text: 'Le miracidium de Schistosoma', correct: false, correction: 'Non. Il infecte un mollusque dans un autre cycle.' },
      { text: 'La larve rhabditiforme de premier stade', correct: false, correction: 'Non. Elle poursuit sa maturation avant d\'être infectante.' },
      { text: 'L\'œuf fraîchement pondu dans les selles', correct: false, correction: 'Non. Il doit éclore et donner des larves dans le sol.' },
      { text: 'La larve filariforme de troisième stade', correct: true, correction: 'Oui. Elle se développe dans le sol puis traverse souvent la peau des pieds.' },
      { text: 'Le ver adulte intestinal libre sur le sable', correct: false, correction: 'Non. Les adultes vivent chez l\'hôte, accrochés à l\'intestin.' },
    ],
    explanation: 'Le support parle de larve strongyloïde enkystée ; la terminologie parasitologique usuelle est larve filariforme L3 infectante. (Cours, p. 8 ; CDC, DPDx Hookworm)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quelles étapes appartiennent au cycle classique de l\'ankylostomose ?',
    options: [
      { text: 'Les larves évoluent dans le sol jusqu\'au stade filariforme infectant', correct: true, correction: 'Oui. La larve rhabditiforme initiale n\'est pas le stade cutané infectant.' },
      { text: 'Un mollusque aquatique est toujours l\'hôte intermédiaire', correct: false, correction: 'Non. C\'est le schistosome qui nécessite un mollusque.' },
      { text: 'Après pénétration cutanée, les larves peuvent migrer par les poumons avant l\'intestin', correct: true, correction: 'Oui. La migration explique des signes respiratoires transitoires.' },
      { text: 'Les adultes humains restent exclusivement dans la couche cornée', correct: false, correction: 'Non. Ils vivent dans l\'intestin grêle.' },
      { text: 'Des œufs sont éliminés dans les selles humaines', correct: true, correction: 'Oui. Ils contaminent le sol en l\'absence d\'assainissement.' },
    ],
    explanation: 'Œufs fécaux, maturation larvaire dans le sol, pénétration cutanée, migration pulmonaire et adultes intestinaux structurent le cycle. (Cours, p. 8 ; CDC, DPDx Hookworm)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Où les ankylostomes humains adultes provoquent-ils principalement leur effet hématophage ?',
    options: [
      { text: 'À l\'intérieur des mollusques comme stade adulte humain', correct: false, correction: 'Non. L\'ankylostome humain n\'exige pas de mollusque.' },
      { text: 'Sur la muqueuse de l\'intestin grêle', correct: true, correction: 'Oui. Ils s\'y fixent et provoquent des pertes sanguines chroniques.' },
      { text: 'Dans la circulation sanguine comme protozoaire libre', correct: false, correction: 'Non. Il s\'agit d\'un nématode intestinal.' },
      { text: 'Dans le cuir chevelu seulement', correct: false, correction: 'Non. Ce n\'est pas leur localisation adulte.' },
      { text: 'Dans les plexus veineux de la vessie', correct: false, correction: 'Non. Cette localisation évoque S. haematobium.' },
    ],
    explanation: 'Les adultes d\'ankylostomes se fixent à la paroi du grêle et se nourrissent de sang. (Cours, p. 7–9)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles manifestations sont possibles au cours d\'une ankylostomose humaine ?',
    options: [
      { text: 'Une dermite prurigineuse au point d\'entrée', correct: true, correction: 'Oui. Elle peut suivre la pénétration larvaire.' },
      { text: 'Une irritation respiratoire transitoire durant la migration', correct: true, correction: 'Oui. Les larves peuvent passer par le poumon.' },
      { text: 'Une duodénite ou des douleurs digestives', correct: true, correction: 'Oui. Les adultes sont fixés à la muqueuse intestinale.' },
      { text: 'Une anémie ferriprive d\'installation progressive', correct: true, correction: 'Oui. Les pertes sanguines chroniques appauvrissent les réserves en fer.' },
      { text: 'Une hématurie obligatoire avec œufs à éperon terminal', correct: false, correction: 'Non. Ce signe et cet œuf orientent vers S. haematobium.' },
    ],
    explanation: 'Le tableau peut passer d\'une dermite d\'inoculation à des signes respiratoires, puis digestifs et hématologiques. (Cours, p. 8–9 ; CDC, DPDx Hookworm)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quel mécanisme explique l\'anémie microcytaire d\'une ankylostomose chronique ?',
    options: [
      { text: 'Une hémorragie cérébrale systématique', correct: false, correction: 'Non. Ce n\'est pas le mécanisme de l\'anémie habituelle.' },
      { text: 'Une absence complète de production médullaire due au mollusque', correct: false, correction: 'Non. Il n\'y a pas de mollusque dans le cycle de l\'ankylostome humain.' },
      { text: 'La présence d\'œufs dans la vessie', correct: false, correction: 'Non. Cette localisation correspond plutôt à une schistosomose urogénitale.' },
      { text: 'La spoliation sanguine par les vers adultes fixés à l\'intestin', correct: true, correction: 'Oui. La perte de fer est progressive et peut être longtemps peu symptomatique.' },
      { text: 'Une destruction immunologique obligatoire de toutes les hématies dès l\'entrée cutanée', correct: false, correction: 'Non. L\'anémie décrite résulte surtout de pertes sanguines intestinales.' },
    ],
    explanation: 'Le parasite adulte se nourrit de sang au niveau intestinal ; les pertes répétées peuvent entraîner une carence martiale. (Cours, p. 8–9 ; CDC, About Hookworm)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quels examens sont les plus directement utiles dans une ankylostomose classique du cours ?',
    options: [
      { text: 'Un examen parasitologique des selles pour rechercher les œufs', correct: true, correction: 'Oui. C\'est la méthode diagnostique principale.' },
      { text: 'Une numération sanguine pour objectiver une anémie', correct: true, correction: 'Oui. L\'anémie peut être microcytaire en cas de carence martiale.' },
      { text: 'Une recherche d\'œufs à éperon terminal dans les urines comme test spécifique', correct: false, correction: 'Non. Elle viserait plutôt S. haematobium.' },
      { text: 'Une recherche de larves de Strongyloides à la place de tout examen d\'œufs', correct: false, correction: 'Non. Elle cible une autre parasitose.' },
      { text: 'Une sérologie d\'ankylostome obligatoirement décisive dans tous les cas', correct: false, correction: 'Non. Le cours la juge peu contributive pour l\'ankylostomose classique.' },
    ],
    explanation: 'L\'association selles et numération explore la présence des œufs et le retentissement anémique. (Cours, p. 8–9 ; CDC, DPDx Hookworm)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel médicament le cours cite-t-il pour traiter une ankylostomose intestinale ?',
    options: [
      { text: 'Le praziquantel comme seul traitement des ankylostomes', correct: false, correction: 'Non. Le praziquantel est surtout le traitement des schistosomes dans ce cours.' },
      { text: 'Un antihistaminique seul pour éliminer les vers adultes', correct: false, correction: 'Non. Il peut soulager un prurit mais ne traite pas l\'infection intestinale.' },
      { text: 'Une pénicilline seule', correct: false, correction: 'Non. Un antibiotique ne remplace pas un antihelminthique.' },
      { text: 'Aucun traitement puisque l\'anémie est toujours sans conséquence', correct: false, correction: 'Non. Les pertes sanguines peuvent être importantes et demandent une prise en charge.' },
      { text: 'L\'albendazole', correct: true, correction: 'Oui. Ce benzimidazolé est un traitement usuel des ankylostomes.' },
    ],
    explanation: 'Le support indique l\'albendazole ; le CDC répertorie aussi d\'autres antihelminthiques selon le contexte. (Cours, p. 9 ; CDC, Soil-transmitted Helminths Clinical Care)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles mesures ciblent la prévention des ankylostomoses dues aux larves du sol ?',
    options: [
      { text: 'Éviter uniquement les lacs en gardant les pieds nus sur le sol', correct: false, correction: 'Non. Le sol souillé, et non seulement l\'eau de baignade, porte les larves.' },
      { text: 'Porter des chaussures en zone à risque', correct: true, correction: 'Oui. Cela limite le contact des pieds avec les larves infectantes.' },
      { text: 'Lutter exclusivement contre des mollusques aquatiques', correct: false, correction: 'Non. Le cycle d\'ankylostome ne dépend pas d\'un mollusque.' },
      { text: 'Repérer et traiter les personnes infectées selon le contexte', correct: true, correction: 'Oui. Cela réduit le réservoir d\'œufs fécaux.' },
      { text: 'Améliorer l\'assainissement et éviter la contamination fécale du sol', correct: true, correction: 'Oui. Les œufs éliminés dans les selles doivent atteindre le sol pour poursuivre le cycle.' },
    ],
    explanation: 'Le QCM préventif du support mélange des mesures relatives à l\'eau avec celles du sol ; les chaussures et l\'assainissement sont les mesures directement pertinentes ici. (Cours, p. 8–9 ; CDC, About Hookworm)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Un œuf lisse sans éperon est retrouvé dans les selles d\'un enfant anémique. Quel diagnostic du cours est le plus cohérent ?',
    options: [
      { text: 'Une gale intestinale', correct: false, correction: 'Non. Sarcoptes ne produit pas des œufs d\'ankylostome dans les selles.' },
      { text: 'Une anguillulose démontrée par la morphologie de cet œuf', correct: false, correction: 'Non. Strongyloides est surtout détecté sous forme de larves dans les selles.' },
      { text: 'Une schistosomose à S. haematobium prouvée', correct: false, correction: 'Non. Son œuf typique porte un éperon terminal et est recherché dans les urines.' },
      { text: 'Une larva migrans cutanée avec adulte intestinal humain', correct: false, correction: 'Non. Chez l\'humain, cette larve animale n\'atteint pas l\'âge adulte.' },
      { text: 'Une ankylostomose', correct: true, correction: 'Oui. Les œufs d\'ankylostome sont recherchés dans les selles et l\'adulte peut entraîner une anémie.' },
    ],
    explanation: 'Le cas pédiatrique du support décrit un œuf d\'ankylostome sans éperon à l\'examen des selles. (Cours, p. 7–8)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles limites faut-il connaître lors du bilan d\'une ankylostomose ?',
    options: [
      { text: 'Une seule numération sanguine positive prouve une infestation active', correct: false, correction: 'Non. L\'anémie a de nombreuses causes.' },
      { text: 'La sérologie est l\'outil spécifique principal imposé par le cours', correct: false, correction: 'Non. Le cours privilégie la recherche d\'œufs dans les selles.' },
      { text: 'Un œuf d\'ankylostome suffit toujours à distinguer au microscope Ancylostoma de Necator', correct: false, correction: 'Non. Les œufs des deux genres classiques sont très semblables.' },
      { text: 'Un examen des selles trop précoce peut précéder la ponte des adultes', correct: true, correction: 'Oui. Le cycle larvaire doit atteindre l\'intestin avant l\'excrétion d\'œufs.' },
      { text: 'Une anémie microcytaire oriente vers une perte sanguine chronique mais n\'identifie pas seule le parasite', correct: true, correction: 'Oui. Il faut la confronter à l\'exposition et à l\'examen parasitologique.' },
    ],
    explanation: 'La microscopie des selles documente l\'infestation, tandis que la numération évalue son retentissement ; le délai et les autres causes d\'anémie comptent. (Cours, p. 8–9 ; CDC, DPDx Hookworm)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Un enfant de retour d\'une région tropicale présente un œuf d\'ankylostome dans les selles et une anémie ferriprive. Quelle cause relie les deux résultats ?',
    options: [
      { text: 'Une larva migrans cutanée devenue adulte dans le côlon humain', correct: false, correction: 'Non. Cette larve est en impasse parasitaire chez l\'humain.' },
      { text: 'Un moustique qui détruit les globules rouges après la piqûre', correct: false, correction: 'Non. Le cycle de l\'ankylostome est lié au sol et à la peau.' },
      { text: 'Les adultes hématophages fixés à l\'intestin grêle', correct: true, correction: 'Oui. Leur alimentation sanguine provoque une perte de fer chronique.' },
      { text: 'La ponte de S. haematobium dans la vessie', correct: false, correction: 'Non. Cela donnerait surtout une atteinte urogénitale et des œufs urinaires.' },
      { text: 'Une production d\'œufs de Strongyloides dans l\'urine', correct: false, correction: 'Non. Ce n\'est pas le mécanisme décrit.' },
    ],
    explanation: 'L\'hématophagie des ankylostomes adultes explique l\'anémie progressive illustrée dans le cours. (Cours, p. 7–9)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles différences entre ankylostomose humaine et schistosomose sont exactes ?',
    options: [
      { text: 'La recherche d\'œufs dans l\'urine est le test principal de Necator americanus', correct: false, correction: 'Non. Les œufs d\'ankylostome sont éliminés dans les selles.' },
      { text: 'L\'ankylostome adulte est intestinal alors que le schistosome adulte est vasculaire', correct: true, correction: 'Oui. Cette localisation explique des manifestations différentes.' },
      { text: 'Le schistosome infectant provient d\'une eau douce où vivent des mollusques hôtes intermédiaires', correct: true, correction: 'Oui. Les cercaires sont libérées par ces mollusques.' },
      { text: 'Les deux cycles exigent obligatoirement un crustacé marin', correct: false, correction: 'Non. Aucun des deux ne l\'exige ; seul le schistosome dépend d\'un mollusque aquatique.' },
      { text: 'L\'ankylostome infectant provient surtout d\'un sol contaminé par des selles', correct: true, correction: 'Oui. Ses larves infestantes se développent dans le sol.' },
    ],
    explanation: 'Les deux parasitoses traversent la peau, mais le milieu, l\'hôte intermédiaire et la localisation adulte diffèrent. (Cours, p. 3–9)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Pourquoi la larva migrans cutanée est-elle une impasse parasitaire chez l\'humain ?',
    options: [
      { text: 'La larve ne peut jamais pénétrer la peau humaine', correct: false, correction: 'Non. La pénétration cutanée déclenche précisément les lésions.' },
      { text: 'Les œufs deviennent des schistosomes dans les urines humaines', correct: false, correction: 'Non. Il s\'agit d\'ankylostomes animaux, pas de schistosomes.' },
      { text: 'Les ankylostomes animaux n\'y atteignent habituellement pas le stade adulte reproducteur', correct: true, correction: 'Oui. La larve migre superficiellement puis meurt sans cycle intestinal complet.' },
      { text: 'L\'infection est due à une bactérie du sable', correct: false, correction: 'Non. Elle est due à des larves d\'helminthes.' },
      { text: 'Le chien y est l\'hôte accidentel sans parasite adulte', correct: false, correction: 'Non. Le chien est l\'hôte définitif habituel des agents du cours.' },
    ],
    explanation: 'Chez le chien le cycle peut être complet ; chez l\'humain la larve d\'ankylostome animal reste au stade cutané. (Cours, p. 10–11 ; CDC, DPDx Hookworm)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles circonstances exposent à une larva migrans cutanée ?',
    options: [
      { text: 'La piqûre obligatoire d\'un moustique Anopheles', correct: false, correction: 'Non. Aucun moustique n\'intervient dans cette larva migrans.' },
      { text: 'S\'asseoir avec une peau découverte sur un sol sablonneux contaminé', correct: true, correction: 'Oui. La zone cutanée au contact du sol peut être atteinte.' },
      { text: 'Boire exclusivement de l\'eau embouteillée sans contact avec le sol', correct: false, correction: 'Non. Cette situation n\'expose pas à la voie cutanée décrite.' },
      { text: 'Marcher pieds nus sur du sable où des chiens ont déféqué', correct: true, correction: 'Oui. Les œufs animaux donnent des larves infestantes dans un milieu favorable.' },
      { text: 'Un contact direct de la peau avec des larves d\'ankylostomes animaux', correct: true, correction: 'Oui. La pénétration est transcutanée.' },
    ],
    explanation: 'Le cas de plage du support relie selles de chien, développement larvaire dans le sable puis contact cutané. (Cours, p. 10)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quel aspect cutané évoque le plus une larva migrans cutanée après un séjour tropical ?',
    options: [
      { text: 'Une adénopathie axillaire indolore comme signe obligatoire', correct: false, correction: 'Non. Le signe cardinal ici est le trajet cutané prurigineux.' },
      { text: 'Une hématurie isolée sans lésion cutanée', correct: false, correction: 'Non. Elle oriente plutôt vers une atteinte urinaire telle que S. haematobium.' },
      { text: 'Un bloc auriculo-ventriculaire isolé', correct: false, correction: 'Non. Ce n\'est pas un signe de larva migrans.' },
      { text: 'Un trajet serpigineux, érythémateux et très prurigineux', correct: true, correction: 'Oui. La progression superficielle de la larve dessine un trajet sinueux.' },
      { text: 'Une anémie microcytaire isolée avec œufs intestinaux', correct: false, correction: 'Non. Elle évoque plutôt une ankylostomose humaine.' },
    ],
    explanation: 'Le cordon serpigineux prurigineux sur une zone ayant touché le sol est le tableau caractéristique. (Cours, p. 10–11 ; CDC, Yellow Book, Dermatologic Conditions)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles propositions sur le devenir des larves chez l\'humain sont correctes ?',
    options: [
      { text: 'Elles restent généralement dans les couches cutanées superficielles', correct: true, correction: 'Oui. Elles ne réalisent pas le cycle intestinal adulte habituel de l\'ankylostome animal.' },
      { text: 'Elles finissent habituellement par mourir spontanément', correct: true, correction: 'Oui. Le syndrome peut être auto-limité, même si le traitement accélère la guérison.' },
      { text: 'Elles mûrissent systématiquement en adultes hématophages duodénaux humains', correct: false, correction: 'Non. Cette évolution décrit une ankylostomose humaine, pas le larbish typique.' },
      { text: 'Elles obligent à rechercher des œufs à éperon terminal dans l\'urine', correct: false, correction: 'Non. Ce test concerne S. haematobium.' },
      { text: 'Elles ne produisent pas d\'œufs d\'ankylostome dans les selles humaines', correct: true, correction: 'Oui. L\'humain constitue ici une impasse parasitaire.' },
    ],
    explanation: 'La larva migrans du cours correspond au passage superficiel de larves animales chez un hôte accidentel. (Cours, p. 10–11)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quel mode de diagnostic suffit habituellement devant un trajet serpigineux très prurigineux typique après exposition au sable ?',
    options: [
      { text: 'Une culture bactérienne des selles', correct: false, correction: 'Non. La lésion n\'est pas causée par une bactérie intestinale.' },
      { text: 'Une biopsie cutanée obligatoire chez tout patient', correct: false, correction: 'Non. Le parasite peut se déplacer et la biopsie n\'est pas nécessaire dans une forme typique.' },
      { text: 'Le diagnostic clinique fondé sur l\'aspect et l\'exposition', correct: true, correction: 'Oui. La présentation cutanée caractéristique rend les examens parasitologiques inutiles en routine.' },
      { text: 'Une sérologie Schistosoma comme test spécifique', correct: false, correction: 'Non. Elle viserait une autre parasitose.' },
      { text: 'La recherche d\'œufs d\'ankylostome animal dans les selles humaines', correct: false, correction: 'Non. Le cycle ne devient pas reproducteur chez l\'humain.' },
    ],
    explanation: 'Le support insiste sur le diagnostic clinique de la forme typique, sans biopsie ni recherche d\'œufs dans les selles. (Cours, p. 11)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles affirmations expliquent pourquoi les examens de selles et la biopsie ne sont pas systématiques dans une larva migrans cutanée typique ?',
    options: [
      { text: 'Une biopsie repère à coup sûr toute larve mobile', correct: false, correction: 'Non. Le prélèvement peut manquer la larve et n\'est pas requis en routine.' },
      { text: 'La sérologie Schistosoma est toujours positive et spécifique du larbish', correct: false, correction: 'Non. Ce test ne diagnostique pas une larva migrans cutanée.' },
      { text: 'L\'agent reste généralement au stade larvaire chez l\'humain', correct: true, correction: 'Oui. Il n\'y a pas de ponte intestinale humaine à documenter.' },
      { text: 'Le trajet serpigineux associé à l\'exposition est très évocateur', correct: true, correction: 'Oui. L\'aspect clinique guide le diagnostic.' },
      { text: 'Une culture d\'urine fournit toujours le parasite', correct: false, correction: 'Non. Cette atteinte est cutanée superficielle.' },
    ],
    explanation: 'La combinaison clinique et épidémiologique est habituellement suffisante ; l\'impasse parasitaire explique l\'absence d\'œufs fécaux. (Cours, p. 10–11)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Que peut-il arriver à une larva migrans cutanée non traitée chez un patient immunocompétent ?',
    options: [
      { text: 'Elle peut disparaître spontanément lorsque la larve meurt', correct: true, correction: 'Oui. L\'affection est souvent auto-limitée, même si elle peut être très prurigineuse.' },
      { text: 'Elle provoque obligatoirement une anémie par adultes duodénaux', correct: false, correction: 'Non. Chez l\'humain, l\'ankylostome animal n\'atteint généralement pas ce stade.' },
      { text: 'Elle se transforme nécessairement en schistosomose hépatique', correct: false, correction: 'Non. Les agents parasitaires sont différents.' },
      { text: 'Elle ne donne jamais aucun prurit', correct: false, correction: 'Non. Le prurit est souvent marqué.' },
      { text: 'Elle impose toujours une chirurgie de la vessie', correct: false, correction: 'Non. Elle n\'a pas ce tropisme.' },
    ],
    explanation: 'La larve finit par mourir ; un traitement peut néanmoins réduire la durée et les symptômes. (Cours, p. 10–11 ; CDC, Yellow Book, Dermatologic Conditions)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles propositions sur la prise en charge d\'une larva migrans cutanée sont exactes ?',
    options: [
      { text: 'Le praziquantel est le seul médicament actif', correct: false, correction: 'Non. Il est surtout utilisé contre les schistosomes dans ce cours.' },
      { text: 'L\'albendazole peut être utilisé selon le contexte', correct: true, correction: 'Oui. Il est également actif sur les larves responsables.' },
      { text: 'Un traitement symptomatique du prurit peut être utile', correct: true, correction: 'Oui. Le cours cite notamment les antihistaminiques.' },
      { text: 'L\'antiparasitaire est obligatoire dans toutes les formes, sans aucune exception', correct: false, correction: 'Non. Une disparition spontanée est possible ; la décision dépend du tableau.' },
      { text: 'L\'ivermectine peut accélérer l\'élimination de la larve', correct: true, correction: 'Oui. C\'est une option antiparasitaire efficace.' },
    ],
    explanation: 'Le cours cite une guérison spontanée possible et l\'ivermectine ou l\'albendazole pour accélérer la guérison, avec soulagement du prurit. (Cours, p. 11 ; CDC, Yellow Book, Dermatologic Conditions)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Après un séjour sur une plage où errent des chiens, une personne a une ligne cutanée sinueuse très prurigineuse sur la plante du pied. Quelle hypothèse privilégier ?',
    options: [
      { text: 'Une ankylostomose prouvée par adulte visible dans la peau', correct: false, correction: 'Non. La forme humaine classique aboutit à des adultes intestinaux ; ici le trajet évoque une larve animale.' },
      { text: 'Une larva migrans cutanée', correct: true, correction: 'Oui. L\'exposition au sable souillé et le trajet serpigineux sont caractéristiques.' },
      { text: 'Une gale exclusivement intestinale', correct: false, correction: 'Non. La gale n\'est pas une helminthose intestinale.' },
      { text: 'Une schistosomose urogénitale', correct: false, correction: 'Non. Elle demande surtout une exposition à de l\'eau douce infestée et donne d\'autres signes.' },
      { text: 'Une fièvre Q', correct: false, correction: 'Non. C\'est une zoonose bactérienne respiratoire sans ce trajet cutané typique.' },
    ],
    explanation: 'La présentation combine localisation en contact avec le sable, prurit et trajet serpigineux. (Cours, p. 10–11)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles mesures réduisent le risque de larva migrans cutanée en zone tropicale ?',
    options: [
      { text: 'Utiliser une barrière entre la peau et un sol suspect lorsqu\'on s\'assoit', correct: true, correction: 'Oui. Le contact des fesses ou des jambes avec le sable peut inoculer des larves.' },
      { text: 'Compter sur une vaccination humaine anti-larbish pour remplacer toute protection', correct: false, correction: 'Non. Aucun vaccin de ce type n\'est présenté.' },
      { text: 'Limiter la contamination des lieux par les déjections canines', correct: true, correction: 'Oui. Le cycle animal commence avec des œufs excrétés par les hôtes définitifs.' },
      { text: 'Chercher exclusivement des mollusques d\'eau douce sur la plage', correct: false, correction: 'Non. Ils interviennent dans les schistosomoses, non dans ce cycle de sable.' },
      { text: 'Éviter de marcher pieds nus sur un sable possiblement souillé', correct: true, correction: 'Oui. Cela réduit le contact de la peau avec les larves.' },
    ],
    explanation: 'La prévention cible le contact cutané avec un sol ou un sable contaminé par des animaux. (Cours, p. 10–11)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Pourquoi un examen de selles normal ne réfute-t-il pas une larva migrans cutanée typique ?',
    options: [
      { text: 'L\'examen des selles n\'est jamais utile dans aucune parasitose', correct: false, correction: 'Non. Il est central pour l\'ankylostomose humaine et d\'autres infections.' },
      { text: 'La larve d\'ankylostome animal ne mûrit pas et ne pond pas dans l\'intestin humain', correct: true, correction: 'Oui. L\'humain est une impasse parasitaire dans cette forme.' },
      { text: 'Un œuf à éperon latéral serait nécessaire pour confirmer le larbish', correct: false, correction: 'Non. Cet œuf est celui de S. mansoni.' },
      { text: 'La larve se transforme en bactérie avant le prélèvement', correct: false, correction: 'Non. Elle reste un helminthe.' },
      { text: 'Tous les œufs sont excrétés exclusivement dans l\'urine', correct: false, correction: 'Non. La larva migrans ne produit pas d\'œufs humains urinaires non plus.' },
    ],
    explanation: 'L\'impasse parasitaire humaine explique l\'absence d\'œufs d\'ankylostome animal dans les selles. (Cours, p. 10–11)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles comparaisons entre larva migrans cutanée et ankylostomose humaine sont correctes ?',
    options: [
      { text: 'L\'ankylostomose humaine peut provoquer une anémie par adultes intestinaux', correct: true, correction: 'Oui. Les adultes hématophages se fixent au grêle.' },
      { text: 'Les deux impliquent des larves capables de pénétrer la peau', correct: true, correction: 'Oui. Mais leur devenir chez l\'humain diffère.' },
      { text: 'La larva migrans cutanée reste généralement superficielle chez un hôte accidentel', correct: true, correction: 'Oui. La larve animale ne réalise pas son cycle adulte habituel.' },
      { text: 'Les deux se confirment systématiquement par des œufs dans l\'urine', correct: false, correction: 'Non. L\'urine vise surtout certaines schistosomoses.' },
      { text: 'Les deux exigent des mollusques d\'eau douce comme intermédiaires', correct: false, correction: 'Non. Ce rôle concerne les schistosomes.' },
    ],
    explanation: 'Même porte d\'entrée, mais impasse cutanée pour l\'ankylostome animal contre cycle intestinal pour l\'ankylostome humain. (Cours, p. 7–11)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quel parasite est responsable de l\'anguillulose ou strongyloïdose du cours ?',
    options: [
      { text: 'Schistosoma mansoni', correct: false, correction: 'Non. Il cause une schistosomose intestinale.' },
      { text: 'Sarcoptes scabiei', correct: false, correction: 'Non. Il est responsable de la gale.' },
      { text: 'Strongyloides stercoralis', correct: true, correction: 'Oui. Ce nématode peut persister par auto-infestation.' },
      { text: 'Ancylostoma duodenale', correct: false, correction: 'Non. Il est un ankylostome humain, distinct de Strongyloides.' },
      { text: 'Plasmodium falciparum', correct: false, correction: 'Non. Il est responsable d\'un paludisme, transmis par moustique.' },
    ],
    explanation: 'L\'anguillulose est une helminthose intestinale due au nématode S. stercoralis. (Cours, p. 12, 16)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles étapes appartiennent au cycle habituel de Strongyloides stercoralis ?',
    options: [
      { text: 'Des larves, plutôt que des œufs, sont habituellement recherchées dans les selles', correct: true, correction: 'Oui. Les œufs éclosent rapidement dans la muqueuse intestinale.' },
      { text: 'Une femelle parthénogénétique se développe dans l\'intestin', correct: true, correction: 'Oui. Elle peut produire des œufs sans fécondation.' },
      { text: 'Des larves infestantes pénètrent la peau', correct: true, correction: 'Oui. Le sol contaminé est une source classique.' },
      { text: 'Une migration peut passer par les poumons avant l\'intestin', correct: true, correction: 'Oui. Elle peut entraîner toux ou manifestations respiratoires.' },
      { text: 'Un mollusque est indispensable à chaque génération', correct: false, correction: 'Non. Strongyloides ne suit pas le cycle des schistosomes.' },
    ],
    explanation: 'Le support décrit pénétration cutanée, migration pulmonaire, femelles intestinales et larves excrétées. (Cours, p. 12–13, 15)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quelle forme parasitaire recherche-t-on surtout dans les selles pour documenter une anguillulose ?',
    options: [
      { text: 'Des acariens de gale dans toute selle', correct: false, correction: 'Non. La gale est cutanée.' },
      { text: 'Des œufs d\'ankylostome comme preuve spécifique de Strongyloides', correct: false, correction: 'Non. Ils démontreraient plutôt une ankylostomose.' },
      { text: 'Des œufs de Schistosoma à éperon terminal', correct: false, correction: 'Non. Ils sont associés surtout aux urines dans S. haematobium.' },
      { text: 'Des larves de Strongyloides', correct: true, correction: 'Oui. Elles peuvent être récupérées par des techniques adaptées comme Baermann.' },
      { text: 'Des adultes de Strongyloides toujours visibles à l\'œil nu', correct: false, correction: 'Non. La recherche habituelle porte sur des larves microscopiques.' },
    ],
    explanation: 'Le cours montre des larves mobiles dans les selles et cite la méthode de Baermann. (Cours, p. 12, 15–16)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles propositions sur les cycles de Strongyloides sont justes ?',
    options: [
      { text: 'Le parasite doit obligatoirement passer par un mollusque entre deux générations', correct: false, correction: 'Non. Le mollusque appartient au cycle schistosomien.' },
      { text: 'Un cycle interne d\'auto-infestation peut entretenir l\'infection sans nouvelle exposition extérieure', correct: true, correction: 'Oui. Des larves deviennent infectantes et repénètrent l\'hôte.' },
      { text: 'Un cycle externe sexué peut comporter des adultes libres mâles et femelles', correct: true, correction: 'Oui. Cette génération libre apparaît dans des conditions environnementales favorables.' },
      { text: 'Un cycle externe direct peut produire des larves infestantes sans génération sexuée libre', correct: true, correction: 'Oui. Il raccourcit le parcours dans le milieu extérieur.' },
      { text: 'Toute larve éliminée dans les selles est immédiatement un schistosome', correct: false, correction: 'Non. Les larves de Strongyloides gardent leur identité parasitaire.' },
    ],
    explanation: 'Le support distingue les voies externes longue et courte et surtout l\'auto-infestation interne. (Cours, p. 13–14)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Que signifie la parthénogenèse de la femelle Strongyloides dans l\'intestin humain ?',
    options: [
      { text: 'Elle exclut toute persistance de l\'infection', correct: false, correction: 'Non. L\'auto-infestation permet au contraire une longue persistance.' },
      { text: 'Elle produit des œufs sans fécondation par un mâle parasitaire', correct: true, correction: 'Oui. Les œufs éclosent rapidement et donnent des larves.' },
      { text: 'Elle produit uniquement des cercaires aquatiques', correct: false, correction: 'Non. Les cercaires appartiennent au cycle de Schistosoma.' },
      { text: 'Elle a besoin d\'un mollusque mâle dans la vessie', correct: false, correction: 'Non. Le mollusque appartient au cycle des schistosomes.' },
      { text: 'Elle transforme la femelle en bactérie', correct: false, correction: 'Non. Le parasite reste un nématode.' },
    ],
    explanation: 'Chez l\'humain, les femelles parasitaires de S. stercoralis peuvent se reproduire par parthénogenèse. (Cours, p. 13, 16 ; CDC, DPDx Strongyloidiasis)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles conséquences du cycle d\'auto-infestation de Strongyloides sont exactes ?',
    options: [
      { text: 'Le cycle exige un nouveau voyage tropical tous les mois', correct: false, correction: 'Non. La persistance endogène rend ce voyage inutile.' },
      { text: 'Une immunodépression peut accélérer l\'auto-infestation et entraîner une hyperinfection', correct: true, correction: 'Oui. Le risque augmente particulièrement avec les corticoïdes.' },
      { text: 'L\'infection peut persister pendant des années après le départ d\'une zone d\'endémie', correct: true, correction: 'Oui. Aucune nouvelle exposition n\'est nécessaire à chaque génération.' },
      { text: 'Des larves peuvent redevenir infestantes à l\'intérieur du même hôte', correct: true, correction: 'Oui. Elles peuvent traverser la muqueuse intestinale ou la peau périanale.' },
      { text: 'L\'auto-infestation prouve que les larves deviennent des schistosomes', correct: false, correction: 'Non. Il s\'agit toujours de Strongyloides.' },
    ],
    explanation: 'L\'auto-infestation explique la chronicité et l\'emballement possible sous immunosuppression. (Cours, p. 13–16 ; CDC, DPDx Strongyloidiasis)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Un patient avec ancienne exposition tropicale décrit des traînées cutanées récurrentes, rapidement mobiles, après corticothérapie. Quel phénomène évoquer ?',
    options: [
      { text: 'Une preuve que les corticoïdes guérissent l\'anguillulose', correct: false, correction: 'Non. Ils peuvent au contraire favoriser l\'hyperinfection.' },
      { text: 'Une larva currens liée à l\'auto-infestation par Strongyloides', correct: true, correction: 'Oui. Les larves peuvent migrer rapidement sous la peau, notamment près du périnée ou des fesses.' },
      { text: 'Une schistosomose démontrée uniquement par ce trajet', correct: false, correction: 'Non. Le signe ne suffit pas et le contexte évoque davantage Strongyloides.' },
      { text: 'Une transformation obligatoire du larbish en bactérie', correct: false, correction: 'Non. Aucune telle transformation n\'existe.' },
      { text: 'Un ankylostome humain adulte visible dans l\'épiderme', correct: false, correction: 'Non. L\'adulte de l\'ankylostomose classique vit dans l\'intestin.' },
    ],
    explanation: 'Le cas du support décrit des cordons rouges après corticoïdes ; le CDC nomme larva currens les trajets rapides dus à l\'auto-infestation. (Cours, p. 12, 14 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles affirmations sur l\'éosinophilie dans l\'anguillulose sont prudentes ?',
    options: [
      { text: 'Elle remplace à elle seule la recherche parasitologique et la sérologie', correct: false, correction: 'Non. Il faut articuler exposition, clinique et examens spécifiques.' },
      { text: 'Sa présence peut orienter la recherche de Strongyloides chez une personne exposée', correct: true, correction: 'Oui. Elle fait partie des arguments biologiques, sans être spécifique.' },
      { text: 'Elle est un test spécifique et toujours positif dès le premier jour', correct: false, correction: 'Non. La numération ne démontre pas l\'espèce et varie selon le contexte.' },
      { text: 'Elle peut fluctuer avec les migrations larvaires', correct: true, correction: 'Oui. Le support l\'illustre par une courbe « en dents de scie ».' },
      { text: 'Son absence n\'exclut pas une hyperinfection grave', correct: true, correction: 'Oui. Elle peut manquer, notamment dans les formes sévères sous immunosuppression.' },
    ],
    explanation: 'Le cours décrit une éosinophilie ondulante ; le CDC souligne son caractère variable et son absence fréquente dans l\'hyperinfection. (Cours, p. 12–15 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel syndrome respiratoire transitoire peut accompagner la migration pulmonaire des larves de Strongyloides ?',
    options: [
      { text: 'Une anémie par crochets duodénaux comme signe exclusivement respiratoire', correct: false, correction: 'Non. Cette anémie relève de l\'ankylostomose intestinale.' },
      { text: 'Une cystite à œufs terminaux', correct: false, correction: 'Non. Elle évoque une schistosomose urogénitale.' },
      { text: 'Une hypertension portale obligatoire dès l\'inoculation', correct: false, correction: 'Non. Ce n\'est pas la manifestation pulmonaire décrite.' },
      { text: 'Le syndrome de Löffler', correct: true, correction: 'Oui. Il associe une réaction pulmonaire avec opacités fugaces lors d\'une migration larvaire.' },
      { text: 'Une peste pulmonaire à Yersinia pestis', correct: false, correction: 'Non. C\'est une infection bactérienne distincte.' },
    ],
    explanation: 'La migration de larves peut donner un syndrome de Löffler avec infiltrats transitoires. (Cours, p. 14)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles manifestations peuvent se voir dans une anguillulose chronique ?',
    options: [
      { text: 'Une absence de symptômes pendant longtemps', correct: true, correction: 'Oui. L\'auto-infestation peut entretenir une infection silencieuse.' },
      { text: 'Une hématurie à œufs de S. haematobium comme signe obligatoire', correct: false, correction: 'Non. Elle correspond à une autre parasitose.' },
      { text: 'Une éosinophilie parfois observée', correct: true, correction: 'Oui. Elle est fréquente mais non constante.' },
      { text: 'Des manifestations cutanées récurrentes', correct: true, correction: 'Oui. Une urticaire ou une larva currens est possible.' },
      { text: 'Des troubles digestifs intermittents', correct: true, correction: 'Oui. L\'atteinte intestinale peut provoquer douleurs ou diarrhée.' },
    ],
    explanation: 'L\'anguillulose chronique est souvent silencieuse ; signes digestifs, cutanés et éosinophilie sont variables. (Cours, p. 12–16 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel traitement du terrain peut déclencher une hyperinfection chez une personne porteuse de Strongyloides ?',
    options: [
      { text: 'Le port de chaussures fermées', correct: false, correction: 'Non. Il réduit plutôt le risque d\'une nouvelle contamination cutanée.' },
      { text: 'Le traitement par ivermectine adapté', correct: false, correction: 'Non. C\'est un traitement de l\'anguillulose, pas un facteur déclenchant.' },
      { text: 'La recherche de larves par Baermann', correct: false, correction: 'Non. Il s\'agit d\'une méthode diagnostique.' },
      { text: 'L\'assainissement du sol', correct: false, correction: 'Non. Il réduit l\'exposition environnementale.' },
      { text: 'Une corticothérapie immunosuppressive', correct: true, correction: 'Oui. Elle peut accélérer fortement l\'auto-infestation.' },
    ],
    explanation: 'Le cas du support et le CDC relient particulièrement corticothérapie et emballement du cycle d\'auto-infestation. (Cours, p. 12, 14–15 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quels contextes doivent faire rechercher une anguillulose avant ou pendant une immunosuppression ?',
    options: [
      { text: 'Un séjour ancien dans une zone d\'endémie, même sans symptôme actuel', correct: true, correction: 'Oui. L\'infection peut persister par auto-infestation.' },
      { text: 'Une infection par HTLV-1 protège des formes sévères', correct: false, correction: 'Non. HTLV-1 est au contraire associé à un risque accru de strongyloïdose grave.' },
      { text: 'Une corticothérapie importante prévue', correct: true, correction: 'Oui. Le risque d\'hyperinfection rend le dépistage particulièrement important.' },
      { text: 'La certitude qu\'une unique selle négative élimine toujours Strongyloides', correct: false, correction: 'Non. L\'excrétion larvaire peut être faible ou intermittente.' },
      { text: 'L\'absence de toute exposition tropicale comme preuve automatique d\'infection', correct: false, correction: 'Non. L\'exposition reste un élément essentiel du risque.' },
    ],
    explanation: 'Un antécédent d\'exposition, les corticoïdes et HTLV-1 modifient la stratégie de dépistage avant immunosuppression. (Cours, p. 14–16 ; CDC, Strongyloides Clinical Care)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Une personne sous corticoïdes développe diarrhée, détresse respiratoire et bactériémie à bacille Gram négatif après une exposition tropicale ancienne. Quelle complication du cours évoquer ?',
    options: [
      { text: 'Une simple larva migrans cutanée sans autre organe atteint', correct: false, correction: 'Non. Elle n\'explique pas bien l\'association respiratoire, digestive et septicémique.' },
      { text: 'Une hyperinfection ou une anguillulose disséminée', correct: true, correction: 'Oui. L\'auto-infestation accélérée peut atteindre poumons et intestin et entraîner une septicémie.' },
      { text: 'Une ankylostomose bénigne prouvée par ce seul tableau', correct: false, correction: 'Non. Le risque sous corticoïdes évoque particulièrement Strongyloides.' },
      { text: 'Une allergie alimentaire certaine', correct: false, correction: 'Non. Elle ne rend pas compte de l\'ensemble des signes ni de la bactériémie.' },
      { text: 'Une schistosomose vésicale démontrée sans examen urinaire', correct: false, correction: 'Non. Le tableau ne prouve pas cette infection.' },
    ],
    explanation: 'Le support décrit une forme maligne digestive, respiratoire et parfois neurologique, avec infections bactériennes associées. (Cours, p. 14 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles affirmations sur les formes graves de strongyloïdose sont justes ?',
    options: [
      { text: 'La dissémination peut toucher des organes hors du trajet intestinal et pulmonaire usuel', correct: true, correction: 'Oui. Des larves gagnent alors des sites inhabituels.' },
      { text: 'Une éosinophilie très élevée est indispensable pour reconnaître toute forme grave', correct: false, correction: 'Non. Elle peut être absente dans l\'hyperinfection.' },
      { text: 'Des bactéries intestinales peuvent être entraînées par les larves', correct: true, correction: 'Oui. Cela contribue aux bactériémies et méningites à Gram négatif.' },
      { text: 'Une forme grave ne survient jamais sous corticoïdes', correct: false, correction: 'Non. La corticothérapie est un facteur de risque majeur.' },
      { text: 'L\'hyperinfection correspond à un emballement de l\'auto-infestation', correct: true, correction: 'Oui. La charge larvaire augmente fortement dans le cycle habituel.' },
    ],
    explanation: 'La distinction entre hyperinfection et dissémination évite de réduire la gravité aux seules lésions cutanées. (Cours, p. 14 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Avant une corticothérapie prolongée chez une personne ayant vécu en zone d\'endémie, quelle démarche est la plus juste ?',
    options: [
      { text: 'Ignorer l\'exposition si le voyage date de plusieurs années', correct: false, correction: 'Non. L\'auto-infestation permet une infection très prolongée.' },
      { text: 'Évaluer le risque de Strongyloides et organiser dépistage ou traitement adapté selon l\'urgence et le contexte', correct: true, correction: 'Oui. Le risque d\'hyperinfection justifie une démarche active et individualisée.' },
      { text: 'Attendre systématiquement les premiers signes de méningite', correct: false, correction: 'Non. La prévention doit précéder une éventuelle forme sévère.' },
      { text: 'Prescrire toujours le même antiparasitaire sans considérer les contre-indications', correct: false, correction: 'Non. Le choix dépend notamment du terrain et d\'éventuelles co-infections.' },
      { text: 'Se fier uniquement à l\'absence d\'éosinophilie', correct: false, correction: 'Non. Cette absence ne suffit pas à exclure l\'infection.' },
    ],
    explanation: 'Le support formule un traitement préventif très large ; les recommandations actuelles imposent surtout d\'identifier les personnes exposées avant immunosuppression, puis d\'adapter dépistage et traitement. (Cours, p. 15 ; CDC, Strongyloides Clinical Care)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quels examens ou principes aident au diagnostic d\'une anguillulose ?',
    options: [
      { text: 'Recherche répétée de larves dans les selles avec méthode adaptée', correct: true, correction: 'Oui. Une selle isolée a une sensibilité limitée.' },
      { text: 'Une recherche d\'œufs urinaires à éperon terminal comme test spécifique', correct: false, correction: 'Non. Elle vise plutôt S. haematobium.' },
      { text: 'Technique de concentration de Baermann', correct: true, correction: 'Oui. Elle améliore la récupération de larves vivantes.' },
      { text: 'Une selle négative unique exclut définitivement l\'infection', correct: false, correction: 'Non. La faible excrétion larvaire rend cette conclusion dangereuse.' },
      { text: 'Sérologie interprétée avec l\'exposition et ses limites', correct: true, correction: 'Oui. Elle peut aider lorsque les larves ne sont pas vues.' },
    ],
    explanation: 'Le support cite selles, Baermann et sérologie ; le CDC souligne la faible sensibilité d\'un seul examen fécal. (Cours, p. 15–16 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quel principe exploite la méthode de Baermann mentionnée dans le support ?',
    options: [
      { text: 'La coloration des mollusques d\'eau douce dans le sang', correct: false, correction: 'Non. Elle s\'applique aux prélèvements de selles, pas aux mollusques.' },
      { text: 'L\'attraction des œufs de schistosome par un aimant', correct: false, correction: 'Non. Les œufs ne sont pas isolés par magnétisme.' },
      { text: 'La détection directe d\'adultes de Strongyloides à l\'œil nu', correct: false, correction: 'Non. La méthode cible des larves microscopiques.' },
      { text: 'La culture de bactéries urinaires sur gélose', correct: false, correction: 'Non. Ce n\'est pas l\'objet de cette méthode parasitologique.' },
      { text: 'La mobilité des larves qui migrent hors des selles vers un milieu aqueux', correct: true, correction: 'Oui. On récupère et concentre ainsi des larves pour la microscopie.' },
    ],
    explanation: 'Baermann utilise la migration de larves vivantes vers l\'eau, puis leur collecte pour observation. (Cours, p. 15 ; CDC, DPDx Strongyloidiasis)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles propositions thérapeutiques concernant Strongyloides sont exactes ?',
    options: [
      { text: 'L\'albendazole est une alternative possible selon les situations', correct: true, correction: 'Oui. Il est moins privilégié mais reste une option citée.' },
      { text: 'Le praziquantel seul est le traitement spécifique habituel', correct: false, correction: 'Non. Il est utilisé surtout contre les schistosomes dans ce cours.' },
      { text: 'Une dose unique suffit toujours à une forme disséminée grave', correct: false, correction: 'Non. Les formes graves demandent un traitement prolongé et un suivi.' },
      { text: 'Une hyperinfection requiert une prise en charge plus longue qu\'une infection chronique simple', correct: true, correction: 'Oui. Le traitement se poursuit jusqu\'à contrôle parasitologique adapté.' },
      { text: 'L\'ivermectine est le traitement de première intention de l\'infection chronique dans les recommandations CDC', correct: true, correction: 'Oui. La durée varie selon la forme et le contexte.' },
    ],
    explanation: 'Le cours cite l\'ivermectine et l\'albendazole ; le CDC distingue traitement court des formes simples et prolongé des hyperinfections. (Cours, p. 15–16 ; CDC, Strongyloides Clinical Care)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Pourquoi un examen parasitologique des selles négatif une seule fois ne suffit-il pas à exclure Strongyloides ?',
    options: [
      { text: 'Le parasite ne donne jamais de larve dans les selles', correct: false, correction: 'Non. Les larves sont précisément la cible de l\'examen.' },
      { text: 'Un test négatif prouve que la sérologie est toujours fausse', correct: false, correction: 'Non. Les méthodes apportent des informations complémentaires.' },
      { text: 'La numération des éosinophiles remplace avec certitude tout examen', correct: false, correction: 'Non. Elle est non spécifique et peut être normale.' },
      { text: 'L\'excrétion de larves peut être peu abondante ou intermittente', correct: true, correction: 'Oui. Des examens répétés ou spécialisés augmentent la sensibilité.' },
      { text: 'Les selles contiennent uniquement des cercaires de Schistosoma', correct: false, correction: 'Non. Ces cercaires se trouvent dans l\'eau avant l\'infection humaine.' },
    ],
    explanation: 'La sensibilité d\'un prélèvement fécal ordinaire est limitée dans la strongyloïdose chronique, d\'où l\'intérêt de répétitions, méthodes spécialisées ou sérologie. (Cours, p. 15–16 ; CDC, Strongyloides Clinical Overview)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles mesures participent à la prévention de l\'anguillulose et de ses formes graves ?',
    options: [
      { text: 'Contrôler uniquement les mollusques aquatiques pour interrompre le cycle de Strongyloides', correct: false, correction: 'Non. Son cycle externe dépend du sol souillé, pas d\'un mollusque.' },
      { text: 'Rechercher le risque de Strongyloides avant une immunosuppression chez les personnes exposées', correct: true, correction: 'Oui. Cela permet d\'éviter certaines hyperinfections.' },
      { text: 'Traiter par corticoïdes la strongyloïdose chronique comme antiparasitaire', correct: false, correction: 'Non. Ils peuvent favoriser une forme grave.' },
      { text: 'Porter des chaussures sur un sol potentiellement contaminé', correct: true, correction: 'Oui. Cela limite la pénétration cutanée de larves infectantes.' },
      { text: 'Considérer qu\'un séjour tropical ancien ne compte jamais', correct: false, correction: 'Non. L\'auto-infestation peut entretenir le parasite pendant des décennies.' },
    ],
    explanation: 'La prévention combine réduction de l\'exposition au sol et anticipation du risque avant corticoïdes. (Cours, p. 15–16 ; CDC, Strongyloides Clinical Care)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quel prélèvement est le mieux ciblé pour rechercher directement S. mansoni en phase d\'état ?',
    options: [
      { text: 'La salive, avec recherche d\'œufs à éperon terminal', correct: false, correction: 'Non. L\'éperon terminal évoque S. haematobium et un prélèvement urinaire.' },
      { text: 'Les urines, avec recherche de larves de Strongyloides', correct: false, correction: 'Non. Strongyloides est recherché surtout dans les selles et n\'est pas S. mansoni.' },
      { text: 'Le sang, avec recherche d\'œufs d\'ankylostome', correct: false, correction: 'Non. Ces œufs sont excrétés dans les selles.' },
      { text: 'Les selles, avec recherche d\'œufs à éperon latéral', correct: true, correction: 'Oui. S. mansoni est la forme intestinale mise en avant dans le cours.' },
      { text: 'La peau, avec culture de mollusques', correct: false, correction: 'Non. Ce n\'est pas le prélèvement direct humain de référence.' },
    ],
    explanation: 'La localisation intestinale de S. mansoni guide vers l\'examen des selles, avec reconnaissance morphologique des œufs. (Cours, p. 4–6)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles associations entre parasitose et approche diagnostique sont correctes ?',
    options: [
      { text: 'Anguillulose — larves dans les selles, parfois après Baermann', correct: true, correction: 'Oui. La méthode peut améliorer leur récupération.' },
      { text: 'Larva migrans cutanée typique — œufs urinaires systématiques', correct: false, correction: 'Non. Le diagnostic est d\'abord clinique et il n\'y a pas de ponte humaine.' },
      { text: 'Toutes ces parasitoses — même sérologie spécifique suffisante à elle seule', correct: false, correction: 'Non. Les stratégies diffèrent selon le parasite et la phase.' },
      { text: 'Ankylostomose humaine — œufs dans les selles', correct: true, correction: 'Oui. Les adultes intestinaux pondent des œufs éliminés par les selles.' },
      { text: 'Schistosomose urogénitale — œufs dans les urines', correct: true, correction: 'Oui. S. haematobium est recherché classiquement dans ce prélèvement.' },
    ],
    explanation: 'Le choix du test découle du cycle et de la localisation : urine, selles avec œufs, selles avec larves ou clinique. (Cours, p. 5–16)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Chez une personne originaire d\'une zone d\'endémie, quel diagnostic prioriser devant une septicémie à entérobactérie survenant après corticoïdes avec larves dans les selles ?',
    options: [
      { text: 'Une simple larva migrans cutanée en impasse', correct: false, correction: 'Non. Elle n\'explique pas les larves fécales ni le syndrome invasif.' },
      { text: 'Une schistosomose à S. haematobium confirmée par ces larves', correct: false, correction: 'Non. On rechercherait plutôt ses œufs urinaires.' },
      { text: 'Une gale bactérienne à Sarcoptes', correct: false, correction: 'Non. Sarcoptes est un acarien et ne donne pas ce tableau de larves fécales.' },
      { text: 'Une ankylostomose prouvée par la seule corticothérapie', correct: false, correction: 'Non. Le lien entre corticoïdes et hyperinfection est caractéristique de Strongyloides.' },
      { text: 'Une hyperinfection à Strongyloides stercoralis', correct: true, correction: 'Oui. Les larves peuvent traverser les tissus en entraînant des bactéries intestinales.' },
    ],
    explanation: 'Le cas et le chapitre sur l\'anguillulose maligne associent corticoïdes, auto-infestation et surinfection à bacilles Gram négatif. (Cours, p. 12–16)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles règles synthétisent correctement les parasitoses transcutanées du cours ?',
    options: [
      { text: 'Choisir l\'examen selon le parasite : œuf urinaire, œuf fécal, larve fécale ou diagnostic clinique', correct: true, correction: 'Oui. Un test unique ne répond pas aux quatre tableaux.' },
      { text: 'Traiter toutes les quatre parasitoses par le même médicament à la même durée', correct: false, correction: 'Non. Praziquantel, albendazole et ivermectine ont des indications distinctes.' },
      { text: 'Anticiper le risque d\'hyperinfection strongyloïdienne avant une immunosuppression', correct: true, correction: 'Oui. La chronicité par auto-infestation justifie cette vigilance.' },
      { text: 'Relier le milieu de contact à la forme infestante : eau douce ou sol', correct: true, correction: 'Oui. Cette distinction sépare schistosomes et nématodes du sol.' },
      { text: 'Déduire qu\'une éosinophilie normale exclut tous les helminthes', correct: false, correction: 'Non. Elle peut manquer selon le stade ou dans une forme grave.' },
    ],
    explanation: 'Les cas du support invitent à articuler exposition, cycle, syndrome et examen, puis à adapter la prise en charge. (Cours, p. 2–16)'
  },
]
