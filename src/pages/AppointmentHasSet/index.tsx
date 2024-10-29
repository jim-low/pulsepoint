import { Flex } from "@radix-ui/themes"
import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"

const AppointmentHasSetPage = () => {
  const navigate = useNavigate();

  return (
    <Flex className="h-[60vh]" justify='center' align='center'>
      <Result
        status={'success'}
        title={'Appointment Scheduled'}
        subTitle={'We will send a reminder 3 days before your appointment'}
        extra={<Button type='primary' onClick={() => navigate('/')}>Back to Home</Button>}
      />
    </Flex>
  )
}

export default AppointmentHasSetPage
