<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<div class="container">
    <?php
        if (isset($login) ) {
            echo '<div class="alert alert-success" role="alert">'.$login.'</div>';
        }
        echo "Welcom back $user <a href='".base_url()."/index.php/admin/login/logout'>Logout</a>";
    ?>
</div>