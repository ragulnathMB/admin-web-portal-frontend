import React, { useState } from 'react';
import styles from './Customer_Details.module.css';
import search from '../../../assets/search.svg'
import filter from '../../../assets/filter.svg';
import generate from '../../../assets/generate_invoice.svg'
import add from '../../../assets/add_tenant.svg'
import enable from '../../../assets/enable_tenant.svg'
import disable from '../../../assets/disable_tenant.svg'
import show from '../../../assets/view.svg'
import doc from '../../../assets/docs.svg'

const data={
  "CustomerInformation": {
    "CustomerID": "Customer ID",
    "CustomerName": "West Inc.",
    "PrimaryContact": {
      "Name": "John Marston",
      "Email": "email@email.com",
      "MobileNumber": "123456789"
    },
    "Address": {
      "Billing": "no, street, city",
      "Communication": "no, street, city"
    }
  },
  "LicenseDetails": {
    "Plan": "Plan",
    "LicenseIssued": "License Issued (total Allowed)",
    "ActiveUsersCount": "Active Users Count (derived from tenants)",
    "LicenseExpiryDate": "02 Mar 2028",
    "CreatedDate": "02 Mar 2025"
  }
}
const d={
  "TenantList": [
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN004",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    },
    {
      "CID": "TN001",
      "TenantName": "Acme Corporation",
      "Users": 30,
      "LicenseIssued": "Enterprise",
      "CreatedDate": "02 Jun 2025",
      "ExpiryDate": "02 Jun 2030",
      "Status": "Active"
    }
   
  ],
  "LinkedInvoices": [
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    },
    {
      "InvoiceNo": "INV12354",
      "InvoiceDate": "02 Mar 2025",
      "Amount": "$600",
      "Status": "Paid",
      "Currency": "Dollar",
      "DueDate":"30 Mar 2025"
    }
    
  ]
}



