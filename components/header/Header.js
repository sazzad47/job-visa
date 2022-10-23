import Image from 'next/image';
import Link from 'next/link';
import React,{useContext, useState} from 'react';

import {FiAlignRight,FiXCircle} from "react-icons/fi";
import logo from '../../public/logo.png';
import { DataContext } from '../../store/GlobalState';
import LoggedRouter from './LoggedRouter';
import { NavLink } from './NavLink';


const Navbarmenu = () => {
    const { state} = useContext(DataContext);
    const {auth} = state
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isApplyMenuSubMenu, setApplyMenuSubMenu] = useState(false);
    const [isCheckingMenuSubMenu, setCheckingMenuSubMenu] = useState(false);
      
    const toggleApplySubmenu = () => {
      setApplyMenuSubMenu(isApplyMenuSubMenu === false ? true : false);
      setCheckingMenuSubMenu(false);
    };
      
    const toggleCheckingSubmenu = () => {
      setCheckingMenuSubMenu(isCheckingMenuSubMenu === false ? true : false);
      setApplyMenuSubMenu(false);
    };
    
    let boxApplyClassSubMenu = ["sub__menus"];
    if(isApplyMenuSubMenu) {
        boxApplyClassSubMenu.push('sub__menus__Active');
    }else {
        boxApplyClassSubMenu.push('');
    }
    
    let boxCheckingClassSubMenu = ["sub__menus"];
    if(isCheckingMenuSubMenu) {
        boxCheckingClassSubMenu.push('sub__menus__Active');
    }else {
        boxCheckingClassSubMenu.push('');
    }

   

    return (
    <header className="header_section">
            <div className="header_content">
             
                {/* Add Logo  */}
                <div className="header__logo">
                    <Link href="/">
                       <Image src={logo} alt="" />
                    </Link>
                </div>

                   
               
                    <nav className="main-nav " >



                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                      
                        <NavLink href="/" exact onClick={toggleClass} className="nav-item nav-link">Home</NavLink>
                    </li>
                    
                    <li onClick={toggleApplySubmenu} className="menu-item sub__menus__arrows" ><NavLink href="#" className="nav-item nav-link">Apply</NavLink>
                        <ul className={boxApplyClassSubMenu.join(' ')} > 
                            <li> <Link href='/apply/visa'><a onClick={toggleClass}>Apply for Visa</a></Link> </li>
                            <li><Link href='/apply/jobs'><a onClick={toggleClass}>Apply for Job</a></Link> </li>
                            <li><Link href='/apply/visaLoan'><a onClick={toggleClass}>Apply for Loan</a></Link> </li>
                        </ul>
                    </li>
                    <li onClick={toggleCheckingSubmenu} className="menu-item sub__menus__arrows" ><NavLink href="#" className="nav-item nav-link">Checking</NavLink>
                        <ul className={boxCheckingClassSubMenu.join(' ')} > 
                            <li> <Link href='/checking/visa'><a onClick={toggleClass}>Visa Checking</a></Link> </li>
                            <li><Link href='/checking/job'><a onClick={toggleClass}>Job Checking</a></Link> </li>
                            <li><Link href='/checking/loan'><a onClick={toggleClass}>Loan Checking</a></Link> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink href="/jobs" onClick={toggleClass} className="nav-item nav-link">Jobs</NavLink></li>
                    <li className="menu-item " ><NavLink href="/notices" onClick={toggleClass} className="nav-item nav-link">Notice</NavLink></li>
                    <li className="menu-item " ><NavLink href="/services" onClick={toggleClass} className="nav-item nav-link">Service</NavLink></li>
                    <li className="menu-item " ><NavLink href="/contact" onClick={toggleClass} className="nav-item nav-link">Contact</NavLink></li>
                    <li className="menu-item nav-auth-btn" >
                    {Object.values(auth).length===0? <NavLink href="/auth" onClick={toggleClass} className="nav-item nav-link">Login</NavLink>: 
                    <LoggedRouter boxClass={boxClass} toggleClass={toggleClass} />
                    }
                    </li>
                    

                    </ul>


                    </nav>     
                    
                 

                 <div className='auth-segment'>
                 {Object.values(auth).length===0? <Link href="/auth"><button className='classic_btn'>Login</button></Link>
                    : <LoggedRouter boxClass={boxClass} toggleClass={toggleClass} />}
                    
                 </div>
                  {/* Responsive Menu Button */}
                {isResponsiveclose === true ? <> 
                    <div className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </div>
                </> : <> 
                    <div className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </div>
                </>}
        
        
            </div>
	 
    </header>
    )
}

export default Navbarmenu