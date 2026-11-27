interface Logo {
  className: string;
}

export default function Logo({ className }: Logo) {
  return (
    <svg
      width='360'
      height='360'
      viewBox='0 0 360 360'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='Icon'>
        <path
          id='Vector'
          d='M153.367 176.571C142.69 185.242 129.681 190.697 115.864 192.158C133.35 193.997 149.548 202.239 161.359 215.308C173.171 228.378 179.767 245.357 179.889 263C179.918 245.289 186.473 228.215 198.293 215.062C210.113 201.909 226.361 193.607 243.913 191.753C230.374 190.321 217.61 185.055 207.058 176.684C219.539 166.788 235.001 161.326 251 161.248C233.332 161.245 216.29 154.68 203.16 142.816C190.029 130.953 181.74 114.632 179.89 97C178.043 114.591 169.784 130.877 156.699 142.729C143.614 154.581 126.627 161.164 109 161.212H109.367C125.376 161.262 140.855 166.698 153.367 176.571Z'
          fill='currentColor'
        />
        <g id='Group 2'>
          <path
            id='Vector_2'
            d='M296 230L342 183.5L296 137V230Z'
            fill='currentColor'
          />
          <path
            id='Vector_3'
            d='M227 65L180.001 20L133 65H227Z'
            fill='currentColor'
          />
          <path
            id='Vector_4'
            d='M133 295L180.001 340L227 295H133Z'
            fill='currentColor'
          />
          <path
            id='Vector_5'
            d='M64 137L18 183.5L64 230V137Z'
            fill='currentColor'
          />
        </g>
        <g id='Group 1'>
          <path
            id='Vector_6'
            d='M272 151V98H219L272 151Z'
            fill='currentColor'
          />
          <path id='Vector_7' d='M141 98H88V151L141 98Z' fill='currentColor' />
          <path
            id='Vector_8'
            d='M219 262H272V209L219 262Z'
            fill='currentColor'
          />
          <path id='Vector_9' d='M88 209V262H141L88 209Z' fill='currentColor' />
        </g>
      </g>
    </svg>
  );
}
