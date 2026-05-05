import { Grid } from '@mui/material';
import type { Generation } from '@/entities/generation';
import { customScrollbar } from '@/shared/lib';
import { GenerationCard } from './GenerationCard';

type Props = {
  generations: Generation[];
};

export function GenerationList({ generations }: Props) {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        maxHeight: 360,
        overflow: 'auto',
        ...customScrollbar,
      }}
    >
      {generations.map((generation) => (
        <Grid key={generation.id} sx={{ width: '100%', pr: 1 }}>
          <GenerationCard generation={generation} />
        </Grid>
      ))}
    </Grid>
  );
}
