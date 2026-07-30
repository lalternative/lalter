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
        text: "Elle ne remplace pas l'ambition. Elle lui donne un passage.",
      },
      { type: 'h2', text: 'Ce que ça change, concrètement' },
      {
        type: 'p',
        text: "Les chiffres commencent à donner une idée de l'ampleur. Selon le baromètre France Num relayé par Bpifrance Le Lab, 31 % des TPE et PME françaises utilisent aujourd'hui l'IA générative. Les entrepreneurs interrogés déclarent y gagner environ deux heures et demie par semaine, principalement sur des tâches répétitives.",
      },
      {
        type: 'p',
        text: "Ce ne sont pas des emplois remplacés : c'est du temps rendu. Deux heures et demie, pour un indépendant, c'est la différence entre repousser un projet et le commencer.",
      },
      {
        type: 'p',
        text: "Des cas plus spectaculaires circulent — des personnes sans aucune ligne de code à leur actif qui sortent une application en quelques semaines. Il faut les prendre pour ce qu'ils sont : des exceptions rendues visibles parce qu'elles ont réussi. Ce qui compte davantage est plus discret. L'artisan qui présente enfin correctement son activité. L'indépendant qui rédige ses propres documents. Le commerçant qui s'occupe de sa communication sans la sous-traiter.",
      },
      {
        type: 'p',
        text: "Aucun d'eux n'a acquis les compétences qui lui manquaient. Ils ont contourné un mur qui les arrêtait avant même l'essai.",
      },
      {
        type: 'p',
        text: "Ce n'est pas que le travail a disparu. C'est que le seuil d'entrée a baissé : on peut commencer plus tôt, avec moins de certitudes, et découvrir en chemin ce qu'on ignorait au départ.",
      },
      { type: 'h2', text: "Ce que ça ne change pas" },
      {
        type: 'p',
        text: "Créer un produit utile demande toujours du jugement, de la persévérance et une compréhension réelle du problème. Écrire un bon texte demande une pensée. Construire exige des choix, des renoncements, du travail.",
      },
      {
        type: 'p',
        text: "L'IA déplace le point de départ, pas l'arrivée. Elle donne une prise à qui restait devant son idée sans savoir par où la saisir. Ce qui vient après reste entier.",
      },
      { type: 'h2', text: 'La réserve qui compte' },
      {
        type: 'p',
        text: "Rien de tout cela n'est acquis. L'IA ne supprime pas les différences entre les gens et ne corrige aucune inégalité. Elle peut même en créer : si son accès, sa compréhension et son usage se concentrent entre quelques mains, elle deviendra un privilège de plus.",
      },
      {
        type: 'p',
        text: "Le même baromètre le montre déjà. Si 31 % des TPE et PME utilisent l'IA générative, la proportion tombe à 12 % chez les entreprises de moins de dix salariés. Autrement dit : l'outil censé abaisser les barrières profite d'abord à ceux qui en avaient le moins besoin.",
      },
      {
        type: 'p',
        text: "C'est précisément pourquoi la question de savoir qui détient les outils n'est pas secondaire. Un instrument d'émancipation loué à un tiers qui peut en changer les règles du jour au lendemain reste un instrument de dépendance.",
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
      { type: 'h2', text: "Ce que ça évite" },
      {
        type: 'p',
        text: "Il ne s'agit pas de préférer un fournisseur pour son adresse postale, mais de ce qui arrive quand on n'a pas le choix :",
      },
      {
        type: 'liste',
        items: [
          'Un modèle est retiré du catalogue et votre produit s\'arrête',
          'Les tarifs changent, sans négociation possible',
          'Les conditions d\'usage évoluent et votre cas devient interdit',
          'Vos données transitent sous une juridiction que vous ne choisissez pas',
        ],
      },
      {
        type: 'p',
        text: "Nous ne prétendons pas avoir vécu ces scénarios : nous avons fait en sorte de ne pas nous y exposer. Mais chacun découle de la même mécanique — quand une brique essentielle de votre produit appartient à quelqu'un d'autre, ses décisions deviennent les vôtres.",
      },
      {
        type: 'quote',
        text: "Une dépendance qu'on a choisie est un partenariat. Une dépendance qu'on subit est un risque.",
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
    slug: 'garder-la-main-sur-ce-quon-apprend',
    titre: "Garder la main sur ce qu'on apprend",
    chapeau:
      "On consomme plus d'information que jamais, et on en retient de moins en moins. Le problème n'est pas la quantité : c'est qu'on ne possède rien de ce qu'on lit.",
    organe: 'Connaissance',
    outil: 'Synthiz',
    outilUrl: 'https://synthiz.com',
    date: '2026-07-29',
    lecture: '4 min',
    blocs: [
      {
        type: 'p',
        text: "Une vidéo de deux heures vue la semaine dernière. Un podcast écouté en marchant. Un rapport parcouru en diagonale. Trois semaines plus tard, il reste une impression vague et la certitude d'avoir déjà croisé l'argument quelque part — sans pouvoir dire où.",
      },
      {
        type: 'p',
        text: "Ce n'est pas un défaut de mémoire. C'est que ces contenus ne laissent aucune trace exploitable. Ils passent par des plateformes qui les gardent, les indexent pour elles, et ne vous rendent rien de réutilisable.",
      },
      { type: 'h2', text: 'Le texte est la seule matière qui se travaille' },
      {
        type: 'p',
        text: "Une vidéo ne se cherche pas, ne se cite pas, ne se recoupe pas avec un autre document. Transcrite, elle devient du texte — et le texte se fouille, s'annote, se relie. C'est la différence entre avoir vu quelque chose et pouvoir s'en servir.",
      },
      {
        type: 'p',
        text: "C'est le point de départ de Synthiz : transformer ce que vous consultez en matière que vous possédez. Vos sources, vos notes, vos recoupements, organisés par vous plutôt que par l'algorithme d'une plateforme.",
      },
      { type: 'h2', text: "Ce que ça change concrètement" },
      {
        type: 'liste',
        items: [
          "Retrouver une phrase entendue dans un podcast il y a six mois",
          "Recouper trois sources qui disent la même chose autrement",
          "Citer précisément au lieu de paraphraser de mémoire",
          "Garder ce qui compte quand la vidéo est supprimée",
        ],
      },
      {
        type: 'quote',
        text: "Sans idées, rien ne commence. Mais des idées qu'on ne retrouve pas ne servent à rien.",
      },
      {
        type: 'p',
        text: "C'est le premier organe parce que c'est le préalable. On ne construit rien sur ce qu'on a oublié.",
      },
    ],
  },
  {
    slug: 'envoyer-ses-emails-depuis-chez-soi',
    titre: 'Envoyer ses emails depuis chez soi',
    chapeau:
      "L'envoi d'emails transactionnels est concentré entre les mains de quelques acteurs, presque tous américains. Quand l'un d'eux décide que vous ne lui convenez plus, vous ne discutez pas.",
    organe: 'Communication',
    outil: 'Spore',
    outilUrl: 'https://sporee.fr',
    date: '2026-07-29',
    lecture: '4 min',
    blocs: [
      {
        type: 'p',
        text: "Un email de confirmation de commande, une réinitialisation de mot de passe, une facture : rien de tout cela n'est du marketing. C'est le fonctionnement de base d'un service. Et pourtant, c'est une brique qu'on loue le plus souvent à un tiers, sans forcément se demander ce qui se passe s'il change d'avis.",
      },
      {
        type: 'p',
        text: "Tant que tout va bien, la question ne se pose pas. Elle se pose le jour où le compte est suspendu sans préavis, où les tarifs changent, ou bien où le prestataire décide que votre secteur d'activité ne l'intéresse plus.",
      },
      { type: 'h2', text: 'La plupart des alternatives sont des revendeurs' },
      {
        type: 'p',
        text: "Beaucoup de services d'envoi ne possèdent pas leur infrastructure : ce sont des couches posées sur celle d'un autre. Changer de fournisseur revient alors à changer de facture, pas de dépendance.",
      },
      {
        type: 'p',
        text: "Spore fonctionne autrement : l'infrastructure SMTP nous appartient. Vous rattachez vos domaines, générez vos identités DKIM, publiez vos enregistrements DNS et envoyez. Les domaines expéditeurs sont les vôtres.",
      },
      { type: 'h2', text: 'Ce que ça suppose d\'accepter' },
      {
        type: 'p',
        text: "Tenir sa propre infrastructure d'envoi demande du sérieux : réputation d'IP, conformité DKIM et SPF, surveillance de la délivrabilité. Ce n'est pas gratuit en attention. C'est le prix de ne dépendre de personne.",
      },
      {
        type: 'quote',
        text: "Vos messages partent de chez vous, sans intermédiaire qui filtre ou monétise votre audience.",
      },
      {
        type: 'p',
        text: "Parler au monde sans demander la permission suppose de tenir le tuyau par lequel on parle.",
      },
    ],
  },
  {
    slug: 'transcrire-par-api-ce-quon-paye-vraiment',
    titre: "Transcrire par API : ce qu'on paye vraiment",
    chapeau:
      "Les grilles tarifaires des API de transcription sont lisibles. Ce qu'elles recouvrent l'est moins — en particulier sur la traduction, facturée jusqu'à quinze fois le prix d'une transcription.",
    organe: 'Connaissance',
    outil: 'Techtuel',
    outilUrl: 'https://techtuel.com',
    date: '2026-07-29',
    lecture: '5 min',
    blocs: [
      {
        type: 'p',
        text: "Intégrer de la transcription dans un produit revient à choisir une API et à lire sa grille. Les prix affichés se ressemblent tous. Les écarts apparaissent ailleurs : dans ce qui est compté comme une opération supplémentaire.",
      },
      { type: 'h2', text: 'Le poste qui coûte, et celui qui rapporte' },
      {
        type: 'p',
        text: "Sur une transcription, le seul coût variable sérieux est le modèle de reconnaissance vocale, facturé à la minute d'audio. Le reste — proxy, stockage, modèles de langue — pèse une fraction négligeable de la facture réelle.",
      },
      {
        type: 'p',
        text: "Voici nos chiffres. Transcrire une heure d'audio nous coûte 0,046 €. Traduire cette même heure nous coûte 0,0047 € — dix fois moins. La traduction est un poste marginal, et c'est pourtant celui sur lequel les écarts de tarification sont les plus spectaculaires.",
      },
      { type: 'h2', text: 'Le comparatif' },
      {
        type: 'p',
        text: "Prenons l'acteur dont la grille est la plus proche de la nôtre. Nous facturons tous les deux au crédit, et le nombre de crédits par opération est identique.",
      },
      {
        type: 'tableau',
        colonnes: ['Opération', 'Un acteur du marché', 'Techtuel'],
        lignes: [
          [
            'Vidéo déjà sous-titrée',
            '1 crédit',
            '1 crédit, quelle que soit la durée',
          ],
          ['Transcription générée', '2 cr/min', '2 cr/min'],
          ['Traduction', '30 cr/min', 'incluse'],
        ],
        accent: 2,
        note: 'Tarifs publics relevés en juillet 2026.',
      },
      {
        type: 'p',
        text: "La première ligne mérite qu'on s'y arrête : une vidéo déjà sous-titrée coûte 1 crédit chez nous, qu'elle dure six minutes ou trois heures. Comme la majorité des vidéos YouTube sont sous-titrées, c'est le cas le plus fréquent en usage réel — et le moins cher.",
      },
      {
        type: 'p',
        text: "Deux écarts se cachent derrière ces chiffres. Le premier : un crédit ne vaut pas la même chose des deux côtés.",
      },
      {
        type: 'tableau',
        colonnes: ['Offre', 'Prix', 'Crédits', 'Le crédit'],
        lignes: [
          ['Cet acteur — offre Pro', '17 $/mois', '3 000', '0,0057 $'],
          ['Techtuel Pro', '5 €/mois', '2 000', '0,0025 €'],
          ['Cet acteur — offre haute', '47 $/mois', '30 000', '0,0016 $'],
          ['Techtuel Max', '12 €/mois', '10 000', '0,0012 €'],
        ],
        accent: 0,
      },
      {
        type: 'p',
        text: "Sur l'offre intermédiaire, la même transcription revient environ deux fois moins cher chez nous. Sur les gros volumes, l'écart se resserre : leur palier supérieur descend à 0,0016 $ le crédit, contre 0,0012 € chez nous. Nous restons devant, mais de peu.",
      },
      {
        type: 'p',
        text: "Autant le dire franchement : leur offre haute donne accès à trois fois plus de crédits que la nôtre. Au-delà de 10 000 crédits par mois, nous n'avons aujourd'hui rien à proposer.",
      },
      {
        type: 'p',
        text: "Le second écart est plus brutal : chez eux, traduire coûte quinze fois plus cher que transcrire. Une heure de vidéo leur revient à environ 10 $ à traduire, contre 0,68 $ à transcrire. Chez nous, la traduction n'est pas un poste facturable.",
      },
      { type: 'h2', text: 'Pourquoi nous ne la facturons pas' },
      {
        type: 'p',
        text: "Parce qu'elle ne nous coûte presque rien : 0,0047 € l'heure. Une ligne de facturation pour ce montant ajouterait un compteur à surveiller, une règle à documenter et une question de plus au support — pour un revenu qui ne se voit pas dans les comptes.",
      },
      {
        type: 'p',
        text: "Il y a une raison plus importante encore : un tarif de traduction transforme le multilingue en variable de coût. On commence à se demander si telle langue vaut la dépense, on limite, on arbitre. Une facture qui ne bouge pas selon la langue supprime la question.",
      },
      {
        type: 'quote',
        text: "Même prix qu'ailleurs pour transcrire. La traduction en plus, sans supplément.",
      },
      {
        type: 'p',
        text: "Ce n'est pas une offre de lancement, et rien n'est reporté sur un autre poste : nos coûts sont publiés, vous pouvez refaire le calcul.",
      },
      { type: 'h2', text: 'Une réserve, pour être honnête' },
      {
        type: 'p',
        text: "Nous ne savons pas quel moteur de traduction il utilise. S'il s'agit d'un service premium plutôt que d'un modèle ouvert comme le nôtre, leur coût est supérieur au nôtre — mais pas de 10 $ l'heure. L'écart relève d'un choix de tarification, pas d'une contrainte technique. Nous ne prétendons pas connaître leurs marges.",
      },
      {
        type: 'p',
        text: "Nos chiffres, eux, sont les nôtres, mesurés sur notre infrastructure. Les leurs sont ceux de leur grille publique en juillet 2026 — elle a pu changer depuis.",
      },
    ],
  },
]

export function articleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}
