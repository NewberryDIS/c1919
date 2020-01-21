import React from 'react'
import styled from '@emotion/styled'
import a11ycc from '../images/footerimgs/a11ycc.png'
import allstate from '../images/footerimgs/allstate.jpg'
import bbw from '../images/footerimgs/bbw.png'
import bchf from '../images/footerimgs/bchf.png'
import bmrc from '../images/footerimgs/bmrc.png'
import cac from '../images/footerimgs/cac.png'
import cb from '../images/footerimgs/cb.png'
import cc from '../images/footerimgs/cc.png'
import chm from '../images/footerimgs/chm.png'
import cpl from '../images/footerimgs/cpl.png'
import cul from '../images/footerimgs/cul.jpg'
import dusable from '../images/footerimgs/dusable.png'
import kf from '../images/footerimgs/kf.png'
import mpp from '../images/footerimgs/mpp.png'
import neh from '../images/footerimgs/neh.jpg'
import newberry from '../images/footerimgs/newberry.png'
import person from '../images/footerimgs/person.png'
import yca from '../images/footerimgs/yca.png'

const Footercss = styled.div`
    background: white;
    text-align: center;
    .neh {
        max-height: 200px;
        max-width: 100%;
    }
    .newberry {
        max-height: 200px;
        max-width: 350px;
    }
    .allstate {
        max-height: 200px;
        max-width: 350px;
    }
    .cc img {
        max-width: 50px;
        margin: 10px;
    }
    .footertext {
        text-align: center;
        max-width: 60%;
        margin: auto;
    }
    .bold {
        font-weight: 900;
    }
    .sponsors {
        width: 75%;
        margin: auto;
        img {
            margin: 15px;
            max-height: 75px;
        }
    }
`
const Footer = () => (
    <Footercss>
        <div className="sectionwrapper">
            <div>
                <a href="https://www.neh.gov/" target="_blank" rel="noopener noreferrer" >
                    <img alt="National Endowment for the Arts logo" src={neh} className="neh" />
                </a>
            </div>
            <div className="footertext" >
                <p>Chicago 1919: Confronting the Race Riots has been made possible in part by a major grant from the National Endowment for the Humanities: Exploring the human endeavor.</p>
                <p>Any views, findings, conclusions, or recommendations expressed in these programs do not necessarily represent those of the National Endowment for the Humanities.</p>
            </div>
            <div >
                <a href="https://www.newberry.org" target="_blank" rel="noopener noreferrer" >
                    <img alt="Newbery Library logo" src={newberry} className="newberry"/>
                </a>
            </div>
            <div >
                <p className="bold">Youth Engagement Sponsor:</p>
                <a href="https://ourstory.allstate.com/withinsociety/engagingyouth/" target="_blank" rel="noopener noreferrer" >
                    <img alt="Allstate logo" src={allstate} className="allstate" />
                </a>
            </div>
            <div >
                <h3>Edith Rasmussen Ahern and Patrick Ahern</h3>
            </div>
        </div>
        <div className="sectionwrapper">
            <hr />
            <p>Chicago 1919 is being coordinated by the Newberry Library in partnership with:</p>
            <div className="sponsors">
                
                    <a href="https://www.blackchicagohistoryforum.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="black chicago history forum logo" src={bchf} title="Black Chicago History Forum" />
                    </a>
                
                
                    <a href="http://bmrc.lib.uchicago.edu/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Black Metropolis Research Consortium logo" src={bmrc} title="Black Metropolis Research Consortium" />
                    </a>
                
                
                    <a href="https://experimentalstation.org/blackstone/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Blackstone Bicycle Works logo"  src={bbw} title="Blackstone Bicycle Works" />
                    </a>
                
                
                    <a href="http://chicagoarchitecturalclub.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Chicago Architectural Club logo"  src={cac} title="Chicago Architectural Club" />
                    </a>
                
                
                    <a href="https://chicagocollections.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Chicago Collections Consortium logo"  src={cc} title="Chicago Collections Consortium" />
                    </a>
                
                
                    <a href="https://www.chicagohistory.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Chicago History Museum logo"  src={chm} title="Chicago History Museum" />
                    </a>
                
                
                    <a href="https://www.chipublib.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Chicago Public Library logo"  src={cpl} title="Chicago Public Library" />
                    </a>
                
                
                    <a href="https://www.thechicagourbanleague.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Chicago Urban League logo"  src={cul} title="Chicago Urban League" />
                    </a>
                
                
                    <a href="https://www.citybureau.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="City Bureau logo"  src={cb} title="City Bureau" />
                    </a>
                
                
                    <a href="https://www.dusablemuseum.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="" src={dusable} />
                    </a>
                
                
                    <a href="https://kartemquin.com/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Kartemquin Films logo"  src={kf} title="Kartemquin Films" />
                    </a>
                
                
                    <a href="http://ba1245.wixsite.com/middlepassage" target="_blank" rel="noopener noreferrer" >
                        <img alt="Middle Passage Productions logo"  src={mpp} title="Middle Passage Productions" />
                    </a>
                
                
                    <a href="https://youngchicagoauthors.org/" target="_blank" rel="noopener noreferrer" >
                        <img alt="Young Chicago Authors logo"  src={yca} title="Young Chicago Authors" />
                    </a>
                
            </div>
            <p>
                Questions? Comments? Interested in volunteering? <a href="mailto:publicprograms@newberry.org" target="_blank" rel="noopener noreferrer" >Contact us</a>
            </p>
            <hr />
            <p >
                Except where otherwise noted, content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" >Creative Commons Attribution 4.0 International license.</a>
            </p>
            <p>
                <a href="https://creativecommons.org/licenses/by/4.0/" className="cc">
                    <img alt="" src={person}  />
                    <img alt="" src={a11ycc}  />
                </a>
            </p>
        </div>
    </Footercss>
)

export default Footer
