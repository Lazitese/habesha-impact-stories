
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import BoardMembers from "@/components/home/BoardMembers";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ProjectsPreview />
      <GalleryPreview />
      <BoardMembers />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
