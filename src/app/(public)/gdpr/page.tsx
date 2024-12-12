// src/app/gdpr/page.tsx

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const metadata = { title: "GDPR | ZoškaSnap" };

export default function Gdpr() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        ZoškaSnap GDPR Rules
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        1. By using ZoškaSnap, you agree to let us send you updates about cats wearing hats, even if you don’t have a cat or hate hats.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        2. All cookies are gluten-free and calorie-free, but we can’t guarantee they’ll taste good.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        3. If you upload a photo of your pet, you automatically agree to let our office dog judge it silently.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        4. Your data will be stored securely in an undisclosed location, possibly guarded by squirrels.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        5. We may collect information about your favorite pizza toppings, but only for the purposes of planning our next office party.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        6. By accepting these terms, you grant us the right to send you memes at 3 AM. Memes will not be refunded.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        7. Your personal data is safe with us... except when it’s not, in which case we’ll send you a really heartfelt apology gif.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        8. If you unsubscribe from our emails, our office goldfish, Mr. Bubbles, might cry (but we respect your choice).
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        9. Any complaints will be responded to with an enthusiastic thumbs-up emoji and nothing else.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        10. You agree not to hold us responsible if ZoškaSnap becomes so fun that you forget to do your chores.
      </Typography>
    </Box>
  );
}
