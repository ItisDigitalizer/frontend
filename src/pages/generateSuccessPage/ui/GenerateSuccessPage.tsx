import { Box, Paper, Typography, Button } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { LinkText } from '@/shared/ui';

export function GenerateSuccessPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
      <Paper
        sx={{
          width: '100%',
          maxWidth: 600,
          minHeight: 300,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          borderRadius: 2,
        }}
      >
        <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 96, color: 'success.main', opacity: 0.8 }} />

        <Typography component="h1" variant="h3" align="center">
          Документ сгенерирован
        </Typography>

        {/* // TODO: подключить реальные действия */}
        <Box sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button variant="outlined" fullWidth startIcon={<VisibilityOutlinedIcon />} sx={{ fontSize: 18 }}>
            Посмотреть
          </Button>
          <Button variant="contained" fullWidth startIcon={<DownloadOutlinedIcon />} sx={{ fontSize: 18 }}>
            Скачать
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <LinkText to="/templates">Вернуться в каталог</LinkText>
          <LinkText to="/generate/1">Сгенерировать ещё</LinkText>
        </Box>
      </Paper>
    </Box>
  );
}
