import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import './App.css';

import ClassRoom from './components/class-room/ClassRoom';
import ParentChild from './components/parent-child/ParentChild';

import PureComponent from './components/pure-component/PureComponent';

const FormValidationControlled = lazy(() => import('./components/controlled-components/FormValidation'));
const FormValidationUncontrolled = lazy(() => import('./components/uncontrolled-components/FormValidation'));

const ArticleComponent = lazy( () => import('./components/article/ArticleComponent'));
const TabSwitcher = lazy( () => import('./components/tabs') );

function App() {
  return (
    <div className="App vh-200">
      <Suspense fallback={<Loader />}>
        <ArticleComponent />
        <TabSwitcher />
        <ClassRoom count={0} />
        <FormValidationControlled />
        <FormValidationUncontrolled />
      </Suspense>
      <ParentChild />
      <PureComponent />
    </div>
  );
}

export default App;
