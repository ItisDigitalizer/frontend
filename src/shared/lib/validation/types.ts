export type Validators<T> = {
  [K in keyof T]: (value: string) => string;
};

export type Errors<T> = Partial<Record<keyof T, string>>;

export type Touched<T> = Record<keyof T, boolean>;
