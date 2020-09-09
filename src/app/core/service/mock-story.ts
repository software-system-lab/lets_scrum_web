import { Story } from '../entity/story';

let Stories: Story[] = [
  new Story('To manage sprint backlog, as a product owner, I want to have a sprint backlog page.',1, 99, 0,  "new", ['LetsScrum']),
  new Story('ez scrum2', 2, 99, 0, "new", ['LetsScrum']),
  new Story('ez scrum3', 3, 99, 0, "new", ['LetsScrum']),
  new Story('ez scrum4', 4, 99, 0, "new", ['LetsScrum']),
  ]
let newStory: Story = new Story('ez scrum5', 5, 0, 99, 'new', ['abc', 'def']);
let editedStory: Story = new Story('edited', 5, 0, 99, 'new', ['abc', 'def']);

export { Stories, newStory, editedStory }
