import { NotePage } from '../notes/NotePage';
import { Sidebar } from './Sidebar';
// import { NothingSelected } from './NothingSelected';

export const JournalPage = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NotePage />
      </main>
    </div>
  );
};
