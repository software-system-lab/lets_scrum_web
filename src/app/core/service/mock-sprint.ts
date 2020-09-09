import { Sprint } from '../entity/sprint';
import { Stories } from './mock-story';

let Sprints: Sprint[] = [
    new Sprint (1,'Improve AMS security and finish Timebox feature',Stories, '2020/08/23', '2020/09/07', 14, ['user1','user2']),
    new Sprint (2,'Improve AMS security and finish Timebox feature',Stories, '2020/08/23', '2020/09/07', 14, ['user1','user2'])
]

let newSprint: Sprint = new Sprint (2,'sprint2', Stories, '2020/08/23', '2020/09/07', 14, ['user1','user2']);

export { Sprints, newSprint }