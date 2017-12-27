import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.css']
})
export class DragItemComponent implements OnInit {
  @Input() item;
  @Output() positionUpdated = new EventEmitter();
  newPosition:number = 0;
  constructor() { }

  ngOnInit() {
  }

  onDrop(e: DropEvent) {
		console.log(e, e.dragData, this.item.position);
		let draggedItem = e.dragData;
		let newPosition = (draggedItem['position'] < this.item.position) ? this.item.position : this.item.position + 1;
		this.positionUpdated.emit({ 'item': draggedItem, 'newPosition': newPosition});
  }



}
