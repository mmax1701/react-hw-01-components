import data from './data.json';
import css from './statistics.module.css';

const Statistics = () => {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.statList}>
          {data.map(({ id, label, percentage }) => (
            <li key={id} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
