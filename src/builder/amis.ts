import * as components from '#core/src/builder/index'
type KeyName = keyof typeof components
export default function amis<T extends KeyName>(name: T): InstanceType<(typeof components)[T]> {
  const obj: any = components[name]
  return obj.make()
}
