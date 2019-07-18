import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa-editar.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
	entryComponents: [ MapaEditarComponent ],
	declarations: [ AppComponent, MapaComponent, MapaEditarComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'cfGrI4'
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
