import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ClarityModule} from 'clarity-angular';
import {HomeModule} from './home/home.module';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {ArticleModule} from './articles/article.module';
import {MarkdownModule} from 'angular2-markdown';
import {AuthenticationModule} from './authentication/authentication.module';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    ClarityModule.forRoot(),
    MarkdownModule.forRoot(),
    HomeModule,
    ArticleModule,
    SharedModule,
    AuthenticationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
