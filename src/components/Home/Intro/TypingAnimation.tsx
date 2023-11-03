import styled from 'styled-components';

export const Typing = styled.div`
  height: 35px;
  white-space: nowrap;
  font-family: 'Source Code Pro', monospace;
  position: relative;

  animation: animated-text 2s steps(30, end) 1s 1 normal both;

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 570px;
    }
  }

  @media screen and (max-width: 767px) {
    margin: auto;
  }
`;

export const TextCursor = styled.div`
  border-bottom: solid 3px var(--brand);
  position: absolute;
  right: -10px;
  width: 15px;

  animation: animated-cursor 600ms steps(30, end) infinite;

  @keyframes animated-cursor {
    from {
      border-bottom-color: var(--brand);
    }
    to {
      border-bottom-color: transparent;
    }
  }
`;
