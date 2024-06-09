import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
        body {
            margin: 0; line-height: normal;
            background-color: #000;
        }
:root {

/* fonts */
--font-satoshi: Satoshi;
--font-: Poppins;

/* font sizes */
--font-size-xl: 20px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-3xl: 22px;
--font-size-3xs: 10px;
--font-size-sm: 14px;

/* Colors */
--white: #fff;
--purple-light: #f478ff;
--color-gray-100: #949494;
--color-gray-200: rgba(32, 32, 32, 0.65);
--color-gray-300: rgba(255, 255, 255, 0.1);
--color-black-opacity: rgba(0,0,0,0.3);
--linear: #5ea8ff;
--color-springgreen: #23ef68;
--color-gainsboro: #e8e8e8;
--color-fuchsia-100: rgba(250, 0, 255, 0.2);
--color-silver: #b6b6b6;
--color-mediumpurple: #b094ff;

/* Gaps */
--gap-5xs: 8px;
--gap-xs: 12px;
--gap-sm: 14px;
--gap-11xl: 30px;
--gap-3xs: 10px;
--gap-8xs: 5px;
--gap-mini: 15px;
--gap-5xs-5: 7.5px;

/* Paddings */
--padding-8xs: 5px;
--padding-5xs: 8px;
--padding-3xs: 10px;
--padding-6xs: 7px;
--padding-xl: 20px;
--padding-9xs: 4px;
--padding-mini: 15px;
--padding-19xl: 38px;
--padding-xs: 12px;
--padding-mid: 17px;
--padding-10xs: 3px;
--padding-5xs-5: 7.5px;

/* Border radiuses */
--br-6xl: 25px;
--br-8xs: 5px;
--br-mini: 15px;
--br-981xl: 1000px;

}
`;