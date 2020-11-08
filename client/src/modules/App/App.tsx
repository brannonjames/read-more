import React from 'react';
import styled from 'styled-components';
import Search from '../Search';
import BookDetails from '../BookDetails';

function App() {

  return (
    <Container>
      <Search />
      <OuterSectionContainer>
        <InnerSectionContainer>
          <LeftSection>
            <BookDetails />
          </LeftSection>
          <RightSection />
        </InnerSectionContainer>
      </OuterSectionContainer>
    </Container>
  );
}

export default App;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
`;

const OuterSectionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const InnerSectionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
`;

const Section = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const LeftSection = styled(Section)`
  background-color: plum;
`;

const RightSection = styled(Section)`
  background-color: coral;
`;
