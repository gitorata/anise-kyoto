import React from 'react';

export default function AniseKyotoHP() {
  return (
    <div className="bg-[#001830] text-white font-sans selection:bg-yellow-400 selection:text-[#001830]">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-[100] w-full bg-[#001830]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-black italic tracking-tighter">
            FC ANISE <span className="text-yellow-400">KYOTO</span>
          </div>
          <div className="text-[10px] font-bold bg-yellow-400 text-[#001830] px-2 py-1 rounded-sm uppercase tracking-tighter">
            Official Site
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* 画像エリア */}
        <div className="relative h-[55vh] w-full overflow-hidden">
          <img 
            src="/images/hero.jpg" 
            className="absolute h-[120%] w-full object-cover object-top -top-[20%]" 
            alt="FC Anise Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001830] via-transparent to-transparent" />
        </div>
        
        {/* テキストエリア */}
        <div className="relative bg-[#001830] p-8 pb-16">
          <h1 className="text-5xl font-black italic leading-[1.1] mb-6 tracking-tighter">
            目指せ、<br />
            <span className="text-yellow-400 text-6xl">関西リーグ昇格。</span>
          </h1>
          <p className="text-[14px] font-medium text-gray-200 leading-relaxed">
            京都で、もう一度。本気のサッカーを。<br />
            FCアニース京都、2026年シーズン始動。
          </p>
        </div>
      </section>

      {/* --- TICKER --- */}
      <div className="bg-yellow-400 text-[#001830] py-3 overflow-hidden border-y-2 border-[#001830]">
        <div className="flex whitespace-nowrap animate-marquee font-black italic text-lg uppercase">
          <span className="mx-8">Next Match: 2026.04 vs ???</span>
          <span className="mx-8">●</span>
          <span className="mx-8">Join the Team: Now Recruiting</span>
          <span className="mx-8">●</span>
          <span className="mx-8">Next Match: 2026.04 vs ???</span>
        </div>
      </div>

      {/* --- HISTORY --- */}
      <section className="relative py-24 px-8 overflow-hidden">
        <img 
          src="/images/history.jpg" 
          className="absolute inset-0 h-full w-full object-cover opacity-10 grayscale" 
          alt="History Background"
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-black italic mb-12 border-l-8 border-yellow-400 pl-4">HISTORY</h2>
          <div className="space-y-10">
            <div className="group">
              <span className="block text-5xl font-black text-yellow-400 italic leading-none">2025</span>
              <p className="text-xl font-bold tracking-tight mt-2">京都府2部リーグ 優勝 & 昇格</p>
            </div>
            <div className="group">
              <span className="block text-5xl font-black opacity-30 italic leading-none">2024</span>
              <p className="text-xl font-bold tracking-tight mt-2">京都府3部リーグ 優勝 & 昇格</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pt-6 border-t border-white/10">
              創設30年。向日市を拠点に、京都市・乙訓地域の情熱を背負い、FCアニースは再び加速する。
            </p>
          </div>
        </div>
      </section>

      {/* --- RECENT RESULTS --- */}
      <section className="bg-[#001020] py-20 px-8">
        <h2 className="text-2xl font-black italic text-yellow-400 uppercase tracking-tight">
          Last Season Results
        </h2>
        <p className="text-white font-black text-xl mb-8 flex items-center gap-2">
          <span className="bg-yellow-400 text-[#001020] px-2 py-0.5 text-xs transform -skew-x-12">WINNER</span>
          2部リーグ優勝 & 1部昇格
        </p>

        <div className="space-y-3">
          {[
            { vs: "FCエスペルト", score: "4-0" },
            { vs: "ジョイフルFC", score: "10-0" },
            { vs: "ヌメロカトルエゼ", score: "2-2" },
            { vs: "デポルターレ城陽", score: "3-1" },
            { vs: "ウラノス", score: "4-0" },
            { vs: "SKブリンク", score: "5-1" },
            { vs: "玉露ユナイテッド", score: "1-1" },
          ].map((r, i) => (
            <div key={i} className="flex justify-between items-center bg-[#001830] p-4 border-l-4 border-yellow-400 shadow-lg">
              <span className="font-bold text-sm text-gray-100">{r.vs}</span>
              <span className="font-black italic text-xl text-yellow-400">{r.score}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- PLAYER RECRUIT --- */}
      <section className="relative py-24 px-8 overflow-hidden bg-black">
        <img 
          src="/images/player.jpg" 
          className="absolute inset-0 h-full w-full object-cover opacity-40" 
          alt="Player"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001830] to-transparent opacity-90" />
        <div className="relative z-10">
          <h2 className="text-4xl font-black italic mb-6 leading-none">
            少数精鋭、<br /><span className="text-yellow-400 text-5xl uppercase">即戦力募集。</span>
          </h2>
          <p className="mb-8 font-bold text-lg leading-snug">
            現在、部員数は20名。<br />
            チーム加入＝即戦力です。
          </p>
          <div className="bg-white/5 backdrop-blur-md p-6 border border-white/20 mb-8">
            <h3 className="font-black text-yellow-400 text-[10px] tracking-[0.2em] mb-3 uppercase">Member Profile</h3>
            <p className="text-[11px] leading-loose text-gray-200">
              ロンドンジャパニーズ / 京都サンガ / 関西大学 / 駒澤大学 / 獨協大学 / 滝川第二高校 / 立正大湘南高校 / 京都橘高校 / 洛北高校 / 久御山高校 / 桂高校 ほか
            </p>
          </div>
          <ul className="space-y-3 text-sm font-bold">
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400" /> 練習 毎週木曜 20:00 (向日市)</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400" /> 年会費 24,000円</li>
          </ul>
        </div>
      </section>

      {/* --- PARTNER --- */}
      <section id="partner" className="relative py-24 px-8 overflow-hidden">
        <img 
          src="/images/partner.jpg" 
          className="absolute inset-0 h-full w-full object-cover opacity-20" 
          alt="Partner Background"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-black italic mb-6 inline-block border-b-4 border-yellow-400">PARTNER</h2>
          <p className="font-black text-lg mb-6 leading-relaxed">
            FCアニース京都と共に、<br />
            京都を熱く盛り上げませんか？
          </p>
          <p className="text-sm text-gray-300 mb-10 leading-relaxed text-left">
            京都市・乙訓地域のスポーツ活性化を目指す我々の活動にご賛同いただけるパートナーを募集しています。
          </p>
          <button className="w-full bg-yellow-400 text-[#001830] py-5 font-black tracking-tighter text-lg active:scale-95 transition-transform">
            スポンサー・パートナーお問い合わせ
          </button>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="py-24 px-8 bg-[#001020]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black italic tracking-tighter underline decoration-yellow-400 underline-offset-8">CONTACT</h2>
        </div>
        <form className="space-y-8">
          <input type="text" className="w-full bg-transparent border-b-2 border-white/20 py-2 outline-none focus:border-yellow-400 transition-colors" placeholder="NAME" />
          <input type="email" className="w-full bg-transparent border-b-2 border-white/20 py-2 outline-none focus:border-yellow-400 transition-colors" placeholder="EMAIL" />
          <textarea rows={4} className="w-full bg-transparent border-b-2 border-white/20 py-2 outline-none focus:border-yellow-400 transition-colors" placeholder="MESSAGE"></textarea>
          <button className="w-full bg-white text-[#001830] py-5 font-black text-xl active:bg-yellow-400 transition-colors">
            SEND TO ANISE
          </button>
        </form>
      </section>

      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold">
          &copy; 2026 FC ANISE KYOTO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}