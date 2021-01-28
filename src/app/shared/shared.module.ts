import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './layout-component/footer/footer.component';
import { HeaderComponent } from './layout-component/header/header.component';
import { MainComponent } from './layout-component/main/main.component';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { InputControlMessagesComponent } from './validations/InputControlMessagesComponent';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    AssetsPathPipe,
    InputControlMessagesComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [AssetsPathPipe, InputControlMessagesComponent],
  providers: [AssetsPathPipe, InputControlMessagesComponent]
})
export class SharedModule { }
