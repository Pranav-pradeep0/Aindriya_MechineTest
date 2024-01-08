import React, { useState } from 'react'
import './projects.css'
import { useAssemblyContext } from '../Context/selectedAssembliesContext'

const ProjectsList = () => {

    const { selectedAssemblyData, removeAssembly } = useAssemblyContext()

    const handleRemoveAssemblyItem = (item) => {
        removeAssembly(item)
    }

    console.log(selectedAssemblyData);

    const [projectSearchData, setProjectSearchData] = useState('')

    const handleProjectSearch = (event) => {
        const { value } = event.target
        setProjectSearchData(value)
    }

    const filteredProjects = selectedAssemblyData.filter((item) =>
    item.name.toLowerCase().includes(projectSearchData.toLowerCase())
);

    return (
        <div>
            <div className='list-tools'>
                <div>
                    <input type="text" className='category_search_input project-serch' placeholder='Search Projects' onChange={handleProjectSearch}/>
                </div>

                <div className='d-flex gap-5'>
                    <div className='d-flex gap-4'>
                        <p className='my-auto quote_title'>Sort by</p>
                        <div class="dropdown">
                            <button class="btn text-black dropdown-toggle bg-white dummy-shadow-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Name
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Date</a></li>
                                <li><a class="dropdown-item" href="#">Created</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='dummy-shadow-btn btn bg-white'>Import<i class="fa-solid fa-arrow-down ms-3"></i></button>
                    </div>
                </div>
            </div>

            <div className='list_table_cont table-responsive'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Sl No</th>
                            <th scope="col">Assembly Name</th>
                            <th scope="col">Length</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredProjects?.map((item, key) =>
                                <tr>
                                    <th scope="row"><i class="fa-solid fa-caret-right"></i></th>
                                    <td>{key+1}</td>
                                    <td>{item.name}</td>
                                    <td className='text-primary'>{item.length}</td>
                                    <td className='text-primary'>{item.count}</td>
                                    <td><button className='btn text-danger' onClick={() => handleRemoveAssemblyItem(key)}><i class="fa-solid fa-trash"></i></button></td>
                                </tr>
                            )}
                    </tbody>

                    {
                        selectedAssemblyData.length <= 0 &&
                        <tbody>
                            <tr>
                                <th scope="row"><i class="fa-solid fa-caret-right"></i></th>
                                <td></td>
                                <td className='quote_title fs-10'>No Data Found, Add new from Assemblies.</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    }
                </table>
            </div>

        </div>
    )
}

export default ProjectsList