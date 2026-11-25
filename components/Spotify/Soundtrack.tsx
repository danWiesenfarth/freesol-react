import type { Soundtrack as SoundtrackData } from '@/data/interfaces/project.interface';

interface SoundtrackProps {
  soundtrack: SoundtrackData;
  hasConsent: boolean;
  onOpenConsentSettings: () => void;
}

export default function Soundtrack({
  soundtrack,
  hasConsent,
  onOpenConsentSettings,
}: SoundtrackProps) {
  const { trackId, title, artist } = soundtrack;

  const validTrackId = /^[a-zA-Z0-9]{22}$/.test(trackId);

  if (!validTrackId) return null;

  return (
    <section className='w-full'>
      <div className='mb-3'>
        <span className='text-xs uppercase tracking-widest'>
          Recommended soundtrack
        </span>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>

      {hasConsent ? (
        <iframe
          title={`Spotify player: ${title} by ${artist}`}
          src={`https://open.spotify.com/embed/track/${trackId}?theme=0`}
          width='100%'
          height='152'
          style={{ border: 0 }}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      ) : (
        <div className='rounded-xl border p-5'>
          <p className='mb-3'>
            Spotify content is disabled until you accept external media.
          </p>

          <button onClick={onOpenConsentSettings}>
            Manage cookie preferences
          </button>
        </div>
      )}
    </section>
  );
}
