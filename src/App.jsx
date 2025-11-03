import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Plan_and_Pricing from './Components/Plan_and_Pricing/Plan_and_Pricing';
import Login from './Components/Login/Login';
import styles from './App.module.css';
import Home from './Components/Home/Home';
import All_Customers from './Components/All_Customers/All_Customers';
import Add_Customer from './Components/Add_Customer_Walkthrough/Add_Customer';
import Add_Tenant from './Components/Add_Tenant_Walkthrough/Add_Tenant';
import Renewable_And_Expiry from './Components/Renewable_And_Expiry/Renewable_And_Expiry';
import Invoice_Details from './Components/Invoice_Details/Invoice_Details';
import APIlog from './Components/Api_log/API_log';
import { useEffect,useState } from 'react';
import Nav from './Components/Navbar/Nav';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  return (
    <div className={styles.main}>
      <div >
        <Header/>
      </div>
      <AuthProvider>
              
              <div className={styles.sub}>
                <div>
                      <Nav/>
                </div>
                <div className={styles.pages}>
                   <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Home/>} />
                  <Route path="/all-customers" element={<All_Customers/>}/>
                  <Route path="/add-customer" element={<Add_Customer/>}/>
                  <Route path="/add-tenant" element={<Add_Tenant/>}/>
                  <Route path="/plan-and-pricing" element={<Plan_and_Pricing />} />
                  <Route path="/renewable-and-expiry" element={<Renewable_And_Expiry/>}/>
                  <Route path="/invoices" element={<Invoice_Details/>}/>
                  <Route path="/api-logs" element={<APIlog/>}/>
                </Routes>
                </div>
              </div>
              
            
        
      </AuthProvider>
    </div>
  );
}

export default App;
