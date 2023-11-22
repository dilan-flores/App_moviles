import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//FireBase
import{provideFirebaseApp, initializeApp} from '@angular/fire/app';
import{getFirestore,provideFirestore} from '@angular/fire/fireStore';
import{getStorage,provideStorage} from '@angular/fire/storage';

import{
  FacebookAuthProvider,
  GoogleAuthProvider,
  EmailAuthProvider,
  TwitterAuthProvider,
  getAuth,
  provideAuth
} from '@angular/fire/auth';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
