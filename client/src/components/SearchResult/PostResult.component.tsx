import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExternalLink from '../ExternalLink/ExternalLink.component';
import SearchResult from './SearchResult.component';
import {PostResultProps} from "./SearchResult.types";

const PostResult = (props: PostResultProps) => {
  const { post, onClick, isSelected } = props;
  return (
    <SearchResult onClick={() => onClick(post)}>
      <Checkbox
        checked={isSelected}
        onClick={event => {
          event.stopPropagation();
          onClick(post)}
        }
      />
      <PostDetails>
        { post.title }
      </PostDetails>
      <ExternalLink
        href={post.url}
        tooltip="Open post in Reddit"
        IconComponent={OpenInNewIcon}
      />
    </SearchResult>
  )
};

export default PostResult;

const PostDetails = styled.div`
  flex: 1;
  padding: 0 6px;
`;