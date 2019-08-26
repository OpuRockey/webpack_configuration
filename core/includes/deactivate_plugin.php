<?php
/**
 * This class is responsible for activities of plugin deactivation
 */

namespace Core\Includes;

class Deactivate {

    public function __construct(){
        register_activation_hook( WP_REACT_ERP_BASE_PATH . WP_REACT_ERP_BASE_FILE, array( $this, 'deactivation' ) );
    }

    public function deactivation(){

    }
}