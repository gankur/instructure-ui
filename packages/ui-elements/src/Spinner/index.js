/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Spinner as UISpinner } from '@instructure/ui-spinner'
import { deprecated } from '@instructure/ui-react-utils'
import { themeable, ThemeablePropTypes } from '@instructure/ui-themeable'
import { testable } from '@instructure/ui-testable'

import theme from './theme'

/**
---
category: components/deprecated
id: DeprecatedSpinner
---
**/
@deprecated('7.0.0', null, 'Use Spinner from ui-spinner instead.')
@testable()
@themeable(theme)
class Spinner extends Component {
  static propTypes = {
    /**
    * Give the spinner a title to be read by screenreaders (Deprecated)
    */
    title: PropTypes.string,
    /**
    * Give the spinner a title to be read by screenreaders
    */
    renderTitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    /**
    * Different-sized spinners
    */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /**
    * Different color schemes for use with light or dark backgrounds
    */
    variant: PropTypes.oneOf(['default', 'inverse']),
    /**
    * Valid values are `0`, `none`, `auto`, `xxx-small`, `xx-small`, `x-small`,
    * `small`, `medium`, `large`, `x-large`, `xx-large`. Apply these values via
    * familiar CSS-like shorthand. For example: `margin="small auto large"`.
    */
    margin: ThemeablePropTypes.spacing,
    elementRef: PropTypes.func,
    as: PropTypes.elementType
  }

  static defaultProps = {
    as: 'div',
    size: 'medium',
    variant: 'default',
    margin: undefined,
    elementRef: undefined,
    renderTitle: undefined,
    title: undefined
  }

  render () {
    return <UISpinner {...this.props} />
  }
}


export default Spinner
export { Spinner }
