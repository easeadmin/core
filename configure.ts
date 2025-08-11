/*
|--------------------------------------------------------------------------
| Configure hook
|--------------------------------------------------------------------------
|
| The configure hook is called when someone runs "node ace configure <package>"
| command. You are free to perform any operations inside this function to
| configure the package.
|
| To make things easier, you have access to the underlying "ConfigureCommand"
| instance and you can use codemods to modify the source files.
|
*/

import ConfigureCommand from '@adonisjs/core/commands/configure'
import { resolve } from 'node:path'
import extract from 'extract-zip'
import fs from 'node:fs'

export async function configure(_command: ConfigureCommand) {
  // register commands or middlewares
  const codemods = await _command.createCodemods()
  await codemods.updateRcFile((rcFile) => {
    rcFile.addCommand('easeadmin/commands')
  })

  // install i18n
  // let i18n = await _command.prompt.ask('install i18n?')
  // if (i18n) {
  //   await codemods.installPackages([{ name: '@adonisjs/i18n', isDevDependency: false }])
  //   await _command.kernel.exec('configure', ['@adonisjs/i18n'])
  // }

  // static files
  let target = _command.app.publicPath('ease')
  let assets = resolve(import.meta.dirname, './stubs/public')
  await codemods.makeUsingStub(assets, 'ease.stub', {})
  await codemods.makeUsingStub(assets, 'history.stub', {})

  // extract jssdk files
  await extract(`${assets}/jssdk.zip`, { dir: target })

  // images files
  fs.cpSync(`${assets}/images`, `${target}/images`, { recursive: true, force: true })

  // check
  if (fs.existsSync(`${target}/jssdk`)) {
    _command.logger.action('create public files').succeeded()
    console.log('run `echo "public/ease" >> .gitignore`')
  } else {
    _command.logger.action('create public files').failed('publish failed')
  }
}
