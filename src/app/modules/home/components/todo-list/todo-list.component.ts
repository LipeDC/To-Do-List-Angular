import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }
  ngDoCheck(): void {
    this.setLocalStorage
  }

  public DeleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });

  }
  public DeleteAll() {
    const confirm = window.confirm('Você realmente quer deletar tudo?')
    if (confirm) {

      this.taskList = []
    }

  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if (confirm) {
        this.DeleteItemTaskList(index);
      }
    }

  }
  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("List", JSON.stringify(this.taskList))
    }


  }
}
