/** Fiche personnage compacte avec flip sur clic.
 *  Props: name, role, faction, image (URL optionnelle), description
 */
import { useState } from 'react';

export default function CharacterCard({ name, role, faction, image, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      title="Cliquer pour voir le détail"
      style={{
        cursor: 'pointer',
        border: '1px solid var(--sl-color-accent)',
        borderRadius: '0.6rem',
        padding: '1rem',
        maxWidth: '280px',
        background: flipped ? 'var(--sl-color-gray-6)' : 'var(--sl-color-gray-5)',
        transition: 'background 0.2s',
        userSelect: 'none',
      }}
    >
      {!flipped ? (
        <>
          {image && (
            <img src={image} alt={name} style={{ width: '100%', borderRadius: '0.4rem', marginBottom: '0.6rem' }} />
          )}
          <h3 style={{ margin: 0, color: 'var(--sl-color-accent-high)' }}>{name}</h3>
          <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--sl-color-gray-3)' }}>
            {role} — {faction}
          </p>
        </>
      ) : (
        <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6 }}>{description}</p>
      )}
    </div>
  );
}
