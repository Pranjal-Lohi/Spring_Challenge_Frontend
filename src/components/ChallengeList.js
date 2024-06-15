import Challenge from "./Challenge";

function ChallengeList({challenges}) {
    return (
        <div className="list-group">
        {challenges.map((challenge) => (
          <div key={challenge.id}>
            <Challenge challenge={challenge} />
          </div>
        ))}
        </div>
    );
}

export default ChallengeList;
