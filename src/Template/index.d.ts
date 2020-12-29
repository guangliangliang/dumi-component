/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-21 09:43:29
 * @LastEditors: unicom
 * @LastEditTime: 2020-12-29 12:14:19
 */
import * as React from 'react';
export interface TemplateProps {
  optionalString?: string;
  optionalNumber?: number;
  optionalObject?: Object;
  optionalSymbol?: Symbol;
  // optionalArray?: Array,
  optionalBool?: boolean;
  // optionalFunc?:function,
  optionalMulti?: React.ReactNode;
  optionalNode?: any;
}

export default class Template extends React.Component<TemplateProps, any> {}
