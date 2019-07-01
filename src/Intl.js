import React, { useState } from 'react';
import { addLocaleData, IntlProvider } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_pl from 'react-intl/locale-data/pl';
import en from './translations/en.json';
import pl from './translations/pl.json';

addLocaleData([...locale_en, ...locale_pl]);

export const translations = {
  'en-US': en,
  'en-GB': en,
  'pl-PL': pl
};

const Context = React.createContext();

const IntlProviderWrapper = ({ children }) => {
  const [locale, switchLanguage] = useState(navigator.language);
  return (
    <Context.Provider value={{ switchLanguage }}>
      <IntlProvider
        key={translations[locale] ? locale : 'en-US'}
        locale={translations[locale] ? locale : 'en-US'}
        messages={
          translations[locale] ? translations[locale] : translations['en-US']
        }
        defaultLocale="en-US"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };