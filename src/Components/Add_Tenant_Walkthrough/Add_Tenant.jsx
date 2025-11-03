import styles from './Add_Tenant.module.css'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'
import show from '../../assets/show.svg'
import hide from '../../assets/hide.svg'
import next from '../../assets/next.svg'
import prev from '../../assets/prev.svg'
import submitt from '../../assets/submit.svg'
import cancel from '../../assets/cancel.svg'
import save from '../../assets/save.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add_Tenant = () => {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate=useNavigate();
  const [currStage,setCurrStage]=useState("1");
  const data={
  "TenantName": "West Inc.",
  "AssociatedCustomer": "West Inc.",
  "PrimaryContact": {
    "Name": "John Marston",
    "Email": "Primary Contact Email",
    "Phone": "Primary Contact Phone"
  },
  "NotesInternal": "Notes (internal)",
  "Status": "Active",
  "MaximumUserLicenses": "00",
  "UsageStartDate": "dd/mm/yyyy",
  "AdminDetails": {
    "Name": "John Marston",
    "Email": "Admin Email",
    "Phone": "Admin Phone"
  }
}
const [admins, setAdmins] = useState([{ email: '' }]);

// Handler functions
const handleAdminChange = (idx, value) => {
  const updated = admins.map((admin, i) => i === idx ? { ...admin, email: value } : admin);
  setAdmins(updated);
};

const handleAddAdmin = () => {
  setAdmins([...admins, { email: '' }]);
};

