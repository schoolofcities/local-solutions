import { marked } from 'marked';

const renderer = new marked.Renderer();

renderer.link = ({ href, text }) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

renderer.image = ({ href, text, title }) => {
    if (!href) return '';
    const titleAttr = title ? ` title="${title}"` : '';
    return `<img src="${href}" alt="${text}"${titleAttr} style="max-width: 100%; max-height: 55dvh; width: 100%; object-fit: cover;" />`;
};

marked.use({ renderer });

export function parseMarkdown(text) {
    return marked(text);
}