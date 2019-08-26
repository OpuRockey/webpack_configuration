<?php
/**
 * All configuration data will be loaded through this
 */

namespace Core\Config;

class Config {

    public function __construct() {
        $this->define_constant();
    }


    /**
     * Define all constant value for whole plugin system
     */

    public function define_constant() {
        define( 'WP_REACT_ERP_BASE_PATH', plugin_dir_path( realpath(dirname( __FILE__ ) . '/..' ) ) );
        define( 'WP_REACT_ERP_BASE_URL', plugin_dir_url( realpath(dirname( __FILE__ ) . '/..' ) ) );
        define( 'WP_REACT_ERP_BASE_FILE', 'index.php' );
        define( 'WP_REACT_ERP_ADMIN_URL', get_admin_url() . 'admin.php?page=wp_react_erp#/' );
    }

}