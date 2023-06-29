import { atom } from 'recoil';
import { MovieSheduleListType } from 'src/models/schedule';

export const movieScheduleState = atom<MovieSheduleListType>({
  key: 'movieScheduleState',
  default: {
    runningDateStart: '',
    runningDateEnd: '',
    totalOfTimes: 0, // 회차수
    theaters: [],
    schedule: [],
  },
});
