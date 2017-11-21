import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { SafePipe } from './components/widget/widget-edit/safe-pipe';
import { QuillEditorModule } from 'ngx-quill-editor';

import {Routing} from './app.routing';
import { SearchTestComponent } from './search-test/search-test.component';
import {SearchService} from './services/search.service.client';
import { ComedianLoginComponent } from '../../project/client/src/app/components/comedian/comedian-login/comedian-login.component';
import { ComedianProfileComponent } from '../../project/client/src/app/components/comedian/comedian-profile/comedian-profile.component';
import { ComedianAccountComponent } from '../../project/client/src/app/components/comedian/comedian-account/comedian-account.component';
import { PortfolioComponent } from '../../project/client/src/app/components/comedian/portfolio/portfolio.component';
import { BitListComponent } from '../../project/client/src/app/components/comedian/bit/bit-list/bit-list.component';
import { BitCreateComponent } from '../../project/client/src/app/components/comedian/bit/bit-create/bit-create.component';
import { BitViewComponent } from '../../project/client/src/app/components/comedian/bit/bit-view/bit-view.component';
import { SearchComponent } from '../../project/client/src/app/components/search/search.component';
import { CriticLoginComponent } from '../../project/client/src/app/components/critic/critic-login/critic-login.component';
import { CriticProfileComponent } from '../../project/client/src/app/components/critic/critic-profile/critic-profile.component';
import { CriticAccountComponent } from '../../project/client/src/app/components/critic/critic-account/critic-account.component';
import { ReviewListComponent } from '../../project/client/src/app/components/critic/review/review-list/review-list.component';
import { ReviewCreateComponent } from '../../project/client/src/app/components/critic/review/review-create/review-create.component';
import { ReviewViewComponent } from '../../project/client/src/app/components/critic/review/review-view/review-view.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageListComponent,
    PageEditComponent,
    PageNewComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    SafePipe,
    SearchTestComponent,
    ComedianLoginComponent,
    ComedianProfileComponent,
    ComedianAccountComponent,
    PortfolioComponent,
    BitListComponent,
    BitCreateComponent,
    BitViewComponent,
    SearchComponent,
    CriticLoginComponent,
    CriticProfileComponent,
    CriticAccountComponent,
    ReviewListComponent,
    ReviewCreateComponent,
    ReviewViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [ TestService, UserService, WebsiteService, PageService, WidgetService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
