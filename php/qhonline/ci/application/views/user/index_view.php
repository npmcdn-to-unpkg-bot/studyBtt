<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<div class="container">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Level</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($listUser as $id => $user): ?>
            <tr>
                <td><?php echo $user['id'] ?></td>
                <td><?php echo $user['name'] ?></td>
                <td><?php echo $user['level_name'] ?></td>
                <td>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</div>