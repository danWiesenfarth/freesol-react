'use client';

import { useEffect, useState } from 'react';
import type { CookieConsent } from '@/context/CookieConsentContext';

interface CookieConsentDialogProps {
  consent: CookieConsent | null;
  isOpen: boolean;
  onSave: (preferences: CookieConsent) => void;
  onAcceptAll: () => void;
  onRejectOptional: () => void;
  onClose: () => void;
}

export default function CookieConsentDialog({
  consent,
  isOpen,
  onSave,
  onAcceptAll,
  onRejectOptional,
  onClose,
}: CookieConsentDialogProps) {
  const [analytics, setAnalytics] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);

  useEffect(() => {
    setExternalMedia(consent?.externalMedia ?? false);
  }, [consent, isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4'>
      <section
        role='dialog'
        aria-modal='true'
        aria-labelledby='cookie-consent-title'
        className='w-full max-w-lg rounded-2xl bg-white p-6 text-zinc-900 shadow-2xl'
      >
        <p className='mb-2 text-xs uppercase tracking-[0.2em] text-zinc-900'>
          Freesol Creatives
        </p>

        <h2 id='cookie-consent-title' className='mb-3 text-2xl'>
          Let's take care of the legal stuff first.
        </h2>

        <p className='mb-6 text-sm leading-relaxed text-zinc-600'>
          We use necessary storage to make this website work. With your
          permission, we can also load analytics and external media such as
          Spotify.
        </p>

        <div className='divide-y divide-zinc-200 border-y border-zinc-200'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div>
              <h3 className='text-sm font-medium'>Necessary</h3>
              <p className='mt-1 text-xs text-zinc-500'>
                Required for basic website functionality.
              </p>
            </div>

            <span className='text-xs font-medium text-zinc-500'>
              Always active
            </span>
          </div>

          <label className='flex cursor-pointer items-center justify-between gap-4 py-4'>
            <div>
              <h3 className='text-sm font-medium'>External media</h3>
              <p className='mt-1 text-xs text-zinc-500'>
                Allows embedded content from services such as Spotify.
              </p>
            </div>

            <input
              type='checkbox'
              checked={externalMedia}
              onChange={(event) => setExternalMedia(event.target.checked)}
              className='h-5 w-5 accent-black'
            />
          </label>
        </div>

        <div className='mt-6 flex flex-col gap-2'>
          <button
            onClick={onAcceptAll}
            className='rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700'
          >
            Accept all
          </button>

          <button
            onClick={() =>
              onSave({
                necessary: true,
                externalMedia,
              })
            }
            className='rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:bg-zinc-100'
          >
            Save preferences
          </button>

          <button
            onClick={onRejectOptional}
            className='rounded-full px-5 py-3 text-sm text-zinc-600 transition hover:bg-zinc-100'
          >
            Reject optional
          </button>
        </div>

        {consent && (
          <button
            onClick={onClose}
            className='mt-3 w-full text-xs text-zinc-500 underline underline-offset-4'
          >
            Close without changes
          </button>
        )}
      </section>
    </div>
  );
}
