import styles from './Navbar.module.css'
import vertical_bg from '../../assets/vertical_bg.png'
import { useState } from 'react';
import add from '../../assets/add.svg'
import menu from '../../assets/menu.svg'
import minimize from '../../assets/minimize.svg'
import dashboard from '../../assets/dashboard.svg'
import customer from '../../assets/customers.svg';
import invoice from '../../assets/invoices.svg';
import api_logs from '../../assets/api_logs.svg'
import ham_icon from '../../assets/ham.svg'
import {useNavigate } from 'react-router-dom';

const Navbar = ()=>{
    const [currentTab ,setCurrentTab]=useState('Dashboard');
    const [hamburger,setHamburger]=useState(false);
    const Navigate= useNavigate();
    return (
        <div className={styles.mainOuter}>
        <div className={styles.controller} style={{rotate:(hamburger)?"0deg":"180deg"}} onClick={()=>{setHamburger(!hamburger)}}>
            <img src={ham_icon}/>
        </div>
        <div className={styles.main} style={{display:(hamburger)?"flex":"none"}}>
            <div className={styles.item} style={{color:(currentTab=='Dashboard')?'#08254A':'white',backgroundColor:(currentTab=='Dashboard')?'white':'#08254A',cursor:'pointer'}} onClick={()=>{setCurrentTab('Dashboard');Navigate('/');}}>
                
                <svg width="14" height="16" viewBox="0 0 14 16" fill='none' xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'5px'}}>
                <path d="M5 14.6673V8.00065H9V14.6673M1 6.00065L7 1.33398L13 6.00065V13.334C13 13.6876 12.8595 14.0267 12.6095 14.2768C12.3594 14.5268 12.0203 14.6673 11.6667 14.6673H2.33333C1.97971 14.6673 1.64057 14.5268 1.39052 14.2768C1.14048 14.0267 1 13.6876 1 13.334V6.00065Z" stroke={(currentTab=='Dashboard')?'#08254A':'white'} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


             
                <div><p>Dashboard</p></div>
            </div>
            <div className={styles.item} style={{color:(currentTab=='Customers')?'#08254A':'white',backgroundColor:(currentTab=='Customers')?'white':'#08254A',cursor:'pointer'}} onClick={()=>{setCurrentTab('Customers');Navigate('/all-customers')}}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'5px'}}>
                <path d="M12.3346 13V11.6667C12.3346 10.9594 12.0537 10.2811 11.5536 9.78105C11.0535 9.28095 10.3752 9 9.66797 9H4.33464C3.62739 9 2.94911 9.28095 2.44902 9.78105C1.94892 10.2811 1.66797 10.9594 1.66797 11.6667V13M9.66797 3.66667C9.66797 5.13943 8.47406 6.33333 7.0013 6.33333C5.52854 6.33333 4.33464 5.13943 4.33464 3.66667C4.33464 2.19391 5.52854 1 7.0013 1C8.47406 1 9.66797 2.19391 9.66797 3.66667Z" stroke={(currentTab=='Customers')?'#08254A':'white'} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div><p>Customers</p></div>
            </div>
            {(currentTab=='Customers')?(
                <div className={styles.subItem} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>
                    <div style={{cursor:'pointer'}} onClick={()=>{Navigate('/all-customers')}}><p>All Customers</p></div>
                    <div style={{cursor:'pointer'}} onClick={()=>{Navigate('/add-customer')}}><p>Add Customer</p></div>
                    <div style={{cursor:'pointer'}} onClick={()=>{Navigate('/add-tenant')}}><p>Add Tenant</p></div>
                </div>
            ):(<></>)}
            <div className={styles.item} style={{color:(currentTab=='Licenses')?'#08254A':'white',backgroundColor:(currentTab=='Licenses')?'white':'#08254A',cursor:'pointer'}} onClick={()=>{setCurrentTab('Licenses')}}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'5px'}}>
