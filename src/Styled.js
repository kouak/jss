// @flow

import React from 'react';
import injectSheet from 'react-jss';

import type { JSSProps } from 'react-jss';

type OwnProps = {
  text: string,
};

const style = {
  text: {
    background: 'red',
  },
};

type Props = OwnProps & JSSProps<typeof style>;

const Bar = ({ classes, text }: Props): React$Element<any> => {
  (classes.text: string);
  (classes.bla); // Raises an error
  return <div className={classes.text}>{text}</div>;
};

class Foo extends React.Component<void, Props, void> {
  render () {
    const { classes, text } = this.props;

    return <div className={classes.text}>{text}</div>;
  }
}

export const StyledFunc = injectSheet(style)(Bar);

const a = <StyledFunc text={2} />; // Raises an error

export const StyledCl = injectSheet(style)(Foo);

const b = <StyledCl />; // Raises an error
