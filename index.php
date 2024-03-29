<?php
/**
 * Plugin Name: WP React ERP
 * Description: An Open Source React ERP solution
 * Plugin URI: https://example.com
 * Author: weDevs
 * Author URI: https://example.com
 * Version: 1.0.0
 * License: GPL2
 * Text Domain: wp-erp
 * Domain Path: /i18n/languages/
 *
 * Copyright (c) 2016 wpReactERP (email: info@wpreact.com). All rights reserved.
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

final class WP_React_ERP {

    public function __construct ( ) {
        require_once 'erp.config.php';
    }
}

new WP_React_ERP();







