import { request } from "./api.js";
export default function TaskManger(){
  const tasks = [];

  this.addTask = (task) => {
    tasks.push(task);
  };

  this.run = async () => {
    if (tasks.length > 0) {
      const task = tasks.shift();

      await request(task.url, {
        method: task.method || 'GET',
      });

      this.run();
    }
  }
}