export const meta = {
title: 'Diagnostic prénatal, préimplantatoire et dépistage prénatal non invasif',
}

export default [
{
id: 1,
type: 'QCM',
question: 'Quelle définition correspond au diagnostic prénatal (DPN) dans le cours ?',
options: [
{ text: 'L’ensemble des démarches permettant de détecter in utero des maladies particulièrement graves chez l’embryon ou le fœtus', correct: true, correction: 'Oui boss 🧠 Le DPN recherche in utero des maladies graves, qu’elles soient génétiques, infectieuses ou d’une autre origine.' },
{ text: 'Un dépistage systématique limité à la trisomie 21 dans la population générale', correct: false, correction: 'Non chef 😭 Ça décrit plutôt le dépistage prénatal français de la T21, pas le DPN dans son ensemble.' },
{ text: 'Une analyse réalisée uniquement après la naissance', correct: false, correction: 'Faux 💀 Le DPN est justement prénatal, donc avant la naissance.' },
{ text: 'Une procédure réservée aux maladies infectieuses', correct: false, correction: 'Non. Le cours inclut les causes génétiques, infectieuses ou autres.' },
{ text: 'Une procédure ne concernant jamais l’embryon', correct: false, correction: 'Non chef. La définition vise l’embryon ou le fœtus.' }
],
explanation: 'Le DPN regroupe les démarches visant à détecter chez l’embryon ou le fœtus des maladies particulièrement graves. Il peut aussi permettre de préparer la prise en charge et l’accueil de l’enfant à naître.'
},
{
id: 2,
type: 'QRM',
question: 'Quelles notions fondamentales doivent guider la démarche de DPN selon le cours ?',
options: [
{ text: 'La gravité de la maladie pour le fœtus, l’embryon ou la mère', correct: true, correction: 'Oui boss 🧠 La gravité fait partie des deux notions centrales.' },
{ text: 'La balance bénéfice/risque des investigations et propositions médicales', correct: true, correction: 'Exact. On ne fait pas un geste invasif juste pour le folklore 😭.' },
{ text: 'La recherche systématique de toute anomalie bénigne possible', correct: false, correction: 'Non chef. Le cours centre le DPN sur des situations particulièrement graves.' },
{ text: 'La décision automatique d’interrompre toute grossesse anormale', correct: false, correction: 'Faux. La décision finale appartient au couple après information.' },
{ text: 'L’absence de prise en compte des risques du prélèvement', correct: false, correction: 'Non 💀 Les risques du geste doivent justement être expliqués.' }
],
explanation: 'Deux piliers sont explicitement donnés : gravité de la situation et évaluation de la balance bénéfice/risque.'
},
{
id: 3,
type: 'QCM',
question: 'Quel organisme est seul compétent pour délivrer l’attestation de gravité permettant de rendre licite une IMG dans le cadre décrit ?',
options: [
{ text: 'Le CPDPN', correct: true, correction: 'Oui boss 🧠 Le généticien seul ne suffit pas : le dossier passe par le CPDPN.' },
{ text: 'Le généticien seul', correct: false, correction: 'Non chef 😭 Le cours insiste précisément sur le fait que le généticien seul ne suffit pas.' },
{ text: 'Le laboratoire de biologie seul', correct: false, correction: 'Faux. Ce rôle revient au comité pluridisciplinaire.' },
{ text: 'La sage-femme seule', correct: false, correction: 'Non. Elle peut participer au CPDPN mais ne délivre pas seule cette attestation.' },
{ text: 'Le couple lui-même', correct: false, correction: 'Non chef. Le couple décide de poursuivre ou non la grossesse, mais l’attestation de gravité relève du CPDPN.' }
],
explanation: 'Le CPDPN regroupe plusieurs spécialistes et peut délivrer l’attestation de gravité. La décision de poursuivre ou non la grossesse appartient ensuite au couple.'
},
{
id: 4,
type: 'QRM',
question: 'Concernant l’encadrement réglementaire du DPN, quelles propositions sont exactes ?',
options: [
{ text: 'L’activité de DPN est réglementée', correct: true, correction: 'Oui boss 🧠 C’est une activité encadrée, pas du freestyle médical.' },
{ text: 'Les agréments sont délivrés par l’Agence de la biomédecine', correct: true, correction: 'Exact.' },
{ text: 'Les agréments concernent à la fois certains praticiens et certains centres', correct: true, correction: 'Oui. Le cours cite par exemple les échographistes et les CPDPN.' },
{ text: 'Les agréments sont délivrés une fois pour toute sans renouvellement', correct: false, correction: 'Non chef. Ils sont accordés pour 5 ans et renouvelables.' },
{ text: 'Le DPN n’est soumis à aucune réglementation spécifique', correct: false, correction: 'Faux 💀 Le support dit exactement l’inverse.' }
],
explanation: 'Les activités de DPN sont soumises à des agréments de l’ABM concernant praticiens et centres, accordés pour 5 ans et renouvelables.'
},
{
id: 5,
type: 'QCM',
question: 'Quelle durée est donnée pour les agréments de l’Agence de la biomédecine en DPN ?',
options: [
{ text: '1 an non renouvelable', correct: false, correction: 'Non chef.' },
{ text: '3 ans', correct: false, correction: 'Faux.' },
{ text: '5 ans renouvelables', correct: true, correction: 'Oui boss 🎯 5 ans, avec possibilité de renouvellement.' },
{ text: '10 ans non renouvelables', correct: false, correction: 'Non.' },
{ text: 'Aucune durée n’est prévue', correct: false, correction: 'Non chef 😭 Le cours donne bien 5 ans.' }
],
explanation: 'Les agréments de l’ABM sont accordés pour une durée de cinq ans et sont renouvelables.'
},
{
id: 6,
type: 'QRM',
question: 'Concernant l’information et le consentement avant une analyse génétique prénatale, quelles propositions sont exactes ?',
options: [
{ text: 'Une prescription médicale est obligatoire', correct: true, correction: 'Oui boss 🧠 Pas d’analyse lancée en mode surprise.' },
{ text: 'La consultation doit expliquer la pathologie, son évolution, les traitements éventuels et les risques', correct: true, correction: 'Exact. La consultation doit être détaillée.' },
{ text: 'Les objectifs et les limites de l’examen doivent être expliqués', correct: true, correction: 'Oui. Le cours rappelle qu’on peut passer à côté de certaines pathologies.' },
{ text: 'Le consentement libre et éclairé de la patiente est obligatoire avec une attestation de consultation pour les analyses génétiques', correct: true, correction: 'Exact 🧠 Sans la signature requise, la prise en charge ne peut pas se faire.' },
{ text: 'Une analyse génétique peut être réalisée sans information si le médecin juge le résultat utile', correct: false, correction: 'Non chef 💀 Ça contredit totalement le cadre décrit.' }
],
explanation: 'Prescription, information complète, consentement libre et éclairé et attestation de consultation sont des éléments obligatoires de la démarche génétique.'
},
{
id: 7,
type: 'QCM',
question: 'Quelle affirmation distingue correctement le dépistage prénatal du DPN dans ce cours ?',
options: [
{ text: 'Le dépistage ne donne pas de certitude diagnostique', correct: true, correction: 'Oui boss 🧠 Dépistage = estimation de risque, pas diagnostic certain.' },
{ text: 'Le dépistage repose obligatoirement sur un geste invasif fœtal', correct: false, correction: 'Non chef. Le cours précise justement l’absence de geste invasif fœtal en dépistage.' },
{ text: 'Le dépistage met nécessairement en danger la vie maternelle ou fœtale', correct: false, correction: 'Faux.' },
{ text: 'Le dépistage permet toujours d’affirmer une anomalie à 100 %', correct: false, correction: 'Non 💀 C’est précisément ce qui le différencie du diagnostic.' },
{ text: 'Dépistage et diagnostic sont synonymes', correct: false, correction: 'Non chef 😭 C’est LE piège à ne pas faire.' }
],
explanation: 'Le dépistage prénatal est non invasif dans le cadre présenté et n’apporte pas de certitude diagnostique. Une anomalie dépistée doit être confirmée par un examen diagnostique.'
},
{
id: 8,
type: 'QRM',
question: 'Concernant l’amniocentèse, quelles propositions sont exactes ?',
options: [
{ text: 'Elle consiste à prélever du liquide amniotique sous contrôle échographique', correct: true, correction: 'Oui boss 🧠 C’est le principe de la PLA.' },
{ text: 'Elle est réalisée à partir de 15 SA', correct: true, correction: 'Exact 🎯 Jamais avant dans le cours, notamment à cause du risque d’oligoamnios.' },
{ text: 'Elle doit être réalisée dès 8 SA pour être plus fiable', correct: false, correction: 'Non chef 💀 Beaucoup trop tôt.' },
{ text: 'Elle consiste à biopsier directement le placenta', correct: false, correction: 'Faux. Ça correspond à la biopsie de trophoblaste.' },
{ text: 'Elle prélève le sang dans la veine ombilicale', correct: false, correction: 'Non. Ça correspond au prélèvement de sang fœtal.' }
],
explanation: 'L’amniocentèse ou PLA est un prélèvement échoguidé de liquide amniotique réalisable à partir de 15 SA.'
},
{
id: 9,
type: 'QCM',
question: 'Quel risque de fausse couche spontanée est associé à l’amniocentèse dans le cours ?',
options: [
{ text: 'Environ 10 %', correct: false, correction: 'Non chef. Le risque est bien plus faible.' },
{ text: 'Moins de 0,5 %, avec une estimation réelle autour de 0,2 %', correct: true, correction: 'Oui boss 🎯 C’est la formulation du support.' },
{ text: 'Environ 5 %', correct: false, correction: 'Faux.' },
{ text: 'Entre 20 et 30 %', correct: false, correction: 'Non 😭 On serait très loin d’un examen de routine.' },
{ text: 'Aucun risque n’existe', correct: false, correction: 'Non chef. Il est faible mais non nul.' }
],
explanation: 'Le risque de FCS après amniocentèse est présenté comme inférieur à 0,5 %, autour de 0,2 % en pratique dans le cours.'
},
{
id: 10,
type: 'QRM',
question: 'Concernant le liquide amniotique, quelles propositions sont exactes ?',
options: [
{ text: 'Il est renouvelé environ toutes les 3 heures', correct: true, correction: 'Oui boss ⏱️ Renouvellement très rapide : environ 3 h.' },
{ text: 'Son volume atteint un pic autour de 22 SA', correct: true, correction: 'Exact. Deuxième trimestre.' },
{ text: 'Il contient environ 94,6 % d’eau', correct: true, correction: 'Oui 🎯 Chiffre de rat assumé.' },
{ text: 'La quantité de cellules y est minimale entre 16 et 20 SA', correct: false, correction: 'Non chef 😭 Le cours indique au contraire que la quantité de cellules est maximale entre 16 et 20 SA.' },
{ text: 'Il doit normalement être noir et opaque', correct: false, correction: 'Non chef 💀 Il doit normalement être transparent.' }
],
explanation: 'Le LA est continuellement renouvelé, majoritairement aqueux, avec un pic de volume autour de 22 SA. Le cours précise aussi que les cellules y sont maximales entre 16 et 20 SA.'
},
{
id: 11,
type: 'QCM',
question: 'Après centrifugation du liquide amniotique, que peut-on analyser principalement dans le surnageant ?',
options: [
{ text: 'Des paramètres biochimiques et infectieux', correct: true, correction: 'Oui boss 🧠 Le surnageant clair sert notamment aux analyses biochimiques et infectieuses.' },
{ text: 'Uniquement le caryotype des amniocytes', correct: false, correction: 'Non chef. Le caryotype concerne surtout le culot cellulaire.' },
{ text: 'Uniquement la FISH sur cellules', correct: false, correction: 'Faux.' },
{ text: 'Uniquement l’ADN nucléaire des villosités choriales', correct: false, correction: 'Non.' },
{ text: 'Aucune analyse n’est possible sur le surnageant', correct: false, correction: 'Non chef 😭 Le cours en donne plusieurs.' }
],
explanation: 'Le surnageant du LA permet notamment des dosages biochimiques, enzymatiques et des recherches infectieuses comme le CMV.'
},
{
id: 12,
type: 'QRM',
question: 'Quelles analyses peuvent être réalisées sur les amniocytes du culot après centrifugation du liquide amniotique ?',
options: [
{ text: 'Un caryotype', correct: true, correction: 'Oui boss 🧠 Analyse cytogénétique classique.' },
{ text: 'Une FISH', correct: true, correction: 'Exact.' },
{ text: 'Une extraction d’ADN pour analyse moléculaire', correct: true, correction: 'Oui. Le cours donne notamment l’exemple de la mucoviscidose.' },
{ text: 'Des études enzymatiques ou biochimiques', correct: true, correction: 'Exact 🧠 Le culot cellulaire peut être très polyvalent.' },
{ text: 'Uniquement une mesure du pH sanguin maternel', correct: false, correction: 'Non chef 💀 Aucun rapport.' }
],
explanation: 'Les amniocytes peuvent être étudiés directement ou après culture pour caryotype, FISH, analyses enzymatiques/biochimiques ou moléculaires.'
},
{
id: 13,
type: 'QCM',
question: 'À partir de quel terme peut être réalisée une biopsie de villosités choriales ?',
options: [
{ text: '8 SA', correct: false, correction: 'Non chef.' },
{ text: '11 SA', correct: true, correction: 'Oui boss 🎯 Biopsie de trophoblaste dès 11 SA.' },
{ text: '15 SA uniquement', correct: false, correction: 'Non. 15 SA correspond au seuil de l’amniocentèse.' },
{ text: '20 SA uniquement', correct: false, correction: 'Faux.' },
{ text: '32 SA uniquement', correct: false, correction: 'Non chef.' }
],
explanation: 'La biopsie de villosités choriales peut être réalisée dès 11 SA, ce qui constitue son principal avantage par rapport à l’amniocentèse.'
},
{
id: 14,
type: 'QRM',
question: 'Concernant la biopsie de trophoblaste, quelles propositions sont exactes ?',
options: [
{ text: 'Elle est réalisée sous contrôle échographique', correct: true, correction: 'Oui boss 🧠 Échoguidage obligatoire dans la description du geste.' },
{ text: 'Elle prélève des villosités choriales à l’interface fœto-placentaire', correct: true, correction: 'Exact.' },
{ text: 'Elle est réalisée uniquement après 22 SA', correct: false, correction: 'Non chef. Elle est justement précoce, dès 11 SA.' },
{ text: 'Elle prélève du liquide amniotique et non du tissu', correct: false, correction: 'Faux. Ici on prélève directement du tissu cellulaire.' },
{ text: 'Elle est moins précoce que l’amniocentèse', correct: false, correction: 'Non 😭 C’est précisément l’inverse.' }
],
explanation: 'La BT prélève sous échographie des villosités choriales dès 11 SA, ce qui permet un diagnostic plus précoce.'
},
{
id: 15,
type: 'QCM',
question: 'Quel risque de fausse couche spontanée est donné pour la biopsie de trophoblaste ?',
options: [
{ text: '0 %', correct: false, correction: 'Non chef. Le risque existe.' },
{ text: '0,5 à 1 %', correct: true, correction: 'Oui boss 🎯 BT = environ 0,5–1 % dans le cours.' },
{ text: '5 à 10 %', correct: false, correction: 'Faux.' },
{ text: '20 %', correct: false, correction: 'Non.' },
{ text: 'Plus de 50 %', correct: false, correction: 'Non chef 💀.' }
],
explanation: 'Le risque de FCS après biopsie de villosités choriales est estimé autour de 0,5 à 1 %.'
},
{
id: 16,
type: 'QRM',
question: 'Concernant les analyses réalisées sur les villosités choriales, quelles propositions sont exactes ?',
options: [
{ text: 'Les études directes peuvent être réalisées sur le cytotrophoblaste grâce à ses mitoses spontanées', correct: true, correction: 'Oui boss 🧠 Cytotrophoblaste = mitoses spontanées = analyse directe possible.' },
{ text: 'Les études après culture sont principalement réalisées sur le mésenchyme', correct: true, correction: 'Exact.' },
{ text: 'Un tri des villosités est nécessaire pour éviter d’analyser du tissu maternel', correct: true, correction: 'Oui. La caduque maternelle peut fausser les analyses.' },
{ text: 'La contamination maternelle est impossible dans ce prélèvement', correct: false, correction: 'Non chef 💀 C’est justement un piège pratique majeur.' },
{ text: 'Le placenta ne possède aucune face maternelle', correct: false, correction: 'Faux.' }
],
explanation: 'La BT impose un tri soigneux du matériel fœtal. Le cytotrophoblaste permet des analyses directes, tandis que le mésenchyme est utilisé après culture.'
},
{
id: 17,
type: 'QCM',
question: 'Quel délai de culture est donné pour une biopsie de trophoblaste lorsqu’une culture est nécessaire ?',
options: [
{ text: 'Quelques minutes', correct: false, correction: 'Non chef.' },
{ text: '4 à 5 jours', correct: true, correction: 'Oui boss 🎯 BT cultivée = environ 4–5 jours.' },
{ text: '15 jours à 3 semaines', correct: false, correction: 'Non. Ce délai est donné pour la culture des cellules amniotiques.' },
{ text: '2 à 3 mois', correct: false, correction: 'Faux.' },
{ text: '1 an', correct: false, correction: 'Non chef 😭.' }
],
explanation: 'Le cours donne environ 4 à 5 jours pour une culture de trophoblaste, contre 15 jours à 3 semaines pour une culture d’amniocytes.'
},
{
id: 18,
type: 'QRM',
question: 'Concernant le prélèvement de sang fœtal, quelles propositions sont exactes ?',
options: [
{ text: 'Il ponctionne la veine ombilicale du cordon sous contrôle échographique', correct: true, correction: 'Oui boss 🧠 C’est le principe exact du geste.' },
{ text: 'Il peut être réalisé à partir de 22 SA', correct: true, correction: 'Exact 🎯 C’est donc un examen tardif.' },
{ text: 'Il peut être proposé si une amniocentèse est impossible en raison d’un oligoamnios', correct: true, correction: 'Oui. C’est une indication citée.' },
{ text: 'Il peut être utile lorsqu’une pathologie est découverte tardivement', correct: true, correction: 'Exact.' },
{ text: 'Il constitue l’examen de choix du premier trimestre', correct: false, correction: 'Non chef 💀 22 SA, on est très loin du premier trimestre.' }
],
explanation: 'Le sang fœtal est obtenu par ponction de la veine ombilicale dès 22 SA, notamment quand la PLA est impossible ou pour des situations découvertes tardivement.'
},
{
id: 19,
type: 'QCM',
question: 'À partir de quel terme une biopsie de peau fœtale peut-elle être réalisée selon le cours ?',
options: [
{ text: '8 SA', correct: false, correction: 'Non chef.' },
{ text: '11 SA', correct: false, correction: 'Non. Ça correspond à la biopsie de trophoblaste.' },
{ text: '15 SA', correct: false, correction: 'Faux.' },
{ text: '20 SA', correct: true, correction: 'Oui boss 🎯 À partir du deuxième trimestre, autour de 20 SA.' },
{ text: 'Uniquement après la naissance', correct: false, correction: 'Non chef.' }
],
explanation: 'La biopsie cutanée fœtale est un examen extrêmement rare réalisable à partir du deuxième trimestre, autour de 20 SA.'
},
{
id: 20,
type: 'QRM',
question: 'Concernant la biopsie cutanée fœtale, quelles propositions sont exactes ?',
options: [
{ text: 'Elle peut permettre une étude morphologique de la peau', correct: true, correction: 'Oui boss 🧠 C’est un des intérêts cités.' },
{ text: 'Elle peut être utilisée pour des immunomarquages', correct: true, correction: 'Exact.' },
{ text: 'Elle est l’examen le plus fréquemment réalisé pendant la grossesse', correct: false, correction: 'Non chef 😭 Le cours la décrit comme extrêmement rare.' },
{ text: 'Ses indications sont très larges et systématiques', correct: false, correction: 'Faux. Elles sont limitées.' },
{ text: 'Elle ne permet aucune étude enzymatique', correct: false, correction: 'Non. Des études enzymatiques peuvent aussi être réalisées.' }
],
explanation: 'La biopsie cutanée est rare mais peut permettre étude morphologique, immunomarquages et analyses enzymatiques.'
},
{
id: 21,
type: 'QCM',
question: 'Quelle situation correspond à la fœtopathologie selon le cours ?',
options: [
{ text: 'L’analyse d’un fœtus après aspiration, FCS ou IMG', correct: true, correction: 'Oui boss 🧠 La fœtopathologie intervient après interruption ou perte de grossesse.' },
{ text: 'Une simple échographie du premier trimestre', correct: false, correction: 'Non chef.' },
{ text: 'Un dépistage sanguin maternel non invasif', correct: false, correction: 'Faux.' },
{ text: 'Une FIV avant transfert embryonnaire', correct: false, correction: 'Non.' },
{ text: 'Une mesure isolée de la clarté nucale', correct: false, correction: 'Non chef.' }
],
explanation: 'La fœtopathologie analyse directement le fœtus et les tissus disponibles après aspiration, FCS ou IMG.'
},
{
id: 22,
type: 'QRM',
question: 'Concernant la fœtopathologie, quelles propositions sont exactes ?',
options: [
{ text: 'Elle permet une étude morphologique directe du fœtus', correct: true, correction: 'Oui boss 🧠 C’est son intérêt majeur.' },
{ text: 'Elle permet des prélèvements sur différents tissus comme placenta, peau ou muscle', correct: true, correction: 'Exact.' },
{ text: 'La macération peut altérer la qualité de l’étude', correct: true, correction: 'Oui. C’est une difficulté pratique importante.' },
{ text: 'La contamination maternelle ou bactérienne est impossible', correct: false, correction: 'Non chef 💀 Le cours cite précisément ce risque.' },
{ text: 'Aucune analyse génétique ne peut être réalisée à partir des tissus', correct: false, correction: 'Faux. Des analyses cytogénétiques ou d’ADN peuvent être envisagées.' }
],
explanation: 'La fœtopathologie permet une analyse morphologique et des prélèvements multiples, mais macération, contamination et délais d’analyse peuvent limiter les résultats.'
},
{
id: 23,
type: 'QCM',
question: 'Comment l’échographie est-elle classée dans ce cours par rapport au diagnostic ?',
options: [
{ text: 'Comme un outil de dépistage qui peut orienter mais doit être confirmé pour poser un diagnostic', correct: true, correction: 'Oui boss 🧠 Échographie = dépistage dans le cadre présenté.' },
{ text: 'Comme un diagnostic génétique certain à elle seule', correct: false, correction: 'Non chef.' },
{ text: 'Comme un examen toujours invasif', correct: false, correction: 'Faux.' },
{ text: 'Comme un examen interdit pendant la grossesse', correct: false, correction: 'Non.' },
{ text: 'Comme un examen sans intérêt pour les malformations', correct: false, correction: 'Non chef 😭.' }
],
explanation: 'Le cours insiste : l’échographie relève du dépistage. Une suspicion doit être confirmée par un autre examen diagnostique.'
},
{
id: 24,
type: 'QRM',
question: 'Concernant l’échographie du premier trimestre dans la partie DPN, quelles propositions sont exactes ?',
options: [
{ text: 'Elle est réalisée entre 11 et 14 SA', correct: true, correction: 'Oui boss 🧠 Fenêtre T1 à retenir.' },
{ text: 'Elle est idéalement réalisée autour de 12 SA', correct: true, correction: 'Exact.' },
{ text: 'Elle permet de dater la grossesse grâce à la longueur cranio-caudale', correct: true, correction: 'Oui.' },
{ text: 'Elle permet de mesurer la clarté nucale', correct: true, correction: 'Exact 🧠 Élément clé du dépistage de la T21.' },
{ text: 'Son objectif principal est uniquement de déterminer le sexe fœtal', correct: false, correction: 'Non chef 💀 Ce n’est clairement pas son objectif principal.' }
],
explanation: 'L’échographie T1 date la grossesse, recherche certaines malformations majeures et mesure notamment la clarté nucale.'
},
{
id: 25,
type: 'QCM',
question: 'Quelle mesure échographique sert notamment à dater la grossesse au premier trimestre ?',
options: [
{ text: 'La longueur cranio-caudale', correct: true, correction: 'Oui boss 🧠 LCC = du pôle céphalique au pôle caudal.' },
{ text: 'La seule longueur du cordon ombilical', correct: false, correction: 'Non chef.' },
{ text: 'Le diamètre de la veine ombilicale uniquement', correct: false, correction: 'Faux.' },
{ text: 'La quantité de PAPP-A dans le liquide amniotique', correct: false, correction: 'Non.' },
{ text: 'Le taux d’AFP placentaire mesuré à l’échographie', correct: false, correction: 'Non chef 😭.' }
],
explanation: 'La LCC est une mesure majeure du premier trimestre permettant notamment la datation de la grossesse.'
},
{
id: 26,
type: 'QRM',
question: 'Concernant les échographies des deuxième et troisième trimestres, quelles propositions sont exactes ?',
options: [
{ text: 'L’échographie T2 est généralement réalisée autour de 22 à 24 SA', correct: true, correction: 'Oui boss 🧠 T2 = autour de 22–24 SA dans cette partie.' },
{ text: 'L’échographie T3 est réalisée autour de 32 SA', correct: true, correction: 'Exact.' },
{ text: 'L’échographie T2 n’a aucun rôle dans le dépistage morphologique', correct: false, correction: 'Non chef 😭 Son objectif principal est justement une étude morphologique détaillée.' },
{ text: 'L’échographie T3 n’a aucun intérêt pour la croissance fœtale', correct: false, correction: 'Non chef. Elle sert justement au suivi de croissance et du bien-être.' },
{ text: 'Aucune anomalie ne peut être découverte tardivement au T3', correct: false, correction: 'Faux.' }
],
explanation: 'T2 se situe vers 22–24 SA et T3 vers 32 SA. T2 est morphologique, tandis que T3 insiste notamment sur croissance, flux et anomalies tardives.'
},
{
id: 27,
type: 'QCM',
question: 'Quel signe morphologique est utilisé dans le cours pour illustrer le syndrome de Pierre Robin ?',
options: [
{ text: 'Une lèvre supérieure avancée avec un menton en retrait', correct: true, correction: 'Oui boss 🧠 C’est l’exemple de profil anormal présenté.' },
{ text: 'Une absence obligatoire des quatre membres', correct: false, correction: 'Non chef.' },
{ text: 'Une omphalocèle isolée comme définition du syndrome', correct: false, correction: 'Faux.' },
{ text: 'Une clarté nucale toujours nulle', correct: false, correction: 'Non.' },
{ text: 'Une absence de liquide amniotique comme seul signe', correct: false, correction: 'Non chef.' }
],
explanation: 'Le cours illustre le syndrome de Pierre Robin par un profil avec lèvre supérieure avancée et menton en retrait.'
},
{
id: 28,
type: 'QRM',
question: 'Concernant les examens d’imagerie complémentaires, quelles propositions sont exactes ?',
options: [
{ text: 'L’échographie 3D est surtout un complément de l’échographie 2D', correct: true, correction: 'Oui boss 🧠 Elle sert notamment à mieux caractériser une anomalie déjà vue.' },
{ text: 'Le scanner osseux peut être réalisé autour de 32 SA', correct: true, correction: 'Exact.' },
{ text: 'L’IRM fœtale peut être réalisée à partir de 20 SA', correct: true, correction: 'Oui 🎯 À partir du deuxième trimestre.' },
{ text: 'Le scanner osseux est l’examen de choix pour doser la βHCG', correct: false, correction: 'Non chef 💀 Scanner et dosage hormonal, rien à voir.' },
{ text: 'L’IRM fœtale est interdite dès qu’il existe peu de liquide amniotique', correct: false, correction: 'Faux. Elle est justement moins gênée par la quantité de liquide amniotique.' }
],
explanation: 'Échographie 3D, scanner osseux et IRM sont des outils complémentaires avec des indications et des termes différents.'
},
{
id: 29,
type: 'QCM',
question: 'Quelle pathologie est explicitement citée comme indication du scanner osseux fœtal ?',
options: [
{ text: 'L’achondroplasie', correct: true, correction: 'Oui boss 🧠 Le scanner osseux peut rechercher notamment achondroplasie ou ostéogenèse imparfaite.' },
{ text: 'Une infection à CMV uniquement', correct: false, correction: 'Non chef.' },
{ text: 'Une fausse couche précoce', correct: false, correction: 'Faux.' },
{ text: 'Une trisomie 21 uniquement sur marqueurs sériques', correct: false, correction: 'Non.' },
{ text: 'Une hémophilie par dosage de l’AFP', correct: false, correction: 'Non chef.' }
],
explanation: 'Le scanner osseux vers 32 SA est notamment utilisé pour des malformations osseuses comme l’achondroplasie ou l’ostéogenèse imparfaite.'
},
{
id: 30,
type: 'QRM',
question: 'Concernant l’IRM fœtale, quelles propositions sont exactes ?',
options: [
{ text: 'Elle complète principalement l’échographie', correct: true, correction: 'Oui boss 🧠 Elle affine certaines anomalies.' },
{ text: 'Elle est moins gênée que l’échographie par la paroi abdominale maternelle', correct: true, correction: 'Exact.' },
{ text: 'Elle est moins gênée par la quantité de liquide amniotique', correct: true, correction: 'Oui.' },
{ text: 'Elle offre une excellente résolution anatomique', correct: true, correction: 'Exact 🧠 D’où son intérêt neurologique notamment.' },
{ text: 'Elle ne peut jamais étudier le cerveau fœtal', correct: false, correction: 'Non chef 💀 Le cerveau fait partie de ses indications majeures.' }
],
explanation: 'L’IRM fœtale est un complément anatomique puissant, particulièrement utile pour le cerveau, le thorax et certaines tumeurs.'
},
{
id: 31,
type: 'QCM',
question: 'Quelle définition correspond au diagnostic préimplantatoire (DPI) ?',
options: [
{ text: 'La recherche sur des embryons conçus in vitro d’une maladie génétique grave et incurable susceptible d’être transmise par les parents', correct: true, correction: 'Oui boss 🧠 DPI = analyse ciblée avant transfert embryonnaire.' },
{ text: 'Un dépistage échographique de toutes les grossesses spontanées', correct: false, correction: 'Non chef.' },
{ text: 'Une analyse réalisée uniquement après l’accouchement', correct: false, correction: 'Faux.' },
{ text: 'Une technique qui ne nécessite jamais d’AMP', correct: false, correction: 'Non. Le DPI impose justement une assistance médicale à la procréation.' },
{ text: 'Une recherche de toutes les maladies possibles sur chaque embryon', correct: false, correction: 'Non chef 😭 Le DPI est ciblé sur l’anomalie recherchée.' }
],
explanation: 'Le DPI recherche une maladie génétique grave et incurable sur des embryons obtenus in vitro afin de sélectionner un embryon non atteint pour transfert.'
},
{
id: 32,
type: 'QRM',
question: 'Depuis la loi de bioéthique de 2021, qui peut être concerné par le DPI selon le cours ?',
options: [
{ text: 'Les couples hétérosexuels', correct: true, correction: 'Oui boss 🧠 Ils restent bien concernés.' },
{ text: 'Les couples de femmes', correct: true, correction: 'Exact. Ajout important depuis la loi de 2021.' },
{ text: 'Les hommes célibataires sans partenaire dans la liste donnée', correct: false, correction: 'Non chef. Cette catégorie n’est pas donnée dans le cours.' },
{ text: 'N’importe quelle personne sans anomalie génétique identifiée', correct: false, correction: 'Faux. Une anomalie génétique/chromosomique/moléculaire doit avoir été identifiée.' },
{ text: 'Uniquement les couples mariés depuis plus de 5 ans', correct: false, correction: 'Non 😭 Rien de tel dans le support.' }
],
explanation: 'Le cours cite couples hétérosexuels, couples de femmes et femmes célibataires, sous réserve notamment d’une anomalie identifiée.'
},
{
id: 33,
type: 'QCM',
question: 'Combien de centres sont indiqués comme agréés pour pratiquer le DPI en France dans le cours ?',
options: [
{ text: '2', correct: false, correction: 'Non chef.' },
{ text: '3', correct: false, correction: 'Faux.' },
{ text: '5', correct: true, correction: 'Oui boss 🎯 Cinq centres sont listés, avec Bordeaux mentionné comme futur centre.' },
{ text: '12', correct: false, correction: 'Non.' },
{ text: '50', correct: false, correction: 'Non chef 😭.' }
],
explanation: 'Le cours liste cinq centres : Paris-Clamart, Strasbourg, Nantes, Montpellier et Grenoble, avec Bordeaux indiqué comme à venir.'
},
{
id: 34,
type: 'QRM',
question: 'Quelles équipes participent à la prise en charge en DPI selon le cours ?',
options: [
{ text: 'Le CPDPN', correct: true, correction: 'Oui boss 🧠 Le dossier passe par une discussion pluridisciplinaire.' },
{ text: 'L’équipe d’assistance médicale à la procréation', correct: true, correction: 'Exact.' },
{ text: 'L’équipe de génétique', correct: true, correction: 'Oui. Les biologistes participent à la prise en charge.' },
{ text: 'Uniquement le médecin généraliste sans avis spécialisé', correct: false, correction: 'Non chef 💀 Le DPI est ultra-encadré et pluridisciplinaire.' },
{ text: 'Aucune discussion de faisabilité n’est nécessaire', correct: false, correction: 'Faux.' }
],
explanation: 'Le DPI associe CPDPN, équipe d’AMP et équipe de génétique, avec discussion de la faisabilité en staff.'
},
{
id: 35,
type: 'QCM',
question: 'Quel est l’objectif principal de la stimulation ovarienne dans le parcours de DPI ?',
options: [
{ text: 'Obtenir le plus grand nombre possible d’ovocytes afin de maximiser les chances de fécondation', correct: true, correction: 'Oui boss 🧠 Plus d’ovocytes = plus de chances d’obtenir un embryon transférable.' },
{ text: 'Réduire volontairement la cohorte à un seul ovocyte', correct: false, correction: 'Non chef.' },
{ text: 'Éviter toute fécondation in vitro', correct: false, correction: 'Faux.' },
{ text: 'Empêcher la réalisation d’une biopsie embryonnaire', correct: false, correction: 'Non.' },
{ text: 'Mesurer la clarté nucale avant conception', correct: false, correction: 'Non chef 😭.' }
],
explanation: 'La stimulation ovarienne vise à obtenir de nombreux ovocytes, puis une ponction folliculaire et une FIV/ICSI permettent de générer plusieurs embryons à analyser.'
},
{
id: 36,
type: 'QRM',
question: 'Concernant les étapes techniques du DPI, quelles propositions sont exactes ?',
options: [
{ text: 'Une ponction folliculaire est programmée après stimulation ovarienne', correct: true, correction: 'Oui boss 🧠 Étape de récupération ovocytaire.' },
{ text: 'Les spermatozoïdes sont recueillis et préparés pour une FIV ou une ICSI', correct: true, correction: 'Exact.' },
{ text: 'La biopsie embryonnaire peut être réalisée à J3 ou à J5/J6', correct: true, correction: 'Oui.' },
{ text: 'Après l’analyse, un embryon non atteint peut être transféré dans l’utérus', correct: true, correction: 'Exact 🧠 C’est l’objectif final du parcours si les conditions sont réunies.' },
{ text: 'Aucun transfert utérin n’est prévu après sélection', correct: false, correction: 'Faux.' }
],
explanation: 'Stimulation, prélèvement ovocytaire, FIV/ICSI, biopsie embryonnaire, analyse puis transfert d’un embryon non atteint constituent les grandes étapes.'
},
{
id: 37,
type: 'QCM',
question: 'Pourquoi un DPN peut-il encore être proposé après une grossesse obtenue par DPI ?',
options: [
{ text: 'Parce que le DPI est une analyse ciblée sur une anomalie précise et ne recherche pas toutes les pathologies', correct: true, correction: 'Oui boss 🧠 DPI ciblé ≠ scan intégral du génome.' },
{ text: 'Parce que le DPI ne réalise aucune analyse génétique', correct: false, correction: 'Non chef.' },
{ text: 'Parce que tous les embryons transférés sont nécessairement malades', correct: false, correction: 'Faux.' },
{ text: 'Parce que le DPI ne peut jamais identifier l’anomalie familiale', correct: false, correction: 'Non.' },
{ text: 'Parce que la FIV provoque systématiquement une trisomie 21', correct: false, correction: 'Non chef 💀.' }
],
explanation: 'Le DPI cible une anomalie déterminée. Le cours donne l’exemple d’une analyse de trisomie 15 qui ne recherche pas simultanément une trisomie 21.'
},
{
id: 38,
type: 'QRM',
question: 'Concernant les analyses génétiques réalisées en DPI, quelles propositions sont exactes ?',
options: [
{ text: 'La cytogénétique peut utiliser la FISH en fluorescence', correct: true, correction: 'Oui boss 🧠 Analyse ciblée sur ce qu’on recherche.' },
{ text: 'La génétique moléculaire peut récupérer l’ADN de la cellule pour rechercher une mutation', correct: true, correction: 'Exact.' },
{ text: 'Le DPI analyse systématiquement toutes les maladies génétiques possibles', correct: false, correction: 'Non chef. Il est ciblé.' },
{ text: 'Aucune analyse d’ADN n’est possible sur une cellule embryonnaire biopsiée', correct: false, correction: 'Faux.' },
{ text: 'La FISH est décrite comme une technique macroscopique sans fluorescence', correct: false, correction: 'Non 😭 C’est précisément une technique fluorescente.' }
],
explanation: 'Le DPI peut utiliser des approches cytogénétiques ciblées comme la FISH ou des approches moléculaires sur ADN.'
},
{
id: 39,
type: 'QCM',
question: 'Quel taux de grossesse par cycle de FIV est donné dans les difficultés du DPI ?',
options: [
{ text: '1 à 2 %', correct: false, correction: 'Non chef.' },
{ text: '5 à 10 %', correct: false, correction: 'Faux.' },
{ text: '20 à 30 %', correct: true, correction: 'Oui boss 🎯 20–30 % par cycle.' },
{ text: '70 à 80 %', correct: false, correction: 'Non.' },
{ text: '100 %', correct: false, correction: 'Non chef 😭 Si seulement.' }
],
explanation: 'Le cours indique un taux de grossesse de l’ordre de 20 à 30 % par cycle de FIV dans le contexte du DPI.'
},
{
id: 40,
type: 'QRM',
question: 'Concernant les difficultés pratiques du DPI, quelles propositions sont exactes ?',
options: [
{ text: 'Une stimulation ovarienne peut échouer', correct: true, correction: 'Oui boss 🧠 Première difficulté citée.' },
{ text: 'Les prélèvements ovocytaires peuvent être désagréables', correct: true, correction: 'Exact.' },
{ text: 'La multiplicité des embryons impose des contraintes de stockage et d’identitovigilance', correct: true, correction: 'Oui.' },
{ text: 'Le taux de grossesse par cycle est toujours proche de 100 %', correct: false, correction: 'Non chef 💀 Le cours donne seulement 20–30 %.' },
{ text: 'La qualité embryonnaire n’influence jamais la faisabilité de la biopsie', correct: false, correction: 'Faux.' }
],
explanation: 'Le DPI cumule contraintes de stimulation, prélèvement, biologie, stockage, qualité embryonnaire et taux de grossesse limité.'
},
{
id: 41,
type: 'QCM',
question: 'À J2/J3, combien de cellules peut-on biopsier sur un embryon de 8 cellules selon le cours ?',
options: [
{ text: '1 à 2 cellules', correct: true, correction: 'Oui boss 🎯 1–2 cellules seulement, sinon tu fragilises trop l’embryon.' },
{ text: '3 à 4 cellules systématiquement', correct: false, correction: 'Non chef. Le cours dit que 3 cellules pourraient tuer l’embryon.' },
{ text: 'Les 8 cellules', correct: false, correction: 'Faux 💀 Tu n’aurais plus vraiment grand-chose à transférer.' },
{ text: 'Aucune cellule', correct: false, correction: 'Non.' },
{ text: '20 cellules', correct: false, correction: 'Non chef.' }
],
explanation: 'À J2/J3, seulement 1 à 2 cellules sont biopsiées sur un embryon d’environ 8 cellules afin de préserver sa viabilité.'
},
{
id: 42,
type: 'QRM',
question: 'Concernant les limites analytiques du DPI, quelles propositions sont exactes ?',
options: [
{ text: 'Le mosaïcisme peut faire qu’une cellule biopsiée ne représente pas toutes les cellules de l’embryon', correct: true, correction: 'Oui boss 🧠 C’est une grosse limite cytogénétique.' },
{ text: 'Le faible nombre de cellules disponibles peut limiter la représentativité de l’analyse', correct: true, correction: 'Exact.' },
{ text: 'Un allèle dropout peut résulter d’une amplification insuffisante de l’ADN', correct: true, correction: 'Oui. Résultat : information moléculaire incomplète.' },
{ text: 'Le résultat peut devoir être obtenu en environ 24 h', correct: true, correction: 'Exact 🧠 Peu de temps disponible pour décider du transfert.' },
{ text: 'Le DPI dispose toujours d’une quantité illimitée d’ADN', correct: false, correction: 'Non chef 💀 C’est tout l’inverse.' }
],
explanation: 'Peu de matériel, mosaïcisme, allèle dropout et contrainte temporelle sont des limites majeures du DPI.'
},
{
id: 43,
type: 'QCM',
question: 'Quelle limite d’âge est mentionnée dans le cours pour le DPI ?',
options: [
{ text: '25 ans', correct: false, correction: 'Non chef.' },
{ text: '30 ans', correct: false, correction: 'Faux.' },
{ text: '37 ans', correct: true, correction: 'Oui boss 🎯 Le cours mentionne 37 ans, tout en insistant sur la réserve ovarienne et la qualité ovocytaire.' },
{ text: '45 ans', correct: false, correction: 'Non.' },
{ text: 'Aucune limite d’âge n’est évoquée', correct: false, correction: 'Non chef.' }
],
explanation: 'Une limite de 37 ans est citée dans le support, même si la réserve ovarienne et la qualité des ovocytes sont présentées comme essentielles.'
},
{
id: 44,
type: 'QRM',
question: 'Concernant le choix entre biopsie embryonnaire à J3 et à J5/J6, quelles propositions sont exactes ?',
options: [
{ text: 'À J5, davantage de cellules peuvent être prélevées qu’à J3', correct: true, correction: 'Oui boss 🧠 Plus de matériel = analyse plus fiable.' },
{ text: 'Un embryon insuffisamment développé à J2/J3 peut conduire à attendre J5', correct: true, correction: 'Exact.' },
{ text: 'La biopsie est obligatoirement réalisée le dimanche si J3 tombe un dimanche', correct: false, correction: 'Non chef 😭 Le cours dit justement qu’on ne prélève pas le dimanche.' },
{ text: 'À J3, on prélève systématiquement plus de cellules qu’à J5', correct: false, correction: 'Faux. C’est l’inverse.' },
{ text: 'La fiabilité est toujours moins bonne à J5', correct: false, correction: 'Non. Le cours dit qu’elle est plus fiable car on prélève davantage.' }
],
explanation: 'Le timing de biopsie dépend du développement embryonnaire et de l’organisation du laboratoire. J5 permet souvent de prélever davantage de cellules.'
},
{
id: 45,
type: 'QCM',
question: 'Quelle définition correspond au dépistage prénatal dans la seconde partie du cours ?',
options: [
{ text: 'La recherche d’anomalies chez l’embryon ou le fœtus avant la naissance dans la population générale', correct: true, correction: 'Oui boss 🧠 Population générale, sans maladie familiale spécifique obligatoire.' },
{ text: 'Une démarche limitée aux couples déjà porteurs d’une mutation connue', correct: false, correction: 'Non chef. Ça se rapproche davantage du contexte du DPI.' },
{ text: 'Un diagnostic invasif certain', correct: false, correction: 'Faux.' },
{ text: 'Une procédure réalisée uniquement après une anomalie échographique', correct: false, correction: 'Non.' },
{ text: 'Une analyse toujours réalisée sur tissu fœtal prélevé', correct: false, correction: 'Non chef.' }
],
explanation: 'Le dépistage prénatal concerne la population générale et vise à identifier un risque d’anomalie avant la naissance.'
},
{
id: 46,
type: 'QRM',
question: 'Concernant la politique française de dépistage prénatal décrite dans le cours, quelles propositions sont exactes ?',
options: [
{ text: 'Seul le dépistage prénatal de la trisomie 21 est présenté comme légiféré', correct: true, correction: 'Oui boss 🧠 T21 = dépistage prénatal légiféré en France dans le cours.' },
{ text: 'Le dépistage de la T21 repose notamment sur trois échographies', correct: true, correction: 'Exact.' },
{ text: 'Les marqueurs sériques maternels participent au dépistage', correct: true, correction: 'Oui.' },
{ text: 'Le dépistage français légiféré porte de façon identique sur toutes les trisomies', correct: false, correction: 'Non chef 💀 Le cours insiste sur la T21.' },
{ text: 'Le DPNI n’a aucun rôle dans la stratégie de dépistage', correct: false, correction: 'Faux.' }
],
explanation: 'En France, le cours présente la T21 comme le dépistage prénatal légiféré, combinant échographies, MSM et DPNI selon les conditions.'
},
{
id: 47,
type: 'QCM',
question: 'Quelle plage de PAPP-A est considérée comme normale dans le tableau des marqueurs sériques du premier trimestre ?',
options: [
{ text: '0 à 0,10 MoM', correct: false, correction: 'Non chef.' },
{ text: '0,25 à 2,50 MoM', correct: true, correction: 'Oui boss 🎯 PAPP-A normale = 0,25–2,50 MoM.' },
{ text: '0,50 à 5,00 MoM', correct: false, correction: 'Faux.' },
{ text: '2,50 à 10 MoM uniquement', correct: false, correction: 'Non.' },
{ text: 'Toujours supérieure à 5 MoM', correct: false, correction: 'Non chef.' }
],
explanation: 'La PAPP-A est considérée basse sous 0,25 MoM, normale entre 0,25 et 2,50 MoM et élevée au-dessus de 2,50 MoM.'
},
{
id: 48,
type: 'QRM',
question: 'Quelles normes des marqueurs sériques correspondent au tableau du cours ?',
options: [
{ text: 'AFP normale : 0,50 à 2,50 MoM', correct: true, correction: 'Oui boss 🧠 AFP T2 = 0,5–2,5 MoM.' },
{ text: 'βHCG normale : 0,25 à 5,0 MoM', correct: true, correction: 'Exact.' },
{ text: 'PAPP-A normale : 0,25 à 2,50 MoM', correct: true, correction: 'Oui.' },
{ text: 'βHCG élevée : supérieure à 5 MoM', correct: true, correction: 'Exact 🧠 Au-dessus de 5 MoM, le profil devient particulièrement suspect.' },
{ text: 'AFP basse : supérieure à 2,5 MoM', correct: false, correction: 'Non chef 💀 Supérieure à 2,5 MoM = AFP élevée.' }
],
explanation: 'Les seuils clés sont AFP 0,5–2,5 MoM, βHCG 0,25–5 MoM et PAPP-A 0,25–2,5 MoM.'
},
{
id: 49,
type: 'QCM',
question: 'Au premier trimestre, que suggère une PAPP-A diminuée avec une βHCG normale selon le cours ?',
options: [
{ text: 'Une suspicion de trisomie 13, 18, 21 ou de triploïdie', correct: true, correction: 'Oui boss 🧠 Profil à retenir tel quel.' },
{ text: 'Uniquement une pathologie du tube neural', correct: false, correction: 'Non chef. Le tube neural est surtout relié à l’AFP élevée au T2.' },
{ text: 'Aucune pathologie fœtale rapportée', correct: false, correction: 'Faux. Cette remarque concerne plutôt PAPP-A élevée avec βHCG normale.' },
{ text: 'Une certitude de fausse couche', correct: false, correction: 'Non.' },
{ text: 'Une certitude de grossesse gémellaire', correct: false, correction: 'Non chef.' }
],
explanation: 'PAPP-A basse isolée au T1 fait évoquer dans le cours T13, T18, T21 ou triploïdie.'
},
{
id: 50,
type: 'QRM',
question: 'Au premier trimestre, quelles associations marqueurs-interprétation sont exactes ?',
options: [
{ text: 'PAPP-A normale avec βHCG diminuée : évoque FC ou MFIU', correct: true, correction: 'Oui boss 🧠 Et on contrôle la vitalité fœtale.' },
{ text: 'PAPP-A normale avec βHCG > 5 MoM : suspicion de T21 possible', correct: true, correction: 'Exact.' },
{ text: 'PAPP-A élevée avec βHCG normale : pathologie fœtale certaine', correct: false, correction: 'Non chef. Le cours dit qu’aucune pathologie fœtale n’est rapportée dans ce profil.' },
{ text: 'βHCG basse : preuve diagnostique certaine d’une MFIU', correct: false, correction: 'Faux. Ça évoque une situation et impose une vérification échographique.' },
{ text: 'PAPP-A basse isolée élimine toute trisomie', correct: false, correction: 'Non 💀 C’est justement un profil évocateur de plusieurs trisomies.' }
],
explanation: 'Les profils des marqueurs sériques orientent un risque et doivent être intégrés avec l’échographie et le contexte clinique.'
},
{
id: 51,
type: 'QCM',
question: 'Combien de chromosomes au total sont indiqués dans la définition de la triploïdie du cours ?',
options: [
{ text: '46', correct: false, correction: 'Non chef.' },
{ text: '47', correct: false, correction: 'Faux.' },
{ text: '69', correct: true, correction: 'Oui boss 🎯 Triploïdie = 69 chromosomes dans le support.' },
{ text: '92', correct: false, correction: 'Non.' },
{ text: '23', correct: false, correction: 'Non chef.' }
],
explanation: 'Le cours définit la triploïdie comme trois exemplaires des chromosomes, soit 69 chromosomes au total.'
},
{
id: 52,
type: 'QRM',
question: 'Concernant les marqueurs sériques du deuxième trimestre, quelles propositions sont exactes ?',
options: [
{ text: 'Une AFP diminuée avec βHCG normale peut faire suspecter une trisomie 18 ou 21', correct: true, correction: 'Oui boss 🧠 Profil T2 classique du cours.' },
{ text: 'Une AFP normale avec βHCG diminuée évoque une FC ou une MFIU', correct: true, correction: 'Exact.' },
{ text: 'Une AFP élevée avec βHCG normale peut évoquer un défaut de fermeture du tube neural ou de la paroi abdominale', correct: true, correction: 'Oui.' },
{ text: 'Une AFP basse isolée évoque typiquement un défaut de fermeture du tube neural', correct: false, correction: 'Non chef 💀 C’est une AFP élevée qui fait évoquer ce type d’anomalie.' },
{ text: 'Une βHCG élevée exclut toute pathologie placentaire', correct: false, correction: 'Faux.' }
],
explanation: 'Au T2, l’AFP apporte notamment des informations sur les trisomies et les défauts de fermeture du tube neural ou de la paroi abdominale.'
},
{
id: 53,
type: 'QCM',
question: 'Quel profil biologique du deuxième trimestre fait particulièrement suspecter un défaut de fermeture du tube neural ?',
options: [
{ text: 'AFP > 2,5 MoM avec βHCG normale', correct: true, correction: 'Oui boss 🎯 AFP élevée isolée = penser tube neural/paroi abdominale.' },
{ text: 'AFP < 0,5 MoM avec βHCG normale', correct: false, correction: 'Non chef. Ce profil évoque plutôt T18 ou T21.' },
{ text: 'βHCG < 0,25 MoM isolée', correct: false, correction: 'Faux. Ça évoque plutôt FC ou MFIU.' },
{ text: 'PAPP-A > 2,5 MoM isolée au T1', correct: false, correction: 'Non.' },
{ text: 'βHCG normale et AFP normale', correct: false, correction: 'Non chef.' }
],
explanation: 'Une AFP supérieure à 2,5 MoM au T2 avec βHCG normale fait évoquer notamment une anomalie de fermeture du tube neural.'
},
{
id: 54,
type: 'QRM',
question: 'Quels éléments peuvent influencer ou modifier l’interprétation du dépistage sérique selon le cours ?',
options: [
{ text: 'L’âge maternel', correct: true, correction: 'Oui boss 🧠 Un âge maternel avancé augmente le risque de trisomie.' },
{ text: 'Le caractère mono- ou polyfœtal de la grossesse', correct: true, correction: 'Exact. Les résultats hormonaux ne s’interprètent pas pareil.' },
{ text: 'Le calcul intégré associant marqueurs sériques et données échographiques', correct: true, correction: 'Oui. La prof insiste : les données isolées ne suffisent pas.' },
{ text: 'La qualité de la mesure de clarté nucale évaluée par le score de Herman', correct: true, correction: 'Exact 🧠 La qualité de l’image influence la pertinence du risque intégré.' },
{ text: 'La couleur des yeux maternels comme critère du cours', correct: false, correction: 'Non chef 😭 Aucun rapport.' }
],
explanation: 'Le risque intégré repose sur plusieurs paramètres, notamment âge, marqueurs sériques et échographie correctement réalisée.'
},
{
id: 55,
type: 'QCM',
question: 'Sur combien de points est calculé le score de Herman présenté dans le cours ?',
options: [
{ text: '3 points', correct: false, correction: 'Non chef.' },
{ text: '5 points', correct: false, correction: 'Faux.' },
{ text: '9 points', correct: true, correction: 'Oui boss 🎯 Score de Herman sur 9 points.' },
{ text: '20 points', correct: false, correction: 'Non.' },
{ text: '100 points', correct: false, correction: 'Non chef.' }
],
explanation: 'Le score de Herman est un score sur 9 points évaluant la qualité des images de clarté nucale.'
},
{
id: 56,
type: 'QRM',
question: 'Concernant le score de Herman, quelles propositions sont exactes ?',
options: [
{ text: 'Un score de 0 à 1 est considéré comme inacceptable', correct: true, correction: 'Oui boss 🧠 0–1 = inacceptable.' },
{ text: 'Un score de 8 à 9 est considéré comme excellent', correct: true, correction: 'Exact.' },
{ text: 'Un score inférieur à 4 doit toujours être intégré tel quel au calcul de risque', correct: false, correction: 'Non chef 💀 Le cadre dit justement de ne pas intégrer ces mesures.' },
{ text: 'Un score de 2 à 3 est considéré comme excellent', correct: false, correction: 'Faux. Il est insuffisant.' },
{ text: 'Le score ne concerne jamais la qualité des images de clarté nucale', correct: false, correction: 'Non.' }
],
explanation: 'Le score classe 0–1 inacceptable, 2–3 insuffisant, 4–7 correct et 8–9 excellent. Si le score est <4, la mesure ne doit pas être intégrée.'
},
{
id: 57,
type: 'QCM',
question: 'Quelle plage de longueur cranio-caudale est indiquée dans la diapositive associée au score de Herman ?',
options: [
{ text: '10 à 20 mm', correct: false, correction: 'Non chef.' },
{ text: '25 à 40 mm', correct: false, correction: 'Faux.' },
{ text: '45 à 84 mm', correct: true, correction: 'Oui boss 🎯 LCC comprise entre 45 et 84 mm.' },
{ text: '100 à 150 mm', correct: false, correction: 'Non.' },
{ text: 'Plus de 200 mm obligatoirement', correct: false, correction: 'Non chef.' }
],
explanation: 'La diapositive précise une LCC comprise entre 45 et 84 mm pour l’évaluation de la clarté nucale dans ce cadre.'
},
{
id: 58,
type: 'QRM',
question: 'Concernant l’échographie de dépistage du premier trimestre, quelles propositions sont exactes ?',
options: [
{ text: 'Elle se fait entre 11 SA et 13 SA + 6 jours dans la seconde partie du cours', correct: true, correction: 'Oui boss 🧠 Fenêtre précise du support.' },
{ text: 'Elle peut être réalisée par voie abdominale ou vaginale', correct: true, correction: 'Exact.' },
{ text: 'Elle participe au calcul du risque intégré de trisomie 21', correct: true, correction: 'Oui.' },
{ text: 'Elle est obligatoirement douloureuse', correct: false, correction: 'Non chef. Elle est décrite comme indolore.' },
{ text: 'Elle est réservée aux couples déjà connus porteurs d’une anomalie', correct: false, correction: 'Faux. Le dépistage concerne la population générale.' }
],
explanation: 'L’échographie T1 est un examen indolore de la population générale intégrant datation, biométrie et vitalité dans l’évaluation du risque.'
},
{
id: 59,
type: 'QCM',
question: 'Quel signe échographique est évocateur d’une trisomie 21 selon le cours ?',
options: [
{ text: 'Une clarté nucale épaisse', correct: true, correction: 'Oui boss 🧠 Clarté nucale augmentée = signe d’appel classique du support.' },
{ text: 'Une clarté nucale toujours absente', correct: false, correction: 'Non chef.' },
{ text: 'Une longueur cranio-caudale obligatoirement augmentée', correct: false, correction: 'Faux. Le cours cite plutôt une LCC rétrécie.' },
{ text: 'Une présence obligatoire de deux os nasaux très volumineux', correct: false, correction: 'Non.' },
{ text: 'Une malprésentation fœtale isolée', correct: false, correction: 'Non chef.' }
],
explanation: 'Le cours cite clarté nucale épaisse, LCC rétrécie et absence de l’os du nez comme signes évocateurs de T21.'
},
{
id: 60,
type: 'QRM',
question: 'Concernant les échographies de dépistage des deuxième et troisième trimestres, quelles propositions sont exactes ?',
options: [
{ text: 'L’échographie T2 permet une étude morphologique complète du fœtus', correct: true, correction: 'Oui boss 🧠 T2 = grande écho morphologique.' },
{ text: 'L’échographie T2 peut analyser le placenta et les artères utérines', correct: true, correction: 'Exact.' },
{ text: 'L’échographie T2 peut participer à la biométrie et à la détermination du sexe fœtal', correct: true, correction: 'Oui.' },
{ text: 'Au T3, le Doppler des artères ombilicales et utérines peut être ajouté pour évaluer la vascularisation', correct: true, correction: 'Exact 🧠 C’est la différence mise en avant.' },
{ text: 'Le T3 interdit toute étude de la croissance', correct: false, correction: 'Non chef 💀 Les intérêts du T2 sont globalement conservés.' }
],
explanation: 'T2 explore morphologie, placenta, vitalité et biométrie ; T3 reprend ces objectifs avec notamment un Doppler ombilical et utérin.'
},
{
id: 61,
type: 'QCM',
question: 'En quelle année le cours situe-t-il la découverte d’ADN fœtal libre circulant dans le plasma et le sérum maternel ?',
options: [
{ text: '1969', correct: false, correction: 'Non chef. 1969 correspond aux premières publications sur des cellules fœtales dans le sang maternel.' },
{ text: '1989', correct: false, correction: 'Faux. Cette année est reliée à la détermination du sexe fœtal par ADN.' },
{ text: '1993', correct: false, correction: 'Non. Cette année est reliée aux premiers DPNI pour trisomies 21 et 18 et au Rhésus fœtal.' },
{ text: '1997', correct: true, correction: 'Oui boss 🎯 ADN fœtal libre circulant dans plasma/sérum maternel : 1997.' },
{ text: '2015', correct: false, correction: 'Non chef.' }
],
explanation: 'La chronologie du cours mène à 1997 pour la découverte de l’ADN fœtal libre circulant dans le plasma et le sérum maternel.'
},
{
id: 62,
type: 'QRM',
question: 'Concernant l’histoire du DPNI présentée dans le cours, quelles associations sont exactes ?',
options: [
{ text: '1969 : publications retrouvant des cellules fœtales dans le sang maternel dès environ 14 semaines', correct: true, correction: 'Oui boss 🧠 Première étape historique citée.' },
{ text: '1998 : premier véritable DPNI/NIPT avec quantification de l’ADN fœtal', correct: true, correction: 'Exact 🎯.' },
{ text: '1989 : découverte de l’AFP comme premier marqueur sanguin humain', correct: false, correction: 'Non chef. 1989 est relié à la détermination du sexe fœtal par ADN.' },
{ text: '1997 : première biopsie de trophoblaste au monde', correct: false, correction: 'Faux.' },
{ text: '1993 : première IRM fœtale du cours', correct: false, correction: 'Non.' }
],
explanation: 'La chronologie donnée va des cellules fœtales observées dans le sang maternel aux années 1960-70 jusqu’au véritable NIPT quantitatif en 1998.'
},
{
id: 63,
type: 'QCM',
question: 'Quel est l’avantage majeur du NGS mis en avant dans le cours ?',
options: [
{ text: 'Analyser plusieurs millions de fragments d’ADN en parallèle', correct: true, correction: 'Oui boss 🧠 Très haut débit = millions de fragments en même temps.' },
{ text: 'Analyser uniquement un fragment par semaine', correct: false, correction: 'Non chef 😭 Ce serait plutôt du very-low-throughput.' },
{ text: 'Ne nécessiter aucune préparation de l’ADN', correct: false, correction: 'Faux.' },
{ text: 'Éviter toute étape d’assemblage ou d’analyse', correct: false, correction: 'Non.' },
{ text: 'Être obligatoirement invasif pour le fœtus', correct: false, correction: 'Non chef.' }
],
explanation: 'Le NGS est un séquençage très haut débit qui analyse des millions de fragments en parallèle, réduisant notamment temps et coût.'
},
{
id: 64,
type: 'QRM',
question: 'Quelles étapes font partie du schéma général du NGS décrit dans le cours ?',
options: [
{ text: 'Fragmenter l’ADN en petits morceaux', correct: true, correction: 'Oui boss 🧠 Première étape.' },
{ text: 'Ajouter des adaptateurs', correct: true, correction: 'Exact. Ils permettent de repérer les fragments.' },
{ text: 'Constituer une librairie pour le séquençage', correct: true, correction: 'Oui.' },
{ text: 'Supprimer définitivement tous les fragments après leur lecture', correct: false, correction: 'Non chef 💀 Le cours prévoit ensuite leur assemblage analytique.' },
{ text: 'Transformer les fragments en chromosomes entiers avant toute analyse', correct: false, correction: 'Faux.' }
],
explanation: 'Fragmentation, adaptateurs, librairie puis assemblage en séquence analysable structurent le NGS du cours.'
},
{
id: 65,
type: 'QCM',
question: 'Dans la technologie PGM par détection d’H+, quel événement est mesuré lors de l’incorporation d’un nucléotide ?',
options: [
{ text: 'La libération d’un proton H+', correct: true, correction: 'Oui boss 🧠 Incorporation du nucléotide → libération d’un H+ mesurée par variation de pH.' },
{ text: 'La disparition complète de l’ADN', correct: false, correction: 'Non chef.' },
{ text: 'La production d’une plaquette', correct: false, correction: 'Faux.' },
{ text: 'Une variation de la clarté nucale', correct: false, correction: 'Non 😭.' },
{ text: 'La libération d’un globule rouge', correct: false, correction: 'Non chef.' }
],
explanation: 'La technologie PGM détecte les protons H+ libérés lors de la synthèse d’ADN grâce à une puce sensible au pH.'
},
{
id: 66,
type: 'QRM',
question: 'Concernant la technologie Illumina décrite pour le DPNI, quelles propositions sont exactes ?',
options: [
{ text: 'L’ADN fœtal libre circulant est extrait et purifié', correct: true, correction: 'Oui boss 🧠 Étape de préparation initiale.' },
{ text: 'Des adaptateurs sont ajoutés pour constituer une librairie', correct: true, correction: 'Exact.' },
{ text: 'La librairie est amplifiée par PCR avant séquençage', correct: true, correction: 'Oui.' },
{ text: 'Le système de comptage peut détecter une sur-représentation chromosomique en cas d’aneuploïdie', correct: true, correction: 'Exact 🧠 C’est le principe recherché.' },
{ text: 'Aucun chromosome n’est séquencé', correct: false, correction: 'Non chef 💀 Le système analyse justement les fragments chromosomiques.' }
],
explanation: 'L’approche Illumina repose sur préparation de librairie, amplification, séquençage puis comptage relatif des fragments chromosomiques.'
},
{
id: 67,
type: 'QCM',
question: 'À partir de quel terme le DPNI peut-il être proposé selon le cours ?',
options: [
{ text: 'Dès la 10e semaine de grossesse ou environ 12 SA', correct: true, correction: 'Oui boss 🎯 C’est le repère temporel donné.' },
{ text: 'Uniquement après 32 SA', correct: false, correction: 'Non chef.' },
{ text: 'Uniquement après l’accouchement', correct: false, correction: 'Faux.' },
{ text: 'Seulement à partir de 22 SA', correct: false, correction: 'Non. Ça correspond au prélèvement de sang fœtal.' },
{ text: 'Uniquement avant 5 SA', correct: false, correction: 'Non chef.' }
],
explanation: 'Le DPNI peut être proposé dès la 10e semaine de grossesse, soit environ 12 SA, sur simple prise de sang maternelle.'
},
{
id: 68,
type: 'QRM',
question: 'Concernant les conditions pratiques de réalisation du DPNI, quelles propositions sont exactes ?',
options: [
{ text: 'Il utilise une prise de sang maternelle', correct: true, correction: 'Oui boss 🧠 Pas besoin de piquer le cordon fœtal.' },
{ text: 'Le prélèvement est recueilli dans un tube Streck dans le cours', correct: true, correction: 'Exact. Attention à l’orthographe, piège du QCM fourni.' },
{ text: 'Le prélèvement doit obligatoirement être du sang fœtal', correct: false, correction: 'Non chef 💀 C’est justement non invasif pour le fœtus.' },
{ text: 'Aucun tube spécifique n’est nécessaire', correct: false, correction: 'Faux.' },
{ text: 'Le plasma maternel n’est jamais utilisé', correct: false, correction: 'Non. L’ADNflc est récupéré à partir du plasma maternel.' }
],
explanation: 'Le DPNI repose sur le sang maternel recueilli dans un tube Streck puis sur l’analyse d’ADN fœto-placentaire libre circulant.'
},
{
id: 69,
type: 'QCM',
question: 'Quelle durée maximale de conservation à température ambiante du tube Streck est donnée dans le cours ?',
options: [
{ text: '6 heures', correct: false, correction: 'Non chef.' },
{ text: '24 heures', correct: false, correction: 'Faux.' },
{ text: '5 jours', correct: true, correction: 'Oui boss 🎯 Jusqu’à 5 jours à température ambiante dans le support.' },
{ text: '1 mois', correct: false, correction: 'Non.' },
{ text: '1 an', correct: false, correction: 'Non chef.' }
],
explanation: 'Le tube Streck est donné pour une conservation jusqu’à 5 jours à température ambiante, avant centrifugation pour récupérer le plasma.'
},
{
id: 70,
type: 'QRM',
question: 'Quelles situations constituent des indications de DPNI décrites dans le cours ?',
options: [
{ text: 'Un risque issu des marqueurs sériques supérieur à 1/1000', correct: true, correction: 'Oui boss 🧠 Seuil explicitement cité.' },
{ text: 'Des marqueurs sériques atypiques', correct: true, correction: 'Exact.' },
{ text: 'Une grossesse gémellaire ou éventuellement triple, sans MSM car ceux-ci ne fonctionnent pas correctement dans ce contexte', correct: true, correction: 'Oui. Le cours cite le DPNI en première intention dans ces grossesses multiples.' },
{ text: 'Toute patiente obligatoirement sans prescription', correct: false, correction: 'Non chef 💀 Une prescription est nécessaire.' },
{ text: 'Uniquement les patientes ayant déjà subi une amniocentèse normale', correct: false, correction: 'Faux.' }
],
explanation: 'Le cours cite notamment risque MSM >1/1000, MSM atypiques et grossesse multiple comme situations conduisant au DPNI.'
},
{
id: 71,
type: 'QCM',
question: 'Quelles trisomies sont analysées par défaut dans le DPNI français décrit dans le cours ?',
options: [
{ text: '21, 18 et 13', correct: true, correction: 'Oui boss 🧠 Le trio classique : T21, T18, T13.' },
{ text: '1, 2 et 3', correct: false, correction: 'Non chef.' },
{ text: '8, 9 et 10 uniquement', correct: false, correction: 'Faux.' },
{ text: 'Uniquement la trisomie 16', correct: false, correction: 'Non.' },
{ text: 'Tous les chromosomes sans distinction obligatoire', correct: false, correction: 'Non chef.' }
],
explanation: 'Les trisomies 21, 18 et 13 sont les trois principales trisomies analysées par défaut dans le cadre décrit.'
},
{
id: 72,
type: 'QRM',
question: 'Concernant les possibilités et limites réglementaires du DPNI en France selon le cours, quelles propositions sont exactes ?',
options: [
{ text: 'Les CNV peuvent être recherchés dans le cadre décrit', correct: true, correction: 'Oui boss 🧠 Les CNV figurent parmi les analyses autorisées.' },
{ text: 'Certains remaniements de plus de 7 Mb peuvent être analysés', correct: true, correction: 'Exact 🎯 Seuil chiffré à retenir.' },
{ text: 'Les chromosomes sexuels ne sont pas analysés dans ce cadre français', correct: true, correction: 'Oui. Le support dit même JAMAIS sur les gonosomes.' },
{ text: 'L’analyse d’autres chromosomes que les trois trisomies principales peut nécessiter le consentement explicite de la patiente', correct: true, correction: 'Exact 🧠 Elle doit cocher son choix.' },
{ text: 'Les chromosomes sexuels sont analysés obligatoirement chez toutes les patientes', correct: false, correction: 'Non chef 💀 C’est l’inverse.' }
],
explanation: 'Le cadre présenté autorise les trois trisomies principales, certains CNV et grands remaniements, avec consentement spécifique pour des analyses supplémentaires et exclusion des gonosomes.'
},
{
id: 73,
type: 'QCM',
question: 'Pourquoi le DPNI reste-t-il un dépistage malgré une sensibilité et une spécificité supérieures à 99 % pour la trisomie 21 ?',
options: [
{ text: 'Parce qu’il existe encore des faux positifs et des faux négatifs', correct: true, correction: 'Oui boss 🧠 >99 % ne veut pas dire 100 %. Le détail qui change tout.' },
{ text: 'Parce qu’il ne détecte jamais aucune trisomie', correct: false, correction: 'Non chef.' },
{ text: 'Parce qu’il nécessite toujours une biopsie fœtale', correct: false, correction: 'Faux.' },
{ text: 'Parce qu’il est uniquement échographique', correct: false, correction: 'Non.' },
{ text: 'Parce qu’il ne repose pas sur l’ADN', correct: false, correction: 'Non chef.' }
],
explanation: 'Même très performant pour T21, le DPNI n’est pas certain à 100 %. Une confirmation diagnostique invasive reste nécessaire en cas de résultat positif.'
},
{
id: 74,
type: 'QRM',
question: 'Quelles anomalies sont explicitement décrites comme non dépistables par le DPNI dans le cours ?',
options: [
{ text: 'Les polyploïdies', correct: true, correction: 'Oui boss 🧠 Le comptage relatif ne permet pas de les identifier correctement.' },
{ text: 'Les anomalies cytogénétiques équilibrées comme certaines inversions', correct: true, correction: 'Exact.' },
{ text: 'La trisomie 21', correct: false, correction: 'Non chef. C’est au contraire la cible majeure.' },
{ text: 'Tous les grands CNV de plus de 7 Mb', correct: false, correction: 'Faux. Certains peuvent être analysés.' },
{ text: 'Toute aneuploïdie sans exception', correct: false, correction: 'Non.' }
],
explanation: 'Parmi les limites figurent polyploïdies, anomalies équilibrées, certaines mosaïques, anomalies de fermeture du tube neural et anomalies monogéniques.'
},
{
id: 75,
type: 'QCM',
question: 'Quel seuil de mosaïcisme est mentionné parmi les limites du DPNI ?',
options: [
{ text: '1 %', correct: false, correction: 'Non chef.' },
{ text: '5 %', correct: false, correction: 'Faux.' },
{ text: '15 %', correct: true, correction: 'Oui boss 🎯 Le support mentionne un seuil à 15 %.' },
{ text: '50 %', correct: false, correction: 'Non.' },
{ text: '100 %', correct: false, correction: 'Non chef.' }
],
explanation: 'Le cours mentionne les mosaïques avec un seuil à 15 % parmi les limites du DPNI.'
},
{
id: 76,
type: 'QRM',
question: 'Dans quelles situations le DPNI est-il décrit comme non réalisable ou difficilement interprétable ?',
options: [
{ text: 'Si la mère est elle-même porteuse d’une trisomie 21', correct: true, correction: 'Oui boss 🧠 Impossible de distinguer proprement l’origine maternelle ou fœtale du signal.' },
{ text: 'En cas de greffe de moelle osseuse', correct: true, correction: 'Exact. ADN maternel + fœto-placentaire + greffon = cocktail ininterprétable.' },
{ text: 'En cas d’antécédents de chimiothérapie ou de cancer dans les conditions décrites', correct: true, correction: 'Oui. Des fragments d’ADN maternel peuvent fausser l’analyse.' },
{ text: 'Chez toute femme enceinte de plus de 25 ans', correct: false, correction: 'Non chef. Ce n’est pas une contre-indication.' },
{ text: 'Dans toute grossesse gémellaire', correct: false, correction: 'Faux. Au contraire, la grossesse gémellaire fait partie des indications citées.' }
],
explanation: 'Certaines situations maternelles peuvent rendre l’ADN circulant difficile à interpréter : T21 maternelle, antécédents oncologiques/chimiothérapie et greffe de moelle notamment.'
},
{
id: 77,
type: 'QCM',
question: 'Quelle fraction minimale d’ADN est donnée comme suffisante dans le cours pour les analyses de DPNI ?',
options: [
{ text: 'Environ 1 à 2 %', correct: true, correction: 'Oui boss 🎯 Le seuil indiqué est assez bas, autour de 1–2 %.' },
{ text: '20 à 30 % obligatoirement', correct: false, correction: 'Non chef.' },
{ text: '50 %', correct: false, correction: 'Faux.' },
{ text: '90 %', correct: false, correction: 'Non.' },
{ text: '100 % d’ADN fœtal pur', correct: false, correction: 'Non chef 😭 Ce serait impossible avec ce principe.' }
],
explanation: 'Le support indique qu’une quantité suffisante d’ADN est indispensable et cite un seuil assez bas autour de 1 à 2 %.'
},
{
id: 78,
type: 'QRM',
question: 'Concernant l’origine et l’interprétation de l’ADN analysé en DPNI, quelles propositions sont exactes ?',
options: [
{ text: 'L’ADN analysé provient du compartiment fœto-placentaire circulant dans le sang maternel', correct: true, correction: 'Oui boss 🧠 Le placenta contribue fortement au signal analysé.' },
{ text: 'On ne distingue pas toujours précisément ce qui vient du fœtus et ce qui vient du placenta', correct: true, correction: 'Exact.' },
{ text: 'Une trisomie 16 peut être confinée au placenta dans l’exemple du cours', correct: true, correction: 'Oui.' },
{ text: 'Dans l’exemple de trisomie 16 confinée au placenta, une surveillance obstétricale est proposée sans IMG systématique', correct: true, correction: 'Exact 🧠 Le bébé peut continuer d’aller très bien selon le support.' },
{ text: 'Tout signal placentaire correspond obligatoirement au génome fœtal entier', correct: false, correction: 'Non chef 💀 C’est précisément la limite illustrée.' }
],
explanation: 'Le DPNI analyse un signal fœto-placentaire. Un mosaïcisme ou une anomalie confinée au placenta peut donc compliquer l’interprétation.'
},
{
id: 79,
type: 'QCM',
question: 'Une patiente au deuxième trimestre présente une AFP à 2,8 MoM et une βHCG à 0,5 MoM. Quelle anomalie est la plus probable selon le QCM du cours ?',
options: [
{ text: 'Une trisomie 18', correct: false, correction: 'Non chef. Le profil clé ici est surtout l’AFP élevée.' },
{ text: 'Une fausse couche', correct: false, correction: 'Faux.' },
{ text: 'Une trisomie 21 certaine', correct: false, correction: 'Non.' },
{ text: 'Une anomalie de fermeture du tube neural', correct: true, correction: 'Oui boss 🎯 AFP >2,5 MoM avec βHCG normale : tube neural à chercher.' },
{ text: 'Une pathologie placentaire certaine', correct: false, correction: 'Non chef.' }
],
explanation: 'Le QCM du cours associe une AFP à 2,8 MoM avec βHCG normale à un risque de défaut de fermeture du tube neural.'
},
{
id: 80,
type: 'QRM',
question: 'Quelles affirmations résument correctement la logique générale du cours ?',
options: [
{ text: 'Un dépistage positif ou suspect doit être confirmé par une démarche diagnostique adaptée', correct: true, correction: 'Oui boss 🧠 Dépistage = risque ; diagnostic = confirmation.' },
{ text: 'Les décisions et examens en génétique prénatale s’inscrivent dans un cadre réglementé avec information et consentement', correct: true, correction: 'Exact. C’est un fil rouge de tout le cours.' },
{ text: 'Le DPNI remplace définitivement tout geste invasif diagnostique', correct: false, correction: 'Non chef 💀 Un DPNI positif doit justement être confirmé.' },
{ text: 'Le DPI recherche systématiquement toutes les anomalies possibles chez l’embryon', correct: false, correction: 'Faux. Il est ciblé sur l’anomalie recherchée.' },
{ text: 'L’échographie suffit toujours à poser un diagnostic génétique certain', correct: false, correction: 'Non. Dans le cours, elle relève avant tout du dépistage.' }
],
explanation: 'Le cours repose sur une distinction centrale entre dépistage et diagnostic, un encadrement réglementaire strict, et l’utilisation raisonnée d’outils invasifs, non invasifs et préimplantatoires.'
}
]
