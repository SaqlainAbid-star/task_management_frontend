import { v4 as uuidv4 } from 'uuid';


const mockTasksData = {
    groups: [
      {
        id: 1,
        name: 'Group 1',
        users: [
          { id: 1, name: 'John' },
          { id: 2, name: 'Alex' },
          // Add more users as needed
        ],
        tasks: [
          { id: uuidv4(), userId: 1, title: 'Uniform', description: 'Press your uniform', completed: false },
          { id: uuidv4(), userId: 2, title: 'Shoes', description: 'Put your shoes on', completed: true },
          // Add more tasks as needed
        ],
      },
      {
        id: 2,
        name: 'Group 2',
        users: [
          { id: 1, name: 'Basit' },
          { id: 2, name: 'Farhan' },
          // Add more users as needed
        ],
        tasks: [
          { id: uuidv4(), userId: 1, title: 'Breakfast', description: 'Do Breakfast', completed: false },
          { id: uuidv4(), userId: 2, title: 'Lunch', description: 'Complete your lunch', completed: true },
          // Add more tasks as needed
        ],
      },
      {
        id: 3,
        name: 'Group 3',
        users: [
          { id: 1, name: 'Ali' },
          { id: 2, name: 'Hamid' },
          // Add more users as needed
        ],
        tasks: [
          { id: uuidv4(), userId: 1, title: 'School', description: 'Go to school', completed: false },
          { id: uuidv4(), userId: 2, title: 'College', description: 'Go to college', completed: true },
          // Add more tasks as needed
        ],
      },
    ],
  };
  
  export default mockTasksData;
  