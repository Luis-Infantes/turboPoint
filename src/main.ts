import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { WorkshopComponent } from './components/workshop-component/workshop-component';

bootstrapApplication(WorkshopComponent, appConfig)
  .catch((err) => console.error(err));
