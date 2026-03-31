import styles from './OurStoryJourney.module.css';

const milestones = [
  {
    year: '2009',
    tag: 'The Beginning',
    title: 'Founded in Dubai with a Clear Mission',
    desc: 'Dillon & Bird was established in Dubai with a founding team of three senior advisors, each with deep roots in GCC business, finance, and market entry. The firm\'s first mandate was a market entry strategy for a UK retail group entering Saudi Arabia.',
  },
  {
    year: '2012',
    tag: 'Expansion',
    title: 'Expanding Across the GCC',
    desc: 'With a growing reputation for rigorous, results-oriented advice, the firm expanded its coverage to Saudi Arabia, Qatar, and Kuwait — serving a mix of multinationals entering the region and local champions seeking international growth.',
  },
  {
    year: '2016',
    tag: 'Innovation',
    title: 'Launching the Technology Practice',
    desc: 'Recognising the transformative role of technology in business growth, we established a dedicated technology consulting practice — helping GCC businesses navigate digital transformation, fintech adoption, and technology-led operational change.',
  },
  {
    year: '2019',
    tag: 'Milestone',
    title: '100th Business Transformation',
    desc: 'We celebrated our 100th successful business transformation engagement — a milestone that validated our model and deepened our commitment to building long-term partnerships rather than transactional advisory relationships.',
  },
  {
    year: '2022',
    tag: 'Present Day',
    title: 'Meydan HQ & 200+ Transformations',
    desc: 'Today, operating from our flagship office at the Meydan Hotel in Dubai, Dillon & Bird has completed over 200 business transformations, with a team of 40+ advisors serving clients from startup to enterprise across the full spectrum of strategic need.',
  },
];

export default function OurStoryJourney() {
  return (
    <section className={styles.sec}>

      {/* Header */}
      <div className={styles.hdr}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Our Journey</span>
        </div>
        <h2 className={styles.h2}>
          Milestones That <em>Shaped</em> Us
        </h2>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {/* Vertical line */}
        <div className={styles.line} />

        {milestones.map((m, i) => (
          <div className={styles.item} key={i}>
            {/* Year box */}
            <div className={styles.yearBox}>
              <span className={styles.year}>{m.year}</span>
            </div>

            {/* Content */}
            <div className={styles.content}>
              <span className={styles.tag}>{m.tag}</span>
              <h3 className={styles.title}>{m.title}</h3>
              <p className={styles.desc}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}