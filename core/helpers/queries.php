<?php
/**
 * All wpdb queries will be generated in here
 */

namespace WP_ERP_REACT\Core\Helpers;

Class Queries {


    public function __construct() {

    }

    public static function make_query ( $type, $table, $input_data ) {
        global $wpdb;

        $table = $wpdb->prefix . $table;

        if ( $type == 'insert' ) {
            return $wpdb->insert( $table, $input_data['data'] );
        }

        if ( $type == 'update' ) {
            return $wpdb->update( $table, $input_data['data'], $input_data['where'] );
        }

        if ( $type == 'delete' ) {
            return $wpdb->delete( $table, $input_data['where'] );
        }

        if ( $type == 'select' || $type == 'raw' ) {
            return $wpdb->get_results( $input_data['sql']( $wpdb ) );
        }

    }
}

