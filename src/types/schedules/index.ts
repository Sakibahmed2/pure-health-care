export type TSchedule = {
  id?: string;
  doctorId?: string;
  startDate: string;
  endDate: string;
};

export type TScheduleFrom = {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};
