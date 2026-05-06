import { Box, Paper, Typography } from '@mui/material';
import type { Generation } from '@/entities/generation';
import { pluralize } from '@/shared/lib';
import { LinkText } from '@/shared/ui';

type Props = {
  generation: Generation;
};

export function GenerationCard({ generation }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        height: 64,
        p: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 3,
          maxWidth: 900,
          width: '100%',
        }}
      >
        <Typography noWrap>{generation.templateName}</Typography>
        <Typography noWrap>{new Date(generation.createdAt).toLocaleDateString()}</Typography>
        <Typography noWrap>{pluralize(generation.filesCount, 'документ', 'документа', 'документов')}</Typography>
      </Box>

      {/* Реализовать скачивание файла */}
      <LinkText onClick={() => {}}>Скачать</LinkText>
    </Paper>
  );
}
