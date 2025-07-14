Amis is a low-code frontend framework that uses JSON configuration to generate pages, which can reduce page development workload and greatly improve efficiency. However, a large number of JSON configurations can lead to poor code readability and high maintenance costs. Therefore, `EaseAdmin` has encapsulated `Amis`'s `150+` components, making `Amis` page construction more concise and efficient.

All `Amis` components are placed in the `src/amis` directory. The calling method is the same as the `property name` in the `Amis` component library property table, and the parameters correspond to the `property value`. You can find detailed information about the components in the [amis documentation](https://baidu.github.io/amis/en-US/components).

The following is a property table for the `Container` component. You can create a component object through the `make` method to chain-call all properties in the `Container` component property table.

| Property Name    | Type       | Default Value | Description                     |
| :--------------- | :--------- | :-----------: | :------------------------------ |
| type             | string     | "container"  | Specify as container renderer   |
| className        | string     |               | Class name for outer Dom        |
| bodyClassName    | string     |               | Class name for container content area |
| wrapperComponent | string     |    "div"     | Container tag name              |
| style            | object     |               | Custom style                    |
| body             | SchemaNode |               | Container content               |

```typescript
import Container from '@easeadmin/core/amis/container'
Container.make()
  .className('my-container')
  .bodyClassName('my-body')
  .style({ color: 'red' })
  .body('Hello World')
```

Or use the built-in amis method to create a component object.

```typescript
import {amis} from '@easeadmin/core/amis/amis'
amis('container')
  .className('my-container')
  .bodyClassName('my-body')
  .style({ color: 'red' })
  .body('Hello World')
  
```

The above example will output `Amis` `JSON`

```json
{"type":"container", "className":"my-container", "bodyClassName":"my-body", "style":{"color":"red"}, "body":"Hello World"}
```

# Basic Components

You can find almost all `amis` components in `EaseAdmin`, which all inherit from the `Schema` class and have the following public methods.

| Method Name | Parameters          | Description               |
| :---------- | :------------------ | :------------------------ |
| make        | None                | Create a component instance |
| id          | string              | Set component id          |
| find        | string              | Find component by ID      |
| type        | string              | Set component type        |
| attr        | string,any,string?  | Set custom attribute      |
| style       | object              | Set component style       |
| className   | string              | Set component class name  |
| definitions | object              | Set component definitions |
| permission  | boolean             | Set whether to render component |
| onEvent     | object              | Set component events      |
| remove      | string?             | Remove component property |

If you cannot find the component or property you need, you can set the property you need through the `attr` method of `Schema`.

```typescript
import {amis} from '@easeadmin/core/amis/amis'

// Set custom attribute
// Output: {myKey:['myValue']}
amis('schema').attr('myKey', ['myValue'])

// Append a value to the end of the array
// Output: {myKey:['myValue','myValue2']}
amis('schema').attr('myKey', 'myValue2', 'push')

// Append a value to the beginning of the array
// Output: {myKey:['myValue3','myValue','myValue2']}
amis('schema').attr('myKey', 'myValue3', 'unshift')

// Replace the entire key value
// Output: {myKey:{test:1}}
amis('schema').attr('myKey', { test: 1 }, 'replace')

// Merge an object into the key value
// Output: {myKey:{test:1,test2:2}}
amis('schema').attr('myKey', { test2: 2 }, 'merge')
```

# Building Pages

With `EaseAdmin`, you'll find that building pages with `AdonisJS` backend code is so simple.

```typescript
import { amis, render } from '@easeadmin/core/amis/amis'

// Set page title
let page = amis('page').title('Welcome')

// Place a button on the page
page.body(amis('button').label('Hello World').level('primary'))

// Place multiple buttons on the page
page.body([
  amis('button').label('First Button').level('primary'),
  amis('button').label('Second Button').level('info').id('second'),
])

// Find component
let second = page.find('second')

// Remove component's level attribute
second.remove('level')

// Remove component
second.remove()

// Do not render component
second.permission(false)

// Render HTML page
render(page,{ title: 'Demo' })
```