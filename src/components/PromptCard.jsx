import { useState } from 'react';

// Visually hidden but readable by screen readers
const srOnly = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: 0,
};

export default function PromptCard({ label, prompt }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'copied' | 'error'

  function handleCopy() {
    const succeed = () => { setStatus('copied'); setTimeout(() => setStatus('idle'), 2000); };
    const fail    = () => { setStatus('error');  setTimeout(() => setStatus('idle'), 2000); };

    // execCommand fallback for non-secure contexts or older browsers
    const fallback = () => {
      try {
        const ta = document.createElement('textarea');
        ta.value = prompt;
        ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        succeed();
      } catch (_) {
        fail();
      }
    };

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(prompt).then(succeed).catch(fallback);
    } else {
      fallback();
    }
  }

  // Announced by the live region — separate from button label to avoid double-reading
  const liveMsg =
    status === 'copied' ? 'Prompt copié dans le presse-papier.' :
    status === 'error'  ? 'Impossible de copier le prompt.'     : '';

  return (
    <div style={{
      border: '1px solid var(--sl-color-accent)',
      borderRadius: '0.6rem',
      marginBottom: '1rem',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.8rem',
        background: 'var(--sl-color-accent-low)',
        borderBottom: '1px solid var(--sl-color-accent)',
      }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--sl-color-accent-high)', minWidth: 0 }}>
          {label}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copier le prompt : ${label}`}
          style={{
            flexShrink: 0,
            cursor: 'pointer',
            padding: '0.2rem 0.6rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            border: '1px solid var(--sl-color-accent)',
            borderRadius: '0.3rem',
            background: status === 'copied' ? 'var(--sl-color-accent)' : 'transparent',
            color: status === 'copied'
              ? 'var(--sl-color-white)'
              : status === 'error'
              ? 'var(--sl-color-gray-3)'
              : 'var(--sl-color-accent-high)',
            transition: 'background 0.15s, color 0.15s',
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'copied' ? '✓ Copié' : status === 'error' ? '✗ Erreur' : 'Copier'}
        </button>

        {/* Live region: announces copy result to screen readers without stealing focus */}
        <span role="status" aria-live="polite" aria-atomic="true" style={srOnly}>
          {liveMsg}
        </span>
      </div>

      <pre style={{
        margin: 0,
        padding: '0.8rem',
        fontSize: '0.82rem',
        lineHeight: 1.6,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        background: 'var(--sl-color-gray-6)',
        color: 'var(--sl-color-gray-1)',
        fontFamily: 'inherit',
      }}>
        {prompt}
      </pre>
    </div>
  );
}
