<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 26-May-16
 * Time: 9:52 PM
 */
class BTT_Library
{
    public function getConfigPagination()
    {
        $config['uri_segment'] = 3;
        $config['first_link'] = false;
        $config['last_link'] = false;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['prev_link'] = '&laquo';
        $config['prev_tag_open'] = '<li class="prev">';
        $config['prev_tag_close'] = '</li>';
        $config['next_link'] = '&raquo';
        $config['next_tag_open'] = '<li>';
        $config['next_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="active"><a href="#">';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        return $config;
    }

    public function MyPagination($configCustom = array())
    {
        $config = $this->getConfigPagination();
        $config = array_merge($config, $configCustom);
        $CI =& get_instance();
        $CI->load->library('pagination', $config);
        return $CI->pagination->create_links();
    }

    public function generateLeftSidebar()
    {
        $CI = &get_instance();
        $controllerRouter = $CI->router->fetch_class();
        $actionRouter = $CI->router->fetch_method();
        foreach ($this->getLeftSidebar() as $key => $controller) {
            if (!isset($controller["url"])) {
                $controller["url"] = "#";
            }
            $active_c = "";
            if ($key == $controllerRouter) {
                $active_c = "active";
            }
            if (isset($controller['action'])) {
                echo "<li class='$active_c treeview'>";
                echo "<a href='" . $controller["url"] . "'>";
                echo "<i class='" . $controller["icon"] . "'></i> <span>" . $controller['label'] . "</span><i class='fa fa-angle-left pull-right'></i>";
                echo "</a>";

                echo '<ul class="treeview-menu">';
                foreach ($controller['action'] as $actionName => $action) {
                    if (!isset($action["url"])) {
                        $action["url"] = "#";
                    }

                    $active_a = "";
                    if ($active_c == "active" && $actionRouter == $actionName) {
                        $active_a = "active";
                    }

                    echo "<li class='$active_a'>";
                    echo "<a href='" . $action['url'] . "'>";
                    echo '<i class="fa fa-circle-o"></i>' . $action['label'];
                    if (isset($action['notice'])) {
                        echo "<small class='" . $action['notice']['class'] . "'>" . $action['notice']['label'] . "</small>";
                    }
                    echo "</a>";
                    echo "</li>";
                }

                echo '</ul>';
                echo "</li>";
            } else {
                echo "<li class='$active_c'>";
                    echo "<a href='" . $controller["url"] . "'>";
                        echo "<i class='".$controller['icon']."'></i> <span>".$controller['label']."</span>";
                        if (isset($controller['notice'])) {
                            echo "<small class='" . $controller['notice']['class'] . "'>" . $controller['notice']['label'] . "</small>";
                        }
                    echo "</a>";
                echo "</li>";
            }

        }
    }

    public function getLeftSidebar()
    {
        return array(
            "user" => array(
                "icon" => "fa fa-user",
                "class" => "treeview",
                "label" => "user",
                "action" => array(
                    "index" => array(
                        "url" => base_url() . "admin/user/index",
                        "label" => "list user",
                        "notice" => array(
                            "class" => "label pull-right bg-green",
                            "label" => "new"
                        ),
                    ),
                    "add" => array(
                        "url" => base_url() . "admin/user/add",
                        "label" => "add user"
                    )
                )
            ),
            "category" => array(
                "icon" => "fa fa-newspaper-o",
                "class" => "treeview",
                "label" => "Category",
                "url" => base_url() . "admin/category/index",
                "notice" => array(
                    "class" => "label pull-right bg-green",
                    "label" => "new"
                ),
            )
        );
    }
}