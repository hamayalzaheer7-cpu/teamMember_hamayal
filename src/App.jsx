import MemberCard from "./components/MemberCard";
import "./App.css";

// Import team pictures with correct .jpg extensions
import imgA from "./image/a.jpg";
import imgB from "./image/b.jpg";
import imgD from "./image/d.jpg";

function App() {
  const members = [
    {
      id: 1,
      name: "Abid",
      role: "Web Developer",
      image: imgB
    },
    {
      id: 2,
      name: "Khadija",
      role: "UI Designer",
      image: imgD
    },
    {
      id: 3,
      name: "Ahmad",
      role: "Backend Developer",
      image: imgB
    },
    {
      id: 4,
      name: "Hamayal",
      role: "MERN Developer",
      image: imgA
    },
    {
      id: 5,
      name: "Irha",
      role: "QA Engineer",
      image: imgD
    },
    {
      id: 6,
      name: "Sami",
      role: "Project Manager",
      image: imgB
    }
  ];

  return (
    <div className="container py-5">
      <div className="heading text-center mb-5">
        <h1>Meet Our Team</h1>
        <p>People who make great things happen together.</p>
      </div>

      <div className="row g-4">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;