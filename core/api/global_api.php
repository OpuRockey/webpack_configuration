<?php

namespace Core\Api;

use WP_REST_Controller;
use WP_REST_Server;
use WP_REST_Response;

class Global_Api extends WP_REST_Controller{

    public function __construct () {
        add_action( 'rest_api_init', [ $this, 'register_routes' ] );
    }

    public function register_routes()
    {
        $version = '1';
        $namespace = 'api/v' . $version;
        $base = 'route';
        register_rest_route($namespace, '/' . $base, array(
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => array($this, 'get_items'),
                //'permission_callback' => array($this, 'get_items_permissions_check'),
                'args' => array(),
            ),
            array(
                'methods' => WP_REST_Server::CREATABLE,
                'callback' => array($this, 'create_item'),
                //'permission_callback' => array($this, 'create_item_permissions_check'),
                'args' => $this->get_endpoint_args_for_item_schema(true),
            ),
        ));
    }

    public function get_items( $request ) {
        //http://127.0.0.1/projects/wp_react_erp/wp-json/api/v1/route
        //wp_send_json('Hello');
        return new WP_REST_Response( 'hello', 200 );
    }
}