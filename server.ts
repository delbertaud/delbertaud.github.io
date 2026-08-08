import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI client on server side safely
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // Serve physical /resume directory & route
  const resumeDir = path.join(process.cwd(), 'resume');
  if (fs.existsSync(resumeDir)) {
    app.use('/resume', express.static(resumeDir));
    app.get('/resume', (req, res) => {
      res.sendFile(path.join(resumeDir, 'index.html'));
    });
    app.get('/resume/*', (req, res) => {
      res.sendFile(path.join(resumeDir, 'index.html'));
    });
  }

  // API Endpoint: AI Consulting Architecture Assessment
  app.post('/api/consult-ai', async (req, res) => {
    try {
      const { message, processType, teamSize, currentStack } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message query is required.' });
        return;
      }

      const ai = getAiClient();
      if (!ai) {
        res.json({
          recommendation: `**Delbert Aud's Recommended Solution:**\n\nBased on your query regarding "${message}", Delbert recommends an integrated automation approach:\n\n1. **Workflow Engine:** Deploy n8n or Python orchestration with automated triggers.\n2. **AI & Logic:** Integrate local LLM models (Ollama/Gemini) with RAG vector search for secure document analysis.\n3. **Robotic Process Automation (RPA):** Use Python / PowerShell bots for legacy system interaction.\n4. **Security & Auditing:** Enforce enterprise data encryption and RBAC access logs.\n\n*Note: Add GEMINI_API_KEY in Secrets for live dynamic AI recommendations.*`,
        });
        return;
      }

      const prompt = `You are the Virtual AI Consulting Assistant representing Delbert Aud, a Senior IT Professional & Consultant with 40+ years of experience in AI/ML, RPA, Software Engineering, and Enterprise Architecture.

User Query: "${message}"
Process Type: ${processType || 'General Automation'}
Team Size: ${teamSize || 'N/A'}
Current Stack: ${currentStack || 'N/A'}

Provide a highly professional, structured, step-by-step engineering proposal and automation recommendation in Markdown. Keep it actionable, technical yet clear, highlighting how Delbert Aud's expertise in AI (n8n, Ollama, Gemini, RAG), RPA (Python, Go, PowerShell, Automation Anywhere), and enterprise security can solve this challenge. Finish with a call-to-action inviting them to schedule a consultation with Delbert.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'You are an expert AI & Automation Solutions Architect providing clear, high-value consulting advice on behalf of Delbert Aud.',
          temperature: 0.7,
        },
      });

      res.json({ recommendation: response.text || 'No recommendation generated.' });
    } catch (error: any) {
      console.error('Error in /api/consult-ai:', error);
      res.status(500).json({ error: 'Failed to process AI consultation query.' });
    }
  });

  // API Endpoint: Contact / Booking Request
  app.post('/api/contact', (req, res) => {
    const { name, email, serviceType, engagementType, projectDetails } = req.body;
    if (!name || !email) {
      res.status(400).json({ error: 'Name and email are required.' });
      return;
    }

    console.log('Received consultation inquiry:', {
      name,
      email,
      serviceType,
      engagementType,
      projectDetails,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: `Thank you, ${name}! Delbert Aud has received your inquiry regarding ${serviceType || 'Consulting Services'}. He will respond to ${email} within 24 hours.`,
      confirmationId: 'DA-' + Math.floor(100000 + Math.random() * 900000),
    });
  });

  // API Endpoints for Resume
  app.get('/api/resume/markdown', (req, res) => {
    const filePath = path.join(process.cwd(), 'resume', 'Delbert_Aud_Resume.md');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      res.type('text/markdown').send(content);
    } else {
      res.status(404).send('# Resume File Not Found');
    }
  });

  app.get('/api/resume/requirements', (req, res) => {
    const filePath = path.join(process.cwd(), 'resume', 'Delbert_Aud_Requirements.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      res.type('application/json').send(content);
    } else {
      res.status(404).json({ error: 'Requirements file not found' });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Delbert Aud Consulting app running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
