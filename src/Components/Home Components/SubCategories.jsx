import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SubCategories = () => {

    const [SubCategoryLists, setSubCategoryLists] = useState([
        {
            num: 1,
            name: 'Recessed Fluroescent',
            type: 'C'
        },
        {
            num: 2,
            name: 'Surface Fluorescent',
            type: 'C'
        },
        {
            num: 3,
            name: 'Recessed Incandescent',
            type: 'C'
        },
        {
            num: 4,
            name: 'Surface Incandascent',
            type: 'C'
        },
        {
            num: 5,
            name: 'Recessed HO',
            type: 'C'
        },
        {
            num: 6,
            name: 'Surface HO',
            type: 'C'
        },
        {
            num: 7,
            name: 'Exit & Emergency',
            type: 'C'
        },
        {
            num: 8,
            name: 'Fans & Miscellaneous',
            type: 'C'
        },
        {
            num: 9,
            name: 'Spec Fixtures ( Type A.... )',
            type: 'C'
        },
        {
            num: 10,
            name: 'Fixture Connections',
            type: 'C'
        }
    ])

    const [searchKey, setSearchKey] = useState('');

    const navigate = useNavigate();

    const filteredCategories = SubCategoryLists.filter((item) =>
        item.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value);
    };

    const handleNav = () => {
        navigate('/assemblies');
    };


    return (
        <div>
            <div className='d-flex justify-content-between left-headings px-5 pt-5 pb-4'>
                <div className=''>
                    <Link to={'/'} className='text-black'><i class="fa-solid fa-left-long me-3"></i></Link>
                    <strong className='category_Headings'>Sub Categories</strong>
                </div>
                <div>
                    <input
                        className='category_search_input'
                        placeholder='Search Sub Categories'
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

export default SubCategories