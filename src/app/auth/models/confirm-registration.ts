export class ConfirmRegistration {

  constructor(
    public email?: string,
    public phone?: string,
    public code: number[] = [null, null, null, null],
    public token?: string
  ) { }

}
