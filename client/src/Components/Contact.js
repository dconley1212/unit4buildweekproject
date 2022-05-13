import React from "react";
import styled from "styled-components";

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

const Contact = () => {
  return (
    <StyledContactContainer>
      <h2>Questions?</h2>
      <p>The lead developer is Dave Conley.</p>
      <p>
        He can be reached by contacting him with any of the methods provided
        below
      </p>
      <ul>Email: dconley1989@gmail.com</ul>
      <ul> Phone: 617-909-2303</ul>
    </StyledContactContainer>
  );
};

export default Contact;
