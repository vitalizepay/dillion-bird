// src/app/about/components/OurPeople/OurPeople.tsx
import styles from './OurPeople.module.css';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedIn: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Praveen',
    position: 'Managing Partner',
    image: '/team-praveen.png',
    linkedIn: 'https://linkedin.com/in/praveen',
  },
  {
    id: 2,
    name: 'Dinesh',
    position: 'Managing Partner',
    image: '/team-dinesh.jpg',
    linkedIn: 'https://www.linkedin.com/in/dinesh-prasanna-r-827249111/',
  },
  {
    id: 3,
    name: 'Senthilnathan ',
    position: 'Senior Cloud and AI Consultant',
    image: '/team-senthil.jpeg',
    linkedIn: 'https://www.linkedin.com/in/senthilnathane',
  },
];

export default function OurPeople() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our People</h2>
      </div>

      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.position}>{member.position}</p>
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedInLink}
                  >
                    <img src="/linkedlin-logo.png" alt="LinkedIn" className={styles.linkedInIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
