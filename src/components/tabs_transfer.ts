import Transfer from './transfer.js'

/**
 * TabsTransfer
 * @docs https://baidu.github.io/amis/zh-CN/components/form/tabs-transfer
 */
export default class TabsTransfer extends Transfer {
  protected json: Record<string, any> = { type: 'tabs-transfer' }
}
