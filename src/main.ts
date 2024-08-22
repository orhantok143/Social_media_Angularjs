import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { UserReducer } from './app/store/reducers/user.reducer';
import { UserEffects } from './app/store/effects/user.effects';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthReducer } from './app/store/reducers/auth.reducer';
import { AuthEffect } from './app/store/effects/auth.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostReducer } from './app/store/reducers/post.reducer';
import { PostEffect } from './app/store/effects/post.effects';
import { authInterceptor } from './app/interceptors/http.interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(MatIconModule),
    provideAnimationsAsync(),
    provideStore({user:UserReducer,auth:AuthReducer,post:PostReducer}),
    provideEffects([UserEffects,AuthEffect,PostEffect]),
    provideHttpClient(withFetch()),
    provideStoreDevtools(),
    provideHttpClient(withInterceptors([authInterceptor])),
  ]
  
}).catch(err => console.error(err));
