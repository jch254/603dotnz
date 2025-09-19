import * as React from 'react';

import Head from './Head';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App: React.FC = () => (
  <html lang="en">
    <Head title="603.nz | Internet Projects" />
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  </html>
);

export default App;
