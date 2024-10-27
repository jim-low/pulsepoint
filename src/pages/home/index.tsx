import { faBullseye, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Flex, Text } from "@radix-ui/themes"

const HomePage = () => {
  return (
    <Flex
      id="home-page"
      direction={'column'}
      justify={"center"}
      align={"center"}
      className="text-3xl w-1/2 h-full text-center mx-auto"
    >
      <Flex className="our-vision mb-10" direction={'column'}>
        <FontAwesomeIcon icon={faLightbulb} />
        <Text as="p">
          PulsePoint aims to dedication of empowering individuals on their health journeys through accessible and cutting-edge technology. 
        </Text>
      </Flex>

      <Flex className="our-mission" direction={'column'}>
        <FontAwesomeIcon icon={faBullseye} />
        <Text as="p">
          To create a supportive environment that promotes overall well-being, fosters healthy lifestyles, and connects individuals with the resources they need to thrive.
        </Text>
      </Flex>
    </Flex>
  )
}

export default HomePage
