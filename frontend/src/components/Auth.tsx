import React from 'react';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { auth } from '../firebase';

const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '/', // URL to redirect after successful sign-in
  signInOptions: [
    // List of authentication methods you want to use
    // auth.EmailAuthProvider.PROVIDER_ID,
    // auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

const Auth: React.FC = () => {
  const [ui, setUi] = React.useState<firebaseui.auth.AuthUI | null>(null);

  React.useEffect(() => {
    const authUI = new firebaseui.auth.AuthUI(auth);
    setUi(authUI);
  }, []);

  React.useEffect(() => {
    if (ui) {
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }, [ui]);

  return <div id="firebaseui-auth-container" />;
};

export default Auth;