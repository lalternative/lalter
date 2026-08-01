/**
 * Editorial articles for the revue.
 *
 * Every factual claim here must be backed by the product code or docs.
 * Prices and costs come from `synthiz/docs/strategy/pricing-abonnement.md`.
 */

export type Bloc =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'liste'; items: string[] }
  /** Figures belong in a table, not in prose. `accent` highlights our column. */
  | {
      type: 'tableau'
      colonnes: string[]
      lignes: string[][]
      accent?: number
      note?: string
    }

export type Article = {
  slug: string
  titre: string
  chapeau: string
  organe: string
  outil: string
  outilUrl: string
  date: string
  lecture: string
  blocs: Bloc[]
}

export const articles: Article[] = [
  {
    slug: 'et-si-lia-etait-un-outil-democratique',
    titre: "Et si l'IA était un outil démocratique ?",
    chapeau:
      "Elle ne donne pas d'idées à ceux qui n'en ont pas. Elle permet à davantage de gens de transformer une intuition en projet — et c'est un déplacement plus profond qu'une révolution technique.",
    organe: 'Connaissance',
    outil: 'Synthiz',
    outilUrl: 'https://synthiz.com',
    date: '2026-07-30',
    lecture: '5 min',
    blocs: [
      {
        type: 'p',
        text: "L'intelligence artificielle est présentée comme une révolution technique. Elle pourrait être autre chose : un outil démocratique.",
      },
      {
        type: 'p',
        text: "Elle ne donne pas d'idées à ceux qui n'en ont pas. Elle permet à davantage de gens de transformer une intuition en projet, une ambition en action, une pensée imprécise en quelque chose de concret.",
      },
      { type: 'h2', text: 'Ce qui bloquait avant' },
      {
        type: 'p',
        text: "Longtemps, une idée restait bloquée par un manque de connaissances, de moyens ou de confiance. Il fallait savoir écrire, programmer, concevoir, structurer, communiquer — ou simplement connaître les bons codes. Beaucoup abandonnaient avant d'avoir commencé.",
      },
      {
        type: 'p',
        text: "L'IA abaisse une partie de ces barrières. Elle permet à qui ne programme pas de sortir un premier prototype. Elle aide qui doute de son écriture à formuler sa pensée. Elle accompagne qui a une vision sans savoir comment l'organiser.",
      },
      {
        type: 'quote',
        text: "Elle ne remplace pas le désir de faire. Elle lui donne un passage.",
      },
      { type: 'h2', text: 'Ce que ça change, concrètement' },
      {
        type: 'p',
        text: "Les chiffres commencent à donner une idée de l'ampleur. Selon le baromètre semestriel de Bpifrance Le Lab publié en janvier 2026, 55 % des TPE et PME françaises déclarent recourir à l'IA générative, contre 31 % un an plus tôt et 15 % fin 2023. L'usage a plus que triplé en deux ans.",
      },
      {
        type: 'p',
        text: "Reste ce que ce total ne dit pas. Parmi les TPE et PME qui n'y recourent pas, 65 % déclarent simplement n'identifier aucun usage dans leur entreprise. Ni le prix, ni la technique : l'obstacle est de ne pas voir ce qu'on pourrait en faire. C'est exactement le mur dont il est question ici — celui qui arrête avant l'essai.",
      },
      {
        type: 'p',
        text: "Ce déplacement ne se voit pas dans les cas spectaculaires qui circulent, mais dans des gestes ordinaires. L'artisan qui présente enfin correctement son activité. L'indépendant qui rédige ses propres documents. Le commerçant qui s'occupe de sa communication sans la sous-traiter.",
      },
      {
        type: 'p',
        text: "Aucun d'eux n'a acquis les compétences qui lui manquaient. Ils ont contourné un mur qui les arrêtait avant même l'essai.",
      },
      {
        type: 'p',
        text: "Il ne faut pas se mentir : une partie du travail disparaît vraiment. Ce qu'on payait cher hier — mettre en forme, traduire, rédiger, produire une première version — se fait aujourd'hui en quelques minutes. Ce n'est pas un travail transformé, c'est un travail supprimé.",
      },
      {
        type: 'p',
        text: "Ce qui s'ouvre à la place est une autre route. Le seuil d'entrée a baissé, les coûts avec lui : ce qui exigeait un budget se tente désormais pour presque rien. L'occasion n'est pas de faire pareil plus vite, mais de tenter ce qu'on s'interdisait.",
      },
      { type: 'h2', text: "Ce que ça ne change pas" },
      {
        type: 'p',
        text: "Ce qui disparaît, c'est l'exécution — pas le jugement. Créer un produit utile demande toujours de la persévérance et une compréhension réelle du problème. Écrire un bon texte demande une pensée. Construire exige des choix, des renoncements, du travail.",
      },
      {
        type: 'p',
        text: "Elle ne remplace pas les compétences : elle les démultiplie. Le corollaire est sévère. Sans expertise réelle, elle produit vite un travail passable. Le seuil qu'elle abaisse est celui de l'entrée, pas celui de l'excellence.",
      },
      {
        type: 'p',
        text: "Elle débloque en revanche quelque chose que personne n'avait : une capacité universelle à comprendre et à se faire comprendre. Lire un contrat, saisir un texte technique, formuler une demande dans les termes attendus, écrire dans une langue qu'on ne parle pas. Ce n'était pas une question de talent mais d'accès — et c'est cet accès qui vient de changer de main.",
      },
      {
        type: 'p',
        text: "L'IA déplace le point de départ, pas l'arrivée. Elle donne une prise à qui restait devant son idée sans savoir par où la saisir. Ce qui vient après reste entier.",
      },
      { type: 'h2', text: 'La réserve qui compte' },
      {
        type: 'p',
        text: "Rien de tout cela n'est acquis, parce que rien de tout cela ne nous appartient.",
      },
      {
        type: 'p',
        text: "Entraîner un modèle de fondation demande des capitaux, une puissance de calcul et une électricité que presque personne ne réunit. Le résultat est mécanique : une poignée d'acteurs décide de ce que ces outils savent faire, de ce qu'ils refusent, de leur prix et de leur disparition. Un instrument d'émancipation loué à un tiers qui peut en changer les règles du jour au lendemain reste un instrument de dépendance.",
      },
      {
        type: 'p',
        text: "Cette histoire a déjà eu lieu. Le logiciel libre n'a pas gagné en construisant des systèmes d'exploitation plus puissants que ceux des éditeurs — il a gagné en rendant les siens impossibles à confisquer. Personne ne peut retirer Linux du marché, ni en modifier la licence rétroactivement, ni décider qu'il coûtera le double l'an prochain.",
      },
      {
        type: 'p',
        text: "Le même partage se rejoue aujourd'hui, et il n'est pas perdu. Mistral publie les poids de Mistral Large 3 sous licence Apache 2.0 — un modèle de 675 milliards de paramètres, disponible sur Hugging Face, téléchargeable, exécutable chez soi, modifiable, sans redevance à l'usage. Ce ne sont pas des démonstrations : ce sont des modèles qu'on peut faire tourner sur sa propre infrastructure, et que personne ne peut reprendre.",
      },
      {
        type: 'p',
        text: "C'est la ligne de partage réelle. Pas entre l'IA et son absence, mais entre des outils qu'on utilise et des outils qu'on détient.",
      },
      { type: 'h2', text: "Ce qu'elle redonne" },
      {
        type: 'p',
        text: "Utilisée comme un outil d'émancipation, l'IA élargit le nombre de gens capables de produire, de comprendre et d'agir. Elle redonne de la valeur à l'idée elle-même.",
      },
      {
        type: 'p',
        text: "Pas l'idée parfaite, déjà maîtrisée et rentable. L'idée fragile, incomplète, maladroite — celle que son auteur n'aurait jamais osé poursuivre.",
      },
      {
        type: 'p',
        text: "L'IA est alors moins une machine qui remplace qu'un outil qui révèle. Elle ne fait pas disparaître nos limites. Elle aide à ne plus être seulement défini par elles.",
      },
      {
        type: 'p',
        text: "Peut-être est-ce le moyen qui manquait. Pas une arme contre quelqu'un — un outil que chacun peut prendre, à condition qu'il reste prenable. C'est toute la question, et elle ne se décide pas toute seule.",
      },
    ],
  },
  {
    slug: 'faire-de-lia-en-france-en-2026',
    titre: "Faire de l'IA en France, en 2026",
    chapeau:
      "On répète qu'il faut les modèles américains pour construire un produit sérieux. Nos outils tournent en France, du calcul au stockage — voici ce que ça permet, ce que ça coûte, et où ça bloque encore.",
    organe: 'Technique',
    outil: 'Techtuel',
    outilUrl: 'https://techtuel.com',
    date: '2026-07-29',
    lecture: '6 min',
    blocs: [
      {
        type: 'p',
        text: "Vous démarrez un produit qui a besoin d'IA. Vous ouvrez la documentation d'un des grands fournisseurs américains, vous branchez une clé, ça tourne en dix minutes. La question de l'hébergement ne se pose pas : elle a été tranchée avant que vous n'y pensiez.",
      },
      {
        type: 'p',
        text: "C'est le moment où l'on prend une décision d'architecture sans savoir qu'on la prend. Elle paraît réversible. Elle l'est de moins en moins à mesure que le produit grandit.",
      },
      {
        type: 'p',
        text: "Il y a pourtant une alternative, et elle fonctionne. Nous l'utilisons tous les jours.",
      },
      { type: 'h2', text: 'Ce que le catalogue français couvre' },
      {
        type: 'p',
        text: "Voici la chaîne complète sur laquelle tournent nos outils, sans exception :",
      },
      {
        type: 'liste',
        items: [
          'Reconnaissance vocale — Whisper large-v3-turbo, sur OVH AI Endpoints',
          'Modèles de langue — Mistral, hébergés en France',
          'Recherche sémantique — embeddings bge-m3, même infrastructure',
          'Stockage et calcul — OVH (Gravelines) et Scaleway (Paris)',
        ],
      },
      {
        type: 'p',
        text: "Transcription, traduction, synthèse, indexation sémantique. Ces quatre opérations composent l'essentiel de ce que font les produits réels — et elles sont toutes couvertes. Aucun appel ne sort de France, et ce n'est pas une feuille de route : c'est ce qui tourne pendant que vous lisez.",
      },
      { type: 'h2', text: 'Ce que ça coûte' },
      {
        type: 'p',
        text: "L'objection habituelle est le prix. Nos chiffres, mesurés en production : transcrire une heure d'audio coûte 0,046 €, la traduire 0,0047 €, une synthèse par modèle de langue une fraction de centime.",
      },
      {
        type: 'p',
        text: "À ces niveaux, l'écart entre fournisseurs ne décide de rien. Ce qui décide, c'est de connaître le coût réel d'une requête — et de pouvoir l'annoncer sans marge de sécurité.",
      },
      {
        type: 'p',
        text: "C'est un point qu'on sous-estime. Quand la facture d'infrastructure est opaque, le prix client se construit à l'aveugle, avec une provision pour l'incertitude. Quand elle est connue au centime, le tarif se calcule.",
      },
      { type: 'h2', text: 'Ce que ça rend possible' },
      {
        type: 'p',
        text: "Le point n'est pas de désigner un fournisseur plutôt qu'un autre. Il est qu'une option existe, ici, maintenant : on peut héberger ses services d'IA en France, faire tourner ses modèles de langue sur une infrastructure joignable, et construire un produit complet sans jamais sortir du pays.",
      },
      {
        type: 'p',
        text: "Ce n'était pas vrai il y a trois ans. Le catalogue était trop maigre, les modèles trop en retard, les endpoints trop instables. Aujourd'hui la chaîne tient de bout en bout, et elle tient en production.",
      },
      {
        type: 'p',
        text: "Cela change ce qu'on peut décider. Une entreprise qui traite des données sensibles n'a plus à choisir entre l'IA et sa conformité. Un éditeur qui veut savoir où partent les contenus de ses clients peut répondre précisément. Un indépendant peut monter un produit sans dépendre d'un fournisseur qu'il n'atteindra jamais.",
      },
      { type: 'h2', text: 'Où ça ne suffit pas' },
      {
        type: 'p',
        text: "Le catalogue disponible ici reste plus étroit. Les modèles les plus récents sortent ailleurs d'abord. Sur du raisonnement complexe, de la génération de code ou des tâches multimodales avancées, l'écart est réel et nous ne prétendons pas le contraire.",
      },
      {
        type: 'p',
        text: "Un bémol, tant qu'on y est : ce que vous utilisez pour travailler et ce qui tourne dans votre produit sont deux choses distinctes. Les meilleurs assistants de code sont américains, la plupart des développeurs les utilisent quotidiennement, et cet article n'y échappe pas. Ce choix-là n'engage que vous et se change en un après-midi.",
      },
      {
        type: 'p',
        text: "Ce qui tourne en production, à chaque requête de chaque utilisateur, engage votre architecture, vos coûts et vos données. C'est la seule décision qui mérite d'être prise consciemment.",
      },
      { type: 'h2', text: 'La question à se poser' },
      {
        type: 'p',
        text: "Avant de brancher une clé, une seule question : si ce fournisseur change ses règles demain, qu'est-ce qui s'arrête ?",
      },
      {
        type: 'p',
        text: "Si la réponse est « mon confort de travail », le sujet est mineur. Si c'est « mon produit », alors la décision méritait mieux qu'un réflexe. Construire en France n'est plus un sacrifice qu'on consent par principe : c'est un choix qui tient techniquement et économiquement. Encore faut-il l'examiner avant de le déclarer impossible.",
      },
    ],
  },
  {
    slug: 'attraper-les-mots-avant-quils-se-perdent',
    titre: "Attraper les mots avant qu'ils se perdent",
    chapeau:
      "Une conférence de deux heures, un podcast écouté en marchant, un rapport parcouru en diagonale. Tout a été dit, rien n'est retrouvable. Le son se dissipe ; le texte, lui, reste.",
    organe: 'Connaissance',
    outil: 'Synthiz',
    outilUrl: 'https://synthiz.com',
    date: '2026-07-30',
    lecture: '5 min',
    blocs: [
      {
        type: 'p',
        text: "Quelqu'un a dit exactement ce qu'il vous fallait. C'était dans une conférence, un podcast, une réunion enregistrée. Vous vous rappelez l'idée, à peu près. La phrase, non. Et vous n'allez pas réécouter deux heures d'audio pour retrouver quarante secondes.",
      },
      {
        type: 'p',
        text: "L'information a été produite, diffusée, entendue — et elle est perdue. Pas supprimée : inaccessible, ce qui revient au même.",
      },
      {
        type: 'p',
        text: "Ce n'est pas un défaut de mémoire. Ces contenus ne laissent aucune trace exploitable. Ils passent par des plateformes qui les gardent, les indexent pour elles, et ne vous rendent rien de réutilisable.",
      },
      { type: 'h2', text: 'Le son ne se cherche pas' },
      {
        type: 'p',
        text: "Un fichier audio est un bloc opaque. On ne peut pas le fouiller, en citer un passage, le recouper avec un autre document, ni vérifier qui a dit quoi. On peut seulement le réécouter, du début à la fin, à la vitesse où il a été enregistré.",
      },
      {
        type: 'p',
        text: "Le texte fait l'inverse. Il se cherche, s'annote, se cite, se relie. Il tient dans un index. Il survit à la disparition de la vidéo dont il est issu.",
      },
      {
        type: 'quote',
        text: "Transcrire n'est pas convertir un format. C'est faire passer une parole du statut de souvenir à celui de matière.",
      },
      { type: 'h2', text: 'Attraper ne suffit pas' },
      {
        type: 'p',
        text: "Un transcript isolé ne vaut pas grand-chose. Mille pages de texte brut posent le même problème que l'audio dont elles sortent : on ne sait pas où chercher.",
      },
      {
        type: 'p',
        text: "Ce qui rend une source utile, c'est ce qui vient après. Retrouver un passage sans se rappeler où on l'a lu. Rapprocher deux interventions qui disent la même chose autrement. Distinguer ce qu'on a soi-même noté de ce qu'on a seulement consulté.",
      },
      {
        type: 'p',
        text: "C'est ce que fait Synthiz : transformer ce que vous consultez en matière que vous possédez. Vos sources, vos notes, vos recoupements, organisés par vous plutôt que par l'algorithme d'une plateforme.",
      },
      { type: 'h2', text: 'Ce que ça change concrètement' },
      {
        type: 'liste',
        items: [
          'Retrouver une phrase entendue dans un podcast il y a six mois',
          'Recouper trois sources qui disent la même chose autrement',
          'Citer précisément au lieu de paraphraser de mémoire',
          'Garder ce qui compte quand la vidéo, elle, est supprimée',
        ],
      },
      {
        type: 'p',
        text: "Rien de spectaculaire. Simplement des idées qui ne se perdent plus.",
      },
      { type: 'h2', text: "Ce que ce n'est pas" },
      {
        type: 'p',
        text: "Ni un outil de veille automatique, ni un assistant qui lit à votre place. La lecture, le tri et le jugement restent votre travail. Synthiz garantit seulement que ce que vous avez lu reste atteignable.",
      },
      {
        type: 'p',
        text: "C'est le premier organe parce que c'est le préalable. On ne construit rien sur ce qu'on a oublié.",
      },
    ],
  },
  {
    slug: 'donner-a-vos-systemes-acces-a-ce-qui-se-dit',
    titre: "Donner à vos systèmes accès à ce qui se dit",
    chapeau:
      "Vos index, vos agents et vos analyses ne lisent que du texte. L'essentiel de ce qui se publie aujourd'hui est audio ou vidéo — et leur reste donc invisible.",
    organe: 'Connaissance',
    outil: 'Techtuel',
    outilUrl: 'https://techtuel.com',
    date: '2026-07-30',
    lecture: '5 min',
    blocs: [
      {
        type: 'p',
        text: "Vous construisez un système qui exploite de l'information : un moteur de recherche interne, un index sémantique, un agent qui répond à partir de vos sources, un outil de veille. Tout cela fonctionne sur du texte.",
      },
      {
        type: 'p',
        text: "Or une part croissante de ce qui compte dans votre domaine ne s'écrit plus. Elle se dit — en conférence, en podcast, en webinaire, en réunion enregistrée. Pour vos systèmes, cette matière n'existe pas.",
      },
      {
        type: 'p',
        text: "Ce n'est pas un problème de volume, mais d'angle mort. Vous indexez ce qui est facile à indexer, et vous concluez à partir de cet échantillon.",
      },
      { type: 'h2', text: 'Ce que ça coûte de ne pas les voir' },
      {
        type: 'p',
        text: "Un agent interne qui ignore les réunions enregistrées répondra à côté sur la moitié des décisions prises. Une veille qui ne suit que les articles manquera ce qui se dit en conférence six mois avant d'être écrit. Un index documentaire qui saute les formations vidéo renvoie l'utilisateur vers une documentation qu'il a déjà lue.",
      },
      {
        type: 'p',
        text: "Dans chaque cas, le système paraît fonctionner. C'est ce qui rend l'angle mort coûteux : il ne produit pas d'erreur visible, seulement des réponses incomplètes.",
      },
      {
        type: 'quote',
        text: "Un système ne peut raisonner que sur ce qu'il peut lire.",
      },
      { type: 'h2', text: "Pourquoi cette brique reste pénible" },
      {
        type: 'p',
        text: "Techniquement, le sujet est résolu : les modèles de reconnaissance vocale sont bons et disponibles. La difficulté est opérationnelle, et c'est elle qui décourage.",
      },
      {
        type: 'liste',
        items: [
          'Récupérer la source — formats multiples, plateformes changeantes, contenus supprimés',
          'Faire tourner le modèle — machines, files d\'attente, reprises après échec',
          'Absorber les erreurs — une source indisponible ne doit pas bloquer le lot',
          'Nettoyer le résultat — un transcript brut s\'indexe mal',
          'Maintenir tout cela dans le temps, sans que ce soit votre métier',
        ],
      },
      {
        type: 'p',
        text: "Chaque étape est faisable. C'est leur addition qui coûte, et surtout leur entretien : ce n'est pas au lancement qu'on paie, c'est six mois plus tard, quand une plateforme change ses règles.",
      },
      { type: 'h2', text: 'Ce que fait Techtuel' },
      {
        type: 'p',
        text: "Vous envoyez une URL. Vous récupérez du texte propre, prêt à découper, vectoriser ou indexer. Rien à héberger, aucun modèle à faire tourner, aucune file à surveiller.",
      },
      {
        type: 'p',
        text: "La traduction est incluse. Elle coûte 0,0047 € par heure de contenu contre 0,046 € pour la transcription — dix fois moins. Facturer un poste aussi marginal ajouterait un compteur sans ajouter de revenu, et transformerait le multilingue en variable de coût au moment précis où l'on veut élargir ses sources.",
      },
      {
        type: 'p',
        text: "Une vidéo déjà sous-titrée coûte un seul crédit, qu'elle dure six minutes ou trois heures. Sur un corpus de plusieurs centaines de sources, c'est ce détail qui décide du budget.",
      },
      {
        type: 'p',
        text: "Une API pour cesser de traiter l'accès aux sources parlées comme un projet, et le traiter comme un appel réseau.",
      },
      {
        type: 'p',
        text: "L'API est en production, servie par une infrastructure française.",
      },
    ],
  },
  {
    slug: 'un-service-demail-sobre-ethique-et-souverain',
    titre: "Un service d'email sobre, éthique et souverain",
    chapeau:
      "Les développeurs indépendants ont rarement besoin d'une immense plateforme marketing. Ils veulent envoyer une confirmation, une facture, un lien de connexion — et que ça parte.",
    organe: 'Communication',
    outil: 'Spore',
    outilUrl: 'https://sporee.fr',
    date: '2026-07-30',
    lecture: '4 min',
    blocs: [
      {
        type: 'p',
        text: "Les développeurs indépendants ont rarement besoin d'une immense plateforme marketing. Ils veulent envoyer une confirmation d'inscription, une facture, une alerte ou un lien de connexion. Il leur faut un service fiable, simple à intégrer, et assez abordable pour accompagner un projet qui débute.",
      },
      {
        type: 'p',
        text: "Spore a été conçu pour cela : envoyer les messages nécessaires au fonctionnement d'un service, sans ajouter une mécanique commerciale autour de chaque utilisateur.",
      },
      { type: 'h2', text: 'Une communication sobre' },
      {
        type: 'p',
        text: "Une adresse email ne devrait pas devenir automatiquement une opportunité marketing. Quand une personne crée un compte, effectue un achat ou demande une réinitialisation de mot de passe, elle attend l'information demandée. Rien d'autre.",
      },
      {
        type: 'p',
        text: "Les messages partent parce qu'ils ont une fonction précise. Ils confirment une action, transmettent une information, permettent à un service de fonctionner. Ils ne servent pas de prétexte à multiplier les relances.",
      },
      {
        type: 'quote',
        text: "Spore ne cherche pas à envoyer davantage de messages, mais à mieux envoyer ceux qui sont nécessaires.",
      },
      { type: 'h2', text: 'Une infrastructure maîtrisée' },
      {
        type: 'p',
        text: "L'infrastructure d'envoi nous appartient : le serveur, l'adresse IP, la signature des messages. Vos domaines restent les vôtres — vous les rattachez, vous gardez la main dessus, et vous partez avec si vous le décidez.",
      },
      {
        type: 'p',
        text: "Il ne s'agit pas de prétendre vivre sans aucun intermédiaire. Il s'agit de reprendre le contrôle sur une fonction essentielle, celle sans laquelle un service cesse simplement de communiquer avec ses utilisateurs.",
      },
      { type: 'h2', text: 'Une réalité économique' },
      {
        type: 'p',
        text: "Un freelance ou un petit éditeur ne devrait pas payer pour une suite marketing complète quand il cherche une infrastructure d'envoi. Spore se concentre sur l'essentiel : les domaines, les identités d'envoi, la délivrabilité, et une intégration simple dans une application.",
      },
      {
        type: 'p',
        text: "C'est aussi une limite assumée. Si vous cherchez des séquences automatisées, du scoring de contacts ou des campagnes segmentées, ce n'est pas ici. D'autres outils font cela très bien, et ce n'est pas ce que nous construisons.",
      },
      {
        type: 'p',
        text: "Reste ce qui compte pour un service qui démarre : que le message arrive, depuis une infrastructure sobre, éthique et maîtrisée.",
      },
    ],
  }]

export function articleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}
