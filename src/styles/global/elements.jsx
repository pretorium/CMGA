import { css } from 'styled-components';

const elements = css`
  input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-input-file {
 color:transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
}

  * {
    box-sizing: border-box;
  }
  html,
  body {
    max-width: 100vw;
    scroll-behavior: smooth;
    font-family: Poppins-Regular, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.25;
    font-synthesis: none;
    color: #4B4B4B;
    background-color: #F6F6F6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  div {
    line-height: 1.25;
  }

  p {
    margin-bottom: 1.15em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
    transition: all 200ms ease;
  }

  button {
    border: 0;
    outline: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    background-color: $transparent;
    transition: all 250ms ease;
  }
    
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
    
  ul {
    list-style-type: none;
  }
    
  button,
  input,
  select,
  textarea,
  label,
  a {
    outline: 0;
    box-shadow: none;
    -webkit-tap-highlight-color: $transparent;
    
    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  textarea {
    resize: none;
  }


  ::-webkit-scrollbar {
    width: 8px;
    height: 7px;
    background: #C4C4C4;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    width: 8px;
    background: #515151;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


  //***** CALENDAR ELEMENTS

  .CalendarDay {
    border: none;
    padding: 2px;
    &:before: {
      content: '';
      border: 1px solid white;
    }
    &:hover {
      border: none;
    }
  }

  .CalendarDay__selected, CalendarDay__selected_start, .CalendarDay__selected_end {
    background: #21569d;
    &:hover {
      background: #e4e7e7;
      color: #21569d;
    }
  }  
  
  .CalendarDay__hovered_span {
    color: white;
    background: #40bbf5;
    &:hover {
      background: #21569d;
      color: white;
    }
  }
  [class*="CalendarDay__selected_span"] {
    background: #40bbf5;
    &:hover {
      background: #e4e7e7;
      color: #21569d;
    }
  }

  .CalendarMonth_caption > strong {
    text-transform: capitalize;
  }

  .DayPicker {
    border-radius: 10px;
    overflow: hidden;
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .introjs-helperNumberLayer {
    display: none;
  }

  .introjs-tooltip {
    background: #007ad1;
    border-radius: 10px;
    div {
      font-family: Gotham-Book, sans-serif;
      color: white;
    }
  }

  .introjs-bullets {
    display: none;
  }

  .introjs-arrow {
    &.left {
      border-right-color:#007ad1 !important;
    }
    &.right {
      border-left-color: #007ad1 !important;
    }
    border-bottom-color: #007ad1 !important;
  }

  .introjs-tooltipbuttons {
    a {
      color: #007ad1;
      border: 0.6px solid #d5d5d5;
    }
  }

`;

export default elements;
