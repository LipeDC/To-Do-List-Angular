import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter();
  public addItem: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  public submitItemTaskList() {
    this.addItem = this.addItem.trim();
    if (this.addItem) {
      this.emitItemTaskList.emit(this.addItem);
      this.addItem = "";
    }
  }

}
