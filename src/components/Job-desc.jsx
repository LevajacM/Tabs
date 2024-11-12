import { FaAnglesRight } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';

export const JobDesc = ({ duties }) => {
  return (
    <div>
      {duties.map((item) => {
        return (
          <div key={uuidv4()} className='job-desc'>
            <FaAnglesRight className='job-icon' />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};
