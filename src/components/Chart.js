import Song from './Song';

const Chart = ({songs}) => {
  if (!songs) return null;

  // for each song object in array songs,
  // render a <Song/> component
  const songNodes = songs.feed.entry.map((currentSong, songIndex) => {
    return (
      <Song 
      key={songIndex} 
      title={currentSong["im:name"].label} 
      artist={currentSong["im:artist"].label}/>
    )
  });

  return (
    <>
      <h2>Top Tunes:</h2>
      <ol>
        {songNodes}
      </ol>
    </>
  )
}

export default Chart;