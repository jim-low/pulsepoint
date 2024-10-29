import { Box, Flex, SegmentedControl } from "@radix-ui/themes"
import { useState } from "react"
import { useRecoilState } from "recoil";
import { appointmentsListState, IAppointment } from "../../states";
import dayjs from "dayjs";
import AppointmentCard from "../../components/AppointmentCard";

type SegmentPages = 'all' | 'upcoming' | 'finished';

const AppointmentPage = () => {
  const [section, setSection] = useState<SegmentPages>('all');
  const [appointmentsList] = useRecoilState(appointmentsListState);

  function filterAppointmentTiming(appointment: IAppointment) {
    const today = dayjs();
    const appointmentDate = appointment.date;

    if (section === 'upcoming') {
      return today.isBefore(appointmentDate);
    }

    if (section === 'finished') {
      return today.isAfter(appointmentDate);
    }

    // section === 'all'
    return appointment;
  }

  return (
    <Flex id="appointment-page" justify="center" align="center" className="p-4">
      <Flex direction={'column'} className="appointments-dashboard w-full h-[80vh]" gap={'3'}>
        <Box>
          <SegmentedControl.Root value={section} onValueChange={e => setSection(e as SegmentPages)} size="3">
            <SegmentedControl.Item value="all">All</SegmentedControl.Item>
            <SegmentedControl.Item value="upcoming">Upcoming</SegmentedControl.Item>
            <SegmentedControl.Item value="finished">Finished</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        <Flex
          wrap={'wrap'}
          gap={'3'}
          className="w-full h-full bg-[rgba(255,255,255,0.8)] rounded-xl border-8 border-black border-double p-2"
        >
          {
            appointmentsList
            .filter(filterAppointmentTiming)
            .map(appointment => {
              return (
                <AppointmentCard key={appointment.time?.toISOString()} appointment={appointment} />
              )
            })
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AppointmentPage
