First, you need to install the `AdonisJS`. If you have already installed it, you can skip this step. If this is your first time using `AdonisJS`, be sure to read the document [Adonisjs V6](https://docs.adonisjs.com/guides/preface/introduction)

> Are you more of a visual learner? - Checkout the [Let's Learn AdonisJS 6](https://adocasts.com/series/lets-learn-adonisjs-6) free screencasts series from our friends at Adocasts.

```
npm init adonisjs@latest hello-world
```

Follow the prompts to complete the installation.

> It is recommended to choose sqlite as the development environment database

# Quick Start

Add the EaseAdmin extension package to AdonisJS

```
node ace add @easeadmin/core
```

### Publish the static files.

normally, you don’t need to publish manually because the add command has been automatically published.

```
node ace configure @easeadmin/core
```

### Create your admin program

By default it is `admin` you can also pass on other names like: `node ace admin:create tenant` create multiple admin program

```
node ace admin:create
```

### Create database and superadmin user

login with `admin/admin`

```
node ace migration:run
node ace db:seed
```

### Starting the development server

You may start the development server by running the node ace serve command.

> visit `http://localhost:3333/admin/home` to view your application in browser

```
node ace serve
```
