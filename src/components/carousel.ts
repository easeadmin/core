import Schema from './schema.js'

/**
 * Carousel
 * @docs https://baidu.github.io/amis/zh-CN/components/carousel
 */
export default class Carousel extends Schema<Carousel> {
  protected json: Record<string, any> = { type: 'carousel' }

  options(options: CarouselItem[]) {
    this.json['options'] = options
    return this
  }

  itemSchema(itemSchema: object) {
    this.json['itemSchema'] = itemSchema
    return this
  }

  auto(auto: boolean) {
    this.json['auto'] = auto
    return this
  }

  interval(interval: string) {
    this.json['interval'] = interval
    return this
  }

  duration(duration: number) {
    this.json['duration'] = duration
    return this
  }

  width(width: string) {
    this.json['width'] = width
    return this
  }

  height(height: string) {
    this.json['height'] = height
    return this
  }

  controls(controls: string[]) {
    this.json['controls'] = controls
    return this
  }

  controlsTheme(controlsTheme: string) {
    this.json['controlsTheme'] = controlsTheme
    return this
  }

  animation(animation: string) {
    this.json['animation'] = animation
    return this
  }

  thumbMode(thumbMode: 'cover' | 'contain') {
    this.json['thumbMode'] = thumbMode
    return this
  }

  multiple(multiple: { count: number }) {
    this.json['multiple'] = multiple
    return this
  }

  alwaysShowArrow(alwaysShowArrow: boolean) {
    this.json['alwaysShowArrow'] = alwaysShowArrow
    return this
  }

  icons(icons: { prev: any; next: any }) {
    this.json['icons'] = icons
    return this
  }
}

export class CarouselItem extends Schema<CarouselItem> {
  image(image: string) {
    this.json['image'] = image
    return this
  }

  href(href: string) {
    this.json['href'] = href
    return this
  }

  imageClassName(imageClassName: string) {
    this.json['imageClassName'] = imageClassName
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  titleClassName(titleClassName: string) {
    this.json['titleClassName'] = titleClassName
    return this
  }

  description(description: string) {
    this.json['description'] = description
    return this
  }

  descriptionClassName(descriptionClassName: string) {
    this.json['descriptionClassName'] = descriptionClassName
    return this
  }

  html(html: string) {
    this.json['html'] = html
    return this
  }
}
