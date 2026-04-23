import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFileText } from 'react-icons/fi';
import type { Topic } from '../data/roadmaps';

interface TopicAccordionProps {
  topic: Topic;
  index: number;
}

export default function TopicAccordion({ topic, index }: TopicAccordionProps) {
  const [isOpen, setIsOpen] = useState(index === 0); // First topic open by default

  // Simple markdown-like rendering for notes
  const renderNotes = (notes: string) => {
    // Split into lines and process
    const lines = notes.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={elements.length} className="ml-6 list-disc space-y-1">
              {currentList.map((item, i) => (
                <li key={i} className="text-slate-700 dark:text-slate-300">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={elements.length} className="ml-6 list-decimal space-y-1">
              {currentList.map((item, i) => (
                <li key={i} className="text-slate-700 dark:text-slate-300">
                  {renderInline(item)}
                </li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    const renderInline = (text: string): JSX.Element => {
      // Handle inline code
      const parts = text.split(/(`[^`]+`)/g);
      return (
        <span>
          {parts.map((part, i) => {
            if (part.startsWith('`') && part.endsWith('`')) {
              return (
                <code
                  key={i}
                  className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-cyan-700 dark:bg-slate-800 dark:text-cyan-300"
                >
                  {part.slice(1, -1)}
                </code>
              );
            }
            // Handle bold
            const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
            return (
              <span key={i}>
                {boldParts.map((bp, j) => {
                  if (bp.startsWith('**') && bp.endsWith('**')) {
                    return (
                      <strong key={j} className="font-semibold text-slate-900 dark:text-white">
                        {bp.slice(2, -2)}
                      </strong>
                    );
                  }
                  return bp;
                })}
              </span>
            );
          })}
        </span>
      );
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      // Headers
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h4 key={i} className="mt-4 mb-2 text-lg font-semibold text-slate-900 dark:text-white">
            {trimmed.slice(3)}
          </h4>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h5 key={i} className="mt-3 mb-1 text-base font-semibold text-slate-800 dark:text-slate-200">
            {trimmed.slice(4)}
          </h5>
        );
      }
      // Unordered list
      else if (trimmed.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmed.slice(2));
      }
      // Ordered list
      else if (/^\d+\.\s/.test(trimmed)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(trimmed.replace(/^\d+\.\s/, ''));
      }
      // Code blocks
      else if (trimmed.startsWith('```')) {
        flushList();
        // Find the closing ```
        let codeContent = '';
        let j = i + 1;
        while (j < lines.length && !lines[j].trim().startsWith('```')) {
          codeContent += lines[j] + '\n';
          j++;
        }
        elements.push(
          <pre
            key={i}
            className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950"
          >
            <code>{codeContent.trim()}</code>
          </pre>
        );
      }
      // Empty lines
      else if (trimmed === '') {
        flushList();
      }
      // Regular paragraph
      else if (trimmed.length > 0) {
        flushList();
        elements.push(
          <p key={i} className="my-2 text-slate-700 dark:text-slate-300">
            {renderInline(trimmed)}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/60 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-slate-900/60">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {topic.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {topic.subtopics && topic.subtopics.length > 0 && (
            <span className="mr-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {topic.subtopics.length} subtopics
            </span>
          )}
          {isOpen ? (
            <FiChevronUp className="h-5 w-5 text-slate-500" />
          ) : (
            <FiChevronDown className="h-5 w-5 text-slate-500" />
          )}
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-slate-200/70 px-6 py-5 dark:border-white/10">
          {/* Subtopics */}
          {topic.subtopics && topic.subtopics.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {topic.subtopics.map((sub, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gradient-to-r from-cyan-50 to-fuchsia-50 px-3 py-1 text-xs font-medium text-slate-700 dark:from-cyan-900/20 dark:from-fuchsia-900/20 dark:text-slate-300"
                >
                  {sub}
                </span>
              ))}
            </div>
          )}

          {/* Notes Content */}
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="flex items-start gap-2">
              <FiFileText className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {renderNotes(topic.notes)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}