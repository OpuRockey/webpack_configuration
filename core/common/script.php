<?php
/**
 * All necessary css & js files will be loaded through this
 */

namespace WP_ERP_REACT\Core\Common;

Class Script {

    public function __construct() {
        $this->actionCaller();
    }

    public function actionCaller() {
        add_action( 'admin_enqueue_scripts', array( $this, 'register_plugin_style' ) );
    }


    public function register_plugin_style () {
        wp_register_style( 'wp_react_admin_css', WP_REACT_ERP_BASE_URL . 'assets/css/admin.css' );
        wp_enqueue_style( 'wp_react_admin_css' );
    }
}

new Script();