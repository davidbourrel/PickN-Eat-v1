# DOSSIER FRONT-END

1.

Mettre le .env à jour. Pour "REACT_APP_MAPTILER_ACCESS_TOKEN" il faut vous créer un compte sur https://api.maptiler.com.

2.

Installer les dépendances :
```bash
npm i
```

3.

Démarrer le serveur de développement :
```bash
npm start
```

# DOSSIER BACK-END

1. Aller dans le dossier backend :

```bash
cd backend
```

2.

Mettre le .env à jour. Pour LES tokens, il faut lancer node dans le terminal, faire **require('crypto').randomBytes(64).toString('hex')** puis copier/coller dans "ACCESS_TOKEN_SECRET".

3.

Installer les dépendances :
```bash
npm i
```

4.

Démarrer le serveur de développement :
```bash
npm start
```

## DATABASE

J'utilise **MySQL** avec Workbench. Le dump est disponible dans le dossier back-end.

## End-points

Tout ce trouve dans le dossier back-end / routes. Il y a rien de particulier, il faut faire par exemple : http://localhost:3001/burgers
