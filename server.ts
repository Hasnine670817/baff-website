import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files
app.use('/dist', express.static(path.join(process.cwd(), 'dist')));
app.use('/js', express.static(path.join(process.cwd(), 'js')));
app.use('/src', express.static(path.join(process.cwd(), 'src')));

// Fallback to index.html for SPA behavior
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

// Start server locally
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

export default app;
