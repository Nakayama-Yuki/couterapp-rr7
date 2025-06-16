import { useState } from "react";

// カウンターページのメタデータを設定
export function meta() {
  return [
    { title: "カウンター - カウンターアプリ" },
    {
      name: "description",
      content: "ReactのuseStateを学習するためのカウンターアプリ",
    },
  ];
}

// カウンターコンポーネント
function Counter() {
  // useState を使用してカウンターの状態を管理
  // 初期値は0に設定
  const [count, setCount] = useState<number>(0);

  // カウントを1増やす関数
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // カウントを1減らす関数
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // カウントをリセットする関数
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-64 space-y-6 p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md">
      {/* カウンター表示 */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">カウンター</h2>
        <div className="text-6xl font-extrabold text-indigo-600 mb-4">
          {count}
        </div>
        <p className="text-gray-600">現在のカウント: {count}</p>
      </div>

      {/* ボタングループ */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* インクリメントボタン */}
        <button
          onClick={handleIncrement}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="カウントを1増やす">
          +1 増やす
        </button>

        {/* デクリメントボタン */}
        <button
          onClick={handleDecrement}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="カウントを1減らす">
          -1 減らす
        </button>

        {/* リセットボタン */}
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          aria-label="カウントをリセット">
          リセット
        </button>
      </div>

      {/* 状態の説明 */}
      <div className="text-sm text-gray-600 max-w-md text-center">
        <p className="mb-2">
          <strong>学習ポイント:</strong>
        </p>
        <ul className="text-left space-y-1">
          <li>• useState でローカル状態を管理</li>
          <li>• 状態更新関数での関数型更新</li>
          <li>• イベントハンドラーの実装</li>
          <li>• アクセシビリティの考慮</li>
        </ul>
      </div>
    </div>
  );
}

// カウンターページのメインコンポーネント
export default function CounterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ページヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          React カウンターアプリ
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Reactの
          <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-mono">
            useState
          </code>
          フックを使った状態管理の基本を学習できるシンプルなカウンターアプリです。
        </p>
      </div>

      {/* カウンターコンポーネント */}
      <div className="max-w-lg mx-auto">
        <Counter />
      </div>

      {/* ナビゲーションリンク */}
      <div className="text-center mt-8">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          ← ホームに戻る
        </a>
      </div>
    </div>
  );
}
