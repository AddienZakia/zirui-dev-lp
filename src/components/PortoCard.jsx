import React from 'react';

function PortoCard() {
    return (
        <div className='flex flex-col glass rounded-5 aspect-square justify-evenly'>
            <div className='flex items-center justify-between px-6 align-middle'>
                <span className='pr-2 text-lg'>ZIRUI DEV</span>
                <div href="/" className='flex items-center'>
                    <span className='pr-3 text-lg'>TAKE A LOOK</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                        <path d="M11.125 4.375H4.375C3.47989 4.375 2.62145 4.73058 1.98851 5.36351C1.35558 5.99645 1 6.85489 1 7.75V24.625C1 25.5201 1.35558 26.3785 1.98851 27.0115C2.62145 27.6444 3.47989 28 4.375 28H21.25C22.1451 28 23.0035 27.6444 23.6365 27.0115C24.2694 26.3785 24.625 25.5201 24.625 24.625V17.875M17.875 1H28M28 1V11.125M28 1L11.125 17.875" stroke="#181818" strokeWidth={0.4} stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <img src="./src/assets/dummy.png" alt="" />
            <div className='px-6'>
                <span className='pr-2 text-lg'>MADE WITH</span>
                <div className='pt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="16" viewBox="0 0 110 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64386 7.19248H4.97361V12.3607C4.97361 13.7389 5.87805 13.7174 7.64386 13.6312V15.7201C4.06917 16.1507 2.6479 15.1602 2.6479 12.3607V7.19248H0.666748V4.95289H2.6479V2.06049L4.97361 1.37139V4.95289H7.64386V7.19248ZM17.8228 4.95289H20.1485V15.7201H17.8228V14.1696C17.0045 15.3109 15.734 16 14.0543 16C11.1256 16 8.69224 13.5236 8.69224 10.3365C8.69224 7.12787 11.1256 4.67294 14.0543 4.67294C15.734 4.67294 17.0045 5.36206 17.8228 6.48184V4.95289ZM14.4204 13.782C16.3584 13.782 17.8228 12.3392 17.8228 10.3365C17.8228 8.33379 16.3584 6.891 14.4204 6.891C12.4823 6.891 11.0179 8.33379 11.0179 10.3365C11.0179 12.3392 12.4823 13.782 14.4204 13.782ZM24.0247 3.33781C23.2064 3.33781 22.5388 2.64872 22.5388 1.85195C22.5394 1.4581 22.6963 1.0806 22.9746 0.802112C23.2534 0.523617 23.6308 0.36683 24.0247 0.366082C24.4185 0.36683 24.7959 0.523617 25.0747 0.802112C25.353 1.0806 25.51 1.4581 25.5105 1.85195C25.5105 2.64872 24.843 3.33781 24.0247 3.33781ZM22.8618 15.7201V4.95289H25.1875V15.7201H22.8618ZM27.8793 15.7201V0H30.205V15.7201H27.8793ZM45.3005 4.95289H47.7554L44.3746 15.7201H42.0919L39.8524 8.463L37.5913 15.7201H35.3086L31.9277 4.95289H34.3826L36.4715 12.3822L38.7326 4.95289H40.9506L43.1902 12.3822L45.3005 4.95289ZM50.641 3.33781C49.8227 3.33781 49.1552 2.64872 49.1552 1.85195C49.1557 1.4581 49.3127 1.0806 49.591 0.802112C49.8698 0.523617 50.2472 0.36683 50.641 0.366082C51.0349 0.36683 51.4123 0.523617 51.6911 0.802112C51.9694 1.0806 52.1263 1.4581 52.1269 1.85195C52.1269 2.64872 51.4593 3.33781 50.641 3.33781ZM49.4782 15.7201V4.95289H51.8039V15.7201H49.4782ZM60.1592 4.67294C62.571 4.67294 64.2938 6.30957 64.2938 9.10903V15.7201H61.9681V9.3459C61.9681 7.7093 61.0206 6.84793 59.5562 6.84793C58.0273 6.84793 56.8214 7.75237 56.8214 9.94886V15.7201H54.4957V4.95289H56.8214V6.3311C57.532 5.21132 58.6949 4.67294 60.1592 4.67294ZM75.3193 0.646028H77.645V15.7201H75.3193V14.1696C74.501 15.3109 73.2305 16 71.5508 16C68.6222 16 66.1888 13.5236 66.1888 10.3365C66.1888 7.12787 68.6222 4.67294 71.5508 4.67294C73.2305 4.67294 74.501 5.36206 75.3193 6.48184V0.646028ZM71.9169 13.782C73.855 13.782 75.3193 12.3392 75.3193 10.3365C75.3193 8.33379 73.855 6.891 71.9169 6.891C69.9788 6.891 68.5145 8.33379 68.5145 10.3365C68.5145 12.3392 69.9788 13.782 71.9169 13.782ZM85.4405 16C82.1888 16 79.7554 13.5236 79.7554 10.3365C79.7554 7.12787 82.1888 4.67294 85.4405 4.67294C87.5508 4.67294 89.3812 5.77121 90.2426 7.45089L88.2399 8.61374C87.7662 7.60163 86.711 6.9556 85.4189 6.9556C83.5239 6.9556 82.0811 8.3984 82.0811 10.3365C82.0811 12.2746 83.5239 13.7174 85.4189 13.7174C86.711 13.7174 87.7662 13.0498 88.283 12.0592L90.2857 13.2005C89.3812 14.9018 87.5508 16 85.4405 16ZM94.1188 7.92464C94.1188 9.88426 99.9115 8.69987 99.9115 12.6837C99.9115 14.8371 98.038 16 95.7123 16C93.5589 16 92.0084 15.031 91.3193 13.4805L93.322 12.3176C93.6666 13.2867 94.5279 13.8681 95.7123 13.8681C96.746 13.8681 97.5427 13.5236 97.5427 12.6622C97.5427 10.7456 91.75 11.8223 91.75 7.96771C91.75 5.94349 93.4943 4.67294 95.6908 4.67294C97.4566 4.67294 98.9209 5.49127 99.6746 6.91253L97.715 8.01078C97.3274 7.17094 96.5737 6.78332 95.6908 6.78332C94.8509 6.78332 94.1188 7.14941 94.1188 7.92464ZM104.046 7.92464C104.046 9.88426 109.839 8.69987 109.839 12.6837C109.839 14.8371 107.965 16 105.64 16C103.486 16 101.936 15.031 101.247 13.4805L103.249 12.3176C103.594 13.2867 104.455 13.8681 105.64 13.8681C106.673 13.8681 107.47 13.5236 107.47 12.6622C107.47 10.7456 101.677 11.8223 101.677 7.96771C101.677 5.94349 103.422 4.67294 105.618 4.67294C107.384 4.67294 108.848 5.49127 109.602 6.91253L107.642 8.01078C107.255 7.17094 106.501 6.78332 105.618 6.78332C104.778 6.78332 104.046 7.14941 104.046 7.92464Z" fill="#181818" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default PortoCard;