<!DOCTYPE html>
<html>
<head>
    <title>Master Layout</title>
</head>
<body>
File template in module/views
<div class="top">Banner</div>
<div class="leftmenu"><?php echo $leftmenu?></div>
<div class="content"><?php $this->load->view($loadPage) ?></div>
<div class="bottom">Bottom</div>
</body>
</html>
