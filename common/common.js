
//访问后端：http:ip:端口：服务/controller
/*ip在nginx配置
端口和对应服务，在如下配置 其中/myproduct 配置在 zuul 由zuul分发给各个服务，因此前端访问后端，只访问*/

var ctx = "/eat/zuul"

var ctx="http://localhost:8768";

var app_product = "/myproduct";