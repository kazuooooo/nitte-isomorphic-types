// TODO: index.d.tsを使いたい
export type WorkingHours = {
  mon: DailyWorkingHours,
  tue: DailyWorkingHours,
  wed: DailyWorkingHours,
  thu: DailyWorkingHours,
  fri: DailyWorkingHours,
  sat: DailyWorkingHours,
  sun: DailyWorkingHours
}
export type DailyWorkingHours = {
  available: boolean
  times: WorkingHourTimeRange[]
}

export type WorkingHourTimeRange = {
  startTime: {
    hour: number,
    min: number
  },
  endTime: {
    hour: number,
    min: number
  }
}