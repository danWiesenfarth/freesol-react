'use client';

import type { Soundtrack as SoundtrackData } from '@/data/interfaces/project.interface';
import { useCookieConsent } from '@/context/CookieConsentContext';

interface SoundtrackProps {
  soundtrack: SoundtrackData;
}

export default function Soundtrack({ soundtrack }: SoundtrackProps) {
  const { trackId, title, artist } = soundtrack;
  const { consent, openSettings, hasConsent } = useCookieConsent();

  const validTrackId = /^[a-zA-Z0-9]{22}$/.test(trackId);

  if (!validTrackId) return null;

  const hasExternalMediaConsent = consent?.externalMedia === true;

  return (
    <article className='w-full'>
      {hasConsent && hasExternalMediaConsent ? (
        <iframe
          title={`Spotify player: ${title} by ${artist}`}
          src={`https://open.spotify.com/embed/track/${trackId}?theme=1`}
          width='100%'
          height='152'
          style={{ border: 0 }}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      ) : (
        <div className='rounded-xl border border-zinc-200 p-5'>
          <p className='mb-3 text-sm text-zinc-600'>
            This Spotify player is disabled because external media hasn't been
            enabled.
          </p>

          <button
            onClick={openSettings}
            className='text-sm underline underline-offset-4'
          >
            Manage privacy preferences
          </button>
        </div>
      )}
    </article>
  );
}
