<html>
<head>
    <meta charset="utf-8">
    <title>Login Admin</title>
    <link rel="stylesheet" href="<?php echo base_url() ?>public/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>public/css/style_login.css">
</head>
<body>
<div class="vertical-center ">
    <div class="container">
        <div class="col-md-4 col-md-offset-4 well">
            <h1>Login Admin</h1>

            <form action="chat.html" id="login">
                <div class="form-group">
                    <label for="name">Username</label>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input type="text" class="form-control" placeholder="Username" name="name" id="name">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input type="text" class="form-control" placeholder="Password" name="password" id="password">
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary col-md-12">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
</html>