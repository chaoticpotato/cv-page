import Styled from 'styled-components';

export const ScPastJob = Styled.article`
  .header {}
  .name { font-size: 1.5em; margin: 0; }
  .dates {}
  .body { margin: 1em 0; }

  & + & { margin-top: 1.5em; }
`;