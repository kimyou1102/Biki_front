export interface TextProps {
  sub?: string;
  title?: string;
  date?: string;
}

export interface MainProps extends TextProps {
  src?: string;
  url: string;
}
