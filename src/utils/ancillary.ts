import { PREFIX_CLS } from '@/constant';

const empty = () => {};

const getPrefixCls = (suffixCls: string) => {
  if (!suffixCls) return PREFIX_CLS;
  return `${PREFIX_CLS}-${suffixCls}`;
};

export { empty, getPrefixCls };
