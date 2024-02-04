import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#000000',
          secondary: '#E53935',
        },
      },
      dark: {
        colors: {
          primary: '#4A148C',
          secondary: '#0D47A1',
        },
      },
    },
  },
});
