/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2016 - 2017 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import React from 'react';

import {classes} from '../../utils.js';

import './css/icon.css';

export const withIconCss = Component => {
  function IconCss(props) {
    let {size = 'small', className, onClick, ...other} = props;

    if (size === 'small') {
      className = classes('icon', 'icon-sm', className);
    }
    else if (size === 'medium') {
      className = classes('icon', 'icon-m', className);
    }
    else if (size === 'large') {
      className = classes('icon', 'icon-lg', className);
    }
    else {
      className = classes('icon', className);
    }

    if (onClick) {
      className = classes(className, 'icon-button');
    }
    return <Component {...other} onClick={onClick} className={className}/>;
  };

  IconCss.propTypes = {
    className: React.PropTypes.string,
    size: React.PropTypes.oneOf([
      'small', 'medium', 'large',
    ]),
    onClick: React.PropTypes.func,
  };

  return IconCss;
};

class IconComponent extends React.Component {

  constructor(...args) {
    super(...args);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let {value, onClick} = this.props;

    if (onClick) {
      onClick(value);
    }
  }

  render() {
    const {img, href, alt = '', value, onClick, ...other} = this.props; // eslint-disable-line no-unused-vars
    let img_path = process.env.PUBLIC_URL + '/img/' + img; // eslint-disable-line no-process-env,no-undef

    if (href) {
      return (
        <a {...other} onClick={this.handleClick} href={href}>
          <img src={img_path} alt={alt}/>
        </a>
      );
    }
    return (
      <img {...other} onClick={this.handleClick} alt={alt} src={img_path}/>
    );
  }
}

IconComponent.propTypes = {
  alt: React.PropTypes.string,
  img: React.PropTypes.string.isRequired,
  size: React.PropTypes.string,
  href: React.PropTypes.string,
  value: React.PropTypes.any,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export const Icon = withIconCss(IconComponent);

export default Icon;

// vim: set ts=2 sw=2 tw=80:
