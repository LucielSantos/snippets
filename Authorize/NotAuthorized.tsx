import React, { memo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  name?: string;
}

const NotAuthorizedComponent: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export const notAuthorizedName = 'notAuthorized';

NotAuthorizedComponent.defaultProps = { name: notAuthorizedName };

export const NotAuthorized = memo(NotAuthorizedComponent);