const CustomerDetails = () => {
  const [selectedTenants, setSelectedTenants] = useState([]);
  
    // Handle "Select All"
    const handleSelectAll = (e) => {
      if (e.target.checked) {
        setSelectedTenants(d.TenantList.map((row) => row.CID));
      } else {
        setSelectedTenants([]);
      }
    };
  
    // Handle individual selection
    const handleSelect = (id) => {
      if (selectedTenants.includes(id)) {
        setSelectedTenants(selectedTenants.filter((userId) => userId !== id));
      } else {
        setSelectedTenants([...selectedTenants, id]);
      }
    };
  
    // Fix: check select all dynamically
    const isAllSelected = selectedTenants.length === data.length;
    const isIndeterminate = selectedTenants.length > 0 && selectedTenants.length < data.length;
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Customer Details</p>
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
          <div><img src={generate} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Generate Invoice</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={enable} className={styles.menuIcon} style={{ height: '20px'}} /></div>
          <div><p>Enable Customer</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={disable} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Disable Customer</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={show} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>View All Invoices</p></div>
        </div>
      </div>

      {/* Tenant Information */}
      <div className={styles.contentMain}>
        <div className={styles.contentBody}>
          <div className={styles.headline} style={{ marginBottom: '0px', paddingLeft:'15px', paddingTop:'10px' }}>
            <p>Customer Information</p>
          </div>
          <span className={styles.line}></span>
          <section className={styles.gridSection}>
            <div><strong>Customer ID</strong><p>{data.CustomerInformation.CustomerID}</p></div>
            <div><strong>Customer Name</strong><p>{data.CustomerInformation.CustomerName}</p></div>
          </section>
          <span className={styles.line}></span>
          <div style={{ marginBottom: '-1px', paddingLeft:'15px', paddingTop:'10px' }}>
            <strong>Primary Contact Person</strong>
          </div>
          <section className={styles.gridSection}>
            <div><strong>Name</strong><p>{data.CustomerInformation.PrimaryContact.Name}</p></div>
            <div><strong>Email</strong><p>{data.CustomerInformation.PrimaryContact.Email}</p></div>
            <div><strong>Mobile Number</strong><p>{data.CustomerInformation.PrimaryContact.MobileNumber}</p></div>
          </section>
          <span className={styles.line}></span>
          <div style={{ marginBottom: '-1px', paddingLeft:'15px', paddingTop:'10px' }}>
            <strong>Address</strong>
          </div>
          <section className={styles.gridSection}>
            <div><strong>Billing</strong><p>{data.CustomerInformation.Address.Billing}</p></div>
            <div><strong>Communication</strong><p>{data.CustomerInformation.Address.Communication}</p></div>
          </section>
        </div>

        {/* License Information */}
        <div className={styles.contentBody}>
          <div className={styles.headline} style={{ marginBottom: '0px', paddingLeft:'15px', paddingTop:'10px' }}>
            <p>License Details</p>
          </div>
          <span className={styles.line}></span>
          <section className={styles.gridSection}>
            <div><strong>Plan</strong><p>{data.LicenseDetails.Plan}</p></div>
            <div><strong>License Issued(Total Allowed)</strong><p>{data.LicenseDetails.LicenseIssued}</p></div>
            <div><strong>Active Users Count(derived from tenants)</strong><p>{data.LicenseDetails.ActiveUsersCount}</p></div>
           
          </section>
          <span className={styles.line}></span>
          <section className={styles.gridSection}>
            <div><strong>License Expiry Date</strong><p>{data.LicenseDetails.LicenseExpiryDate}</p></div>
            <div><strong>Created Date</strong><p>{data.LicenseDetails.CreatedDate}</p></div>
          </section>

        </div>
      </div>
      <div className={styles.tableContainer} style={{marginTop:'10px'}}>
        <div className={styles.headlin} style={{ marginBottom: '0px', paddingLeft: '15px', paddingTop: '10px'}}>
                    <p>Tenant List</p>
                </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>
                      {/* Select All Checkbox */}
                      <input
                      style={{position:'relative',left:'-2px'}}
                        type="checkbox"
                        checked={isAllSelected}
                      
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>Tenant ID</th>
                    <th>Tenant Name</th>
                    <th>Status</th>
                    <th>License Issued</th>
                    <th>License Expiry Date</th>
                    <th>Enabled Users</th>
                    <th>Created Date</th>
                    <th>View Details</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {d.TenantList.map((row) => (
                    <tr key={row.CID}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedTenants.includes(row.CID)}
                          onChange={() => handleSelect(row.CID)}
                        />
                      </td>
                      <td>{row.CID}</td>
                      <td>{row.TenantName}</td>
                      <td className={styles.stat}>
                        <p
                          className={styles.status}
                          style={{ backgroundColor: row.Status === "Active" ? '#9FCB7D' : '#f18367ff' }}
                        >
                          {row.Status}
                        </p>
                      </td>
                      <td>{row.LicenseIssued}</td>
                      <td>{row.ExpiryDate}</td>
                       <td>{row.ExpiryDate}</td>
                      <td>{row.CreatedDate}</td>
                     <td style={{cursor:'pointer'}} ><img src={doc} style={{height:'20px'}} className={styles.doc}/></td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.tableContainer} style={{marginTop:'10px'}}>
        <div className={styles.headlin} style={{ marginBottom: '0px', paddingLeft: '15px', paddingTop: '10px'}}>
                    <p>Linked Invoices</p>
                </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Invoice No.</th>
                    <th>Invoice Date</th>
                    <th>Due Date</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>View Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {d.LinkedInvoices.map((row) => (
                    <tr key={row.InvoiceNo}>
                      <td>{row.InvoiceNo}</td>
                      <td>{row.InvoiceDate}</td>
                      <td>{row.DueDate}</td>
                      <td>{row.Currency}</td>
                      <td>{row.Amount}</td>
                      <td>{row.Status}</td>
                      <td style={{cursor:'pointer'}} ><img src={doc} style={{height:'20px'}} className={styles.doc}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    </div>
  );
};

export default CustomerDetails;
