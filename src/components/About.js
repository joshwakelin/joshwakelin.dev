import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [inViewport, setInViewport] = useState(true);

  // =========================
  // TUNES (Last.fm only)
  // =========================
  const [tunes, setTunes] = useState([]);
  const [tunesLoading, setTunesLoading] = useState(true);
  const [tunesError, setTunesError] = useState('');

  // CRA env vars ONLY
  const LASTFM_KEY = process.env.REACT_APP_LASTFM_KEY;
  const LASTFM_USER = process.env.REACT_APP_LASTFM_USER;

  // --- 3D frame state ---
  const imgWrapRef = useRef(null);
  const stageRef = useRef(null);
  const glareRef = useRef(null);
  const rafRef = useRef(0);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setInViewport(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const apply3D = (clientX, clientY) => {
    const wrap = imgWrapRef.current;
    const stage = stageRef.current;
    const glare = glareRef.current;
    if (!wrap || !stage) return;

    const rect = wrap.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;

    const nx = (px - 0.5) * 2;
    const ny = (py - 0.5) * 2;

    const MAX_ROT = 10;
    const MAX_SHIFT = 10;

    const rotY = nx * MAX_ROT;
    const rotX = -ny * MAX_ROT;
    const tx = nx * MAX_SHIFT;
    const ty = ny * MAX_SHIFT;

    stage.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    if (glare) {
      glare.style.transform = `translate(${px * 100}%, ${py * 100}%)`;
      glare.style.opacity = '1';
    }
  };

  const onMouseMove = (e) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => apply3D(e.clientX, e.clientY));
  };

  const reset3D = () => {
    const stage = stageRef.current;
    const glare = glareRef.current;
    if (stage) stage.style.transform = 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
    if (glare) glare.style.opacity = '0';
  };

  useEffect(() => {
    if (!inViewport) reset3D();
  }, [inViewport]);

  // =========================
  // Fetch last 3 tracks (Last.fm)
  // =========================
  useEffect(() => {
    const controller = new AbortController();

    const run = async () => {
      try {
        setTunesLoading(true);
        setTunesError('');

        if (!LASTFM_KEY || !LASTFM_USER) {
          setTunesError(
            'Missing env vars. Create a .env file with REACT_APP_LASTFM_KEY and REACT_APP_LASTFM_USER, then restart the dev server.'
          );
          setTunes([]);
          return;
        }

        const url =
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks` +
          `&user=${encodeURIComponent(LASTFM_USER)}` +
          `&api_key=${encodeURIComponent(LASTFM_KEY)}` +
          `&format=json&limit=3&extended=1`;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Last.fm HTTP ${res.status}`);

        const data = await res.json();
        const tracks = (data?.recenttracks?.track || []).slice(0, 3);

        const mapped = tracks.map((t) => {
          const title = t?.name || 'Unknown track';
          const artist = t?.artist?.name || t?.artist || 'Unknown artist';
          const album = t?.album?.['#text'] || t?.album?.name || '';

          const images = Array.isArray(t?.image) ? t.image : [];
          const image =
            images.find((i) => i.size === 'extralarge')?.['#text'] ||
            images.find((i) => i.size === 'large')?.['#text'] ||
            images[images.length - 1]?.['#text'] ||
            '';

          // Spotify link WITHOUT Spotify API (search)
          const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(
            `${artist} ${title}`
          )}`;

          return { title, artist, album, image, spotifyUrl };
        });

        setTunes(mapped);
      } catch (err) {
        if (err?.name === 'AbortError') return;
        setTunesError('Could not load recent tracks from Last.fm.');
        setTunes([]);
      } finally {
        setTunesLoading(false);
      }
    };

    run();
    return () => controller.abort();
  }, [LASTFM_KEY, LASTFM_USER]);

  return (
    <section className="about section" id="about" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="container flex-center">
        <h1 className="section-title-01" data-aos-duration="1000" data-aos="fade-down">
          About Me
        </h1>

        <div className="content flex-center">
          {/* OUTER FRAME (keeps clipping) */}
          <div
            className="about-img"
            ref={imgWrapRef}
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos="fade-up"
            onMouseMove={inViewport ? onMouseMove : undefined}
            onMouseLeave={reset3D}
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              perspective: '900px',
            }}
          >
            {/* STAGE: the "edges" / frame that moves in 3D */}
            <div
              ref={stageRef}
              style={{
                willChange: 'transform',
                transform: 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)',
                transition: inViewport ? 'transform 120ms ease-out' : 'transform 500ms ease-in',
                transformStyle: 'preserve-3d',
                position: 'relative',
              }}
            >
              {/* IMAGE stays still */}
              <img
                src="images/josh.jpg"
                alt="Josh Wakelin, a 23-year-old software developer"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'none',
                }}
              />

              {/* Subtle edge shading for depth */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 -20px 40px rgba(0,0,0,0.20)',
                  borderRadius: 'inherit',
                }}
              />

              {/* Moving glare highlight */}
              <div
                ref={glareRef}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '140%',
                  height: '140%',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 180ms ease',
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.25), rgba(255,255,255,0) 55%)',
                  mixBlendMode: 'screen',
                  transform: 'translate(50%, 50%)',
                }}
              />
            </div>
          </div>

          <div className="about-info">
            <div className="description">
              <h2 data-aos="fade" data-aos-delay="200">
                About Me
              </h2>

              <p data-aos="fade" data-aos-delay="250">
                I am a software developer with a particular interest in artificial intelligence and cybersecurity. This
                portfolio contains a list of my most recent projects and experience, with a link to also view or download my CV.
              </p>

              <a
                href="/files/wakelin-joshua-data-science.pdf"
                className="btn"
                data-aos="fade"
                data-aos-delay="300"
                aria-label="Download my CV"
              >
                Download CV <i className="fa-solid fa-download" aria-hidden="true"></i>
              </a>

             

              <h2 className="description-section-02" data-aos="fade" data-aos-delay="200">
                What I'm Listening To
              </h2>

              <p data-aos="fade" data-aos-delay="250">
                My most recently listened to songs (via last.fm)
              </p>

              <div
                className="tunes-grid"
                data-aos="fade"
                data-aos-delay="250"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '12px',
                  marginTop: '14px',
                }}
              >
                {tunesLoading && (
                  <div style={{ gridColumn: '1 / -1', color: 'var(--third-color)' }}>Loading…</div>
                )}

                {!tunesLoading && tunesError && (
                  <div style={{ gridColumn: '1 / -1', color: 'var(--third-color)' }}>{tunesError}</div>
                )}

                {!tunesLoading && !tunesError && tunes.map((t, idx) => (
                  <a
                    key={idx}
                    href={t.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'block',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)',
                      background: 'rgba(103, 103, 105, 0.1)',
                      aspectRatio: '1 / 1',
                      position: 'relative',
                    }}
                    aria-label={`Open ${t.title} by ${t.artist} on Spotify`}
                    title={`Open Spotify search: ${t.artist} — ${t.title}`}
                  >
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={`${t.album || t.title} cover`}
                        loading="lazy"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : null}

                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.05))',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        left: 10,
                        right: 10,
                        bottom: 10,
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        lineHeight: 1.2,
                        textShadow: '0 2px 10px rgba(0,0,0,0.35)',
                      }}
                    >
                      <div style={{ marginBottom: 6 }}>{t.title}</div>
                      <div style={{ fontWeight: 500, opacity: 0.9, fontSize: '0.85rem' }}>
                        {t.artist}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
