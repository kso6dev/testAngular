import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { JapanComponent } from './components/japan/japan.component';
import { LifeComponent } from './components/life/life.component';
import { MusicComponent } from './components/music/music.component';
import { VideoGamesComponent } from './components/videogames/videogames.component';
import { StoriesComponent } from './components/stories/stories.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        JapanComponent,
        LifeComponent,
        MusicComponent,
        VideoGamesComponent,
        StoriesComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'japan', component: JapanComponent },
            { path: 'life', component: LifeComponent },
            { path: 'music', component: MusicComponent },
            { path: 'videogames', component: VideoGamesComponent },
            { path: 'stories', component: StoriesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
