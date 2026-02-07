export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
            アニマルパラダイス
          </h1>
          <p className="text-xl text-gray-700">
            五反田のピン芸人！話題のアニマルコスプレコンセプトサロン
          </p>
        </header>

        <main className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              ようこそ！
            </h2>
            <p className="text-gray-700 text-lg">
              ここはメインページです。コンテンツをここに追加してください。
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              店舗情報
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>営業時間: 12:00 - 24:00</p>
              <p>住所: 東京都品川区西五反田</p>
              <p>電話: 03-XXXX-XXXX</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
