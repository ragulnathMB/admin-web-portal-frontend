import { useState } from "react";
import styles from './All_Users.module.css'
import search from '../../../../assets/search.svg'
import filter from '../../../../assets/filter.svg'
import add_user from '../../../../assets/add_user.svg'
import enable from '../../../../assets/enable.svg'
import disable from '../../../../assets/disable.svg'
import imports from '../../../../assets/import.svg'
import exports from '../../../../assets/export.svg'
import refresh from '../../../../assets/refresh.svg'

const data = [
  { User_ID: "US0119", Employee_ID: "EMP1023", Name: "Name", Company_ID: "COM5228", Company_Name: "Name", Status: "Enabled" },
  { User_ID: "US0120", Employee_ID: "EMP1024", Name: "John", Company_ID: "COM5229", Company_Name: "TechCorp", Status: "Disabled" },
  { User_ID: "US0121", Employee_ID: "EMP1025", Name: "Alice", Company_ID: "COM5230", Company_Name: "SoftWorks", Status: "Enabled" },
  { User_ID: "US0119", Employee_ID: "EMP1023", Name: "Name", Company_ID: "COM5228", Company_Name: "Name", Status: "Enabled" },
  { User_ID: "US0120", Employee_ID: "EMP1024", Name: "John", Company_ID: "COM5229", Company_Name: "TechCorp", Status: "Disabled" },
  { User_ID: "US0121", Employee_ID: "EMP1025", Name: "Alice", Company_ID: "COM5230", Company_Name: "SoftWorks", Status: "Enabled" },
  { User_ID: "US0119", Employee_ID: "EMP1023", Name: "Name", Company_ID: "COM5228", Company_Name: "Name", Status: "Enabled" },
  { User_ID: "US0120", Employee_ID: "EMP1024", Name: "John", Company_ID: "COM5229", Company_Name: "TechCorp", Status: "Disabled" },
  { User_ID: "US0121", Employee_ID: "EMP1025", Name: "Alice", Company_ID: "COM5230", Company_Name: "SoftWorks", Status: "Enabled" },
  { User_ID: "US0119", Employee_ID: "EMP1023", Name: "Name", Company_ID: "COM5228", Company_Name: "Name", Status: "Enabled" },
  { User_ID: "US0120", Employee_ID: "EMP1024", Name: "John", Company_ID: "COM5229", Company_Name: "TechCorp", Status: "Disabled" },
  { User_ID: "US0121", Employee_ID: "EMP1025", Name: "Alice", Company_ID: "COM5230", Company_Name: "SoftWorks", Status: "Enabled" },
  { User_ID: "US0119", Employee_ID: "EMP1023", Name: "Name", Company_ID: "COM5228", Company_Name: "Name", Status: "Enabled" },
  { User_ID: "US0120", Employee_ID: "EMP1024", Name: "John", Company_ID: "COM5229", Company_Name: "TechCorp", Status: "Disabled" },
  { User_ID: "US0121", Employee_ID: "EMP1025", Name: "Alice", Company_ID: "COM5230", Company_Name: "SoftWorks", Status: "Enabled" },
  { User_ID: "US0119", Employee_ID: "EMP1023", Name: "Name", Company_ID: "COM5228", Company_Name: "Name", Status: "Enabled" },
  { User_ID: "US0120", Employee_ID: "EMP1024", Name: "John", Company_ID: "COM5229", Company_Name: "TechCorp", Status: "Disabled" },
  { User_ID: "US0121", Employee_ID: "EMP1025", Name: "Alice", Company_ID: "COM5230", Company_Name: "SoftWorks", Status: "Enabled" }
];

const All_Users = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Handle "Select All"
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(data.map((row) => row.User_ID));
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
          <p>All Users</p>
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
        <div className={styles.menuButton}>
          <div><img src={add_user} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Add User</p></div>
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
          <div><img src={imports} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Import</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={exports} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Export</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={refresh} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Refresh</p></div>
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
              <th>User ID</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Company ID</th>
              <th>Company Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.User_ID}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(row.User_ID)}
                    onChange={() => handleSelect(row.User_ID)}
                  />
                </td>
                <td>{row.User_ID}</td>
                <td>{row.Employee_ID}</td>
                <td>{row.Name}</td>
                <td>{row.Company_ID}</td>
                <td>{row.Company_Name}</td>
                <td className={styles.stat}>
                  <p
                    className={styles.status}
                    style={{ backgroundColor: row.Status === "Enabled" ? '#9FCB7D' : '#f18367ff' }}
                  >
                    {row.Status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default All_Users;
