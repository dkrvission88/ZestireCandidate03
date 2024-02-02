import React from 'react'
import "./shortlisted.css"
// import "./applied.css"

function Shortlisted() {
    return (
        <>
        {/* <div className="wrapshort" onClick={Fshortlisted} ></div>     {Fshortlisted} */}

            <div className="mainsh">


                <div className="sortsh">


                    <div className="ram">Sort</div>

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


                <div className="undersh">

                    <span class="material-symbols-outlined">
                        mood
                    </span>


                    <div className="msgsh">

                        <p>Dear [Applicabt's Name],</p>
                        <p>Congratulations! we are placed to inform you that your application has been shortlisted. Your qualifications and experience align well withn our requirements.Wait till we Contact you for further proceedings.</p>
                    </div>
                </div>








            </div>


            {/* Card start */}


            <div className="mainap">


                <div className="shortcenter">



                <div className="cardap">
                    <div className="iconap"><span className="material-symbols-outlined">
                        multicooker
                    </span>
                        <div className="underap">  <span className="material-symbols-outlined">
                            supervisor_account
                        </span>  221 Applied</div>
                    </div>

                    <p className='fullap'>Full time</p>
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

                    <p className='fullap'>Full time</p>
                    <p className='chiefap'>Chief Information Officer</p>
                    <p>$3500/Monthly</p>
                    <div className="viewap"> <button type='submit' className='btnview'>View Details</button> </div>

                </div>





                <div className="cardap">
                    <div className="iconap"><span className="material-symbols-outlined">
                        multicooker
                    </span>
                        <div className="underap">  <span className="material-symbols-outlined">
                            supervisor_account
                        </span>  221 Applied</div>
                    </div>

                    <p className='fullap'>Full time</p>
                    <p className='chiefap'>Chief Information Officer</p>
                    <p>$3500/Monthly</p>
                    <div className="viewap"> <button type='submit' className='btnview'>View Details</button> </div>

                </div>


                </div>














            </div>








        </>
    )
}

export default Shortlisted