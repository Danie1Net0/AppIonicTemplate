export class ConfirmRegistration {

  constructor(
    public email: string = null,
    public phone: string = null,
    public code: number[] = [null, null, null, null],
    public token: string = null
  ) { }

}
