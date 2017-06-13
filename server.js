var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");
// 处理请求格式
var types = {"css":"text/css","gif":"image/gif","htm":"text/html","html":"text/html","ico":"image/x-icon","jpeg":"image/jpeg","jpg":"image/jpg","js": "text/javascript","json": "application/json","pdf": "application/pdf","png": "image/png","svg": "image/svg+xml","swf": "application/x-shockwave-flash","tiff": "image/tiff","txt": "text/plain","wav": "audio/x-wav","wma": "audio/x-ms-wma","wmv": "video/x-ms-wmv","xml": "text/xml"};
http.createServer(function(request,response){
    var pathname=url.parse(request.url).pathname;
    if(pathname=="/favicon.ico") return;
    if(pathname=="/")  pathname="/index.html";
    var ext=path.extname(pathname);
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            response.writeHead(404,{"Content-Type":types[ext.substr(1)]});
            response.write("<h1 style='text-align:center'>404<br/>没有找到资源！</h1>");
        }else{
            response.writeHead(200,{"Content-Type":types[ext.substr(1)]});
            response.write(data);
            response.end();
        };
    });
}).listen(8899);
console.log("启动成功！");