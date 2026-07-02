import { marked } from 'marked';

const renderer = new marked.Renderer();

renderer.link = ({ href, text }) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

renderer.image = ({ href, text, title }) => {
    if (!href) return '';
    const titleAttr = title ? ` title="${title}"` : '';
    let photoCredit;
    let index = title.indexOf("Photo credit:"); 
    if (index !== -1) {
        photoCredit = title.slice(index, title.length);
        title = title.slice(0, index);
        console.log(photoCredit, title);
    }

    return `<div><img src="${href}" alt="${text}"${titleAttr} style="max-width: 100%; max-height: 55dvh; width: 100%; object-fit: cover;" />
    ${title ? `<div class="caption-container"><p><span class="caption-text">${title}</span>${photoCredit ? `<span class="caption-source">${photoCredit}</span>` : ""}</p></div>` : ""}
    </div>`;
};

marked.use({ renderer });

export function parseMarkdown(text) {
    return marked(text);
}