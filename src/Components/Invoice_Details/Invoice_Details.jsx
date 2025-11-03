import { useState } from "react";
import styles from './Invoice_Details.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import print from '../../assets/print.svg'
import changeStatus from '../../assets/change_status.svg'
import cancel from '../../assets/cancel.svg'
import edit from '../../assets/edit.svg'
import mail from '../../assets/mail.svg'

const data = {
  "customer": {
    "customerId": "CUST001",
    "customerName": "West Inc.",
    "primaryContact": {
      "name": "John Marston",
      "email": "email@email.com",
      "mobileNumber": "123456789"
    },
    "billingAddress": {
      "line1": "no, street, city",
      "line2": "no, street, city",
      "city": "no, street, city"
    }
  },
  "invoice": {
    "invoiceNumber": "INV-1001",
    "invoiceDate": "2025-03-02",
    "startDate": "2028-03-02",
    "endDate": "2025-03-02",
    "dueDate": "2025-03-02",
    "status": "Pending",
    "paymentTerms": "Net 30",
    "modeOfPayment": "Credit Card",
    "currency": "USD",
    "totalAmount": 0.00
  }
};

const Invoice_Details = () => {
  const [selectedInvoices, setSelectedInvoices] = useState([]);

  // Fake array for table (if you want multiple invoices)
  const tableData = [data.invoice]; // 👈 wrap in array

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedInvoices(tableData.map((row) => row.invoiceNumber));
    } else {
      setSelectedInvoices([]);
    }
  };

  const handleSelect = (id) => {
    if (selectedInvoices.includes(id)) {
      setSelectedInvoices(selectedInvoices.filter((invoiceId) => invoiceId !== id));
    } else {
      setSelectedInvoices([...selectedInvoices, id]);
    }
  };
  // Inside Invoice_Details.js

const tenants = [
  {
    tenantName: "Tenant A",
    tenantId: "T001",
    licensesIssued: 5,
    licensePrice: 2000,
    amount: 10000,
  },
  {
    tenantName: "Tenant B",
    tenantId: "T002",
    licensesIssued: 3,
    licensePrice: 1500,
    amount: 4500,
  },
  {
    tenantName: "Tenant C",
    tenantId: "T003",
    licensesIssued: 1,
    licensePrice: 550,
    amount: 550,
  },
];

const subtotal = tenants.reduce((acc, t) => acc + t.amount, 0);
const discount = 0;
const tax = 0;
const totalAmount = subtotal - discount + tax;


  const isAllSelected = selectedInvoices.length === tableData.length;
  const isIndeterminate = selectedInvoices.length > 0 && selectedInvoices.length < tableData.length;

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Invoice Details</p>
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
          <div><img src={print} className={styles.menuIcon} style={{ height: '21px' }} /></div>
          <div><p>Print</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={mail} className={styles.menuIcon} style={{ height: '15px', paddingBottom: '5px' }} /></div>
          <div><p>Send Email</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={edit} className={styles.menuIcon} style={{ height: '18px', paddingBottom: '3px' }} /></div>
          <div><p>Edit Invoice</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={cancel} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Cancel Invoice</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={changeStatus} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Change Status</p></div>
        </div>
      </div>

      {/* Customer Information */}
      <div className={styles.contentMain}>
      <div className={styles.contentBody}>
        <div className={styles.headline} style={{ marginBottom: '0px' ,paddingLeft:'15px',paddingTop:'10px'}}><p>Customer Information</p></div>
        <span className={styles.line}></span>
        <section className={styles.gridSection}>
          <div><strong>Customer ID</strong><p>{data.customer.customerId}</p></div>
          <div><strong>Customer Name</strong><p>{data.customer.customerName}</p></div>
        </section>
        <span className={styles.line}></span>
        <div style={{ marginBottom: '-1px' ,paddingLeft:'15px',paddingTop:'10px'}}><strong>Primary Contact Person</strong></div>
        <section className={styles.gridSection}>
          
          <div><strong>Name</strong><p>{data.customer.primaryContact.name}</p></div>
          <div><strong>Email</strong><p>{data.customer.primaryContact.email}</p></div>
          <div><strong>Mobile Number</strong><p>{data.customer.primaryContact.mobileNumber}</p></div>
        </section>
        <span className={styles.line}></span>
        <div style={{ marginBottom: '-1px' ,paddingLeft:'15px',paddingTop:'10px'}}><strong>Billing Address</strong></div>
        <section className={styles.gridSection}>

          <div><strong>Line 1</strong><p>{data.customer.billingAddress.line1}</p></div>
          <div><strong>Line 2</strong><p>{data.customer.billingAddress.line2}</p></div>
          <div><strong>City</strong><p>{data.customer.billingAddress.city}</p></div>
        </section>
      </div>

      {/* Invoice Information */}
      <div className={styles.contentBody}>
        <div className={styles.headline} style={{ marginBottom: '0px' ,paddingLeft:'15px',paddingTop:'10px'}}><p>Invoice Information</p></div>
        <span className={styles.line}></span>
        <section className={styles.gridSection}>
          <div><strong>Invoice Number</strong><p>{data.invoice.invoiceNumber}</p></div>
          <div><strong>Invoice Date</strong><p>{data.invoice.invoiceDate}</p></div>
        </section>
        <span className={styles.line}></span>
        <section className={styles.gridSection}>
          <div><strong>Start Date</strong><p>{data.invoice.startDate}</p></div>
          <div><strong>End Date</strong><p>{data.invoice.endDate}</p></div>
          <div><strong>Due Date</strong><p>{data.invoice.dueDate}</p></div>
        </section>
        <span className={styles.line}></span>
        <section className={styles.gridSection}>
          <div><strong>Invoice Status</strong><p>{data.invoice.status}</p></div>
          <div><strong>Payment Terms</strong><p>{data.invoice.paymentTerms}</p></div>
          <div><strong>Currency</strong><p>{data.invoice.currency}</p></div>
          <div><strong>Mode of Payment</strong><p>{data.invoice.modeOfPayment}</p></div>
          <div><strong>Total Amount</strong><p>{data.invoice.totalAmount}</p></div>
        </section>
      </div></div>

      {/* Table */}
      <div className={styles.tableContainer}>
        
                
        <div className={styles.headlin} style={{ marginBottom: '0px', paddingLeft: '15px', paddingTop: '10px'}}>
            <p>Tenant List</p>
        </div>
        <span className={styles.line}></span>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Tenant Name</th>
                <th>Tenant ID</th>
                <th>Licenses issued</th>
                <th>License price</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {tenants.map((tenant, index) => (
                <tr key={index}>
                <td>{tenant.tenantName}</td>
                <td>{tenant.tenantId}</td>
                <td>{tenant.licensesIssued}</td>
                <td>{tenant.licensePrice}</td>
                <td>{tenant.amount}</td>
                </tr>
            ))}
            </tbody>
        </table>

        {/* Summary Section */}
        <div className={styles.summary}>
            <div>
            <p>Subtotal : {subtotal}</p>
            <p>Discount : {discount}</p>
            <p>Tax : {tax}</p>
            <strong>Total Amount : {totalAmount}</strong>
            </div>
    
        </div>
      </div>
    </div>
  );
};

export default Invoice_Details;
