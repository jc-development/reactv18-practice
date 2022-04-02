import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import './App.css';

const ArticleComponent = lazy( () => import('./components/article/ArticleComponent'));
const TabSwitcher = lazy( () => import('./components/tabs') );

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <ArticleComponent />
        <TabSwitcher />
      </Suspense>
    </div>
  );
}

export default App;
