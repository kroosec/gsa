/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2017 Greenbone Networks GmbH
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

import CollectionList from '../gmp/collectionlist.js';

import Model from '../gmp/model.js';

import Filter from '../gmp/models/filter.js';

import {EntityCommand, EntitiesCommand} from '../gmp/command.js';

export const component = React.PropTypes.oneOfType([
  React.PropTypes.func,
  React.PropTypes.object,
]);

export const componentOrFalse = React.PropTypes.oneOfType([
  component,
  React.PropTypes.oneOf([false]),
]);

export const componentOrElement = React.PropTypes.oneOfType([
  component,
  React.PropTypes.element,
]);

export const number = React.PropTypes.oneOfType([
  React.PropTypes.number,
  React.PropTypes.string,
]);

export const icon =  React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.element,
]);

export const yesno = React.PropTypes.oneOf([
  "1", "0", 1, 0,
]);

export const id = React.PropTypes.string; // TODO improve checking for uuid

export const idOrZero = React.PropTypes.oneOfType([
  id,
  React.PropTypes.oneOf([0]),
]);

export const stringOrFalse = React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.oneOf([false]),
]);

export const collection = React.PropTypes.instanceOf(CollectionList);

export const arrayLike = React.PropTypes.oneOfType([
  React.PropTypes.array,
  collection,
]);

export const set = React.PropTypes.instanceOf(Set);

export const filter = React.PropTypes.instanceOf(Filter);

export const model = React.PropTypes.instanceOf(Model);

export const entitycommand = React.PropTypes.instanceOf(EntityCommand);
export const entitescommand = React.PropTypes.instanceOf(EntitiesCommand);

export default {
  arrayLike,
  collection,
  component,
  componentOrFalse,
  componentOrElement,
  entitycommand,
  entitescommand,
  filter,
  model,
  number,
  icon,
  id,
  idOrZero,
  set,
  stringOrFalse,
  yesno,
};

// vim: set ts=2 sw=2 tw=80: