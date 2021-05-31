import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@teqniqly/material';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NavHeaderComponent, SidenavListComponent],
  exports: [NavHeaderComponent, SidenavListComponent],
})
export class UiModule {}
