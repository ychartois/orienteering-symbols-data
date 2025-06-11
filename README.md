# Orienteering Symbols Data

This repository contains standardized data for orienteering map symbols and control descriptions.

## Data Files

### Control Descriptions

`data/control_descriptions_en.json` - Contains all standard IOF (International Orienteering Federation) control description symbols with their meanings and references.

Each control description has the following format:
```json
{
  "ref": "1.1",          // Reference number
  "name": "Terrace",     // Name of the feature
  "column": "Column D",  // Which column it appears in control description sheets
  "type": "Landforms",   // Category of the feature
  "description": "...",  // Text description
  "image": "1.1_terrace.png", // Filename of the image, please don't modify
  "map_symbols": ["101", "102", "103"] // Related map symbol references
}
```

### Map Symbols

`data/map_symbols_en.json` - Contains all standard orienteering map symbols based on ISOM 2017/2022 standards.

Each map symbol has the following format:
```json
{
  "id": "101",           // Symbol ID
  "name": "Contour",     // Name of the symbol
  "type": "Landforms",   // Category of the symbol
  "description": "...",  // Text description
  "control_description": ["1.4", "1.5"],      // Related Control Description symbol
  "image": "101_contour.png" // Filename of the image, please don't modify
}
```

## Installation

You can install this package via npm:

```bash
npm install orienteering-symbols-data
```

Or using yarn:

```bash
yarn add orienteering-symbols-data
```

## Usage

### In a JavaScript/TypeScript project:

```javascript
// Import the package
const { controlDescriptions, mapSymbols } = require('orienteering-symbols-data');

// Access English control descriptions
console.log(controlDescriptions.en);

// Access English map symbols
console.log(mapSymbols.en);

// Access other language if available (e.g., French)
console.log(controlDescriptions.fr);
```

### With ES modules:

```javascript
import { controlDescriptions, mapSymbols } from 'orienteering-symbols-data';

// Access the data as above
```

You can also use this data in your orienteering projects by:

1. Direct import from GitHub
2. Downloading the JSON files

## Publishing to npm

To publish this package to npm:

1. Make sure you have an npm account (`npm login`)
2. Update the version in package.json when making changes
3. Run `npm publish`

## License

This data is released under the MIT License. The symbol dictionary is derived from https://www.iknow-o.com/ and open-sourced to facilitate translations and educational use across multiple languages. See the LICENSE file for details.

## Translations

Contributions for translations into different languages are welcome. Please follow the format in the existing JSON files and create new files with the appropriate language code (e.g., `control_descriptions_fr.json` for French).
