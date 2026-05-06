import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function TemplatesSearch() {
  return (
    <TextField
      placeholder="Найти шаблон..."
      fullWidth
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      sx={{ maxWidth: 480, '& .MuiOutlinedInput-root': { height: 48, borderRadius: 1, bgcolor: '#E2E2FF' } }}
    />
  );
}
