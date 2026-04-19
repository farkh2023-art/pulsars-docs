import { useState } from 'react';

/** Affiche une timeline verticale interactive.
 *  Props: events = [{ date, title, description }]
 */
export default function Timeline({ events = [] }) {
  const [active, setActive] = useState(null);

  return (
    <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--sl-color-accent)' }}>
      {events.map((ev, i) => (
        <div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          style={{
            marginBottom: '1.5rem',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          {/* point sur la ligne */}
          <span style={{
            position: 'absolute',
            left: '-2.45rem',
            width: '0.75rem',
            height: '0.75rem',
            borderRadius: '50%',
            background: active === i ? 'var(--sl-color-accent-high)' : 'var(--sl-color-accent)',
            top: '0.25rem',
            transition: 'background 0.2s',
          }} />

          <time style={{ fontSize: '0.75rem', color: 'var(--sl-color-gray-3)' }}>{ev.date}</time>
          <p style={{ margin: '0.1rem 0 0', fontWeight: 600, color: 'var(--sl-color-white)' }}>{ev.title}</p>

          {active === i && (
            <p style={{
              marginTop: '0.4rem',
              padding: '0.6rem 0.8rem',
              background: 'var(--sl-color-gray-6)',
              borderRadius: '0.4rem',
              fontSize: '0.875rem',
              lineHeight: 1.5,
            }}>
              {ev.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
