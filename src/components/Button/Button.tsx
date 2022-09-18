import React from 'react';
import type { ReactNode, FC } from 'react';
import classnames from 'classnames';
import { empty, getPrefixCls } from '@/utils';

// import './style.scss'

type ButtonType =
  | 'primary'
  | 'danger'
  | 'warning'
  | 'info'
  | 'sweet'
  | 'cyan'
  | 'success'
  | 'default'
  | 'text'
  | 'dashed'
  | 'link';

type ShapeType = 'default' | 'circle' | 'round';

type SizeType = 'large' | 'middle' | 'small';

interface ButtonPropsType {
  component: string;
  block: boolean;
  type: ButtonType;
  disabled: boolean;
  ghost: boolean;
  href: string;
  btnType: string;
  icon: ReactNode;
  loading: boolean;
  shape: ShapeType;
  size: SizeType;
  target: string;
  children: React.ReactNode;
  className: string;
  texture: boolean;
  onClick: (event: React.SyntheticEvent) => void;
}
type ButtonPropsTypePartial = Partial<ButtonPropsType>; // ts高级类型 全部加上问号 type？：BtnType

const typeIsLink = (type: ButtonType): boolean => {
  return (type as string) === 'link';
};

const typeIsUnBordered = (type: ButtonType) => {
  return type === 'link' || type === 'text';
};

const Button: FC<ButtonPropsTypePartial> = (props) => {
  const {
    component,
    block,
    type,
    disabled,
    ghost,
    href,
    btnType,
    icon,
    loading,
    shape,
    size,
    target,
    children,
    className,
    texture,
    ...otherProps
  } = props;

  const { onClick } = props;

  const prefixCls = getPrefixCls('btn');

  const sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined,
  };

  const sizeCls = size ? sizeClassNameMap[size] : '';

  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-disabled`]: href && disabled,
      [`${prefixCls}-ghost`]: ghost && !typeIsUnBordered(type as ButtonType),
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-texture`]: texture,

      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    },
    className,
  );

  // icon loading
  // const iconNode =  icon ? (icon) : (<LoadingIcon/>)

  const buttonTag = href && typeIsLink(type as ButtonType) ? 'a' : component;

  let buttonComponentProps: any = {
    disabled,
    type: btnType,
    onClick,
  };

  if (href) {
    buttonComponentProps = {
      className: classes,
      href: !disabled ? href : undefined,
      ...otherProps,
      target,
      onClick: !disabled ? onClick : undefined,
    };
  }
  // let enhanceChildrenStyle: any = null;
  // href ? enhanceChildrenStyle = { cursor: disabled ? 'not-allowed' : 'auto' };
  // const enhanceChildren = <span style={enhanceChildrenStyle}>{children}</span>;

  const ButtonComponent = React.createElement(
    buttonTag as string,
    {
      className: classes,
      ...otherProps,
      ...buttonComponentProps,
    },
    children,
  );

  return <> {ButtonComponent}</>;
};

Button.defaultProps = {
  type: 'default',
  component: 'button',
  block: false,
  disabled: false,
  ghost: false,
  btnType: 'button',
  loading: false,
  shape: 'default',
  size: 'middle',
  texture: false,
  onClick: empty,
};
export default Button;
