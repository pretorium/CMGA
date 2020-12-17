import { css } from 'styled-components';

const fonts = css`

  @font-face {
    font-family: "Toyota-Regular";
    src: url("/fonts/ToyotaDisplay_Rg.ttf");
    src: url("/fonts/ToyotaDisplay_Rg.ttf?#iefix") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Toyota-Medium";
    src: url("/fonts/ToyotaDisplay_Bd.ttf");
    src: url("/fonts/ToyotaDisplay_Bd.ttf?#iefix") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Toyota-Bold";
    src: url("/fonts/ToyotaDisplay_He.ttf");
    src: url("/fonts/ToyotaDisplay_He.ttf?#iefix") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`;

export default fonts;