<path d="M8.33463 1.33398H3.0013C2.64768 1.33398 2.30854 1.47446 2.05849 1.72451C1.80844 1.97456 1.66797 2.3137 1.66797 2.66732V13.334C1.66797 13.6876 1.80844 14.0267 2.05849 14.2768C2.30854 14.5268 2.64768 14.6673 3.0013 14.6673H11.0013C11.3549 14.6673 11.6941 14.5268 11.9441 14.2768C12.1942 14.0267 12.3346 13.6876 12.3346 13.334V5.33398M8.33463 1.33398L12.3346 5.33398M8.33463 1.33398L8.33464 5.33398H12.3346M9.66797 8.66732H4.33464M9.66797 11.334H4.33464M5.66797 6.00065H4.33464" stroke={(currentTab=='Licenses')?'#08254A':'white'} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <div><p>Licenses</p></div>
            </div>
            {(currentTab=='Licenses')?(
                <div className={styles.subItem} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>
                    <div style={{cursor:'pointer',margin:'0'}} onClick={()=>{Navigate('/renewable-and-expiry')}}><p>Renewable and Expiry</p></div>
                    <div style={{cursor:'pointer'}} onClick={()=>{Navigate('/plan-and-pricing')}}><p>Plans and Pricing</p></div>
                </div>
            ):(<></>)}
            <div className={styles.item} style={{color:(currentTab=='Invoice')?'#08254A':'white',backgroundColor:(currentTab=='Invoice')?'white':'#08254A',cursor:'pointer'}} onClick={()=>{setCurrentTab('Invoice');Navigate('/invoices')}}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'5px'}}>
<path d="M5 0.666016V15.3327M8.33333 3.33268H3.33333C2.71449 3.33268 2.121 3.57852 1.68342 4.0161C1.24583 4.45368 1 5.04718 1 5.66602C1 6.28485 1.24583 6.87835 1.68342 7.31593C2.121 7.75352 2.71449 7.99935 3.33333 7.99935H6.66667C7.2855 7.99935 7.879 8.24518 8.31658 8.68277C8.75417 9.12035 9 9.71384 9 10.3327C9 10.9515 8.75417 11.545 8.31658 11.9826C7.879 12.4202 7.2855 12.666 6.66667 12.666H1" stroke={(currentTab=='Invoice')?'#08254A':'white'} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <div><p>Invoice</p></div>
            </div>
            <div className={styles.item} style={{color:(currentTab=='API_Log')?'#08254A':'white',backgroundColor:(currentTab=='API_Log')?'white':'#08254A',cursor:'pointer'}} onClick={()=>{setCurrentTab('API_Log');Navigate('/api-logs')}}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'5px'}}>
<path d="M1.18 4.63928L7 8.00595L12.82 4.63928M7 14.7193V7.99928M13 10.666V5.33262C12.9998 5.0988 12.938 4.86916 12.821 4.66673C12.704 4.46429 12.5358 4.29619 12.3333 4.17928L7.66667 1.51262C7.46397 1.39559 7.23405 1.33398 7 1.33398C6.76595 1.33398 6.53603 1.39559 6.33333 1.51262L1.66667 4.17928C1.46417 4.29619 1.29599 4.46429 1.17897 4.66673C1.06196 4.86916 1.00024 5.0988 1 5.33262V10.666C1.00024 10.8998 1.06196 11.1294 1.17897 11.3318C1.29599 11.5343 1.46417 11.7024 1.66667 11.8193L6.33333 14.4859C6.53603 14.603 6.76595 14.6646 7 14.6646C7.23405 14.6646 7.46397 14.603 7.66667 14.4859L12.3333 11.8193C12.5358 11.7024 12.704 11.5343 12.821 11.3318C12.938 11.1294 12.9998 10.8998 13 10.666Z" stroke={(currentTab=='API_Log')?'#08254A':'white'} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <div><p>API Log</p></div>
            </div>
            <img src={vertical_bg} className={styles.vertical_bg} />
            
            
        </div>
        </div>
    );
}
export default Navbar;
