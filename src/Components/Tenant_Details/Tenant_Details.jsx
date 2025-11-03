import React from 'react';
import styles from './Tenant_Details.module.css';
import search from '../../../assets/search.svg'
import filter from '../../../assets/filter.svg';
import show from '../../../assets/show.svg';
import add from '../../../assets/add_tenant.svg'
import enable from '../../../assets/enable_tenant.svg'
import disable from '../../../assets/disable_tenant.svg'
import cloud from '../../../assets/cloud.svg'

const tenantInfo = {
  tenantId: "Tenant ID",
  tenantName: "West Inc.",
  customerName: "All Inc.",
  admin: {
    name: "John Marston",
    email: "email@email.com",
    mobile: "123456789",
  },
  address: {
    billing: "no, street, city",
    communication: "no, street, city",
  },
};

const licenseDetails = {
  status: "Active",
  licenseInUse: "License in use",
  activeUsersCount: 250,
  licenseExpiryDate: "02 Mar 2028",
  createdDate: "02 Mar 2025",
};

const userSummary = {
  totalUsersCreated: 135,
  activeUsersEnabled: 120,
  disabledUsers: 15,
  remainingLicenseCapacity: 65,
};

const TenantDetails = () => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Tenant Details</p>
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
          <div><img src={add} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Add Tenant</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={enable} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Enable Tenant</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={disable} className={styles.menuIcon} style={{ height: '20px'}} /></div>
          <div><p>Disable Tenant</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={cloud} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Update Service Account</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={show} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>View All APIs</p></div>
        </div>
      </div>

      {/* Tenant Information */}
      <div className={styles.contentMain}>
        <div className={styles.contentBody}>
          <div className={styles.headline} style={{ marginBottom: '0px', paddingLeft:'15px', paddingTop:'10px' }}>
            <p>Tenant Information</p>
          </div>
          <span className={styles.line}></span>
          <section className={styles.gridSection}>
            <div><strong>Tenant ID</strong><p>{tenantInfo.tenantId}</p></div>
            <div><strong>Tenant Name</strong><p>{tenantInfo.tenantName}</p></div>
            <div><strong>Customer Name</strong><p>{tenantInfo.customerName}</p></div>
          </section>
          <span className={styles.line}></span>
          <div style={{ marginBottom: '-1px', paddingLeft:'15px', paddingTop:'10px' }}>
            <strong>Tenant Admin</strong>
          </div>
          <section className={styles.gridSection}>
            <div><strong>Name</strong><p>{tenantInfo.admin.name}</p></div>
            <div><strong>Email</strong><p>{tenantInfo.admin.email}</p></div>
            <div><strong>Mobile Number</strong><p>{tenantInfo.admin.mobile}</p></div>
          </section>
          <span className={styles.line}></span>
          <div style={{ marginBottom: '-1px', paddingLeft:'15px', paddingTop:'10px' }}>
            <strong>Address</strong>
          </div>
          <section className={styles.gridSection}>
            <div><strong>Billing</strong><p>{tenantInfo.address.billing}</p></div>
            <div><strong>Communication</strong><p>{tenantInfo.address.communication}</p></div>
          </section>
        </div>

        {/* License Information */}
        <div className={styles.contentBody}>
          <div className={styles.headline} style={{ marginBottom: '0px', paddingLeft:'15px', paddingTop:'10px' }}>
            <p>License Information</p>
          </div>
          <span className={styles.line}></span>
          <section className={styles.gridSection}>
            <div><strong>Status</strong><p>{licenseDetails.status}</p></div>
            <div><strong>License in Use</strong><p>{licenseDetails.licenseInUse}</p></div>
            <div><strong>Active Users Count</strong><p>{licenseDetails.activeUsersCount}</p></div>
           
          </section>
          <span className={styles.line}></span>
          <section className={styles.gridSection}>
            <div><strong>License Expiry Date</strong><p>{licenseDetails.licenseExpiryDate}</p></div>
            <div><strong>Created Date</strong><p>{licenseDetails.createdDate}</p></div>
          </section>

        </div>
      </div>

      {/* User Management Summary */}
      <div className={styles.contentBodyd}>
        <div className={styles.headline} style={{ marginBottom: '0px', paddingLeft:'15px', paddingTop:'10px' }}>
          <p>User Management Summary</p>
        </div>
        <span className={styles.line}></span>
        <section className={styles.gridSection}>
          <div><strong>Total Users</strong><p>{userSummary.totalUsersCreated}</p></div>
          <div><strong>Enabled Users</strong><p>{userSummary.activeUsersEnabled}</p></div>
          <div><strong>Disabled Users</strong><p>{userSummary.disabledUsers}</p></div>
          <div><strong>Licenses Issued</strong><p>{userSummary.disabledUsers}</p></div>
          <div><strong>Available Licenses</strong><p>{userSummary.remainingLicenseCapacity}</p></div>
        </section>
      </div>
    </div>
  );
};

export default TenantDetails;
