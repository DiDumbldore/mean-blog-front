import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { CategorizedComponent } from './components/categorized/categorized.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'article', component: ArticleDetailComponent },
    { path: '**', redirectTo: 'admin/posts' }
]