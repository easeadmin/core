import Schema from './schema.js'

/**
 * Video
 * @docs https://baidu.github.io/amis/zh-CN/components/video
 */
export default class Video extends Schema<Video> {
  protected json: Record<string, any> = { type: 'video' }

  src(src: string) {
    this.json['src'] = src
    return this
  }

  isLive(isLive: boolean) {
    this.json['isLive'] = isLive
    return this
  }

  videoType(videoType: string) {
    this.json['videoType'] = videoType
    return this
  }

  poster(poster: string) {
    this.json['poster'] = poster
    return this
  }

  muted(muted: boolean) {
    this.json['muted'] = muted
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

  rates(rates: any[]) {
    this.json['rates'] = rates
    return this
  }

  frames(frames: object) {
    this.json['frames'] = frames
    return this
  }

  jumpBufferDuration(jumpBufferDuration: boolean) {
    this.json['jumpBufferDuration'] = jumpBufferDuration
    return this
  }

  stopOnNextFrame(stopOnNextFrame: boolean) {
    this.json['stopOnNextFrame'] = stopOnNextFrame
    return this
  }
}
