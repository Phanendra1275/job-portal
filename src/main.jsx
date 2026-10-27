import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes";
import ErrorBoundary from "./components/error-boundary";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const root = ReactDOM.createRoot(document.getElementById("root"));

// Helpful fallback if environment variables are not yet configured on Vercel
if (!PUBLISHABLE_KEY || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
  const missingVars = [];
  if (!PUBLISHABLE_KEY) missingVars.push("VITE_CLERK_PUBLISHABLE_KEY");
  if (!SUPABASE_URL) missingVars.push("VITE_SUPABASE_URL");
  if (!SUPABASE_ANON_KEY) missingVars.push("VITE_SUPABASE_ANON_KEY");

  root.render(
    <React.StrictMode>
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="max-w-lg w-full bg-zinc-900/90 border border-amber-500/30 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-3xl">
            ⚙️
          </div>
          <h1 className="text-2xl font-bold mb-2 text-white">Setup Required</h1>
          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            Your application was deployed, but the required environment variables have not been configured in Vercel yet.
          </p>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 text-left mb-6">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
              Missing Variables:
            </span>
            <ul className="flex flex-col gap-1.5 text-xs font-mono text-amber-300">
              {missingVars.map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs text-zinc-400 text-left bg-blue-950/30 border border-blue-800/40 rounded-2xl p-4 mb-6 leading-relaxed">
            <p className="font-semibold text-blue-300 mb-1">How to fix:</p>
            <ol className="list-decimal list-inside flex flex-col gap-1 text-zinc-300">
              <li>Open your project settings on <strong>Vercel</strong>.</li>
              <li>Go to <strong>Settings → Environment Variables</strong>.</li>
              <li>Add the missing keys and values from your local <code className="text-amber-300 font-mono">.env</code>.</li>
              <li>Click <strong>Deployments → Redeploy</strong> the latest deployment.</li>
            </ol>
          </div>

          <a
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Go to Vercel Dashboard
          </a>
        </div>
      </div>
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ClerkProvider
          appearance={{
            baseTheme: shadesOfPurple,
          }}
          publishableKey={PUBLISHABLE_KEY}
          afterSignOutUrl="/"
        >
          <App />
        </ClerkProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
