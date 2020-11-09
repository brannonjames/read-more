import { default as React } from 'react';
import styled from 'styled-components';
import withObserver from "../../hocs/withObserver";
import ChaptersStore from "./Chapters.store";
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import ListItemText from '../../components/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CloseIcon from '@material-ui/icons/Close';

//
// MAIN COMPONENT
//
const Chapters = (props: IChaptersProps) => {
 const { store } = props;

  return (
    <Container>
      <ContainerDescription>Use the search bar above to add chapters</ContainerDescription>
      <List>
        {
          store.chapters.map((chapter, index) => {
            return (
              <ListItem key={chapter.id} divider>
                <ListItemText
                  primary={chapter.title}
                  secondary={`Chatper ${index + 1}`}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => store.removeChapter(chapter.id)}>
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
    </Container>
  )
};

export default withObserver(Chapters, ChaptersStore.sharedInstance);

// TYPES
export interface IChaptersProps {
  store: ChaptersStore
}

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-align: center;
`;

const ContainerDescription = styled.p`
  font-style: italic;
  margin-bottom: 24px;
`;
