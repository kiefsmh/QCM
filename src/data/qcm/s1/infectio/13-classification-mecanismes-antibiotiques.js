export const meta = {
  title: 'Classification et mécanisme d’action des antibiotiques',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'À quoi correspond l\'antibiose évoquée dans l\'introduction du cours ?',
    options: [
      { text: 'À l\'absence de toute compétition entre micro-organismes', correct: false, correction: 'Non. Le cours décrit au contraire une compétition biologique.' },
      { text: 'À l\'inhibition d\'un micro-organisme par une substance produite par un autre', correct: true, correction: 'Oui. Ce phénomène naturel a inspiré la découverte d\'antibiotiques.' },
      { text: 'À la production d\'antibiotiques par des virus uniquement', correct: false, correction: 'Non. Des champignons et des bactéries ont fourni des molécules historiques.' },
      { text: 'À une vaccination contre chaque bactérie', correct: false, correction: 'Non. L\'antibiose concerne une inhibition chimique, pas l\'immunisation.' },
      { text: 'À la destruction automatique de toutes les bactéries humaines', correct: false, correction: 'Non. Un antibiotique possède un spectre limité aux espèces sensibles.' },
    ],
    explanation: 'Le cours présente l\'antibiose comme un antagonisme microbien à l\'origine de la recherche d\'antibiotiques. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles caractéristiques servent à décrire un antibiotique dans ce cours ?',
    options: [
      { text: 'Son effet bactéricide ou bactériostatique', correct: true, correction: 'Oui. Il distingue mort bactérienne et inhibition de croissance.' },
      { text: 'Son mode d\'action', correct: true, correction: 'Oui. Il indique la cible ou la voie bactérienne perturbée.' },
      { text: 'Son spectre d\'activité', correct: true, correction: 'Oui. Il décrit les espèces sur lesquelles la molécule peut agir.' },
      { text: 'L\'obligation pour toutes les molécules d\'avoir exactement la même toxicité', correct: false, correction: 'Non. Le profil de tolérance varie selon les familles.' },
      { text: 'Le fait qu\'il soit toujours actif sur tous les virus', correct: false, correction: 'Non. Un antibiotique antibactérien ne traite pas tous les agents infectieux.' },
    ],
    explanation: 'La définition pratique du support combine mode d\'action, spectre et caractère bactéricide ou bactériostatique. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel énoncé distingue correctement un effet bactériostatique d\'un effet bactéricide ?',
    options: [
      { text: 'Bactériostatique signifie que la membrane humaine est détruite', correct: false, correction: 'Non. Le terme concerne la croissance bactérienne.' },
      { text: 'Bactéricide signifie uniquement administrable par voie orale', correct: false, correction: 'Non. La voie d\'administration est une propriété différente.' },
      { text: 'Les deux termes sont synonymes d\'absence d\'activité', correct: false, correction: 'Non. Ils correspondent à deux modalités d\'action antibactérienne.' },
      { text: 'Bactériostatique signifie toujours actif sur les virus', correct: false, correction: 'Non. Cela ne décrit ni un spectre antiviral ni une indication clinique.' },
      { text: 'Bactériostatique freine la multiplication ; bactéricide tue les bactéries sensibles', correct: true, correction: 'Oui. La distinction décrit l\'effet microbiologique dans des conditions données.' },
    ],
    explanation: 'L\'effet statique ou cide est une propriété à connaître, distincte du spectre et de la voie d\'administration. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles grandes cibles ou voies sont représentées dans le schéma final du cours ?',
    options: [
      { text: 'La synthèse des protéines par le ribosome', correct: true, correction: 'Oui. Aminosides, tétracyclines et macrolides la perturbent.' },
      { text: 'La synthèse de la paroi bactérienne', correct: true, correction: 'Oui. Les β-lactamines, glycopeptides et fosfomycine en sont des exemples.' },
      { text: 'La membrane cytoplasmique', correct: true, correction: 'Oui. Polymyxines et daptomycine agissent à ce niveau.' },
      { text: 'La synthèse des acides nucléiques ou de leurs précurseurs', correct: true, correction: 'Oui. Quinolones, rifampicine et antifolates figurent dans cet ensemble.' },
      { text: 'La destruction obligatoire du noyau cellulaire bactérien', correct: false, correction: 'Non. Les bactéries n\'ont pas de noyau au sens eucaryote.' },
    ],
    explanation: 'Le schéma de conclusion organise les antibiotiques en quatre grands mécanismes. (Cours, p. 3, 17)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle structure limite l\'accès de plusieurs antibiotiques au peptidoglycane des bactéries à Gram négatif ?',
    options: [
      { text: 'La membrane externe avec ses porines', correct: true, correction: 'Oui. Elle constitue une barrière supplémentaire autour du peptidoglycane.' },
      { text: 'Un épais peptidoglycane sans membrane externe, propre aux Gram positifs', correct: false, correction: 'Non. Cette description correspond davantage aux bactéries à Gram positif.' },
      { text: 'Les mitochondries bactériennes', correct: false, correction: 'Non. Les bactéries n\'ont pas de mitochondries.' },
      { text: 'La capsule virale obligatoire', correct: false, correction: 'Non. Une capsule virale n\'explique pas l\'enveloppe des bacilles Gram négatif.' },
      { text: 'Le noyau membranaire eucaryote', correct: false, correction: 'Non. Une bactérie ne possède pas ce noyau.' },
    ],
    explanation: 'Les Gram négatif ont un peptidoglycane fin protégé par une membrane externe ; sa perméabilité influence l\'activité de plusieurs molécules. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles comparaisons entre enveloppes Gram positif et Gram négatif sont justes ?',
    options: [
      { text: 'Aucune bactérie n\'a de peptidoglycane', correct: false, correction: 'Non. Le peptidoglycane est la cible centrale des antibiotiques de la paroi.' },
      { text: 'Le peptidoglycane est généralement épais chez les Gram positifs', correct: true, correction: 'Oui. Il constitue une partie majeure de leur paroi.' },
      { text: 'La perméabilité de la membrane externe peut limiter l\'accès d\'un antibiotique', correct: true, correction: 'Oui. La molécule doit atteindre sa cible bactérienne.' },
      { text: 'Les Gram négatifs possèdent une membrane externe supplémentaire', correct: true, correction: 'Oui. Cette membrane porte notamment des porines.' },
      { text: 'Les Gram positifs ont toujours une membrane externe à lipopolysaccharides', correct: false, correction: 'Non. Cette organisation caractérise les Gram négatifs.' },
    ],
    explanation: 'L\'épaisseur du peptidoglycane et la présence d\'une membrane externe expliquent une partie des différences de spectre. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quelle étape les β-lactamines inhibent-elles principalement ?',
    options: [
      { text: 'La réplication de l\'ADN par inhibition directe de la gyrase', correct: false, correction: 'Non. C\'est le mécanisme des quinolones.' },
      { text: 'La dépolarisation calcique de la membrane', correct: false, correction: 'Non. La daptomycine agit sur la membrane cytoplasmique.' },
      { text: 'La liaison de l\'ARN polymérase à l\'ADN', correct: false, correction: 'Non. La rifampicine cible cette enzyme.' },
      { text: 'La transpeptidation du peptidoglycane via les PLP/PBP', correct: true, correction: 'Oui. Les protéines de liaison aux pénicillines réalisent cette étape de réticulation.' },
      { text: 'La synthèse protéique sur 30S', correct: false, correction: 'Non. Aminosides et tétracyclines ciblent cette sous-unité.' },
    ],
    explanation: 'Les β-lactamines se lient aux PLP et bloquent la transpeptidation terminale de la paroi. (Cours, p. 4)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles propriétés générales des β-lactamines sont exactes ?',
    options: [
      { text: 'Elles sont habituellement bactéricides sur les bactéries sensibles en croissance', correct: true, correction: 'Oui. Le blocage de la paroi peut conduire à la lyse.' },
      { text: 'Toutes ont exactement le même spectre', correct: false, correction: 'Non. Les sous-familles et molécules diffèrent nettement.' },
      { text: 'Elles agissent uniquement en détruisant la membrane cytoplasmique', correct: false, correction: 'Non. Leur cible principale est le peptidoglycane via les PLP.' },
      { text: 'Leur efficacité est surtout liée au temps pendant lequel la concentration dépasse la CMI', correct: true, correction: 'Oui. C\'est le principe de leur activité temps-dépendante.' },
      { text: 'Elles partagent un noyau β-lactame', correct: true, correction: 'Oui. Ce motif structurel définit la famille.' },
    ],
    explanation: 'Le cours associe noyau β-lactame, bactéricidie et effet temps-dépendant, avec des spectres variables. (Cours, p. 4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quel motif chimique est commun aux pénicillines, céphalosporines, monobactames et carbapénèmes ?',
    options: [
      { text: 'Un folate humain', correct: false, correction: 'Non. Le folate n\'est pas le noyau de ces quatre sous-familles.' },
      { text: 'Un cycle β-lactame', correct: true, correction: 'Oui. Il donne son nom à l\'ensemble de ces sous-familles.' },
      { text: 'Une membrane phospholipidique complète', correct: false, correction: 'Non. C\'est une structure cellulaire, non le noyau commun de ces médicaments.' },
      { text: 'Un ribosome 30S', correct: false, correction: 'Non. C\'est une cible bactérienne, pas un motif chimique d\'antibiotique.' },
      { text: 'Un noyau de rifampicine', correct: false, correction: 'Non. La rifampicine appartient à une autre famille.' },
    ],
    explanation: 'La structure β-lactame est partagée, même si les cycles associés diffèrent selon la sous-famille. (Cours, p. 4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles sous-familles relèvent des β-lactamines ?',
    options: [
      { text: 'Les pénicillines', correct: true, correction: 'Oui. Elles portent le noyau β-lactame.' },
      { text: 'Les macrolides', correct: false, correction: 'Non. Ils inhibent la synthèse protéique sur la sous-unité 50S.' },
      { text: 'Les carbapénèmes', correct: true, correction: 'Oui. Ils appartiennent eux aussi aux β-lactamines.' },
      { text: 'Les monobactames', correct: true, correction: 'Oui. L\'aztréonam est un exemple de monobactame.' },
      { text: 'Les céphalosporines', correct: true, correction: 'Oui. Elles constituent une autre grande sous-famille β-lactame.' },
    ],
    explanation: 'Le cours distingue quatre sous-familles β-lactames. (Cours, p. 4–7)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle cible bactérienne classique de la pénicilline G est mise en avant dans le support ?',
    options: [
      { text: 'Pseudomonas aeruginosa comme cible habituelle', correct: false, correction: 'Non. La pénicilline G n\'est pas une pénicilline antipyocyanique.' },
      { text: 'Tous les bacilles Gram négatif aérobies', correct: false, correction: 'Non. Son spectre ne couvre pas ce groupe de façon générale.' },
      { text: 'Tous les virus respiratoires', correct: false, correction: 'Non. Il s\'agit d\'un antibiotique antibactérien.' },
      { text: 'Les streptocoques sensibles', correct: true, correction: 'Oui. Leur activité est une composante majeure de son spectre étroit.' },
      { text: 'Tous les SARM', correct: false, correction: 'Non. Le SARM porte un mécanisme de résistance aux β-lactamines usuelles.' },
    ],
    explanation: 'Le cours présente la pénicilline G comme surtout active sur les streptocoques sensibles, avec d\'autres cibles particulières. (Cours, p. 4–5)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles propositions sur la pénicilline G et son spectre sont prudentes ?',
    options: [
      { text: 'Elle se prend toujours par voie orale en une dose unique', correct: false, correction: 'Non. Cette voie n\'est pas appropriée à la pénicilline G usuelle.' },
      { text: 'Elle couvre systématiquement Pseudomonas aeruginosa', correct: false, correction: 'Non. Ce bacille Gram négatif exige d\'autres molécules si elles sont sensibles.' },
      { text: 'Elle peut être active sur Treponema pallidum', correct: true, correction: 'Oui. La syphilis figure parmi les indications de pénicillines adaptées au stade.' },
      { text: 'Elle n\'est pas adaptée à une administration orale ordinaire car elle est acidolabile', correct: true, correction: 'Oui. Les formulations parentérales évitent sa dégradation gastrique.' },
      { text: 'Beaucoup de souches de staphylocoque produisent une pénicillinase qui l\'inactive', correct: true, correction: 'Oui. Une activité sur le staphylocoque ne peut pas être présumée.' },
    ],
    explanation: 'Le support oppose la pénicilline G acidolabile aux dérivés oraux et rappelle la résistance staphylococcique par pénicillinase. (Cours, p. 4–5)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle propriété permet à la pénicilline V d\'être administrée par voie orale ?',
    options: [
      { text: 'Son absence de noyau β-lactame', correct: false, correction: 'Non. Elle conserve le noyau de la famille.' },
      { text: 'Sa stabilité en milieu acide gastrique', correct: true, correction: 'Oui. Elle résiste mieux à l\'acidité que la pénicilline G usuelle.' },
      { text: 'Sa liaison au ribosome 30S', correct: false, correction: 'Non. Elle reste une β-lactamine de la paroi.' },
      { text: 'Son activité obligatoire sur le SARM', correct: false, correction: 'Non. Cette propriété n\'en découle pas.' },
      { text: 'Sa résistance à toutes les β-lactamases bactériennes', correct: false, correction: 'Non. La stabilité en milieu acide ne confère pas une protection universelle contre les β-lactamases.' },
    ],
    explanation: 'La pénicilline V est un dérivé acidorésistant de la pénicilline G permettant une prise orale. (Cours, p. 5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles affirmations sur la benzathine pénicilline G sont correctes ?',
    options: [
      { text: 'Toute syphilis exige obligatoirement trois injections hebdomadaires', correct: false, correction: 'Non. Une syphilis précoce peut relever d\'une seule injection selon les recommandations.' },
      { text: 'C\'est une forme retard administrée par voie intramusculaire', correct: true, correction: 'Oui. Elle libère lentement la pénicilline G.' },
      { text: 'Son efficacité permet de ne jamais préciser le stade de la syphilis', correct: false, correction: 'Non. Le stade guide le schéma et le suivi.' },
      { text: 'Elle remplace par voie IV la pénicilline aqueuse dans une neurosyphilis', correct: false, correction: 'Non. La formulation et la diffusion doivent être choisies selon le site infecté.' },
      { text: 'Elle est utilisée dans des schémas de traitement de la syphilis adaptés au stade', correct: true, correction: 'Oui. Le nombre d\'injections dépend de la forme clinique.' },
    ],
    explanation: 'Le support évoque l\'IM et les injections hebdomadaires, mais généralise un schéma : les recommandations distinguent syphilis précoce et tardive. (Cours, p. 5 ; CDC, Syphilis Treatment Guidelines)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle pénicilline du cours est conçue pour rester active sur un staphylocoque sensible à la méticilline malgré sa pénicillinase ?',
    options: [
      { text: 'Le métronidazole', correct: false, correction: 'Non. Il n\'appartient pas aux pénicillines.' },
      { text: 'L\'aztréonam', correct: false, correction: 'Non. C\'est un monobactame à activité Gram négatif, pas une pénicilline M.' },
      { text: 'La pénicilline G sans test de sensibilité', correct: false, correction: 'Non. De nombreuses souches produisent une pénicillinase qui l\'inactive.' },
      { text: 'L\'oxacilline', correct: true, correction: 'Oui. Cette pénicilline M résiste aux pénicillinases staphylococciques usuelles.' },
      { text: 'Le pivmécillinam', correct: false, correction: 'Non. Il vise surtout certains bacilles Gram négatif urinaires.' },
    ],
    explanation: 'L\'oxacilline est une pénicilline antistaphylococcique du groupe M, différente d\'une couverture du SARM. (Cours, p. 5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles propositions distinguent pénicillinase staphylococcique et résistance à la méticilline ?',
    options: [
      { text: 'La pénicillinase peut inactiver la pénicilline G', correct: true, correction: 'Oui. Il s\'agit d\'une hydrolyse de l\'antibiotique.' },
      { text: 'Une PLP modifiée telle que PBP2a peut rendre un SARM résistant aux β-lactamines usuelles', correct: true, correction: 'Oui. Le changement de cible n\'est pas corrigé par la seule résistance à la pénicillinase.' },
      { text: 'La pénicillinase modifie l\'ADN gyrase et transforme l\'oxacilline en quinolone', correct: false, correction: 'Non. Ce mécanisme concerne l\'hydrolyse d\'une β-lactamine, pas la gyrase.' },
      { text: 'L\'oxacilline a été développée pour résister aux pénicillinases usuelles', correct: true, correction: 'Oui. Elle peut traiter un staphylocoque sensible à la méticilline.' },
      { text: 'L\'oxacilline couvre tous les SARM', correct: false, correction: 'Non. La résistance à la méticilline exclut précisément cette activité.' },
    ],
    explanation: 'La protection contre une pénicillinase ne surmonte pas une résistance liée à une PLP de faible affinité. (Cours, p. 5, 7 ; EMA, Zinforo Product Information)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'À quelle sous-famille appartient l\'amoxicilline ?',
    options: [
      { text: 'Aux glycopeptides', correct: false, correction: 'Non. La vancomycine est le glycopeptide du cours.' },
      { text: 'Aux aminopénicillines, ou pénicillines du groupe A', correct: true, correction: 'Oui. Son spectre est plus large que celui de la pénicilline G.' },
      { text: 'Aux polymyxines', correct: false, correction: 'Non. Elles agissent sur la membrane des Gram négatif.' },
      { text: 'Aux lincosamides', correct: false, correction: 'Non. La clindamycine est un lincosamide.' },
      { text: 'Aux quinolones', correct: false, correction: 'Non. Elles inhibent la réplication de l\'ADN.' },
    ],
    explanation: 'L\'amoxicilline est une aminopénicilline acidostable, utilisable oralement ou par voie parentérale selon la formulation. (Cours, p. 5)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles associations pénicilline–inhibiteur de β-lactamase sont correctes ?',
    options: [
      { text: 'Acide clavulanique–gentamicine comme β-lactamine unique du cours', correct: false, correction: 'Non. La gentamicine est un aminoside et le clavulanate accompagne habituellement une β-lactamine.' },
      { text: 'L\'inhibiteur protège contre certaines enzymes, sans garantir une activité sur toutes les bactéries résistantes', correct: true, correction: 'Oui. La classe de β-lactamase et d\'autres mécanismes comptent.' },
      { text: 'Pipéracilline–tazobactam', correct: true, correction: 'Oui. Cette association élargit certaines couvertures par inhibition enzymatique.' },
      { text: 'Amoxicilline–acide clavulanique', correct: true, correction: 'Oui. L\'acide clavulanique bloque certaines β-lactamases.' },
      { text: 'Tout inhibiteur rend automatiquement l\'association active contre tout SARM', correct: false, correction: 'Non. Le SARM possède notamment une cible PLP modifiée.' },
    ],
    explanation: 'Le support cite clavulanate avec amoxicilline et tazobactam avec pipéracilline ; l\'élargissement du spectre n\'est jamais absolu. (Cours, p. 6)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel dérivé des pénicillines du cours vise surtout certains bacilles Gram négatif et est utilisé dans des cystites ?',
    options: [
      { text: 'Le pivmécillinam', correct: true, correction: 'Oui. Son spectre ciblé inclut certaines entérobactéries urinaires.' },
      { text: 'La pénicilline V', correct: false, correction: 'Non. Elle n\'est pas l\'amidinopénicilline décrite pour les cystites.' },
      { text: 'La vancomycine', correct: false, correction: 'Non. Elle est un glycopeptide à activité Gram positif.' },
      { text: 'L\'oxacilline', correct: false, correction: 'Non. Elle vise d\'abord les staphylocoques sensibles à la méticilline.' },
      { text: 'La benzathine pénicilline G', correct: false, correction: 'Non. C\'est une forme retard IM utilisée notamment pour la syphilis.' },
    ],
    explanation: 'Le pivmécillinam est une amidinopénicilline au spectre plus étroit que l\'amoxicilline dans la présentation du cours. (Cours, p. 5)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles propositions sur les pénicillines antipyocyaniques du cours sont exactes ?',
    options: [
      { text: 'La pipéracilline est une uréidopénicilline', correct: true, correction: 'Oui. Elle appartient aux dérivés antipyocyaniques.' },
      { text: 'Les pénicillines antipyocyaniques agissent en bloquant l\'ARN polymérase', correct: false, correction: 'Non. Elles conservent le mécanisme β-lactame sur les PLP.' },
      { text: 'La pénicilline V est l\'antipyocyanique de référence', correct: false, correction: 'Non. Elle n\'a pas ce spectre.' },
      { text: 'Leur activité sur Pseudomonas dépend de la sensibilité de la souche', correct: true, correction: 'Oui. L\'appartenance à une famille ne remplace pas les données microbiologiques.' },
      { text: 'La ticarcilline est une carboxypénicilline', correct: true, correction: 'Oui. Elle est aussi présentée comme antipyocyanique.' },
    ],
    explanation: 'Le cours cite ticarcilline et pipéracilline parmi les pénicillines antipyocyaniques, administrées par voie parentérale. (Cours, p. 5–6)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle céphalosporine de première génération le cours cite-t-il comme notamment antistaphylococcique, sans activité sur Pseudomonas ?',
    options: [
      { text: 'L\'aztréonam', correct: false, correction: 'Non. C\'est un monobactame, non une C1G.' },
      { text: 'L\'ertapénème', correct: false, correction: 'Non. C\'est un carbapénème, non une céphalosporine.' },
      { text: 'La ceftazidime', correct: false, correction: 'Non. Cette C3G peut couvrir Pseudomonas selon la souche.' },
      { text: 'Le céfépime', correct: false, correction: 'Non. C\'est une C4G à activité antipyocyanique selon la souche.' },
      { text: 'La céfazoline', correct: true, correction: 'Oui. Cette C1G cible notamment les staphylocoques sensibles et ne couvre pas P. aeruginosa.' },
    ],
    explanation: 'La céfazoline est la C1G mise en avant ; son spectre ne comprend pas P. aeruginosa. (Cours, p. 6)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles associations entre céphalosporine et groupe sont exactes ?',
    options: [
      { text: 'Ceftazidime — glycopeptide', correct: false, correction: 'Non. La ceftazidime est une C3G β-lactame.' },
      { text: 'Ceftriaxone — monobactame', correct: false, correction: 'Non. La ceftriaxone est une C3G.' },
      { text: 'Céfazoline — première génération', correct: true, correction: 'Oui. Le cours en fait son exemple de C1G.' },
      { text: 'Céfuroxime — deuxième génération', correct: true, correction: 'Oui. Elle figure dans la catégorie C2G.' },
      { text: 'Céfépime — quatrième génération', correct: true, correction: 'Oui. C\'est la C4G principale citée.' },
    ],
    explanation: 'La nomenclature des générations doit être reliée à des exemples précis plutôt qu\'à un spectre uniforme de classe. (Cours, p. 6–7)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Parmi les C3G du support, laquelle possède une activité antipyocyanique reconnue si la souche est sensible ?',
    options: [
      { text: 'La céfuroxime', correct: false, correction: 'Non. C\'est une C2G non antipyocyanique dans le cours.' },
      { text: 'La céfazoline', correct: false, correction: 'Non. C\'est une C1G sans couverture de Pseudomonas.' },
      { text: 'La pénicilline V', correct: false, correction: 'Non. Ce n\'est pas une céphalosporine.' },
      { text: 'La ceftazidime', correct: true, correction: 'Oui. Elle se distingue sur ce point de nombreuses autres C3G.' },
      { text: 'La vancomycine', correct: false, correction: 'Non. Ce glycopeptide agit sur les Gram positifs.' },
    ],
    explanation: 'Le cours cite céfotaxime, ceftriaxone et ceftazidime parmi les C3G injectables et précise l\'activité antipyocyanique de la dernière. (Cours, p. 7)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles propositions sur les céphalosporines du cours sont correctes ?',
    options: [
      { text: 'La ceftazidime peut agir sur P. aeruginosa sensible', correct: true, correction: 'Oui. Elle a un spectre particulier au sein des C3G.' },
      { text: 'La ceftriaxone et le céfotaxime sont des C3G', correct: true, correction: 'Oui. Ces deux molécules sont citées comme exemples injectables.' },
      { text: 'Le céfépime est une C4G ayant aussi une activité antipyocyanique', correct: true, correction: 'Oui. Cette activité doit être confrontée à la sensibilité de la souche.' },
      { text: 'La céfazoline est le meilleur exemple de C1G anti-Pseudomonas', correct: false, correction: 'Non. Elle ne couvre pas cette espèce.' },
      { text: 'Toutes les C3G ont exactement la même activité sur les staphylocoques', correct: false, correction: 'Non. Le spectre varie selon la molécule et ne peut être résumé par une règle absolue.' },
    ],
    explanation: 'La génération n\'efface pas les différences entre molécules ; le support met notamment à part ceftazidime et céfépime pour Pseudomonas. (Cours, p. 6–7)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle céphalosporine possède une activité contre certaines souches de SARM grâce à une affinité pour PBP2a ?',
    options: [
      { text: 'La céfazoline', correct: false, correction: 'Non. Elle est utile contre des staphylocoques sensibles à la méticilline, pas le SARM typique.' },
      { text: 'La ceftazidime', correct: false, correction: 'Non. Elle est surtout distinguée pour certains bacilles Gram négatif dont Pseudomonas.' },
      { text: 'La pénicilline V', correct: false, correction: 'Non. Elle ne possède pas cette affinité anti-PBP2a.' },
      { text: 'L\'aztréonam', correct: false, correction: 'Non. C\'est un monobactame dirigé vers les Gram négatif aérobies.' },
      { text: 'La ceftaroline', correct: true, correction: 'Oui. Cette céphalosporine dite anti-SARM peut se lier à la PLP modifiée.' },
    ],
    explanation: 'Les céphalosporines anti-SARM telles que la ceftaroline conservent le mécanisme β-lactame, mais reconnaissent mieux PBP2a. (Cours, p. 7 ; EMA, Zinforo Product Information)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quelles nuances évitent de résumer abusivement les céphalosporines dites de cinquième génération ?',
    options: [
      { text: 'L\'expression « anti-SARM » signifie que toute résistance bactérienne disparaît', correct: false, correction: 'Non. Le spectre reste conditionné par les mécanismes de résistance.' },
      { text: 'Elle n\'est pas automatiquement active sur les entérobactéries productrices de BLSE', correct: true, correction: 'Oui. Certaines β-lactamases peuvent l\'inactiver.' },
      { text: 'La ceftaroline cible certaines souches de SARM', correct: true, correction: 'Oui. Son affinité pour PBP2a explique cette particularité.' },
      { text: 'Elle couvre tous les Pseudomonas quel que soit l\'antibiogramme', correct: false, correction: 'Non. La ceftaroline n\'a pas d\'activité antipyocyanique fiable.' },
      { text: 'La ceftaroline conserve une activité sur certains Gram négatif sensibles', correct: true, correction: 'Oui. Dire qu\'elle n\'a aucune activité Gram négatif est trop absolu.' },
    ],
    explanation: 'Le support valorise la cible anti-SARM mais affirme à tort une absence totale d\'effet sur les Gram négatif ; l\'information de l\'EMA est plus nuancée. (Cours, p. 7 ; EMA, Zinforo Product Information)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'À quelle sous-famille β-lactame appartient l\'aztréonam ?',
    options: [
      { text: 'Aux polymyxines', correct: false, correction: 'Non. Elles déstabilisent la membrane des Gram négatif.' },
      { text: 'Aux glycopeptides', correct: false, correction: 'Non. La vancomycine représente cette famille.' },
      { text: 'Aux lipopeptides', correct: false, correction: 'Non. La daptomycine est un lipopeptide.' },
      { text: 'Aux tétracyclines', correct: false, correction: 'Non. Elles agissent sur le ribosome 30S.' },
      { text: 'Aux monobactames', correct: true, correction: 'Oui. Il est l\'exemple de monobactame présenté dans le cours.' },
    ],
    explanation: 'L\'aztréonam est un monobactame dont le noyau β-lactame n\'est pas accolé au second cycle des pénicillines ou céphalosporines. (Cours, p. 4, 7)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles propriétés de l\'aztréonam sont cohérentes avec le cours ?',
    options: [
      { text: 'Son activité sur P. aeruginosa doit être confirmée par la sensibilité', correct: true, correction: 'Oui. Le nom de la sous-famille ne garantit pas l\'activité d\'un isolat.' },
      { text: 'Il couvre systématiquement les anaérobies et les SARM', correct: false, correction: 'Non. Ce n\'est pas son spectre.' },
      { text: 'Il agit en inhibant la synthèse protéique sur 50S', correct: false, correction: 'Non. Comme β-lactame, il cible des PLP de la paroi.' },
      { text: 'Il n\'est pas un traitement dirigé contre les cocci Gram positifs', correct: true, correction: 'Oui. Sa couverture Gram positif est absente.' },
      { text: 'Il cible surtout des bactéries à Gram négatif aérobies sensibles', correct: true, correction: 'Oui. Les entérobactéries et Pseudomonas peuvent entrer dans son spectre selon la souche.' },
    ],
    explanation: 'Le monobactame est essentiellement Gram négatif aérobie, avec un spectre conditionné par les résistances. (Cours, p. 7)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel carbapénème du cours se distingue par l\'absence d\'activité sur P. aeruginosa et les entérocoques ?',
    options: [
      { text: 'La fosfomycine', correct: false, correction: 'Non. C\'est une autre famille agissant précocement sur la synthèse de la paroi.' },
      { text: 'Le méropénème', correct: false, correction: 'Non. Il peut couvrir Pseudomonas sensible.' },
      { text: 'L\'ertapénème', correct: true, correction: 'Oui. Son spectre est plus restreint que celui de l\'imipénème ou du méropénème.' },
      { text: 'La céfazoline', correct: false, correction: 'Non. Ce n\'est pas un carbapénème.' },
      { text: 'L\'imipénème', correct: false, correction: 'Non. Il peut couvrir Pseudomonas sensible.' },
    ],
    explanation: 'Le contraste ertapénème versus imipénème/méropénème est un point de spectre à retenir. (Cours, p. 7–8)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles propositions sur les carbapénèmes sont correctes ?',
    options: [
      { text: 'L\'imipénème et le méropénème ont un spectre large, notamment sur de nombreux Gram négatif', correct: true, correction: 'Oui. L\'activité dépend toutefois de l\'espèce et des mécanismes de résistance.' },
      { text: 'Des carbapénèmases peuvent rendre des bactéries résistantes', correct: true, correction: 'Oui. Même cette famille n\'échappe pas à la résistance enzymatique.' },
      { text: 'Ils sont des antiviraux sans cible bactérienne', correct: false, correction: 'Non. Ce sont des antibiotiques de la paroi.' },
      { text: 'Ils appartiennent aux β-lactamines', correct: true, correction: 'Oui. Ils conservent le noyau β-lactame et ciblent des PLP.' },
      { text: 'L\'ertapénème est toujours actif sur Pseudomonas', correct: false, correction: 'Non. Ce manque de couverture est une distinction du cours.' },
    ],
    explanation: 'Les carbapénèmes sont des β-lactamines larges, mais le spectre ne se résume pas à « toutes les bactéries ». (Cours, p. 7–8)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'À quel motif de la paroi bactérienne la vancomycine se lie-t-elle ?',
    options: [
      { text: 'À l\'extrémité D-Ala-D-Ala du précurseur du peptidoglycane', correct: true, correction: 'Oui. Cette liaison gêne les étapes d\'assemblage de la paroi.' },
      { text: 'À la dihydrofolate réductase', correct: false, correction: 'Non. Le triméthoprime cible cette enzyme.' },
      { text: 'Au calcium de la membrane comme la daptomycine', correct: false, correction: 'Non. La vancomycine agit sur la paroi, pas par dépolarisation membranaire.' },
      { text: 'À la sous-unité 30S', correct: false, correction: 'Non. Elle est ciblée par les aminosides et les tétracyclines.' },
      { text: 'À l\'ADN gyrase', correct: false, correction: 'Non. C\'est la cible des quinolones.' },
    ],
    explanation: 'La vancomycine est un glycopeptide qui reconnaît D-Ala-D-Ala et entrave l\'assemblage du peptidoglycane. (Cours, p. 8)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles propositions sur la vancomycine sont exactes ?',
    options: [
      { text: 'Sa toxicité rénale impose une surveillance adaptée', correct: true, correction: 'Oui. Le risque varie notamment avec l\'exposition et le terrain.' },
      { text: 'Une administration IV est utilisée pour une infection systémique nécessitant ce médicament', correct: true, correction: 'Oui. La vancomycine orale est très peu absorbée.' },
      { text: 'La voie orale peut servir à traiter une infection intestinale à C. difficile', correct: true, correction: 'Oui. Elle agit alors localement dans la lumière digestive.' },
      { text: 'Son activité systémique vise les bactéries Gram positif sensibles', correct: true, correction: 'Oui. Sa taille limite l\'accès à la paroi des Gram négatif.' },
      { text: 'Elle traverse facilement toutes les membranes externes des Gram négatif', correct: false, correction: 'Non. Elle n\'a pas de couverture fiable de ces bactéries.' },
    ],
    explanation: 'Le support dit « jamais ou rarement per os » ; la distinction pertinente est IV pour l\'effet systémique et orale pour certaines infections intestinales. (Cours, p. 8 ; EMA, Vancomycin-containing medicines)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle céphalosporine de deuxième génération citée dans le cours peut être administrée par voie orale ou IV sans couvrir Pseudomonas aeruginosa ?',
    options: [
      { text: 'La ceftriaxone', correct: false, correction: 'Non. C\'est une C3G injectable, non la C2G demandée.' },
      { text: 'La ceftazidime', correct: false, correction: 'Non. Cette C3G peut couvrir Pseudomonas sensible.' },
      { text: 'Le céfépime', correct: false, correction: 'Non. C\'est une C4G pouvant couvrir Pseudomonas sensible.' },
      { text: 'La céfazoline', correct: false, correction: 'Non. C\'est une C1G et non la C2G orale/IV décrite.' },
      { text: 'La céfuroxime', correct: true, correction: 'Oui. Cette C2G dispose de formulations orale et injectable, mais n\'est pas antipyocyanique.' },
    ],
    explanation: 'La céfuroxime est la C2G du support : elle peut être orale ou IV, mais n\'a pas d\'activité antipyocyanique fiable. (Cours, p. 6)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quelles comparaisons mécanistiques entre β-lactamines et glycopeptides sont justes ?',
    options: [
      { text: 'Les deux familles inhibent exclusivement l\'ADN gyrase', correct: false, correction: 'Non. La gyrase est une cible des quinolones.' },
      { text: 'La vancomycine est une sous-famille des monobactames', correct: false, correction: 'Non. C\'est un glycopeptide distinct des β-lactamines.' },
      { text: 'Les β-lactamines se lient aux PLP/PBP de la paroi', correct: true, correction: 'Oui. Elles inhibent surtout la transpeptidation.' },
      { text: 'Les deux peuvent empêcher une construction efficace du peptidoglycane', correct: true, correction: 'Oui. La cible moléculaire immédiate diffère, mais la voie finale est commune.' },
      { text: 'La vancomycine reconnaît le motif D-Ala-D-Ala du précurseur', correct: true, correction: 'Oui. Elle n\'agit pas en se liant à la même cible que les β-lactamines.' },
    ],
    explanation: 'Les deux familles frappent la paroi mais à des niveaux différents : enzyme PLP contre motif terminal du précurseur. (Cours, p. 4, 8)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle enzyme est inhibée précocement dans la synthèse du peptidoglycane par la fosfomycine ?',
    options: [
      { text: 'La MurA, ou énolpyruvyl-transférase', correct: true, correction: 'Oui. Cette enzyme participe à une étape cytoplasmique initiale de la voie.' },
      { text: 'L\'ADN gyrase', correct: false, correction: 'Non. Elle est inhibée par les quinolones.' },
      { text: 'La dihydrofolate réductase', correct: false, correction: 'Non. Elle est inhibée par le triméthoprime.' },
      { text: 'La sous-unité 50S', correct: false, correction: 'Non. C\'est une structure ribosomique, non l\'enzyme visée par la fosfomycine.' },
      { text: 'L\'ARN polymérase ADN-dépendante', correct: false, correction: 'Non. Elle est la cible de la rifampicine.' },
    ],
    explanation: 'La fosfomycine bloque MurA très en amont de la transpeptidation, dans le cytoplasme bactérien. (Cours, p. 8)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles propositions sur la fosfomycine sont prudentes ?',
    options: [
      { text: 'Elle est toujours active sur toute espèce responsable de cystite', correct: false, correction: 'Non. Des résistances et différences d\'espèce existent.' },
      { text: 'Son activité réelle dépend de la bactérie et des résistances', correct: true, correction: 'Oui. Un spectre théorique ne vaut pas garantie clinique universelle.' },
      { text: 'Elle inhibe une étape cytoplasmique précoce de la synthèse de la paroi', correct: true, correction: 'Oui. Elle ne se lie pas aux PLP comme les β-lactamines.' },
      { text: 'Elle bloque directement la sous-unité 30S', correct: false, correction: 'Non. Son action concerne la voie du peptidoglycane.' },
      { text: 'Une formulation orale est utilisée pour certaines infections urinaires basses', correct: true, correction: 'Oui. Le choix dépend des recommandations et de la sensibilité locale.' },
    ],
    explanation: 'Le support présente la fosfomycine comme précoce et cytoplasmique ; son usage pratique ne doit pas devenir une règle absolue de sensibilité. (Cours, p. 8)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Pourquoi le spectre systémique de la vancomycine ne couvre-t-il pas les bacilles Gram négatif ?',
    options: [
      { text: 'Elle se fixe préférentiellement à l\'ADN gyrase humaine', correct: false, correction: 'Non. Ce n\'est ni sa cible ni l\'explication du spectre.' },
      { text: 'Elle est un antiviral dépourvu d\'effet sur les bactéries', correct: false, correction: 'Non. C\'est un antibiotique actif sur certains Gram positifs.' },
      { text: 'Les Gram négatif n\'ont jamais de peptidoglycane', correct: false, correction: 'Non. Ils en possèdent, mais derrière une membrane externe.' },
      { text: 'Sa grande taille limite le franchissement de leur membrane externe', correct: true, correction: 'Oui. Le motif D-Ala-D-Ala reste inaccessible à une molécule qui ne passe pas cette barrière.' },
      { text: 'Elle devient toujours inactive après toute administration IV', correct: false, correction: 'Non. La voie IV sert justement à l\'effet systémique.' },
    ],
    explanation: 'L\'obstacle est l\'accès à la paroi via la membrane externe, et non une absence de peptidoglycane chez les Gram négatif. (Cours, p. 3, 8)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles associations classe–étape de la synthèse pariétale sont correctes ?',
    options: [
      { text: 'Fosfomycine — blocage direct de l\'ARN polymérase', correct: false, correction: 'Non. La rifampicine agit sur cette enzyme.' },
      { text: 'Glycopeptides — motif D-Ala-D-Ala du précurseur', correct: true, correction: 'Oui. Cette fixation gêne l\'assemblage de la paroi.' },
      { text: 'β-lactamines — PLP et transpeptidation', correct: true, correction: 'Oui. La réticulation finale de la paroi est entravée.' },
      { text: 'Fosfomycine — enzyme MurA à une étape précoce', correct: true, correction: 'Oui. L\'action se déroule en amont dans le cytoplasme.' },
      { text: 'β-lactamines — membrane dépolarisée par le calcium', correct: false, correction: 'Non. Cette description concerne la daptomycine.' },
    ],
    explanation: 'Les trois familles de la paroi convergent vers le peptidoglycane à des étapes et cibles immédiates distinctes. (Cours, p. 3–4, 8)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel mécanisme de résistance peut empêcher une β-lactamine d\'atteindre sa cible en hydrolysant son noyau ?',
    options: [
      { text: 'La liaison du médicament à D-Ala-D-Ala', correct: false, correction: 'Non. C\'est un mécanisme d\'action des glycopeptides, non l\'hydrolyse d\'une β-lactamine.' },
      { text: 'Une libération de folate humain', correct: false, correction: 'Non. Elle ne coupe pas l\'anneau de l\'antibiotique.' },
      { text: 'La production d\'une β-lactamase', correct: true, correction: 'Oui. L\'enzyme détruit ou inactive la molécule avant son effet sur les PLP.' },
      { text: 'Une mutation du ribosome 30S seulement', correct: false, correction: 'Non. Elle concerne d\'autres familles et n\'hydrolyse pas le noyau β-lactame.' },
      { text: 'Une multiplication de virus respiratoires', correct: false, correction: 'Non. Ce n\'est pas un mécanisme bactérien d\'hydrolyse.' },
    ],
    explanation: 'Le support introduit pénicillinases et inhibiteurs de β-lactamases comme exemple de résistance enzymatique. (Cours, p. 5–6)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles familles du cours agissent sur la construction de la paroi plutôt que sur le ribosome ?',
    options: [
      { text: 'Les glycopeptides', correct: true, correction: 'Oui. Ils lient les précurseurs du peptidoglycane.' },
      { text: 'La fosfomycine', correct: true, correction: 'Oui. Elle bloque une étape initiale de la voie de synthèse.' },
      { text: 'Les aminosides', correct: false, correction: 'Non. Ils agissent sur la sous-unité 30S du ribosome.' },
      { text: 'Les macrolides', correct: false, correction: 'Non. Ils agissent sur la sous-unité 50S du ribosome.' },
      { text: 'Les β-lactamines', correct: true, correction: 'Oui. Elles inhibent surtout la transpeptidation.' },
    ],
    explanation: 'Le tableau final du cours regroupe ces trois familles sous la cible « paroi ». (Cours, p. 17)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle sous-unité ribosomique bactérienne les aminosides ciblent-ils principalement ?',
    options: [
      { text: 'La protéine de liaison aux pénicillines PBP2a', correct: false, correction: 'Non. Il s\'agit d\'une cible de certaines β-lactamines, pas des aminosides.' },
      { text: 'La sous-unité 50S uniquement', correct: false, correction: 'Non. Les macrolides et plusieurs familles apparentées ciblent plutôt 50S.' },
      { text: 'La sous-unité 30S', correct: true, correction: 'Oui. La fixation des aminosides sur 30S perturbe la synthèse protéique.' },
      { text: 'L\'ADN gyrase', correct: false, correction: 'Non. Les quinolones inhibent cette enzyme de la réplication de l\'ADN.' },
      { text: 'La dihydrofolate réductase', correct: false, correction: 'Non. Cette enzyme de la voie des folates est visée par le triméthoprime.' },
    ],
    explanation: 'Le ribosome bactérien comporte les sous-unités 30S et 50S ; les aminosides se fixent sur 30S. (Cours, p. 9)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles associations famille–sous-unité ribosomique sont justes ?',
    options: [
      { text: 'Tétracyclines — 30S', correct: true, correction: 'Oui. Elles gênent notamment la phase d\'élongation protéique.' },
      { text: 'Macrolides — 50S', correct: true, correction: 'Oui. Ils appartiennent aux inhibiteurs de la grande sous-unité.' },
      { text: 'Fosfomycine — 50S', correct: false, correction: 'Non. Elle bloque une étape précoce de synthèse du peptidoglycane, pas le ribosome.' },
      { text: 'Oxazolidinones — 50S', correct: true, correction: 'Oui. Le cours les classe avec les inhibiteurs de 50S.' },
      { text: 'Aminosides — 30S', correct: true, correction: 'Oui. La gentamicine et l\'amikacine sont des exemples d\'aminosides.' },
    ],
    explanation: 'Le classement 30S/50S évite de confondre les inhibiteurs de synthèse protéique avec ceux de la paroi. (Cours, p. 9, 12)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quel profil d\'effet caractérise généralement les aminosides du cours ?',
    options: [
      { text: 'Une action antivirale par inhibition de la transcriptase inverse', correct: false, correction: 'Non. Leur cible est le ribosome bactérien 30S.' },
      { text: 'Un blocage temps-dépendant des PLP', correct: false, correction: 'Non. Ce mécanisme correspond surtout aux β-lactamines.' },
      { text: 'Une inhibition de la synthèse des folates par DHFR', correct: false, correction: 'Non. La DHFR est la cible du triméthoprime.' },
      { text: 'Une bactéricidie concentration-dépendante', correct: true, correction: 'Oui. L\'intensité de l\'effet est fortement liée à la concentration atteinte.' },
      { text: 'Une bactériostase indépendante de toute exposition', correct: false, correction: 'Non. Le support les décrit comme bactéricides et concentration-dépendants.' },
    ],
    explanation: 'Les aminosides se distinguent de nombreux autres inhibiteurs ribosomiques par leur effet bactéricide et concentration-dépendant. (Cours, p. 10)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles caractéristiques des aminosides faut-il retenir ?',
    options: [
      { text: 'Leur structure hydrophile limite l\'absorption digestive', correct: true, correction: 'Oui. Pour un effet systémique, une administration parentérale est habituellement requise.' },
      { text: 'Ils inhibent directement la synthèse de l\'ergostérol fongique', correct: false, correction: 'Non. Ils agissent sur le ribosome des bactéries, pas sur cette voie des champignons.' },
      { text: 'Une ototoxicité est possible', correct: true, correction: 'Oui. L\'atteinte auditive ou vestibulaire fait partie de leurs risques importants.' },
      { text: 'Leur activité bactérienne ne dépend jamais de la pénétration intracellulaire', correct: false, correction: 'Non. Ils doivent pénétrer dans la bactérie pour atteindre 30S.' },
      { text: 'Une néphrotoxicité est possible', correct: true, correction: 'Oui. La fonction rénale doit être prise en compte lors de leur utilisation.' },
    ],
    explanation: 'L\'hydrophilie et les risques rénal et auditif conditionnent l\'usage des aminosides, tandis que la cible reste intracellulaire. (Cours, p. 9–10)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Pourquoi les aminosides sont-ils inefficaces contre les bactéries anaérobies strictes ?',
    options: [
      { text: 'Leur entrée active dans la bactérie dépend d\'un transport lié à l\'oxygène', correct: true, correction: 'Oui. Sans ce transport, ils atteignent mal leur cible ribosomique.' },
      { text: 'L\'oxygène détruit systématiquement les aminosides avant l\'injection', correct: false, correction: 'Non. C\'est précisément l\'absence d\'un transport lié à l\'oxygène qui limite l\'activité.' },
      { text: 'Les aminosides n\'ont aucune cible ribosomique dans les bactéries', correct: false, correction: 'Non. La cible 30S existe, mais l\'accès au site d\'action est insuffisant en anaérobiose.' },
      { text: 'Les anaérobies possèdent tous un noyau qui protège 30S', correct: false, correction: 'Non. Une bactérie n\'a pas de noyau eucaryote.' },
      { text: 'La membrane des anaérobies se transforme en peptidoglycane humain', correct: false, correction: 'Non. Cette transformation n\'existe pas.' },
    ],
    explanation: 'La pénétration des aminosides jusqu\'au ribosome nécessite une étape de transport dépendant de l\'oxygène ; leur activité est donc faible en anaérobiose. (Cours, p. 10)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles molécules citées dans le cours appartiennent aux aminosides ?',
    options: [
      { text: 'L\'amikacine', correct: true, correction: 'Oui. Il s\'agit d\'un aminoside obtenu par hémisynthèse.' },
      { text: 'La tobramycine', correct: true, correction: 'Oui. Elle figure avec la gentamicine dans les molécules couramment testées.' },
      { text: 'La gentamicine', correct: true, correction: 'Oui. C\'est l\'un des exemples les plus utilisés de cette famille.' },
      { text: 'La doxycycline', correct: false, correction: 'Non. Elle appartient aux tétracyclines, même si elle cible aussi 30S.' },
      { text: 'La clarithromycine', correct: false, correction: 'Non. C\'est un macrolide qui agit sur 50S.' },
    ],
    explanation: 'Gentamicine, tobramycine et amikacine sont les trois exemples d\'aminosides mis en avant pour l\'antibiogramme. (Cours, p. 9)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Pour certaines infections à streptocoques, quelle association explique l\'effet synergique d\'un aminoside ?',
    options: [
      { text: 'Un aminoside combiné à une autre molécule 30S uniquement pour supprimer la paroi', correct: false, correction: 'Non. Les molécules 30S ne détruisent pas directement la paroi bactérienne.' },
      { text: 'Un aminoside associé à une hormone de croissance', correct: false, correction: 'Non. Cette combinaison ne correspond à aucun mécanisme du cours.' },
      { text: 'Un aminoside seul, quelle que soit la sensibilité et le site', correct: false, correction: 'Non. Le cours insiste sur l\'association pour l\'activité contre les streptocoques.' },
      { text: 'Un aminoside associé uniquement à un antiviral', correct: false, correction: 'Non. Un antiviral ne facilite pas cet effet antibactérien sur la paroi.' },
      { text: 'Un aminoside associé à un antibiotique agissant sur la paroi, selon l\'indication', correct: true, correction: 'Oui. L\'altération de la paroi peut faciliter l\'accès de l\'aminoside à sa cible.' },
    ],
    explanation: 'Dans les indications adaptées, l\'association avec une β-lactamine ou un glycopeptide permet une synergie contre certains streptocoques. (Cours, p. 9)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles précautions de raisonnement sont justes pour l\'emploi d\'un aminoside ?',
    options: [
      { text: 'L\'exposition rénale doit être surveillée selon le contexte', correct: true, correction: 'Oui. La néphrotoxicité est un effet indésirable de la classe.' },
      { text: 'Un antibiogramme sensible garantit seul l\'efficacité dans un abcès hypoxique', correct: false, correction: 'Non. L\'accès à la cible et les caractéristiques du foyer comptent aussi.' },
      { text: 'Une infection profonde pauvre en oxygène peut diminuer son efficacité', correct: true, correction: 'Oui. La pénétration bactérienne dépend d\'un transport lié à l\'oxygène.' },
      { text: 'Tous les aminosides doivent exclusivement être administrés par voie IV dans toute indication', correct: false, correction: 'Non. Il existe aussi des formulations et voies IM ou inhalées selon les produits et indications.' },
      { text: 'La voie orale ordinaire n\'est pas adaptée à un effet systémique', correct: true, correction: 'Oui. L\'absorption digestive des aminosides est très faible.' },
    ],
    explanation: 'Le support relie faible absorption digestive, toxicité et perte d\'activité en milieu hypoxique ; la voie IV n\'est pas une règle universelle. (Cours, p. 10)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Sur quelle étape de la synthèse protéique les tétracyclines agissent-elles principalement ?',
    options: [
      { text: 'La transcription par l\'ARN polymérase', correct: false, correction: 'Non. La rifampicine est l\'exemple de cet autre mécanisme.' },
      { text: 'La transpeptidation du peptidoglycane par les PLP', correct: false, correction: 'Non. Cette étape est inhibée par les β-lactamines.' },
      { text: 'L\'élongation au niveau de la sous-unité 30S', correct: true, correction: 'Oui. Elles perturbent l\'ajout des acides aminés à la chaîne protéique.' },
      { text: 'La dépolarisation de la membrane cytoplasmique', correct: false, correction: 'Non. La daptomycine illustre cette cible.' },
      { text: 'L\'hydrolyse des folates humains', correct: false, correction: 'Non. La cible des tétracyclines est un ribosome bactérien.' },
    ],
    explanation: 'Les tétracyclines, dont la doxycycline, sont classées parmi les inhibiteurs de 30S et gênent l\'élongation protéique. (Cours, p. 10)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles propositions sur les tétracyclines et la doxycycline sont exactes ?',
    options: [
      { text: 'La famille peut être active sur Mycoplasma sensible', correct: true, correction: 'Oui. Le cours cite également ces bactéries, sans qu\'il faille les dire toutes intracellulaires.' },
      { text: 'La doxycycline est une tétracycline', correct: true, correction: 'Oui. Elle est citée avec la tétracycline et la minocycline.' },
      { text: 'Toutes les entérobactéries restent nécessairement sensibles aux tétracyclines', correct: false, correction: 'Non. Les résistances acquises limitent fortement ce raccourci.' },
      { text: 'Cette famille peut être active sur les rickettsies et les chlamydiales sensibles', correct: true, correction: 'Oui. Ces agents figurent parmi les cibles particulières du cours.' },
      { text: 'Les tétracyclines bloquent uniquement l\'ARN polymérase', correct: false, correction: 'Non. Elles inhibent la synthèse protéique sur 30S.' },
    ],
    explanation: 'Le spectre théorique est large, mais les résistances acquises imposent de distinguer activité possible et sensibilité certaine. (Cours, p. 10)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'À quelle famille apparentée aux tétracyclines appartient la tigécycline ?',
    options: [
      { text: 'Aux glycylcyclines', correct: true, correction: 'Oui. La tigécycline est présentée comme la première molécule de cette famille.' },
      { text: 'Aux monobactames', correct: false, correction: 'Non. Le monobactame cité dans le cours est l\'aztréonam.' },
      { text: 'Aux polymyxines', correct: false, correction: 'Non. Elles ciblent la membrane des Gram négatif.' },
      { text: 'Aux glycopeptides', correct: false, correction: 'Non. La vancomycine est l\'exemple de glycopeptide.' },
      { text: 'Aux oxazolidinones', correct: false, correction: 'Non. Celles-ci sont une autre famille d\'inhibiteurs 50S.' },
    ],
    explanation: 'La tigécycline est un dérivé des tétracyclines appelé glycylcycline, avec un spectre modifié. (Cours, p. 10–11)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement la tigécycline ?',
    options: [
      { text: 'Elle fournit une couverture fiable de Pseudomonas aeruginosa', correct: false, correction: 'Non. Cette espèce est généralement non sensible à la tigécycline.' },
      { text: 'Elle inhibe les PLP comme une β-lactamine', correct: false, correction: 'Non. Elle est apparentée aux tétracyclines et agit sur le ribosome 30S.' },
      { text: 'Son effet est généralement bactériostatique', correct: true, correction: 'Oui. Elle inhibe la croissance bactérienne plutôt que de produire une bactéricidie constante.' },
      { text: 'Elle peut rester active sur certaines entérobactéries productrices de BLSE', correct: true, correction: 'Oui. Cette possibilité dépend des mécanismes de résistance propres à la souche.' },
      { text: 'Elle peut agir sur certains SARM et entérocoques résistants à la vancomycine', correct: true, correction: 'Oui. Le cours cite ces bactéries multirésistantes dans son spectre potentiel.' },
    ],
    explanation: 'L\'élargissement de spectre de la tigécycline est réel mais sélectif ; l\'EMA ne lui attribue pas d\'activité fiable sur P. aeruginosa. (Cours, p. 10–11 ; EMA, Tygacil Product Information)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Que désigne le sigle MLS dans ce chapitre ?',
    options: [
      { text: 'Méticilline, lévofloxacine et streptomycine', correct: false, correction: 'Non. Ce sont des molécules de familles distinctes, pas le développement du sigle.' },
      { text: 'Macrolides, lincosamides et streptogramines', correct: true, correction: 'Oui. Ces familles apparentées inhibent la synthèse protéique sur 50S.' },
      { text: 'Membrane, lipide et synthèse du folate', correct: false, correction: 'Non. Le sigle nomme des familles d\'antibiotiques ribosomiques.' },
      { text: 'Macrolides, lysosomes et staphylocoques', correct: false, correction: 'Non. Les lysosomes et bactéries ne sont pas les deux autres familles MLS.' },
      { text: 'Monobactames, lipopeptides et sulfamides', correct: false, correction: 'Non. Ces familles ont des cibles différentes de celle du groupe MLS.' },
    ],
    explanation: 'MLS regroupe trois familles agissant sur la sous-unité 50S : macrolides, lincosamides et streptogramines. (Cours, p. 11)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles propositions sur les macrolides du cours sont justes ?',
    options: [
      { text: 'Leur effet principal repose sur le blocage de MurA', correct: false, correction: 'Non. MurA est la cible de la fosfomycine, non des macrolides.' },
      { text: 'Ils sont tous fiables contre les entérobactéries et Pseudomonas', correct: false, correction: 'Non. La membrane externe et d\'autres résistances limitent cette activité.' },
      { text: 'Ils se fixent sur la sous-unité 50S', correct: true, correction: 'Oui. Ils appartiennent au groupe MLS.' },
      { text: 'Selon la molécule, ils peuvent agir sur H. pylori, Campylobacter ou Legionella sensibles', correct: true, correction: 'Oui. Ces exemples montrent que l\'inactivité sur les Gram négatif n\'est pas universelle.' },
      { text: 'L\'azithromycine et la clarithromycine en sont des exemples', correct: true, correction: 'Oui. Elles figurent dans la liste des molécules courantes.' },
    ],
    explanation: 'Le cours donne quatre exemples de macrolides et souligne quelques Gram négatif particuliers malgré une faible activité sur les entérobactéries. (Cours, p. 11)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel lincosamide le cours associe-t-il à une activité sur des anaérobies et des cocci Gram positif sensibles ?',
    options: [
      { text: 'La fosfomycine', correct: false, correction: 'Non. Elle inhibe une étape précoce de la synthèse de la paroi.' },
      { text: 'L\'amikacine', correct: false, correction: 'Non. C\'est un aminoside, généralement inactif sur les anaérobies stricts.' },
      { text: 'La ceftazidime', correct: false, correction: 'Non. C\'est une céphalosporine antipyocyanique et non un lincosamide.' },
      { text: 'La rifampicine', correct: false, correction: 'Non. Elle cible l\'ARN polymérase bactérienne.' },
      { text: 'La clindamycine', correct: true, correction: 'Oui. C\'est le lincosamide cité, classiquement bactériostatique.' },
    ],
    explanation: 'La clindamycine, membre des MLS, est présentée comme active sur plusieurs anaérobies et cocci Gram positif sensibles. (Cours, p. 11)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles propositions concernant la pristinamycine sont correctes ?',
    options: [
      { text: 'Elle associe une synergistine A et une synergistine B', correct: true, correction: 'Oui. Ces deux composants expliquent le terme de synergistine.' },
      { text: 'Elle appartient aux streptogramines du groupe MLS', correct: true, correction: 'Oui. Elle inhibe la synthèse protéique au niveau de 50S.' },
      { text: 'La perte d\'activité d\'un composant peut réduire l\'effet à une bactériostase', correct: true, correction: 'Oui. Le support décrit ce scénario de résistance partielle.' },
      { text: 'Son mécanisme est la transpeptidation du peptidoglycane par les PLP', correct: false, correction: 'Non. Ce mécanisme relève des β-lactamines.' },
      { text: 'Les deux composants actifs peuvent produire ensemble un effet bactéricide', correct: true, correction: 'Oui. La synergie dépend de l\'activité de chacun.' },
    ],
    explanation: 'La pristinamycine illustre une synergie A+B : les deux composés doivent rester actifs pour l\'effet bactéricide décrit. (Cours, p. 12)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quel élément limite l\'utilisation du chloramphénicol malgré son large spectre antibactérien ?',
    options: [
      { text: 'Sa toxicité', correct: true, correction: 'Oui. Le cours le cite comme antibiotique ribosomique utile mais d\'usage restreint par ses effets indésirables.' },
      { text: 'Sa destruction obligatoire par l\'oxygène', correct: false, correction: 'Non. Ce n\'est pas la limite évoquée pour ce médicament.' },
      { text: 'L\'absence de toute activité sur les Gram positif', correct: false, correction: 'Non. Le support mentionne un spectre incluant Gram positif et Gram négatif.' },
      { text: 'Son incapacité à agir sur la synthèse protéique', correct: false, correction: 'Non. Il agit justement au niveau du ribosome.' },
      { text: 'Son appartenance aux β-lactamines', correct: false, correction: 'Non. Il n\'agit pas sur les PLP de la paroi.' },
    ],
    explanation: 'Le chloramphénicol a une activité ribosomique et un spectre large, mais sa toxicité en limite l\'emploi lorsque d\'autres options existent. (Cours, p. 12)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles affirmations sur les autres inhibiteurs de synthèse protéique cités en fin de chapitre sont justes ?',
    options: [
      { text: 'Les oxazolidinones agissent sur 50S et visent des Gram positif sensibles', correct: true, correction: 'Oui. C\'est leur classement dans le résumé du chapitre.' },
      { text: 'Le chloramphénicol agit sur le ribosome bactérien', correct: true, correction: 'Oui. Il appartient à la partie « autres inhibiteurs » du cours.' },
      { text: 'Le chloramphénicol peut couvrir des Gram positif et des Gram négatif sensibles', correct: true, correction: 'Oui. Le support souligne ce spectre large, malgré la toxicité.' },
      { text: 'La toxicité du chloramphénicol démontre que toutes les infections exigent ce médicament', correct: false, correction: 'Non. Son utilisation est au contraire limitée par ce risque.' },
      { text: 'Les oxazolidinones sont des antiviraux sans action bactérienne', correct: false, correction: 'Non. Ce sont des antibiotiques dirigés contre la synthèse protéique bactérienne.' },
    ],
    explanation: 'Le cours distingue le large spectre mais la toxicité du chloramphénicol, et l\'activité Gram positif des oxazolidinones. (Cours, p. 12)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Parmi les inhibiteurs ribosomiques suivants, lequel est généralement bactéricide dans les conditions décrites par le cours ?',
    options: [
      { text: 'La doxycycline', correct: false, correction: 'Non. Les tétracyclines sont principalement bactériostatiques.' },
      { text: 'La tigécycline', correct: false, correction: 'Non. Cette glycylcycline est généralement bactériostatique.' },
      { text: 'La clindamycine', correct: false, correction: 'Non. Le lincosamide du cours est présenté comme bactériostatique.' },
      { text: 'La gentamicine', correct: true, correction: 'Oui. Les aminosides sont décrits comme bactéricides et concentration-dépendants.' },
      { text: 'L\'azithromycine', correct: false, correction: 'Non. Les macrolides sont présentés comme bactériostatiques.' },
    ],
    explanation: 'Aminosides et pristinamycine A+B active font partie des exceptions bactéricides parmi les inhibiteurs de synthèse protéique du cours. (Cours, p. 10–12)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles associations entre famille et mécanisme de synthèse protéique sont correctes ?',
    options: [
      { text: 'Azithromycine — macrolide agissant sur 50S', correct: true, correction: 'Oui. Elle appartient au groupe MLS.' },
      { text: 'Tigécycline — carbapénème agissant sur les PLP', correct: false, correction: 'Non. C\'est une glycylcycline dérivée des tétracyclines, ciblant 30S.' },
      { text: 'Clindamycine — lincosamide agissant sur 50S', correct: true, correction: 'Oui. Elle est apparentée aux macrolides par sa cible ribosomique.' },
      { text: 'Gentamicine — aminoside agissant sur 30S', correct: true, correction: 'Oui. Elle appartient à la classe bactéricide concentration-dépendante.' },
      { text: 'Doxycycline — tétracycline agissant sur 30S', correct: true, correction: 'Oui. Elle gêne l\'élongation de la chaîne protéique.' },
    ],
    explanation: 'Le classement par sous-unité distingue aminosides et tétracyclines (30S) des macrolides et lincosamides (50S). (Cours, p. 9–12)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle cible explique principalement l\'inhibition de la réplication bactérienne par les quinolones dans le cours ?',
    options: [
      { text: 'La transpeptidase de la paroi', correct: false, correction: 'Non. Cette étape est perturbée par les β-lactamines.' },
      { text: 'L\'ARN polymérase', correct: false, correction: 'Non. Elle est la cible de la rifampicine, qui bloque la transcription.' },
      { text: 'L\'ADN gyrase', correct: true, correction: 'Oui. Cette topoisomérase intervient dans la réplication de l\'ADN bactérien.' },
      { text: 'La dihydrofolate réductase', correct: false, correction: 'Non. Cette enzyme est inhibée par le triméthoprime.' },
      { text: 'La sous-unité ribosomique 30S', correct: false, correction: 'Non. Elle est notamment ciblée par les aminosides et les tétracyclines.' },
    ],
    explanation: 'Les quinolones inhibent la réplication de l\'ADN en ciblant les topoisomérases bactériennes, notamment l\'ADN gyrase. (Cours, p. 13)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles propriétés générales des quinolones sont correctes ?',
    options: [
      { text: 'Elles inhibent d\'abord la synthèse de la paroi par liaison à D-Ala-D-Ala', correct: false, correction: 'Non. Cette liaison est caractéristique de la vancomycine.' },
      { text: 'Elles sont toutes dépourvues de résistances acquises', correct: false, correction: 'Non. La sélection de résistance est précisément une limite rappelée par le cours.' },
      { text: 'Leur effet est bactéricide sur une souche sensible', correct: true, correction: 'Oui. Le support les classe parmi les antibiotiques bactéricides.' },
      { text: 'Elles perturbent la réplication de l\'ADN bactérien', correct: true, correction: 'Oui. L\'ADN gyrase est une cible majeure décrite dans le cours.' },
      { text: 'Leur activité est liée à la concentration atteinte', correct: true, correction: 'Oui. Le cours décrit une activité concentration-dépendante.' },
    ],
    explanation: 'Pour les quinolones, il faut associer cible de l\'ADN, bactéricidie et activité concentration-dépendante, tout en tenant compte des résistances. (Cours, p. 13)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle molécule est donnée comme exemple de quinolone de première génération, surtout historique dans les infections urinaires ?',
    options: [
      { text: 'Le métronidazole', correct: false, correction: 'Non. C\'est un imidazolé actif notamment sur les anaérobies.' },
      { text: 'La lévofloxacine', correct: false, correction: 'Non. Elle figure parmi les fluoroquinolones plus récentes.' },
      { text: 'La ciprofloxacine', correct: false, correction: 'Non. C\'est une fluoroquinolone à diffusion systémique.' },
      { text: 'L\'acide nalidixique', correct: true, correction: 'Oui. Il est cité avec l\'acide pipémidique dans cette première génération.' },
      { text: 'La rifampicine', correct: false, correction: 'Non. Elle cible l\'ARN polymérase et n\'appartient pas aux quinolones.' },
    ],
    explanation: 'L\'acide nalidixique et l\'acide pipémidique illustrent les anciennes quinolones à usage surtout urinaire dans le support. (Cours, p. 13)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles différences entre les quinolones anciennes et les fluoroquinolones présentées sont justes ?',
    options: [
      { text: 'L\'acide nalidixique est associé surtout à des concentrations urinaires', correct: true, correction: 'Oui. Le cours le décrit comme une quinolone ancienne à diffusion systémique limitée.' },
      { text: 'L\'acide nalidixique est présenté comme diffusant mieux dans tous les tissus que la ciprofloxacine', correct: false, correction: 'Non. Le cours établit la comparaison inverse.' },
      { text: 'La ciprofloxacine peut être administrée par voie orale ou IV', correct: true, correction: 'Oui. Ces deux voies sont indiquées pour les fluoroquinolones décrites.' },
      { text: 'La fluoroquinolone se distingue chimiquement par l\'ajout d\'un atome de fluor', correct: true, correction: 'Oui. C\'est le principe de la dénomination retenue dans le support.' },
      { text: 'La ciprofloxacine est une fluoroquinolone à diffusion tissulaire systémique', correct: true, correction: 'Oui. Elle ne se limite pas à une action dans les urines.' },
    ],
    explanation: 'La transition vers les fluoroquinolones s\'accompagne dans le support d\'une meilleure diffusion systémique et d\'un spectre élargi. (Cours, p. 13)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quelle fluoroquinolone du cours peut avoir une activité sur Pseudomonas aeruginosa lorsque la souche est sensible ?',
    options: [
      { text: 'La vancomycine', correct: false, correction: 'Non. Ce glycopeptide vise les Gram positifs, pas Pseudomonas.' },
      { text: 'La daptomycine', correct: false, correction: 'Non. Ce lipopeptide est actif sur des Gram positifs sensibles.' },
      { text: 'La ciprofloxacine', correct: true, correction: 'Oui. Son activité antipyocyanique doit être vérifiée sur l\'isolat.' },
      { text: 'La pénicilline V', correct: false, correction: 'Non. Ce n\'est pas une quinolone et elle n\'est pas antipyocyanique.' },
      { text: 'L\'acide nalidixique', correct: false, correction: 'Non. Cette quinolone ancienne est surtout associée aux infections urinaires à entérobactéries.' },
    ],
    explanation: 'La ciprofloxacine est l\'exemple de fluoroquinolone antipyocyanique du support ; cette activité n\'est jamais garantie sans information de sensibilité. (Cours, p. 13)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles propositions sur la ciprofloxacine évitent une généralisation abusive de son spectre ?',
    options: [
      { text: 'Elle peut couvrir P. aeruginosa si l\'antibiogramme le confirme', correct: true, correction: 'Oui. L\'activité antipyocyanique peut être perdue par résistance.' },
      { text: 'Elle peut couvrir des entérobactéries sensibles', correct: true, correction: 'Oui. Ces bacilles Gram négatif font partie du spectre décrit.' },
      { text: 'Elle appartient aux fluoroquinolones', correct: true, correction: 'Oui. Elle est l\'une des molécules de cette famille citées dans le cours.' },
      { text: 'Elle est toujours active sur toutes les bactéries anaérobies', correct: false, correction: 'Non. Ce n\'est pas une propriété générale de la ciprofloxacine.' },
      { text: 'Son usage doit tenir compte de la sélection possible de résistances', correct: true, correction: 'Oui. Le cours insiste sur cet enjeu avec les quinolones.' },
    ],
    explanation: 'Le spectre décrit pour la ciprofloxacine est large, mais la sensibilité de la souche et le risque de résistance conditionnent son emploi. (Cours, p. 13–14)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quelle fluoroquinolone plus récente le cours relie-t-il explicitement au pneumocoque ?',
    options: [
      { text: 'L\'acide nalidixique', correct: false, correction: 'Non. Il ne représente pas la génération à activité accrue sur le pneumocoque.' },
      { text: 'L\'aztréonam', correct: false, correction: 'Non. C\'est un monobactame, sans couverture des Gram positifs.' },
      { text: 'L\'acide pipémidique', correct: false, correction: 'Non. Il fait partie des quinolones anciennes surtout urinaires.' },
      { text: 'La colistine', correct: false, correction: 'Non. C\'est une polymyxine active sur des bacilles Gram négatif.' },
      { text: 'La lévofloxacine', correct: true, correction: 'Oui. Elle est donnée comme exemple pour les pneumopathies à pneumocoque dans le support.' },
    ],
    explanation: 'Le cours cite la lévofloxacine et la moxifloxacine parmi les fluoroquinolones plus récentes, avec un spectre renforcé sur les streptocoques, notamment le pneumocoque. (Cours, p. 14)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles affirmations sur la lévofloxacine et la moxifloxacine sont prudentes ?',
    options: [
      { text: 'Ce sont des fluoroquinolones', correct: true, correction: 'Oui. Elles restent dans la famille des quinolones fluorées.' },
      { text: 'Leur seule voie d\'action est une concentration dans les urines sans diffusion tissulaire', correct: false, correction: 'Non. Cette description concerne plutôt les anciennes quinolones du cours.' },
      { text: 'Le cours souligne une meilleure activité sur les streptocoques, dont le pneumocoque', correct: true, correction: 'Oui. C\'est l\'extension de spectre mise en avant.' },
      { text: 'L\'activité sur les anaérobies varie selon la molécule', correct: true, correction: 'Oui. Il ne faut pas attribuer une couverture identique à toute la classe.' },
      { text: 'Elles inhibent toutes deux directement la synthèse de D-Ala-D-Ala', correct: false, correction: 'Non. Leur cible est liée aux topoisomérases de l\'ADN, non à la paroi.' },
    ],
    explanation: 'Les fluoroquinolones plus récentes étendent surtout l\'activité vers les streptocoques ; le spectre anaérobie doit être apprécié molécule par molécule. (Cours, p. 14)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quelle enzyme bactérienne est directement inhibée par la rifampicine ?',
    options: [
      { text: 'L\'ARN polymérase ADN-dépendante', correct: true, correction: 'Oui. Son inhibition empêche la transcription de l\'ADN en ARN.' },
      { text: 'La dihydroptéroate synthétase', correct: false, correction: 'Non. Elle est ciblée par les sulfamides.' },
      { text: 'L\'ADN gyrase', correct: false, correction: 'Non. La gyrase est une cible des quinolones.' },
      { text: 'La sous-unité ribosomique 50S', correct: false, correction: 'Non. Cette sous-unité est la cible de plusieurs inhibiteurs de la traduction.' },
      { text: 'La dihydrofolate réductase', correct: false, correction: 'Non. Elle est ciblée par le triméthoprime.' },
    ],
    explanation: 'La rifampicine inhibe la transcription par liaison à l\'ARN polymérase ADN-dépendante. (Cours, p. 14)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles propositions sur la rifampicine sont correctes ?',
    options: [
      { text: 'Elle doit être administrée en monothérapie pour traiter une tuberculose active', correct: false, correction: 'Non. Cette situation favoriserait la résistance et ne correspond pas au traitement combiné.' },
      { text: 'Elle remplace la ciprofloxacine comme inhibiteur spécifique de l\'ADN gyrase', correct: false, correction: 'Non. La rifampicine n\'a pas la même cible que les quinolones.' },
      { text: 'Elle inhibe la synthèse d\'ARN bactérien', correct: true, correction: 'Oui. Elle bloque l\'ARN polymérase ADN-dépendante.' },
      { text: 'Dans une tuberculose active, elle est associée à d\'autres antituberculeux', correct: true, correction: 'Oui. L\'association limite notamment la sélection de mutants résistants.' },
      { text: 'Elle joue un rôle majeur dans le traitement de la tuberculose', correct: true, correction: 'Oui. Cette indication est mise en avant par le support.' },
    ],
    explanation: 'Le risque de résistance explique l\'association dans le traitement de la tuberculose active ; la formule « toujours en association » du cours ne doit pas être étendue à toutes les indications de la rifampicine. (Cours, p. 14)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel antibiotique imidazolé du cours endommage l\'ADN de bactéries anaérobies ?',
    options: [
      { text: 'La colistine', correct: false, correction: 'Non. Elle perturbe la membrane de bacilles Gram négatif.' },
      { text: 'Le triméthoprime', correct: false, correction: 'Non. Il inhibe la dihydrofolate réductase.' },
      { text: 'Le métronidazole', correct: true, correction: 'Oui. Il provoque des lésions de l\'ADN et possède aussi des usages antiparasitaires.' },
      { text: 'La rifampicine', correct: false, correction: 'Non. Elle inhibe l\'ARN polymérase.' },
      { text: 'La céfazoline', correct: false, correction: 'Non. Cette β-lactamine agit sur la synthèse de la paroi.' },
    ],
    explanation: 'Le métronidazole est l\'imidazolé cité ; après activation en milieu anaérobie, il endommage l\'ADN et a un effet bactéricide. (Cours, p. 14)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles caractéristiques du métronidazole correspondent au cours ?',
    options: [
      { text: 'Son effet antibactérien repose sur des lésions de l\'ADN', correct: true, correction: 'Oui. Le support décrit des coupures des brins d\'ADN.' },
      { text: 'Il bloque directement les PLP de la paroi', correct: false, correction: 'Non. C\'est le mécanisme des β-lactamines.' },
      { text: 'Il est actif contre des bactéries anaérobies sensibles', correct: true, correction: 'Oui. Leur métabolisme favorise l\'activation du médicament.' },
      { text: 'Il est l\'antibiotique de référence pour tous les bacilles aérobies Gram négatif', correct: false, correction: 'Non. Son activité antibactérienne concerne surtout les anaérobies.' },
      { text: 'Il peut aussi être utilisé contre certains parasites', correct: true, correction: 'Oui. Le cours signale ce spectre antiparasitaire.' },
    ],
    explanation: 'Métronidazole : imidazolé bactéricide, actif sur des anaérobies sensibles, avec un mécanisme touchant l\'ADN et un usage aussi antiparasitaire. (Cours, p. 14)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quelle enzyme de la voie des folates est inhibée par le triméthoprime ?',
    options: [
      { text: 'La transpeptidase du peptidoglycane', correct: false, correction: 'Non. Elle est ciblée par les β-lactamines.' },
      { text: 'La dihydrofolate réductase', correct: true, correction: 'Oui. Le blocage de cette étape diminue la production de folates nécessaires à la synthèse des nucléotides.' },
      { text: 'L\'ARN polymérase ADN-dépendante', correct: false, correction: 'Non. Elle est ciblée par la rifampicine.' },
      { text: 'La dihydroptéroate synthétase', correct: false, correction: 'Non. Cette enzyme est la cible des sulfamides.' },
      { text: 'L\'ADN gyrase', correct: false, correction: 'Non. Elle est ciblée par les quinolones.' },
    ],
    explanation: 'Le triméthoprime inhibe la dihydrofolate réductase ; les sulfamides bloquent plus en amont la dihydroptéroate synthétase. (Cours, p. 14)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles propositions sur les sulfamides, le triméthoprime et le cotrimoxazole sont exactes ?',
    options: [
      { text: 'Le cotrimoxazole est décrit comme bactéricide par potentialisation des deux composants', correct: true, correction: 'Oui. Le blocage séquentiel de la voie des folates renforce l\'effet de l\'association dans le cadre décrit.' },
      { text: 'Le cotrimoxazole associe un sulfamide et le triméthoprime', correct: true, correction: 'Oui. Cette combinaison réalise un blocage séquentiel de la voie des folates.' },
      { text: 'Les sulfamides inhibent la dihydroptéroate synthétase', correct: true, correction: 'Oui. Ils bloquent une étape de la synthèse bactérienne des folates.' },
      { text: 'Le triméthoprime inhibe la dihydrofolate réductase', correct: true, correction: 'Oui. Il agit sur une autre étape de la même voie métabolique.' },
      { text: 'Le cotrimoxazole est présenté comme une couverture fiable de P. aeruginosa', correct: false, correction: 'Non. Le cours cite au contraire Pseudomonas parmi ses limites de spectre.' },
    ],
    explanation: 'Le cotrimoxazole associe deux cibles successives de la voie des folates ; son spectre reste limité notamment pour Pseudomonas et les anaérobies. (Cours, p. 14–15)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quelle famille comprend la colistine et désorganise la membrane des bacilles Gram négatif ?',
    options: [
      { text: 'Les monobactames', correct: false, correction: 'Non. L\'aztréonam est un monobactame agissant sur la paroi.' },
      { text: 'Les lipopeptides cycliques', correct: false, correction: 'Non. La daptomycine en est l\'exemple, mais elle vise les Gram positifs.' },
      { text: 'Les polymyxines', correct: true, correction: 'Oui. La colistine, ou polymyxine E, est l\'exemple principal de cette famille dans le cours.' },
      { text: 'Les oxazolidinones', correct: false, correction: 'Non. Cette famille inhibe la synthèse protéique.' },
      { text: 'Les glycopeptides', correct: false, correction: 'Non. La vancomycine agit sur la paroi des Gram positifs.' },
    ],
    explanation: 'Les polymyxines, dont la colistine, perturbent les membranes bactériennes et sont utilisées contre certains bacilles Gram négatif. (Cours, p. 16)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles affirmations sur la colistine sont exactes ou correctement nuancées ?',
    options: [
      { text: 'Elle peut être utilisée contre certains bacilles Gram négatif multirésistants', correct: true, correction: 'Oui. Son intérêt est conditionné par la sensibilité et par les autres options.' },
      { text: 'Elle est l\'antibiotique ciblant directement les PLP des Gram positifs', correct: false, correction: 'Non. Les PLP sont les cibles des β-lactamines, pas de la colistine.' },
      { text: 'Elle désorganise la membrane bactérienne', correct: true, correction: 'Oui. Cette perturbation entraîne notamment une fuite du contenu cellulaire.' },
      { text: 'Il existe aussi des formulations inhalées dans certaines situations', correct: true, correction: 'Oui. La mention « IV uniquement » du support est trop absolue.' },
      { text: 'Une administration systémique expose notamment à une néphrotoxicité', correct: true, correction: 'Oui. Ce risque contribue à limiter son emploi.' },
    ],
    explanation: 'La colistine est une polymyxine bactéricide de membrane, surtout dirigée vers certains Gram négatif ; la toxicité et les différentes formulations imposent de ne pas résumer son usage à « IV uniquement ». (Cours, p. 16)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quel antibiotique provoque une dépolarisation calcium-dépendante de la membrane de bactéries Gram positif ?',
    options: [
      { text: 'Le métronidazole', correct: false, correction: 'Non. Il agit sur l\'ADN après activation chez des anaérobies sensibles.' },
      { text: 'La daptomycine', correct: true, correction: 'Oui. Ce lipopeptide cyclique provoque une fuite d\'ions et la mort bactérienne.' },
      { text: 'La fosfomycine', correct: false, correction: 'Non. Elle inhibe une étape précoce de la synthèse de la paroi.' },
      { text: 'La rifampicine', correct: false, correction: 'Non. Elle inhibe l\'ARN polymérase.' },
      { text: 'La colistine', correct: false, correction: 'Non. Cette polymyxine déstabilise surtout les membranes des bacilles Gram négatif.' },
    ],
    explanation: 'La daptomycine est le lipopeptide du cours : son action membranaire dépend du calcium et concerne les Gram positifs sensibles. (Cours, p. 16)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles comparaisons entre colistine et daptomycine sont justes ?',
    options: [
      { text: 'La dépolarisation produite par la daptomycine dépend du calcium', correct: true, correction: 'Oui. C\'est une précision mécanistique du support.' },
      { text: 'Toutes deux perturbent la membrane bactérienne', correct: true, correction: 'Oui. Elles appartiennent au grand groupe des antibiotiques actifs sur la membrane.' },
      { text: 'Toutes deux bloquent d\'abord la dihydrofolate réductase', correct: false, correction: 'Non. Cette enzyme est la cible du triméthoprime.' },
      { text: 'La colistine est une polymyxine dirigée vers certains Gram négatif', correct: true, correction: 'Oui. Son spectre n\'est pas celui de la daptomycine.' },
      { text: 'La daptomycine est un lipopeptide actif sur des Gram positifs sensibles', correct: true, correction: 'Oui. Le cours oppose explicitement les deux spectres.' },
    ],
    explanation: 'Les deux familles partagent une cible membranaire, mais diffèrent par leur chimie, leur mécanisme précis et leur spectre Gram négatif versus Gram positif. (Cours, p. 16)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quelle association famille–grande cible est correcte dans le schéma final du cours ?',
    options: [
      { text: 'Rifampicine — membrane cytoplasmique', correct: false, correction: 'Non. Elle inhibe l\'ARN polymérase.' },
      { text: 'β-lactamines — synthèse de la paroi', correct: true, correction: 'Oui. Les β-lactamines inhibent les PLP et la réticulation du peptidoglycane.' },
      { text: 'Quinolones — sous-unité ribosomique 50S', correct: false, correction: 'Non. Elles agissent sur la réplication de l\'ADN.' },
      { text: 'Daptomycine — ADN gyrase', correct: false, correction: 'Non. Elle dépolarise la membrane des Gram positifs.' },
      { text: 'Colistine — voie de l\'acide folique', correct: false, correction: 'Non. Elle désorganise la membrane des Gram négatif.' },
    ],
    explanation: 'Le schéma de synthèse classe les β-lactamines avec la paroi, les quinolones et la rifampicine avec les acides nucléiques, et les polymyxines/lipopeptides avec la membrane. (Cours, p. 17)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles associations antibiotique–mécanisme sont correctes pour réviser les quatre grandes cibles ?',
    options: [
      { text: 'Ciprofloxacine — blocage direct de la dihydrofolate réductase', correct: false, correction: 'Non. La ciprofloxacine cible des topoisomérases de l\'ADN ; la réductase est ciblée par le triméthoprime.' },
      { text: 'Macrolides — inhibition de la synthèse protéique', correct: true, correction: 'Oui. Ils agissent sur la sous-unité ribosomique 50S.' },
      { text: 'Daptomycine — dépolarisation de la membrane', correct: true, correction: 'Oui. Son action sur les Gram positifs est calcium-dépendante.' },
      { text: 'Rifampicine — inhibition de la transcription', correct: true, correction: 'Oui. Elle se fixe sur l\'ARN polymérase bactérienne.' },
      { text: 'Vancomycine — inhibition de la construction de la paroi', correct: true, correction: 'Oui. Elle se lie au motif D-Ala-D-Ala du précurseur du peptidoglycane.' },
    ],
    explanation: 'La révision finale consiste à relier chaque famille à sa cible : paroi, ribosome, acides nucléiques ou membrane. (Cours, p. 13–17)'
  },
]
