import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides-forgot-password.component.html',
  styleUrls: ['./slides-forgot-password.component.scss'],
})
export class SlidesForgotPasswordComponent extends FieldType implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor() {
    super();
  }

  public ngOnInit(): void { }

  public async ngAfterViewInit() {
    await this.slides.lockSwipes(true);
  }

  public async next() {
    await this.slides.lockSwipes(false);
    await this.slides.slideNext();
    await this.slides.lockSwipes(true);
  }

  public async previous() {
    await this.slides.lockSwipes(false);
    await this.slides.slidePrev();
    await this.slides.lockSwipes(true);
  }

  public isValid(field: FormlyFieldConfig): any {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

}
