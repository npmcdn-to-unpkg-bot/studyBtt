<script src="<?php echo base_url() ?>/public/ckeditor/ckeditor.js"></script>
<?php
if (isset($data_form))
    extract($data_form);
?>
<form class="form-horizontal" method="post">
    <div class="box-body">
        <div class="form-group">
            <textarea name="editor1" id="editor1" rows="10" cols="80">
                This is my textarea to be replaced with CKEditor.
            </textarea>
            <script>
                // Replace the <textarea id="editor1"> with a CKEditor
                // instance, using default configuration.
                CKEDITOR.replace( 'editor1' );
            </script>
        </div>
        <div class="form-group <?php if(form_error('parent')) echo 'has-error';?>">
            <label for="parent" class="col-md-2 control-label">Category Root</label>

            <div class="col-md-9">
                <select class="form-control" name="parent">
                    <option value="0">Root</option>
                    <?php
                    $listCate = Mcategory::getMenuCate($parent, $id);
                    echo $listCate;
                    ?>
                </select>
                <span class="error"><?php echo form_error('status')?></span>
            </div>
        </div>
        <div class="form-group <?php if(form_error('name')) echo 'has-error';?>">
            <label for="name" class="col-md-2 control-label">Category Name <span class="require">*</span></label>
            <div class="col-md-9">
                <input value="<?php echo isset($name) ? $name : ""?>" type="text" class="form-control" name="name" id="name"
                       placeholder="Category Name">
                <span class="error"><?php echo form_error('name')?></span>
            </div>
        </div>
        <div class="form-group <?php if(form_error('status')) echo 'has-error';?>">
            <label for="status" class="col-md-2 control-label">Status</label>

            <div class="col-md-9">
                <select class="form-control" name="status">
                    <?php
                    $listStatus = Mcategory::getStatusCate();
                    foreach ($listStatus as $key => $value) {
                        if (isset($status) && $status == $key)
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