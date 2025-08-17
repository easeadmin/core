import Schema from './schema.js'

/**
 * Calendar
 * @docs https://baidu.github.io/amis/zh-CN/components/calendar
 */
export default class Calendar extends Schema<Calendar> {
  protected json: Record<string, any> = { type: 'calendar' }

  schedules(schedules: ScheduleItem[] | string) {
    this.json['schedules'] = schedules
    return this
  }

  scheduleClassNames(scheduleClassNames: string[]) {
    this.json['scheduleClassNames'] = scheduleClassNames
    return this
  }

  scheduleAction(scheduleAction: object) {
    this.json['scheduleAction'] = scheduleAction
    return this
  }

  largeMode(largeMode: boolean) {
    this.json['largeMode'] = largeMode
    return this
  }

  todayActiveStyle(todayActiveStyle: Record<string, any>) {
    this.json['todayActiveStyle'] = todayActiveStyle
    return this
  }
}

export class ScheduleItem extends Schema<ScheduleItem> {
  startTime(startTime: string) {
    this.json['startTime'] = startTime
    return this
  }

  endTime(endTime: string) {
    this.json['endTime'] = endTime
    return this
  }

  content(content: any) {
    this.json['content'] = content
    return this
  }

  className(className: string) {
    this.json['className'] = className
    return this
  }
}
