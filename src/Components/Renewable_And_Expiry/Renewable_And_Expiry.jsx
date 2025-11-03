import styles from './Renewable_And_Expiry.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'

const data = [
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",
    Status:'Expired'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",
    Status:'Expired'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026"
    ,
    Status:'Expired'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",
    Status:'Expired'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",
    Status:'Expired'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",
    Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2026",Status:'Active'
  },
  {
    Tenant_ID: "TNT0119",
    Tenant_Name: "Tenant Name",
    Customer_ID: "CST5228",
    Customer_Name: "Customer Name",
    License_Start_Date:"02/03/2025",
    License_Expiry_Date:"03/03/2024",Status:'Active'
  },
  
  
]
const dateDifference = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffMs = d1 - d2; // difference in milliseconds
  let diffDays = diffMs / (1000 * 60 * 60 * 24);
  if(diffDays<0){
    diffDays=0;
  }

  return Math.abs(Math.round(diffDays));
};
const Renewable_And_Expiry = () => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Renewals and Expiry</p>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Search" />
          </div>
          <div className={styles.icon}><img src={filter} alt="search" /></div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tenant ID</th>
              <th>Tenant Name</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>License Start Date ↑</th>
              <th>License Expiry Date ↓</th>
              <th>Days Remaining</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, id) => (
              <tr key={id}>
                <td>{row.Tenant_ID}</td>
                <td>{row.Tenant_Name}</td>
                <td>{row.Customer_ID}</td>
                <td>{row.Customer_Name}</td>
                <td>{row.License_Start_Date}</td>
                <td>{row.License_Expiry_Date}</td>
                <td>{dateDifference(row.License_Expiry_Date,row.License_Start_Date)}</td>
                {(row.Status=='Expired')?(<td > 
                  <p style={{backgroundColor:'#f36b6bff',width:'90px',borderRadius:'5px'}}>{row.Status}</p>
                </td>):(<td>
                   <p style={{backgroundColor:'#5bf332ff',width:'90px',borderRadius:'5px'}}>{row.Status}</p>
                </td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Renewable_And_Expiry;
