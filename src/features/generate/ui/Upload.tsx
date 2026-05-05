import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import type { TemplateField } from '@/entities/templateField';
import { LinkText } from '@/shared/ui';

type Props = {
  fields: TemplateField[];
};

export function Upload({ fields }: Props) {
  void fields;
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleClear = () => {
    setFile(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <Box
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          minHeight: 320,
          border: '2px dashed',
          borderColor: isDragging ? 'accent.main' : 'text.secondary',
          borderRadius: 1,
          p: 3,
          transition: '0.2s',
          bgcolor: isDragging ? 'soft.dark' : 'soft.main',
        }}
      >
        {!file && (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <CloudUploadOutlinedIcon sx={{ fontSize: 64, color: 'text.secondary', opacity: 0.8 }} />
                <Typography align="center">
                  Перетащите файл сюда
                  <br /> или
                  <br /> нажмите, чтобы выбрать
                </Typography>
              </Box>

              <Button variant="outlined" component="label">
                Загрузить файл
                <input type="file" accept=".xlsx,.xls" hidden onChange={handleFileChange} />
              </Button>
            </Box>

            <Typography variant="body2" color="text.secondary">
              Поддерживаемые форматы: .xlsx, .xls
            </Typography>
          </>
        )}

        {file && (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 64, color: 'success.main', opacity: 0.8 }} />
              <Typography component="p" variant="h6">
                Файл загружен
              </Typography>
              <Typography color="text.secondary">{file.name}</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button variant="outlined" component="label">
                Изменить файл
                <input type="file" accept=".xlsx,.xls" hidden onChange={handleFileChange} />
              </Button>
              <Typography onClick={handleClear} sx={{ cursor: 'pointer', color: 'error.main', alignSelf: 'center' }}>
                Очистить
              </Typography>
            </Box>
          </>
        )}
      </Box>
      {/* TODO: Реализовать модалку с примером */}
      <Typography variant="body2" align="center">
        Названия столбцов в файле должны соответствовать ключам шаблона.{' '}
        <LinkText onClick={() => {}}>Посмотреть пример</LinkText>
      </Typography>
    </Box>
  );
}
