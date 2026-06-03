export type GenerateManualData = Record<string, string>;

export type GenerateUploadData = {
  file: File;
};

export type GenerateMode = 'manual' | 'upload';

export type GenerateSubmitData =
  | {
      mode: 'manual';
      data: GenerateManualData;
    }
  | {
      mode: 'upload';
      data: GenerateUploadData;
    };
