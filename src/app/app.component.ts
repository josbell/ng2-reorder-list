import { Component } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	dragOverClass = 'drag-over';
	droppedOption = [];
	newPosition:number = 0;
	items = [
            {'name': "Application Submission Date", 'position': 0},
            {'name': "Change Request Date", 'position': 1},
            {'name': "Credit Hours", 'position': 2},
            {'name': "Deposit Date", 'position': 3},
            {'name': "Payment Date", 'position': 4},
            {'name': "Selection Date", 'position': 5},
        	{'name': "Submission Date", 'position': 6}];

	updatePosition(data) {
		if (data.newPosition >= this.items.length) {
			var k = data.newPosition - this.items.length;
			while((k--) + 1) {
				this.items.push(undefined);
			}
		}
		this.items.splice(data.newPosition, 0, this.items.splice(data['item']['position'],1)[0]);
		let i = 0;
		this.items.forEach(item => item['position'] = i++);
		return;
	}

	onSubmit() {
		console.log(this.items);
	}
}
