import { useRecoilState } from "recoil";
import { appointmentDetailsState, appointmentsListState } from "../../states";
import { DataList, Flex, Text } from "@radix-ui/themes";
import { APPOINTMENT_TYPES, USER_INFO } from "../../constants";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AppointmentConfirmPage = () => {
  const [, setAppointmentsList] = useRecoilState(appointmentsListState);
  const [appointmentDetails, setAppointmentDetails] = useRecoilState(appointmentDetailsState);
  const navigate = useNavigate();

  function handleConfirm() {
    setAppointmentsList(prev => [...prev, appointmentDetails]);

    setAppointmentDetails({
      doctor: null,
      date: null,
      time: null,
      appointmentType: 'teleconsultation',
    })

    navigate('/appointment-has-set')
  }

  return (
    <Flex
      id="appointment-confirm-page"
      direction={'column'}
      gap={'5'}
      justify={'center'}
      align='center'
      className="h-[50vh]"
    >
      <Text as="p" className="text-xl">Please confirm your appointment details:</Text>

      <Flex gap={'8'}>
        <Flex direction={'column'} gap="3">
          <Text as="p" className="font-bold">Appointment Details:</Text>
          <DataList.Root size='3'>
            <DataList.Item>
              <DataList.Label>Doctor in Charge</DataList.Label>
              <DataList.Value>{appointmentDetails.doctor?.Name}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Contact Number</DataList.Label>
              <DataList.Value>{appointmentDetails.doctor?.Contact}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Department</DataList.Label>
              <DataList.Value>{appointmentDetails.doctor?.Speciality}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Location</DataList.Label>
              <DataList.Value>{appointmentDetails.doctor?.Location}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Date Time</DataList.Label>
              <DataList.Value>{appointmentDetails.date?.format('DD MMM YYYY (ddd)')} @ {appointmentDetails.time?.format('h:MMA')}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Appointment Type</DataList.Label>
              {/* @ts-ignore */}
              <DataList.Value>{APPOINTMENT_TYPES[appointmentDetails.appointmentType]}</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Flex>

        <Flex direction={'column'} gap="3">
          <Text as="p" className="font-bold">Patient Details:</Text>
          <DataList.Root size='3'>
            <DataList.Item>
              <DataList.Label>Name</DataList.Label>
              <DataList.Value>{USER_INFO.fullName}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>NRIC</DataList.Label>
              <DataList.Value>{USER_INFO.nric}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Contact Number</DataList.Label>
              <DataList.Value>{USER_INFO.contactNumber}</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Flex>
      </Flex>

      <Flex gap={'5'}>
        <Button size="middle" danger onClick={() => navigate('/appointments-set')}>
          Back
        </Button>
        <Button size="middle" type='primary' onClick={handleConfirm}>
          Confirm
        </Button>
      </Flex>
    </Flex>
  )
}

export default AppointmentConfirmPage
