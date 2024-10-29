import { Box, Flex, Text } from "@radix-ui/themes";
import { Button } from "antd";
import { IDoctor, selectedDoctorState } from "../../states";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor, isAppointment = false }: { doctor: IDoctor & { image?: string }, isAppointment?: boolean }) => {
  const randomDoctorImage = `/images/doctors/doctor${Math.ceil(Math.random() * 18)}.jpeg`;
  const [, setSelectedDoctor] = useRecoilState(selectedDoctorState);
  const navigate = useNavigate();

  function scheduleAppointment() {
    setSelectedDoctor({ ...doctor, image: randomDoctorImage });
    navigate('/appointments-set');
  }

  return (
    <Flex align='end' className="doctor-card w-[500px] border-black border-8 border-double p-4 rounded-lg" gap={'3'}>
      <Box className="w-[60%] h-full">
        <img
          src={doctor.image || randomDoctorImage}
          alt={doctor.Name}
          className="w-full rounded-lg border-black border-2 border-solid"
        />
      </Box>

      <Flex direction={'column'} justify="between" className="w-[40%] h-full">
        <Flex direction={'column'} justify="between" className="h-1/2">
          <Box>
            <Text as="p" className="text-xl font-bold">{doctor.Name}</Text>
            <Text as="p" className="font-semibold">{doctor.Speciality}</Text>
            <Text as="p">Location: {doctor.Location}</Text>
          </Box>
        </Flex>
        {
          isAppointment &&
            <Box>
              <Button type="primary" onClick={scheduleAppointment}>
                <p className="font-semibold">
                  Schedule Appointment
                </p>
              </Button>
            </Box>
        }
      </Flex>
    </Flex>
  )
}

export default DoctorCard
