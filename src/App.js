import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';

// Lazy load pages
const Home = lazy(() => import('./Components/Home/Home'));
const Websites = lazy(() => import('./Components/websites'));

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '18px',
    color: '#3374FF'
  }}>
    <div>در حال بارگذاری...</div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/websites' element={<Websites />} />
          <Route path='/pricing' element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>صفحه تعرفه (به زودی)</div>} />
          <Route path='/blog' element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>وبلاگ (به زودی)</div>} />
          <Route path='/tutorial' element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>آموزش (به زودی)</div>} />
          <Route path='/features/:id' element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>جزئیات ویژگی (به زودی)</div>} />
          <Route path='*' element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>صفحه پیدا نشد - 404</div>} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
