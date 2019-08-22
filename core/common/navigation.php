<?php
/**
 * All necessary navigation items will be registered and distributed thorugh this class
 */

namespace WP_ERP_REACT\Core\Common;


class Navigation {

    public function __construct( ) {
        $this->actionCaller();
    }

    public function actionCaller ( ) {
        add_action( 'admin_menu', [ $this, 'add_menu_pages' ] );
    }

    public function add_menu_pages ( ) {
        global $submenu;

        add_menu_page( __( 'WP React ERP', 'wp-react' ),  __( 'WP React ERP', 'wp-react' ), 'manage_options', 'wp_react_erp', [ $this, 'wp_react_erp'],'',5 );

        $rootUrl = WP_REACT_ERP_ADMIN_URL;
        $submenu['wp_react_erp'][] = array( 'Dashboard', 'manage_options', $rootUrl );
        $submenu['wp_react_erp'][] = array( 'HR', 'manage_options', $rootUrl . 'hrm' );
        $submenu['wp_react_erp'][] = array( 'CRM', 'manage_options', $rootUrl . 'crm' );
        $submenu['wp_react_erp'][] = array( 'Accounting', 'manage_options', $rootUrl . 'accounting' );
        $submenu['wp_react_erp'][] = array( 'Company', 'manage_options', $rootUrl . 'company' );
        $submenu['wp_react_erp'][] = array( 'Tools', 'manage_options', $rootUrl . 'tools' );
        $submenu['wp_react_erp'][] = array( 'Modules', 'manage_options', $rootUrl . 'modules' );
        $submenu['wp_react_erp'][] = array( 'Add-Ons', 'manage_options', $rootUrl . 'add_ons' );
        $submenu['wp_react_erp'][] = array( 'Settings', 'manage_options', $rootUrl . 'settings' );


        $submenu['wp_react_erp'][] = array( 'About', 'manage_options', $rootUrl . 'about' );
        $submenu['wp_react_erp'][] = array( 'Contact', 'manage_options', $rootUrl . 'contact' );
    }

    public function wp_react_erp ( ) {
        require_once WP_REACT_ERP_BASE_PATH . 'public/root/index.php';
    }

}

new Navigation();