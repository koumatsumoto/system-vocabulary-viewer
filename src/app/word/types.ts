export interface WordData {
  number: string;
  name: string;
  alias?: string;
  definitions: {
    text: string;
    reference?: string;
  }[];
  confer?: string;
  example?: string;
  note?: string;
}
