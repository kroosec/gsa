/* Copyright (C) 2019 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
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

import {configure} from '@storybook/react';
import {initLocale, setLang} from 'gmp/locale/lang';
import {setLocale} from '../src/gmp/models/date.js';

function loadStories() {
  //require('../src/stories/index.js');
  require('../src/stories/textfield.js');
  require('../src/stories/passwordfield.js');
  require('../src/stories/numberfield.js');
  require('../src/stories/datepicker.js');
  require('../src/stories/button.js');
  require('../src/stories/checkbox.js');
  require('../src/stories/radio.js');
  require('../src/stories/textarea.js');
  require('../src/stories/spinner.js');
  require('../src/stories/filefield.js');
  require('../src/stories/formgroup.js');
  require('../src/stories/select.js');
  require('../src/stories/multiselect.js');
  require('../src/stories/timezoneselect.js');
  require('../src/stories/togglebutton.js');
  require('../src/stories/yesnoradio.js');
  require('../src/stories/confirmationdialog.js');
  require('../src/stories/mydialog.js');
  require('../src/stories/savedialog.js');
  require('../src/stories/containerdialog.js');
  // You can require as many stories as you need.
}

initLocale();
setLocale('en');

configure(loadStories, module);
