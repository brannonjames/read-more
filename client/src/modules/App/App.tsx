import React from 'react';
import styled from 'styled-components';
import Search from '../Search';
import BookDetails from '../BookDetails';
import Chapters from '../Chapters';
import Download from '../Download';

function App() {

  return (
    <Container>
      <Search />
      <OuterSectionContainer>
        <InnerSectionContainer>
          <LeftSection>
            <BookDetails />
          </LeftSection>
          <RightSection>
            <Chapters />
          </RightSection>
          <Download />
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
  &,
  input,
  label,
  button,
  a {
    font-family: 'Noto Sans', sans-serif;
  }
`;

const OuterSectionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const InnerSectionContainer = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

const Section = styled.section`
  width: 50%;
  min-width: 600px;
  display: flex;
  flex-direction: column;
`;

const LeftSection = styled(Section)``;

const RightSection = styled(Section)``;
