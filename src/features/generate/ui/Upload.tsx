import { useState } from 'react';
import type { DragEvent, ChangeEvent } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import type { TemplateField } from '@/entities/templateField';
import { LinkText } from '@/shared/ui';
import { KeysExampleModal } from './KeysExampleModal';
import { validateExcelFile } from '../model/validation';
import type { GenerateUploadData } from '../model/types';

type Props = {
  fields: TemplateField[];
  uploadData: GenerateUploadData | null;
  onChange: (uploadData: GenerateUploadData | null) => void;
  error?: string | null;
  clearError: () => void;
};

export function Upload({ fields, uploadData, onChange, error, clearError }: Props) {
  const [fileError, setFileError] = useState<string | null>(null);
  const [isKeysModalOpen, setIsKeysModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];

    if (!droppedFile) return;

    const error = validateExcelFile(droppedFile);
    if (error) {
      setFileError(error);
      return;
    }
    setFileError(null);
    clearError();

    onChange({ file: droppedFile });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const error = validateExcelFile(selectedFile);
    if (error) {
      setFileError(error);
      return;
    }
    setFileError(null);
    clearError();

    onChange({ file: selectedFile });
  };

  const handleClear = () => {
    setFileError(null);
    clearError();
    onChange(null);
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
        {!uploadData && (
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

            <Typography variant="body2" align="center" color={fileError || error ? 'error' : 'text.secondary'}>
              {error || fileError || 'Поддерживаемые форматы: .xlsx, .xls'}
            </Typography>
          </>
        )}

        {uploadData && (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 64, color: 'success.main', opacity: 0.8 }} />
              <Typography component="p" variant="h6">
                Файл загружен
              </Typography>
              <Typography color="text.secondary">{uploadData.file.name}</Typography>
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

      <Typography variant="body2" align="center">
        Названия столбцов в файле должны соответствовать ключам шаблона.{' '}
        <LinkText onClick={() => setIsKeysModalOpen(true)}>Посмотреть пример</LinkText>
      </Typography>

      <KeysExampleModal open={isKeysModalOpen} onClose={() => setIsKeysModalOpen(false)} fields={fields} />
    </Box>
  );
}
