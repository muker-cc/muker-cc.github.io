<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
<title>注册 – 穆客智能</title>
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
        config: {"site":{"name":"\u7a46\u5ba2\u667a\u80fd","cdnurl":"","version":"1.0.97","timezone":"Asia\/Shanghai","languages":{"backend":"zh-cn","frontend":"zh-cn"}},"upload":{"cdnurl":"","uploadurl":"\/index\/ajax\/upload","bucket":"local","maxsize":"10mb","mimetype":"jpg,png,bmp,jpeg,gif,zip,rar,xls,xlsx,wav,mp4,mp3,pdf","chunking":false,"chunksize":2097152,"savekey":"\/uploads\/{year}{mon}{day}\/{filemd5}{.suffix}","multipart":[],"multiple":false,"storage":"local"},"modulename":"index","controllername":"user","actionname":"register","jsname":"frontend\/user","moduleurl":"\/index","language":"zh-cn","__PUBLIC__":"\/","__ROOT__":"\/","__CDN__":"","length(4)":"length(4)","third":{"status":[""]}}    };
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
        <div class="logon-tab clearfix"> <a href="/index/user/login.html?url=">登 录</a> <a class="active">注 册</a> </div>
        <div class="login-main"> 
            <form name="form1" id="register-form" class="form-vertical" method="POST" action="">
                <input type="hidden" name="invite_user_id" value="0" />
                <input type="hidden" name="url" value="" />
                <input type="hidden" name="__token__" value="352f76415ebe3b98699fa6f8a0540285" />                <div class="form-group">
                    <label class="control-label required">邮箱<span class="text-success"></span></label>
                    <div class="controls">
                        <input type="text" name="email" id="email" data-rule="required;email" class="form-control input-lg" placeholder="邮箱">
                        <p class="help-block"></p>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">用户名</label>
                    <div class="controls">
                        <input type="text" id="username" name="username" data-rule="required;username" class="form-control input-lg" placeholder="用户名必须3-30个字符">
                        <p class="help-block"></p>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">密码</label>
                    <div class="controls">
                        <input type="password" id="password" name="password" data-rule="required;password" class="form-control input-lg" placeholder="密码必须6-30个字符">
                        <p class="help-block"></p>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">手机号</label>
                    <div class="controls">
                        <input type="text" id="mobile" name="mobile" data-rule="required;mobile" class="form-control input-lg" placeholder="手机号">
                        <p class="help-block"></p>
                    </div>
                </div>

                                <div class="form-group">
                    <label class="control-label">验证码</label>
                    <div class="controls">
                        <div class="input-group">
                            <!--@formatter:off-->
    <input type="text" name="captcha" class="form-control input-lg" data-rule="required;length(4)" />
    <span class="input-group-btn" style="padding:0;border:none;">
        <img src="/captcha.html" width="100" height="40" onclick="this.src = '/captcha.html?r=' + Math.random();"/>
    </span>
<!--@formatter:on-->
                        </div>
                        <p class="help-block"></p>
                    </div>
                </div>
                
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">注 册</button>
                </div>
            </form>
        </div>
    </div>
</div>
        </main>

        <footer class="footer" style="clear:both">
            <p class="copyright">Copyright&nbsp;©&nbsp;2017-2020 穆客智能 All Rights Reserved <a href="https://beian.miit.gov.cn" target="_blank"></a></p>
        </footer>

        <script src="/assets/js/require.min.js" data-main="/assets/js/require-frontend.min.js"></script>

    </body>

</html>
