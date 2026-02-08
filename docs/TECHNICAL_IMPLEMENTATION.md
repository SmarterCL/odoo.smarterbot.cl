# Technical Implementation Guide: Next.js Website to Odoo 16 Integration

## Prerequisites
- Running Odoo 16 instance with API access
- n8n instance for workflow automation
- SmarterOS with Open Specs and MCP capabilities
- Next.js website (odoo.smarterbot.cl)

## Step 1: Open Specs Configuration

### 1.1 Define API Specifications
Create YAML files for API specifications in the Open Specs format:

```yaml
# openspec/specs/website-odoo-api.yaml
openapi: 3.0.0
info:
  title: SmarterOS Website to Odoo Integration API
  version: 1.0.0
  description: API for connecting website to Odoo ERP

paths:
  /api/leads:
    post:
      summary: Create lead from website form
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Lead'
      responses:
        '201':
          description: Lead created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LeadResponse'

components:
  schemas:
    Lead:
      type: object
      properties:
        name:
          type: string
          description: Lead name
        email:
          type: string
          format: email
          description: Lead email
        phone:
          type: string
          description: Lead phone
        message:
          type: string
          description: Lead message
      required:
        - name
        - email

    LeadResponse:
      type: object
      properties:
        id:
          type: integer
          description: Odoo lead ID
        status:
          type: string
          enum: [created, duplicate, error]
        message:
          type: string
          description: Response message
```

### 1.2 Set up Open Specs Validation
```bash
npm install -g @fission-ai/openspec
openspec check openspec/specs/*.yaml
```

## Step 2: n8n Workflow Implementation

### 2.1 Create Lead Processing Workflow

1. **Webhook Trigger Node**:
   - HTTP Method: POST
   - Path: `/webhook/lead`
   - Response: Last Node

2. **Function Node: Data Validation**:
   ```javascript
   // Validate data against Open Specs
   const requiredFields = ['name', 'email'];
   for (const field of requiredFields) {
     if (!$input.first().json[field]) {
       throw new Error(`Missing required field: ${field}`);
     }
   }
   
   // Additional validation logic here
   return $input.all();
   ```

3. **Odoo Node: Create Lead**:
   - Operation: Create
   - Resource: Lead
   - Field Mapping:
     - Name: `{{ $json.name }}`
     - Email: `{{ $json.email }}`
     - Phone: `{{ $json.phone }}`
     - Description: `{{ $json.message }}`

4. **Response Node**: Return success/error response

### 2.2 Create Product Catalog Synchronization Workflow

1. **Schedule Trigger**: Cron expression for periodic sync
2. **Odoo Node: Get Products**: Fetch product data from Odoo
3. **Function Node: Transform Data**: Map to website format
4. **HTTP Request Node**: Update website product catalog

## Step 3: MCP Server Setup

### 3.1 MCP Server Configuration
Create MCP server to expose Odoo capabilities:

```typescript
// mcp-server/odoo-connector.ts
import { McpServer } from '@modelcontextprotocol/server';

class OdooMcpServer extends McpServer {
  constructor() {
    super();
    this.addResource('leads', this.getLeadsResource());
    this.addTool('createLead', this.getCreateLeadTool());
    this.addResource('products', this.getProductsResource());
  }

  private getLeadsResource() {
    return {
      description: 'Access Odoo leads data',
      getSpec: async () => {
        // Return resource specification
      },
      read: async (parameters) => {
        // Read leads from Odoo
      }
    };
  }

  private getCreateLeadTool() {
    return {
      description: 'Create a new lead in Odoo',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          phone: { type: 'string' },
          message: { type: 'string' }
        },
        required: ['name', 'email']
      },
      call: async (parameters) => {
        // Call Odoo to create lead
      }
    };
  }
}
```

## Step 4: Next.js Frontend Integration

### 4.1 MCP Client Implementation
```typescript
// lib/mcp-client.ts
interface McpClient {
  connect(): Promise<void>;
  getResource(resourceId: string, parameters?: any): Promise<any>;
  callTool(toolId: string, parameters: any): Promise<any>;
}

export class SmarterMcpClient implements McpClient {
  async connect(): Promise<void> {
    // Implement MCP connection logic
  }

  async getResource(resourceId: string, parameters?: any): Promise<any> {
    // Implement resource fetching via MCP
  }

  async callTool(toolId: string, parameters: any): Promise<any> {
    // Implement tool execution via MCP
  }
}
```

### 4.2 Update Contact Form to Use MCP
```tsx
// components/contact-section.tsx
'use client';

import { useState } from 'react';
import { SmarterMcpClient } from '@/lib/mcp-client';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const client = new SmarterMcpClient();
      await client.connect();
      
      const result = await client.callTool('createLead', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      setMessage('¡Gracias! Su información ha sido enviada correctamente.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setMessage('Error al enviar la información. Por favor intente nuevamente.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
                required
              />
            </div>
            
            <Button type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
            
            {message && (
              <p className={`mt-2 ${message.includes('Gracias') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
```

## Step 5: Environment Configuration

### 5.1 Environment Variables
```bash
# .env.local
NEXT_PUBLIC_MCP_SERVER_URL=https://mcp.smarteros.cl
ODOO_BASE_URL=https://your-odoo-instance.com
ODOO_API_KEY=your_odoo_api_key
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook
```

### 5.2 Odoo Configuration
1. Enable API access in Odoo
2. Create API user with proper permissions
3. Configure CORS for your domain
4. Set up webhook endpoints

## Step 6: Testing and Validation

### 6.1 Unit Tests
```typescript
// __tests__/integration.test.ts
import { SmarterMcpClient } from '@/lib/mcp-client';

describe('MCP Integration', () => {
  it('should connect to MCP server', async () => {
    const client = new SmarterMcpClient();
    await expect(client.connect()).resolves.not.toThrow();
  });

  it('should create lead via MCP tool', async () => {
    const client = new SmarterMcpClient();
    await client.connect();
    
    const result = await client.callTool('createLead', {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    });
    
    expect(result).toHaveProperty('id');
  });
});
```

### 6.2 Integration Tests
- Test end-to-end flow from website form to Odoo
- Validate data transformation and mapping
- Check error handling and retry mechanisms
- Verify security and authentication

## Step 7: Deployment

### 7.1 Deploy n8n Workflows
1. Export workflows from n8n development instance
2. Import to production n8n instance
3. Update environment variables
4. Test webhook endpoints

### 7.2 Deploy MCP Server
1. Deploy MCP server to production environment
2. Configure SSL certificates
3. Set up monitoring and logging
4. Test connection to Odoo instance

### 7.3 Update Website
1. Deploy updated website with MCP client
2. Verify all integration points work
3. Monitor for errors and performance
4. Set up alerts for integration failures

## Monitoring and Maintenance

### 7.1 Health Checks
- Monitor API response times
- Check n8n workflow execution
- Verify MCP server connectivity
- Track error rates

### 7.2 Performance Metrics
- Integration response times
- Data synchronization accuracy
- User experience metrics
- Error recovery rates

### 7.3 Security Auditing
- Regular access log reviews
- API key rotation schedule
- Security scan of integration code
- Compliance with data protection regulations