import React, { memo, useMemo, ReactNode, useCallback, Children } from "react";
import { TUserPermissionKey } from "types/authentication";
import { checkPolicy } from "utils/authentication";
import { authorizedName } from "./Authorized";
import { notAuthorizedName } from "./NotAuthorized";

const getAuthorizeComponent = (
  children: any,
  name: typeof notAuthorizedName | typeof authorizedName
) => {
  let selectedChild = null;

  Children.map(children, (child) => {
    if (child?.type?.type?.defaultProps?.name === name) {
      selectedChild = child;
    }
  });

  return selectedChild;
};

interface IProps {
  policy: TUserPermissionKey;
  children: ReactNode | ReactNode[];
  onlyClient?: boolean;
}

const AuthorizeViewComponent: React.FC<IProps> = ({
  policy,
  onlyClient,
  children,
}) => {
  const isAuthenticated = useMemo(
    () => checkPolicy({ policy, onlyClient: !!onlyClient }),
    [policy, onlyClient]
  );

  const conditionalRender = useCallback(
    (authorizedElement: ReactNode, notAuthorizedElement: ReactNode = null) => (
      <>{isAuthenticated ? authorizedElement : notAuthorizedElement}</>
    ),
    [isAuthenticated]
  );

  if (!Array.isArray(children)) {
    return conditionalRender(children);
  }

  const authorizedComponent = getAuthorizeComponent(children, authorizedName);

  if (authorizedComponent) {
    const notAuthorizedComponent = getAuthorizeComponent(
      children,
      notAuthorizedName
    );

    return conditionalRender(authorizedComponent, notAuthorizedComponent);
  }

  return conditionalRender(children);
};

export const AuthorizeView = memo(AuthorizeViewComponent);
