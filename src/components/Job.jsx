import { Buttons } from './Buttons';
import { JobDesc } from './Job-desc';

export const Job = ({ data, currentItem, setCurrentItem }) => {
  const { company, dates, id, order, title, duties } = data[currentItem];
  return (
    <section className='jobs-center'>
      <Buttons
        data={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <div>
        <h3>{title}</h3>
        <span className='job-company'>{company}</span>
        <p className='job-date'>{dates}</p>
        <JobDesc duties={duties} />
      </div>
    </section>
  );
};
