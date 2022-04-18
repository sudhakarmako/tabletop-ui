import "./Session.scss";
const SessionTitle = () => {
  return (
    <div className="session-single-title">
      <h3>Raiders of the North Sea</h3>
      <div className="session-title-action">
        <button>
          <i className="bi bi-person-plus"></i>
        </button>
        <h3>
          <i className="bi bi-hash"></i>2453
        </h3>
      </div>
    </div>
  );
};

export default SessionTitle;
