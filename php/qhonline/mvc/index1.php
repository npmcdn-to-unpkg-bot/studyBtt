xcvxcv
<?php 
require('library/database.php');
require('library/function.php');
if (isset($_GET['controller'])) {
    switch ($_GET['controller']) {
        case "user":
            require("controllers/user/controller.php");
            break;
    }
}
?>