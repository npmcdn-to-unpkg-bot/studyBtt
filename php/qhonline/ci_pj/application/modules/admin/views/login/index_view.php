<html>
<head>
    <meta charset="utf-8">
    <title>Socket IO</title>
    <link rel="stylesheet" href="<?php echo base_url() ?>public/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>public/css/style_login.css">
</head>
<body>
<?php
if (isset($data_form))
    extract($data_form);
?>
<div class="vertical-center ">
    <div class="container">
        <div class="col-md-4 col-md-offset-4 well">
            <h1>Login Administrator</h1>
            <?php if ($this->session->flashdata("flash_error")): ?>
                <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close"><span>&times;</span></button>
                    <strong>Error!</strong> <?php echo $this->session->flashdata("flash_error") ?>
                </div>
            <?php endif; ?>
            <form method="post" id="login">
                <div class="form-group <?php if(form_error('username')) echo 'has-error';?>">
                    <label for="name">Username</label>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input value="<?php echo isset($username) ? $username : ""?>" type="text" class="form-control" placeholder="Username" name="username" id="name">
                    </div>
                    <span class="error"><?php echo form_error('username')?></span>
                </div>
                <div class="form-group <?php if(form_error('password')) echo 'has-error';?>">
                    <label for="room">Password</label>

                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon1"><i
                                class="glyphicon glyphicon-envelope"></i></span>
                        <input value="<?php echo isset($password) ? $password : ""?>" type="password" class="form-control" placeholder="Username" name="password" id="room">
                    </div>
                    <span class="error"><?php echo form_error('password')?></span>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary col-md-12" name="login" value="login">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
</html>