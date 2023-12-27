interface ISkills{
  skills:string[]
}
const Skills = ({skills}:ISkills) => {
  return (
    <div>
        <h2>Tech Stacks:</h2>
        {skills.map((skill,idx) => <p key={idx}>{skill}</p>)}
    </div>
  )
}

export default Skills