import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { JournalPage } from '../components/Journal/JournalPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route exact path="/" element={<JournalPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
