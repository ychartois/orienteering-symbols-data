const fs = require('fs');
const path = require('path');

// Load control descriptions data
const controlDescriptionsEn = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/control_descriptions_en.json'), 'utf8')
);

// Load map symbols data
const mapSymbolsEn = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/map_symbols_en.json'), 'utf8')
);

// Load any additional language files that might exist
const loadLanguageFiles = (prefix) => {
  const result = { en: prefix === 'control_descriptions' ? controlDescriptionsEn : mapSymbolsEn };
  
  try {
    const dataDir = path.join(__dirname, 'data');
    const files = fs.readdirSync(dataDir);
    
    files.forEach(file => {
      if (file.startsWith(prefix) && file !== `${prefix}_en.json`) {
        const langCode = file.replace(`${prefix}_`, '').replace('.json', '');
        try {
          result[langCode] = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
        } catch (parseErr) {
          console.warn(`Warning: Could not parse ${file}. Skipping.`);
        }
      }
    });
  } catch (err) {
    console.warn(`Warning: Could not read language files for ${prefix}.`);
  }
  
  return result;
};

module.exports = {
  controlDescriptions: loadLanguageFiles('control_descriptions'),
  mapSymbols: loadLanguageFiles('map_symbols')
};
