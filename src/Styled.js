// @flow

import React from 'react'
import injectSheet from 'react-jss'
import type { Injector } from 'react-jss'

const style = {
    text: {
        background: 'red'
    }
}

type Props = {
    text: string,
    classes: any
}

const component = ({classes, text}: Props) => (<div className={classes.text}>{text}</div>)

const injector: Injector<Props, any, any, any> = injectSheet(style)

export const Styled = injector(component)