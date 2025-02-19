/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { Button } from 'antd';
import './index.less';

interface Props {
  /**
   * 按钮类型 默认primary
   */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 点击事件  有交互的时候用这个
   */
  onClick?: Function;
}

/**
 * Button 组件
 * @link [antd button](https://ant.design/components/button-cn/)
 */

function FooFunction(props: Props) {
  const [loading, setLoading] = useState(false);
  const { onClick, type } = props;
  const handleClick = async () => {
    if (!onClick) return;
    if (loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      {...props}
      type={type}
      loading={loading}
      onClick={handleClick}
      className="base-btn"
    />
  );
}

FooFunction.defaultProps = {
  type: 'primary',
};

export default FooFunction;
