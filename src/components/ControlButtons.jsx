import "../App.css";

export default function ControlButtons({
  handleStart,
  handleReset,
  handlePauseResume,
  isPaused,
  active,
}) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={handleStart}>
      Start
    </div>
  );
  //console.log(props);

  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div>
      <div className="Control-Buttons">
        {active ? ActiveButtons : StartButton}
      </div>
    </div>
  );
}
