/**
 * Created by rishabhkhanna on 12/10/16.
 */
$(function () {

    $('.additems').hide();

    $('.add').click(function () {
        $('.additems').show(100);
    })

    $('.additems').click(function () {
        this.hide(100);
    })

});
