import React, { useState } from 'react';
import { BookOpen, Key, Terminal, Code, Copy, Check, ShieldAlert, Cpu } from 'lucide-react';

export default function ApiDocs() {
  const [activeLang, setActiveLang] = useState('curl');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    curl: `curl -X GET "http://localhost:8000/api/v1/trademarks?query=NIKE&search_mode=startswith" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Accept: application/json"`,

    python: `import requests

url = "http://localhost:8000/api/v1/trademarks"
params = {
    "query": "NIKE",
    "search_mode": "startswith",
    "class": 25,
    "limit": 20
}
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, params=params, headers=headers)
data = response.json()

print(f"Total matching records: {data['pagination']['total']}")
for item in data["data"]:
    print(f"{item['trademark']} - Class {item['class']} ({item['status']})")`,

    javascript: `// Node.js or Browser Fetch
const queryParams = new URLSearchParams({
  query: 'NIKE',
  search_mode: 'startswith',
  class: 25,
  limit: 20
});

const response = await fetch(\`http://localhost:8000/api/v1/trademarks?\${queryParams}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'application/json'
  }
});

const result = await response.json();
console.log(result.data);`,

    go: `package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	client := &http.Client{}
	req, _ := http.NewRequest("GET", "http://localhost:8000/api/v1/trademarks?query=NIKE&search_mode=startswith", nil)
	req.Header.Set("Authorization", "Bearer YOUR_API_KEY")

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	var data map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&data)
	fmt.Println("Wyt Response:", data)
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="badge badge-mint" style={{ marginBottom: '12px' }}>
            Developer Documentation
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '8px', color: '#FFFFFF' }}>
            Wyt Trademark API Documentation
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '780px' }}>
            Complete guide for authenticating requests, querying trademark records, handling pagination, and credit consumption.
          </p>
        </div>

        {/* 2-Column Documentation View */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px' }}>
          
          {/* Left Column: Endpoints & Guides */}
          <div>
            
            {/* 1. Authentication */}
            <div className="glass-panel" style={{ padding: '28px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Key size={20} color="var(--mint)" />
                <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF' }}>
                  1. Authentication
                </h2>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Authenticate all requests by including your secret API key in the request header. 
                Both Bearer Authorization and X-API-Key are supported.
              </p>

              <div style={{
                background: 'var(--code-bg)',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.8rem',
                color: 'var(--code-text)'
              }}>
                <div>Authorization: Bearer wyt_live_xxxxxxxxxxxxxxxx</div>
                <div style={{ color: 'var(--text-dim)', marginTop: '4px' }}>// or</div>
                <div>X-API-Key: wyt_live_xxxxxxxxxxxxxxxx</div>
              </div>
            </div>

            {/* 2. Endpoints */}
            <div className="glass-panel" style={{ padding: '28px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Terminal size={20} color="var(--teal)" />
                <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF' }}>
                  2. Core Endpoints
                </h2>
              </div>

              {/* Endpoint 1 */}
              <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ background: 'var(--teal)', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px' }}>
                    GET
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontWeight: '600', color: '#FFFFFF', fontSize: '0.9rem' }}>
                    /api/v1/trademarks
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Search and query trademark records with exact, startswith, or contains matching filters.
                </p>

                <div style={{ fontSize: '0.8rem', color: 'var(--code-text)', marginBottom: '6px', fontWeight: '700' }}>
                  Supported Parameters:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li><code style={{ color: 'var(--mint)' }}>query</code> - Brand or mark keyword</li>
                  <li><code style={{ color: 'var(--mint)' }}>search_mode</code> - <code>exact</code> | <code>startswith</code> | <code>contains</code> (default)</li>
                  <li><code style={{ color: 'var(--mint)' }}>class</code> - Nice Classification number (1 to 45)</li>
                  <li><code style={{ color: 'var(--mint)' }}>status</code> - <code>Registered</code> | <code>Pending</code> | <code>Objected</code></li>
                  <li><code style={{ color: 'var(--mint)' }}>page</code> & <code>limit</code> - Pagination controls</li>
                </ul>
              </div>

              {/* Endpoint 2 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ background: 'var(--teal)', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px' }}>
                    GET
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontWeight: '600', color: '#FFFFFF', fontSize: '0.9rem' }}>
                    /api/v1/trademarks/{'{application_number}'}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Retrieve full detailed specification of a single trademark application.
                </p>
              </div>
            </div>

            {/* 3. Status Codes & Errors */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <ShieldAlert size={20} color="#fb7185" />
                <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF' }}>
                  3. Error Handling
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <div><strong style={{ color: 'var(--mint)' }}>200 OK</strong> - Successful search or retrieval</div>
                <div><strong style={{ color: '#fda4af' }}>401 Unauthorized</strong> - Invalid or missing API key</div>
                <div><strong style={{ color: 'var(--code-text)' }}>402 Payment Required</strong> - Credit balance exhausted</div>
                <div><strong style={{ color: '#fda4af' }}>404 Not Found</strong> - Record or resource not found</div>
                <div><strong style={{ color: 'var(--teal)' }}>429 Too Many Requests</strong> - Rate limit exceeded</div>
              </div>
            </div>

          </div>

          {/* Right Column: Code Snippets & Playground */}
          <div>
            <div className="glass-panel" style={{ overflow: 'hidden', position: 'sticky', top: '90px' }}>
              
              {/* Code Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: 'rgba(11, 19, 21, 0.95)',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['curl', 'python', 'javascript', 'go'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        background: activeLang === lang ? 'var(--teal)' : 'transparent',
                        color: activeLang === lang ? '#FFFFFF' : 'var(--text-muted)',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase'
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(85, 123, 131, 0.18)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--code-text)',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  {copied ? <Check size={14} color="var(--mint)" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Display */}
              <div style={{
                background: 'var(--code-bg)',
                padding: '20px',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.8rem',
                lineHeight: 1.6,
                maxHeight: '500px',
                overflowY: 'auto'
              }}>
                <pre style={{ color: 'var(--code-text)', margin: 0, whiteSpace: 'pre-wrap' }}>
                  {codeSnippets[activeLang]}
                </pre>
              </div>

              {/* Footer info */}
              <div style={{
                padding: '14px 20px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.75rem',
                color: 'var(--text-dim)'
              }}>
                API Base URL: <code>http://localhost:8000</code> • OpenAPI Specs at <code>/docs</code>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
