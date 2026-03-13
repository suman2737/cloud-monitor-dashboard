import { useState, useEffect } from "react";
import Header from "./components/Header";
import ServicesTab from "./pages/ServicesTab";
import IncidentsTab from "./pages/IncidentsTab";
import { tabsConfig } from "./config/tabsConfig";
import useRole from "./hooks/useRole";
import "./App.css";

export default function App() {

  const { role } = useRole();

  const [tab, setTab] = useState("services");
  const [autoRefresh, setAutoRefresh] = useState(false);

  function refresh() {
    console.log("manual refresh");
  }

  useEffect(() => {

    if (!autoRefresh) return;

    const interval = setInterval(() => {
      console.log("polling refresh");
    }, 30000);

    return () => clearInterval(interval);

  }, [autoRefresh]);

  const visibleTabs = tabsConfig.filter(
    t => t.roles.includes(role)
  );

  return (

    <div className="container">

      <Header
        autoRefresh={autoRefresh}
        setAutoRefresh={setAutoRefresh}
        refresh={refresh}
      />

      <div className="tabs">
        {visibleTabs.map(t => (
          <button
            key={t.id}
            className={tab === t.id ? "active" : ""}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "services" && <ServicesTab />}
      {tab === "incidents" && <IncidentsTab />}

    </div>

  );
}