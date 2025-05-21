"use strict";
class Task {
    constructor(name, dueDate = null) {
        this.name = name;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    createTask(name, dueDate = null) {
        const newTask = new Task(name, dueDate);
        this.tasks.push(newTask);
        return newTask;
    }
    deleteTask(name) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.name !== name);
        return this.tasks.length !== initialLength;
    }
    getTask(name) {
        const task = this.tasks.find(task => task.name == name);
        if (!task) {
            console.log(`Task with name ${name} not found`);
            return;
        }
        return task;
    }
    updateTaskDate(name, newDate) {
        const task = this.getTask(name);
        if (task) {
            task.dueDate = newDate;
            console.log(`Task ${task.name} succesfuly date updated to ${task.dueDate}`);
        }
        else {
            console.log(`No task with this name ${name}`);
        }
    }
    completeTask(name) {
        const task = this.getTask(name);
        if (task) {
            task.isCompleted = true;
            console.log(`${task.name} is completed!`);
        }
        else {
            console.log(`Task ${name} not found!`);
        }
    }
    getAllTasks() {
        return [...this.tasks];
    }
    getCompletedTasks() {
        const tasks = this.tasks.filter(task => task.isCompleted);
        tasks.forEach(task => {
            console.log(`${task.name}`);
        });
    }
    getIncompleteTasks() {
        const tasks = this.tasks.filter(task => !task.isCompleted);
        tasks.forEach(task => {
            console.log(`${task.name} is due on ${task.dueDate}`);
        });
    }
}
const taskManager = new TaskManager();
const task1 = taskManager.createTask('Complete assignment', new Date('2025-05-25'));
const task2 = taskManager.createTask('Buy groceries', new Date('2025-05-21'));
const task3 = taskManager.createTask('Exercise', null);
console.log('All tasks:');
taskManager.getAllTasks().forEach(task => {
    console.log(`${task.name}`);
});
taskManager.completeTask('Buy groceries');
console.log('\n Complete tasks:');
taskManager.getCompletedTasks();
console.log('\n Incomplete tasks:');
taskManager.getIncompleteTasks();
