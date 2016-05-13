<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 12-May-16
 * Time: 2:36 PM
 */

$mUser = new Model_User();
$listUser = $mUser->listAll();
loadview("user/list", $listUser);