# L'Alter — Stratégie générale

> Date : 2026-07-29
> Cadrage retenu : **bootstrap** (revenus clients d'abord, pas de levée) + **trajectoire complète annoncée publiquement**.
> Toute affirmation ci-dessous est adossée au code ou aux docs des repos. Les hypothèses non vérifiées sont marquées ⚠️.

---

## 1. La thèse

Une initiative indépendante, sans adossement à un grand groupe, qui reprend une à une les capacités
que les entreprises délèguent aujourd'hui à des acteurs étrangers.

L'ordre n'est pas idéologique, il est **financier** : chaque étape paie la suivante.
Il y a **deux vagues de financement**, pas une.

| Étape | Capacité reprise | Produit | Rôle économique |
|---|---|---|---|
| 0 | Produire du texte / du contenu | **Techtuel**, **Synthiz** | Trésorerie — **finance l'étape 1** |
| 1 | Encaisser | **Lungor** | Supprimer la dépendance PSP étrangère |
| 2 | S'outiller et émettre | **Spore**, **Skalpai / sklp / skt** | Sortir des GAFAM — **finance l'étape 3** |
| 3 | Détenir | **App equity / investissement** | La destination |

**Pourquoi deux vagues comptent** : l'app equity ne dépend pas du revenu de Synthiz, déjà consommé
par Lungor. Elle est financée par les produits d'infrastructure de l'étape 2, dont les tickets sont
plus élevés et les revenus plus récurrents. Chaque amont paie son aval immédiat, sans report.

**La phrase qui porte tout** : *on ne demande pas la permission de commencer, on s'auto-finance.*

---

## 2. Ce qui est réellement livré aujourd'hui (état vérifié)

### Déploiements en production (d'après les ingress Kubernetes)

| Produit | Front | API | En ligne |
|---|---|---|---|
| Synthiz | `synthiz.com` | `api.synthiz.com` | ✅ |
| Techtuel | `techtuel.com` | `api.techtuel.com` | ✅ |
| Spore | `sporee.fr`, `app.sporee.fr` | `api.sporee.fr` | ✅ |
| Skalpai | `skalpai.dev`, `dash.skalpai.dev` | `api.skalpai.dev` | ✅ |
| Lungor | `lungor.fr` (réservé) | — | ❌ pas d'ingress |

**Quatre produits sont déjà servis en production.** L'obstacle n'est donc pas la livraison
technique — elle est faite — mais l'absence de chemin commercial vers ces produits.
`skalpai.io` et `skalpel.com` apparaissent dans le code mais ne sont pas servis : à nettoyer.

### Techtuel — le moteur
Extraction et transcription multi-sources (YouTube, podcasts, audio). C'est l'infrastructure, pas le produit final.
- Coût unitaire **vérifié** : `0,000767 €/min` d'audio (whisper-large-v3-turbo, OVH AI Endpoints)
- Le seul coût variable réel est Whisper ; proxy, LLM, embeddings et S3 sont négligeables
- Positionné face à **Supadata** (comparatif existant dans `docs/strategy/pricing-abonnement.md`)

### Synthiz — le produit utilisateur
Plateforme de knowledge management avec synthèse par IA, posée sur Techtuel.
- Repo le plus mature de tous : **2 452 commits**, actif au 29/07/2026
- Modèle **implémenté** : Free 100 crédits (0 €) · Pro 2 000 cr (5 €) · Max 10 000 cr (12 €)
- Marge nette **calculée dans le pire cas** (quota 100 % Whisper) : **~69 % Pro, ~56 % Max**
- Unité facturée : le crédit (2 cr/min Whisper, 1 cr/job pour une vidéo sous-titrée)

### Lungor — l'étape 1
Encaissement sans prestataire étranger. **147 commits**, dernier commit 20/07/2026.
- Go DDD (`finance`, `metering`, `identity`, `project`), React + TanStack
- Gap-analysis SecNumCloud / ISO 27001 daté du 02/06/2026, vérifiée dans le code
- **Point décisif** : Lungor **ne porte ni KYC ni IBAN** — ils restent chez Mollie/PayPlug, PSP licenciés.
  La gap-analysis qualifie ce périmètre minimal de « force de Lungor ».

### Spore — l'étape 2, volet « émettre »
Control plane pour plateforme email multi-domaines. **341 commits**, dernier commit 28/07/2026.
- Go + Echo + NATS JetStream + Postgres, **infra SMTP propre** (`infra/smtp` : MTA, IP publique, cdktf)
- Onboarding de domaines expéditeurs, génération d'identités DKIM, publication et vérification DNS,
  file d'envoi sortant multi-tenant
- **C'est un produit vendable**, pas un outil interne : il occupe le terrain de SendGrid, Mailgun, Resend
- Correspond exactement à l'organe **Communication** du site : « vos messages partent de chez vous »

### Skalpai / sklp / skt — l'étape 2, volet « outiller »
Socle de dev/CI/publish déjà utilisé par tous les repos (`.sklp/`). **1 527 commits**, actif.
Ce n'est pas un projet futur : c'est l'outillage sur lequel tourne déjà toute la production.
⚠️ Le périmètre commercial de `skt` reste à préciser — non inspecté.

### L'app equity — l'étape 3
⚠️ Aucun code à ce jour. À communiquer comme **direction**, jamais comme produit.
Financée par les revenus de l'étape 2 (Spore + Skalpai), pas par ceux de Synthiz.

---

## 3. La correction stratégique la plus importante

**Votre prémisse : « pour arriver à Lungor il faut du capital pour payer les juristes ».**

Le code dit autre chose. Lungor s'appuie sur des PSP licenciés et ne détient aucune donnée
réglementée lourde (pas de KYC, pas d'IBAN). Vous n'êtes pas en train de construire un
établissement de paiement — vous construisez une **couche d'orchestration au-dessus de PSP européens**.

Conséquences :

1. **Le mur juridique n'est pas un agrément.** Ce qui reste est documentaire et léger :
   registre de traitement RGPD, liste des DPA, politique de rétention, plan d'incident.
   Ce sont des jours de travail, pas des centaines de milliers d'euros.
2. **Le besoin de capital est donc surestimé.** Ce qui coûte vraiment, c'est votre temps —
   or il est aujourd'hui réparti sur ~6 produits actifs simultanément.
3. **Le vrai goulot d'étranglement n'est pas l'argent, c'est la concentration.** Le risque
   dominant du plan n'est pas le sous-financement : c'est la dispersion.

**Recommandation** : ne cherchez pas de capital pour débloquer Lungor. Cherchez des clients Synthiz,
et traitez la conformité Lungor comme un chantier documentaire mené en parallèle.

---

## 4. Séquence recommandée

### Phase 1 — Synthiz paie les factures (maintenant → +6 mois)
**Objectif unique : les premiers revenus récurrents.** C'est le seul produit avec un pricing implémenté
et une marge vérifiée. Rien d'autre ne doit passer devant.

- Cible : créateurs de contenu, chercheurs, veilleurs, consultants — ceux qui traitent beaucoup de sources
- L'alternative nommée : le copier-coller manuel de transcripts, ou Supadata côté API
- Argument différenciant **réel** : le cas « vidéo sous-titrée » coûte 1 crédit quel que soit le temps,
  ce qui rend l'usage courant quasi gratuit. C'est un avantage structurel, pas une promo.

### Phase 2 — Techtuel monétise le moteur (parallèle, effort faible)
**Techtuel n'est pas seulement le moteur de Synthiz : il a son propre domaine et sa propre API
déjà servis en production** (`techtuel.com`, `api.techtuel.com`). C'est une surface commerciale
autonome, livrée, qui n'attend qu'une page de prix.

Le comparatif Supadata existe déjà dans les docs. Vendre l'API aux devs ne demande **aucun
déploiement** — c'est le revenu le plus rapide à activer de tout le portefeuille, et le seul
qui ne dépende d'aucun travail produit supplémentaire.

Marché dev : achat en libre-service, cycle de vente court, pas de commercial nécessaire.
À traiter en parallèle de Synthiz, pas après.

### Phase 3 — Lungor encaisse pour L'Alter d'abord (+6 → +12 mois)
Lungor doit **traiter les paiements de Synthiz avant d'être vendu à quiconque**.
Le dogfooding est le seul argument de vente crédible pour une brique de paiement :
« nous encaissons nos propres revenus avec ». Sans ça, personne ne confiera son flux d'argent
à un acteur indépendant.

⚠️ Ne pas commercialiser Lungor tant qu'il n'a pas encaissé du vrai argent en production.

### Phase 4 — Spore ouvre la seconde vague (+9 → +18 mois)
Spore est le **premier revenu de l'étape 2**, et le plus accessible : marché mature, besoin permanent,
facturation à l'usage bien comprise des acheteurs. C'est lui qui commence à financer l'equity.

Avantage décisif sur les concurrents : Spore tourne sur **votre propre infra SMTP** (IP publique,
DKIM, MTA maîtrisé). Vous ne revendez pas Amazon SES sous un autre nom — argument réel et rare
sur ce marché, et directement adossé à la thèse d'indépendance.

⚠️ Prérequis avant toute commercialisation : la **réputation d'IP**. Une plateforme d'envoi se
vend sur sa délivrabilité. Chauffer l'IP et mesurer les taux de délivrance **avant** de vendre —
c'est le seul chiffre que les acheteurs regardent.

### Phase 5 — Skalpai et l'equity (+18 mois)
Skalpai se raconte avant de se vendre : c'est la preuve que la maison tient debout sur ses propres outils.
L'app equity reste une direction annoncée, financée par Spore et Skalpai.

---

## 5. Communication : annoncer la trajectoire sans mentir

Vous avez choisi d'annoncer la marche complète. C'est justifiable, mais cela crée une dette de crédibilité.
La règle qui la couvre :

> **On annonce la direction au futur, on ne décrit au présent que ce qui tourne.**

| Formulation autorisée | Formulation interdite |
|---|---|
| « Ensuite : encaisser sans intermédiaire étranger. » | « Notre solution de paiement Lungor. » (pas encore en prod) |
| « Synthiz : Free / Pro 5 € / Max 12 € » | Toute mention de nombre d'utilisateurs (aucun chiffre) |
| « Marge et coûts publiés » | « Des milliers de créateurs nous font confiance » |
| « L'app equity, c'est là qu'on va. » | « Investissez dès aujourd'hui. » (rien n'existe) |

**Le pot commun est votre meilleur actif de communication.** Publier les vrais chiffres — y compris
`0 €` — est plus crédible que n'importe quel discours. C'est la preuve vivante que la transparence
annoncée est tenue. Ne le lissez jamais.

### Preuves disponibles immédiatement (sans rien inventer)
1. Le coût réel au centime, avec sa méthode de calcul
2. La marge assumée publiquement (~69 % Pro) — très peu d'acteurs le font
3. La gap-analysis conformité, vérifiée dans le code, avec ses 🔴 assumés
4. Le refus du KYC comme choix de conception, pas comme lacune

**Aucune preuve sociale n'existe aujourd'hui** (ni clients, ni témoignages, ni presse).
Ne pas en fabriquer. Les premiers utilisateurs Synthiz sont la priorité n°1 pour créer cet actif.

---

## 6. Ce qu'il faut corriger sur le site L'Alter

Le site actuel est un manifeste sans aucun point de conversion. Dans une stratégie bootstrap,
c'est le défaut le plus coûteux : tout le trafic est perdu.

| Problème | Correction |
|---|---|
| Aucune capture d'email | Ajouter une inscription à la revue — le seul actif d'audience gratuit disponible |
| Aucun chemin vers un produit payant | Lier au moins Synthiz depuis les organes |
| `/pot` affiche « 4 outils » vs 5 organes | Corriger l'incohérence |
| Cible `10K€` non justifiée | Expliquer à quoi elle sert, ou la retirer |
| README nomme les apps, le site non | Aligner le README sur la règle éditoriale |
| Revue annoncée sans date ni inscription | Donner une saison, ouvrir l'inscription |

---

## 7. Métriques

Une seule compte en phase 1 : **le nombre d'abonnés Synthiz payants.**

Métriques secondaires : conversion Free → Pro, crédits consommés par utilisateur actif
(surveille la marge), inscrits à la revue.

**Métriques à ignorer** : trafic du site, impressions, followers. En bootstrap, seul le revenu informe.

---

## 8. Le risque principal

Ce n'est ni le financement, ni la concurrence, ni la réglementation.

**C'est de construire l'étape 2 et 3 avant que l'étape 0 ait payé quoi que ce soit.**

Sept produits actifs (Techtuel, Synthiz, Lungor, Spore, Skalpai, sklp, skt), **un seul avec un
pricing implémenté**, zéro client payant. La trajectoire est bonne et l'ingénierie est réelle et
sérieuse — le danger est de continuer à bâtir vers l'aval pendant que l'amont ne produit pas de revenu.

La structure à deux vagues renforce le plan sur le papier, mais elle **ne réduit pas ce risque** :
elle ajoute un produit de plus à mener au marché. Deux vagues de financement supposent deux
mises en vente réussies, alors qu'aucune n'a encore eu lieu.

Garde-fous :
- **Tant que Synthiz n'a pas de revenu récurrent, tout travail sur l'app equity est du report de décision.**
- **Spore ne se commercialise pas avant d'avoir une délivrabilité mesurée.** Vendre un envoi d'emails
  sans preuve de délivrance détruit la réputation du domaine — et celle de L'Alter avec.
- Une seule mise en vente à la fois. Deux lancements simultanés, c'est zéro lancement.
