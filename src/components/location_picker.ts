import FormItem from './form_item.js'
import Schema from './schema.js'

/**
 * LocationPicker
 * @docs https://baidu.github.io/amis/zh-CN/components/form/location-picker
 */
export default class LocationPicker extends FormItem {
  protected json: Record<string, any> = { type: 'location-picker' }

  value(value: LocationValue) {
    this.json['value'] = value
    return this
  }

  vendor(vendor: 'baidu' | 'gaode') {
    this.json['vendor'] = vendor
    return this
  }

  ak(ak: string) {
    this.json['ak'] = ak
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  autoSelectCurrentLoc(autoSelectCurrentLoc: boolean) {
    this.json['autoSelectCurrentLoc'] = autoSelectCurrentLoc
    return this
  }

  onlySelectCurrentLoc(onlySelectCurrentLoc: boolean) {
    this.json['onlySelectCurrentLoc'] = onlySelectCurrentLoc
    return this
  }

  coordinatesType(coordinatesType: 'bd09' | 'gcj02') {
    this.json['coordinatesType'] = coordinatesType
    return this
  }

  staticSchema(staticSchema: LocationStaticSchema | object) {
    this.json['staticSchema'] = staticSchema
    return this
  }
}

export class LocationValue extends Schema<LocationValue> {
  address(address: string) {
    this.json['address'] = address
    return this
  }
  lng(lng: number) {
    this.json['lng'] = lng
    return this
  }
  lat(lat: number) {
    this.json['lat'] = lat
    return this
  }
  vendor(vendor: 'baidu' | 'gaode') {
    this.json['vendor'] = vendor
    return this
  }
}

export class LocationStaticSchema extends Schema<LocationStaticSchema> {
  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }
  showAddress(showAddress: boolean) {
    this.json['showAddress'] = showAddress
    return this
  }
  showGeoLoc(showGeoLoc: boolean) {
    this.json['showGeoLoc'] = showGeoLoc
    return this
  }
  mapStyle(mapStyle: object) {
    this.json['mapStyle'] = mapStyle
    return this
  }
}
