import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { Box, Paper, Button, Typography, Tabs, Tab } from '@mui/material';
import type { TemplateWithFields } from '@/entities/template';
import { Manual } from './Manual';
import { Upload } from './Upload';
import type { GenerateManualData, GenerateUploadData, GenerateMode, GenerateSubmitData } from '../model/types';

type Props = {
  template: TemplateWithFields;
  error?: string | null;
  onSubmit: (data: GenerateSubmitData) => void;
};

export function GenerateForm({ template, error, onSubmit }: Props) {
  const [mode, setMode] = useState<GenerateMode>('manual');
  const [manualValues, setManualValues] = useState<GenerateManualData>({});
  const [uploadData, setUploadData] = useState<GenerateUploadData | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleTabChange = (_: unknown, newValue: GenerateMode) => {
    setMode(newValue);
    setUploadError(null);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mode === 'manual') {
      onSubmit({
        mode: 'manual',
        data: manualValues,
      });
      return;
    }

    if (mode === 'upload') {
      if (!uploadData) {
        setUploadError('Загрузите Excel-файл');
        return;
      }
      onSubmit({
        mode: 'upload',
        data: uploadData,
      });
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={3}
      sx={{ width: 440, p: 4, display: 'flex', flexDirection: 'column', gap: 3, borderRadius: 2 }}
    >
      <Tabs value={mode} onChange={handleTabChange} variant="fullWidth">
        <Tab value="manual" label="Ручной ввод" />
        <Tab value="upload" label="Загрузка файла" />
      </Tabs>

      {mode === 'manual' && <Manual fields={template.fields} values={manualValues} onChange={setManualValues} />}
      {mode === 'upload' && (
        <Upload
          fields={template.fields}
          uploadData={uploadData}
          onChange={setUploadData}
          error={uploadError}
          clearError={() => setUploadError(null)}
        />
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Button type="submit" variant="contained" fullWidth>
          Сгенерировать
        </Button>

        {error && (
          <Typography color="error" variant="body1" align="center">
            {error}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}
