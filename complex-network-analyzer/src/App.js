import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import './App.css';
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { AiOutlineTable, AiOutlineAreaChart, AiOutlineBranches, AiOutlineRetweet } from "react-icons/ai";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Charts from "./components/Charts";
import GeneralAnalysis from "./components/GeneralAnalysis";
import TopNodes from "./components/TopNodes";
import { useState, useEffect } from 'react';
import LabelClassification from "./components/LabelClassification";
import EpidemicModels from "./components/EpidemicModels";


function App() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [currentPage, setCurrentPage] = useState('/');

  const location = useLocation();

  useEffect(() => {
      setCurrentPage(location.pathname);
  }, [location]);

  console.log("THE CURRENT PAGE IS: ", currentPage);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar className="app" style={{
          position: 'fixed',
          width: collapsed ? 80 : 250,
          height: '100%',
        }}>
      <Menu>
        <MenuItem
          className="menu1"
        >
          <h3>CDN Project</h3>
        </MenuItem>
        <MenuItem
          style={{
                fontSize: 18,
                background: currentPage === '/' ? 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' : 'none',
            }}
          component={<Link to="/" className="link" />}
          icon={<GridViewRoundedIcon />}
        >
          General Information
        </MenuItem>
        <MenuItem
          style={{
            fontSize: 18,
            background: currentPage === '/topnodes' ? 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' : 'none',
          }}
          component={<Link to="topnodes" className="link" />}
          icon={<AiOutlineTable />}
        >
          Important Nodes
        </MenuItem>
        <MenuItem
          style={{
            fontSize: 18,
            background: currentPage === '/charts' ? 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' : 'none',
          }}
          component={<Link to="charts" className="link" />}
          icon={<AiOutlineAreaChart />}
        >
          Charts
        </MenuItem>
        <MenuItem 
          style={{
            fontSize: 18,
            background: currentPage === '/labels' ? 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' : 'none',
          }}
          component={<Link to="labels" className="link" />} 
          icon={<AiOutlineBranches />}
        >
          Label Classification
        </MenuItem>
        <MenuItem 
          style={{
            fontSize: 18,
            background: currentPage === '/epidemic' ? 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' : 'none',
          }}
          component={<Link to="epidemic" className="link" />}
          icon={<AiOutlineRetweet />}
        >
          Epidemic Models
        </MenuItem>
      </Menu>
    </Sidebar>
    <section style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<GeneralAnalysis />} />
        <Route path="topnodes" element={<TopNodes />} />
        <Route path="charts" element={<Charts />} />
        <Route path="labels" element={<LabelClassification />} />
        <Route path="epidemic" element={<EpidemicModels />} />
      </Routes>
    </section>
  </div>
  );
}

export default App;
