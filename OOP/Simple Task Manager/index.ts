class Task {
  name: string;
  dueDate: Date | null;
  isCompleted: boolean;

  constructor(name: string,dueDate: Date | null = null,) {
    this.name = name;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }

}

class TaskManager {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  createTask(name: string,dueDate: Date | null = null,): Task {
    const newTask = new Task( name, dueDate);
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(name: string): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.name !== name);
    return this.tasks.length !== initialLength;
  }

  getTask(name: string): Task | void{
    const task = this.tasks.find(task=> task.name == name)
    if (!task){
        console.log(`Task with name ${name} not found`);
        return;
    }
    return task;
  }
  
  updateTaskDate(name: string,newDate: Date | null): void{
    const task  =  this.getTask(name)
    if (task){
        task.dueDate = newDate;
        console.log(`Task ${task.name} succesfuly date updated to ${task.dueDate}`)
    } else{
        console.log(`No task with this name ${name}`)
    }
  }

  completeTask(name: string): void{
    const task = this.getTask(name);
    if (task){
        task.isCompleted = true;
        console.log(`${task.name} is completed!`)
    } else {
        console.log(`Task ${name} not found!`)
    }
  }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }

  getCompletedTasks(): void {
    const tasks = this.tasks.filter(task => task.isCompleted);
    tasks.forEach(task => {
        console.log(`${task.name}`)
    });
  }

  getIncompleteTasks(): void {
    const tasks = this.tasks.filter(task => !task.isCompleted);
    tasks.forEach(task => {
        console.log(`${task.name} is due on ${task.dueDate}`)
    });
  }
}


const taskManager = new TaskManager();


const task1 = taskManager.createTask('Complete assignment', new Date('2025-05-25'));
const task2 = taskManager.createTask('Buy groceries',  new Date('2025-05-21'));
const task3 = taskManager.createTask('Exercise', null);


console.log('All tasks:');
taskManager.getAllTasks().forEach(task => {
  console.log(`${task.name}`);
});

taskManager.completeTask('Buy groceries');

console.log('\n Complete tasks:')
taskManager.getCompletedTasks();

console.log('\n Incomplete tasks:')
taskManager.getIncompleteTasks();
