import React from "react";
import { Send, Link2, Check } from "lucide-react";

export const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export const METHOD_COLOR = {
  GET: "text-emerald-500 dark:text-emerald-400 border-emerald-500/40 dark:border-emerald-400/40",
  POST: "text-blue-500 dark:text-blue-400 border-blue-500/40 dark:border-blue-400/40",
  PUT: "text-amber-500 dark:text-amber-400 border-amber-500/40 dark:border-amber-400/40",
  PATCH: "text-purple-500 dark:text-purple-400 border-purple-500/40 dark:border-purple-400/40",
  DELETE: "text-rose-500 dark:text-rose-400 border-rose-500/40 dark:border-rose-400/40",
};

export default function UrlBar({
  method,
  setMethod,
  url,
  setUrl,
  loading,
  onSend,
  onImportCurl,
  onShare,
  copiedLink,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className={`px-3 py-2 rounded border text-sm font-bold outline-none cursor-pointer font-mono bg-white dark:bg-signal-panel ${METHOD_COLOR[method]}`}
      >
        {METHODS.map((m) => (
          <option key={m} value={m} className="bg-white dark:bg-signal-panel text-slate-800 dark:text-slate-200">
            {m}
          </option>
        ))}
      </select>

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://api.example.com/endpoint  (use {{var}} for env vars)"
        className="flex-1 min-w-[200px] px-3 py-2 rounded border text-sm outline-none font-mono
          bg-white dark:bg-signal-panel border-light-border dark:border-signal-border
          text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-zinc-500
          focus:border-cyan-400"
      />

      <button
        onClick={onSend}
        disabled={loading || !url}
        className="px-5 py-2 rounded text-sm font-bold transition-all flex items-center gap-2 relative overflow-hidden
          bg-cyan-400 text-[#04141a] hover:opacity-90 disabled:opacity-40"
      >
        {loading ? <span className="animate-pulse">Sending…</span> : (<><Send size={14} /> Send</>)}
        {loading && <span className="absolute inset-0 bg-white/30 animate-pulse" />}
      </button>

      <button
        onClick={onImportCurl}
        className="px-3 py-2 rounded border text-xs whitespace-nowrap transition-colors
          border-light-border dark:border-signal-border text-slate-500 dark:text-signal-muted
          hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400"
      >
        Import cURL
      </button>

      <button
        onClick={onShare}
        title="Copy shareable link"
        className="px-3 py-2 rounded border text-xs transition-colors flex items-center gap-1
          border-light-border dark:border-signal-border text-slate-500 dark:text-signal-muted
          hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400"
      >
        {copiedLink ? <Check size={13} /> : <Link2 size={13} />}
      </button>
    </div>
  );
}
