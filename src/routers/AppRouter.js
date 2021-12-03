import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { firebase } from '../firebase/firebase-config';
import { JournalPage } from '../components/Journal/JournalPage';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [cheeking, setCheeking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(({ multiFactor: { user } }) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setCheeking(false);
    });
  }, [dispatch]);

  if (cheeking) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route exact path="/" element={<JournalPage />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
