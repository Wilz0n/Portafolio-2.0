import EducationTemplate from "./education-template";

export const educationData = {
  1: {
    title: "My approach to AI with Cursor",
    date: "Dec 20, 2025, 12:23 PM",
    language: "English",
    description: "How things have changed since the last time on my use of AI",
    content:
      "This is a continuation to the 'My approach to AI' post.\n\nSome stuff have changed since the last time I talked about my AI usage, but some stuff have remained the same...\n\nI was just about to start building a PC for my Linux usage :c",
    certificates: [
      { id: 1, title: "Certificate 1", image: "/portfolio-website.jpg" },
      { id: 2, title: "Certificate 2", image: "/food-ordering-app.jpg" },
      { id: 3, title: "Certificate 3", image: "/project-three.jpg" },
      { id: 4, title: "Certificate 4", image: "/project-four.jpg" },
      { id: 5, title: "Certificate 5", image: "/project-five.jpg" },
      { id: 6, title: "Certificate 6", image: "/portfolio-website.jpg" },
    ],
  },
  2: {
    title: "Platzi Journey",
    date: "Jan 20, 2025, 10:00 AM",
    language: "Spanish",
    description: "My learning experience at Platzi",
    content:
      "Dentro de Platzi es donde pude adquirir los conocimientos basicos...\n\nLa experiencia ha sido muy enriquecedora...",
    certificates: [
      { id: 1, title: "Certificate 1", image: "/food-ordering-app.jpg" },
      { id: 2, title: "Certificate 2", image: "/project-three.jpg" },
      { id: 3, title: "Certificate 3", image: "/project-four.jpg" },
    ],
  },
  // ... 3,4,5
};

export default function EducationInfoBlog({ selectedId }) {
  const post = educationData?.[selectedId] || educationData?.["1"];

  return (
    <section className="mt-16">
      <EducationTemplate post={post} />
    </section>
  );
}
