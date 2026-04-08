import styles from './TechServices.module.css';

const services = [
  {
    icon: '🤖',
    title: 'AI Consulting & Strategy',
    desc: 'Discover untapped AI advantages with bespoke solutions designed around your business DNA. From use-case identification to ROI-validated roadmaps.',
  },
  {
    icon: '✨',
    title: 'Generative AI Development',
    desc: 'Harness cutting-edge generative models to automate, create, and innovate at scale. Custom LLM integrations, RAG pipelines, and AI-powered workflows.',
  },
  {
    icon: '☁️',
    title: 'Cloud Migration',
    desc: 'Architect scalable, secure, and cost-efficient cloud ecosystems on AWS, Azure, or GCP. Lift-and-shift, re-platform, or full cloud-native transformation.',
  },
  {
    icon: '🔴',
    title: 'OpenShift & Kubernetes',
    desc: 'Enterprise-grade OpenShift 4.x deployments, cluster management, RHACM multi-cluster governance, and Kubernetes workload orchestration for production environments.',
  },
  {
    icon: '🖥️',
    title: 'On-Premise Infrastructure',
    desc: 'Design and deployment of on-prem and hybrid cloud infrastructure. Hardware sizing, network architecture, virtualisation, and private cloud with OpenStack or VMware.',
  },
  {
    icon: '🔄',
    title: 'DevSecOps & CI/CD',
    desc: 'End-to-end DevSecOps pipelines with Tekton, ArgoCD, GitLab CI, and Helm. Shift-left security, automated testing, and GitOps-driven delivery at scale.',
  },
  {
    icon: '📊',
    title: 'Data Engineering & Analytics',
    desc: 'Build scalable data platforms, real-time pipelines, and analytics dashboards. Turn raw data into business intelligence that drives decisions.',
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    desc: 'Identify, design, and implement automation for repetitive business processes — reducing manual overhead and error rates with AI-assisted workflows.',
  },
  {
    icon: '🔍',
    title: 'Technology Due Diligence',
    desc: 'Independent assessment of technology stacks, architecture decisions, and engineering teams for investment, acquisition, or strategic review purposes.',
  },
];

export default function TechServices() {
  return (
    <section className={styles.sec} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>What We Do</span>
          </div>
          <h2 className={styles.h2}>Strategic Solutions,<br />Measurable Impact</h2>
          <p className={styles.sub}>
            From AI strategy through to production deployment — we cover the full technology
            stack that modern GCC enterprises need to compete and grow.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(s => (
            <div className={styles.card} key={s.title}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}