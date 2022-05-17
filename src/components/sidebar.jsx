import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar()
{
return(
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="#" style={{pointerEvents: 'none'}}>
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">CRUD Operations </div>
</a>
<hr class="sidebar-divider my-0"/>
<li class="nav-item active">
    <Link class="nav-link" to="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>
<hr class="sidebar-divider"/>
<div class="sidebar-heading">
    Interface
</div>
<li class="nav-item">
    <Link class="nav-link collapsed" to="/user">
        <i class="fas fa-users"></i>
        <span>Users</span>
    </Link>
    </li>
</ul>)
}