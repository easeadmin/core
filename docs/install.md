# 🚀 快速开始

首先，您需要安装 `AdonisJS`。如果您已经安装，可以跳过此步骤。如果这是您第一次使用 `AdonisJS`，请务必阅读文档 [Adonisjs V6](https://docs.adonisjs.com/guides/preface/introduction)

> 您更喜欢通过视频学习吗？- 查看我们的朋友 Adocasts 提供的免费视频系列 [Let's Learn AdonisJS 6](https://adocasts.com/series/lets-learn-adonisjs-6)。

```
npm init adonisjs@latest hello-world
```

按照提示完成安装。

> 建议选择 sqlite 作为开发环境数据库

将 EaseAdmin 扩展包添加到 AdonisJS

```
node ace add @easeadmin/core
```

### 发布静态文件

通常，您不需要手动发布，因为 add 命令已经自动发布了。

```
node ace configure @easeadmin/core
```

### 创建管理程序

默认名称是 `admin`，您也可以传递其他名称，例如：`node ace admin:create tenant` 创建多个管理程序

```
node ace admin:create
```

### 创建数据库和超级管理员用户

使用 `admin/admin` 登录

```
node ace migration:run
node ace db:seed
```

### 启动开发服务器

您可以通过运行 node ace serve 命令启动开发服务器。

> 访问 `http://localhost:3333/admin/home` 在浏览器中查看您的应用程序

```
node ace serve
```
