export default function html(
  schema: object,
  options: {
    host?: string
    title: string
    inject?: string
    props?: Record<string, any>
    env?: Record<string, any>
    definitions?: Record<string, any>
  }
) {
  let schemaJson = JSON.stringify(schema ?? {})
  let propsJson = JSON.stringify(options.props ?? {})
  let envJson = JSON.stringify(options.env ?? {})
  let definitions = JSON.stringify(options.definitions ?? {})
  let inject = options.inject ?? ''
  let host = options.host ?? ''
  let data = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8" />
    <title>${options.title}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <style>html,body{margin:0;padding:0;height:100%}</style>
    <link rel="icon" href="${host}/ease/images/favicon-32.ico" />
    <link rel="stylesheet" href="${host}/ease/jssdk/iconfont.css" />
    <script>window.definitions = ${definitions}</script>
    ${inject}
    </head>
    <body>
        <div id="root"></div>
        <div id="ease-loading">
            <style>
                #ease-loading{background:#000;position:fixed;width:100%;height:100%;z-index:100;left:0;top:0}
                #ease-loading div{margin:25% auto;position:relative;width:32px;height:32px;z-index:100;border:2px solid #2468f2;border-top-color:rgba(36, 104, 242, 0.2);border-right-color:rgba(36, 104, 242, 0.2);border-bottom-color:rgba(36,104,242,0.2);border-radius:100%;animation:circle infinite 0.75s linear;}@keyframes circle {0% {transform:rotate(0);}100% {transform:rotate(360deg);}}
            </style>
            <div></div>
        </div>
    </body>
    <script src="${host}/ease/jssdk/sdk.js"></script>
    <script src="${host}/ease/jssdk/rest.js"></script>
    <script src="${host}/ease/history.js"></script>
    <script src="${host}/ease/ease.js"></script>
    <script>ease.render(${schemaJson}, ${propsJson}, ${envJson})</script>
    </html>
  `
  return data
}
