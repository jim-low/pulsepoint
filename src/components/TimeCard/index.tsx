import { Box } from '@radix-ui/themes'
import { Dayjs } from 'dayjs'

const bg = 'bg-[rgba(235,235,235,0.3)]'
const bgHover = 'hover:bg-[rgba(255,255,255,0.8)]'
const sizing = 'w-[100px] p-4'
const styling = 'rounded-lg'
const textAdjust = 'text-center font-bold text-white'
const textAdjustHover = 'hover:text-black'
const selected = 'SELECTEDBOIIIIIIIIIIIIIIIIIIIIIII bg-[blue]'

const TimeCard = ({ time, isSelected = false, handleClick }: { time: Dayjs, isSelected?: boolean, handleClick: (time: Dayjs) => void }) => {
  return (
    <Box
      className={`${isSelected ? selected : ''} ${bg} ${bgHover} ${sizing} ${textAdjust} ${textAdjustHover} ${styling} transition-[0.5s] cursor-pointer`}
      onClick={() => handleClick(time)}
    >
      {time.format('h:MMA')}
    </Box>
  )
}

export default TimeCard
