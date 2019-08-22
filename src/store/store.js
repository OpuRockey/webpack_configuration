import axios from 'axios';


/*
* WPRC is global Components behaviour variable in here . This is the root object of this plugin.
* It will manage central data and functionality so that data can be manipulated globally through caomponents to components.
* Helper function will also extend this global object.
* */

window.WPRC = {

    /*
    * setComponent function should be called within every components constructor so that instance of the component
    * should be manipulated inside and outside of the components
    * */

    setComponent : function( componentName, instance ) {
        this[componentName] = instance;
    },

    /*
    * Common HTTP request function for global use
    * */

    apiProcessData : function( url, method, data ) {
        if ( method == 'post' ) {
            return axios[method]( url, data );
        }
        return axios[method]( url );
    }
};