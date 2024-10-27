import { Box, Flex, Text } from "@radix-ui/themes";
import { Button } from "antd";

interface IDoctor {
  Age: number;
  Contact: string;
  Gender: string;
  Location: string;
  Name: string;
  Qualification: string;
  Speciality: string;
}

const DoctorCard = ({ doctor }: { doctor: IDoctor }) => {
  const randomDoctorImage = `/images/doctors/doctor${Math.ceil(Math.random() * 18)}.jpeg`;

  return (
    <Flex align='end' className="doctor-card w-[500px] border-black border-8 border-double p-4 rounded-lg" gap={'3'}>
      <Box className="w-[60%] h-full">
        <img
          src={randomDoctorImage}
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
        <Box>
          <Button type="primary">
            <p className="font-semibold">
              Schedule Appointment
            </p>
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default DoctorCard
