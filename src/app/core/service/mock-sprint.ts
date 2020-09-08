import { Sprint } from '../entity/sprint';
import { Stories } from './mock-story';

let Sprints: Sprint[] = [
    {sprintGoal: 'Improve AMS security and finish Timebox feature', stories: Stories, startDate: '2020/08/23', endDate: '2020/09/07', duration:14, teamMember: ['user1','user2']},
]

let newSprint: Sprint = new Sprint ('sprint2', Stories, '2020/08/23', '2020/09/07', 14, ['user1','user2']);

export { Sprints, newSprint }