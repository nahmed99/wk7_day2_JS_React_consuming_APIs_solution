import { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import TitleBar from '../components/TitleBar';

const ChartContainer = (() => {
  const [tunes, setTunes] = useState(null);

  const fetchSongs = () => {
    const url = `https://itunes.apple.com/gb/rss/topsongs/limit=20/json`

    fetch(url).then(res => {
      // res is nonsense beep bops
      return res.json()
    }).then((jsonData) => {
      // we can use the jsonified response
      console.log("setting the tunes")
      setTunes(jsonData);
    })
  };

  useEffect(() => {
    fetchSongs();
  }, []); // empty dependency array says fetch ONCE at start

  return (
    <>
      <TitleBar/>
      <Chart songs={tunes}/>
    </>
  )
});

export default ChartContainer;