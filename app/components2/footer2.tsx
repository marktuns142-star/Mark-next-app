export default function Footer() {
    return (
    <footer className="bg-sky-950 text-slate-300 ">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <span className="text-2xl font-bold text-white">นายธนกร เลี้ยงพรม</span>
        <p className="mt-4 text-sm text-slate-400"></p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">026830491004-8</h4>
        <form className="mt-4 flex max-w-md gap-2">
          <input type="email" required className="w-full rounded-md border-0 bg-slate-800 px-4 py-2 text-sm text-white shadow-sm ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          <button type="submit" className="flex-none rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition">Send</button>
        </form>
      </div>
    </div>

    <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
      <p className="text-xs text-slate-400">&copy; ชื่อ-สกุล นายธนกร เลี้ยงพรม รหัสนักศึกษา: 026830491004-8</p>
      <div className="flex space-x-6 mt-4 sm:mt-0">
      </div>
    </div>
  </div>
</footer>
    );
}