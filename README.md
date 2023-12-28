# Additional New Decks of Cards for FoundryVTT

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-additional-cards/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fadditional-cards&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=additional-cards)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-additional-cards%2Fmaster%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-additional-cards%2Fmaster%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fadditional-cards%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/additional-cards/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-additional-cards/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/additional-cards/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/additional-cards/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

This is a updated/upgraded of the module [https://github.com/jcolson/foundryvtt_cards](https://github.com/jcolson/foundryvtt_cards)

This module contains images for the following decks:

- The Great Dalmuti
- 54 Playing Cards (standard 52 card deck + 2 Jokers)
- Three Dragon Ante
- Tarot Card Deck
- Dragon Age Deck
- Tarokka Deck

![img](/wiki/github-social-preview.jpg)

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-additional-cards/master/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button


## Feel free to send pull requests for additional token frame content

If you have your own token frames that you would like to share with the Foundry community, please open a pull request here or open an [Issue](https://github.com/p4535992/foundryvtt-additional-cards/issues) and I'll do my best to incorporate your content in the next release.

## Other modules

[Additional Token Frames](https://github.com/p4535992/foundryvtt-additional-token-frames) is a module that add token frames
[Additional Icons](https://github.com/p4535992/foundryvtt-additional-icons) is a module that add icons

# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

## npm build scripts

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build-watch

`build-watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build-watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### lint and lint:fix

`lint` launch the eslint process based on the configuration [here](./.eslintrc.json)

```bash
npm run-script lint
```

`lint:fix` launch the eslint process with the fix argument

```bash
npm run-script lint:fix
```

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-additional-cards/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!
