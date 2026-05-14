import React from 'react';

export default function RAMpeptides() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">R</span>
            </div>
            <span className="font-semibold tracking-tight text-xl">RAMpeptides</span>
          </div>
          <nav className="flex items-center gap-8 text-sm">
            <a href="#products" className="hover:text-zinc-600 transition-colors">Products</a>
            <a href="#about" className="hover:text-zinc-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-zinc-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-100 text-xs tracking-[2px] mb-6">
          VETERAN-OWNED · FAMILY-OPERATED
        </div>
        <h1 className="text-6xl font-semibold tracking-tighter leading-none mb-4">
          Power through<br />knowledge.
        </h1>
        <p className="max-w-md mx-auto text-lg text-zinc-600">
          Reference-grade peptides for laboratory and pre-clinical research.
        </p>
      </section>

      {/* Values */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-mono text-xs tracking-[3px] text-zinc-500 mb-3">01</div>
            <div className="font-semibold mb-1">Intentional catalog</div>
            <p className="text-zinc-600">A small, deliberate set of reference compounds. Each selected for its standing in current research literature.</p>
          </div>
          <div>
            <div className="font-mono text-xs tracking-[3px] text-zinc-500 mb-3">02</div>
            <div className="font-semibold mb-1">Tested & traceable</div>
            <p className="text-zinc-600">Lot-level certificates of analysis from independent third-party testing. Identity, purity by HPLC, mass confirmation — documented for every batch.</p>
          </div>
          <div>
            <div className="font-mono text-xs tracking-[3px] text-zinc-500 mb-3">03</div>
            <div className="font-semibold mb-1">Transparent pricing</div>
            <p className="text-zinc-600">List prices openly shown. No quote forms, no member tiers, no hidden cost structures.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-5xl mx-auto px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[3px] text-zinc-500 mb-1">CATALOG</div>
            <h2 className="text-3xl font-semibold tracking-tight">Research Peptides</h2>
          </div>
          <a href="#contact" className="text-sm underline hover:no-underline">Request COA</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tesamorelin Card */}
          <div className="group border border-zinc-200 rounded-2xl p-8 hover:border-black transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-semibold text-xl tracking-tight">Tesamorelin</div>
                <div className="text-sm text-zinc-500">10 mg · 10 vials/kit</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold tabular-nums">$40</div>
                <div className="text-[10px] text-zinc-500 tracking-widest">PER KIT</div>
              </div>
            </div>

            <div className="text-sm text-zinc-600 mb-8 leading-relaxed">
              Growth hormone releasing hormone (GHRH) analog. High-purity reference compound for laboratory research use only.
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                In stock
              </div>
              <button className="px-6 py-2.5 bg-black text-white text-sm rounded-full hover:bg-zinc-900 transition-colors">
                Add to cart
              </button>
            </div>

            <div className="mt-4 text-[10px] text-zinc-400">
              For research use only. Not for human consumption.
            </div>
          </div>

          {/* Placeholder for next product */}
          <div className="border border-dashed border-zinc-200 rounded-2xl p-8 flex items-center justify-center text-zinc-400 text-sm">
            More products coming soon
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200 bg-black text-white">
        <div className="max-w-5xl mx-auto px-8 py-16 text-center">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-semibold tracking-tight mb-3">Questions before ordering?</h3>
            <p className="text-zinc-400 mb-8 text-sm">
              We answer technical questions about handling, sourcing, and lot documentation.
            </p>
            <a 
              href="mailto:info@rampeptides.com" 
              className="inline-block px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition-all rounded-full text-sm tracking-wide"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-[10px] tracking-[2px] text-zinc-400 py-8 border-t border-zinc-100">
        © {new Date().getFullYear()} RAMpeptides — For laboratory research use only.
      </footer>
    </div>
  );
}
