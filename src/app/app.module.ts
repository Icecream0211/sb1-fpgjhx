import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'
import { NativeScriptHttpClientModule } from '@nativescript/angular'
import { NativeScriptAnimationsModule } from '@nativescript/angular'
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ResultComponent } from './result/result.component'
import { BaziService } from './services/bazi.service'
import { ElementBalanceComponent } from './charts/element-balance/element-balance.component'
import { FutureFortuneComponent } from './charts/future-fortune/future-fortune.component'
import { FortuneHeatmapComponent } from './charts/fortune-heatmap/fortune-heatmap.component'
import { LuckyElementsComponent } from './charts/lucky-elements/lucky-elements.component'
import { DirectionColorComponent } from './charts/direction-color/direction-color.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptAnimationsModule,
    NativeScriptUIChartModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    ElementBalanceComponent,
    FutureFortuneComponent,
    FortuneHeatmapComponent,
    LuckyElementsComponent,
    DirectionColorComponent
  ],
  providers: [BaziService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}