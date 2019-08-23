import React, { Component } from 'react';
import { NavLink , Route , Switch } from 'react-router-dom'
import Employees from "./employees";
import Overview from "./overview";

class Hrm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'About i'
        };
        WPRC.setComponent( 'Hrm', this );
    }

    componentDidMount() {
        var navElm = document.querySelectorAll( '.navigation-li' );
        Array.prototype.forEach.call( navElm, function(el, i){
            el.addEventListener( 'click', function ( event ) {
                Array.prototype.forEach.call( navElm, function( el, i ){
                    el.classList.remove( 'active' );
                } );
                event.target.parentNode.classList.add( 'active' );;
            } );
        });

        console.log(WPRC.$);
    }

    render() {
        return (
            <div>
                <div className="erp-nav-container --jsfied">
                    <div className="erp-page-header">
                        <div className="module-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.337 211.005">
                                <defs>

                                </defs>
                                <g id="Group_234" data-name="Group 234" transform="translate(0.097 0.001)">
                                    <path id="Path_275" data-name="Path 275" className="cls-1"
                                          d="M176.2,158.5c10.3-14.6,20.2-28.7,30.3-42.7a5.351,5.351,0,0,1,4.4-1.8c19.3,4.2,34.4,12.5,34.2,38.3-.1,12.1-1.2,24.2-1.9,36.3a3.553,3.553,0,0,1-.2,1c-3.5,13.8-7,17.8-21.2,18.8-23.4,1.6-46.9,2.5-70.3,2.6-13.3.1-26.5-2.1-39.8-3.3-7.3-.6-12-4.5-14-11.5-1.4-4.9-3.3-9.9-3.5-15a290.355,290.355,0,0,1-.5-34.9c.9-14.1,8.6-23.8,22-28.8,2.2-.8,4.4-1.6,6.6-2.3,7.7-2.3,7.5-2.1,11.9,4.5,3.4,5.1,7.7,9.6,11.2,14.6,5.6,7.8,10.9,15.8,17,24.6,1.3-8,3-15.2,3.4-22.5.2-3.3-1.9-6.9-3.6-10.1-1.3-2.6-3.7-4.7-5.3-7.3-1.5-2.3-1.1-4.4,2.1-4.5,6.8-.1,13.7-.2,20.5,0,3.2.1,3.4,2.2,2.1,4.5a20.26,20.26,0,0,1-3.3,4.4c-5.4,5.9-6.8,12.7-4.9,20.4C174.5,148.6,175.2,153.4,176.2,158.5Z"></path>
                                    <path id="Path_276" data-name="Path 276" className="cls-1"
                                          d="M169,103c-28.9,0-51.2-22.3-51.1-51.4,0-29,22.8-51.8,51.6-51.6,28.6.1,51,22.9,50.9,51.8S197.9,103,169,103Z"></path>
                                    <path id="Path_277" data-name="Path 277" className="cls-1"
                                          d="M262.2,179c0-12.1.3-23.5-.1-34.7-.4-13.1-4.7-24.8-15.3-33.5,6.1-3.6,9.9-3.5,15.6-.3,13.6,7.7,27.2,7.4,40.9-.3a13.984,13.984,0,0,1,8.7-1.5,56.625,56.625,0,0,1,13.2,4.3,19.3,19.3,0,0,1,11.4,14.4,86.106,86.106,0,0,1-1.3,39.1c-1.7,6.3-5.3,9.7-12.1,10.6A336.967,336.967,0,0,1,262.2,179Z"></path>
                                    <path id="Path_278" data-name="Path 278" className="cls-1"
                                          d="M91.9,110.3C79.6,120.7,76,134,76,148.7v29.9a16.3,16.3,0,0,1-2.1.5,299.084,299.084,0,0,1-59.8-2.2c-5.4-.8-8.9-3.4-10.5-8.5-4.3-14.2-5-28.6-1.3-42.8,2.4-9.2,10.1-13.1,18.5-15.8,5.7-1.8,10.7-2.1,16.5,1.3,12.2,7.2,25.1,6.6,37.6-.1C82,107.2,83.3,107,91.9,110.3Z"></path>
                                    <path id="Path_279" data-name="Path 279" className="cls-1"
                                          d="M282.7,30.8A37.153,37.153,0,0,1,320,68.3c-.1,21.3-16.5,37.4-37.9,37.4-20.9-.1-37-16.6-36.8-37.8C245.3,46.8,261.6,30.7,282.7,30.8Z"></path>
                                    <path id="Path_280" data-name="Path 280" className="cls-1"
                                          d="M55.9,30.8c21,0,37.2,16.2,37.3,37.3,0,21.2-16.1,37.5-37.1,37.6A37.093,37.093,0,0,1,18.4,68.6,37.02,37.02,0,0,1,55.9,30.8Z"></path>
                                </g>
                            </svg>
                        </div>
                        <h2>HR</h2>
                    </div>
                    <ul className="erp-nav -primary erp-hide-print">
                        <li className="navigation-li"><NavLink className={'navigation-a'} to="/hrm/overview">Overview</NavLink></li>
                        <li className="navigation-li"><NavLink className={'navigation-a'} to="/hrm/employees">Employees</NavLink></li>
                        <li className=""><a href="#">Departments</a>
                        </li>
                        <li className=""><a href="#">Designations</a>
                        </li>
                        <li className=""><a
                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/edit.php?post_type=erp_hr_announcement">Announcement</a>
                        </li>
                        <li className="dropdown-nav"><a
                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report">Reports</a>
                            <ul className="erp-nav-dropdown">
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=age-profile">Age
                                    Profile</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=salary-history">Salary
                                    History</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=gender-profile">Gender
                                    Profile</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=years-of-service">Years
                                    of Service</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=headcount">Head
                                    Count</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=leaves">Leave
                                    Reports</a></li>
                            </ul>
                        </li>
                        <li className="dropdown-nav"><a
                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave">Leave
                            Management</a>
                            <ul className="erp-nav-dropdown">
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=leave-requests">Requests</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=leave-entitlements">Leave
                                    Entitlements</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=holidays">Holidays</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=policies">Policies</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=leave-calendar">Calendar</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown-nav"><a
                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance">Attendance</a>
                            <ul className="erp-nav-dropdown">
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/">Attendance</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/shifts">Shifts</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/exim">Export/Import</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/assign-shift-bulk">Assign
                                    Bulk Shift</a></li>
                            </ul>
                        </li>
                        <li className="dropdown-nav"><a
                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment">Recruitment</a>
                            <ul className="erp-nav-dropdown">
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=job-opening">Job
                                    Opening</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=add-opening">Add
                                    Opening</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/edit.php?post_type=erp_hr_questionnaire">Question
                                    Sets</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=jobseeker_list">Candidates</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=add_candidate">Add
                                    candidate</a></li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=todo-calendar">Calendar</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=reports">Reports</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=jobseeker_list_email"></a>
                                </li>
                            </ul>
                        </li>
                        <li className=""><a
                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=help"><span
                            className="erp-help">Help</span></a></li>
                        <li className="-more --hidden">
                            <button type="button" aria-haspopup="true" aria-expanded="false">More <span
                                className="dashicons dashicons-arrow-down-alt2"></span></button>
                            <ul className="-secondary">
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=dashboard">Overview</a>
                                </li>
                                <li className="active"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=employee&amp;orderby=employee_name&amp;order=asc">Employees</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=department">Departments</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=designation">Designations</a>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/edit.php?post_type=erp_hr_announcement">Announcement</a>
                                </li>
                                <li className="dropdown-nav"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report">Reports</a>
                                    <ul className="erp-nav-dropdown">
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=age-profile">Age
                                            Profile</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=salary-history">Salary
                                            History</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=gender-profile">Gender
                                            Profile</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=years-of-service">Years
                                            of Service</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=headcount">Head
                                            Count</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=report&amp;sub-section=report&amp;type=leaves">Leave
                                            Reports</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-nav"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave">Leave
                                    Management</a>
                                    <ul className="erp-nav-dropdown">
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=leave-requests">Requests</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=leave-entitlements">Leave
                                            Entitlements</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=holidays">Holidays</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=policies">Policies</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=leave&amp;sub-section=leave-calendar">Calendar</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-nav"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance">Attendance</a>
                                    <ul className="erp-nav-dropdown">
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/">Attendance</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/shifts">Shifts</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/exim">Export/Import</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=attendance#/assign-shift-bulk">Assign
                                            Bulk Shift</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-nav"><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment">Recruitment</a>
                                    <ul className="erp-nav-dropdown">
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=job-opening">Job
                                            Opening</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=add-opening">Add
                                            Opening</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/edit.php?post_type=erp_hr_questionnaire">Question
                                            Sets</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=jobseeker_list">Candidates</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=add_candidate">Add
                                            candidate</a></li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=todo-calendar">Calendar</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=reports">Reports</a>
                                        </li>
                                        <li className=""><a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=recruitment&amp;sub-section=jobseeker_list_email"></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className=""><a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/admin.php?page=erp-hr&amp;section=help"><span
                                    className="erp-help">Help</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/hrm" component={Overview} exact/>
                    <Route path="/hrm/employees" component={Employees}/>
                    <Route path="/hrm/overview" component={Overview}/>
                </Switch>
            </div>
        );
    }
}

export default Hrm;