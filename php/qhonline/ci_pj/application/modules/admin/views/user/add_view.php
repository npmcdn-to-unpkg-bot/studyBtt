<?php
if (isset($data_form))
    extract($data_form);
?>
<div class="col-md-12">
    <a href="<?php echo base_url() . 'admin/user'; ?>" class="btn btn-primary">
        <i class="fa fa-arrow-left"></i> Back</a>
    <br><br>
    <!-- Horizontal Form -->
    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title"><?php echo $titlePage ?></h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal" method="post">
            <div class="box-body">
                <div class="form-group <?php if(form_error('username')) echo 'has-error';?>">
                    <label for="username" class="col-md-2 control-label">Username <span class="require">*</span></label>

                    <div class="col-md-9">
                        <input value="<?php echo isset($username) ? $username : ""?>" type="text" class="form-control" name="username" id="username"
                               placeholder="Username">
                        <span class="error"><?php echo form_error('username')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('password')) echo 'has-error';?>">
                    <label for="password" class="col-md-2 control-label">Password <span class="require">*</span></label>

                    <div class="col-md-9">
                        <input value="<?php echo isset($password) ? $password : ""?>" type="password" class="form-control" name="password" id="password"
                               placeholder="Password">
                        <span class="error"><?php echo form_error('password')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('re_password')) echo 'has-error';?>">
                    <label for="re_password" class="col-md-2 control-label">Re-Password <span class="require">*</span></label>

                    <div class="col-md-9">
                        <input value="<?php echo isset($re_password) ? $re_password : ""?>" type="password" class="form-control" name="re_password" id="re_password"
                               placeholder="Re-Password">
                        <span class="error"><?php echo form_error('re_password')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('email')) echo 'has-error';?>">
                    <label for="email" class="col-md-2 control-label">Email</label>

                    <div class="col-md-9">
                        <input value="<?php echo isset($email) ? $email : ""?>" type="text" class="form-control" name="email" id="email"
                               placeholder="Email">
                        <span class="error"><?php echo form_error('email')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('firstname')) echo 'has-error';?>">
                    <label for="firstname" class="col-md-2 control-label">First Name</label>

                    <div class="col-md-9">
                        <input value="<?php echo isset($firstname) ? $firstname : ""?>" type="text" class="form-control" name="firstname" id="firstname"
                               placeholder="Firstname">
                        <span class="error"><?php echo form_error('firstname')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('lastname')) echo 'has-error';?>">
                    <label for="lastname" class="col-md-2 control-label">Last Name</label>

                    <div class="col-md-9">
                        <input value="<?php echo isset($lastname) ? $lastname : ""?>" type="text" class="form-control" name="lastname" id="lastname"
                               placeholder="Last Name">
                        <span class="error"><?php echo form_error('lastname')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('level')) echo 'has-error';?>">
                    <label for="password" class="col-md-2 control-label">Level</label>

                    <div class="col-md-9">
                        <select class="form-control" name="level">
                            <?php
                            $Mlevel = new Mlevel();
                            $listStatus = $Mlevel->getAllLevel();
                            foreach ($listStatus as $key => $value) {
                                if ($level == $value->id)
                                    echo "<option selected value='$value->id'>$value->level_name</option>";
                                else
                                    echo "<option value='$value->id'>$value->level_name</option>";
                            }
                            ?>
                        </select>
                        <span class="error"><?php echo form_error('level')?></span>
                    </div>
                </div>
                <div class="form-group <?php if(form_error('status')) echo 'has-error';?>">
                    <label for="password" class="col-md-2 control-label">Status</label>

                    <div class="col-md-9">
                        <select class="form-control" name="status">
                            <?php
                            $listStatus = Muser::getStatusUser();
                            foreach ($listStatus as $key => $value) {
                                if ($status == $key)
                                    echo "<option selected value='$key'>$value</option>";
                                else
                                    echo "<option value='$key'>$value</option>";
                            }
                            ?>
                        </select>
                        <span class="error"><?php echo form_error('status')?></span>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
                <div class="col-md-offset-2">
                    <button type="submit" value="login" name="add" class="btn btn-danger">Add New</button>
                    <button type="reset" class="btn btn-default">Reset</button>
                </div>
            </div>
            <!-- /.box-footer -->
        </form>
    </div>
    <!-- /.box -->
</div>