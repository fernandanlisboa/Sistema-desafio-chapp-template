import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/header.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,
    NavBarComponent
  ],
  imports: [
    HeaderModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MaterialComponents
  ],
  exports: [
    HeaderModule,
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
