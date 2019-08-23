import React, { Component } from 'react';

class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'About i'
        };
        WPRC.setComponent( 'Employees', this );
    }

    render() {
        return (
            <div className="wrap erp-hr-employees" id="wp-erp">
                <h2>
                    Employee <a href="#" id="erp-employee-new" className="add-new-h2">Add New</a>
                </h2>
                <div className="list-table-wrap erp-hr-employees-wrap">
                    <div className="list-table-inner erp-hr-employees-wrap-inner">
                        <form method="get">
                            <p className="search-box">
                                <label className="screen-reader-text">Search Employee:</label>
                                <input type="search" id="erp-employee-search-search-input" name="s" />
                                <input type="submit" name="employee_search" id="search-submit" className="button" value="Search Employee" />
                            </p>
                            <ul className="subsubsub">
                                <li className="all"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;status=all"
                                    className="status-all">All <span className="count">(35)</span></a> |
                                </li>
                                <li className="active"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;status=active"
                                    className="current">Active <span className="count">(35)</span></a> |
                                </li>
                                <li className="terminated"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;status=terminated"
                                    className="status-terminated">Terminated <span className="count">(0)</span></a> |
                                </li>
                                <li className="deceased"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;status=deceased"
                                    className="status-deceased">Deceased <span className="count">(0)</span></a> |
                                </li>
                                <li className="resigned"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;status=resigned"
                                    className="status-resigned">Resigned <span className="count">(0)</span></a> |
                                </li>
                                <li className="trash"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;status=trash"
                                    className="status-trash">Trash <span className="count">(0)</span></a></li>
                            </ul>
                            <div className="tablenav top">
                                <div className="alignleft actions bulkactions">
                                    <label htmlFor="bulk-action-selector-top" className="screen-reader-text">Select bulk
                                        action</label>
                                    <select name="action" id="bulk-action-selector-top">
                                        <option value="-1">Bulk Actions</option>
                                        <option value="delete">Move to Trash</option>
                                    </select>
                                    <input type="submit" id="doaction" className="button action" value="Apply" />
                                </div>
                                <div className="alignleft actions">
                                    <label className="screen-reader-text" htmlFor="new_role">Filter by
                                        Designation</label>
                                    <select name="filter_designation" id="filter_designation">
                                        <option value="-1">- Select Designation -</option>
                                        <option value="1">Admin</option>
                                        <option value="3">Android Developer</option>
                                        <option value="6">Frontend Developer</option>
                                        <option value="2">HR Manager</option>
                                        <option value="4">iOS Developer</option>
                                        <option value="10">Marketing Executive</option>
                                        <option value="9">Marketing Manager</option>
                                        <option value="5">Platform Engineer</option>
                                        <option value="7">Print Designer</option>
                                        <option value="12">Sales Executive</option>
                                        <option value="11">Sales Manager</option>
                                        <option value="13">Support Ninja</option>
                                        <option value="8">UI Designer</option>
                                    </select>
                                    <label className="screen-reader-text" htmlFor="new_role">Filter by
                                        Designation</label>
                                    <select name="filter_department" id="filter_department">
                                        <option value="-1">- Select Department -</option>
                                        <option value="1">Administration</option>
                                        <option value="2">Engineering</option>
                                        <option value="3">Design</option>
                                        <option value="4">Marketing</option>
                                        <option value="5">Sales</option>
                                        <option value="6">Support</option>
                                    </select>
                                    <label className="screen-reader-text" htmlFor="new_role">Filter by Employment
                                        Type</label>
                                    <select name="filter_employment_type" id="filter_employment_type">
                                        <option value="-1">- Select Employment Type -</option>
                                        <option value="permanent">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="contract">On Contract</option>
                                        <option value="temporary">Temporary</option>
                                        <option value="trainee">Trainee</option>
                                    </select>
                                    <input type="submit" name="filter_employee" id="filter_employee" className="button"
                                           value="Filter"/>
                                </div>
                                <div className="tablenav-pages"><span className="displaying-num">35 items</span>
                                    <span className="pagination-links">
                                        <span className="tablenav-pages-navspan button disabled" aria-hidden="true">«</span>
                                        <span className="tablenav-pages-navspan button disabled" aria-hidden="true">‹</span>
                                        <span className="paging-input">
                                            <label htmlFor="current-page-selector" className="screen-reader-text">Current Page</label>
                                            <input className="current-page" id="current-page-selector" type="text" name="paged" size="1"
                                                aria-describedby="table-paging"/>
                                            <span className="tablenav-paging-text"> of
                                                <span className="total-pages">2</span>
                                            </span>
                                        </span>
                                        <a className="next-page button" href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc&amp;paged=2">
                                            <span className="screen-reader-text">Next page</span>
                                            <span aria-hidden="true">›</span>
                                        </a>
                                        <span className="tablenav-pages-navspan button disabled" aria-hidden="true">»</span>
                                    </span>
                                </div>
                            </div>
                            <table className="wp-list-table widefat fixed striped employees">
                                <thead>
                                <tr>
                                    <td id='cb' className='manage-column column-cb check-column'><label
                                        className="screen-reader-text" htmlFor="cb-select-all-1">Select
                                        All</label><input id="cb-select-all-1" type="checkbox"/></td>
                                    <th scope="col" id='name'
                                        className='manage-column column-name column-primary sorted asc'><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&#038;section=employee&#038;orderby=employee_name&#038;order=desc"><span>Employee Name</span><span
                                        className="sorting-indicator"></span></a></th>
                                    <th scope="col" id='designation'
                                        className='manage-column column-designation'>Designation
                                    </th>
                                    <th scope="col" id='department'
                                        className='manage-column column-department'>Department
                                    </th>
                                    <th scope="col" id='type' className='manage-column column-type'>Employment Type</th>
                                    <th scope="col" id='date_of_hire'
                                        className='manage-column column-date_of_hire sortable desc'><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&#038;section=employee&#038;orderby=hiring_date&#038;order=asc"><span>Joined</span><span
                                        className="sorting-indicator"></span></a></th>
                                    <th scope="col" id='status' className='manage-column column-status'>Status</th>
                                </tr>
                                </thead>
                                <tbody id="the-list">
                                    <tr>
                                    <th scope="row" className="check-column">
                                        <input type="checkbox" name="employee_id[]"/>
                                    </th>
                                    <td className='name column-name has-row-actions column-primary'>
                                        <img alt=''
                                             src='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=32&#038;d=mm&#038;r=g'
                                             srcSet='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=64&#038;d=mm&#038;r=g 2x'
                                             className='avatar avatar-32 photo' height='32' width='32'/> <a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&section=employee&action=view&id=79"><strong>Adriel
                                        Doyle</strong></a>
                                        <div className="row-actions"><span className='edit'><a href="" data-id="79"
                                                                                               title="Edit this item">Edit</a> | </span><span
                                            className='delete'><a href="" className="submitdelete" >Delete</a> | </span>
                                        </div>
                                        <button type="button" className="toggle-row"><span
                                            className="screen-reader-text">Show more details</span></button>
                                        <button type="button" className="toggle-row"><span
                                            className="screen-reader-text">Show more details</span></button>
                                    </td>
                                    <td className='designation column-designation' data-colname="Designation">Sales
                                        Executive
                                    </td>
                                    <td className='department column-department' data-colname="Department">Sales</td>
                                    <td className='type column-type' data-colname="Employment Type">Full Time</td>
                                    <td className='date_of_hire column-date_of_hire' data-colname="Joined">06-06-2011
                                    </td>
                                    <td className='status column-status' data-colname="Status"><span
                                        className="erp-tips dashicons dashicons-yes" title="Active"></span></td>
                                </tr>
                                    <tr>
                                        <th scope="row" className="check-column">
                                            <input type="checkbox" name="employee_id[]"/>
                                        </th>
                                        <td className='name column-name has-row-actions column-primary'>
                                            <img alt=''
                                                 src='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=32&#038;d=mm&#038;r=g'
                                                 srcSet='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=64&#038;d=mm&#038;r=g 2x'
                                                 className='avatar avatar-32 photo' height='32' width='32'/> <a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&section=employee&action=view&id=79"><strong>Adriel
                                            Doyle</strong></a>
                                            <div className="row-actions"><span className='edit'><a href="" data-id="79"
                                                                                                   title="Edit this item">Edit</a> | </span><span
                                                className='delete'><a href="" className="submitdelete" >Delete</a> | </span>
                                            </div>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                        </td>
                                        <td className='designation column-designation' data-colname="Designation">Sales
                                            Executive
                                        </td>
                                        <td className='department column-department' data-colname="Department">Sales</td>
                                        <td className='type column-type' data-colname="Employment Type">Full Time</td>
                                        <td className='date_of_hire column-date_of_hire' data-colname="Joined">06-06-2011
                                        </td>
                                        <td className='status column-status' data-colname="Status"><span
                                            className="erp-tips dashicons dashicons-yes" title="Active"></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="check-column">
                                            <input type="checkbox" name="employee_id[]"/>
                                        </th>
                                        <td className='name column-name has-row-actions column-primary'>
                                            <img alt=''
                                                 src='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=32&#038;d=mm&#038;r=g'
                                                 srcSet='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=64&#038;d=mm&#038;r=g 2x'
                                                 className='avatar avatar-32 photo' height='32' width='32'/> <a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&section=employee&action=view&id=79"><strong>Adriel
                                            Doyle</strong></a>
                                            <div className="row-actions"><span className='edit'><a href="" data-id="79"
                                                                                                   title="Edit this item">Edit</a> | </span><span
                                                className='delete'><a href="" className="submitdelete" >Delete</a> | </span>
                                            </div>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                        </td>
                                        <td className='designation column-designation' data-colname="Designation">Sales
                                            Executive
                                        </td>
                                        <td className='department column-department' data-colname="Department">Sales</td>
                                        <td className='type column-type' data-colname="Employment Type">Full Time</td>
                                        <td className='date_of_hire column-date_of_hire' data-colname="Joined">06-06-2011
                                        </td>
                                        <td className='status column-status' data-colname="Status"><span
                                            className="erp-tips dashicons dashicons-yes" title="Active"></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="check-column">
                                            <input type="checkbox" name="employee_id[]"/>
                                        </th>
                                        <td className='name column-name has-row-actions column-primary'>
                                            <img alt=''
                                                 src='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=32&#038;d=mm&#038;r=g'
                                                 srcSet='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=64&#038;d=mm&#038;r=g 2x'
                                                 className='avatar avatar-32 photo' height='32' width='32'/> <a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&section=employee&action=view&id=79"><strong>Adriel
                                            Doyle</strong></a>
                                            <div className="row-actions"><span className='edit'><a href="" data-id="79"
                                                                                                   title="Edit this item">Edit</a> | </span><span
                                                className='delete'><a href="" className="submitdelete" >Delete</a> | </span>
                                            </div>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                        </td>
                                        <td className='designation column-designation' data-colname="Designation">Sales
                                            Executive
                                        </td>
                                        <td className='department column-department' data-colname="Department">Sales</td>
                                        <td className='type column-type' data-colname="Employment Type">Full Time</td>
                                        <td className='date_of_hire column-date_of_hire' data-colname="Joined">06-06-2011
                                        </td>
                                        <td className='status column-status' data-colname="Status"><span
                                            className="erp-tips dashicons dashicons-yes" title="Active"></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="check-column">
                                            <input type="checkbox" name="employee_id[]"/>
                                        </th>
                                        <td className='name column-name has-row-actions column-primary'>
                                            <img alt=''
                                                 src='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=32&#038;d=mm&#038;r=g'
                                                 srcSet='http://1.gravatar.com/avatar/7ee08d6565a17ed8ba78129f7ef3addf?s=64&#038;d=mm&#038;r=g 2x'
                                                 className='avatar avatar-32 photo' height='32' width='32'/> <a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&section=employee&action=view&id=79"><strong>Adriel
                                            Doyle</strong></a>
                                            <div className="row-actions"><span className='edit'><a href="" data-id="79"
                                                                                                   title="Edit this item">Edit</a> | </span><span
                                                className='delete'><a href="" className="submitdelete" >Delete</a> | </span>
                                            </div>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                            <button type="button" className="toggle-row"><span
                                                className="screen-reader-text">Show more details</span></button>
                                        </td>
                                        <td className='designation column-designation' data-colname="Designation">Sales
                                            Executive
                                        </td>
                                        <td className='department column-department' data-colname="Department">Sales</td>
                                        <td className='type column-type' data-colname="Employment Type">Full Time</td>
                                        <td className='date_of_hire column-date_of_hire' data-colname="Joined">06-06-2011
                                        </td>
                                        <td className='status column-status' data-colname="Status"><span
                                            className="erp-tips dashicons dashicons-yes" title="Active"></span></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td id='cb' className='manage-column column-cb check-column'><label
                                        className="screen-reader-text" htmlFor="cb-select-all-1">Select
                                        All</label><input id="cb-select-all-1" type="checkbox"/></td>
                                    <th scope="col" id='name'
                                        className='manage-column column-name column-primary sorted asc'><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&#038;section=employee&#038;orderby=employee_name&#038;order=desc"><span>Employee Name</span><span
                                        className="sorting-indicator"></span></a></th>
                                    <th scope="col" id='designation'
                                        className='manage-column column-designation'>Designation
                                    </th>
                                    <th scope="col" id='department'
                                        className='manage-column column-department'>Department
                                    </th>
                                    <th scope="col" id='type' className='manage-column column-type'>Employment Type</th>
                                    <th scope="col" id='date_of_hire'
                                        className='manage-column column-date_of_hire sortable desc'><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&#038;section=employee&#038;orderby=hiring_date&#038;order=asc"><span>Joined</span><span
                                        className="sorting-indicator"></span></a></th>
                                    <th scope="col" id='status' className='manage-column column-status'>Status</th>
                                </tr>
                                </tfoot>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Employees;