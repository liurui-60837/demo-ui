function test(){
    /*var url =ctx+app_product+"/product/list?token='123'";
    var data = "";
    $.ajax({
        type:"post",
        url:url,
        data:data,
        async: true,
        dataType:"json",
        success:function (data){
            alert(data)
        }
    });*/
    //_initLayuiTable(datagrid);
}


/*var datagrid = {
    queryUrl : ctx+app_product+"/bizVoModelConfig/bizVoModelConfig/list",
    title : 列表,
    toolbarId : 'mytoolbarTpl',
    tableId : 'datatable_orders',
    queryParams : {},
    height:510,
    queryFormId : "queryForm",
    columns : [[
        {type: 'numbers', title: _getI18n("common.serialNumber")},
        {field: 'key', hide:true},
        {field: 'bizVoModelSeq', hide:true},
        {
            field: 'vehicle',
            width:150,
            title: _getI18n("bizVoModelConfig.vehicle")//车名
            ,templet:'#_oneTpl'
        },
        {
            field: 'brand',
            width:150,
            title: _getI18n("bizVoModelConfig.brand")//品牌
        },
        {
            field: 'lastOperator',
            width:150,
            title: _getI18n("bizVoModelConfig.lastOperator")//操作人
        },
    ]]
}*/


layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#datatable_orders'
        ,url:ctx+app_product+"/product/list?token='123'"
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field:'id', width:80, title: 'ID', sort: true}
            ,{field:'productId', width:80, title: '产品id'}
            ,{field:'productName', width:80, title: '产品名称', sort: true}
            ,{field:'productDescription', width:80, title: '产品描述'}
        ]]
    });
});