import { Flex } from "@radix-ui/themes"
import { useRecoilState } from "recoil"
import { selectedDoctorState } from "../../states";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppointmentSettingPage = () => {
  const [selectedDoctor] = useRecoilState(selectedDoctorState);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDoctor == null) {
      navigate('/');
      return;
    }
  }, [])

  return (
    <Flex direction="column">
      <Flex>
        <Flex className="w-[30%]" direction={'column'}>
          <img
            src={selectedDoctor?.image}
            alt={selectedDoctor?.Name}
          />
          <Flex direction='column'>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default AppointmentSettingPage
