# DOSSIER FRONT-END

Aller dans le dossier frontend :

```bash
cd frontend
```

Mettre le .env à jour. 
Pour "REACT_APP_MAPTILER_ACCESS_TOKEN" il faut vous créer un compte sur https://api.maptiler.com.

Installer les dépendances :

```bash
npm i
```

Démarrer le serveur de développement :

```bash
npm start
```

# DOSSIER BACK-END

Aller dans le dossier backend :

```bash
cd backend
```

Mettre le .env à jour. 
Pour le secret, il faut lancer node dans le terminal, faire **require('crypto').randomBytes(64).toString('hex')** puis copier/coller le resultat pour "ACCESS_TOKEN_SECRET".

Installer les dépendances :

```bash
npm i
```

Démarrer le serveur de développement :

```bash
npm start
```

## DATABASE (SQL)

Le Dump est disponible dans le projet.

## End-points

Tout ce trouve dans le dossier back-end / routes. Il faut faire par exemple : http://localhost:5000/burgers pour récupérer les burgers.
