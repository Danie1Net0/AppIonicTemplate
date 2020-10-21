export class ResetPassword {

  constructor(
    public cpf?: string,
    public code: number[] = [null, null, null, null],
    public password?: string,
    public password_confirmation?: string,
  ) { }

}
