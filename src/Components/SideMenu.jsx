import React from 'react'
import './sidemenu.css'

const SideMenu = () => {
    return (
        <div>
            <div className='menu-cont'>
                <div className="menu-items bg-primary text-white p-2"><i class="fa-solid fa-rotate-left px-3"></i> Back To Jobs</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> Notes</div>
                <div className="menu-items division btn menu-item-active"><i class="fa-regular fa-rectangle-list"></i> Take Off</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> Extention</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> DiLb</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> IncLb</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> LbFac</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> LbEsc</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> IndLb</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> Sbcon</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> Gen Exp</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> Qt Mat</div>
                <div className="menu-items division btn"><i class="fa-regular fa-rectangle-list"></i> Brk Dwn</div>
            </div>
        </div>
    )
}

export default SideMenu