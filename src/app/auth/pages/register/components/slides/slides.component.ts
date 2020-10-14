import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent extends FieldType implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;

  private registerType = 'email';
  private emailField: FormlyFieldConfig;

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.emailField = this.field.fieldGroup[0];
  }

  public async ngAfterViewInit() {
    await this.slides.lockSwipes(true);
  }

  public async setRegisterType(registerType: string) {
    if (this.registerType !== 'phone' && registerType === 'phone') {
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
