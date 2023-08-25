import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NEXT_MISSION } from '../graphql/queries';

const Countdown = () => {
  const [countdown, setCountdown] = useState(null);
  const { loading, error, data } = useQuery(GET_NEXT_MISSION);

  useEffect(() => {
    if (data) {
      const launchDate = new Date(data.nextMission.launchDate);
      const now = new Date();
      const timeDiff = launchDate - now;
      setCountdown(timeDiff);
    }
  }, [data]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(countdown - 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name } = data.nextMission;

  return (
    <div>
      <h2>Next Mission: {name}</h2>
      <p>Countdown: {new Date(countdown).toISOString().substr(11, 8)}</p>
    </div>
  );
};

export default Countdown;
