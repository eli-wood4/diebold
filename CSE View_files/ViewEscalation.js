
$( window ).on( "load",function () {

    $(function () {
        $('[id*=lstTopCustomer]').multiselect({
            includeSelectAllOption: true
        })
    })
    $(function () {
        $('[id*=lstDevice]').multiselect({
            includeSelectAllOption: true
        })
    })
    $(function () {
        $('[id*=lstBranch]').multiselect({
            includeSelectAllOption: true
        })
    });
    $(function () {
        $('[id*=lstOrderPrt]').multiselect({
            includeSelectAllOption: true
        })
    });
    $(function () {
        $('[id*=lstSRType]').multiselect({
            includeSelectAllOption: true
        })
    });
    $(function () {
        $('[id*=lstOrderPrtsrc]').multiselect({
            includeSelectAllOption: true
        })
    });

});