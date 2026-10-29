export default function Footer() {
    return (
    <footer className="bg-sky-950 text-slate-300 ">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <span className="text-2xl font-bold text-white">Grammer</span>
        <p className="mt-4 text-sm text-slate-400">Xxx</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Xxx</h4>
        <ul className="mt-4 space-y-2 text-sm">
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Xxx</h4>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Subscribe</h4>
        <p className="mt-4 text-sm text-slate-400">Xxx</p>
      </div>
    </div>

    <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
      <p className="text-xs text-slate-400">&copy; Thanakron Laingprom / 026830491004-8</p>
      <div className="flex space-x-6 mt-4 sm:mt-0">
      </div>
    </div>
  </div>
</footer>
    );
}