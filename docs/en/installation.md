First, you need to install `AdonisJS`. If you have already installed it, you can skip this step. If this is your first time using `AdonisJS`, be sure to read the documentation [Adonisjs V6](https://docs.adonisjs.com/guides/preface/introduction)

> Do you prefer visual learning? - Watch the [Let's Learn AdonisJS 6](https://adocasts.com/series/lets-learn-adonisjs-6) video series produced by our friends at Adocasts.

Run the command, Follow the prompts to complete the installation. It is recommended to choose `SQLite` as the development environment database.

```
npm init adonisjs@latest hello-world
```

# Quick Start

Add the `EaseAdmin` extension package to `AdonisJS`

```
node ace add @easeadmin/core
```

### Publish static files.

Normally, you don't need to publish manually because the add command has already published them automatically.

```
node ace configure @easeadmin/core
```

### Create your admin application

By default, it is `admin`, you can also pass other names, for example: `node ace admin:create tenen` to create multiple admin applications

```
node ace admin:create
```

### Create database migrations and seed data

```
node ace migration:run
node ace db:seed
```

### Start the development server

You can start the development server by running the following command.

Visit `http://localhost:3333/admin/home` to view your application in the browser, log in with `admin/admin`.

```
node ace serve
```