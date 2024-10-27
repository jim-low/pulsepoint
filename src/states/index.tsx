import dayjs, { Dayjs } from "dayjs";
import { atom } from "recoil";
import doctorsInformation from '../data/doctor-information.json';

export type AppointmentTypes = 'teleconsultation' | 'clinic-visit';

export interface IUser {
  fullName: string;
  nric: string;
  contactNumber: string;
}

export interface IDoctor {
  Age: number;
  Contact: string;
  Gender: string;
  Location: string;
  Name: string;
  Qualification: string;
  Speciality: string;
}

export interface IAppointment {
  doctor: IDoctor;
  dateTime: Dayjs;
  appointmentType: AppointmentTypes;
}

export const doctorsListState = atom<IDoctor[]>({
  key: 'doctorsListState',
  default: [...doctorsInformation]
});

export const selectedDoctorState = atom<(IDoctor & { image: string }) | null>({
  key: 'selectedDoctorState',
  default: null
});

export const appointmentsListState = atom<IAppointment[]>({
  key: 'appointmentsListState',
  default: [
    {
      dateTime: dayjs('2024-09-30 10:30'),
      appointmentType: 'teleconsultation',
      doctor: doctorsInformation[0]
    },
    {
      dateTime: dayjs('2024-08-30 10:30'),
      appointmentType: 'teleconsultation',
      doctor: doctorsInformation[1]
    },
    {
      dateTime: dayjs('2024-11-30 12:30'),
      appointmentType: 'clinic-visit',
      doctor: doctorsInformation[3]
    },
    {
      dateTime: dayjs('2025-02-22 12:30'),
      appointmentType: 'clinic-visit',
      doctor: doctorsInformation[2]
    },
  ]
});
