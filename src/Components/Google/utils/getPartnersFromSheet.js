const fs = require('fs');

const { google } = require('googleapis');

/**
 * @param {Array} csv - An array of the form [ [ cells_row_1 ], [ cells_row_2 ], ...]
 * @returns {Array} - An array of objects, using first row has property names.
 */
function parseToJSON(csv) {
  console.log(csv);
  const props = csv[0]; // first row contains the header names (= properties)
  const data = csv.slice(1); // following rows contain the data

  return data.reduce((acc, dataArr) => {
    const set = props.reduce((scndAcc, prop, i) => {
      scndAcc[prop] = dataArr[i];
      return scndAcc;
    }, {});
    acc = [...acc, set];
    return acc;
  }, []);
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getPartnersFromSheet(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets.spreadsheets.values.get(
    {
      spreadsheetId: '1ud2HaVa5_WoZHWWgGsNe2CUOhwSQ2yERcdCuO5J7n9k',
      range: 'Data!A1:C25'
    },
    (err, res) => {
      if (err) throw new Error(`The API returned an error: ${err}`);
      const rows = res.data.values;
      const partners = parseToJSON(rows);
      fs.writeFileSync('src/partners.json', JSON.stringify(partners));
      console.log('finished writing ...');
    }
  );
}

module.exports = getPartnersFromSheet;
