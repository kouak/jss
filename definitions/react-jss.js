declare module 'react-jss' {
  declare type FunctionComponent<P> = (props: P) => ?React$Element<any>;
  declare type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;

  declare type Klasses<CSS> = {
    [classname: $Keys<CSS>]: string,
  };

  declare export type JSSProps<CSS> = {
    classes: Klasses<CSS>,
    sheet: {
      attached: boolean,
      classes: Klasses<CSS>,
      deployed: boolean,
      linked: boolean,
      options: Object,
      renderer: mixed,
      rules: mixed,
    },
  };

  declare export default function injectSheet<Props, State, DefaultProps, CSS>(
    CSS: CSS,
  ): (
    component:
      | ClassComponent<DefaultProps, Props, State>
      | FunctionComponent<Props>,
  ) => ClassComponent<DefaultProps, $Diff<Props, JSSProps<CSS>>, void>;
}
