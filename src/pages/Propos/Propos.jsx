import React from 'react';

import './propos.css'

import aboutData from "../../api/aboutData"
import DropDown from "../../components/dropDown/DropDown"
import BannerPropos from "../../components/proposBanner/ProposBanner"

const Propos = () => {

    return (

        <main className='ContainerPropos'>

            <div className='homeBanner'>
                <BannerPropos />
            </div>

            <div className='dropDownAbout'>

                {aboutData.map((data) => {
                    return (
                        <DropDown title={data.title} content={data.text} key={data}
                        />
                    )
                })}

            </div>

        </main>
    )

}

export default Propos;