/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-21 09:43:29
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-12 13:52:26
 */
import * as React from 'react';

export interface TemplateProps {
  optionalString?: string;
  optionalNumber?: number;
  optionalObject?: Object;
  optionalSymbol?: symbol;
  // optionalArray?: Array,
  optionalBool?: boolean;
  // optionalFunc?:function,
  optionalMulti?: React.ReactNode;
  optionalNode?: any;
}

export default class Template extends React.Component<TemplateProps, any> {}
