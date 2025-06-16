import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ホーム - カウンターアプリ" },
    {
      name: "description",
      content: "Reactの状態管理を学習するためのカウンターアプリへようこそ",
    },
  ];
}

// ナビゲーションカードコンポーネント
function NavigationCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-200 hover:border-indigo-300">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3" aria-hidden="true">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 text-indigo-600 font-medium">詳しく見る →</div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* ヘッダーセクション */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            React カウンターアプリ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reactの
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-mono">
              useState
            </code>
            フックを使った状態管理の基本を学習できるシンプルなアプリケーションです。
            <br />
            React Router v7を使用したルーティングも体験できます。
          </p>
        </div>

        {/* 機能紹介セクション */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <NavigationCard
            title="カウンター"
            description="ReactのuseStateフックを使用したシンプルなカウンター機能です。状態の管理と更新方法を学習できます。"
            href="/counter"
            icon="🔢"
          />
          <div className="p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📚</span>
              <h3 className="text-xl font-semibold text-gray-900">
                学習ポイント
              </h3>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                useState フックの基本的な使い方
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                関数型状態更新（prevState パターン）
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                イベントハンドラーの実装
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                React Router v7 でのルーティング
              </li>
            </ul>
          </div>
        </div>

        {/* 技術スタック紹介 */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            使用技術
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="font-semibold text-gray-900">React 19</div>
              <div className="text-sm text-gray-600">UIライブラリ</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🛣️</div>
              <div className="font-semibold text-gray-900">React Router v7</div>
              <div className="text-sm text-gray-600">ルーティング</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold text-gray-900">Tailwind CSS v4</div>
              <div className="text-sm text-gray-600">スタイリング</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">📘</div>
              <div className="font-semibold text-gray-900">TypeScript v5</div>
              <div className="text-sm text-gray-600">型安全性</div>
            </div>
          </div>
        </div>

        {/* 開始ボタン */}
        <div className="text-center mt-12">
          <a
            href="/counter"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="mr-2">🚀</span>
            カウンターを始める
          </a>
        </div>
      </div>
    </div>
  );
}
