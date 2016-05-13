<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 12-May-16
 * Time: 2:26 PM
 */

if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case "list":
            require("list.php");
            break;
        case "delete":
            require("delete.php");
            break;
    }
}