import React, { isValidElement, ReactElement, ReactNode } from 'react';
import type { FC } from 'react';
import { empty, getPrefixCls } from '@/utils';
import type { BaseType } from '@/constant/baseType';
import classNames from 'classnames';

import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';

const iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
};

export interface AlertPropsType {
  /** 自定义操作项 */
  action: ReactNode;

  /** 是否作用顶部 */
  banner: boolean;

  /** 是否显示关闭按钮 */
  closeable: boolean;

  /** 自定义关闭 */
  closeText: ReactNode;

  /** 自定义关闭按钮 */
  closeIcon: ReactNode;

  /** 辅助简介 */
  description: string;

  /** 是否显示图标 */
  showIcon: boolean;

  /** 图标 */
  icon: ReactNode;

  /** 提示内容 */
  message: string;

  /** 提示样式 */
  type: BaseType;

  /** 关闭时回调函数 */
  onClose: () => void;

  /** 关闭动画结束时回调函数 */
  afterClose: () => void;
}

export type AlertType = Partial<AlertPropsType>;

const Alert: FC<AlertType> = (props) => {
  const {
    type,
    action,
    banner,
    closeIcon,
    closeable,
    closeText,
    description,
    showIcon,
    icon,
    message,
  } = props;
  const { onClose, afterClose } = props;

  const prefixCls = getPrefixCls('alert');

  const isShowIcon = !showIcon;

  const classes = classNames(prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-description`]: description,
    [`${prefixCls}-no-icon`]: isShowIcon,
    [`${prefixCls}-banner`]: banner,
  });

  const enhancerIcon = () => {
    const iconType = iconMapFilled[type] || iconMapFilled['info'];
    console.log('iconType: ', iconType);
    if (icon) {
      if (!isValidElement(icon)) return;
      const classed = classNames(`${prefixCls}-icon`, {
        [(icon as ReactElement).props.className]: (icon as ReactElement).props.className,
      });
      return React.cloneElement(icon, { className: classed, ...icon.props });
    }
    console.log('iconType: ', iconType);

    return React.createElement(iconType, { className: `${prefixCls}-icon` });
  };

  // render
  const iconNode = (
    <span className={`${prefixCls}-icon`}>
      {/* {<CheckCircleFilled />} */}
      {enhancerIcon()}
    </span>
  );

  const closeNode = (
    <div className={`${prefixCls}-close`}>
      {closeText ? <span className={`${prefixCls}-close-text`}>{closeText}</span> : closeIcon}
    </div>
  );

  const actionNode = <div className={`${prefixCls}-action`}>{action}</div>;

  const contentNode = (
    <div className={`${prefixCls}-content`}>
      {message ? <div className={`${prefixCls}-message`}> {message}</div> : null}
      {description ? <div className={`${prefixCls}-description`}> {description}</div> : null}
    </div>
  );

  return (
    <div className={classes}>
      {showIcon ? iconNode : null}
      {contentNode}
      {action ? actionNode : null}
      {closeable ? closeNode : null}
    </div>
  );
};

Alert.defaultProps = {
  banner: false,
  closeable: false,
  showIcon: false,
  type: 'info',
  onClose: empty,
  afterClose: empty,
};
export default Alert;
