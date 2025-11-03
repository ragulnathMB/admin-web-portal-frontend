import styles from './Service_Account.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import edit from '../../assets/edit.svg'
import show from '../../assets/show.svg'
import hide from '../../assets/hide.svg'
import cancel from '../../assets/cancel.svg'
import save from '../../assets/save.svg'
import { useState } from 'react'

const data = {
  "service_name": "Service Name",
  "Password": "Password",
  "Instance_1": "http://instance.url",
  "Instance_2": "http://instance.url"
}

const Service_Account = () => {
  const [curMode, setCurMode] = useState('view')
  const [showPassword, setShowPassword] = useState(false);
  const [instances, setInstances] = useState([{ id: 1, value: "" }]); // array of instances

  const addInstance = () => {
    setInstances([...instances, { id: instances.length + 1, value: "" }]);
  }

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Service Account</p>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icon}><img src={search} alt="search" /></div>
          <div className={styles.inputBar}>
            <input placeholder="Search" />
          </div>
          <div className={styles.icon}><img src={filter} alt="search" /></div>
        </div>
      </div>

      {curMode === 'view' ? (
        <>
          <div className={styles.menuBar}>
            <div className={styles.menuButton} onClick={() => { setCurMode('edit') }} >
              <div><img src={edit} className={styles.menuIcon} style={{ height: '20px' }} /></div>
              <div><p>Update</p></div>
            </div>
          </div>

          <div className={styles.contentBody}>
            <div className={styles.headline}><p>Service Account Details</p></div>
            <span className={styles.line}></span>
            <div className={styles.item}>
              <div className={styles.labelName}><p>Service Account</p></div>
              <div className={styles.val}><p>{data.service_name}</p></div>

              <div className={styles.labelName}><p>Password</p></div>
              <div>
                <input
                  className={styles.pass}
                  type={showPassword ? 'text' : 'password'}
                  value={data.Password}
                  readOnly
                />
                <img
                  src={showPassword ? hide : show}
                  className={styles.eyeIcon}
                  onClick={() => { setShowPassword(!showPassword) }}
                />
              </div>
            </div>
            
            <span className={styles.line}></span>

            <div className={styles.item}>
              <div className={styles.labelName}><p>Instance URL</p></div>
              <div>
                <div className={styles.labelName}><p>Instance</p></div>
                <div className={styles.val}><p>{data.Instance_1}</p></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.menuBar}>
            <div className={styles.menuButton}>
              <div><img src={save} className={styles.menuIcon} style={{ height: '20px' }} /></div>
              <div><p>Save</p></div>
            </div>
            <div className={styles.menuButton} onClick={() => { setCurMode('view') }}>
              <div><img src={cancel} className={styles.menuIcon} style={{ height: '20px' }}  /></div>
              <div><p>Cancel</p></div>
            </div>
          </div>

          <div className={styles.contentBody}>
            <div className={styles.headline}><p>Service Account Details</p></div>
            <span className={styles.line}></span>

            <div className={styles.item}>
              <div className={styles.labelNam}><p>Service Account*</p></div>
              <div className={styles.val}><input placeholder="Service Account" type='text' className={styles.inputedit} /></div>

              <div className={styles.labelNam}><p>Password*</p></div>
              <div>
                <input className={styles.inputedit} type={showPassword ? 'text' : 'password'} />
                <img
                  src={showPassword ? hide : show}
                  className={styles.eyeIcon}
                  onClick={() => { setShowPassword(!showPassword) }}
                />
              </div>

              <div className={styles.labelNam}><p>Confirm Password*</p></div>
              <div>
                <input className={styles.inputedit} type={showPassword ? 'text' : 'password'} />
                <img
                  src={showPassword ? hide : show}
                  className={styles.eyeIcon}
                  onClick={() => { setShowPassword(!showPassword) }}
                />
              </div>

              <div className={styles.labelNam}><p>Instance URL*</p></div>
              <div className={styles.instanceBody}>
                {instances.map((inst, index) => (
                  <div key={inst.id} className={styles.instanceRow}>
                    <div className={styles.labelName}><p>Instance</p></div>
                    <div className={styles.val}>
                      <input
                        placeholder={`Instance ${index + 1}`}
                        type="text"
                        className={styles.inputedit}
                      />
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Service_Account
