import { Story } from '../entity/story';
import { Task } from '../entity/task';

let Stories: Story[] = [

  new Story
  (
    'To manage sprint backlog, as a product owner, I want to have a sprint backlog page.', 1, 99, 0, "new", ['LetsScrum','hellllo'],
    [
      new Task('Task1',1,'handler','partner',1,''),
      new Task('Task2',2,'handler','partner',1,''),
      new Task('Task3',3,'handler','partner',1,''),
      new Task('Task4',4,'handler','partner',1,'')
    ]
  ),

  new Story
  (
    'ez scrum2', 2, 99, 0, "new", ['LetsScrum'],
    []
  ),

  new Story
  (
    'ez scrum3', 3, 99, 0, "new", ['LetsScrum'],
    []
  ),

  new Story
  (
    'ez scrum4', 4, 99, 0, "new", ['LetsScrum'],
    []
  )
  ]
let newStory: Story = new Story
(
  'ez scrum5', 5, 0, 99, 'new', ['abc', 'def'],
  []
);
let editedStory: Story = new Story
(
  'edited', 5, 0, 99, 'new', ['abc', 'def'],
  []
);
let emptyStory: Story = new Story
(
  '',0,0,0,'',[],[]
);

export { Stories, newStory, editedStory, emptyStory }
