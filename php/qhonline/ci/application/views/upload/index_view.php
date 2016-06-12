<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 18-May-16
 * Time: 11:16 AM
 */
$upload = array(
    "name" => "img",
    "size" => 25
);
if (!empty($error)) {
    echo $error;
}
echo form_open_multipart(base_url()."index.php/upload/doupload");
echo "Avatar : ".form_upload($upload);
echo form_submit("ok", "Upload");
echo form_close();