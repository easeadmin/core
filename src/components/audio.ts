import Schema from './schema.js'

/**
 * Audio
 * @docs https://baidu.github.io/amis/zh-CN/components/audio
 */
export default class Audio extends Schema<Audio> {
  protected json: Record<string, any> = { type: 'audio' }

  inline(inline: boolean) {
    this.json['inline'] = inline
    return this
  }

  src(src: string) {
    this.json['src'] = src
    return this
  }

  loop(loop: boolean) {
    this.json['loop'] = loop
    return this
  }

  autoPlay(autoPlay: boolean) {
    this.json['autoPlay'] = autoPlay
    return this
  }

  rates(rates: number[]) {
    this.json['rates'] = rates
    return this
  }

  controls(controls: string[]) {
    this.json['controls'] = controls
    return this
  }
}
