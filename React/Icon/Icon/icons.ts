import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons/lib';
import { MdClose as Close } from 'react-icons/md';
import styled, { css, DefaultTheme } from 'styled-components';

type TColor = keyof DefaultTheme['colors'];
type TSize = number;
type TMargin = number | string;

export interface IIcon {
  iconColor?: TColor;
  /** If it is `number`, it will be in `rem` */
  iconSize?: TSize;
  /** If it is `number`, it will be in `rem` */
  margin?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginTop?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginRight?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginBottom?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginLeft?: TMargin;
  clickable?: boolean;
  /** If it is `true`, not add css prop ``color` */
  notColor?: boolean;
  onClick?: MouseEventHandler<SVGElement>;
}

const getMargin = (margin: TMargin) =>
  margin ? (typeof margin === 'number' ? `${margin}rem` : margin) : 'invalid';

const getSize = (size: TSize) => (typeof size === 'number' ? `${size}rem` : size);

const getColor = (color: TColor, theme: DefaultTheme) => theme.colors[color];

const addStyle = (Icon: IconType) => styled(Icon)<IIcon>`
  ${({ iconColor, notColor, theme }) =>
    !notColor &&
    css`
      color: ${iconColor ? getColor(iconColor, theme) : 'inherit'};
    `};

  font-size: ${({ iconSize = 1 }) => getSize(iconSize)};

  margin-top: ${({ marginTop = 0 }) => getMargin(marginTop)};
  margin-right: ${({ marginRight = 0 }) => getMargin(marginRight)};
  margin-bottom: ${({ marginBottom = 0 }) => getMargin(marginBottom)};
  margin-left: ${({ marginLeft = 0 }) => getMargin(marginLeft)};
  margin: ${({ margin = 0 }) => getMargin(margin)};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: filter 0.2s;

      :hover {
        filter: brightness(80%);
      }

      :active {
        filter: brightness(70%);
      }
    `}
`;

export const icons = {
  close: addStyle(Close),
};
