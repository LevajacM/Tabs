export const Buttons = ({ data, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {data.map((item, index) => {
        const active = index === currentItem;
        return (
          <button
            className={active ? 'job-btn active-btn' : 'job-btn'}
            key={item.id}
            onClick={() => {
              setCurrentItem(index);
            }}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
