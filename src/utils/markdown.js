import { marked } from 'marked';

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
});

export function convertMarkdownToHtml(markdown) {
  return marked(markdown);
}
