<?php
use App\Task;
use Illuminate\Http\Request;

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
    $tasks = Task::orderBy('created_at', 'asc')->get();
    
    return view('tasks', [
        'tasks' => $tasks
    ]);
});

Route::get('/tasks', 'TaskController@index');
Route::post('/task', 'TaskController@store');
//phải để là {task} thì mới tự get được data
Route::delete('/task/{task}', 'TaskController@destroy');

Route::resource('testcrud', 'TaskController');

Route::get('/task', function () {
    return view('tasks');
});

/*
 * Add new task
 */

//Route::post('/task', function (Request $request) {
//    $validator = Validator::make($request->all(), [
//        'name' => 'required|max:255',
//    ]);
//
//    if ($validator->fails()) {
//        return redirect('/tasks')
//            ->withInput()
//            ->withErrors($validator);
//    };
//
//    $task = new Task;
//    $task->name = $request->name;
//    $task->save();
//
//    return redirect('/');
//});

/**
 * Delete a task
 *
 * phải để là {task} thì mới tự get được data
 */
//Route::delete('/task/{task}', function (Task $task) {
//    $task->delete();
//
//    return redirect('/');
//});

//Route::controller('demo', 'Admin\DemoController');
// Authentication Routes...
Route::auth();

Route::get('/home', 'HomeController@index');
