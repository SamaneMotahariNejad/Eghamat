import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./app-main/app-main.module').then(h => h.AppMainModule)},
        ]
    },

    // Not found
    { path: '**', redirectTo: '' },

];
