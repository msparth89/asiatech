import React, { createContext, useContext, useEffect, useState } from 'react';
import { IdleTimerProvider as OriginalIdleTimerProvider } from 'react-idle-timer';

const IdleTimerContext = createContext();

const IdleTimerProvider = ({ children }) => {
  const [idleTimerInstance, setIdleTimerInstance] = useState(null);

  useEffect(() => {
    const timeout = 10 * 1000; // 10 seconds in milliseconds

    const instance = new OriginalIdleTimerProvider({
      timeout,
      onIdle: () => {
        console.log('User is idle. Show OTP login pop-up or perform other actions.');
        // You can navigate to the OTP login page or show a modal here
      },
      debounce: 500,
    });

    setIdleTimerInstance(instance);

    return () => {
      instance.stop();
    };
  }, []);

  return (
    <IdleTimerContext.Provider value={idleTimerInstance}>
      {children}
    </IdleTimerContext.Provider>
  );
};

export const useIdleTimer = () => {
  const idleTimerInstance = useContext(IdleTimerContext);
  return idleTimerInstance;
};

export default IdleTimerProvider;
