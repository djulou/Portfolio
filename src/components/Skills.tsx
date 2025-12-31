import { Skill } from '../data/types';
import '../styles/Skills.css';

interface SkillsProps {
  data: Skill[];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="competences" className="comp_container">
      <h1 className="title">Compétences</h1>
      <div className="competences">
        {data.map((skill) => (
          <div key={skill.id} className="lines">
            {/* Dans ton HTML c'était h3, on garde la même structure */}
            <h3 className="title">{skill.name}</h3>
            
            {/* On affiche la description si elle existe dans le JSON */}
            {skill.description && (
              <p className="description">{skill.description}</p>
            )}
            
            {/* Optionnel : tu peux afficher le niveau si tu l'as ajouté dans le JSON */}
            {/* <span className="level">{skill.level}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
}