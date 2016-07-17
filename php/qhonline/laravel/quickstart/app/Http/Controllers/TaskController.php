<?php

namespace App\Http\Controllers;

use App\User;
use DB;
use App\Task;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\TaskRepository;


class TaskController extends Controller
{
    /**
     * The task repository instance.
     *
     * @var TaskRepository
     */
    protected $tasks;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TaskRepository $tasks)
    {
        $this->middleware('auth');
        $this->tasks = $tasks;
    }

    /**
     * Display a list of all of the user's task.
     *
     * @param  Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $tasks = $request->user()->tasksBtt()->get();
        foreach ($tasks as $task) {
            echo $task->name . "<br>";
        }

        $testQuery = DB::table('tasks')->select('id', 'name', 'email')->where('id', '>', '1')->get();
        foreach ($testQuery as $query) {
            echo $query->name . " - " . $query->email . "<br>";
        }
//        dd($request->user()->tasksBtt()->find(7)->name);
//        dd($request->user()->tasksBtt()->get()->toArray());
        dd(Task::get()->count());

        return view('tasks.index', [
            'tasks' => $this->tasks->forUser($request->user()),
        ]);
    }

    /**
     * Create a new task.
     *
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255|min:5',
        ]);

        $request->user()->tasks()->create([
            'name' => $request->name,
        ]);

        return redirect('/tasks');
    }

    /**
     * Destroy the given task.
     *
     * @param  Request $request
     * @param  Task $task
     * @return Response
     */
    public function destroy(Request $request, Task $task)
    {

        $task->delete();

        return redirect('/tasks');
    }
}
