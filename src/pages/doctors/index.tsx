import { Box, Flex, ScrollArea, Select, Text, TextField } from '@radix-ui/themes';
import DoctorCard from '../../components/DoctorCard';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilState } from 'recoil';
import { doctorsListState } from '../../states';

const DoctorsPage = () => {
  const [doctorsList] = useRecoilState(doctorsListState);
  const specialties: string[] = [];
  doctorsList.forEach(d => {
    if (!specialties.includes(d.Speciality)) {
      specialties.push(d.Speciality);
    }
  })

  return (
    <Box id="doctors-page" className='p-8 '>
      <Flex className='mb-4' gap={'3'}>
        <Select.Root size={'3'}>
          <Select.Trigger placeholder='Search by Department' />
          <Select.Content>
            {
              specialties.map(s => {
                return (
                  <Select.Item key={s.toLowerCase()} value={s.toLowerCase()}>{s}</Select.Item>
                )
              })
            }
          </Select.Content>
        </Select.Root>
        <TextField.Root
          size={'3'}
          placeholder='Search by name'
          value={''}
          onChange={e => console.log(e.target.value)}
        >
          <TextField.Slot>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </TextField.Slot>
        </TextField.Root>
      </Flex>

      <ScrollArea style={{ height: "100%", overflowY: 'hidden' }} scrollbars='vertical' hidden={false}>
        <Flex direction={'column'} className='h-[70vh]'>
          {
            specialties.map(specialty => {
              const doctors = doctorsList.filter(doctor => doctor.Speciality === specialty);

              return (
                <Box key={specialty} className='w-full block mb-4'>
                  <Text as="p" m="0" className='text-3xl'>{specialty}</Text>
                  <Flex wrap={'wrap'} gap={"5"}>
                    {
                      doctors.map((doctor, i) => {
                        return (
                          <DoctorCard key={i} doctor={doctor} />
                        )
                      })
                    }
                  </Flex>
                </Box>
              )
            })
          }
        </Flex>
      </ScrollArea>
    </Box>
  )
}

export default DoctorsPage