const handleRemoveAdmin = (idx) => {
  setAdmins(admins.filter((_, i) => i !== idx));
};


  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.headerContent}>
        <div className={styles.head}>
          <p>Add Tenant</p>
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
        {((currStage=="4")||(currStage=="3")||(currStage=="2"))?(<>
        <div className={styles.menuButton} onClick={()=>{setCurrStage((parseInt(currStage)-1).toString())}}>
          <div><img src={prev} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Previous</p></div>
        </div>
        </>):(<></>)}
        {((currStage=="3")||(currStage=="2")||(currStage=="1"))?(<>
        <div className={styles.menuButton} onClick={()=>{setCurrStage((parseInt(currStage)+1).toString())}}>
          <div><img src={next} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Next</p></div>
        </div>
        </>):(<></>)}
        {(currStage=="4")?(<>
        <div className={styles.menuButton}>
          <div><img src={submitt} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Submit</p></div>
        </div>
        </>):(<></>)}
        <div className={styles.menuButton} onClick={()=>{Navigate("/all-customers")}}>
          <div><img src={cancel} className={styles.menuIcon} style={{ height: '20px' }} /></div>
          <div><p>Cancel</p></div>
        </div>
      </div>
      <div className={styles.mainBody}>
        <div>
            {(currStage=="1")?(<>
            {/* Content */}
      <div className={styles.contentBody}>
        <div className={styles.headline}><p>Tenant Basic Information</p><p className={styles.sequence}>Step 1 of 4</p></div>
        <span className={styles.line}></span>

        <div className={styles.item}>
          {/* User ID */}
          <div className={styles.labelNam}><p>Tenant Name*</p></div>
          <div className={styles.val}>
            <input placeholder="Customer Name" type="text" className={styles.inputedit} />
          </div>
          <div className={styles.labelNam}><p>Associated Customer*</p></div>
          <div className={styles.val}>
                      <select className={styles.inputedits}>
                        <option value="">Select One Option</option>
                        <option value="Active">Status 1</option>
                        <option value="Inactive">Status 2</option>
                      </select>
                    </div>
          <div className={styles.labelNam}><p>Contact Person Name*</p></div>
          <div className={styles.val}>
            <input placeholder="Primary Contact Name" type="text" className={styles.inputedit} />
          </div>
          <div className={styles.labelNam}><p>Contact Email*</p></div>
          <div className={styles.val}>
            <input placeholder="Primary Contact Email" type="email" className={styles.inputedit} />
          </div>
          <div className={styles.labelNam}><p>Contact Phone Number*</p></div>
          <div className={styles.val}>
            <input placeholder="Primary Contact Phone" type="number" className={styles.inputedit} />
          </div>
          
          <div className={styles.labelNam}><p>Notes (Internal)</p></div>
          <div className={styles.val}>
            <input placeholder="" type="text" style={{height:'200px'}} className={styles.inputedit} />
          </div>
        </div>
      </div>
      <div className={styles.contentBody} style={{marginTop:'30px'}}>
        <div className={styles.headline}><p>License Details</p></div>
        <span style={{marginTop:'10px'}} className={styles.line}></span>

        <div className={styles.item}>
          {/* User ID */}
          <div className={styles.labelNam}><p>Status</p></div>
          <div className={styles.val}>
                      <select className={styles.inputedits}>
                        <option value="">Select Status</option>
                        <option value="Active">Status 1</option>
                        <option value="Inactive">Status 2</option>
                      </select>
                    </div>
          <div className={styles.labelNam}><p>Maximum User Licenses</p></div>
          <div className={styles.val}>
            <input placeholder="00" type="number" className={styles.inputedit} />
          </div>
        </div>
      </div>
      </>):(<></>)}
            {(currStage=="2")?(<>
            <div className={styles.contentBody}>
        <div className={styles.headline}><p>Integration Credentials (D365 Service Account)
</p><p className={styles.sequence}>Step 2 of 4</p></div>
        <span className={styles.line}></span>

        <div className={styles.item}>
          {/* User ID */}
          <div className={styles.labelNam}><p>Unified D365 Service Account Username*</p></div>
          <div className={styles.val}>
            <input  type="text" placeholder='Username' className={styles.inputedit} />
          </div>
          
          <div className={styles.labelNam}><p>Unified D365 Service Account Password *</p></div>
          <div className={styles.val}>
            <input placeholder="Password" type="password" className={styles.inputedit} />
          </div>
          <div className={styles.labelNam}><p>D365 Instance URL *</p></div>
          <div className={styles.val}>
            <input placeholder="URL" type="text" className={styles.inputedit} />
          </div>
          
         
        
        </div>
      </div>
            </>):(<></>)}
            
          {(currStage=="3") ? (
            <div className={styles.contentBody}>
              <div className={styles.headline}>
                <p>Tenant Admin User</p>
                <p className={styles.sequence}>Step 3 of 4</p>
              </div>
              <span className={styles.line}></span>
              <div className={styles.item}>
                {admins.map((admin, idx) => (
                  <div key={idx} style={{ display: 'flex', marginBottom: '10px',flexDirection:'column',alignItems:'left' }}>
                    <div className={styles.labelNam}>
                      <p>Admin Email*</p>
                    </div>
                    <div className={styles.val}>
                      <input
                        placeholder={`Admin Email ${idx + 1}`}
                        type="email"
                        className={styles.inputedit}
                        value={admin.email}
                        onChange={e => handleAdminChange(idx, e.target.value)}
                        required
                      />
                      {admins.length > 1 && (
                      <button
                        type="button"
                        className={styles.addbtn}
                        onClick={() => handleRemoveAdmin(idx)}
                      >
                        <img src={cancel}/>
                      </button>
                    )}
                    </div>
                    
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddAdmin}
                  style={{ marginTop: '10px' ,border:'none',textDecoration:'underline',color:'#08254A',background:'none',cursor:'pointer'}}
                >
                  + Add More
                </button>
              </div>
            </div>
          ) : (<></>)}
         
       
            {(currStage=="4")?(<>
            <div className={styles.contentBody}>
        <div className={styles.headline}><p>License Details</p><p className={styles.sequence}>Step 4 of 4</p></div>
        <span className={styles.line}></span>

       <section className={styles.gridSection}>
        <div><strong>Tenant Name</strong><p>{data.TenantName}</p></div>
        <div><strong>Associated Customer</strong><p>{data.AssociatedCustomer}</p></div>
      </section>

      {/* Primary Contact */}
      <section className={styles.gridSection}>
        <div><strong>Primary Contact Name</strong><p>{data.PrimaryContact.Name}</p></div>
        <div><strong>Primary Contact Email</strong><p>{data.PrimaryContact.Email}</p></div>
        <div><strong>Primary Contact Phone</strong><p>{data.PrimaryContact.Phone}</p></div>
      </section>

      {/* Notes */}
      <section className={styles.gridSection}>
        <div><strong>Notes (internal)</strong><p>{data.NotesInternal}</p></div>
      </section>

      {/* Status & License Info */}
      <section className={styles.gridSection}>
        <div><strong>Status</strong><p>{data.Status}</p></div>
        <div><strong>Maximum User Licenses</strong><p>{data.MaximumUserLicenses}</p></div>
        <div><strong>Usage Start Date</strong><p>{data.UsageStartDate}</p></div>
      </section>

      {/* Admin Info */}
      <section className={styles.gridSection}>
        
        <div><strong>Admin Email</strong><p>{data.AdminDetails.Email}</p></div>
        
      </section>
    </div>
            </>):(<></>)}
        </div>
        <div className={styles.stageBody}>
            <div style={{color:((currStage=="2" || currStage=="3" || currStage=="4"))?"#9FCB7D":"black",marginBottom:'-35px'}}>
                <div className={styles.serialn} style={{border:((currStage=="2" || currStage=="3" || currStage=="4"))?"1px solid #9FCB7D":"1px solid black"}} ><p>1</p></div>
                <div className={styles.serialStep}><p>Step 1</p></div>
                <div className={styles.serialDet}><p>Tenant Basic Information & Licensing</p></div>
            </div>
            <div style={{color:((currStage=="3" || currStage=="4"))?"#9FCB7D":"black",marginBottom:'-30px'}}>
                <div className={styles.serialn} style={{border:((currStage=="3" || currStage=="4"))?"1px solid #9FCB7D":"1px solid black"}}><p>2</p></div>
                <div className={styles.serialStep}><p>Step 2</p></div>
                <div className={styles.serialDet}><p>Integration Credentials (D365 Service Account)
</p></div>
            </div>
            <div style={{color:((currStage=="4"))?"#9FCB7D":"black",marginBottom:'-30px'}}>
                <div className={styles.serialn} style={{border:((currStage=="4"))?"1px solid #9FCB7D":"1px solid black"}}><p>3</p></div>
                <div className={styles.serialStep}><p>Step 3</p></div>
                <div className={styles.serialDet}><p>Tenant Admin User</p></div>
            </div>
            <div>
                <div className={styles.serialn}><p>4</p></div>
                <div className={styles.serialStep}><p>Step 4</p></div>
                <div className={styles.serialDet}><p>Review & Confirm</p></div>
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default Add_Tenant;
