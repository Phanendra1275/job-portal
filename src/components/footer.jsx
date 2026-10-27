import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-8 pb-8 pt-4">
      {/* Outer Card Container */}
      <div className="max-w-7xl mx-auto rounded-3xl lg:rounded-[2.5rem] bg-zinc-950/90 border border-zinc-800/80 shadow-2xl backdrop-blur-xl p-6 sm:p-10 lg:p-14 overflow-hidden relative">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Top Section - Balanced 4 Columns covering full width */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-zinc-800/60">
          
          {/* Brand Logo (Col 1) */}
          <div className="flex flex-col justify-start">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Hirrd Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links (Col 2) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Explore
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-300">
              <li>
                <Link to="/jobs" className="hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/saved-jobs" className="hover:text-white transition-colors">
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link to="/my-jobs" className="hover:text-white transition-colors">
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="/onboarding" className="hover:text-white transition-colors">
                  Role Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers Links (Col 3) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Employers
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-300">
              <li>
                <Link to="/post-job" className="hover:text-white transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/my-jobs" className="hover:text-white transition-colors">
                  Created Jobs
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-white transition-colors">
                  Browse Candidates
                </Link>
              </li>
            </ul>
          </div>

          {/* Action Callouts (Col 4) */}
          <div className="flex flex-col gap-6 justify-start">
            <Link
              to="/post-job"
              className="group inline-flex flex-col gap-1 text-left transition-transform hover:-translate-y-0.5 duration-200"
            >
              <div className="inline-flex items-center gap-2">
                <span className="text-base font-semibold text-orange-400 group-hover:text-orange-300 transition-colors">
                  Post a Job
                </span>
                <span className="w-5 h-5 rounded-full bg-orange-500 text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Hire top talent
              </span>
            </Link>

            <Link
              to="/jobs"
              className="group inline-flex flex-col gap-1 text-left transition-transform hover:-translate-y-0.5 duration-200"
            >
              <div className="inline-flex items-center gap-2">
                <span className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  Explore Jobs
                </span>
                <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Find opportunities
              </span>
            </Link>
          </div>
        </div>

        {/* Signature Brand Graphic - Replaced with exact Hirrd logo */}
        <div className="relative py-6 sm:py-10 overflow-hidden flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Hirrd"
            className="w-full max-w-3xl sm:max-w-4xl max-h-44 sm:max-h-60 lg:max-h-72 object-contain select-none opacity-95 hover:opacity-100 transition-all duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Bottom Sub-bar */}
        <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 border-t border-zinc-800/40">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="text-zinc-400 font-medium">© 2026 Hirrd Inc. All rights reserved.</span>
            <span className="hover:text-zinc-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-zinc-300 cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-zinc-300 cursor-pointer transition-colors">
              Security
            </span>
            <span className="hover:text-zinc-300 cursor-pointer transition-colors">
              Cookie Settings
            </span>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <span>Built for modern hiring & careers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
