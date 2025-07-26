import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnunciosComponent } from './produto/anuncios/anuncios.component';
import { AtualizarProdutoComponent } from './produto/atualizar/atualizar-produto.component';
import { AtualizarUsuarioComponent } from './usuario/atualizar/atualizar-usuario.component';
import { CriarUsuarioComponent } from './usuario/criar/criar-usuario.component';
import { CriarProdutoComponent } from './produto/criar/criar-produto.component';
import { DetalhesComponent } from './produto/detalhes/detalhes.component';

@NgModule({
  declarations: [
    LoginComponent,
    AnunciosComponent,
    AtualizarProdutoComponent,
    CriarProdutoComponent,
    DetalhesComponent,
    AtualizarUsuarioComponent,
    CriarUsuarioComponent,
  ],
  imports: [CommonModule, ComponentsModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
