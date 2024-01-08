import React, { useState } from 'react'
import './categories.css'
import { Link, useNavigate } from 'react-router-dom'

const Categories = () => {

    const [categoryLists, setCategoryLists] = useState([
        {
            num: 1,
            name: 'Fixtures',
            type: 'C'
        },
        {
            num: 2,
            name: 'switches',
            type: 'C'
        },
        {
            num: 3,
            name: 'Receptacles',
            type: 'C'
        },
        {
            num: 4,
            name: 'Computer & Phone',
            type: 'C'
        },
        {
            num: 5,
            name: 'Fire Alarm',
            type: 'C'
        },
        {
            num: 6,
            name: 'EMT (Branch)',
            type: 'C'
        },
        {
            num: 7,
            name: 'EMT (Feeder)',
            type: 'C'
        },
        {
            num: 8,
            name: 'GRC (Feeder)',
            type: 'C'
        },
        {
            num: 9,
            name: 'GRC (Branch)',
            type: 'C'
        },
        {
            num: 10,
            name: 'Cable (Branch)',
            type: 'C'
        },
        {
            num: 11,
            name: 'Cable (Feeder)',
            type: 'C'
        },
        {
            num: 12,
            name: 'Services',
            type: 'C'
        },
        {
            num: 13,
            name: 'Panels',
            type: 'C'
        },
        {
            num: 14,
            name: 'Manual Disconnects',
            type: 'C'
        }
    ])

    const [searchKey, setSearchKey] = useState('');

    const navigate = useNavigate();

    const filteredCategories = categoryLists.filter((item) =>
        item.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value);
    };

    const handleNav = () => {
        navigate('/subcategories');
    };

    return (
        <div>
            <div className='d-flex justify-content-between px-5 left-headings pt-5 pb-4'>
                <div className=''>
                    <i class="fa-solid fa-left-long me-3"></i>
                    <strong className='category_Headings'>Categories</strong>
                </div>
                <div>
                    <input
                        className='category_search_input'
                        placeholder='Search Categories'
                        type="search"
                        value={searchKey}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className='p-2 table-cont'>

                <table className="table">
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
                            <tr key={item.num} className='table-row' onClick={handleNav}>
                                <th scope="row">{item.num}</th>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td><i className="fa-solid fa-right-long right-arrow-2"></i></td>
                            </tr>
                        ))}
                        {filteredCategories.length === 0 && (
                            <tr>
                                <td colSpan="3" className="text-center">No matching categories found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories