export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">中島 悠輔</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Backend Engineer | Go, GCP, DevOps</p>
          <p className="text-gray-600 dark:text-gray-300">yusukenakashima0701@gmail.com</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">職務要約</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Go言語とGCPによる堅牢なバックエンド開発に加え、React・NestJSを用いたフロント〜API開発まで幅広く対応。
            CI/CD整備やTerraformによるインフラ構築・改善といったDevOps領域も実績があり、課題解決力・新技術習得力・チーム連携力に秀でたエンジニアです。
            特にNFTトークン連携、決済API、Webhookなど複雑性の高い機能をリードし、海外開発チームとの英語コミュニケーション経験も保有しています。
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">技術スキル</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">バックエンド</h3>
              <div className="flex flex-wrap gap-2">
                {['Go', 'NestJS', 'PostgreSQL', 'gRPC', 'クリーンアーキテクチャ'].map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">フロントエンド</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Vue.js'].map((tech) => (
                  <span key={tech} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">インフラ・DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['GCP', 'Docker', 'Terraform', 'GitHub Actions', 'CircleCI'].map((tech) => (
                  <span key={tech} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">その他</h3>
              <div className="flex flex-wrap gap-2">
                {['Stripe', 'fincode', 'NFT', '英語コミュニケーション'].map((tech) => (
                  <span key={tech} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">活かせる強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '新技術（NestJS・React・Next.js）を短期間で習得し、本番開発に対応可能',
              'Stripe審査落ち、Webhook混同といった複雑な技術・運用課題を主体的に解決',
              'バックエンド採用後にSREへ転向し、DevOps業務を主導',
              'ベトナム開発チームとの英語仕様調整・資料連携など海外連携の実績あり'
            ].map((strength, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">{strength}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">職務経歴</h2>
          <div className="space-y-8">
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">クライメートテック企業（業務委託）</h3>
              <p className="text-gray-600 dark:text-gray-400">2024年5月 〜 現在 | フルスタックエンジニア</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Next.js', 'React', 'NestJS', 'PostgreSQL', 'Figma', 'クリーンアーキテクチャ'].map((tech) => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 東京都受託のカーボンオフセットプラットフォーム新規開発に参画</li>
                <li>• ginco（NFTサービス）との連携においてウォレット発行・ホワイトリスト調査・NFTトークン間取引機能をリード</li>
                <li>• Stripe審査不通時の代替決済手段提案、Webhook環境混同の特定・対応などリリースに向けた課題解決を主導</li>
                <li>• FigmaベースのUI設計に基づく管理画面開発と改善提案</li>
                <li>• 海外（ベトナム）開発チームとの英語コミュニケーションで仕様調整を円滑化</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">中古スマホ販売企業（正社員）</h3>
              <p className="text-gray-600 dark:text-gray-400">2020年10月 〜 2024年4月 | SRE／バックエンドエンジニア</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Go', 'GCP', 'Terraform', 'GitHub Actions', 'BigQuery'].map((tech) => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• CI/CD移行（CircleCI → GitHub Actions）の設計・実装</li>
                <li>• Terraform moduleの整備と管理</li>
                <li>• SLI・SLOの導入によるオブザーバビリティの強化</li>
                <li>• Firebaseから独自バックエンドへの移行支援</li>
                <li>• gRPC／Protobufによるマイクロサービス間連携の構築</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">システム開発会社（正社員）</h3>
              <p className="text-gray-600 dark:text-gray-400">2017年4月 〜 2020年9月 | バックエンドエンジニア</p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 在庫管理システム開発においてテックリード代理として設計・推進、特別賞（ハイパフォーマー）を受賞</li>
                <li>• 会計帳票システムにてAPI改修・バッチ処理実装、AngularによるUI対応にも従事</li>
                <li>• グルメサイト開発にてテストコード整備・API改修（OJTプロジェクト）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">学歴・その他</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">学歴</h3>
              <p className="text-gray-700 dark:text-gray-300">日本電子専門学校 情報システム開発科 卒業（2017年3月）</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">英語力</h3>
              <p className="text-gray-700 dark:text-gray-300">読み書きレベル、ベトナム海外拠点との英語によるテキストベースの仕様調整経験あり</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 中島 悠輔. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
