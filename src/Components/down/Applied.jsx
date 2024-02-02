import React from 'react'
import "./applied.css"

function Applied() {
    return (
        <>
            {/* <div className="wrapper1" onClick={Fapplied} ></div>      { Fapplied }*/}



            


                <div className="baraap">

                    <div className="shortap">


                        <div className="radhe"> Sort</div>


                        <select id="cars">
                            <option value="volvo">Today</option>
                            <option value="saab">Sunday</option>
                            <option value="opel">Monday</option>
                            <option value="audi">Tuesday</option>
                            <option value="volvo">Wednesday</option>
                            <option value="saab">Thursday</option>
                            <option value="opel">Friday</option>
                            <option value="audi">Saturday</option>
                        </select>


                    </div>

                    <div className="mainap00">



                        <div className="cardap">
                            <div className="iconap"><span className="material-symbols-outlined">
                                multicooker
                            </span>
                                <div className="underap">  <span className="material-symbols-outlined">
                                    supervisor_account
                                </span>  221 Applied</div>
                            </div>

                            <p className='fullap0'>Full time</p>
                            <p className='chiefap'>Chief Information Officer</p>
                            <p>$3500/Monthly</p>
                            <div className="viewap"> <button type='submit' className='btnview'>View Details</button> </div>

                        </div>

                        {/* second card */}


                        <div className="cardap">
                            <div className="iconap"><span className="material-symbols-outlined">
                                multicooker
                            </span>
                                <div className="underap">  <span className="material-symbols-outlined">
                                    supervisor_account
                                </span>  221 Applied</div>
                            </div>

                            <p className='fullap0'>Full time</p>
                            <p className='chiefap'>Chief Information Officer</p>
                            <p>$3500/Monthly</p>
                            <div className="viewap"> <button type='submit' className='btnview'>View Details</button> </div>

                        </div>














                    </div>


                </div>




            






        </>
    )
}

export default Applied