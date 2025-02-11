import "../App.css";


export default function Timer({ time }) {
  //  console.log(time);

  return (
    <div className="timer">
      <span className="digits">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> {/*converting ms to min; 1min = 60000ms  */}
      <span className="digits">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span> { /* conv ms to s */ }
      <span className="digits">{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
}
