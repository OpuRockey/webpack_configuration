<?php
/**
 * All configuration data will be loaded through this
 */

class ERP_Config {

    public function __construct() {
        $this->define_constant();
        $this->file_loaders();
    }


    /**
     * Define all constant value for whole plugin system
     */

    public function define_constant() {
        define( 'WP_REACT_ERP_BASE_PATH', plugin_dir_path(__FILE__) );
        define( 'WP_REACT_ERP_BASE_URL', plugin_dir_url(__FILE__) );
        define( 'WP_REACT_ERP_BASE_FILE', 'index.php' );
        define( 'WP_REACT_ERP_ADMIN_URL', get_admin_url() . 'admin.php?page=wp_react_erp#/' );

    }

    /**
     * file_loader method loads all necessary core files through 'loaders' method
     */

    public function file_loaders () {

        $this->loaders([
            'core/helpers/',
            'core/includes/',
            'core/api/',
            'core/common/',
            'core/shortcodes/',
        ]);

    }

    /**
     * loaders method helps to load files directly using require once
     */

    public function loaders( $loaders ) {

        foreach ( $loaders as $ldr ) {

            $ldr_path = glob( WP_REACT_ERP_BASE_PATH . $ldr .'*.*' );

            foreach ( $ldr_path as $ldp ) {
               require_once $ldp;
            }

        }
    }
}

new ERP_Config();