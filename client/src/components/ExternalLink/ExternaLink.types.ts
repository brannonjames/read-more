import React from 'react';

export interface ExternalLinkProps {
  href: string
  tooltip: string
  children?: React.ReactNode
  IconComponent?: React.ComponentType
}