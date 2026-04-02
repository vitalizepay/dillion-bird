'use client';
import { useState } from 'react';
import OpenRolesHero from './components/OpenRolesHero/OpenRolesHero';
import OpenRolesList from './components/OpenRolesList/OpenRolesList';

export default function OpenRolesClient() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <OpenRolesHero onSearch={setSearchQuery} />
      <OpenRolesList searchQuery={searchQuery} />
    </>
  );
}