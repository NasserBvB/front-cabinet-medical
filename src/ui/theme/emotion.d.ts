import '@emotion/react';
import theme from '.';

export type ITheme = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends ITheme { }
}
