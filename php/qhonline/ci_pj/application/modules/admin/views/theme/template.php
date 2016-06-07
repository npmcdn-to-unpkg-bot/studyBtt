<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $titlePage?></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="<?php echo base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <!--    <link rel="stylesheet" href="--><?php //echo base_url()?><!--public/bootstrap/css/font-awesome.min.css">-->
    <link rel="stylesheet" href="<?php echo base_url() ?>public/css/font-awesome.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo base_url() ?>public/dist/css/AdminLTE.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="<?php echo base_url() ?>public/dist/css/skins/_all-skins.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="<?php echo base_url() ?>/public/js/jquery-1.12.2.min.js"></script>
<!--    nên định nghĩa base url cho js-->
    <script>
        var baseUrl = "<?php echo base_url()?>";
    </script>
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

    <?php $this->load->view("header") ?>
    <!-- Left side column. contains the logo and sidebar -->
    <?php $this->load->view("left-sidebar"); ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Dashboard
                <small>Version 2.0</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Dashboard</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- Main row -->
            <div class="row">
                <?php if ($this->session->flashdata("flash_error")): ?>
                    <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Error!</strong> <?php echo $this->session->flashdata("flash_error") ?>
                    </div>
                <?php endif; ?>
                <?php if ($this->session->flashdata("flash_success")): ?>
                    <div class="alert alert-success alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Success!</strong> <?php echo $this->session->flashdata("flash_success") ?>
                    </div>
                <?php endif; ?>
                <?php $this->load->view($loadPage); ?>
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <?php $this->load->view("footer"); ?>

    <!-- Control Sidebar -->
    <?php $this->load->view("setting_theme") ?>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>

</div>
<!-- ./wrapper -->

<!-- Bootstrap 3.3.6 -->
<script src="<?php echo base_url() ?>/public/bootstrap/js/bootstrap.min.js"></script>
<!-- AdminLTE App -->
<script src="<?php echo base_url() ?>/public/dist/js/app.js"></script>
<!-- Sparkline -->
</body>
</html>
