import { useState, useRef } from 'react';

/**
 * Onglets de production accessibles (ARIA tablist pattern).
 * Props: tabs = [{ id, label, icon, content: [{ title, items: [string] }] }]
 *
 * Navigation clavier : Flèche Droite/Gauche, Home, End.
 * items peut contenir du HTML simple (<strong>, etc.) — contenu statique uniquement.
 */
export default function ProductionTabs({ tabs = [] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');
  const tabRefs = useRef([]);

  function handleKeyDown(e, index) {
    const len = tabs.length;
    let next = -1;
    if      (e.key === 'ArrowRight') next = (index + 1) % len;
    else if (e.key === 'ArrowLeft')  next = (index - 1 + len) % len;
    else if (e.key === 'Home')       next = 0;
    else if (e.key === 'End')        next = len - 1;

    if (next !== -1) {
      e.preventDefault();
      setActive(tabs[next].id);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <div style={{ border: '1px solid var(--sl-color-accent)', borderRadius: '0.6rem', overflow: 'hidden' }}>

      {/* Tab bar — overflowX:auto for narrow screens, scrollbar hidden visually */}
      <div
        role="tablist"
        aria-label="Utilisation en production"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          borderBottom: '1px solid var(--sl-color-accent)',
          background: 'var(--sl-color-accent-low)',
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`prod-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`prod-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              ref={(el) => { tabRefs.current[index] = el; }}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                flexShrink: 0,
                padding: '0.5rem 0.75rem',
                fontSize: '0.78rem',
                fontWeight: isActive ? 700 : 400,
                border: 'none',
                borderBottom: isActive
                  ? '2px solid var(--sl-color-accent-high)'
                  : '2px solid transparent',
                background: isActive ? 'var(--sl-color-gray-6)' : 'transparent',
                // gray-5 gives sufficient contrast on accent-low in both themes
                color: isActive ? 'var(--sl-color-accent-high)' : 'var(--sl-color-gray-5)',
                cursor: 'pointer',
                transition: 'background 0.15s, color 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.icon && (
                <span aria-hidden="true" style={{ marginRight: '0.3rem' }}>{tab.icon}</span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* All panels rendered in DOM; inactive ones hidden via HTML hidden attribute
          so aria-controls references remain valid at all times. */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`prod-panel-${tab.id}`}
          aria-labelledby={`prod-tab-${tab.id}`}
          hidden={tab.id !== active}
          style={{ padding: '1rem', background: 'var(--sl-color-gray-6)' }}
        >
          {tab.content.map((section, i) => (
            <div key={i} style={{ marginBottom: i < tab.content.length - 1 ? '1rem' : 0 }}>
              <p style={{
                margin: '0 0 0.4rem',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--sl-color-accent-high)',
              }}>
                {section.title}
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--sl-color-gray-1)' }}>
                    {/* dangerouslySetInnerHTML used for static <strong> markup — not user input */}
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
