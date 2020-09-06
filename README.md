# Glocus

## French

Ne passez pas à coté de vos clients et prospectez comme Glocus péchait !
Cette webapp vous permet une prospection efficiente

### Comment utiliser cette application ?

[Cliquez juste ici](https://glocus.netlify.app).

![Glocus prospection](./public/glocus.png)

### Comment avoir ma propre base de données ?

Lire la procédure en anglais ci-dessous.

## English

### How to use this app ?

You have nothing to do, you can use this project here [Glocus Prospection](https://glocus.netlify.app).

### How install this app with my own database ?

In case you whant to fork my project or use your own Firebase database, this is how to run the app in a development environment:

1. Go to your [firebase](https://console.firebase.google.com) account and create a new project

2. In the parameters of your new project find the firebaseConfig and copie it

It should look like this:

```javascript
var firebaseConfig = {
  apiKey: 'secretsecretsecret',
  authDomain: 'secretsecretsecret',
  databaseURL: 'secretsecretsecret',
  projectId: 'secretsecretsecret',
  storageBucket: 'secretsecretsecret',
  messagingSenderId: 'secretsecretsecret',
  appId: 'secretsecretsecret',
}
```

3. Create your own .env

   - Clone this repo,
   - cd into the folder,
   - open .env.changeMe and
   - fill it with your firebaseConfig variables
   - rename .env.changeMe to .env

4. install dependencies

```
npm start
```

Or if you have pnpm globaly installed :

```
pnpm start
```
