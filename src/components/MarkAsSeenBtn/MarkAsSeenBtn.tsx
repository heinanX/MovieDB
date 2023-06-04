
function MarkAsSeenBtn() {
  const seenIt = () => {
    console.log('seen it');
    
  }
  return (
    <button onClick={seenIt}>Seen it</button>
  )
}

export default MarkAsSeenBtn