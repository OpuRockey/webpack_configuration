<?php
/**
 * Plugin Name: WP React Start Up
 * Description: An Open Source React Start up solution
 * Plugin URI: https://example.com
 * Author: weDevs
 * Author URI: https://example.com
 * Version: 1.0.0
 * License: GPL2
 * Text Domain: wp-react
 * Domain Path: /i18n/languages/
 *
 * Copyright (c) 2016 wpReact (email: info@wpreact.com). All rights reserved.
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */

// don't call the file directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


final class WP_React_Sratup {

    public function __construct ( ) {
        $this->actionCaller();
    }

    public function actionCaller ( ) {
        add_action( 'admin_menu', [ $this, 'add_menu_pages' ] );
    }

    public function add_menu_pages ( ) {
        global $submenu;

        add_menu_page( __( 'WP React', 'wp-react' ),  __( 'WP React', 'wp-react' ), 'manage_options', 'wp_react', [ $this, 'wp_react'],'',5 );

        $rootUrl = get_admin_url() . 'admin.php?page=wp_react#/';
        $submenu['wp_react'][] = array( 'Dashboard', 'manage_options', $rootUrl );
        $submenu['wp_react'][] = array( 'About', 'manage_options', $rootUrl . 'about' );
        $submenu['wp_react'][] = array( 'Contact', 'manage_options', $rootUrl . 'contact' );
    }

    public function wp_react ( ) {
        require_once 'public/root/index.php';
    }

    public function wp_react_subpage ( ) {
        echo 'wp react main sub page';
    }
}

new WP_React_Sratup();







