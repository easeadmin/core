<div align="center">
  <img src="https://github.com/easeadmin/core/blob/main/stubs/public/images/logo.png?raw=true" width="120" alt="easeadmin" />
  <h1 align="center">EaseAdmin</h1>
  <h4 align="center">Admin Panel Based on AdonisJS & Amis</h4>

[amis](https://baidu.github.io/amis/zh-CN/docs/index) |
[adonisjs](https://docs.adonisjs.com/guides/preface/introduction)

</div>

EaseAdmin is the simplest and fastest way to build production-ready admin panels using `Typescript`.

Based on `Adonisjs` package, truly achieving full stack development

# 🚀 Quick Start

First, you need to install the `AdonisJS`. If you have already installed it, you can skip this step. If this is your first time using `AdonisJS`, be sure to read the document [Adonisjs V6](https://docs.adonisjs.com/guides/preface/introduction)

> Are you more of a visual learner? - Checkout the [Let's Learn AdonisJS 6](https://adocasts.com/series/lets-learn-adonisjs-6) free screencasts series from our friends at Adocasts.

```
npm init adonisjs@latest hello-world
```

Follow the prompts to complete the installation and add the EaseAdmin extension package to adonisjs

```
node ace add @easeadmin/core
```

Publish the front-end files (normally, you don’t need to publish manually because the add command has been automatically published. You only need to publish manually to update the front-end files after the version is updated)

```
node ace configure @easeadmin/core
```

Create your admin program. By default it is `admin`,you can also pass on other names like: `node ace admin:create tenant`

```
node ace admin:create
```

Create database and superadmin user

```
node ace migration:run
node ace db:seed
```

# Starting the development server

you may start the development server by running the node ace serve command.

```
node ace serve
```

Once the development server runs, you may visit `http://localhost:3333/admin/home` to view your application in a browser and login with `admin/admin`
