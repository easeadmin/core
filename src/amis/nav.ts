import Api from './api.js'
import Schema from './schema.js'
import Badge from './badge.js'
import Action from './action.js'

/**
 * Nav
 * @docs https://baidu.github.io/amis/zh-CN/components/nav
 */
export default class Nav extends Schema<Nav> {
  protected json: Record<string, any> = { type: 'nav' }

  mode(mode: string) {
    this.json['mode'] = mode
    return this
  }

  collapsed(collapsed: boolean) {
    this.json['collapsed'] = collapsed
    return this
  }

  indentSize(indentSize: number) {
    this.json['indentSize'] = indentSize
    return this
  }

  level(level: number) {
    this.json['level'] = level
    return this
  }

  defaultOpenLevel(defaultOpenLevel: number) {
    this.json['defaultOpenLevel'] = defaultOpenLevel
    return this
  }

  popupClassName(popupClassName: string) {
    this.json['popupClassName'] = popupClassName
    return this
  }

  expandIcon(expandIcon: string) {
    this.json['expandIcon'] = expandIcon
    return this
  }

  expandPosition(expandPosition: 'before' | 'after') {
    this.json['expandPosition'] = expandPosition
    return this
  }

  stacked(stacked: boolean) {
    this.json['stacked'] = stacked
    return this
  }

  accordion(accordion: boolean) {
    this.json['accordion'] = accordion
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  deferApi(deferApi: string | Record<string, any> | Api) {
    this.json['deferApi'] = deferApi
    return this
  }

  itemActions(itemActions: Action[]) {
    this.json['itemActions'] = itemActions
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  dragOnSameLevel(dragOnSameLevel: boolean) {
    this.json['dragOnSameLevel'] = dragOnSameLevel
    return this
  }

  saveOrderApi(saveOrderApi: string | Record<string, any> | Api) {
    this.json['saveOrderApi'] = saveOrderApi
    return this
  }

  itemBadge(itemBadge: Badge) {
    this.json['itemBadge'] = itemBadge
    return this
  }

  links(links: Link[]) {
    this.json['links'] = links
    return this
  }

  overflow(overflow: Overflow) {
    this.json['overflow'] = overflow
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  searchConfig(searchConfig: SearchConfig) {
    this.json['searchConfig'] = searchConfig
    return this
  }
}

export class Link extends Schema<Link> {
  label(label: string) {
    this.json['label'] = label
    return this
  }

  to(to: object) {
    this.json['to'] = to
    return this
  }

  target(target: string) {
    this.json['target'] = target
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  children(children: Link[]) {
    this.json['children'] = children
    return this
  }

  unfolded(unfolded: boolean) {
    this.json['unfolded'] = unfolded
    return this
  }

  active(active: boolean) {
    this.json['active'] = active
    return this
  }

  activeOn(activeOn: string) {
    this.json['activeOn'] = activeOn
    return this
  }

  defer(defer: boolean) {
    this.json['defer'] = defer
    return this
  }

  deferApi(deferApi: string | Record<string, any> | Api) {
    this.json['deferApi'] = deferApi
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  disabledTip(disabledTip: string) {
    this.json['disabledTip'] = disabledTip
    return this
  }

  mode(mode: string) {
    this.json['mode'] = mode
    return this
  }

  overflow(overflow: Overflow) {
    this.json['overflow'] = overflow
    return this
  }
}

export class Overflow extends Schema<Overflow> {
  mode(mode: string) {
    this.json['mode'] = mode
    return this
  }

  enable(enable: boolean) {
    this.json['enable'] = enable
    return this
  }

  overflowLabel(overflowLabel: string) {
    this.json['overflowLabel'] = overflowLabel
    return this
  }

  overflowIndicator(overflowIndicator: string) {
    this.json['overflowIndicator'] = overflowIndicator
    return this
  }

  maxVisibleCount(maxVisibleCount: number) {
    this.json['maxVisibleCount'] = maxVisibleCount
    return this
  }

  wrapperComponent(wrapperComponent: string) {
    this.json['wrapperComponent'] = wrapperComponent
    return this
  }

  overflowClassName(overflowClassName: string) {
    this.json['overflowClassName'] = overflowClassName
    return this
  }

  overflowPopoverClassName(overflowPopoverClassName: string) {
    this.json['overflowPopoverClassName'] = overflowPopoverClassName
    return this
  }
}

export class SearchConfig extends Schema<SearchConfig> {
  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  mini(mini: boolean) {
    this.json['mini'] = mini
    return this
  }

  enhance(enhance: boolean) {
    this.json['enhance'] = enhance
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  searchImediately(searchImediately: boolean) {
    this.json['searchImediately'] = searchImediately
    return this
  }
}
