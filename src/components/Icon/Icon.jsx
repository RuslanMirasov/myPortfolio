const Default = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="23" stroke={color} strokeWidth="4" />
    <circle cx="25" cy="11" r="4" fill={color} />
    <path d="M29 31C29 43 27.2091 43 25 43C22.7909 43 21 43 21 31C21 19 22.7909 19 25 19C27.2091 19 29 19 29 31Z" fill={color} />
  </svg>
);

const Spin = ({ size = 34, color }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M42.1455 80H37.8545C36.5582 80 35.4327 79.0782 35.18 77.8073L34.7418 75.62C34.6673 75.2527 34.3691 74.9745 33.9818 74.9073C31.8291 74.5418 29.7291 73.9873 27.7382 73.2582C27.3655 73.1218 26.9709 73.2145 26.7255 73.4945L25.2709 75.1509C24.4145 76.1218 22.98 76.36 21.8582 75.7127L18.1418 73.5673C17.02 72.92 16.5073 71.56 16.9218 70.3309L17.6382 68.2145C17.7582 67.8618 17.64 67.4709 17.3364 67.2182C15.6873 65.8436 14.1545 64.3109 12.7782 62.66C12.5255 62.3582 12.1345 62.24 11.7836 62.36L9.66727 63.0764C8.43818 63.4927 7.07818 62.9782 6.43091 61.8564L4.28545 58.14C3.63818 57.0182 3.87273 55.5836 4.84727 54.7273L6.50364 53.2727C6.78364 53.0273 6.87636 52.6291 6.74 52.26C6.01091 50.2691 5.45455 48.1691 5.09091 46.0164C5.02546 45.6273 4.74545 45.3291 4.37818 45.2564L2.19091 44.8182C0.921818 44.5673 0 43.4418 0 42.1455V37.8545C0 36.5582 0.921818 35.4327 2.19273 35.18L4.38 34.7418C4.74545 34.6691 5.02546 34.3709 5.09091 33.9818C5.45636 31.8291 6.01091 29.7291 6.74 27.7382C6.87636 27.3673 6.78182 26.9709 6.50364 26.7255L4.84727 25.2709C3.87455 24.4145 3.63818 22.98 4.28545 21.8582L6.43091 18.1418C7.07818 17.02 8.44182 16.5073 9.66727 16.9218L11.7836 17.6382C12.1364 17.7582 12.5273 17.64 12.7782 17.3382C14.1527 15.6873 15.6873 14.1545 17.3364 12.78C17.6382 12.5291 17.7564 12.1382 17.6364 11.7855L16.92 9.66909C16.5036 8.44182 17.0182 7.08 18.14 6.43273L21.8564 4.28727C22.9764 3.64 24.4127 3.87454 25.2691 4.84909L26.7236 6.50546C26.9709 6.78546 27.3691 6.88 27.7364 6.74182C29.7273 6.01273 31.8273 5.45636 33.9818 5.09091C34.3709 5.02546 34.6691 4.74545 34.7418 4.37818L35.18 2.19091C35.4327 0.921818 36.5582 0 37.8545 0H42.1455C43.4418 0 44.5673 0.921818 44.82 2.19273L45.2582 4.38C45.3309 4.74545 45.6291 5.02546 46.0182 5.09091C48.1727 5.45636 50.2727 6.01091 52.2618 6.74182C52.6273 6.87273 53.0273 6.78364 53.2745 6.50364L54.7291 4.84727C55.5836 3.87455 57.0182 3.63636 58.1418 4.28545L61.8582 6.43091C62.98 7.07818 63.4927 8.43818 63.0782 9.66727L62.3618 11.7836C62.2418 12.1364 62.36 12.5273 62.6618 12.7782C64.3127 14.1527 65.8455 15.6873 67.22 17.3364C67.4727 17.6382 67.86 17.7545 68.2145 17.6364L70.3309 16.92C71.56 16.5018 72.92 17.0182 73.5673 18.14L75.7127 21.8564C76.36 22.9782 76.1255 24.4127 75.1509 25.2691L73.4945 26.7236C73.2145 26.9691 73.1218 27.3673 73.2582 27.7364C73.9873 29.7273 74.5436 31.8273 74.9073 33.98C74.9727 34.3691 75.2527 34.6673 75.62 34.74L77.8073 35.1782C79.0782 35.4345 80 36.5582 80 37.8545V42.1455C80 43.4418 79.0782 44.5673 77.8073 44.82L75.62 45.2582C75.2527 45.3327 74.9745 45.6309 74.9073 46.0182C74.5418 48.1709 73.9873 50.2709 73.2582 52.2618C73.1218 52.6327 73.2164 53.0291 73.4945 53.2745L75.1509 54.7291C76.1236 55.5855 76.36 57.02 75.7127 58.1418L73.5673 61.8582C72.92 62.98 71.5564 63.4927 70.3309 63.0782L68.2145 62.3618C67.8618 62.2418 67.4727 62.3618 67.2182 62.6636C65.8436 64.3127 64.3109 65.8455 62.66 67.2218C62.3582 67.4727 62.24 67.8636 62.36 68.2164L63.0764 70.3327C63.4927 71.56 62.9782 72.9218 61.8564 73.5691L58.14 75.7145C57.0182 76.3618 55.5818 76.1255 54.7273 75.1527L53.2727 73.4964C53.0291 73.2182 52.6327 73.1255 52.26 73.26C50.2691 73.9891 48.1691 74.5455 46.0164 74.9091C45.6273 74.9745 45.3291 75.2545 45.2564 75.6218L44.8182 77.8091C44.5673 79.0782 43.4418 80 42.1455 80ZM27.3909 71.3782C27.7145 71.3782 28.0436 71.4345 28.3636 71.5527C30.2491 72.2436 32.2418 72.7691 34.2836 73.1146C35.4218 73.3073 36.3 74.1509 36.5236 75.2636L36.9618 77.4509C37.0473 77.8745 37.4218 78.1818 37.8545 78.1818H42.1455C42.5782 78.1818 42.9527 77.8745 43.0364 77.4527L43.4745 75.2636C43.6982 74.1509 44.5764 73.3073 45.7145 73.1146C47.7582 72.7691 49.7491 72.2436 51.6364 71.5527C52.7145 71.1545 53.8945 71.4473 54.64 72.2964L56.0945 73.9527C56.38 74.2745 56.8582 74.3527 57.2327 74.14L60.9491 71.9945C61.3236 71.7782 61.4945 71.3255 61.3564 70.9164L60.64 68.8C60.2782 67.7309 60.6145 66.5636 61.4982 65.8255C63.0636 64.52 64.52 63.0655 65.8236 61.5C66.56 60.6145 67.7291 60.2782 68.7982 60.64L70.9145 61.3564C71.3236 61.4927 71.7782 61.3218 71.9927 60.9491L74.1382 57.2327C74.3545 56.8582 74.2764 56.38 73.9509 56.0945L72.2945 54.64C71.4473 53.8945 71.1545 52.7145 71.5509 51.6364C72.2418 49.7509 72.7673 47.7582 73.1127 45.7164C73.3055 44.5782 74.1491 43.7 75.2618 43.4764L77.4491 43.0382C77.8745 42.9527 78.1818 42.5782 78.1818 42.1455V37.8545C78.1818 37.4218 77.8745 37.0473 77.4527 36.9636L75.2655 36.5255C74.1527 36.3018 73.3109 35.4236 73.1164 34.2855C72.7709 32.2418 72.2455 30.2509 71.5545 28.3636C71.1582 27.2855 71.4491 26.1055 72.2982 25.36L73.9545 23.9055C74.2782 23.62 74.3582 23.1418 74.1418 22.7673L71.9964 19.0509C71.78 18.6764 71.3273 18.5073 70.9182 18.6436L68.8018 19.36C67.7327 19.7236 66.5636 19.3873 65.8273 18.5C64.5236 16.9345 63.0673 15.48 61.5036 14.1764C60.6182 13.44 60.2818 12.2727 60.6436 11.2018L61.36 9.08546C61.4982 8.67636 61.3273 8.22182 60.9527 8.00727L57.2364 5.86182C56.8636 5.64545 56.3836 5.72364 56.0982 6.04909L54.6436 7.70545C53.9 8.55455 52.72 8.84545 51.64 8.45091C49.7545 7.75818 47.7618 7.23273 45.7182 6.88727C44.58 6.69455 43.7018 5.85091 43.4782 4.73818L43.0364 2.54909C42.9527 2.12545 42.5782 1.81818 42.1455 1.81818H37.8545C37.4218 1.81818 37.0473 2.12545 36.9636 2.54727L36.5255 4.73636C36.3018 5.84909 35.4236 6.69273 34.2855 6.88545C32.24 7.23091 30.2491 7.75636 28.3655 8.44909C27.2891 8.84545 26.1073 8.55455 25.3618 7.70545L23.9073 6.04909C23.6218 5.72546 23.1418 5.64364 22.7691 5.86182L19.0527 8.00727C18.6782 8.22364 18.5073 8.67636 18.6455 9.08546L19.3618 11.2018C19.7236 12.2727 19.3873 13.44 18.5018 14.1764C16.9364 15.48 15.4818 16.9364 14.1782 18.5C13.4436 19.3855 12.2727 19.7218 11.2036 19.36L9.08727 18.6436C8.67455 18.5055 8.22364 18.6764 8.00909 19.0509L5.86364 22.7673C5.64727 23.1418 5.72545 23.62 6.05091 23.9055L7.70727 25.36C8.55455 26.1055 8.84727 27.2855 8.45091 28.3636C7.76 30.2491 7.23455 32.2418 6.88909 34.2836C6.69636 35.4218 5.85273 36.3 4.74 36.5236L2.54909 36.9636C2.12545 37.0473 1.81818 37.4218 1.81818 37.8545V42.1455C1.81818 42.5782 2.12545 42.9527 2.54727 43.0364L4.73636 43.4745C5.84909 43.6982 6.69273 44.5764 6.88545 45.7145C7.23091 47.7582 7.75636 49.7491 8.44727 51.6364C8.84364 52.7145 8.55273 53.8945 7.70364 54.64L6.04727 56.0945C5.72364 56.38 5.64364 56.8582 5.86 57.2327L8.00545 60.9491C8.22182 61.3236 8.67273 61.4927 9.08364 61.3564L11.2 60.64C12.2673 60.2782 13.4364 60.6145 14.1745 61.4982C15.48 63.0636 16.9345 64.52 18.5 65.8236C19.3855 66.5618 19.7218 67.7291 19.36 68.7982L18.6436 70.9145C18.5055 71.3236 18.6764 71.7782 19.0509 71.9927L22.7673 74.1382C23.14 74.3545 23.62 74.2764 23.9055 73.9509L25.36 72.2945C25.8836 71.7 26.6236 71.3782 27.3909 71.3782Z"
      fill={color}
    />
    <circle cx="39.8367" cy="39.8365" r="29.6939" stroke={color} strokeWidth="2" />
  </svg>
);

