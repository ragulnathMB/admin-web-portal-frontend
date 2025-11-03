import { useState } from "react";
import styles from './Generate_Invoice.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import save from '../../assets/save.svg'
import cancel from '../../assets/cancel.svg'
import post from '../../assets/post.svg'
import email from '../../assets/mail.svg'


const data=[
  {
    "InvoiceNumber": "INV-1001",
    "CustomerID": "C001",
    "CustomerName": "Rajesh Kumar",
    "InvoiceDate": "2025-01-05",
    "DueDate": "2025-01-20",
    "InvoiceAmount": 15000,
    "Currency": "INR",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1002",
    "CustomerID": "C002",
    "CustomerName": "Anjali Sharma",
    "InvoiceDate": "2025-01-07",
    "DueDate": "2025-01-22",
    "InvoiceAmount": 22000,
    "Currency": "INR",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1003",
    "CustomerID": "C003",
    "CustomerName": "John Doe",
    "InvoiceDate": "2025-01-10",
    "DueDate": "2025-01-25",
    "InvoiceAmount": 18000,
    "Currency": "USD",
    "Status": "Overdue"
  },
  {
    "InvoiceNumber": "INV-1004",
    "CustomerID": "C004",
    "CustomerName": "Meena Gupta",
    "InvoiceDate": "2025-01-12",
    "DueDate": "2025-01-27",
    "InvoiceAmount": 35000,
    "Currency": "INR",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1005",
    "CustomerID": "C005",
    "CustomerName": "David Smith",
    "InvoiceDate": "2025-01-14",
    "DueDate": "2025-01-29",
    "InvoiceAmount": 27000,
    "Currency": "USD",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1006",
    "CustomerID": "C006",
    "CustomerName": "Sanjay Patel",
    "InvoiceDate": "2025-01-16",
    "DueDate": "2025-01-31",
    "InvoiceAmount": 40000,
    "Currency": "INR",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1007",
    "CustomerID": "C007",
    "CustomerName": "Sophia Brown",
    "InvoiceDate": "2025-01-18",
    "DueDate": "2025-02-02",
    "InvoiceAmount": 12000,
    "Currency": "USD",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1008",
    "CustomerID": "C008",
    "CustomerName": "Amit Verma",
    "InvoiceDate": "2025-01-20",
    "DueDate": "2025-02-04",
    "InvoiceAmount": 28000,
    "Currency": "INR",
    "Status": "Overdue"
  },
  {
    "InvoiceNumber": "INV-1009",
    "CustomerID": "C009",
    "CustomerName": "Emily Johnson",
    "InvoiceDate": "2025-01-22",
    "DueDate": "2025-02-06",
    "InvoiceAmount": 15000,
    "Currency": "USD",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1010",
    "CustomerID": "C010",
    "CustomerName": "Rohit Mehra",
    "InvoiceDate": "2025-01-24",
    "DueDate": "2025-02-08",
    "InvoiceAmount": 50000,
    "Currency": "INR",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1011",
    "CustomerID": "C011",
    "CustomerName": "Michael Lee",
    "InvoiceDate": "2025-01-26",
    "DueDate": "2025-02-10",
    "InvoiceAmount": 33000,
    "Currency": "USD",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1012",
    "CustomerID": "C012",
    "CustomerName": "Neha Reddy",
    "InvoiceDate": "2025-01-28",
    "DueDate": "2025-02-12",
    "InvoiceAmount": 27000,
    "Currency": "INR",
    "Status": "Overdue"
  },
  {
    "InvoiceNumber": "INV-1013",
    "CustomerID": "C013",
    "CustomerName": "Chris Evans",
    "InvoiceDate": "2025-01-30",
    "DueDate": "2025-02-14",
    "InvoiceAmount": 41000,
    "Currency": "USD",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1014",
    "CustomerID": "C014",
    "CustomerName": "Priya Iyer",
    "InvoiceDate": "2025-02-01",
    "DueDate": "2025-02-15",
    "InvoiceAmount": 22000,
    "Currency": "INR",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1015",
    "CustomerID": "C015",
    "CustomerName": "William Harris",
    "InvoiceDate": "2025-02-03",
    "DueDate": "2025-02-17",
    "InvoiceAmount": 29000,
    "Currency": "USD",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1016",
    "CustomerID": "C016",
    "CustomerName": "Arjun Nair",
    "InvoiceDate": "2025-02-05",
    "DueDate": "2025-02-19",
    "InvoiceAmount": 32000,
    "Currency": "INR",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1017",
    "CustomerID": "C017",
    "CustomerName": "Olivia Wilson",
    "InvoiceDate": "2025-02-07",
    "DueDate": "2025-02-21",
    "InvoiceAmount": 14000,
    "Currency": "USD",
    "Status": "Overdue"
  },
  {
    "InvoiceNumber": "INV-1018",
    "CustomerID": "C018",
    "CustomerName": "Karan Singh",
    "InvoiceDate": "2025-02-09",
    "DueDate": "2025-02-23",
    "InvoiceAmount": 26000,
    "Currency": "INR",
    "Status": "Paid"
  },
  {
    "InvoiceNumber": "INV-1019",
    "CustomerID": "C019",
    "CustomerName": "Sophia Martinez",
    "InvoiceDate": "2025-02-11",
    "DueDate": "2025-02-25",
    "InvoiceAmount": 38000,
    "Currency": "USD",
    "Status": "Unpaid"
  },
  {
    "InvoiceNumber": "INV-1020",
    "CustomerID": "C020",
    "CustomerName": "Vikram Desai",
    "InvoiceDate": "2025-02-13",
    "DueDate": "2025-02-27",
    "InvoiceAmount": 44000,
    "Currency": "INR",
    "Status": "Overdue"
  }
]
const Generate_Invoice = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      tenantName: "Acme Corporation",
      tenantId: "TNT001",
      quantity: 30,
      unitPrice: 350,
      tax: 2,
    },
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerId: "",
    contactPerson: "",
    emailId: "",
    phoneNumber: "",
    addressLine1: "",
    city: "",
    stateProvince: "",
    country: "",
    postalCode: ""
  });

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceDate: "",
    startDate: "",
    dueDate: "",
    currency: ""
  });

  const [paymentDetails, setPaymentDetails] = useState({
    paymentTerms: "",
    modeOfPayment: "",
    amount: "0000"
  });

  // Add row
  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      tenantName: "",
      tenantId: "",
      quantity: 0,
      unitPrice: 0,
      tax: 0,
    };
    setRows([...rows, newRow]);
  };
  const [discount,setDiscount]=useState(0);

  // Delete row
  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Edit cell value
  const handleChange = (id, key, value) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [key]: value } : row
      )
    );
  };

  // Handle customer info changes
  const handleCustomerChange = (key, value) => {
    setCustomerInfo(prev => ({ ...prev, [key]: value }));
  };

  // Handle invoice details changes
  const handleInvoiceDetailsChange = (key, value) => {
    setInvoiceDetails(prev => ({ ...prev, [key]: value }));
  };

  // Handle payment details changes
  const handlePaymentDetailsChange = (key, value) => {
    setPaymentDetails(prev => ({ ...prev, [key]: value }));
  };

  // Compute amount = quantity × unitPrice + tax
  const calculateAmount = (row) => {
    const subtotal = row.quantity * row.unitPrice;
    return subtotal + (subtotal * row.tax) / 100;
  };

  // Calculate totals
  const calculateSubtotal = () => {
    return rows.reduce((sum, row) => sum + calculateAmount(row), 0);
  };

  const calculateDiscount = () => {
    return calculateSubtotal()*discount/100; // You can implement discount logic here
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Generate Invoice</p>
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
          <div><img src={save} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Save Draft</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={post} className={styles.menuIcon} style={{ height: '19px', paddingBottom: '1px' }} /></div>
          <div><p>Post</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={cancel} className={styles.menuIcon} style={{ height: '18px', paddingBottom: '3px' }} /></div>
          <div><p>Cancel</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={email} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Send Email</p></div>
        </div>
        
      </div>
      <div className={styles.mainContent}>
        {/* Left Column - Customer Information */}
        <div className={styles.leftColumn}>
          <div className={styles.section}>
            <h3>Customer Information</h3>
            <div style={{backgroundColor:'#C6C6C8',height:'1px',position:'relative',top:'-20px',left:'-20px',width:'106%'}} ></div>
            <div className={styles.formGroup}>
              <label>Customer Name*</label>
              <select 
                value={customerInfo.customerName}
                onChange={(e) => handleCustomerChange('customerName', e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Acme Corporation">Acme Corporation</option>
                <option value="Tech Solutions Inc">Tech Solutions Inc</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Customer ID*</label>
              <select 
                value={customerInfo.customerId}
                onChange={(e) => handleCustomerChange('customerId', e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="CUST001">CUST001</option>
                <option value="CUST002">CUST002</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Contact Person</label>
              <input 
                type="text" 
                placeholder="Contact Person"
                value={customerInfo.contactPerson}
                onChange={(e) => handleCustomerChange('contactPerson', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email ID</label>
              <input 
                type="email" 
                placeholder="Email ID"
                value={customerInfo.emailId}
                onChange={(e) => handleCustomerChange('emailId', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input 
                type="tel" 
                placeholder="Phone Number"
                value={customerInfo.phoneNumber}
                onChange={(e) => handleCustomerChange('phoneNumber', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Billing Address*</label>
              <input 
                type="text" 
                placeholder="Line 1"
                value={customerInfo.addressLine1}
                onChange={(e) => handleCustomerChange('addressLine1', e.target.value)}
              />
              <input 
                type="text" 
                placeholder="City"
                value={customerInfo.city}
                onChange={(e) => handleCustomerChange('city', e.target.value)}
              />
              <input 
                type="text" 
                placeholder="State/Province"
                value={customerInfo.stateProvince}
                onChange={(e) => handleCustomerChange('stateProvince', e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Country"
                value={customerInfo.country}
                onChange={(e) => handleCustomerChange('country', e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Postal Code"
                value={customerInfo.postalCode}
                onChange={(e) => handleCustomerChange('postalCode', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Invoice Details and Payment Details */}
        <div className={styles.rightColumn}>
          <div className={styles.section}>
            <h3>Invoice Details</h3>
            <div style={{backgroundColor:'#C6C6C8',height:'1px',position:'relative',top:'-20px',left:'-20px',width:'106%'}} ></div>
            <div className={styles.formGroup}>
              <label>Invoice Date</label>
              <input 
                type="date" 
                placeholder="dd/mm/yyyy"
                value={invoiceDetails.invoiceDate}
                onChange={(e) => handleInvoiceDetailsChange('invoiceDate', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Start Date</label>
              <input 
                type="date" 
                placeholder="dd/mm/yyyy"
                value={invoiceDetails.startDate}
                onChange={(e) => handleInvoiceDetailsChange('startDate', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Due Date</label>
              <input 
                type="date" 
                placeholder="dd/mm/yyyy"
                value={invoiceDetails.dueDate}
                onChange={(e) => handleInvoiceDetailsChange('dueDate', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Currency</label>
              <select 
                value={invoiceDetails.currency}
                onChange={(e) => handleInvoiceDetailsChange('currency', e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          <div className={styles.section} style={{marginTop:'-10px'}}>
            <h3>Payment Details</h3>
            <div style={{backgroundColor:'#C6C6C8',height:'1px',position:'relative',top:'-20px',left:'-20px',width:'106%'}} ></div>
            <div className={styles.formGroup}>
              <label>Payment Terms</label>
              <select 
                value={paymentDetails.paymentTerms}
                onChange={(e) => handlePaymentDetailsChange('paymentTerms', e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 15">Net 15</option>
                <option value="Due on Receipt">Due on Receipt</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Mode of Payment</label>
              <select 
                value={paymentDetails.modeOfPayment}
                onChange={(e) => handlePaymentDetailsChange('modeOfPayment', e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Check">Check</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Amount</label>
              <input 
                type="text" 
                placeholder="$ 0000"
                value={paymentDetails.amount}
                onChange={(e) => handlePaymentDetailsChange('amount', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Lines Table */}
      <div className={styles.tableSection}>
        <h3>Invoice Lines</h3>
        
        <table className={styles.invoiceTable}>
          <thead>
            <tr>
              <th>Tenant Name</th>
              <th>Tenant ID</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Tax</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <select
                    value={row.tenantName}
                    onChange={(e) => handleChange(row.id, "tenantName", e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Acme Corporation">Acme Corporation</option>
                    <option value="Tech Solutions Inc">Tech Solutions Inc</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={row.tenantId}
                    onChange={(e) => handleChange(row.id, "tenantId", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) =>
                      handleChange(row.id, "quantity", Number(e.target.value))
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.unitPrice}
                    onChange={(e) =>
                      handleChange(row.id, "unitPrice", Number(e.target.value))
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.tax}
                    onChange={(e) => handleChange(row.id, "tax", Number(e.target.value))}
                  />
                  <span>%</span>
                </td>
                <td>{calculateAmount(row).toFixed(0)}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>✓</button>
                    <button className={styles.actionBtn} onClick={() => handleDeleteRow(row.id)}>✗</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className={styles.addRowBtn} onClick={handleAddRow}>
          + Add Row
        </button>

        {/* Totals */}
        <div className={styles.totals}>
          <div className={styles.totalRow}>
            <span>Subtotal</span>
            <span>{calculateSubtotal().toFixed(0)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Discount</span>
            <span><input type="number" className={styles.discount} value={discount} onChange={(e)=>{setDiscount(Number(e.target.value))}}/>%</span>
          </div>
          <div className={styles.totalRow}>
            <strong>
              <span style={{marginRight:'20px'}}>Total Amount</span>
              <span>{calculateTotal().toFixed(0)}</span>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate_Invoice;