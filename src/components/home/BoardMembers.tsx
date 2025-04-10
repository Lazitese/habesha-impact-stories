
import SectionHeading from "../shared/SectionHeading";
import BoardMemberCard from "../shared/BoardMemberCard";

const boardMembers = [
  {
    name: "Dr. Hirut Tadesse",
    title: "Chairperson",
    image: "https://images.unsplash.com/photo-1587612049655-c1030366a74a?q=80&w=1000&auto=format&fit=crop",
    bio: "Dr. Hirut brings over 20 years of experience in international development and has led numerous successful initiatives across Africa."
  },
  {
    name: "Samuel Bekele",
    title: "Executive Director",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    bio: "With a background in social entrepreneurship, Samuel has dedicated his career to creating sustainable solutions for communities in Ethiopia."
  },
  {
    name: "Meron Haile",
    title: "Director of Programs",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1000&auto=format&fit=crop",
    bio: "Meron oversees all programs and ensures they align with our mission to create lasting impact in Ethiopian communities."
  },
  {
    name: "Dr. Yonas Asfaw",
    title: "Medical Director",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1000&auto=format&fit=crop",
    bio: "Dr. Yonas leads our healthcare initiatives and has pioneered innovative approaches to rural healthcare delivery."
  }
];

const BoardMembers = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Board Members" 
          subtitle="Meet the dedicated team leading our organization"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
