import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CarouselHolderComponent} from './carousel-holder/carousel-holder.component';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServicesListComponent } from './services-list/services-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FondsComponent } from './fonds/fonds.component';
import { FondsListComponent } from './fonds-list/fonds-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FondDetailsComponent } from './fond-details/fond-details.component';
import { CasesTableComponent } from './cases-table/cases-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {NgProgressModule} from 'ngx-progressbar';
import {FondsService} from './services/fonds.service';
import {HttpClientModule} from '@angular/common/http';
import { CaseViewComponent } from './case-view/case-view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AuthComponent } from './auth/auth.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { ProfileComponent } from './profile/profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { MessagesComponent } from './messages/messages.component';
import { AddFondComponent } from './add-fond/add-fond.component';
import { ForumComponent } from './forum/forum.component';
import { ReviewComponent } from './review/review.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatStepperModule} from "@angular/material/stepper";
import { DoanswerComponent } from './doanswer/doanswer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselHolderComponent,
    HomeComponent,
    ServicesListComponent,
    FondsComponent,
    FondsListComponent,
    FondDetailsComponent,
    CasesTableComponent,
    CaseViewComponent,
    AuthComponent,
    SignupComponent,
    ShowAuthedDirective,
    ProfileComponent,
    AdminComponent,
    DashboardComponent,
    MessagesComponent,
    AddFondComponent,
    ForumComponent,
    ReviewComponent,
    DoanswerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        CarouselModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        NgProgressModule,
        HttpClientModule,
        PdfViewerModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatTabsModule,
        ChartsModule,
        MatSnackBarModule,
        MatStepperModule,
        FormsModule
    ],
  providers: [FondsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
