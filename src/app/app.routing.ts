import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ReverseComponent } from './reverse/reverse.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'reverse',
        component: ReverseComponent
    },
     {
        path: 'search',
        component: SearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);