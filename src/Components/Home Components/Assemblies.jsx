import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './assemblies.css'
import { useAssemblyContext } from '../Context/selectedAssembliesContext';

const Assemblies = () => {

    const [assemblyLists, setAssemblyists] = useState([
        {
            num: 1,
            name: '2x4" Drop-In T-Bar (1/2" Flex)',
            type: 'A'
        },
        {
            num: 2,
            name: '1x4" Drop-In T-Bar (1/2" Flex)',
            type: 'A'
        },
        {
            num: 3,
            name: '2x4" Drop-In T-Bar (14/2" BX)',
            type: 'A'
        },
        {
            num: 4,
            name: '1x4" Drop-In T-Bar (14/2" BX)',
            type: 'A'
        },
        {
            num: 5,
            name: '2x2" Drop-In T-Bar (14/2" BX)',
            type: 'C'
        },
        {
            num: 6,
            name: '2x4" Drop-In T-Bar (12/2" BX)',
            type: 'C'
        },
        {
            num: 7,
            name: '1x4" Drop-In T-Bar (12/2" BX)',
            type: 'C'
        },
        {
            num: 8,
            name: '2x4" Drop-In T-Bar (12/2" BX)',
            type: 'C'
        },
        {
            num: 9,
            name: '1x4" Drop-In T-Bar (14/2" Teck)',
            type: 'C'
        },
        {
            num: 10,
            name: '1x4" Drop-In T-Bar (12/2" Teck)',
            type: 'C'
        }
    ])

    const [searchKey, setSearchKey] = useState('');

    const [selectedAssembly, setSelectedAssembly] = useState(null);

    const [count, setCount] = useState('');

    const [length, setLength] = useState('');

    const filteredCategories = assemblyLists.filter((item) =>
        item.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value);
    };

    const handleItemClick = (assembly) => {
        setSelectedAssembly(assembly);
    };

    const handleCountChange = (e) => {
        setCount(e.target.value);
    };

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    };

    const handleModalDismiss = () => {
        setSelectedAssembly(null);
        setCount('');
        setLength('');
    }

    const { addNewAssembly } = useAssemblyContext()

    const handleAddDataToContext = () => {
        addNewAssembly({ ...selectedAssembly, count, length });
        setSelectedAssembly(null);
        setCount('');
        setLength('');
    }

    useEffect(() => {
        const modalElement = document.getElementById('exampleModal');

        const handleModalHide = () => {
            setCount('');
            setLength('');
        };

        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', handleModalHide);

            return () => {
                modalElement.removeEventListener('hidden.bs.modal', handleModalHide);
            };
        }
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between left-headings px-5 pt-5 pb-4'>
                <div className=''>
                    <Link to={'/subcategories'} className='text-black'><i class="fa-solid fa-left-long me-3"></i></Link>
                    <strong className='category_Headings'>Assemblies</strong>
                </div>
                <div>
                    <input
                        className='category_search_input'
                        placeholder='Search Assembly'
                        type="search"
                        value={searchKey}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className='p-3 table-cont'>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='cat-table-head'>Sl No</th>
                            <th scope="col" className='cat-table-head'>Name</th>
                            <th scope="col" className='cat-table-head'>Type</th>
                            <th scope="col" className='cat-table-head'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.map((item) => (
                            <tr key={item.num} className='table-row' onClick={() => handleItemClick(item)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <th scope="row">{item.num}</th>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td><i class="fa-solid fa-circle-plus text-success"></i></td>
                            </tr>
                        ))}
                        {filteredCategories.length === 0 && (
                            <tr>
                                <td colSpan="3" className="text-center">No matching items found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content p-5">
                        <div class="">
                            <h3 class="text-center" id="exampleModalLabel">Add Asssembly to the Project</h3>
                        </div>
                        <div class="modal-body mx-auto my-4">

                            <div className='d-flex gap-4 modal_assembly_name'>
                                <p className='light-titles'>Assembly Name</p>
                                <strong>{selectedAssembly?.name}</strong>
                            </div>

                            <div className='modal_counts'>
                                <div className='d-flex gap-3'>
                                    <p className='light-titles my-auto'>Count</p>
                                    <input type="text" value={count} onChange={handleCountChange} />
                                </div>

                                <div className='d-flex gap-3'>
                                    <p className='light-titles my-auto'>Length in M</p>
                                    <input type="text" value={length} onChange={handleLengthChange} />
                                </div>
                            </div>

                            <div className="table-responsive">
                                {/* <p className='light-titles'>Assembly Description</p> */}
                                <table class="table assembly-desc">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='cat-table-head'>Sl No</th>
                                            <th scope="col" className='cat-table-head'>Description</th>
                                            <th scope="col" className='cat-table-head'>Quantity</th>
                                            <th scope="col" className='cat-table-head'>Fct 1</th>
                                            <th scope="col" className='cat-table-head'>Fct 2</th>
                                            <th scope="col" className='cat-table-head'>Catalog Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>4x1 1/2" SQ Box 1/2" KO</td>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>32321AA15</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>4" SQ Blank Cover</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>455641JJH</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="d-flex gap-4 mx-auto flex-wrap">
                            <button type="button" class="btn mx-auto btn-outline-danger modal-buttons" data-bs-dismiss="modal">Cancel</button>

                            {
                                count && length ?

                                    <button type="button" class="btn mx-auto btn-primary modal-buttons">Add</button>
                                    :
                                    <button type="button" class="btn mx-auto btn-secondary modal-buttons" onClick={handleAddDataToContext} data-bs-dismiss="modal">Add</button>

                            }

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Assemblies