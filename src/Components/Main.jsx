import React from 'react'
import "./main.css"

import { Link, useNavigate } from 'react-router-dom'


// import Applied from './down/Applied'
// import Shortlisted from './down/Shortlisted'

function Main() {

    // const navigate = useNavigate();

    // const handleRedirect = () => {

    //     navigate('/Shortlisted'); 
    // };

    // const [applied, setapplied] = useState(false)
    // const Tapplied = () => setapplied(true)
    // const Fapplied = () => setapplied(false)

    // close state of applied
    // const[shortlisted,setShortlisted]=useState(false)   onClick={Tshortlisted}

    // const Tshortlisted =()=>setShortlisted(true)          {shortlisted  && <Shortlisted Fshortlisted={Fshortlisted}/> }
    // const Fshortlisted =()=>setShortlisted(false)

    // {applied && <Applied Fapplied={Fapplied}/> }         onClick={Tapplied}




    return (
        <>
            <div className="mainhead">

                <div className="main1">


                    <div className="short"   >

                        <Link to="/" >

                            <span className="material-symbols-outlined">
                                person_search
                            </span>  <button type='submit' className='btn1'>Shortlisted</button>
                        </Link>



                    </div>


                    <div className="notshort">
                        <Link to="/notshortlisted" >

                            <span className="material-symbols-outlined">
                                work_alert
                            </span>  <button type='submit' className='btn2'>Not Shortlisted</button>
                            </Link >

                    </div>

                    <div className="applied">
                        
                    <Link   to="/applied" >
                        
                        <span class="material-symbols-outlined">
                        multicooker
                    </span>  <button type='submit' className='btn3'  >Applied Jobs</button>

                    </Link>




                    </div>
                </div>
            </div>


        </>
    )
}

export default Main