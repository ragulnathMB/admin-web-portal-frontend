import styles from './Plan_and_Pricing.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'

const data = [
  {
    Plan: "Basic",
    Pricing: "$ 100",
    Period: "3 Months",
    Features: ["Features 1", "Features 2", "Features 3", "Features 4"]
  },
  {
    Plan: "Standard",
    Pricing: "$ 200",
    Period: "6 Months",
    Features: ["Features 1", "Features 2", "Features 3", "Features 4"]
  },
  {
    Plan: "Premium",
    Pricing: "$ 300",
    Period: "12 Months",
    Features: ["Features 1", "Features 2", "Features 3", "Features 4"]
  }
]

const Plan_and_Pricing = () => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Plan & Pricing</p>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Search" />
          </div>
          <div className={styles.icon}><img src={filter} alt="search" /></div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Pricing</th>
              <th>Period</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, id) => (
              <tr key={id}>
                <td>{row.Plan}</td>
                <td>{row.Pricing}</td>
                <td>{row.Period}</td>
                <td>
                  <ul>
                    {row.Features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Plan_and_Pricing
