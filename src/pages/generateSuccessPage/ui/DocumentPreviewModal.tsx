import { Modal, Box, IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { DocumentViewer } from '@/shared/ui';

type Props = {
  src: string;
  open: boolean;
  onClose: () => void;
};

export function DocumentPreviewModal({ src, open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
        <IconButton
          onClick={onClose}
          sx={{ color: 'background.paper', position: 'absolute', top: 0, right: 0, zIndex: 1 }}
        >
          <CloseOutlinedIcon />
        </IconButton>

        <Box sx={{ height: '90vh', aspectRatio: '210 / 297' }}>
          <DocumentViewer src={src} />
        </Box>
      </Box>
    </Modal>
  );
}
