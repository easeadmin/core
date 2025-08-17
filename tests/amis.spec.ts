import { test } from '@japa/runner'
import amis from '../src/builder/amis.js'
import html from '../src/builder/html.js'
import parser from '../src/builder/parser.js'

test.group('Amis', () => {
  test('Find', ({ assert }) => {
    const page = amis('page').body(
      amis('form').body([
        amis('input_text').id('id').name('id').label('id'),
        amis('input_text').id('name').name('name').label('name'),
      ])
    )
    const name = page.find('name')
    assert.isObject(name)
  })
  test('Permission', ({ assert }) => {
    const page = amis('page').body(
      amis('form')
        .id('form')
        .body([
          amis('input_text').name('id').label('id'),
          amis('input_text').name('name').label('name').permission(false),
        ])
    )
    const json = page.find('form').toJSON()
    assert.equal(json.body.length, 1)
  })
  test('Render', ({ assert }) => {
    const page = amis('page').body(
      amis('form')
        .id('form')
        .body([
          amis('input_text').name('id').label('id'),
          amis('input_text').name('name').label('name').permission(false),
        ])
    )
    const render = html(page, { title: 'test' })
    assert.isString(render)
  })
  test('Parser', ({ assert }) => {
    const page = amis('page').body(
      amis('form')
        .id('form')
        .body([
          amis('input_text').name('id').label('id'),
          amis('input_text').name('name').label('name'),
        ])
    )
    const json = JSON.stringify(page.toJSON())
    const code = parser(JSON.parse(json))
    /* eslint-disable no-eval */
    const pase = JSON.stringify(eval(code).toJSON())
    assert.equal(json, pase)
  })
})
