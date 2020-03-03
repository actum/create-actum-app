import * as React from 'react';
import styled from 'styled-components';

const B = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;

  color: white;
`;

const App: React.FC = () => <B>Hello, World!</B>;

export default App;
