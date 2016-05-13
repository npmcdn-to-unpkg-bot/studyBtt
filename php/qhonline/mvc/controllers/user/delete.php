<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 12-May-16
 * Time: 4:30 PM
 */
$mUser = new Model_User();
$mUser->deleteUser($_GET['id_user']);
redirect("index.php?controller=user&action=list");