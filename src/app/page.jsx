
import Banner from '@/components/home/Banner';
import BringBusiness from '@/components/home/BringBussiness';
import HomeServicesCard from '@/components/home/HomeServicesCard';
import LeadingCompany from '@/components/home/LeadingCompany';
import ShareExperience from '@/components/home/ShareExperience';
import React from 'react'

export default function Home() {
  // "background-image: url('your-image.jpg'); background-size: auto; background-position: center;"
  return (
    <div>
      <Banner />
      <HomeServicesCard />
      <LeadingCompany />
      <BringBusiness />
      <ShareExperience />
    </div>
  );
}
