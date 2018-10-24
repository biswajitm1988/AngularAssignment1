import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';


const routeMappings: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'highlights',
    component: HighlightsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'contactMe',
    component: ContactMeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeMappings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
