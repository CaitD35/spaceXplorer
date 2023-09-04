import { useQuery } from '@apollo/client';

import MissionList from '../components/ThoughtList';
import MissionForm from '../components/ThoughtForm';

import { QUERY_MISSIONS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MISSIONS);
  const missions = data?.missions || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <MissionForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MissionList
              Missions={missions}
              title="Some Feed for Mission(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
