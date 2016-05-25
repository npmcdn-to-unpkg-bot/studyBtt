<div class="col-md-12">
    <div class="row">
        <div class="col-xs-12">
            <a href="<?php echo base_url() . 'admin/user/add'; ?>" class="btn btn-primary">
                <i class="fa fa-user-plus"></i> Add new user</a>
            <br><br>

            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">List User</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    <table class="table table-hover table-bordered">
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Fullname</th>
                            <th>Level</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                        <?php foreach ($listUser as $key => $user): ?>
                            <tr>
                                <td><?php echo $key + 1 ?></td>
                                <td><?php echo $user['id'] ?></td>
                                <td><?php echo $user['username'] ?></td>
                                <td><?php echo $user['fullname'] ?></td>
                                <td><?php echo $user['level_name'] ?></td>
                                <td><?php echo $user['created_at'] ?></td>
                                <td>
                                    <a href="<?php echo base_url() ?>admin/user/edit/$user['id']">
                                        <i class="fa fa-pencil-square-o"></i>
                                    </a>
                                    <a href="<?php echo base_url() ?>admin/user/delete/$user['id']">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">
                    <ul class="pagination pagination-sm no-margin pull-right">
                        <?php echo $pageLink ?>
                    </ul>
                </div>
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>
</div>