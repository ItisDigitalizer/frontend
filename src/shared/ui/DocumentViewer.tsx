import { Box } from '@mui/material';

type Props = {
  src: string;
  title?: string;
};

export function DocumentViewer({ src, title = 'Документ' }: Props) {
  return <Box component="iframe" src={src} title={title} sx={{ width: '100%', height: '100%', border: 0 }} />;
}
