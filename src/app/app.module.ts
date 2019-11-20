import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { ContasComponent } from './pages/contas/contas.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { ButtonDialogComponent } from './components/button-dialog/button-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContasComponent,
    ColaboradoresComponent,
    EmpresaComponent,
    DialogFormComponent,
    ButtonDialogComponent
  ],
  entryComponents: [
    DialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
