<div class="col-md-12">
    <a href="<?php echo base_url() . 'admin/news'; ?>" class="btn btn-primary">
        <i class="fa fa-arrow-left"></i> Back</a>
    <br><br>
    <!-- Horizontal Form -->
    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title"><?php echo $titlePage ?></h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <?php $this->load->view("_form"); ?>
    </div>
    <!-- /.box -->
</div>