import { useState } from 'react';
import { Box, Paper, Button, Typography, Tabs, Tab } from '@mui/material';
import type { TemplateWithFields } from '@/entities/template';
import { Manual } from './Manual';
import { Upload } from './Upload';

type Props = {
  template: TemplateWithFields;
  onSubmit: () => void;
  error?: string | null;
  clearError: () => void;
};

export function GenerateForm({ template, onSubmit, error, clearError }: Props) {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: unknown, newValue: number) => {
    setTab(newValue);
    clearError();
  };

  return (
    <Paper
      component="form"
      //TODO: работа с формой
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      elevation={3}
      sx={{ width: 440, p: 4, display: 'flex', flexDirection: 'column', gap: 3, borderRadius: 2 }}
    >
      <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
        <Tab label="Ручной ввод" />
        <Tab label="Загрузка файла" />
      </Tabs>

      {tab === 0 && <Manual fields={template.fields} />}
      {tab === 1 && <Upload fields={template.fields} />}

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
