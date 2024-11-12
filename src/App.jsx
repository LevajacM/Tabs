import { useState, useEffect } from 'react';
import { Loading } from './components/Loading';
import { Job } from './components/Job';
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <Loading />
      </section>
    );
  }

  return (
    <main>
      <Job
        data={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </main>
  );
};
export default App;
