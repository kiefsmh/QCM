// Banque de 80 questions pour D1 - UE Agents infectieux.
// QCM et corrections établis uniquement à partir du cours fourni.
// Les formulations du support sont conservées, sans rectification externe.
export const meta = {
  title: 'Physiopathologie et sémiologie des maladies infectieuses',
};

export default [
  {
    id: 1,
    type: 'QCM',
    question: "Quelle caractéristique explique la coloration BAAR des mycobactéries ?",
    options: [
      { text: "Un génome exclusivement constitué d’ARN", correct: false, correction: "Pas cette fois. Il s’agit de bactéries, avec ADN et ARN." },
      { text: "Une paroi riche en acides mycoliques", correct: true, correction: "Exact 🎯 Ces lipides rendent la paroi alcoolo-acido-résistante." },
      { text: "Une absence complète de paroi", correct: false, correction: "Attention, faux : Les mycobactéries possèdent au contraire une paroi particulièrement épaisse." },
      { text: "Une capsule virale enveloppant leur génome", correct: false, correction: "Non chef 😭 Une bactérie ne possède pas de capside virale." },
      { text: "Une multiplication extrêmement rapide", correct: false, correction: "Faux 💀 Leur multiplication est au contraire lente." },
    ],
    explanation: "La richesse en acides mycoliques explique l’alcoolo-acido-résistance ; la croissance lente explique en partie les délais de culture et de traitement."
  },
  {
    id: 2,
    type: 'QRM',
    question: "Concernant les mycobactéries, quelles propositions sont exactes ?",
    options: [
      { text: "Elles ne nécessitent jamais d’antibiotiques", correct: false, correction: "Attention, faux : Le traitement des infections à mycobactéries repose sur des antibiotiques adaptés." },
      { text: "Leur multiplication peut être lente", correct: true, correction: "Oui boss 🧠 Cette lenteur complique leur culture et contribue à prolonger certaines thérapeutiques." },
      { text: "Toutes les mycobactéries sont des virus", correct: false, correction: "Faux 💀 Ce sont des bactéries particulières." },
      { text: "Mycobacterium leprae est responsable de la lèpre", correct: true, correction: "Tout à fait. La lèpre atteint notamment la peau et les nerfs." },
      { text: "Mycobacterium tuberculosis est responsable de la tuberculose", correct: true, correction: "Bien vu ! Il peut atteindre les poumons et d’autres organes." },
    ],
    explanation: "Les mycobactéries sont des bactéries à paroi riche en lipides, à croissance souvent lente, responsables notamment de la tuberculose et de la lèpre."
  },
  {
    id: 3,
    type: 'QCM',
    question: "Quelle est la cible principale des bêta-lactamines ?",
    options: [
      { text: "La synthèse du peptidoglycane", correct: true, correction: "Oui boss 🧠 Les bêta-lactamines fragilisent la paroi en bloquant sa synthèse." },
      { text: "La polymérase ARN virale", correct: false, correction: "Attention, faux : Ce n’est pas la cible de cette famille d’antibiotiques." },
      { text: "La transcriptase inverse", correct: false, correction: "Faux 💀 Cette enzyme est associée aux rétrovirus." },
      { text: "La membrane des virus enveloppés", correct: false, correction: "Pas cette fois. Elles ciblent les bactéries, pas directement les virus." },
      { text: "La traduction sur les ribosomes", correct: false, correction: "Pas cette fois. Ce mécanisme concerne notamment les macrolides et les aminosides." },
    ],
    explanation: "Le peptidoglycane assure la rigidité de la paroi et la résistance à la pression osmotique ; bloquer sa synthèse expose à la lyse bactérienne."
  },
  {
    id: 4,
    type: 'QRM',
    question: "À propos des antibiotiques agissant sur l’enveloppe bactérienne, quelles propositions sont justes ?",
    options: [
      { text: "La fosfomycine cible la synthèse de la paroi", correct: true, correction: "Exact 🎯 Elle figure parmi les inhibiteurs du peptidoglycane dans le cours." },
      { text: "Les bêta-lactamines inhibent directement l’ARN polymérase", correct: false, correction: "Non chef 😭 Ce mécanisme est celui de la rifampicine." },
      { text: "Les polymyxines altèrent surtout la membrane de bactéries à Gram négatif", correct: true, correction: "Bien vu ! Leur cible est membranaire plutôt que ribosomale." },
      { text: "Le peptidoglycane protège exclusivement les virus", correct: false, correction: "Pas cette fois. Il s’agit d’un constituant bactérien." },
      { text: "Les glycopeptides peuvent inhiber la synthèse du peptidoglycane", correct: true, correction: "Oui boss 🧠 C’est un mécanisme commun aux bêta-lactamines, glycopeptides et fosfomycine." },
    ],
    explanation: "Distinguer inhibition de la synthèse du peptidoglycane et altération directe de la membrane plasmique est un classique de QCM."
  },
  {
    id: 5,
    type: 'QCM',
    question: "Quel antibiotique du cours agit principalement en inhibant la transcription bactérienne ?",
    options: [
      { text: "La rifampicine", correct: true, correction: "Oui boss 🧠 Elle inhibe l’ARN polymérase bactérienne, donc la transcription ADN vers ARN." },
      { text: "Un glycopeptide", correct: false, correction: "Faux 💀 Il inhibe la synthèse du peptidoglycane." },
      { text: "La fosfomycine", correct: false, correction: "Faux 💀 Elle agit sur la synthèse de la paroi." },
      { text: "Une polymyxine", correct: false, correction: "Attention, faux : Elle altère la membrane plasmique." },
      { text: "Une cycline", correct: false, correction: "Pas cette fois. Elle perturbe la synthèse protéique." },
    ],
    explanation: "Rifampicine : ARN polymérase et transcription ; quinolones : réplication de l’ADN ; antifoliques : synthèse des précurseurs des nucléotides."
  },
  {
    id: 6,
    type: 'QRM',
    question: "Concernant les inhibiteurs de la synthèse protéique bactérienne, quelles affirmations sont exactes ?",
    options: [
      { text: "Les aminosides ciblent la machinerie de traduction", correct: true, correction: "Tout à fait. Ils font partie des antibiotiques agissant sur les ribosomes." },
      { text: "Les oxazolidinones sont citées parmi ces traitements", correct: true, correction: "Exact 🎯 Cette classe inhibe également la traduction bactérienne." },
      { text: "Les cyclines appartiennent à cette catégorie", correct: true, correction: "Oui boss 🧠 Leur mécanisme concerne la synthèse des protéines." },
      { text: "Les macrolides perturbent la traduction", correct: true, correction: "Bien vu ! Ils agissent sur la synthèse protéique bactérienne." },
      { text: "Les quinolones agissent d’abord sur les ribosomes", correct: false, correction: "Attention, faux : Elles inhibent des enzymes utiles à la réplication de l’ADN." },
    ],
    explanation: "Macrolides, aminosides, cyclines, oxazolidinones et acide fusidique sont cités dans la partie « synthèse protéique »."
  },
  {
    id: 7,
    type: 'QCM',
    question: "Pourquoi les sulfamides antibactériens perturbent-ils la synthèse des acides nucléiques ?",
    options: [
      { text: "Ils inhibent la transcriptase inverse des rétrovirus", correct: false, correction: "Attention, faux : Ils ne ciblent pas cette enzyme virale." },
      { text: "Ils détruisent les histones bactériennes", correct: false, correction: "Pas cette fois. Ce mécanisme n’est pas décrit." },
      { text: "Ils dissolvent la membrane des bactéries Gram négatif", correct: false, correction: "Faux 💀 Ce mécanisme concerne les polymyxines." },
      { text: "Ils coupent directement la double hélice d’ADN", correct: false, correction: "Pas cette fois. Ce n’est pas leur action directe." },
      { text: "Ils bloquent une voie de synthèse de l’acide folique", correct: true, correction: "Oui boss 🧠 Le folate est nécessaire à la synthèse de précurseurs nucléotidiques." },
    ],
    explanation: "Les bactéries synthétisent leur propre acide folique ; les sulfamides perturbent cette voie métabolique, et indirectement la synthèse d’ADN."
  },
  {
    id: 8,
    type: 'QRM',
    question: "Au sujet des antibiotiques et de la multiplication bactérienne, quelles propositions sont correctes ?",
    options: [
      { text: "Les sulfamides sont des agents qui coupent directement l’ADN", correct: false, correction: "Non chef 😭 Ils agissent en amont sur le métabolisme des folates." },
      { text: "Tous les antibiotiques détruisent immédiatement toute bactérie au repos", correct: false, correction: "Pas cette fois. Leur efficacité dépend notamment des cibles actives et de la sensibilité bactérienne." },
      { text: "Les quinolones inhibent des enzymes nécessaires à la réplication de l’ADN", correct: true, correction: "Oui boss 🧠 C’est leur cible dans le cours." },
      { text: "La synthèse de l’enveloppe est sollicitée pendant la multiplication", correct: true, correction: "Exact 🎯 Cela explique l’activité de nombreux antibiotiques sur des bactéries en croissance." },
      { text: "Un antibiotique peut être bactériostatique ou bactéricide selon sa famille et le contexte", correct: true, correction: "Bien vu ! Le cours distingue inhibition de croissance et mort bactérienne." },
    ],
    explanation: "Les mécanismes sont différents : paroi, ribosomes, folates, réplication de l’ADN et transcription ; leur efficacité dépend aussi du contexte bactérien."
  },
  {
    id: 9,
    type: 'QCM',
    question: "Quel élément distingue fondamentalement un virus d’une bactérie ?",
    options: [
      { text: "La présence simultanée d’ADN et d’ARN génomiques", correct: false, correction: "Attention, faux : Un génome viral est constitué d’ADN ou d’ARN." },
      { text: "La présence de ribosomes propres fonctionnels", correct: false, correction: "Faux 💀 Les virus dépendent de la machinerie cellulaire." },
      { text: "La présence obligatoire d’une membrane plasmique", correct: false, correction: "Faux 💀 Certains virus sont enveloppés, mais ce n’est pas une cellule." },
      { text: "Une multiplication par scissiparité", correct: false, correction: "Non chef 😭 C’est un mode de multiplication bactérienne." },
      { text: "L’obligation de détourner une cellule hôte pour produire de nouveaux virions", correct: true, correction: "Tout à fait. Les virus ne se divisent pas de façon autonome." },
    ],
    explanation: "Le virus est un agent infectieux non cellulaire, à génome ADN ou ARN, incapable de multiplication autonome."
  },
  {
    id: 10,
    type: 'QRM',
    question: "Parmi les caractéristiques générales des virus, lesquelles sont exactes ?",
    options: [
      { text: "Le tropisme cellulaire participe à leur classification", correct: true, correction: "Oui boss 🧠 Les cellules cibles sont un critère évoqué." },
      { text: "Tous les virus se multiplient par division binaire", correct: false, correction: "Attention, faux : Ils fabriquent de nouveaux composants à l’intérieur de cellules hôtes." },
      { text: "Leur génome est de nature ADN ou ARN", correct: true, correction: "Bien vu ! Les deux natures existent selon le virus." },
      { text: "La présence d’une enveloppe est un critère de classification", correct: true, correction: "Tout à fait. Elle permet de distinguer des virus enveloppés et nus." },
      { text: "Tous les virus sont directement visibles en microscopie optique classique", correct: false, correction: "Faux 💀 Leur taille nécessite généralement la microscopie électronique pour les visualiser directement." },
    ],
    explanation: "Classification virale : nature du génome, enveloppe, morphologie et cellules cibles ; réplication obligatoirement intracellulaire."
  },
  {
    id: 11,
    type: 'QCM',
    question: "Quel agent infectieux est un rétrovirus ?",
    options: [
      { text: "Mycobacterium tuberculosis", correct: false, correction: "Pas cette fois. C’est une bactérie responsable de tuberculose." },
      { text: "Candida albicans", correct: false, correction: "Non chef 😭 C’est une levure." },
      { text: "Yersinia pestis", correct: false, correction: "Pas cette fois. C’est une bactérie responsable de peste." },
      { text: "Aspergillus fumigatus", correct: false, correction: "Faux 💀 C’est une moisissure." },
      { text: "Le VIH", correct: true, correction: "Bien vu ! Il utilise une transcriptase inverse pour synthétiser de l’ADN à partir d’ARN." },
    ],
    explanation: "Les rétrovirus ont un génome ARN et utilisent la rétrotranscription pour produire un intermédiaire ADN."
  },
  {
    id: 12,
    type: 'QRM',
    question: "Quelles propositions sur les virus à ARN et les rétrovirus sont justes ?",
    options: [
      { text: "La transcriptase inverse transforme l’ADN en ARN", correct: false, correction: "Non chef 😭 Le sens de la réaction est ARN vers ADN." },
      { text: "Un virus à ARN possède toujours aussi de l’ADN dans son génome", correct: false, correction: "Pas cette fois. Le génome viral est de l’un ou l’autre type." },
      { text: "Les virus grippaux sont des virus à ARN", correct: true, correction: "Oui boss 🧠 La grippe est citée comme exemple." },
      { text: "Le SARS-CoV-2 possède un génome ARN", correct: true, correction: "Exact 🎯 Il appartient aux virus à ARN." },
      { text: "Les rétrovirus emploient une transcriptase inverse", correct: true, correction: "Bien vu ! Elle permet de passer d’un ARN viral à un ADN." },
    ],
    explanation: "Ne pas confondre virus à ARN et rétrovirus : ces derniers utilisent une étape de rétrotranscription."
  },
  {
    id: 13,
    type: 'QCM',
    question: "Quel énoncé décrit le mieux la stratégie générale des antiviraux ?",
    options: [
      { text: "Ils permettent toujours l’éradication définitive de toute infection virale", correct: false, correction: "Pas cette fois. La guérison stérilisante n’est pas systématique, notamment dans certaines infections chroniques." },
      { text: "Ils sont tous identiques aux antibiotiques", correct: false, correction: "Non chef 😭 Les cibles et les agents visés diffèrent." },
      { text: "Ils inhibent tous la synthèse du peptidoglycane", correct: false, correction: "Faux 💀 Cette cible est bactérienne." },
      { text: "Ils détruisent immédiatement les cellules saines sans effet sur le virus", correct: false, correction: "Faux 💀 Ce n’est pas un mécanisme thérapeutique recherché." },
      { text: "Ils visent à limiter la réplication virale", correct: true, correction: "Bien vu ! Ils agissent sur des étapes nécessaires au cycle viral." },
    ],
    explanation: "Les antiviraux réduisent la réplication virale ; ils peuvent contrôler l’infection sans garantir l’élimination du virus."
  },
  {
    id: 14,
    type: 'QRM',
    question: "Concernant les virus et leur prise en charge, quelles propositions sont exactes ?",
    options: [
      { text: "L’absence de traitement antiviral signifie absence de réponse immunitaire", correct: false, correction: "Attention, faux : L’immunité de l’hôte peut contrôler ou éliminer certains virus." },
      { text: "La vaccination est un moyen de prévention des infections virales", correct: true, correction: "Tout à fait. Le cours l’associe aux mesures d’hygiène." },
      { text: "Certains virus peuvent persister et se réactiver", correct: true, correction: "Bien vu ! Le cours cite le zona par réactivation du virus de la varicelle." },
      { text: "Une antibiothérapie est nécessaire pour toute infection virale simple", correct: false, correction: "Faux 💀 Les antibiotiques n’agissent pas directement sur les virus." },
      { text: "Les antiviraux sont notamment utiles dans des infections virales chroniques", correct: true, correction: "Oui boss 🧠 C’est une indication mise en avant dans le cours." },
    ],
    explanation: "Les infections virales présentent des évolutions variées, aiguës ou persistantes ; vaccination, hygiène et antiviraux ont des rôles distincts."
  },
  {
    id: 15,
    type: 'QCM',
    question: "Comment appelle-t-on un parasite eucaryote unicellulaire ?",
    options: [
      { text: "Un protozoaire", correct: true, correction: "Bien vu ! Les protozoaires constituent les parasites unicellulaires." },
      { text: "Une mycobactérie", correct: false, correction: "Pas cette fois. C’est une bactérie, non un eucaryote parasite." },
      { text: "Un ectoparasite obligatoirement", correct: false, correction: "Faux 💀 Le terme désigne sa localisation externe, pas son caractère unicellulaire." },
      { text: "Un prion", correct: false, correction: "Non chef 😭 C’est une protéine infectieuse anormale." },
      { text: "Un helminthe", correct: false, correction: "Pas cette fois. Il s’agit d’un ver parasite pluricellulaire." },
    ],
    explanation: "Deux grands groupes à distinguer : protozoaires unicellulaires et parasites pluricellulaires, notamment helminthes."
  },
  {
    id: 16,
    type: 'QRM',
    question: "Concernant les parasites, quelles propositions sont exactes ?",
    options: [
      { text: "Les poux peuvent être considérés comme des ectoparasites", correct: true, correction: "Exact 🎯 Ils vivent à la surface de leur hôte." },
      { text: "L’homme est nécessairement l’hôte définitif de tous les parasites", correct: false, correction: "Non chef 😭 Sa place dans le cycle dépend de l’espèce parasitaire." },
      { text: "Un cycle parasitaire peut comporter plusieurs hôtes", correct: true, correction: "Bien vu ! Le cours illustre cette complexité avec le ténia et le toxoplasme." },
      { text: "Les protozoaires sont des bactéries à Gram négatif", correct: false, correction: "Pas cette fois. Ce sont des organismes eucaryotes unicellulaires." },
      { text: "Les helminthes sont des vers parasites", correct: true, correction: "Oui boss 🧠 Ils sont pluricellulaires." },
    ],
    explanation: "L’interrogatoire parasitologique explore l’alimentation, les voyages et les expositions, car le cycle peut impliquer différents hôtes."
  },
  {
    id: 17,
    type: 'QCM',
    question: "Quel exemple correspond à une levure ?",
    options: [
      { text: "Le ténia", correct: false, correction: "Faux 💀 C’est un helminthe." },
      { text: "Candida albicans", correct: true, correction: "Bien vu ! Il est cité comme levure." },
      { text: "Aspergillus fumigatus", correct: false, correction: "Faux 💀 C’est une moisissure." },
      { text: "Le prion de Creutzfeldt-Jakob", correct: false, correction: "Non chef 😭 C’est une protéine pathologique." },
      { text: "Mycobacterium leprae", correct: false, correction: "Pas cette fois. C’est une mycobactérie." },
    ],
    explanation: "Le cours classe les champignons en levures (Candida), moisissures (Aspergillus) et dimorphiques (Histoplasma)."
  },
  {
    id: 18,
    type: 'QRM',
    question: "Concernant les infections fongiques, quelles propositions sont exactes ?",
    options: [
      { text: "Histoplasma capsulatum est un champignon dimorphique", correct: true, correction: "Tout à fait. Il peut prendre des formes de levure et de moisissure." },
      { text: "Aspergillus fumigatus est une moisissure", correct: true, correction: "Bien vu ! Il est cité parmi les moisissures." },
      { text: "Candida albicans est une bactérie intracellulaire", correct: false, correction: "Faux 💀 Il s’agit d’une levure eucaryote." },
      { text: "Une immunodépression favorise les mycoses invasives", correct: true, correction: "Oui boss 🧠 Le cours oppose atteintes superficielles et infections profondes graves." },
      { text: "Toute mycose chez l’immunocompétent est obligatoirement invasive", correct: false, correction: "Attention, faux : Les atteintes superficielles sont classiques chez l’immunocompétent." },
    ],
    explanation: "Le terrain immunitaire est essentiel pour apprécier la gravité potentielle d’une infection fongique."
  },
  {
    id: 19,
    type: 'QCM',
    question: "Quelle est la nature biologique d’un prion ?",
    options: [
      { text: "Un protozoaire extracellulaire", correct: false, correction: "Non chef 😭 Il ne s’agit pas d’une cellule eucaryote." },
      { text: "Une protéine anormale entraînant la polymérisation de protéines semblables", correct: true, correction: "Bien vu ! Le cours décrit une polymérisation déclenchée par la protéine anormale." },
      { text: "Un virus à ADN enveloppé", correct: false, correction: "Pas cette fois. Un prion n’est pas un virus." },
      { text: "Un acide nucléique libre sans protéine", correct: false, correction: "Pas cette fois. Le prion est de nature protéique." },
      { text: "Une bactérie sans paroi", correct: false, correction: "Faux 💀 Il ne s’agit pas d’une bactérie." },
    ],
    explanation: "Le support décrit des protéines anormales qui entraînent la polymérisation d’autres protéines et cite la maladie de Creutzfeldt-Jakob."
  },
  {
    id: 20,
    type: 'QRM',
    question: "Concernant les agents infectieux non bactériens, quelles affirmations sont justes ?",
    options: [
      { text: "Les virus disposent tous d’une autonomie de réplication en milieu acellulaire", correct: false, correction: "Pas cette fois. Ils ont besoin de cellules hôtes." },
      { text: "Les prions entraînent la polymérisation de protéines similaires", correct: true, correction: "Oui. Le cours décrit explicitement ce mécanisme de polymérisation." },
      { text: "Les champignons peuvent être unicellulaires ou pluricellulaires", correct: true, correction: "Exact 🎯 C’est le cas notamment des levures et des moisissures." },
      { text: "Les prions n’ont pas de génome ADN ou ARN propre", correct: true, correction: "Bien vu ! Leur nature infectieuse est protéique." },
      { text: "Les parasites sont eucaryotes", correct: true, correction: "Oui boss 🧠 Ils comprennent protozoaires et formes pluricellulaires." },
    ],
    explanation: "Virus, parasites, champignons et prions diffèrent profondément par leur organisation biologique et leurs mécanismes pathogènes."
  },
  {
    id: 21,
    type: 'QCM',
    question: "Quelle phase d’une maladie infectieuse correspond au délai entre contamination et premiers symptômes ?",
    options: [
      { text: "La phase de réinfection", correct: false, correction: "Faux 💀 Elle ne définit pas ce délai initial." },
      { text: "La phase d’incubation", correct: true, correction: "Tout à fait. C’est la période asymptomatique précédant les premiers signes." },
      { text: "La phase d’état", correct: false, correction: "Attention, faux : Elle correspond au maximum d’intensité des symptômes." },
      { text: "La phase d’invasion", correct: false, correction: "Faux 💀 Elle commence à l’apparition des premiers symptômes." },
      { text: "La convalescence", correct: false, correction: "Non chef 😭 Elle correspond à l’amélioration progressive." },
    ],
    explanation: "Chronologie classique : incubation, invasion, état, convalescence."
  },
  {
    id: 22,
    type: 'QRM',
    question: "À propos de la chronologie d’une infection, quelles propositions sont exactes ?",
    options: [
      { text: "L’incubation correspond nécessairement à la guérison", correct: false, correction: "Attention, faux : Elle précède les symptômes, pas leur disparition." },
      { text: "La convalescence peut s’accompagner d’une asthénie persistante", correct: true, correction: "Oui boss 🧠 La grippe est illustrée par une fatigue et une toux résiduelles." },
      { text: "La contagiosité débute toujours en phase d’état", correct: false, correction: "Faux 💀 Elle peut commencer pendant l’incubation selon le pathogène." },
      { text: "L’invasion correspond à l’apparition des premiers signes", correct: true, correction: "Bien vu ! C’est la définition donnée dans le cours." },
      { text: "La phase d’état correspond au pic clinique", correct: true, correction: "Tout à fait. Les manifestations y sont généralement les plus importantes." },
    ],
    explanation: "Les phases cliniques ne se superposent pas nécessairement à la période de contagiosité."
  },
  {
    id: 23,
    type: 'QCM',
    question: "Quelle affirmation illustre la contagiosité grippale selon le cours ?",
    options: [
      { text: "Elle peut commencer environ 24 heures avant les premiers symptômes", correct: true, correction: "Oui boss 🧠 Le cours souligne une contagiosité présymptomatique." },
      { text: "Elle n’existe jamais avant la phase d’état", correct: false, correction: "Faux 💀 Elle peut précéder cette phase." },
      { text: "Elle ne concerne que les patients hospitalisés", correct: false, correction: "Pas cette fois. La transmission survient aussi en collectivité." },
      { text: "Elle est strictement identique à celle de la maladie à virus Ebola", correct: false, correction: "Attention, faux : Les périodes diffèrent selon le pathogène." },
      { text: "Elle débute uniquement après la guérison", correct: false, correction: "Pas cette fois. La grippe est contagieuse avant la disparition des symptômes." },
    ],
    explanation: "Identifier la période contagieuse permet de rompre plus efficacement la chaîne de transmission."
  },
  {
    id: 24,
    type: 'QRM',
    question: "Concernant la transmission des agents infectieux, quelles propositions sont exactes ?",
    options: [
      { text: "La tuberculose illustre une transmission aérienne", correct: true, correction: "Exact 🎯 Les aérosols jouent un rôle majeur." },
      { text: "La transmission gouttelettes et la transmission par aérosols forment un continuum", correct: true, correction: "Oui boss 🧠 Le cours invite à ne pas les opposer trop rigidement." },
      { text: "Les postillons ne participent jamais à la transmission directe", correct: false, correction: "Non chef 😭 Ils constituent au contraire un exemple classique." },
      { text: "La grippe est classiquement associée aux gouttelettes", correct: true, correction: "Bien vu ! Une transmission par aérosols est également possible." },
      { text: "Les aérosols sont obligatoirement limités à quelques centimètres", correct: false, correction: "Pas cette fois. Leur dispersion peut atteindre des distances plus importantes." },
    ],
    explanation: "La distinction traditionnelle gouttelettes/aérosols reste utile, mais les voies respiratoires représentent un continuum de tailles de particules."
  },
  {
    id: 25,
    type: 'QCM',
    question: "Quel vecteur est cité comme responsable de la transmission de la peste ?",
    options: [
      { text: "Le parasite intestinal ténia", correct: false, correction: "Non chef 😭 Il n’est pas vecteur de la peste." },
      { text: "Le moustique Anopheles", correct: false, correction: "Attention, faux : Il est associé au paludisme, pas à la peste dans le cours." },
      { text: "Un prion aérien", correct: false, correction: "Faux 💀 La peste est une infection bactérienne vectorielle." },
      { text: "Le chat domestique par griffure exclusivement", correct: false, correction: "Faux 💀 Ce n’est pas le vecteur mentionné." },
      { text: "La puce", correct: true, correction: "Tout à fait. Le cours cite les puces parmi les vecteurs arthropodes de la peste." },
    ],
    explanation: "La transmission indirecte peut passer par l’eau, la terre, des produits animaux ou des vecteurs arthropodes."
  },
  {
    id: 26,
    type: 'QRM',
    question: "Concernant les voies de transmission indirecte et nosocomiale, quelles propositions sont exactes ?",
    options: [
      { text: "L’eau peut servir d’intermédiaire de transmission", correct: true, correction: "Bien vu ! Elle fait partie des milieux cités." },
      { text: "L’hygiène des mains participe à la prévention nosocomiale", correct: true, correction: "Exact 🎯 C’est une précaution standard essentielle." },
      { text: "Les tiques sont des vecteurs arthropodes", correct: true, correction: "Tout à fait. Leur rôle est majeur pour plusieurs maladies infectieuses." },
      { text: "Une infection acquise dans le cadre des soins peut relever d’une transmission nosocomiale", correct: true, correction: "Oui boss 🧠 Le cours insiste sur le risque dans le milieu hospitalier." },
      { text: "Le port de gants rend l’hygiène des mains inutile", correct: false, correction: "Attention, faux : Les gants ne remplacent pas l’hygiène des mains." },
    ],
    explanation: "La prévention repose sur les précautions standard, adaptées aux contacts et aux gestes à risque."
  },
  {
    id: 27,
    type: 'QCM',
    question: "Que signifie le terme « réservoir » dans la chaîne de transmission ?",
    options: [
      { text: "Le seul laboratoire qui cultive le microbe", correct: false, correction: "Pas cette fois. Le réservoir n’est pas un lieu exclusivement technique." },
      { text: "Le maximum de fièvre de la phase d’état", correct: false, correction: "Pas cette fois. C’est un signe clinique et non la source de l’agent." },
      { text: "Le milieu ou l’hôte dans lequel l’agent infectieux se maintient", correct: true, correction: "Oui boss 🧠 L’agent doit pouvoir ensuite sortir et rejoindre un hôte réceptif." },
      { text: "Une cellule immunitaire forcément saine", correct: false, correction: "Faux 💀 Le terme est plus large." },
      { text: "Le traitement empêchant une épidémie", correct: false, correction: "Attention, faux : C’est un moyen de prévention, pas un réservoir." },
    ],
    explanation: "La chaîne comprend un réservoir, une porte de sortie, un mode de transmission, une porte d’entrée et un hôte réceptif."
  },
  {
    id: 28,
    type: 'QRM',
    question: "Quelles mesures peuvent interrompre une chaîne de transmission selon le cours ?",
    options: [
      { text: "La méconnaissance de la période de contagiosité", correct: false, correction: "Non chef 😭 La connaître aide justement à organiser la prévention." },
      { text: "L’absence de toute précaution chez les patients fragiles", correct: false, correction: "Pas cette fois. Elle augmente leur risque d’exposition." },
      { text: "L’hygiène des mains", correct: true, correction: "Oui boss 🧠 Elle réduit le passage d’agents entre personnes et surfaces." },
      { text: "Les précautions adaptées aux soins souillants ou mouillants", correct: true, correction: "Exact 🎯 Le port d’équipements de protection limite l’exposition." },
      { text: "Le bionettoyage de l’environnement de soins", correct: true, correction: "Bien vu ! Il contribue à réduire la contamination des surfaces." },
    ],
    explanation: "Prévenir la transmission consiste à agir sur plusieurs maillons de la chaîne, notamment en milieu hospitalier."
  },
  {
    id: 29,
    type: 'QCM',
    question: "Que caractérise un pathogène opportuniste ?",
    options: [
      { text: "Il provoque systématiquement une maladie chez tous les porteurs", correct: false, correction: "Faux 💀 La maladie dépend notamment de l’état immunitaire et du contexte." },
      { text: "Il peut devenir pathogène lorsque les défenses de l’hôte sont altérées", correct: true, correction: "Oui boss 🧠 L’immunodépression favorise les infections opportunistes." },
      { text: "Il ne peut exister dans l’environnement", correct: false, correction: "Attention, faux : Certains opportunistes sont environnementaux." },
      { text: "Sa présence prouve toujours une infection invasive", correct: false, correction: "Faux 💀 Une colonisation sans infection est possible." },
      { text: "Il est obligatoirement un virus à ARN", correct: false, correction: "Pas cette fois. Il peut s’agir de bactéries ou de champignons, entre autres." },
    ],
    explanation: "Le pyocyanique et les infections opportunistes du SIDA illustrent l’importance du terrain."
  },
  {
    id: 30,
    type: 'QRM',
    question: "Concernant les interactions hôte-pathogène, quelles propositions sont exactes ?",
    options: [
      { text: "Pseudomonas aeruginosa peut agir comme pathogène opportuniste", correct: true, correction: "Tout à fait. Une vulnérabilité de l’hôte favorise l’infection." },
      { text: "Le SIDA favorise notamment certaines infections opportunistes", correct: true, correction: "Oui boss 🧠 L’immunité cellulaire est profondément altérée." },
      { text: "Une colonisation par un micro-organisme prouve systématiquement une maladie", correct: false, correction: "Faux 💀 Colonisation et infection sont deux notions différentes." },
      { text: "Mycobacterium tuberculosis est présenté comme un pathogène obligatoire", correct: true, correction: "Bien vu ! Il n’est pas un composant habituel du microbiote commensal." },
      { text: "L’environnement ne joue aucun rôle dans la survenue d’une infection", correct: false, correction: "Attention, faux : Il constitue un des trois pôles du triangle épidémiologique." },
    ],
    explanation: "L’agent infectieux, l’hôte et l’environnement interagissent pour déterminer la survenue de la maladie."
  },
  {
    id: 31,
    type: 'QCM',
    question: "Que désigne le pouvoir pathogène d’un micro-organisme ?",
    options: [
      { text: "La possibilité d’être transmis par un moustique seulement", correct: false, correction: "Attention, faux : Le mode de transmission est une notion différente." },
      { text: "Sa capacité à provoquer une maladie", correct: true, correction: "Exact 🎯 C’est une notion qualitative dans le cours." },
      { text: "La concentration de CRP sanguine", correct: false, correction: "Pas cette fois. La CRP est un marqueur de l’hôte." },
      { text: "Son nombre de ribosomes", correct: false, correction: "Pas cette fois. Ce n’est pas sa définition." },
      { text: "L’intensité de la fièvre du patient uniquement", correct: false, correction: "Non chef 😭 Un signe clinique isolé ne définit pas le pouvoir pathogène." },
    ],
    explanation: "Pouvoir pathogène : notion qualitative ; virulence : notion quantitative liée notamment à l’infectivité et à la gravité."
  },
  {
    id: 32,
    type: 'QRM',
    question: "Quels facteurs peuvent participer à la virulence d’un pathogène ?",
    options: [
      { text: "Des facteurs d’adhésion", correct: true, correction: "Oui boss 🧠 Ils favorisent la fixation aux cellules et tissus cibles." },
      { text: "Des toxines", correct: true, correction: "Exact 🎯 Elles peuvent provoquer des dégâts locaux ou systémiques." },
      { text: "Une capsule favorisant l’échappement immunitaire", correct: true, correction: "Bien vu ! Elle peut notamment contrer la phagocytose." },
      { text: "Des systèmes de sécrétion et des enzymes", correct: true, correction: "Tout à fait. Ils appartiennent à l’équipement de virulence décrit." },
      { text: "L’absence systématique de toute interaction avec l’hôte", correct: false, correction: "Non chef 😭 L’adhésion et l’invasion supposent des interactions." },
    ],
    explanation: "La virulence dépend de nombreux déterminants : tropisme, adhésion, toxines, franchissement des barrières et évasion immunitaire."
  },
  {
    id: 33,
    type: 'QCM',
    question: "Qu’est-ce que le tropisme d’un pathogène dans ce cours ?",
    options: [
      { text: "Sa préférence pour certains tissus ou cellules cibles", correct: true, correction: "Bien vu ! Elle dépend notamment d’interactions entre adhésines et récepteurs." },
      { text: "La durée exacte d’incubation, identique chez tous les patients", correct: false, correction: "Pas cette fois. La notion porte sur les cellules cibles, pas sur un délai." },
      { text: "La résistance universelle à tous les antibiotiques", correct: false, correction: "Faux 💀 Ce n’est pas la définition du tropisme." },
      { text: "Sa capacité à produire du paracétamol", correct: false, correction: "Faux 💀 Aucun rapport avec la reconnaissance cellulaire." },
      { text: "Le taux de lactates sanguins", correct: false, correction: "Non chef 😭 C’est un marqueur métabolique de gravité." },
    ],
    explanation: "Le tropisme aide à expliquer la localisation des infections et parfois leur spécificité d’espèce."
  },
  {
    id: 34,
    type: 'QRM',
    question: "Concernant les facteurs liés à l’hôte, quelles propositions sont exactes ?",
    options: [
      { text: "Une plaie constitue une porte d’entrée possible", correct: true, correction: "Oui boss 🧠 Elle rompt la barrière épithéliale." },
      { text: "L’âge influence la susceptibilité infectieuse", correct: true, correction: "Bien vu ! Nourrissons et personnes âgées sont particulièrement concernés." },
      { text: "Les antécédents chirurgicaux sont sans intérêt", correct: false, correction: "Attention, faux : Une intervention ou du matériel implanté peuvent orienter la recherche d’un foyer." },
      { text: "L’immunodépression est un facteur majeur de vulnérabilité", correct: true, correction: "Tout à fait. Elle altère les défenses contre les agents pathogènes." },
      { text: "Un dispositif médical peut faciliter l’adhésion microbienne", correct: true, correction: "Exact 🎯 La présence de matériel étranger est un facteur à rechercher." },
    ],
    explanation: "Le risque infectieux résulte du terrain, des portes d’entrée et des expositions personnelles."
  },
  {
    id: 35,
    type: 'QCM',
    question: "Quelle défense mécanique réduit notamment le risque d’infection urinaire ?",
    options: [
      { text: "L’écoulement régulier des urines", correct: true, correction: "Exact 🎯 L’effet d’entraînement limite la stagnation des micro-organismes." },
      { text: "L’abolition de la barrière épithéliale", correct: false, correction: "Non chef 😭 Elle facilite la pénétration des agents." },
      { text: "L’absence de microbiote protecteur", correct: false, correction: "Attention, faux : Les flores résidentes participent aux défenses." },
      { text: "L’inhibition permanente de toute immunité innée", correct: false, correction: "Pas cette fois. Elle compromet la lutte anti-infectieuse." },
      { text: "La stagnation prolongée des urines", correct: false, correction: "Pas cette fois. Elle favorise au contraire la prolifération microbienne." },
    ],
    explanation: "L’écoulement des fluides, la clairance mucociliaire et l’intégrité des épithéliums sont des barrières importantes."
  },
  {
    id: 36,
    type: 'QRM',
    question: "Quelles défenses anatomiques ou locales participent à la protection anti-infectieuse ?",
    options: [
      { text: "La paralysie des cils respiratoires", correct: false, correction: "Non chef 😭 Elle gêne l’évacuation du mucus et favorise les infections." },
      { text: "Les peptides antimicrobiens", correct: true, correction: "Bien vu ! Ils contribuent à la défense locale." },
      { text: "Le microbiote résident", correct: true, correction: "Tout à fait. Il participe à la résistance à la colonisation." },
      { text: "Les jonctions serrées épithéliales", correct: true, correction: "Exact 🎯 Elles limitent le franchissement entre cellules." },
      { text: "La peau et les muqueuses", correct: true, correction: "Oui boss 🧠 Elles forment des barrières physiques contre les agents infectieux." },
    ],
    explanation: "Les défenses locales associent barrières physiques, sécrétions, clairance et compétition par le microbiote."
  },
  {
    id: 37,
    type: 'QCM',
    question: "Quel couple de cellules est particulièrement impliqué dans la phagocytose de l’immunité innée ?",
    options: [
      { text: "Les seuls lymphocytes B et plasmocytes", correct: false, correction: "Pas cette fois. Ils interviennent principalement dans la réponse humorale." },
      { text: "Les macrophages et les polynucléaires neutrophiles", correct: true, correction: "Bien vu ! Ces effecteurs capturent et détruisent les agents infectieux." },
      { text: "Les fibroblastes et ostéoblastes uniquement", correct: false, correction: "Non chef 😭 Ce ne sont pas les principaux phagocytes immunitaires." },
      { text: "Les seuls lymphocytes T CD8", correct: false, correction: "Faux 💀 Ils sont surtout cytotoxiques contre des cellules cibles." },
      { text: "Les érythrocytes et les plaquettes exclusivement", correct: false, correction: "Faux 💀 Ils ne sont pas les principaux phagocytes cités." },
    ],
    explanation: "Les PNN et macrophages sont des acteurs majeurs de l’immunité innée, notamment de la réaction inflammatoire locale."
  },
  {
    id: 38,
    type: 'QRM',
    question: "À propos de l’immunité innée et de l’inflammation, quelles propositions sont exactes ?",
    options: [
      { text: "Toute inflammation prouve une origine infectieuse", correct: false, correction: "Faux 💀 Elle peut aussi suivre un traumatisme ou une chirurgie." },
      { text: "L’immunité innée repose exclusivement sur les anticorps IgG", correct: false, correction: "Attention, faux : Les anticorps relèvent de la réponse humorale adaptative." },
      { text: "L’immunité innée réagit rapidement à des motifs microbiens", correct: true, correction: "Bien vu ! Elle utilise des récepteurs de reconnaissance de motifs." },
      { text: "La phagocytose peut s’accompagner de production de radicaux libres", correct: true, correction: "Oui boss 🧠 Ces molécules participent à la destruction des microbes et peuvent léser les tissus." },
      { text: "L’inflammation entraîne une vasodilatation locale", correct: true, correction: "Tout à fait. Elle facilite le recrutement des effecteurs." },
    ],
    explanation: "La réaction inflammatoire sert à contrôler l’agression et à réparer les tissus, mais elle n’est pas spécifique de l’infection."
  },
  {
    id: 39,
    type: 'QCM',
    question: "Que reconnaissent les PRR de l’immunité innée ?",
    options: [
      { text: "Le seul ADN humain sain", correct: false, correction: "Attention, faux : Leur fonction est notamment la reconnaissance de motifs microbiens." },
      { text: "Un anticorps IgG propre à chaque patient", correct: false, correction: "Pas cette fois. Les PRR reconnaissent des motifs, pas uniquement des immunoglobulines." },
      { text: "Des motifs moléculaires de pathogènes appelés PAMP", correct: true, correction: "Oui boss 🧠 C’est le principe de la reconnaissance innée." },
      { text: "Un récepteur hormonal de l’hypothalamus", correct: false, correction: "Pas cette fois. Les PRR sont des récepteurs de reconnaissance du danger ou du non-soi." },
      { text: "Exclusivement les antigènes présentés par les lymphocytes B", correct: false, correction: "Faux 💀 Ce n’est pas leur unique cible ni leur mécanisme." },
    ],
    explanation: "PAMP : motifs microbiens ; PRR : récepteurs de reconnaissance ; TLR : famille majeure de PRR."
  },
  {
    id: 40,
    type: 'QRM',
    question: "Concernant les PRR, TLR et voies de signalisation, quelles propositions sont exactes ?",
    options: [
      { text: "Les TLR appartiennent aux PRR", correct: true, correction: "Oui boss 🧠 Ils participent à la reconnaissance des motifs microbiens." },
      { text: "La voie NF-κB est évoquée parmi les voies de signalisation", correct: true, correction: "Bien vu ! Elle participe à la régulation des gènes inflammatoires." },
      { text: "Les PAMP sont des anticorps produits par les plasmocytes", correct: false, correction: "Pas cette fois. Ce sont des motifs associés aux agents microbiens." },
      { text: "Les PRR sont exclusivement des récepteurs des lymphocytes B mémoires", correct: false, correction: "Non chef 😭 Ils sont utilisés notamment par des cellules de l’immunité innée." },
      { text: "La reconnaissance d’un PAMP peut activer une cascade intracellulaire", correct: true, correction: "Exact 🎯 Elle modifie notamment la transcription de médiateurs inflammatoires." },
    ],
    explanation: "La reconnaissance innée n’est pas clonale comme celle des lymphocytes, mais différents PRR permettent une réponse adaptée au motif reconnu."
  },
  {
    id: 41,
    type: 'QCM',
    question: "Quelle proposition définit correctement une cytokine ?",
    options: [
      { text: "Une bactérie produisant du pus", correct: false, correction: "Faux 💀 Une cytokine est un médiateur de l’hôte." },
      { text: "Une molécule de communication modulant les réponses immunitaires", correct: true, correction: "Tout à fait. Interleukines, interférons, TNF et chimiokines en sont des exemples." },
      { text: "Un constituant exclusif du peptidoglycane", correct: false, correction: "Non chef 😭 Le peptidoglycane est un constituant bactérien." },
      { text: "Un prion transformé par le foie", correct: false, correction: "Faux 💀 Les cytokines ne sont pas des prions." },
      { text: "Une immunoglobuline uniquement membranaire", correct: false, correction: "Attention, faux : Les anticorps et cytokines sont deux catégories distinctes." },
    ],
    explanation: "Les cytokines orchestrent recrutement, activation et régulation des effecteurs ; leur excès peut contribuer aux défaillances systémiques."
  },
  {
    id: 42,
    type: 'QRM',
    question: "Concernant les cytokines, quelles propositions sont exactes ?",
    options: [
      { text: "Une production massive de cytokines est toujours bénéfique", correct: false, correction: "Attention, faux : Elle peut être délétère et participer à la dysfonction d’organes." },
      { text: "La réponse inflammatoire doit être régulée", correct: true, correction: "Exact 🎯 Un emballement des médiateurs contribue aux états de choc." },
      { text: "Les interleukines sont des cytokines", correct: true, correction: "Bien vu ! Elles servent à communiquer entre cellules immunitaires." },
      { text: "Les chimiokines favorisent le recrutement cellulaire", correct: true, correction: "Tout à fait. Elles interviennent dans le chimiotactisme." },
      { text: "Le TNF est une cytokine", correct: true, correction: "Oui boss 🧠 Il figure dans la classification donnée." },
    ],
    explanation: "L’équilibre entre activation et inhibition de la réaction inflammatoire est crucial pour l’hôte."
  },
  {
    id: 43,
    type: 'QCM',
    question: "Quelle voie d’activation du complément fait intervenir classiquement un complexe antigène-anticorps ?",
    options: [
      { text: "La voie des lectines exclusivement", correct: false, correction: "Faux 💀 Elle reconnaît des motifs glucidiques microbiens." },
      { text: "La voie des ribosomes", correct: false, correction: "Attention, faux : Elle n’existe pas dans la classification du complément." },
      { text: "La voie alterne uniquement", correct: false, correction: "Non chef 😭 Elle peut être activée directement par certaines surfaces microbiennes." },
      { text: "La voie de la transcriptase inverse", correct: false, correction: "Pas cette fois. Cette enzyme appartient au cycle des rétrovirus." },
      { text: "La voie classique", correct: true, correction: "Tout à fait. Le cours la rattache aux anticorps fixés à l’antigène." },
    ],
    explanation: "Le complément possède trois voies d’activation citées : classique, alterne et lectines."
  },
  {
    id: 44,
    type: 'QRM',
    question: "Concernant le complément, quelles propositions sont exactes ?",
    options: [
      { text: "Le complément est composé uniquement de globules rouges", correct: false, correction: "Non chef 😭 Il s’agit d’un système de protéines solubles." },
      { text: "La voie alterne peut être activée par des surfaces microbiennes", correct: true, correction: "Exact 🎯 Elle ne dépend pas obligatoirement d’un anticorps." },
      { text: "Le complexe d’attaque membranaire peut provoquer une lyse cellulaire", correct: true, correction: "Tout à fait. Il forme des pores membranaires." },
      { text: "La voie des lectines fait partie des voies d’activation", correct: true, correction: "Bien vu ! C’est la troisième voie du cours." },
      { text: "Il comporte des protéines plasmatiques activées en cascade", correct: true, correction: "Oui boss 🧠 Elles sont produites notamment par le foie." },
    ],
    explanation: "Les trois voies convergent vers des effecteurs communs, notamment le complexe d’attaque membranaire."
  },
  {
    id: 45,
    type: 'QCM',
    question: "Quel type cellulaire réalise principalement la cytotoxicité adaptative décrite dans le cours ?",
    options: [
      { text: "Le globule rouge", correct: false, correction: "Non chef 😭 Il transporte l’oxygène." },
      { text: "Le plasmocyte", correct: false, correction: "Faux 💀 Il sécrète des anticorps." },
      { text: "Le polynucléaire éosinophile exclusivement", correct: false, correction: "Attention, faux : Il n’est pas l’effecteur central de cette réponse." },
      { text: "Le lymphocyte T CD8 cytotoxique", correct: true, correction: "Tout à fait. Il peut induire l’apoptose d’une cellule infectée ciblée." },
      { text: "La cellule épithéliale kératinisée", correct: false, correction: "Faux 💀 Elle participe à la barrière anatomique." },
    ],
    explanation: "La réponse cellulaire adaptative implique les LT CD8 ; elle est particulièrement pertinente contre des agents intracellulaires."
  },
  {
    id: 46,
    type: 'QRM',
    question: "Concernant les réponses immunitaires adaptatives, quelles propositions sont exactes ?",
    options: [
      { text: "La réponse humorale repose sur les lymphocytes B et les plasmocytes", correct: true, correction: "Bien vu ! Les plasmocytes sécrètent les anticorps." },
      { text: "La réponse adaptative initiale apparaît obligatoirement en quelques secondes", correct: false, correction: "Faux 💀 Une première réponse prend du temps à se mettre en place." },
      { text: "Tous les lymphocytes produisent les mêmes anticorps contre toutes les infections", correct: false, correction: "Attention, faux : La spécificité dépend des clones lymphocytaires." },
      { text: "L’activation clonale augmente le nombre de cellules spécifiques", correct: true, correction: "Oui boss 🧠 Elle suit la présentation et la reconnaissance des antigènes." },
      { text: "La réponse cellulaire implique les lymphocytes T CD8", correct: true, correction: "Tout à fait. Elle détruit des cellules cibles infectées." },
    ],
    explanation: "La réponse adaptative comprend des branches cellulaire et humorale, spécifiques de l’antigène et capables de mémoire."
  },
  {
    id: 47,
    type: 'QCM',
    question: "Quel anticorps est classiquement produit précocement et possède une structure pentamérique ?",
    options: [
      { text: "IgG", correct: false, correction: "Pas cette fois. Elles sont monomériques dans le cours et apparaissent plus tardivement." },
      { text: "Aucun anticorps", correct: false, correction: "Pas cette fois. Les IgM sont bien des immunoglobulines." },
      { text: "IgM", correct: true, correction: "Oui boss 🧠 Ce sont les immunoglobulines précoces pentamériques citées." },
      { text: "IgE", correct: false, correction: "Faux 💀 Elles ne correspondent pas à la classe pentamérique classique." },
      { text: "IgA uniquement", correct: false, correction: "Attention, faux : Elles sont notamment associées aux muqueuses." },
    ],
    explanation: "En première approche sérologique, retenir IgM précoces et IgG plus tardives et durables, avec prudence sur l’interprétation clinique."
  },
  {
    id: 48,
    type: 'QRM',
    question: "Quelles propositions sur les immunoglobulines sont justes ?",
    options: [
      { text: "Les IgM sont classiquement précoces", correct: true, correction: "Exact 🎯 Leur détection peut orienter vers une réponse récente selon le contexte." },
      { text: "Une IgM positive prouve à elle seule une infection aiguë dans toutes les maladies", correct: false, correction: "Pas cette fois. Une sérologie se lit selon le germe, les délais et les performances du test." },
      { text: "Une IgG positive prouve à elle seule une infection active en cours", correct: false, correction: "Non chef 😭 Elle peut témoigner d’une exposition ancienne ou d’une vaccination." },
      { text: "Les IgA jouent un rôle important au niveau des muqueuses", correct: true, correction: "Oui boss 🧠 C’est leur localisation privilégiée dans le cours." },
      { text: "Les IgG peuvent persister durablement", correct: true, correction: "Bien vu ! Elles sont souvent associées à une mémoire d’exposition." },
    ],
    explanation: "Les cinétiques IgM et IgG sont des repères utiles, jamais des diagnostics universels hors du contexte et du test utilisé."
  },
  {
    id: 49,
    type: 'QCM',
    question: "Quelle cellule joue un rôle central de coordination entre immunité cellulaire et humorale ?",
    options: [
      { text: "Le polynucléaire neutrophile", correct: false, correction: "Attention, faux : Il intervient surtout dans l’immunité innée." },
      { text: "L’hépatocyte", correct: false, correction: "Faux 💀 Il produit notamment des protéines du complément, mais pas le rôle central décrit." },
      { text: "Le lymphocyte T CD4 auxiliaire", correct: true, correction: "Oui boss 🧠 Le LT helper module les réponses via des cytokines." },
      { text: "Le globule rouge", correct: false, correction: "Faux 💀 Il n’assure pas cette coordination immunitaire." },
      { text: "Le kératinocyte uniquement", correct: false, correction: "Pas cette fois. Il participe aux défenses locales." },
    ],
    explanation: "Le LT CD4 orchestre des réponses adaptatives via ses fonctions auxiliaires et ses cytokines."
  },
  {
    id: 50,
    type: 'QRM',
    question: "Au sujet de la mémoire immunitaire, quelles propositions sont correctes ?",
    options: [
      { text: "Une réponse secondaire peut être beaucoup plus rapide que la première", correct: true, correction: "Oui boss 🧠 Les clones mémoires sont mobilisables rapidement." },
      { text: "Les organes lymphoïdes secondaires abritent des cellules mémoires", correct: true, correction: "Tout à fait. Le cours cite notamment les ganglions et la rate." },
      { text: "Toute sérologie positive signifie que le patient est actuellement contagieux", correct: false, correction: "Attention, faux : Les anticorps peuvent persister après l’épisode infectieux." },
      { text: "Certaines cellules lymphocytaires deviennent mémoires après la réponse initiale", correct: true, correction: "Bien vu ! Elles facilitent la réponse lors d’une nouvelle exposition." },
      { text: "La mémoire immunitaire est exclusivement produite par les neutrophiles", correct: false, correction: "Faux 💀 Elle concerne surtout l’immunité adaptative." },
    ],
    explanation: "L’expansion clonale et les cellules mémoires expliquent une réponse secondaire plus rapide, principe majeur de la vaccination."
  },
  {
    id: 51,
    type: 'QCM',
    question: "Quel événement fait partie des étapes nécessaires au développement d’une infection ?",
    options: [
      { text: "L’absence totale d’adhésion aux tissus", correct: false, correction: "Non chef 😭 L’adhésion constitue souvent une étape fondamentale." },
      { text: "Le franchissement d’une barrière puis l’adhésion et la colonisation", correct: true, correction: "Exact 🎯 Ces étapes précèdent la multiplication et les éventuels dommages." },
      { text: "Une antibiothérapie préalable dans tous les cas", correct: false, correction: "Pas cette fois. Les infections peuvent débuter sans exposition aux antibiotiques." },
      { text: "L’élimination obligatoire de tout microbiote avant la contamination", correct: false, correction: "Attention, faux : Ce n’est pas une condition générale." },
      { text: "L’obligation pour tous les microbes de provoquer immédiatement un choc", correct: false, correction: "Pas cette fois. La gravité varie énormément." },
    ],
    explanation: "Le cours décrit pénétration, adhésion, colonisation, échappement aux défenses, lésions puis diffusion possible."
  },
  {
    id: 52,
    type: 'QRM',
    question: "Concernant l’installation et la dissémination d’une infection, quelles propositions sont exactes ?",
    options: [
      { text: "Le pathogène doit pouvoir se multiplier dans un milieu hostile", correct: true, correction: "Oui boss 🧠 Il fait face aux défenses de l’hôte." },
      { text: "Les lésions tissulaires peuvent provenir de l’inflammation elle-même", correct: true, correction: "Exact 🎯 Les radicaux libres peuvent endommager les tissus voisins." },
      { text: "La diffusion peut emprunter la voie sanguine ou lymphatique", correct: true, correction: "Bien vu ! Ces voies permettent une dissémination à distance." },
      { text: "Certains agents utilisent des cellules phagocytaires comme « cheval de Troie »", correct: true, correction: "Tout à fait. Le cours mentionne ce mécanisme de dissémination." },
      { text: "Une infection demeure toujours limitée à la porte d’entrée", correct: false, correction: "Non chef 😭 Une dissémination systémique est possible." },
    ],
    explanation: "Le pathogène comme la réponse de l’hôte peuvent contribuer à la symptomatologie et aux lésions."
  },
  {
    id: 53,
    type: 'QCM',
    question: "Quelle mesure vise surtout à limiter la colonisation par un agent pathogène ?",
    options: [
      { text: "Multiplier les matériels étrangers inutiles", correct: false, correction: "Non chef 😭 Ils peuvent constituer des supports d’adhésion." },
      { text: "Préserver un microbiote protecteur et diversifié", correct: true, correction: "Bien vu ! La compétition microbienne constitue une défense locale." },
      { text: "Supprimer sans distinction toutes les flores résidentes", correct: false, correction: "Faux 💀 Cela peut fragiliser la résistance à la colonisation." },
      { text: "Favoriser la stagnation des sécrétions", correct: false, correction: "Pas cette fois. Cela peut augmenter le risque de prolifération." },
      { text: "Interrompre systématiquement toute vaccination", correct: false, correction: "Faux 💀 La vaccination prépare la réponse immune." },
    ],
    explanation: "La lutte anti-infectieuse agit aux différentes étapes : entrée, adhésion, colonisation, multiplication et réponse immune."
  },
  {
    id: 54,
    type: 'QRM',
    question: "Parmi les moyens de lutte anti-infectieuse, lesquels sont cohérents avec le cours ?",
    options: [
      { text: "Les mesures d’hygiène limitent le franchissement et la transmission", correct: true, correction: "Bien vu ! Elles constituent une prévention de base." },
      { text: "Augmenter systématiquement l’inflammation jusqu’au choc", correct: false, correction: "Attention, faux : Une inflammation excessive est délétère." },
      { text: "Limiter les dispositifs étrangers inutiles peut réduire les supports d’adhésion", correct: true, correction: "Tout à fait. Le matériel peut faciliter l’installation de certains microbes." },
      { text: "La vaccination prépare la réponse adaptative", correct: true, correction: "Exact 🎯 Elle exploite la mémoire immunitaire." },
      { text: "Un drainage chirurgical peut être nécessaire en présence d’un foyer collecté", correct: true, correction: "Oui boss 🧠 Il réduit l’inoculum et complète parfois les anti-infectieux." },
    ],
    explanation: "Le traitement d’une infection ne se limite pas à prescrire un médicament : contrôle du foyer, terrain et prévention comptent aussi."
  },
  {
    id: 55,
    type: 'QCM',
    question: "Quel élément de l’interrogatoire est présenté comme un des meilleurs critères diagnostiques en infectiologie ?",
    options: [
      { text: "La présence automatique d’une fièvre dans toute infection", correct: false, correction: "Pas cette fois. Certaines infections ne s’accompagnent pas de fièvre." },
      { text: "La couleur préférée du patient", correct: false, correction: "Pas cette fois. Elle n’oriente pas le diagnostic infectieux." },
      { text: "Le résultat d’une CRP sans histoire clinique", correct: false, correction: "Attention, faux : Un marqueur isolé est peu spécifique." },
      { text: "La seule taille du patient", correct: false, correction: "Non chef 😭 Elle ne suffit pas à caractériser un processus infectieux." },
      { text: "L’évolution temporelle et la séquence des symptômes", correct: true, correction: "Exact 🎯 Leur chronologie aide à identifier l’étiologie et la gravité." },
    ],
    explanation: "Le cours insiste sur la précision chronologique : début brutal ou progressif, durée, succession des symptômes et réponse aux traitements."
  },
  {
    id: 56,
    type: 'QRM',
    question: "Quelles données doivent être recherchées à l’interrogatoire infectieux ?",
    options: [
      { text: "Les voyages, y compris leur contexte et leurs dates", correct: true, correction: "Oui boss 🧠 Ils orientent les expositions et les maladies importées." },
      { text: "Les habitudes professionnelles et sexuelles sont sans intérêt", correct: false, correction: "Non chef 😭 Elles peuvent au contraire faire identifier des expositions." },
      { text: "Les traitements et le statut vaccinal", correct: true, correction: "Tout à fait. Ils modifient les risques et la présentation clinique." },
      { text: "Les contacts avec les animaux", correct: true, correction: "Exact 🎯 Ils peuvent révéler une zoonose ou une exposition spécifique." },
      { text: "La présence d’un dispositif médical ou une chirurgie ancienne", correct: true, correction: "Bien vu ! Ce sont des facteurs de porte d’entrée et d’adhésion." },
    ],
    explanation: "L’interrogatoire doit être précis, complet et sans jugement : terrain, expositions, antécédents et évolution."
  },
  {
    id: 57,
    type: 'QCM',
    question: "Dans le cours, quels sont les trois éléments de l’altération de l’état général (« trois A ») ?",
    options: [
      { text: "Apnée, acidose et alcalose", correct: false, correction: "Faux 💀 Ce sont d’autres paramètres cliniques et biologiques." },
      { text: "Anxiété, agitation et aphasie", correct: false, correction: "Faux 💀 Ce n’est pas la triade décrite." },
      { text: "Arthralgie, arythmie et anurie", correct: false, correction: "Pas cette fois. Elles correspondent à d’autres signes." },
      { text: "Anémie, acouphènes et ataxie", correct: false, correction: "Non chef 😭 Il ne s’agit pas de la définition retenue." },
      { text: "Asthénie, anorexie et amaigrissement", correct: true, correction: "Bien vu ! Ce sont les trois composantes mentionnées." },
    ],
    explanation: "Les « trois A » sont une façon pratique d’explorer les signes généraux à l’anamnèse."
  },
  {
    id: 58,
    type: 'QRM',
    question: "Concernant les signes d’inflammation, quelles propositions sont exactes ?",
    options: [
      { text: "La chaleur est un signe local classique", correct: true, correction: "Tout à fait. Elle accompagne l’hyperémie inflammatoire." },
      { text: "La perte de fonction fait partie des cinq signes locaux", correct: true, correction: "Exact 🎯 Elle complète rougeur, chaleur, tuméfaction et douleur." },
      { text: "Le gonflement (« tumeur » au sens historique) est un signe local", correct: true, correction: "Oui boss 🧠 Il ne signifie pas nécessairement néoplasie." },
      { text: "La fièvre prouve à elle seule une infection bactérienne", correct: false, correction: "Attention, faux : Elle est non spécifique et peut être absente d’une infection." },
      { text: "La rougeur fait partie des signes locaux historiques", correct: true, correction: "Bien vu ! Elle traduit notamment des modifications vasculaires." },
    ],
    explanation: "Les cinq signes locaux classiques sont rubor, calor, tumor, dolor et functio laesa ; des signes généraux peuvent s’y associer."
  },
  {
    id: 59,
    type: 'QCM',
    question: "Quelle affirmation concernant la fièvre est la plus juste ?",
    options: [
      { text: "Une seule température normale exclut une infection grave", correct: false, correction: "Pas cette fois. Une mesure isolée n’élimine pas une infection." },
      { text: "Elle ne survient jamais après une intervention chirurgicale", correct: false, correction: "Attention, faux : Une chirurgie peut s’accompagner d’une inflammation fébrile non infectieuse." },
      { text: "Elle accompagne obligatoirement toutes les infections", correct: false, correction: "Pas cette fois. Certaines infections peuvent être afébriles, voire s’accompagner d’hypothermie." },
      { text: "Elle constitue un signe important mais non spécifique d’infection", correct: true, correction: "Exact 🎯 Son interprétation dépend du contexte et de l’évolution clinique." },
      { text: "Elle signe nécessairement une origine bactérienne", correct: false, correction: "Non chef 😭 Des infections virales et des causes non infectieuses peuvent donner de la fièvre." },
    ],
    explanation: "Il faut toujours distinguer inflammation, fièvre et infection : ce ne sont pas des synonymes."
  },
  {
    id: 60,
    type: 'QRM',
    question: "Concernant la fièvre et ses profils, quelles propositions sont exactes selon le cours ?",
    options: [
      { text: "Le support retient 38,5 °C comme seuil pratique de fièvre", correct: true, correction: "Oui boss 🧠 Il distingue ce seuil pragmatique du seuil théorique à 38 °C." },
      { text: "La tendance thermique peut être déterminée par une mesure isolée", correct: false, correction: "Non chef 😭 Le cours conseille de raisonner sur plusieurs valeurs successives." },
      { text: "Une fièvre vespérale répétée peut évoquer une tuberculose", correct: true, correction: "Exact 🎯 Ce profil est cité comme signe d’orientation." },
      { text: "Une fièvre récurrente avec intervalles apyrétiques peut orienter vers un obstacle canalaire", correct: true, correction: "Bien vu ! Le cours cite notamment une atteinte biliaire ou urinaire." },
      { text: "Une température inférieure à 38 °C exclut toujours une infection grave", correct: false, correction: "Pas cette fois. Une infection peut être afébrile ou hypothermique." },
    ],
    explanation: "La courbe thermique et son évolution sont plus informatives qu’un chiffre isolé."
  },
  {
    id: 61,
    type: 'QCM',
    question: "Où est situé le centre de thermorégulation décrit dans le cours ?",
    options: [
      { text: "Dans le cervelet", correct: false, correction: "Faux 💀 Le cervelet n’est pas le centre cité." },
      { text: "Dans la moelle osseuse", correct: false, correction: "Pas cette fois. Elle participe à l’hématopoïèse." },
      { text: "Dans l’hypothalamus antérieur", correct: true, correction: "Oui boss 🧠 Le cours y situe les neurones thermosensibles." },
      { text: "Dans la rate", correct: false, correction: "Attention, faux : La rate est un organe lymphoïde, pas le thermostat central." },
      { text: "Dans le cortex occipital", correct: false, correction: "Faux 💀 Il est notamment impliqué dans la vision." },
    ],
    explanation: "L’hypothalamus coordonne thermolyse et thermogenèse en fonction de la consigne thermique."
  },
  {
    id: 62,
    type: 'QRM',
    question: "Quelles réactions appartiennent aux mécanismes de thermorégulation ?",
    options: [
      { text: "La sudation participe à la thermolyse", correct: true, correction: "Bien vu ! L’évaporation favorise la perte de chaleur." },
      { text: "La thermolyse implique nécessairement la contraction musculaire intense", correct: false, correction: "Attention, faux : Celle-ci augmente la production de chaleur." },
      { text: "La vasodilatation cutanée facilite la dissipation thermique", correct: true, correction: "Tout à fait. Elle augmente les pertes de chaleur à la surface." },
      { text: "Les frissons participent à la thermogenèse", correct: true, correction: "Oui boss 🧠 Les contractions musculaires produisent de la chaleur." },
      { text: "La thermogenèse est principalement caractérisée par la sudation", correct: false, correction: "Faux 💀 La sudation sert plutôt à perdre de la chaleur." },
    ],
    explanation: "Lorsque la température mesurée est inférieure à la consigne, les frissons apparaissent ; quand elle est supérieure, la thermolyse est activée."
  },
  {
    id: 63,
    type: 'QCM',
    question: "Quel groupe d’éléments fait partie des quatre priorités de l’examen d’un patient fébrile dans le cours ?",
    options: [
      { text: "La percussion hépatique uniquement", correct: false, correction: "Attention, faux : L’examen doit être global." },
      { text: "La couleur des cheveux et l’acuité visuelle", correct: false, correction: "Faux 💀 Ce ne sont pas les quatre éléments retenus." },
      { text: "La seule mesure du poids et de la taille", correct: false, correction: "Pas cette fois. Elle ne permet pas de rechercher les signes immédiats de gravité." },
      { text: "Conscience/nuque, peau, pression artérielle et respiration", correct: true, correction: "Oui boss 🧠 Ces quatre axes dépistent plusieurs urgences infectieuses." },
      { text: "La glycémie capillaire seule", correct: false, correction: "Pas cette fois. Elle peut être utile, mais ne résume pas les quatre axes du cours." },
    ],
    explanation: "Chez tout patient fébrile, rechercher atteinte neurologique ou méningée, marbrures, hypotension et polypnée."
  },
  {
    id: 64,
    type: 'QRM',
    question: "Quels signes imposent une vigilance particulière lors de l’examen d’un patient fébrile ?",
    options: [
      { text: "Une température normale isolée exclut toute gravité", correct: false, correction: "Non chef 😭 L’apyrexie ne sécurise pas à elle seule un patient." },
      { text: "Une hypotension artérielle", correct: true, correction: "Exact 🎯 Elle peut témoigner d’une défaillance circulatoire." },
      { text: "Une polypnée", correct: true, correction: "Tout à fait. Elle peut signaler une défaillance respiratoire ou métabolique." },
      { text: "Des marbrures cutanées", correct: true, correction: "Bien vu ! Elles orientent vers un trouble de perfusion." },
      { text: "Une confusion nouvelle", correct: true, correction: "Oui boss 🧠 Elle peut traduire une dysfonction neurologique." },
    ],
    explanation: "La recherche clinique de défaillance d’organe prime sur l’intensité isolée de la fièvre."
  },
  {
    id: 65,
    type: 'QCM',
    question: "Quelle définition correspond au sepsis ?",
    options: [
      { text: "Une infection avec une CRP supérieure à un seuil isolé", correct: false, correction: "Attention, faux : Aucun taux isolé de CRP ne définit le sepsis." },
      { text: "Une dysfonction d’organe menaçant le pronostic vital due à une réponse dérégulée à une infection", correct: true, correction: "Tout à fait. C’est la définition centrale du sepsis." },
      { text: "La seule présence de bactéries dans les urines", correct: false, correction: "Faux 💀 Une bactériurie ne suffit pas à définir un sepsis." },
      { text: "Un état nécessitant forcément une température supérieure à 41 °C", correct: false, correction: "Faux 💀 Une fièvre extrême n’est pas obligatoire." },
      { text: "Une infection toujours limitée à la peau", correct: false, correction: "Non chef 😭 Un sepsis est une atteinte systémique avec dysfonction organique." },
    ],
    explanation: "Le cours relie la définition opérationnelle du sepsis à une augmentation de SOFA d’au moins deux points attribuable à l’infection."
  },
  {
    id: 66,
    type: 'QRM',
    question: "Concernant le score qSOFA, quelles propositions sont exactes ?",
    options: [
      { text: "Une PAS supérieure à 100 mmHg figure parmi les critères cités dans le cours", correct: true, correction: "Oui. C’est le seuil formulé dans le support fourni." },
      { text: "Un qSOFA de 2 prouve à lui seul un choc septique", correct: false, correction: "Attention, faux : Il signale un risque et conduit à une évaluation urgente ; il ne pose pas ce diagnostic." },
      { text: "Une fréquence respiratoire supérieure à 22/min est un critère", correct: true, correction: "Exact. Le cours retient une fréquence respiratoire supérieure à 22/min." },
      { text: "Une pression artérielle systolique inférieure ou égale à 100 mmHg est citée dans le cours comme critère", correct: false, correction: "Non, cette proposition ne reprend pas le seuil tel qu’il est écrit dans le support." },
      { text: "Une altération de l’état mental constitue un critère", correct: true, correction: "Oui boss 🧠 Confusion ou troubles de conscience doivent alerter." },
    ],
    explanation: "Selon le support : PAS supérieure à 100 mmHg, FR supérieure à 22/min et confusion. Deux critères positifs indiquent un risque d’évolution vers un sepsis ou un choc septique."
  },
  {
    id: 67,
    type: 'QCM',
    question: "Quelle association définit le mieux le choc septique dans le cadre exposé ?",
    options: [
      { text: "Une simple fièvre supérieure à 38,5 °C", correct: false, correction: "Pas cette fois. La fièvre seule ne définit jamais un choc septique." },
      { text: "Une infection virale banale sans dysfonction d’organe", correct: false, correction: "Faux 💀 Il faut un sepsis et des anomalies hémodynamiques et métaboliques." },
      { text: "Une CRP augmentée et des leucocytes normaux", correct: false, correction: "Non chef 😭 Aucun de ces deux marqueurs ne définit un choc." },
      { text: "Une élévation isolée de la fréquence cardiaque", correct: false, correction: "Pas cette fois. Elle est non spécifique." },
      { text: "Un sepsis nécessitant des vasopresseurs pour maintenir une PAM supérieure à 65 mmHg et avec des lactates > 2 mmol/L", correct: true, correction: "Bien vu ! Le cours associe un sepsis, le besoin de vasopresseurs et des lactates supérieurs à 2 mmol/L." },
    ],
    explanation: "Le choc septique associe une défaillance circulatoire et des anomalies métaboliques profondes dans un contexte de sepsis."
  },
  {
    id: 68,
    type: 'QRM',
    question: "Concernant le sepsis et le choc septique, quelles propositions sont justes ?",
    options: [
      { text: "Le sepsis peut entraîner des dysfonctions d’organes menaçant le pronostic vital", correct: true, correction: "Oui boss 🧠 C’est sa définition." },
      { text: "Un qSOFA négatif prouve qu’aucun sepsis n’est possible", correct: false, correction: "Non chef 😭 Ce score est un outil d’alerte, pas un test d’exclusion." },
      { text: "Des lactates supérieurs à 2 mmol/L interviennent dans la définition du choc septique", correct: true, correction: "Bien vu ! Ils s’interprètent avec le besoin de vasopresseurs et le contexte hémodynamique." },
      { text: "Une réponse inflammatoire dérégulée peut contribuer à la défaillance circulatoire", correct: true, correction: "Tout à fait. L’emballement des cytokines est évoqué." },
      { text: "La noradrénaline est un vasopresseur utilisé dans le choc septique", correct: true, correction: "Exact 🎯 Le cours la cite parmi les drogues vasopressives." },
    ],
    explanation: "Le choc septique est une urgence vitale ; ne pas confondre marqueurs de dépistage, dysfonction organique et critères de choc."
  },
  {
    id: 69,
    type: 'QCM',
    question: "Quelle conduite est soulignée face à un purpura fulminans suspecté ?",
    options: [
      { text: "Prescrire uniquement un antipyrétique et un contrôle ultérieur", correct: false, correction: "Attention, faux : Cela ne traite pas la cause potentiellement fulminante." },
      { text: "Considérer toutes les lésions purpuriques comme bénignes", correct: false, correction: "Non chef 😭 Un purpura extensif peut évoluer vers la nécrose et le choc." },
      { text: "Attendre une sérologie IgG positive avant d’agir", correct: false, correction: "Faux 💀 L’urgence ne permet pas ce délai." },
      { text: "Mettre en œuvre immédiatement une prise en charge urgente avec antibiothérapie probabiliste", correct: true, correction: "Tout à fait. Le cours insiste sur l’injection d’antibiotiques dès la suspicion." },
      { text: "Attendre la disparition spontanée du purpura", correct: false, correction: "Faux 💀 Le retard de prise en charge est dangereux." },
    ],
    explanation: "Le purpura fulminans est une urgence infectieuse absolue ; la suspicion clinique justifie une action immédiate."
  },
  {
    id: 70,
    type: 'QRM',
    question: "Quels terrains ou contextes doivent faire redoubler de vigilance face à une infection ?",
    options: [
      { text: "Un retour de zone d’endémie palustre", correct: true, correction: "Bien vu ! Le cours insiste sur la recherche du paludisme." },
      { text: "Une asplénie", correct: true, correction: "Oui boss 🧠 L’absence de rate expose à certaines infections graves." },
      { text: "Une infection d’organe noble", correct: true, correction: "Exact 🎯 Les atteintes du cœur, du cerveau ou des poumons peuvent se compliquer rapidement." },
      { text: "L’absence de fièvre exclut tout danger chez ces patients", correct: false, correction: "Attention, faux : Les présentations sévères peuvent être peu ou pas fébriles." },
      { text: "Une immunodépression importante", correct: true, correction: "Tout à fait. Elle augmente le risque d’infection sévère et de présentations atypiques." },
    ],
    explanation: "Terrain, exposition et localisation doivent guider l’évaluation immédiate de la gravité infectieuse."
  },
  {
    id: 71,
    type: 'QCM',
    question: "Quelle affirmation sur la CRP est juste selon le cours ?",
    options: [
      { text: "Elle suffit à confirmer un sepsis", correct: false, correction: "Pas cette fois. Le sepsis exige la recherche d’une dysfonction d’organe." },
      { text: "Elle devient toujours indétectable dans la minute suivant l’infection", correct: false, correction: "Faux 💀 Sa cinétique est différée." },
      { text: "Elle n’augmente que dans les infections bactériennes", correct: false, correction: "Attention, faux : D’autres inflammations peuvent l’élever." },
      { text: "Elle est un marqueur inflammatoire non spécifique à cinétique évolutive", correct: true, correction: "Oui boss 🧠 Le cours mentionne une hausse après 24–48 h et une demi-vie proche de 24 h." },
      { text: "Elle identifie avec certitude la bactérie responsable", correct: false, correction: "Pas cette fois. Elle est non spécifique de l’agent causal." },
    ],
    explanation: "La CRP s’interprète avec le délai d’évolution, l’examen clinique et les autres données biologiques."
  },
  {
    id: 72,
    type: 'QRM',
    question: "Concernant le syndrome inflammatoire biologique, quelles propositions sont exactes ?",
    options: [
      { text: "Une procalcitonine élevée prouve à elle seule une infection bactérienne", correct: false, correction: "Pas cette fois. Elle doit être interprétée dans le contexte clinique." },
      { text: "Des leucocytes normaux suffisent à éliminer une infection grave", correct: false, correction: "Non chef 😭 Une infection grave peut exister sans hyperleucocytose." },
      { text: "Une hyperleucocytose à polynucléaires neutrophiles peut être retrouvée", correct: true, correction: "Oui boss 🧠 Elle est classiquement observée dans de nombreuses infections bactériennes." },
      { text: "La procalcitonine peut participer à l’évaluation biologique", correct: true, correction: "Bien vu ! Elle est citée avec leucocytes et CRP." },
      { text: "La CRP est un marqueur non spécifique", correct: true, correction: "Exact 🎯 Elle n’identifie pas l’étiologie à elle seule." },
    ],
    explanation: "Aucun marqueur pris isolément ne suffit ; les associations et la clinique orientent l’interprétation."
  },
  {
    id: 73,
    type: 'QCM',
    question: "Quel tableau est le plus évocateur d’une infection bactérienne pyogène selon le cours ?",
    options: [
      { text: "Une IgG positive isolée sans signe clinique", correct: false, correction: "Non chef 😭 Elle ne suffit pas à caractériser une infection pyogène." },
      { text: "Un début brutal avec fièvre élevée, pus et syndrome inflammatoire biologique marqué", correct: true, correction: "Bien vu ! C’est le profil décrit pour les bactéries pyogènes." },
      { text: "Une mycose superficielle indolore chronique", correct: false, correction: "Faux 💀 Elle correspond à une autre catégorie d’infection." },
      { text: "Une phase asymptomatique obligatoire pendant plusieurs années", correct: false, correction: "Pas cette fois. Elle n’est pas typique du tableau pyogène décrit." },
      { text: "Une éruption virale typique systématiquement sans pus", correct: false, correction: "Faux 💀 Ce n’est pas le profil bactérien présenté." },
    ],
    explanation: "Le tableau bactérien pyogène peut être brutal et bruyant, avec suppuration, syndrome inflammatoire et risque de sepsis."
  },
  {
    id: 74,
    type: 'QRM',
    question: "Concernant les présentations bactériennes et virales, quelles propositions sont justes ?",
    options: [
      { text: "Tout syndrome pseudo-grippal nécessite des antibiotiques", correct: false, correction: "Attention, faux : Une origine virale est souvent possible sans indication d’antibiothérapie." },
      { text: "Une infection pyogène peut produire du pus", correct: true, correction: "Bien vu ! La suppuration est un signe d’orientation bactérienne." },
      { text: "Une fièvre sensible au paracétamol exclut à coup sûr une origine bactérienne", correct: false, correction: "Faux 💀 La réponse à l’antipyrétique n’est pas un test diagnostique absolu." },
      { text: "Une infection virale peut être précédée de prodromes", correct: true, correction: "Tout à fait. Le cours décrit cette installation possible." },
      { text: "Les formes asymptomatiques sont fréquentes dans certaines infections virales", correct: true, correction: "Oui boss 🧠 Elles ne sont pas incompatibles avec l’infection." },
    ],
    explanation: "Les tableaux classiques orientent, mais aucune caractéristique isolée ne suffit à identifier sûrement l’agent infectieux."
  },
  {
    id: 75,
    type: 'QCM',
    question: "Quel ensemble symptomatique correspond au syndrome pseudo-grippal décrit ?",
    options: [
      { text: "Fièvre, frissons, céphalées et arthromyalgies", correct: true, correction: "Exact 🎯 Ce sont les éléments du syndrome pseudo-grippal dans le cours." },
      { text: "Hémorragie digestive seule", correct: false, correction: "Attention, faux : Ce n’est pas le syndrome décrit." },
      { text: "Aphasie et paralysie flasque isolées", correct: false, correction: "Non chef 😭 Elles imposent une autre orientation urgente." },
      { text: "Prurit isolé sans signe général", correct: false, correction: "Pas cette fois. Il ne définit pas un syndrome pseudo-grippal." },
      { text: "Constipation isolée et douleurs lombaires mécaniques", correct: false, correction: "Pas cette fois. Ce n’est pas le tableau typique." },
    ],
    explanation: "Le syndrome pseudo-grippal est un ensemble de signes généraux fréquent dans certaines infections virales."
  },
  {
    id: 76,
    type: 'QRM',
    question: "Quelles propositions sur la sémiologie des infections virales sont exactes ?",
    options: [
      { text: "Toute infection virale est systématiquement sans fièvre", correct: false, correction: "Pas cette fois. La fièvre et les frissons peuvent être présents." },
      { text: "Certaines infections virales donnent des signes cutanés", correct: true, correction: "Exact 🎯 Le cours cite plusieurs manifestations et maladies virales." },
      { text: "La recherche d’un contage est utile", correct: true, correction: "Oui boss 🧠 Elle permet de reconstituer une exposition et un mode de transmission." },
      { text: "Toute infection virale évolue nécessairement vers le choc", correct: false, correction: "Non chef 😭 Les tableaux sévères restent une minorité selon la présentation classique du cours." },
      { text: "L’évolution est souvent spontanément favorable", correct: true, correction: "Bien vu ! Une antibiothérapie n’est généralement pas nécessaire pour une infection virale simple." },
    ],
    explanation: "L’interrogatoire et l’examen orientent, tandis que la prévention repose notamment sur vaccination et mesures d’hygiène."
  },
  {
    id: 77,
    type: 'QCM',
    question: "Quelle anomalie de la NFS peut orienter vers certaines infections parasitaires, notamment à helminthes ?",
    options: [
      { text: "Une disparition obligatoire de tous les globules rouges", correct: false, correction: "Faux 💀 Ce n’est pas un signe général de parasitose." },
      { text: "Une absence totale de plaquettes chez tous les patients", correct: false, correction: "Pas cette fois. Ce n’est pas une constante." },
      { text: "Une lymphopénie obligatoire pour toute toxoplasmose", correct: false, correction: "Faux 💀 Ce n’est pas une caractéristique universelle." },
      { text: "Une hyperéosinophilie", correct: true, correction: "Bien vu ! Le support associe les infections parasitaires à une hyperéosinophilie." },
      { text: "Une hyperleucocytose à basophiles spécifique de toutes les parasitoses", correct: false, correction: "Non chef 😭 Ce n’est pas le marqueur décrit." },
    ],
    explanation: "Le cours mentionne une hyperéosinophilie lors d’une infection parasitaire et insiste sur l’importance de l’interrogatoire."
  },
  {
    id: 78,
    type: 'QRM',
    question: "Concernant les infections parasitaires, quelles propositions sont exactes ?",
    options: [
      { text: "Les conditions environnementales n’influencent jamais les parasitoses", correct: false, correction: "Attention, faux : Les cycles et expositions environnementales sont déterminants." },
      { text: "Un interrogatoire détaillé des voyages est important", correct: true, correction: "Bien vu ! Il aide à évaluer les zones d’endémie et les expositions." },
      { text: "Une éosinophilie peut accompagner certaines parasitoses", correct: true, correction: "Oui boss 🧠 C’est un signe mis en avant pour les infections parasitaires dans le cours." },
      { text: "Les habitudes alimentaires peuvent orienter le diagnostic", correct: true, correction: "Tout à fait. Certains cycles parasitaires impliquent des aliments contaminés ou insuffisamment cuits." },
      { text: "Le cours associe les infections parasitaires à une hyperéosinophilie", correct: true, correction: "Oui. C’est la formulation générale retenue dans le support." },
    ],
    explanation: "Le cours insiste sur l’interrogatoire (voyages, alimentation, activités) et l’hyperéosinophilie associée aux parasitoses."
  },
  {
    id: 79,
    type: 'QCM',
    question: "Quel profil clinique est particulièrement inquiétant pour une infection fongique invasive ?",
    options: [
      { text: "Une IgG positive isolée contre un virus", correct: false, correction: "Pas cette fois. Ce résultat ne définit pas une mycose." },
      { text: "Une mycose cutanée superficielle stable sans signe général", correct: false, correction: "Attention, faux : Ce tableau n’évoque pas à lui seul l’invasion." },
      { text: "Une immunodépression profonde avec suspicion d’aspergillose invasive", correct: true, correction: "Exact 🎯 Les champignons peuvent provoquer une atteinte profonde grave sur ce terrain." },
      { text: "Une candidose buccale superficielle isolée chez un patient bien portant", correct: false, correction: "Pas cette fois. Elle n’équivaut pas à une mycose invasive." },
      { text: "Une absence de contact avec un animal domestique", correct: false, correction: "Non chef 😭 Elle n’exclut aucune mycose invasive." },
    ],
    explanation: "Les infections fongiques sont souvent superficielles chez l’immunocompétent, mais peuvent devenir invasives et sévères en cas d’immunodépression."
  },
  {
    id: 80,
    type: 'QRM',
    question: "Un patient sous chimiothérapie présente une fièvre et une lésion cutanée sur un dispositif médical. Quelles propositions sont justes ?",
    options: [
      { text: "Une CRP normale isolée éliminerait formellement une infection", correct: false, correction: "Pas cette fois. Ce marqueur n’a pas une valeur d’exclusion suffisante." },
      { text: "Le matériel médical est une porte d’entrée ou un support d’adhésion possible", correct: true, correction: "Exact 🎯 Les dispositifs doivent être examinés." },
      { text: "Le terrain immunodéprimé accroît le risque de complication", correct: true, correction: "Oui boss 🧠 La chimiothérapie peut affaiblir les défenses de l’hôte." },
      { text: "La présence d’un dispositif signifie nécessairement une infection prouvée", correct: false, correction: "Non chef 😭 Le dispositif est un facteur de risque, pas une preuve à lui seul." },
      { text: "L’état respiratoire, circulatoire et neurologique doit être évalué", correct: true, correction: "Bien vu ! Ce sont des axes de recherche de signes de gravité." },
    ],
    explanation: "Ce cas mobilise interrogatoire, terrain, porte d’entrée et recherche urgente d’une dysfonction d’organe."
  }
];