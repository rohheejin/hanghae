import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StNav>
      <p>My Todo List</p>
      <p>React</p>
    </StNav>
  );
};

export default Header;

const StNav = styled.div`
  height: 50px;

  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
