import { useState } from "react";
import styles from './All_Customers.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import add_customer from '../../assets/add_customer.svg'
import add_tenant from '../../assets/add_tenant_s.svg'
import enable from '../../assets/enable.svg'
import disable from '../../assets/disable.svg'
import exports from '../../assets/export.svg'
import refresh from '../../assets/refresh.svg'
import doc from '../../assets/docs.svg'
import { useNavigate } from "react-router-dom";

const data = [
  {Customer_ID:'CS1256', Customer_Name:'Acre Corporation', Email:'contact@acre.com', Phone_Number:'9876543210', License_Plan:'Premium', License_Issued:'2024-01-15', Status:'Enabled'},
  {Customer_ID:'CS1257', Customer_Name:'BrightTech Solutions', Email:'info@brighttech.com', Phone_Number:'9123456780', License_Plan:'Standard', License_Issued:'2024-02-10', Status:'Disabled'},
  {Customer_ID:'CS1258', Customer_Name:'Crescent Systems', Email:'support@crescent.com', Phone_Number:'9988776655', License_Plan:'Enterprise', License_Issued:'2024-03-01', Status:'Enabled'},
  {Customer_ID:'CS1259', Customer_Name:'Delta Innovations', Email:'hello@delta.com', Phone_Number:'9876501234', License_Plan:'Basic', License_Issued:'2024-04-05', Status:'Enabled'},
  {Customer_ID:'CS1260', Customer_Name:'Everest Technologies', Email:'contact@everest.com', Phone_Number:'9812345678', License_Plan:'Standard', License_Issued:'2024-05-22', Status:'Disabled'},
  {Customer_ID:'CS1261', Customer_Name:'Fusion Enterprises', Email:'admin@fusion.com', Phone_Number:'9901122334', License_Plan:'Premium', License_Issued:'2024-06-14', Status:'Enabled'},
  {Customer_ID:'CS1262', Customer_Name:'GlobalSoft Pvt Ltd', Email:'info@globalsoft.com', Phone_Number:'9123904567', License_Plan:'Enterprise', License_Issued:'2024-07-19', Status:'Enabled'},
  {Customer_ID:'CS1263', Customer_Name:'Horizon Infotech', Email:'support@horizon.com', Phone_Number:'9812349087', License_Plan:'Basic', License_Issued:'2024-08-10', Status:'Disabled'},
  {Customer_ID:'CS1264', Customer_Name:'Innova Systems', Email:'hello@innova.com', Phone_Number:'9008765432', License_Plan:'Premium', License_Issued:'2024-09-01', Status:'Enabled'},
  {Customer_ID:'CS1265', Customer_Name:'Jupiter Labs', Email:'contact@jupiterlabs.com', Phone_Number:'9786543210', License_Plan:'Standard', License_Issued:'2024-09-18', Status:'Enabled'},
  {Customer_ID:'CS1266', Customer_Name:'Keystone Tech', Email:'admin@keystone.com', Phone_Number:'9345678123', License_Plan:'Enterprise', License_Issued:'2024-10-03', Status:'Disabled'},
  {Customer_ID:'CS1267', Customer_Name:'Lumina Corp', Email:'info@lumina.com', Phone_Number:'9887654321', License_Plan:'Basic', License_Issued:'2024-10-25', Status:'Enabled'},
  {Customer_ID:'CS1268', Customer_Name:'Magneto Solutions', Email:'support@magneto.com', Phone_Number:'9765432189', License_Plan:'Premium', License_Issued:'2024-11-14', Status:'Enabled'},
  {Customer_ID:'CS1269', Customer_Name:'Neptune Systems', Email:'contact@neptune.com', Phone_Number:'9911223344', License_Plan:'Standard', License_Issued:'2024-11-30', Status:'Disabled'},
  {Customer_ID:'CS1270', Customer_Name:'Optima Global', Email:'hello@optima.com', Phone_Number:'9345126789', License_Plan:'Enterprise', License_Issued:'2024-12-12', Status:'Enabled'},
  {Customer_ID:'CS1271', Customer_Name:'PrimeSoft', Email:'info@primesoft.com', Phone_Number:'9876012345', License_Plan:'Basic', License_Issued:'2024-12-25', Status:'Enabled'},
  {Customer_ID:'CS1272', Customer_Name:'Quantum Technologies', Email:'support@quantum.com', Phone_Number:'9234567890', License_Plan:'Premium', License_Issued:'2025-01-10', Status:'Disabled'},
  {Customer_ID:'CS1273', Customer_Name:'RapidWare Solutions', Email:'contact@rapidware.com', Phone_Number:'9123045678', License_Plan:'Standard', License_Issued:'2025-01-28', Status:'Enabled'},
  {Customer_ID:'CS1274', Customer_Name:'Skyline Innovations', Email:'hello@skyline.com', Phone_Number:'9876509876', License_Plan:'Enterprise', License_Issued:'2025-02-14', Status:'Enabled'},
  {Customer_ID:'CS1275', Customer_Name:'TechNova Pvt Ltd', Email:'admin@technova.com', Phone_Number:'9345612789', License_Plan:'Basic', License_Issued:'2025-03-01', Status:'Disabled'}
];


const All_Customers = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const Navigate=useNavigate();

  // Handle "Select All"
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(data.map((row) => row.Customer_ID));
    } else {
      setSelectedUsers([]);
    }
  };

  // Handle individual selection
  const handleSelect = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  // Fix: check select all dynamically
  const isAllSelected = selectedUsers.length === data.length;
  const isIndeterminate = selectedUsers.length > 0 && selectedUsers.length < data.length;

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>All Customers</p>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Search" />
          </div>
          <div className={styles.icon}><img src={filter} alt="filter" /></div>
        </div>
      </div>

      {/* Menu bar */}
      <div className={styles.menuBar}>
        <div className={styles.menuButton} onClick={()=>{Navigate("/add-customer")}}>
          <div><img src={add_customer} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Add Customer</p></div>
        </div>
        <div className={styles.menuButton} onClick={()=>{Navigate("/add-tenant")}}>
          <div><img src={add_tenant} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Add Tenant</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={enable} className={styles.menuIcon} style={{ height: '15px', paddingBottom: '5px' }} /></div>
          <div><p>Enable</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={disable} className={styles.menuIcon} style={{ height: '15px', paddingBottom: '5px' }} /></div>
          <div><p>Disable</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={refresh} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Refresh</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={exports} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Export</p></div>
        </div>
        
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                {/* Select All Checkbox */}
                <input
                style={{position:'relative',left:'-2px'}}
                  type="checkbox"
                  checked={isAllSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = isIndeterminate;
                  }}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>License Plan</th>
              <th>License Issued</th>
              <th>Status</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.User_ID}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(row.Customer_ID)}
                    onChange={() => handleSelect(row.Customer_ID)}
                  />
                </td>
                <td>{row.Customer_ID}</td>
                <td>{row.Customer_Name}</td>
                <td>{row.Email}</td>
                <td>{row.Phone_Number}</td>
                <td>{row.License_Plan}</td>
                <td>{row.License_Issued}</td>
                <td className={styles.stat}>
                  <p
                    className={styles.status}
                    style={{ backgroundColor: row.Status === "Enabled" ? '#9FCB7D' : '#f18367ff' }}
                  >
                    {row.Status}
                  </p>
                </td>
                <td ><img style={{cursor:'pointer',margin:'0',padding:'0'}} src={doc}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default All_Customers;
