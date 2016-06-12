<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<style>
    .error {
        color: #a94442;
    }
</style>
<div class="container">
    <?php
    if (!empty($error)) {
        echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
    }
    if (isset($data_form))
        extract($data_form);
    ?>
    <form action="<?php echo base_url().'index.php/admin/login'?>" method="post">
        <div class="form-group <?php if(form_error('username')) echo 'has-error';?>">
            <label for="exampleInputEmail1">Username</label>
            <input name="username" type="text" class="form-control" id="exampleInputEmail1" placeholder="username" value="<?php echo isset($username) ? $username : ""?>">
            <span class="error"><?php echo form_error('username')?></span>
        </div>
        <div class="form-group <?php if(form_error('password')) echo 'has-error';?>">
            <label for="exampleInputPassword1">Password</label>
            <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value="<?php echo isset($password) ? $password: ""?>">
            <span class="error"><?php echo form_error('password')?></span>
        </div>
        <button type="submit" name="ok" value="login" class="btn btn-default">Submit</button>
    </form>
</div>