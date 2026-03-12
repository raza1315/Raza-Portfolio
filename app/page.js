import React from 'react'
import Navbar from '@/Components/Navbar'
import HomePage from '@/Components/HomePage'
import AboutSection from '@/Components/AboutSection'
import SkillsSection from '@/Components/SkillsSection'
import ProjectsSection from '@/Components/ProjectsSection'
import CertificatesSection from '@/Components/CertificatesSection'
import ContactSection from '@/Components/ContactSection'

export default function Page() {
  return (
    <main style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <HomePage />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  )
}
