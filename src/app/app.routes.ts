import { Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Contato', component: ContatosComponent},
    {path: 'busca', component: EstoqueComponent},
];
