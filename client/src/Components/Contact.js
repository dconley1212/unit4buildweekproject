import React from "react";
import styled from "styled-components";

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #d3d3d3;
`;

const StyledContactTitle = styled.h2`
  margin: 2rem 3rem;
`;

const StyledContactParagraphs = styled.p`
  margin: 1rem 3rem;
  color: black;
`;

const Contact = () => {
  return (
    <StyledContactContainer>
      <StyledContactTitle>Questions? Something went wrong?</StyledContactTitle>
      <StyledContactParagraphs>
        Contact Dave Conley, who is the Lead Developer.
      </StyledContactParagraphs>
      <StyledContactParagraphs>
        Email: dconley1989@gmail.com
      </StyledContactParagraphs>
      <StyledContactParagraphs> Phone: 617-909-2303</StyledContactParagraphs>
    </StyledContactContainer>
  );
};

export default Contact;
