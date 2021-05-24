/* eslint-disable max-classes-per-file */
abstract class CustomError<T> extends Error {
  readonly type: T;

  data: any;

  code: string;

  constructor(type: T, code: string, data?: any) {
    super(code);
    this.code = code;
    this.type = type;
    this.data = data;
  }
}

export class ValidationError extends CustomError<'ValidationError'> {
  constructor(code: string, data?: object) {
    super('ValidationError', code, data);
  }
}
