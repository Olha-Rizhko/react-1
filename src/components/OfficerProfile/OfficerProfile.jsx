import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  officer: { name, rank, age, spec, active, skills },
}) {
  const statusClsx = clsx(css.text, active ? css.isActive : css.isRetired);
  return (
    <div className={css.container}>
      <p className={css.text}>Name: {name} </p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>Spec: {spec}</p>
      <p className={statusClsx}>Status: {active ? "Active" : "Retired"}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
