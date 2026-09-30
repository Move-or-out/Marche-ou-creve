# MARCHE OU CRÈVE

Site vitrine pour **MARCHE OU CRÈVE**, course d'endurance de 24h maximum en boucle de 2 km, où s'arrêter d'avancer signifie être éliminé.

- **Date** : 28 novembre 2026, départ à 10h00
- **Lieu** : Forêt de Chevreuse (78)
- **Places** : 20 participants maximum
- **Contact** : contact@monsieurperformance.fr

Site statique en HTML/CSS/JS pur, sans dépendance ni build — prêt à publier sur GitHub Pages.

## Structure du projet

```
marche-ou-creve/
├── index.html          page d'accueil
├── inscription.html    page d'inscription
├── css/
│   └── style.css        tous les styles
├── js/
│   ├── script.js         compte à rebours (page d'accueil)
│   └── inscription.js    envoi du formulaire via Web3Forms
└── README.md
```

## ⚠️ Étape obligatoire : configurer l'envoi du formulaire (Web3Forms)

Le formulaire d'inscription utilise **Web3Forms**, un service gratuit qui reçoit les données du formulaire et vous les envoie par e-mail — sans que le participant ait besoin d'ouvrir son propre client mail. Sans cette étape, le formulaire ne pourra pas envoyer les inscriptions.

1. Allez sur **https://web3forms.com**.
2. Entrez l'adresse `contact@monsieurperformance.fr` et cliquez sur **"Create Access Key"**.
3. Vous recevez immédiatement un e-mail contenant une **clé d'accès** (un identifiant du type `a1b2c3d4-...`).
4. Ouvrez le fichier `inscription.html`, cherchez la ligne suivante :

   ```html
   <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS_ICI">
   ```

5. Remplacez `VOTRE_CLE_WEB3FORMS_ICI` par la clé reçue par e-mail, par exemple :

   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
   ```

6. Enregistrez, puis poussez le changement sur GitHub (voir plus bas).

À partir de là, chaque inscription validée sur le site vous enverra automatiquement un e-mail récapitulatif à `contact@monsieurperformance.fr`. Le formulaire contient aussi un champ anti-spam (honeypot) déjà configuré — ne le supprimez pas.

Tant que la clé n'est pas renseignée, le site affiche un message d'erreur clair à la place d'envoyer un formulaire cassé.

## Autres personnalisations possibles

- **Heure de départ exacte** — dans `js/script.js`, constante `RACE_START` (actuellement `2026-11-28T10:00:00+01:00`).
- **Champs du formulaire** — ajoutez ou retirez des champs dans `inscription.html` ; chaque `<input name="...">` devient automatiquement une ligne dans l'e-mail reçu, aucune configuration supplémentaire nécessaire côté Web3Forms.

## Publier sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (par exemple `marche-ou-creve`).
2. Depuis ce dossier, initialisez et poussez le code :

   ```bash
   git init
   git add .
   git commit -m "Site MARCHE OU CRÈVE"
   git branch -M main
   git remote add origin https://github.com/VOTRE-COMPTE/marche-ou-creve.git
   git push -u origin main
   ```

3. Sur GitHub, allez dans **Settings → Pages** de votre dépôt.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**, sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
5. Après une à deux minutes, votre site sera accessible à l'adresse :

   ```
   https://VOTRE-COMPTE.github.io/marche-ou-creve/
   ```

**Important** : vérifiez que les dossiers `css/` et `js/` sont bien à la racine du dépôt, au même niveau que `index.html` et `inscription.html` — pas imbriqués dans un sous-dossier supplémentaire. C'est la cause la plus fréquente d'un site qui s'affiche sans style.

## Aperçu local

Aucune installation n'est nécessaire : ouvrez `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

puis rendez-vous sur `http://localhost:8000`. Le formulaire d'inscription fonctionne aussi en local une fois la clé Web3Forms renseignée.
