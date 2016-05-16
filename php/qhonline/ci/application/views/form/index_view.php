<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 16-May-16
 * Time: 4:58 PM
 */

$form['user'] = array(
    "name" => "fullname",
    "size" => 25,
    "class" => "form-control"
);

$form['pass'] = array(
    "name" => "password",
    "size" => 25,
    "class" => "form-control"
);

$form['gender_male'] = array(
    "name" => "gender",
    "value" => "m",
    "checked" => TRUE
);

$form['gender_female'] = array(
    "name" => "gender",
    "value" => "f",
);

echo validation_errors();

echo "<div class='container'>";
echo form_open(base_url() . "index.php/form/index");
echo "<div class='form-group'>";
echo form_label("Full name") . form_input($form['user']) . "<br>";
echo form_label("Password") . form_input($form['pass']) . "<br>";
echo form_label("Gender", "", array("class" => "radio")) . form_radio($form['gender_male'])."Male" . form_radio($form['gender_female'])."Female";
echo form_submit(array("value" => "Submit"));
echo "</div>";
echo form_close();
echo "</div>";