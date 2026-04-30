/** Fiche personnage compacte avec flip sur clic.
 *  Props: name, role, faction, image (URL optionnelle), description
 */
import { useState } from 'react';

export default function CharacterCard({ name, role, faction, image, description }) {
  const [flipped, setFlipped] = useState(false);

  // Extraire les initiales pour le placeholder
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      title="Cliquer pour voir le détail"
      style={{
        cursor: 'pointer',
        border: '2px solid var(--sl-color-accent)',
        borderRadius: '0.6rem',
        padding: '1rem',
        maxWidth: '280px',
        background: flipped ? 'var(--sl-color-gray-6)' : 'var(--sl-color-gray-5)',
        transition: 'background 0.2s, transform 0.2s',
        userSelect: 'none',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'var(--sl-color-accent-high)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--sl-color-accent)';
      }}
    >
      {!flipped ? (
        <>
          {image ? (
            <img src={image} alt={name} style={{ width: '100%', borderRadius: '0.4rem', marginBottom: '0.6rem' }} />
          ) : (
            <div style={{
              width: '100%',
              height: '120px',
              borderRadius: '0.4rem',
              marginBottom: '0.6rem',
              background: 'linear-gradient(135deg, var(--sl-color-accent-low), var(--sl-color-accent))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--sl-color-accent-high)',
            }}>
              {initials}
            </div>
          )}
          <h3 style={{ 
            margin: 0, 
            color: 'var(--sl-color-white)',
            fontSize: '1.1rem',
            fontWeight: 700,
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          }}>{name}</h3>
          <p style={{ 
            margin: '0.2rem 0 0', 
            fontSize: '0.85rem', 
            color: 'var(--sl-color-accent-high)',
            fontWeight: 500,
          }}>
            {role} — {faction}
          </p>
          <span style={{
            display: 'block',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: 'var(--sl-color-gray-3)',
            opacity: 0.8,
            fontStyle: 'italic',
          }}>
            Cliquez pour voir la description
          </span>
        </>
      ) : (
        <div style={{ position: 'relative' }}>
          <p style={{ 
            margin: 0, 
            fontSize: '0.875rem', 
            lineHeight: 1.6,
            color: 'var(--sl-color-gray-1)',
          }}>{description}</p>
          <span style={{
            display: 'block',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: 'var(--sl-color-gray-3)',
            opacity: 0.8,
            fontStyle: 'italic',
          }}>
            Cliquez pour revenir
          </span>
        </div>
      )}
    </div>
  );
}
