import { Avatar, Box, Flex, Text } from "@radix-ui/themes"
import { IMAGES, USER_INFO } from "../../constants"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const tabsList = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Our Doctors',
    path: '/doctors'
  },
  {
    label: 'My Appointments',
    path: '/appointments'
  },
]

const Header = () => {
  const [isLogin] = useState(true);
  const location = useLocation();

  return (
    <Flex
      id='header'
      className='h-[15vh] px-4 text-2xl'
      justify='between'
      align={'center'}
    >
      <Flex justify='between' align='center' gap="5" className="h-full">
        <img src={IMAGES.PULSEPOINT_LOGO} alt={'PulsePoint Logo'} className='h-full'/>
        <Flex gap="5">
          {
            tabsList.map(item => {
              return (
                <Link to={item.path} key={item.path}>
                  <Text
                    as="p"
                    m="0"
                    className={`cursor-pointer text-white font-bold ${location.pathname === item.path ? 'bg-[rgba(17,24,39,0.2)] px-4 rounded-lg' : ''}`}
                  >{item.label}</Text>
                </Link>
              )
            })
          }
        </Flex>
      </Flex>

      {
        isLogin &&
          <Flex
            className="profile-slot h-fit cursor-pointer hover:bg-[rgba(17,24,39,0.08)] p-2 px-4 rounded-md transition-[0.5s]"
            align={'center'}
            gap="3"
          >
            <Text as="p" className="font-semibold text-lg">{USER_INFO.name}</Text>
            <Box className="bg-[#56AA90] rounded-[50%] p-1">
              <Avatar src={IMAGES.USER_AVATAR} fallback={"A"} radius="full" />
            </Box>
          </Flex>
      }
    </Flex>
  )
}

export default Header
