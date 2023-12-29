import "./style.css";
interface ISkills {
  skills: string[];
}
const Skills = ({ skills }: ISkills) => {
  return (
    <>
      <h2>Skills</h2>

      <div id="skills">
        {skills.map((skill, idx) => (
          <p key={idx}>{skill}</p>
        ))}
      </div>
    </>
  );
};

export default Skills;
