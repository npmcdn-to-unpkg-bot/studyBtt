<div class="col-md-12">
    <!-- Horizontal Form -->
    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title"><?php echo $titlePage ?></h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal" method="post">
            <div class="box-body">
                <div class="form-group">
                    <label for="username" class="col-md-2 control-label">Username</label>

                    <div class="col-md-9">
                        <input type="text" class="form-control" name="username" id="username" placeholder="Username">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-md-2 control-label">Password</label>

                    <div class="col-md-9">
                        <input type="password" class="form-control" name="password" id="password"
                               placeholder="Password">
                    </div>
                </div>
                <div class="form-group">
                    <label for="re-password" class="col-md-2 control-label">Re-Password</label>

                    <div class="col-md-9">
                        <input type="password" class="form-control" name="re-password" id="re-password"
                               placeholder="Re-Password">
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="col-md-2 control-label">Email</label>

                    <div class="col-md-9">
                        <input type="text" class="form-control" name="email" id="email"
                               placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="firstname" class="col-md-2 control-label">First Name</label>

                    <div class="col-md-9">
                        <input type="text" class="form-control" name="firstname" id="firstname"
                               placeholder="Firstname">
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-md-2 control-label">Last Name</label>

                    <div class="col-md-9">
                        <input type="text" class="form-control" name="lastname" id="lastname"
                               placeholder="Last Name">
                    </div>
                </div>
<!--                <div class="form-group">-->
<!--                    <label for="password" class="col-md-2 control-label">Level</label>-->
<!---->
<!--                    <div class="col-md-9">-->
<!--                        <select class="form-control">-->
<!--                            --><?php
//                            $level = new Mlevel();
//                            $listStatus = $level->getAllLevel();
//                            foreach ($listStatus as $key => $value) {
//                                echo "<option value='$value->id'>$value->level_name</option>";
//                            }
//                            ?>
<!--                        </select>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label for="password" class="col-md-2 control-label">Status</label>-->
<!---->
<!--                    <div class="col-md-9">-->
<!--                        <select class="form-control">-->
<!--                            --><?php
//                            $listStatus = Muser::getStatusUser();
//                            foreach ($listStatus as $key => $value) {
//                                echo "<option value='$key'>$value</option>";
//                            }
//                            ?>
<!--                        </select>-->
<!--                    </div>-->
<!--                </div>-->
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