const Logo = ({ size = 24, color }) => (
  <svg width={size} viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.6931 19.2174V8.26436H18.5723L13.9705 19.2174H10.7493L6.14747 8.26436H6.02663V19.2174H0.770996V0.305664H7.72333L12.2986 11.5503H12.4211L16.9981 0.305664H23.9488V19.2174H18.6931ZM34.9682 12.042C37.0986 11.1027 38.2855 8.95621 38.2855 6.72147C38.2855 2.67594 35.4764 0.305664 30.0039 0.305664H26.9283V4.3969H29.4229C31.0451 4.3969 32.136 5.40238 32.136 6.8113C32.136 8.24072 31.0931 9.20206 29.4229 9.20206H26.9283V12.8694H28.8899L32.1327 19.2174H38.8665L34.9682 12.042Z"
      fill={color}
    />
  </svg>
);

const Error = ({ size = 50, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.0424 5.38355L48.0255 40.5197C49.3525 42.853 47.6673 45.75 44.9831 45.75H5.0169C2.33269 45.75 0.647527 42.853 1.97453 40.5197L21.9576 5.38354C23.2996 3.02395 26.7004 3.02395 28.0424 5.38355Z"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M22.9062 17.7656C22.8854 16.9844 23.25 16.5938 24 16.5938H26.5C27.25 16.5938 27.6146 16.9844 27.5938 17.7656L27.1719 31.4219C27.151 32.099 26.8125 32.4375 26.1562 32.4375H24.3438C23.6875 32.4375 23.349 32.099 23.3281 31.4219L22.9062 17.7656ZM24.0625 39C23.3333 39 22.9688 38.6094 22.9688 37.8281V35.7344C22.9688 34.9531 23.3333 34.5625 24.0625 34.5625H26.4375C27.1667 34.5625 27.5312 34.9531 27.5312 35.7344V37.8281C27.5312 38.6094 27.1667 39 26.4375 39H24.0625Z"
      fill={color}
    />
  </svg>
);

const SelectArrow = ({ size = 50, color }) => (
  <svg width={size} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L25 26L46 4" stroke={color} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

const Confirm = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 26.5L24.5 33.5L36.5 17" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
  </svg>
);

const Scrolldown = ({ color }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11L50 43L98 11" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Phone = ({ color }) => (
  <svg viewBox="0 0 118 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="108" height="190" rx="12" stroke={color} strokeWidth="10" />
    <rect x="32" y="4" width="54" height="18" rx="7" fill={color} />
    <rect x="40" y="169" width="38" height="10" rx="5" fill={color} />
  </svg>
);

const Email = ({ color }) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z"
    />
    <path
      fill={color}
      d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z"
    />
  </svg>
);

