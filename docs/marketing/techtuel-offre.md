# Techtuel — offre et messages

> Date : 2026-07-29
> Cible : développeurs et éditeurs de logiciels.
> Chiffres adossés à `synthiz/docs/strategy/pricing-abonnement.md` (vérifié juillet 2026).
> ⚠️ = à décider ou à valider avant publication.

---

## 1. Le positionnement en une phrase

**L'API qui transcrit n'importe quelle vidéo ou podcast, traduction incluse.**

L'alternative nommée : **Supadata**, le comparable le plus proche du marché.

---

## 2. Le différenciateur, chiffré

Le comparatif est déjà établi dans les docs produit :

| Action | Supadata | **Techtuel** |
|---|---|---|
| Transcript déjà disponible | 1 crédit | **1 crédit** |
| Transcription générée | 2 crédits/min | **2 crédits/min** |
| **Traduction** | **30 crédits/min** (~0,17 $/min) | **incluse** |

**Tout le message tient là-dedans.** À parité sur l'extraction, Techtuel inclut la traduction que
le concurrent facture 15× le prix d'une transcription.

Ce n'est pas une promotion de lancement : la traduction coûte **0,0047 €/h** en interne. La facturer
rapporterait un revenu négligeable au prix d'une friction commerciale réelle. C'est un choix de
conception défendable publiquement — et un argument qu'un concurrent adossé à ces marges aura du
mal à suivre.

### La phrase à utiliser

> Même prix qu'ailleurs pour transcrire. La traduction en plus, sans supplément.

---

## 3. Ce qui est vrai et vérifiable

- Coût unitaire réel : **0,000767 €/min** d'audio (whisper-large-v3-turbo, OVH AI Endpoints)
- Le seul coût variable est Whisper ; proxy, LLM, embeddings et S3 sont négligeables
- L'API tourne en production sur `api.techtuel.com`
- Le moteur fait déjà tourner Synthiz — ce n'est pas un produit neuf non éprouvé

**Preuve sociale : aucune à ce jour.** Ni client public, ni témoignage, ni volume traité communicable.
Ne rien inventer. Le premier client de référence est l'actif à construire en priorité.

---

## 4. Grille tarifaire ⚠️

**Elle est en production** sur `techtuel.com` : plans affichés, paiement fonctionnel,
quotas actifs, clés API en libre-service.

| Plan | Prix | Crédits | Débit |
|---|---|---|---|
| Gratuit | 0 € | 100 cr ≈ 50 min d'audio | 12 req/min |
| **Pro** | **5 €/mois** | 2 000 cr ≈ 1 000 min | 120 req/min |
| Max | 12 €/mois | 10 000 cr ≈ 5 000 min | 120 req/min |

Vérifié dans `synthiz/apps/transcript-api/domain/quota.go`. Le tarif au crédit ne comporte
que trois lignes — **la traduction n'y figure pas** :

- Whisper (transcription générée) : **2 crédits/min**
- YouTube avec sous-titres existants : **1 crédit/job**, quelle que soit la durée
- Extraction de page web : **1 crédit/URL**

### Les trois arguments à mettre en avant

1. **1 crédit pour une vidéo sous-titrée, quelle que soit sa durée.** L'usage courant devient
   quasi gratuit. C'est un avantage structurel, pas une promotion.
2. **La traduction n'est pas un poste facturable.** Elle coûte 0,0047 €/h contre 0,046 €/h pour
   la transcription — dix fois moins. Supadata la facture 30 cr/min.
3. **Le débit est affiché par plan.** 120 req/min sur Pro et Max : un développeur a besoin de
   ce chiffre avant d'acheter, et peu de concurrents l'affichent aussi clairement.

### Reste à décider

- **Un palier volume au-delà de Max** — 10 000 crédits plafonnent à ~5 000 min/mois. Un éditeur
  qui dépasse n'a aujourd'hui aucune offre.
- ⚠️ **Max est moins margé que Pro** (5× les crédits pour 2,4× le prix, ~56 % contre ~69 %).
  Le badge « recommandé » doit rester sur Pro seul — c'est déjà le cas.
- **La grille est identique à celle de Synthiz.** Cohérent (même moteur), mais un développeur
  et un créateur de contenu n'ont pas la même sensibilité au prix. À surveiller une fois les
  premiers clients API arrivés.

---

## 5. Objections attendues

| Objection | Réponse |
|---|---|
| « Pourquoi pas Supadata ? » | Même tarif sur l'extraction, traduction incluse. Le comparatif est public. |
| « Vous êtes petits, et si vous fermez ? » | Réponse honnête : l'API a un format standard, la sortie est du texte. Pas de format propriétaire, pas de verrou. |
| « Quelle fiabilité ? » | Le moteur fait tourner Synthiz en production. ⚠️ Publier un SLA ou un uptime dès qu'il est mesuré. |
| « Vos données partent où ? » | Infrastructure européenne (OVH, Scaleway). Argument réel, à ne pas surjouer. |

---

## 6. Ce qu'il faut construire pour vendre

**Le produit est vendable en l'état** : grille en production, paiement fonctionnel, clés API
en libre-service. Il ne manque aucune brique technique — ce qui manque, ce sont des visiteurs.

Par ordre de priorité :

1. **Une page de vente publique** — la grille n'est visible qu'une fois connecté. Un acheteur
   doit voir les prix **avant** de créer un compte. C'est le vrai blocage aujourd'hui.
2. **Le comparatif Supadata en public** — il existe en interne, il devrait être en ligne
3. **Une documentation d'API lisible** — c'est la page de vente réelle pour un développeur
4. **Un uptime public** — dès qu'il est mesurable

---

## 7. Où trouver ces développeurs

Canaux retenus, par pertinence :

- **La documentation elle-même** — les devs cherchent « transcription API », comparent, décident seuls.
  C'est le premier canal, pas le dernier.
- **Contenu comparatif** — un article honnête « transcrire une vidéo par API : les options » qui
  cite les concurrents sans les caricaturer. C'est ce que les devs recherchent réellement.
- **Communautés techniques** (Hacker News, Reddit dev, forums FR) — à condition d'y arriver avec
  un produit essayable sans parler à un commercial, jamais avec un pitch.

Canaux écartés à ce stade : publicité payante (coût d'acquisition trop élevé sans conversion mesurée),
outbound commercial (inadapté au libre-service), LinkedIn (mauvaise audience pour une API).

---

## 8. Le seul indicateur qui compte

**Le nombre de clés API actives ayant consommé plus que le palier gratuit.**

Ni les inscriptions, ni le trafic de la doc : la consommation payante. C'est le seul signal
qui distingue un curieux d'un client.
