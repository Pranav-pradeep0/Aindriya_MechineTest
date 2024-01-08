import React from 'react'
import './jobdetails.css'
import ProjectsList from './ProjectsList'

const JobDetails = () => {
    return (
        <div>
            <div className='d-flex job-quote-cont justify-content-between'>
                <div>
                    <p className='job_title'>Job</p>
                </div>
                <div className='d-flex gap-3'>
                    <p className='my-auto quote_title'>Quote Status</p>
                    <div class="dropdown my-auto">
                        <button class="btn btn-success status-toggle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Accepted
                        </button>
                        <ul class="dropdown-menu p-0 m-0 border-0">
                            <button className='btn btn-danger status-toggle'>Not Accepted</button>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='job-details-cont mt-4 py-1'>
                <div className='d-flex gap-5 p-4'>
                    <div className='d-grid gap-1'>
                        <p className='cat-table-head'>Job Name</p>
                        <p className='cat-table-head'>Job Number</p>
                        <p className='cat-table-head'>Unit</p>
                        <p className='cat-table-head'>Difficulty Level</p>
                    </div>
                    <div className='d-grid'>
                        <p><strong>Test Project 1</strong></p>
                        <p><strong>#ABV3265413</strong></p>
                        <div class="btn-container">
                            <label class="switch btn-color-mode-switch">
                                <input value="1" id="color_mode" name="color_mode" type="checkbox" />
                                <label class="btn-color-mode-switch-inner" for="color_mode"></label>
                            </label>
                        </div>
                        <div class="dropdown ">
                            <button class="btn btn-white diff-drop-btn btn-sm my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                High
                                <i class="fa-solid fa-caret-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Medium</a></li>
                                <li><a class="dropdown-item" href="#">Low</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='dummy-buttons-cont px-4 '>
                    <button className='btn job-detail-buttons'>Job Details</button>
                    <button className='btn job-detail-buttons'>Button 2</button>
                    <button className='dummy-shadow-btn btn'>Button 3</button>
                </div>
            </div>

            <ProjectsList></ProjectsList>
        </div>
    )
}

export default JobDetails