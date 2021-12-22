<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
<title>登录 – 穆客智能</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">


<link rel="shortcut icon" href="/assets/img/favicon.ico" />

<link href="/assets/css/frontend.min.css" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config: {"site":{"name":"\u7a46\u5ba2\u667a\u80fd","cdnurl":"","version":"1.0.97","timezone":"Asia\/Shanghai","languages":{"backend":"zh-cn","frontend":"zh-cn"}},"upload":{"cdnurl":"","uploadurl":"\/index\/ajax\/upload","bucket":"local","maxsize":"10mb","mimetype":"jpg,png,bmp,jpeg,gif,zip,rar,xls,xlsx,wav,mp4,mp3,pdf","chunking":false,"chunksize":2097152,"savekey":"\/uploads\/{year}{mon}{day}\/{filemd5}{.suffix}","multipart":[],"multiple":false,"storage":"local"},"modulename":"index","controllername":"user","actionname":"login","jsname":"frontend\/user","moduleurl":"\/index","language":"zh-cn","__PUBLIC__":"\/","__ROOT__":"\/","__CDN__":"","third":{"status":[""]}}    };
</script>
        <link href="/assets/css/user.css" rel="stylesheet">
    </head>

    <body>

        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#header-navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">穆客智能</a>
                </div>
                <div class="collapse navbar-collapse" id="header-navbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/">首页</a></li>
                        <li class="dropdown">
                                                        <a href="/index/user/index.html" class="dropdown-toggle" data-toggle="dropdown">会员中心 <b class="caret"></b></a>
                                                        <ul class="dropdown-menu">
                                                                <li><a href="/index/user/login.html"><i class="fa fa-sign-in fa-fw"></i> 登 录</a></li>
                                <li><a href="/index/user/register.html"><i class="fa fa-user-o fa-fw"></i> 注 册</a></li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="content">
            <div id="content-container" class="container">
    <div class="user-section login-section">
        <div class="logon-tab clearfix"><a class="active">登 录</a> <a href="/index/user/register.html?url=">注 册</a></div>
        <div class="login-main">
            <form name="form" id="login-form" class="form-vertical" method="POST" action="">
                <input type="hidden" name="url" value=""/>
                <input type="hidden" name="__token__" value="1c278e9034c0eea36e3ba9d883e25043" />                <div class="form-group">
                    <label class="control-label" for="account">账号</label>
                    <div class="controls">
                        <input class="form-control input-lg" id="account" type="text" name="account" value="" data-rule="required" placeholder="邮箱/手机/用户名" autocomplete="off">
                        <div class="help-block"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label" for="password">密码</label>
                    <div class="controls">
                        <input class="form-control input-lg" id="password" type="password" name="password" data-rule="required;password" placeholder="密码" autocomplete="off">
                    </div>
                </div>
                <div class="form-group">
                    <div class="controls">
                        <div class="checkbox inline">
                            <label>
                                <input type="checkbox" name="keeplogin" checked="checked" value="1"> 保持会话                            </label>
                        </div>
                        <div class="pull-right"><a href="javascript:;" class="btn-forgot">忘记密码?</a></div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">登 录</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/html" id="resetpwdtpl">
    <form id="resetpwd-form" class="form-horizontal form-layer" method="POST" action="/api/user/resetpwd.html">
        <div class="form-body">
            <input type="hidden" name="action" value="resetpwd"/>
            <div class="form-group">
                <label class="control-label col-xs-12 col-sm-3">类型:</label>
                <div class="col-xs-12 col-sm-8">
                    <div class="radio">
                        <label for="type-email"><input id="type-email" checked="checked" name="type" data-send-url="/api/ems/send.html" data-check-url="/api/validate/check_ems_correct.html" type="radio" value="email"> 通过邮箱</label>
                        <label for="type-mobile"><input id="type-mobile" name="type" type="radio" data-send-url="/api/sms/send.html" data-check-url="/api/validate/check_sms_correct.html" value="mobile"> 通过手机重置</label>
                    </div>
                </div>
            </div>
            <div class="form-group" data-type="email">
                <label for="email" class="control-label col-xs-12 col-sm-3">邮箱:</label>
                <div class="col-xs-12 col-sm-8">
                    <input type="text" class="form-control" id="email" name="email" value="" data-rule="required(#type-email:checked);email;remote(/api/validate/check_email_exist.html, event=resetpwd, id=0)" placeholder="">
                    <span class="msg-box"></span>
                </div>
            </div>
            <div class="form-group hide" data-type="mobile">
                <label for="mobile" class="control-label col-xs-12 col-sm-3">手机号:</label>
                <div class="col-xs-12 col-sm-8">
                    <input type="text" class="form-control" id="mobile" name="mobile" value="" data-rule="required(#type-mobile:checked);mobile;remote(/api/validate/check_mobile_exist.html, event=resetpwd, id=0)" placeholder="">
                    <span class="msg-box"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="captcha" class="control-label col-xs-12 col-sm-3">验证码:</label>
                <div class="col-xs-12 col-sm-8">
                    <div class="input-group">
                        <input type="text" name="captcha" class="form-control" data-rule="required;length(4);integer[+];remote(/api/validate/check_ems_correct.html, event=resetpwd, email:#email)"/>
                        <span class="input-group-btn" style="padding:0;border:none;">
                            <a href="javascript:;" class="btn btn-info btn-captcha" data-url="/api/ems/send.html" data-type="email" data-event="resetpwd">发送验证码</a>
                        </span>
                    </div>
                    <span class="msg-box"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="newpassword" class="control-label col-xs-12 col-sm-3">新密码:</label>
                <div class="col-xs-12 col-sm-8">
                    <input type="password" class="form-control" id="newpassword" name="newpassword" value="" data-rule="required;password" placeholder="">
                    <span class="msg-box"></span>
                </div>
            </div>
        </div>
        <div class="form-group form-footer">
            <label class="control-label col-xs-12 col-sm-3"></label>
            <div class="col-xs-12 col-sm-8">
                <button type="submit" class="btn btn-md btn-info">确定</button>
            </div>
        </div>
    </form>
</script>

        </main>

        <footer class="footer" style="clear:both">
            <p class="copyright">Copyright&nbsp;©&nbsp;2017-2020 穆客智能 All Rights Reserved <a href="https://beian.miit.gov.cn" target="_blank"></a></p>
        </footer>

        <script src="/assets/js/require.min.js" data-main="/assets/js/require-frontend.min.js"></script>

    </body>

</html>