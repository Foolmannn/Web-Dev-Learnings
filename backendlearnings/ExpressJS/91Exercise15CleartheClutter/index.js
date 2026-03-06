const fs = require('fs').promises;
const path = require('path');

// Define folder mapping by extension
const FOLDER_MAP = {
  '.pdf': 'PDF',
  '.txt': 'Text',
  '.jpg': 'Images',
  '.png': 'Images'
};

async function organizeFiles(directory) {
  const files = await fs.readdir(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = await fs.stat(filePath);

    // Skip directories
    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    const folderName = FOLDER_MAP[ext] || 'Other';
    const destFolder = path.join(directory, folderName);

    // Create destination folder
    await fs.mkdir(destFolder, { recursive: true });

    // Move file
    await fs.rename(filePath, path.join(destFolder, file));
    console.log(`${file} moved to ${folderName}/`);
  }
}

organizeFiles('./files'); // Replace with your directory   