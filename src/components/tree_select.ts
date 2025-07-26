import InputTree from './input_tree.js'

/**
 * TreeSelect
 * @docs https://baidu.github.io/amis/zh-CN/components/form/tree-select
 */
export default class TreeSelect extends InputTree {
  protected json: Record<string, any> = { type: 'tree-select' }

  hideNodePathLabel(hideNodePathLabel: boolean) {
    this.json['hideNodePathLabel'] = hideNodePathLabel
    return this
  }

  onlyLeaf(onlyLeaf: boolean) {
    this.json['onlyLeaf'] = onlyLeaf
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }
}
