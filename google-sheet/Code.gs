/**
 * Saddle Watts: receives the welcome pop-up answers and adds one row per visitor
 * to the "Saddle Watts – Welcome answers" Google Sheet.
 *
 * Setup (once):
 *   1. Open the sheet, then Extensions → Apps Script.
 *   2. Replace everything in Code.gs with this file and click Save.
 *   3. Deploy → New deployment → type "Web app".
 *      Execute as: Me.  Who has access: Anyone.  → Deploy, allow access.
 *   4. Copy the Web app URL (ends in /exec) and paste it into SHEET_ENDPOINT in index.html.
 */
const SHEET_ID = '1RfIZOLKA37C1gZcdg2rWew05cIUcnZLEI3BEb8zEfQk';

const ROLES = { cyclist: 'Cyclist', physician: 'Physician', physio: 'Physio', other: 'Other' };
const YEARS = { 'lt1': 'Under 1 year', '1-3': '1–3 years', '3-10': '3–10 years', '10+': '10+ years', 'none': 'Not in the industry' };

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!ROLES[d.role] || !YEARS[d.years]) return json_({ ok: false, error: 'invalid answer' });
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    sheet.appendRow([
      new Date(),
      ROLES[d.role],
      d.role === 'other' ? clean_(d.roleOther, 80) : '',
      YEARS[d.years],
      clean_(d.at, 40),
      clean_(d.page, 200),
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the URL in a browser to check the deployment is live.
function doGet() {
  return json_({ ok: true, service: 'saddle-watts-welcome' });
}

// Trims free text and stops it being read as a spreadsheet formula.
function clean_(v, max) {
  let s = String(v == null ? '' : v).trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
