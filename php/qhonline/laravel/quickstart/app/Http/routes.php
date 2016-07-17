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

Route::get('/tasks', ['as' => 'tasks.list', 'uses' => 'TaskController@index']);
Route::post('/task', 'TaskController@store');
//phải để là {task} thì mới tự get được data
Route::delete('/task/{task}', 'TaskController@destroy');

Route::resource(
    'photo',
    'PhotoController',
    [
        'only' => [
            'index',
            'show',
            'create',
            'update'
        ],
        'except' => [
            'create',
            'store'
        ],
        'names' => [
            'create' => 'photo.build'
        ],
        'parameter' => [
            'photo' => 'admin_user'
        ]
    ]
);

Route::post('photo/store', ['as' => 'photo.store', 'uses' => 'PhotoController@store']);

Route::get('/task', function () {
    return view('tasks');
});

/**
 * chỉ định route này phải chạy qua middleware auth trong file kernel
 * đăng kí những middleware trong file kernel
 *
 * Nếu không định nghĩa namespace ở group, thì ở route bên trong phải chỉ định rõ : AdminBtt\AdminController@index
 */
Route::group(['prefix' => 'admin', 'namespace' => 'AdminBtt', 'middleware' => 'agebtt'], function () {
    Route::get('/', ['as' => 'admin.list', 'uses' => 'AdminController@index']);
});

Route::auth();

Route::get('/home', 'HomeController@index');
