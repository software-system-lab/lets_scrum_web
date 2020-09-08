import { Story } from '../entity/story';

let Stories: Story[] = [
    {ID: 1, name: 'To manage sprint backlog, as a product owner, I want to have a sprint backlog page.', importance: 99, tag: ['LetsScrum'], estimate:0, status: "new"},
    {ID: 2, name: 'ez scrum2', importance: 99, tag: ['LetsScrum'], estimate:0, status: "new"},
    {ID: 3, name: 'ez scrum3', importance: 99, tag: ['LetsScrum'], estimate:0, status: "new"},
    {ID: 4, name: 'ez scrum4', importance: 99, tag: ['LetsScrum'], estimate:0, status: "new"},
  ]
let newStory: Story = new Story('ez scrum5', 5, 0, 99, 'new', ['abc', 'def']);
let editedStory: Story = new Story('edited', 5, 0, 99, 'new', ['abc', 'def']);

export { Stories, newStory, editedStory }
