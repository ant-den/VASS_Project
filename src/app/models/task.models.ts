export interface Task {
    title: string;
    description: string;
    type: string;
    createdOn: Date;
    status: 'Pending' | 'In Progress' | 'Completed'; 
  }
  