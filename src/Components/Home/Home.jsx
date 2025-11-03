import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './Home.module.css';

const Home = () => {
  const customerData = [
    { name: 'Meta', value: 61, percentage: 24.18, color: '#8B5CF6' },
    { name: 'Amazon', value: 46, percentage: 13.73, color: '#F59E0B' },
    { name: 'Adobe', value: 15, percentage: 4.48, color: '#EC4899' },
    { name: 'Dell', value: 58, percentage: 17.31, color: '#F97316' },
    { name: 'Asus', value: 20, percentage: 5.97, color: '#3B82F6' },
    { name: 'Other', value: 50, percentage: 14.93, color: '#10B981' }
  ];

  const pendingInvoices = Array(15).fill({
    customerName: 'Acme Coroporation',
    invoiceNumber: 'INV45161',
    invoiceDate: '02/02/2025',
    amount: '$500'
  });

  const tenantLicenses = Array(15).fill({
    tenantName: 'Acme Corp',
    customerName: 'Mata',
    licenseIssued: 'Enterprise',
    expiryDate: '02/02/2025'
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Home</h1>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Licenses</div>
          <div className={styles.statValue}>5</div>
          <div className={styles.statSubtext}>July<br/>Issued / Renewed</div>
          <a href="#" className={styles.statLink}>view more</a>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Customers</div>
          <div className={styles.statValue}>250</div>
          <div className={styles.statSubtext}>&nbsp;</div>
          <a href="#" className={styles.statLink}>view more</a>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Tenants</div>
          <div className={styles.statValue}>458</div>
          <div className={styles.statSubtext}>&nbsp;</div>
          <a href="#" className={styles.statLink}>view more</a>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Users</div>
          <div className={styles.statValue}>4876</div>
          <div className={styles.statSubtext}>&nbsp;</div>
          <a href="#" className={styles.statLink}>view more</a>
        </div>
      </div>

      <div className={styles.customersSection}>
        <h2 className={styles.customersHeader}>Customers</h2>
        <div className={styles.chartContainer}>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={customerData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {customerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.legend}>
            {customerData.map((item, index) => (
              <div key={index} className={styles.legendItem}>
                <div className={styles.legendDot} style={{ backgroundColor: item.color }}></div>
                <span className={styles.legendText}>{item.name}</span>
                <span className={styles.legendValue}>{item.value} {item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tablesGrid}>
        <div className={styles.tableCard}>
          <h2 className={styles.tableHeader}>Customer Pending Invoices</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Invoice Number</th>
                  <th>Invoice Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {pendingInvoices.map((invoice, index) => (
                  <tr key={index}>
                    <td>{invoice.customerName}</td>
                    <td>{invoice.invoiceNumber}</td>
                    <td>{invoice.invoiceDate}</td>
                    <td>{invoice.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.tableCard}>
          <h2 className={styles.tableHeader}>Tenant-License Expiry</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tenant Name</th>
                  <th>Customer Name</th>
                  <th>License Issued</th>
                  <th>Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                {tenantLicenses.map((license, index) => (
                  <tr key={index}>
                    <td>{license.tenantName}</td>
                    <td>{license.customerName}</td>
                    <td>{license.licenseIssued}</td>
                    <td>{license.expiryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;