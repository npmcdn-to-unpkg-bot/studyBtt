<table>
    <tr>
        <td>ID</td>
        <td>Name</td>
    </tr>
    <?php
    foreach ($data as $value) {
        echo "<tr>";
            echo "<td>".$value['id']."</td>";
            echo "<td>".$value['name']."</td>";
            echo "<td><a href='index.php?controller=user&action=edit&id_user=".$value['id']."'>Edit</a></td>";
            echo "<td><a href='index.php?controller=user&action=delete&id_user=".$value['id']."'>Del</a></td>";
        echo "</tr>";
    }
    ?>
</table>