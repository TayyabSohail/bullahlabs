/** Site-wide backdrop: the paper darkens a little toward its edges, like a
 * page that has been in the sun. No glows, nothing that draws lines. */
export function Backdrop() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'
      style={{
        background:
          'radial-gradient(ellipse 110% 90% at 50% 35%, transparent 55%, hsl(32 30% 55% / 0.16) 100%)',
      }}
    />
  );
}
