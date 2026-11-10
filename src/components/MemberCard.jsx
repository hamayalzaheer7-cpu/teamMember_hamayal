
function MemberCard(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card member-card text-center p-4">

        <img
          src={props.image}
          alt={props.name}
          className="member-img"
        />

        <h4>{props.name}</h4>
        <h6>{props.role}</h6>
        <p>{props.description}</p>

        <button className="btn btn-sm member-btn">
          View Profile
        </button>

      </div>
    </div>
  );
}

export default MemberCard;
