import React from 'react';
import styles from './API_Management.module.css';
import edit from '../../assets/edit.svg'
import test from '../../assets/Test_All.svg'
import view from '../../assets/View_Test_Logs.svg'
import exp from '../../assets/export.svg'

const apiLogs = Array(17).fill({
  name: "User Authentication",
  url: "https://api.acme.com/auth",
  method: "POST",
  status: "Active",
  testLabel: "Test"
});

const testLogs = Array(3).fill({
  name: "User Authentication",
  status: "Active",
  error: "No Error",
  fix: "No fix suggestions",
  time: "03.12.2025 15:30:21"
});

const tenantInfo = {
  tenantId: "TNT-2025-001",
  tenantName: "Acme Corporation",
  totalApis: "08",
  activeApis: "06",
  inactiveApis: "02",
  lastTestRun: "03.12.2025 15:30:21",
  health: "Overall Health Indicator"
};

export default function APIManagement() {
  return (
    <div className={styles.container}>
      {/* Header & Search */}
      <div className={styles.header}>
        <h1>API Management</h1>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search" />
            <span className={styles.searchIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="2"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#999" strokeWidth="2"/>
              </svg>
            </span>
          </div>
          <div className={styles.filterIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" stroke="#666" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Action Bar */}
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
                <div><img src={exp} className={styles.menuIcon} style={{ height: '20px' }} /></div>
                <div><p>Export</p></div>
              </div>
            </div>

      {/* Main Area */}
      <div className={styles.mainArea}>
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
              {apiLogs.map((api, i) => (
                <tr key={i}>
                  <td>{api.name}</td>
                  <td>{api.url}</td>
                  <td>
                    <a href="#" className={styles.methodLink}>{api.method}</a>
                  </td>
                  <td>
                    <span className={styles.activeStatus}>{api.status}</span>
                  </td>
                 <td>
                    <img src={test} className={styles.testIcon}/>          
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        
        <div className={styles.infoCard}>
          <h3 className={styles.infoHeading}>Tenant Information</h3>
          <div className={styles.infoContent}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Tenant ID</span>
              <span className={styles.infoValue}>{tenantInfo.tenantId}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Tenant Name</span>
              <span className={styles.infoValue}>{tenantInfo.tenantName}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Total APIs</span>
              <span className={styles.infoValue}>{tenantInfo.totalApis}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Active APIs</span>
              <span className={styles.infoValue}>{tenantInfo.activeApis}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Inactive APIs</span>
              <span className={styles.infoValue}>{tenantInfo.inactiveApis}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Last Test Run</span>
              <span className={styles.infoValue}>{tenantInfo.lastTestRun}</span>
            </div>
            <div className={styles.healthRow}>
              <span className={styles.healthBadge}>{tenantInfo.health}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Test Logs */}
      <div className={styles.testLogsSection}>
        <h3 className={styles.testLogsTitle}>Test Logs</h3>
        <div className={styles.testLogsSummary}>
          <span>Total APIs tested : 10</span>
          <span>Active count : 09</span>
          <span>Inactive count : 01</span>
          <span>Success rate % : 90</span>
        </div>
        <table className={styles.testLogsTable}>
          <thead>
            <tr>
              <th>API Name</th>
              <th>Status</th>
              <th>Error Message</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {testLogs.map((t, i) => (
              <tr key={i}>
                <td>{t.name}</td>
                <td><span className={styles.activeStatus}>{t.status}</span></td>
                <td>{t.error}</td>
                <td>{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}