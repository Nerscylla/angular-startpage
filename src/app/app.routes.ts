import { Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
	{ path: 'config', component: ConfigComponent }, // Route for /config
	{ path: 'configure', component: ConfigComponent }, // Route for /configure
	{ path: 'configuration', component: ConfigComponent }, // Route for /configuration
	{ path: ':/config', component: ConfigComponent }, // Route for /:config (dynamic segment)
	{ path: ':/configure', component: ConfigComponent }, // Route for /:configure (dynamic segment)
	{ path: ':/configuration', component: ConfigComponent }, // Route for /:configuration (dynamic segment)
	{ path: '', component: HomePageComponent }, // Default route for the home page
	{ path: '**', component: HomePageComponent }, // Catch-all route for undefined paths
];
