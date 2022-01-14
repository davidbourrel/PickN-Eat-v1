# DOSSIER FRONT-END

Mettre le .env à jour. Pour "REACT_APP_MAPTILER_ACCESS_TOKEN" il faut vous créer un compte sur https://api.maptiler.com.

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

Mettre le .env à jour. Pour LES tokens, il faut lancer node dans le terminal, faire **require('crypto').randomBytes(64).toString('hex')** puis copier/coller dans "ACCESS_TOKEN_SECRET".

Installer les dépendances :

```bash
npm i
```

Démarrer le serveur de développement :

```bash
npm start
```

## DATABASE

J'utilise **MySQL** avec Workbench. Le dump est disponible dans le dossier back-end.

## End-points

Tout ce trouve dans le dossier back-end / routes. Il y a rien de particulier, il faut faire par exemple : http://localhost:3001/burgers
