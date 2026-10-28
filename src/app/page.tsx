"use client";

import { useState } from "react";
import AdmissionsAndServices from "@/components/AdmissionsAndServices";
import Navbar from "@/components/Navbar";
import NoticeTicker from "@/components/NoticeTicker";
import HeroSection from "@/components/HeroSection";
import StartHereCard from "@/components/StartHereCard";
import ViceChancellorWelcome from "@/components/ViceChancellorWelcome";
import JourneySection from "@/components/JourneySection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import LifeAtHugSection from "@/components/LifeAtHugSection";
import IctDrivenSection from "@/components/IctDrivenSection";
import StudentPerspectives from "@/components/StudentPerspectives";
import LearningAndResearch from "@/components/LearningAndResearch";
import SchoolsAndFaculties from "@/components/SchoolsAndFaculties";
import NewsAndNotices from "@/components/NewsAndNotices";
import Footer from "@/components/Footer";
import { UniversityInformation, UniversityGallery, ManagementTeam, UniversityContact, UniversityFAQ, EducationPartners } from "@/components/UniversityContent";

type PortalTab = "student" | "applicant" | "staff" | "library";
export default function Home() {
  const [searchFilter, setSearchFilter] = useState("");
  const openPortal = (tab: PortalTab = "student") => { window.location.href = tab === "library" ? "/library" : tab === "applicant" ? "/#admissions" : "/#portal"; };
  const openApply = (_id?: string) => { window.location.assign("https://portal.hug.edu.ng"); };
  return <main id="main-content" className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
    <Navbar onOpenPortal={openPortal} onOpenApply={openApply}/>
    <NoticeTicker/>
    <HeroSection onOpenApply={() => openApply()} onOpenPortal={() => openPortal()}/>
    <StartHereCard onOpenPortal={() => openPortal()} onOpenApply={() => openApply()} onSearch={setSearchFilter}/>
    <ViceChancellorWelcome/>
    <UniversityInformation/>
    <JourneySection onOpenPortal={() => openPortal("applicant")}/>
    <OpportunitiesSection onOpenApply={() => openApply()}/>
    <LifeAtHugSection/>
    <IctDrivenSection onOpenPortal={() => openPortal()} onOpenApply={() => openApply()}/>
    <StudentPerspectives/>
    <LearningAndResearch onOpenApply={() => openApply()}/>
    <SchoolsAndFaculties onOpenApply={openApply} searchFilter={searchFilter}/>
    <AdmissionsAndServices onOpenApply={() => openApply()}/>
    <EducationPartners/>
    <NewsAndNotices onOpenApply={() => openApply()}/>
    <UniversityGallery/>
    <ManagementTeam/>
    <UniversityFAQ/>
    <UniversityContact/>
    <Footer onOpenPortal={openPortal} onOpenApply={() => openApply()}/>
  </main>;
}
