import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { StartComponent } from './start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { SortPipe } from './sort.pipe';
import { RouterModule } from '@angular/router';
import { HighscoresComponent } from './highscores/highscores.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    SortPipe,
    HighscoresComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: StartComponent },
      { path: 'game/:colors', component: GameComponent },
      { path: 'highscores', component: HighscoresComponent },
      { path: '**', redirectTo: 'login' },
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
