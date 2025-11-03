import { useState } from "react";
import styles from './API_log.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import edit from '../../assets/edit.svg'
import test from '../../assets/Test_All.svg'
import view from '../../assets/View_Test_Logs.svg'
import expor from '../../assets/export.svg'


const Data=[
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
  {
    "APIName":"User Authentication",
    "APIURL":"https://api.acme.com/auth",
    "Method":"POST",
    "Status":"Active",
    "ID":"2",
  },
]

const APIlog = () => {
  

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>All APIs</p>
        </div>
      </div>

      {/* Menu bar */}
      <div className={styles.menuBar}>
        <div className={styles.menuButton}>
          <div><img src={edit} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Edit API</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={test} className={styles.menuIcon} style={{ height: '20px', paddingBottom: '1px' }} /></div>
          <div><p>Test All</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={view} className={styles.menuIcon} style={{ height: '20px', paddingBottom: '1px' }} /></div>
          <div><p>View Test Logs</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={expor} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Export</p></div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.searchMain}>
        <div className={styles.searchBar} style={{marginRight:'10px'}}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Tenant ID" />
          </div>
          <div className={styles.icon}><img src={filter} alt="filter" /></div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Customer ID" />
          </div>
          <div className={styles.icon}><img src={filter} alt="filter" /></div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        
        <table className={styles.table}>
          <thead>
            <tr>
              
              <th>API Name</th>
              <th>API URL</th>
              <th>Method</th>
              <th>Status</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row) => (
              <tr key={row.ID}>
                <td>{row.APIName}</td>
                <td>{row.APIURL}</td>
                <td>{row.Method}</td>
                <td className={styles.stat}>
                  <p
                    className={styles.status}
                    style={{ backgroundColor: row.Status === "Active" ? '#9FCB7D' : '#f18367ff' }}
                  >
                    {row.Status}
                  </p>
                </td>
                <td>
                  <img src={test} className={styles.testIcon}/>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default APIlog;
