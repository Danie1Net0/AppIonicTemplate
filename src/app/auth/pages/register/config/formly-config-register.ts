import { SlidesRegisterComponent } from '@auth/pages/register/components/slides-register/slides-register.component';
import { DocumentPhotosComponent } from '@auth/pages/register/components/document-photos/document-photos.component';
import { SelfieComponent } from '@auth/pages/register/components/selfie/selfie.component';

export const FORMLY_CONFIG = {
  types: [
    {
      name: 'slides-register',
      component: SlidesRegisterComponent
    },
    {
      name: 'document-photos',
      component: DocumentPhotosComponent
    },
    {
      name: 'selfie',
      component: SelfieComponent
    }
  ],
};
