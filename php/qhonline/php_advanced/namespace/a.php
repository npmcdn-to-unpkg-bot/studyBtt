<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 11-Jul-16
 * Time: 9:25 PM
 *
 * Namespace : định danh không gian chung
 * Sẽ phủ/bảo vệ code ở dưới
 * Để phòng trường hợp trùng tên class
 * Thường được sử dụng cho 3 đối tượng : class, hằng, hàm
 */
namespace My\Application\Truongbt;
//Cách 2 : dùng use
use My\Application\QhOnline as q;

require "c.php";
const red = "đỏ";
class ABC
{
    const blue = "xanh";

    public function __construct()
    {
        echo "Hello ABC";
    }
}

/**
 * vì đang ở trong namespace của My\Application\Truongbt thì nó hiểu qhonline\BCD là của namespace Truongbt
 * $a = new qhonline\BCD;
 * để dùng được namespace.
 * Cách 1 : dùng 1 dấu \ trước qhonline. Sẽ coi nó là 1 namespace độc lập, thoát khỏi sự khống chế của Truongbt
 * $a = new \q\BCD;
*/
$a = new q\BCD;
echo $a->demo()."<br>";
//Để lấy namespace đang sử dụng
echo __NAMESPACE__;