'use client';
import { useState } from 'react';
import styles from './OpenRolesHero.module.css';

interface Props {
  onSearch: (query: string) => void;
}

export default function OpenRolesHero({ onSearch }: Props) {
  const [query, setQuery] = useState('');

  const handleSearch = () => onSearch(query);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Open Positions</span>
        </div>
        <h1 className={styles.h1}>
          Find Your <em>Role</em>
        </h1>
        <p className={styles.desc}>
          We hire exceptional people across all practice areas. Browse below or
          send a spontaneous application if you don&apos;t see a perfect match.
        </p>

        {/* Search bar */}
        <div className={styles.searchWrap}>
          <input
            className={styles.searchInp}
            type="text"
            placeholder="Search by title, team or keyword…"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              onSearch(e.target.value);
            }}
            onKeyDown={handleKey}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="7" cy="7" r="5"/><line x1="11" y1="11" x2="15" y2="15"/>
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}