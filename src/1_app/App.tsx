import { Suspense, useState } from 'react';

import { classNames } from '6_shared/lib/classNames/classNames';
import { useTheme } from '1_app/providers/ThemeProvider';
import { AppRouter } from '1_app/providers/router';
import { Navbar } from '3_widgets/Navbar';
import { Sidebar } from '3_widgets/Sidebar';

function App() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;