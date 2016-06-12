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
                            <th>Status</th>
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
                                <td><?php echo Muser::getStatusUser($user['status']) ?></td>
                                <td><?php echo $user['created_at'] ?></td>
                                <td>
                                    <a href="<?php echo base_url() . 'admin/user/edit/' . $user['id'] ?>">
                                        <i class="fa fa-pencil-square-o"></i>
                                    </a>
                                    <a class="delete" id="delete<?php echo $user['id']?>"
                                       data-username="<?php echo $user['fullname']?>"
                                       data-toggle="modal" data-target="#myModal"
                                       data-href="<?php echo base_url() . 'admin/user/delete/' . $user['id'] ?>">
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
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">×</span></button>
                <h4 class="modal-title">Confirm Delete?</h4></div>
            <div class="modal-body"><p></p></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <a href="" class="btn btn-danger" id="confirm_delete">Confirm</a>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $("#myModal").on("show.bs.modal", function(e){
            $("#myModal").find(".modal-body").html("Are you sure want to delete <b>"+$(e.relatedTarget).attr('data-username')+"</b>");
            $("#confirm_delete").attr('href', $(e.relatedTarget).attr('data-href'));
        });
    });
</script>