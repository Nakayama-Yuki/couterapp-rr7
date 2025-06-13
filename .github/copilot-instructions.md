# Copilot Instructions for Counter App (React Router v7)

このプロジェクトは、最新の React Router v7 と Vite、TypeScript を使用したモダンな Web アプリケーションです。以下の指示に従ってコードを生成してください。

## 技術スタック

### コアフレームワーク・ライブラリ

- **React**: 19.1.0 - 最新の React v19 を使用
- **React Router**: 7.6.2 - 最新の React Router v7 (Vite ベース)
- **TypeScript**: 5.8.3 - 最新の TypeScript v5

### 開発ツール

- **Vite**: 6.3.5 - 最新の Vite v6 を使用
- **pnpm**: パッケージマネージャー（npm/yarn ではなく pnpm を使用）
- **Node.js**: LTS バージョン推奨

### スタイリング

- **Tailwind CSS**: 4.1.10 - 最新の Tailwind CSS v4 を使用
- **@tailwindcss/vite**: 4.1.10 - Vite プラグイン使用

## コーディング規約

### 基本原則

- **常に関数コンポーネントを使用**: `const` ではなく `function` で React コンポーネントを定義
- **命名規則**:
  - 変数名: camelCase
  - クラス名: PascalCase
  - コンポーネント名: PascalCase
- **コメント**: 常にコードにコメントを追加
- **アクセシビリティ**: WCAG ガイドラインに従う
- **パフォーマンス**: React のベストプラクティスに従う

### React コンポーネントの書き方

```typescript
// ✅ 推奨: function を使用
function MyComponent({ title }: { title: string }) {
  // コンポーネントのロジックをここに記述
  return (
    <div className="p-4">
      <h1>{title}</h1>
    </div>
  );
}

// ❌ 非推奨: const を使用しない
const MyComponent = ({ title }: { title: string }) => {
  /* ... */
};
```

### React Router v7 の使用方法

#### ファイルベースルーティング

- `app/routes/` ディレクトリ内にルートファイルを配置
- `routes.ts` でルート設定を管理
- SSR がデフォルトで有効（`react-router.config.ts` で設定）

#### ルートコンポーネントの例

```typescript
import type { Route } from "./+types/home";

// ルートコンポーネントは function で定義
function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">ホームページ</h1>
      {/* コンテンツ */}
    </div>
  );
}

export default HomePage;
```

### Tailwind CSS v4 の使用方法

#### 基本的な使い方

```typescript
function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      {children}
    </button>
  );
}
```

#### レスポンシブデザイン

```typescript
function ResponsiveCard() {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* カードコンテンツ */}
      </div>
    </div>
  );
}
```

### TypeScript の活用

#### 型定義

```typescript
// Props の型定義
interface ComponentProps {
  title: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// React Router の型サポート
import type { Route } from "./+types/counter";

function CounterPage({ loaderData }: Route.ComponentProps) {
  // 型安全なコンポーネント実装
}
```

### 状態管理

#### useState を使用したローカル状態

```typescript
import { useState } from "react";

function Counter() {
  // 状態の型を明示的に指定
  const [count, setCount] = useState<number>(0);

  // インクリメント関数
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // デクリメント関数
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">カウンター: {count}</h2>
      <div className="flex space-x-2">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          +1
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          -1
        </button>
      </div>
    </div>
  );
}
```

## プロジェクト構造

```
couterapp-rr7/
├── app/                    # アプリケーションコード
│   ├── root.tsx           # ルートコンポーネント
│   ├── routes.ts          # ルート設定
│   ├── app.css           # グローバルスタイル
│   ├── routes/           # ページコンポーネント
│   └── welcome/          # ウェルカムページアセット
├── public/               # 静的ファイル
├── package.json          # 依存関係
├── vite.config.ts        # Vite設定
├── tsconfig.json         # TypeScript設定
├── react-router.config.ts # React Router設定
└── pnpm-lock.yaml        # pnpm ロックファイル
```

## 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# プロダクションビルド
pnpm build

# プロダクションサーバー起動
pnpm start

# 型チェック
pnpm typecheck
```

## ベストプラクティス

### パフォーマンス

- React.memo() を適切に使用
- useMemo() と useCallback() でメモ化
- Lazy loading でコンポーネントを分割

### アクセシビリティ

- semantic HTML を使用
- ARIA attributes を適切に設定
- キーボードナビゲーションをサポート
- 適切なコントラスト比を維持

### セキュリティ

- XSS 対策として dangerouslySetInnerHTML を避ける
- 適切な入力検証を実装
- CSP ヘッダーを設定

## 注意事項

1. **React Router v7**: 従来の React Router v6 とは大きく異なるため、v7 の仕様に従う
2. **Tailwind CSS v4**: v3 から大幅に変更されているため、v4 の新機能を活用
3. **React 19**: 新機能（Concurrent Features 等）を適切に活用
4. **pnpm**: npm/yarn ではなく pnpm を使用
5. **TypeScript**: 厳密な型チェックを有効にしているため、型安全なコードを記述

このプロジェクトでコードを生成する際は、上記の指示に従って、モダンで保守性の高いコードを作成してください。
