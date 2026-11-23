import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import type { ProjectProcessData } from '../data/types';
import { siteText } from '../data/siteText';
import './ProjectProcess.css';


function AnimatedHeight({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const updateHeight = () => {
      const nextHeight = element.getBoundingClientRect().height;

      setHeight(previous =>
        previous !== null && Math.abs(previous - nextHeight) < 0.5
          ? previous
          : nextHeight
      );
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="process-auto-height"
      style={height === null ? undefined : { height: `${height}px` }}
    >
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}


function AnimatedProcessText({
  step,
}: {
  step?: ProjectProcessData['steps'][number];
}) {
  const [rendered, setRendered] = useState(step);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!step) return;

    if (rendered?.id === step.id) {
      setVisible(true);
      return;
    }

    if (!rendered) {
      setRendered(step);
      setVisible(true);
      return;
    }

    // Сначала плавно скрываем прежнее описание
    setVisible(false);

    const timer = window.setTimeout(() => {
      // Затем подменяем текст и проявляем новый
      setRendered(step);
      setVisible(true);
    }, 180);

    return () => window.clearTimeout(timer);
  }, [step, rendered]);

  if (!rendered) return null;


  const link = rendered.link;

  const linkIndex = link
    ? rendered.description.indexOf(link.text)
    : -1;

  const content = link && linkIndex !== -1 ? (
    <>
      {rendered.description.slice(0, linkIndex)}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text}
      </a>
      {rendered.description.slice(
        linkIndex + link.text.length
      )}
    </>
  ) : (
    rendered.description
  );

  return (
    <p className={`process-description${visible ? ' is-visible' : ''}`}>
      {content}
    </p>
  );
}


export function ProjectProcess({ data, headingLevel = 3 }: {
  data: ProjectProcessData;
  headingLevel?: 3 | 4 | 5;
}) {
  const id = useId();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lastOpenedId, setLastOpenedId] = useState<string | null>(null);

  const active = data.steps.find(step => step.id === activeId);

  const displayed = data.steps.find(
    step => step.id === (activeId ?? lastOpenedId)
  );
  const activeIndex = active ? data.steps.indexOf(active) : -1;
  const Heading = `h${headingLevel}` as 'h3' | 'h4' | 'h5';
  const text = siteText.projectProcess;
  const hasAIUsage = Boolean(data.aiUsage?.length);
  if (!data.steps.length && !hasAIUsage && !data.aiConfirmedAbsent) return null;
  const layout = data.steps.length === 4 ? 'four' : data.steps.length <= 3 ? 'short' : 'flow';

  return <section className="project-process" aria-labelledby={`${id}-title`}>
    <Heading id={`${id}-title`} className="process-heading">{data.title ?? text.title}</Heading>
    
    {(hasAIUsage || data.aiConfirmedAbsent) && (
      <aside
        className={`process-ai${!hasAIUsage ? ' process-ai--manual' : ''}`}
        aria-labelledby={`${id}-ai`}
      >
        <div id={`${id}-ai`} className="process-ai-title">
          {hasAIUsage ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 3 2.5 6.5L18 12l-6.5 2.5L9 21l-2.5-6.5L0 12l6.5-2.5Z M20 2v6 M17 5h6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 19 7-7 3 3-7 7-3-3Z" />
              <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18" />
              <path d="m2 2 7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          )}

          <strong>
            {hasAIUsage
              ? text.aiTitle
              : 'Без генеративного ИИ — всё ручками'}
          </strong>
        </div>

        {hasAIUsage && (
          <div className="process-ai-items">
            {data.aiUsage!.map((usage, index) => (
              <p key={`${usage.category}-${index}`}>
                <span className="process-ai-category">
                  {text.aiCategories[usage.category]}:
                </span>{' '}
                {usage.description}
              </p>
            ))}
          </div>
        )}
      </aside>
    )}

    {data.steps.length > 0 && <>
      <ol className={`process-track process-track--${layout}`} style={{ '--process-count': data.steps.length } as CSSProperties}>
        {data.steps.map((step, index) => <li key={step.id}>
          <button type="button" className="process-step" id={`${id}-step-${index}`}
            aria-expanded={active?.id === step.id} aria-controls={`${id}-panel`}
            onClick={() => {
              if (activeId === step.id) {
                setActiveId(null);
              } else {
                setLastOpenedId(step.id);
                setActiveId(step.id);
              }
            }}>
            <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="process-step-name">{step.title}</span>
            <svg className="process-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>
          </button>
        </li>)}
      </ol>
      
      <div
        id={`${id}-panel`}
        className={`process-panel${active ? ' is-open' : ''}`}
        role="region"
        aria-hidden={!active}
        aria-labelledby={
          active ? `${id}-step-${activeIndex}` : undefined
        }
      >
        <div className="process-panel-clip">
          <div
            className="process-panel-content"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatedHeight>
              <AnimatedProcessText step={displayed} />
            </AnimatedHeight>
          </div>
        </div>
      </div>

    </>}

  </section>;
}
