import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SavingsListComponent } from './savings-list/savings-list.component';
import { SavingsListItemComponent } from './savings-list/savings-list-item/savings-list-item.component';
import { MenuComponent } from './menu/menu.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ModalComponent } from './modal/modal.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SavingsListComponent,
    SavingsListItemComponent,
    MenuComponent,
    SummaryComponent,
    HeaderComponent,
    AddItemModalComponent,
    ConfirmDialogComponent,
    ModalComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
