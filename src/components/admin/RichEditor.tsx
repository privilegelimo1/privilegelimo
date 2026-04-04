"use client";

import { useState, useRef, useCallback } from "react";

interface EditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

type FormatAction = {
  label: string;
  icon: string;
  action: (selected: string, full: string, start: number, end: number) => { text: string; newStart: number; newEnd: number };
};

export default function RichEditor({ value, onChange, placeholder }: EditorProps) {
  const [preview, setPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyFormat = useCallback((
    wrapper: string,
    blockPrefix?: string
  ) => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = value.slice(start, end);
    let newVal: string;
    let newStart: number;
    let newEnd: number;

    if (blockPrefix) {
      const lines = selected ? selected.split("\n") : [""];
      const prefixed = lines.map((l) => `${blockPrefix} ${l}`).join("\n");
      newVal = value.slice(0, start) + prefixed + value.slice(end);
      newStart = start;
      newEnd = start + prefixed.length;
    } else {
      const wrapped = `${wrapper}${selected || "text"}${wrapper}`;
      newVal = value.slice(0, start) + wrapped + value.slice(end);
      newStart = start + wrapper.length;
      newEnd = newStart + (selected || "text").length;
    }

    onChange(newVal);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newStart, newEnd);
    });
  }, [value, onChange]);

  const insertBlock = useCallback((template: string) => {
    const ta = textareaRef.current;
    if (!ta) return;
    const pos = ta.selectionStart;
    const newVal = value.slice(0, pos) + "\n" + template + "\n" + value.slice(pos);
    onChange(newVal);
    requestAnimationFrame(() => ta.focus());
  }, [value, onChange]);

  const tools = [
    { label: "H2", title: "Heading 2", action: () => applyFormat("", "##") },
    { label: "H3", title: "Heading 3", action: () => applyFormat("", "###") },
    { label: "B", title: "Bold", action: () => applyFormat("**"), style: { fontWeight: 700 } },
    { label: "I", title: "Italic", action: () => applyFormat("*"), style: { fontStyle: "italic" } },
    { label: "—", title: "Divider", action: () => insertBlock("---") },
    { label: "UL", title: "Bullet list", action: () => applyFormat("", "-") },
    { label: "OL", title: "Numbered list", action: () => applyFormat("", "1.") },
    { label: '" "', title: "Blockquote", action: () => applyFormat("", ">") },
    { label: "</>", title: "Inline code", action: () => applyFormat("`") },
    { label: "IMG", title: "Insert image", action: () => insertBlock("![Alt text](/images/blog/image.webp)") },
    { label: "🔗", title: "Insert link", action: () => applyFormat("", undefined) },
  ];

  // Simple MDX preview renderer (converts markdown to basic HTML for preview)
  const renderPreview = (md: string) => {
    return md
      .replace(/^### (.+)$/gm, '<h3 style="font-size:1.1rem;font-weight:400;margin:1.5rem 0 0.5rem;color:white">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 style="font-size:1.4rem;font-weight:300;margin:2rem 0 0.75rem;color:white">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 style="font-size:1.8rem;font-weight:300;margin:2rem 0 1rem;color:white">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:white">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:rgba(171,84,97,0.15);padding:2px 6px;border-radius:4px;font-size:0.85em;color:#e8c97a">$1</code>')
      .replace(/^> (.+)$/gm, '<blockquote style="border-left:2px solid #AB5461;padding-left:1rem;margin:1rem 0;color:rgba(255,255,255,0.5)">$1</blockquote>')
      .replace(/^- (.+)$/gm, '<li style="margin:0.25rem 0;color:rgba(255,255,255,0.7)">$1</li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li style="margin:0.25rem 0;color:rgba(255,255,255,0.7)">$2</li>')
      .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" style="max-width:100%;border-radius:12px;margin:1rem 0" />')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:#AB5461;text-decoration:underline">$1</a>')
      .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:2rem 0" />')
      .replace(/\n\n/g, '</p><p style="margin:0.75rem 0;line-height:1.8;color:rgba(255,255,255,0.65)">')
      .replace(/^(?!<[h|b|i|c|l|a|p|hr])(.+)$/gm, '<p style="margin:0.75rem 0;line-height:1.8;color:rgba(255,255,255,0.65)">$1</p>');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div
        className="flex items-center gap-1 px-3 py-2 flex-wrap"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {tools.map((tool) => (
          <button
            key={tool.label}
            type="button"
            title={tool.title}
            onClick={tool.action}
            className="px-2.5 py-1.5 rounded-lg text-xs text-white/50 hover:text-white
                       hover:bg-white/8 transition-all duration-150 font-mono"
          >
            {tool.label}
          </button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPreview(false)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
              !preview ? "text-white bg-white/8" : "text-white/30 hover:text-white/60"
            }`}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => setPreview(true)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
              preview ? "text-white bg-white/8" : "text-white/30 hover:text-white/60"
            }`}
          >
            Preview
          </button>
        </div>
      </div>

      {/* Editor / Preview */}
      {preview ? (
        <div
          className="flex-1 p-6 overflow-y-auto"
          style={{ minHeight: "400px" }}
          dangerouslySetInnerHTML={{
            __html: value
              ? renderPreview(value)
              : '<p style="color:rgba(255,255,255,0.2)">Nothing to preview yet…</p>',
          }}
        />
      ) : (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Start writing your post in Markdown/MDX…\n\nUse the toolbar above to format text, or type markdown directly.\n\n## Example heading\n\nYour paragraph here…"}
          className="flex-1 resize-none bg-transparent text-white/80 text-sm leading-relaxed
                     p-6 focus:outline-none placeholder-white/15 font-mono"
          style={{ minHeight: "400px" }}
          spellCheck
        />
      )}
    </div>
  );
}
