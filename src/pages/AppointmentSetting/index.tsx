import { Box, Flex, SegmentedControl, Text } from "@radix-ui/themes"
import { useRecoilState } from "recoil"
import { appointmentDetailsState, selectedDoctorState } from "../../states";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DoctorCard from "../../components/DoctorCard";
import { Button, Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";
import TimeCard from "../../components/TimeCard";

const availableTimes = [
  dayjs('2024-10-29 18:30'),
  dayjs('2024-10-29 17:30'),
  dayjs('2024-10-29 15:30'),
  dayjs('2024-10-29 14:30'),
  dayjs('2024-10-29 13:30'),
  dayjs('2024-10-29 12:30'),
  dayjs('2024-10-29 11:30'),
  dayjs('2024-10-29 10:30'),
]

const AppointmentSettingPage = () => {
  const [selectedDoctor] = useRecoilState(selectedDoctorState);
  const [appointmentDetails, setAppoinmtentDetails] = useRecoilState(appointmentDetailsState);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDoctor == null) {
      navigate('/');
      return;
    }

    setAppoinmtentDetails(prev => {
      return {
        ...prev,
        doctor: selectedDoctor,
        appointmentType: 'teleconsultation',
        date: null,
        time: null,
      }
    })
  }, [])

  function handleSetAppointmentDetail(category: 'doctor' | 'date' | 'time' | 'appointmentType', value: any) {
    setAppoinmtentDetails(prev => {
      return {
        ...prev,
        [category]: value
      }
    })
  }

  function handleConfirmAppointment() {
    if (appointmentDetails.date == null || appointmentDetails.time == null) {
      return;
    }

    navigate('/appointment-confirm')
  }

  return (
    <Flex direction="column">
      <Flex gap="3">
        <Flex className="w-[30%] px-4" direction={'column'} gap="8">
          {/* @ts-ignore */}
          <DoctorCard doctor={selectedDoctor} />

          <Flex direction={'column'} gap={'5'}>
            <Flex direction={'column'} gap={'2'}>
              <Text as="p" className="text-lg text-white font-bold">Appointment Type:</Text>
              <Box>
                <SegmentedControl.Root value={appointmentDetails.appointmentType} onValueChange={e => handleSetAppointmentDetail('appointmentType', e)}>
                  <SegmentedControl.Item value="teleconsultation">TeleConsultation</SegmentedControl.Item>
                  <SegmentedControl.Item value="clinic-visit">Clinic Visit</SegmentedControl.Item>
                </SegmentedControl.Root>
              </Box>
            </Flex>
            <Flex direction={'column'} gap={'2'}>
              <Text as="p" className="text-lg text-white font-bold">Available Times:</Text>
              <Flex wrap="wrap" gap={'3'}>
                {
                  availableTimes.map(time => {
                    return (
                      <TimeCard
                        key={time.toISOString()}
                        time={time}
                        handleClick={(time: Dayjs) => handleSetAppointmentDetail('time', time)}
                        isSelected={time.toISOString() === appointmentDetails.time?.toISOString()}
                      />
                    )
                  })
                }
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Box className="w-[50%] border-4 border-double rounded-md border-black px-2 bg-white">
          <Calendar onChange={(value: Dayjs) => handleSetAppointmentDetail('date', value)} />
        </Box>

        <Flex align={'end'} gap={'3'}>
          <Button size="large" onClick={() => navigate('/doctors')}>
            Back
          </Button>
          <Button
            size="large"
            type='primary'
            onClick={handleConfirmAppointment}
            disabled={appointmentDetails.date == null || appointmentDetails.time == null}
          >
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AppointmentSettingPage
