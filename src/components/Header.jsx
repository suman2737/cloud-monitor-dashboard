export default function Header({ autoRefresh, setAutoRefresh, refresh }) {

  return (

    <div className="header">

      <h1 className="title">Cloud Service Monitor</h1>

      <div className="controls">

        <label>
          Auto Refresh
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={e => setAutoRefresh(e.target.checked)}
          />
        </label>

        <button
          className="refresh-btn"
          onClick={refresh}
        >
          Refresh
        </button>

      </div>

    </div>

  );
}