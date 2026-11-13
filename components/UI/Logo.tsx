interface Logo {
  className: string;
}

export default function Logo({ className }: Logo) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 46 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M19.5086 20.6324C18.109 21.7688 16.4036 22.4838 14.5922 22.6752C16.8846 22.9162 19.008 23.9964 20.5564 25.7092C22.1049 27.4221 22.9696 29.6473 22.9855 31.9596C22.9894 29.6385 23.8487 27.4008 25.3982 25.677C26.9477 23.9532 29.0778 22.8651 31.3788 22.6221C29.6039 22.4345 27.9306 21.7443 26.5472 20.6473C28.1835 19.3503 30.2104 18.6345 32.3078 18.6243C29.9916 18.6239 27.7575 17.7635 26.0362 16.2086C24.3148 14.6539 23.2282 12.5149 22.9857 10.2041C22.7436 12.5095 21.6608 14.6439 19.9455 16.1972C18.2301 17.7505 16.0032 18.6132 13.6924 18.6195H13.7405C15.8392 18.6261 17.8684 19.3385 19.5086 20.6324Z'
        fill='currentColor'
      />
      <path
        d='M39.0771 27.7758L45.0002 21.9186L39.0771 16.0615V27.7758Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M28.9233 6.85714L23.0003 1L17.0771 6.85714H28.9233Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M17.0771 36.1426L23.0003 41.9997L28.9233 36.1426H17.0771Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M6.92308 16.0615L1 21.9186L6.92308 27.7758V16.0615Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M34.8464 17.7349V11.041H28.0771L34.8464 17.7349Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M17.9235 11.041H11.1543V17.7349L17.9235 11.041Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M27.8154 31.9595H34.5847V25.2656L27.8154 31.9595Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
      <path
        d='M11.1543 25.2656V31.9595H17.9235L11.1543 25.2656Z'
        stroke='currentColor'
        strokeMiterlimit='10'
      />
    </svg>
  );
}
