<div class="col-md-12">
    <div class="row">
        <div class="col-xs-12">
            <a href="<?php echo base_url() . 'admin/category/add'; ?>" class="btn btn-primary">
                <i class="fa fa-user-plus"></i> Add new category</a>
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
                            <th>Category Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <?php foreach ($listCate as $key => $cate): ?>
                            <tr>
                                <td><?php echo $key + 1 ?></td>
                                <td><?php echo $cate['id'] ?></td>
                                <td><?php echo $cate['name'] ?></td>
                                <td><?php echo Mcategory::getStatusCate($cate['status']) ?></td>
                                <td>
                                    <a href="<?php echo base_url() . 'admin/category/edit/' . $cate['id'] ?>">
                                        <i class="fa fa-pencil-square-o"></i>
                                    </a>
                                    <a class="delete" id="delete<?php echo $cate['id']?>"
                                       data-catename="<?php echo $cate['name']?>"
                                       data-toggle="modal" data-target="#myModal"
                                       data-href="<?php echo base_url() . 'admin/category/delete/' . $cate['id'] ?>">
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
            $("#myModal").find(".modal-body").html("Are you sure want to delete <b>"+$(e.relatedTarget).attr('data-catename')+"</b>");
            $("#confirm_delete").attr('href', $(e.relatedTarget).attr('data-href'));
        });
    });
</script>