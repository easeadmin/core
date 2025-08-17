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
import { stubsRoot } from './stubs/main.js'
import extract from 'extract-zip'
import fs from 'node:fs'

export async function configure(_command: ConfigureCommand) {
  // register commands or middlewares
  const codemods = await _command.createCodemods()
  await codemods.updateRcFile((rcFile) => {
    rcFile.addCommand('easeadmin/commands')
  })

  // static files
  let target = _command.app.publicPath('ease')
  await codemods.makeUsingStub(stubsRoot, 'public/ease.stub', {})
  await codemods.makeUsingStub(stubsRoot, 'public/history.stub', {})

  // images files
  fs.cpSync(`${stubsRoot}/public/images`, `${target}/images`, { recursive: true, force: true })
  _command.logger.action('create public/ease/images').succeeded()

  // extract jssdk files
  await extract(`${stubsRoot}/public/jssdk.zip`, { dir: target })
  _command.logger.action('create public/ease/jssdk').succeeded()
  _command.logger.action('run `echo "public/ease" >> .gitignore`').skipped()
}
