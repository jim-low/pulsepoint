import PULSEPOINT_LOGO from '../images/pulsepoint-logo.png';
import { IUser } from '../states';

export const IMAGES = {
  PULSEPOINT_LOGO: PULSEPOINT_LOGO,
  USER_AVATAR: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
}

export const USER_INFO: IUser = {
  fullName: 'Lee Sze Jie',
  nric: '000225-14-0987',
  contactNumber: '012-345-6789'
}

export const APPOINTMENT_TYPES = {
  'teleconsultation': 'TeleConsultation',
  'clinic-visit': 'Clinic Visit',
}
