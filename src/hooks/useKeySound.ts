import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import keyPressSfx from '../assets/keypress.mp3';

const useKeySound = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [play] = useSound(keyPressSfx, { volume: 0.3 });
  
  const playKeystroke = () => {
    if (isEnabled) {
      play();
    }
  };
  
  const toggleSound = () => {
    setIsEnabled(!isEnabled);
    localStorage.setItem('terminalSoundEnabled', String(!isEnabled));
  };
  
  useEffect(() => {
    const soundSetting = localStorage.getItem('terminalSoundEnabled');
    if (soundSetting !== null) {
      setIsEnabled(soundSetting === 'true');
    }
  }, []);
  
  return {
    isEnabled,
    playKeystroke,
    toggleSound
  };
};

export default useKeySound;