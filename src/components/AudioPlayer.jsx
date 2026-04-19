/** Lecteur audio léger pour préviews SFX.
 *  Props: src (chemin ou URL), label (texte affiché)
 */
export default function AudioPlayer({ src, label = 'Écouter' }) {
  return (
    <figure style={{ margin: '1rem 0' }}>
      <figcaption style={{
        fontSize: '0.8rem',
        color: 'var(--sl-color-gray-3)',
        marginBottom: '0.3rem',
      }}>
        🔊 {label}
      </figcaption>
      <audio
        controls
        style={{ width: '100%', accentColor: 'var(--sl-color-accent)' }}
      >
        <source src={src} />
        Ton navigateur ne supporte pas l'audio HTML5.
      </audio>
    </figure>
  );
}
