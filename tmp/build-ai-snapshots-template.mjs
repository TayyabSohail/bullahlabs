import fs from 'node:fs/promises';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const outputDir = 'D:/ME/bullahlabs/output';
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const sheet = workbook.worksheets.add('AI snapshots');
sheet.showGridLines = false;

sheet.getRange('A1:H1').values = [[
  'Timestamp',
  'Email',
  'Role',
  'Other role',
  'Frequency',
  'Confidence',
  'Efficiency',
  'Goal',
]];

const header = sheet.getRange('A1:H1');
header.format = {
  fill: '#1D1714',
  font: { name: 'Arial', size: 10, bold: true, color: '#FFFFFF' },
  horizontalAlignment: 'center',
  verticalAlignment: 'center',
  borders: { preset: 'outside', style: 'thin', color: '#1D1714' },
};
header.format.rowHeight = 24;

sheet.getRange('A2:H2').values = [[
  '2026-10-24 12:00',
  'example@company.com',
  'Marketing & Content',
  '',
  'daily',
  80,
  60,
  'system',
]];
sheet.getRange('A2:H2').format = {
  font: { name: 'Arial', size: 10, color: '#6B625E' },
  fill: '#FFF8F3',
  borders: { preset: 'outside', style: 'thin', color: '#E6DDD8' },
};
sheet.getRange('A2:H2').format.rowHeight = 20;
sheet.getRange('F2:G2').format.numberFormat = '0';

const widths = [150, 210, 190, 190, 130, 110, 110, 190];
for (let column = 0; column < widths.length; column += 1) {
  sheet.getRangeByIndexes(0, column, 2, 1).format.columnWidthPx = widths[column];
}

sheet.freezePanes.freezeRows(1);
workbook.recalculate();
const inspection = await workbook.inspect({
  kind: 'table',
  range: 'AI snapshots!A1:H2',
  include: 'values',
  tableMaxRows: 3,
  tableMaxCols: 8,
});
if (!inspection.ndjson.includes('Timestamp')) throw new Error('Header validation failed');

const preview = await workbook.render({
  sheetName: 'AI snapshots',
  range: 'A1:H2',
  scale: 2,
  format: 'png',
});
await fs.writeFile(`${outputDir}/ai-snapshots-template-preview.png`, new Uint8Array(await preview.arrayBuffer()));

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(`${outputDir}/ai-snapshots-template.xlsx`);
