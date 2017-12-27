import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppComponent } from './app.component';
import { DragItemComponent } from './drag-item/drag-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DragItemComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgDragDropModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
