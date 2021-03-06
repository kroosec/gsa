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
import Rejection from '../rejection';

describe('Rejection tests', () => {
  test('should create error rejection by default', () => {
    const rejection = new Rejection();

    expect(rejection.reason).toEqual(Rejection.REASON_ERROR);
    expect(rejection.message).toEqual('');
    expect(rejection.xhr).toBeUndefined();
    expect(rejection.error).toBeUndefined();
    expect(rejection.stack).toBeDefined();
    expect(rejection.isError()).toEqual(true);
  });

  test('should create error rejection', () => {
    const xhr = {foo: 'bar'};
    const error = new Error('foobar');
    const rejection = new Rejection(
      xhr,
      Rejection.REASON_ERROR,
      'an error',
      error,
    );

    expect(rejection.reason).toEqual(Rejection.REASON_ERROR);
    expect(rejection.message).toEqual('an error');
    expect(rejection.xhr).toEqual(xhr);
    expect(rejection.error).toEqual(error);
    expect(rejection.stack).toBeDefined();
    expect(rejection.isError()).toEqual(true);
  });

  test('should create unauthorized rejection', () => {
    const xhr = {foo: 'bar'};
    const rejection = new Rejection(xhr, Rejection.REASON_UNAUTHORIZED);

    expect(rejection.reason).toEqual(Rejection.REASON_UNAUTHORIZED);
    expect(rejection.message).toEqual('');
    expect(rejection.xhr).toEqual(xhr);
    expect(rejection.error).toBeUndefined();
    expect(rejection.stack).toBeDefined();
    expect(rejection.isError()).toEqual(false);
  });

  test('should create cancel rejection', () => {
    const xhr = {foo: 'bar'};
    const rejection = new Rejection(xhr, Rejection.REASON_CANCEL, 'foo');

    expect(rejection.reason).toEqual(Rejection.REASON_CANCEL);
    expect(rejection.message).toEqual('foo');
    expect(rejection.xhr).toEqual(xhr);
    expect(rejection.error).toBeUndefined();
    expect(rejection.stack).toBeDefined();
    expect(rejection.isError()).toEqual(false);
  });

  test('should create timeout rejection', () => {
    const xhr = {foo: 'bar'};
    const rejection = new Rejection(xhr, Rejection.REASON_TIMEOUT, 'foo');

    expect(rejection.reason).toEqual(Rejection.REASON_TIMEOUT);
    expect(rejection.message).toEqual('foo');
    expect(rejection.xhr).toEqual(xhr);
    expect(rejection.error).toBeUndefined();
    expect(rejection.stack).toBeDefined();
    expect(rejection.isError()).toEqual(false);
  });

  test('should allow to change message', () => {
    const rejection = new Rejection({}, Rejection.REASON_ERROR, 'foo');

    expect(rejection.message).toEqual('foo');

    rejection.setMessage('bar');

    expect(rejection.message).toEqual('bar');
  });
});
