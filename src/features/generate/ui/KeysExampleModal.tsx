import {
  Box,
  Button,
  Modal,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import type { TemplateField } from '@/entities/templateField';
import { customScrollbar, formatTemplateKey } from '@/shared/lib';

type Props = {
  open: boolean;
  onClose: () => void;
  fields: TemplateField[];
};

export function KeysExampleModal({ open, onClose, fields }: Props) {
  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
      <Paper
        sx={{
          width: '100%',
          maxWidth: 520,
          maxHeight: '80vh',
          minHeight: 360,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography component="h3" variant="h5" align="center">
            Ключи шаблона
          </Typography>
          <Typography color="text.secondary">
            Названия столбцов в Excel-файле должны совпадать со значениями из столбца «Ключ»:
          </Typography>
        </Box>

        <TableContainer sx={{ flex: 1, minHeight: 0, overflow: 'auto', ...customScrollbar }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Ключ</TableCell>
                <TableCell>Описание</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((field) => (
                <TableRow key={field.id}>
                  <TableCell>{formatTemplateKey(field.key)}</TableCell>
                  <TableCell>{field.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button variant="contained" size="large" onClick={onClose}>
          Понятно
        </Button>
      </Paper>
    </Modal>
  );
}
