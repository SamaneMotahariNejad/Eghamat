import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./home/home.module').then(h => h.HomeModule)},
        ]
    },

    // Not found
    { path: '**', redirectTo: '' }
];
