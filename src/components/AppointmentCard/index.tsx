import { Box, Flex, Text } from "@radix-ui/themes"
import { IAppointment } from "../../states"
import { Divider } from "antd"

const AppointmentCard = ({ appointment }: { appointment: IAppointment }) => {
  return (
    <Flex
      className="w-[320px] h-fit bg-[rgba(141,141,143,0.5)] p-4 rounded-lg"
      align={'center'}
      gap="3"
    >
      <Flex direction={'column'} align={'center'}>
        <Text as="p" className="text-3xl font-bold">
          {appointment.date?.get('date')}
        </Text>
        <Text as="p" className="text-lg font-bold">
          {appointment.date?.format('MMM YYYY')}
        </Text>
      </Flex>

      <Divider type="vertical" className="bg-black h-[100px]" />

      <Flex
        direction="column"
        justify='between'
      >
        <Box>
          <Text as="p" className="text-nowrap text-lg font-semibold">{appointment.doctor?.Name}</Text>
          <Text as="p" className="text-nowrap italic mb-2">{appointment.doctor?.Speciality}</Text>
          <Text as="p" className="text-nowrap">Location: <span className="font-bold">{appointment.doctor?.Location}</span></Text>
          <Text as="p" className="text-nowrap">Time: <span className="font-bold">{appointment.time?.format('HH:MM A')}</span></Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default AppointmentCard
