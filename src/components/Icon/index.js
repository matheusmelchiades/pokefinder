import React from 'react';

import { Container } from './style';

import Arrow from '../../assets/icons/arrow/arrow@3x.png';
import Close from '../../assets/icons/close/close@3x.png';
import Next from '../../assets/icons/next/next@3x.png';
import RadioOff from '../../assets/icons/radio-off/radio-off@3x.png';
import RadioOn from '../../assets/icons/radio-on/radio-on@3x.png';
import SemiArrow from '../../assets/icons/semi-arrow/semi-arrow.svg';

const ICONS_PATH = {
  arrow: Arrow,
  close: Close,
  next: Next,
  'radio-off': RadioOff,
  'radio-on': RadioOn,
  'semi-arrow': SemiArrow,
};

export default function Icon({ name, src, ...props }) {
  const content = ICONS_PATH[name] || '';

  return content ? <Container src={content} alt={`icon-${name}`} {...props} /> : null;
}
