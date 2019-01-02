console.log('Inside Hugis');

//IIFE - Immediately invoke function expression
(function(global){

    var Hugis = function( type, color, size ) {

        return new Hugis.init( type, color, size );
    }

    Hugis.prototype = {

        setType: function( newType ) {
            this.type = newType;

            return this;
        },

        setColor: function( newColor ) {
            this.color = newColor;

            return this;
        },

        setSize: function ( newSize ) {
            this.size = newSize;

            return this;
        }
    }

    Hugis.init = function( type, color, size ) {
        self = this;

        self.type = type || '';
        self.color = color || 'black';
        self.size = size || 20;
    }

    Hugis.init.prototype = Hugis.prototype;

    //allow creating Hugis Object
    global.Hugis = Hugis;

}(window));