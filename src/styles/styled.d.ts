import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      headerBackground: string;
      title: string;
      undeline: string;
      iconColor: string;
    }
  }
}