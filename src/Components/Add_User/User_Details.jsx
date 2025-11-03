import styles from './User_Details.module.css'
import search from '../../../../assets/search.svg'
import filter from '../../../../assets/filter.svg'
import show from '../../../../assets/show.svg'
import hide from '../../../../assets/hide.svg'
import cancel from '../../../../assets/cancel.svg'
import save from '../../../../assets/save.svg'
import { useState } from 'react'

const User_Details = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>User Details</p>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Search" />
          </div>
          <div className={styles.icon}><img src={filter} alt="filter" /></div>
        </div>
      </div>

      {/* Menu */}
      <div className={styles.menuBar}>
        <div className={styles.menuButton}>
          <div><img src={save} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Add User</p></div>
        </div>
        <div className={styles.menuButton}>
          <div><img src={cancel} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Cancel</p></div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.contentBody}>
        <div className={styles.headline}><p>User Informations</p></div>
        <span className={styles.line}></span>

        <div className={styles.item}>
          {/* User ID */}
          <div className={styles.labelNam}><p>User ID*</p></div>
          <div className={styles.val}>
            <input placeholder="User ID" type="text" className={styles.inputedit} />
          </div>

          {/* Employee ID (Dropdown) */}
          <div className={styles.labelNam}><p>Employee ID*</p></div>
          <div className={styles.val}>
            <select className={styles.inputedits}>
              <option value="">Select Employee ID</option>
              <option value="EMP001">EMP001</option>
              <option value="EMP002">EMP002</option>
              <option value="EMP003">EMP003</option>
              <option value="EMP004">EMP004</option>
            </select>
          </div>

          {/* Name */}
          <div className={styles.labelNam}><p>Name*</p></div>
          <div className={styles.val}>
            <input placeholder="Name" type="text" className={styles.inputedit} />
          </div>

          {/* Company ID */}
          <div className={styles.labelNam}><p>Company ID*</p></div>
          <div className={styles.val}>
            <input placeholder="Company ID" type="text" className={styles.inputedit} />
          </div>

          {/* Company Name */}
          <div className={styles.labelNam}><p>Company Name*</p></div>
          <div className={styles.val}>
            <input placeholder="Company Name" type="text" className={styles.inputedit} />
          </div>

          {/* Status (Dropdown) */}
          <div className={styles.labelNam}><p>Status*</p></div>
          <div className={styles.val}>
            <select className={styles.inputedits}>
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User_Details;
