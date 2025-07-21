export class err_app extends Error {
  constructor(message: string) {
    super(message);
    this.name = "error occured in app";
  }
}

export const dif_err = (err: unknown): void => {
  if (err instanceof err_app) {
    console.error(err.message);
  } else {
    console.error(err);
  }
};
