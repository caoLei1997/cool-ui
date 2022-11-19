import React, { isValidElement, ReactElement, ReactNode, useState } from 'react';
import type { FC } from 'react';
import { empty, getPrefixCls } from '@/utils';
import type { BaseType } from '@/constant/baseType';
import classNames from 'classnames';

import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import CSSMotion from 'rc-motion';

const iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  danger: CloseCircleFilled,
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

  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export type AlertType = Partial<AlertPropsType>;

const Alert: FC<AlertType> = (props) => {
  const {
    type,
    action,
    banner,
    closeIcon = <CloseOutlined />,
    closeable,
    closeText,
    description,
    showIcon,
    icon,
    message,
  } = props;
  const { onClose, afterClose, onMouseEnter, onMouseLeave } = props;

  const [close, setClose] = useState<boolean>(false);

  const handleClose = () => {
    console.log(111);

    setClose(true);
  };

  const prefixCls = getPrefixCls('alert');

  const isShowIcon = !showIcon;

  const alertCls = classNames(prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-description`]: description,
    [`${prefixCls}-no-icon`]: isShowIcon,
    [`${prefixCls}-banner`]: banner,
  });

  const enhancerIcon = () => {
    const iconType = iconMapFilled[type] || iconMapFilled['info'];
    if (icon) {
      if (!isValidElement(icon)) return;
      const classed = classNames(`${prefixCls}-icon`, {
        [(icon as ReactElement).props.className]: (icon as ReactElement).props.className,
      });
      return React.cloneElement(icon, { className: classed, ...icon.props });
    }
    return React.createElement(iconType, { className: `${prefixCls}-icon` });
  };

  // render
  const iconNode = <span className={`${prefixCls}-icon`}>{enhancerIcon()}</span>;

  const CloseNode = () => (
    <div className={`${prefixCls}-close`} onClick={handleClose}>
      {closeText ? (
        <span className={`${prefixCls}-close-text`}>{closeText}</span>
      ) : isValidElement(closeIcon) ? (
        closeIcon
      ) : null}
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
    <CSSMotion
      visible={!close}
      motionName={`${prefixCls}-motion`}
      motionAppear={false}
      motionEnter={false}
      onLeaveStart={(node) => ({
        maxHeight: node.offsetHeight,
      })}
    >
      {({ className: motionClass, style }) => {
        console.log('motionClass: ', motionClass);
        return (
          <div
            className={classNames(alertCls, motionClass)}
            data-show={!close}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {showIcon ? iconNode : null}
            {contentNode}
            {action ? actionNode : null}
            {closeable ? <CloseNode /> : null}
          </div>
        );
      }}
    </CSSMotion>
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
