import { useState, useEffect } from 'react';
import { Copy, Moon, Sun, Download, Eye, EyeOff, Info, FileText, Heart } from 'lucide-react';

interface LinkStyle {
  color: string;
  fontSize: string;
  textDecoration: string;
  fontWeight: string;
}

function App() {
  const [url, setUrl] = useState('https://');
  const [anchorText, setAnchorText] = useState('Link Text');
  const [newTab, setNewTab] = useState(false);
  const [noFollow, setNoFollow] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [customClass, setCustomClass] = useState('');
  const [customId, setCustomId] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  
  const [linkStyle, setLinkStyle] = useState<LinkStyle>({
    color: '#3B82F6',
    fontSize: '16px',
    textDecoration: 'underline',
    fontWeight: 'normal'
  });

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  const generateHTML = () => {
    const rel = [];
    if (newTab) rel.push('noopener noreferrer');
    if (noFollow) rel.push('nofollow');

    const attrs = [
      `href="${url}"`,
      rel.length > 0 ? `rel="${rel.join(' ')}"` : '',
      newTab ? 'target="_blank"' : '',
      customClass ? `class="${customClass}${isButton ? ' link-button' : ''}"` : isButton ? 'class="link-button"' : '',
      customId ? `id="${customId}"` : '',
      `style="color: ${linkStyle.color}; font-size: ${linkStyle.fontSize}; text-decoration: ${linkStyle.textDecoration}; font-weight: ${linkStyle.fontWeight}"`
    ].filter(Boolean).join(' ');

    return `<a ${attrs}>${anchorText}</a>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateHTML());
  };

  const downloadHTML = () => {
    const element = document.createElement('a');
    const file = new Blob([generateHTML()], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = 'hyperlink.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Hyperlink Generator</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              title={showPreview ? 'Hide Preview' : 'Show Preview'}
            >
              {showPreview ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        {/* Hero Section with Image */}
        <div className="mb-12 rounded-lg overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80"
            alt="Coding background"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Create Beautiful Links</h2>
              <p className="text-xl">Generate and customize HTML hyperlinks in seconds</p>
            </div>
          </div>
        </div>

        {/* Main Generator Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Link Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2">URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                />
              </div>

              <div>
                <label className="block mb-2">Anchor Text</label>
                <input
                  type="text"
                  value={anchorText}
                  onChange={(e) => setAnchorText(e.target.value)}
                  className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Color</label>
                  <input
                    type="color"
                    value={linkStyle.color}
                    onChange={(e) => setLinkStyle({...linkStyle, color: e.target.value})}
                    className="w-full p-1 rounded h-10"
                  />
                </div>

                <div>
                  <label className="block mb-2">Font Size</label>
                  <select
                    value={linkStyle.fontSize}
                    onChange={(e) => setLinkStyle({...linkStyle, fontSize: e.target.value})}
                    className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  >
                    {['12px', '14px', '16px', '18px', '20px', '24px'].map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newTab}
                    onChange={(e) => setNewTab(e.target.checked)}
                    className="rounded"
                  />
                  Open in New Tab
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={noFollow}
                    onChange={(e) => setNoFollow(e.target.checked)}
                    className="rounded"
                  />
                  Add Nofollow
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isButton}
                    onChange={(e) => setIsButton(e.target.checked)}
                    className="rounded"
                  />
                  Button Style
                </label>
              </div>

              <div>
                <label className="block mb-2">Custom Class</label>
                <input
                  type="text"
                  value={customClass}
                  onChange={(e) => setCustomClass(e.target.value)}
                  className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  placeholder="e.g., my-link custom-class"
                />
              </div>

              <div>
                <label className="block mb-2">Custom ID</label>
                <input
                  type="text"
                  value={customId}
                  onChange={(e) => setCustomId(e.target.value)}
                  className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  placeholder="e.g., main-link"
                />
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Output</h2>
            
            {showPreview && (
              <div className="mb-6">
                <h3 className="text-lg mb-2">Preview</h3>
                <div className={`p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div dangerouslySetInnerHTML={{ __html: generateHTML() }} />
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg mb-2">HTML Code</h3>
              <pre className={`p-4 rounded overflow-x-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <code>{generateHTML()}</code>
              </pre>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                <Copy size={20} /> Copy HTML
              </button>
              <button
                onClick={downloadHTML}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                <Download size={20} /> Download HTML
              </button>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-12`}>
          <div className="flex items-center gap-3 mb-6">
            <Info size={24} className="text-blue-500" />
            <h2 className="text-2xl font-bold">How to Use</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&w=400&q=80"
                alt="Step 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">1. Enter Your Link</h3>
              <p>Start by entering your URL and the text you want to display for your link.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=400&q=80"
                alt="Step 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">2. Customize</h3>
              <p>Customize your link's appearance with colors, sizes, and special attributes.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=400&q=80"
                alt="Step 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">3. Copy & Use</h3>
              <p>Preview your link, copy the HTML code, or download it for your project.</p>
            </div>
          </div>
        </div>

        {/* License Section */}
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <div className="flex items-center gap-3 mb-6">
            <FileText size={24} className="text-blue-500" />
            <h2 className="text-2xl font-bold">License</h2>
          </div>
          <div className="prose max-w-none">
            <p className="mb-4">This Hyperlink Generator is released under the MIT License:</p>
            <div className={`p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
              <p className="mb-2">Copyright (c) 2024 Hyperlink Generator</p>
              <p className="mb-4">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
              <p className="mb-4">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
              <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Hyperlink Generator and Saurabh Team
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;