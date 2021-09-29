import React, { memo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  name?: string;
}

const AuthorizedComponent: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export const authorizedName = 'authorized';

AuthorizedComponent.defaultProps = { name: authorizedName };

export const Authorized = memo(AuthorizedComponent);
