'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import CookieConsentDialog from '@/components/Cookies/CookieConsentDialog';

export interface CookieConsent {
  necessary: true;
  externalMedia: boolean;
}

interface CookieConsentContextValue {
  consent: CookieConsent | null;
  hasConsent: boolean;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  saveConsent: (preferences: CookieConsent) => void;
  acceptAll: () => void;
  rejectOptional: () => void;
}

const STORAGE_KEY = 'freesol-cookie-consent';

const defaultConsent: CookieConsent = {
  necessary: true,

  externalMedia: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Load saved preferences after the component mounts.
  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem(STORAGE_KEY);

      if (storedConsent) {
        const parsed = JSON.parse(storedConsent) as Partial<CookieConsent>;

        setConsent({
          necessary: true,
          externalMedia: parsed.externalMedia === true,
        });
      } else {
        // No saved preference: show the consent dialog.
        setIsSettingsOpen(true);
      }
    } catch {
      setConsent(defaultConsent);
      setIsSettingsOpen(true);
    }
  }, []);

  const saveConsent = useCallback((preferences: CookieConsent) => {
    const updatedConsent: CookieConsent = {
      necessary: true,
      externalMedia: preferences.externalMedia,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConsent));
    setConsent(updatedConsent);
    setIsSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      externalMedia: true,
    });
  }, [saveConsent]);

  const rejectOptional = useCallback(() => {
    saveConsent(defaultConsent);
  }, [saveConsent]);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    // Don't allow dismissing the initial dialog without making a choice.
    if (consent) {
      setIsSettingsOpen(false);
    }
  }, [consent]);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsent: consent !== null,
        isSettingsOpen,
        openSettings,
        closeSettings,
        saveConsent,
        acceptAll,
        rejectOptional,
      }}
    >
      {children}
      <CookieConsentDialog
        consent={consent}
        isOpen={isSettingsOpen}
        onSave={saveConsent}
        onAcceptAll={acceptAll}
        onRejectOptional={rejectOptional}
        onClose={closeSettings}
      />
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      'useCookieConsent must be used within CookieConsentProvider',
    );
  }

  return context;
}
