<?php
use App\Task;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function () {
});

Route::get('/tasks', function () {
    return view('tasks');
});

/*
 * Add new task
 */

Route::post('/task', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'name' => 'required[max:255',
    ]);

    if ($validator->fails()) {
        return redirect('/tasks')
            ->withInput()
            ->withErrors($validator);
    };

    $task = new Task;
    $task->name = $request->name;
    $task->save();

    return redirect('/');
});

/**
 * Delete a task
 */
Route::delete('/task/{task_id}', function (Task $task) {

});

Route::controller('demo', 'Admin\DemoController');