import { Box, Paper, Typography } from '@mui/material';
import { getGeneratedDocumentDownloadUrl } from '@/entities/generation';
import type { Generation } from '@/entities/generation';
import { LinkText } from '@/shared/ui';
import { formatDate } from '@/shared/lib';

type Props = {
  generation: Generation;
};

export function GenerationCard({ generation }: Props) {
  const handleDownload = () => {
    const url = getGeneratedDocumentDownloadUrl(generation.id);
    window.location.assign(url);
  };

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
          gridTemplateColumns: '2fr 1fr',
          gap: 3,
          maxWidth: 720,
          width: '100%',
        }}
      >
        <Typography noWrap>{generation.templateName}</Typography>
        <Typography noWrap>{formatDate(generation.createdAt)}</Typography>
      </Box>

      <LinkText onClick={handleDownload}>Скачать</LinkText>
    </Paper>
  );
}
