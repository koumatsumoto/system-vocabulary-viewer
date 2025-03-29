export interface WordData {
  number: string;
  name: string;
  alias?: [string, ...string[]];
  definitions: {
    text: string;
    reference?: string;
  }[];
  confer?: [string, ...string[]];
  example?: string;
  note?: string;
}
