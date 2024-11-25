import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@NgModule()
export class DatahubModule {
  constructor(
    @Optional() @SkipSelf() self: DatahubModule,
    @Optional() http: HttpClient,
  ) {
    if (self) {
      throw new Error(
        'DatahubModule is already loaded. Import in your base AppModule only.',
      );
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule',
      );
    }
  }

  public static forRoot(): ModuleWithProviders<DatahubModule> {
    return {
      ngModule: DatahubModule,
      providers: [],
    };
  }
}
