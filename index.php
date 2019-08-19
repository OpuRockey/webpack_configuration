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
        add_menu_page( __( 'WP React', 'wp-react' ),  __( 'WP React', 'wp-react' ), 'manage_options', 'wp_react', [ $this, 'wp_react'],'',5 );
        add_submenu_page( 'wp_react', __( 'Add Sub page', 'wp-react' ), __( 'Add Sub page', 'wp-react' ), 'manage_options', 'wp_react_subpage', [ $this, 'wp_react_subpage' ] );
    }

    public function wp_react ( ) {
        require_once 'public/root/index.php';
    }

    public function wp_react_subpage ( ) {
        echo 'wp react main sub page';
    }
}

new WP_React_Sratup();







