# Fake News Fighter

## Opis

Portal jest to strona wyświetlająca listę zweryfikowanych newsów. Dostępna jest pod adresem [fakehunter.pap.pl](https://fakehunter.pap.pl/).

## Dane techniczne

### Technologie

Aplikacja bazuje między innymi na technologiach:

- React.js
- next.js
- styled-components
- [next-translate](https://github.com/vinissimus/next-translate)

### Wymagania

- `node.js` >= 12.13.0
- `yarn` / `npm`

### Komendy

- `yarn install` - instaluje niezbędne zależności
- `yarn dev` - uruchamia serwer deweloperski
- `yarn build` - buduje wersję produkcyjną aplikacji (używane przez continuous deployment)
- `yarn start` - uruchamia serwer produkcyjny (używane przez continuous deployment)

## Uwagi

Z racji połączenia kodu landing page-a oraz aplikacji z raportami powstała lekka redundancja jeżeli chodzi o stylowanie.
Aplikacja z raportami wykorzystuje styled-components i jest stylowana od podstaw. Część landing page-owa wykorzystuje bootstrapa i pliki css.
