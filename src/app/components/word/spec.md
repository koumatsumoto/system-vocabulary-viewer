# Word

システム開発の用語データを表示するためのコンポーネント。
マスターデータの `data.json` の各データを表示するために使う。

## データ定義

```ts
// data.json のデータ
interface Word {
  number: string;
  name: string;
  alias?: string | undefined;
  definitions: {
    text: string;
    reference?: string;
  }[];
  confer?: string | undefined;
  example?: string | undefined;
  note?: string | undefined;
}
```
