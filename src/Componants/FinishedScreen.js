function FinishedScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  return (
    <>
      <p className="result">
        you scored {points} points ({percentage}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
