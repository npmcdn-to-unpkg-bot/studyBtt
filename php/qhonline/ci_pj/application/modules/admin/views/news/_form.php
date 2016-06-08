<script src="<?php echo base_url() ?>/public/ckeditor/ckeditor.js"></script>

<?php
if (isset($data_form))
    extract($data_form);
?>
<form class="form-horizontal" method="post" enctype="multipart/form-data">
    <div class="box-body">
        <div class="form-group <?php if(form_error('category')) echo 'has-error';?>">
            <label for="category" class="col-md-2 control-label">Category </label>
            <div class="col-md-9">
                <select class="form-control" name="category">
                    <option value="0">Root</option>
                    <?php
                    if (!isset($category))
                        $category = "";
                    $listCate = Mcategory::getMenuCate($category);
                    echo $listCate;
                    ?>
                </select>
                <span class="error"><?php echo form_error('status')?></span>
            </div>
        </div>
        <div class="form-group <?php if(form_error('title')) echo 'has-error';?>">
            <label for="title" class="col-md-2 control-label">Title <span class="require">*</span></label>
            <div class="col-md-9">
                <input value="<?php echo isset($title) ? $title : ""?>" type="text" class="form-control" name="title" id="title"
                       placeholder="Title">
                <span class="error"><?php echo form_error('title')?></span>
            </div>
        </div>
        <div class="form-group <?php if(form_error('author')) echo 'has-error';?>">
            <label for="author" class="col-md-2 control-label">Author <span class="require">*</span></label>
            <div class="col-md-9">
                <input value="<?php echo isset($author) ? $author : ""?>" type="text" class="form-control" name="author" id="author"
                       placeholder="Author">
                <span class="error"><?php echo form_error('author')?></span>
            </div>
        </div>
        <div class="form-group <?php if(form_error('shortDes')) echo 'has-error';?>">
            <label for="shortDes" class="col-md-2 control-label">Short Description <span class="require">*</span></label>
            <div class="col-md-9">
                <textarea name="shortDes" id="editor1"><?php echo isset($shortDes) ? $shortDes : ""?></textarea>
                <span class="error"><?php echo form_error('shortDes')?></span>
            </div>
            <script>
                CKEDITOR.replace( 'shortDes' );
            </script>
        </div>
        <div class="form-group <?php if(form_error('content')) echo 'has-error';?>">
            <label for="content" class="col-md-2 control-label">Content <span class="require">*</span></label>
            <div class="col-md-9">
                <textarea name="content" id="editor1"><?php echo isset($content) ? $content : ""?></textarea>
                <span class="error"><?php echo form_error('content')?></span>
            </div>
            <script>
                CKEDITOR.replace( 'content' );
            </script>
        </div>
        <div class="form-group">
            <label for="" class="col-md-2 control-label">Thumbnail</label>
            <div class="col-md-9">
                <input type="file" name="img" id="img" style="padding-top: 7px"/>
                <br>
                <?php
                if (isset($img)) {
                    echo "<img class='img-responsive' src='".base_url().Mnews::FOLDERUPLOAD."/thumb_".$img."'>";
                }
                ?>
            </div>
        </div>
        <div class="form-group <?php if(form_error('status')) echo 'has-error';?>">
            <label for="status" class="col-md-2 control-label">Status</label>

            <div class="col-md-9">
                <select class="form-control" name="status">
                    <?php
                    $listStatus = Mnews::getStatusCate();
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