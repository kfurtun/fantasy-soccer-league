import styled, { createGlobalStyle } from "styled-components";

export const screenSizes = { s: "480px", m: "768px", l: "1024px" };

export default createGlobalStyle`
  :root {
      --primary-color: #A90432;
      --primary-color-hover:#63031e;
      --secondary-color:#FDB912;
      --secondary-color-hover:#e3a302;
      --border-radius:6px;
      --padding-in-banner:2vw;
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      
       
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    
    `;

export const Spinner = styled.div`
  border: 0.5vw solid #f3f3f3;
  border-radius: 50%;
  border-top: 0.5vw solid var(--secondary-color);
  border-left: 0.5vw solid var(--secondary-color);
  border-bottom: 0.5vw solid var(--secondary-color);
  width: 2vw;
  height: 2vw;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
