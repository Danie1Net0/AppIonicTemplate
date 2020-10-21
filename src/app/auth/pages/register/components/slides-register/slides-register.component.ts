import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-slides-register',
  templateUrl: './slides-register.component.html',
  styleUrls: ['./slides-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesRegisterComponent extends FieldType implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;

  private registerType;
  private emailField: FormlyFieldConfig;

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.registerType = 'email';
    this.emailField = this.field.fieldGroup[0];

    this.field.fieldGroup.forEach((field: FormlyFieldConfig) => {
      field.fieldGroup[0].templateOptions.keyup = async (field1: FormlyFieldConfig, event: any) => {
        if (event.key === 'Enter' && this.isValid(field1)) {
          await this.next();
        }
      };
    });
  }

  public async ngAfterViewInit() {
    await this.slides.lockSwipes(true);
  }

  public async setRegisterType(registerType: string) {
    if (this.registerType !== 'phone' && registerType === 'phone' && Object.keys(this.field.fieldGroup).length === 8) {
      this.field.fieldGroup.splice(0, 1);
    } else if (this.registerType !== 'email' && registerType === 'email') {
      this.field.fieldGroup.unshift(this.emailField);
    }

    this.registerType = registerType;

    await this.next();
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
