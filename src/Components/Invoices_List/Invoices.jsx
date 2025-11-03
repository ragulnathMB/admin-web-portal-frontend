import { useState } from "react";
import styles from './Invoices.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import edit from '../../assets/edit.svg'
import news from '../../assets/new.svg'
import download from '../../assets/download.svg'
import show from '../../assets/view.svg'
import post from '../../assets/post.svg'


const data=[
  {
    "InvoiceNumber": "INV-1001",
    "CustomerID": "C001",
    "CustomerName": "Rajesh Kumar",
    "InvoiceDate": "2025-01-05",
    "DueDate": "2025-01-20",
    "InvoiceAmount": 15000,
    "Currency": "INR",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1002",
    "CustomerID": "C002",
    "CustomerName": "Anjali Sharma",
    "InvoiceDate": "2025-01-07",
    "DueDate": "2025-01-22",
    "InvoiceAmount": 22000,
    "Currency": "INR",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1003",
    "CustomerID": "C003",
    "CustomerName": "John Doe",
    "InvoiceDate": "2025-01-10",
    "DueDate": "2025-01-25",
    "InvoiceAmount": 18000,
    "Currency": "USD",
    "Status": "Overdue",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1004",
    "CustomerID": "C004",
    "CustomerName": "Meena Gupta",
    "InvoiceDate": "2025-01-12",
    "DueDate": "2025-01-27",
    "InvoiceAmount": 35000,
    "Currency": "INR",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1005",
    "CustomerID": "C005",
    "CustomerName": "David Smith",
    "InvoiceDate": "2025-01-14",
    "DueDate": "2025-01-29",
    "InvoiceAmount": 27000,
    "Currency": "USD",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1006",
    "CustomerID": "C006",
    "CustomerName": "Sanjay Patel",
    "InvoiceDate": "2025-01-16",
    "DueDate": "2025-01-31",
    "InvoiceAmount": 40000,
    "Currency": "INR",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1007",
    "CustomerID": "C007",
    "CustomerName": "Sophia Brown",
    "InvoiceDate": "2025-01-18",
    "DueDate": "2025-02-02",
    "InvoiceAmount": 12000,
    "Currency": "USD",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1008",
    "CustomerID": "C008",
    "CustomerName": "Amit Verma",
    "InvoiceDate": "2025-01-20",
    "DueDate": "2025-02-04",
    "InvoiceAmount": 28000,
    "Currency": "INR",
    "Status": "Overdue",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1009",
    "CustomerID": "C009",
    "CustomerName": "Emily Johnson",
    "InvoiceDate": "2025-01-22",
    "DueDate": "2025-02-06",
    "InvoiceAmount": 15000,
    "Currency": "USD",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1010",
    "CustomerID": "C010",
    "CustomerName": "Rohit Mehra",
    "InvoiceDate": "2025-01-24",
    "DueDate": "2025-02-08",
    "InvoiceAmount": 50000,
    "Currency": "INR",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1011",
    "CustomerID": "C011",
    "CustomerName": "Michael Lee",
    "InvoiceDate": "2025-01-26",
    "DueDate": "2025-02-10",
    "InvoiceAmount": 33000,
    "Currency": "USD",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1012",
    "CustomerID": "C012",
    "CustomerName": "Neha Reddy",
    "InvoiceDate": "2025-01-28",
    "DueDate": "2025-02-12",
    "InvoiceAmount": 27000,
    "Currency": "INR",
    "Status": "Overdue",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1013",
    "CustomerID": "C013",
    "CustomerName": "Chris Evans",
    "InvoiceDate": "2025-01-30",
    "DueDate": "2025-02-14",
    "InvoiceAmount": 41000,
    "Currency": "USD",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1014",
    "CustomerID": "C014",
    "CustomerName": "Priya Iyer",
    "InvoiceDate": "2025-02-01",
    "DueDate": "2025-02-15",
    "InvoiceAmount": 22000,
    "Currency": "INR",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1015",
    "CustomerID": "C015",
    "CustomerName": "William Harris",
    "InvoiceDate": "2025-02-03",
    "DueDate": "2025-02-17",
    "InvoiceAmount": 29000,
    "Currency": "USD",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1016",
    "CustomerID": "C016",
    "CustomerName": "Arjun Nair",
    "InvoiceDate": "2025-02-05",
    "DueDate": "2025-02-19",
    "InvoiceAmount": 32000,
    "Currency": "INR",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1017",
    "CustomerID": "C017",
    "CustomerName": "Olivia Wilson",
    "InvoiceDate": "2025-02-07",
    "DueDate": "2025-02-21",
    "InvoiceAmount": 14000,
    "Currency": "USD",
    "Status": "Overdue",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1018",
    "CustomerID": "C018",
    "CustomerName": "Karan Singh",
    "InvoiceDate": "2025-02-09",
    "DueDate": "2025-02-23",
    "InvoiceAmount": 26000,
    "Currency": "INR",
    "Status": "Paid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1019",
    "CustomerID": "C019",
    "CustomerName": "Sophia Martinez",
    "InvoiceDate": "2025-02-11",
    "DueDate": "2025-02-25",
    "InvoiceAmount": 38000,
    "Currency": "USD",
    "Status": "Unpaid",
    "LastModifiedDate":"2025-01-8"
  },
  {
    "InvoiceNumber": "INV-1020",
    "CustomerID": "C020",
    "CustomerName": "Vikram Desai",
    "InvoiceDate": "2025-02-13",
    "DueDate": "2025-02-27",
    "InvoiceAmount": 44000,
    "Currency": "INR",
    "Status": "Overdue",
    "LastModifiedDate":"2025-01-8"
  }
]
const Invoices = () => {
  const [selectedInvoices, setSelectedInvoices] = useState([]);

  // Handle "Select All"
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedInvoices(data.map((row) => row.InvoiceNumber));
    } else {
      setSelectedInvoices([]);
    }
  };

  // Handle individual selection
  const handleSelect = (id) => {
    if (selectedInvoices.includes(id)) {
      setSelectedInvoices(selectedInvoices.filter((invoiceId) => invoiceId !== id));
    } else {
      setSelectedInvoices([...selectedInvoices, id]);
    }
  };

  // Fix: check select all dynamically
  const isAllSelected = selectedInvoices.length === data.length;
  const isIndeterminate = selectedInvoices.length > 0 && selectedInvoices.length < data.length;

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Invoices</p>
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
          <div><img src={news} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>New Invoice</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={edit} className={styles.menuIcon} style={{ height: '19px', paddingBottom: '1px' }} /></div>
          <div><p>Edit</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={show} className={styles.menuIcon} style={{ height: '18px', paddingBottom: '3px' }} /></div>
          <div><p>View</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={post} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Post</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={download} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Download</p></div>
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
                  style={{ position: 'relative', left: '-2px' }}
                  type="checkbox"
                  checked={isAllSelected}
                  
                  onChange={handleSelectAll}
                />
              </th>
              <th>Invoice Number</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Invoice Date</th>
              <th>Due Date</th>
              <th>Invoice Amount</th>
              <th>Currency</th>
              <th>Status</th>
              <th>Last Modified Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.InvoiceNumber} style={{backgroundColor:(selectedInvoices.includes(row.InvoiceNumber))?'#c1e2f5ff':''}}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedInvoices.includes(row.InvoiceNumber)}
                    onChange={() => handleSelect(row.InvoiceNumber)}
                  />
                </td>
                <td>{row.InvoiceNumber}</td>
                <td>{row.CustomerID}</td>
                <td>{row.CustomerName}</td>
                <td>{row.InvoiceDate}</td>
                <td>{row.DueDate}</td>
                <td>{row.InvoiceAmount}</td>
                <td>{row.Currency}</td>
                <td className={styles.stat}>
                  <p
                    className={styles.status}
                    style={{
                      backgroundColor:
                        row.Status === "Paid"
                          ? '#9FCB7D'
                          : row.Status === "Unpaid"
                          ? '#f18367'
                          : '#f1c232'
                    }}
                  >
                    {row.Status}
                  </p>
                </td>
                <td>{row.LastModifiedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;