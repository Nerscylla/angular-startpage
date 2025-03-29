import { Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
	{ path: 'config', component: ConfigComponent },
	{ path: '**', component: HomePageComponent },
];
