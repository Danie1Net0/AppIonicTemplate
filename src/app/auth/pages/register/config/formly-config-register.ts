import { SlidesComponent } from '@auth/pages/register/components/slides/slides.component';
import { DocumentPhotosComponent } from '@auth/pages/register/components/document-photos/document-photos.component';
import { SelfieComponent } from '@auth/pages/register/components/selfie/selfie.component';

export const FORMLY_CONFIG = {
  types: [
    {
      name: 'slide',
      component: SlidesComponent
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
