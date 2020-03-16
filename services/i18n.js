const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'hu',
  otherLanguages: ['en', 'hr']
});

module.exports = NextI18NextInstance;
