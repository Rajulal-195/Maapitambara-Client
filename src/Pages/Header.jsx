import React, { useEffect, useState, useRef } from "react";
import logo from "../Assest/Aug_19__2025.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Languages } from "lucide-react";

/**
 * Header.jsx
 * - Tries to open the real google translate selector if available
 * - If not available (or blocked), shows a small custom dropdown and/or uses cookie fallback
 */

const LANGUAGES = [
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "bn", label: "বাংলা" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "ur", label: "اردو" },
  { code: "en", label: "English" },
];







const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [translateReady, setTranslateReady] = useState(false);
  const navigate = useNavigate();
  const langButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Google Translate script once
  useEffect(() => {
    if (window.google?.translate) {
      setTranslateReady(true);
      return;
    }

    // Avoid inserting multiple times
    if (document.querySelector('script[src*="translate_a/element.js"]')) return;

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // callback - create element but keep it visually hidden (we will trigger programmatically)
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "hi,mr,ta,te,gu,kn,ml,bn,pa,ur,en",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
        setTranslateReady(true);
      } catch (e) {
        // ignore - maybe Google blocked it
        setTranslateReady(false);
      }
    };

    // If script fails to load for any reason, keep translateReady false (fallback will work)
  }, []);

  // Utility: set cookie helper for googtrans fallback
  const setCookie = (name, value, days = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const domain = window.location.hostname;
    // set cookie for current domain
    document.cookie = `${name}=${value}; expires=${expires}; path=/;`;
    // also try setting for root domain (leading dot) to increase chances
    try {
      document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${domain}`;
    } catch (e) {
      // ignore domain setting failures in dev / file://
    }
  };

  // Attempt to change language by using the real google select
  const changeLanguageUsingSelect = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return false;

    // Try setting the value then dispatch change events
    try {
      select.value = langCode;
      // older browsers may need Event
      const event =
        typeof Event === "function"
          ? new Event("change", { bubbles: true })
          : document.createEvent("HTMLEvents").initEvent("change", true, false);
      select.dispatchEvent(event);

      // Some implementations need an extra click to apply
      select.focus();
      return true;
    } catch (e) {
      return false;
    }
  };

  // Fallback: set googtrans cookie and reload (widely used fallback)
  const changeLanguageUsingCookie = (langCode) => {
    // googtrans cookie format: /<source_lang>/<target_lang>
    // We'll use source 'en'
    const cookieValue = `/en/${langCode}`;
    setCookie("googtrans", cookieValue);
    setCookie("googtrans", cookieValue); // try twice to ensure persistence
    // Also set localStorage flag so we know the user chose a language (optional)
    try {
      localStorage.setItem("googtrans", cookieValue);
    } catch (e) {}
    // reload to let Google Translate pick cookie and translate
    window.location.reload();
  };

  // Primary API to change language (tries select, else cookie fallback)
  const changeLanguage = (langCode) => {
    // First try select method if widget present
    const triedSelect = changeLanguageUsingSelect(langCode);

    if (triedSelect) {
      // close custom menu if opened
      setLangMenuOpen(false);
      return;
    }

    // else fallback to cookie + reload
    changeLanguageUsingCookie(langCode);
  };

  // Handler when globe is clicked:
  // - If the select exists, try to open it (click). If that fails or isn't present, toggle custom dropdown.
  const onLanguageButtonClick = () => {
    // If widget loaded and select present, attempt to programmatically open it.
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      try {
        // Try to open/select by focusing and clicking -> often allows the browser native select to open.
        select.focus();
        select.click();

        // Give a short window to see if the native UI opened; we can't reliably detect that,
        // so show custom dropdown as a fallback only if native UI doesn't exist.
        // We'll set a short timer: if after 250ms the select still exists but nothing happened,
        // fallback to custom dropdown to let user choose.
        setTimeout(() => {
          // If focus is still on our button, probably popup didn't open; show custom dropdown
          // (We use document.activeElement check.)
          if (document.activeElement === langButtonRef.current) {
            setLangMenuOpen((prev) => !prev);
          } else {
            // assume native popup opened; close custom
            setLangMenuOpen(false);
          }
        }, 250);
        return;
      } catch (e) {
        // fallthrough to custom dropdown
      }
    }

    // If select not present or failed, toggle custom dropdown
    setLangMenuOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!langButtonRef.current) return;
      if (
        langButtonRef.current.contains(e.target) ||
        (e.target)?.closest?.(".lang-dropdown")
      ) {
        // clicked inside
        return;
      }
      setLangMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <>
      {/* Hidden google translate element used by the official widget */}
      <div
        id="google_translate_element"
        className="absolute opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/80 shadow-md py-2"
            : "bg-gradient-to-b from-white to-yellow-100 py-3"
        }`}
      >
        <div className="px-4 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-red-600">
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-300 ${isScrolled ? "w-24" : "w-32"}`}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
            {[
              { path: "/", label: "Home" },
              { path: "/pujan", label: "Pujan" },
              { path: "/gallery", label: "Gallery" },
              { path: "/video-list", label: "Video" },
              { path: "/contact", label: "Contact" },
              { path: "/about", label: "About" },
            ].map((item, idx) => (
              <Link key={idx} to={item.path} className="relative group hover:text-yellow-600">
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Language globe */}
            <div className="relative">
        <button
  ref={langButtonRef}
  className="notranslate cursor-pointer flex items-center gap-2 text-[#FDE68A]"
  onClick={onLanguageButtonClick}
>
  <Languages size={26} />
  <span className="hidden md:block">🌍</span>
</button>


              {/* Custom dropdown shown as fallback */}
              {langMenuOpen && (
            <div
  className="lang-dropdown notranslate absolute right-0 mt-2 w-44 bg-[#fefacd] text-black shadow-md rounded border overflow-hidden z-50"
>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {l.label}
                    </button>
                  ))}
                  <div className="px-3 py-2 text-xs text-gray-500 border-t">
                    {translateReady ? "Google Translate ready" : "Using fallback"}
                  </div>
                </div>
              )}
            </div>

            {/* Book Now */}
            <div className="hidden md:block">
              <button
                onClick={() => navigate("/pujabooking")}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-full shadow hover:scale-105 transform transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl text-gray-700">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm px-4 pb-4 text-gray-700 text-base font-sans space-y-2 shadow-lg">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/pujan", label: "Pujan" },
              { path: "/video-list", label: "Video" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="block hover:text-yellow-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/pujabooking");
              }}
              className="mt-3 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-full hover:scale-105 transform transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className={isScrolled ? "h-16" : "h-20"} />

      {/* small CSS to hide google top banner if it pops up */}
      <style>{`
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; }
      `}</style>
    </>
  );
};

export default Header;
