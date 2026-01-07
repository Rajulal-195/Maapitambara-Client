import { useEffect } from 'react';

function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      if (!document.querySelector('#google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,gu', // English, Hindi, Gujarati
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    };

    addScript();
  }, []);

  return (
    <div className="translate-box">
      <div id="google_translate_element"></div>
    </div>
  );
}

export default GoogleTranslate;
