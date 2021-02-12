import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import {ExternalLinkProps} from "./ExternaLink.types";

const ExternalLink = (props: ExternalLinkProps) => {
  const { href, tooltip, children, IconComponent } = props;
  return (
    <Tooltip
      title={tooltip}
      placement="top"
    >
      <StyledAnchor
        href={href}
        aria-label={tooltip}
        target="_blank"
        onClick={event => event.stopPropagation()}
      >
        { IconComponent && <IconComponent />}
        { children }
      </StyledAnchor>
    </Tooltip>
  )
};

export default ExternalLink;

const StyledAnchor = styled.a`
  color: black
`;