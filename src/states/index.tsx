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
  doctor: IDoctor | null;
  date: Dayjs | null;
  time: Dayjs | null;
  appointmentType: AppointmentTypes | '';
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
      date: dayjs('2024-09-30 10:30'),
      time: dayjs('2024-09-30 10:30'),
      appointmentType: 'teleconsultation',
      doctor: doctorsInformation[0]
    },
    {
      date: dayjs('2024-08-30 10:30'),
      time: dayjs('2024-08-30 10:30'),
      appointmentType: 'teleconsultation',
      doctor: doctorsInformation[1]
    },
    {
      date: dayjs('2024-11-30 12:30'),
      time: dayjs('2024-11-30 12:30'),
      appointmentType: 'clinic-visit',
      doctor: doctorsInformation[3]
    },
    {
      date: dayjs('2025-02-22 12:30'),
      time: dayjs('2025-02-22 12:30'),
      appointmentType: 'clinic-visit',
      doctor: doctorsInformation[2]
    },
  ]
});

export const appointmentDetailsState = atom<IAppointment>({
  key: 'appointmentDetailsState',
  default: {
    doctor: null,
    date: null,
    time: null,
    appointmentType: 'teleconsultation',
  }
})