const Telegram = ({ color }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="none"
      stroke={color || '#000000'}
      strokeWidth="30"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="30"
      d="M477.805,102.98l-67.327,317.516c-5.08,22.41-18.326,27.984-37.15,17.431l-102.585-75.596l-49.497,47.607c-5.477,5.478-10.06,10.061-20.617,10.061l7.37-104.479l190.129-171.805c8.268-7.37-1.792-11.454-12.848-4.083L150.233,287.633l-101.19-31.672c-22.011-6.873-22.408-22.012,4.581-32.568L449.419,70.911C467.744,64.039,483.779,74.993,477.805,102.98z"
    />
  </svg>
);

const Linkedin = ({ color }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11L50 43L98 11" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Watsup = ({ color }) => (
  <svg viewBox="0 0 509 512" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <path
        fill={color}
        d="M259.253137,0.00180389396 C121.502859,0.00180389396 9.83730687,111.662896 9.83730687,249.413175 C9.83730687,296.530232 22.9142299,340.597122 45.6254897,378.191325 L0.613226597,512.001804 L138.700183,467.787757 C174.430395,487.549184 215.522926,498.811168 259.253137,498.811168 C396.994498,498.811168 508.660049,387.154535 508.660049,249.415405 C508.662279,111.662896 396.996727,0.00180389396 259.253137,0.00180389396 L259.253137,0.00180389396 Z M259.253137,459.089875 C216.65782,459.089875 176.998957,446.313956 143.886359,424.41206 L63.3044195,450.21808 L89.4939401,372.345171 C64.3924908,337.776609 49.5608297,295.299463 49.5608297,249.406486 C49.5608297,133.783298 143.627719,39.7186378 259.253137,39.7186378 C374.871867,39.7186378 468.940986,133.783298 468.940986,249.406486 C468.940986,365.025215 374.874096,459.089875 259.253137,459.089875 Z M200.755924,146.247066 C196.715791,136.510165 193.62103,136.180176 187.380228,135.883632 C185.239759,135.781068 182.918689,135.682963 180.379113,135.682963 C172.338979,135.682963 164.002301,138.050856 158.97889,143.19021 C152.865178,149.44439 137.578667,164.09322 137.578667,194.171258 C137.578667,224.253755 159.487251,253.321759 162.539648,257.402027 C165.600963,261.477835 205.268745,324.111057 266.985579,349.682963 C315.157262,369.636141 329.460495,367.859106 340.450462,365.455539 C356.441543,361.9639 376.521811,350.186865 381.616571,335.917077 C386.711331,321.63837 386.711331,309.399797 385.184018,306.857991 C383.654475,304.305037 379.578667,302.782183 373.464955,299.716408 C367.351242,296.659552 337.288812,281.870254 331.68569,279.83458 C326.080339,277.796676 320.898622,278.418749 316.5887,284.378615 C310.639982,292.612729 304.918689,301.074268 300.180674,306.09099 C296.46161,310.02856 290.477218,310.577055 285.331175,308.389764 C278.564174,305.506821 259.516237,298.869139 236.160607,278.048627 C217.988923,261.847958 205.716906,241.83458 202.149458,235.711949 C198.582011,229.598236 201.835077,225.948292 204.584241,222.621648 C207.719135,218.824546 210.610997,216.097679 213.667853,212.532462 C216.724709,208.960555 218.432625,207.05866 220.470529,202.973933 C222.508433,198.898125 221.137195,194.690767 219.607652,191.629452 C218.07588,188.568136 205.835077,158.494558 200.755924,146.247066 Z"
      />
    </g>
  </svg>
);

const Facebook = ({ color }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11L50 43L98 11" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Icon = ({ name, color = 'currentColor', ...props }) => {
  return (
    <>
      {!name && <Default color={color} {...props} />}
      {name === 'spin' && <Spin color={color} {...props} />}
      {name === 'logo' && <Logo color={color} {...props} />}
      {name === 'error' && <Error color={color} {...props} />}
      {name === 'confirm' && <Confirm color={color} {...props} />}
      {name === 'select-arrow' && <SelectArrow color={color} {...props} />}
      {name === 'scrolldown' && <Scrolldown color={color} {...props} />}
      {name === 'phone' && <Phone color={color} {...props} />}
      {name === 'email' && <Email color={color} {...props} />}
      {name === 'telegram' && <Telegram color={color} {...props} />}
      {name === 'linkedin' && <Linkedin color={color} {...props} />}
      {name === 'facebook' && <Facebook color={color} {...props} />}
      {name === 'watsup' && <Watsup color={color} {...props} />}
    </>
  );
};

export default Icon;
