import { useSelector } from 'react-redux';
import { NotePage } from '../notes/NotePage';
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';

export const JournalPage = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />
      <main>{active ? <NotePage /> : <NothingSelected />}</main>
    </div>
  );
};
